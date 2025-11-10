import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ApiClient, } from 'adminjs';
import { Box, Button, Icon, Input, Label, Text, } from '@adminjs/design-system';
const PAGE_SIZE = 5;
const sanitizeFolder = (folder) => folder
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .join('/')
    .replace(/\/+/g, '/');
const joinPaths = (...segments) => sanitizeFolder(segments.filter(Boolean).join('/'));
const ROOT_FOLDER = '1900-backoffice/public/media';
const toRelativePath = (absolutePath) => {
    const sanitized = sanitizeFolder(absolutePath || '');
    if (!sanitized || sanitized === ROOT_FOLDER) {
        return '';
    }
    if (sanitized.startsWith(`${ROOT_FOLDER}/`)) {
        return sanitized.slice(ROOT_FOLDER.length + 1);
    }
    return sanitized;
};
const toAbsolutePath = (relativePath) => {
    const sanitizedRelative = sanitizeFolder(relativePath || '');
    if (!sanitizedRelative) {
        return ROOT_FOLDER;
    }
    if (sanitizedRelative.startsWith(ROOT_FOLDER)) {
        return sanitizeFolder(sanitizedRelative);
    }
    return joinPaths(ROOT_FOLDER, sanitizedRelative);
};
const normalizeRecordKey = (key) => {
    if (!key) {
        return '';
    }
    let normalized = key.trim();
    if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
        try {
            const parsed = new URL(normalized);
            normalized = parsed.pathname;
        }
        catch {
            normalized = normalized.replace(/^https?:\/\/[^/]+/, '');
        }
    }
    normalized = normalized.replace(/^\/+/, '');
    return normalized;
};
const ensureRootedKey = (path) => {
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
const extractKeyInfo = (record) => {
    const rawKey = record?.params?.url;
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
const MediaLibraryList = (props) => {
    const { resource, records, action } = props;
    const anyProps = props;
    const translateMessage = anyProps.translateMessage;
    const refresh = anyProps.refresh;
    const addNotice = anyProps.addNotice;
    const paths = anyProps.paths;
    const [currentFolder, setCurrentFolder] = useState(ROOT_FOLDER);
    const [newFolderName, setNewFolderName] = useState('');
    const [dragging, setDragging] = useState(false);
    const [status, setStatus] = useState('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const [loadedRecords, setLoadedRecords] = useState(records || []);
    const [isLoadingRecords, setIsLoadingRecords] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [editingAltId, setEditingAltId] = useState(null);
    const [editingAltValue, setEditingAltValue] = useState('');
    const rootPath = paths?.rootPath ||
        window?.AdminJS?.rootPath ||
        '/admin';
    const uploadEndpoint = `${rootPath}/api/resources/${resource.id}/actions/bulkUpload`;
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
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
    const getRecordTimestamp = useCallback((record) => {
        const rawValue = record?.params?.dataDeCriacao ||
            record?.params?.createdAt ||
            record?.params?.updatedAt;
        const timestamp = rawValue ? new Date(rawValue).getTime() : 0;
        if (!Number.isNaN(timestamp)) {
            return timestamp;
        }
        const createdAt = record?.createdAt;
        const fallback = createdAt ? new Date(createdAt).getTime() : 0;
        return Number.isNaN(fallback) ? 0 : fallback;
    }, []);
    const recordsData = useMemo(() => {
        const items = [];
        recordsSource.forEach((record) => {
            const info = extractKeyInfo(record);
            if (info) {
                items.push({ record, info });
            }
        });
        items.sort((a, b) => getRecordTimestamp(b.record) - getRecordTimestamp(a.record));
        return items;
    }, [recordsSource, getRecordTimestamp]);
    const matchesSearch = useCallback((record, info) => {
        if (!normalizedSearch) {
            return true;
        }
        const alt = (record?.params?.alt || '').toLowerCase();
        const fileName = info.fileName.toLowerCase();
        const relative = info.relativePath.toLowerCase();
        return (alt.includes(normalizedSearch)
            || fileName.includes(normalizedSearch)
            || relative.includes(normalizedSearch));
    }, [normalizedSearch]);
    const allFolders = useMemo(() => {
        const folderSet = new Set();
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
    const { childFolders, filesInCurrent } = useMemo(() => {
        if (!recordsData.length) {
            return { childFolders: [], filesInCurrent: [] };
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
        const folderMap = new Map();
        const files = [];
        recordsData.forEach(({ record, info }) => {
            if (!matchesSearch(record, info)) {
                return;
            }
            if (info.folderAbsolute === sanitizedCurrentFolder) {
                files.push({ record, info });
                return;
            }
            let relativeFromCurrent = null;
            if (!currentRelative) {
                relativeFromCurrent = info.relativePath;
            }
            else if (info.relativePath.startsWith(`${currentRelative}/`)) {
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
            const sortedFiles = [...filesInCurrent].sort((a, b) => getRecordTimestamp(b.record) - getRecordTimestamp(a.record));
            return sortedFiles.map((entry) => ({
                type: 'file',
                record: entry.record,
                info: entry.info,
            }));
        }
        const folderRows = [...childFolders]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((entry) => ({
            type: 'folder',
            name: entry.name,
            fullPath: entry.path,
        }));
        const fileRows = [...filesInCurrent]
            .sort((a, b) => getRecordTimestamp(b.record) - getRecordTimestamp(a.record))
            .map((entry) => ({
            type: 'file',
            record: entry.record,
            info: entry.info,
        }));
        return [...folderRows, ...fileRows];
    }, [childFolders, filesInCurrent, normalizedSearch, getRecordTimestamp]);
    const breadcrumbs = useMemo(() => {
        if (normalizedSearch)
            return [];
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
            let fetchedAll = [];
            while (true) {
                const response = await api.resourceAction({
                    resourceId: resource.id,
                    actionName: 'list',
                    params: {
                        page,
                        perPage,
                    },
                });
                const chunk = response.data?.records || [];
                fetchedAll = fetchedAll.concat(chunk);
                if (chunk.length < perPage) {
                    break;
                }
                page += 1;
            }
            setLoadedRecords(fetchedAll);
            setCurrentPage(1);
            setSelectedIds([]);
        }
        catch (error) {
            console.error('Falha ao carregar registros de mídia', error);
            addNotice?.({
                message: 'Não foi possível carregar a lista de arquivos.',
                type: 'error',
            });
        }
        finally {
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
    const handleUpload = useCallback(async (files) => {
        if (!files || files.length === 0)
            return;
        setStatus('uploading');
        setStatusMessage(`Enviando ${files.length} arquivo(s)...`);
        const pendingFiles = Array.from(files).map((file, index) => ({
            id: `${file.name}-${Date.now()}-${index}`,
            name: file.name,
            status: 'pending',
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
                    addNotice?.(result.notice);
                }
                setUploadedFiles((prev) => prev.map((item) => (item.name === file.name && item.status === 'pending'
                    ? { ...item, status: 'success' }
                    : item)));
            }
            setStatus('success');
            setStatusMessage('Upload concluído com sucesso.');
            await fetchRecords();
            await refresh?.();
        }
        catch (error) {
            console.error(error);
            setStatus('error');
            setStatusMessage('Não foi possível concluir o upload. Tente novamente.');
            setUploadedFiles((prev) => prev.map((item) => (item.status === 'pending' ? { ...item, status: 'error' } : item)));
            addNotice?.({
                message: translateMessage?.('thereWereErrors', resource.id) ||
                    'Erro ao enviar arquivos.',
                type: 'error',
            });
        }
        finally {
            setTimeout(() => {
                setStatus('idle');
                setStatusMessage('');
                setUploadedFiles([]);
            }, 4000);
        }
    }, [currentFolder, uploadEndpoint, csrfToken, addNotice, translateMessage, resource.id, refresh, fetchRecords]);
    const onDrop = useCallback((event) => {
        event.preventDefault();
        setDragging(false);
        handleUpload(event.dataTransfer.files);
    }, [handleUpload]);
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        setDragging(true);
    }, []);
    const onDragLeave = useCallback((event) => {
        event.preventDefault();
        setDragging(false);
    }, []);
    const onFileInputChange = useCallback((event) => {
        if (!event.target.files)
            return;
        handleUpload(event.target.files);
        event.target.value = '';
    }, [handleUpload]);
    const handleFolderSelect = useCallback((value) => {
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
        if (!sanitizedName)
            return;
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
    const handleOpenFolder = useCallback((fullPath) => {
        handleFolderSelect(fullPath);
    }, [handleFolderSelect]);
    const handleBreadcrumbClick = useCallback((path) => {
        handleFolderSelect(path);
    }, [handleFolderSelect]);
    const handleGoToRoot = useCallback(() => {
        handleFolderSelect(ROOT_FOLDER);
    }, [handleFolderSelect]);
    const buildActionHref = useCallback((href) => {
        if (!href)
            return '#';
        if (href.startsWith('http'))
            return href;
        if (rootPath !== '/' && href.startsWith(rootPath))
            return href;
        const normalized = href.startsWith('/') ? href : `/${href}`;
        return `${rootPath}${normalized}`;
    }, [rootPath]);
    const toggleSelectAll = useCallback((checked) => {
        if (checked) {
            setSelectedIds(filesInCurrent.map(({ record }) => record.id));
        }
        else {
            setSelectedIds([]);
        }
    }, [filesInCurrent]);
    const toggleSelect = useCallback((recordId, checked) => {
        setSelectedIds((prev) => {
            if (checked) {
                return Array.from(new Set([...prev, recordId]));
            }
            return prev.filter((id) => id !== recordId);
        });
    }, []);
    const isFileSelected = useCallback((recordId) => selectedIds.includes(recordId), [selectedIds]);
    const handleDeleteRecords = useCallback(async (ids) => {
        if (!ids.length)
            return;
        const confirmed = window.confirm(`Deseja excluir ${ids.length} arquivo(s)?`);
        if (!confirmed)
            return;
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
        }
        catch (error) {
            console.error('Falha ao apagar arquivos', error);
            addNotice?.({
                message: 'Não foi possível remover os arquivos selecionados.',
                type: 'error',
            });
        }
    }, [resource.id, addNotice, fetchRecords, refresh]);
    const handleDeleteRecord = useCallback(async (record) => {
        const confirmed = window.confirm(`Deseja excluir "${record?.params?.url}"?`);
        if (!confirmed)
            return;
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
        }
        catch (error) {
            console.error('Falha ao apagar arquivo', error);
            addNotice?.({
                message: 'Não foi possível remover o arquivo.',
                type: 'error',
            });
        }
    }, [resource.id, addNotice, fetchRecords, refresh]);
    const handleSaveAlt = useCallback(async (recordId) => {
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
        }
        catch (error) {
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
    return (React.createElement(Box, null,
        React.createElement(Box, { mb: "xl", p: "lg", bg: "grey10", borderRadius: 12, border: "1px dashed", borderColor: dragging ? 'primary60' : 'grey40', onDrop: onDrop, onDragOver: onDragOver, onDragLeave: onDragLeave, style: {
                position: 'relative',
                transition: 'border-color 0.2s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '180px',
                gap: '8px',
            } },
            React.createElement("input", { type: "file", multiple: true, onChange: onFileInputChange, style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer',
                }, "aria-label": "Selecionar arquivos" }),
            React.createElement(Icon, { icon: "Add", color: dragging ? 'primary60' : 'grey40', size: 48 }),
            React.createElement(Text, { fontWeight: "bold", mt: "md" }, "Arraste e solte arquivos aqui ou clique para selecionar"),
            React.createElement(Text, { color: "grey60" },
                "Os arquivos ser\u00E3o enviados para:",
                ' ',
                currentFolderDisplay),
            status !== 'idle' && (React.createElement(Text, { mt: "md", color: status === 'error' ? 'danger' : 'success' }, statusMessage)),
            uploadedFiles.length > 0 && (React.createElement(Box, { style: {
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
                } },
                React.createElement(Text, { fontWeight: "bold" }, "Uploads recentes"),
                React.createElement(Box, { as: "ul", style: {
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        maxWidth: '360px',
                        textAlign: 'left',
                    } }, uploadedFiles.map((file) => {
                    const icon = file.status === 'success' ? 'CheckCircle' : file.status === 'error' ? 'AlertCircle' : 'Clock';
                    const color = file.status === 'success' ? 'primary60' : file.status === 'error' ? 'danger' : 'grey60';
                    const label = file.status === 'success'
                        ? 'Arquivo enviado e criado'
                        : file.status === 'error'
                            ? 'Falha ao enviar'
                            : 'Processando...';
                    return (React.createElement("li", { key: file.id, style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '6px',
                        } },
                        React.createElement(Icon, { icon: icon, color: color, size: 16 }),
                        React.createElement(Text, { style: { flexGrow: 1 } }, file.name),
                        React.createElement(Text, { color: color, fontSize: 12 }, label)));
                }))))),
        React.createElement(Box, { mb: "lg", style: {
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            } },
            React.createElement(Box, { mb: "md", style: {
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    padding: '12px 16px',
                } },
                React.createElement(Label, { style: { fontWeight: '600', marginBottom: '8px', display: 'block' } }, "Pasta atual:"),
                React.createElement(Box, { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "xs" },
                    React.createElement(Button, { variant: "text", color: "primary", onClick: handleGoToRoot, size: "sm" }, "Raiz"),
                    breadcrumbs.map((crumb) => (React.createElement(React.Fragment, { key: crumb.path },
                        React.createElement(Text, { color: "grey60" }, "/"),
                        React.createElement(Button, { variant: "text", color: "primary", onClick: () => handleBreadcrumbClick(crumb.path), size: "sm" }, crumb.label)))))),
            React.createElement(Box, { mb: "md", style: {
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    padding: '12px 16px',
                } },
                React.createElement(Label, { htmlFor: "folder-select", style: { fontWeight: '600', marginBottom: '8px', display: 'block' } }, "Pastas existentes"),
                React.createElement("select", { id: "folder-select", value: sanitizeFolder(currentFolder || ROOT_FOLDER), onChange: (event) => handleFolderSelect(event.target.value), style: {
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ced4da',
                        backgroundColor: '#ffffff',
                        fontSize: '14px',
                        cursor: 'pointer',
                    } },
                    React.createElement("option", { value: ROOT_FOLDER }, "/ (raiz)"),
                    allFolders
                        .filter((folder) => folder !== ROOT_FOLDER)
                        .map((folder) => (React.createElement("option", { key: folder, value: folder },
                        "/",
                        toRelativePath(folder)))))),
            React.createElement(Box, { style: {
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    padding: '12px 16px',
                } },
                React.createElement(Label, { htmlFor: "media-search", style: { fontWeight: '600', marginBottom: '8px', display: 'block' } }, "Buscar arquivos"),
                React.createElement(Input, { id: "media-search", value: searchTerm, placeholder: "Filtrar por nome ou alt", onChange: (event) => setSearchTerm(event.target.value), style: {
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ced4da',
                    } })),
            selectedIds.length > 0 && (React.createElement(Box, { display: "flex", gap: "sm" },
                React.createElement(Button, { variant: "contained", color: "danger", onClick: () => handleDeleteRecords(selectedIds) },
                    "Excluir selecionados (",
                    selectedIds.length,
                    ")")))),
        React.createElement(Box, { style: {
                backgroundColor: '#ffffff',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            } },
            React.createElement(Box, { style: {
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    marginBottom: '16px',
                } },
                React.createElement(Text, { fontWeight: "bold", fontSize: 18, style: { margin: 0 } }, "Lista de Arquivos")),
            React.createElement(Box, { as: "table", width: "100%", style: {
                    borderCollapse: 'collapse',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    overflow: 'hidden',
                } },
                React.createElement("thead", null,
                    React.createElement("tr", { style: { backgroundColor: '#f4f6fa', textAlign: 'left' } },
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2', width: '48px' } },
                            React.createElement("input", { type: "checkbox", checked: allFilesSelected, onChange: (event) => {
                                    toggleSelectAll(event.target.checked);
                                }, style: { cursor: 'pointer', width: '16px', height: '16px' } })),
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2', width: '70px' } }, "Pr\u00E9-visualiza\u00E7\u00E3o"),
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2' } }, "Arquivo / Pasta"),
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2', width: '180px' } }, "Pasta"),
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2', width: '200px' } }, "Criado em"),
                        React.createElement("th", { style: { padding: '12px', borderBottom: '1px solid #e5e9f2', width: '240px' } }, "A\u00E7\u00F5es"))),
                React.createElement("tbody", null,
                    paginatedRows.map((row) => {
                        if (row.type === 'folder') {
                            return (React.createElement("tr", { key: `folder-${row.fullPath}`, style: { borderBottom: '1px solid #f0f2f5' } },
                                React.createElement("td", { style: { padding: '12px' } }),
                                React.createElement("td", { style: { padding: '12px' } },
                                    React.createElement(Icon, { icon: "Folder", color: "primary60" })),
                                React.createElement("td", { style: { padding: '12px' } },
                                    React.createElement(Button, { variant: "text", color: "primary", onClick: () => handleOpenFolder(row.fullPath) },
                                        "/",
                                        row.name)),
                                React.createElement("td", { style: { padding: '12px' } },
                                    React.createElement(Text, { color: "grey60" }, "Pasta")),
                                React.createElement("td", { style: { padding: '12px' } },
                                    React.createElement(Text, { color: "grey60" }, "-")),
                                React.createElement("td", { style: { padding: '12px' } },
                                    React.createElement(Box, { display: "flex", gap: "sm" },
                                        React.createElement(Button, { variant: "text", color: "primary", onClick: () => handleOpenFolder(row.fullPath) }, "Abrir")))));
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
                            ? new Date(record.params.dataDeCriacao).toLocaleString()
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
                        return (React.createElement("tr", { key: record.id, style: { borderBottom: '1px solid #f0f2f5' } },
                            React.createElement("td", { style: { padding: '12px' } },
                                React.createElement("input", { type: "checkbox", checked: isSelected, onChange: (event) => {
                                        toggleSelect(record.id, event.target.checked);
                                    }, style: { cursor: 'pointer', width: '16px', height: '16px' } })),
                            React.createElement("td", { style: { padding: '12px' } }, thumbUrl ? (React.createElement("img", { src: thumbUrl, alt: fileName, style: { width: '60px', height: 'auto', borderRadius: '6px', objectFit: 'cover' } })) : (React.createElement(Text, { color: "grey60" }, "-"))),
                            React.createElement("td", { style: { padding: '12px' } }, editingAltId === record.id ? (React.createElement(Box, { display: "flex", alignItems: "center", gap: "sm" },
                                React.createElement(Input, { value: editingAltValue, onChange: (e) => setEditingAltValue(e.target.value), placeholder: "Alt text", style: { flex: 1 } }),
                                React.createElement(Button, { variant: "primary", size: "sm", onClick: () => handleSaveAlt(record.id), style: { backgroundColor: '#10b981', borderColor: '#10b981', padding: '4px 8px' } },
                                    React.createElement(Icon, { icon: "Check" })),
                                React.createElement(Button, { variant: "text", size: "sm", onClick: () => {
                                        setEditingAltId(null);
                                        setEditingAltValue('');
                                    } },
                                    React.createElement(Icon, { icon: "X" })))) : (React.createElement(React.Fragment, null,
                                React.createElement(Text, null, record?.params?.alt || fileName || '-'),
                                displayKey && (React.createElement(Text, { color: "grey60", fontSize: 12 }, displayKey))))),
                            React.createElement("td", { style: { padding: '12px' } }, folderRelative ? (React.createElement(Button, { variant: "text", color: "primary", size: "sm", onClick: () => handleOpenFolder(folderAbsolute) },
                                "/",
                                folderRelative)) : (React.createElement(Text, { color: "grey60" }, "/"))),
                            React.createElement("td", { style: { padding: '12px' } },
                                React.createElement(Text, null, createdAt)),
                            React.createElement("td", { style: { padding: '12px' } },
                                React.createElement(Box, { display: "flex", gap: "sm" },
                                    React.createElement(Button, { variant: "text", color: "primary", size: "sm", onClick: openImage }, "Abrir imagem"),
                                    React.createElement(Button, { variant: "text", color: "primary", size: "sm", onClick: () => {
                                            setEditingAltId(record.id);
                                            setEditingAltValue(record?.params?.alt || '');
                                        } }, "Editar alt"),
                                    deleteAction && (React.createElement(Button, { variant: "text", color: "danger", size: "sm", onClick: () => handleDeleteRecord(record) }, "Excluir"))))));
                    }),
                    paginatedRows.length === 0 && (React.createElement("tr", null,
                        React.createElement("td", { colSpan: 6, style: { padding: '24px', textAlign: 'center', color: '#9aa0a6' } }, isLoadingRecords ? 'Carregando arquivos...' : emptyMessage))))),
            totalRows > 0 && (React.createElement(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "sm", mt: "lg", style: { paddingBottom: '50px' } },
                React.createElement(Text, { color: "grey60" }, `Mostrando ${startIndex}-${endIndex} de ${totalRows}`),
                React.createElement(Box, { display: "flex", gap: "sm", alignItems: "center", flexWrap: "wrap" },
                    React.createElement(Button, { variant: "outlined", color: "primary", size: "sm", disabled: currentPage === 1, onClick: () => setCurrentPage(1), style: { marginRight: '0.5rem' } }, "Primeira"),
                    React.createElement(Button, { variant: "outlined", color: "primary", size: "sm", disabled: currentPage === 1, onClick: () => setCurrentPage((prev) => Math.max(1, prev - 1)), style: { marginRight: '0.5rem' } }, "\u2039 Anterior"),
                    React.createElement(Box, { display: "flex", gap: "xs", alignItems: "center", style: { margin: '0 0.5rem' } }, Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                        if (page === 1 || page === totalPages)
                            return true;
                        if (Math.abs(page - currentPage) <= 2)
                            return true;
                        return false;
                    })
                        .map((page, index, array) => {
                        const prevPage = array[index - 1];
                        const showEllipsis = prevPage && page - prevPage > 1;
                        return (React.createElement(React.Fragment, { key: page },
                            showEllipsis && React.createElement(Text, { color: "grey60", style: { padding: '0 0.5rem' } }, "..."),
                            React.createElement(Button, { variant: currentPage === page ? 'primary' : 'text', size: "sm", onClick: () => setCurrentPage(page), style: {
                                    minWidth: '32px',
                                    fontWeight: currentPage === page ? 'bold' : 'normal',
                                    margin: '0 0.25rem',
                                } }, page)));
                    })),
                    React.createElement(Button, { variant: "outlined", color: "primary", size: "sm", disabled: currentPage === totalPages || totalRows === 0, onClick: () => setCurrentPage((prev) => Math.min(totalPages, prev + 1)), style: { marginLeft: '0.5rem' } }, "Pr\u00F3xima \u203A"),
                    React.createElement(Button, { variant: "outlined", color: "primary", size: "sm", disabled: currentPage === totalPages || totalRows === 0, onClick: () => setCurrentPage(totalPages), style: { marginLeft: '0.5rem' } }, "\u00DAltima")))))));
};
export default MediaLibraryList;
//# sourceMappingURL=media-library-list.js.map