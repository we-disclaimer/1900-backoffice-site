import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActionProps,
  NoticeMessage,
  ApiClient,
  RecordJSON,
} from 'adminjs';
import {
  Box,
  Button,
  Icon,
  Input,
  Label,
  Text,
  CheckBox,
} from '@adminjs/design-system';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

const PAGE_SIZE = 5;

const sanitizeFolder = (folder: string): string => folder
  .split('/')
  .map((part) => part.trim())
  .filter(Boolean)
  .join('/')
  .replace(/\/+/g, '/');

const joinPaths = (...segments: string[]): string => sanitizeFolder(segments.filter(Boolean).join('/'));
const ROOT_FOLDER = '1900-backoffice/public/media';

const toRelativePath = (absolutePath: string): string => {
  const sanitized = sanitizeFolder(absolutePath || '');
  if (!sanitized || sanitized === ROOT_FOLDER) {
    return '';
  }
  if (sanitized.startsWith(`${ROOT_FOLDER}/`)) {
    return sanitized.slice(ROOT_FOLDER.length + 1);
  }
  return sanitized;
};

const toAbsolutePath = (relativePath: string): string => {
  const sanitizedRelative = sanitizeFolder(relativePath || '');
  if (!sanitizedRelative) {
    return ROOT_FOLDER;
  }
  if (sanitizedRelative.startsWith(ROOT_FOLDER)) {
    return sanitizeFolder(sanitizedRelative);
  }
  return joinPaths(ROOT_FOLDER, sanitizedRelative);
};

interface KeyInfo {
  rawKey: string;
  rootedKey: string;
  relativePath: string;
  folderRelative: string;
  folderAbsolute: string;
  fileName: string;
}

const normalizeRecordKey = (key?: string): string => {
  if (!key) {
    return '';
  }

  let normalized = key.trim();

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    try {
      const parsed = new URL(normalized);
      normalized = parsed.pathname;
    } catch {
      normalized = normalized.replace(/^https?:\/\/[^/]+/, '');
    }
  }

  normalized = normalized.replace(/^\/+/, '');

  return normalized;
};

const ensureRootedKey = (path: string): string => {
  let cleaned = sanitizeFolder(path);

  if (cleaned.startsWith(ROOT_FOLDER)) {
    return cleaned;
  }

  if (cleaned.startsWith('media//')) {
    cleaned = cleaned.slice('media//'.length);
    cleaned = cleaned ? `${ROOT_FOLDER}/${cleaned}` : ROOT_FOLDER;
    return sanitizeFolder(cleaned);
  }

  if (cleaned.startsWith('media/')) {
    cleaned = cleaned.slice('media/'.length);
    cleaned = cleaned ? `${ROOT_FOLDER}/${cleaned}` : ROOT_FOLDER;
    return sanitizeFolder(cleaned);
  }

  if (!cleaned.includes('/')) {
    return sanitizeFolder(`${ROOT_FOLDER}/${cleaned}`);
  }

  return sanitizeFolder(`${ROOT_FOLDER}/${cleaned}`);
};

const extractKeyInfo = (record: RecordJSON): KeyInfo | null => {
  const rawKey = record?.params?.url as string | undefined;
  if (!rawKey) {
    return null;
  }

  const normalized = normalizeRecordKey(rawKey);

  if (!normalized) {
    return null;
  }

  const rootedKey = ensureRootedKey(normalized);

  if (!rootedKey.startsWith(ROOT_FOLDER)) {
    return null;
  }

  const relativePath = toRelativePath(rootedKey);
  const folderRelative = relativePath.includes('/')
    ? relativePath.slice(0, relativePath.lastIndexOf('/'))
    : '';
  const folderAbsolute = folderRelative
    ? toAbsolutePath(folderRelative)
    : ROOT_FOLDER;
  const fileName = relativePath.split('/').pop() || relativePath;

  return {
    rawKey,
    rootedKey,
    relativePath,
    folderRelative,
    folderAbsolute,
    fileName,
  };
};

const MediaLibraryList: React.FC<ActionProps> = (props) => {
  const { resource, records, action } = props;

  const anyProps = props as any;
  const translateMessage: ((message: string, resourceId?: string) => string) | undefined = anyProps.translateMessage;
  const refresh: (() => Promise<void>) | undefined = anyProps.refresh;
  const addNotice: ((notice: NoticeMessage) => void) | undefined = anyProps.addNotice;
  const paths = anyProps.paths as { rootPath?: string } | undefined;

  const [currentFolder, setCurrentFolder] = useState<string>(ROOT_FOLDER);
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [dragging, setDragging] = useState<boolean>(false);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [loadedRecords, setLoadedRecords] = useState<RecordJSON[]>(records || []);
  const [isLoadingRecords, setIsLoadingRecords] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ id: string; name: string; status: 'pending' | 'success' | 'error' }>>([]);
  const [editingAltId, setEditingAltId] = useState<string | null>(null);
  const [editingAltValue, setEditingAltValue] = useState('');

  const rootPath =
    paths?.rootPath ||
    ((window as any)?.AdminJS?.rootPath as string | undefined) ||
    '/admin';
  const uploadEndpoint = `${rootPath}/api/resources/${resource.id}/actions/bulkUpload`;

  const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;

  const recordsSource = loadedRecords && loadedRecords.length > 0 ? loadedRecords : records || [];
  const normalizedSearch = searchTerm.trim().toLowerCase();

  useEffect(() => {
    if (records && records.length > 0) {
      setLoadedRecords(records);
    }
  }, [records]);

  useEffect(() => {
    setSelectedIds([]);
  }, [currentFolder, normalizedSearch]);

  const getRecordTimestamp = useCallback((record: RecordJSON) => {
    const rawValue =
      (record?.params?.dataDeCriacao as string | undefined) ||
      (record?.params?.createdAt as string | undefined) ||
      (record?.params?.updatedAt as string | undefined);
    const timestamp = rawValue ? new Date(rawValue).getTime() : 0;
    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }
    const createdAt = (record as any)?.createdAt;
    const fallback = createdAt ? new Date(createdAt).getTime() : 0;
    return Number.isNaN(fallback) ? 0 : fallback;
  }, []);

  const recordsData = useMemo(() => {
    const items: Array<{ record: RecordJSON; info: KeyInfo }> = [];
    recordsSource.forEach((record) => {
      const info = extractKeyInfo(record);
      if (info) {
        items.push({ record, info });
      }
    });
    items.sort((a, b) => getRecordTimestamp(b.record) - getRecordTimestamp(a.record));
    return items;
  }, [recordsSource, getRecordTimestamp]);

  const matchesSearch = useCallback((record: RecordJSON, info: KeyInfo) => {
    if (!normalizedSearch) {
      return true;
    }
    const alt = (record?.params?.alt || '').toLowerCase();
    const fileName = info.fileName.toLowerCase();
    const relative = info.relativePath.toLowerCase();
    return (
      alt.includes(normalizedSearch)
      || fileName.includes(normalizedSearch)
      || relative.includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const allFolders = useMemo(() => {
    const folderSet = new Set<string>();
    folderSet.add(ROOT_FOLDER);

    recordsData.forEach(({ info }) => {
      if (!info.folderRelative) {
        return;
      }
      const parts = info.folderRelative.split('/');
      let accumulator = '';
      parts.forEach((segment) => {
        accumulator = accumulator ? `${accumulator}/${segment}` : segment;
        folderSet.add(toAbsolutePath(accumulator));
      });
    });

    return Array.from(folderSet).sort((a, b) => toRelativePath(a).localeCompare(toRelativePath(b)));
  }, [recordsData]);

  type FolderEntry = { path: string; name: string };
  type FileEntry = { record: RecordJSON; info: KeyInfo };

  const { childFolders, filesInCurrent } = useMemo(() => {
    if (!recordsData.length) {
      return { childFolders: [] as FolderEntry[], filesInCurrent: [] as FileEntry[] };
    }

    const sanitizedCurrentFolder = sanitizeFolder(currentFolder || ROOT_FOLDER) || ROOT_FOLDER;
    const currentRelative = toRelativePath(sanitizedCurrentFolder);

    if (normalizedSearch) {
      const matching = recordsData.filter(({ record, info }) => matchesSearch(record, info));
      return {
        childFolders: [],
        filesInCurrent: matching,
      };
    }

    const folderMap = new Map<string, string>();
    const files: FileEntry[] = [];

    recordsData.forEach(({ record, info }) => {
      if (!matchesSearch(record, info)) {
        return;
      }

      if (info.folderAbsolute === sanitizedCurrentFolder) {
        files.push({ record, info });
        return;
      }

      let relativeFromCurrent: string | null = null;
      if (!currentRelative) {
        relativeFromCurrent = info.relativePath;
      } else if (info.relativePath.startsWith(`${currentRelative}/`)) {
        relativeFromCurrent = info.relativePath.slice(currentRelative.length + 1);
      }

      if (!relativeFromCurrent) {
        return;
      }

      const segments = relativeFromCurrent.split('/');
      if (segments.length === 1) {
        files.push({ record, info });
        return;
      }

      const childName = segments[0];
      const childAbsolute = joinPaths(sanitizedCurrentFolder, childName);
      if (!folderMap.has(childAbsolute)) {
        folderMap.set(childAbsolute, childName);
      }
    });

    const childFolders = Array.from(folderMap.entries())
      .map(([path, name]) => ({ path: sanitizeFolder(path), name }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return {
      childFolders,
      filesInCurrent: files,
    };
  }, [recordsData, currentFolder, normalizedSearch, matchesSearch]);

  const tableRows = useMemo(() => {
    if (normalizedSearch) {
      // Ordenar arquivos por data de criação (mais recente primeiro)
      const sortedFiles = [...filesInCurrent].sort((a, b) => 
        getRecordTimestamp(b.record) - getRecordTimestamp(a.record)
      );
      return sortedFiles.map((entry) => ({
        type: 'file' as const,
        record: entry.record,
        info: entry.info,
      }));
    }

    // Ordenar pastas alfabeticamente
    const folderRows = [...childFolders]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => ({
        type: 'folder' as const,
        name: entry.name,
        fullPath: entry.path,
      }));
    
    // Ordenar arquivos por data de criação (mais recente primeiro)
    const fileRows = [...filesInCurrent]
      .sort((a, b) => getRecordTimestamp(b.record) - getRecordTimestamp(a.record))
      .map((entry) => ({
        type: 'file' as const,
        record: entry.record,
        info: entry.info,
      }));
    
    // Pastas primeiro, depois arquivos
    return [...folderRows, ...fileRows];
  }, [childFolders, filesInCurrent, normalizedSearch, getRecordTimestamp]);

  const breadcrumbs = useMemo(() => {
    if (normalizedSearch) return [];
    const sanitizedCurrentFolder = sanitizeFolder(currentFolder || ROOT_FOLDER) || ROOT_FOLDER;
    const relative = toRelativePath(sanitizedCurrentFolder);
    if (!relative) {
      return [];
    }
    const segments = relative.split('/');
    return segments.map((segment, index) => ({
      label: segment,
      path: toAbsolutePath(segments.slice(0, index + 1).join('/')),
    }));
  }, [currentFolder, normalizedSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentFolder, normalizedSearch]);

  const fetchRecords = useCallback(async () => {
    setIsLoadingRecords(true);
    try {
      const api = new ApiClient();
      const perPage = 500;
      let page = 1;
      let fetchedAll: RecordJSON[] = [];

      while (true) {
        const response = await api.resourceAction({
          resourceId: resource.id,
          actionName: 'list',
          params: {
            page,
            perPage,
          },
        });
        const chunk = (response.data?.records as RecordJSON[]) || [];
        fetchedAll = fetchedAll.concat(chunk);

        if (chunk.length < perPage) {
          break;
        }

        page += 1;
      }

      setLoadedRecords(fetchedAll);
      setCurrentPage(1);
      setSelectedIds([]);
    } catch (error) {
      console.error('Falha ao carregar registros de mídia', error);
      addNotice?.({
        message: 'Não foi possível carregar a lista de arquivos.',
        type: 'error',
      });
    } finally {
      setIsLoadingRecords(false);
    }
  }, [resource.id, addNotice]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  const totalRows = tableRows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return tableRows.slice(start, start + PAGE_SIZE);
  }, [tableRows, currentPage]);

  const startIndex = totalRows === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const endIndex = totalRows === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, totalRows);
  const emptyMessage = normalizedSearch ? 'Nenhum arquivo encontrado para a busca.' : 'Nenhum arquivo nesta pasta.';

  const handleUpload = useCallback(async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    setStatus('uploading');
    setStatusMessage(`Enviando ${files.length} arquivo(s)...`);
    const pendingFiles = Array.from(files).map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      name: file.name,
      status: 'pending' as const,
    }));
    setUploadedFiles(pendingFiles);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        
        formData.append('file', file, file.name);
        formData.append('alt', file.name);
        
        if (csrfToken) {
          formData.append('_csrf', csrfToken);
        }

        const response = await fetch(uploadEndpoint, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Falha ao enviar ${file.name}: ${response.status}`);
        }

        const result = await response.json();
        
        if (result?.notice) {
          addNotice?.(result.notice as NoticeMessage);
        }
        setUploadedFiles((prev) => prev.map((item) => (item.name === file.name && item.status === 'pending'
          ? { ...item, status: 'success' }
          : item)));
      }

      setStatus('success');
      setStatusMessage('Upload concluído com sucesso.');
      await fetchRecords();
      await refresh?.();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage('Não foi possível concluir o upload. Tente novamente.');
      setUploadedFiles((prev) => prev.map((item) => (item.status === 'pending' ? { ...item, status: 'error' } : item)));
      addNotice?.({
        message:
          translateMessage?.('thereWereErrors', resource.id) ||
          'Erro ao enviar arquivos.',
        type: 'error',
      });
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
        setUploadedFiles([]);
      }, 4000);
    }
  }, [currentFolder, uploadEndpoint, csrfToken, addNotice, translateMessage, resource.id, refresh, fetchRecords]);

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    handleUpload(event.dataTransfer.files);
  }, [handleUpload]);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }, []);

  const onDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  }, []);

  const onFileInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    handleUpload(event.target.files);
    event.target.value = '';
  }, [handleUpload]);

  const handleFolderSelect = useCallback((value: string) => {
    const sanitizedValue = sanitizeFolder(value || ROOT_FOLDER);
    const absoluteValue = sanitizedValue.startsWith(ROOT_FOLDER)
      ? sanitizedValue
      : toAbsolutePath(sanitizedValue);
    setCurrentFolder(absoluteValue || ROOT_FOLDER);
    setSearchTerm('');
    setSelectedIds([]);
    setCurrentPage(1);
  }, []);

  const handleCreateFolder = useCallback(() => {
    const sanitizedName = sanitizeFolder(newFolderName);
    if (!sanitizedName) return;
    if (sanitizedName.includes('..')) {
      addNotice?.({
        message: 'Nome de pasta inválido.',
        type: 'error',
      });
      return;
    }

    const baseFolder = sanitizeFolder(currentFolder || ROOT_FOLDER) || ROOT_FOLDER;
    const combined = joinPaths(baseFolder, sanitizedName);

    handleFolderSelect(combined);
    setNewFolderName('');
  }, [currentFolder, newFolderName, handleFolderSelect, addNotice]);

  const handleOpenFolder = useCallback((fullPath: string) => {
    handleFolderSelect(fullPath);
  }, [handleFolderSelect]);

  const handleBreadcrumbClick = useCallback((path: string) => {
    handleFolderSelect(path);
  }, [handleFolderSelect]);

  const handleGoToRoot = useCallback(() => {
    handleFolderSelect(ROOT_FOLDER);
  }, [handleFolderSelect]);

  const buildActionHref = useCallback((href?: string) => {
    if (!href) return '#';
    if (href.startsWith('http')) return href;
    if (rootPath !== '/' && href.startsWith(rootPath)) return href;
    const normalized = href.startsWith('/') ? href : `/${href}`;
    return `${rootPath}${normalized}`;
  }, [rootPath]);

  const toggleSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      setSelectedIds(filesInCurrent.map(({ record }) => record.id));
    } else {
      setSelectedIds([]);
    }
  }, [filesInCurrent]);

  const toggleSelect = useCallback((recordId: string, checked: boolean) => {
    setSelectedIds((prev) => {
      if (checked) {
        return Array.from(new Set([...prev, recordId]));
      }
      return prev.filter((id) => id !== recordId);
    });
  }, []);

  const isFileSelected = useCallback((recordId: string) => selectedIds.includes(recordId), [selectedIds]);

  const handleDeleteRecords = useCallback(async (ids: string[]) => {
    if (!ids.length) return;
    const confirmed = window.confirm(`Deseja excluir ${ids.length} arquivo(s)?`);
    if (!confirmed) return;

    try {
      const api = new ApiClient();
      await api.bulkAction({
        resourceId: resource.id,
        actionName: 'bulkDelete',
        recordIds: ids,
        method: 'POST',
      });
      addNotice?.({
        message: `${ids.length} arquivo(s) removido(s) com sucesso.`,
        type: 'success',
      });
      setSelectedIds([]);
      await fetchRecords();
      await refresh?.();
    } catch (error) {
      console.error('Falha ao apagar arquivos', error);
      addNotice?.({
        message: 'Não foi possível remover os arquivos selecionados.',
        type: 'error',
      });
    }
  }, [resource.id, addNotice, fetchRecords, refresh]);

  const handleDeleteRecord = useCallback(async (record: RecordJSON) => {
    const confirmed = window.confirm(`Deseja excluir "${record?.params?.url}"?`);
    if (!confirmed) return;

    try {
      const api = new ApiClient();
      await api.recordAction({
        resourceId: resource.id,
        recordId: record.id,
        actionName: 'delete',
        method: 'POST',
      });
      addNotice?.({
        message: 'Arquivo removido com sucesso.',
        type: 'success',
      });
      setSelectedIds((prev) => prev.filter((id) => id !== record.id));
      await fetchRecords();
      await refresh?.();
    } catch (error) {
      console.error('Falha ao apagar arquivo', error);
      addNotice?.({
        message: 'Não foi possível remover o arquivo.',
        type: 'error',
      });
    }
  }, [resource.id, addNotice, fetchRecords, refresh]);

  const handleSaveAlt = useCallback(async (recordId: string) => {
    try {
      const api = new ApiClient();
      await api.recordAction({
        resourceId: resource.id,
        recordId,
        actionName: 'edit',
        method: 'POST',
        data: {
          alt: editingAltValue,
        },
      });
      addNotice?.({
        message: 'Alt atualizado com sucesso.',
        type: 'success',
      });
      setEditingAltId(null);
      setEditingAltValue('');
      await fetchRecords();
      await refresh?.();
    } catch (error) {
      console.error('Falha ao atualizar alt', error);
      addNotice?.({
        message: 'Não foi possível atualizar o alt.',
        type: 'error',
      });
    }
  }, [resource.id, editingAltValue, addNotice, fetchRecords, refresh]);

  const allFilesSelected = selectedIds.length > 0
    && selectedIds.length === filesInCurrent.length
    && filesInCurrent.length > 0;

  const currentFolderDisplay = useMemo(() => {
    const sanitizedCurrent = sanitizeFolder(currentFolder || ROOT_FOLDER) || ROOT_FOLDER;
    const relative = toRelativePath(sanitizedCurrent);
    return relative ? `/${relative}` : '/';
  }, [currentFolder]);

  return (
    <Box>
      <Box
        mb="xl"
        p="lg"
        bg="grey10"
        borderRadius={12}
        border="1px dashed"
        borderColor={dragging ? 'primary60' : 'grey40'}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        style={{
          position: 'relative',
          transition: 'border-color 0.2s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '180px',
          gap: '8px',
        }}
      >
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
          aria-label="Selecionar arquivos"
        />
        <Icon icon="Add" color={dragging ? 'primary60' : 'grey40'} size={48} />
        <Text fontWeight="bold" mt="md">
          Arraste e solte arquivos aqui ou clique para selecionar
        </Text>
        <Text color="grey60">
          Os arquivos serão enviados para:
          {' '}
          {currentFolderDisplay}
        </Text>
        {status !== 'idle' && (
          <Text mt="md" color={status === 'error' ? 'danger' : 'success'}>
            {statusMessage}
          </Text>
        )}
        {uploadedFiles.length > 0 && (
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: '24px',
              pointerEvents: 'none',
            }}
          >
            <Text fontWeight="bold">Uploads recentes</Text>
            <Box
              as="ul"
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                width: '100%',
                maxWidth: '360px',
                textAlign: 'left',
              }}
            >
              {uploadedFiles.map((file) => {
                const icon = file.status === 'success' ? 'CheckCircle' : file.status === 'error' ? 'AlertCircle' : 'Clock';
                const color = file.status === 'success' ? 'primary60' : file.status === 'error' ? 'danger' : 'grey60';
                const label = file.status === 'success'
                  ? 'Arquivo enviado e criado'
                  : file.status === 'error'
                    ? 'Falha ao enviar'
                    : 'Processando...';
                return (
                  <li
                    key={file.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <Icon icon={icon} color={color} size={16} />
                    <Text style={{ flexGrow: 1 }}>{file.name}</Text>
                    <Text color={color} fontSize={12}>
                      {label}
                    </Text>
                  </li>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>

      <Box 
        mb="lg" 
        style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {/* Pasta Atual - Card */}
        <Box 
          mb="md"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '12px 16px',
          }}
        >
          <Label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
            Pasta atual:
          </Label>
          <Box display="flex" flexWrap="wrap" alignItems="center" gap="xs">
            <Button
              variant="text"
              color="primary"
              onClick={handleGoToRoot}
              size="sm"
            >
              Raiz
            </Button>
            {breadcrumbs.map((crumb) => (
              <React.Fragment key={crumb.path}>
                <Text color="grey60">/</Text>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleBreadcrumbClick(crumb.path)}
                  size="sm"
                >
                  {crumb.label}
                </Button>
              </React.Fragment>
            ))}
          </Box>
        </Box>

        {/* Pastas Existentes - Card */}
        <Box 
          mb="md"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '12px 16px',
          }}
        >
          <Label htmlFor="folder-select" style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
            Pastas existentes
          </Label>
          <select
            id="folder-select"
            value={sanitizeFolder(currentFolder || ROOT_FOLDER)}
            onChange={(event) => handleFolderSelect(event.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              backgroundColor: '#ffffff',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            <option value={ROOT_FOLDER}>/ (raiz)</option>
            {allFolders
              .filter((folder) => folder !== ROOT_FOLDER)
              .map((folder) => (
                <option key={folder} value={folder}>
                  /
                  {toRelativePath(folder)}
                </option>
              ))}
          </select>
        </Box>

        {/* Buscar Arquivos - Card */}
        <Box
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '12px 16px',
          }}
        >
          <Label htmlFor="media-search" style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
            Buscar arquivos
          </Label>
          <Input
            id="media-search"
            value={searchTerm}
            placeholder="Filtrar por nome ou alt"
            onChange={(event) => setSearchTerm(event.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
            }}
          />
        </Box>

        {selectedIds.length > 0 && (
          <Box display="flex" gap="sm">
            <Button
              variant="contained"
              color="danger"
              onClick={() => handleDeleteRecords(selectedIds)}
            >
              Excluir selecionados ({selectedIds.length})
            </Button>
          </Box>
        )}
      </Box>

      <Box
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Box
          style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '12px 16px',
            marginBottom: '16px',
          }}
        >
          <Text fontWeight="bold" fontSize={18} style={{ margin: 0 }}>
            Lista de Arquivos
          </Text>
        </Box>

        <Box
          as="table"
          width="100%"
          style={{ 
            borderCollapse: 'collapse',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f4f6fa', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2', width: '48px' }}>
                <input
                  type="checkbox"
                  checked={allFilesSelected}
                  onChange={(event) => {
                    toggleSelectAll(event.target.checked);
                  }}
                  style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                />
              </th>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2', width: '70px' }}>Pré-visualização</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2' }}>Arquivo / Pasta</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2', width: '180px' }}>Pasta</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2', width: '200px' }}>Criado em</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #e5e9f2', width: '240px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row) => {
              if (row.type === 'folder') {
                return (
                  <tr key={`folder-${row.fullPath}`} style={{ borderBottom: '1px solid #f0f2f5' }}>
                    <td style={{ padding: '12px' }} />
                    <td style={{ padding: '12px' }}>
                      <Icon icon="Folder" color="primary60" />
                    </td>
                    <td style={{ padding: '12px' }}>
                      <Button
                        variant="text"
                        color="primary"
                        onClick={() => handleOpenFolder(row.fullPath)}
                      >
                        /
                        {row.name}
                      </Button>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <Text color="grey60">Pasta</Text>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <Text color="grey60">-</Text>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <Box display="flex" gap="sm">
                        <Button
                          variant="text"
                          color="primary"
                          onClick={() => handleOpenFolder(row.fullPath)}
                        >
                          Abrir
                        </Button>
                      </Box>
                    </td>
                  </tr>
                );
              }

              const { record, info } = row;
              const thumbKey = info.rawKey;
              const fileName = info.fileName;
              const displayKey = info.rawKey || info.rootedKey;
              const thumbUrl = thumbKey
                ? thumbKey.startsWith('http')
                  ? thumbKey
                  : `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${thumbKey}`
                : undefined;
              const createdAt = record?.params?.dataDeCriacao
                ? new Date(record.params.dataDeCriacao as string).toLocaleString()
                : '';
              const isSelected = isFileSelected(record.id);
              const editAction = record.recordActions?.find((action) => action.name === 'edit');
              const deleteAction = record.recordActions?.find((action) => action.name === 'delete');
              const folderRelative = info.folderRelative;
              const folderAbsolute = info.folderAbsolute;

              const openImage = () => {
                if (!thumbUrl) {
                  addNotice?.({
                    message: 'Nenhum arquivo encontrado para este registro.',
                    type: 'error',
                  });
                  return;
                }
                window.open(thumbUrl, '_blank', 'noopener,noreferrer');
              };

              return (
                <tr key={record.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
                  <td style={{ padding: '12px' }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(event) => {
                        toggleSelect(record.id, event.target.checked);
                      }}
                      style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                  </td>
                  <td style={{ padding: '12px' }}>
                    {thumbUrl ? (
                      <img
                        src={thumbUrl}
                        alt={fileName}
                        style={{ width: '60px', height: 'auto', borderRadius: '6px', objectFit: 'cover' }}
                      />
                    ) : (
                      <Text color="grey60">-</Text>
                    )}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {editingAltId === record.id ? (
                      <Box display="flex" alignItems="center" gap="sm">
                        <Input
                          value={editingAltValue}
                          onChange={(e) => setEditingAltValue(e.target.value)}
                          placeholder="Alt text"
                          style={{ flex: 1 }}
                        />
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleSaveAlt(record.id)}
                          style={{ backgroundColor: '#10b981', borderColor: '#10b981', padding: '4px 8px' }}
                        >
                          <Icon icon="Check" />
                        </Button>
                        <Button
                          variant="text"
                          size="sm"
                          onClick={() => {
                            setEditingAltId(null);
                            setEditingAltValue('');
                          }}
                        >
                          <Icon icon="X" />
                        </Button>
                      </Box>
                    ) : (
                      <>
                        <Text>{record?.params?.alt || fileName || '-'}</Text>
                        {displayKey && (
                          <Text color="grey60" fontSize={12}>
                            {displayKey}
                          </Text>
                        )}
                      </>
                    )}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {folderRelative ? (
                      <Button
                        variant="text"
                        color="primary"
                        size="sm"
                        onClick={() => handleOpenFolder(folderAbsolute)}
                      >
                        /
                        {folderRelative}
                      </Button>
                    ) : (
                      <Text color="grey60">/</Text>
                    )}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <Text>{createdAt}</Text>
                  </td>
                  <td style={{ padding: '12px' }}>
                    <Box display="flex" gap="sm">
                      <Button variant="text" color="primary" size="sm" onClick={openImage}>
                        Abrir imagem
                      </Button>
                      <Button
                        variant="text"
                        color="primary"
                        size="sm"
                        onClick={() => {
                          setEditingAltId(record.id);
                          setEditingAltValue(record?.params?.alt as string || '');
                        }}
                      >
                        Editar alt
                      </Button>
                      {deleteAction && (
                        <Button
                          variant="text"
                          color="danger"
                          size="sm"
                          onClick={() => handleDeleteRecord(record)}
                        >
                          Excluir
                        </Button>
                      )}
                    </Box>
                  </td>
                </tr>
              );
            })}

            {paginatedRows.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '24px', textAlign: 'center', color: '#9aa0a6' }}>
                  {isLoadingRecords ? 'Carregando arquivos...' : emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </Box>
        {totalRows > 0 && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap="sm"
            mt="lg"
            style={{ paddingBottom: '50px' }}
          >
            <Text color="grey60">
              {`Mostrando ${startIndex}-${endIndex} de ${totalRows}`}
            </Text>
            <Box display="flex" gap="sm" alignItems="center" flexWrap="wrap">
              <Button
                variant="outlined"
                color="primary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                style={{ marginRight: '0.5rem' }}
              >
                Primeira
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                style={{ marginRight: '0.5rem' }}
              >
                ‹ Anterior
              </Button>
              
              {/* Números de página */}
              <Box display="flex" gap="xs" alignItems="center" style={{ margin: '0 0.5rem' }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    // Mostrar primeira, última, atual e 2 páginas ao redor da atual
                    if (page === 1 || page === totalPages) return true;
                    if (Math.abs(page - currentPage) <= 2) return true;
                    return false;
                  })
                  .map((page, index, array) => {
                    // Adicionar "..." entre números não consecutivos
                    const prevPage = array[index - 1];
                    const showEllipsis = prevPage && page - prevPage > 1;
                    
                    return (
                      <React.Fragment key={page}>
                        {showEllipsis && <Text color="grey60" style={{ padding: '0 0.5rem' }}>...</Text>}
                        <Button
                          variant={currentPage === page ? 'primary' : 'text'}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          style={{
                            minWidth: '32px',
                            fontWeight: currentPage === page ? 'bold' : 'normal',
                            margin: '0 0.25rem',
                          }}
                        >
                          {page}
                        </Button>
                      </React.Fragment>
                    );
                  })}
              </Box>
              
              <Button
                variant="outlined"
                color="primary"
                size="sm"
                disabled={currentPage === totalPages || totalRows === 0}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                style={{ marginLeft: '0.5rem' }}
              >
                Próxima ›
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="sm"
                disabled={currentPage === totalPages || totalRows === 0}
                onClick={() => setCurrentPage(totalPages)}
                style={{ marginLeft: '0.5rem' }}
              >
                Última
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MediaLibraryList;

