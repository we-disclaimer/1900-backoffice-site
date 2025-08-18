import React, { useState, useEffect, useCallback } from 'react';
import { FormGroup, Label, Button, Input, Box, Text } from '@adminjs/design-system';
const CategoriaSelectReal = (props) => {
    const { property, onChange, record } = props;
    const [categorias, setCategorias] = useState([]);
    const [novaCategoria, setNovaCategoria] = useState('');
    const [selectedCategorias, setSelectedCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchCategorias();
    }, []);
    useEffect(() => {
        if (categorias.length === 0)
            return;
        console.log('🔄 UseEffect - Inicializando categorias selecionadas');
        console.log('🔄 Categorias carregadas:', categorias.length);
        console.log('🔄 Record completo (FULL DUMP):', JSON.stringify(record, null, 2));
        console.log('🔄 Property name:', property.name);
        console.log('    record?.params?.categorias,', record?.params);
        let currentValue = null;
        if (record?.params) {
            const categoriasIndexadas = [];
            let index = 0;
            while (record.params[`categorias.${index}`] !== undefined) {
                categoriasIndexadas.push(record.params[`categorias.${index}`]);
                index++;
            }
            if (categoriasIndexadas.length > 0) {
                currentValue = categoriasIndexadas;
                console.log('🔍 Categorias encontradas como objeto indexado:', categoriasIndexadas);
            }
        }
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
            const processedIds = currentValue.map(item => {
                console.log('🔍 Processando item:', item, typeof item);
                if (typeof item === 'string') {
                    return item;
                }
                else if (typeof item === 'object' && item !== null) {
                    const id = String(item._id || item.id || item);
                    console.log('🔍   → ID extraído do objeto:', id);
                    return id;
                }
                else {
                    return String(item);
                }
            }).filter(id => id && id !== 'null' && id !== 'undefined');
            const uniqueIds = [...new Set(processedIds)];
            console.log('🔍 IDs únicos processados:', uniqueIds);
            console.log('🔍 Categorias disponíveis para matching:', categorias.map(c => ({ id: c._id, nome: c.nome })));
            const matches = uniqueIds.filter(selectedId => categorias.some(cat => cat._id === selectedId));
            console.log('🔍 IDs que fazem match:', matches);
            setSelectedCategorias(uniqueIds);
        }
        else {
            console.log('🔍 Nenhuma categoria selecionada encontrada');
            setSelectedCategorias([]);
        }
    }, [categorias.length]);
    const isEditMode = record?.id || record?.params?.id || (record && Object.keys(record.params || {}).length > 1);
    console.log('🔧 Modo detectado:', isEditMode ? 'EDIÇÃO' : 'CRIAÇÃO');
    console.log('🔧 Record ID:', record?.id);
    console.log('🔧 Record params ID:', record?.params?.id);
    console.log('🔧 Record params keys:', Object.keys(record?.params || {}));
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
                    const categoriasFormatadas = data.records.map((record) => ({
                        _id: String(record.id),
                        nome: record.params.nome,
                        cor: record.params.cor
                    }));
                    setCategorias(categoriasFormatadas);
                }
            }
        }
        catch (error) {
            console.error('Erro ao carregar categorias:', error);
        }
    };
    const handleCreateCategoria = async () => {
        if (!novaCategoria.trim() || loading)
            return;
        setLoading(true);
        try {
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
                const newCategoria = {
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
            }
            else {
                const formData = new FormData();
                formData.append('nome', novaCategoria.trim());
                formData.append('cor', '#0c4a2b');
                const formResponse = await fetch('/admin/api/resources/CategoriaNoticias/actions/new', {
                    method: 'POST',
                    body: formData,
                });
                if (formResponse.ok) {
                    const data = await formResponse.json();
                    const newCategoria = {
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
                }
                else {
                    throw new Error('Erro na criação');
                }
            }
        }
        catch (error) {
            console.error('Erro ao criar categoria:', error);
            alert('❌ Erro ao criar categoria. Vou usar o sistema automático do backend.');
            const newSelected = [...selectedCategorias, novaCategoria.trim()];
            setSelectedCategorias(newSelected);
            if (onChange) {
                onChange(property.name, newSelected);
            }
            setNovaCategoria('');
            alert(`💡 Categoria "${novaCategoria.trim()}" será criada quando você salvar a notícia.`);
        }
        finally {
            setLoading(false);
        }
    };
    const handleCategoriaChange = useCallback((categoriaId, isSelected) => {
        setSelectedCategorias(prevSelected => {
            let newSelected;
            if (isSelected) {
                if (!prevSelected.includes(categoriaId)) {
                    newSelected = [...prevSelected, categoriaId];
                }
                else {
                    newSelected = prevSelected;
                }
            }
            else {
                newSelected = prevSelected.filter(id => id !== categoriaId);
            }
            if (onChange) {
                onChange(property.name, newSelected);
            }
            return newSelected;
        });
    }, [onChange, property.name]);
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null,
            "Categorias ",
            isEditMode ? '(Editando)' : '(Criando)'),
        React.createElement(Box, { mb: "default", p: "default", style: { backgroundColor: '#f8f9fa', borderRadius: '4px' } },
            React.createElement(Text, { variant: "sm", mb: "xs", fontWeight: "bold" }, "Criar Nova Categoria"),
            React.createElement(Box, { display: "flex", gap: "sm" },
                React.createElement(Input, { placeholder: "Nome da nova categoria...", value: novaCategoria, onChange: (e) => setNovaCategoria(e.target.value), onKeyDown: (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleCreateCategoria();
                        }
                    }, style: { flex: 1 } }),
                React.createElement(Button, { variant: "primary", onClick: handleCreateCategoria, disabled: !novaCategoria.trim() || loading }, loading ? 'Criando...' : 'Criar'))),
        React.createElement(Box, null,
            React.createElement(Text, { variant: "sm", mb: "xs" },
                isEditMode ? ' Categorias Disponíveis - Marque/Desmarque' : '📋 Selecionar Categorias',
                " (",
                categorias.length,
                ")"),
            isEditMode && selectedCategorias.length > 0 && (React.createElement(Box, { mb: "sm", p: "sm", style: { backgroundColor: '#e8f5e8', borderRadius: '4px', border: '2px solid #0c4a2b' } },
                React.createElement(Text, { variant: "sm", fontWeight: "bold", color: "success", mb: "xs" },
                    "\u2705 Categorias Atualmente Selecionadas (",
                    selectedCategorias.length,
                    "):"),
                categorias
                    .filter(cat => selectedCategorias.includes(cat._id))
                    .map(categoria => (React.createElement(Box, { key: categoria._id, display: "inline-block", mr: "xs", mb: "xs" },
                    React.createElement(Text, { variant: "sm", style: {
                            backgroundColor: '#0c4a2b',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            display: 'inline-block'
                        } }, categoria.nome)))))),
            React.createElement(Box, { style: { maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px', padding: '8px' } },
                categorias.map(categoria => {
                    const isSelected = selectedCategorias.includes(categoria._id);
                    console.log(`🔍 Checkbox ${categoria.nome} (${categoria._id}): isSelected = ${isSelected}`);
                    console.log(`🔍 selectedCategorias atual:`, selectedCategorias);
                    return (React.createElement(Box, { key: categoria._id, p: "xs", mb: "xs", style: {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            backgroundColor: isSelected ? '#e8f5e8' : 'white',
                            borderRadius: '2px',
                            border: '1px solid #eee'
                        }, onClick: () => handleCategoriaChange(categoria._id, !isSelected) },
                        React.createElement("input", { type: "checkbox", checked: isSelected, onChange: (e) => {
                                e.stopPropagation();
                                handleCategoriaChange(categoria._id, e.target.checked);
                            }, style: { marginRight: '8px' } }),
                        React.createElement(Text, { style: { fontWeight: isSelected ? 'bold' : 'normal' } }, categoria.nome),
                        isSelected && (React.createElement(Text, { variant: "xs", color: "success", ml: "auto" }, "\u2713 Selecionada"))));
                }),
                categorias.length === 0 && (React.createElement(Text, { color: "grey60", variant: "sm" }, "Nenhuma categoria encontrada. Crie a primeira!")))),
        isEditMode ? (selectedCategorias.length > 0 && (React.createElement(Box, { mt: "default", p: "sm", style: { backgroundColor: '#fff3cd', borderRadius: '4px' } },
            React.createElement(Text, { variant: "sm", color: "warning" },
                "\uD83D\uDCDD Modo Edi\u00E7\u00E3o: ",
                selectedCategorias.length,
                " categoria(s) selecionada(s) - Altera\u00E7\u00F5es ser\u00E3o salvas")))) : (selectedCategorias.length > 0 && (React.createElement(Box, { mt: "default" },
            React.createElement(Text, { variant: "sm", color: "success" },
                "\u2705 ",
                selectedCategorias.length,
                " categoria(s) selecionada(s) para a nova not\u00EDcia"))))));
};
export default CategoriaSelectReal;
//# sourceMappingURL=categoria-select-real.js.map