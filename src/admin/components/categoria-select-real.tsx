/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useCallback } from 'react';
import { BasePropertyProps } from 'adminjs';
import { 
  FormGroup, 
  Label, 
  Button, 
  Input,
  Box,
  Text
} from '@adminjs/design-system';

interface Categoria {
  _id: string;
  nome: string;
  cor?: string;
}

const CategoriaSelectReal: React.FC<BasePropertyProps> = (props) => {
  const { property, onChange, record } = props;
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [novaCategoria, setNovaCategoria] = useState('');
  const [selectedCategorias, setSelectedCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Carregar categorias existentes
  useEffect(() => {
    fetchCategorias();
  }, []);

  // Inicializar categorias selecionadas - EXECUTAR APENAS UMA VEZ
  useEffect(() => {
    if (categorias.length === 0) return; // Aguardar categorias carregarem
    
    console.log('🔄 UseEffect - Inicializando categorias selecionadas');
    console.log('🔄 Categorias carregadas:', categorias.length);
    console.log('🔄 Record completo (FULL DUMP):', JSON.stringify(record, null, 2));
    console.log('🔄 Property name:', property.name);

    console.log( '    record?.params?.categorias,' ,  record?.params);    
    // NOVO: Converter objeto indexado do AdminJS para array
    let currentValue = null;
    
    // Verificar se as categorias estão no formato .0, .1, .2 (objeto indexado)
    if (record?.params) {
      const categoriasIndexadas = [];
      let index = 0;
      
      // Buscar todas as chaves que começam com 'categorias.'
      while (record.params[`categorias.${index}`] !== undefined) {
        categoriasIndexadas.push(record.params[`categorias.${index}`]);
        index++;
      }
      
      if (categoriasIndexadas.length > 0) {
        currentValue = categoriasIndexadas;
        console.log('🔍 Categorias encontradas como objeto indexado:', categoriasIndexadas);
      }
    }
    
    // Se não encontrou como objeto indexado, tentar caminhos normais
    if (!currentValue) {
      const caminhos = [
        record?.params?.[property.name],
        record?.[property.name],
        record?.params?.categorias,
        record?.populated?.[property.name],
        record?.populated?.categorias,
      ];
      
      console.log('🔍 Testando caminhos tradicionais:');
      caminhos.forEach((caminho, index) => {
        console.log(`  Caminho ${index}:`, caminho);
      });
      
      currentValue = caminhos.find(caminho => caminho !== undefined && caminho !== null);
    }
    
    console.log('🔍 Valor FINAL ESCOLHIDO:', currentValue);
    console.log('🔍 Tipo do valor:', typeof currentValue, Array.isArray(currentValue));
    
    if (currentValue && Array.isArray(currentValue) && currentValue.length > 0) {
      // Processar IDs primeiro, depois remover duplicatas
      const processedIds = currentValue.map(item => {
        console.log('🔍 Processando item:', item, typeof item);
        
        if (typeof item === 'string') {
          return item;
        } else if (typeof item === 'object' && item !== null) {
          const id = String(item._id || item.id || item);
          console.log('🔍   → ID extraído do objeto:', id);
          return id;
        } else {
          return String(item);
        }
      }).filter(id => id && id !== 'null' && id !== 'undefined');
      
      // Remover duplicatas
      const uniqueIds = [...new Set(processedIds)];
      
      console.log('🔍 IDs únicos processados:', uniqueIds);
      console.log('🔍 Categorias disponíveis para matching:', categorias.map(c => ({ id: c._id, nome: c.nome })));
      
      // Verificar se algum ID bate
      const matches = uniqueIds.filter(selectedId => 
        categorias.some(cat => cat._id === selectedId)
      );
      console.log('🔍 IDs que fazem match:', matches);
      
      setSelectedCategorias(uniqueIds);
    } else {
      console.log('🔍 Nenhuma categoria selecionada encontrada');
      setSelectedCategorias([]);
    }
  }, [categorias.length]); // MUDOU: Só roda quando categorias são carregadas

  // Detectar se está no modo de edição ou criação
  const isEditMode = record?.id || record?.params?.id || (record && Object.keys(record.params || {}).length > 1);
  console.log('🔧 Modo detectado:', isEditMode ? 'EDIÇÃO' : 'CRIAÇÃO');
  console.log('🔧 Record ID:', record?.id);
  console.log('🔧 Record params ID:', record?.params?.id);
  console.log('🔧 Record params keys:', Object.keys(record?.params || {}));

  // Debug quando selectedCategorias muda
  useEffect(() => {
    console.log('🔥 selectedCategorias MUDOU:', selectedCategorias);
    console.log('🔥 Quantidade:', selectedCategorias.length);
  }, [selectedCategorias]);

  const fetchCategorias = async () => {
    try {
      const response = await fetch('/admin/api/resources/CategoriaNoticias/actions/list');
      if (response.ok) {
        const data = await response.json();
        if (data.records) {
          const categoriasFormatadas = data.records.map((record: any) => ({
            _id: String(record.id),
            nome: record.params.nome,
            cor: record.params.cor
          }));
          setCategorias(categoriasFormatadas);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const handleCreateCategoria = async () => {
    if (!novaCategoria.trim() || loading) return;
    
    setLoading(true);
    try {
      // Criar categoria usando fetch direto para a API do AdminJS
      const payload = {
        nome: novaCategoria.trim(),
        cor: '#0c4a2b'
      };

      const response = await fetch('/admin/api/resources/CategoriaNoticias/actions/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        
        const newCategoria: Categoria = {
          _id: String(data.record.id),
          nome: data.record.params.nome,
          cor: data.record.params.cor || '#0c4a2b'
        };
        
        // Adicionar à lista local
        setCategorias(prev => [...prev, newCategoria]);
        
        // Selecionar automaticamente
        const newSelected = [...selectedCategorias, newCategoria._id];
        setSelectedCategorias(newSelected);
        
        // Notificar AdminJS
        if (onChange) {
          onChange(property.name, newSelected);
        }
        
        setNovaCategoria('');
        alert(`✅ Categoria "${newCategoria.nome}" criada!`);
      } else {
        // Tentar com FormData se JSON não funcionar
        const formData = new FormData();
        formData.append('nome', novaCategoria.trim());
        formData.append('cor', '#0c4a2b');

        const formResponse = await fetch('/admin/api/resources/CategoriaNoticias/actions/new', {
          method: 'POST',
          body: formData,
        });

        if (formResponse.ok) {
          const data = await formResponse.json();
          
          const newCategoria: Categoria = {
            _id: String(data.record.id),
            nome: data.record.params.nome,
            cor: data.record.params.cor || '#0c4a2b'
          };
          
          setCategorias(prev => [...prev, newCategoria]);
          const newSelected = [...selectedCategorias, newCategoria._id];
          setSelectedCategorias(newSelected);
          
          if (onChange) {
            onChange(property.name, newSelected);
          }
          
          setNovaCategoria('');
          alert(`✅ Categoria "${newCategoria.nome}" criada!`);
        } else {
          throw new Error('Erro na criação');
        }
      }
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      alert('❌ Erro ao criar categoria. Vou usar o sistema automático do backend.');
      
      // Fallback: usar o sistema que já funciona no backend
      const newSelected = [...selectedCategorias, novaCategoria.trim()];
      setSelectedCategorias(newSelected);
      
      if (onChange) {
        onChange(property.name, newSelected);
      }
      
      setNovaCategoria('');
      alert(`💡 Categoria "${novaCategoria.trim()}" será criada quando você salvar a notícia.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoriaChange = useCallback((categoriaId: string, isSelected: boolean) => {
    setSelectedCategorias(prevSelected => {
      let newSelected;
      if (isSelected) {
        // Verificar se já não está selecionada para evitar duplicatas
        if (!prevSelected.includes(categoriaId)) {
          newSelected = [...prevSelected, categoriaId];
        } else {
          newSelected = prevSelected; // Já está selecionada, não adicionar
        }
      } else {
        newSelected = prevSelected.filter(id => id !== categoriaId);
      }
      
      if (onChange) {
        onChange(property.name, newSelected);
      }
      
      return newSelected;
    });
  }, [onChange, property.name]);

  return (
    <FormGroup>
      <Label>Categorias {isEditMode ? '(Editando)' : '(Criando)'}</Label>
      
      {/* Criar nova categoria */}
      <Box mb="default" p="default" style={{ backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <Text variant="sm" mb="xs" fontWeight="bold">
           Criar Nova Categoria
        </Text>
        <Box display="flex" gap="sm">
          <Input
            placeholder="Nome da nova categoria..."
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleCreateCategoria();
              }
            }}
            style={{ flex: 1 }}
          />
          <Button
            variant="primary"
            onClick={handleCreateCategoria}
            disabled={!novaCategoria.trim() || loading}
          >
            {loading ? 'Criando...' : 'Criar'}
          </Button>
        </Box>
      </Box>

      {/* Lista de categorias - Adaptada para modo de edição */}
      <Box>
        <Text variant="sm" mb="xs">
          {isEditMode ? ' Categorias Disponíveis - Marque/Desmarque' : '📋 Selecionar Categorias'} ({categorias.length})
        </Text>
        
        {/* Mostrar categorias selecionadas primeiro no modo de edição */}
        {isEditMode && selectedCategorias.length > 0 && (
          <Box mb="sm" p="sm" style={{ backgroundColor: '#e8f5e8', borderRadius: '4px', border: '2px solid #0c4a2b' }}>
            <Text variant="sm" fontWeight="bold" color="success" mb="xs">
              ✅ Categorias Atualmente Selecionadas ({selectedCategorias.length}):
            </Text>
            {categorias
              .filter(cat => selectedCategorias.includes(cat._id))
              .map(categoria => (
                <Box key={categoria._id} display="inline-block" mr="xs" mb="xs">
                  <Text variant="sm" style={{ 
                    backgroundColor: '#0c4a2b', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>
                    {categoria.nome}
                  </Text>
                </Box>
              ))
            }
          </Box>
        )}
        
        <Box style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px', padding: '8px' }}>
          {categorias.map(categoria => {
            const isSelected = selectedCategorias.includes(categoria._id);
            console.log(`🔍 Checkbox ${categoria.nome} (${categoria._id}): isSelected = ${isSelected}`);
            console.log(`🔍 selectedCategorias atual:`, selectedCategorias);
            return (
              <Box
                key={categoria._id}
                p="xs"
                mb="xs"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#e8f5e8' : 'white',
                  borderRadius: '2px',
                  border: '1px solid #eee'
                }}
                onClick={() => handleCategoriaChange(categoria._id, !isSelected)}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleCategoriaChange(categoria._id, e.target.checked);
                  }}
                  style={{ marginRight: '8px' }}
                />
                <Text style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
                  {categoria.nome}
                </Text>
                {isSelected && (
                  <Text variant="xs" color="success" ml="auto">
                    ✓ Selecionada
                  </Text>
                )}
              </Box>
            );
          })}
          
          {categorias.length === 0 && (
            <Text color="grey60" variant="sm">
              Nenhuma categoria encontrada. Crie a primeira!
            </Text>
          )}
        </Box>
      </Box>

      {/* Resumo de selecionadas - Diferente para cada modo */}
      {isEditMode ? (
        selectedCategorias.length > 0 && (
          <Box mt="default" p="sm" style={{ backgroundColor: '#fff3cd', borderRadius: '4px' }}>
            <Text variant="sm" color="warning">
              📝 Modo Edição: {selectedCategorias.length} categoria(s) selecionada(s) - Alterações serão salvas
            </Text>
          </Box>
        )
      ) : (
        selectedCategorias.length > 0 && (
          <Box mt="default">
            <Text variant="sm" color="success">
              ✅ {selectedCategorias.length} categoria(s) selecionada(s) para a nova notícia
            </Text>
          </Box>
        )
      )}
    </FormGroup>
  );
};

export default CategoriaSelectReal;
