(function (React, PropTypes, designSystem, reactRouter, adminjs) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React);
  var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  // admin/components/upload-edit.tsx
  const UploadEdit = props => /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
    htmlFor: props.property.name
  }, "Upload"), /*#__PURE__*/React__default.default.createElement("input", {
    id: props.property.name,
    type: "file",
    name: "file"
  }));

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  // admin/components/upload-edit.tsx
  function Thumb(props) {
    const {
      record
    } = props;
    const url = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${record.params.url}`;
    if (!url) {
      return /*#__PURE__*/React__default.default.createElement("span", null, "No image");
    }
    return /*#__PURE__*/React__default.default.createElement("img", {
      src: url,
      alt: record.params.alt || 'Thumbnail',
      style: {
        width: '50px',
        height: 'auto'
      }
    });
  }
  Thumb.propTypes = {
    record: PropTypes__default.default.shape({
      params: PropTypes__default.default.shape({
        url: PropTypes__default.default.string.isRequired,
        alt: PropTypes__default.default.string
      }).isRequired
    }).isRequired
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  function GroupedPrices(props) {
    const {
      record,
      onChange
    } = props;
    const precoUnico = record.params.precoUnico || '';
    const precoMedio = record.params.precoMedio || '';
    const precoGrande = record.params.precoGrande || '';
    const precoIndividual = record.params.precoIndividual || '';
    const handleChange = field => event => {
      onChange(field, event.target.value);
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      width: "100%"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Pre\xE7o \xDAnico"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "number",
      value: precoUnico,
      onChange: handleChange('precoUnico'),
      step: "0.01"
    }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Pre\xE7o M\xE9dio"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "number",
      value: precoMedio,
      onChange: handleChange('precoMedio'),
      step: "0.01"
    }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Pre\xE7o Grande"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "number",
      value: precoGrande,
      onChange: handleChange('precoGrande'),
      step: "0.01"
    }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "25%"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Pre\xE7o Individual"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "number",
      value: precoIndividual,
      onChange: handleChange('precoIndividual'),
      step: "0.01"
    }))));
  }

  /* eslint-disable react/function-component-definition */
  /* eslint-disable linebreak-style */
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const GroupedDisponibilities = ({
    record,
    onChange
  }) => {
    const jantar = record.params.jantar ?? false;
    const delivery = record.params.delivery ?? false;
    const handleChangeJantar = e => {
      onChange('jantar', e.target.checked);
    };
    const handleChangeDelivery = e => {
      onChange('delivery', e.target.checked);
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      fontWeight: "bold",
      mb: "default"
    }, "Tipos de card\xE1pios"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      gap: "lg",
      flexWrap: "wrap",
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      htmlFor: "jantar",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.CheckBox, {
      id: "jantar",
      checked: jantar,
      onChange: handleChangeJantar,
      "aria-label": "Dispon\xEDvel para Jantar",
      style: {
        marginRight: '0.5rem'
      }
    }), ' ', ' ', "Dispon\xEDvel para Jantar")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      htmlFor: "delivery",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.CheckBox, {
      id: "delivery",
      checked: delivery,
      onChange: handleChangeDelivery,
      "aria-label": "Dispon\xEDvel para Delivery",
      style: {
        marginRight: '0.5rem'
      }
    }), ' ', ' ', "Dispon\xEDvel para Delivery"))));
  };

  /* eslint-disable react/function-component-definition */
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const ShowProductImage = ({
    record,
    property
  }) => {
    if (!record || !property) return null;
    const fieldName = property.name; // mediaCapa, mediaPrincipal, etc.
    const mediaKey = `${fieldName}Url`; // bannerUrl, etc.
    const altKey = `${fieldName}Alt`;
    const mediaPath = record.params?.[mediaKey];
    const altText = record.params?.[altKey] || '';

    // Verificar se a URL já é completa ou se precisa ser concatenada
    const fullUrl = mediaPath ? mediaPath.startsWith('http') ? mediaPath : `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}` : null;
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Imagem'), fullUrl ? /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default"
    }, fullUrl.endsWith('.mp4') ? /*#__PURE__*/React__default.default.createElement("video", {
      src: fullUrl,
      style: {
        maxWidth: '100%',
        maxHeight: '300px',
        borderRadius: 8
      },
      controls: true
    }) : /*#__PURE__*/React__default.default.createElement("img", {
      src: fullUrl,
      alt: altText || `Imagem - ${fieldName}`,
      style: {
        maxWidth: '100%',
        maxHeight: '300px',
        borderRadius: 8
      }
    }), altText && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm",
      color: "grey60"
    }, altText)) : /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default",
      color: "grey60"
    }, altText || 'Nenhum arquivo disponível'));
  };

  /* eslint-disable react/function-component-definition */
  /* eslint-disable linebreak-style */
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const FormattedDate = ({
    record,
    property
  }) => {
    const rawValue = record.params[property.path];
    if (!rawValue) return null;
    const date = new Date(rawValue);
    const formatted = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const time = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, formatted, ' ', time);
  };

  function RedirectDashboard() {
    const navigate = reactRouter.useNavigate();
    React.useEffect(() => {
      navigate('/admin/resources/Produtos'); // <- substitua pelo seu resource ID se for diferente
    }, [navigate]);
    return null;
  }

  /* eslint-disable react/function-component-definition */
  /* eslint-disable linebreak-style */
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const SyncPricesAction = props => {
    const {
      notice
    } = props;
    React__default.default.useEffect(() => {
      if (notice && notice.message) {
        // Você pode usar a notificação do AdminJS, mas aqui só um alert simples
        alert(notice.message);
      }
    }, [notice]);

    // Função para voltar para a listagem de produtos
    const handleBack = () => {
      // Se quiser ir para uma rota fixa:
      // window.location.href = '/admin/resources/Produtos';
      // Ou só voltar na navegação:
      window.history.back();
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "success",
      padding: "lg"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default",
      mb: "36px",
      style: {
        color: '#0c4a2b',
        marginBottom: '3rem'
      }
    }, "A a\xE7\xE3o foi executada com sucesso em todos os produtos selecionados. Verifique se os pre\xE7os foram atualizados corretamente."), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      variant: "primary",
      onClick: handleBack,
      icon: "plus"
    }, '< Voltar para listagem'));
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const CategoriaSelectReal = props => {
    const {
      property,
      onChange,
      record
    } = props;
    const [categorias, setCategorias] = React.useState([]);
    const [novaCategoria, setNovaCategoria] = React.useState('');
    const [selectedCategorias, setSelectedCategorias] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // Carregar categorias existentes
    React.useEffect(() => {
      fetchCategorias();
    }, []);

    // Inicializar categorias selecionadas - EXECUTAR APENAS UMA VEZ
    React.useEffect(() => {
      if (categorias.length === 0) return; // Aguardar categorias carregarem

      console.log('🔄 UseEffect - Inicializando categorias selecionadas');
      console.log('🔄 Categorias carregadas:', categorias.length);
      console.log('🔄 Record completo (FULL DUMP):', JSON.stringify(record, null, 2));
      console.log('🔄 Property name:', property.name);
      console.log('    record?.params?.categorias,', record?.params);
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
        const caminhos = [record?.params?.[property.name], record?.[property.name], record?.params?.categorias, record?.populated?.[property.name], record?.populated?.categorias];
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
        console.log('🔍 Categorias disponíveis para matching:', categorias.map(c => ({
          id: c._id,
          nome: c.nome
        })));

        // Verificar se algum ID bate
        const matches = uniqueIds.filter(selectedId => categorias.some(cat => cat._id === selectedId));
        console.log('🔍 IDs que fazem match:', matches);
        setSelectedCategorias(uniqueIds);
      } else {
        console.log('🔍 Nenhuma categoria selecionada encontrada');
        setSelectedCategorias([]);
      }
    }, [categorias.length]); // MUDOU: Só roda quando categorias são carregadas

    // Detectar se está no modo de edição ou criação
    const isEditMode = record?.id || record?.params?.id || record && Object.keys(record.params || {}).length > 1;
    console.log('🔧 Modo detectado:', isEditMode ? 'EDIÇÃO' : 'CRIAÇÃO');
    console.log('🔧 Record ID:', record?.id);
    console.log('🔧 Record params ID:', record?.params?.id);
    console.log('🔧 Record params keys:', Object.keys(record?.params || {}));

    // Debug quando selectedCategorias muda
    React.useEffect(() => {
      console.log('🔥 selectedCategorias MUDOU:', selectedCategorias);
      console.log('🔥 Quantidade:', selectedCategorias.length);
    }, [selectedCategorias]);
    const fetchCategorias = async () => {
      try {
        const response = await fetch('/admin/api/resources/CategoriaNoticias/actions/list');
        if (response.ok) {
          const data = await response.json();
          if (data.records) {
            const categoriasFormatadas = data.records.map(record => ({
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
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (response.ok) {
          const data = await response.json();
          const newCategoria = {
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
            body: formData
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
    const handleCategoriaChange = React.useCallback((categoriaId, isSelected) => {
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
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Categorias ", isEditMode ? '(Editando)' : '(Criando)'), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "default",
      p: "default",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      mb: "xs",
      fontWeight: "bold"
    }, "Criar Nova Categoria"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      placeholder: "Nome da nova categoria...",
      value: novaCategoria,
      onChange: e => setNovaCategoria(e.target.value),
      onKeyDown: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCreateCategoria();
        }
      },
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      variant: "primary",
      onClick: handleCreateCategoria,
      disabled: !novaCategoria.trim() || loading
    }, loading ? 'Criando...' : 'Criar'))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      mb: "xs"
    }, isEditMode ? ' Categorias Disponíveis - Marque/Desmarque' : '📋 Selecionar Categorias', " (", categorias.length, ")"), isEditMode && selectedCategorias.length > 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "sm",
      p: "sm",
      style: {
        backgroundColor: '#e8f5e8',
        borderRadius: '4px',
        border: '2px solid #0c4a2b'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      fontWeight: "bold",
      color: "success",
      mb: "xs"
    }, "\u2705 Categorias Atualmente Selecionadas (", selectedCategorias.length, "):"), categorias.filter(cat => selectedCategorias.includes(cat._id)).map(categoria => /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: categoria._id,
      display: "inline-block",
      mr: "xs",
      mb: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      style: {
        backgroundColor: '#0c4a2b',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '12px',
        display: 'inline-block'
      }
    }, categoria.nome)))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        maxHeight: '200px',
        overflowY: 'auto',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '8px'
      }
    }, categorias.map(categoria => {
      const isSelected = selectedCategorias.includes(categoria._id);
      console.log(`🔍 Checkbox ${categoria.nome} (${categoria._id}): isSelected = ${isSelected}`);
      console.log(`🔍 selectedCategorias atual:`, selectedCategorias);
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: categoria._id,
        p: "xs",
        mb: "xs",
        style: {
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: isSelected ? '#e8f5e8' : 'white',
          borderRadius: '2px',
          border: '1px solid #eee'
        },
        onClick: () => handleCategoriaChange(categoria._id, !isSelected)
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "checkbox",
        checked: isSelected,
        onChange: e => {
          e.stopPropagation();
          handleCategoriaChange(categoria._id, e.target.checked);
        },
        style: {
          marginRight: '8px'
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          fontWeight: isSelected ? 'bold' : 'normal'
        }
      }, categoria.nome), isSelected && /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        variant: "xs",
        color: "success",
        ml: "auto"
      }, "\u2713 Selecionada"));
    }), categorias.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "grey60",
      variant: "sm"
    }, "Nenhuma categoria encontrada. Crie a primeira!"))), isEditMode ? selectedCategorias.length > 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default",
      p: "sm",
      style: {
        backgroundColor: '#fff3cd',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "warning"
    }, "\uD83D\uDCDD Modo Edi\xE7\xE3o: ", selectedCategorias.length, " categoria(s) selecionada(s) - Altera\xE7\xF5es ser\xE3o salvas")) : selectedCategorias.length > 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "success"
    }, "\u2705 ", selectedCategorias.length, " categoria(s) selecionada(s) para a nova not\xEDcia")));
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const PeriodoSelect = ({
    property,
    record,
    onChange
  }) => {
    const [selectedPeriodo, setSelectedPeriodo] = React.useState('');
    React.useEffect(() => {
      // Inicializar com valor atual se existir
      const currentValue = record?.params?.[property.name] || '';
      setSelectedPeriodo(currentValue);
    }, [record, property.name]);
    const handlePeriodoChange = periodo => {
      setSelectedPeriodo(periodo);
      if (onChange) {
        onChange(property.name, periodo);
      }
    };
    const periodos = [{
      value: 'AM',
      label: 'AM (Manhã)',
      icon: '🌅'
    }, {
      value: 'PM',
      label: 'PM (Tarde/Noite)',
      icon: '🌆'
    }];
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Período', property.isRequired && /*#__PURE__*/React__default.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "Selecione o per\xEDodo do hor\xE1rio"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }
    }, periodos.map(periodo => {
      const isSelected = selectedPeriodo === periodo.value;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: periodo.value,
        onClick: () => handlePeriodoChange(periodo.value),
        style: {
          padding: '12px 20px',
          border: isSelected ? '2px solid #0c4a2b' : '2px solid #ddd',
          borderRadius: '8px',
          cursor: 'pointer',
          backgroundColor: isSelected ? '#e8f5e8' : 'white',
          minWidth: '140px',
          textAlign: 'center',
          transition: 'all 0.2s ease',
          userSelect: 'none'
        },
        onMouseEnter: e => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = '#999';
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }
        },
        onMouseLeave: e => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = '#ddd';
            e.currentTarget.style.backgroundColor = 'white';
          }
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          fontSize: '24px',
          marginBottom: '4px'
        }
      }, periodo.icon), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          fontWeight: isSelected ? 'bold' : 'normal',
          color: isSelected ? '#0c4a2b' : '#333'
        }
      }, periodo.label));
    })), selectedPeriodo && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "xs",
      style: {
        backgroundColor: '#e8f5e8',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      style: {
        color: '#0c4a2b'
      }
    }, "\u2705 Per\xEDodo selecionado: ", /*#__PURE__*/React__default.default.createElement("strong", null, selectedPeriodo))), property.description && /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mt: "xs"
    }, property.description)));
  };

  const Edit = ({ property, record, onChange }) => {
      const { translateProperty } = adminjs.useTranslation();
      const { params } = record;
      const { custom } = property;
      const path = adminjs.flat.get(params, custom.filePathProperty);
      const key = adminjs.flat.get(params, custom.keyProperty);
      const file = adminjs.flat.get(params, custom.fileProperty);
      const [originalKey, setOriginalKey] = React.useState(key);
      const [filesToUpload, setFilesToUpload] = React.useState([]);
      React.useEffect(() => {
          // it means means that someone hit save and new file has been uploaded
          // in this case fliesToUpload should be cleared.
          // This happens when user turns off redirect after new/edit
          if ((typeof key === 'string' && key !== originalKey)
              || (typeof key !== 'string' && !originalKey)
              || (typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length)) {
              setOriginalKey(key);
              setFilesToUpload([]);
          }
      }, [key, originalKey]);
      const onUpload = (files) => {
          setFilesToUpload(files);
          onChange(custom.fileProperty, files);
      };
      const handleRemove = () => {
          onChange(custom.fileProperty, null);
      };
      const handleMultiRemove = (singleKey) => {
          const index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
          const filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
          if (path && path.length > 0) {
              const newPath = path.map((currentPath, i) => (i !== index ? currentPath : null));
              let newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
              newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
              onChange({
                  ...record,
                  params: newParams,
              });
          }
          else {
              // eslint-disable-next-line no-console
              console.log('You cannot remove file when there are no uploaded files yet');
          }
      };
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(designSystem.DropZone, { onChange: onUpload, multiple: custom.multiple, validate: {
                  mimeTypes: custom.mimeTypes,
                  maxSize: custom.maxSize,
              }, files: filesToUpload }),
          !custom.multiple && key && path && !filesToUpload.length && file !== null && (React__default.default.createElement(designSystem.DropZoneItem, { filename: key, src: path, onRemove: handleRemove })),
          custom.multiple && key && key.length && path ? (React__default.default.createElement(React__default.default.Fragment, null, key.map((singleKey, index) => {
              // when we remove items we set only path index to nulls.
              // key is still there. This is because
              // we have to maintain all the indexes. So here we simply filter out elements which
              // were removed and display only what was left
              const currentPath = path[index];
              return currentPath ? (React__default.default.createElement(designSystem.DropZoneItem, { key: singleKey, filename: singleKey, src: path[index], onRemove: () => handleMultiRemove(singleKey) })) : '';
          }))) : ''));
  };

  const AudioMimeTypes = [
      'audio/aac',
      'audio/midi',
      'audio/x-midi',
      'audio/mpeg',
      'audio/ogg',
      'application/ogg',
      'audio/opus',
      'audio/wav',
      'audio/webm',
      'audio/3gpp2',
  ];
  const ImageMimeTypes = [
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/vnd.microsoft.icon',
      'image/tiff',
      'image/webp',
  ];

  // eslint-disable-next-line import/no-extraneous-dependencies
  const SingleFile = (props) => {
      const { name, path, mimeType, width } = props;
      if (path && path.length) {
          if (mimeType && ImageMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
          }
          if (mimeType && AudioMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("audio", { controls: true, src: path },
                  "Your browser does not support the",
                  React__default.default.createElement("code", null, "audio"),
                  React__default.default.createElement("track", { kind: "captions" })));
          }
      }
      return (React__default.default.createElement(designSystem.Box, null,
          React__default.default.createElement(designSystem.Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
              React__default.default.createElement(designSystem.Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
              name)));
  };
  const File = ({ width, record, property }) => {
      const { custom } = property;
      let path = adminjs.flat.get(record?.params, custom.filePathProperty);
      if (!path) {
          return null;
      }
      const name = adminjs.flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
      const mimeType = custom.mimeTypeProperty
          && adminjs.flat.get(record?.params, custom.mimeTypeProperty);
      if (!property.custom.multiple) {
          if (custom.opts && custom.opts.baseUrl) {
              path = `${custom.opts.baseUrl}/${name}`;
          }
          return (React__default.default.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
      }
      if (custom.opts && custom.opts.baseUrl) {
          const baseUrl = custom.opts.baseUrl || '';
          path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
      }
      return (React__default.default.createElement(React__default.default.Fragment, null, path.map((singlePath, index) => (React__default.default.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
  };

  const List = (props) => (React__default.default.createElement(File, { width: 100, ...props }));

  const Show = (props) => {
      const { property } = props;
      const { translateProperty } = adminjs.useTranslation();
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(File, { width: "100%", ...props })));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.CustomUploadEdit = UploadEdit;
  AdminJS.UserComponents.Thumb = Thumb;
  AdminJS.UserComponents.GroupedPrices = GroupedPrices;
  AdminJS.UserComponents.GroupedDisponibilities = GroupedDisponibilities;
  AdminJS.UserComponents.ShowProductImage = ShowProductImage;
  AdminJS.UserComponents.FormattedDate = FormattedDate;
  AdminJS.UserComponents.RedirectDashboard = RedirectDashboard;
  AdminJS.UserComponents.SyncPricesAction = SyncPricesAction;
  AdminJS.UserComponents.CategoriaSelectReal = CategoriaSelectReal;
  AdminJS.UserComponents.PeriodoSelect = PeriodoSelect;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, PropTypes, AdminJSDesignSystem, ReactRouter, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGVyaW9kby1zZWxlY3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZEVkaXRDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudC5qcyIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbi8vIGFkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQudHN4XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBVcGxvYWRFZGl0OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLnByb3BlcnR5Lm5hbWV9PlVwbG9hZDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgaWQ9e3Byb3BzLnByb3BlcnR5Lm5hbWV9IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkRWRpdDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIFRodW1iKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2JhY2tvZmZpY2UtYXBwLWFzc2V0cy5zMy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS8ke3JlY29yZC5wYXJhbXMudXJsfWA7XHJcblxyXG4gIGlmICghdXJsKSB7XHJcbiAgICByZXR1cm4gPHNwYW4+Tm8gaW1hZ2U8L3NwYW4+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgc3JjPXt1cmx9XHJcbiAgICAgIGFsdD17cmVjb3JkLnBhcmFtcy5hbHQgfHwgJ1RodW1ibmFpbCd9XHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJ2F1dG8nIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcblRodW1iLnByb3BUeXBlcyA9IHtcclxuICByZWNvcmQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBwYXJhbXM6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsIExhYmVsLCBJbnB1dCwgRm9ybUdyb3VwLFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuZnVuY3Rpb24gR3JvdXBlZFByaWNlcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHByZWNvVW5pY28gPSByZWNvcmQucGFyYW1zLnByZWNvVW5pY28gfHwgJyc7XHJcbiAgY29uc3QgcHJlY29NZWRpbyA9IHJlY29yZC5wYXJhbXMucHJlY29NZWRpbyB8fCAnJztcclxuICBjb25zdCBwcmVjb0dyYW5kZSA9IHJlY29yZC5wYXJhbXMucHJlY29HcmFuZGUgfHwgJyc7XHJcbiAgY29uc3QgcHJlY29JbmRpdmlkdWFsID0gcmVjb3JkLnBhcmFtcy5wcmVjb0luZGl2aWR1YWwgfHwgJyc7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBvbkNoYW5nZShmaWVsZCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiBnYXA9XCIxMHB4XCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICB3aWR0aD1cIjI1JVwiXHJcbiAgICAgICAgbXI9XCIxMHB4XCJcclxuICAgICAgICBtYj1cIjM2cHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gw5puaWNvPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ByZWNvVW5pY299XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvVW5pY28nKX1cclxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICB3aWR0aD1cIjI1JVwiXHJcbiAgICAgICAgbXI9XCIxMHB4XCJcclxuICAgICAgICBtYj1cIjM2cHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gTcOpZGlvPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ByZWNvTWVkaW99XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvTWVkaW8nKX1cclxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICB3aWR0aD1cIjI1JVwiXHJcbiAgICAgICAgbXI9XCIxMHB4XCJcclxuICAgICAgICBtYj1cIjM2cHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gR3JhbmRlPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ByZWNvR3JhbmRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVjb0dyYW5kZScpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCB3aWR0aD1cIjI1JVwiPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8TGFiZWw+UHJlw6dvIEluZGl2aWR1YWw8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29JbmRpdmlkdWFsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVjb0luZGl2aWR1YWwnKX1cclxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm91cGVkUHJpY2VzO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCwgQ2hlY2tCb3ggfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuaW1wb3J0IHR5cGUgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgR3JvdXBlZERpc3BvbmliaWxpdGllczogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgamFudGFyID0gcmVjb3JkLnBhcmFtcy5qYW50YXIgPz8gZmFsc2U7XHJcbiAgY29uc3QgZGVsaXZlcnkgPSByZWNvcmQucGFyYW1zLmRlbGl2ZXJ5ID8/IGZhbHNlO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VKYW50YXIgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIG9uQ2hhbmdlKCdqYW50YXInLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZWxpdmVyeSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2RlbGl2ZXJ5JywgZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxMYWJlbCBmb250V2VpZ2h0PVwiYm9sZFwiIG1iPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgIFRpcG9zIGRlIGNhcmTDoXBpb3NcclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGdhcD1cImxnXCIgZmxleFdyYXA9XCJ3cmFwXCIgbWI9XCIzNnB4XCI+XHJcbiAgICAgICAgPEJveCB3aWR0aD1cIjUwJVwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImphbnRhclwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGN1cnNvcj1cInBvaW50ZXJcIiBnYXA9XCJzbVwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tCb3hcclxuICAgICAgICAgICAgICBpZD1cImphbnRhclwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17amFudGFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VKYW50YXJ9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc3BvbsOtdmVsIHBhcmEgSmFudGFyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCB3aWR0aD1cIjUwJVwiIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5XCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlkPVwiZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2RlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VEZWxpdmVyeX1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIERpc3BvbsOtdmVsIHBhcmEgRGVsaXZlcnlcclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWREaXNwb25pYmlsaXRpZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFNob3dQcm9kdWN0SW1hZ2U6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xyXG4gIGlmICghcmVjb3JkIHx8ICFwcm9wZXJ0eSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGZpZWxkTmFtZSA9IHByb3BlcnR5Lm5hbWU7IC8vIG1lZGlhQ2FwYSwgbWVkaWFQcmluY2lwYWwsIGV0Yy5cclxuICBjb25zdCBtZWRpYUtleSA9IGAke2ZpZWxkTmFtZX1VcmxgOyAvLyBiYW5uZXJVcmwsIGV0Yy5cclxuICBjb25zdCBhbHRLZXkgPSBgJHtmaWVsZE5hbWV9QWx0YDtcclxuXHJcbiAgY29uc3QgbWVkaWFQYXRoID0gcmVjb3JkLnBhcmFtcz8uW21lZGlhS2V5XTtcclxuICBjb25zdCBhbHRUZXh0ID0gcmVjb3JkLnBhcmFtcz8uW2FsdEtleV0gfHwgJyc7XHJcblxyXG4gIC8vIFZlcmlmaWNhciBzZSBhIFVSTCBqw6Egw6kgY29tcGxldGEgb3Ugc2UgcHJlY2lzYSBzZXIgY29uY2F0ZW5hZGFcclxuICBjb25zdCBmdWxsVXJsID0gbWVkaWFQYXRoXHJcbiAgICA/IChtZWRpYVBhdGguc3RhcnRzV2l0aCgnaHR0cCcpIFxyXG4gICAgICAgID8gbWVkaWFQYXRoIFxyXG4gICAgICAgIDogYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7bWVkaWFQYXRofWApXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwiMzZweFwiPlxyXG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsIHx8ICdJbWFnZW0nfTwvTGFiZWw+XHJcbiAgICAgIHtmdWxsVXJsID8gKFxyXG4gICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICB7ZnVsbFVybC5lbmRzV2l0aCgnLm1wNCcpID8gKFxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICBzcmM9e2Z1bGxVcmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnMzAwcHgnLCBib3JkZXJSYWRpdXM6IDggfX1cclxuICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17ZnVsbFVybH1cclxuICAgICAgICAgICAgICBhbHQ9e2FsdFRleHQgfHwgYEltYWdlbSAtICR7ZmllbGROYW1lfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnMzAwcHgnLCBib3JkZXJSYWRpdXM6IDggfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YWx0VGV4dCAmJiAoXHJcbiAgICAgICAgICAgIDxCb3ggbXQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAge2FsdFRleHR9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICB7YWx0VGV4dCB8fCAnTmVuaHVtIGFycXVpdm8gZGlzcG9uw612ZWwnfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dQcm9kdWN0SW1hZ2U7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IEZvcm1hdHRlZERhdGU6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xyXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXTtcclxuXHJcbiAgaWYgKCFyYXdWYWx1ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyYXdWYWx1ZSk7XHJcbiAgY29uc3QgZm9ybWF0dGVkID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHtmb3JtYXR0ZWR9XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIHt0aW1lfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZERhdGU7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gUmVkaXJlY3REYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoJy9hZG1pbi9yZXNvdXJjZXMvUHJvZHV0b3MnKTsgLy8gPC0gc3Vic3RpdHVhIHBlbG8gc2V1IHJlc291cmNlIElEIHNlIGZvciBkaWZlcmVudGVcclxuICB9LCBbbmF2aWdhdGVdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0RGFzaGJvYXJkO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsIExhYmVsLCBCdXR0b24sIEljb24sXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBTeW5jUHJpY2VzQWN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBub3RpY2UgfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5vdGljZSAmJiBub3RpY2UubWVzc2FnZSkge1xyXG4gICAgICAvLyBWb2PDqiBwb2RlIHVzYXIgYSBub3RpZmljYcOnw6NvIGRvIEFkbWluSlMsIG1hcyBhcXVpIHPDsyB1bSBhbGVydCBzaW1wbGVzXHJcbiAgICAgIGFsZXJ0KG5vdGljZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LCBbbm90aWNlXSk7XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgdm9sdGFyIHBhcmEgYSBsaXN0YWdlbSBkZSBwcm9kdXRvc1xyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBTZSBxdWlzZXIgaXIgcGFyYSB1bWEgcm90YSBmaXhhOlxyXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluL3Jlc291cmNlcy9Qcm9kdXRvcyc7XHJcbiAgICAvLyBPdSBzw7Mgdm9sdGFyIG5hIG5hdmVnYcOnw6NvOlxyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJzdWNjZXNzXCIgcGFkZGluZz1cImxnXCI+XHJcblxyXG4gICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIG1iPVwiMzZweFwiIHN0eWxlPXt7IGNvbG9yOiAnIzBjNGEyYicsIG1hcmdpbkJvdHRvbTogJzNyZW0nIH19PlxyXG4gICAgICAgIEEgYcOnw6NvIGZvaSBleGVjdXRhZGEgY29tIHN1Y2Vzc28gZW0gdG9kb3Mgb3MgcHJvZHV0b3Mgc2VsZWNpb25hZG9zLlxyXG4gICAgICAgIFZlcmlmaXF1ZSBzZSBvcyBwcmXDp29zIGZvcmFtIGF0dWFsaXphZG9zIGNvcnJldGFtZW50ZS5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgID5cclxuICAgICAgICB7JzwgVm9sdGFyIHBhcmEgbGlzdGFnZW0nfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW5jUHJpY2VzQWN0aW9uO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIEZvcm1Hcm91cCwgXHJcbiAgTGFiZWwsIFxyXG4gIEJ1dHRvbiwgXHJcbiAgSW5wdXQsXHJcbiAgQm94LFxyXG4gIFRleHRcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBDYXRlZ29yaWEge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5vbWU6IHN0cmluZztcclxuICBjb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENhdGVnb3JpYVNlbGVjdFJlYWw6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWFzLCBzZXRDYXRlZ29yaWFzXSA9IHVzZVN0YXRlPENhdGVnb3JpYVtdPihbXSk7XHJcbiAgY29uc3QgW25vdmFDYXRlZ29yaWEsIHNldE5vdmFDYXRlZ29yaWFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3JpYXMsIHNldFNlbGVjdGVkQ2F0ZWdvcmlhc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gQ2FycmVnYXIgY2F0ZWdvcmlhcyBleGlzdGVudGVzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQ2F0ZWdvcmlhcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gSW5pY2lhbGl6YXIgY2F0ZWdvcmlhcyBzZWxlY2lvbmFkYXMgLSBFWEVDVVRBUiBBUEVOQVMgVU1BIFZFWlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhcy5sZW5ndGggPT09IDApIHJldHVybjsgLy8gQWd1YXJkYXIgY2F0ZWdvcmlhcyBjYXJyZWdhcmVtXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFVzZUVmZmVjdCAtIEluaWNpYWxpemFuZG8gY2F0ZWdvcmlhcyBzZWxlY2lvbmFkYXMnKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIENhdGVnb3JpYXMgY2FycmVnYWRhczonLCBjYXRlZ29yaWFzLmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UhCBSZWNvcmQgY29tcGxldG8gKEZVTEwgRFVNUCk6JywgSlNPTi5zdHJpbmdpZnkocmVjb3JkLCBudWxsLCAyKSk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UhCBQcm9wZXJ0eSBuYW1lOicsIHByb3BlcnR5Lm5hbWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCAnICAgIHJlY29yZD8ucGFyYW1zPy5jYXRlZ29yaWFzLCcgLCAgcmVjb3JkPy5wYXJhbXMpOyAgICBcclxuICAgIC8vIE5PVk86IENvbnZlcnRlciBvYmpldG8gaW5kZXhhZG8gZG8gQWRtaW5KUyBwYXJhIGFycmF5XHJcbiAgICBsZXQgY3VycmVudFZhbHVlID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gVmVyaWZpY2FyIHNlIGFzIGNhdGVnb3JpYXMgZXN0w6NvIG5vIGZvcm1hdG8gLjAsIC4xLCAuMiAob2JqZXRvIGluZGV4YWRvKVxyXG4gICAgaWYgKHJlY29yZD8ucGFyYW1zKSB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpYXNJbmRleGFkYXMgPSBbXTtcclxuICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgXHJcbiAgICAgIC8vIEJ1c2NhciB0b2RhcyBhcyBjaGF2ZXMgcXVlIGNvbWXDp2FtIGNvbSAnY2F0ZWdvcmlhcy4nXHJcbiAgICAgIHdoaWxlIChyZWNvcmQucGFyYW1zW2BjYXRlZ29yaWFzLiR7aW5kZXh9YF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNhdGVnb3JpYXNJbmRleGFkYXMucHVzaChyZWNvcmQucGFyYW1zW2BjYXRlZ29yaWFzLiR7aW5kZXh9YF0pO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChjYXRlZ29yaWFzSW5kZXhhZGFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjdXJyZW50VmFsdWUgPSBjYXRlZ29yaWFzSW5kZXhhZGFzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5SNIENhdGVnb3JpYXMgZW5jb250cmFkYXMgY29tbyBvYmpldG8gaW5kZXhhZG86JywgY2F0ZWdvcmlhc0luZGV4YWRhcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UgY29tbyBvYmpldG8gaW5kZXhhZG8sIHRlbnRhciBjYW1pbmhvcyBub3JtYWlzXHJcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICBjb25zdCBjYW1pbmhvcyA9IFtcclxuICAgICAgICByZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdLFxyXG4gICAgICAgIHJlY29yZD8uW3Byb3BlcnR5Lm5hbWVdLFxyXG4gICAgICAgIHJlY29yZD8ucGFyYW1zPy5jYXRlZ29yaWFzLFxyXG4gICAgICAgIHJlY29yZD8ucG9wdWxhdGVkPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5wb3B1bGF0ZWQ/LmNhdGVnb3JpYXMsXHJcbiAgICAgIF07XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBUZXN0YW5kbyBjYW1pbmhvcyB0cmFkaWNpb25haXM6Jyk7XHJcbiAgICAgIGNhbWluaG9zLmZvckVhY2goKGNhbWluaG8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCAgQ2FtaW5obyAke2luZGV4fTpgLCBjYW1pbmhvKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjdXJyZW50VmFsdWUgPSBjYW1pbmhvcy5maW5kKGNhbWluaG8gPT4gY2FtaW5obyAhPT0gdW5kZWZpbmVkICYmIGNhbWluaG8gIT09IG51bGwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBWYWxvciBGSU5BTCBFU0NPTEhJRE86JywgY3VycmVudFZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIFRpcG8gZG8gdmFsb3I6JywgdHlwZW9mIGN1cnJlbnRWYWx1ZSwgQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKTtcclxuICAgIFxyXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkgJiYgY3VycmVudFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgLy8gUHJvY2Vzc2FyIElEcyBwcmltZWlybywgZGVwb2lzIHJlbW92ZXIgZHVwbGljYXRhc1xyXG4gICAgICBjb25zdCBwcm9jZXNzZWRJZHMgPSBjdXJyZW50VmFsdWUubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5SNIFByb2Nlc3NhbmRvIGl0ZW06JywgaXRlbSwgdHlwZW9mIGl0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGl0ZW0uX2lkIHx8IGl0ZW0uaWQgfHwgaXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn8J+UjSAgIOKGkiBJRCBleHRyYcOtZG8gZG8gb2JqZXRvOicsIGlkKTtcclxuICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmZpbHRlcihpZCA9PiBpZCAmJiBpZCAhPT0gJ251bGwnICYmIGlkICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBSZW1vdmVyIGR1cGxpY2F0YXNcclxuICAgICAgY29uc3QgdW5pcXVlSWRzID0gWy4uLm5ldyBTZXQocHJvY2Vzc2VkSWRzKV07XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBJRHMgw7puaWNvcyBwcm9jZXNzYWRvczonLCB1bmlxdWVJZHMpO1xyXG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBDYXRlZ29yaWFzIGRpc3BvbsOtdmVpcyBwYXJhIG1hdGNoaW5nOicsIGNhdGVnb3JpYXMubWFwKGMgPT4gKHsgaWQ6IGMuX2lkLCBub21lOiBjLm5vbWUgfSkpKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhciBzZSBhbGd1bSBJRCBiYXRlXHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB1bmlxdWVJZHMuZmlsdGVyKHNlbGVjdGVkSWQgPT4gXHJcbiAgICAgICAgY2F0ZWdvcmlhcy5zb21lKGNhdCA9PiBjYXQuX2lkID09PSBzZWxlY3RlZElkKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBJRHMgcXVlIGZhemVtIG1hdGNoOicsIG1hdGNoZXMpO1xyXG4gICAgICBcclxuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKHVuaXF1ZUlkcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBOZW5odW1hIGNhdGVnb3JpYSBzZWxlY2lvbmFkYSBlbmNvbnRyYWRhJyk7XHJcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhdGVnb3JpYXMubGVuZ3RoXSk7IC8vIE1VRE9VOiBTw7Mgcm9kYSBxdWFuZG8gY2F0ZWdvcmlhcyBzw6NvIGNhcnJlZ2FkYXNcclxuXHJcbiAgLy8gRGV0ZWN0YXIgc2UgZXN0w6Egbm8gbW9kbyBkZSBlZGnDp8OjbyBvdSBjcmlhw6fDo29cclxuICBjb25zdCBpc0VkaXRNb2RlID0gcmVjb3JkPy5pZCB8fCByZWNvcmQ/LnBhcmFtcz8uaWQgfHwgKHJlY29yZCAmJiBPYmplY3Qua2V5cyhyZWNvcmQucGFyYW1zIHx8IHt9KS5sZW5ndGggPiAxKTtcclxuICBjb25zb2xlLmxvZygn8J+UpyBNb2RvIGRldGVjdGFkbzonLCBpc0VkaXRNb2RlID8gJ0VEScOHw4NPJyA6ICdDUklBw4fDg08nKTtcclxuICBjb25zb2xlLmxvZygn8J+UpyBSZWNvcmQgSUQ6JywgcmVjb3JkPy5pZCk7XHJcbiAgY29uc29sZS5sb2coJ/CflKcgUmVjb3JkIHBhcmFtcyBJRDonLCByZWNvcmQ/LnBhcmFtcz8uaWQpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIFJlY29yZCBwYXJhbXMga2V5czonLCBPYmplY3Qua2V5cyhyZWNvcmQ/LnBhcmFtcyB8fCB7fSkpO1xyXG5cclxuICAvLyBEZWJ1ZyBxdWFuZG8gc2VsZWN0ZWRDYXRlZ29yaWFzIG11ZGFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ/CflKUgc2VsZWN0ZWRDYXRlZ29yaWFzIE1VRE9VOicsIHNlbGVjdGVkQ2F0ZWdvcmlhcyk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UpSBRdWFudGlkYWRlOicsIHNlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGgpO1xyXG4gIH0sIFtzZWxlY3RlZENhdGVnb3JpYXNdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDYXRlZ29yaWFzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FkbWluL2FwaS9yZXNvdXJjZXMvQ2F0ZWdvcmlhTm90aWNpYXMvYWN0aW9ucy9saXN0Jyk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKGRhdGEucmVjb3Jkcykge1xyXG4gICAgICAgICAgY29uc3QgY2F0ZWdvcmlhc0Zvcm1hdGFkYXMgPSBkYXRhLnJlY29yZHMubWFwKChyZWNvcmQ6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgX2lkOiBTdHJpbmcocmVjb3JkLmlkKSxcclxuICAgICAgICAgICAgbm9tZTogcmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgICBjb3I6IHJlY29yZC5wYXJhbXMuY29yXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBzZXRDYXRlZ29yaWFzKGNhdGVnb3JpYXNGb3JtYXRhZGFzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgY2F0ZWdvcmlhczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ2F0ZWdvcmlhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFub3ZhQ2F0ZWdvcmlhLnRyaW0oKSB8fCBsb2FkaW5nKSByZXR1cm47XHJcbiAgICBcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBDcmlhciBjYXRlZ29yaWEgdXNhbmRvIGZldGNoIGRpcmV0byBwYXJhIGEgQVBJIGRvIEFkbWluSlNcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICBub21lOiBub3ZhQ2F0ZWdvcmlhLnRyaW0oKSxcclxuICAgICAgICBjb3I6ICcjMGM0YTJiJ1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FkbWluL2FwaS9yZXNvdXJjZXMvQ2F0ZWdvcmlhTm90aWNpYXMvYWN0aW9ucy9uZXcnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcmlhOiBDYXRlZ29yaWEgPSB7XHJcbiAgICAgICAgICBfaWQ6IFN0cmluZyhkYXRhLnJlY29yZC5pZCksXHJcbiAgICAgICAgICBub21lOiBkYXRhLnJlY29yZC5wYXJhbXMubm9tZSxcclxuICAgICAgICAgIGNvcjogZGF0YS5yZWNvcmQucGFyYW1zLmNvciB8fCAnIzBjNGEyYidcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkaWNpb25hciDDoCBsaXN0YSBsb2NhbFxyXG4gICAgICAgIHNldENhdGVnb3JpYXMocHJldiA9PiBbLi4ucHJldiwgbmV3Q2F0ZWdvcmlhXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2VsZWNpb25hciBhdXRvbWF0aWNhbWVudGVcclxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZCA9IFsuLi5zZWxlY3RlZENhdGVnb3JpYXMsIG5ld0NhdGVnb3JpYS5faWRdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTm90aWZpY2FyIEFkbWluSlNcclxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIG5ld1NlbGVjdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0Tm92YUNhdGVnb3JpYSgnJyk7XHJcbiAgICAgICAgYWxlcnQoYOKchSBDYXRlZ29yaWEgXCIke25ld0NhdGVnb3JpYS5ub21lfVwiIGNyaWFkYSFgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUZW50YXIgY29tIEZvcm1EYXRhIHNlIEpTT04gbsOjbyBmdW5jaW9uYXJcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbm9tZScsIG5vdmFDYXRlZ29yaWEudHJpbSgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvcicsICcjMGM0YTJiJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1SZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmb3JtUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmb3JtUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yaWE6IENhdGVnb3JpYSA9IHtcclxuICAgICAgICAgICAgX2lkOiBTdHJpbmcoZGF0YS5yZWNvcmQuaWQpLFxyXG4gICAgICAgICAgICBub21lOiBkYXRhLnJlY29yZC5wYXJhbXMubm9tZSxcclxuICAgICAgICAgICAgY29yOiBkYXRhLnJlY29yZC5wYXJhbXMuY29yIHx8ICcjMGM0YTJiJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc2V0Q2F0ZWdvcmlhcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdDYXRlZ29yaWFdKTtcclxuICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcmlhcywgbmV3Q2F0ZWdvcmlhLl9pZF07XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZENhdGVnb3JpYXMobmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXROb3ZhQ2F0ZWdvcmlhKCcnKTtcclxuICAgICAgICAgIGFsZXJ0KGDinIUgQ2F0ZWdvcmlhIFwiJHtuZXdDYXRlZ29yaWEubm9tZX1cIiBjcmlhZGEhYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBuYSBjcmlhw6fDo28nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY3JpYXIgY2F0ZWdvcmlhOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ+KdjCBFcnJvIGFvIGNyaWFyIGNhdGVnb3JpYS4gVm91IHVzYXIgbyBzaXN0ZW1hIGF1dG9tw6F0aWNvIGRvIGJhY2tlbmQuJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBGYWxsYmFjazogdXNhciBvIHNpc3RlbWEgcXVlIGrDoSBmdW5jaW9uYSBubyBiYWNrZW5kXHJcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcmlhcywgbm92YUNhdGVnb3JpYS50cmltKCldO1xyXG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpYXMobmV3U2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzZXROb3ZhQ2F0ZWdvcmlhKCcnKTtcclxuICAgICAgYWxlcnQoYPCfkqEgQ2F0ZWdvcmlhIFwiJHtub3ZhQ2F0ZWdvcmlhLnRyaW0oKX1cIiBzZXLDoSBjcmlhZGEgcXVhbmRvIHZvY8OqIHNhbHZhciBhIG5vdMOtY2lhLmApO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcmlhQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGNhdGVnb3JpYUlkOiBzdHJpbmcsIGlzU2VsZWN0ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhwcmV2U2VsZWN0ZWQgPT4ge1xyXG4gICAgICBsZXQgbmV3U2VsZWN0ZWQ7XHJcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgLy8gVmVyaWZpY2FyIHNlIGrDoSBuw6NvIGVzdMOhIHNlbGVjaW9uYWRhIHBhcmEgZXZpdGFyIGR1cGxpY2F0YXNcclxuICAgICAgICBpZiAoIXByZXZTZWxlY3RlZC5pbmNsdWRlcyhjYXRlZ29yaWFJZCkpIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGVkID0gWy4uLnByZXZTZWxlY3RlZCwgY2F0ZWdvcmlhSWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdTZWxlY3RlZCA9IHByZXZTZWxlY3RlZDsgLy8gSsOhIGVzdMOhIHNlbGVjaW9uYWRhLCBuw6NvIGFkaWNpb25hclxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdTZWxlY3RlZCA9IHByZXZTZWxlY3RlZC5maWx0ZXIoaWQgPT4gaWQgIT09IGNhdGVnb3JpYUlkKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbmV3U2VsZWN0ZWQ7XHJcbiAgICB9KTtcclxuICB9LCBbb25DaGFuZ2UsIHByb3BlcnR5Lm5hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5DYXRlZ29yaWFzIHtpc0VkaXRNb2RlID8gJyhFZGl0YW5kbyknIDogJyhDcmlhbmRvKSd9PC9MYWJlbD5cclxuICAgICAgXHJcbiAgICAgIHsvKiBDcmlhciBub3ZhIGNhdGVnb3JpYSAqL31cclxuICAgICAgPEJveCBtYj1cImRlZmF1bHRcIiBwPVwiZGVmYXVsdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19PlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIG1iPVwieHNcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgIENyaWFyIE5vdmEgQ2F0ZWdvcmlhXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBnYXA9XCJzbVwiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBub3ZhIGNhdGVnb3JpYS4uLlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhQ2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdmFDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDcmVhdGVDYXRlZ29yaWEoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlQ2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IW5vdmFDYXRlZ29yaWEudHJpbSgpIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ0NyaWFuZG8uLi4nIDogJ0NyaWFyJ31cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHsvKiBMaXN0YSBkZSBjYXRlZ29yaWFzIC0gQWRhcHRhZGEgcGFyYSBtb2RvIGRlIGVkacOnw6NvICovfVxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIG1iPVwieHNcIj5cclxuICAgICAgICAgIHtpc0VkaXRNb2RlID8gJyBDYXRlZ29yaWFzIERpc3BvbsOtdmVpcyAtIE1hcnF1ZS9EZXNtYXJxdWUnIDogJ/Cfk4sgU2VsZWNpb25hciBDYXRlZ29yaWFzJ30gKHtjYXRlZ29yaWFzLmxlbmd0aH0pXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiBNb3N0cmFyIGNhdGVnb3JpYXMgc2VsZWNpb25hZGFzIHByaW1laXJvIG5vIG1vZG8gZGUgZWRpw6fDo28gKi99XHJcbiAgICAgICAge2lzRWRpdE1vZGUgJiYgc2VsZWN0ZWRDYXRlZ29yaWFzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPEJveCBtYj1cInNtXCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjVlOCcsIGJvcmRlclJhZGl1czogJzRweCcsIGJvcmRlcjogJzJweCBzb2xpZCAjMGM0YTJiJyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cInN1Y2Nlc3NcIiBtYj1cInhzXCI+XHJcbiAgICAgICAgICAgICAg4pyFIENhdGVnb3JpYXMgQXR1YWxtZW50ZSBTZWxlY2lvbmFkYXMgKHtzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RofSk6XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAge2NhdGVnb3JpYXNcclxuICAgICAgICAgICAgICAuZmlsdGVyKGNhdCA9PiBzZWxlY3RlZENhdGVnb3JpYXMuaW5jbHVkZXMoY2F0Ll9pZCkpXHJcbiAgICAgICAgICAgICAgLm1hcChjYXRlZ29yaWEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2NhdGVnb3JpYS5faWR9IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiBtcj1cInhzXCIgbWI9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMGM0YTJiJywgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcycHggOHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpYS5ub21lfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvd1k6ICdhdXRvJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnOHB4JyB9fT5cclxuICAgICAgICAgIHtjYXRlZ29yaWFzLm1hcChjYXRlZ29yaWEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRDYXRlZ29yaWFzLmluY2x1ZGVzKGNhdGVnb3JpYS5faWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg8J+UjSBDaGVja2JveCAke2NhdGVnb3JpYS5ub21lfSAoJHtjYXRlZ29yaWEuX2lkfSk6IGlzU2VsZWN0ZWQgPSAke2lzU2VsZWN0ZWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SNIHNlbGVjdGVkQ2F0ZWdvcmlhcyBhdHVhbDpgLCBzZWxlY3RlZENhdGVnb3JpYXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcmlhLl9pZH1cclxuICAgICAgICAgICAgICAgIHA9XCJ4c1wiXHJcbiAgICAgICAgICAgICAgICBtYj1cInhzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyAnI2U4ZjVlOCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2VlZSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yaWFDaGFuZ2UoY2F0ZWdvcmlhLl9pZCwgIWlzU2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhdGVnb3JpYUNoYW5nZShjYXRlZ29yaWEuX2lkLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFdlaWdodDogaXNTZWxlY3RlZCA/ICdib2xkJyA6ICdub3JtYWwnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJ4c1wiIGNvbG9yPVwic3VjY2Vzc1wiIG1sPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKckyBTZWxlY2lvbmFkYVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtjYXRlZ29yaWFzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JleTYwXCIgdmFyaWFudD1cInNtXCI+XHJcbiAgICAgICAgICAgICAgTmVuaHVtYSBjYXRlZ29yaWEgZW5jb250cmFkYS4gQ3JpZSBhIHByaW1laXJhIVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHsvKiBSZXN1bW8gZGUgc2VsZWNpb25hZGFzIC0gRGlmZXJlbnRlIHBhcmEgY2FkYSBtb2RvICovfVxyXG4gICAgICB7aXNFZGl0TW9kZSA/IChcclxuICAgICAgICBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIHA9XCJzbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmYzY2QnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19PlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICDwn5OdIE1vZG8gRWRpw6fDo286IHtzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RofSBjYXRlZ29yaWEocykgc2VsZWNpb25hZGEocykgLSBBbHRlcmHDp8O1ZXMgc2Vyw6NvIHNhbHZhc1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yaWFzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAg4pyFIHtzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RofSBjYXRlZ29yaWEocykgc2VsZWNpb25hZGEocykgcGFyYSBhIG5vdmEgbm90w61jaWFcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpYVNlbGVjdFJlYWw7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBcclxuICBGb3JtR3JvdXAsIFxyXG4gIExhYmVsLCBcclxuICBCb3gsIFxyXG4gIFRleHQgXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5pbnRlcmZhY2UgUGVyaW9kb1NlbGVjdFByb3BzIGV4dGVuZHMgQmFzZVByb3BlcnR5UHJvcHMge31cclxuXHJcbmNvbnN0IFBlcmlvZG9TZWxlY3Q6IFJlYWN0LkZDPFBlcmlvZG9TZWxlY3RQcm9wcz4gPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGVyaW9kbywgc2V0U2VsZWN0ZWRQZXJpb2RvXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSW5pY2lhbGl6YXIgY29tIHZhbG9yIGF0dWFsIHNlIGV4aXN0aXJcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBzZXRTZWxlY3RlZFBlcmlvZG8oY3VycmVudFZhbHVlKTtcclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBlcmlvZG9DaGFuZ2UgPSAocGVyaW9kbzogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBlcmlvZG8ocGVyaW9kbyk7XHJcbiAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgcGVyaW9kbyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGVyaW9kb3MgPSBbXHJcbiAgICB7IHZhbHVlOiAnQU0nLCBsYWJlbDogJ0FNIChNYW5ow6MpJywgaWNvbjogJ/CfjIUnIH0sXHJcbiAgICB7IHZhbHVlOiAnUE0nLCBsYWJlbDogJ1BNIChUYXJkZS9Ob2l0ZSknLCBpY29uOiAn8J+MhicgfVxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICA8TGFiZWw+XHJcbiAgICAgICAge3Byb3BlcnR5LmxhYmVsIHx8ICdQZXLDrW9kbyd9XHJcbiAgICAgICAge3Byb3BlcnR5LmlzUmVxdWlyZWQgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9zcGFuPn1cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxCb3ggbXQ9XCJ4c1wiPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCIgbWI9XCJzbVwiPlxyXG4gICAgICAgICAgU2VsZWNpb25lIG8gcGVyw61vZG8gZG8gaG9yw6FyaW9cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEycHgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxyXG4gICAgICAgICAge3BlcmlvZG9zLm1hcChwZXJpb2RvID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkUGVyaW9kbyA9PT0gcGVyaW9kby52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBrZXk9e3BlcmlvZG8udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQZXJpb2RvQ2hhbmdlKHBlcmlvZG8udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogaXNTZWxlY3RlZCA/ICcycHggc29saWQgIzBjNGEyYicgOiAnMnB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gJyNlOGY1ZTgnIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICcxNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycyBlYXNlJyxcclxuICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzk5OSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjhmOWZhJztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNkZGQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZm9udFNpemU6ICcyNHB4JywgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAge3BlcmlvZG8uaWNvbn1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGlzU2VsZWN0ZWQgPyAnYm9sZCcgOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNTZWxlY3RlZCA/ICcjMGM0YTJiJyA6ICcjMzMzJ1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cGVyaW9kby5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtzZWxlY3RlZFBlcmlvZG8gJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCIgcD1cInhzXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjVlOCcsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIHN0eWxlPXt7IGNvbG9yOiAnIzBjNGEyYicgfX0+XHJcbiAgICAgICAgICAgICAg4pyFIFBlcsOtb2RvIHNlbGVjaW9uYWRvOiA8c3Ryb25nPntzZWxlY3RlZFBlcmlvZG99PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAge3Byb3BlcnR5LmRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCIgbXQ9XCJ4c1wiPlxyXG4gICAgICAgICAgICB7cHJvcGVydHkuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyaW9kb1NlbGVjdDtcclxuIiwiaW1wb3J0IHsgRHJvcFpvbmUsIERyb3Bab25lSXRlbSwgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgRWRpdCA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSByZWNvcmQ7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBjb25zdCBrZXkgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgZmlsZSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQcm9wZXJ0eSk7XG4gICAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpO1xuICAgIGNvbnN0IFtmaWxlc1RvVXBsb2FkLCBzZXRGaWxlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB1c2VyIHR1cm5zIG9mZiByZWRpcmVjdCBhZnRlciBuZXcvZWRpdFxuICAgICAgICBpZiAoKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBzZXRPcmlnaW5hbEtleShrZXkpO1xuICAgICAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSk7XG4gICAgICAgIH1cbiAgICB9LCBba2V5LCBvcmlnaW5hbEtleV0pO1xuICAgIGNvbnN0IG9uVXBsb2FkID0gKGZpbGVzKSA9PiB7XG4gICAgICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpO1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcyk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTXVsdGlSZW1vdmUgPSAoc2luZ2xlS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSkgfHwgW10pLmluZGV4T2Yoc2luZ2xlS2V5KTtcbiAgICAgICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHkpIHx8IFtdO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+IChpICE9PSBpbmRleCA/IGN1cnJlbnRQYXRoIDogbnVsbCkpO1xuICAgICAgICAgICAgbGV0IG5ld1BhcmFtcyA9IGZsYXQuc2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHksIFsuLi5maWxlc1RvRGVsZXRlLCBpbmRleF0pO1xuICAgICAgICAgICAgbmV3UGFyYW1zID0gZmxhdC5zZXQobmV3UGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSwgbmV3UGF0aCk7XG4gICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjYW5ub3QgcmVtb3ZlIGZpbGUgd2hlbiB0aGVyZSBhcmUgbm8gdXBsb2FkZWQgZmlsZXMgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmUsIHsgb25DaGFuZ2U6IG9uVXBsb2FkLCBtdWx0aXBsZTogY3VzdG9tLm11bHRpcGxlLCB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgIG1pbWVUeXBlczogY3VzdG9tLm1pbWVUeXBlcyxcbiAgICAgICAgICAgICAgICBtYXhTaXplOiBjdXN0b20ubWF4U2l6ZSxcbiAgICAgICAgICAgIH0sIGZpbGVzOiBmaWxlc1RvVXBsb2FkIH0pLFxuICAgICAgICAhY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBwYXRoICYmICFmaWxlc1RvVXBsb2FkLmxlbmd0aCAmJiBmaWxlICE9PSBudWxsICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBmaWxlbmFtZToga2V5LCBzcmM6IHBhdGgsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUgfSkpLFxuICAgICAgICBjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBrZXkubWFwKChzaW5nbGVLZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxuICAgICAgICAgICAgLy8ga2V5IGlzIHN0aWxsIHRoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gbWFpbnRhaW4gYWxsIHRoZSBpbmRleGVzLiBTbyBoZXJlIHdlIHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHBhdGhbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGtleTogc2luZ2xlS2V5LCBmaWxlbmFtZTogc2luZ2xlS2V5LCBzcmM6IHBhdGhbaW5kZXhdLCBvblJlbW92ZTogKCkgPT4gaGFuZGxlTXVsdGlSZW1vdmUoc2luZ2xlS2V5KSB9KSkgOiAnJztcbiAgICAgICAgfSkpKSA6ICcnKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgICAnYXVkaW8vYWFjJyxcbiAgICAnYXVkaW8vbWlkaScsXG4gICAgJ2F1ZGlvL3gtbWlkaScsXG4gICAgJ2F1ZGlvL21wZWcnLFxuICAgICdhdWRpby9vZ2cnLFxuICAgICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAgICdhdWRpby9vcHVzJyxcbiAgICAnYXVkaW8vd2F2JyxcbiAgICAnYXVkaW8vd2VibScsXG4gICAgJ2F1ZGlvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICAgJ3ZpZGVvL21wZWcnLFxuICAgICd2aWRlby9vZ2cnLFxuICAgICd2aWRlby9tcDJ0JyxcbiAgICAndmlkZW8vd2VibScsXG4gICAgJ3ZpZGVvLzNncHAnLFxuICAgICd2aWRlby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAgICdpbWFnZS9ibXAnLFxuICAgICdpbWFnZS9naWYnLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UvcG5nJyxcbiAgICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICAgJ2ltYWdlL3RpZmYnLFxuICAgICdpbWFnZS93ZWJwJyxcbl07XG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dO1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAgICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAgICdhcHBsaWNhdGlvbi9ydGYnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dO1xuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICAgJ3RleHQvY3NzJyxcbiAgICAndGV4dC9jc3YnLFxuICAgICd0ZXh0L2h0bWwnLFxuICAgICd0ZXh0L2NhbGVuZGFyJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICd0ZXh0L3BsYWluJyxcbiAgICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAndGV4dC94bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dO1xuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2ZvbnQvb3RmJyxcbiAgICAnZm9udC90dGYnLFxuICAgICdmb250L3dvZmYnLFxuICAgICdmb250L3dvZmYyJyxcbl07XG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICAgJ3ZuZC52aXNpbycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gICAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gICAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gICAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gICAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgICAuLi5UZXh0TWltZVR5cGVzLFxuICAgIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gICAgLi4uRm9udE1pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbl07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyc7XG5jb25zdCBTaW5nbGVGaWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzO1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcGF0aCwgc3R5bGU6IHsgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH0sIGFsdDogbmFtZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgeyBjb250cm9sczogdHJ1ZSwgc3JjOiBwYXRoIH0sXG4gICAgICAgICAgICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImF1ZGlvXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCB7IGtpbmQ6IFwiY2FwdGlvbnNcIiB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGFzOiBcImFcIiwgaHJlZjogcGF0aCwgbWw6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtXCIsIHJvdW5kZWQ6IHRydWUsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiRG9jdW1lbnREb3dubG9hZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtcjogXCJkZWZhdWx0XCIgfSksXG4gICAgICAgICAgICBuYW1lKSkpO1xufTtcbmNvbnN0IEZpbGUgPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGxldCBwYXRoID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgPyBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA6IGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eVxuICAgICAgICAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpO1xuICAgIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgICAgICBwYXRoID0gYCR7Y3VzdG9tLm9wdHMuYmFzZVVybH0vJHtuYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsgcGF0aDogcGF0aCwgbmFtZTogbmFtZSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGUgfSkpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gY3VzdG9tLm9wdHMuYmFzZVVybCB8fCAnJztcbiAgICAgICAgcGF0aCA9IHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gYCR7YmFzZVVybH0vJHtuYW1lW2luZGV4XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsga2V5OiBzaW5nbGVQYXRoLCBwYXRoOiBzaW5nbGVQYXRoLCBuYW1lOiBuYW1lW2luZGV4XSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGVbaW5kZXhdIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiAxMDAsIC4uLnByb3BzIH0pKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBTaG93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IFwiMTAwJVwiLCAuLi5wcm9wcyB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNob3c7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDdXN0b21VcGxvYWRFZGl0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5DdXN0b21VcGxvYWRFZGl0ID0gQ3VzdG9tVXBsb2FkRWRpdFxuaW1wb3J0IFRodW1iIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RodW1iJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UaHVtYiA9IFRodW1iXG5pbXBvcnQgR3JvdXBlZFByaWNlcyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZFByaWNlcyA9IEdyb3VwZWRQcmljZXNcbmltcG9ydCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyb3VwZWQtZGlzcG9uaWJpbGl0aWVzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Hcm91cGVkRGlzcG9uaWJpbGl0aWVzID0gR3JvdXBlZERpc3BvbmliaWxpdGllc1xuaW1wb3J0IFNob3dQcm9kdWN0SW1hZ2UgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc2hvdy1tZWRpYSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2hvd1Byb2R1Y3RJbWFnZSA9IFNob3dQcm9kdWN0SW1hZ2VcbmltcG9ydCBGb3JtYXR0ZWREYXRlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Gb3JtYXR0ZWREYXRlID0gRm9ybWF0dGVkRGF0ZVxuaW1wb3J0IFJlZGlyZWN0RGFzaGJvYXJkIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUmVkaXJlY3REYXNoYm9hcmQgPSBSZWRpcmVjdERhc2hib2FyZFxuaW1wb3J0IFN5bmNQcmljZXNBY3Rpb24gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc3luYy1idXR0b24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlN5bmNQcmljZXNBY3Rpb24gPSBTeW5jUHJpY2VzQWN0aW9uXG5pbXBvcnQgQ2F0ZWdvcmlhU2VsZWN0UmVhbCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNhdGVnb3JpYVNlbGVjdFJlYWwgPSBDYXRlZ29yaWFTZWxlY3RSZWFsXG5pbXBvcnQgUGVyaW9kb1NlbGVjdCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9wZXJpb2RvLXNlbGVjdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUGVyaW9kb1NlbGVjdCA9IFBlcmlvZG9TZWxlY3RcbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnQiXSwibmFtZXMiOlsiVXBsb2FkRWRpdCIsInByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaHRtbEZvciIsInByb3BlcnR5IiwibmFtZSIsImlkIiwidHlwZSIsIlRodW1iIiwicmVjb3JkIiwidXJsIiwicGFyYW1zIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkdyb3VwZWRQcmljZXMiLCJvbkNoYW5nZSIsInByZWNvVW5pY28iLCJwcmVjb01lZGlvIiwicHJlY29HcmFuZGUiLCJwcmVjb0luZGl2aWR1YWwiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJCb3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1yIiwibWIiLCJGb3JtR3JvdXAiLCJMYWJlbCIsIklucHV0Iiwic3RlcCIsIkdyb3VwZWREaXNwb25pYmlsaXRpZXMiLCJqYW50YXIiLCJkZWxpdmVyeSIsImhhbmRsZUNoYW5nZUphbnRhciIsImUiLCJjaGVja2VkIiwiaGFuZGxlQ2hhbmdlRGVsaXZlcnkiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiQ2hlY2tCb3giLCJtYXJnaW5SaWdodCIsIlNob3dQcm9kdWN0SW1hZ2UiLCJmaWVsZE5hbWUiLCJtZWRpYUtleSIsImFsdEtleSIsIm1lZGlhUGF0aCIsImFsdFRleHQiLCJmdWxsVXJsIiwic3RhcnRzV2l0aCIsImxhYmVsIiwibXQiLCJlbmRzV2l0aCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29udHJvbHMiLCJjb2xvciIsIkZvcm1hdHRlZERhdGUiLCJyYXdWYWx1ZSIsInBhdGgiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiUmVkaXJlY3REYXNoYm9hcmQiLCJuYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwidXNlRWZmZWN0IiwiU3luY1ByaWNlc0FjdGlvbiIsIm5vdGljZSIsIm1lc3NhZ2UiLCJhbGVydCIsImhhbmRsZUJhY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsInZhcmlhbnQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiQnV0dG9uIiwib25DbGljayIsImljb24iLCJDYXRlZ29yaWFTZWxlY3RSZWFsIiwiY2F0ZWdvcmlhcyIsInNldENhdGVnb3JpYXMiLCJ1c2VTdGF0ZSIsIm5vdmFDYXRlZ29yaWEiLCJzZXROb3ZhQ2F0ZWdvcmlhIiwic2VsZWN0ZWRDYXRlZ29yaWFzIiwic2V0U2VsZWN0ZWRDYXRlZ29yaWFzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaENhdGVnb3JpYXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRWYWx1ZSIsImNhdGVnb3JpYXNJbmRleGFkYXMiLCJpbmRleCIsInVuZGVmaW5lZCIsInB1c2giLCJjYW1pbmhvcyIsInBvcHVsYXRlZCIsImZvckVhY2giLCJjYW1pbmhvIiwiZmluZCIsIkFycmF5IiwiaXNBcnJheSIsInByb2Nlc3NlZElkcyIsIm1hcCIsIml0ZW0iLCJTdHJpbmciLCJfaWQiLCJmaWx0ZXIiLCJ1bmlxdWVJZHMiLCJTZXQiLCJjIiwibm9tZSIsIm1hdGNoZXMiLCJzZWxlY3RlZElkIiwic29tZSIsImNhdCIsImlzRWRpdE1vZGUiLCJPYmplY3QiLCJrZXlzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJyZWNvcmRzIiwiY2F0ZWdvcmlhc0Zvcm1hdGFkYXMiLCJjb3IiLCJlcnJvciIsImhhbmRsZUNyZWF0ZUNhdGVnb3JpYSIsInRyaW0iLCJwYXlsb2FkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJuZXdDYXRlZ29yaWEiLCJwcmV2IiwibmV3U2VsZWN0ZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9ybVJlc3BvbnNlIiwiRXJyb3IiLCJoYW5kbGVDYXRlZ29yaWFDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImNhdGVnb3JpYUlkIiwiaXNTZWxlY3RlZCIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwicCIsImJhY2tncm91bmRDb2xvciIsIlRleHQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiZmxleCIsImRpc2FibGVkIiwiYm9yZGVyIiwiY2F0ZWdvcmlhIiwib3ZlcmZsb3dZIiwic3RvcFByb3BhZ2F0aW9uIiwibWwiLCJQZXJpb2RvU2VsZWN0Iiwic2VsZWN0ZWRQZXJpb2RvIiwic2V0U2VsZWN0ZWRQZXJpb2RvIiwiaGFuZGxlUGVyaW9kb0NoYW5nZSIsInBlcmlvZG8iLCJwZXJpb2RvcyIsIm1pbldpZHRoIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0IiwiYm9yZGVyQ29sb3IiLCJvbk1vdXNlTGVhdmUiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJmbGF0IiwiRHJvcFpvbmUiLCJEcm9wWm9uZUl0ZW0iLCJJY29uIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiQ3VzdG9tVXBsb2FkRWRpdCIsIlVwbG9hZEVkaXRDb21wb25lbnQiLCJVcGxvYWRMaXN0Q29tcG9uZW50IiwiVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7RUFBQTtFQUNBO0VBQ0E7RUFJQSxNQUFNQSxVQUF1QyxHQUFJQyxLQUFLLGlCQUNwREMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLGVBQ0VELHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxPQUFBLEVBQUE7RUFBT0MsRUFBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJLFFBQVEsQ0FBQ0M7RUFBSyxDQUFBLEVBQUMsUUFBYSxDQUFDLGVBQ25ESixzQkFBQSxDQUFBQyxhQUFBLENBQUEsT0FBQSxFQUFBO0VBQU9JLEVBQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDSSxRQUFRLENBQUNDLElBQUs7RUFBQ0UsRUFBQUEsSUFBSSxFQUFDLE1BQU07RUFBQ0YsRUFBQUEsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUN0RCxDQUNOOztFQ1hEO0VBQ0E7RUFDQTtFQUlBLFNBQVNHLEtBQUtBLENBQUNSLEtBQUssRUFBRTtJQUNwQixNQUFNO0VBQUVTLElBQUFBO0VBQU8sR0FBQyxHQUFHVCxLQUFLO0lBQ3hCLE1BQU1VLEdBQUcsR0FBRyxDQUE0REQseURBQUFBLEVBQUFBLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRCxHQUFHLENBQUUsQ0FBQTtJQUUzRixJQUFJLENBQUNBLEdBQUcsRUFBRTtFQUNSLElBQUEsb0JBQU9ULHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxFQUFNLFVBQWMsQ0FBQztFQUM5QjtJQUVBLG9CQUNFRCxzQkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBO0VBQ0VVLElBQUFBLEdBQUcsRUFBRUYsR0FBSTtFQUNURyxJQUFBQSxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRSxHQUFHLElBQUksV0FBWTtFQUN0Q0MsSUFBQUEsS0FBSyxFQUFFO0VBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFNO0VBQUVDLE1BQUFBLE1BQU0sRUFBRTtFQUFPO0VBQUUsR0FDMUMsQ0FBQztFQUVOO0VBRUFSLEtBQUssQ0FBQ1MsU0FBUyxHQUFHO0VBQ2hCUixFQUFBQSxNQUFNLEVBQUVTLDBCQUFTLENBQUNDLEtBQUssQ0FBQztFQUN0QlIsSUFBQUEsTUFBTSxFQUFFTywwQkFBUyxDQUFDQyxLQUFLLENBQUM7RUFDdEJULE1BQUFBLEdBQUcsRUFBRVEsMEJBQVMsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVO1FBQ2hDUixHQUFHLEVBQUVLLDBCQUFTLENBQUNFO0VBQ2pCLEtBQUMsQ0FBQyxDQUFDQztFQUNMLEdBQUMsQ0FBQyxDQUFDQTtFQUNMLENBQUM7O0VDOUJEO0VBQ0E7RUFNQSxTQUFTQyxhQUFhQSxDQUFDdEIsS0FBSyxFQUFFO0lBQzVCLE1BQU07TUFBRVMsTUFBTTtFQUFFYyxJQUFBQTtFQUFTLEdBQUMsR0FBR3ZCLEtBQUs7SUFFbEMsTUFBTXdCLFVBQVUsR0FBR2YsTUFBTSxDQUFDRSxNQUFNLENBQUNhLFVBQVUsSUFBSSxFQUFFO0lBQ2pELE1BQU1DLFVBQVUsR0FBR2hCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDYyxVQUFVLElBQUksRUFBRTtJQUNqRCxNQUFNQyxXQUFXLEdBQUdqQixNQUFNLENBQUNFLE1BQU0sQ0FBQ2UsV0FBVyxJQUFJLEVBQUU7SUFDbkQsTUFBTUMsZUFBZSxHQUFHbEIsTUFBTSxDQUFDRSxNQUFNLENBQUNnQixlQUFlLElBQUksRUFBRTtFQUUzRCxFQUFBLE1BQU1DLFlBQVksR0FBSUMsS0FBSyxJQUFNQyxLQUFLLElBQUs7TUFDekNQLFFBQVEsQ0FBQ00sS0FBSyxFQUFFQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQ3BDO0VBRUQsRUFBQSxvQkFDRS9CLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ0MsSUFBQUEsT0FBTyxFQUFDLE1BQU07RUFBQ0MsSUFBQUEsYUFBYSxFQUFDLEtBQUs7RUFBQ0MsSUFBQUEsR0FBRyxFQUFDLE1BQU07RUFBQ3JCLElBQUFBLEtBQUssRUFBQztFQUFNLEdBQUEsZUFDN0RkLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFDRmxCLElBQUFBLEtBQUssRUFBQyxLQUFLO0VBQ1hzQixJQUFBQSxFQUFFLEVBQUMsTUFBTTtFQUNUQyxJQUFBQSxFQUFFLEVBQUM7RUFBTSxHQUFBLGVBRVRyQyxzQkFBQSxDQUFBQyxhQUFBLENBQUNxQyxzQkFBUyxFQUFBLElBQUEsZUFDUnRDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3NDLGtCQUFLLEVBQUEsSUFBQSxFQUFDLG1CQUFrQixDQUFDLGVBQzFCdkMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDdUMsa0JBQUssRUFBQTtFQUNKbEMsSUFBQUEsSUFBSSxFQUFDLFFBQVE7RUFDYnlCLElBQUFBLEtBQUssRUFBRVIsVUFBVztFQUNsQkQsSUFBQUEsUUFBUSxFQUFFSyxZQUFZLENBQUMsWUFBWSxDQUFFO0VBQ3JDYyxJQUFBQSxJQUFJLEVBQUM7S0FDTixDQUNRLENBQ1IsQ0FBQyxlQUNOekMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0JBQUcsRUFBQTtFQUNGbEIsSUFBQUEsS0FBSyxFQUFDLEtBQUs7RUFDWHNCLElBQUFBLEVBQUUsRUFBQyxNQUFNO0VBQ1RDLElBQUFBLEVBQUUsRUFBQztFQUFNLEdBQUEsZUFFVHJDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3FDLHNCQUFTLEVBQUEsSUFBQSxlQUNSdEMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDc0Msa0JBQUssRUFBQSxJQUFBLEVBQUMsbUJBQWtCLENBQUMsZUFDMUJ2QyxzQkFBQSxDQUFBQyxhQUFBLENBQUN1QyxrQkFBSyxFQUFBO0VBQ0psQyxJQUFBQSxJQUFJLEVBQUMsUUFBUTtFQUNieUIsSUFBQUEsS0FBSyxFQUFFUCxVQUFXO0VBQ2xCRixJQUFBQSxRQUFRLEVBQUVLLFlBQVksQ0FBQyxZQUFZLENBQUU7RUFDckNjLElBQUFBLElBQUksRUFBQztLQUNOLENBQ1EsQ0FDUixDQUFDLGVBQ056QyxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQ0ZsQixJQUFBQSxLQUFLLEVBQUMsS0FBSztFQUNYc0IsSUFBQUEsRUFBRSxFQUFDLE1BQU07RUFDVEMsSUFBQUEsRUFBRSxFQUFDO0VBQU0sR0FBQSxlQUVUckMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDcUMsc0JBQVMsRUFBQSxJQUFBLGVBQ1J0QyxzQkFBQSxDQUFBQyxhQUFBLENBQUNzQyxrQkFBSyxFQUFBLElBQUEsRUFBQyxpQkFBbUIsQ0FBQyxlQUMzQnZDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLGtCQUFLLEVBQUE7RUFDSmxDLElBQUFBLElBQUksRUFBQyxRQUFRO0VBQ2J5QixJQUFBQSxLQUFLLEVBQUVOLFdBQVk7RUFDbkJILElBQUFBLFFBQVEsRUFBRUssWUFBWSxDQUFDLGFBQWEsQ0FBRTtFQUN0Q2MsSUFBQUEsSUFBSSxFQUFDO0tBQ04sQ0FDUSxDQUNSLENBQUMsZUFDTnpDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ2xCLElBQUFBLEtBQUssRUFBQztFQUFLLEdBQUEsZUFDZGQsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDcUMsc0JBQVMsRUFBQSxJQUFBLGVBQ1J0QyxzQkFBQSxDQUFBQyxhQUFBLENBQUNzQyxrQkFBSyxFQUFBLElBQUEsRUFBQyxxQkFBdUIsQ0FBQyxlQUMvQnZDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLGtCQUFLLEVBQUE7RUFDSmxDLElBQUFBLElBQUksRUFBQyxRQUFRO0VBQ2J5QixJQUFBQSxLQUFLLEVBQUVMLGVBQWdCO0VBQ3ZCSixJQUFBQSxRQUFRLEVBQUVLLFlBQVksQ0FBQyxpQkFBaUIsQ0FBRTtFQUMxQ2MsSUFBQUEsSUFBSSxFQUFDO0tBQ04sQ0FDUSxDQUNSLENBQ0YsQ0FBQztFQUVWOztFQy9FQTtFQUNBO0VBQ0E7RUFDQTtFQUtBLE1BQU1DLHNCQUFtRCxHQUFHQSxDQUFDO0lBQUVsQyxNQUFNO0VBQUVjLEVBQUFBO0VBQVMsQ0FBQyxLQUFLO0lBQ3BGLE1BQU1xQixNQUFNLEdBQUduQyxNQUFNLENBQUNFLE1BQU0sQ0FBQ2lDLE1BQU0sSUFBSSxLQUFLO0lBQzVDLE1BQU1DLFFBQVEsR0FBR3BDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDa0MsUUFBUSxJQUFJLEtBQUs7SUFFaEQsTUFBTUMsa0JBQWtCLEdBQUlDLENBQXNDLElBQUs7TUFDckV4QixRQUFRLENBQUMsUUFBUSxFQUFFd0IsQ0FBQyxDQUFDaEIsTUFBTSxDQUFDaUIsT0FBTyxDQUFDO0tBQ3JDO0lBRUQsTUFBTUMsb0JBQW9CLEdBQUlGLENBQXNDLElBQUs7TUFDdkV4QixRQUFRLENBQUMsVUFBVSxFQUFFd0IsQ0FBQyxDQUFDaEIsTUFBTSxDQUFDaUIsT0FBTyxDQUFDO0tBQ3ZDO0lBRUQsb0JBQ0UvQyxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxxQkFDRmhDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3NDLGtCQUFLLEVBQUE7RUFBQ1UsSUFBQUEsVUFBVSxFQUFDLE1BQU07RUFBQ1osSUFBQUEsRUFBRSxFQUFDO0VBQVMsR0FBQSxFQUFDLHVCQUUvQixDQUFDLGVBQ1JyQyxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNDLElBQUFBLE9BQU8sRUFBQyxNQUFNO0VBQUNFLElBQUFBLEdBQUcsRUFBQyxJQUFJO0VBQUNlLElBQUFBLFFBQVEsRUFBQyxNQUFNO0VBQUNiLElBQUFBLEVBQUUsRUFBQztFQUFNLEdBQUEsZUFDcERyQyxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNsQixJQUFBQSxLQUFLLEVBQUMsS0FBSztFQUFDbUIsSUFBQUEsT0FBTyxFQUFDLE1BQU07RUFBQ2tCLElBQUFBLFVBQVUsRUFBQyxRQUFRO0VBQUNoQixJQUFBQSxHQUFHLEVBQUM7RUFBSSxHQUFBLGVBQzFEbkMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDc0Msa0JBQUssRUFBQTtFQUFDckMsSUFBQUEsT0FBTyxFQUFDLFFBQVE7RUFBQytCLElBQUFBLE9BQU8sRUFBQyxNQUFNO0VBQUNrQixJQUFBQSxVQUFVLEVBQUMsUUFBUTtFQUFDQyxJQUFBQSxNQUFNLEVBQUMsU0FBUztFQUFDakIsSUFBQUEsR0FBRyxFQUFDO0VBQUksR0FBQSxlQUNsRm5DLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ29ELHFCQUFRLEVBQUE7RUFDUGhELElBQUFBLEVBQUUsRUFBQyxRQUFRO0VBQ1gwQyxJQUFBQSxPQUFPLEVBQUVKLE1BQU87RUFDaEJyQixJQUFBQSxRQUFRLEVBQUV1QixrQkFBbUI7RUFDN0IsSUFBQSxZQUFBLEVBQVcsMkJBQXdCO0VBQ25DaEMsSUFBQUEsS0FBSyxFQUFFO0VBQUV5QyxNQUFBQSxXQUFXLEVBQUU7RUFBUztFQUFFLEdBQ2xDLENBQUMsRUFDRCxHQUFHLEVBQ0gsR0FBRyxFQUFDLDJCQUVBLENBQ0osQ0FBQyxlQUNOdEQsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0JBQUcsRUFBQTtFQUFDbEIsSUFBQUEsS0FBSyxFQUFDLEtBQUs7RUFBQ21CLElBQUFBLE9BQU8sRUFBQyxNQUFNO0VBQUNrQixJQUFBQSxVQUFVLEVBQUMsUUFBUTtFQUFDaEIsSUFBQUEsR0FBRyxFQUFDO0VBQUksR0FBQSxlQUMxRG5DLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3NDLGtCQUFLLEVBQUE7RUFBQ3JDLElBQUFBLE9BQU8sRUFBQyxVQUFVO0VBQUMrQixJQUFBQSxPQUFPLEVBQUMsTUFBTTtFQUFDa0IsSUFBQUEsVUFBVSxFQUFDLFFBQVE7RUFBQ0MsSUFBQUEsTUFBTSxFQUFDLFNBQVM7RUFBQ2pCLElBQUFBLEdBQUcsRUFBQztFQUFJLEdBQUEsZUFDcEZuQyxzQkFBQSxDQUFBQyxhQUFBLENBQUNvRCxxQkFBUSxFQUFBO0VBQ1BoRCxJQUFBQSxFQUFFLEVBQUMsVUFBVTtFQUNiMEMsSUFBQUEsT0FBTyxFQUFFSCxRQUFTO0VBQ2xCdEIsSUFBQUEsUUFBUSxFQUFFMEIsb0JBQXFCO0VBQy9CLElBQUEsWUFBQSxFQUFXLDZCQUEwQjtFQUNyQ25DLElBQUFBLEtBQUssRUFBRTtFQUFFeUMsTUFBQUEsV0FBVyxFQUFFO0VBQVM7S0FDaEMsQ0FBQyxFQUNELEdBQUcsRUFDSCxHQUFHLEVBQUMsNkJBRUEsQ0FDSixDQUNGLENBQ0YsQ0FBQztFQUVWLENBQUM7O0VDekREO0VBQ0E7RUFDQTtFQUtBLE1BQU1DLGdCQUE2QyxHQUFHQSxDQUFDO0lBQUUvQyxNQUFNO0VBQUVMLEVBQUFBO0VBQVMsQ0FBQyxLQUFLO0VBQzlFLEVBQUEsSUFBSSxDQUFDSyxNQUFNLElBQUksQ0FBQ0wsUUFBUSxFQUFFLE9BQU8sSUFBSTtFQUVyQyxFQUFBLE1BQU1xRCxTQUFTLEdBQUdyRCxRQUFRLENBQUNDLElBQUksQ0FBQztFQUNoQyxFQUFBLE1BQU1xRCxRQUFRLEdBQUcsQ0FBQSxFQUFHRCxTQUFTLENBQUEsR0FBQSxDQUFLLENBQUM7RUFDbkMsRUFBQSxNQUFNRSxNQUFNLEdBQUcsQ0FBR0YsRUFBQUEsU0FBUyxDQUFLLEdBQUEsQ0FBQTtFQUVoQyxFQUFBLE1BQU1HLFNBQVMsR0FBR25ELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHK0MsUUFBUSxDQUFDO0lBQzNDLE1BQU1HLE9BQU8sR0FBR3BELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHZ0QsTUFBTSxDQUFDLElBQUksRUFBRTs7RUFFN0M7RUFDQSxFQUFBLE1BQU1HLE9BQU8sR0FBR0YsU0FBUyxHQUNwQkEsU0FBUyxDQUFDRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQ3pCSCxTQUFTLEdBQ1QsNERBQTREQSxTQUFTLENBQUEsQ0FBRSxHQUMzRSxJQUFJO0VBRVIsRUFBQSxvQkFDRTNELHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ0ssSUFBQUEsRUFBRSxFQUFDO0VBQU0sR0FBQSxlQUNackMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDc0Msa0JBQUssRUFBQSxJQUFBLEVBQUVwQyxRQUFRLENBQUM0RCxLQUFLLElBQUksUUFBZ0IsQ0FBQyxFQUMxQ0YsT0FBTyxnQkFDTjdELHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ2dDLElBQUFBLEVBQUUsRUFBQztLQUNMSCxFQUFBQSxPQUFPLENBQUNJLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQ3ZCakUsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE9BQUEsRUFBQTtFQUNFVSxJQUFBQSxHQUFHLEVBQUVrRCxPQUFRO0VBQ2JoRCxJQUFBQSxLQUFLLEVBQUU7RUFBRXFELE1BQUFBLFFBQVEsRUFBRSxNQUFNO0VBQUVDLE1BQUFBLFNBQVMsRUFBRSxPQUFPO0VBQUVDLE1BQUFBLFlBQVksRUFBRTtPQUFJO01BQ2pFQyxRQUFRLEVBQUE7RUFBQSxHQUNULENBQUMsZ0JBRUZyRSxzQkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBO0VBQ0VVLElBQUFBLEdBQUcsRUFBRWtELE9BQVE7RUFDYmpELElBQUFBLEdBQUcsRUFBRWdELE9BQU8sSUFBSSxDQUFBLFNBQUEsRUFBWUosU0FBUyxDQUFHLENBQUE7RUFDeEMzQyxJQUFBQSxLQUFLLEVBQUU7RUFBRXFELE1BQUFBLFFBQVEsRUFBRSxNQUFNO0VBQUVDLE1BQUFBLFNBQVMsRUFBRSxPQUFPO0VBQUVDLE1BQUFBLFlBQVksRUFBRTtFQUFFO0tBQ2hFLENBQ0YsRUFDQVIsT0FBTyxpQkFDTjVELHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ2dDLElBQUFBLEVBQUUsRUFBQyxJQUFJO0VBQUNNLElBQUFBLEtBQUssRUFBQztLQUNoQlYsRUFBQUEsT0FDRSxDQUVKLENBQUMsZ0JBRU41RCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNnQyxJQUFBQSxFQUFFLEVBQUMsU0FBUztFQUFDTSxJQUFBQSxLQUFLLEVBQUM7RUFBUSxHQUFBLEVBQzdCVixPQUFPLElBQUksMkJBQ1QsQ0FFSixDQUFDO0VBRVYsQ0FBQzs7RUN2REQ7RUFDQTtFQUNBO0VBQ0E7RUFLQSxNQUFNVyxhQUEwQyxHQUFHQSxDQUFDO0lBQUUvRCxNQUFNO0VBQUVMLEVBQUFBO0VBQVMsQ0FBQyxLQUFLO0lBQzNFLE1BQU1xRSxRQUFRLEdBQUdoRSxNQUFNLENBQUNFLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDc0UsSUFBSSxDQUFDO0VBRTdDLEVBQUEsSUFBSSxDQUFDRCxRQUFRLEVBQUUsT0FBTyxJQUFJO0VBRTFCLEVBQUEsTUFBTUUsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQ0gsUUFBUSxDQUFDO0VBQy9CLEVBQUEsTUFBTUksU0FBUyxHQUFHRixJQUFJLENBQUNHLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtFQUNqREMsSUFBQUEsR0FBRyxFQUFFLFNBQVM7RUFDZEMsSUFBQUEsS0FBSyxFQUFFLFNBQVM7RUFDaEJDLElBQUFBLElBQUksRUFBRTtFQUNSLEdBQUMsQ0FBQztFQUNGLEVBQUEsTUFBTUMsSUFBSSxHQUFHUCxJQUFJLENBQUNRLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtFQUM1Q0MsSUFBQUEsSUFBSSxFQUFFLFNBQVM7RUFDZkMsSUFBQUEsTUFBTSxFQUFFO0VBQ1YsR0FBQyxDQUFDO0lBRUYsb0JBQ0VwRixzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUNENEMsSUFBQUEsRUFBQUEsU0FBUyxFQUNULEdBQUcsRUFDSEssSUFDRSxDQUFDO0VBRVYsQ0FBQzs7RUM1QkQsU0FBU0ksaUJBQWlCQSxHQUFHO0VBQzNCLEVBQUEsTUFBTUMsUUFBUSxHQUFHQyx1QkFBVyxFQUFFO0VBRTlCQyxFQUFBQSxlQUFTLENBQUMsTUFBTTtFQUNkRixJQUFBQSxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztFQUN4QyxHQUFDLEVBQUUsQ0FBQ0EsUUFBUSxDQUFDLENBQUM7RUFFZCxFQUFBLE9BQU8sSUFBSTtFQUNiOztFQ1hBO0VBQ0E7RUFDQTtFQUNBO0VBTUEsTUFBTUcsZ0JBQWdCLEdBQUkxRixLQUFLLElBQUs7SUFDbEMsTUFBTTtFQUFFMkYsSUFBQUE7RUFBTyxHQUFDLEdBQUczRixLQUFLO0lBRXhCQyxzQkFBSyxDQUFDd0YsU0FBUyxDQUFDLE1BQU07RUFDcEIsSUFBQSxJQUFJRSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO0VBQzVCO0VBQ0FDLE1BQUFBLEtBQUssQ0FBQ0YsTUFBTSxDQUFDQyxPQUFPLENBQUM7RUFDdkI7RUFDRixHQUFDLEVBQUUsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7O0VBRVo7SUFDQSxNQUFNRyxVQUFVLEdBQUdBLE1BQU07RUFDdkI7RUFDQTtFQUNBO0VBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLEVBQUU7S0FDdEI7RUFFRCxFQUFBLG9CQUNFaEcsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0JBQUcsRUFBQTtFQUFDaUUsSUFBQUEsT0FBTyxFQUFDLFNBQVM7RUFBQ0MsSUFBQUEsT0FBTyxFQUFDO0VBQUksR0FBQSxlQUVqQ2xHLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ2dDLElBQUFBLEVBQUUsRUFBQyxTQUFTO0VBQUMzQixJQUFBQSxFQUFFLEVBQUMsTUFBTTtFQUFDeEIsSUFBQUEsS0FBSyxFQUFFO0VBQUV5RCxNQUFBQSxLQUFLLEVBQUUsU0FBUztFQUFFNkIsTUFBQUEsWUFBWSxFQUFFO0VBQU87RUFBRSxHQUFBLEVBQUMscUlBRzFFLENBQUMsZUFDTm5HLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ21HLG1CQUFNLEVBQUE7RUFDTEgsSUFBQUEsT0FBTyxFQUFDLFNBQVM7RUFDakJJLElBQUFBLE9BQU8sRUFBRVIsVUFBVztFQUNwQlMsSUFBQUEsSUFBSSxFQUFDO0tBRUosRUFBQSx3QkFDSyxDQUNMLENBQUM7RUFFVixDQUFDOztFQzNDRDtFQUNBO0VBa0JBLE1BQU1DLG1CQUFnRCxHQUFJeEcsS0FBSyxJQUFLO0lBQ2xFLE1BQU07TUFBRUksUUFBUTtNQUFFbUIsUUFBUTtFQUFFZCxJQUFBQTtFQUFPLEdBQUMsR0FBR1QsS0FBSztJQUM1QyxNQUFNLENBQUN5RyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHQyxjQUFRLENBQWMsRUFBRSxDQUFDO0lBQzdELE1BQU0sQ0FBQ0MsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHRixjQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ0csa0JBQWtCLEVBQUVDLHFCQUFxQixDQUFDLEdBQUdKLGNBQVEsQ0FBVyxFQUFFLENBQUM7SUFDMUUsTUFBTSxDQUFDSyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHTixjQUFRLENBQUMsS0FBSyxDQUFDOztFQUU3QztFQUNBbEIsRUFBQUEsZUFBUyxDQUFDLE1BQU07RUFDZHlCLElBQUFBLGVBQWUsRUFBRTtLQUNsQixFQUFFLEVBQUUsQ0FBQzs7RUFFTjtFQUNBekIsRUFBQUEsZUFBUyxDQUFDLE1BQU07RUFDZCxJQUFBLElBQUlnQixVQUFVLENBQUNVLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBTzs7RUFFcENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNEQUFzRCxDQUFDO01BQ25FRCxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRVosVUFBVSxDQUFDVSxNQUFNLENBQUM7RUFDM0RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQzlHLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDL0UyRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRWpILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO01BRS9DK0csT0FBTyxDQUFDQyxHQUFHLENBQUUsaUNBQWlDLEVBQUk1RyxNQUFNLEVBQUVFLE1BQU0sQ0FBQztFQUNqRTtNQUNBLElBQUk2RyxZQUFZLEdBQUcsSUFBSTs7RUFFdkI7TUFDQSxJQUFJL0csTUFBTSxFQUFFRSxNQUFNLEVBQUU7UUFDbEIsTUFBTThHLG1CQUFtQixHQUFHLEVBQUU7UUFDOUIsSUFBSUMsS0FBSyxHQUFHLENBQUM7O0VBRWI7UUFDQSxPQUFPakgsTUFBTSxDQUFDRSxNQUFNLENBQUMsQ0FBQSxXQUFBLEVBQWMrRyxLQUFLLENBQUUsQ0FBQSxDQUFDLEtBQUtDLFNBQVMsRUFBRTtVQUN6REYsbUJBQW1CLENBQUNHLElBQUksQ0FBQ25ILE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLENBQWMrRyxXQUFBQSxFQUFBQSxLQUFLLENBQUUsQ0FBQSxDQUFDLENBQUM7RUFDOURBLFFBQUFBLEtBQUssRUFBRTtFQUNUO0VBRUEsTUFBQSxJQUFJRCxtQkFBbUIsQ0FBQ04sTUFBTSxHQUFHLENBQUMsRUFBRTtFQUNsQ0ssUUFBQUEsWUFBWSxHQUFHQyxtQkFBbUI7RUFDbENMLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlEQUFpRCxFQUFFSSxtQkFBbUIsQ0FBQztFQUNyRjtFQUNGOztFQUVBO01BQ0EsSUFBSSxDQUFDRCxZQUFZLEVBQUU7RUFDakIsTUFBQSxNQUFNSyxRQUFRLEdBQUcsQ0FDZnBILE1BQU0sRUFBRUUsTUFBTSxHQUFHUCxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUMvQkksTUFBTSxHQUFHTCxRQUFRLENBQUNDLElBQUksQ0FBQyxFQUN2QkksTUFBTSxFQUFFRSxNQUFNLEVBQUU4RixVQUFVLEVBQzFCaEcsTUFBTSxFQUFFcUgsU0FBUyxHQUFHMUgsUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFDbENJLE1BQU0sRUFBRXFILFNBQVMsRUFBRXJCLFVBQVUsQ0FDOUI7RUFFRFcsTUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLENBQUM7RUFDakRRLE1BQUFBLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRU4sS0FBSyxLQUFLO1VBQ25DTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFBLFVBQUEsRUFBYUssS0FBSyxDQUFHLENBQUEsQ0FBQSxFQUFFTSxPQUFPLENBQUM7RUFDN0MsT0FBQyxDQUFDO0VBRUZSLE1BQUFBLFlBQVksR0FBR0ssUUFBUSxDQUFDSSxJQUFJLENBQUNELE9BQU8sSUFBSUEsT0FBTyxLQUFLTCxTQUFTLElBQUlLLE9BQU8sS0FBSyxJQUFJLENBQUM7RUFDcEY7RUFFQVosSUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVHLFlBQVksQ0FBQztFQUN0REosSUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBT0csWUFBWSxFQUFFVSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1gsWUFBWSxDQUFDLENBQUM7RUFFbEYsSUFBQSxJQUFJQSxZQUFZLElBQUlVLEtBQUssQ0FBQ0MsT0FBTyxDQUFDWCxZQUFZLENBQUMsSUFBSUEsWUFBWSxDQUFDTCxNQUFNLEdBQUcsQ0FBQyxFQUFFO0VBQzFFO0VBQ0EsTUFBQSxNQUFNaUIsWUFBWSxHQUFHWixZQUFZLENBQUNhLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJO1VBQzVDbEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVpQixJQUFJLEVBQUUsT0FBT0EsSUFBSSxDQUFDO0VBRXRELFFBQUEsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO0VBQzVCLFVBQUEsT0FBT0EsSUFBSTtXQUNaLE1BQU0sSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO0VBQ3BELFVBQUEsTUFBTWhJLEVBQUUsR0FBR2lJLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxHQUFHLElBQUlGLElBQUksQ0FBQ2hJLEVBQUUsSUFBSWdJLElBQUksQ0FBQztFQUM5Q2xCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixFQUFFL0csRUFBRSxDQUFDO0VBQ2hELFVBQUEsT0FBT0EsRUFBRTtFQUNYLFNBQUMsTUFBTTtZQUNMLE9BQU9pSSxNQUFNLENBQUNELElBQUksQ0FBQztFQUNyQjtFQUNGLE9BQUMsQ0FBQyxDQUFDRyxNQUFNLENBQUNuSSxFQUFFLElBQUlBLEVBQUUsSUFBSUEsRUFBRSxLQUFLLE1BQU0sSUFBSUEsRUFBRSxLQUFLLFdBQVcsQ0FBQzs7RUFFMUQ7UUFDQSxNQUFNb0ksU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJQyxHQUFHLENBQUNQLFlBQVksQ0FBQyxDQUFDO0VBRTVDaEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVxQixTQUFTLENBQUM7UUFDcER0QixPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRVosVUFBVSxDQUFDNEIsR0FBRyxDQUFDTyxDQUFDLEtBQUs7VUFBRXRJLEVBQUUsRUFBRXNJLENBQUMsQ0FBQ0osR0FBRztVQUFFSyxJQUFJLEVBQUVELENBQUMsQ0FBQ0M7U0FBTSxDQUFDLENBQUMsQ0FBQzs7RUFFM0c7UUFDQSxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDTSxVQUFVLElBQ3pDdEMsVUFBVSxDQUFDdUMsSUFBSSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ1QsR0FBRyxLQUFLTyxVQUFVLENBQy9DLENBQUM7RUFDRDNCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFeUIsT0FBTyxDQUFDO1FBRS9DL0IscUJBQXFCLENBQUMyQixTQUFTLENBQUM7RUFDbEMsS0FBQyxNQUFNO0VBQ0x0QixNQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQztRQUMxRE4scUJBQXFCLENBQUMsRUFBRSxDQUFDO0VBQzNCO0tBQ0QsRUFBRSxDQUFDTixVQUFVLENBQUNVLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0VBRXhCO0VBQ0EsRUFBQSxNQUFNK0IsVUFBVSxHQUFHekksTUFBTSxFQUFFSCxFQUFFLElBQUlHLE1BQU0sRUFBRUUsTUFBTSxFQUFFTCxFQUFFLElBQUtHLE1BQU0sSUFBSTBJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDM0ksTUFBTSxDQUFDRSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUN3RyxNQUFNLEdBQUcsQ0FBRTtJQUM5R0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU2QixVQUFVLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUNwRTlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRTVHLE1BQU0sRUFBRUgsRUFBRSxDQUFDO0lBQ3hDOEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUU1RyxNQUFNLEVBQUVFLE1BQU0sRUFBRUwsRUFBRSxDQUFDO0VBQ3ZEOEcsRUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUU4QixNQUFNLENBQUNDLElBQUksQ0FBQzNJLE1BQU0sRUFBRUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztFQUV4RTtFQUNBOEUsRUFBQUEsZUFBUyxDQUFDLE1BQU07RUFDZDJCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixFQUFFUCxrQkFBa0IsQ0FBQztNQUMvRE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVQLGtCQUFrQixDQUFDSyxNQUFNLENBQUM7RUFDMUQsR0FBQyxFQUFFLENBQUNMLGtCQUFrQixDQUFDLENBQUM7RUFFeEIsRUFBQSxNQUFNSSxlQUFlLEdBQUcsWUFBWTtNQUNsQyxJQUFJO0VBQ0YsTUFBQSxNQUFNbUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxxREFBcUQsQ0FBQztRQUNuRixJQUFJRCxRQUFRLENBQUNFLEVBQUUsRUFBRTtFQUNmLFFBQUEsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO1VBQ2xDLElBQUlELElBQUksQ0FBQ0UsT0FBTyxFQUFFO1lBQ2hCLE1BQU1DLG9CQUFvQixHQUFHSCxJQUFJLENBQUNFLE9BQU8sQ0FBQ3JCLEdBQUcsQ0FBRTVILE1BQVcsS0FBTTtFQUM5RCtILFlBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDOUgsTUFBTSxDQUFDSCxFQUFFLENBQUM7RUFDdEJ1SSxZQUFBQSxJQUFJLEVBQUVwSSxNQUFNLENBQUNFLE1BQU0sQ0FBQ2tJLElBQUk7RUFDeEJlLFlBQUFBLEdBQUcsRUFBRW5KLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDaUo7RUFDckIsV0FBQyxDQUFDLENBQUM7WUFDSGxELGFBQWEsQ0FBQ2lELG9CQUFvQixDQUFDO0VBQ3JDO0VBQ0Y7T0FDRCxDQUFDLE9BQU9FLEtBQUssRUFBRTtFQUNkekMsTUFBQUEsT0FBTyxDQUFDeUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFQSxLQUFLLENBQUM7RUFDdEQ7S0FDRDtFQUVELEVBQUEsTUFBTUMscUJBQXFCLEdBQUcsWUFBWTtNQUN4QyxJQUFJLENBQUNsRCxhQUFhLENBQUNtRCxJQUFJLEVBQUUsSUFBSS9DLE9BQU8sRUFBRTtNQUV0Q0MsVUFBVSxDQUFDLElBQUksQ0FBQztNQUNoQixJQUFJO0VBQ0Y7RUFDQSxNQUFBLE1BQU0rQyxPQUFPLEdBQUc7RUFDZG5CLFFBQUFBLElBQUksRUFBRWpDLGFBQWEsQ0FBQ21ELElBQUksRUFBRTtFQUMxQkgsUUFBQUEsR0FBRyxFQUFFO1NBQ047RUFFRCxNQUFBLE1BQU1QLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0RBQW9ELEVBQUU7RUFDakZXLFFBQUFBLE1BQU0sRUFBRSxNQUFNO0VBQ2RDLFFBQUFBLE9BQU8sRUFBRTtFQUNQLFVBQUEsY0FBYyxFQUFFO1dBQ2pCO0VBQ0RDLFFBQUFBLElBQUksRUFBRTdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDeUMsT0FBTztFQUM5QixPQUFDLENBQUM7UUFFRixJQUFJWCxRQUFRLENBQUNFLEVBQUUsRUFBRTtFQUNmLFFBQUEsTUFBTUMsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0VBRWxDLFFBQUEsTUFBTVcsWUFBdUIsR0FBRztZQUM5QjVCLEdBQUcsRUFBRUQsTUFBTSxDQUFDaUIsSUFBSSxDQUFDL0ksTUFBTSxDQUFDSCxFQUFFLENBQUM7RUFDM0J1SSxVQUFBQSxJQUFJLEVBQUVXLElBQUksQ0FBQy9JLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDa0ksSUFBSTtZQUM3QmUsR0FBRyxFQUFFSixJQUFJLENBQUMvSSxNQUFNLENBQUNFLE1BQU0sQ0FBQ2lKLEdBQUcsSUFBSTtXQUNoQzs7RUFFRDtVQUNBbEQsYUFBYSxDQUFDMkQsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSSxFQUFFRCxZQUFZLENBQUMsQ0FBQzs7RUFFOUM7VUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQyxHQUFHeEQsa0JBQWtCLEVBQUVzRCxZQUFZLENBQUM1QixHQUFHLENBQUM7VUFDN0R6QixxQkFBcUIsQ0FBQ3VELFdBQVcsQ0FBQzs7RUFFbEM7RUFDQSxRQUFBLElBQUkvSSxRQUFRLEVBQUU7RUFDWkEsVUFBQUEsUUFBUSxDQUFDbkIsUUFBUSxDQUFDQyxJQUFJLEVBQUVpSyxXQUFXLENBQUM7RUFDdEM7VUFFQXpELGdCQUFnQixDQUFDLEVBQUUsQ0FBQztFQUNwQmhCLFFBQUFBLEtBQUssQ0FBQyxDQUFnQnVFLGFBQUFBLEVBQUFBLFlBQVksQ0FBQ3ZCLElBQUksV0FBVyxDQUFDO0VBQ3JELE9BQUMsTUFBTTtFQUNMO0VBQ0EsUUFBQSxNQUFNMEIsUUFBUSxHQUFHLElBQUlDLFFBQVEsRUFBRTtVQUMvQkQsUUFBUSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFN0QsYUFBYSxDQUFDbUQsSUFBSSxFQUFFLENBQUM7RUFDN0NRLFFBQUFBLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUM7RUFFakMsUUFBQSxNQUFNQyxZQUFZLEdBQUcsTUFBTXBCLEtBQUssQ0FBQyxvREFBb0QsRUFBRTtFQUNyRlcsVUFBQUEsTUFBTSxFQUFFLE1BQU07RUFDZEUsVUFBQUEsSUFBSSxFQUFFSTtFQUNSLFNBQUMsQ0FBQztVQUVGLElBQUlHLFlBQVksQ0FBQ25CLEVBQUUsRUFBRTtFQUNuQixVQUFBLE1BQU1DLElBQUksR0FBRyxNQUFNa0IsWUFBWSxDQUFDakIsSUFBSSxFQUFFO0VBRXRDLFVBQUEsTUFBTVcsWUFBdUIsR0FBRztjQUM5QjVCLEdBQUcsRUFBRUQsTUFBTSxDQUFDaUIsSUFBSSxDQUFDL0ksTUFBTSxDQUFDSCxFQUFFLENBQUM7RUFDM0J1SSxZQUFBQSxJQUFJLEVBQUVXLElBQUksQ0FBQy9JLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDa0ksSUFBSTtjQUM3QmUsR0FBRyxFQUFFSixJQUFJLENBQUMvSSxNQUFNLENBQUNFLE1BQU0sQ0FBQ2lKLEdBQUcsSUFBSTthQUNoQztZQUVEbEQsYUFBYSxDQUFDMkQsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSSxFQUFFRCxZQUFZLENBQUMsQ0FBQztZQUM5QyxNQUFNRSxXQUFXLEdBQUcsQ0FBQyxHQUFHeEQsa0JBQWtCLEVBQUVzRCxZQUFZLENBQUM1QixHQUFHLENBQUM7WUFDN0R6QixxQkFBcUIsQ0FBQ3VELFdBQVcsQ0FBQztFQUVsQyxVQUFBLElBQUkvSSxRQUFRLEVBQUU7RUFDWkEsWUFBQUEsUUFBUSxDQUFDbkIsUUFBUSxDQUFDQyxJQUFJLEVBQUVpSyxXQUFXLENBQUM7RUFDdEM7WUFFQXpELGdCQUFnQixDQUFDLEVBQUUsQ0FBQztFQUNwQmhCLFVBQUFBLEtBQUssQ0FBQyxDQUFnQnVFLGFBQUFBLEVBQUFBLFlBQVksQ0FBQ3ZCLElBQUksV0FBVyxDQUFDO0VBQ3JELFNBQUMsTUFBTTtFQUNMLFVBQUEsTUFBTSxJQUFJOEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0VBQ3BDO0VBQ0Y7T0FDRCxDQUFDLE9BQU9kLEtBQUssRUFBRTtFQUNkekMsTUFBQUEsT0FBTyxDQUFDeUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFQSxLQUFLLENBQUM7UUFDaERoRSxLQUFLLENBQUMsc0VBQXNFLENBQUM7O0VBRTdFO1FBQ0EsTUFBTXlFLFdBQVcsR0FBRyxDQUFDLEdBQUd4RCxrQkFBa0IsRUFBRUYsYUFBYSxDQUFDbUQsSUFBSSxFQUFFLENBQUM7UUFDakVoRCxxQkFBcUIsQ0FBQ3VELFdBQVcsQ0FBQztFQUVsQyxNQUFBLElBQUkvSSxRQUFRLEVBQUU7RUFDWkEsUUFBQUEsUUFBUSxDQUFDbkIsUUFBUSxDQUFDQyxJQUFJLEVBQUVpSyxXQUFXLENBQUM7RUFDdEM7UUFFQXpELGdCQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNwQmhCLEtBQUssQ0FBQyxpQkFBaUJlLGFBQWEsQ0FBQ21ELElBQUksRUFBRSw2Q0FBNkMsQ0FBQztFQUMzRixLQUFDLFNBQVM7UUFDUjlDLFVBQVUsQ0FBQyxLQUFLLENBQUM7RUFDbkI7S0FDRDtJQUVELE1BQU0yRCxxQkFBcUIsR0FBR0MsaUJBQVcsQ0FBQyxDQUFDQyxXQUFtQixFQUFFQyxVQUFtQixLQUFLO01BQ3RGaEUscUJBQXFCLENBQUNpRSxZQUFZLElBQUk7RUFDcEMsTUFBQSxJQUFJVixXQUFXO0VBQ2YsTUFBQSxJQUFJUyxVQUFVLEVBQUU7RUFDZDtFQUNBLFFBQUEsSUFBSSxDQUFDQyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7RUFDdkNSLFVBQUFBLFdBQVcsR0FBRyxDQUFDLEdBQUdVLFlBQVksRUFBRUYsV0FBVyxDQUFDO0VBQzlDLFNBQUMsTUFBTTtZQUNMUixXQUFXLEdBQUdVLFlBQVksQ0FBQztFQUM3QjtFQUNGLE9BQUMsTUFBTTtVQUNMVixXQUFXLEdBQUdVLFlBQVksQ0FBQ3ZDLE1BQU0sQ0FBQ25JLEVBQUUsSUFBSUEsRUFBRSxLQUFLd0ssV0FBVyxDQUFDO0VBQzdEO0VBRUEsTUFBQSxJQUFJdkosUUFBUSxFQUFFO0VBQ1pBLFFBQUFBLFFBQVEsQ0FBQ25CLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFaUssV0FBVyxDQUFDO0VBQ3RDO0VBRUEsTUFBQSxPQUFPQSxXQUFXO0VBQ3BCLEtBQUMsQ0FBQztLQUNILEVBQUUsQ0FBQy9JLFFBQVEsRUFBRW5CLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFFN0Isb0JBQ0VKLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3FDLHNCQUFTLHFCQUNSdEMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDc0Msa0JBQUssRUFBQSxJQUFBLEVBQUMsYUFBVyxFQUFDMEcsVUFBVSxHQUFHLFlBQVksR0FBRyxXQUFtQixDQUFDLGVBR25Fakosc0JBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0JBQUcsRUFBQTtFQUFDSyxJQUFBQSxFQUFFLEVBQUMsU0FBUztFQUFDNEksSUFBQUEsQ0FBQyxFQUFDLFNBQVM7RUFBQ3BLLElBQUFBLEtBQUssRUFBRTtFQUFFcUssTUFBQUEsZUFBZSxFQUFFLFNBQVM7RUFBRTlHLE1BQUFBLFlBQVksRUFBRTtFQUFNO0VBQUUsR0FBQSxlQUN2RnBFLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2tMLGlCQUFJLEVBQUE7RUFBQ2xGLElBQUFBLE9BQU8sRUFBQyxJQUFJO0VBQUM1RCxJQUFBQSxFQUFFLEVBQUMsSUFBSTtFQUFDWSxJQUFBQSxVQUFVLEVBQUM7RUFBTSxHQUFBLEVBQUMsc0JBRXZDLENBQUMsZUFDUGpELHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ0MsSUFBQUEsT0FBTyxFQUFDLE1BQU07RUFBQ0UsSUFBQUEsR0FBRyxFQUFDO0VBQUksR0FBQSxlQUMxQm5DLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3VDLGtCQUFLLEVBQUE7RUFDSjRJLElBQUFBLFdBQVcsRUFBQywyQkFBMkI7RUFDdkNySixJQUFBQSxLQUFLLEVBQUU0RSxhQUFjO01BQ3JCckYsUUFBUSxFQUFHd0IsQ0FBQyxJQUFLOEQsZ0JBQWdCLENBQUM5RCxDQUFDLENBQUNoQixNQUFNLENBQUNDLEtBQUssQ0FBRTtNQUNsRHNKLFNBQVMsRUFBR3ZJLENBQUMsSUFBSztFQUNoQixNQUFBLElBQUlBLENBQUMsQ0FBQ3dJLEdBQUcsS0FBSyxPQUFPLEVBQUU7VUFDckJ4SSxDQUFDLENBQUN5SSxjQUFjLEVBQUU7RUFDbEIxQixRQUFBQSxxQkFBcUIsRUFBRTtFQUN6QjtPQUNBO0VBQ0ZoSixJQUFBQSxLQUFLLEVBQUU7RUFBRTJLLE1BQUFBLElBQUksRUFBRTtFQUFFO0VBQUUsR0FDcEIsQ0FBQyxlQUNGeEwsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDbUcsbUJBQU0sRUFBQTtFQUNMSCxJQUFBQSxPQUFPLEVBQUMsU0FBUztFQUNqQkksSUFBQUEsT0FBTyxFQUFFd0QscUJBQXNCO0VBQy9CNEIsSUFBQUEsUUFBUSxFQUFFLENBQUM5RSxhQUFhLENBQUNtRCxJQUFJLEVBQUUsSUFBSS9DO0VBQVEsR0FBQSxFQUUxQ0EsT0FBTyxHQUFHLFlBQVksR0FBRyxPQUNwQixDQUNMLENBQ0YsQ0FBQyxlQUdOL0csc0JBQUEsQ0FBQUMsYUFBQSxDQUFDK0IsZ0JBQUcsRUFBQSxJQUFBLGVBQ0ZoQyxzQkFBQSxDQUFBQyxhQUFBLENBQUNrTCxpQkFBSSxFQUFBO0VBQUNsRixJQUFBQSxPQUFPLEVBQUMsSUFBSTtFQUFDNUQsSUFBQUEsRUFBRSxFQUFDO0tBQ25CNEcsRUFBQUEsVUFBVSxHQUFHLDRDQUE0QyxHQUFHLDBCQUEwQixFQUFDLElBQUUsRUFBQ3pDLFVBQVUsQ0FBQ1UsTUFBTSxFQUFDLEdBQ3pHLENBQUMsRUFHTitCLFVBQVUsSUFBSXBDLGtCQUFrQixDQUFDSyxNQUFNLEdBQUcsQ0FBQyxpQkFDMUNsSCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNLLElBQUFBLEVBQUUsRUFBQyxJQUFJO0VBQUM0SSxJQUFBQSxDQUFDLEVBQUMsSUFBSTtFQUFDcEssSUFBQUEsS0FBSyxFQUFFO0VBQUVxSyxNQUFBQSxlQUFlLEVBQUUsU0FBUztFQUFFOUcsTUFBQUEsWUFBWSxFQUFFLEtBQUs7RUFBRXNILE1BQUFBLE1BQU0sRUFBRTtFQUFvQjtFQUFFLEdBQUEsZUFDMUcxTCxzQkFBQSxDQUFBQyxhQUFBLENBQUNrTCxpQkFBSSxFQUFBO0VBQUNsRixJQUFBQSxPQUFPLEVBQUMsSUFBSTtFQUFDaEQsSUFBQUEsVUFBVSxFQUFDLE1BQU07RUFBQ3FCLElBQUFBLEtBQUssRUFBQyxTQUFTO0VBQUNqQyxJQUFBQSxFQUFFLEVBQUM7RUFBSSxHQUFBLEVBQUMsNkNBQ3JCLEVBQUN3RSxrQkFBa0IsQ0FBQ0ssTUFBTSxFQUFDLElBQzdELENBQUMsRUFDTlYsVUFBVSxDQUNSZ0MsTUFBTSxDQUFDUSxHQUFHLElBQUluQyxrQkFBa0IsQ0FBQ21FLFFBQVEsQ0FBQ2hDLEdBQUcsQ0FBQ1QsR0FBRyxDQUFDLENBQUMsQ0FDbkRILEdBQUcsQ0FBQ3VELFNBQVMsaUJBQ1ozTCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO01BQUNzSixHQUFHLEVBQUVLLFNBQVMsQ0FBQ3BELEdBQUk7RUFBQ3RHLElBQUFBLE9BQU8sRUFBQyxjQUFjO0VBQUNHLElBQUFBLEVBQUUsRUFBQyxJQUFJO0VBQUNDLElBQUFBLEVBQUUsRUFBQztFQUFJLEdBQUEsZUFDN0RyQyxzQkFBQSxDQUFBQyxhQUFBLENBQUNrTCxpQkFBSSxFQUFBO0VBQUNsRixJQUFBQSxPQUFPLEVBQUMsSUFBSTtFQUFDcEYsSUFBQUEsS0FBSyxFQUFFO0VBQ3hCcUssTUFBQUEsZUFBZSxFQUFFLFNBQVM7RUFDMUI1RyxNQUFBQSxLQUFLLEVBQUUsT0FBTztFQUNkNEIsTUFBQUEsT0FBTyxFQUFFLFNBQVM7RUFDbEI5QixNQUFBQSxZQUFZLEVBQUUsTUFBTTtFQUNwQm5DLE1BQUFBLE9BQU8sRUFBRTtFQUNYO0VBQUUsR0FBQSxFQUNDMEosU0FBUyxDQUFDL0MsSUFDUCxDQUNILENBQ04sQ0FFQSxDQUNOLGVBRUQ1SSxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNuQixJQUFBQSxLQUFLLEVBQUU7RUFBRXNELE1BQUFBLFNBQVMsRUFBRSxPQUFPO0VBQUV5SCxNQUFBQSxTQUFTLEVBQUUsTUFBTTtFQUFFRixNQUFBQSxNQUFNLEVBQUUsZ0JBQWdCO0VBQUV0SCxNQUFBQSxZQUFZLEVBQUUsS0FBSztFQUFFOEIsTUFBQUEsT0FBTyxFQUFFO0VBQU07RUFBRSxHQUFBLEVBQ2xITSxVQUFVLENBQUM0QixHQUFHLENBQUN1RCxTQUFTLElBQUk7TUFDM0IsTUFBTWIsVUFBVSxHQUFHakUsa0JBQWtCLENBQUNtRSxRQUFRLENBQUNXLFNBQVMsQ0FBQ3BELEdBQUcsQ0FBQztFQUM3RHBCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUEsWUFBQSxFQUFldUUsU0FBUyxDQUFDL0MsSUFBSSxDQUFLK0MsRUFBQUEsRUFBQUEsU0FBUyxDQUFDcEQsR0FBRyxDQUFtQnVDLGdCQUFBQSxFQUFBQSxVQUFVLEVBQUUsQ0FBQztFQUMzRjNELElBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQThCLDRCQUFBLENBQUEsRUFBRVAsa0JBQWtCLENBQUM7RUFDL0QsSUFBQSxvQkFDRTdHLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7UUFDRnNKLEdBQUcsRUFBRUssU0FBUyxDQUFDcEQsR0FBSTtFQUNuQjBDLE1BQUFBLENBQUMsRUFBQyxJQUFJO0VBQ041SSxNQUFBQSxFQUFFLEVBQUMsSUFBSTtFQUNQeEIsTUFBQUEsS0FBSyxFQUFFO0VBQ0xvQixRQUFBQSxPQUFPLEVBQUUsTUFBTTtFQUNma0IsUUFBQUEsVUFBVSxFQUFFLFFBQVE7RUFDcEJDLFFBQUFBLE1BQU0sRUFBRSxTQUFTO0VBQ2pCOEgsUUFBQUEsZUFBZSxFQUFFSixVQUFVLEdBQUcsU0FBUyxHQUFHLE9BQU87RUFDakQxRyxRQUFBQSxZQUFZLEVBQUUsS0FBSztFQUNuQnNILFFBQUFBLE1BQU0sRUFBRTtTQUNSO1FBQ0ZyRixPQUFPLEVBQUVBLE1BQU1zRSxxQkFBcUIsQ0FBQ2dCLFNBQVMsQ0FBQ3BELEdBQUcsRUFBRSxDQUFDdUMsVUFBVTtPQUUvRDlLLGVBQUFBLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxPQUFBLEVBQUE7RUFDRUssTUFBQUEsSUFBSSxFQUFDLFVBQVU7RUFDZnlDLE1BQUFBLE9BQU8sRUFBRStILFVBQVc7UUFDcEJ4SixRQUFRLEVBQUd3QixDQUFDLElBQUs7VUFDZkEsQ0FBQyxDQUFDK0ksZUFBZSxFQUFFO1VBQ25CbEIscUJBQXFCLENBQUNnQixTQUFTLENBQUNwRCxHQUFHLEVBQUV6RixDQUFDLENBQUNoQixNQUFNLENBQUNpQixPQUFPLENBQUM7U0FDdEQ7RUFDRmxDLE1BQUFBLEtBQUssRUFBRTtFQUFFeUMsUUFBQUEsV0FBVyxFQUFFO0VBQU07RUFBRSxLQUMvQixDQUFDLGVBQ0Z0RCxzQkFBQSxDQUFBQyxhQUFBLENBQUNrTCxpQkFBSSxFQUFBO0VBQUN0SyxNQUFBQSxLQUFLLEVBQUU7RUFBRW9DLFFBQUFBLFVBQVUsRUFBRTZILFVBQVUsR0FBRyxNQUFNLEdBQUc7RUFBUztPQUN2RGEsRUFBQUEsU0FBUyxDQUFDL0MsSUFDUCxDQUFDLEVBQ05rQyxVQUFVLGlCQUNUOUssc0JBQUEsQ0FBQUMsYUFBQSxDQUFDa0wsaUJBQUksRUFBQTtFQUFDbEYsTUFBQUEsT0FBTyxFQUFDLElBQUk7RUFBQzNCLE1BQUFBLEtBQUssRUFBQyxTQUFTO0VBQUN3SCxNQUFBQSxFQUFFLEVBQUM7T0FBTyxFQUFBLG9CQUV2QyxDQUVMLENBQUM7RUFFVixHQUFDLENBQUMsRUFFRHRGLFVBQVUsQ0FBQ1UsTUFBTSxLQUFLLENBQUMsaUJBQ3RCbEgsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDa0wsaUJBQUksRUFBQTtFQUFDN0csSUFBQUEsS0FBSyxFQUFDLFFBQVE7RUFBQzJCLElBQUFBLE9BQU8sRUFBQztFQUFJLEdBQUEsRUFBQyxnREFFNUIsQ0FFTCxDQUNGLENBQUMsRUFHTGdELFVBQVUsR0FDVHBDLGtCQUFrQixDQUFDSyxNQUFNLEdBQUcsQ0FBQyxpQkFDM0JsSCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNnQyxJQUFBQSxFQUFFLEVBQUMsU0FBUztFQUFDaUgsSUFBQUEsQ0FBQyxFQUFDLElBQUk7RUFBQ3BLLElBQUFBLEtBQUssRUFBRTtFQUFFcUssTUFBQUEsZUFBZSxFQUFFLFNBQVM7RUFBRTlHLE1BQUFBLFlBQVksRUFBRTtFQUFNO0VBQUUsR0FBQSxlQUNsRnBFLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2tMLGlCQUFJLEVBQUE7RUFBQ2xGLElBQUFBLE9BQU8sRUFBQyxJQUFJO0VBQUMzQixJQUFBQSxLQUFLLEVBQUM7S0FBVSxFQUFBLGtDQUNqQixFQUFDdUMsa0JBQWtCLENBQUNLLE1BQU0sRUFBQyxpRUFDdkMsQ0FDSCxDQUNOLEdBRURMLGtCQUFrQixDQUFDSyxNQUFNLEdBQUcsQ0FBQyxpQkFDM0JsSCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNnQyxJQUFBQSxFQUFFLEVBQUM7RUFBUyxHQUFBLGVBQ2ZoRSxzQkFBQSxDQUFBQyxhQUFBLENBQUNrTCxpQkFBSSxFQUFBO0VBQUNsRixJQUFBQSxPQUFPLEVBQUMsSUFBSTtFQUFDM0IsSUFBQUEsS0FBSyxFQUFDO0tBQVUsRUFBQSxTQUMvQixFQUFDdUMsa0JBQWtCLENBQUNLLE1BQU0sRUFBQyxxREFDekIsQ0FDSCxDQUdBLENBQUM7RUFFaEIsQ0FBQzs7RUM5WUQ7RUFDQTtFQVlBLE1BQU02RSxhQUEyQyxHQUFHQSxDQUFDO0lBQUU1TCxRQUFRO0lBQUVLLE1BQU07RUFBRWMsRUFBQUE7RUFBUyxDQUFDLEtBQUs7SUFDdEYsTUFBTSxDQUFDMEssZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHdkYsY0FBUSxDQUFTLEVBQUUsQ0FBQztFQUVsRWxCLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO0VBQ2Q7TUFDQSxNQUFNK0IsWUFBWSxHQUFHL0csTUFBTSxFQUFFRSxNQUFNLEdBQUdQLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksRUFBRTtNQUMxRDZMLGtCQUFrQixDQUFDMUUsWUFBWSxDQUFDO0tBQ2pDLEVBQUUsQ0FBQy9HLE1BQU0sRUFBRUwsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUUzQixNQUFNOEwsbUJBQW1CLEdBQUlDLE9BQWUsSUFBSztNQUMvQ0Ysa0JBQWtCLENBQUNFLE9BQU8sQ0FBQztFQUMzQixJQUFBLElBQUk3SyxRQUFRLEVBQUU7RUFDWkEsTUFBQUEsUUFBUSxDQUFDbkIsUUFBUSxDQUFDQyxJQUFJLEVBQUUrTCxPQUFPLENBQUM7RUFDbEM7S0FDRDtJQUVELE1BQU1DLFFBQVEsR0FBRyxDQUNmO0VBQUVySyxJQUFBQSxLQUFLLEVBQUUsSUFBSTtFQUFFZ0MsSUFBQUEsS0FBSyxFQUFFLFlBQVk7RUFBRXVDLElBQUFBLElBQUksRUFBRTtFQUFLLEdBQUMsRUFDaEQ7RUFBRXZFLElBQUFBLEtBQUssRUFBRSxJQUFJO0VBQUVnQyxJQUFBQSxLQUFLLEVBQUUsa0JBQWtCO0VBQUV1QyxJQUFBQSxJQUFJLEVBQUU7RUFBSyxHQUFDLENBQ3ZEO0lBRUQsb0JBQ0V0RyxzQkFBQSxDQUFBQyxhQUFBLENBQUNxQyxzQkFBUyxxQkFDUnRDLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ3NDLGtCQUFLLEVBQUEsSUFBQSxFQUNIcEMsUUFBUSxDQUFDNEQsS0FBSyxJQUFJLFNBQVMsRUFDM0I1RCxRQUFRLENBQUNpQixVQUFVLGlCQUFJcEIsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE1BQUEsRUFBQTtFQUFNWSxJQUFBQSxLQUFLLEVBQUU7RUFBRXlELE1BQUFBLEtBQUssRUFBRTtFQUFNO0tBQUcsRUFBQSxJQUFRLENBQzFELENBQUMsZUFFUnRFLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7RUFBQ2dDLElBQUFBLEVBQUUsRUFBQztFQUFJLEdBQUEsZUFDVmhFLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2tMLGlCQUFJLEVBQUE7RUFBQ2xGLElBQUFBLE9BQU8sRUFBQyxJQUFJO0VBQUMzQixJQUFBQSxLQUFLLEVBQUMsUUFBUTtFQUFDakMsSUFBQUEsRUFBRSxFQUFDO0VBQUksR0FBQSxFQUFDLHNDQUVwQyxDQUFDLGVBRVByQyxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNuQixJQUFBQSxLQUFLLEVBQUU7RUFBRW9CLE1BQUFBLE9BQU8sRUFBRSxNQUFNO0VBQUVFLE1BQUFBLEdBQUcsRUFBRSxNQUFNO0VBQUVlLE1BQUFBLFFBQVEsRUFBRTtFQUFPO0VBQUUsR0FBQSxFQUM1RGtKLFFBQVEsQ0FBQ2hFLEdBQUcsQ0FBQytELE9BQU8sSUFBSTtFQUN2QixJQUFBLE1BQU1yQixVQUFVLEdBQUdrQixlQUFlLEtBQUtHLE9BQU8sQ0FBQ3BLLEtBQUs7RUFDcEQsSUFBQSxvQkFDRS9CLHNCQUFBLENBQUFDLGFBQUEsQ0FBQytCLGdCQUFHLEVBQUE7UUFDRnNKLEdBQUcsRUFBRWEsT0FBTyxDQUFDcEssS0FBTTtRQUNuQnNFLE9BQU8sRUFBRUEsTUFBTTZGLG1CQUFtQixDQUFDQyxPQUFPLENBQUNwSyxLQUFLLENBQUU7RUFDbERsQixNQUFBQSxLQUFLLEVBQUU7RUFDTHFGLFFBQUFBLE9BQU8sRUFBRSxXQUFXO0VBQ3BCd0YsUUFBQUEsTUFBTSxFQUFFWixVQUFVLEdBQUcsbUJBQW1CLEdBQUcsZ0JBQWdCO0VBQzNEMUcsUUFBQUEsWUFBWSxFQUFFLEtBQUs7RUFDbkJoQixRQUFBQSxNQUFNLEVBQUUsU0FBUztFQUNqQjhILFFBQUFBLGVBQWUsRUFBRUosVUFBVSxHQUFHLFNBQVMsR0FBRyxPQUFPO0VBQ2pEdUIsUUFBQUEsUUFBUSxFQUFFLE9BQU87RUFDakJDLFFBQUFBLFNBQVMsRUFBRSxRQUFRO0VBQ25CQyxRQUFBQSxVQUFVLEVBQUUsZUFBZTtFQUMzQkMsUUFBQUEsVUFBVSxFQUFFO1NBQ1o7UUFDRkMsWUFBWSxFQUFHM0osQ0FBQyxJQUFLO1VBQ25CLElBQUksQ0FBQ2dJLFVBQVUsRUFBRTtFQUNmaEksVUFBQUEsQ0FBQyxDQUFDNEosYUFBYSxDQUFDN0wsS0FBSyxDQUFDOEwsV0FBVyxHQUFHLE1BQU07RUFDMUM3SixVQUFBQSxDQUFDLENBQUM0SixhQUFhLENBQUM3TCxLQUFLLENBQUNxSyxlQUFlLEdBQUcsU0FBUztFQUNuRDtTQUNBO1FBQ0YwQixZQUFZLEVBQUc5SixDQUFDLElBQUs7VUFDbkIsSUFBSSxDQUFDZ0ksVUFBVSxFQUFFO0VBQ2ZoSSxVQUFBQSxDQUFDLENBQUM0SixhQUFhLENBQUM3TCxLQUFLLENBQUM4TCxXQUFXLEdBQUcsTUFBTTtFQUMxQzdKLFVBQUFBLENBQUMsQ0FBQzRKLGFBQWEsQ0FBQzdMLEtBQUssQ0FBQ3FLLGVBQWUsR0FBRyxPQUFPO0VBQ2pEO0VBQ0Y7RUFBRSxLQUFBLGVBRUZsTCxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNuQixNQUFBQSxLQUFLLEVBQUU7RUFBRWdNLFFBQUFBLFFBQVEsRUFBRSxNQUFNO0VBQUUxRyxRQUFBQSxZQUFZLEVBQUU7RUFBTTtPQUNqRGdHLEVBQUFBLE9BQU8sQ0FBQzdGLElBQ04sQ0FBQyxlQUNOdEcsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDa0wsaUJBQUksRUFBQTtFQUNIdEssTUFBQUEsS0FBSyxFQUFFO0VBQ0xvQyxRQUFBQSxVQUFVLEVBQUU2SCxVQUFVLEdBQUcsTUFBTSxHQUFHLFFBQVE7RUFDMUN4RyxRQUFBQSxLQUFLLEVBQUV3RyxVQUFVLEdBQUcsU0FBUyxHQUFHO0VBQ2xDO0VBQUUsS0FBQSxFQUVEcUIsT0FBTyxDQUFDcEksS0FDTCxDQUNILENBQUM7S0FFVCxDQUNFLENBQUMsRUFFTGlJLGVBQWUsaUJBQ2RoTSxzQkFBQSxDQUFBQyxhQUFBLENBQUMrQixnQkFBRyxFQUFBO0VBQUNnQyxJQUFBQSxFQUFFLEVBQUMsSUFBSTtFQUFDaUgsSUFBQUEsQ0FBQyxFQUFDLElBQUk7RUFBQ3BLLElBQUFBLEtBQUssRUFBRTtFQUFFcUssTUFBQUEsZUFBZSxFQUFFLFNBQVM7RUFBRTlHLE1BQUFBLFlBQVksRUFBRTtFQUFNO0VBQUUsR0FBQSxlQUM3RXBFLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2tMLGlCQUFJLEVBQUE7RUFBQ2xGLElBQUFBLE9BQU8sRUFBQyxJQUFJO0VBQUNwRixJQUFBQSxLQUFLLEVBQUU7RUFBRXlELE1BQUFBLEtBQUssRUFBRTtFQUFVO0VBQUUsR0FBQSxFQUFDLGlDQUN2QixlQUFBdEUsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLFFBQUEsRUFBQSxJQUFBLEVBQVMrTCxlQUF3QixDQUNwRCxDQUNILENBQ04sRUFFQTdMLFFBQVEsQ0FBQzJNLFdBQVcsaUJBQ25COU0sc0JBQUEsQ0FBQUMsYUFBQSxDQUFDa0wsaUJBQUksRUFBQTtFQUFDbEYsSUFBQUEsT0FBTyxFQUFDLElBQUk7RUFBQzNCLElBQUFBLEtBQUssRUFBQyxRQUFRO0VBQUNOLElBQUFBLEVBQUUsRUFBQztFQUFJLEdBQUEsRUFDdEM3RCxRQUFRLENBQUMyTSxXQUNOLENBRUwsQ0FDSSxDQUFDO0VBRWhCLENBQUM7O0VDMUdELE1BQU0sSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLO0VBQ2pELElBQUksTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUdDLHNCQUFjLEVBQUU7RUFDbEQsSUFBSSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTTtFQUM3QixJQUFJLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRO0VBQy9CLElBQUksTUFBTSxJQUFJLEdBQUdDLFlBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUMxRCxJQUFJLE1BQU0sR0FBRyxHQUFHQSxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQ3BELElBQUksTUFBTSxJQUFJLEdBQUdBLFlBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHdEcsY0FBUSxDQUFDLEdBQUcsQ0FBQztFQUN2RCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBR0EsY0FBUSxDQUFDLEVBQUUsQ0FBQztFQUMxRCxJQUFJbEIsZUFBUyxDQUFDLE1BQU07RUFDcEI7RUFDQTtFQUNBO0VBQ0EsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxXQUFXO0VBQzNELGdCQUFnQixPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxXQUFXO0VBQ3ZELGdCQUFnQixPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtFQUNyRyxZQUFZLGNBQWMsQ0FBQyxHQUFHLENBQUM7RUFDL0IsWUFBWSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7RUFDaEM7RUFDQSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDMUIsSUFBSSxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBSztFQUNoQyxRQUFRLGdCQUFnQixDQUFDLEtBQUssQ0FBQztFQUMvQixRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztFQUM1QyxLQUFLO0VBQ0wsSUFBSSxNQUFNLFlBQVksR0FBRyxNQUFNO0VBQy9CLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO0VBQzNDLEtBQUs7RUFDTCxJQUFJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUFTLEtBQUs7RUFDN0MsUUFBUSxNQUFNLEtBQUssR0FBRyxDQUFDd0gsWUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztFQUM1RixRQUFRLE1BQU0sYUFBYSxHQUFHQSxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRTtFQUN6RixRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0VBQ3JDLFlBQVksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7RUFDNUYsWUFBWSxJQUFJLFNBQVMsR0FBR0EsWUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQzVHLFlBQVksU0FBUyxHQUFHQSxZQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDO0VBQzdFLFlBQVksUUFBUSxDQUFDO0VBQ3JCLGdCQUFnQixHQUFHLE1BQU07RUFDekIsZ0JBQWdCLE1BQU0sRUFBRSxTQUFTO0VBQ2pDLGFBQWEsQ0FBQztFQUNkO0VBQ0EsYUFBYTtFQUNiO0VBQ0EsWUFBWSxPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDO0VBQ3RGO0VBQ0EsS0FBSztFQUNMLElBQUksUUFBUWhOLHNCQUFLLENBQUMsYUFBYSxDQUFDc0Msc0JBQVMsRUFBRSxJQUFJO0VBQy9DLFFBQVF0QyxzQkFBSyxDQUFDLGFBQWEsQ0FBQ3VDLGtCQUFLLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0VBQ2hHLFFBQVF2QyxzQkFBSyxDQUFDLGFBQWEsQ0FBQ2lOLHFCQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtFQUNqRyxnQkFBZ0IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO0VBQzNDLGdCQUFnQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87RUFDdkMsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQztFQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLak4sc0JBQUssQ0FBQyxhQUFhLENBQUNrTix5QkFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0VBQzlLLFFBQVEsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUlsTixzQkFBSyxDQUFDLGFBQWEsQ0FBQ0Esc0JBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxLQUFLO0VBQ2hJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsWUFBWSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQzNDLFlBQVksT0FBTyxXQUFXLElBQUlBLHNCQUFLLENBQUMsYUFBYSxDQUFDa04seUJBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO0VBQ2xMLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ2xCLENBQUM7O0VDOURNLE1BQU0sY0FBYyxHQUFHO0VBQzlCLElBQUksV0FBVztFQUNmLElBQUksWUFBWTtFQUNoQixJQUFJLGNBQWM7RUFDbEIsSUFBSSxZQUFZO0VBQ2hCLElBQUksV0FBVztFQUNmLElBQUksaUJBQWlCO0VBQ3JCLElBQUksWUFBWTtFQUNoQixJQUFJLFdBQVc7RUFDZixJQUFJLFlBQVk7RUFDaEIsSUFBSSxhQUFhO0VBQ2pCLENBQUM7RUFVTSxNQUFNLGNBQWMsR0FBRztFQUM5QixJQUFJLFdBQVc7RUFDZixJQUFJLFdBQVc7RUFDZixJQUFJLFlBQVk7RUFDaEIsSUFBSSxXQUFXO0VBQ2YsSUFBSSxlQUFlO0VBQ25CLElBQUksMEJBQTBCO0VBQzlCLElBQUksWUFBWTtFQUNoQixJQUFJLFlBQVk7RUFDaEIsQ0FBQzs7RUM5QkQ7RUFLQSxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUssS0FBSztFQUM5QixJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO0VBQ2pELElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtFQUM3QixRQUFRLElBQUksUUFBUSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7RUFDM0QsWUFBWSxRQUFRbE4sc0JBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDdEg7RUFDQSxRQUFRLElBQUksUUFBUSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7RUFDM0QsWUFBWSxRQUFRQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7RUFDOUUsZ0JBQWdCLG1DQUFtQztFQUNuRCxnQkFBZ0JBLHNCQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0VBQzFELGdCQUFnQkEsc0JBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDbkU7RUFDQTtFQUNBLElBQUksUUFBUUEsc0JBQUssQ0FBQyxhQUFhLENBQUNnQyxnQkFBRyxFQUFFLElBQUk7RUFDekMsUUFBUWhDLHNCQUFLLENBQUMsYUFBYSxDQUFDb0csbUJBQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0VBQ3ZILFlBQVlwRyxzQkFBSyxDQUFDLGFBQWEsQ0FBQ21OLGlCQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUM7RUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQztFQUNsQixDQUFDO0VBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUs7RUFDOUMsSUFBSSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUTtFQUMvQixJQUFJLElBQUksSUFBSSxHQUFHSCxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0VBQ2hFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtFQUNmLFFBQVEsT0FBTyxJQUFJO0VBQ25CO0VBQ0EsSUFBSSxNQUFNLElBQUksR0FBR0EsWUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUNqSCxJQUFJLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztFQUM1QixXQUFXQSxZQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0VBQzVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0VBQ25DLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0VBQ2hELFlBQVksSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDbkQ7RUFDQSxRQUFRLFFBQVFoTixzQkFBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7RUFDN0c7RUFDQSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtFQUM1QyxRQUFRLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUU7RUFDakQsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzRTtFQUNBLElBQUksUUFBUUEsc0JBQUssQ0FBQyxhQUFhLENBQUNBLHNCQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssTUFBTUEsc0JBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDNU4sQ0FBQzs7RUN6Q0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLE1BQU1BLHNCQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDOztFQ0U3RSxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSztFQUN4QixJQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLO0VBQzlCLElBQUksTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcrTSxzQkFBYyxFQUFFO0VBQ2xELElBQUksUUFBUS9NLHNCQUFLLENBQUMsYUFBYSxDQUFDc0Msc0JBQVMsRUFBRSxJQUFJO0VBQy9DLFFBQVF0QyxzQkFBSyxDQUFDLGFBQWEsQ0FBQ3VDLGtCQUFLLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0VBQ2hHLFFBQVF2QyxzQkFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUMvRCxDQUFDOztFQ1ZEb04sT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNDLGdCQUFnQixHQUFHQSxVQUFnQjtFQUUxREYsT0FBTyxDQUFDQyxjQUFjLENBQUM5TSxLQUFLLEdBQUdBLEtBQUs7RUFFcEM2TSxPQUFPLENBQUNDLGNBQWMsQ0FBQ2hNLGFBQWEsR0FBR0EsYUFBYTtFQUVwRCtMLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDM0ssc0JBQXNCLEdBQUdBLHNCQUFzQjtFQUV0RTBLLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDOUosZ0JBQWdCLEdBQUdBLGdCQUFnQjtFQUUxRDZKLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDOUksYUFBYSxHQUFHQSxhQUFhO0VBRXBENkksT0FBTyxDQUFDQyxjQUFjLENBQUNoSSxpQkFBaUIsR0FBR0EsaUJBQWlCO0VBRTVEK0gsT0FBTyxDQUFDQyxjQUFjLENBQUM1SCxnQkFBZ0IsR0FBR0EsZ0JBQWdCO0VBRTFEMkgsT0FBTyxDQUFDQyxjQUFjLENBQUM5RyxtQkFBbUIsR0FBR0EsbUJBQW1CO0VBRWhFNkcsT0FBTyxDQUFDQyxjQUFjLENBQUN0QixhQUFhLEdBQUdBLGFBQWE7RUFFcERxQixPQUFPLENBQUNDLGNBQWMsQ0FBQ0UsbUJBQW1CLEdBQUdBLElBQW1CO0VBRWhFSCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0csbUJBQW1CLEdBQUdBLElBQW1CO0VBRWhFSixPQUFPLENBQUNDLGNBQWMsQ0FBQ0ksbUJBQW1CLEdBQUdBLElBQW1COzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEwLDExLDEyLDEzLDE0XX0=
