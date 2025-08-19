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

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const TinyMCEEditor = ({
    property,
    record,
    onChange
  }) => {
    const [content, setContent] = React.useState('');
    const [isLoaded, setIsLoaded] = React.useState(false);
    const editorRef = React.useRef(null);
    const textareaRef = React.useRef(null);
    React.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      console.log('🔍 TinyMCE - Valor inicial:', currentValue);
      console.log('🔍 TinyMCE - Record completo:', record);
      console.log('🔍 TinyMCE - Property name:', property.name);
      setContent(currentValue);

      // Se o TinyMCE já estiver carregado, atualizar o conteúdo
      if (editorRef.current && currentValue) {
        editorRef.current.setContent(currentValue);
      }
    }, [record, property.name]);
    React.useEffect(() => {
      // Carregar TinyMCE dinamicamente
      if (!window.tinymce) {
        const script = document.createElement('script');
        script.src = 'https://cdn.tiny.cloud/1/h4o7dh7pj58eyvqxfdfkd8kog3ye447ohdwx572d5y2wgmp4/tinymce/6/tinymce.min.js';
        script.onload = () => {
          initializeTinyMCE();
        };
        document.head.appendChild(script);
      } else {
        initializeTinyMCE();
      }
      return () => {
        if (editorRef.current) {
          window.tinymce.remove(editorRef.current);
        }
      };
    }, []);
    const initializeTinyMCE = () => {
      if (!textareaRef.current || isLoaded) return;
      window.tinymce.init({
        target: textareaRef.current,
        height: 400,
        menubar: false,
        plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'],
        toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | image media link | code fullscreen | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_handler: async blobInfo => {
          return new Promise((resolve, reject) => {
            // OPÇÃO 1: Usar base64 (mais simples, funciona sempre)
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = reader.result;
              console.log('✅ Imagem convertida para base64');
              resolve(base64);
            };
            reader.onerror = () => {
              console.error('❌ Erro ao converter imagem para base64');
              reject('Erro ao processar imagem');
            };
            reader.readAsDataURL(blobInfo.blob());

            // OPÇÃO 2: Upload via FormData (comentado, pode tentar depois)
            /*
            const formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            formData.append('alt', blobInfo.filename() || 'Imagem do TinyMCE');
            
            fetch('/admin/api/resources/Media/actions/new', {
              method: 'POST',
              body: formData,
              credentials: 'include',
            })
            .then(response => response.json())
            .then(result => {
              if (result.record?.params?.url) {
                resolve(result.record.params.url);
              } else {
                reject('Upload failed');
              }
            })
            .catch(error => {
              console.error('Upload error:', error);
              reject('Upload failed');
            });
            */
          });
        },
        setup: editor => {
          editorRef.current = editor;
          editor.on('change', () => {
            const newContent = editor.getContent();
            setContent(newContent);
            if (onChange) {
              onChange(property.name, newContent);
            }
          });
          editor.on('init', () => {
            setIsLoaded(true);
            // Carregar conteúdo inicial do record
            const initialContent = record?.params?.[property.name] || '';
            if (initialContent) {
              editor.setContent(initialContent);
              setContent(initialContent);
            }
          });
        }
      });
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "Editor avan\xE7ado com upload de imagens e formata\xE7\xE3o rica"), /*#__PURE__*/React__default.default.createElement("textarea", {
      ref: textareaRef,
      style: {
        width: '100%',
        minHeight: '200px'
      },
      defaultValue: record?.params?.[property.name] || content,
      onChange: e => {
        // Fallback caso TinyMCE não carregue
        if (!isLoaded && onChange) {
          onChange(property.name, e.target.value);
        }
      }
    }), !isLoaded && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "sm",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDCDD Carregando editor avan\xE7ado..."))));
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const QuillEditor = ({
    property,
    record,
    onChange
  }) => {
    const [content, setContent] = React.useState('');
    const [isLoaded, setIsLoaded] = React.useState(false);
    const quillRef = React.useRef(null);
    const containerRef = React.useRef(null);
    React.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      setContent(currentValue);
    }, [record, property.name]);
    React.useEffect(() => {
      // Carregar Quill dinamicamente
      if (!window.Quill) {
        // Carregar CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
        document.head.appendChild(link);

        // Carregar JS
        const script = document.createElement('script');
        script.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
        script.onload = () => {
          initializeQuill();
        };
        document.head.appendChild(script);
      } else {
        initializeQuill();
      }
      return () => {
        if (quillRef.current) {
          quillRef.current = null;
        }
      };
    }, []);
    const initializeQuill = () => {
      if (!containerRef.current || isLoaded) return;
      const quill = new window.Quill(containerRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [[{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], ['bold', 'italic', 'underline', 'strike'], [{
            'color': []
          }, {
            'background': []
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'align': []
          }], ['link', 'image', 'video'], ['clean']]
        },
        placeholder: 'Digite o conteúdo da notícia...'
      });
      quillRef.current = quill;

      // Configurar upload de imagem customizado
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
          const file = input.files?.[0];
          if (file) {
            const formData = new FormData();
            formData.append('file', file);
            try {
              const response = await fetch('/admin/api/resources/Media/actions/new', {
                method: 'POST',
                body: formData
              });
              const result = await response.json();
              if (result.record?.params?.url) {
                const range = quill.getSelection();
                quill.insertEmbed(range?.index || 0, 'image', result.record.params.url);
              }
            } catch (error) {
              alert('Erro ao fazer upload da imagem');
            }
          }
        };
      });

      // Listener para mudanças
      quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        setContent(html);
        if (onChange) {
          onChange(property.name, html);
        }
      });

      // Definir conteúdo inicial
      if (content) {
        quill.root.innerHTML = content;
      }
      setIsLoaded(true);
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\u2728 Editor moderno com upload de imagens e formata\xE7\xE3o rica"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        border: isLoaded ? 'none' : '1px solid #ddd',
        borderRadius: '4px',
        minHeight: '300px'
      }
    }, /*#__PURE__*/React__default.default.createElement("div", {
      ref: containerRef
    })), !isLoaded && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "sm",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDD04 Carregando editor Quill.js...")), isLoaded && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDCA1 Dicas: Use a barra de ferramentas para formatar. Clique no \xEDcone de imagem para fazer upload."))));
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const BlockBuilder = ({
    property,
    record,
    onChange
  }) => {
    const [blocks, setBlocks] = React.useState([]);
    React.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      if (currentValue) {
        try {
          const parsed = JSON.parse(currentValue);
          setBlocks(Array.isArray(parsed) ? parsed : []);
        } catch {
          // Se não é JSON, criar um bloco de texto
          setBlocks([{
            id: Date.now().toString(),
            type: 'text',
            content: currentValue
          }]);
        }
      }
    }, [record, property.name]);
    const addBlock = type => {
      const newBlock = {
        id: Date.now().toString(),
        type,
        content: ''
      };
      const newBlocks = [...blocks, newBlock];
      setBlocks(newBlocks);
      updateContent(newBlocks);
    };
    const updateBlock = (id, updates) => {
      const newBlocks = blocks.map(block => block.id === id ? {
        ...block,
        ...updates
      } : block);
      setBlocks(newBlocks);
      updateContent(newBlocks);
    };
    const deleteBlock = id => {
      const newBlocks = blocks.filter(block => block.id !== id);
      setBlocks(newBlocks);
      updateContent(newBlocks);
    };
    const moveBlock = (id, direction) => {
      const index = blocks.findIndex(block => block.id === id);
      if (index === -1) return;
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= blocks.length) return;
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
      setBlocks(newBlocks);
      updateContent(newBlocks);
    };
    const updateContent = newBlocks => {
      // Converter blocks para HTML
      const html = newBlocks.map(block => {
        switch (block.type) {
          case 'heading':
            return `<h2>${block.content}</h2>`;
          case 'text':
            return `<p>${block.content}</p>`;
          case 'quote':
            return `<blockquote>${block.content}</blockquote>`;
          case 'list':
            return `<ul><li>${block.content.split('\n').join('</li><li>')}</li></ul>`;
          case 'image':
            return `<img src="${block.url}" alt="${block.content}" style="max-width: 100%; height: auto;" />`;
          default:
            return `<p>${block.content}</p>`;
        }
      }).join('\n');
      if (onChange) {
        onChange(property.name, html);
      }
    };
    const uploadImage = async file => {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/admin/api/resources/Media/actions/new', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      return result.record?.params?.url || '';
    };
    const renderBlock = block => {
      const commonStyles = {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '12px',
        marginBottom: '8px',
        backgroundColor: 'white'
      };
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: block.id,
        style: commonStyles
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        variant: "sm",
        style: {
          fontWeight: 'bold',
          color: '#666'
        }
      }, block.type === 'text' && '📝 Parágrafo', block.type === 'heading' && '📰 Título', block.type === 'image' && '🖼️ Imagem', block.type === 'quote' && '💬 Citação', block.type === 'list' && '📋 Lista'), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: '4px'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "light",
        onClick: () => moveBlock(block.id, 'up'),
        disabled: blocks.findIndex(b => b.id === block.id) === 0
      }, "\u2191"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "light",
        onClick: () => moveBlock(block.id, 'down'),
        disabled: blocks.findIndex(b => b.id === block.id) === blocks.length - 1
      }, "\u2193"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "danger",
        onClick: () => deleteBlock(block.id)
      }, "\uD83D\uDDD1\uFE0F"))), block.type === 'image' ? /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        placeholder: "Descri\xE7\xE3o da imagem...",
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        style: {
          marginBottom: '8px'
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        type: "file",
        accept: "image/*",
        onChange: async e => {
          const file = e.target.files?.[0];
          if (file) {
            try {
              const url = await uploadImage(file);
              updateBlock(block.id, {
                url
              });
            } catch (error) {
              alert('Erro ao fazer upload da imagem');
            }
          }
        }
      }), block.url && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "sm"
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: block.url,
        alt: block.content,
        style: {
          maxWidth: '200px',
          borderRadius: '4px'
        }
      }))) : block.type === 'list' ? /*#__PURE__*/React__default.default.createElement(designSystem.TextArea, {
        placeholder: "Digite cada item em uma linha...",
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        rows: 4
      }) : /*#__PURE__*/React__default.default.createElement(designSystem.TextArea, {
        placeholder: block.type === 'heading' ? 'Digite o título...' : block.type === 'quote' ? 'Digite a citação...' : 'Digite o texto...',
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        rows: block.type === 'heading' ? 2 : 4
      }));
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\uD83E\uDDF1 Editor em blocos - Construa seu conte\xFAdo de forma modular"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        border: '1px solid #eee',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fafafa'
      }
    }, blocks.map(renderBlock), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginTop: '16px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('text')
    }, "+ Par\xE1grafo"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('heading')
    }, "+ T\xEDtulo"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('image')
    }, "+ Imagem"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('quote')
    }, "+ Cita\xE7\xE3o"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('list')
    }, "+ Lista"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDCA1 Use os bot\xF5es para adicionar diferentes tipos de conte\xFAdo. Arraste para reordenar."))));
  };

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const TiptapEditor = ({
    property,
    record,
    onChange
  }) => {
    const [content, setContent] = React.useState('');
    const [editor, setEditor] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      console.log('🔍 Tiptap - Valor inicial:', currentValue);
      setContent(currentValue);
    }, [record, property.name]);
    React.useEffect(() => {
      loadTiptap();
      return () => {
        if (editor) {
          editor.destroy();
        }
      };
    }, []);
    const loadTiptap = async () => {
      // Carregar CSS do Tiptap
      if (!document.querySelector('#tiptap-css')) {
        const link = document.createElement('link');
        link.id = 'tiptap-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/@tiptap/extension-text-align@2.1.13/dist/index.css';
        document.head.appendChild(link);

        // CSS personalizado para o editor
        const style = document.createElement('style');
        style.innerHTML = `
        .tiptap-editor {
          border: 1px solid #ddd;
          border-radius: 8px;
          min-height: 300px;
        }
        .tiptap-toolbar {
          border-bottom: 1px solid #ddd;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px 8px 0 0;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tiptap-content {
          padding: 16px;
          min-height: 250px;
          outline: none;
        }
        .tiptap-content h1 { font-size: 2em; font-weight: bold; margin: 0.67em 0; }
        .tiptap-content h2 { font-size: 1.5em; font-weight: bold; margin: 0.75em 0; }
        .tiptap-content h3 { font-size: 1.17em; font-weight: bold; margin: 0.83em 0; }
        .tiptap-content p { margin: 1em 0; }
        .tiptap-content ul, .tiptap-content ol { margin: 1em 0; padding-left: 2em; }
        .tiptap-content blockquote { 
          border-left: 4px solid #ddd; 
          margin: 1em 0; 
          padding-left: 1em; 
          color: #666; 
        }
        .tiptap-content img { max-width: 100%; height: auto; border-radius: 4px; }
        .tiptap-content .highlight { background-color: yellow; }
        .tiptap-btn {
          padding: 6px 12px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        .tiptap-btn:hover { background: #f0f0f0; }
        .tiptap-btn.active { background: #0c4a2b; color: white; }
        .tiptap-separator { width: 1px; background: #ddd; margin: 0 4px; }
      `;
        document.head.appendChild(style);
      }

      // Carregar Tiptap via CDN
      try {
        if (!window.Editor) {
          await loadScript('https://unpkg.com/@tiptap/core@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/starter-kit@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/extension-image@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/extension-link@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/extension-text-align@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/extension-highlight@2.1.13/dist/index.umd.js');
          await loadScript('https://unpkg.com/@tiptap/extension-underline@2.1.13/dist/index.umd.js');
        }
        initializeTiptap();
      } catch (error) {
        console.error('Erro ao carregar Tiptap:', error);
      }
    };
    const loadScript = src => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };
    const initializeTiptap = () => {
      const editorElement = document.getElementById('tiptap-content');
      if (!editorElement || !window.Editor) return;
      const newEditor = new window.Editor({
        element: editorElement,
        extensions: [window.StarterKit, window.Image.configure({
          HTMLAttributes: {
            class: 'tiptap-image'
          }
        }), window.Link.configure({
          openOnClick: false
        }), window.TextAlign.configure({
          types: ['heading', 'paragraph']
        }), window.Highlight, window.Underline],
        content: content,
        onUpdate: ({
          editor
        }) => {
          const html = editor.getHTML();
          setContent(html);
          if (onChange) {
            onChange(property.name, html);
          }
        }
      });
      setEditor(newEditor);
      setIsLoaded(true);
    };
    const addImage = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = e => {
        const file = e.target.files?.[0];
        if (file && editor) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result;
            editor.chain().focus().setImage({
              src: base64
            }).run();
          };
          reader.readAsDataURL(file);
        }
      };
      input.click();
    };
    const addLink = () => {
      const url = prompt('Digite a URL do link:');
      if (url && editor) {
        editor.chain().focus().setLink({
          href: url
        }).run();
      }
    };
    const ToolbarButton = ({
      onClick,
      isActive = false,
      children
    }) => /*#__PURE__*/React__default.default.createElement("button", {
      className: `tiptap-btn ${isActive ? 'active' : ''}`,
      onClick: onClick,
      type: "button"
    }, children);
    const Separator = () => /*#__PURE__*/React__default.default.createElement("div", {
      className: "tiptap-separator"
    });
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\u26A1 Editor Tiptap moderno com controles avan\xE7ados"), /*#__PURE__*/React__default.default.createElement("div", {
      className: "tiptap-editor"
    }, isLoaded && editor && /*#__PURE__*/React__default.default.createElement("div", {
      className: "tiptap-toolbar"
    }, /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold')
    }, /*#__PURE__*/React__default.default.createElement("strong", null, "B")), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic')
    }, /*#__PURE__*/React__default.default.createElement("em", null, "I")), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive('underline')
    }, /*#__PURE__*/React__default.default.createElement("u", null, "U")), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      isActive: editor.isActive('highlight')
    }, "\uD83D\uDD8D\uFE0F"), /*#__PURE__*/React__default.default.createElement(Separator, null), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 1
      }).run(),
      isActive: editor.isActive('heading', {
        level: 1
      })
    }, "H1"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 2
      }).run(),
      isActive: editor.isActive('heading', {
        level: 2
      })
    }, "H2"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 3
      }).run(),
      isActive: editor.isActive('heading', {
        level: 3
      })
    }, "H3"), /*#__PURE__*/React__default.default.createElement(Separator, null), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      isActive: editor.isActive({
        textAlign: 'left'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      isActive: editor.isActive({
        textAlign: 'center'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      isActive: editor.isActive({
        textAlign: 'right'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default.default.createElement(Separator, null), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList')
    }, "\u2022 Lista"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList')
    }, "1. Lista"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote')
    }, "\uD83D\uDCAC"), /*#__PURE__*/React__default.default.createElement(Separator, null), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: addImage
    }, "\uD83D\uDDBC\uFE0F Imagem"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: addLink
    }, "\uD83D\uDD17 Link"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().undo().run()
    }, "\u21B6"), /*#__PURE__*/React__default.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().redo().run()
    }, "\u21B7")), /*#__PURE__*/React__default.default.createElement("div", {
      id: "tiptap-content",
      className: "tiptap-content"
    }), !isLoaded && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      p: "lg",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\u26A1 Carregando editor Tiptap..."))), isLoaded && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDCA1 Use a barra de ferramentas para formatar. Tiptap oferece uma experi\xEAncia moderna de edi\xE7\xE3o."))));
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
  AdminJS.UserComponents.TinyMCEEditor = TinyMCEEditor;
  AdminJS.UserComponents.QuillEditor = QuillEditor;
  AdminJS.UserComponents.BlockBuilder = BlockBuilder;
  AdminJS.UserComponents.TiptapEditor = TiptapEditor;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, PropTypes, AdminJSDesignSystem, ReactRouter, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGVyaW9kby1zZWxlY3QudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlueW1jZS1lZGl0b3IudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcXVpbGwtZWRpdG9yLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Jsb2NrLWJ1aWxkZXIudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlwdGFwLWVkaXRvci50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50LmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFVwbG9hZEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMucHJvcGVydHkubmFtZX0+VXBsb2FkPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD17cHJvcHMucHJvcGVydHkubmFtZX0gdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRFZGl0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVGh1bWIocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7cmVjb3JkLnBhcmFtcy51cmx9YDtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiA8c3Bhbj5ObyBpbWFnZTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXtyZWNvcmQucGFyYW1zLmFsdCB8fCAnVGh1bWJuYWlsJ31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGh1bWIucHJvcFR5cGVzID0ge1xyXG4gIHJlY29yZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5mdW5jdGlvbiBHcm91cGVkUHJpY2VzKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJlY29VbmljbyA9IHJlY29yZC5wYXJhbXMucHJlY29VbmljbyB8fCAnJztcclxuICBjb25zdCBwcmVjb01lZGlvID0gcmVjb3JkLnBhcmFtcy5wcmVjb01lZGlvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvR3JhbmRlID0gcmVjb3JkLnBhcmFtcy5wcmVjb0dyYW5kZSB8fCAnJztcclxuICBjb25zdCBwcmVjb0luZGl2aWR1YWwgPSByZWNvcmQucGFyYW1zLnByZWNvSW5kaXZpZHVhbCB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD1cIjEwcHhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyDDmm5pY288L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29Vbmljb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29VbmljbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBNw6lkaW88L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29NZWRpb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29NZWRpbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBHcmFuZGU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29HcmFuZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvR3JhbmRlJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gSW5kaXZpZHVhbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0luZGl2aWR1YWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvSW5kaXZpZHVhbCcpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRQcmljZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExhYmVsLCBDaGVja0JveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBqYW50YXIgPSByZWNvcmQucGFyYW1zLmphbnRhciA/PyBmYWxzZTtcclxuICBjb25zdCBkZWxpdmVyeSA9IHJlY29yZC5wYXJhbXMuZGVsaXZlcnkgPz8gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUphbnRhciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2phbnRhcicsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlbGl2ZXJ5ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnZGVsaXZlcnknLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgVGlwb3MgZGUgY2FyZMOhcGlvc1xyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwibGdcIiBmbGV4V3JhcD1cIndyYXBcIiBtYj1cIjM2cHhcIj5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiamFudGFyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlkPVwiamFudGFyXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtqYW50YXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUphbnRhcn1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBEaXNwb27DrXZlbCBwYXJhIEphbnRhclxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjdXJzb3I9XCJwb2ludGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEaXNwb27DrXZlbCBwYXJhIERlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpc3BvbmliaWxpdGllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgU2hvd1Byb2R1Y3RJbWFnZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgaWYgKCFyZWNvcmQgfHwgIXByb3BlcnR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGROYW1lID0gcHJvcGVydHkubmFtZTsgLy8gbWVkaWFDYXBhLCBtZWRpYVByaW5jaXBhbCwgZXRjLlxyXG4gIGNvbnN0IG1lZGlhS2V5ID0gYCR7ZmllbGROYW1lfVVybGA7IC8vIGJhbm5lclVybCwgZXRjLlxyXG4gIGNvbnN0IGFsdEtleSA9IGAke2ZpZWxkTmFtZX1BbHRgO1xyXG5cclxuICBjb25zdCBtZWRpYVBhdGggPSByZWNvcmQucGFyYW1zPy5bbWVkaWFLZXldO1xyXG4gIGNvbnN0IGFsdFRleHQgPSByZWNvcmQucGFyYW1zPy5bYWx0S2V5XSB8fCAnJztcclxuXHJcbiAgLy8gVmVyaWZpY2FyIHNlIGEgVVJMIGrDoSDDqSBjb21wbGV0YSBvdSBzZSBwcmVjaXNhIHNlciBjb25jYXRlbmFkYVxyXG4gIGNvbnN0IGZ1bGxVcmwgPSBtZWRpYVBhdGhcclxuICAgID8gKG1lZGlhUGF0aC5zdGFydHNXaXRoKCdodHRwJykgXHJcbiAgICAgICAgPyBtZWRpYVBhdGggXHJcbiAgICAgICAgOiBgaHR0cHM6Ly9iYWNrb2ZmaWNlLWFwcC1hc3NldHMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHttZWRpYVBhdGh9YClcclxuICAgIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbWI9XCIzNnB4XCI+XHJcbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWwgfHwgJ0ltYWdlbSd9PC9MYWJlbD5cclxuICAgICAge2Z1bGxVcmwgPyAoXHJcbiAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIHtmdWxsVXJsLmVuZHNXaXRoKCcubXA0JykgPyAoXHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHNyYz17ZnVsbFVybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtmdWxsVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17YWx0VGV4dCB8fCBgSW1hZ2VtIC0gJHtmaWVsZE5hbWV9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthbHRUZXh0ICYmIChcclxuICAgICAgICAgICAgPEJveCBtdD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICB7YWx0VGV4dH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgIHthbHRUZXh0IHx8ICdOZW5odW0gYXJxdWl2byBkaXNwb27DrXZlbCd9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Byb2R1Y3RJbWFnZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgRm9ybWF0dGVkRGF0ZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgY29uc3QgcmF3VmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdO1xyXG5cclxuICBpZiAoIXJhd1ZhbHVlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJhd1ZhbHVlKTtcclxuICBjb25zdCBmb3JtYXR0ZWQgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCdwdC1CUicsIHtcclxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAge2Zvcm1hdHRlZH1cclxuICAgICAgeycgJ31cclxuICAgICAge3RpbWV9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkRGF0ZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdERhc2hib2FyZCgpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgnL2FkbWluL3Jlc291cmNlcy9Qcm9kdXRvcycpOyAvLyA8LSBzdWJzdGl0dWEgcGVsbyBzZXUgcmVzb3VyY2UgSUQgc2UgZm9yIGRpZmVyZW50ZVxyXG4gIH0sIFtuYXZpZ2F0ZV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3REYXNoYm9hcmQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIEJ1dHRvbiwgSWNvbixcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IFN5bmNQcmljZXNBY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGljZSB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobm90aWNlICYmIG5vdGljZS5tZXNzYWdlKSB7XHJcbiAgICAgIC8vIFZvY8OqIHBvZGUgdXNhciBhIG5vdGlmaWNhw6fDo28gZG8gQWRtaW5KUywgbWFzIGFxdWkgc8OzIHVtIGFsZXJ0IHNpbXBsZXNcclxuICAgICAgYWxlcnQobm90aWNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtub3RpY2VdKTtcclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSB2b2x0YXIgcGFyYSBhIGxpc3RhZ2VtIGRlIHByb2R1dG9zXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIC8vIFNlIHF1aXNlciBpciBwYXJhIHVtYSByb3RhIGZpeGE6XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1Byb2R1dG9zJztcclxuICAgIC8vIE91IHPDsyB2b2x0YXIgbmEgbmF2ZWdhw6fDo286XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdmFyaWFudD1cInN1Y2Nlc3NcIiBwYWRkaW5nPVwibGdcIj5cclxuXHJcbiAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgbWI9XCIzNnB4XCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJywgbWFyZ2luQm90dG9tOiAnM3JlbScgfX0+XHJcbiAgICAgICAgQSBhw6fDo28gZm9pIGV4ZWN1dGFkYSBjb20gc3VjZXNzbyBlbSB0b2RvcyBvcyBwcm9kdXRvcyBzZWxlY2lvbmFkb3MuXHJcbiAgICAgICAgVmVyaWZpcXVlIHNlIG9zIHByZcOnb3MgZm9yYW0gYXR1YWxpemFkb3MgY29ycmV0YW1lbnRlLlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsnPCBWb2x0YXIgcGFyYSBsaXN0YWdlbSd9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bmNQcmljZXNBY3Rpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRm9ybUdyb3VwLCBcclxuICBMYWJlbCwgXHJcbiAgQnV0dG9uLCBcclxuICBJbnB1dCxcclxuICBCb3gsXHJcbiAgVGV4dFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIENhdGVnb3JpYSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbm9tZTogc3RyaW5nO1xyXG4gIGNvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcmlhU2VsZWN0UmVhbDogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgb25DaGFuZ2UsIHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2NhdGVnb3JpYXMsIHNldENhdGVnb3JpYXNdID0gdXNlU3RhdGU8Q2F0ZWdvcmlhW10+KFtdKTtcclxuICBjb25zdCBbbm92YUNhdGVnb3JpYSwgc2V0Tm92YUNhdGVnb3JpYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcmlhcywgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDYXJyZWdhciBjYXRlZ29yaWFzIGV4aXN0ZW50ZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWFzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBJbmljaWFsaXphciBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcyAtIEVYRUNVVEFSIEFQRU5BUyBVTUEgVkVaXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWFzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBBZ3VhcmRhciBjYXRlZ29yaWFzIGNhcnJlZ2FyZW1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ/CflIQgVXNlRWZmZWN0IC0gSW5pY2lhbGl6YW5kbyBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcycpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflIQgQ2F0ZWdvcmlhcyBjYXJyZWdhZGFzOicsIGNhdGVnb3JpYXMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFJlY29yZCBjb21wbGV0byAoRlVMTCBEVU1QKTonLCBKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coICcgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsJyAsICByZWNvcmQ/LnBhcmFtcyk7ICAgIFxyXG4gICAgLy8gTk9WTzogQ29udmVydGVyIG9iamV0byBpbmRleGFkbyBkbyBBZG1pbkpTIHBhcmEgYXJyYXlcclxuICAgIGxldCBjdXJyZW50VmFsdWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBWZXJpZmljYXIgc2UgYXMgY2F0ZWdvcmlhcyBlc3TDo28gbm8gZm9ybWF0byAuMCwgLjEsIC4yIChvYmpldG8gaW5kZXhhZG8pXHJcbiAgICBpZiAocmVjb3JkPy5wYXJhbXMpIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmlhc0luZGV4YWRhcyA9IFtdO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBcclxuICAgICAgLy8gQnVzY2FyIHRvZGFzIGFzIGNoYXZlcyBxdWUgY29tZcOnYW0gY29tICdjYXRlZ29yaWFzLidcclxuICAgICAgd2hpbGUgKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2F0ZWdvcmlhc0luZGV4YWRhcy5wdXNoKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSk7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGNhdGVnb3JpYXNJbmRleGFkYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhdGVnb3JpYXNJbmRleGFkYXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gQ2F0ZWdvcmlhcyBlbmNvbnRyYWRhcyBjb21vIG9iamV0byBpbmRleGFkbzonLCBjYXRlZ29yaWFzSW5kZXhhZGFzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBjb21vIG9iamV0byBpbmRleGFkbywgdGVudGFyIGNhbWluaG9zIG5vcm1haXNcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGNhbWluaG9zID0gW1xyXG4gICAgICAgIHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsXHJcbiAgICAgICAgcmVjb3JkPy5wb3B1bGF0ZWQ/Lltwcm9wZXJ0eS5uYW1lXSxcclxuICAgICAgICByZWNvcmQ/LnBvcHVsYXRlZD8uY2F0ZWdvcmlhcyxcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIFRlc3RhbmRvIGNhbWluaG9zIHRyYWRpY2lvbmFpczonKTtcclxuICAgICAgY2FtaW5ob3MuZm9yRWFjaCgoY2FtaW5obywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgICBDYW1pbmhvICR7aW5kZXh9OmAsIGNhbWluaG8pO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhbWluaG9zLmZpbmQoY2FtaW5obyA9PiBjYW1pbmhvICE9PSB1bmRlZmluZWQgJiYgY2FtaW5obyAhPT0gbnVsbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIFZhbG9yIEZJTkFMIEVTQ09MSElETzonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlwbyBkbyB2YWxvcjonLCB0eXBlb2YgY3VycmVudFZhbHVlLCBBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFZhbHVlICYmIEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBQcm9jZXNzYXIgSURzIHByaW1laXJvLCBkZXBvaXMgcmVtb3ZlciBkdXBsaWNhdGFzXHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZElkcyA9IGN1cnJlbnRWYWx1ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gUHJvY2Vzc2FuZG8gaXRlbTonLCBpdGVtLCB0eXBlb2YgaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaXRlbS5faWQgfHwgaXRlbS5pZCB8fCBpdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5SNICAg4oaSIElEIGV4dHJhw61kbyBkbyBvYmpldG86JywgaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuZmlsdGVyKGlkID0+IGlkICYmIGlkICE9PSAnbnVsbCcgJiYgaWQgIT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlbW92ZXIgZHVwbGljYXRhc1xyXG4gICAgICBjb25zdCB1bmlxdWVJZHMgPSBbLi4ubmV3IFNldChwcm9jZXNzZWRJZHMpXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyDDum5pY29zIHByb2Nlc3NhZG9zOicsIHVuaXF1ZUlkcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIENhdGVnb3JpYXMgZGlzcG9uw612ZWlzIHBhcmEgbWF0Y2hpbmc6JywgY2F0ZWdvcmlhcy5tYXAoYyA9PiAoeyBpZDogYy5faWQsIG5vbWU6IGMubm9tZSB9KSkpO1xyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2FyIHNlIGFsZ3VtIElEIGJhdGVcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHVuaXF1ZUlkcy5maWx0ZXIoc2VsZWN0ZWRJZCA9PiBcclxuICAgICAgICBjYXRlZ29yaWFzLnNvbWUoY2F0ID0+IGNhdC5faWQgPT09IHNlbGVjdGVkSWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyBxdWUgZmF6ZW0gbWF0Y2g6JywgbWF0Y2hlcyk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpYXModW5pcXVlSWRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIE5lbmh1bWEgY2F0ZWdvcmlhIHNlbGVjaW9uYWRhIGVuY29udHJhZGEnKTtcclxuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKFtdKTtcclxuICAgIH1cclxuICB9LCBbY2F0ZWdvcmlhcy5sZW5ndGhdKTsgLy8gTVVET1U6IFPDsyByb2RhIHF1YW5kbyBjYXRlZ29yaWFzIHPDo28gY2FycmVnYWRhc1xyXG5cclxuICAvLyBEZXRlY3RhciBzZSBlc3TDoSBubyBtb2RvIGRlIGVkacOnw6NvIG91IGNyaWHDp8Ojb1xyXG4gIGNvbnN0IGlzRWRpdE1vZGUgPSByZWNvcmQ/LmlkIHx8IHJlY29yZD8ucGFyYW1zPy5pZCB8fCAocmVjb3JkICYmIE9iamVjdC5rZXlzKHJlY29yZC5wYXJhbXMgfHwge30pLmxlbmd0aCA+IDEpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIE1vZG8gZGV0ZWN0YWRvOicsIGlzRWRpdE1vZGUgPyAnRURJw4fDg08nIDogJ0NSSUHDh8ODTycpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIFJlY29yZCBJRDonLCByZWNvcmQ/LmlkKTtcclxuICBjb25zb2xlLmxvZygn8J+UpyBSZWNvcmQgcGFyYW1zIElEOicsIHJlY29yZD8ucGFyYW1zPy5pZCk7XHJcbiAgY29uc29sZS5sb2coJ/CflKcgUmVjb3JkIHBhcmFtcyBrZXlzOicsIE9iamVjdC5rZXlzKHJlY29yZD8ucGFyYW1zIHx8IHt9KSk7XHJcblxyXG4gIC8vIERlYnVnIHF1YW5kbyBzZWxlY3RlZENhdGVnb3JpYXMgbXVkYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UpSBzZWxlY3RlZENhdGVnb3JpYXMgTVVET1U6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SlIFF1YW50aWRhZGU6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzLmxlbmd0aCk7XHJcbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcmlhc10pO1xyXG5cclxuICBjb25zdCBmZXRjaENhdGVnb3JpYXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL2xpc3QnKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5yZWNvcmRzKSB7XHJcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWFzRm9ybWF0YWRhcyA9IGRhdGEucmVjb3Jkcy5tYXAoKHJlY29yZDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhyZWNvcmQuaWQpLFxyXG4gICAgICAgICAgICBub21lOiByZWNvcmQucGFyYW1zLm5vbWUsXHJcbiAgICAgICAgICAgIGNvcjogcmVjb3JkLnBhcmFtcy5jb3JcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHNldENhdGVnb3JpYXMoY2F0ZWdvcmlhc0Zvcm1hdGFkYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBjYXRlZ29yaWFzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVDYXRlZ29yaWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW5vdmFDYXRlZ29yaWEudHJpbSgpIHx8IGxvYWRpbmcpIHJldHVybjtcclxuICAgIFxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENyaWFyIGNhdGVnb3JpYSB1c2FuZG8gZmV0Y2ggZGlyZXRvIHBhcmEgYSBBUEkgZG8gQWRtaW5KU1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIG5vbWU6IG5vdmFDYXRlZ29yaWEudHJpbSgpLFxyXG4gICAgICAgIGNvcjogJyMwYzRhMmInXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDYXRlZ29yaWE6IENhdGVnb3JpYSA9IHtcclxuICAgICAgICAgIF9pZDogU3RyaW5nKGRhdGEucmVjb3JkLmlkKSxcclxuICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgY29yOiBkYXRhLnJlY29yZC5wYXJhbXMuY29yIHx8ICcjMGM0YTJiJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRpY2lvbmFyIMOgIGxpc3RhIGxvY2FsXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmlhcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdDYXRlZ29yaWFdKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZWxlY2lvbmFyIGF1dG9tYXRpY2FtZW50ZVxyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcmlhcywgbmV3Q2F0ZWdvcmlhLl9pZF07XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb3RpZmljYXIgQWRtaW5KU1xyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXROb3ZhQ2F0ZWdvcmlhKCcnKTtcclxuICAgICAgICBhbGVydChg4pyFIENhdGVnb3JpYSBcIiR7bmV3Q2F0ZWdvcmlhLm5vbWV9XCIgY3JpYWRhIWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRlbnRhciBjb20gRm9ybURhdGEgc2UgSlNPTiBuw6NvIGZ1bmNpb25hclxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdub21lJywgbm92YUNhdGVnb3JpYS50cmltKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29yJywgJyMwYzRhMmInKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL0NhdGVnb3JpYU5vdGljaWFzL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZvcm1SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IG5ld0NhdGVnb3JpYTogQ2F0ZWdvcmlhID0ge1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhkYXRhLnJlY29yZC5pZCksXHJcbiAgICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgICBjb3I6IGRhdGEucmVjb3JkLnBhcmFtcy5jb3IgfHwgJyMwYzRhMmInXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRDYXRlZ29yaWFzKHByZXYgPT4gWy4uLnByZXYsIG5ld0NhdGVnb3JpYV0pO1xyXG4gICAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBuZXdDYXRlZ29yaWEuX2lkXTtcclxuICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICAgICAgYWxlcnQoYOKchSBDYXRlZ29yaWEgXCIke25ld0NhdGVnb3JpYS5ub21lfVwiIGNyaWFkYSFgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvIG5hIGNyaWHDp8OjbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjcmlhciBjYXRlZ29yaWE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgn4p2MIEVycm8gYW8gY3JpYXIgY2F0ZWdvcmlhLiBWb3UgdXNhciBvIHNpc3RlbWEgYXV0b23DoXRpY28gZG8gYmFja2VuZC4nKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZhbGxiYWNrOiB1c2FyIG8gc2lzdGVtYSBxdWUgasOhIGZ1bmNpb25hIG5vIGJhY2tlbmRcclxuICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBub3ZhQ2F0ZWdvcmlhLnRyaW0oKV07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICBhbGVydChg8J+SoSBDYXRlZ29yaWEgXCIke25vdmFDYXRlZ29yaWEudHJpbSgpfVwiIHNlcsOhIGNyaWFkYSBxdWFuZG8gdm9jw6ogc2FsdmFyIGEgbm90w61jaWEuYCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yaWFDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0ZWdvcmlhSWQ6IHN0cmluZywgaXNTZWxlY3RlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKHByZXZTZWxlY3RlZCA9PiB7XHJcbiAgICAgIGxldCBuZXdTZWxlY3RlZDtcclxuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAvLyBWZXJpZmljYXIgc2UgasOhIG7Do28gZXN0w6Egc2VsZWNpb25hZGEgcGFyYSBldml0YXIgZHVwbGljYXRhc1xyXG4gICAgICAgIGlmICghcHJldlNlbGVjdGVkLmluY2x1ZGVzKGNhdGVnb3JpYUlkKSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0ZWQgPSBbLi4ucHJldlNlbGVjdGVkLCBjYXRlZ29yaWFJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkOyAvLyBKw6EgZXN0w6Egc2VsZWNpb25hZGEsIG7Do28gYWRpY2lvbmFyXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkLmZpbHRlcihpZCA9PiBpZCAhPT0gY2F0ZWdvcmlhSWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBuZXdTZWxlY3RlZDtcclxuICAgIH0pO1xyXG4gIH0sIFtvbkNoYW5nZSwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPkNhdGVnb3JpYXMge2lzRWRpdE1vZGUgPyAnKEVkaXRhbmRvKScgOiAnKENyaWFuZG8pJ308L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgey8qIENyaWFyIG5vdmEgY2F0ZWdvcmlhICovfVxyXG4gICAgICA8Qm94IG1iPVwiZGVmYXVsdFwiIHA9XCJkZWZhdWx0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgQ3JpYXIgTm92YSBDYXRlZ29yaWFcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIG5vdmEgY2F0ZWdvcmlhLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e25vdmFDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92YUNhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZUNhdGVnb3JpYSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbm92YUNhdGVnb3JpYS50cmltKCkgfHwgbG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAnQ3JpYW5kby4uLicgOiAnQ3JpYXInfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIExpc3RhIGRlIGNhdGVnb3JpYXMgLSBBZGFwdGFkYSBwYXJhIG1vZG8gZGUgZWRpw6fDo28gKi99XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiPlxyXG4gICAgICAgICAge2lzRWRpdE1vZGUgPyAnIENhdGVnb3JpYXMgRGlzcG9uw612ZWlzIC0gTWFycXVlL0Rlc21hcnF1ZScgOiAn8J+TiyBTZWxlY2lvbmFyIENhdGVnb3JpYXMnfSAoe2NhdGVnb3JpYXMubGVuZ3RofSlcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIE1vc3RyYXIgY2F0ZWdvcmlhcyBzZWxlY2lvbmFkYXMgcHJpbWVpcm8gbm8gbW9kbyBkZSBlZGnDp8OjbyAqL31cclxuICAgICAgICB7aXNFZGl0TW9kZSAmJiBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG1iPVwic21cIiBwPVwic21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JywgYm9yZGVyOiAnMnB4IHNvbGlkICMwYzRhMmInIH19PlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic3VjY2Vzc1wiIG1iPVwieHNcIj5cclxuICAgICAgICAgICAgICDinIUgQ2F0ZWdvcmlhcyBBdHVhbG1lbnRlIFNlbGVjaW9uYWRhcyAoe3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9KTpcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoY2F0ID0+IHNlbGVjdGVkQ2F0ZWdvcmlhcy5pbmNsdWRlcyhjYXQuX2lkKSlcclxuICAgICAgICAgICAgICAubWFwKGNhdGVnb3JpYSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y2F0ZWdvcmlhLl9pZH0gZGlzcGxheT1cImlubGluZS1ibG9ja1wiIG1yPVwieHNcIiBtYj1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwYzRhMmInLCBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCA4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ2F1dG8nLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIGJvcmRlclJhZGl1czogJzRweCcsIHBhZGRpbmc6ICc4cHgnIH19PlxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubWFwKGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZENhdGVnb3JpYXMuaW5jbHVkZXMoY2F0ZWdvcmlhLl9pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SNIENoZWNrYm94ICR7Y2F0ZWdvcmlhLm5vbWV9ICgke2NhdGVnb3JpYS5faWR9KTogaXNTZWxlY3RlZCA9ICR7aXNTZWxlY3RlZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCflI0gc2VsZWN0ZWRDYXRlZ29yaWFzIGF0dWFsOmAsIHNlbGVjdGVkQ2F0ZWdvcmlhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yaWEuX2lkfVxyXG4gICAgICAgICAgICAgICAgcD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG1iPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/ICcjZThmNWU4JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3JpYUNoYW5nZShjYXRlZ29yaWEuX2lkLCAhaXNTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcmlhQ2hhbmdlKGNhdGVnb3JpYS5faWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250V2VpZ2h0OiBpc1NlbGVjdGVkID8gJ2JvbGQnIDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWEubm9tZX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInhzXCIgY29sb3I9XCJzdWNjZXNzXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyTIFNlbGVjaW9uYWRhXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmV5NjBcIiB2YXJpYW50PVwic21cIj5cclxuICAgICAgICAgICAgICBOZW5odW1hIGNhdGVnb3JpYSBlbmNvbnRyYWRhLiBDcmllIGEgcHJpbWVpcmEhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIFJlc3VtbyBkZSBzZWxlY2lvbmFkYXMgLSBEaWZlcmVudGUgcGFyYSBjYWRhIG1vZG8gKi99XHJcbiAgICAgIHtpc0VkaXRNb2RlID8gKFxyXG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjNjZCcsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgIPCfk50gTW9kbyBFZGnDp8Ojbzoge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSAtIEFsdGVyYcOnw7VlcyBzZXLDo28gc2FsdmFzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICDinIUge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSBwYXJhIGEgbm92YSBub3TDrWNpYVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhU2VsZWN0UmVhbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIEZvcm1Hcm91cCwgXHJcbiAgTGFiZWwsIFxyXG4gIEJveCwgXHJcbiAgVGV4dCBcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBQZXJpb2RvU2VsZWN0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuY29uc3QgUGVyaW9kb1NlbGVjdDogUmVhY3QuRkM8UGVyaW9kb1NlbGVjdFByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQZXJpb2RvLCBzZXRTZWxlY3RlZFBlcmlvZG9dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWwgc2UgZXhpc3RpclxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhjdXJyZW50VmFsdWUpO1xyXG4gIH0sIFtyZWNvcmQsIHByb3BlcnR5Lm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGVyaW9kb0NoYW5nZSA9IChwZXJpb2RvOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhwZXJpb2RvKTtcclxuICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBwZXJpb2RvKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwZXJpb2RvcyA9IFtcclxuICAgIHsgdmFsdWU6ICdBTScsIGxhYmVsOiAnQU0gKE1hbmjDoyknLCBpY29uOiAn8J+MhScgfSxcclxuICAgIHsgdmFsdWU6ICdQTScsIGxhYmVsOiAnUE0gKFRhcmRlL05vaXRlKScsIGljb246ICfwn4yGJyB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ1BlcsOtb2RvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICBTZWxlY2lvbmUgbyBwZXLDrW9kbyBkbyBob3LDoXJpb1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICA8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTJweCcsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XHJcbiAgICAgICAgICB7cGVyaW9kb3MubWFwKHBlcmlvZG8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRQZXJpb2RvID09PSBwZXJpb2RvLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGtleT17cGVyaW9kby52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBlcmlvZG9DaGFuZ2UocGVyaW9kby52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpc1NlbGVjdGVkID8gJzJweCBzb2xpZCAjMGM0YTJiJyA6ICcycHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyAnI2U4ZjVlOCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzE0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjOTk5JztcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOGY5ZmEnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2RkZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmb250U2l6ZTogJzI0cHgnLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cGVyaW9kby5pY29ufVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNTZWxlY3RlZCA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc1NlbGVjdGVkID8gJyMwYzRhMmInIDogJyMzMzMnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwZXJpb2RvLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3NlbGVjdGVkUGVyaW9kbyAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIiBwPVwieHNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJyB9fT5cclxuICAgICAgICAgICAgICDinIUgUGVyw61vZG8gc2VsZWNpb25hZG86IDxzdHJvbmc+e3NlbGVjdGVkUGVyaW9kb308L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICB7cHJvcGVydHkuZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtdD1cInhzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJpb2RvU2VsZWN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBUaW55TUNFRWRpdG9yUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgdGlueW1jZTogYW55O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVGlueU1DRUVkaXRvcjogUmVhY3QuRkM8VGlueU1DRUVkaXRvclByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBUaW55TUNFIC0gVmFsb3IgaW5pY2lhbDonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFJlY29yZCBjb21wbGV0bzonLCByZWNvcmQpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcbiAgICBcclxuICAgIHNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIFxyXG4gICAgLy8gU2UgbyBUaW55TUNFIGrDoSBlc3RpdmVyIGNhcnJlZ2FkbywgYXR1YWxpemFyIG8gY29udGXDumRvXHJcbiAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQgJiYgY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LnNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBUaW55TUNFIGRpbmFtaWNhbWVudGVcclxuICAgIGlmICghd2luZG93LnRpbnltY2UpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL2g0bzdkaDdwajU4ZXl2cXhmZGZrZDhrb2czeWU0NDdvaGR3eDU3MmQ1eTJ3Z21wNC90aW55bWNlLzYvdGlueW1jZS5taW4uanMnO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LnRpbnltY2UucmVtb3ZlKGVkaXRvclJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVUaW55TUNFID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0YXJlYVJlZi5jdXJyZW50IHx8IGlzTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgd2luZG93LnRpbnltY2UuaW5pdCh7XHJcbiAgICAgIHRhcmdldDogdGV4dGFyZWFSZWYuY3VycmVudCxcclxuICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgJ2Fkdmxpc3QnLCAnYXV0b2xpbmsnLCAnbGlzdHMnLCAnbGluaycsICdpbWFnZScsICdjaGFybWFwJywgJ3ByZXZpZXcnLFxyXG4gICAgICAgICdhbmNob3InLCAnc2VhcmNocmVwbGFjZScsICd2aXN1YWxibG9ja3MnLCAnY29kZScsICdmdWxsc2NyZWVuJyxcclxuICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUnLCAnbWVkaWEnLCAndGFibGUnLCAnaGVscCcsICd3b3JkY291bnQnXHJcbiAgICAgIF0sXHJcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBibG9ja3MgfCAnICtcclxuICAgICAgICAnYm9sZCBpdGFsaWMgZm9yZWNvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyICcgK1xyXG4gICAgICAgICdhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8ICcgK1xyXG4gICAgICAgICdyZW1vdmVmb3JtYXQgfCBpbWFnZSBtZWRpYSBsaW5rIHwgY29kZSBmdWxsc2NyZWVuIHwgaGVscCcsXHJcbiAgICAgIGNvbnRlbnRfc3R5bGU6ICdib2R5IHsgZm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4IH0nLFxyXG4gICAgICBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IGFzeW5jIChibG9iSW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vIE9Qw4fDg08gMTogVXNhciBiYXNlNjQgKG1haXMgc2ltcGxlcywgZnVuY2lvbmEgc2VtcHJlKVxyXG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4pyFIEltYWdlbSBjb252ZXJ0aWRhIHBhcmEgYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYmFzZTY0KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm8gYW8gY29udmVydGVyIGltYWdlbSBwYXJhIGJhc2U2NCcpO1xyXG4gICAgICAgICAgICByZWplY3QoJ0Vycm8gYW8gcHJvY2Vzc2FyIGltYWdlbScpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2JJbmZvLmJsb2IoKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE9Qw4fDg08gMjogVXBsb2FkIHZpYSBGb3JtRGF0YSAoY29tZW50YWRvLCBwb2RlIHRlbnRhciBkZXBvaXMpXHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2JJbmZvLmJsb2IoKSwgYmxvYkluZm8uZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FsdCcsIGJsb2JJbmZvLmZpbGVuYW1lKCkgfHwgJ0ltYWdlbSBkbyBUaW55TUNFJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9NZWRpYS9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVjb3JkPy5wYXJhbXM/LnVybCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnJlY29yZC5wYXJhbXMudXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZWplY3QoJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlamVjdCgnVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3I7XHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZWRpdG9yLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgIHNldENvbnRlbnQobmV3Q29udGVudCk7XHJcbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3Q29udGVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAvLyBDYXJyZWdhciBjb250ZcO6ZG8gaW5pY2lhbCBkbyByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgICAgICAgIGlmIChpbml0aWFsQ29udGVudCkge1xyXG4gICAgICAgICAgICBlZGl0b3Iuc2V0Q29udGVudChpbml0aWFsQ29udGVudCk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaW5pdGlhbENvbnRlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbCB8fCAnQ29udGXDumRvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICBFZGl0b3IgYXZhbsOnYWRvIGNvbSB1cGxvYWQgZGUgaW1hZ2VucyBlIGZvcm1hdGHDp8OjbyByaWNhXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcmVmPXt0ZXh0YXJlYVJlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdIHx8IGNvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgY2FzbyBUaW55TUNFIG7Do28gY2FycmVndWVcclxuICAgICAgICAgICAgaWYgKCFpc0xvYWRlZCAmJiBvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHshaXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+TnSBDYXJyZWdhbmRvIGVkaXRvciBhdmFuw6dhZG8uLi5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlueU1DRUVkaXRvcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5pbnRlcmZhY2UgUXVpbGxFZGl0b3JQcm9wcyBleHRlbmRzIEJhc2VQcm9wZXJ0eVByb3BzIHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBRdWlsbDogYW55O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUXVpbGxFZGl0b3I6IFJlYWN0LkZDPFF1aWxsRWRpdG9yUHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBzZXRDb250ZW50KGN1cnJlbnRWYWx1ZSk7XHJcbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2FycmVnYXIgUXVpbGwgZGluYW1pY2FtZW50ZVxyXG4gICAgaWYgKCF3aW5kb3cuUXVpbGwpIHtcclxuICAgICAgLy8gQ2FycmVnYXIgQ1NTXHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG4ucXVpbGxqcy5jb20vMS4zLjYvcXVpbGwuc25vdy5jc3MnO1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAgICAgLy8gQ2FycmVnYXIgSlNcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4ucXVpbGxqcy5jb20vMS4zLjYvcXVpbGwubWluLmpzJztcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpbml0aWFsaXplUXVpbGwoKTtcclxuICAgICAgfTtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdGlhbGl6ZVF1aWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHF1aWxsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBxdWlsbFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVRdWlsbCA9ICgpID0+IHtcclxuICAgIGlmICghY29udGFpbmVyUmVmLmN1cnJlbnQgfHwgaXNMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBxdWlsbCA9IG5ldyB3aW5kb3cuUXVpbGwoY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcclxuICAgICAgdGhlbWU6ICdzbm93JyxcclxuICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sXHJcbiAgICAgICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJ30sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcclxuICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXHJcbiAgICAgICAgICBbJ2NsZWFuJ11cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnRGlnaXRlIG8gY29udGXDumRvIGRhIG5vdMOtY2lhLi4uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgcXVpbGxSZWYuY3VycmVudCA9IHF1aWxsO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgdXBsb2FkIGRlIGltYWdlbSBjdXN0b21pemFkb1xyXG4gICAgY29uc3QgdG9vbGJhciA9IHF1aWxsLmdldE1vZHVsZSgndG9vbGJhcicpO1xyXG4gICAgdG9vbGJhci5hZGRIYW5kbGVyKCdpbWFnZScsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XHJcbiAgICAgIGlucHV0LmNsaWNrKCk7XHJcblxyXG4gICAgICBpbnB1dC5vbmNoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBxdWlsbC5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICBxdWlsbC5pbnNlcnRFbWJlZChyYW5nZT8uaW5kZXggfHwgMCwgJ2ltYWdlJywgcmVzdWx0LnJlY29yZC5wYXJhbXMudXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Vycm8gYW8gZmF6ZXIgdXBsb2FkIGRhIGltYWdlbScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIExpc3RlbmVyIHBhcmEgbXVkYW7Dp2FzXHJcbiAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBxdWlsbC5yb290LmlubmVySFRNTDtcclxuICAgICAgc2V0Q29udGVudChodG1sKTtcclxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgaHRtbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERlZmluaXIgY29udGXDumRvIGluaWNpYWxcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbCB8fCAnQ29udGXDumRvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICDinKggRWRpdG9yIG1vZGVybm8gY29tIHVwbG9hZCBkZSBpbWFnZW5zIGUgZm9ybWF0YcOnw6NvIHJpY2FcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBpc0xvYWRlZCA/ICdub25lJyA6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogJzMwMHB4J1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHshaXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+UhCBDYXJyZWdhbmRvIGVkaXRvciBRdWlsbC5qcy4uLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7aXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+SoSBEaWNhczogVXNlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgcGFyYSBmb3JtYXRhci4gQ2xpcXVlIG5vIMOtY29uZSBkZSBpbWFnZW0gcGFyYSBmYXplciB1cGxvYWQuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aWxsRWRpdG9yO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRm9ybUdyb3VwLCBcclxuICBMYWJlbCwgXHJcbiAgQm94LCBcclxuICBUZXh0LCBcclxuICBCdXR0b24sIFxyXG4gIElucHV0LFxyXG4gIFRleHRBcmVhXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5pbnRlcmZhY2UgQmxvY2sge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogJ3RleHQnIHwgJ2hlYWRpbmcnIHwgJ2ltYWdlJyB8ICdxdW90ZScgfCAnbGlzdCc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHVybD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJsb2NrQnVpbGRlclByb3BzIGV4dGVuZHMgQmFzZVByb3BlcnR5UHJvcHMge31cclxuXHJcbmNvbnN0IEJsb2NrQnVpbGRlcjogUmVhY3QuRkM8QmxvY2tCdWlsZGVyUHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9ja3MsIHNldEJsb2Nrc10gPSB1c2VTdGF0ZTxCbG9ja1tdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldEJsb2NrcyhBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQgOiBbXSk7XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIC8vIFNlIG7Do28gw6kgSlNPTiwgY3JpYXIgdW0gYmxvY28gZGUgdGV4dG9cclxuICAgICAgICBzZXRCbG9ja3MoW3tcclxuICAgICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBjb250ZW50OiBjdXJyZW50VmFsdWVcclxuICAgICAgICB9XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIGNvbnN0IGFkZEJsb2NrID0gKHR5cGU6IEJsb2NrWyd0eXBlJ10pID0+IHtcclxuICAgIGNvbnN0IG5ld0Jsb2NrOiBCbG9jayA9IHtcclxuICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgICAgdHlwZSxcclxuICAgICAgY29udGVudDogJycsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gWy4uLmJsb2NrcywgbmV3QmxvY2tdO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQmxvY2sgPSAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxCbG9jaz4pID0+IHtcclxuICAgIGNvbnN0IG5ld0Jsb2NrcyA9IGJsb2Nrcy5tYXAoYmxvY2sgPT4gXHJcbiAgICAgIGJsb2NrLmlkID09PSBpZCA/IHsgLi4uYmxvY2ssIC4uLnVwZGF0ZXMgfSA6IGJsb2NrXHJcbiAgICApO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQmxvY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gYmxvY2tzLmZpbHRlcihibG9jayA9PiBibG9jay5pZCAhPT0gaWQpO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW92ZUJsb2NrID0gKGlkOiBzdHJpbmcsIGRpcmVjdGlvbjogJ3VwJyB8ICdkb3duJykgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBibG9ja3MuZmluZEluZGV4KGJsb2NrID0+IGJsb2NrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gZGlyZWN0aW9uID09PSAndXAnID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xyXG4gICAgaWYgKG5ld0luZGV4IDwgMCB8fCBuZXdJbmRleCA+PSBibG9ja3MubGVuZ3RoKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0Jsb2NrcyA9IFsuLi5ibG9ja3NdO1xyXG4gICAgW25ld0Jsb2Nrc1tpbmRleF0sIG5ld0Jsb2Nrc1tuZXdJbmRleF1dID0gW25ld0Jsb2Nrc1tuZXdJbmRleF0sIG5ld0Jsb2Nrc1tpbmRleF1dO1xyXG4gICAgXHJcbiAgICBzZXRCbG9ja3MobmV3QmxvY2tzKTtcclxuICAgIHVwZGF0ZUNvbnRlbnQobmV3QmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250ZW50ID0gKG5ld0Jsb2NrczogQmxvY2tbXSkgPT4ge1xyXG4gICAgLy8gQ29udmVydGVyIGJsb2NrcyBwYXJhIEhUTUxcclxuICAgIGNvbnN0IGh0bWwgPSBuZXdCbG9ja3MubWFwKGJsb2NrID0+IHtcclxuICAgICAgc3dpdGNoIChibG9jay50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZyc6XHJcbiAgICAgICAgICByZXR1cm4gYDxoMj4ke2Jsb2NrLmNvbnRlbnR9PC9oMj5gO1xyXG4gICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8cD4ke2Jsb2NrLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgY2FzZSAncXVvdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8YmxvY2txdW90ZT4ke2Jsb2NrLmNvbnRlbnR9PC9ibG9ja3F1b3RlPmA7XHJcbiAgICAgICAgY2FzZSAnbGlzdCc6XHJcbiAgICAgICAgICByZXR1cm4gYDx1bD48bGk+JHtibG9jay5jb250ZW50LnNwbGl0KCdcXG4nKS5qb2luKCc8L2xpPjxsaT4nKX08L2xpPjwvdWw+YDtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtibG9jay51cmx9XCIgYWx0PVwiJHtibG9jay5jb250ZW50fVwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87XCIgLz5gO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gYDxwPiR7YmxvY2suY29udGVudH08L3A+YDtcclxuICAgICAgfVxyXG4gICAgfSkuam9pbignXFxuJyk7XHJcblxyXG4gICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGh0bWwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsIHx8ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJsb2NrID0gKGJsb2NrOiBCbG9jaykgPT4ge1xyXG4gICAgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgIHBhZGRpbmc6ICcxMnB4JyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3gga2V5PXtibG9jay5pZH0gc3R5bGU9e2NvbW1vblN0eWxlc30+XHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyM2NjYnIH19PlxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICfwn5OdIFBhcsOhZ3JhZm8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2hlYWRpbmcnICYmICfwn5OwIFTDrXR1bG8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2ltYWdlJyAmJiAn8J+WvO+4jyBJbWFnZW0nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3F1b3RlJyAmJiAn8J+SrCBDaXRhw6fDo28nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2xpc3QnICYmICfwn5OLIExpc3RhJ31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZUJsb2NrKGJsb2NrLmlkLCAndXAnKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YmxvY2tzLmZpbmRJbmRleChiID0+IGIuaWQgPT09IGJsb2NrLmlkKSA9PT0gMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKGkVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvY2soYmxvY2suaWQsICdkb3duJyl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Jsb2Nrcy5maW5kSW5kZXgoYiA9PiBiLmlkID09PSBibG9jay5pZCkgPT09IGJsb2Nrcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4oaTXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVCbG9jayhibG9jay5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDwn5eR77iPXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtibG9jay50eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmnDp8OjbyBkYSBpbWFnZW0uLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtibG9jay5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgdXJsIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGZhemVyIHVwbG9hZCBkYSBpbWFnZW0nKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtibG9jay51cmwgJiYgKFxyXG4gICAgICAgICAgICAgIDxCb3ggbXQ9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2NrLnVybH0gYWx0PXtibG9jay5jb250ZW50fSBzdHlsZT17eyBtYXhXaWR0aDogJzIwMHB4JywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSA6IGJsb2NrLnR5cGUgPT09ICdsaXN0JyA/IChcclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBjYWRhIGl0ZW0gZW0gdW1hIGxpbmhhLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgIGJsb2NrLnR5cGUgPT09ICdoZWFkaW5nJyA/ICdEaWdpdGUgbyB0w610dWxvLi4uJyA6XHJcbiAgICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ3F1b3RlJyA/ICdEaWdpdGUgYSBjaXRhw6fDo28uLi4nIDpcclxuICAgICAgICAgICAgICAnRGlnaXRlIG8gdGV4dG8uLi4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHJvd3M9e2Jsb2NrLnR5cGUgPT09ICdoZWFkaW5nJyA/IDIgOiA0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ0NvbnRlw7pkbyd9XHJcbiAgICAgICAge3Byb3BlcnR5LmlzUmVxdWlyZWQgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9zcGFuPn1cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxCb3ggbXQ9XCJ4c1wiPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCIgbWI9XCJzbVwiPlxyXG4gICAgICAgICAg8J+nsSBFZGl0b3IgZW0gYmxvY29zIC0gQ29uc3RydWEgc2V1IGNvbnRlw7pkbyBkZSBmb3JtYSBtb2R1bGFyXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBwYWRkaW5nOiAnMTZweCcsIGJhY2tncm91bmRDb2xvcjogJyNmYWZhZmEnIH19PlxyXG4gICAgICAgICAge2Jsb2Nrcy5tYXAocmVuZGVyQmxvY2spfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnOHB4JywgZmxleFdyYXA6ICd3cmFwJywgbWFyZ2luVG9wOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ3RleHQnKX0+KyBQYXLDoWdyYWZvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2hlYWRpbmcnKX0+KyBUw610dWxvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2ltYWdlJyl9PisgSW1hZ2VtPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ3F1b3RlJyl9PisgQ2l0YcOnw6NvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2xpc3QnKX0+KyBMaXN0YTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiPlxyXG4gICAgICAgICAgICDwn5KhIFVzZSBvcyBib3TDtWVzIHBhcmEgYWRpY2lvbmFyIGRpZmVyZW50ZXMgdGlwb3MgZGUgY29udGXDumRvLiBBcnJhc3RlIHBhcmEgcmVvcmRlbmFyLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0J1aWxkZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBcclxuICBGb3JtR3JvdXAsIFxyXG4gIExhYmVsLCBcclxuICBCb3gsIFxyXG4gIFRleHQsIFxyXG4gIEJ1dHRvbiBcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBUaXB0YXBFZGl0b3JQcm9wcyBleHRlbmRzIEJhc2VQcm9wZXJ0eVByb3BzIHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBFZGl0b3I6IGFueTtcclxuICAgIFN0YXJ0ZXJLaXQ6IGFueTtcclxuICAgIEltYWdlOiBhbnk7XHJcbiAgICBMaW5rOiBhbnk7XHJcbiAgICBUZXh0QWxpZ246IGFueTtcclxuICAgIEhpZ2hsaWdodDogYW55O1xyXG4gICAgVW5kZXJsaW5lOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUaXB0YXBFZGl0b3I6IFJlYWN0LkZDPFRpcHRhcEVkaXRvclByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VkaXRvciwgc2V0RWRpdG9yXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBUaXB0YXAgLSBWYWxvciBpbmljaWFsOicsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICBzZXRDb250ZW50KGN1cnJlbnRWYWx1ZSk7XHJcbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZFRpcHRhcCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgZWRpdG9yLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRUaXB0YXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBDU1MgZG8gVGlwdGFwXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXB0YXAtY3NzJykpIHtcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5pZCA9ICd0aXB0YXAtY3NzJztcclxuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi10ZXh0LWFsaWduQDIuMS4xMy9kaXN0L2luZGV4LmNzcyc7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDU1MgcGVyc29uYWxpemFkbyBwYXJhIG8gZWRpdG9yXHJcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIC50aXB0YXAtZWRpdG9yIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC10b29sYmFyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBoMSB7IGZvbnQtc2l6ZTogMmVtOyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luOiAwLjY3ZW0gMDsgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBoMiB7IGZvbnQtc2l6ZTogMS41ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW46IDAuNzVlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGgzIHsgZm9udC1zaXplOiAxLjE3ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW46IDAuODNlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHAgeyBtYXJnaW46IDFlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHVsLCAudGlwdGFwLWNvbnRlbnQgb2wgeyBtYXJnaW46IDFlbSAwOyBwYWRkaW5nLWxlZnQ6IDJlbTsgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBibG9ja3F1b3RlIHsgXHJcbiAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkZGQ7IFxyXG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDsgXHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgXHJcbiAgICAgICAgICBjb2xvcjogIzY2NjsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IC5oaWdobGlnaHQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7IH1cclxuICAgICAgICAudGlwdGFwLWJ0biB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjBmMGYwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1idG4uYWN0aXZlIHsgYmFja2dyb3VuZDogIzBjNGEyYjsgY29sb3I6IHdoaXRlOyB9XHJcbiAgICAgICAgLnRpcHRhcC1zZXBhcmF0b3IgeyB3aWR0aDogMXB4OyBiYWNrZ3JvdW5kOiAjZGRkOyBtYXJnaW46IDAgNHB4OyB9XHJcbiAgICAgIGA7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhcnJlZ2FyIFRpcHRhcCB2aWEgQ0ROXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpbmRvdy5FZGl0b3IpIHtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2NvcmVAMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9zdGFydGVyLWtpdEAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZUAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi1saW5rQDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLXRleHQtYWxpZ25AMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9leHRlbnNpb24taGlnaGxpZ2h0QDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLXVuZGVybGluZUAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW5pdGlhbGl6ZVRpcHRhcCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBUaXB0YXA6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRTY3JpcHQgPSAoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZVRpcHRhcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlwdGFwLWNvbnRlbnQnKTtcclxuICAgIGlmICghZWRpdG9yRWxlbWVudCB8fCAhd2luZG93LkVkaXRvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG5ld0VkaXRvciA9IG5ldyB3aW5kb3cuRWRpdG9yKHtcclxuICAgICAgZWxlbWVudDogZWRpdG9yRWxlbWVudCxcclxuICAgICAgZXh0ZW5zaW9uczogW1xyXG4gICAgICAgIHdpbmRvdy5TdGFydGVyS2l0LFxyXG4gICAgICAgIHdpbmRvdy5JbWFnZS5jb25maWd1cmUoe1xyXG4gICAgICAgICAgSFRNTEF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgY2xhc3M6ICd0aXB0YXAtaW1hZ2UnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aW5kb3cuTGluay5jb25maWd1cmUoe1xyXG4gICAgICAgICAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpbmRvdy5UZXh0QWxpZ24uY29uZmlndXJlKHtcclxuICAgICAgICAgIHR5cGVzOiBbJ2hlYWRpbmcnLCAncGFyYWdyYXBoJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2luZG93LkhpZ2hsaWdodCxcclxuICAgICAgICB3aW5kb3cuVW5kZXJsaW5lLFxyXG4gICAgICBdLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvblVwZGF0ZTogKHsgZWRpdG9yIH06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBlZGl0b3IuZ2V0SFRNTCgpO1xyXG4gICAgICAgIHNldENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBodG1sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRFZGl0b3IobmV3RWRpdG9yKTtcclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgIGlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5maWxlcz8uWzBdO1xyXG4gICAgICBpZiAoZmlsZSAmJiBlZGl0b3IpIHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgIGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0SW1hZ2UoeyBzcmM6IGJhc2U2NCB9KS5ydW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5wdXQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRMaW5rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gcHJvbXB0KCdEaWdpdGUgYSBVUkwgZG8gbGluazonKTtcclxuICAgIGlmICh1cmwgJiYgZWRpdG9yKSB7XHJcbiAgICAgIGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0TGluayh7IGhyZWY6IHVybCB9KS5ydW4oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBUb29sYmFyQnV0dG9uID0gKHsgXHJcbiAgICBvbkNsaWNrLCBcclxuICAgIGlzQWN0aXZlID0gZmFsc2UsIFxyXG4gICAgY2hpbGRyZW4gXHJcbiAgfTogeyBcclxuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7IFxyXG4gICAgaXNBY3RpdmU/OiBib29sZWFuOyBcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IFxyXG4gIH0pID0+IChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtgdGlwdGFwLWJ0biAke2lzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgU2VwYXJhdG9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJ0aXB0YXAtc2VwYXJhdG9yXCIgLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICA8TGFiZWw+XHJcbiAgICAgICAge3Byb3BlcnR5LmxhYmVsIHx8ICdDb250ZcO6ZG8nfVxyXG4gICAgICAgIHtwcm9wZXJ0eS5pc1JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvc3Bhbj59XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8Qm94IG10PVwieHNcIj5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiIG1iPVwic21cIj5cclxuICAgICAgICAgIOKaoSBFZGl0b3IgVGlwdGFwIG1vZGVybm8gY29tIGNvbnRyb2xlcyBhdmFuw6dhZG9zXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwdGFwLWVkaXRvclwiPlxyXG4gICAgICAgICAge2lzTG9hZGVkICYmIGVkaXRvciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwdGFwLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVCb2xkKCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdib2xkJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUl0YWxpYygpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaXRhbGljJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGVtPkk8L2VtPlxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVVbmRlcmxpbmUoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ3VuZGVybGluZScpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1PlU8L3U+XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUhpZ2hsaWdodCgpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGlnaGxpZ2h0Jyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg8J+Wje+4j1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAxIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDEgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDFcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAyIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDIgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDJcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAzIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDMgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDNcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnNldFRleHRBbGlnbignbGVmdCcpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSh7IHRleHRBbGlnbjogJ2xlZnQnIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfk4RcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0VGV4dEFsaWduKCdjZW50ZXInKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfk4RcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0VGV4dEFsaWduKCdyaWdodCcpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSh7IHRleHRBbGlnbjogJ3JpZ2h0JyB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDwn5OEXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVCdWxsZXRMaXN0KCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdidWxsZXRMaXN0Jyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oCiIExpc3RhXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZU9yZGVyZWRMaXN0KCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdvcmRlcmVkTGlzdCcpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDEuIExpc3RhXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUJsb2NrcXVvdGUoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ2Jsb2NrcXVvdGUnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDwn5KsXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBvbkNsaWNrPXthZGRJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICDwn5a877iPIEltYWdlbVxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBvbkNsaWNrPXthZGRMaW5rfT5cclxuICAgICAgICAgICAgICAgIPCflJcgTGlua1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS51bmRvKCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oa2XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnJlZG8oKS5ydW4oKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDihrdcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgaWQ9XCJ0aXB0YXAtY29udGVudFwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXB0YXAtY29udGVudFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7IWlzTG9hZGVkICYmIChcclxuICAgICAgICAgICAgPEJveCBwPVwibGdcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAgICDimqEgQ2FycmVnYW5kbyBlZGl0b3IgVGlwdGFwLi4uXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2lzTG9hZGVkICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9XCJzbVwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiPlxyXG4gICAgICAgICAgICAgIPCfkqEgVXNlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgcGFyYSBmb3JtYXRhci4gVGlwdGFwIG9mZXJlY2UgdW1hIGV4cGVyacOqbmNpYSBtb2Rlcm5hIGRlIGVkacOnw6NvLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXB0YXBFZGl0b3I7XHJcbiIsImltcG9ydCB7IERyb3Bab25lLCBEcm9wWm9uZUl0ZW0sIEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEVkaXQgPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpO1xuICAgIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KTtcbiAgICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICAgICAgaWYgKCh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKSkge1xuICAgICAgICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcbiAgICAgICAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcbiAgICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKTtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKTtcbiAgICAgICAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdKTtcbiAgICAgICAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpO1xuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7IG9uQ2hhbmdlOiBvblVwbG9hZCwgbXVsdGlwbGU6IGN1c3RvbS5tdWx0aXBsZSwgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgICAgICB9LCBmaWxlczogZmlsZXNUb1VwbG9hZCB9KSxcbiAgICAgICAgIWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsgZmlsZW5hbWU6IGtleSwgc3JjOiBwYXRoLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlIH0pKSxcbiAgICAgICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBrZXk6IHNpbmdsZUtleSwgZmlsZW5hbWU6IHNpbmdsZUtleSwgc3JjOiBwYXRoW2luZGV4XSwgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSkgfSkpIDogJyc7XG4gICAgICAgIH0pKSkgOiAnJykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICAgJ2F1ZGlvL2FhYycsXG4gICAgJ2F1ZGlvL21pZGknLFxuICAgICdhdWRpby94LW1pZGknLFxuICAgICdhdWRpby9tcGVnJyxcbiAgICAnYXVkaW8vb2dnJyxcbiAgICAnYXBwbGljYXRpb24vb2dnJyxcbiAgICAnYXVkaW8vb3B1cycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2F1ZGlvL3dlYm0nLFxuICAgICdhdWRpby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAgICd2aWRlby94LW1zdmlkZW8nLFxuICAgICd2aWRlby9tcGVnJyxcbiAgICAndmlkZW8vb2dnJyxcbiAgICAndmlkZW8vbXAydCcsXG4gICAgJ3ZpZGVvL3dlYm0nLFxuICAgICd2aWRlby8zZ3BwJyxcbiAgICAndmlkZW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgICAnaW1hZ2UvYm1wJyxcbiAgICAnaW1hZ2UvZ2lmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAgICdpbWFnZS90aWZmJyxcbiAgICAnaW1hZ2Uvd2VicCcsXG5dO1xuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgICAnYXBwbGljYXRpb24veC10YXInLFxuICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXTtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXTtcbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAgICd0ZXh0L2NzcycsXG4gICAgJ3RleHQvY3N2JyxcbiAgICAndGV4dC9odG1sJyxcbiAgICAndGV4dC9jYWxlbmRhcicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9wbGFpbicsXG4gICAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgJ3RleHQveG1sJyxcbl07XG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuXTtcbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAgICdmb250L290ZicsXG4gICAgJ2ZvbnQvdHRmJyxcbiAgICAnZm9udC93b2ZmJyxcbiAgICAnZm9udC93b2ZmMicsXG5dO1xuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAgICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAgICd2bmQudmlzaW8nLFxuICAgICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl07XG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAgIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAgIC4uLlZpZGVvTWltZVR5cGVzLFxuICAgIC4uLkltYWdlTWltZVR5cGVzLFxuICAgIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gICAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gICAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuICAgIC4uLkZvbnRNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdWRpb01pbWVUeXBlcywgSW1hZ2VNaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMnO1xuY29uc3QgU2luZ2xlRmlsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhdGgsIHN0eWxlOiB7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9LCBhbHQ6IG5hbWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIHsgY29udHJvbHM6IHRydWUsIHNyYzogcGF0aCB9LFxuICAgICAgICAgICAgICAgIFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJhdWRpb1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgeyBraW5kOiBcImNhcHRpb25zXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IHBhdGgsIG1sOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbVwiLCByb3VuZGVkOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkRvY3VtZW50RG93bmxvYWRcIiwgY29sb3I6IFwid2hpdGVcIiwgbXI6IFwiZGVmYXVsdFwiIH0pLFxuICAgICAgICAgICAgbmFtZSkpKTtcbn07XG5jb25zdCBGaWxlID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHlcbiAgICAgICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KTtcbiAgICBpZiAoIXByb3BlcnR5LmN1c3RvbS5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICAgICAgcGF0aCA9IGAke2N1c3RvbS5vcHRzLmJhc2VVcmx9LyR7bmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IHBhdGg6IHBhdGgsIG5hbWU6IG5hbWUsIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlIH0pKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJyc7XG4gICAgICAgIHBhdGggPSBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IGAke2Jhc2VVcmx9LyR7bmFtZVtpbmRleF19YCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IGtleTogc2luZ2xlUGF0aCwgcGF0aDogc2luZ2xlUGF0aCwgbmFtZTogbmFtZVtpbmRleF0sIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlW2luZGV4XSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogMTAwLCAuLi5wcm9wcyB9KSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgQ3VzdG9tVXBsb2FkRWRpdCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ3VzdG9tVXBsb2FkRWRpdCA9IEN1c3RvbVVwbG9hZEVkaXRcbmltcG9ydCBUaHVtYiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVGh1bWIgPSBUaHVtYlxuaW1wb3J0IEdyb3VwZWRQcmljZXMgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZ3JvdXBlZC1wcmljZXMnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkdyb3VwZWRQcmljZXMgPSBHcm91cGVkUHJpY2VzXG5pbXBvcnQgR3JvdXBlZERpc3BvbmliaWxpdGllcyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZERpc3BvbmliaWxpdGllcyA9IEdyb3VwZWREaXNwb25pYmlsaXRpZXNcbmltcG9ydCBTaG93UHJvZHVjdEltYWdlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3Nob3ctbWVkaWEnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNob3dQcm9kdWN0SW1hZ2UgPSBTaG93UHJvZHVjdEltYWdlXG5pbXBvcnQgRm9ybWF0dGVkRGF0ZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9mb3JtYXR0ZWQtZGF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRm9ybWF0dGVkRGF0ZSA9IEZvcm1hdHRlZERhdGVcbmltcG9ydCBSZWRpcmVjdERhc2hib2FyZCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9yZWRpcmVjdC1kYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlJlZGlyZWN0RGFzaGJvYXJkID0gUmVkaXJlY3REYXNoYm9hcmRcbmltcG9ydCBTeW5jUHJpY2VzQWN0aW9uIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3N5bmMtYnV0dG9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TeW5jUHJpY2VzQWN0aW9uID0gU3luY1ByaWNlc0FjdGlvblxuaW1wb3J0IENhdGVnb3JpYVNlbGVjdFJlYWwgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvY2F0ZWdvcmlhLXNlbGVjdC1yZWFsJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5DYXRlZ29yaWFTZWxlY3RSZWFsID0gQ2F0ZWdvcmlhU2VsZWN0UmVhbFxuaW1wb3J0IFBlcmlvZG9TZWxlY3QgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGVyaW9kby1zZWxlY3QnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlBlcmlvZG9TZWxlY3QgPSBQZXJpb2RvU2VsZWN0XG5pbXBvcnQgVGlueU1DRUVkaXRvciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aW55bWNlLWVkaXRvcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVGlueU1DRUVkaXRvciA9IFRpbnlNQ0VFZGl0b3JcbmltcG9ydCBRdWlsbEVkaXRvciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9xdWlsbC1lZGl0b3InXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlF1aWxsRWRpdG9yID0gUXVpbGxFZGl0b3JcbmltcG9ydCBCbG9ja0J1aWxkZXIgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvYmxvY2stYnVpbGRlcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQmxvY2tCdWlsZGVyID0gQmxvY2tCdWlsZGVyXG5pbXBvcnQgVGlwdGFwRWRpdG9yIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RpcHRhcC1lZGl0b3InXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlRpcHRhcEVkaXRvciA9IFRpcHRhcEVkaXRvclxuaW1wb3J0IFVwbG9hZEVkaXRDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZEVkaXRDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZEVkaXRDb21wb25lbnQgPSBVcGxvYWRFZGl0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkTGlzdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkTGlzdENvbXBvbmVudCA9IFVwbG9hZExpc3RDb21wb25lbnRcbmltcG9ydCBVcGxvYWRTaG93Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRTaG93Q29tcG9uZW50ID0gVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJuYW1lcyI6WyJVcGxvYWRFZGl0IiwicHJvcHMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJodG1sRm9yIiwicHJvcGVydHkiLCJuYW1lIiwiaWQiLCJ0eXBlIiwiVGh1bWIiLCJyZWNvcmQiLCJ1cmwiLCJwYXJhbXMiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiR3JvdXBlZFByaWNlcyIsIm9uQ2hhbmdlIiwicHJlY29VbmljbyIsInByZWNvTWVkaW8iLCJwcmVjb0dyYW5kZSIsInByZWNvSW5kaXZpZHVhbCIsImhhbmRsZUNoYW5nZSIsImZpZWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJveCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwibXIiLCJtYiIsIkZvcm1Hcm91cCIsIkxhYmVsIiwiSW5wdXQiLCJzdGVwIiwiR3JvdXBlZERpc3BvbmliaWxpdGllcyIsImphbnRhciIsImRlbGl2ZXJ5IiwiaGFuZGxlQ2hhbmdlSmFudGFyIiwiZSIsImNoZWNrZWQiLCJoYW5kbGVDaGFuZ2VEZWxpdmVyeSIsImZvbnRXZWlnaHQiLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJjdXJzb3IiLCJDaGVja0JveCIsIm1hcmdpblJpZ2h0IiwiU2hvd1Byb2R1Y3RJbWFnZSIsImZpZWxkTmFtZSIsIm1lZGlhS2V5IiwiYWx0S2V5IiwibWVkaWFQYXRoIiwiYWx0VGV4dCIsImZ1bGxVcmwiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJtdCIsImVuZHNXaXRoIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb250cm9scyIsImNvbG9yIiwiRm9ybWF0dGVkRGF0ZSIsInJhd1ZhbHVlIiwicGF0aCIsImRhdGUiLCJEYXRlIiwiZm9ybWF0dGVkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwidGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJSZWRpcmVjdERhc2hib2FyZCIsIm5hdmlnYXRlIiwidXNlTmF2aWdhdGUiLCJ1c2VFZmZlY3QiLCJTeW5jUHJpY2VzQWN0aW9uIiwibm90aWNlIiwibWVzc2FnZSIsImFsZXJ0IiwiaGFuZGxlQmFjayIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwidmFyaWFudCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJCdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIkNhdGVnb3JpYVNlbGVjdFJlYWwiLCJjYXRlZ29yaWFzIiwic2V0Q2F0ZWdvcmlhcyIsInVzZVN0YXRlIiwibm92YUNhdGVnb3JpYSIsInNldE5vdmFDYXRlZ29yaWEiLCJzZWxlY3RlZENhdGVnb3JpYXMiLCJzZXRTZWxlY3RlZENhdGVnb3JpYXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoQ2F0ZWdvcmlhcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudFZhbHVlIiwiY2F0ZWdvcmlhc0luZGV4YWRhcyIsImluZGV4IiwidW5kZWZpbmVkIiwicHVzaCIsImNhbWluaG9zIiwicG9wdWxhdGVkIiwiZm9yRWFjaCIsImNhbWluaG8iLCJmaW5kIiwiQXJyYXkiLCJpc0FycmF5IiwicHJvY2Vzc2VkSWRzIiwibWFwIiwiaXRlbSIsIlN0cmluZyIsIl9pZCIsImZpbHRlciIsInVuaXF1ZUlkcyIsIlNldCIsImMiLCJub21lIiwibWF0Y2hlcyIsInNlbGVjdGVkSWQiLCJzb21lIiwiY2F0IiwiaXNFZGl0TW9kZSIsIk9iamVjdCIsImtleXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInJlY29yZHMiLCJjYXRlZ29yaWFzRm9ybWF0YWRhcyIsImNvciIsImVycm9yIiwiaGFuZGxlQ3JlYXRlQ2F0ZWdvcmlhIiwidHJpbSIsInBheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm5ld0NhdGVnb3JpYSIsInByZXYiLCJuZXdTZWxlY3RlZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JtUmVzcG9uc2UiLCJFcnJvciIsImhhbmRsZUNhdGVnb3JpYUNoYW5nZSIsInVzZUNhbGxiYWNrIiwiY2F0ZWdvcmlhSWQiLCJpc1NlbGVjdGVkIiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJwIiwiYmFja2dyb3VuZENvbG9yIiwiVGV4dCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJmbGV4IiwiZGlzYWJsZWQiLCJib3JkZXIiLCJjYXRlZ29yaWEiLCJvdmVyZmxvd1kiLCJzdG9wUHJvcGFnYXRpb24iLCJtbCIsIlBlcmlvZG9TZWxlY3QiLCJzZWxlY3RlZFBlcmlvZG8iLCJzZXRTZWxlY3RlZFBlcmlvZG8iLCJoYW5kbGVQZXJpb2RvQ2hhbmdlIiwicGVyaW9kbyIsInBlcmlvZG9zIiwibWluV2lkdGgiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwidXNlclNlbGVjdCIsIm9uTW91c2VFbnRlciIsImN1cnJlbnRUYXJnZXQiLCJib3JkZXJDb2xvciIsIm9uTW91c2VMZWF2ZSIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJUaW55TUNFRWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiZWRpdG9yUmVmIiwidXNlUmVmIiwidGV4dGFyZWFSZWYiLCJjdXJyZW50IiwidGlueW1jZSIsInNjcmlwdCIsImRvY3VtZW50Iiwib25sb2FkIiwiaW5pdGlhbGl6ZVRpbnlNQ0UiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJpbml0IiwibWVudWJhciIsInBsdWdpbnMiLCJ0b29sYmFyIiwiY29udGVudF9zdHlsZSIsImltYWdlc191cGxvYWRfaGFuZGxlciIsImJsb2JJbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYmFzZTY0IiwicmVzdWx0Iiwib25lcnJvciIsInJlYWRBc0RhdGFVUkwiLCJibG9iIiwic2V0dXAiLCJlZGl0b3IiLCJvbiIsIm5ld0NvbnRlbnQiLCJnZXRDb250ZW50IiwiaW5pdGlhbENvbnRlbnQiLCJyZWYiLCJtaW5IZWlnaHQiLCJkZWZhdWx0VmFsdWUiLCJRdWlsbEVkaXRvciIsInF1aWxsUmVmIiwiY29udGFpbmVyUmVmIiwiUXVpbGwiLCJsaW5rIiwicmVsIiwiaHJlZiIsImluaXRpYWxpemVRdWlsbCIsInF1aWxsIiwidGhlbWUiLCJtb2R1bGVzIiwiZ2V0TW9kdWxlIiwiYWRkSGFuZGxlciIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsInJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwiaW5zZXJ0RW1iZWQiLCJodG1sIiwicm9vdCIsImlubmVySFRNTCIsIkJsb2NrQnVpbGRlciIsImJsb2NrcyIsInNldEJsb2NrcyIsInBhcnNlZCIsInBhcnNlIiwibm93IiwidG9TdHJpbmciLCJhZGRCbG9jayIsIm5ld0Jsb2NrIiwibmV3QmxvY2tzIiwidXBkYXRlQ29udGVudCIsInVwZGF0ZUJsb2NrIiwidXBkYXRlcyIsImJsb2NrIiwiZGVsZXRlQmxvY2siLCJtb3ZlQmxvY2siLCJkaXJlY3Rpb24iLCJmaW5kSW5kZXgiLCJuZXdJbmRleCIsInNwbGl0Iiwiam9pbiIsInVwbG9hZEltYWdlIiwicmVuZGVyQmxvY2siLCJjb21tb25TdHlsZXMiLCJqdXN0aWZ5Q29udGVudCIsInNpemUiLCJiIiwiYWNjZXB0IiwiVGV4dEFyZWEiLCJyb3dzIiwibWFyZ2luVG9wIiwiVGlwdGFwRWRpdG9yIiwic2V0RWRpdG9yIiwibG9hZFRpcHRhcCIsImRlc3Ryb3kiLCJxdWVyeVNlbGVjdG9yIiwiRWRpdG9yIiwibG9hZFNjcmlwdCIsImluaXRpYWxpemVUaXB0YXAiLCJlZGl0b3JFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdFZGl0b3IiLCJlbGVtZW50IiwiZXh0ZW5zaW9ucyIsIlN0YXJ0ZXJLaXQiLCJJbWFnZSIsImNvbmZpZ3VyZSIsIkhUTUxBdHRyaWJ1dGVzIiwiY2xhc3MiLCJMaW5rIiwib3Blbk9uQ2xpY2siLCJUZXh0QWxpZ24iLCJ0eXBlcyIsIkhpZ2hsaWdodCIsIlVuZGVybGluZSIsIm9uVXBkYXRlIiwiZ2V0SFRNTCIsImFkZEltYWdlIiwiY2hhaW4iLCJmb2N1cyIsInNldEltYWdlIiwicnVuIiwiYWRkTGluayIsInByb21wdCIsInNldExpbmsiLCJUb29sYmFyQnV0dG9uIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIlNlcGFyYXRvciIsInRvZ2dsZUJvbGQiLCJ0b2dnbGVJdGFsaWMiLCJ0b2dnbGVVbmRlcmxpbmUiLCJ0b2dnbGVIaWdobGlnaHQiLCJ0b2dnbGVIZWFkaW5nIiwibGV2ZWwiLCJzZXRUZXh0QWxpZ24iLCJ0b2dnbGVCdWxsZXRMaXN0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJ0b2dnbGVCbG9ja3F1b3RlIiwidW5kbyIsInJlZG8iLCJ1c2VUcmFuc2xhdGlvbiIsImZsYXQiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkljb24iLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDdXN0b21VcGxvYWRFZGl0IiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztFQUFBO0VBQ0E7RUFDQTtFQUlBLE1BQU1BLFVBQXVDLEdBQUlDLEtBQUssaUJBQ3BEQyxzQkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsZUFDRUQsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE9BQUEsRUFBQTtFQUFPQyxFQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksUUFBUSxDQUFDQztFQUFLLENBQUEsRUFBQyxRQUFhLENBQUMsZUFDbkRKLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxPQUFBLEVBQUE7RUFBT0ksRUFBQUEsRUFBRSxFQUFFTixLQUFLLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSztFQUFDRSxFQUFBQSxJQUFJLEVBQUMsTUFBTTtFQUFDRixFQUFBQSxJQUFJLEVBQUM7RUFBTSxDQUFFLENBQ3RELENBQ047O0VDWEQ7RUFDQTtFQUNBO0VBSUEsU0FBU0csS0FBS0EsQ0FBQ1IsS0FBSyxFQUFFO0lBQ3BCLE1BQU07RUFBRVMs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
