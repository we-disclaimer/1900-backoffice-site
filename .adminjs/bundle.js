(function (React$2, PropTypes, designSystem, reactRouter, require$$1, adminjs) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default$2 = /*#__PURE__*/_interopDefault(React$2);
  var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
  var require$$1__default = /*#__PURE__*/_interopDefault(require$$1);

  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  // admin/components/upload-edit.tsx
  const UploadEdit = props => /*#__PURE__*/React__default$2.default.createElement("div", null, /*#__PURE__*/React__default$2.default.createElement("label", {
    htmlFor: props.property.name
  }, "Upload"), /*#__PURE__*/React__default$2.default.createElement("input", {
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
      return /*#__PURE__*/React__default$2.default.createElement("span", null, "No image");
    }
    return /*#__PURE__*/React__default$2.default.createElement("img", {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      width: "100%"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, "Pre\xE7o \xDAnico"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
      type: "number",
      value: precoUnico,
      onChange: handleChange('precoUnico'),
      step: "0.01"
    }))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, "Pre\xE7o M\xE9dio"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
      type: "number",
      value: precoMedio,
      onChange: handleChange('precoMedio'),
      step: "0.01"
    }))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "25%",
      mr: "10px",
      mb: "36px"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, "Pre\xE7o Grande"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
      type: "number",
      value: precoGrande,
      onChange: handleChange('precoGrande'),
      step: "0.01"
    }))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "25%"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, "Pre\xE7o Individual"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, {
      fontWeight: "bold",
      mb: "default"
    }, "Tipos de card\xE1pios"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      display: "flex",
      gap: "lg",
      flexWrap: "wrap",
      mb: "36px"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, {
      htmlFor: "jantar",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.CheckBox, {
      id: "jantar",
      checked: jantar,
      onChange: handleChangeJantar,
      "aria-label": "Dispon\xEDvel para Jantar",
      style: {
        marginRight: '0.5rem'
      }
    }), ' ', ' ', "Dispon\xEDvel para Jantar")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, {
      htmlFor: "delivery",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.CheckBox, {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mb: "36px"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Imagem'), fullUrl ? /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "default"
    }, fullUrl.endsWith('.mp4') ? /*#__PURE__*/React__default$2.default.createElement("video", {
      src: fullUrl,
      style: {
        maxWidth: '100%',
        maxHeight: '300px',
        borderRadius: 8
      },
      controls: true
    }) : /*#__PURE__*/React__default$2.default.createElement("img", {
      src: fullUrl,
      alt: altText || `Imagem - ${fieldName}`,
      style: {
        maxWidth: '100%',
        maxHeight: '300px',
        borderRadius: 8
      }
    }), altText && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm",
      color: "grey60"
    }, altText)) : /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, null, formatted, ' ', time);
  };

  function RedirectDashboard() {
    const navigate = reactRouter.useNavigate();
    React$2.useEffect(() => {
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
    React__default$2.default.useEffect(() => {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      variant: "success",
      padding: "lg"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "default",
      mb: "36px",
      style: {
        color: '#0c4a2b',
        marginBottom: '3rem'
      }
    }, "A a\xE7\xE3o foi executada com sucesso em todos os produtos selecionados. Verifique se os pre\xE7os foram atualizados corretamente."), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
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
    const [categorias, setCategorias] = React$2.useState([]);
    const [novaCategoria, setNovaCategoria] = React$2.useState('');
    const [selectedCategorias, setSelectedCategorias] = React$2.useState([]);
    const [loading, setLoading] = React$2.useState(false);

    // Carregar categorias existentes
    React$2.useEffect(() => {
      fetchCategorias();
    }, []);

    // Inicializar categorias selecionadas - EXECUTAR APENAS UMA VEZ
    React$2.useEffect(() => {
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
    React$2.useEffect(() => {
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
    const handleCategoriaChange = React$2.useCallback((categoriaId, isSelected) => {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, "Categorias ", isEditMode ? '(Editando)' : '(Criando)'), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mb: "default",
      p: "default",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      mb: "xs",
      fontWeight: "bold"
    }, "Criar Nova Categoria"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      display: "flex",
      gap: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
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
    }), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      variant: "primary",
      onClick: handleCreateCategoria,
      disabled: !novaCategoria.trim() || loading
    }, loading ? 'Criando...' : 'Criar'))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      mb: "xs"
    }, isEditMode ? ' Categorias Disponíveis - Marque/Desmarque' : '📋 Selecionar Categorias', " (", categorias.length, ")"), isEditMode && selectedCategorias.length > 0 && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mb: "sm",
      p: "sm",
      style: {
        backgroundColor: '#e8f5e8',
        borderRadius: '4px',
        border: '2px solid #0c4a2b'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      fontWeight: "bold",
      color: "success",
      mb: "xs"
    }, "\u2705 Categorias Atualmente Selecionadas (", selectedCategorias.length, "):"), categorias.filter(cat => selectedCategorias.includes(cat._id)).map(categoria => /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      key: categoria._id,
      display: "inline-block",
      mr: "xs",
      mb: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      style: {
        backgroundColor: '#0c4a2b',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '12px',
        display: 'inline-block'
      }
    }, categoria.nome)))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
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
      return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
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
      }, /*#__PURE__*/React__default$2.default.createElement("input", {
        type: "checkbox",
        checked: isSelected,
        onChange: e => {
          e.stopPropagation();
          handleCategoriaChange(categoria._id, e.target.checked);
        },
        style: {
          marginRight: '8px'
        }
      }), /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
        style: {
          fontWeight: isSelected ? 'bold' : 'normal'
        }
      }, categoria.nome), isSelected && /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
        variant: "xs",
        color: "success",
        ml: "auto"
      }, "\u2713 Selecionada"));
    }), categorias.length === 0 && /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      color: "grey60",
      variant: "sm"
    }, "Nenhuma categoria encontrada. Crie a primeira!"))), isEditMode ? selectedCategorias.length > 0 && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "default",
      p: "sm",
      style: {
        backgroundColor: '#fff3cd',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "warning"
    }, "\uD83D\uDCDD Modo Edi\xE7\xE3o: ", selectedCategorias.length, " categoria(s) selecionada(s) - Altera\xE7\xF5es ser\xE3o salvas")) : selectedCategorias.length > 0 && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "default"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
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
    const [selectedPeriodo, setSelectedPeriodo] = React$2.useState('');
    React$2.useEffect(() => {
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Período', property.isRequired && /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "Selecione o per\xEDodo do hor\xE1rio"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }
    }, periodos.map(periodo => {
      const isSelected = selectedPeriodo === periodo.value;
      return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
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
      }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
        style: {
          fontSize: '24px',
          marginBottom: '4px'
        }
      }, periodo.icon), /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
        style: {
          fontWeight: isSelected ? 'bold' : 'normal',
          color: isSelected ? '#0c4a2b' : '#333'
        }
      }, periodo.label));
    })), selectedPeriodo && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "xs",
      style: {
        backgroundColor: '#e8f5e8',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      style: {
        color: '#0c4a2b'
      }
    }, "\u2705 Per\xEDodo selecionado: ", /*#__PURE__*/React__default$2.default.createElement("strong", null, selectedPeriodo))), property.description && /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
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
    const [content, setContent] = React$2.useState('');
    const [isLoaded, setIsLoaded] = React$2.useState(false);
    const editorRef = React$2.useRef(null);
    const textareaRef = React$2.useRef(null);
    React$2.useEffect(() => {
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
    React$2.useEffect(() => {
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
            // Validar tamanho máximo de 2MB
            const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
            const fileSize = blobInfo.blob().size;
            if (fileSize > MAX_SIZE) {
              const sizeMB = (fileSize / 1024 / 1024).toFixed(2);
              reject(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${sizeMB}MB`);
              return;
            }

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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "Editor avan\xE7ado com upload de imagens e formata\xE7\xE3o rica"), /*#__PURE__*/React__default$2.default.createElement("textarea", {
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
    }), !isLoaded && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "sm",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
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
    const [content, setContent] = React$2.useState('');
    const [isLoaded, setIsLoaded] = React$2.useState(false);
    const quillRef = React$2.useRef(null);
    const containerRef = React$2.useRef(null);
    React$2.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      setContent(currentValue);
    }, [record, property.name]);
    React$2.useEffect(() => {
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
            // Validar tamanho máximo de 2MB
            const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
            if (file.size > MAX_SIZE) {
              alert(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
              return;
            }
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
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\u2728 Editor moderno com upload de imagens e formata\xE7\xE3o rica"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      style: {
        border: isLoaded ? 'none' : '1px solid #ddd',
        borderRadius: '4px',
        minHeight: '300px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      ref: containerRef
    })), !isLoaded && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm",
      p: "sm",
      style: {
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDD04 Carregando editor Quill.js...")), isLoaded && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
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
    const [blocks, setBlocks] = React$2.useState([]);
    React$2.useEffect(() => {
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
      // Validar tamanho máximo de 2MB
      const MAX_SIZE = 2 * 1024 * 1024; // 2MB em bytes
      if (file.size > MAX_SIZE) {
        const sizeMB = (file.size / 1024 / 1024).toFixed(2);
        throw new Error(`O arquivo é muito grande. Tamanho máximo permitido: 2MB. Tamanho do arquivo: ${sizeMB}MB`);
      }
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
      return /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
        key: block.id,
        style: commonStyles
      }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }
      }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
        variant: "sm",
        style: {
          fontWeight: 'bold',
          color: '#666'
        }
      }, block.type === 'text' && '📝 Parágrafo', block.type === 'heading' && '📰 Título', block.type === 'image' && '🖼️ Imagem', block.type === 'quote' && '💬 Citação', block.type === 'list' && '📋 Lista'), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: '4px'
        }
      }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "light",
        onClick: () => moveBlock(block.id, 'up'),
        disabled: blocks.findIndex(b => b.id === block.id) === 0
      }, "\u2191"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "light",
        onClick: () => moveBlock(block.id, 'down'),
        disabled: blocks.findIndex(b => b.id === block.id) === blocks.length - 1
      }, "\u2193"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
        size: "sm",
        variant: "danger",
        onClick: () => deleteBlock(block.id)
      }, "\uD83D\uDDD1\uFE0F"))), block.type === 'image' ? /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
        placeholder: "Descri\xE7\xE3o da imagem...",
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        style: {
          marginBottom: '8px'
        }
      }), /*#__PURE__*/React__default$2.default.createElement(designSystem.Input, {
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
              alert(error instanceof Error ? error.message : 'Erro ao fazer upload da imagem');
            }
          }
        }
      }), block.url && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
        mt: "sm"
      }, /*#__PURE__*/React__default$2.default.createElement("img", {
        src: block.url,
        alt: block.content,
        style: {
          maxWidth: '200px',
          borderRadius: '4px'
        }
      }))) : block.type === 'list' ? /*#__PURE__*/React__default$2.default.createElement(designSystem.TextArea, {
        placeholder: "Digite cada item em uma linha...",
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        rows: 4
      }) : /*#__PURE__*/React__default$2.default.createElement(designSystem.TextArea, {
        placeholder: block.type === 'heading' ? 'Digite o título...' : block.type === 'quote' ? 'Digite a citação...' : 'Digite o texto...',
        value: block.content,
        onChange: e => updateBlock(block.id, {
          content: e.target.value
        }),
        rows: block.type === 'heading' ? 2 : 4
      }));
    };
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\uD83E\uDDF1 Editor em blocos - Construa seu conte\xFAdo de forma modular"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      style: {
        border: '1px solid #eee',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fafafa'
      }
    }, blocks.map(renderBlock), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginTop: '16px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('text')
    }, "+ Par\xE1grafo"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('heading')
    }, "+ T\xEDtulo"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('image')
    }, "+ Imagem"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('quote')
    }, "+ Cita\xE7\xE3o"), /*#__PURE__*/React__default$2.default.createElement(designSystem.Button, {
      size: "sm",
      onClick: () => addBlock('list')
    }, "+ Lista"))), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
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
    const [content, setContent] = React$2.useState('');
    const [editor, setEditor] = React$2.useState(null);
    const [isLoaded, setIsLoaded] = React$2.useState(false);
    React$2.useEffect(() => {
      // Inicializar com valor atual
      const currentValue = record?.params?.[property.name] || '';
      console.log('🔍 Tiptap - Valor inicial:', currentValue);
      setContent(currentValue);
    }, [record, property.name]);
    React$2.useEffect(() => {
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
    }) => /*#__PURE__*/React__default$2.default.createElement("button", {
      className: `tiptap-btn ${isActive ? 'active' : ''}`,
      onClick: onClick,
      type: "button"
    }, children);
    const Separator = () => /*#__PURE__*/React__default$2.default.createElement("div", {
      className: "tiptap-separator"
    });
    return /*#__PURE__*/React__default$2.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default$2.default.createElement(designSystem.Label, null, property.label || 'Conteúdo', property.isRequired && /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        color: 'red'
      }
    }, " *")), /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "xs"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      mb: "sm"
    }, "\u26A1 Editor Tiptap moderno com controles avan\xE7ados"), /*#__PURE__*/React__default$2.default.createElement("div", {
      className: "tiptap-editor"
    }, isLoaded && editor && /*#__PURE__*/React__default$2.default.createElement("div", {
      className: "tiptap-toolbar"
    }, /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold')
    }, /*#__PURE__*/React__default$2.default.createElement("strong", null, "B")), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic')
    }, /*#__PURE__*/React__default$2.default.createElement("em", null, "I")), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive('underline')
    }, /*#__PURE__*/React__default$2.default.createElement("u", null, "U")), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      isActive: editor.isActive('highlight')
    }, "\uD83D\uDD8D\uFE0F"), /*#__PURE__*/React__default$2.default.createElement(Separator, null), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 1
      }).run(),
      isActive: editor.isActive('heading', {
        level: 1
      })
    }, "H1"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 2
      }).run(),
      isActive: editor.isActive('heading', {
        level: 2
      })
    }, "H2"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleHeading({
        level: 3
      }).run(),
      isActive: editor.isActive('heading', {
        level: 3
      })
    }, "H3"), /*#__PURE__*/React__default$2.default.createElement(Separator, null), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      isActive: editor.isActive({
        textAlign: 'left'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      isActive: editor.isActive({
        textAlign: 'center'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      isActive: editor.isActive({
        textAlign: 'right'
      })
    }, "\uD83D\uDCC4"), /*#__PURE__*/React__default$2.default.createElement(Separator, null), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList')
    }, "\u2022 Lista"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList')
    }, "1. Lista"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote')
    }, "\uD83D\uDCAC"), /*#__PURE__*/React__default$2.default.createElement(Separator, null), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: addImage
    }, "\uD83D\uDDBC\uFE0F Imagem"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: addLink
    }, "\uD83D\uDD17 Link"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().undo().run()
    }, "\u21B6"), /*#__PURE__*/React__default$2.default.createElement(ToolbarButton, {
      onClick: () => editor.chain().focus().redo().run()
    }, "\u21B7")), /*#__PURE__*/React__default$2.default.createElement("div", {
      id: "tiptap-content",
      className: "tiptap-content"
    }), !isLoaded && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      p: "lg",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\u26A1 Carregando editor Tiptap..."))), isLoaded && /*#__PURE__*/React__default$2.default.createElement(designSystem.Box, {
      mt: "sm"
    }, /*#__PURE__*/React__default$2.default.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60"
    }, "\uD83D\uDCA1 Use a barra de ferramentas para formatar. Tiptap oferece uma experi\xEAncia moderna de edi\xE7\xE3o."))));
  };

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  var dist$3 = {exports: {}};

  var core_cjs_development = {};

  var dist$2 = {exports: {}};

  var utilities_cjs_development = {};

  Object.defineProperty(utilities_cjs_development, '__esModule', { value: true });

  var react = React__default$2.default;

  function useCombinedRefs() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }

    return react.useMemo(() => node => {
      refs.forEach(ref => ref(node));
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    refs);
  }

  // https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
  const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

  function isWindow(element) {
    const elementString = Object.prototype.toString.call(element);
    return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
    elementString === '[object global]';
  }

  function isNode(node) {
    return 'nodeType' in node;
  }

  function getWindow(target) {
    var _target$ownerDocument, _target$ownerDocument2;

    if (!target) {
      return window;
    }

    if (isWindow(target)) {
      return target;
    }

    if (!isNode(target)) {
      return window;
    }

    return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
  }

  function isDocument(node) {
    const {
      Document
    } = getWindow(node);
    return node instanceof Document;
  }

  function isHTMLElement(node) {
    if (isWindow(node)) {
      return false;
    }

    return node instanceof getWindow(node).HTMLElement;
  }

  function isSVGElement(node) {
    return node instanceof getWindow(node).SVGElement;
  }

  function getOwnerDocument(target) {
    if (!target) {
      return document;
    }

    if (isWindow(target)) {
      return target.document;
    }

    if (!isNode(target)) {
      return document;
    }

    if (isDocument(target)) {
      return target;
    }

    if (isHTMLElement(target) || isSVGElement(target)) {
      return target.ownerDocument;
    }

    return document;
  }

  /**
   * A hook that resolves to useEffect on the server and useLayoutEffect on the client
   * @param callback {function} Callback function that is invoked when the dependencies of the hook change
   */

  const useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

  function useEvent(handler) {
    const handlerRef = react.useRef(handler);
    useIsomorphicLayoutEffect(() => {
      handlerRef.current = handler;
    });
    return react.useCallback(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return handlerRef.current == null ? void 0 : handlerRef.current(...args);
    }, []);
  }

  function useInterval() {
    const intervalRef = react.useRef(null);
    const set = react.useCallback((listener, duration) => {
      intervalRef.current = setInterval(listener, duration);
    }, []);
    const clear = react.useCallback(() => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, []);
    return [set, clear];
  }

  function useLatestValue(value, dependencies) {
    if (dependencies === void 0) {
      dependencies = [value];
    }

    const valueRef = react.useRef(value);
    useIsomorphicLayoutEffect(() => {
      if (valueRef.current !== value) {
        valueRef.current = value;
      }
    }, dependencies);
    return valueRef;
  }

  function useLazyMemo(callback, dependencies) {
    const valueRef = react.useRef();
    return react.useMemo(() => {
      const newValue = callback(valueRef.current);
      valueRef.current = newValue;
      return newValue;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [...dependencies]);
  }

  function useNodeRef(onChange) {
    const onChangeHandler = useEvent(onChange);
    const node = react.useRef(null);
    const setNodeRef = react.useCallback(element => {
      if (element !== node.current) {
        onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
      }

      node.current = element;
    }, //eslint-disable-next-line
    []);
    return [node, setNodeRef];
  }

  function usePrevious(value) {
    const ref = react.useRef();
    react.useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  let ids = {};
  function useUniqueId(prefix, value) {
    return react.useMemo(() => {
      if (value) {
        return value;
      }

      const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
      ids[prefix] = id;
      return prefix + "-" + id;
    }, [prefix, value]);
  }

  function createAdjustmentFn(modifier) {
    return function (object) {
      for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        adjustments[_key - 1] = arguments[_key];
      }

      return adjustments.reduce((accumulator, adjustment) => {
        const entries = Object.entries(adjustment);

        for (const [key, valueAdjustment] of entries) {
          const value = accumulator[key];

          if (value != null) {
            accumulator[key] = value + modifier * valueAdjustment;
          }
        }

        return accumulator;
      }, { ...object
      });
    };
  }

  const add = /*#__PURE__*/createAdjustmentFn(1);
  const subtract = /*#__PURE__*/createAdjustmentFn(-1);

  function hasViewportRelativeCoordinates(event) {
    return 'clientX' in event && 'clientY' in event;
  }

  function isKeyboardEvent(event) {
    if (!event) {
      return false;
    }

    const {
      KeyboardEvent
    } = getWindow(event.target);
    return KeyboardEvent && event instanceof KeyboardEvent;
  }

  function isTouchEvent(event) {
    if (!event) {
      return false;
    }

    const {
      TouchEvent
    } = getWindow(event.target);
    return TouchEvent && event instanceof TouchEvent;
  }

  /**
   * Returns the normalized x and y coordinates for mouse and touch events.
   */

  function getEventCoordinates(event) {
    if (isTouchEvent(event)) {
      if (event.touches && event.touches.length) {
        const {
          clientX: x,
          clientY: y
        } = event.touches[0];
        return {
          x,
          y
        };
      } else if (event.changedTouches && event.changedTouches.length) {
        const {
          clientX: x,
          clientY: y
        } = event.changedTouches[0];
        return {
          x,
          y
        };
      }
    }

    if (hasViewportRelativeCoordinates(event)) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }

    return null;
  }

  const CSS = /*#__PURE__*/Object.freeze({
    Translate: {
      toString(transform) {
        if (!transform) {
          return;
        }

        const {
          x,
          y
        } = transform;
        return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
      }

    },
    Scale: {
      toString(transform) {
        if (!transform) {
          return;
        }

        const {
          scaleX,
          scaleY
        } = transform;
        return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
      }

    },
    Transform: {
      toString(transform) {
        if (!transform) {
          return;
        }

        return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
      }

    },
    Transition: {
      toString(_ref) {
        let {
          property,
          duration,
          easing
        } = _ref;
        return property + " " + duration + "ms " + easing;
      }

    }
  });

  const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
  function findFirstFocusableNode(element) {
    if (element.matches(SELECTOR)) {
      return element;
    }

    return element.querySelector(SELECTOR);
  }

  utilities_cjs_development.CSS = CSS;
  utilities_cjs_development.add = add;
  utilities_cjs_development.canUseDOM = canUseDOM;
  utilities_cjs_development.findFirstFocusableNode = findFirstFocusableNode;
  utilities_cjs_development.getEventCoordinates = getEventCoordinates;
  utilities_cjs_development.getOwnerDocument = getOwnerDocument;
  utilities_cjs_development.getWindow = getWindow;
  utilities_cjs_development.hasViewportRelativeCoordinates = hasViewportRelativeCoordinates;
  utilities_cjs_development.isDocument = isDocument;
  utilities_cjs_development.isHTMLElement = isHTMLElement;
  utilities_cjs_development.isKeyboardEvent = isKeyboardEvent;
  utilities_cjs_development.isNode = isNode;
  utilities_cjs_development.isSVGElement = isSVGElement;
  utilities_cjs_development.isTouchEvent = isTouchEvent;
  utilities_cjs_development.isWindow = isWindow;
  utilities_cjs_development.subtract = subtract;
  utilities_cjs_development.useCombinedRefs = useCombinedRefs;
  utilities_cjs_development.useEvent = useEvent;
  utilities_cjs_development.useInterval = useInterval;
  utilities_cjs_development.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
  utilities_cjs_development.useLatestValue = useLatestValue;
  utilities_cjs_development.useLazyMemo = useLazyMemo;
  utilities_cjs_development.useNodeRef = useNodeRef;
  utilities_cjs_development.usePrevious = usePrevious;
  utilities_cjs_development.useUniqueId = useUniqueId;

  {
    dist$2.exports = utilities_cjs_development;
  }

  var distExports$3 = dist$2.exports;

  var dist$1 = {exports: {}};

  var accessibility_cjs_development = {};

  Object.defineProperty(accessibility_cjs_development, '__esModule', { value: true });

  function _interopDefault$2 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var React$1 = React__default$2.default;
  var React__default$1 = _interopDefault$2(React$1);

  const hiddenStyles = {
    display: 'none'
  };
  function HiddenText(_ref) {
    let {
      id,
      value
    } = _ref;
    return React__default$1.createElement("div", {
      id: id,
      style: hiddenStyles
    }, value);
  }

  function LiveRegion(_ref) {
    let {
      id,
      announcement,
      ariaLiveType = "assertive"
    } = _ref;
    // Hide element visually but keep it readable by screen readers
    const visuallyHidden = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(100%)',
      whiteSpace: 'nowrap'
    };
    return React__default$1.createElement("div", {
      id: id,
      style: visuallyHidden,
      role: "status",
      "aria-live": ariaLiveType,
      "aria-atomic": true
    }, announcement);
  }

  function useAnnouncement() {
    const [announcement, setAnnouncement] = React$1.useState('');
    const announce = React$1.useCallback(value => {
      if (value != null) {
        setAnnouncement(value);
      }
    }, []);
    return {
      announce,
      announcement
    };
  }

  accessibility_cjs_development.HiddenText = HiddenText;
  accessibility_cjs_development.LiveRegion = LiveRegion;
  accessibility_cjs_development.useAnnouncement = useAnnouncement;

  {
    dist$1.exports = accessibility_cjs_development;
  }

  var distExports$2 = dist$1.exports;

  (function (exports) {

  	Object.defineProperty(exports, '__esModule', { value: true });

  	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  	var React = React__default$2.default;
  	var React__default = _interopDefault(React);
  	var reactDom = require$$1__default.default;
  	var utilities = distExports$3;
  	var accessibility = distExports$2;

  	const DndMonitorContext = /*#__PURE__*/React.createContext(null);

  	function useDndMonitor(listener) {
  	  const registerListener = React.useContext(DndMonitorContext);
  	  React.useEffect(() => {
  	    if (!registerListener) {
  	      throw new Error('useDndMonitor must be used within a children of <DndContext>');
  	    }

  	    const unsubscribe = registerListener(listener);
  	    return unsubscribe;
  	  }, [listener, registerListener]);
  	}

  	function useDndMonitorProvider() {
  	  const [listeners] = React.useState(() => new Set());
  	  const registerListener = React.useCallback(listener => {
  	    listeners.add(listener);
  	    return () => listeners.delete(listener);
  	  }, [listeners]);
  	  const dispatch = React.useCallback(_ref => {
  	    let {
  	      type,
  	      event
  	    } = _ref;
  	    listeners.forEach(listener => {
  	      var _listener$type;

  	      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
  	    });
  	  }, [listeners]);
  	  return [dispatch, registerListener];
  	}

  	const defaultScreenReaderInstructions = {
  	  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
  	};
  	const defaultAnnouncements = {
  	  onDragStart(_ref) {
  	    let {
  	      active
  	    } = _ref;
  	    return "Picked up draggable item " + active.id + ".";
  	  },

  	  onDragOver(_ref2) {
  	    let {
  	      active,
  	      over
  	    } = _ref2;

  	    if (over) {
  	      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
  	    }

  	    return "Draggable item " + active.id + " is no longer over a droppable area.";
  	  },

  	  onDragEnd(_ref3) {
  	    let {
  	      active,
  	      over
  	    } = _ref3;

  	    if (over) {
  	      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
  	    }

  	    return "Draggable item " + active.id + " was dropped.";
  	  },

  	  onDragCancel(_ref4) {
  	    let {
  	      active
  	    } = _ref4;
  	    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  	  }

  	};

  	function Accessibility(_ref) {
  	  let {
  	    announcements = defaultAnnouncements,
  	    container,
  	    hiddenTextDescribedById,
  	    screenReaderInstructions = defaultScreenReaderInstructions
  	  } = _ref;
  	  const {
  	    announce,
  	    announcement
  	  } = accessibility.useAnnouncement();
  	  const liveRegionId = utilities.useUniqueId("DndLiveRegion");
  	  const [mounted, setMounted] = React.useState(false);
  	  React.useEffect(() => {
  	    setMounted(true);
  	  }, []);
  	  useDndMonitor(React.useMemo(() => ({
  	    onDragStart(_ref2) {
  	      let {
  	        active
  	      } = _ref2;
  	      announce(announcements.onDragStart({
  	        active
  	      }));
  	    },

  	    onDragMove(_ref3) {
  	      let {
  	        active,
  	        over
  	      } = _ref3;

  	      if (announcements.onDragMove) {
  	        announce(announcements.onDragMove({
  	          active,
  	          over
  	        }));
  	      }
  	    },

  	    onDragOver(_ref4) {
  	      let {
  	        active,
  	        over
  	      } = _ref4;
  	      announce(announcements.onDragOver({
  	        active,
  	        over
  	      }));
  	    },

  	    onDragEnd(_ref5) {
  	      let {
  	        active,
  	        over
  	      } = _ref5;
  	      announce(announcements.onDragEnd({
  	        active,
  	        over
  	      }));
  	    },

  	    onDragCancel(_ref6) {
  	      let {
  	        active,
  	        over
  	      } = _ref6;
  	      announce(announcements.onDragCancel({
  	        active,
  	        over
  	      }));
  	    }

  	  }), [announce, announcements]));

  	  if (!mounted) {
  	    return null;
  	  }

  	  const markup = React__default.createElement(React__default.Fragment, null, React__default.createElement(accessibility.HiddenText, {
  	    id: hiddenTextDescribedById,
  	    value: screenReaderInstructions.draggable
  	  }), React__default.createElement(accessibility.LiveRegion, {
  	    id: liveRegionId,
  	    announcement: announcement
  	  }));
  	  return container ? reactDom.createPortal(markup, container) : markup;
  	}

  	var Action;

  	(function (Action) {
  	  Action["DragStart"] = "dragStart";
  	  Action["DragMove"] = "dragMove";
  	  Action["DragEnd"] = "dragEnd";
  	  Action["DragCancel"] = "dragCancel";
  	  Action["DragOver"] = "dragOver";
  	  Action["RegisterDroppable"] = "registerDroppable";
  	  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  	  Action["UnregisterDroppable"] = "unregisterDroppable";
  	})(Action || (Action = {}));

  	function noop() {}

  	function useSensor(sensor, options) {
  	  return React.useMemo(() => ({
  	    sensor,
  	    options: options != null ? options : {}
  	  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [sensor, options]);
  	}

  	function useSensors() {
  	  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
  	    sensors[_key] = arguments[_key];
  	  }

  	  return React.useMemo(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [...sensors]);
  	}

  	const defaultCoordinates = /*#__PURE__*/Object.freeze({
  	  x: 0,
  	  y: 0
  	});

  	/**
  	 * Returns the distance between two points
  	 */
  	function distanceBetween(p1, p2) {
  	  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  	}

  	function getRelativeTransformOrigin(event, rect) {
  	  const eventCoordinates = utilities.getEventCoordinates(event);

  	  if (!eventCoordinates) {
  	    return '0 0';
  	  }

  	  const transformOrigin = {
  	    x: (eventCoordinates.x - rect.left) / rect.width * 100,
  	    y: (eventCoordinates.y - rect.top) / rect.height * 100
  	  };
  	  return transformOrigin.x + "% " + transformOrigin.y + "%";
  	}

  	/**
  	 * Sort collisions from smallest to greatest value
  	 */
  	function sortCollisionsAsc(_ref, _ref2) {
  	  let {
  	    data: {
  	      value: a
  	    }
  	  } = _ref;
  	  let {
  	    data: {
  	      value: b
  	    }
  	  } = _ref2;
  	  return a - b;
  	}
  	/**
  	 * Sort collisions from greatest to smallest value
  	 */

  	function sortCollisionsDesc(_ref3, _ref4) {
  	  let {
  	    data: {
  	      value: a
  	    }
  	  } = _ref3;
  	  let {
  	    data: {
  	      value: b
  	    }
  	  } = _ref4;
  	  return b - a;
  	}
  	/**
  	 * Returns the coordinates of the corners of a given rectangle:
  	 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
  	 */

  	function cornersOfRectangle(_ref5) {
  	  let {
  	    left,
  	    top,
  	    height,
  	    width
  	  } = _ref5;
  	  return [{
  	    x: left,
  	    y: top
  	  }, {
  	    x: left + width,
  	    y: top
  	  }, {
  	    x: left,
  	    y: top + height
  	  }, {
  	    x: left + width,
  	    y: top + height
  	  }];
  	}
  	function getFirstCollision(collisions, property) {
  	  if (!collisions || collisions.length === 0) {
  	    return null;
  	  }

  	  const [firstCollision] = collisions;
  	  return property ? firstCollision[property] : firstCollision;
  	}

  	/**
  	 * Returns the coordinates of the center of a given ClientRect
  	 */

  	function centerOfRectangle(rect, left, top) {
  	  if (left === void 0) {
  	    left = rect.left;
  	  }

  	  if (top === void 0) {
  	    top = rect.top;
  	  }

  	  return {
  	    x: left + rect.width * 0.5,
  	    y: top + rect.height * 0.5
  	  };
  	}
  	/**
  	 * Returns the closest rectangles from an array of rectangles to the center of a given
  	 * rectangle.
  	 */


  	const closestCenter = _ref => {
  	  let {
  	    collisionRect,
  	    droppableRects,
  	    droppableContainers
  	  } = _ref;
  	  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  	  const collisions = [];

  	  for (const droppableContainer of droppableContainers) {
  	    const {
  	      id
  	    } = droppableContainer;
  	    const rect = droppableRects.get(id);

  	    if (rect) {
  	      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
  	      collisions.push({
  	        id,
  	        data: {
  	          droppableContainer,
  	          value: distBetween
  	        }
  	      });
  	    }
  	  }

  	  return collisions.sort(sortCollisionsAsc);
  	};

  	/**
  	 * Returns the closest rectangles from an array of rectangles to the corners of
  	 * another rectangle.
  	 */

  	const closestCorners = _ref => {
  	  let {
  	    collisionRect,
  	    droppableRects,
  	    droppableContainers
  	  } = _ref;
  	  const corners = cornersOfRectangle(collisionRect);
  	  const collisions = [];

  	  for (const droppableContainer of droppableContainers) {
  	    const {
  	      id
  	    } = droppableContainer;
  	    const rect = droppableRects.get(id);

  	    if (rect) {
  	      const rectCorners = cornersOfRectangle(rect);
  	      const distances = corners.reduce((accumulator, corner, index) => {
  	        return accumulator + distanceBetween(rectCorners[index], corner);
  	      }, 0);
  	      const effectiveDistance = Number((distances / 4).toFixed(4));
  	      collisions.push({
  	        id,
  	        data: {
  	          droppableContainer,
  	          value: effectiveDistance
  	        }
  	      });
  	    }
  	  }

  	  return collisions.sort(sortCollisionsAsc);
  	};

  	/**
  	 * Returns the intersecting rectangle area between two rectangles
  	 */

  	function getIntersectionRatio(entry, target) {
  	  const top = Math.max(target.top, entry.top);
  	  const left = Math.max(target.left, entry.left);
  	  const right = Math.min(target.left + target.width, entry.left + entry.width);
  	  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  	  const width = right - left;
  	  const height = bottom - top;

  	  if (left < right && top < bottom) {
  	    const targetArea = target.width * target.height;
  	    const entryArea = entry.width * entry.height;
  	    const intersectionArea = width * height;
  	    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
  	    return Number(intersectionRatio.toFixed(4));
  	  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  	  return 0;
  	}
  	/**
  	 * Returns the rectangles that has the greatest intersection area with a given
  	 * rectangle in an array of rectangles.
  	 */

  	const rectIntersection = _ref => {
  	  let {
  	    collisionRect,
  	    droppableRects,
  	    droppableContainers
  	  } = _ref;
  	  const collisions = [];

  	  for (const droppableContainer of droppableContainers) {
  	    const {
  	      id
  	    } = droppableContainer;
  	    const rect = droppableRects.get(id);

  	    if (rect) {
  	      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

  	      if (intersectionRatio > 0) {
  	        collisions.push({
  	          id,
  	          data: {
  	            droppableContainer,
  	            value: intersectionRatio
  	          }
  	        });
  	      }
  	    }
  	  }

  	  return collisions.sort(sortCollisionsDesc);
  	};

  	/**
  	 * Check if a given point is contained within a bounding rectangle
  	 */

  	function isPointWithinRect(point, rect) {
  	  const {
  	    top,
  	    left,
  	    bottom,
  	    right
  	  } = rect;
  	  return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
  	}
  	/**
  	 * Returns the rectangles that the pointer is hovering over
  	 */


  	const pointerWithin = _ref => {
  	  let {
  	    droppableContainers,
  	    droppableRects,
  	    pointerCoordinates
  	  } = _ref;

  	  if (!pointerCoordinates) {
  	    return [];
  	  }

  	  const collisions = [];

  	  for (const droppableContainer of droppableContainers) {
  	    const {
  	      id
  	    } = droppableContainer;
  	    const rect = droppableRects.get(id);

  	    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
  	      /* There may be more than a single rectangle intersecting
  	       * with the pointer coordinates. In order to sort the
  	       * colliding rectangles, we measure the distance between
  	       * the pointer and the corners of the intersecting rectangle
  	       */
  	      const corners = cornersOfRectangle(rect);
  	      const distances = corners.reduce((accumulator, corner) => {
  	        return accumulator + distanceBetween(pointerCoordinates, corner);
  	      }, 0);
  	      const effectiveDistance = Number((distances / 4).toFixed(4));
  	      collisions.push({
  	        id,
  	        data: {
  	          droppableContainer,
  	          value: effectiveDistance
  	        }
  	      });
  	    }
  	  }

  	  return collisions.sort(sortCollisionsAsc);
  	};

  	function adjustScale(transform, rect1, rect2) {
  	  return { ...transform,
  	    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
  	    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  	  };
  	}

  	function getRectDelta(rect1, rect2) {
  	  return rect1 && rect2 ? {
  	    x: rect1.left - rect2.left,
  	    y: rect1.top - rect2.top
  	  } : defaultCoordinates;
  	}

  	function createRectAdjustmentFn(modifier) {
  	  return function adjustClientRect(rect) {
  	    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  	      adjustments[_key - 1] = arguments[_key];
  	    }

  	    return adjustments.reduce((acc, adjustment) => ({ ...acc,
  	      top: acc.top + modifier * adjustment.y,
  	      bottom: acc.bottom + modifier * adjustment.y,
  	      left: acc.left + modifier * adjustment.x,
  	      right: acc.right + modifier * adjustment.x
  	    }), { ...rect
  	    });
  	  };
  	}
  	const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

  	function parseTransform(transform) {
  	  if (transform.startsWith('matrix3d(')) {
  	    const transformArray = transform.slice(9, -1).split(/, /);
  	    return {
  	      x: +transformArray[12],
  	      y: +transformArray[13],
  	      scaleX: +transformArray[0],
  	      scaleY: +transformArray[5]
  	    };
  	  } else if (transform.startsWith('matrix(')) {
  	    const transformArray = transform.slice(7, -1).split(/, /);
  	    return {
  	      x: +transformArray[4],
  	      y: +transformArray[5],
  	      scaleX: +transformArray[0],
  	      scaleY: +transformArray[3]
  	    };
  	  }

  	  return null;
  	}

  	function inverseTransform(rect, transform, transformOrigin) {
  	  const parsedTransform = parseTransform(transform);

  	  if (!parsedTransform) {
  	    return rect;
  	  }

  	  const {
  	    scaleX,
  	    scaleY,
  	    x: translateX,
  	    y: translateY
  	  } = parsedTransform;
  	  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  	  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  	  const w = scaleX ? rect.width / scaleX : rect.width;
  	  const h = scaleY ? rect.height / scaleY : rect.height;
  	  return {
  	    width: w,
  	    height: h,
  	    top: y,
  	    right: x + w,
  	    bottom: y + h,
  	    left: x
  	  };
  	}

  	const defaultOptions = {
  	  ignoreTransform: false
  	};
  	/**
  	 * Returns the bounding client rect of an element relative to the viewport.
  	 */

  	function getClientRect(element, options) {
  	  if (options === void 0) {
  	    options = defaultOptions;
  	  }

  	  let rect = element.getBoundingClientRect();

  	  if (options.ignoreTransform) {
  	    const {
  	      transform,
  	      transformOrigin
  	    } = utilities.getWindow(element).getComputedStyle(element);

  	    if (transform) {
  	      rect = inverseTransform(rect, transform, transformOrigin);
  	    }
  	  }

  	  const {
  	    top,
  	    left,
  	    width,
  	    height,
  	    bottom,
  	    right
  	  } = rect;
  	  return {
  	    top,
  	    left,
  	    width,
  	    height,
  	    bottom,
  	    right
  	  };
  	}
  	/**
  	 * Returns the bounding client rect of an element relative to the viewport.
  	 *
  	 * @remarks
  	 * The ClientRect returned by this method does not take into account transforms
  	 * applied to the element it measures.
  	 *
  	 */

  	function getTransformAgnosticClientRect(element) {
  	  return getClientRect(element, {
  	    ignoreTransform: true
  	  });
  	}

  	function getWindowClientRect(element) {
  	  const width = element.innerWidth;
  	  const height = element.innerHeight;
  	  return {
  	    top: 0,
  	    left: 0,
  	    right: width,
  	    bottom: height,
  	    width,
  	    height
  	  };
  	}

  	function isFixed(node, computedStyle) {
  	  if (computedStyle === void 0) {
  	    computedStyle = utilities.getWindow(node).getComputedStyle(node);
  	  }

  	  return computedStyle.position === 'fixed';
  	}

  	function isScrollable(element, computedStyle) {
  	  if (computedStyle === void 0) {
  	    computedStyle = utilities.getWindow(element).getComputedStyle(element);
  	  }

  	  const overflowRegex = /(auto|scroll|overlay)/;
  	  const properties = ['overflow', 'overflowX', 'overflowY'];
  	  return properties.some(property => {
  	    const value = computedStyle[property];
  	    return typeof value === 'string' ? overflowRegex.test(value) : false;
  	  });
  	}

  	function getScrollableAncestors(element, limit) {
  	  const scrollParents = [];

  	  function findScrollableAncestors(node) {
  	    if (limit != null && scrollParents.length >= limit) {
  	      return scrollParents;
  	    }

  	    if (!node) {
  	      return scrollParents;
  	    }

  	    if (utilities.isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
  	      scrollParents.push(node.scrollingElement);
  	      return scrollParents;
  	    }

  	    if (!utilities.isHTMLElement(node) || utilities.isSVGElement(node)) {
  	      return scrollParents;
  	    }

  	    if (scrollParents.includes(node)) {
  	      return scrollParents;
  	    }

  	    const computedStyle = utilities.getWindow(element).getComputedStyle(node);

  	    if (node !== element) {
  	      if (isScrollable(node, computedStyle)) {
  	        scrollParents.push(node);
  	      }
  	    }

  	    if (isFixed(node, computedStyle)) {
  	      return scrollParents;
  	    }

  	    return findScrollableAncestors(node.parentNode);
  	  }

  	  if (!element) {
  	    return scrollParents;
  	  }

  	  return findScrollableAncestors(element);
  	}
  	function getFirstScrollableAncestor(node) {
  	  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  	  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
  	}

  	function getScrollableElement(element) {
  	  if (!utilities.canUseDOM || !element) {
  	    return null;
  	  }

  	  if (utilities.isWindow(element)) {
  	    return element;
  	  }

  	  if (!utilities.isNode(element)) {
  	    return null;
  	  }

  	  if (utilities.isDocument(element) || element === utilities.getOwnerDocument(element).scrollingElement) {
  	    return window;
  	  }

  	  if (utilities.isHTMLElement(element)) {
  	    return element;
  	  }

  	  return null;
  	}

  	function getScrollXCoordinate(element) {
  	  if (utilities.isWindow(element)) {
  	    return element.scrollX;
  	  }

  	  return element.scrollLeft;
  	}
  	function getScrollYCoordinate(element) {
  	  if (utilities.isWindow(element)) {
  	    return element.scrollY;
  	  }

  	  return element.scrollTop;
  	}
  	function getScrollCoordinates(element) {
  	  return {
  	    x: getScrollXCoordinate(element),
  	    y: getScrollYCoordinate(element)
  	  };
  	}

  	var Direction;

  	(function (Direction) {
  	  Direction[Direction["Forward"] = 1] = "Forward";
  	  Direction[Direction["Backward"] = -1] = "Backward";
  	})(Direction || (Direction = {}));

  	function isDocumentScrollingElement(element) {
  	  if (!utilities.canUseDOM || !element) {
  	    return false;
  	  }

  	  return element === document.scrollingElement;
  	}

  	function getScrollPosition(scrollingContainer) {
  	  const minScroll = {
  	    x: 0,
  	    y: 0
  	  };
  	  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
  	    height: window.innerHeight,
  	    width: window.innerWidth
  	  } : {
  	    height: scrollingContainer.clientHeight,
  	    width: scrollingContainer.clientWidth
  	  };
  	  const maxScroll = {
  	    x: scrollingContainer.scrollWidth - dimensions.width,
  	    y: scrollingContainer.scrollHeight - dimensions.height
  	  };
  	  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  	  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  	  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  	  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  	  return {
  	    isTop,
  	    isLeft,
  	    isBottom,
  	    isRight,
  	    maxScroll,
  	    minScroll
  	  };
  	}

  	const defaultThreshold = {
  	  x: 0.2,
  	  y: 0.2
  	};
  	function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  	  let {
  	    top,
  	    left,
  	    right,
  	    bottom
  	  } = _ref;

  	  if (acceleration === void 0) {
  	    acceleration = 10;
  	  }

  	  if (thresholdPercentage === void 0) {
  	    thresholdPercentage = defaultThreshold;
  	  }

  	  const {
  	    isTop,
  	    isBottom,
  	    isLeft,
  	    isRight
  	  } = getScrollPosition(scrollContainer);
  	  const direction = {
  	    x: 0,
  	    y: 0
  	  };
  	  const speed = {
  	    x: 0,
  	    y: 0
  	  };
  	  const threshold = {
  	    height: scrollContainerRect.height * thresholdPercentage.y,
  	    width: scrollContainerRect.width * thresholdPercentage.x
  	  };

  	  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
  	    // Scroll Up
  	    direction.y = Direction.Backward;
  	    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  	  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
  	    // Scroll Down
  	    direction.y = Direction.Forward;
  	    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  	  }

  	  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
  	    // Scroll Right
  	    direction.x = Direction.Forward;
  	    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  	  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
  	    // Scroll Left
  	    direction.x = Direction.Backward;
  	    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  	  }

  	  return {
  	    direction,
  	    speed
  	  };
  	}

  	function getScrollElementRect(element) {
  	  if (element === document.scrollingElement) {
  	    const {
  	      innerWidth,
  	      innerHeight
  	    } = window;
  	    return {
  	      top: 0,
  	      left: 0,
  	      right: innerWidth,
  	      bottom: innerHeight,
  	      width: innerWidth,
  	      height: innerHeight
  	    };
  	  }

  	  const {
  	    top,
  	    left,
  	    right,
  	    bottom
  	  } = element.getBoundingClientRect();
  	  return {
  	    top,
  	    left,
  	    right,
  	    bottom,
  	    width: element.clientWidth,
  	    height: element.clientHeight
  	  };
  	}

  	function getScrollOffsets(scrollableAncestors) {
  	  return scrollableAncestors.reduce((acc, node) => {
  	    return utilities.add(acc, getScrollCoordinates(node));
  	  }, defaultCoordinates);
  	}
  	function getScrollXOffset(scrollableAncestors) {
  	  return scrollableAncestors.reduce((acc, node) => {
  	    return acc + getScrollXCoordinate(node);
  	  }, 0);
  	}
  	function getScrollYOffset(scrollableAncestors) {
  	  return scrollableAncestors.reduce((acc, node) => {
  	    return acc + getScrollYCoordinate(node);
  	  }, 0);
  	}

  	function scrollIntoViewIfNeeded(element, measure) {
  	  if (measure === void 0) {
  	    measure = getClientRect;
  	  }

  	  if (!element) {
  	    return;
  	  }

  	  const {
  	    top,
  	    left,
  	    bottom,
  	    right
  	  } = measure(element);
  	  const firstScrollableAncestor = getFirstScrollableAncestor(element);

  	  if (!firstScrollableAncestor) {
  	    return;
  	  }

  	  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
  	    element.scrollIntoView({
  	      block: 'center',
  	      inline: 'center'
  	    });
  	  }
  	}

  	const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
  	class Rect {
  	  constructor(rect, element) {
  	    this.rect = void 0;
  	    this.width = void 0;
  	    this.height = void 0;
  	    this.top = void 0;
  	    this.bottom = void 0;
  	    this.right = void 0;
  	    this.left = void 0;
  	    const scrollableAncestors = getScrollableAncestors(element);
  	    const scrollOffsets = getScrollOffsets(scrollableAncestors);
  	    this.rect = { ...rect
  	    };
  	    this.width = rect.width;
  	    this.height = rect.height;

  	    for (const [axis, keys, getScrollOffset] of properties) {
  	      for (const key of keys) {
  	        Object.defineProperty(this, key, {
  	          get: () => {
  	            const currentOffsets = getScrollOffset(scrollableAncestors);
  	            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
  	            return this.rect[key] + scrollOffsetsDeltla;
  	          },
  	          enumerable: true
  	        });
  	      }
  	    }

  	    Object.defineProperty(this, 'rect', {
  	      enumerable: false
  	    });
  	  }

  	}

  	class Listeners {
  	  constructor(target) {
  	    this.target = void 0;
  	    this.listeners = [];

  	    this.removeAll = () => {
  	      this.listeners.forEach(listener => {
  	        var _this$target;

  	        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
  	      });
  	    };

  	    this.target = target;
  	  }

  	  add(eventName, handler, options) {
  	    var _this$target2;

  	    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
  	    this.listeners.push([eventName, handler, options]);
  	  }

  	}

  	function getEventListenerTarget(target) {
  	  // If the `event.target` element is removed from the document events will still be targeted
  	  // at it, and hence won't always bubble up to the window or document anymore.
  	  // If there is any risk of an element being removed while it is being dragged,
  	  // the best practice is to attach the event listeners directly to the target.
  	  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  	  const {
  	    EventTarget
  	  } = utilities.getWindow(target);
  	  return target instanceof EventTarget ? target : utilities.getOwnerDocument(target);
  	}

  	function hasExceededDistance(delta, measurement) {
  	  const dx = Math.abs(delta.x);
  	  const dy = Math.abs(delta.y);

  	  if (typeof measurement === 'number') {
  	    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  	  }

  	  if ('x' in measurement && 'y' in measurement) {
  	    return dx > measurement.x && dy > measurement.y;
  	  }

  	  if ('x' in measurement) {
  	    return dx > measurement.x;
  	  }

  	  if ('y' in measurement) {
  	    return dy > measurement.y;
  	  }

  	  return false;
  	}

  	var EventName;

  	(function (EventName) {
  	  EventName["Click"] = "click";
  	  EventName["DragStart"] = "dragstart";
  	  EventName["Keydown"] = "keydown";
  	  EventName["ContextMenu"] = "contextmenu";
  	  EventName["Resize"] = "resize";
  	  EventName["SelectionChange"] = "selectionchange";
  	  EventName["VisibilityChange"] = "visibilitychange";
  	})(EventName || (EventName = {}));

  	function preventDefault(event) {
  	  event.preventDefault();
  	}
  	function stopPropagation(event) {
  	  event.stopPropagation();
  	}

  	(function (KeyboardCode) {
  	  KeyboardCode["Space"] = "Space";
  	  KeyboardCode["Down"] = "ArrowDown";
  	  KeyboardCode["Right"] = "ArrowRight";
  	  KeyboardCode["Left"] = "ArrowLeft";
  	  KeyboardCode["Up"] = "ArrowUp";
  	  KeyboardCode["Esc"] = "Escape";
  	  KeyboardCode["Enter"] = "Enter";
  	  KeyboardCode["Tab"] = "Tab";
  	})(exports.KeyboardCode || (exports.KeyboardCode = {}));

  	const defaultKeyboardCodes = {
  	  start: [exports.KeyboardCode.Space, exports.KeyboardCode.Enter],
  	  cancel: [exports.KeyboardCode.Esc],
  	  end: [exports.KeyboardCode.Space, exports.KeyboardCode.Enter, exports.KeyboardCode.Tab]
  	};
  	const defaultKeyboardCoordinateGetter = (event, _ref) => {
  	  let {
  	    currentCoordinates
  	  } = _ref;

  	  switch (event.code) {
  	    case exports.KeyboardCode.Right:
  	      return { ...currentCoordinates,
  	        x: currentCoordinates.x + 25
  	      };

  	    case exports.KeyboardCode.Left:
  	      return { ...currentCoordinates,
  	        x: currentCoordinates.x - 25
  	      };

  	    case exports.KeyboardCode.Down:
  	      return { ...currentCoordinates,
  	        y: currentCoordinates.y + 25
  	      };

  	    case exports.KeyboardCode.Up:
  	      return { ...currentCoordinates,
  	        y: currentCoordinates.y - 25
  	      };
  	  }

  	  return undefined;
  	};

  	class KeyboardSensor {
  	  constructor(props) {
  	    this.props = void 0;
  	    this.autoScrollEnabled = false;
  	    this.referenceCoordinates = void 0;
  	    this.listeners = void 0;
  	    this.windowListeners = void 0;
  	    this.props = props;
  	    const {
  	      event: {
  	        target
  	      }
  	    } = props;
  	    this.props = props;
  	    this.listeners = new Listeners(utilities.getOwnerDocument(target));
  	    this.windowListeners = new Listeners(utilities.getWindow(target));
  	    this.handleKeyDown = this.handleKeyDown.bind(this);
  	    this.handleCancel = this.handleCancel.bind(this);
  	    this.attach();
  	  }

  	  attach() {
  	    this.handleStart();
  	    this.windowListeners.add(EventName.Resize, this.handleCancel);
  	    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
  	    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  	  }

  	  handleStart() {
  	    const {
  	      activeNode,
  	      onStart
  	    } = this.props;
  	    const node = activeNode.node.current;

  	    if (node) {
  	      scrollIntoViewIfNeeded(node);
  	    }

  	    onStart(defaultCoordinates);
  	  }

  	  handleKeyDown(event) {
  	    if (utilities.isKeyboardEvent(event)) {
  	      const {
  	        active,
  	        context,
  	        options
  	      } = this.props;
  	      const {
  	        keyboardCodes = defaultKeyboardCodes,
  	        coordinateGetter = defaultKeyboardCoordinateGetter,
  	        scrollBehavior = 'smooth'
  	      } = options;
  	      const {
  	        code
  	      } = event;

  	      if (keyboardCodes.end.includes(code)) {
  	        this.handleEnd(event);
  	        return;
  	      }

  	      if (keyboardCodes.cancel.includes(code)) {
  	        this.handleCancel(event);
  	        return;
  	      }

  	      const {
  	        collisionRect
  	      } = context.current;
  	      const currentCoordinates = collisionRect ? {
  	        x: collisionRect.left,
  	        y: collisionRect.top
  	      } : defaultCoordinates;

  	      if (!this.referenceCoordinates) {
  	        this.referenceCoordinates = currentCoordinates;
  	      }

  	      const newCoordinates = coordinateGetter(event, {
  	        active,
  	        context: context.current,
  	        currentCoordinates
  	      });

  	      if (newCoordinates) {
  	        const coordinatesDelta = utilities.subtract(newCoordinates, currentCoordinates);
  	        const scrollDelta = {
  	          x: 0,
  	          y: 0
  	        };
  	        const {
  	          scrollableAncestors
  	        } = context.current;

  	        for (const scrollContainer of scrollableAncestors) {
  	          const direction = event.code;
  	          const {
  	            isTop,
  	            isRight,
  	            isLeft,
  	            isBottom,
  	            maxScroll,
  	            minScroll
  	          } = getScrollPosition(scrollContainer);
  	          const scrollElementRect = getScrollElementRect(scrollContainer);
  	          const clampedCoordinates = {
  	            x: Math.min(direction === exports.KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === exports.KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
  	            y: Math.min(direction === exports.KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === exports.KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
  	          };
  	          const canScrollX = direction === exports.KeyboardCode.Right && !isRight || direction === exports.KeyboardCode.Left && !isLeft;
  	          const canScrollY = direction === exports.KeyboardCode.Down && !isBottom || direction === exports.KeyboardCode.Up && !isTop;

  	          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
  	            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
  	            const canScrollToNewCoordinates = direction === exports.KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === exports.KeyboardCode.Left && newScrollCoordinates >= minScroll.x;

  	            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
  	              // We don't need to update coordinates, the scroll adjustment alone will trigger
  	              // logic to auto-detect the new container we are over
  	              scrollContainer.scrollTo({
  	                left: newScrollCoordinates,
  	                behavior: scrollBehavior
  	              });
  	              return;
  	            }

  	            if (canScrollToNewCoordinates) {
  	              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
  	            } else {
  	              scrollDelta.x = direction === exports.KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
  	            }

  	            if (scrollDelta.x) {
  	              scrollContainer.scrollBy({
  	                left: -scrollDelta.x,
  	                behavior: scrollBehavior
  	              });
  	            }

  	            break;
  	          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
  	            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
  	            const canScrollToNewCoordinates = direction === exports.KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === exports.KeyboardCode.Up && newScrollCoordinates >= minScroll.y;

  	            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
  	              // We don't need to update coordinates, the scroll adjustment alone will trigger
  	              // logic to auto-detect the new container we are over
  	              scrollContainer.scrollTo({
  	                top: newScrollCoordinates,
  	                behavior: scrollBehavior
  	              });
  	              return;
  	            }

  	            if (canScrollToNewCoordinates) {
  	              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
  	            } else {
  	              scrollDelta.y = direction === exports.KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
  	            }

  	            if (scrollDelta.y) {
  	              scrollContainer.scrollBy({
  	                top: -scrollDelta.y,
  	                behavior: scrollBehavior
  	              });
  	            }

  	            break;
  	          }
  	        }

  	        this.handleMove(event, utilities.add(utilities.subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
  	      }
  	    }
  	  }

  	  handleMove(event, coordinates) {
  	    const {
  	      onMove
  	    } = this.props;
  	    event.preventDefault();
  	    onMove(coordinates);
  	  }

  	  handleEnd(event) {
  	    const {
  	      onEnd
  	    } = this.props;
  	    event.preventDefault();
  	    this.detach();
  	    onEnd();
  	  }

  	  handleCancel(event) {
  	    const {
  	      onCancel
  	    } = this.props;
  	    event.preventDefault();
  	    this.detach();
  	    onCancel();
  	  }

  	  detach() {
  	    this.listeners.removeAll();
  	    this.windowListeners.removeAll();
  	  }

  	}
  	KeyboardSensor.activators = [{
  	  eventName: 'onKeyDown',
  	  handler: (event, _ref, _ref2) => {
  	    let {
  	      keyboardCodes = defaultKeyboardCodes,
  	      onActivation
  	    } = _ref;
  	    let {
  	      active
  	    } = _ref2;
  	    const {
  	      code
  	    } = event.nativeEvent;

  	    if (keyboardCodes.start.includes(code)) {
  	      const activator = active.activatorNode.current;

  	      if (activator && event.target !== activator) {
  	        return false;
  	      }

  	      event.preventDefault();
  	      onActivation == null ? void 0 : onActivation({
  	        event: event.nativeEvent
  	      });
  	      return true;
  	    }

  	    return false;
  	  }
  	}];

  	function isDistanceConstraint(constraint) {
  	  return Boolean(constraint && 'distance' in constraint);
  	}

  	function isDelayConstraint(constraint) {
  	  return Boolean(constraint && 'delay' in constraint);
  	}

  	class AbstractPointerSensor {
  	  constructor(props, events, listenerTarget) {
  	    var _getEventCoordinates;

  	    if (listenerTarget === void 0) {
  	      listenerTarget = getEventListenerTarget(props.event.target);
  	    }

  	    this.props = void 0;
  	    this.events = void 0;
  	    this.autoScrollEnabled = true;
  	    this.document = void 0;
  	    this.activated = false;
  	    this.initialCoordinates = void 0;
  	    this.timeoutId = null;
  	    this.listeners = void 0;
  	    this.documentListeners = void 0;
  	    this.windowListeners = void 0;
  	    this.props = props;
  	    this.events = events;
  	    const {
  	      event
  	    } = props;
  	    const {
  	      target
  	    } = event;
  	    this.props = props;
  	    this.events = events;
  	    this.document = utilities.getOwnerDocument(target);
  	    this.documentListeners = new Listeners(this.document);
  	    this.listeners = new Listeners(listenerTarget);
  	    this.windowListeners = new Listeners(utilities.getWindow(target));
  	    this.initialCoordinates = (_getEventCoordinates = utilities.getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
  	    this.handleStart = this.handleStart.bind(this);
  	    this.handleMove = this.handleMove.bind(this);
  	    this.handleEnd = this.handleEnd.bind(this);
  	    this.handleCancel = this.handleCancel.bind(this);
  	    this.handleKeydown = this.handleKeydown.bind(this);
  	    this.removeTextSelection = this.removeTextSelection.bind(this);
  	    this.attach();
  	  }

  	  attach() {
  	    const {
  	      events,
  	      props: {
  	        options: {
  	          activationConstraint,
  	          bypassActivationConstraint
  	        }
  	      }
  	    } = this;
  	    this.listeners.add(events.move.name, this.handleMove, {
  	      passive: false
  	    });
  	    this.listeners.add(events.end.name, this.handleEnd);

  	    if (events.cancel) {
  	      this.listeners.add(events.cancel.name, this.handleCancel);
  	    }

  	    this.windowListeners.add(EventName.Resize, this.handleCancel);
  	    this.windowListeners.add(EventName.DragStart, preventDefault);
  	    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
  	    this.windowListeners.add(EventName.ContextMenu, preventDefault);
  	    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

  	    if (activationConstraint) {
  	      if (bypassActivationConstraint != null && bypassActivationConstraint({
  	        event: this.props.event,
  	        activeNode: this.props.activeNode,
  	        options: this.props.options
  	      })) {
  	        return this.handleStart();
  	      }

  	      if (isDelayConstraint(activationConstraint)) {
  	        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
  	        this.handlePending(activationConstraint);
  	        return;
  	      }

  	      if (isDistanceConstraint(activationConstraint)) {
  	        this.handlePending(activationConstraint);
  	        return;
  	      }
  	    }

  	    this.handleStart();
  	  }

  	  detach() {
  	    this.listeners.removeAll();
  	    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
  	    // This is necessary because we listen for `click` and `selection` events on the document

  	    setTimeout(this.documentListeners.removeAll, 50);

  	    if (this.timeoutId !== null) {
  	      clearTimeout(this.timeoutId);
  	      this.timeoutId = null;
  	    }
  	  }

  	  handlePending(constraint, offset) {
  	    const {
  	      active,
  	      onPending
  	    } = this.props;
  	    onPending(active, constraint, this.initialCoordinates, offset);
  	  }

  	  handleStart() {
  	    const {
  	      initialCoordinates
  	    } = this;
  	    const {
  	      onStart
  	    } = this.props;

  	    if (initialCoordinates) {
  	      this.activated = true; // Stop propagation of click events once activation constraints are met

  	      this.documentListeners.add(EventName.Click, stopPropagation, {
  	        capture: true
  	      }); // Remove any text selection from the document

  	      this.removeTextSelection(); // Prevent further text selection while dragging

  	      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
  	      onStart(initialCoordinates);
  	    }
  	  }

  	  handleMove(event) {
  	    var _getEventCoordinates2;

  	    const {
  	      activated,
  	      initialCoordinates,
  	      props
  	    } = this;
  	    const {
  	      onMove,
  	      options: {
  	        activationConstraint
  	      }
  	    } = props;

  	    if (!initialCoordinates) {
  	      return;
  	    }

  	    const coordinates = (_getEventCoordinates2 = utilities.getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
  	    const delta = utilities.subtract(initialCoordinates, coordinates); // Constraint validation

  	    if (!activated && activationConstraint) {
  	      if (isDistanceConstraint(activationConstraint)) {
  	        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
  	          return this.handleCancel();
  	        }

  	        if (hasExceededDistance(delta, activationConstraint.distance)) {
  	          return this.handleStart();
  	        }
  	      }

  	      if (isDelayConstraint(activationConstraint)) {
  	        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
  	          return this.handleCancel();
  	        }
  	      }

  	      this.handlePending(activationConstraint, delta);
  	      return;
  	    }

  	    if (event.cancelable) {
  	      event.preventDefault();
  	    }

  	    onMove(coordinates);
  	  }

  	  handleEnd() {
  	    const {
  	      onAbort,
  	      onEnd
  	    } = this.props;
  	    this.detach();

  	    if (!this.activated) {
  	      onAbort(this.props.active);
  	    }

  	    onEnd();
  	  }

  	  handleCancel() {
  	    const {
  	      onAbort,
  	      onCancel
  	    } = this.props;
  	    this.detach();

  	    if (!this.activated) {
  	      onAbort(this.props.active);
  	    }

  	    onCancel();
  	  }

  	  handleKeydown(event) {
  	    if (event.code === exports.KeyboardCode.Esc) {
  	      this.handleCancel();
  	    }
  	  }

  	  removeTextSelection() {
  	    var _this$document$getSel;

  	    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  	  }

  	}

  	const events = {
  	  cancel: {
  	    name: 'pointercancel'
  	  },
  	  move: {
  	    name: 'pointermove'
  	  },
  	  end: {
  	    name: 'pointerup'
  	  }
  	};
  	class PointerSensor extends AbstractPointerSensor {
  	  constructor(props) {
  	    const {
  	      event
  	    } = props; // Pointer events stop firing if the target is unmounted while dragging
  	    // Therefore we attach listeners to the owner document instead

  	    const listenerTarget = utilities.getOwnerDocument(event.target);
  	    super(props, events, listenerTarget);
  	  }

  	}
  	PointerSensor.activators = [{
  	  eventName: 'onPointerDown',
  	  handler: (_ref, _ref2) => {
  	    let {
  	      nativeEvent: event
  	    } = _ref;
  	    let {
  	      onActivation
  	    } = _ref2;

  	    if (!event.isPrimary || event.button !== 0) {
  	      return false;
  	    }

  	    onActivation == null ? void 0 : onActivation({
  	      event
  	    });
  	    return true;
  	  }
  	}];

  	const events$1 = {
  	  move: {
  	    name: 'mousemove'
  	  },
  	  end: {
  	    name: 'mouseup'
  	  }
  	};
  	var MouseButton;

  	(function (MouseButton) {
  	  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
  	})(MouseButton || (MouseButton = {}));

  	class MouseSensor extends AbstractPointerSensor {
  	  constructor(props) {
  	    super(props, events$1, utilities.getOwnerDocument(props.event.target));
  	  }

  	}
  	MouseSensor.activators = [{
  	  eventName: 'onMouseDown',
  	  handler: (_ref, _ref2) => {
  	    let {
  	      nativeEvent: event
  	    } = _ref;
  	    let {
  	      onActivation
  	    } = _ref2;

  	    if (event.button === MouseButton.RightClick) {
  	      return false;
  	    }

  	    onActivation == null ? void 0 : onActivation({
  	      event
  	    });
  	    return true;
  	  }
  	}];

  	const events$2 = {
  	  cancel: {
  	    name: 'touchcancel'
  	  },
  	  move: {
  	    name: 'touchmove'
  	  },
  	  end: {
  	    name: 'touchend'
  	  }
  	};
  	class TouchSensor extends AbstractPointerSensor {
  	  constructor(props) {
  	    super(props, events$2);
  	  }

  	  static setup() {
  	    // Adding a non-capture and non-passive `touchmove` listener in order
  	    // to force `event.preventDefault()` calls to work in dynamically added
  	    // touchmove event handlers. This is required for iOS Safari.
  	    window.addEventListener(events$2.move.name, noop, {
  	      capture: false,
  	      passive: false
  	    });
  	    return function teardown() {
  	      window.removeEventListener(events$2.move.name, noop);
  	    }; // We create a new handler because the teardown function of another sensor
  	    // could remove our event listener if we use a referentially equal listener.

  	    function noop() {}
  	  }

  	}
  	TouchSensor.activators = [{
  	  eventName: 'onTouchStart',
  	  handler: (_ref, _ref2) => {
  	    let {
  	      nativeEvent: event
  	    } = _ref;
  	    let {
  	      onActivation
  	    } = _ref2;
  	    const {
  	      touches
  	    } = event;

  	    if (touches.length > 1) {
  	      return false;
  	    }

  	    onActivation == null ? void 0 : onActivation({
  	      event
  	    });
  	    return true;
  	  }
  	}];

  	(function (AutoScrollActivator) {
  	  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  	  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
  	})(exports.AutoScrollActivator || (exports.AutoScrollActivator = {}));

  	(function (TraversalOrder) {
  	  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  	  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
  	})(exports.TraversalOrder || (exports.TraversalOrder = {}));

  	function useAutoScroller(_ref) {
  	  let {
  	    acceleration,
  	    activator = exports.AutoScrollActivator.Pointer,
  	    canScroll,
  	    draggingRect,
  	    enabled,
  	    interval = 5,
  	    order = exports.TraversalOrder.TreeOrder,
  	    pointerCoordinates,
  	    scrollableAncestors,
  	    scrollableAncestorRects,
  	    delta,
  	    threshold
  	  } = _ref;
  	  const scrollIntent = useScrollIntent({
  	    delta,
  	    disabled: !enabled
  	  });
  	  const [setAutoScrollInterval, clearAutoScrollInterval] = utilities.useInterval();
  	  const scrollSpeed = React.useRef({
  	    x: 0,
  	    y: 0
  	  });
  	  const scrollDirection = React.useRef({
  	    x: 0,
  	    y: 0
  	  });
  	  const rect = React.useMemo(() => {
  	    switch (activator) {
  	      case exports.AutoScrollActivator.Pointer:
  	        return pointerCoordinates ? {
  	          top: pointerCoordinates.y,
  	          bottom: pointerCoordinates.y,
  	          left: pointerCoordinates.x,
  	          right: pointerCoordinates.x
  	        } : null;

  	      case exports.AutoScrollActivator.DraggableRect:
  	        return draggingRect;
  	    }
  	  }, [activator, draggingRect, pointerCoordinates]);
  	  const scrollContainerRef = React.useRef(null);
  	  const autoScroll = React.useCallback(() => {
  	    const scrollContainer = scrollContainerRef.current;

  	    if (!scrollContainer) {
  	      return;
  	    }

  	    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
  	    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
  	    scrollContainer.scrollBy(scrollLeft, scrollTop);
  	  }, []);
  	  const sortedScrollableAncestors = React.useMemo(() => order === exports.TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  	  React.useEffect(() => {
  	    if (!enabled || !scrollableAncestors.length || !rect) {
  	      clearAutoScrollInterval();
  	      return;
  	    }

  	    for (const scrollContainer of sortedScrollableAncestors) {
  	      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
  	        continue;
  	      }

  	      const index = scrollableAncestors.indexOf(scrollContainer);
  	      const scrollContainerRect = scrollableAncestorRects[index];

  	      if (!scrollContainerRect) {
  	        continue;
  	      }

  	      const {
  	        direction,
  	        speed
  	      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

  	      for (const axis of ['x', 'y']) {
  	        if (!scrollIntent[axis][direction[axis]]) {
  	          speed[axis] = 0;
  	          direction[axis] = 0;
  	        }
  	      }

  	      if (speed.x > 0 || speed.y > 0) {
  	        clearAutoScrollInterval();
  	        scrollContainerRef.current = scrollContainer;
  	        setAutoScrollInterval(autoScroll, interval);
  	        scrollSpeed.current = speed;
  	        scrollDirection.current = direction;
  	        return;
  	      }
  	    }

  	    scrollSpeed.current = {
  	      x: 0,
  	      y: 0
  	    };
  	    scrollDirection.current = {
  	      x: 0,
  	      y: 0
  	    };
  	    clearAutoScrollInterval();
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  JSON.stringify(rect), // eslint-disable-next-line react-hooks/exhaustive-deps
  	  JSON.stringify(scrollIntent), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  JSON.stringify(threshold)]);
  	}
  	const defaultScrollIntent = {
  	  x: {
  	    [Direction.Backward]: false,
  	    [Direction.Forward]: false
  	  },
  	  y: {
  	    [Direction.Backward]: false,
  	    [Direction.Forward]: false
  	  }
  	};

  	function useScrollIntent(_ref2) {
  	  let {
  	    delta,
  	    disabled
  	  } = _ref2;
  	  const previousDelta = utilities.usePrevious(delta);
  	  return utilities.useLazyMemo(previousIntent => {
  	    if (disabled || !previousDelta || !previousIntent) {
  	      // Reset scroll intent tracking when auto-scrolling is disabled
  	      return defaultScrollIntent;
  	    }

  	    const direction = {
  	      x: Math.sign(delta.x - previousDelta.x),
  	      y: Math.sign(delta.y - previousDelta.y)
  	    }; // Keep track of the user intent to scroll in each direction for both axis

  	    return {
  	      x: {
  	        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
  	        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
  	      },
  	      y: {
  	        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
  	        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
  	      }
  	    };
  	  }, [disabled, delta, previousDelta]);
  	}

  	function useCachedNode(draggableNodes, id) {
  	  const draggableNode = id != null ? draggableNodes.get(id) : undefined;
  	  const node = draggableNode ? draggableNode.node.current : null;
  	  return utilities.useLazyMemo(cachedNode => {
  	    var _ref;

  	    if (id == null) {
  	      return null;
  	    } // In some cases, the draggable node can unmount while dragging
  	    // This is the case for virtualized lists. In those situations,
  	    // we fall back to the last known value for that node.


  	    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  	  }, [node, id]);
  	}

  	function useCombineActivators(sensors, getSyntheticHandler) {
  	  return React.useMemo(() => sensors.reduce((accumulator, sensor) => {
  	    const {
  	      sensor: Sensor
  	    } = sensor;
  	    const sensorActivators = Sensor.activators.map(activator => ({
  	      eventName: activator.eventName,
  	      handler: getSyntheticHandler(activator.handler, sensor)
  	    }));
  	    return [...accumulator, ...sensorActivators];
  	  }, []), [sensors, getSyntheticHandler]);
  	}

  	(function (MeasuringStrategy) {
  	  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  	  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  	  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
  	})(exports.MeasuringStrategy || (exports.MeasuringStrategy = {}));

  	(function (MeasuringFrequency) {
  	  MeasuringFrequency["Optimized"] = "optimized";
  	})(exports.MeasuringFrequency || (exports.MeasuringFrequency = {}));

  	const defaultValue = /*#__PURE__*/new Map();
  	function useDroppableMeasuring(containers, _ref) {
  	  let {
  	    dragging,
  	    dependencies,
  	    config
  	  } = _ref;
  	  const [queue, setQueue] = React.useState(null);
  	  const {
  	    frequency,
  	    measure,
  	    strategy
  	  } = config;
  	  const containersRef = React.useRef(containers);
  	  const disabled = isDisabled();
  	  const disabledRef = utilities.useLatestValue(disabled);
  	  const measureDroppableContainers = React.useCallback(function (ids) {
  	    if (ids === void 0) {
  	      ids = [];
  	    }

  	    if (disabledRef.current) {
  	      return;
  	    }

  	    setQueue(value => {
  	      if (value === null) {
  	        return ids;
  	      }

  	      return value.concat(ids.filter(id => !value.includes(id)));
  	    });
  	  }, [disabledRef]);
  	  const timeoutId = React.useRef(null);
  	  const droppableRects = utilities.useLazyMemo(previousValue => {
  	    if (disabled && !dragging) {
  	      return defaultValue;
  	    }

  	    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
  	      const map = new Map();

  	      for (let container of containers) {
  	        if (!container) {
  	          continue;
  	        }

  	        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
  	          // This container does not need to be re-measured
  	          map.set(container.id, container.rect.current);
  	          continue;
  	        }

  	        const node = container.node.current;
  	        const rect = node ? new Rect(measure(node), node) : null;
  	        container.rect.current = rect;

  	        if (rect) {
  	          map.set(container.id, rect);
  	        }
  	      }

  	      return map;
  	    }

  	    return previousValue;
  	  }, [containers, queue, dragging, disabled, measure]);
  	  React.useEffect(() => {
  	    containersRef.current = containers;
  	  }, [containers]);
  	  React.useEffect(() => {
  	    if (disabled) {
  	      return;
  	    }

  	    measureDroppableContainers();
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [dragging, disabled]);
  	  React.useEffect(() => {
  	    if (queue && queue.length > 0) {
  	      setQueue(null);
  	    }
  	  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  	  [JSON.stringify(queue)]);
  	  React.useEffect(() => {
  	    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
  	      return;
  	    }

  	    timeoutId.current = setTimeout(() => {
  	      measureDroppableContainers();
  	      timeoutId.current = null;
  	    }, frequency);
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  	  return {
  	    droppableRects,
  	    measureDroppableContainers,
  	    measuringScheduled: queue != null
  	  };

  	  function isDisabled() {
  	    switch (strategy) {
  	      case exports.MeasuringStrategy.Always:
  	        return false;

  	      case exports.MeasuringStrategy.BeforeDragging:
  	        return dragging;

  	      default:
  	        return !dragging;
  	    }
  	  }
  	}

  	function useInitialValue(value, computeFn) {
  	  return utilities.useLazyMemo(previousValue => {
  	    if (!value) {
  	      return null;
  	    }

  	    if (previousValue) {
  	      return previousValue;
  	    }

  	    return typeof computeFn === 'function' ? computeFn(value) : value;
  	  }, [computeFn, value]);
  	}

  	function useInitialRect(node, measure) {
  	  return useInitialValue(node, measure);
  	}

  	/**
  	 * Returns a new MutationObserver instance.
  	 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
  	 */

  	function useMutationObserver(_ref) {
  	  let {
  	    callback,
  	    disabled
  	  } = _ref;
  	  const handleMutations = utilities.useEvent(callback);
  	  const mutationObserver = React.useMemo(() => {
  	    if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
  	      return undefined;
  	    }

  	    const {
  	      MutationObserver
  	    } = window;
  	    return new MutationObserver(handleMutations);
  	  }, [handleMutations, disabled]);
  	  React.useEffect(() => {
  	    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  	  }, [mutationObserver]);
  	  return mutationObserver;
  	}

  	/**
  	 * Returns a new ResizeObserver instance bound to the `onResize` callback.
  	 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
  	 */

  	function useResizeObserver(_ref) {
  	  let {
  	    callback,
  	    disabled
  	  } = _ref;
  	  const handleResize = utilities.useEvent(callback);
  	  const resizeObserver = React.useMemo(() => {
  	    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
  	      return undefined;
  	    }

  	    const {
  	      ResizeObserver
  	    } = window;
  	    return new ResizeObserver(handleResize);
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [disabled]);
  	  React.useEffect(() => {
  	    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  	  }, [resizeObserver]);
  	  return resizeObserver;
  	}

  	function defaultMeasure(element) {
  	  return new Rect(getClientRect(element), element);
  	}

  	function useRect(element, measure, fallbackRect) {
  	  if (measure === void 0) {
  	    measure = defaultMeasure;
  	  }

  	  const [rect, setRect] = React.useState(null);

  	  function measureRect() {
  	    setRect(currentRect => {
  	      if (!element) {
  	        return null;
  	      }

  	      if (element.isConnected === false) {
  	        var _ref;

  	        // Fall back to last rect we measured if the element is
  	        // no longer connected to the DOM.
  	        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
  	      }

  	      const newRect = measure(element);

  	      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
  	        return currentRect;
  	      }

  	      return newRect;
  	    });
  	  }

  	  const mutationObserver = useMutationObserver({
  	    callback(records) {
  	      if (!element) {
  	        return;
  	      }

  	      for (const record of records) {
  	        const {
  	          type,
  	          target
  	        } = record;

  	        if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
  	          measureRect();
  	          break;
  	        }
  	      }
  	    }

  	  });
  	  const resizeObserver = useResizeObserver({
  	    callback: measureRect
  	  });
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    measureRect();

  	    if (element) {
  	      resizeObserver == null ? void 0 : resizeObserver.observe(element);
  	      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
  	        childList: true,
  	        subtree: true
  	      });
  	    } else {
  	      resizeObserver == null ? void 0 : resizeObserver.disconnect();
  	      mutationObserver == null ? void 0 : mutationObserver.disconnect();
  	    }
  	  }, [element]);
  	  return rect;
  	}

  	function useRectDelta(rect) {
  	  const initialRect = useInitialValue(rect);
  	  return getRectDelta(rect, initialRect);
  	}

  	const defaultValue$1 = [];
  	function useScrollableAncestors(node) {
  	  const previousNode = React.useRef(node);
  	  const ancestors = utilities.useLazyMemo(previousValue => {
  	    if (!node) {
  	      return defaultValue$1;
  	    }

  	    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
  	      return previousValue;
  	    }

  	    return getScrollableAncestors(node);
  	  }, [node]);
  	  React.useEffect(() => {
  	    previousNode.current = node;
  	  }, [node]);
  	  return ancestors;
  	}

  	function useScrollOffsets(elements) {
  	  const [scrollCoordinates, setScrollCoordinates] = React.useState(null);
  	  const prevElements = React.useRef(elements); // To-do: Throttle the handleScroll callback

  	  const handleScroll = React.useCallback(event => {
  	    const scrollingElement = getScrollableElement(event.target);

  	    if (!scrollingElement) {
  	      return;
  	    }

  	    setScrollCoordinates(scrollCoordinates => {
  	      if (!scrollCoordinates) {
  	        return null;
  	      }

  	      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
  	      return new Map(scrollCoordinates);
  	    });
  	  }, []);
  	  React.useEffect(() => {
  	    const previousElements = prevElements.current;

  	    if (elements !== previousElements) {
  	      cleanup(previousElements);
  	      const entries = elements.map(element => {
  	        const scrollableElement = getScrollableElement(element);

  	        if (scrollableElement) {
  	          scrollableElement.addEventListener('scroll', handleScroll, {
  	            passive: true
  	          });
  	          return [scrollableElement, getScrollCoordinates(scrollableElement)];
  	        }

  	        return null;
  	      }).filter(entry => entry != null);
  	      setScrollCoordinates(entries.length ? new Map(entries) : null);
  	      prevElements.current = elements;
  	    }

  	    return () => {
  	      cleanup(elements);
  	      cleanup(previousElements);
  	    };

  	    function cleanup(elements) {
  	      elements.forEach(element => {
  	        const scrollableElement = getScrollableElement(element);
  	        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
  	      });
  	    }
  	  }, [handleScroll, elements]);
  	  return React.useMemo(() => {
  	    if (elements.length) {
  	      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => utilities.add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
  	    }

  	    return defaultCoordinates;
  	  }, [elements, scrollCoordinates]);
  	}

  	function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  	  if (dependencies === void 0) {
  	    dependencies = [];
  	  }

  	  const initialScrollOffsets = React.useRef(null);
  	  React.useEffect(() => {
  	    initialScrollOffsets.current = null;
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  dependencies);
  	  React.useEffect(() => {
  	    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;

  	    if (hasScrollOffsets && !initialScrollOffsets.current) {
  	      initialScrollOffsets.current = scrollOffsets;
  	    }

  	    if (!hasScrollOffsets && initialScrollOffsets.current) {
  	      initialScrollOffsets.current = null;
  	    }
  	  }, [scrollOffsets]);
  	  return initialScrollOffsets.current ? utilities.subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
  	}

  	function useSensorSetup(sensors) {
  	  React.useEffect(() => {
  	    if (!utilities.canUseDOM) {
  	      return;
  	    }

  	    const teardownFns = sensors.map(_ref => {
  	      let {
  	        sensor
  	      } = _ref;
  	      return sensor.setup == null ? void 0 : sensor.setup();
  	    });
  	    return () => {
  	      for (const teardown of teardownFns) {
  	        teardown == null ? void 0 : teardown();
  	      }
  	    };
  	  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  	  // eslint-disable-next-line react-hooks/exhaustive-deps
  	  sensors.map(_ref2 => {
  	    let {
  	      sensor
  	    } = _ref2;
  	    return sensor;
  	  }));
  	}

  	function useSyntheticListeners(listeners, id) {
  	  return React.useMemo(() => {
  	    return listeners.reduce((acc, _ref) => {
  	      let {
  	        eventName,
  	        handler
  	      } = _ref;

  	      acc[eventName] = event => {
  	        handler(event, id);
  	      };

  	      return acc;
  	    }, {});
  	  }, [listeners, id]);
  	}

  	function useWindowRect(element) {
  	  return React.useMemo(() => element ? getWindowClientRect(element) : null, [element]);
  	}

  	const defaultValue$2 = [];
  	function useRects(elements, measure) {
  	  if (measure === void 0) {
  	    measure = getClientRect;
  	  }

  	  const [firstElement] = elements;
  	  const windowRect = useWindowRect(firstElement ? utilities.getWindow(firstElement) : null);
  	  const [rects, setRects] = React.useState(defaultValue$2);

  	  function measureRects() {
  	    setRects(() => {
  	      if (!elements.length) {
  	        return defaultValue$2;
  	      }

  	      return elements.map(element => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
  	    });
  	  }

  	  const resizeObserver = useResizeObserver({
  	    callback: measureRects
  	  });
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    resizeObserver == null ? void 0 : resizeObserver.disconnect();
  	    measureRects();
  	    elements.forEach(element => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  	  }, [elements]);
  	  return rects;
  	}

  	function getMeasurableNode(node) {
  	  if (!node) {
  	    return null;
  	  }

  	  if (node.children.length > 1) {
  	    return node;
  	  }

  	  const firstChild = node.children[0];
  	  return utilities.isHTMLElement(firstChild) ? firstChild : node;
  	}

  	function useDragOverlayMeasuring(_ref) {
  	  let {
  	    measure
  	  } = _ref;
  	  const [rect, setRect] = React.useState(null);
  	  const handleResize = React.useCallback(entries => {
  	    for (const {
  	      target
  	    } of entries) {
  	      if (utilities.isHTMLElement(target)) {
  	        setRect(rect => {
  	          const newRect = measure(target);
  	          return rect ? { ...rect,
  	            width: newRect.width,
  	            height: newRect.height
  	          } : newRect;
  	        });
  	        break;
  	      }
  	    }
  	  }, [measure]);
  	  const resizeObserver = useResizeObserver({
  	    callback: handleResize
  	  });
  	  const handleNodeChange = React.useCallback(element => {
  	    const node = getMeasurableNode(element);
  	    resizeObserver == null ? void 0 : resizeObserver.disconnect();

  	    if (node) {
  	      resizeObserver == null ? void 0 : resizeObserver.observe(node);
  	    }

  	    setRect(node ? measure(node) : null);
  	  }, [measure, resizeObserver]);
  	  const [nodeRef, setRef] = utilities.useNodeRef(handleNodeChange);
  	  return React.useMemo(() => ({
  	    nodeRef,
  	    rect,
  	    setRef
  	  }), [rect, nodeRef, setRef]);
  	}

  	const defaultSensors = [{
  	  sensor: PointerSensor,
  	  options: {}
  	}, {
  	  sensor: KeyboardSensor,
  	  options: {}
  	}];
  	const defaultData = {
  	  current: {}
  	};
  	const defaultMeasuringConfiguration = {
  	  draggable: {
  	    measure: getTransformAgnosticClientRect
  	  },
  	  droppable: {
  	    measure: getTransformAgnosticClientRect,
  	    strategy: exports.MeasuringStrategy.WhileDragging,
  	    frequency: exports.MeasuringFrequency.Optimized
  	  },
  	  dragOverlay: {
  	    measure: getClientRect
  	  }
  	};

  	class DroppableContainersMap extends Map {
  	  get(id) {
  	    var _super$get;

  	    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  	  }

  	  toArray() {
  	    return Array.from(this.values());
  	  }

  	  getEnabled() {
  	    return this.toArray().filter(_ref => {
  	      let {
  	        disabled
  	      } = _ref;
  	      return !disabled;
  	    });
  	  }

  	  getNodeFor(id) {
  	    var _this$get$node$curren, _this$get;

  	    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  	  }

  	}

  	const defaultPublicContext = {
  	  activatorEvent: null,
  	  active: null,
  	  activeNode: null,
  	  activeNodeRect: null,
  	  collisions: null,
  	  containerNodeRect: null,
  	  draggableNodes: /*#__PURE__*/new Map(),
  	  droppableRects: /*#__PURE__*/new Map(),
  	  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  	  over: null,
  	  dragOverlay: {
  	    nodeRef: {
  	      current: null
  	    },
  	    rect: null,
  	    setRef: noop
  	  },
  	  scrollableAncestors: [],
  	  scrollableAncestorRects: [],
  	  measuringConfiguration: defaultMeasuringConfiguration,
  	  measureDroppableContainers: noop,
  	  windowRect: null,
  	  measuringScheduled: false
  	};
  	const defaultInternalContext = {
  	  activatorEvent: null,
  	  activators: [],
  	  active: null,
  	  activeNodeRect: null,
  	  ariaDescribedById: {
  	    draggable: ''
  	  },
  	  dispatch: noop,
  	  draggableNodes: /*#__PURE__*/new Map(),
  	  over: null,
  	  measureDroppableContainers: noop
  	};
  	const InternalContext = /*#__PURE__*/React.createContext(defaultInternalContext);
  	const PublicContext = /*#__PURE__*/React.createContext(defaultPublicContext);

  	function getInitialState() {
  	  return {
  	    draggable: {
  	      active: null,
  	      initialCoordinates: {
  	        x: 0,
  	        y: 0
  	      },
  	      nodes: new Map(),
  	      translate: {
  	        x: 0,
  	        y: 0
  	      }
  	    },
  	    droppable: {
  	      containers: new DroppableContainersMap()
  	    }
  	  };
  	}
  	function reducer(state, action) {
  	  switch (action.type) {
  	    case Action.DragStart:
  	      return { ...state,
  	        draggable: { ...state.draggable,
  	          initialCoordinates: action.initialCoordinates,
  	          active: action.active
  	        }
  	      };

  	    case Action.DragMove:
  	      if (state.draggable.active == null) {
  	        return state;
  	      }

  	      return { ...state,
  	        draggable: { ...state.draggable,
  	          translate: {
  	            x: action.coordinates.x - state.draggable.initialCoordinates.x,
  	            y: action.coordinates.y - state.draggable.initialCoordinates.y
  	          }
  	        }
  	      };

  	    case Action.DragEnd:
  	    case Action.DragCancel:
  	      return { ...state,
  	        draggable: { ...state.draggable,
  	          active: null,
  	          initialCoordinates: {
  	            x: 0,
  	            y: 0
  	          },
  	          translate: {
  	            x: 0,
  	            y: 0
  	          }
  	        }
  	      };

  	    case Action.RegisterDroppable:
  	      {
  	        const {
  	          element
  	        } = action;
  	        const {
  	          id
  	        } = element;
  	        const containers = new DroppableContainersMap(state.droppable.containers);
  	        containers.set(id, element);
  	        return { ...state,
  	          droppable: { ...state.droppable,
  	            containers
  	          }
  	        };
  	      }

  	    case Action.SetDroppableDisabled:
  	      {
  	        const {
  	          id,
  	          key,
  	          disabled
  	        } = action;
  	        const element = state.droppable.containers.get(id);

  	        if (!element || key !== element.key) {
  	          return state;
  	        }

  	        const containers = new DroppableContainersMap(state.droppable.containers);
  	        containers.set(id, { ...element,
  	          disabled
  	        });
  	        return { ...state,
  	          droppable: { ...state.droppable,
  	            containers
  	          }
  	        };
  	      }

  	    case Action.UnregisterDroppable:
  	      {
  	        const {
  	          id,
  	          key
  	        } = action;
  	        const element = state.droppable.containers.get(id);

  	        if (!element || key !== element.key) {
  	          return state;
  	        }

  	        const containers = new DroppableContainersMap(state.droppable.containers);
  	        containers.delete(id);
  	        return { ...state,
  	          droppable: { ...state.droppable,
  	            containers
  	          }
  	        };
  	      }

  	    default:
  	      {
  	        return state;
  	      }
  	  }
  	}

  	function RestoreFocus(_ref) {
  	  let {
  	    disabled
  	  } = _ref;
  	  const {
  	    active,
  	    activatorEvent,
  	    draggableNodes
  	  } = React.useContext(InternalContext);
  	  const previousActivatorEvent = utilities.usePrevious(activatorEvent);
  	  const previousActiveId = utilities.usePrevious(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node

  	  React.useEffect(() => {
  	    if (disabled) {
  	      return;
  	    }

  	    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
  	      if (!utilities.isKeyboardEvent(previousActivatorEvent)) {
  	        return;
  	      }

  	      if (document.activeElement === previousActivatorEvent.target) {
  	        // No need to restore focus
  	        return;
  	      }

  	      const draggableNode = draggableNodes.get(previousActiveId);

  	      if (!draggableNode) {
  	        return;
  	      }

  	      const {
  	        activatorNode,
  	        node
  	      } = draggableNode;

  	      if (!activatorNode.current && !node.current) {
  	        return;
  	      }

  	      requestAnimationFrame(() => {
  	        for (const element of [activatorNode.current, node.current]) {
  	          if (!element) {
  	            continue;
  	          }

  	          const focusableNode = utilities.findFirstFocusableNode(element);

  	          if (focusableNode) {
  	            focusableNode.focus();
  	            break;
  	          }
  	        }
  	      });
  	    }
  	  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  	  return null;
  	}

  	function applyModifiers(modifiers, _ref) {
  	  let {
  	    transform,
  	    ...args
  	  } = _ref;
  	  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
  	    return modifier({
  	      transform: accumulator,
  	      ...args
  	    });
  	  }, transform) : transform;
  	}

  	function useMeasuringConfiguration(config) {
  	  return React.useMemo(() => ({
  	    draggable: { ...defaultMeasuringConfiguration.draggable,
  	      ...(config == null ? void 0 : config.draggable)
  	    },
  	    droppable: { ...defaultMeasuringConfiguration.droppable,
  	      ...(config == null ? void 0 : config.droppable)
  	    },
  	    dragOverlay: { ...defaultMeasuringConfiguration.dragOverlay,
  	      ...(config == null ? void 0 : config.dragOverlay)
  	    }
  	  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]);
  	}

  	function useLayoutShiftScrollCompensation(_ref) {
  	  let {
  	    activeNode,
  	    measure,
  	    initialRect,
  	    config = true
  	  } = _ref;
  	  const initialized = React.useRef(false);
  	  const {
  	    x,
  	    y
  	  } = typeof config === 'boolean' ? {
  	    x: config,
  	    y: config
  	  } : config;
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    const disabled = !x && !y;

  	    if (disabled || !activeNode) {
  	      initialized.current = false;
  	      return;
  	    }

  	    if (initialized.current || !initialRect) {
  	      // Return early if layout shift scroll compensation was already attempted
  	      // or if there is no initialRect to compare to.
  	      return;
  	    } // Get the most up to date node ref for the active draggable


  	    const node = activeNode == null ? void 0 : activeNode.node.current;

  	    if (!node || node.isConnected === false) {
  	      // Return early if there is no attached node ref or if the node is
  	      // disconnected from the document.
  	      return;
  	    }

  	    const rect = measure(node);
  	    const rectDelta = getRectDelta(rect, initialRect);

  	    if (!x) {
  	      rectDelta.x = 0;
  	    }

  	    if (!y) {
  	      rectDelta.y = 0;
  	    } // Only perform layout shift scroll compensation once


  	    initialized.current = true;

  	    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
  	      const firstScrollableAncestor = getFirstScrollableAncestor(node);

  	      if (firstScrollableAncestor) {
  	        firstScrollableAncestor.scrollBy({
  	          top: rectDelta.y,
  	          left: rectDelta.x
  	        });
  	      }
  	    }
  	  }, [activeNode, x, y, initialRect, measure]);
  	}

  	const ActiveDraggableContext = /*#__PURE__*/React.createContext({ ...defaultCoordinates,
  	  scaleX: 1,
  	  scaleY: 1
  	});
  	var Status;

  	(function (Status) {
  	  Status[Status["Uninitialized"] = 0] = "Uninitialized";
  	  Status[Status["Initializing"] = 1] = "Initializing";
  	  Status[Status["Initialized"] = 2] = "Initialized";
  	})(Status || (Status = {}));

  	const DndContext = /*#__PURE__*/React.memo(function DndContext(_ref) {
  	  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  	  let {
  	    id,
  	    accessibility,
  	    autoScroll = true,
  	    children,
  	    sensors = defaultSensors,
  	    collisionDetection = rectIntersection,
  	    measuring,
  	    modifiers,
  	    ...props
  	  } = _ref;
  	  const store = React.useReducer(reducer, undefined, getInitialState);
  	  const [state, dispatch] = store;
  	  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  	  const [status, setStatus] = React.useState(Status.Uninitialized);
  	  const isInitialized = status === Status.Initialized;
  	  const {
  	    draggable: {
  	      active: activeId,
  	      nodes: draggableNodes,
  	      translate
  	    },
  	    droppable: {
  	      containers: droppableContainers
  	    }
  	  } = state;
  	  const node = activeId != null ? draggableNodes.get(activeId) : null;
  	  const activeRects = React.useRef({
  	    initial: null,
  	    translated: null
  	  });
  	  const active = React.useMemo(() => {
  	    var _node$data;

  	    return activeId != null ? {
  	      id: activeId,
  	      // It's possible for the active node to unmount while dragging
  	      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
  	      rect: activeRects
  	    } : null;
  	  }, [activeId, node]);
  	  const activeRef = React.useRef(null);
  	  const [activeSensor, setActiveSensor] = React.useState(null);
  	  const [activatorEvent, setActivatorEvent] = React.useState(null);
  	  const latestProps = utilities.useLatestValue(props, Object.values(props));
  	  const draggableDescribedById = utilities.useUniqueId("DndDescribedBy", id);
  	  const enabledDroppableContainers = React.useMemo(() => droppableContainers.getEnabled(), [droppableContainers]);
  	  const measuringConfiguration = useMeasuringConfiguration(measuring);
  	  const {
  	    droppableRects,
  	    measureDroppableContainers,
  	    measuringScheduled
  	  } = useDroppableMeasuring(enabledDroppableContainers, {
  	    dragging: isInitialized,
  	    dependencies: [translate.x, translate.y],
  	    config: measuringConfiguration.droppable
  	  });
  	  const activeNode = useCachedNode(draggableNodes, activeId);
  	  const activationCoordinates = React.useMemo(() => activatorEvent ? utilities.getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  	  const autoScrollOptions = getAutoScrollerOptions();
  	  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  	  useLayoutShiftScrollCompensation({
  	    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
  	    config: autoScrollOptions.layoutShiftCompensation,
  	    initialRect: initialActiveNodeRect,
  	    measure: measuringConfiguration.draggable.measure
  	  });
  	  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  	  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  	  const sensorContext = React.useRef({
  	    activatorEvent: null,
  	    active: null,
  	    activeNode,
  	    collisionRect: null,
  	    collisions: null,
  	    droppableRects,
  	    draggableNodes,
  	    draggingNode: null,
  	    draggingNodeRect: null,
  	    droppableContainers,
  	    over: null,
  	    scrollableAncestors: [],
  	    scrollAdjustedTranslate: null
  	  });
  	  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  	  const dragOverlay = useDragOverlayMeasuring({
  	    measure: measuringConfiguration.dragOverlay.measure
  	  }); // Use the rect of the drag overlay if it is mounted

  	  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  	  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  	  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
  	  // is only relevant when there is no drag overlay

  	  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node

  	  const windowRect = useWindowRect(draggingNode ? utilities.getWindow(draggingNode) : null); // Get scrollable ancestors of the dragging node

  	  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  	  const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers

  	  const modifiedTranslate = applyModifiers(modifiers, {
  	    transform: {
  	      x: translate.x - nodeRectDelta.x,
  	      y: translate.y - nodeRectDelta.y,
  	      scaleX: 1,
  	      scaleY: 1
  	    },
  	    activatorEvent,
  	    active,
  	    activeNodeRect,
  	    containerNodeRect,
  	    draggingNodeRect,
  	    over: sensorContext.current.over,
  	    overlayNodeRect: dragOverlay.rect,
  	    scrollableAncestors,
  	    scrollableAncestorRects,
  	    windowRect
  	  });
  	  const pointerCoordinates = activationCoordinates ? utilities.add(activationCoordinates, translate) : null;
  	  const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated

  	  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured

  	  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  	  const scrollAdjustedTranslate = utilities.add(modifiedTranslate, scrollAdjustment);
  	  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  	  const collisions = active && collisionRect ? collisionDetection({
  	    active,
  	    collisionRect,
  	    droppableRects,
  	    droppableContainers: enabledDroppableContainers,
  	    pointerCoordinates
  	  }) : null;
  	  const overId = getFirstCollision(collisions, 'id');
  	  const [over, setOver] = React.useState(null); // When there is no drag overlay used, we need to account for the
  	  // window scroll delta

  	  const appliedTranslate = usesDragOverlay ? modifiedTranslate : utilities.add(modifiedTranslate, activeNodeScrollDelta);
  	  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  	  const activeSensorRef = React.useRef(null);
  	  const instantiateSensor = React.useCallback((event, _ref2) => {
  	    let {
  	      sensor: Sensor,
  	      options
  	    } = _ref2;

  	    if (activeRef.current == null) {
  	      return;
  	    }

  	    const activeNode = draggableNodes.get(activeRef.current);

  	    if (!activeNode) {
  	      return;
  	    }

  	    const activatorEvent = event.nativeEvent;
  	    const sensorInstance = new Sensor({
  	      active: activeRef.current,
  	      activeNode,
  	      event: activatorEvent,
  	      options,
  	      // Sensors need to be instantiated with refs for arguments that change over time
  	      // otherwise they are frozen in time with the stale arguments
  	      context: sensorContext,

  	      onAbort(id) {
  	        const draggableNode = draggableNodes.get(id);

  	        if (!draggableNode) {
  	          return;
  	        }

  	        const {
  	          onDragAbort
  	        } = latestProps.current;
  	        const event = {
  	          id
  	        };
  	        onDragAbort == null ? void 0 : onDragAbort(event);
  	        dispatchMonitorEvent({
  	          type: 'onDragAbort',
  	          event
  	        });
  	      },

  	      onPending(id, constraint, initialCoordinates, offset) {
  	        const draggableNode = draggableNodes.get(id);

  	        if (!draggableNode) {
  	          return;
  	        }

  	        const {
  	          onDragPending
  	        } = latestProps.current;
  	        const event = {
  	          id,
  	          constraint,
  	          initialCoordinates,
  	          offset
  	        };
  	        onDragPending == null ? void 0 : onDragPending(event);
  	        dispatchMonitorEvent({
  	          type: 'onDragPending',
  	          event
  	        });
  	      },

  	      onStart(initialCoordinates) {
  	        const id = activeRef.current;

  	        if (id == null) {
  	          return;
  	        }

  	        const draggableNode = draggableNodes.get(id);

  	        if (!draggableNode) {
  	          return;
  	        }

  	        const {
  	          onDragStart
  	        } = latestProps.current;
  	        const event = {
  	          activatorEvent,
  	          active: {
  	            id,
  	            data: draggableNode.data,
  	            rect: activeRects
  	          }
  	        };
  	        reactDom.unstable_batchedUpdates(() => {
  	          onDragStart == null ? void 0 : onDragStart(event);
  	          setStatus(Status.Initializing);
  	          dispatch({
  	            type: Action.DragStart,
  	            initialCoordinates,
  	            active: id
  	          });
  	          dispatchMonitorEvent({
  	            type: 'onDragStart',
  	            event
  	          });
  	          setActiveSensor(activeSensorRef.current);
  	          setActivatorEvent(activatorEvent);
  	        });
  	      },

  	      onMove(coordinates) {
  	        dispatch({
  	          type: Action.DragMove,
  	          coordinates
  	        });
  	      },

  	      onEnd: createHandler(Action.DragEnd),
  	      onCancel: createHandler(Action.DragCancel)
  	    });
  	    activeSensorRef.current = sensorInstance;

  	    function createHandler(type) {
  	      return async function handler() {
  	        const {
  	          active,
  	          collisions,
  	          over,
  	          scrollAdjustedTranslate
  	        } = sensorContext.current;
  	        let event = null;

  	        if (active && scrollAdjustedTranslate) {
  	          const {
  	            cancelDrop
  	          } = latestProps.current;
  	          event = {
  	            activatorEvent,
  	            active: active,
  	            collisions,
  	            delta: scrollAdjustedTranslate,
  	            over
  	          };

  	          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
  	            const shouldCancel = await Promise.resolve(cancelDrop(event));

  	            if (shouldCancel) {
  	              type = Action.DragCancel;
  	            }
  	          }
  	        }

  	        activeRef.current = null;
  	        reactDom.unstable_batchedUpdates(() => {
  	          dispatch({
  	            type
  	          });
  	          setStatus(Status.Uninitialized);
  	          setOver(null);
  	          setActiveSensor(null);
  	          setActivatorEvent(null);
  	          activeSensorRef.current = null;
  	          const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';

  	          if (event) {
  	            const handler = latestProps.current[eventName];
  	            handler == null ? void 0 : handler(event);
  	            dispatchMonitorEvent({
  	              type: eventName,
  	              event
  	            });
  	          }
  	        });
  	      };
  	    }
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [draggableNodes]);
  	  const bindActivatorToSensorInstantiator = React.useCallback((handler, sensor) => {
  	    return (event, active) => {
  	      const nativeEvent = event.nativeEvent;
  	      const activeDraggableNode = draggableNodes.get(active);

  	      if ( // Another sensor is already instantiating
  	      activeRef.current !== null || // No active draggable
  	      !activeDraggableNode || // Event has already been captured
  	      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
  	        return;
  	      }

  	      const activationContext = {
  	        active: activeDraggableNode
  	      };
  	      const shouldActivate = handler(event, sensor.options, activationContext);

  	      if (shouldActivate === true) {
  	        nativeEvent.dndKit = {
  	          capturedBy: sensor.sensor
  	        };
  	        activeRef.current = active;
  	        instantiateSensor(event, sensor);
  	      }
  	    };
  	  }, [draggableNodes, instantiateSensor]);
  	  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  	  useSensorSetup(sensors);
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    if (activeNodeRect && status === Status.Initializing) {
  	      setStatus(Status.Initialized);
  	    }
  	  }, [activeNodeRect, status]);
  	  React.useEffect(() => {
  	    const {
  	      onDragMove
  	    } = latestProps.current;
  	    const {
  	      active,
  	      activatorEvent,
  	      collisions,
  	      over
  	    } = sensorContext.current;

  	    if (!active || !activatorEvent) {
  	      return;
  	    }

  	    const event = {
  	      active,
  	      activatorEvent,
  	      collisions,
  	      delta: {
  	        x: scrollAdjustedTranslate.x,
  	        y: scrollAdjustedTranslate.y
  	      },
  	      over
  	    };
  	    reactDom.unstable_batchedUpdates(() => {
  	      onDragMove == null ? void 0 : onDragMove(event);
  	      dispatchMonitorEvent({
  	        type: 'onDragMove',
  	        event
  	      });
  	    });
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  	  React.useEffect(() => {
  	    const {
  	      active,
  	      activatorEvent,
  	      collisions,
  	      droppableContainers,
  	      scrollAdjustedTranslate
  	    } = sensorContext.current;

  	    if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
  	      return;
  	    }

  	    const {
  	      onDragOver
  	    } = latestProps.current;
  	    const overContainer = droppableContainers.get(overId);
  	    const over = overContainer && overContainer.rect.current ? {
  	      id: overContainer.id,
  	      rect: overContainer.rect.current,
  	      data: overContainer.data,
  	      disabled: overContainer.disabled
  	    } : null;
  	    const event = {
  	      active,
  	      activatorEvent,
  	      collisions,
  	      delta: {
  	        x: scrollAdjustedTranslate.x,
  	        y: scrollAdjustedTranslate.y
  	      },
  	      over
  	    };
  	    reactDom.unstable_batchedUpdates(() => {
  	      setOver(over);
  	      onDragOver == null ? void 0 : onDragOver(event);
  	      dispatchMonitorEvent({
  	        type: 'onDragOver',
  	        event
  	      });
  	    });
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [overId]);
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    sensorContext.current = {
  	      activatorEvent,
  	      active,
  	      activeNode,
  	      collisionRect,
  	      collisions,
  	      droppableRects,
  	      draggableNodes,
  	      draggingNode,
  	      draggingNodeRect,
  	      droppableContainers,
  	      over,
  	      scrollableAncestors,
  	      scrollAdjustedTranslate
  	    };
  	    activeRects.current = {
  	      initial: draggingNodeRect,
  	      translated: collisionRect
  	    };
  	  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  	  useAutoScroller({ ...autoScrollOptions,
  	    delta: translate,
  	    draggingRect: collisionRect,
  	    pointerCoordinates,
  	    scrollableAncestors,
  	    scrollableAncestorRects
  	  });
  	  const publicContext = React.useMemo(() => {
  	    const context = {
  	      active,
  	      activeNode,
  	      activeNodeRect,
  	      activatorEvent,
  	      collisions,
  	      containerNodeRect,
  	      dragOverlay,
  	      draggableNodes,
  	      droppableContainers,
  	      droppableRects,
  	      over,
  	      measureDroppableContainers,
  	      scrollableAncestors,
  	      scrollableAncestorRects,
  	      measuringConfiguration,
  	      measuringScheduled,
  	      windowRect
  	    };
  	    return context;
  	  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  	  const internalContext = React.useMemo(() => {
  	    const context = {
  	      activatorEvent,
  	      activators,
  	      active,
  	      activeNodeRect,
  	      ariaDescribedById: {
  	        draggable: draggableDescribedById
  	      },
  	      dispatch,
  	      draggableNodes,
  	      over,
  	      measureDroppableContainers
  	    };
  	    return context;
  	  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  	  return React__default.createElement(DndMonitorContext.Provider, {
  	    value: registerMonitorListener
  	  }, React__default.createElement(InternalContext.Provider, {
  	    value: internalContext
  	  }, React__default.createElement(PublicContext.Provider, {
  	    value: publicContext
  	  }, React__default.createElement(ActiveDraggableContext.Provider, {
  	    value: transform
  	  }, children)), React__default.createElement(RestoreFocus, {
  	    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  	  })), React__default.createElement(Accessibility, { ...accessibility,
  	    hiddenTextDescribedById: draggableDescribedById
  	  }));

  	  function getAutoScrollerOptions() {
  	    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
  	    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
  	    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

  	    if (typeof autoScroll === 'object') {
  	      return { ...autoScroll,
  	        enabled
  	      };
  	    }

  	    return {
  	      enabled
  	    };
  	  }
  	});

  	const NullContext = /*#__PURE__*/React.createContext(null);
  	const defaultRole = 'button';
  	const ID_PREFIX = 'Draggable';
  	function useDraggable(_ref) {
  	  let {
  	    id,
  	    data,
  	    disabled = false,
  	    attributes
  	  } = _ref;
  	  const key = utilities.useUniqueId(ID_PREFIX);
  	  const {
  	    activators,
  	    activatorEvent,
  	    active,
  	    activeNodeRect,
  	    ariaDescribedById,
  	    draggableNodes,
  	    over
  	  } = React.useContext(InternalContext);
  	  const {
  	    role = defaultRole,
  	    roleDescription = 'draggable',
  	    tabIndex = 0
  	  } = attributes != null ? attributes : {};
  	  const isDragging = (active == null ? void 0 : active.id) === id;
  	  const transform = React.useContext(isDragging ? ActiveDraggableContext : NullContext);
  	  const [node, setNodeRef] = utilities.useNodeRef();
  	  const [activatorNode, setActivatorNodeRef] = utilities.useNodeRef();
  	  const listeners = useSyntheticListeners(activators, id);
  	  const dataRef = utilities.useLatestValue(data);
  	  utilities.useIsomorphicLayoutEffect(() => {
  	    draggableNodes.set(id, {
  	      id,
  	      key,
  	      node,
  	      activatorNode,
  	      data: dataRef
  	    });
  	    return () => {
  	      const node = draggableNodes.get(id);

  	      if (node && node.key === key) {
  	        draggableNodes.delete(id);
  	      }
  	    };
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [draggableNodes, id]);
  	  const memoizedAttributes = React.useMemo(() => ({
  	    role,
  	    tabIndex,
  	    'aria-disabled': disabled,
  	    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
  	    'aria-roledescription': roleDescription,
  	    'aria-describedby': ariaDescribedById.draggable
  	  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  	  return {
  	    active,
  	    activatorEvent,
  	    activeNodeRect,
  	    attributes: memoizedAttributes,
  	    isDragging,
  	    listeners: disabled ? undefined : listeners,
  	    node,
  	    over,
  	    setNodeRef,
  	    setActivatorNodeRef,
  	    transform
  	  };
  	}

  	function useDndContext() {
  	  return React.useContext(PublicContext);
  	}

  	const ID_PREFIX$1 = 'Droppable';
  	const defaultResizeObserverConfig = {
  	  timeout: 25
  	};
  	function useDroppable(_ref) {
  	  let {
  	    data,
  	    disabled = false,
  	    id,
  	    resizeObserverConfig
  	  } = _ref;
  	  const key = utilities.useUniqueId(ID_PREFIX$1);
  	  const {
  	    active,
  	    dispatch,
  	    over,
  	    measureDroppableContainers
  	  } = React.useContext(InternalContext);
  	  const previous = React.useRef({
  	    disabled
  	  });
  	  const resizeObserverConnected = React.useRef(false);
  	  const rect = React.useRef(null);
  	  const callbackId = React.useRef(null);
  	  const {
  	    disabled: resizeObserverDisabled,
  	    updateMeasurementsFor,
  	    timeout: resizeObserverTimeout
  	  } = { ...defaultResizeObserverConfig,
  	    ...resizeObserverConfig
  	  };
  	  const ids = utilities.useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  	  const handleResize = React.useCallback(() => {
  	    if (!resizeObserverConnected.current) {
  	      // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
  	      // assuming the element is rendered and displayed.
  	      resizeObserverConnected.current = true;
  	      return;
  	    }

  	    if (callbackId.current != null) {
  	      clearTimeout(callbackId.current);
  	    }

  	    callbackId.current = setTimeout(() => {
  	      measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
  	      callbackId.current = null;
  	    }, resizeObserverTimeout);
  	  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  	  [resizeObserverTimeout]);
  	  const resizeObserver = useResizeObserver({
  	    callback: handleResize,
  	    disabled: resizeObserverDisabled || !active
  	  });
  	  const handleNodeChange = React.useCallback((newElement, previousElement) => {
  	    if (!resizeObserver) {
  	      return;
  	    }

  	    if (previousElement) {
  	      resizeObserver.unobserve(previousElement);
  	      resizeObserverConnected.current = false;
  	    }

  	    if (newElement) {
  	      resizeObserver.observe(newElement);
  	    }
  	  }, [resizeObserver]);
  	  const [nodeRef, setNodeRef] = utilities.useNodeRef(handleNodeChange);
  	  const dataRef = utilities.useLatestValue(data);
  	  React.useEffect(() => {
  	    if (!resizeObserver || !nodeRef.current) {
  	      return;
  	    }

  	    resizeObserver.disconnect();
  	    resizeObserverConnected.current = false;
  	    resizeObserver.observe(nodeRef.current);
  	  }, [nodeRef, resizeObserver]);
  	  React.useEffect(() => {
  	    dispatch({
  	      type: Action.RegisterDroppable,
  	      element: {
  	        id,
  	        key,
  	        disabled,
  	        node: nodeRef,
  	        rect,
  	        data: dataRef
  	      }
  	    });
  	    return () => dispatch({
  	      type: Action.UnregisterDroppable,
  	      key,
  	      id
  	    });
  	  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  	  [id]);
  	  React.useEffect(() => {
  	    if (disabled !== previous.current.disabled) {
  	      dispatch({
  	        type: Action.SetDroppableDisabled,
  	        id,
  	        key,
  	        disabled
  	      });
  	      previous.current.disabled = disabled;
  	    }
  	  }, [id, key, disabled, dispatch]);
  	  return {
  	    active,
  	    rect,
  	    isOver: (over == null ? void 0 : over.id) === id,
  	    node: nodeRef,
  	    over,
  	    setNodeRef
  	  };
  	}

  	function AnimationManager(_ref) {
  	  let {
  	    animation,
  	    children
  	  } = _ref;
  	  const [clonedChildren, setClonedChildren] = React.useState(null);
  	  const [element, setElement] = React.useState(null);
  	  const previousChildren = utilities.usePrevious(children);

  	  if (!children && !clonedChildren && previousChildren) {
  	    setClonedChildren(previousChildren);
  	  }

  	  utilities.useIsomorphicLayoutEffect(() => {
  	    if (!element) {
  	      return;
  	    }

  	    const key = clonedChildren == null ? void 0 : clonedChildren.key;
  	    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;

  	    if (key == null || id == null) {
  	      setClonedChildren(null);
  	      return;
  	    }

  	    Promise.resolve(animation(id, element)).then(() => {
  	      setClonedChildren(null);
  	    });
  	  }, [animation, clonedChildren, element]);
  	  return React__default.createElement(React__default.Fragment, null, children, clonedChildren ? React.cloneElement(clonedChildren, {
  	    ref: setElement
  	  }) : null);
  	}

  	const defaultTransform = {
  	  x: 0,
  	  y: 0,
  	  scaleX: 1,
  	  scaleY: 1
  	};
  	function NullifiedContextProvider(_ref) {
  	  let {
  	    children
  	  } = _ref;
  	  return React__default.createElement(InternalContext.Provider, {
  	    value: defaultInternalContext
  	  }, React__default.createElement(ActiveDraggableContext.Provider, {
  	    value: defaultTransform
  	  }, children));
  	}

  	const baseStyles = {
  	  position: 'fixed',
  	  touchAction: 'none'
  	};

  	const defaultTransition = activatorEvent => {
  	  const isKeyboardActivator = utilities.isKeyboardEvent(activatorEvent);
  	  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
  	};

  	const PositionedOverlay = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  	  let {
  	    as,
  	    activatorEvent,
  	    adjustScale,
  	    children,
  	    className,
  	    rect,
  	    style,
  	    transform,
  	    transition = defaultTransition
  	  } = _ref;

  	  if (!rect) {
  	    return null;
  	  }

  	  const scaleAdjustedTransform = adjustScale ? transform : { ...transform,
  	    scaleX: 1,
  	    scaleY: 1
  	  };
  	  const styles = { ...baseStyles,
  	    width: rect.width,
  	    height: rect.height,
  	    top: rect.top,
  	    left: rect.left,
  	    transform: utilities.CSS.Transform.toString(scaleAdjustedTransform),
  	    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
  	    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
  	    ...style
  	  };
  	  return React__default.createElement(as, {
  	    className,
  	    style: styles,
  	    ref
  	  }, children);
  	});

  	const defaultDropAnimationSideEffects = options => _ref => {
  	  let {
  	    active,
  	    dragOverlay
  	  } = _ref;
  	  const originalStyles = {};
  	  const {
  	    styles,
  	    className
  	  } = options;

  	  if (styles != null && styles.active) {
  	    for (const [key, value] of Object.entries(styles.active)) {
  	      if (value === undefined) {
  	        continue;
  	      }

  	      originalStyles[key] = active.node.style.getPropertyValue(key);
  	      active.node.style.setProperty(key, value);
  	    }
  	  }

  	  if (styles != null && styles.dragOverlay) {
  	    for (const [key, value] of Object.entries(styles.dragOverlay)) {
  	      if (value === undefined) {
  	        continue;
  	      }

  	      dragOverlay.node.style.setProperty(key, value);
  	    }
  	  }

  	  if (className != null && className.active) {
  	    active.node.classList.add(className.active);
  	  }

  	  if (className != null && className.dragOverlay) {
  	    dragOverlay.node.classList.add(className.dragOverlay);
  	  }

  	  return function cleanup() {
  	    for (const [key, value] of Object.entries(originalStyles)) {
  	      active.node.style.setProperty(key, value);
  	    }

  	    if (className != null && className.active) {
  	      active.node.classList.remove(className.active);
  	    }
  	  };
  	};

  	const defaultKeyframeResolver = _ref2 => {
  	  let {
  	    transform: {
  	      initial,
  	      final
  	    }
  	  } = _ref2;
  	  return [{
  	    transform: utilities.CSS.Transform.toString(initial)
  	  }, {
  	    transform: utilities.CSS.Transform.toString(final)
  	  }];
  	};

  	const defaultDropAnimationConfiguration = {
  	  duration: 250,
  	  easing: 'ease',
  	  keyframes: defaultKeyframeResolver,
  	  sideEffects: /*#__PURE__*/defaultDropAnimationSideEffects({
  	    styles: {
  	      active: {
  	        opacity: '0'
  	      }
  	    }
  	  })
  	};
  	function useDropAnimation(_ref3) {
  	  let {
  	    config,
  	    draggableNodes,
  	    droppableContainers,
  	    measuringConfiguration
  	  } = _ref3;
  	  return utilities.useEvent((id, node) => {
  	    if (config === null) {
  	      return;
  	    }

  	    const activeDraggable = draggableNodes.get(id);

  	    if (!activeDraggable) {
  	      return;
  	    }

  	    const activeNode = activeDraggable.node.current;

  	    if (!activeNode) {
  	      return;
  	    }

  	    const measurableNode = getMeasurableNode(node);

  	    if (!measurableNode) {
  	      return;
  	    }

  	    const {
  	      transform
  	    } = utilities.getWindow(node).getComputedStyle(node);
  	    const parsedTransform = parseTransform(transform);

  	    if (!parsedTransform) {
  	      return;
  	    }

  	    const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
  	    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
  	    return animation({
  	      active: {
  	        id,
  	        data: activeDraggable.data,
  	        node: activeNode,
  	        rect: measuringConfiguration.draggable.measure(activeNode)
  	      },
  	      draggableNodes,
  	      dragOverlay: {
  	        node,
  	        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
  	      },
  	      droppableContainers,
  	      measuringConfiguration,
  	      transform: parsedTransform
  	    });
  	  });
  	}

  	function createDefaultDropAnimation(options) {
  	  const {
  	    duration,
  	    easing,
  	    sideEffects,
  	    keyframes
  	  } = { ...defaultDropAnimationConfiguration,
  	    ...options
  	  };
  	  return _ref4 => {
  	    let {
  	      active,
  	      dragOverlay,
  	      transform,
  	      ...rest
  	    } = _ref4;

  	    if (!duration) {
  	      // Do not animate if animation duration is zero.
  	      return;
  	    }

  	    const delta = {
  	      x: dragOverlay.rect.left - active.rect.left,
  	      y: dragOverlay.rect.top - active.rect.top
  	    };
  	    const scale = {
  	      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
  	      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
  	    };
  	    const finalTransform = {
  	      x: transform.x - delta.x,
  	      y: transform.y - delta.y,
  	      ...scale
  	    };
  	    const animationKeyframes = keyframes({ ...rest,
  	      active,
  	      dragOverlay,
  	      transform: {
  	        initial: transform,
  	        final: finalTransform
  	      }
  	    });
  	    const [firstKeyframe] = animationKeyframes;
  	    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];

  	    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
  	      // The start and end keyframes are the same, infer that there is no animation needed.
  	      return;
  	    }

  	    const cleanup = sideEffects == null ? void 0 : sideEffects({
  	      active,
  	      dragOverlay,
  	      ...rest
  	    });
  	    const animation = dragOverlay.node.animate(animationKeyframes, {
  	      duration,
  	      easing,
  	      fill: 'forwards'
  	    });
  	    return new Promise(resolve => {
  	      animation.onfinish = () => {
  	        cleanup == null ? void 0 : cleanup();
  	        resolve();
  	      };
  	    });
  	  };
  	}

  	let key = 0;
  	function useKey(id) {
  	  return React.useMemo(() => {
  	    if (id == null) {
  	      return;
  	    }

  	    key++;
  	    return key;
  	  }, [id]);
  	}

  	const DragOverlay = /*#__PURE__*/React__default.memo(_ref => {
  	  let {
  	    adjustScale = false,
  	    children,
  	    dropAnimation: dropAnimationConfig,
  	    style,
  	    transition,
  	    modifiers,
  	    wrapperElement = 'div',
  	    className,
  	    zIndex = 999
  	  } = _ref;
  	  const {
  	    activatorEvent,
  	    active,
  	    activeNodeRect,
  	    containerNodeRect,
  	    draggableNodes,
  	    droppableContainers,
  	    dragOverlay,
  	    over,
  	    measuringConfiguration,
  	    scrollableAncestors,
  	    scrollableAncestorRects,
  	    windowRect
  	  } = useDndContext();
  	  const transform = React.useContext(ActiveDraggableContext);
  	  const key = useKey(active == null ? void 0 : active.id);
  	  const modifiedTransform = applyModifiers(modifiers, {
  	    activatorEvent,
  	    active,
  	    activeNodeRect,
  	    containerNodeRect,
  	    draggingNodeRect: dragOverlay.rect,
  	    over,
  	    overlayNodeRect: dragOverlay.rect,
  	    scrollableAncestors,
  	    scrollableAncestorRects,
  	    transform,
  	    windowRect
  	  });
  	  const initialRect = useInitialValue(activeNodeRect);
  	  const dropAnimation = useDropAnimation({
  	    config: dropAnimationConfig,
  	    draggableNodes,
  	    droppableContainers,
  	    measuringConfiguration
  	  }); // We need to wait for the active node to be measured before connecting the drag overlay ref
  	  // otherwise collisions can be computed against a mispositioned drag overlay

  	  const ref = initialRect ? dragOverlay.setRef : undefined;
  	  return React__default.createElement(NullifiedContextProvider, null, React__default.createElement(AnimationManager, {
  	    animation: dropAnimation
  	  }, active && key ? React__default.createElement(PositionedOverlay, {
  	    key: key,
  	    id: active.id,
  	    ref: ref,
  	    as: wrapperElement,
  	    activatorEvent: activatorEvent,
  	    adjustScale: adjustScale,
  	    className: className,
  	    transition: transition,
  	    rect: initialRect,
  	    style: {
  	      zIndex,
  	      ...style
  	    },
  	    transform: modifiedTransform
  	  }, children) : null));
  	});

  	exports.DndContext = DndContext;
  	exports.DragOverlay = DragOverlay;
  	exports.KeyboardSensor = KeyboardSensor;
  	exports.MouseSensor = MouseSensor;
  	exports.PointerSensor = PointerSensor;
  	exports.TouchSensor = TouchSensor;
  	exports.applyModifiers = applyModifiers;
  	exports.closestCenter = closestCenter;
  	exports.closestCorners = closestCorners;
  	exports.defaultAnnouncements = defaultAnnouncements;
  	exports.defaultCoordinates = defaultCoordinates;
  	exports.defaultDropAnimation = defaultDropAnimationConfiguration;
  	exports.defaultDropAnimationSideEffects = defaultDropAnimationSideEffects;
  	exports.defaultKeyboardCoordinateGetter = defaultKeyboardCoordinateGetter;
  	exports.defaultScreenReaderInstructions = defaultScreenReaderInstructions;
  	exports.getClientRect = getClientRect;
  	exports.getFirstCollision = getFirstCollision;
  	exports.getScrollableAncestors = getScrollableAncestors;
  	exports.pointerWithin = pointerWithin;
  	exports.rectIntersection = rectIntersection;
  	exports.useDndContext = useDndContext;
  	exports.useDndMonitor = useDndMonitor;
  	exports.useDraggable = useDraggable;
  	exports.useDroppable = useDroppable;
  	exports.useSensor = useSensor;
  	exports.useSensors = useSensors;
  	
  } (core_cjs_development));

  {
    dist$3.exports = core_cjs_development;
  }

  var distExports$1 = dist$3.exports;

  var dist = {exports: {}};

  var sortable_cjs_development = {};

  Object.defineProperty(sortable_cjs_development, '__esModule', { value: true });

  function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var React = React__default$2.default;
  var React__default = _interopDefault$1(React);
  var core = distExports$1;
  var utilities = distExports$3;

  /**
   * Move an array item to a different position. Returns a new array with the item moved to the new position.
   */
  function arrayMove(array, from, to) {
    const newArray = array.slice();
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
    return newArray;
  }

  /**
   * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
   */
  function arraySwap(array, from, to) {
    const newArray = array.slice();
    newArray[from] = array[to];
    newArray[to] = array[from];
    return newArray;
  }

  function getSortedRects(items, rects) {
    return items.reduce((accumulator, id, index) => {
      const rect = rects.get(id);

      if (rect) {
        accumulator[index] = rect;
      }

      return accumulator;
    }, Array(items.length));
  }

  function isValidIndex(index) {
    return index !== null && index >= 0;
  }

  function itemsEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  function normalizeDisabled(disabled) {
    if (typeof disabled === 'boolean') {
      return {
        draggable: disabled,
        droppable: disabled
      };
    }

    return disabled;
  }

  // To-do: We should be calculating scale transformation
  const defaultScale = {
    scaleX: 1,
    scaleY: 1
  };
  const horizontalListSortingStrategy = _ref => {
    var _rects$activeIndex;

    let {
      rects,
      activeNodeRect: fallbackActiveRect,
      activeIndex,
      overIndex,
      index
    } = _ref;
    const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

    if (!activeNodeRect) {
      return null;
    }

    const itemGap = getItemGap(rects, index, activeIndex);

    if (index === activeIndex) {
      const newIndexRect = rects[overIndex];

      if (!newIndexRect) {
        return null;
      }

      return {
        x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
        y: 0,
        ...defaultScale
      };
    }

    if (index > activeIndex && index <= overIndex) {
      return {
        x: -activeNodeRect.width - itemGap,
        y: 0,
        ...defaultScale
      };
    }

    if (index < activeIndex && index >= overIndex) {
      return {
        x: activeNodeRect.width + itemGap,
        y: 0,
        ...defaultScale
      };
    }

    return {
      x: 0,
      y: 0,
      ...defaultScale
    };
  };

  function getItemGap(rects, index, activeIndex) {
    const currentRect = rects[index];
    const previousRect = rects[index - 1];
    const nextRect = rects[index + 1];

    if (!currentRect || !previousRect && !nextRect) {
      return 0;
    }

    if (activeIndex < index) {
      return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
    }

    return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
  }

  const rectSortingStrategy = _ref => {
    let {
      rects,
      activeIndex,
      overIndex,
      index
    } = _ref;
    const newRects = arrayMove(rects, overIndex, activeIndex);
    const oldRect = rects[index];
    const newRect = newRects[index];

    if (!newRect || !oldRect) {
      return null;
    }

    return {
      x: newRect.left - oldRect.left,
      y: newRect.top - oldRect.top,
      scaleX: newRect.width / oldRect.width,
      scaleY: newRect.height / oldRect.height
    };
  };

  const rectSwappingStrategy = _ref => {
    let {
      activeIndex,
      index,
      rects,
      overIndex
    } = _ref;
    let oldRect;
    let newRect;

    if (index === activeIndex) {
      oldRect = rects[index];
      newRect = rects[overIndex];
    }

    if (index === overIndex) {
      oldRect = rects[index];
      newRect = rects[activeIndex];
    }

    if (!newRect || !oldRect) {
      return null;
    }

    return {
      x: newRect.left - oldRect.left,
      y: newRect.top - oldRect.top,
      scaleX: newRect.width / oldRect.width,
      scaleY: newRect.height / oldRect.height
    };
  };

  // To-do: We should be calculating scale transformation
  const defaultScale$1 = {
    scaleX: 1,
    scaleY: 1
  };
  const verticalListSortingStrategy = _ref => {
    var _rects$activeIndex;

    let {
      activeIndex,
      activeNodeRect: fallbackActiveRect,
      index,
      rects,
      overIndex
    } = _ref;
    const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

    if (!activeNodeRect) {
      return null;
    }

    if (index === activeIndex) {
      const overIndexRect = rects[overIndex];

      if (!overIndexRect) {
        return null;
      }

      return {
        x: 0,
        y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
        ...defaultScale$1
      };
    }

    const itemGap = getItemGap$1(rects, index, activeIndex);

    if (index > activeIndex && index <= overIndex) {
      return {
        x: 0,
        y: -activeNodeRect.height - itemGap,
        ...defaultScale$1
      };
    }

    if (index < activeIndex && index >= overIndex) {
      return {
        x: 0,
        y: activeNodeRect.height + itemGap,
        ...defaultScale$1
      };
    }

    return {
      x: 0,
      y: 0,
      ...defaultScale$1
    };
  };

  function getItemGap$1(clientRects, index, activeIndex) {
    const currentRect = clientRects[index];
    const previousRect = clientRects[index - 1];
    const nextRect = clientRects[index + 1];

    if (!currentRect) {
      return 0;
    }

    if (activeIndex < index) {
      return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
    }

    return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
  }

  const ID_PREFIX = 'Sortable';
  const Context = /*#__PURE__*/React__default.createContext({
    activeIndex: -1,
    containerId: ID_PREFIX,
    disableTransforms: false,
    items: [],
    overIndex: -1,
    useDragOverlay: false,
    sortedRects: [],
    strategy: rectSortingStrategy,
    disabled: {
      draggable: false,
      droppable: false
    }
  });
  function SortableContext(_ref) {
    let {
      children,
      id,
      items: userDefinedItems,
      strategy = rectSortingStrategy,
      disabled: disabledProp = false
    } = _ref;
    const {
      active,
      dragOverlay,
      droppableRects,
      over,
      measureDroppableContainers
    } = core.useDndContext();
    const containerId = utilities.useUniqueId(ID_PREFIX, id);
    const useDragOverlay = Boolean(dragOverlay.rect !== null);
    const items = React.useMemo(() => userDefinedItems.map(item => typeof item === 'object' && 'id' in item ? item.id : item), [userDefinedItems]);
    const isDragging = active != null;
    const activeIndex = active ? items.indexOf(active.id) : -1;
    const overIndex = over ? items.indexOf(over.id) : -1;
    const previousItemsRef = React.useRef(items);
    const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
    const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
    const disabled = normalizeDisabled(disabledProp);
    utilities.useIsomorphicLayoutEffect(() => {
      if (itemsHaveChanged && isDragging) {
        measureDroppableContainers(items);
      }
    }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
    React.useEffect(() => {
      previousItemsRef.current = items;
    }, [items]);
    const contextValue = React.useMemo(() => ({
      activeIndex,
      containerId,
      disabled,
      disableTransforms,
      items,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(items, droppableRects),
      strategy
    }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]);
    return React__default.createElement(Context.Provider, {
      value: contextValue
    }, children);
  }

  const defaultNewIndexGetter = _ref => {
    let {
      id,
      items,
      activeIndex,
      overIndex
    } = _ref;
    return arrayMove(items, activeIndex, overIndex).indexOf(id);
  };
  const defaultAnimateLayoutChanges = _ref2 => {
    let {
      containerId,
      isSorting,
      wasDragging,
      index,
      items,
      newIndex,
      previousItems,
      previousContainerId,
      transition
    } = _ref2;

    if (!transition || !wasDragging) {
      return false;
    }

    if (previousItems !== items && index === newIndex) {
      return false;
    }

    if (isSorting) {
      return true;
    }

    return newIndex !== index && containerId === previousContainerId;
  };
  const defaultTransition = {
    duration: 200,
    easing: 'ease'
  };
  const transitionProperty = 'transform';
  const disabledTransition = /*#__PURE__*/utilities.CSS.Transition.toString({
    property: transitionProperty,
    duration: 0,
    easing: 'linear'
  });
  const defaultAttributes = {
    roleDescription: 'sortable'
  };

  /*
   * When the index of an item changes while sorting,
   * we need to temporarily disable the transforms
   */

  function useDerivedTransform(_ref) {
    let {
      disabled,
      index,
      node,
      rect
    } = _ref;
    const [derivedTransform, setDerivedtransform] = React.useState(null);
    const previousIndex = React.useRef(index);
    utilities.useIsomorphicLayoutEffect(() => {
      if (!disabled && index !== previousIndex.current && node.current) {
        const initial = rect.current;

        if (initial) {
          const current = core.getClientRect(node.current, {
            ignoreTransform: true
          });
          const delta = {
            x: initial.left - current.left,
            y: initial.top - current.top,
            scaleX: initial.width / current.width,
            scaleY: initial.height / current.height
          };

          if (delta.x || delta.y) {
            setDerivedtransform(delta);
          }
        }
      }

      if (index !== previousIndex.current) {
        previousIndex.current = index;
      }
    }, [disabled, index, node, rect]);
    React.useEffect(() => {
      if (derivedTransform) {
        setDerivedtransform(null);
      }
    }, [derivedTransform]);
    return derivedTransform;
  }

  function useSortable(_ref) {
    let {
      animateLayoutChanges = defaultAnimateLayoutChanges,
      attributes: userDefinedAttributes,
      disabled: localDisabled,
      data: customData,
      getNewIndex = defaultNewIndexGetter,
      id,
      strategy: localStrategy,
      resizeObserverConfig,
      transition = defaultTransition
    } = _ref;
    const {
      items,
      containerId,
      activeIndex,
      disabled: globalDisabled,
      disableTransforms,
      sortedRects,
      overIndex,
      useDragOverlay,
      strategy: globalStrategy
    } = React.useContext(Context);
    const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
    const index = items.indexOf(id);
    const data = React.useMemo(() => ({
      sortable: {
        containerId,
        index,
        items
      },
      ...customData
    }), [containerId, customData, index, items]);
    const itemsAfterCurrentSortable = React.useMemo(() => items.slice(items.indexOf(id)), [items, id]);
    const {
      rect,
      node,
      isOver,
      setNodeRef: setDroppableNodeRef
    } = core.useDroppable({
      id,
      data,
      disabled: disabled.droppable,
      resizeObserverConfig: {
        updateMeasurementsFor: itemsAfterCurrentSortable,
        ...resizeObserverConfig
      }
    });
    const {
      active,
      activatorEvent,
      activeNodeRect,
      attributes,
      setNodeRef: setDraggableNodeRef,
      listeners,
      isDragging,
      over,
      setActivatorNodeRef,
      transform
    } = core.useDraggable({
      id,
      data,
      attributes: { ...defaultAttributes,
        ...userDefinedAttributes
      },
      disabled: disabled.draggable
    });
    const setNodeRef = utilities.useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
    const isSorting = Boolean(active);
    const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
    const shouldDisplaceDragSource = !useDragOverlay && isDragging;
    const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
    const strategy = localStrategy != null ? localStrategy : globalStrategy;
    const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
      rects: sortedRects,
      activeNodeRect,
      activeIndex,
      overIndex,
      index
    }) : null;
    const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
      id,
      items,
      activeIndex,
      overIndex
    }) : index;
    const activeId = active == null ? void 0 : active.id;
    const previous = React.useRef({
      activeId,
      items,
      newIndex,
      containerId
    });
    const itemsHaveChanged = items !== previous.current.items;
    const shouldAnimateLayoutChanges = animateLayoutChanges({
      active,
      containerId,
      isDragging,
      isSorting,
      id,
      index,
      items,
      newIndex: previous.current.newIndex,
      previousItems: previous.current.items,
      previousContainerId: previous.current.containerId,
      transition,
      wasDragging: previous.current.activeId != null
    });
    const derivedTransform = useDerivedTransform({
      disabled: !shouldAnimateLayoutChanges,
      index,
      node,
      rect
    });
    React.useEffect(() => {
      if (isSorting && previous.current.newIndex !== newIndex) {
        previous.current.newIndex = newIndex;
      }

      if (containerId !== previous.current.containerId) {
        previous.current.containerId = containerId;
      }

      if (items !== previous.current.items) {
        previous.current.items = items;
      }
    }, [isSorting, newIndex, containerId, items]);
    React.useEffect(() => {
      if (activeId === previous.current.activeId) {
        return;
      }

      if (activeId != null && previous.current.activeId == null) {
        previous.current.activeId = activeId;
        return;
      }

      const timeoutId = setTimeout(() => {
        previous.current.activeId = activeId;
      }, 50);
      return () => clearTimeout(timeoutId);
    }, [activeId]);
    return {
      active,
      activeIndex,
      attributes,
      data,
      rect,
      index,
      newIndex,
      items,
      isOver,
      isSorting,
      isDragging,
      listeners,
      node,
      overIndex,
      over,
      setNodeRef,
      setActivatorNodeRef,
      setDroppableNodeRef,
      setDraggableNodeRef,
      transform: derivedTransform != null ? derivedTransform : finalTransform,
      transition: getTransition()
    };

    function getTransition() {
      if ( // Temporarily disable transitions for a single frame to set up derived transforms
      derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
      itemsHaveChanged && previous.current.newIndex === index) {
        return disabledTransition;
      }

      if (shouldDisplaceDragSource && !utilities.isKeyboardEvent(activatorEvent) || !transition) {
        return undefined;
      }

      if (isSorting || shouldAnimateLayoutChanges) {
        return utilities.CSS.Transition.toString({ ...transition,
          property: transitionProperty
        });
      }

      return undefined;
    }
  }

  function normalizeLocalDisabled(localDisabled, globalDisabled) {
    var _localDisabled$dragga, _localDisabled$droppa;

    if (typeof localDisabled === 'boolean') {
      return {
        draggable: localDisabled,
        // Backwards compatibility
        droppable: false
      };
    }

    return {
      draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
      droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
    };
  }

  function hasSortableData(entry) {
    if (!entry) {
      return false;
    }

    const data = entry.data.current;

    if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
      return true;
    }

    return false;
  }

  const directions = [core.KeyboardCode.Down, core.KeyboardCode.Right, core.KeyboardCode.Up, core.KeyboardCode.Left];
  const sortableKeyboardCoordinates = (event, _ref) => {
    let {
      context: {
        active,
        collisionRect,
        droppableRects,
        droppableContainers,
        over,
        scrollableAncestors
      }
    } = _ref;

    if (directions.includes(event.code)) {
      event.preventDefault();

      if (!active || !collisionRect) {
        return;
      }

      const filteredContainers = [];
      droppableContainers.getEnabled().forEach(entry => {
        if (!entry || entry != null && entry.disabled) {
          return;
        }

        const rect = droppableRects.get(entry.id);

        if (!rect) {
          return;
        }

        switch (event.code) {
          case core.KeyboardCode.Down:
            if (collisionRect.top < rect.top) {
              filteredContainers.push(entry);
            }

            break;

          case core.KeyboardCode.Up:
            if (collisionRect.top > rect.top) {
              filteredContainers.push(entry);
            }

            break;

          case core.KeyboardCode.Left:
            if (collisionRect.left > rect.left) {
              filteredContainers.push(entry);
            }

            break;

          case core.KeyboardCode.Right:
            if (collisionRect.left < rect.left) {
              filteredContainers.push(entry);
            }

            break;
        }
      });
      const collisions = core.closestCorners({
        active,
        collisionRect: collisionRect,
        droppableRects,
        droppableContainers: filteredContainers,
        pointerCoordinates: null
      });
      let closestId = core.getFirstCollision(collisions, 'id');

      if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
        closestId = collisions[1].id;
      }

      if (closestId != null) {
        const activeDroppable = droppableContainers.get(active.id);
        const newDroppable = droppableContainers.get(closestId);
        const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
        const newNode = newDroppable == null ? void 0 : newDroppable.node.current;

        if (newNode && newRect && activeDroppable && newDroppable) {
          const newScrollAncestors = core.getScrollableAncestors(newNode);
          const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
          const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
          const isAfterActive = isAfter(activeDroppable, newDroppable);
          const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
            x: 0,
            y: 0
          } : {
            x: isAfterActive ? collisionRect.width - newRect.width : 0,
            y: isAfterActive ? collisionRect.height - newRect.height : 0
          };
          const rectCoordinates = {
            x: newRect.left,
            y: newRect.top
          };
          const newCoordinates = offset.x && offset.y ? rectCoordinates : utilities.subtract(rectCoordinates, offset);
          return newCoordinates;
        }
      }
    }

    return undefined;
  };

  function isSameContainer(a, b) {
    if (!hasSortableData(a) || !hasSortableData(b)) {
      return false;
    }

    return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
  }

  function isAfter(a, b) {
    if (!hasSortableData(a) || !hasSortableData(b)) {
      return false;
    }

    if (!isSameContainer(a, b)) {
      return false;
    }

    return a.data.current.sortable.index < b.data.current.sortable.index;
  }

  sortable_cjs_development.SortableContext = SortableContext;
  sortable_cjs_development.arrayMove = arrayMove;
  sortable_cjs_development.arraySwap = arraySwap;
  sortable_cjs_development.defaultAnimateLayoutChanges = defaultAnimateLayoutChanges;
  sortable_cjs_development.defaultNewIndexGetter = defaultNewIndexGetter;
  sortable_cjs_development.hasSortableData = hasSortableData;
  sortable_cjs_development.horizontalListSortingStrategy = horizontalListSortingStrategy;
  sortable_cjs_development.rectSortingStrategy = rectSortingStrategy;
  sortable_cjs_development.rectSwappingStrategy = rectSwappingStrategy;
  sortable_cjs_development.sortableKeyboardCoordinates = sortableKeyboardCoordinates;
  sortable_cjs_development.useSortable = useSortable;
  sortable_cjs_development.verticalListSortingStrategy = verticalListSortingStrategy;

  {
    dist.exports = sortable_cjs_development;
  }

  var distExports = dist.exports;

  // Tipos de blocos disponíveis

  // Componente para gerenciar blocos dentro de uma coluna
  const ColumnBlockManager = ({
    columnIndex,
    blocks,
    onUpdateBlocks
  }) => {
    const sensors = distExports$1.useSensors(distExports$1.useSensor(distExports$1.PointerSensor), distExports$1.useSensor(distExports$1.KeyboardSensor, {
      coordinateGetter: distExports.sortableKeyboardCoordinates
    }));
    const generateId = () => Math.random().toString(36).substr(2, 9);
    const addBlockToColumn = type => {
      const newBlock = {
        id: generateId(),
        type,
        content: '',
        attributes: {}
      };
      const updatedBlocks = [...blocks, newBlock];
      onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const updateColumnBlock = (id, content, attributes) => {
      const updatedBlocks = blocks.map(block => block.id === id ? {
        ...block,
        content,
        attributes: {
          ...block.attributes,
          ...attributes
        }
      } : block);
      onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const deleteColumnBlock = id => {
      const updatedBlocks = blocks.filter(block => block.id !== id);
      onUpdateBlocks(columnIndex, updatedBlocks);
    };
    const handleDragEnd = event => {
      const {
        active,
        over
      } = event;
      if (active.id !== over?.id) {
        const oldIndex = blocks.findIndex(block => block.id === active.id);
        const newIndex = blocks.findIndex(block => block.id === over?.id);
        const updatedBlocks = distExports.arrayMove(blocks, oldIndex, newIndex);
        onUpdateBlocks(columnIndex, updatedBlocks);
      }
    };
    return /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        padding: '8px',
        backgroundColor: '#f1f3f4',
        borderRadius: '4px',
        marginBottom: '8px',
        border: '1px solid #dadce0'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        fontSize: '10px',
        fontWeight: '600',
        marginBottom: '6px',
        color: '#5f6368'
      }
    }, "Adicionar \xE0 Coluna ", columnIndex + 1, ":"), /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlockToColumn('paragraph'),
      style: miniButtonStyle
    }, "\uD83D\uDCDD Texto"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlockToColumn('heading2'),
      style: miniButtonStyle
    }, "H2"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlockToColumn('image'),
      style: miniButtonStyle
    }, "\uD83D\uDDBC\uFE0F"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlockToColumn('youtube'),
      style: miniButtonStyle
    }, "\uD83D\uDCFA"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlockToColumn('link'),
      style: miniButtonStyle
    }, "\uD83D\uDD17"))), /*#__PURE__*/React__default$2.default.createElement(distExports$1.DndContext, {
      sensors: sensors,
      collisionDetection: distExports$1.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React__default$2.default.createElement(distExports.SortableContext, {
      items: blocks.map(b => b.id),
      strategy: distExports.verticalListSortingStrategy
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        minHeight: '100px'
      }
    }, blocks.length === 0 ? /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '20px',
        color: '#9aa0a6',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        border: '1px dashed #dadce0',
        fontSize: '11px'
      }
    }, "Adicione blocos nesta coluna") : blocks.map(block => /*#__PURE__*/React__default$2.default.createElement(SortableBlock, {
      key: block.id,
      block: block,
      onUpdate: updateColumnBlock,
      onDelete: deleteColumnBlock
    }))))));
  };

  // Componente de bloco arrastável
  const SortableBlock = ({
    block,
    onUpdate,
    onDelete
  }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging
    } = distExports.useSortable({
      id: block.id
    });
    const style = {
      transform: distExports$3.CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1
    };
    const handleContentChange = (content, attrs) => {
      onUpdate(block.id, content, attrs);
    };
    const renderBlockContent = () => {
      switch (block.type) {
        case 'paragraph':
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              display: 'flex',
              gap: '4px',
              marginBottom: '8px',
              padding: '4px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("button", {
            onMouseDown: e => {
              e.preventDefault();
              document.execCommand('bold');
            },
            style: toolbarButtonStyle,
            title: "Negrito"
          }, /*#__PURE__*/React__default$2.default.createElement("strong", null, "B")), /*#__PURE__*/React__default$2.default.createElement("button", {
            onMouseDown: e => {
              e.preventDefault();
              document.execCommand('italic');
            },
            style: toolbarButtonStyle,
            title: "It\xE1lico"
          }, /*#__PURE__*/React__default$2.default.createElement("em", null, "I")), /*#__PURE__*/React__default$2.default.createElement("button", {
            onMouseDown: e => {
              e.preventDefault();
              document.execCommand('underline');
            },
            style: toolbarButtonStyle,
            title: "Sublinhado"
          }, /*#__PURE__*/React__default$2.default.createElement("u", null, "U")), /*#__PURE__*/React__default$2.default.createElement("button", {
            onMouseDown: e => {
              e.preventDefault();
              const url = prompt('Digite a URL do link:');
              if (url) {
                document.execCommand('createLink', false, url);
              }
            },
            style: toolbarButtonStyle,
            title: "Inserir Link"
          }, "\uD83D\uDD17")), /*#__PURE__*/React__default$2.default.createElement("div", {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: e => handleContentChange(e.target.innerHTML),
            dangerouslySetInnerHTML: {
              __html: block.content || 'Digite seu texto aqui...'
            },
            style: {
              minHeight: '50px',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              outline: 'none',
              fontSize: '16px',
              lineHeight: '1.6'
            }
          }));
        case 'heading1':
        case 'heading2':
        case 'heading3':
        case 'heading4':
        case 'heading5':
        case 'heading6':
          const HeadingTag = block.type;
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement(HeadingTag, {
            contentEditable: true,
            suppressContentEditableWarning: true,
            onBlur: e => handleContentChange(e.target.innerHTML),
            dangerouslySetInnerHTML: {
              __html: block.content || `Título ${block.type.slice(-1)}`
            },
            style: {
              padding: '8px 12px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              outline: 'none',
              fontWeight: 'bold',
              margin: 0
            }
          }));
        case 'image':
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              padding: '12px'
            }
          }, block.attributes?.src ? /*#__PURE__*/React__default$2.default.createElement("img", {
            src: block.attributes.src,
            alt: block.attributes?.alt || '',
            style: {
              maxWidth: '100%',
              height: 'auto'
            }
          }) : /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#f5f5f5'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("p", null, "Nenhuma imagem selecionada")), /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              marginTop: '10px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("input", {
            type: "file",
            accept: "image/*",
            onChange: e => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  handleContentChange(block.content, {
                    ...block.attributes,
                    src: reader.result
                  });
                };
                reader.readAsDataURL(file);
              }
            },
            style: {
              marginBottom: '8px'
            }
          }), /*#__PURE__*/React__default$2.default.createElement("input", {
            type: "text",
            placeholder: "Texto alternativo",
            value: block.attributes?.alt || '',
            onChange: e => handleContentChange(block.content, {
              ...block.attributes,
              alt: e.target.value
            }),
            style: {
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }
          }))));
        case 'youtube':
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              padding: '12px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("input", {
            type: "text",
            placeholder: "ID do v\xEDdeo do YouTube (ex: dQw4w9WgXcQ)",
            value: block.attributes?.videoId || '',
            onChange: e => handleContentChange(block.content, {
              ...block.attributes,
              videoId: e.target.value
            }),
            style: {
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '10px'
            }
          }), block.attributes?.videoId && /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0
            }
          }, /*#__PURE__*/React__default$2.default.createElement("iframe", {
            src: `https://www.youtube.com/embed/${block.attributes.videoId}`,
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            },
            allowFullScreen: true
          }))));
        case 'columns':
          const handleColumnBlocksUpdate = (columnIndex, columnBlocks) => {
            const updatedColumns = [...(block.attributes?.columns || [])];
            updatedColumns[columnIndex] = columnBlocks;
            handleContentChange(block.content, {
              ...block.attributes,
              columns: updatedColumns
            });
          };
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              padding: '12px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              marginBottom: '10px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("label", {
            style: {
              fontSize: '12px',
              fontWeight: '500',
              marginBottom: '4px',
              display: 'block'
            }
          }, "N\xFAmero de colunas:"), /*#__PURE__*/React__default$2.default.createElement("select", {
            value: block.attributes?.columnCount || 2,
            onChange: e => {
              const columnCount = parseInt(e.target.value);
              // Inicializa colunas como arrays de blocos vazios
              const columns = Array(columnCount).fill(null).map(() => []);
              handleContentChange(block.content, {
                ...block.attributes,
                columnCount,
                columns
              });
            },
            style: {
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("option", {
            value: 2
          }, "2 Colunas"), /*#__PURE__*/React__default$2.default.createElement("option", {
            value: 3
          }, "3 Colunas"), /*#__PURE__*/React__default$2.default.createElement("option", {
            value: 4
          }, "4 Colunas"))), /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: `repeat(${block.attributes?.columnCount || 2}, 1fr)`,
              gap: '16px',
              minHeight: '200px'
            }
          }, Array(block.attributes?.columnCount || 2).fill(null).map((_, colIndex) => /*#__PURE__*/React__default$2.default.createElement("div", {
            key: colIndex,
            style: {
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              padding: '8px',
              backgroundColor: '#f8f9fa',
              minHeight: '180px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement(ColumnBlockManager, {
            columnIndex: colIndex,
            blocks: block.attributes?.columns?.[colIndex] || [],
            onUpdateBlocks: handleColumnBlocksUpdate
          }))))));
        case 'link':
          return /*#__PURE__*/React__default$2.default.createElement("div", {
            className: "block-content"
          }, /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              padding: '12px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("input", {
            type: "text",
            placeholder: "Texto do link",
            value: block.content,
            onChange: e => handleContentChange(e.target.value, block.attributes),
            style: {
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '8px'
            }
          }), /*#__PURE__*/React__default$2.default.createElement("input", {
            type: "url",
            placeholder: "URL do link",
            value: block.attributes?.href || '',
            onChange: e => handleContentChange(block.content, {
              ...block.attributes,
              href: e.target.value
            }),
            style: {
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }
          }), block.content && block.attributes?.href && /*#__PURE__*/React__default$2.default.createElement("div", {
            style: {
              marginTop: '10px'
            }
          }, /*#__PURE__*/React__default$2.default.createElement("a", {
            href: block.attributes.href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, block.content))));
        default:
          return /*#__PURE__*/React__default$2.default.createElement("div", null, "Tipo de bloco n\xE3o suportado");
      }
    };
    return /*#__PURE__*/React__default$2.default.createElement("div", {
      ref: setNodeRef,
      style: style,
      className: "sortable-block"
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        border: '2px solid #f0f0f0',
        borderRadius: '8px',
        margin: '8px 0',
        backgroundColor: 'white',
        position: 'relative'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        borderRadius: '8px 8px 0 0'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", _extends({}, attributes, listeners, {
      style: {
        cursor: 'grab',
        padding: '4px',
        backgroundColor: '#6c757d',
        color: 'white',
        borderRadius: '4px',
        fontSize: '12px'
      }
    }), "\u22EE\u22EE"), /*#__PURE__*/React__default$2.default.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#6c757d',
        fontWeight: '500'
      }
    }, block.type.toUpperCase())), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => onDelete(block.id),
      style: {
        background: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '4px 8px',
        fontSize: '12px',
        cursor: 'pointer'
      }
    }, "Excluir")), /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        padding: '12px'
      }
    }, renderBlockContent())));
  };

  // Componente principal do editor
  const VisualComposer = ({
    record,
    property,
    onChange
  }) => {
    const [blocks, setBlocks] = React$2.useState(() => {
      try {
        const value = record?.params?.[property.name] || '';
        if (value && typeof value === 'string' && value.startsWith('[')) {
          return JSON.parse(value);
        }
        // Converte HTML existente para um bloco de parágrafo
        if (value) {
          return [{
            id: 'initial',
            type: 'paragraph',
            content: value
          }];
        }
        return [];
      } catch {
        return [];
      }
    });

    // Removido: não precisamos mais de debounce ou indicador de salvamento

    const sensors = distExports$1.useSensors(distExports$1.useSensor(distExports$1.PointerSensor), distExports$1.useSensor(distExports$1.KeyboardSensor, {
      coordinateGetter: distExports.sortableKeyboardCoordinates
    }));
    const generateId = () => Math.random().toString(36).substr(2, 9);
    const addBlock = type => {
      const newBlock = {
        id: generateId(),
        type,
        content: '',
        attributes: type === 'columns' ? {
          columnCount: 2,
          columns: [[], []]
        } : {}
      };
      const updatedBlocks = [...blocks, newBlock];
      setBlocks(updatedBlocks);
      updateValue(updatedBlocks);
    };
    const updateBlock = (id, content, attributes) => {
      const updatedBlocks = blocks.map(block => block.id === id ? {
        ...block,
        content,
        attributes: {
          ...block.attributes,
          ...attributes
        }
      } : block);
      setBlocks(updatedBlocks);
      updateValue(updatedBlocks);
    };
    const deleteBlock = id => {
      const updatedBlocks = blocks.filter(block => block.id !== id);
      setBlocks(updatedBlocks);
      updateValue(updatedBlocks);
    };
    const updateValue = React$2.useCallback(updatedBlocks => {
      // Apenas converte e atualiza o valor imediatamente, sem debounce
      // O AdminJS não irá salvar automaticamente, apenas quando o usuário clicar em "Salvar"
      const html = blocksToHtml(updatedBlocks);
      onChange(property.name, html);
      console.log('🔄 Conteúdo atualizado localmente (não salvo no banco ainda)');
    }, [property.name, onChange]);

    // Removido: cleanup do timer não é mais necessário

    const blocksToHtml = blocks => {
      return blocks.map(block => {
        switch (block.type) {
          case 'paragraph':
            return `<p>${block.content}</p>`;
          case 'heading1':
            return `<h1>${block.content}</h1>`;
          case 'heading2':
            return `<h2>${block.content}</h2>`;
          case 'heading3':
            return `<h3>${block.content}</h3>`;
          case 'heading4':
            return `<h4>${block.content}</h4>`;
          case 'heading5':
            return `<h5>${block.content}</h5>`;
          case 'heading6':
            return `<h6>${block.content}</h6>`;
          case 'image':
            return `<img src="${block.attributes?.src || ''}" alt="${block.attributes?.alt || ''}" />`;
          case 'youtube':
            return `<iframe src="https://www.youtube.com/embed/${block.attributes?.videoId}" frameborder="0" allowfullscreen></iframe>`;
          case 'columns':
            const columnHtml = block.attributes?.columns?.map(columnBlocks => {
              const columnContent = blocksToHtml(columnBlocks || []);
              return `<div class="column">${columnContent}</div>`;
            }).join('') || '';
            return `<div class="columns" style="display: grid; grid-template-columns: repeat(${block.attributes?.columnCount || 2}, 1fr); gap: 16px;">${columnHtml}</div>`;
          case 'link':
            return `<a href="${block.attributes?.href || ''}">${block.content}</a>`;
          default:
            return '';
        }
      }).join('\n');
    };
    const handleDragEnd = event => {
      const {
        active,
        over
      } = event;
      if (active.id !== over?.id) {
        const oldIndex = blocks.findIndex(block => block.id === active.id);
        const newIndex = blocks.findIndex(block => block.id === over?.id);
        const updatedBlocks = distExports.arrayMove(blocks, oldIndex, newIndex);
        setBlocks(updatedBlocks);
        updateValue(updatedBlocks);
      }
    };
    return /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        padding: '8px 16px',
        backgroundColor: '#d1ecf1',
        border: '1px solid #bee5eb',
        borderRadius: '4px',
        marginBottom: '16px',
        fontSize: '12px',
        color: '#0c5460',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("span", null, "\uD83D\uDCA1"), /*#__PURE__*/React__default$2.default.createElement("span", null, "Fa\xE7a suas edi\xE7\xF5es normalmente. Clique em \"Salvar\" no final da p\xE1gina para persistir as mudan\xE7as.")), /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '16px',
        border: '1px solid #e0e0e0'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("h4", {
      style: {
        margin: '0 0 12px 0',
        fontSize: '14px',
        fontWeight: '600'
      }
    }, "\uD83C\uDFA8 Editor Visual - Adicionar Blocos"), /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('paragraph'),
      style: buttonStyle
    }, "\uD83D\uDCDD Par\xE1grafo"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('heading1'),
      style: buttonStyle
    }, "H1 T\xEDtulo 1"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('heading2'),
      style: buttonStyle
    }, "H2 T\xEDtulo 2"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('heading3'),
      style: buttonStyle
    }, "H3 T\xEDtulo 3"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('image'),
      style: buttonStyle
    }, "\uD83D\uDDBC\uFE0F Imagem"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('youtube'),
      style: buttonStyle
    }, "\uD83D\uDCFA YouTube"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('columns'),
      style: buttonStyle
    }, "\uD83D\uDCD0 Colunas"), /*#__PURE__*/React__default$2.default.createElement("button", {
      onClick: () => addBlock('link'),
      style: buttonStyle
    }, "\uD83D\uDD17 Link"))), /*#__PURE__*/React__default$2.default.createElement(distExports$1.DndContext, {
      sensors: sensors,
      collisionDetection: distExports$1.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React__default$2.default.createElement(distExports.SortableContext, {
      items: blocks.map(b => b.id),
      strategy: distExports.verticalListSortingStrategy
    }, /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        minHeight: '200px'
      }
    }, blocks.length === 0 ? /*#__PURE__*/React__default$2.default.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '40px',
        color: '#6c757d',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '2px dashed #dee2e6'
      }
    }, /*#__PURE__*/React__default$2.default.createElement("p", null, "Adicione blocos para come\xE7ar a criar seu conte\xFAdo"), /*#__PURE__*/React__default$2.default.createElement("p", {
      style: {
        fontSize: '12px'
      }
    }, "Arraste os blocos para reordenar")) : blocks.map(block => /*#__PURE__*/React__default$2.default.createElement(SortableBlock, {
      key: block.id,
      block: block,
      onUpdate: updateBlock,
      onDelete: deleteBlock
    }))))));
  };
  const buttonStyle = {
    padding: '8px 12px',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'all 0.2s'
  };
  const toolbarButtonStyle = {
    padding: '4px 8px',
    border: '1px solid #dee2e6',
    borderRadius: '3px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '28px',
    transition: 'all 0.2s'
  };
  const miniButtonStyle = {
    padding: '4px 6px',
    border: '1px solid #d1d5db',
    borderRadius: '3px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '10px',
    fontWeight: '500',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap'
  };

  const Edit = ({ property, record, onChange }) => {
      const { translateProperty } = adminjs.useTranslation();
      const { params } = record;
      const { custom } = property;
      const path = adminjs.flat.get(params, custom.filePathProperty);
      const key = adminjs.flat.get(params, custom.keyProperty);
      const file = adminjs.flat.get(params, custom.fileProperty);
      const [originalKey, setOriginalKey] = React$2.useState(key);
      const [filesToUpload, setFilesToUpload] = React$2.useState([]);
      React$2.useEffect(() => {
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
      return (React__default$2.default.createElement(designSystem.FormGroup, null,
          React__default$2.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default$2.default.createElement(designSystem.DropZone, { onChange: onUpload, multiple: custom.multiple, validate: {
                  mimeTypes: custom.mimeTypes,
                  maxSize: custom.maxSize,
              }, files: filesToUpload }),
          !custom.multiple && key && path && !filesToUpload.length && file !== null && (React__default$2.default.createElement(designSystem.DropZoneItem, { filename: key, src: path, onRemove: handleRemove })),
          custom.multiple && key && key.length && path ? (React__default$2.default.createElement(React__default$2.default.Fragment, null, key.map((singleKey, index) => {
              // when we remove items we set only path index to nulls.
              // key is still there. This is because
              // we have to maintain all the indexes. So here we simply filter out elements which
              // were removed and display only what was left
              const currentPath = path[index];
              return currentPath ? (React__default$2.default.createElement(designSystem.DropZoneItem, { key: singleKey, filename: singleKey, src: path[index], onRemove: () => handleMultiRemove(singleKey) })) : '';
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
              return (React__default$2.default.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
          }
          if (mimeType && AudioMimeTypes.includes(mimeType)) {
              return (React__default$2.default.createElement("audio", { controls: true, src: path },
                  "Your browser does not support the",
                  React__default$2.default.createElement("code", null, "audio"),
                  React__default$2.default.createElement("track", { kind: "captions" })));
          }
      }
      return (React__default$2.default.createElement(designSystem.Box, null,
          React__default$2.default.createElement(designSystem.Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
              React__default$2.default.createElement(designSystem.Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
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
          return (React__default$2.default.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
      }
      if (custom.opts && custom.opts.baseUrl) {
          const baseUrl = custom.opts.baseUrl || '';
          path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
      }
      return (React__default$2.default.createElement(React__default$2.default.Fragment, null, path.map((singlePath, index) => (React__default$2.default.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
  };

  const List = (props) => (React__default$2.default.createElement(File, { width: 100, ...props }));

  const Show = (props) => {
      const { property } = props;
      const { translateProperty } = adminjs.useTranslation();
      return (React__default$2.default.createElement(designSystem.FormGroup, null,
          React__default$2.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default$2.default.createElement(File, { width: "100%", ...props })));
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
  AdminJS.UserComponents.VisualComposer = VisualComposer;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, PropTypes, AdminJSDesignSystem, ReactRouter, ReactDOM, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGVyaW9kby1zZWxlY3QudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlueW1jZS1lZGl0b3IudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcXVpbGwtZWRpdG9yLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Jsb2NrLWJ1aWxkZXIudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlwdGFwLWVkaXRvci50c3giLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvdXRpbGl0aWVzL2Rpc3QvdXRpbGl0aWVzLmNqcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC91dGlsaXRpZXMvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9hY2Nlc3NpYmlsaXR5L2Rpc3QvYWNjZXNzaWJpbGl0eS5janMuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvYWNjZXNzaWJpbGl0eS9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BkbmQta2l0L2NvcmUvZGlzdC9jb3JlLmNqcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9jb3JlL2Rpc3QvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvc29ydGFibGUvZGlzdC9zb3J0YWJsZS5janMuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvc29ydGFibGUvZGlzdC9pbmRleC5qcyIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3Zpc3VhbC1jb21wb3Nlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50LmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFVwbG9hZEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMucHJvcGVydHkubmFtZX0+VXBsb2FkPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD17cHJvcHMucHJvcGVydHkubmFtZX0gdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRFZGl0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVGh1bWIocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7cmVjb3JkLnBhcmFtcy51cmx9YDtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiA8c3Bhbj5ObyBpbWFnZTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXtyZWNvcmQucGFyYW1zLmFsdCB8fCAnVGh1bWJuYWlsJ31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGh1bWIucHJvcFR5cGVzID0ge1xyXG4gIHJlY29yZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5mdW5jdGlvbiBHcm91cGVkUHJpY2VzKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJlY29VbmljbyA9IHJlY29yZC5wYXJhbXMucHJlY29VbmljbyB8fCAnJztcclxuICBjb25zdCBwcmVjb01lZGlvID0gcmVjb3JkLnBhcmFtcy5wcmVjb01lZGlvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvR3JhbmRlID0gcmVjb3JkLnBhcmFtcy5wcmVjb0dyYW5kZSB8fCAnJztcclxuICBjb25zdCBwcmVjb0luZGl2aWR1YWwgPSByZWNvcmQucGFyYW1zLnByZWNvSW5kaXZpZHVhbCB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD1cIjEwcHhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyDDmm5pY288L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29Vbmljb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29VbmljbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBNw6lkaW88L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29NZWRpb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29NZWRpbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBHcmFuZGU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29HcmFuZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvR3JhbmRlJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gSW5kaXZpZHVhbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0luZGl2aWR1YWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvSW5kaXZpZHVhbCcpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRQcmljZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExhYmVsLCBDaGVja0JveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBqYW50YXIgPSByZWNvcmQucGFyYW1zLmphbnRhciA/PyBmYWxzZTtcclxuICBjb25zdCBkZWxpdmVyeSA9IHJlY29yZC5wYXJhbXMuZGVsaXZlcnkgPz8gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUphbnRhciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2phbnRhcicsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlbGl2ZXJ5ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnZGVsaXZlcnknLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgVGlwb3MgZGUgY2FyZMOhcGlvc1xyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwibGdcIiBmbGV4V3JhcD1cIndyYXBcIiBtYj1cIjM2cHhcIj5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiamFudGFyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlkPVwiamFudGFyXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtqYW50YXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUphbnRhcn1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBEaXNwb27DrXZlbCBwYXJhIEphbnRhclxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjdXJzb3I9XCJwb2ludGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEaXNwb27DrXZlbCBwYXJhIERlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpc3BvbmliaWxpdGllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgU2hvd1Byb2R1Y3RJbWFnZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgaWYgKCFyZWNvcmQgfHwgIXByb3BlcnR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGROYW1lID0gcHJvcGVydHkubmFtZTsgLy8gbWVkaWFDYXBhLCBtZWRpYVByaW5jaXBhbCwgZXRjLlxyXG4gIGNvbnN0IG1lZGlhS2V5ID0gYCR7ZmllbGROYW1lfVVybGA7IC8vIGJhbm5lclVybCwgZXRjLlxyXG4gIGNvbnN0IGFsdEtleSA9IGAke2ZpZWxkTmFtZX1BbHRgO1xyXG5cclxuICBjb25zdCBtZWRpYVBhdGggPSByZWNvcmQucGFyYW1zPy5bbWVkaWFLZXldO1xyXG4gIGNvbnN0IGFsdFRleHQgPSByZWNvcmQucGFyYW1zPy5bYWx0S2V5XSB8fCAnJztcclxuXHJcbiAgLy8gVmVyaWZpY2FyIHNlIGEgVVJMIGrDoSDDqSBjb21wbGV0YSBvdSBzZSBwcmVjaXNhIHNlciBjb25jYXRlbmFkYVxyXG4gIGNvbnN0IGZ1bGxVcmwgPSBtZWRpYVBhdGhcclxuICAgID8gKG1lZGlhUGF0aC5zdGFydHNXaXRoKCdodHRwJykgXHJcbiAgICAgICAgPyBtZWRpYVBhdGggXHJcbiAgICAgICAgOiBgaHR0cHM6Ly9iYWNrb2ZmaWNlLWFwcC1hc3NldHMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHttZWRpYVBhdGh9YClcclxuICAgIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbWI9XCIzNnB4XCI+XHJcbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWwgfHwgJ0ltYWdlbSd9PC9MYWJlbD5cclxuICAgICAge2Z1bGxVcmwgPyAoXHJcbiAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIHtmdWxsVXJsLmVuZHNXaXRoKCcubXA0JykgPyAoXHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHNyYz17ZnVsbFVybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtmdWxsVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17YWx0VGV4dCB8fCBgSW1hZ2VtIC0gJHtmaWVsZE5hbWV9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthbHRUZXh0ICYmIChcclxuICAgICAgICAgICAgPEJveCBtdD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICB7YWx0VGV4dH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgIHthbHRUZXh0IHx8ICdOZW5odW0gYXJxdWl2byBkaXNwb27DrXZlbCd9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Byb2R1Y3RJbWFnZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgRm9ybWF0dGVkRGF0ZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgY29uc3QgcmF3VmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdO1xyXG5cclxuICBpZiAoIXJhd1ZhbHVlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJhd1ZhbHVlKTtcclxuICBjb25zdCBmb3JtYXR0ZWQgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCdwdC1CUicsIHtcclxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAge2Zvcm1hdHRlZH1cclxuICAgICAgeycgJ31cclxuICAgICAge3RpbWV9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkRGF0ZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdERhc2hib2FyZCgpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgnL2FkbWluL3Jlc291cmNlcy9Qcm9kdXRvcycpOyAvLyA8LSBzdWJzdGl0dWEgcGVsbyBzZXUgcmVzb3VyY2UgSUQgc2UgZm9yIGRpZmVyZW50ZVxyXG4gIH0sIFtuYXZpZ2F0ZV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3REYXNoYm9hcmQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIEJ1dHRvbiwgSWNvbixcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IFN5bmNQcmljZXNBY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGljZSB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobm90aWNlICYmIG5vdGljZS5tZXNzYWdlKSB7XHJcbiAgICAgIC8vIFZvY8OqIHBvZGUgdXNhciBhIG5vdGlmaWNhw6fDo28gZG8gQWRtaW5KUywgbWFzIGFxdWkgc8OzIHVtIGFsZXJ0IHNpbXBsZXNcclxuICAgICAgYWxlcnQobm90aWNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtub3RpY2VdKTtcclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSB2b2x0YXIgcGFyYSBhIGxpc3RhZ2VtIGRlIHByb2R1dG9zXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIC8vIFNlIHF1aXNlciBpciBwYXJhIHVtYSByb3RhIGZpeGE6XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1Byb2R1dG9zJztcclxuICAgIC8vIE91IHPDsyB2b2x0YXIgbmEgbmF2ZWdhw6fDo286XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdmFyaWFudD1cInN1Y2Nlc3NcIiBwYWRkaW5nPVwibGdcIj5cclxuXHJcbiAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgbWI9XCIzNnB4XCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJywgbWFyZ2luQm90dG9tOiAnM3JlbScgfX0+XHJcbiAgICAgICAgQSBhw6fDo28gZm9pIGV4ZWN1dGFkYSBjb20gc3VjZXNzbyBlbSB0b2RvcyBvcyBwcm9kdXRvcyBzZWxlY2lvbmFkb3MuXHJcbiAgICAgICAgVmVyaWZpcXVlIHNlIG9zIHByZcOnb3MgZm9yYW0gYXR1YWxpemFkb3MgY29ycmV0YW1lbnRlLlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsnPCBWb2x0YXIgcGFyYSBsaXN0YWdlbSd9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bmNQcmljZXNBY3Rpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRm9ybUdyb3VwLCBcclxuICBMYWJlbCwgXHJcbiAgQnV0dG9uLCBcclxuICBJbnB1dCxcclxuICBCb3gsXHJcbiAgVGV4dFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIENhdGVnb3JpYSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbm9tZTogc3RyaW5nO1xyXG4gIGNvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcmlhU2VsZWN0UmVhbDogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgb25DaGFuZ2UsIHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2NhdGVnb3JpYXMsIHNldENhdGVnb3JpYXNdID0gdXNlU3RhdGU8Q2F0ZWdvcmlhW10+KFtdKTtcclxuICBjb25zdCBbbm92YUNhdGVnb3JpYSwgc2V0Tm92YUNhdGVnb3JpYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcmlhcywgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDYXJyZWdhciBjYXRlZ29yaWFzIGV4aXN0ZW50ZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWFzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBJbmljaWFsaXphciBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcyAtIEVYRUNVVEFSIEFQRU5BUyBVTUEgVkVaXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWFzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBBZ3VhcmRhciBjYXRlZ29yaWFzIGNhcnJlZ2FyZW1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ/CflIQgVXNlRWZmZWN0IC0gSW5pY2lhbGl6YW5kbyBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcycpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflIQgQ2F0ZWdvcmlhcyBjYXJyZWdhZGFzOicsIGNhdGVnb3JpYXMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFJlY29yZCBjb21wbGV0byAoRlVMTCBEVU1QKTonLCBKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coICcgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsJyAsICByZWNvcmQ/LnBhcmFtcyk7ICAgIFxyXG4gICAgLy8gTk9WTzogQ29udmVydGVyIG9iamV0byBpbmRleGFkbyBkbyBBZG1pbkpTIHBhcmEgYXJyYXlcclxuICAgIGxldCBjdXJyZW50VmFsdWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBWZXJpZmljYXIgc2UgYXMgY2F0ZWdvcmlhcyBlc3TDo28gbm8gZm9ybWF0byAuMCwgLjEsIC4yIChvYmpldG8gaW5kZXhhZG8pXHJcbiAgICBpZiAocmVjb3JkPy5wYXJhbXMpIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmlhc0luZGV4YWRhcyA9IFtdO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBcclxuICAgICAgLy8gQnVzY2FyIHRvZGFzIGFzIGNoYXZlcyBxdWUgY29tZcOnYW0gY29tICdjYXRlZ29yaWFzLidcclxuICAgICAgd2hpbGUgKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2F0ZWdvcmlhc0luZGV4YWRhcy5wdXNoKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSk7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGNhdGVnb3JpYXNJbmRleGFkYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhdGVnb3JpYXNJbmRleGFkYXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gQ2F0ZWdvcmlhcyBlbmNvbnRyYWRhcyBjb21vIG9iamV0byBpbmRleGFkbzonLCBjYXRlZ29yaWFzSW5kZXhhZGFzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBjb21vIG9iamV0byBpbmRleGFkbywgdGVudGFyIGNhbWluaG9zIG5vcm1haXNcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGNhbWluaG9zID0gW1xyXG4gICAgICAgIHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsXHJcbiAgICAgICAgcmVjb3JkPy5wb3B1bGF0ZWQ/Lltwcm9wZXJ0eS5uYW1lXSxcclxuICAgICAgICByZWNvcmQ/LnBvcHVsYXRlZD8uY2F0ZWdvcmlhcyxcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIFRlc3RhbmRvIGNhbWluaG9zIHRyYWRpY2lvbmFpczonKTtcclxuICAgICAgY2FtaW5ob3MuZm9yRWFjaCgoY2FtaW5obywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgICBDYW1pbmhvICR7aW5kZXh9OmAsIGNhbWluaG8pO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhbWluaG9zLmZpbmQoY2FtaW5obyA9PiBjYW1pbmhvICE9PSB1bmRlZmluZWQgJiYgY2FtaW5obyAhPT0gbnVsbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIFZhbG9yIEZJTkFMIEVTQ09MSElETzonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlwbyBkbyB2YWxvcjonLCB0eXBlb2YgY3VycmVudFZhbHVlLCBBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFZhbHVlICYmIEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBQcm9jZXNzYXIgSURzIHByaW1laXJvLCBkZXBvaXMgcmVtb3ZlciBkdXBsaWNhdGFzXHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZElkcyA9IGN1cnJlbnRWYWx1ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gUHJvY2Vzc2FuZG8gaXRlbTonLCBpdGVtLCB0eXBlb2YgaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaXRlbS5faWQgfHwgaXRlbS5pZCB8fCBpdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5SNICAg4oaSIElEIGV4dHJhw61kbyBkbyBvYmpldG86JywgaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuZmlsdGVyKGlkID0+IGlkICYmIGlkICE9PSAnbnVsbCcgJiYgaWQgIT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlbW92ZXIgZHVwbGljYXRhc1xyXG4gICAgICBjb25zdCB1bmlxdWVJZHMgPSBbLi4ubmV3IFNldChwcm9jZXNzZWRJZHMpXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyDDum5pY29zIHByb2Nlc3NhZG9zOicsIHVuaXF1ZUlkcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIENhdGVnb3JpYXMgZGlzcG9uw612ZWlzIHBhcmEgbWF0Y2hpbmc6JywgY2F0ZWdvcmlhcy5tYXAoYyA9PiAoeyBpZDogYy5faWQsIG5vbWU6IGMubm9tZSB9KSkpO1xyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2FyIHNlIGFsZ3VtIElEIGJhdGVcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHVuaXF1ZUlkcy5maWx0ZXIoc2VsZWN0ZWRJZCA9PiBcclxuICAgICAgICBjYXRlZ29yaWFzLnNvbWUoY2F0ID0+IGNhdC5faWQgPT09IHNlbGVjdGVkSWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyBxdWUgZmF6ZW0gbWF0Y2g6JywgbWF0Y2hlcyk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpYXModW5pcXVlSWRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIE5lbmh1bWEgY2F0ZWdvcmlhIHNlbGVjaW9uYWRhIGVuY29udHJhZGEnKTtcclxuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKFtdKTtcclxuICAgIH1cclxuICB9LCBbY2F0ZWdvcmlhcy5sZW5ndGhdKTsgLy8gTVVET1U6IFPDsyByb2RhIHF1YW5kbyBjYXRlZ29yaWFzIHPDo28gY2FycmVnYWRhc1xyXG5cclxuICAvLyBEZXRlY3RhciBzZSBlc3TDoSBubyBtb2RvIGRlIGVkacOnw6NvIG91IGNyaWHDp8Ojb1xyXG4gIGNvbnN0IGlzRWRpdE1vZGUgPSByZWNvcmQ/LmlkIHx8IHJlY29yZD8ucGFyYW1zPy5pZCB8fCAocmVjb3JkICYmIE9iamVjdC5rZXlzKHJlY29yZC5wYXJhbXMgfHwge30pLmxlbmd0aCA+IDEpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIE1vZG8gZGV0ZWN0YWRvOicsIGlzRWRpdE1vZGUgPyAnRURJw4fDg08nIDogJ0NSSUHDh8ODTycpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIFJlY29yZCBJRDonLCByZWNvcmQ/LmlkKTtcclxuICBjb25zb2xlLmxvZygn8J+UpyBSZWNvcmQgcGFyYW1zIElEOicsIHJlY29yZD8ucGFyYW1zPy5pZCk7XHJcbiAgY29uc29sZS5sb2coJ/CflKcgUmVjb3JkIHBhcmFtcyBrZXlzOicsIE9iamVjdC5rZXlzKHJlY29yZD8ucGFyYW1zIHx8IHt9KSk7XHJcblxyXG4gIC8vIERlYnVnIHF1YW5kbyBzZWxlY3RlZENhdGVnb3JpYXMgbXVkYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UpSBzZWxlY3RlZENhdGVnb3JpYXMgTVVET1U6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SlIFF1YW50aWRhZGU6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzLmxlbmd0aCk7XHJcbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcmlhc10pO1xyXG5cclxuICBjb25zdCBmZXRjaENhdGVnb3JpYXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL2xpc3QnKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5yZWNvcmRzKSB7XHJcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWFzRm9ybWF0YWRhcyA9IGRhdGEucmVjb3Jkcy5tYXAoKHJlY29yZDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhyZWNvcmQuaWQpLFxyXG4gICAgICAgICAgICBub21lOiByZWNvcmQucGFyYW1zLm5vbWUsXHJcbiAgICAgICAgICAgIGNvcjogcmVjb3JkLnBhcmFtcy5jb3JcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHNldENhdGVnb3JpYXMoY2F0ZWdvcmlhc0Zvcm1hdGFkYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBjYXRlZ29yaWFzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVDYXRlZ29yaWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW5vdmFDYXRlZ29yaWEudHJpbSgpIHx8IGxvYWRpbmcpIHJldHVybjtcclxuICAgIFxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENyaWFyIGNhdGVnb3JpYSB1c2FuZG8gZmV0Y2ggZGlyZXRvIHBhcmEgYSBBUEkgZG8gQWRtaW5KU1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIG5vbWU6IG5vdmFDYXRlZ29yaWEudHJpbSgpLFxyXG4gICAgICAgIGNvcjogJyMwYzRhMmInXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDYXRlZ29yaWE6IENhdGVnb3JpYSA9IHtcclxuICAgICAgICAgIF9pZDogU3RyaW5nKGRhdGEucmVjb3JkLmlkKSxcclxuICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgY29yOiBkYXRhLnJlY29yZC5wYXJhbXMuY29yIHx8ICcjMGM0YTJiJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRpY2lvbmFyIMOgIGxpc3RhIGxvY2FsXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmlhcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdDYXRlZ29yaWFdKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZWxlY2lvbmFyIGF1dG9tYXRpY2FtZW50ZVxyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcmlhcywgbmV3Q2F0ZWdvcmlhLl9pZF07XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb3RpZmljYXIgQWRtaW5KU1xyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXROb3ZhQ2F0ZWdvcmlhKCcnKTtcclxuICAgICAgICBhbGVydChg4pyFIENhdGVnb3JpYSBcIiR7bmV3Q2F0ZWdvcmlhLm5vbWV9XCIgY3JpYWRhIWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRlbnRhciBjb20gRm9ybURhdGEgc2UgSlNPTiBuw6NvIGZ1bmNpb25hclxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdub21lJywgbm92YUNhdGVnb3JpYS50cmltKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29yJywgJyMwYzRhMmInKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL0NhdGVnb3JpYU5vdGljaWFzL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZvcm1SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IG5ld0NhdGVnb3JpYTogQ2F0ZWdvcmlhID0ge1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhkYXRhLnJlY29yZC5pZCksXHJcbiAgICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgICBjb3I6IGRhdGEucmVjb3JkLnBhcmFtcy5jb3IgfHwgJyMwYzRhMmInXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRDYXRlZ29yaWFzKHByZXYgPT4gWy4uLnByZXYsIG5ld0NhdGVnb3JpYV0pO1xyXG4gICAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBuZXdDYXRlZ29yaWEuX2lkXTtcclxuICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICAgICAgYWxlcnQoYOKchSBDYXRlZ29yaWEgXCIke25ld0NhdGVnb3JpYS5ub21lfVwiIGNyaWFkYSFgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvIG5hIGNyaWHDp8OjbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjcmlhciBjYXRlZ29yaWE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgn4p2MIEVycm8gYW8gY3JpYXIgY2F0ZWdvcmlhLiBWb3UgdXNhciBvIHNpc3RlbWEgYXV0b23DoXRpY28gZG8gYmFja2VuZC4nKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZhbGxiYWNrOiB1c2FyIG8gc2lzdGVtYSBxdWUgasOhIGZ1bmNpb25hIG5vIGJhY2tlbmRcclxuICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBub3ZhQ2F0ZWdvcmlhLnRyaW0oKV07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICBhbGVydChg8J+SoSBDYXRlZ29yaWEgXCIke25vdmFDYXRlZ29yaWEudHJpbSgpfVwiIHNlcsOhIGNyaWFkYSBxdWFuZG8gdm9jw6ogc2FsdmFyIGEgbm90w61jaWEuYCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yaWFDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0ZWdvcmlhSWQ6IHN0cmluZywgaXNTZWxlY3RlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKHByZXZTZWxlY3RlZCA9PiB7XHJcbiAgICAgIGxldCBuZXdTZWxlY3RlZDtcclxuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAvLyBWZXJpZmljYXIgc2UgasOhIG7Do28gZXN0w6Egc2VsZWNpb25hZGEgcGFyYSBldml0YXIgZHVwbGljYXRhc1xyXG4gICAgICAgIGlmICghcHJldlNlbGVjdGVkLmluY2x1ZGVzKGNhdGVnb3JpYUlkKSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0ZWQgPSBbLi4ucHJldlNlbGVjdGVkLCBjYXRlZ29yaWFJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkOyAvLyBKw6EgZXN0w6Egc2VsZWNpb25hZGEsIG7Do28gYWRpY2lvbmFyXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkLmZpbHRlcihpZCA9PiBpZCAhPT0gY2F0ZWdvcmlhSWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBuZXdTZWxlY3RlZDtcclxuICAgIH0pO1xyXG4gIH0sIFtvbkNoYW5nZSwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPkNhdGVnb3JpYXMge2lzRWRpdE1vZGUgPyAnKEVkaXRhbmRvKScgOiAnKENyaWFuZG8pJ308L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgey8qIENyaWFyIG5vdmEgY2F0ZWdvcmlhICovfVxyXG4gICAgICA8Qm94IG1iPVwiZGVmYXVsdFwiIHA9XCJkZWZhdWx0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgQ3JpYXIgTm92YSBDYXRlZ29yaWFcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIG5vdmEgY2F0ZWdvcmlhLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e25vdmFDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92YUNhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZUNhdGVnb3JpYSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbm92YUNhdGVnb3JpYS50cmltKCkgfHwgbG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAnQ3JpYW5kby4uLicgOiAnQ3JpYXInfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIExpc3RhIGRlIGNhdGVnb3JpYXMgLSBBZGFwdGFkYSBwYXJhIG1vZG8gZGUgZWRpw6fDo28gKi99XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiPlxyXG4gICAgICAgICAge2lzRWRpdE1vZGUgPyAnIENhdGVnb3JpYXMgRGlzcG9uw612ZWlzIC0gTWFycXVlL0Rlc21hcnF1ZScgOiAn8J+TiyBTZWxlY2lvbmFyIENhdGVnb3JpYXMnfSAoe2NhdGVnb3JpYXMubGVuZ3RofSlcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIE1vc3RyYXIgY2F0ZWdvcmlhcyBzZWxlY2lvbmFkYXMgcHJpbWVpcm8gbm8gbW9kbyBkZSBlZGnDp8OjbyAqL31cclxuICAgICAgICB7aXNFZGl0TW9kZSAmJiBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG1iPVwic21cIiBwPVwic21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JywgYm9yZGVyOiAnMnB4IHNvbGlkICMwYzRhMmInIH19PlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic3VjY2Vzc1wiIG1iPVwieHNcIj5cclxuICAgICAgICAgICAgICDinIUgQ2F0ZWdvcmlhcyBBdHVhbG1lbnRlIFNlbGVjaW9uYWRhcyAoe3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9KTpcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoY2F0ID0+IHNlbGVjdGVkQ2F0ZWdvcmlhcy5pbmNsdWRlcyhjYXQuX2lkKSlcclxuICAgICAgICAgICAgICAubWFwKGNhdGVnb3JpYSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y2F0ZWdvcmlhLl9pZH0gZGlzcGxheT1cImlubGluZS1ibG9ja1wiIG1yPVwieHNcIiBtYj1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwYzRhMmInLCBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCA4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ2F1dG8nLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIGJvcmRlclJhZGl1czogJzRweCcsIHBhZGRpbmc6ICc4cHgnIH19PlxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubWFwKGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZENhdGVnb3JpYXMuaW5jbHVkZXMoY2F0ZWdvcmlhLl9pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SNIENoZWNrYm94ICR7Y2F0ZWdvcmlhLm5vbWV9ICgke2NhdGVnb3JpYS5faWR9KTogaXNTZWxlY3RlZCA9ICR7aXNTZWxlY3RlZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCflI0gc2VsZWN0ZWRDYXRlZ29yaWFzIGF0dWFsOmAsIHNlbGVjdGVkQ2F0ZWdvcmlhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yaWEuX2lkfVxyXG4gICAgICAgICAgICAgICAgcD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG1iPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/ICcjZThmNWU4JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3JpYUNoYW5nZShjYXRlZ29yaWEuX2lkLCAhaXNTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcmlhQ2hhbmdlKGNhdGVnb3JpYS5faWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250V2VpZ2h0OiBpc1NlbGVjdGVkID8gJ2JvbGQnIDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWEubm9tZX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInhzXCIgY29sb3I9XCJzdWNjZXNzXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyTIFNlbGVjaW9uYWRhXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmV5NjBcIiB2YXJpYW50PVwic21cIj5cclxuICAgICAgICAgICAgICBOZW5odW1hIGNhdGVnb3JpYSBlbmNvbnRyYWRhLiBDcmllIGEgcHJpbWVpcmEhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIFJlc3VtbyBkZSBzZWxlY2lvbmFkYXMgLSBEaWZlcmVudGUgcGFyYSBjYWRhIG1vZG8gKi99XHJcbiAgICAgIHtpc0VkaXRNb2RlID8gKFxyXG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjNjZCcsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgIPCfk50gTW9kbyBFZGnDp8Ojbzoge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSAtIEFsdGVyYcOnw7VlcyBzZXLDo28gc2FsdmFzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICDinIUge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSBwYXJhIGEgbm92YSBub3TDrWNpYVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhU2VsZWN0UmVhbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIEZvcm1Hcm91cCwgXHJcbiAgTGFiZWwsIFxyXG4gIEJveCwgXHJcbiAgVGV4dCBcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBQZXJpb2RvU2VsZWN0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuY29uc3QgUGVyaW9kb1NlbGVjdDogUmVhY3QuRkM8UGVyaW9kb1NlbGVjdFByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQZXJpb2RvLCBzZXRTZWxlY3RlZFBlcmlvZG9dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWwgc2UgZXhpc3RpclxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhjdXJyZW50VmFsdWUpO1xyXG4gIH0sIFtyZWNvcmQsIHByb3BlcnR5Lm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGVyaW9kb0NoYW5nZSA9IChwZXJpb2RvOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhwZXJpb2RvKTtcclxuICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBwZXJpb2RvKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwZXJpb2RvcyA9IFtcclxuICAgIHsgdmFsdWU6ICdBTScsIGxhYmVsOiAnQU0gKE1hbmjDoyknLCBpY29uOiAn8J+MhScgfSxcclxuICAgIHsgdmFsdWU6ICdQTScsIGxhYmVsOiAnUE0gKFRhcmRlL05vaXRlKScsIGljb246ICfwn4yGJyB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ1BlcsOtb2RvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICBTZWxlY2lvbmUgbyBwZXLDrW9kbyBkbyBob3LDoXJpb1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICA8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTJweCcsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XHJcbiAgICAgICAgICB7cGVyaW9kb3MubWFwKHBlcmlvZG8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRQZXJpb2RvID09PSBwZXJpb2RvLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGtleT17cGVyaW9kby52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBlcmlvZG9DaGFuZ2UocGVyaW9kby52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpc1NlbGVjdGVkID8gJzJweCBzb2xpZCAjMGM0YTJiJyA6ICcycHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyAnI2U4ZjVlOCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzE0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjOTk5JztcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOGY5ZmEnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2RkZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmb250U2l6ZTogJzI0cHgnLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cGVyaW9kby5pY29ufVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNTZWxlY3RlZCA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc1NlbGVjdGVkID8gJyMwYzRhMmInIDogJyMzMzMnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwZXJpb2RvLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3NlbGVjdGVkUGVyaW9kbyAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIiBwPVwieHNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJyB9fT5cclxuICAgICAgICAgICAgICDinIUgUGVyw61vZG8gc2VsZWNpb25hZG86IDxzdHJvbmc+e3NlbGVjdGVkUGVyaW9kb308L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICB7cHJvcGVydHkuZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtdD1cInhzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJpb2RvU2VsZWN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBUaW55TUNFRWRpdG9yUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgdGlueW1jZTogYW55O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVGlueU1DRUVkaXRvcjogUmVhY3QuRkM8VGlueU1DRUVkaXRvclByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBUaW55TUNFIC0gVmFsb3IgaW5pY2lhbDonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFJlY29yZCBjb21wbGV0bzonLCByZWNvcmQpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcbiAgICBcclxuICAgIHNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIFxyXG4gICAgLy8gU2UgbyBUaW55TUNFIGrDoSBlc3RpdmVyIGNhcnJlZ2FkbywgYXR1YWxpemFyIG8gY29udGXDumRvXHJcbiAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQgJiYgY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LnNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBUaW55TUNFIGRpbmFtaWNhbWVudGVcclxuICAgIGlmICghd2luZG93LnRpbnltY2UpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL2g0bzdkaDdwajU4ZXl2cXhmZGZrZDhrb2czeWU0NDdvaGR3eDU3MmQ1eTJ3Z21wNC90aW55bWNlLzYvdGlueW1jZS5taW4uanMnO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LnRpbnltY2UucmVtb3ZlKGVkaXRvclJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVUaW55TUNFID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0YXJlYVJlZi5jdXJyZW50IHx8IGlzTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgd2luZG93LnRpbnltY2UuaW5pdCh7XHJcbiAgICAgIHRhcmdldDogdGV4dGFyZWFSZWYuY3VycmVudCxcclxuICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgJ2Fkdmxpc3QnLCAnYXV0b2xpbmsnLCAnbGlzdHMnLCAnbGluaycsICdpbWFnZScsICdjaGFybWFwJywgJ3ByZXZpZXcnLFxyXG4gICAgICAgICdhbmNob3InLCAnc2VhcmNocmVwbGFjZScsICd2aXN1YWxibG9ja3MnLCAnY29kZScsICdmdWxsc2NyZWVuJyxcclxuICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUnLCAnbWVkaWEnLCAndGFibGUnLCAnaGVscCcsICd3b3JkY291bnQnXHJcbiAgICAgIF0sXHJcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBibG9ja3MgfCAnICtcclxuICAgICAgICAnYm9sZCBpdGFsaWMgZm9yZWNvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyICcgK1xyXG4gICAgICAgICdhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8ICcgK1xyXG4gICAgICAgICdyZW1vdmVmb3JtYXQgfCBpbWFnZSBtZWRpYSBsaW5rIHwgY29kZSBmdWxsc2NyZWVuIHwgaGVscCcsXHJcbiAgICAgIGNvbnRlbnRfc3R5bGU6ICdib2R5IHsgZm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4IH0nLFxyXG4gICAgICBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IGFzeW5jIChibG9iSW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vIFZhbGlkYXIgdGFtYW5obyBtw6F4aW1vIGRlIDJNQlxyXG4gICAgICAgICAgY29uc3QgTUFYX1NJWkUgPSAyICogMTAyNCAqIDEwMjQ7IC8vIDJNQiBlbSBieXRlc1xyXG4gICAgICAgICAgY29uc3QgZmlsZVNpemUgPSBibG9iSW5mby5ibG9iKCkuc2l6ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGZpbGVTaXplID4gTUFYX1NJWkUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZU1CID0gKGZpbGVTaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgIHJlamVjdChgTyBhcnF1aXZvIMOpIG11aXRvIGdyYW5kZS4gVGFtYW5obyBtw6F4aW1vIHBlcm1pdGlkbzogMk1CLiBUYW1hbmhvIGRvIGFycXVpdm86ICR7c2l6ZU1CfU1CYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gT1DDh8ODTyAxOiBVc2FyIGJhc2U2NCAobWFpcyBzaW1wbGVzLCBmdW5jaW9uYSBzZW1wcmUpXHJcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfinIUgSW1hZ2VtIGNvbnZlcnRpZGEgcGFyYSBiYXNlNjQnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShiYXNlNjQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJybyBhbyBjb252ZXJ0ZXIgaW1hZ2VtIHBhcmEgYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHJlamVjdCgnRXJybyBhbyBwcm9jZXNzYXIgaW1hZ2VtJyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYkluZm8uYmxvYigpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gT1DDh8ODTyAyOiBVcGxvYWQgdmlhIEZvcm1EYXRhIChjb21lbnRhZG8sIHBvZGUgdGVudGFyIGRlcG9pcylcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYkluZm8uYmxvYigpLCBibG9iSW5mby5maWxlbmFtZSgpKTtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWx0JywgYmxvYkluZm8uZmlsZW5hbWUoKSB8fCAnSW1hZ2VtIGRvIFRpbnlNQ0UnKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQucmVjb3JkLnBhcmFtcy51cmwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlamVjdCgnVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVXBsb2FkIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmVqZWN0KCdVcGxvYWQgZmFpbGVkJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICovXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICBlZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcjtcclxuICAgICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgc2V0Q29udGVudChuZXdDb250ZW50KTtcclxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdDb250ZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICAgICAgICAgIC8vIENhcnJlZ2FyIGNvbnRlw7pkbyBpbmljaWFsIGRvIHJlY29yZFxyXG4gICAgICAgICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSByZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdIHx8ICcnO1xyXG4gICAgICAgICAgaWYgKGluaXRpYWxDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5zZXRDb250ZW50KGluaXRpYWxDb250ZW50KTtcclxuICAgICAgICAgICAgc2V0Q29udGVudChpbml0aWFsQ29udGVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICA8TGFiZWw+XHJcbiAgICAgICAge3Byb3BlcnR5LmxhYmVsIHx8ICdDb250ZcO6ZG8nfVxyXG4gICAgICAgIHtwcm9wZXJ0eS5pc1JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvc3Bhbj59XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8Qm94IG10PVwieHNcIj5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiIG1iPVwic21cIj5cclxuICAgICAgICAgIEVkaXRvciBhdmFuw6dhZG8gY29tIHVwbG9hZCBkZSBpbWFnZW5zIGUgZm9ybWF0YcOnw6NvIHJpY2FcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByZWY9e3RleHRhcmVhUmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0OiAnMjAwcHgnIH19XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgY29udGVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBjYXNvIFRpbnlNQ0UgbsOjbyBjYXJyZWd1ZVxyXG4gICAgICAgICAgICBpZiAoIWlzTG9hZGVkICYmIG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyFpc0xvYWRlZCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIiBwPVwic21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICDwn5OdIENhcnJlZ2FuZG8gZWRpdG9yIGF2YW7Dp2Fkby4uLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW55TUNFRWRpdG9yO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBRdWlsbEVkaXRvclByb3BzIGV4dGVuZHMgQmFzZVByb3BlcnR5UHJvcHMge31cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIFF1aWxsOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBRdWlsbEVkaXRvcjogUmVhY3QuRkM8UXVpbGxFZGl0b3JQcm9wcz4gPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHF1aWxsUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEluaWNpYWxpemFyIGNvbSB2YWxvciBhdHVhbFxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIHNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBRdWlsbCBkaW5hbWljYW1lbnRlXHJcbiAgICBpZiAoIXdpbmRvdy5RdWlsbCkge1xyXG4gICAgICAvLyBDYXJyZWdhciBDU1NcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2Nkbi5xdWlsbGpzLmNvbS8xLjMuNi9xdWlsbC5zbm93LmNzcyc7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG4gICAgICAvLyBDYXJyZWdhciBKU1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5xdWlsbGpzLmNvbS8xLjMuNi9xdWlsbC5taW4uanMnO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGluaXRpYWxpemVRdWlsbCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0aWFsaXplUXVpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAocXVpbGxSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHF1aWxsUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZVF1aWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjb250YWluZXJSZWYuY3VycmVudCB8fCBpc0xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHF1aWxsID0gbmV3IHdpbmRvdy5RdWlsbChjb250YWluZXJSZWYuY3VycmVudCwge1xyXG4gICAgICB0aGVtZTogJ3Nub3cnLFxyXG4gICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgW3sgJ2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV0gfV0sXHJcbiAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSxcclxuICAgICAgICAgIFt7ICdjb2xvcic6IFtdIH0sIHsgJ2JhY2tncm91bmQnOiBbXSB9XSxcclxuICAgICAgICAgIFt7ICdsaXN0JzogJ29yZGVyZWQnfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxyXG4gICAgICAgICAgW3sgJ2FsaWduJzogW10gfV0sXHJcbiAgICAgICAgICBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSxcclxuICAgICAgICAgIFsnY2xlYW4nXVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICdEaWdpdGUgbyBjb250ZcO6ZG8gZGEgbm90w61jaWEuLi4nXHJcbiAgICB9KTtcclxuXHJcbiAgICBxdWlsbFJlZi5jdXJyZW50ID0gcXVpbGw7XHJcblxyXG4gICAgLy8gQ29uZmlndXJhciB1cGxvYWQgZGUgaW1hZ2VtIGN1c3RvbWl6YWRvXHJcbiAgICBjb25zdCB0b29sYmFyID0gcXVpbGwuZ2V0TW9kdWxlKCd0b29sYmFyJyk7XHJcbiAgICB0b29sYmFyLmFkZEhhbmRsZXIoJ2ltYWdlJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgaW5wdXQuY2xpY2soKTtcclxuXHJcbiAgICAgIGlucHV0Lm9uY2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlcz8uWzBdO1xyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAvLyBWYWxpZGFyIHRhbWFuaG8gbcOheGltbyBkZSAyTUJcclxuICAgICAgICAgIGNvbnN0IE1BWF9TSVpFID0gMiAqIDEwMjQgKiAxMDI0OyAvLyAyTUIgZW0gYnl0ZXNcclxuICAgICAgICAgIGlmIChmaWxlLnNpemUgPiBNQVhfU0laRSkge1xyXG4gICAgICAgICAgICBhbGVydChgTyBhcnF1aXZvIMOpIG11aXRvIGdyYW5kZS4gVGFtYW5obyBtw6F4aW1vIHBlcm1pdGlkbzogMk1CLiBUYW1hbmhvIGRvIGFycXVpdm86ICR7KGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpfU1CYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FkbWluL2FwaS9yZXNvdXJjZXMvTWVkaWEvYWN0aW9ucy9uZXcnLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlY29yZD8ucGFyYW1zPy51cmwpIHtcclxuICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHF1aWxsLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgIHF1aWxsLmluc2VydEVtYmVkKHJhbmdlPy5pbmRleCB8fCAwLCAnaW1hZ2UnLCByZXN1bHQucmVjb3JkLnBhcmFtcy51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydCgnRXJybyBhbyBmYXplciB1cGxvYWQgZGEgaW1hZ2VtJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuZXIgcGFyYSBtdWRhbsOnYXNcclxuICAgIHF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsICgpID0+IHtcclxuICAgICAgY29uc3QgaHRtbCA9IHF1aWxsLnJvb3QuaW5uZXJIVE1MO1xyXG4gICAgICBzZXRDb250ZW50KGh0bWwpO1xyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBodG1sKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRGVmaW5pciBjb250ZcO6ZG8gaW5pY2lhbFxyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgcXVpbGwucm9vdC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICA8TGFiZWw+XHJcbiAgICAgICAge3Byb3BlcnR5LmxhYmVsIHx8ICdDb250ZcO6ZG8nfVxyXG4gICAgICAgIHtwcm9wZXJ0eS5pc1JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvc3Bhbj59XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8Qm94IG10PVwieHNcIj5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiIG1iPVwic21cIj5cclxuICAgICAgICAgIOKcqCBFZGl0b3IgbW9kZXJubyBjb20gdXBsb2FkIGRlIGltYWdlbnMgZSBmb3JtYXRhw6fDo28gcmljYVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IGlzTG9hZGVkID8gJ25vbmUnIDogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMzAwcHgnXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyFpc0xvYWRlZCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIiBwPVwic21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICDwn5SEIENhcnJlZ2FuZG8gZWRpdG9yIFF1aWxsLmpzLi4uXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtpc0xvYWRlZCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIj5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICDwn5KhIERpY2FzOiBVc2UgYSBiYXJyYSBkZSBmZXJyYW1lbnRhcyBwYXJhIGZvcm1hdGFyLiBDbGlxdWUgbm8gw61jb25lIGRlIGltYWdlbSBwYXJhIGZhemVyIHVwbG9hZC5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpbGxFZGl0b3I7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBcclxuICBGb3JtR3JvdXAsIFxyXG4gIExhYmVsLCBcclxuICBCb3gsIFxyXG4gIFRleHQsIFxyXG4gIEJ1dHRvbiwgXHJcbiAgSW5wdXQsXHJcbiAgVGV4dEFyZWFcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBCbG9jayB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiAndGV4dCcgfCAnaGVhZGluZycgfCAnaW1hZ2UnIHwgJ3F1b3RlJyB8ICdsaXN0JztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQmxvY2tCdWlsZGVyUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuY29uc3QgQmxvY2tCdWlsZGVyOiBSZWFjdC5GQzxCbG9ja0J1aWxkZXJQcm9wcz4gPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2Nrcywgc2V0QmxvY2tzXSA9IHVzZVN0YXRlPEJsb2NrW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEluaWNpYWxpemFyIGNvbSB2YWxvciBhdHVhbFxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2V0QmxvY2tzKEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZCA6IFtdKTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyDDqSBKU09OLCBjcmlhciB1bSBibG9jbyBkZSB0ZXh0b1xyXG4gICAgICAgIHNldEJsb2Nrcyhbe1xyXG4gICAgICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIGNvbnRlbnQ6IGN1cnJlbnRWYWx1ZVxyXG4gICAgICAgIH1dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyZWNvcmQsIHByb3BlcnR5Lm5hbWVdKTtcclxuXHJcbiAgY29uc3QgYWRkQmxvY2sgPSAodHlwZTogQmxvY2tbJ3R5cGUnXSkgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2s6IEJsb2NrID0ge1xyXG4gICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBjb250ZW50OiAnJyxcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdCbG9ja3MgPSBbLi4uYmxvY2tzLCBuZXdCbG9ja107XHJcbiAgICBzZXRCbG9ja3MobmV3QmxvY2tzKTtcclxuICAgIHVwZGF0ZUNvbnRlbnQobmV3QmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVCbG9jayA9IChpZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPEJsb2NrPikgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gYmxvY2tzLm1hcChibG9jayA9PiBcclxuICAgICAgYmxvY2suaWQgPT09IGlkID8geyAuLi5ibG9jaywgLi4udXBkYXRlcyB9IDogYmxvY2tcclxuICAgICk7XHJcbiAgICBzZXRCbG9ja3MobmV3QmxvY2tzKTtcclxuICAgIHVwZGF0ZUNvbnRlbnQobmV3QmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVCbG9jayA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBuZXdCbG9ja3MgPSBibG9ja3MuZmlsdGVyKGJsb2NrID0+IGJsb2NrLmlkICE9PSBpZCk7XHJcbiAgICBzZXRCbG9ja3MobmV3QmxvY2tzKTtcclxuICAgIHVwZGF0ZUNvbnRlbnQobmV3QmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3ZlQmxvY2sgPSAoaWQ6IHN0cmluZywgZGlyZWN0aW9uOiAndXAnIHwgJ2Rvd24nKSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoYmxvY2sgPT4gYmxvY2suaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgbmV3SW5kZXggPSBkaXJlY3Rpb24gPT09ICd1cCcgPyBpbmRleCAtIDEgOiBpbmRleCArIDE7XHJcbiAgICBpZiAobmV3SW5kZXggPCAwIHx8IG5ld0luZGV4ID49IGJsb2Nrcy5sZW5ndGgpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gWy4uLmJsb2Nrc107XHJcbiAgICBbbmV3QmxvY2tzW2luZGV4XSwgbmV3QmxvY2tzW25ld0luZGV4XV0gPSBbbmV3QmxvY2tzW25ld0luZGV4XSwgbmV3QmxvY2tzW2luZGV4XV07XHJcbiAgICBcclxuICAgIHNldEJsb2NrcyhuZXdCbG9ja3MpO1xyXG4gICAgdXBkYXRlQ29udGVudChuZXdCbG9ja3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUNvbnRlbnQgPSAobmV3QmxvY2tzOiBCbG9ja1tdKSA9PiB7XHJcbiAgICAvLyBDb252ZXJ0ZXIgYmxvY2tzIHBhcmEgSFRNTFxyXG4gICAgY29uc3QgaHRtbCA9IG5ld0Jsb2Nrcy5tYXAoYmxvY2sgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGJsb2NrLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdoZWFkaW5nJzpcclxuICAgICAgICAgIHJldHVybiBgPGgyPiR7YmxvY2suY29udGVudH08L2gyPmA7XHJcbiAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICByZXR1cm4gYDxwPiR7YmxvY2suY29udGVudH08L3A+YDtcclxuICAgICAgICBjYXNlICdxdW90ZSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxibG9ja3F1b3RlPiR7YmxvY2suY29udGVudH08L2Jsb2NrcXVvdGU+YDtcclxuICAgICAgICBjYXNlICdsaXN0JzpcclxuICAgICAgICAgIHJldHVybiBgPHVsPjxsaT4ke2Jsb2NrLmNvbnRlbnQuc3BsaXQoJ1xcbicpLmpvaW4oJzwvbGk+PGxpPicpfTwvbGk+PC91bD5gO1xyXG4gICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke2Jsb2NrLnVybH1cIiBhbHQ9XCIke2Jsb2NrLmNvbnRlbnR9XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bztcIiAvPmA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBgPHA+JHtibG9jay5jb250ZW50fTwvcD5gO1xyXG4gICAgICB9XHJcbiAgICB9KS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgaHRtbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSBhc3luYyAoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgICAvLyBWYWxpZGFyIHRhbWFuaG8gbcOheGltbyBkZSAyTUJcclxuICAgIGNvbnN0IE1BWF9TSVpFID0gMiAqIDEwMjQgKiAxMDI0OyAvLyAyTUIgZW0gYnl0ZXNcclxuICAgIGlmIChmaWxlLnNpemUgPiBNQVhfU0laRSkge1xyXG4gICAgICBjb25zdCBzaXplTUIgPSAoZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTyBhcnF1aXZvIMOpIG11aXRvIGdyYW5kZS4gVGFtYW5obyBtw6F4aW1vIHBlcm1pdGlkbzogMk1CLiBUYW1hbmhvIGRvIGFycXVpdm86ICR7c2l6ZU1CfU1CYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsIHx8ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJsb2NrID0gKGJsb2NrOiBCbG9jaykgPT4ge1xyXG4gICAgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgIHBhZGRpbmc6ICcxMnB4JyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3gga2V5PXtibG9jay5pZH0gc3R5bGU9e2NvbW1vblN0eWxlc30+XHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyM2NjYnIH19PlxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICfwn5OdIFBhcsOhZ3JhZm8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2hlYWRpbmcnICYmICfwn5OwIFTDrXR1bG8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2ltYWdlJyAmJiAn8J+WvO+4jyBJbWFnZW0nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3F1b3RlJyAmJiAn8J+SrCBDaXRhw6fDo28nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2xpc3QnICYmICfwn5OLIExpc3RhJ31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZUJsb2NrKGJsb2NrLmlkLCAndXAnKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YmxvY2tzLmZpbmRJbmRleChiID0+IGIuaWQgPT09IGJsb2NrLmlkKSA9PT0gMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKGkVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvY2soYmxvY2suaWQsICdkb3duJyl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Jsb2Nrcy5maW5kSW5kZXgoYiA9PiBiLmlkID09PSBibG9jay5pZCkgPT09IGJsb2Nrcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4oaTXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVCbG9jayhibG9jay5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDwn5eR77iPXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtibG9jay50eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmnDp8OjbyBkYSBpbWFnZW0uLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtibG9jay5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgdXJsIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0Vycm8gYW8gZmF6ZXIgdXBsb2FkIGRhIGltYWdlbScpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Jsb2NrLnVybCAmJiAoXHJcbiAgICAgICAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmxvY2sudXJsfSBhbHQ9e2Jsb2NrLmNvbnRlbnR9IHN0eWxlPXt7IG1heFdpZHRoOiAnMjAwcHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApIDogYmxvY2sudHlwZSA9PT0gJ2xpc3QnID8gKFxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGNhZGEgaXRlbSBlbSB1bWEgbGluaGEuLi5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17YmxvY2suY29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jayhibG9jay5pZCwgeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ2hlYWRpbmcnID8gJ0RpZ2l0ZSBvIHTDrXR1bG8uLi4nIDpcclxuICAgICAgICAgICAgICBibG9jay50eXBlID09PSAncXVvdGUnID8gJ0RpZ2l0ZSBhIGNpdGHDp8Ojby4uLicgOlxyXG4gICAgICAgICAgICAgICdEaWdpdGUgbyB0ZXh0by4uLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZT17YmxvY2suY29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVCbG9jayhibG9jay5pZCwgeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgcm93cz17YmxvY2sudHlwZSA9PT0gJ2hlYWRpbmcnID8gMiA6IDR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbCB8fCAnQ29udGXDumRvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICDwn6exIEVkaXRvciBlbSBibG9jb3MgLSBDb25zdHJ1YSBzZXUgY29udGXDumRvIGRlIGZvcm1hIG1vZHVsYXJcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2VlZScsIGJvcmRlclJhZGl1czogJzhweCcsIHBhZGRpbmc6ICcxNnB4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZhZmFmYScgfX0+XHJcbiAgICAgICAgICB7YmxvY2tzLm1hcChyZW5kZXJCbG9jayl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc4cHgnLCBmbGV4V3JhcDogJ3dyYXAnLCBtYXJnaW5Ub3A6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygndGV4dCcpfT4rIFBhcsOhZ3JhZm88L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnaGVhZGluZycpfT4rIFTDrXR1bG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnaW1hZ2UnKX0+KyBJbWFnZW08L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygncXVvdGUnKX0+KyBDaXRhw6fDo288L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnbGlzdCcpfT4rIExpc3RhPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICBcclxuICAgICAgICA8Qm94IG10PVwic21cIj5cclxuICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgIPCfkqEgVXNlIG9zIGJvdMO1ZXMgcGFyYSBhZGljaW9uYXIgZGlmZXJlbnRlcyB0aXBvcyBkZSBjb250ZcO6ZG8uIEFycmFzdGUgcGFyYSByZW9yZGVuYXIuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrQnVpbGRlcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIEZvcm1Hcm91cCwgXHJcbiAgTGFiZWwsIFxyXG4gIEJveCwgXHJcbiAgVGV4dCwgXHJcbiAgQnV0dG9uIFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIFRpcHRhcEVkaXRvclByb3BzIGV4dGVuZHMgQmFzZVByb3BlcnR5UHJvcHMge31cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIEVkaXRvcjogYW55O1xyXG4gICAgU3RhcnRlcktpdDogYW55O1xyXG4gICAgSW1hZ2U6IGFueTtcclxuICAgIExpbms6IGFueTtcclxuICAgIFRleHRBbGlnbjogYW55O1xyXG4gICAgSGlnaGxpZ2h0OiBhbnk7XHJcbiAgICBVbmRlcmxpbmU6IGFueTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFRpcHRhcEVkaXRvcjogUmVhY3QuRkM8VGlwdGFwRWRpdG9yUHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZWRpdG9yLCBzZXRFZGl0b3JdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEluaWNpYWxpemFyIGNvbSB2YWxvciBhdHVhbFxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIFRpcHRhcCAtIFZhbG9yIGluaWNpYWw6JywgY3VycmVudFZhbHVlKTtcclxuICAgIHNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkVGlwdGFwKCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICBlZGl0b3IuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbG9hZFRpcHRhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIENhcnJlZ2FyIENTUyBkbyBUaXB0YXBcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpcHRhcC1jc3MnKSkge1xyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICBsaW5rLmlkID0gJ3RpcHRhcC1jc3MnO1xyXG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgbGluay5ocmVmID0gJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLXRleHQtYWxpZ25AMi4xLjEzL2Rpc3QvaW5kZXguY3NzJztcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENTUyBwZXJzb25hbGl6YWRvIHBhcmEgbyBlZGl0b3JcclxuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgLnRpcHRhcC1lZGl0b3Ige1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGlwdGFwLXRvb2xiYXIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGlwdGFwLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGgxIHsgZm9udC1zaXplOiAyZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW46IDAuNjdlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGgyIHsgZm9udC1zaXplOiAxLjVlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbjogMC43NWVtIDA7IH1cclxuICAgICAgICAudGlwdGFwLWNvbnRlbnQgaDMgeyBmb250LXNpemU6IDEuMTdlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbjogMC44M2VtIDA7IH1cclxuICAgICAgICAudGlwdGFwLWNvbnRlbnQgcCB7IG1hcmdpbjogMWVtIDA7IH1cclxuICAgICAgICAudGlwdGFwLWNvbnRlbnQgdWwsIC50aXB0YXAtY29udGVudCBvbCB7IG1hcmdpbjogMWVtIDA7IHBhZGRpbmctbGVmdDogMmVtOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGJsb2NrcXVvdGUgeyBcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2RkZDsgXHJcbiAgICAgICAgICBtYXJnaW46IDFlbSAwOyBcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyBcclxuICAgICAgICAgIGNvbG9yOiAjNjY2OyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGltZyB7IG1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBib3JkZXItcmFkaXVzOiA0cHg7IH1cclxuICAgICAgICAudGlwdGFwLWNvbnRlbnQgLmhpZ2hsaWdodCB7IGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgfVxyXG4gICAgICAgIC50aXB0YXAtYnRuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGlwdGFwLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6ICNmMGYwZjA7IH1cclxuICAgICAgICAudGlwdGFwLWJ0bi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjMGM0YTJiOyBjb2xvcjogd2hpdGU7IH1cclxuICAgICAgICAudGlwdGFwLXNlcGFyYXRvciB7IHdpZHRoOiAxcHg7IGJhY2tncm91bmQ6ICNkZGQ7IG1hcmdpbjogMCA0cHg7IH1cclxuICAgICAgYDtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FycmVnYXIgVGlwdGFwIHZpYSBDRE5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2luZG93LkVkaXRvcikge1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvY29yZUAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL3N0YXJ0ZXIta2l0QDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLWltYWdlQDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmtAMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9leHRlbnNpb24tdGV4dC1hbGlnbkAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi1oaWdobGlnaHRAMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9leHRlbnNpb24tdW5kZXJsaW5lQDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpbml0aWFsaXplVGlwdGFwKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIFRpcHRhcDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZFNjcmlwdCA9IChzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0aWFsaXplVGlwdGFwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXB0YXAtY29udGVudCcpO1xyXG4gICAgaWYgKCFlZGl0b3JFbGVtZW50IHx8ICF3aW5kb3cuRWRpdG9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3RWRpdG9yID0gbmV3IHdpbmRvdy5FZGl0b3Ioe1xyXG4gICAgICBlbGVtZW50OiBlZGl0b3JFbGVtZW50LFxyXG4gICAgICBleHRlbnNpb25zOiBbXHJcbiAgICAgICAgd2luZG93LlN0YXJ0ZXJLaXQsXHJcbiAgICAgICAgd2luZG93LkltYWdlLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICBIVE1MQXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBjbGFzczogJ3RpcHRhcC1pbWFnZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpbmRvdy5MaW5rLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICBvcGVuT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2luZG93LlRleHRBbGlnbi5jb25maWd1cmUoe1xyXG4gICAgICAgICAgdHlwZXM6IFsnaGVhZGluZycsICdwYXJhZ3JhcGgnXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aW5kb3cuSGlnaGxpZ2h0LFxyXG4gICAgICAgIHdpbmRvdy5VbmRlcmxpbmUsXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIG9uVXBkYXRlOiAoeyBlZGl0b3IgfTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGVkaXRvci5nZXRIVE1MKCk7XHJcbiAgICAgICAgc2V0Q29udGVudChodG1sKTtcclxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEVkaXRvcihuZXdFZGl0b3IpO1xyXG4gICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgaW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzPy5bMF07XHJcbiAgICAgIGlmIChmaWxlICYmIGVkaXRvcikge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgZWRpdG9yLmNoYWluKCkuZm9jdXMoKS5zZXRJbWFnZSh7IHNyYzogYmFzZTY0IH0pLnJ1bigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbnB1dC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZExpbmsgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBwcm9tcHQoJ0RpZ2l0ZSBhIFVSTCBkbyBsaW5rOicpO1xyXG4gICAgaWYgKHVybCAmJiBlZGl0b3IpIHtcclxuICAgICAgZWRpdG9yLmNoYWluKCkuZm9jdXMoKS5zZXRMaW5rKHsgaHJlZjogdXJsIH0pLnJ1bigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFRvb2xiYXJCdXR0b24gPSAoeyBcclxuICAgIG9uQ2xpY2ssIFxyXG4gICAgaXNBY3RpdmUgPSBmYWxzZSwgXHJcbiAgICBjaGlsZHJlbiBcclxuICB9OiB7IFxyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDsgXHJcbiAgICBpc0FjdGl2ZT86IGJvb2xlYW47IFxyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTsgXHJcbiAgfSkgPT4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2B0aXB0YXAtYnRuICR7aXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG5cclxuICBjb25zdCBTZXBhcmF0b3IgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cInRpcHRhcC1zZXBhcmF0b3JcIiAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ0NvbnRlw7pkbyd9XHJcbiAgICAgICAge3Byb3BlcnR5LmlzUmVxdWlyZWQgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9zcGFuPn1cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxCb3ggbXQ9XCJ4c1wiPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCIgbWI9XCJzbVwiPlxyXG4gICAgICAgICAg4pqhIEVkaXRvciBUaXB0YXAgbW9kZXJubyBjb20gY29udHJvbGVzIGF2YW7Dp2Fkb3NcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXB0YXAtZWRpdG9yXCI+XHJcbiAgICAgICAgICB7aXNMb2FkZWQgJiYgZWRpdG9yICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXB0YXAtdG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUJvbGQoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ2JvbGQnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkI8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSXRhbGljKCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdpdGFsaWMnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZW0+STwvZW0+XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZVVuZGVybGluZSgpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgndW5kZXJsaW5lJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHU+VTwvdT5cclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGlnaGxpZ2h0KCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdoaWdobGlnaHQnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDwn5aN77iPXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVIZWFkaW5nKHsgbGV2ZWw6IDEgfSkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdoZWFkaW5nJywgeyBsZXZlbDogMSB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIMVxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVIZWFkaW5nKHsgbGV2ZWw6IDIgfSkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdoZWFkaW5nJywgeyBsZXZlbDogMiB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIMlxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVIZWFkaW5nKHsgbGV2ZWw6IDMgfSkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdoZWFkaW5nJywgeyBsZXZlbDogMyB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIM1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0VGV4dEFsaWduKCdsZWZ0JykucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKHsgdGV4dEFsaWduOiAnbGVmdCcgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg8J+ThFxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS5zZXRUZXh0QWxpZ24oJ2NlbnRlcicpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSh7IHRleHRBbGlnbjogJ2NlbnRlcicgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg8J+ThFxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS5zZXRUZXh0QWxpZ24oJ3JpZ2h0JykucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKHsgdGV4dEFsaWduOiAncmlnaHQnIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfk4RcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUJ1bGxldExpc3QoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ2J1bGxldExpc3QnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDigKIgTGlzdGFcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlT3JkZXJlZExpc3QoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ29yZGVyZWRMaXN0Jyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgMS4gTGlzdGFcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlQmxvY2txdW90ZSgpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnYmxvY2txdW90ZScpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfkqxcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uIG9uQ2xpY2s9e2FkZEltYWdlfT5cclxuICAgICAgICAgICAgICAgIPCflrzvuI8gSW1hZ2VtXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uIG9uQ2xpY2s9e2FkZExpbmt9PlxyXG4gICAgICAgICAgICAgICAg8J+UlyBMaW5rXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnVuZG8oKS5ydW4oKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDihrZcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkucmVkbygpLnJ1bigpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOKGt1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBpZD1cInRpcHRhcC1jb250ZW50XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpcHRhcC1jb250ZW50XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHshaXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IHA9XCJsZ1wiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICAgIOKaoSBDYXJyZWdhbmRvIGVkaXRvciBUaXB0YXAuLi5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7aXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+SoSBVc2UgYSBiYXJyYSBkZSBmZXJyYW1lbnRhcyBwYXJhIGZvcm1hdGFyLiBUaXB0YXAgb2ZlcmVjZSB1bWEgZXhwZXJpw6puY2lhIG1vZGVybmEgZGUgZWRpw6fDo28uXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpcHRhcEVkaXRvcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiB1c2VDb21iaW5lZFJlZnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWZzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlZnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gcmVhY3QudXNlTWVtbygoKSA9PiBub2RlID0+IHtcbiAgICByZWZzLmZvckVhY2gocmVmID0+IHJlZihub2RlKSk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgcmVmcyk7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcbmNvbnN0IGNhblVzZURPTSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmZ1bmN0aW9uIGlzV2luZG93KGVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudFN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbGVtZW50KTtcbiAgcmV0dXJuIGVsZW1lbnRTdHJpbmcgPT09ICdbb2JqZWN0IFdpbmRvd10nIHx8IC8vIEluIEVsZWN0cm9uIGNvbnRleHQgdGhlIFdpbmRvdyBvYmplY3Qgc2VyaWFsaXplcyB0byBbb2JqZWN0IGdsb2JhbF1cbiAgZWxlbWVudFN0cmluZyA9PT0gJ1tvYmplY3QgZ2xvYmFsXSc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gIHJldHVybiAnbm9kZVR5cGUnIGluIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyh0YXJnZXQpIHtcbiAgdmFyIF90YXJnZXQkb3duZXJEb2N1bWVudCwgX3RhcmdldCRvd25lckRvY3VtZW50MjtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAoaXNXaW5kb3codGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBpZiAoIWlzTm9kZSh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiAoX3RhcmdldCRvd25lckRvY3VtZW50ID0gKF90YXJnZXQkb3duZXJEb2N1bWVudDIgPSB0YXJnZXQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90YXJnZXQkb3duZXJEb2N1bWVudDIuZGVmYXVsdFZpZXcpICE9IG51bGwgPyBfdGFyZ2V0JG93bmVyRG9jdW1lbnQgOiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnQobm9kZSkge1xuICBjb25zdCB7XG4gICAgRG9jdW1lbnRcbiAgfSA9IGdldFdpbmRvdyhub2RlKTtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIGlmIChpc1dpbmRvdyhub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NWR0VsZW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdldFdpbmRvdyhub2RlKS5TVkdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRPd25lckRvY3VtZW50KHRhcmdldCkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuXG4gIGlmIChpc1dpbmRvdyh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5kb2N1bWVudDtcbiAgfVxuXG4gIGlmICghaXNOb2RlKHRhcmdldCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoaXNEb2N1bWVudCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KHRhcmdldCkgfHwgaXNTVkdFbGVtZW50KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnQ7XG59XG5cbi8qKlxyXG4gKiBBIGhvb2sgdGhhdCByZXNvbHZlcyB0byB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciBhbmQgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBjbGllbnRcclxuICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgaG9vayBjaGFuZ2VcclxuICovXG5cbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gPyByZWFjdC51c2VMYXlvdXRFZmZlY3QgOiByZWFjdC51c2VFZmZlY3Q7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50KGhhbmRsZXIpIHtcbiAgY29uc3QgaGFuZGxlclJlZiA9IHJlYWN0LnVzZVJlZihoYW5kbGVyKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlclJlZi5jdXJyZW50ID0gaGFuZGxlcjtcbiAgfSk7XG4gIHJldHVybiByZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyUmVmLmN1cnJlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGhhbmRsZXJSZWYuY3VycmVudCguLi5hcmdzKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB1c2VJbnRlcnZhbCgpIHtcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSByZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNldCA9IHJlYWN0LnVzZUNhbGxiYWNrKChsaXN0ZW5lciwgZHVyYXRpb24pID0+IHtcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwobGlzdGVuZXIsIGR1cmF0aW9uKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbGVhciA9IHJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWxSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gW3NldCwgY2xlYXJdO1xufVxuXG5mdW5jdGlvbiB1c2VMYXRlc3RWYWx1ZSh2YWx1ZSwgZGVwZW5kZW5jaWVzKSB7XG4gIGlmIChkZXBlbmRlbmNpZXMgPT09IHZvaWQgMCkge1xuICAgIGRlcGVuZGVuY2llcyA9IFt2YWx1ZV07XG4gIH1cblxuICBjb25zdCB2YWx1ZVJlZiA9IHJlYWN0LnVzZVJlZih2YWx1ZSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ICE9PSB2YWx1ZSkge1xuICAgICAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgfSwgZGVwZW5kZW5jaWVzKTtcbiAgcmV0dXJuIHZhbHVlUmVmO1xufVxuXG5mdW5jdGlvbiB1c2VMYXp5TWVtbyhjYWxsYmFjaywgZGVwZW5kZW5jaWVzKSB7XG4gIGNvbnN0IHZhbHVlUmVmID0gcmVhY3QudXNlUmVmKCk7XG4gIHJldHVybiByZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNhbGxiYWNrKHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgWy4uLmRlcGVuZGVuY2llc10pO1xufVxuXG5mdW5jdGlvbiB1c2VOb2RlUmVmKG9uQ2hhbmdlKSB7XG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IHVzZUV2ZW50KG9uQ2hhbmdlKTtcbiAgY29uc3Qgbm9kZSA9IHJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3Qgc2V0Tm9kZVJlZiA9IHJlYWN0LnVzZUNhbGxiYWNrKGVsZW1lbnQgPT4ge1xuICAgIGlmIChlbGVtZW50ICE9PSBub2RlLmN1cnJlbnQpIHtcbiAgICAgIG9uQ2hhbmdlSGFuZGxlciA9PSBudWxsID8gdm9pZCAwIDogb25DaGFuZ2VIYW5kbGVyKGVsZW1lbnQsIG5vZGUuY3VycmVudCk7XG4gICAgfVxuXG4gICAgbm9kZS5jdXJyZW50ID0gZWxlbWVudDtcbiAgfSwgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgW10pO1xuICByZXR1cm4gW25vZGUsIHNldE5vZGVSZWZdO1xufVxuXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICBjb25zdCByZWYgPSByZWFjdC51c2VSZWYoKTtcbiAgcmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG5sZXQgaWRzID0ge307XG5mdW5jdGlvbiB1c2VVbmlxdWVJZChwcmVmaXgsIHZhbHVlKSB7XG4gIHJldHVybiByZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IGlkc1twcmVmaXhdID09IG51bGwgPyAwIDogaWRzW3ByZWZpeF0gKyAxO1xuICAgIGlkc1twcmVmaXhdID0gaWQ7XG4gICAgcmV0dXJuIHByZWZpeCArIFwiLVwiICsgaWQ7XG4gIH0sIFtwcmVmaXgsIHZhbHVlXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkanVzdG1lbnRGbihtb2RpZmllcikge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhZGp1c3RtZW50cyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhZGp1c3RtZW50c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkanVzdG1lbnRzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGFkanVzdG1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhhZGp1c3RtZW50KTtcblxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZUFkanVzdG1lbnRdIG9mIGVudHJpZXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhY2N1bXVsYXRvcltrZXldO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlICsgbW9kaWZpZXIgKiB2YWx1ZUFkanVzdG1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sIHsgLi4ub2JqZWN0XG4gICAgfSk7XG4gIH07XG59XG5cbmNvbnN0IGFkZCA9IC8qI19fUFVSRV9fKi9jcmVhdGVBZGp1c3RtZW50Rm4oMSk7XG5jb25zdCBzdWJ0cmFjdCA9IC8qI19fUFVSRV9fKi9jcmVhdGVBZGp1c3RtZW50Rm4oLTEpO1xuXG5mdW5jdGlvbiBoYXNWaWV3cG9ydFJlbGF0aXZlQ29vcmRpbmF0ZXMoZXZlbnQpIHtcbiAgcmV0dXJuICdjbGllbnRYJyBpbiBldmVudCAmJiAnY2xpZW50WScgaW4gZXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzS2V5Ym9hcmRFdmVudChldmVudCkge1xuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIEtleWJvYXJkRXZlbnRcbiAgfSA9IGdldFdpbmRvdyhldmVudC50YXJnZXQpO1xuICByZXR1cm4gS2V5Ym9hcmRFdmVudCAmJiBldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudCkge1xuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIFRvdWNoRXZlbnRcbiAgfSA9IGdldFdpbmRvdyhldmVudC50YXJnZXQpO1xuICByZXR1cm4gVG91Y2hFdmVudCAmJiBldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQ7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBub3JtYWxpemVkIHggYW5kIHkgY29vcmRpbmF0ZXMgZm9yIG1vdXNlIGFuZCB0b3VjaCBldmVudHMuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KSB7XG4gIGlmIChpc1RvdWNoRXZlbnQoZXZlbnQpKSB7XG4gICAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2xpZW50WDogeCxcbiAgICAgICAgY2xpZW50WTogeVxuICAgICAgfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNsaWVudFg6IHgsXG4gICAgICAgIGNsaWVudFk6IHlcbiAgICAgIH0gPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1ZpZXdwb3J0UmVsYXRpdmVDb29yZGluYXRlcyhldmVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IGV2ZW50LmNsaWVudFlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IENTUyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgVHJhbnNsYXRlOiB7XG4gICAgdG9TdHJpbmcodHJhbnNmb3JtKSB7XG4gICAgICBpZiAoIXRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IHRyYW5zZm9ybTtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZTNkKFwiICsgKHggPyBNYXRoLnJvdW5kKHgpIDogMCkgKyBcInB4LCBcIiArICh5ID8gTWF0aC5yb3VuZCh5KSA6IDApICsgXCJweCwgMClcIjtcbiAgICB9XG5cbiAgfSxcbiAgU2NhbGU6IHtcbiAgICB0b1N0cmluZyh0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICghdHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBzY2FsZVgsXG4gICAgICAgIHNjYWxlWVxuICAgICAgfSA9IHRyYW5zZm9ybTtcbiAgICAgIHJldHVybiBcInNjYWxlWChcIiArIHNjYWxlWCArIFwiKSBzY2FsZVkoXCIgKyBzY2FsZVkgKyBcIilcIjtcbiAgICB9XG5cbiAgfSxcbiAgVHJhbnNmb3JtOiB7XG4gICAgdG9TdHJpbmcodHJhbnNmb3JtKSB7XG4gICAgICBpZiAoIXRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbQ1NTLlRyYW5zbGF0ZS50b1N0cmluZyh0cmFuc2Zvcm0pLCBDU1MuU2NhbGUudG9TdHJpbmcodHJhbnNmb3JtKV0uam9pbignICcpO1xuICAgIH1cblxuICB9LFxuICBUcmFuc2l0aW9uOiB7XG4gICAgdG9TdHJpbmcoX3JlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmdcbiAgICAgIH0gPSBfcmVmO1xuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgXCIgXCIgKyBkdXJhdGlvbiArIFwibXMgXCIgKyBlYXNpbmc7XG4gICAgfVxuXG4gIH1cbn0pO1xuXG5jb25zdCBTRUxFQ1RPUiA9ICdhLGZyYW1lLGlmcmFtZSxpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSk6bm90KDpkaXNhYmxlZCksc2VsZWN0Om5vdCg6ZGlzYWJsZWQpLHRleHRhcmVhOm5vdCg6ZGlzYWJsZWQpLGJ1dHRvbjpub3QoOmRpc2FibGVkKSwqW3RhYmluZGV4XSc7XG5mdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2FibGVOb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubWF0Y2hlcyhTRUxFQ1RPUikpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1IpO1xufVxuXG5leHBvcnRzLkNTUyA9IENTUztcbmV4cG9ydHMuYWRkID0gYWRkO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007XG5leHBvcnRzLmZpbmRGaXJzdEZvY3VzYWJsZU5vZGUgPSBmaW5kRmlyc3RGb2N1c2FibGVOb2RlO1xuZXhwb3J0cy5nZXRFdmVudENvb3JkaW5hdGVzID0gZ2V0RXZlbnRDb29yZGluYXRlcztcbmV4cG9ydHMuZ2V0T3duZXJEb2N1bWVudCA9IGdldE93bmVyRG9jdW1lbnQ7XG5leHBvcnRzLmdldFdpbmRvdyA9IGdldFdpbmRvdztcbmV4cG9ydHMuaGFzVmlld3BvcnRSZWxhdGl2ZUNvb3JkaW5hdGVzID0gaGFzVmlld3BvcnRSZWxhdGl2ZUNvb3JkaW5hdGVzO1xuZXhwb3J0cy5pc0RvY3VtZW50ID0gaXNEb2N1bWVudDtcbmV4cG9ydHMuaXNIVE1MRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQ7XG5leHBvcnRzLmlzS2V5Ym9hcmRFdmVudCA9IGlzS2V5Ym9hcmRFdmVudDtcbmV4cG9ydHMuaXNOb2RlID0gaXNOb2RlO1xuZXhwb3J0cy5pc1NWR0VsZW1lbnQgPSBpc1NWR0VsZW1lbnQ7XG5leHBvcnRzLmlzVG91Y2hFdmVudCA9IGlzVG91Y2hFdmVudDtcbmV4cG9ydHMuaXNXaW5kb3cgPSBpc1dpbmRvdztcbmV4cG9ydHMuc3VidHJhY3QgPSBzdWJ0cmFjdDtcbmV4cG9ydHMudXNlQ29tYmluZWRSZWZzID0gdXNlQ29tYmluZWRSZWZzO1xuZXhwb3J0cy51c2VFdmVudCA9IHVzZUV2ZW50O1xuZXhwb3J0cy51c2VJbnRlcnZhbCA9IHVzZUludGVydmFsO1xuZXhwb3J0cy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTGF0ZXN0VmFsdWUgPSB1c2VMYXRlc3RWYWx1ZTtcbmV4cG9ydHMudXNlTGF6eU1lbW8gPSB1c2VMYXp5TWVtbztcbmV4cG9ydHMudXNlTm9kZVJlZiA9IHVzZU5vZGVSZWY7XG5leHBvcnRzLnVzZVByZXZpb3VzID0gdXNlUHJldmlvdXM7XG5leHBvcnRzLnVzZVVuaXF1ZUlkID0gdXNlVW5pcXVlSWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsaXRpZXMuY2pzLmRldmVsb3BtZW50LmpzLm1hcFxuIiwiXG4ndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy5janMucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy5janMuZGV2ZWxvcG1lbnQuanMnKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG5cbmNvbnN0IGhpZGRlblN0eWxlcyA9IHtcbiAgZGlzcGxheTogJ25vbmUnXG59O1xuZnVuY3Rpb24gSGlkZGVuVGV4dChfcmVmKSB7XG4gIGxldCB7XG4gICAgaWQsXG4gICAgdmFsdWVcbiAgfSA9IF9yZWY7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogaWQsXG4gICAgc3R5bGU6IGhpZGRlblN0eWxlc1xuICB9LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIExpdmVSZWdpb24oX3JlZikge1xuICBsZXQge1xuICAgIGlkLFxuICAgIGFubm91bmNlbWVudCxcbiAgICBhcmlhTGl2ZVR5cGUgPSBcImFzc2VydGl2ZVwiXG4gIH0gPSBfcmVmO1xuICAvLyBIaWRlIGVsZW1lbnQgdmlzdWFsbHkgYnV0IGtlZXAgaXQgcmVhZGFibGUgYnkgc2NyZWVuIHJlYWRlcnNcbiAgY29uc3QgdmlzdWFsbHlIaWRkZW4gPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiAxLFxuICAgIG1hcmdpbjogLTEsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBjbGlwUGF0aDogJ2luc2V0KDEwMCUpJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IGlkLFxuICAgIHN0eWxlOiB2aXN1YWxseUhpZGRlbixcbiAgICByb2xlOiBcInN0YXR1c1wiLFxuICAgIFwiYXJpYS1saXZlXCI6IGFyaWFMaXZlVHlwZSxcbiAgICBcImFyaWEtYXRvbWljXCI6IHRydWVcbiAgfSwgYW5ub3VuY2VtZW50KTtcbn1cblxuZnVuY3Rpb24gdXNlQW5ub3VuY2VtZW50KCkge1xuICBjb25zdCBbYW5ub3VuY2VtZW50LCBzZXRBbm5vdW5jZW1lbnRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBhbm5vdW5jZSA9IFJlYWN0LnVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgc2V0QW5ub3VuY2VtZW50KHZhbHVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHtcbiAgICBhbm5vdW5jZSxcbiAgICBhbm5vdW5jZW1lbnRcbiAgfTtcbn1cblxuZXhwb3J0cy5IaWRkZW5UZXh0ID0gSGlkZGVuVGV4dDtcbmV4cG9ydHMuTGl2ZVJlZ2lvbiA9IExpdmVSZWdpb247XG5leHBvcnRzLnVzZUFubm91bmNlbWVudCA9IHVzZUFubm91bmNlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY2Vzc2liaWxpdHkuY2pzLmRldmVsb3BtZW50LmpzLm1hcFxuIiwiXG4ndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2FjY2Vzc2liaWxpdHkuY2pzLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9hY2Nlc3NpYmlsaXR5LmNqcy5kZXZlbG9wbWVudC5qcycpXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcbnZhciByZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJ0BkbmQta2l0L3V0aWxpdGllcycpO1xudmFyIGFjY2Vzc2liaWxpdHkgPSByZXF1aXJlKCdAZG5kLWtpdC9hY2Nlc3NpYmlsaXR5Jyk7XG5cbmNvbnN0IERuZE1vbml0b3JDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmZ1bmN0aW9uIHVzZURuZE1vbml0b3IobGlzdGVuZXIpIHtcbiAgY29uc3QgcmVnaXN0ZXJMaXN0ZW5lciA9IFJlYWN0LnVzZUNvbnRleHQoRG5kTW9uaXRvckNvbnRleHQpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVnaXN0ZXJMaXN0ZW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VEbmRNb25pdG9yIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBjaGlsZHJlbiBvZiA8RG5kQ29udGV4dD4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW2xpc3RlbmVyLCByZWdpc3Rlckxpc3RlbmVyXSk7XG59XG5cbmZ1bmN0aW9uIHVzZURuZE1vbml0b3JQcm92aWRlcigpIHtcbiAgY29uc3QgW2xpc3RlbmVyc10gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBuZXcgU2V0KCkpO1xuICBjb25zdCByZWdpc3Rlckxpc3RlbmVyID0gUmVhY3QudXNlQ2FsbGJhY2sobGlzdGVuZXIgPT4ge1xuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgfSwgW2xpc3RlbmVyc10pO1xuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNhbGxiYWNrKF9yZWYgPT4ge1xuICAgIGxldCB7XG4gICAgICB0eXBlLFxuICAgICAgZXZlbnRcbiAgICB9ID0gX3JlZjtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICB2YXIgX2xpc3RlbmVyJHR5cGU7XG5cbiAgICAgIHJldHVybiAoX2xpc3RlbmVyJHR5cGUgPSBsaXN0ZW5lclt0eXBlXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9saXN0ZW5lciR0eXBlLmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICB9KTtcbiAgfSwgW2xpc3RlbmVyc10pO1xuICByZXR1cm4gW2Rpc3BhdGNoLCByZWdpc3Rlckxpc3RlbmVyXTtcbn1cblxuY29uc3QgZGVmYXVsdFNjcmVlblJlYWRlckluc3RydWN0aW9ucyA9IHtcbiAgZHJhZ2dhYmxlOiBcIlxcbiAgICBUbyBwaWNrIHVwIGEgZHJhZ2dhYmxlIGl0ZW0sIHByZXNzIHRoZSBzcGFjZSBiYXIuXFxuICAgIFdoaWxlIGRyYWdnaW5nLCB1c2UgdGhlIGFycm93IGtleXMgdG8gbW92ZSB0aGUgaXRlbS5cXG4gICAgUHJlc3Mgc3BhY2UgYWdhaW4gdG8gZHJvcCB0aGUgaXRlbSBpbiBpdHMgbmV3IHBvc2l0aW9uLCBvciBwcmVzcyBlc2NhcGUgdG8gY2FuY2VsLlxcbiAgXCJcbn07XG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgb25EcmFnU3RhcnQoX3JlZikge1xuICAgIGxldCB7XG4gICAgICBhY3RpdmVcbiAgICB9ID0gX3JlZjtcbiAgICByZXR1cm4gXCJQaWNrZWQgdXAgZHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIi5cIjtcbiAgfSxcblxuICBvbkRyYWdPdmVyKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIG92ZXJcbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAob3Zlcikge1xuICAgICAgcmV0dXJuIFwiRHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIiB3YXMgbW92ZWQgb3ZlciBkcm9wcGFibGUgYXJlYSBcIiArIG92ZXIuaWQgKyBcIi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJEcmFnZ2FibGUgaXRlbSBcIiArIGFjdGl2ZS5pZCArIFwiIGlzIG5vIGxvbmdlciBvdmVyIGEgZHJvcHBhYmxlIGFyZWEuXCI7XG4gIH0sXG5cbiAgb25EcmFnRW5kKF9yZWYzKSB7XG4gICAgbGV0IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIG92ZXJcbiAgICB9ID0gX3JlZjM7XG5cbiAgICBpZiAob3Zlcikge1xuICAgICAgcmV0dXJuIFwiRHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIiB3YXMgZHJvcHBlZCBvdmVyIGRyb3BwYWJsZSBhcmVhIFwiICsgb3Zlci5pZDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJEcmFnZ2FibGUgaXRlbSBcIiArIGFjdGl2ZS5pZCArIFwiIHdhcyBkcm9wcGVkLlwiO1xuICB9LFxuXG4gIG9uRHJhZ0NhbmNlbChfcmVmNCkge1xuICAgIGxldCB7XG4gICAgICBhY3RpdmVcbiAgICB9ID0gX3JlZjQ7XG4gICAgcmV0dXJuIFwiRHJhZ2dpbmcgd2FzIGNhbmNlbGxlZC4gRHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIiB3YXMgZHJvcHBlZC5cIjtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBBY2Nlc3NpYmlsaXR5KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBhbm5vdW5jZW1lbnRzID0gZGVmYXVsdEFubm91bmNlbWVudHMsXG4gICAgY29udGFpbmVyLFxuICAgIGhpZGRlblRleHREZXNjcmliZWRCeUlkLFxuICAgIHNjcmVlblJlYWRlckluc3RydWN0aW9ucyA9IGRlZmF1bHRTY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBhbm5vdW5jZSxcbiAgICBhbm5vdW5jZW1lbnRcbiAgfSA9IGFjY2Vzc2liaWxpdHkudXNlQW5ub3VuY2VtZW50KCk7XG4gIGNvbnN0IGxpdmVSZWdpb25JZCA9IHV0aWxpdGllcy51c2VVbmlxdWVJZChcIkRuZExpdmVSZWdpb25cIik7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHVzZURuZE1vbml0b3IoUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIG9uRHJhZ1N0YXJ0KF9yZWYyKSB7XG4gICAgICBsZXQge1xuICAgICAgICBhY3RpdmVcbiAgICAgIH0gPSBfcmVmMjtcbiAgICAgIGFubm91bmNlKGFubm91bmNlbWVudHMub25EcmFnU3RhcnQoe1xuICAgICAgICBhY3RpdmVcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgb25EcmFnTW92ZShfcmVmMykge1xuICAgICAgbGV0IHtcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBvdmVyXG4gICAgICB9ID0gX3JlZjM7XG5cbiAgICAgIGlmIChhbm5vdW5jZW1lbnRzLm9uRHJhZ01vdmUpIHtcbiAgICAgICAgYW5ub3VuY2UoYW5ub3VuY2VtZW50cy5vbkRyYWdNb3ZlKHtcbiAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgb3ZlclxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uRHJhZ092ZXIoX3JlZjQpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSA9IF9yZWY0O1xuICAgICAgYW5ub3VuY2UoYW5ub3VuY2VtZW50cy5vbkRyYWdPdmVyKHtcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBvdmVyXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIG9uRHJhZ0VuZChfcmVmNSkge1xuICAgICAgbGV0IHtcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBvdmVyXG4gICAgICB9ID0gX3JlZjU7XG4gICAgICBhbm5vdW5jZShhbm5vdW5jZW1lbnRzLm9uRHJhZ0VuZCh7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBvbkRyYWdDYW5jZWwoX3JlZjYpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSA9IF9yZWY2O1xuICAgICAgYW5ub3VuY2UoYW5ub3VuY2VtZW50cy5vbkRyYWdDYW5jZWwoe1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIG92ZXJcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgfSksIFthbm5vdW5jZSwgYW5ub3VuY2VtZW50c10pKTtcblxuICBpZiAoIW1vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1hcmt1cCA9IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYWNjZXNzaWJpbGl0eS5IaWRkZW5UZXh0LCB7XG4gICAgaWQ6IGhpZGRlblRleHREZXNjcmliZWRCeUlkLFxuICAgIHZhbHVlOiBzY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMuZHJhZ2dhYmxlXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFjY2Vzc2liaWxpdHkuTGl2ZVJlZ2lvbiwge1xuICAgIGlkOiBsaXZlUmVnaW9uSWQsXG4gICAgYW5ub3VuY2VtZW50OiBhbm5vdW5jZW1lbnRcbiAgfSkpO1xuICByZXR1cm4gY29udGFpbmVyID8gcmVhY3REb20uY3JlYXRlUG9ydGFsKG1hcmt1cCwgY29udGFpbmVyKSA6IG1hcmt1cDtcbn1cblxudmFyIEFjdGlvbjtcblxuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgQWN0aW9uW1wiRHJhZ1N0YXJ0XCJdID0gXCJkcmFnU3RhcnRcIjtcbiAgQWN0aW9uW1wiRHJhZ01vdmVcIl0gPSBcImRyYWdNb3ZlXCI7XG4gIEFjdGlvbltcIkRyYWdFbmRcIl0gPSBcImRyYWdFbmRcIjtcbiAgQWN0aW9uW1wiRHJhZ0NhbmNlbFwiXSA9IFwiZHJhZ0NhbmNlbFwiO1xuICBBY3Rpb25bXCJEcmFnT3ZlclwiXSA9IFwiZHJhZ092ZXJcIjtcbiAgQWN0aW9uW1wiUmVnaXN0ZXJEcm9wcGFibGVcIl0gPSBcInJlZ2lzdGVyRHJvcHBhYmxlXCI7XG4gIEFjdGlvbltcIlNldERyb3BwYWJsZURpc2FibGVkXCJdID0gXCJzZXREcm9wcGFibGVEaXNhYmxlZFwiO1xuICBBY3Rpb25bXCJVbnJlZ2lzdGVyRHJvcHBhYmxlXCJdID0gXCJ1bnJlZ2lzdGVyRHJvcHBhYmxlXCI7XG59KShBY3Rpb24gfHwgKEFjdGlvbiA9IHt9KSk7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiB1c2VTZW5zb3Ioc2Vuc29yLCBvcHRpb25zKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgc2Vuc29yLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fVxuICB9KSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbc2Vuc29yLCBvcHRpb25zXSk7XG59XG5cbmZ1bmN0aW9uIHVzZVNlbnNvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzZW5zb3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNlbnNvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBbLi4uc2Vuc29yc10uZmlsdGVyKHNlbnNvciA9PiBzZW5zb3IgIT0gbnVsbCksIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgWy4uLnNlbnNvcnNdKTtcbn1cblxuY29uc3QgZGVmYXVsdENvb3JkaW5hdGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICB4OiAwLFxuICB5OiAwXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xyXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlQmV0d2VlbihwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMS54IC0gcDIueCwgMikgKyBNYXRoLnBvdyhwMS55IC0gcDIueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVRyYW5zZm9ybU9yaWdpbihldmVudCwgcmVjdCkge1xuICBjb25zdCBldmVudENvb3JkaW5hdGVzID0gdXRpbGl0aWVzLmdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpO1xuXG4gIGlmICghZXZlbnRDb29yZGluYXRlcykge1xuICAgIHJldHVybiAnMCAwJztcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICB4OiAoZXZlbnRDb29yZGluYXRlcy54IC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGggKiAxMDAsXG4gICAgeTogKGV2ZW50Q29vcmRpbmF0ZXMueSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0ICogMTAwXG4gIH07XG4gIHJldHVybiB0cmFuc2Zvcm1PcmlnaW4ueCArIFwiJSBcIiArIHRyYW5zZm9ybU9yaWdpbi55ICsgXCIlXCI7XG59XG5cbi8qKlxyXG4gKiBTb3J0IGNvbGxpc2lvbnMgZnJvbSBzbWFsbGVzdCB0byBncmVhdGVzdCB2YWx1ZVxyXG4gKi9cbmZ1bmN0aW9uIHNvcnRDb2xsaXNpb25zQXNjKF9yZWYsIF9yZWYyKSB7XG4gIGxldCB7XG4gICAgZGF0YToge1xuICAgICAgdmFsdWU6IGFcbiAgICB9XG4gIH0gPSBfcmVmO1xuICBsZXQge1xuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiBiXG4gICAgfVxuICB9ID0gX3JlZjI7XG4gIHJldHVybiBhIC0gYjtcbn1cbi8qKlxyXG4gKiBTb3J0IGNvbGxpc2lvbnMgZnJvbSBncmVhdGVzdCB0byBzbWFsbGVzdCB2YWx1ZVxyXG4gKi9cblxuZnVuY3Rpb24gc29ydENvbGxpc2lvbnNEZXNjKF9yZWYzLCBfcmVmNCkge1xuICBsZXQge1xuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiBhXG4gICAgfVxuICB9ID0gX3JlZjM7XG4gIGxldCB7XG4gICAgZGF0YToge1xuICAgICAgdmFsdWU6IGJcbiAgICB9XG4gIH0gPSBfcmVmNDtcbiAgcmV0dXJuIGIgLSBhO1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjb3JuZXJzIG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlOlxyXG4gKiBbVG9wTGVmdCB7eCwgeX0sIFRvcFJpZ2h0IHt4LCB5fSwgQm90dG9tTGVmdCB7eCwgeX0sIEJvdHRvbVJpZ2h0IHt4LCB5fV1cclxuICovXG5cbmZ1bmN0aW9uIGNvcm5lcnNPZlJlY3RhbmdsZShfcmVmNSkge1xuICBsZXQge1xuICAgIGxlZnQsXG4gICAgdG9wLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aFxuICB9ID0gX3JlZjU7XG4gIHJldHVybiBbe1xuICAgIHg6IGxlZnQsXG4gICAgeTogdG9wXG4gIH0sIHtcbiAgICB4OiBsZWZ0ICsgd2lkdGgsXG4gICAgeTogdG9wXG4gIH0sIHtcbiAgICB4OiBsZWZ0LFxuICAgIHk6IHRvcCArIGhlaWdodFxuICB9LCB7XG4gICAgeDogbGVmdCArIHdpZHRoLFxuICAgIHk6IHRvcCArIGhlaWdodFxuICB9XTtcbn1cbmZ1bmN0aW9uIGdldEZpcnN0Q29sbGlzaW9uKGNvbGxpc2lvbnMsIHByb3BlcnR5KSB7XG4gIGlmICghY29sbGlzaW9ucyB8fCBjb2xsaXNpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgW2ZpcnN0Q29sbGlzaW9uXSA9IGNvbGxpc2lvbnM7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGZpcnN0Q29sbGlzaW9uW3Byb3BlcnR5XSA6IGZpcnN0Q29sbGlzaW9uO1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlciBvZiBhIGdpdmVuIENsaWVudFJlY3RcclxuICovXG5cbmZ1bmN0aW9uIGNlbnRlck9mUmVjdGFuZ2xlKHJlY3QsIGxlZnQsIHRvcCkge1xuICBpZiAobGVmdCA9PT0gdm9pZCAwKSB7XG4gICAgbGVmdCA9IHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmICh0b3AgPT09IHZvaWQgMCkge1xuICAgIHRvcCA9IHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBsZWZ0ICsgcmVjdC53aWR0aCAqIDAuNSxcbiAgICB5OiB0b3AgKyByZWN0LmhlaWdodCAqIDAuNVxuICB9O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNsb3Nlc3QgcmVjdGFuZ2xlcyBmcm9tIGFuIGFycmF5IG9mIHJlY3RhbmdsZXMgdG8gdGhlIGNlbnRlciBvZiBhIGdpdmVuXHJcbiAqIHJlY3RhbmdsZS5cclxuICovXG5cblxuY29uc3QgY2xvc2VzdENlbnRlciA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGNvbGxpc2lvblJlY3QsXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVyc1xuICB9ID0gX3JlZjtcbiAgY29uc3QgY2VudGVyUmVjdCA9IGNlbnRlck9mUmVjdGFuZ2xlKGNvbGxpc2lvblJlY3QsIGNvbGxpc2lvblJlY3QubGVmdCwgY29sbGlzaW9uUmVjdC50b3ApO1xuICBjb25zdCBjb2xsaXNpb25zID0gW107XG5cbiAgZm9yIChjb25zdCBkcm9wcGFibGVDb250YWluZXIgb2YgZHJvcHBhYmxlQ29udGFpbmVycykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkXG4gICAgfSA9IGRyb3BwYWJsZUNvbnRhaW5lcjtcbiAgICBjb25zdCByZWN0ID0gZHJvcHBhYmxlUmVjdHMuZ2V0KGlkKTtcblxuICAgIGlmIChyZWN0KSB7XG4gICAgICBjb25zdCBkaXN0QmV0d2VlbiA9IGRpc3RhbmNlQmV0d2VlbihjZW50ZXJPZlJlY3RhbmdsZShyZWN0KSwgY2VudGVyUmVjdCk7XG4gICAgICBjb2xsaXNpb25zLnB1c2goe1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGRyb3BwYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICB2YWx1ZTogZGlzdEJldHdlZW5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbGxpc2lvbnMuc29ydChzb3J0Q29sbGlzaW9uc0FzYyk7XG59O1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgY2xvc2VzdCByZWN0YW5nbGVzIGZyb20gYW4gYXJyYXkgb2YgcmVjdGFuZ2xlcyB0byB0aGUgY29ybmVycyBvZlxyXG4gKiBhbm90aGVyIHJlY3RhbmdsZS5cclxuICovXG5cbmNvbnN0IGNsb3Nlc3RDb3JuZXJzID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgY29sbGlzaW9uUmVjdCxcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBkcm9wcGFibGVDb250YWluZXJzXG4gIH0gPSBfcmVmO1xuICBjb25zdCBjb3JuZXJzID0gY29ybmVyc09mUmVjdGFuZ2xlKGNvbGxpc2lvblJlY3QpO1xuICBjb25zdCBjb2xsaXNpb25zID0gW107XG5cbiAgZm9yIChjb25zdCBkcm9wcGFibGVDb250YWluZXIgb2YgZHJvcHBhYmxlQ29udGFpbmVycykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkXG4gICAgfSA9IGRyb3BwYWJsZUNvbnRhaW5lcjtcbiAgICBjb25zdCByZWN0ID0gZHJvcHBhYmxlUmVjdHMuZ2V0KGlkKTtcblxuICAgIGlmIChyZWN0KSB7XG4gICAgICBjb25zdCByZWN0Q29ybmVycyA9IGNvcm5lcnNPZlJlY3RhbmdsZShyZWN0KTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IGNvcm5lcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY29ybmVyLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBkaXN0YW5jZUJldHdlZW4ocmVjdENvcm5lcnNbaW5kZXhdLCBjb3JuZXIpO1xuICAgICAgfSwgMCk7XG4gICAgICBjb25zdCBlZmZlY3RpdmVEaXN0YW5jZSA9IE51bWJlcigoZGlzdGFuY2VzIC8gNCkudG9GaXhlZCg0KSk7XG4gICAgICBjb2xsaXNpb25zLnB1c2goe1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGRyb3BwYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICB2YWx1ZTogZWZmZWN0aXZlRGlzdGFuY2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbGxpc2lvbnMuc29ydChzb3J0Q29sbGlzaW9uc0FzYyk7XG59O1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW5nIHJlY3RhbmdsZSBhcmVhIGJldHdlZW4gdHdvIHJlY3RhbmdsZXNcclxuICovXG5cbmZ1bmN0aW9uIGdldEludGVyc2VjdGlvblJhdGlvKGVudHJ5LCB0YXJnZXQpIHtcbiAgY29uc3QgdG9wID0gTWF0aC5tYXgodGFyZ2V0LnRvcCwgZW50cnkudG9wKTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWF4KHRhcmdldC5sZWZ0LCBlbnRyeS5sZWZ0KTtcbiAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0YXJnZXQubGVmdCArIHRhcmdldC53aWR0aCwgZW50cnkubGVmdCArIGVudHJ5LndpZHRoKTtcbiAgY29uc3QgYm90dG9tID0gTWF0aC5taW4odGFyZ2V0LnRvcCArIHRhcmdldC5oZWlnaHQsIGVudHJ5LnRvcCArIGVudHJ5LmhlaWdodCk7XG4gIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgaWYgKGxlZnQgPCByaWdodCAmJiB0b3AgPCBib3R0b20pIHtcbiAgICBjb25zdCB0YXJnZXRBcmVhID0gdGFyZ2V0LndpZHRoICogdGFyZ2V0LmhlaWdodDtcbiAgICBjb25zdCBlbnRyeUFyZWEgPSBlbnRyeS53aWR0aCAqIGVudHJ5LmhlaWdodDtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25BcmVhID0gd2lkdGggKiBoZWlnaHQ7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uUmF0aW8gPSBpbnRlcnNlY3Rpb25BcmVhIC8gKHRhcmdldEFyZWEgKyBlbnRyeUFyZWEgLSBpbnRlcnNlY3Rpb25BcmVhKTtcbiAgICByZXR1cm4gTnVtYmVyKGludGVyc2VjdGlvblJhdGlvLnRvRml4ZWQoNCkpO1xuICB9IC8vIFJlY3RhbmdsZXMgZG8gbm90IG92ZXJsYXAsIG9yIG92ZXJsYXAgaGFzIGFuIGFyZWEgb2YgemVybyAoZWRnZS9jb3JuZXIgb3ZlcmxhcClcblxuXG4gIHJldHVybiAwO1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHJlY3RhbmdsZXMgdGhhdCBoYXMgdGhlIGdyZWF0ZXN0IGludGVyc2VjdGlvbiBhcmVhIHdpdGggYSBnaXZlblxyXG4gKiByZWN0YW5nbGUgaW4gYW4gYXJyYXkgb2YgcmVjdGFuZ2xlcy5cclxuICovXG5cbmNvbnN0IHJlY3RJbnRlcnNlY3Rpb24gPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBjb2xsaXNpb25SZWN0LFxuICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGNvbGxpc2lvbnMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGRyb3BwYWJsZUNvbnRhaW5lciBvZiBkcm9wcGFibGVDb250YWluZXJzKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWRcbiAgICB9ID0gZHJvcHBhYmxlQ29udGFpbmVyO1xuICAgIGNvbnN0IHJlY3QgPSBkcm9wcGFibGVSZWN0cy5nZXQoaWQpO1xuXG4gICAgaWYgKHJlY3QpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvblJhdGlvID0gZ2V0SW50ZXJzZWN0aW9uUmF0aW8ocmVjdCwgY29sbGlzaW9uUmVjdCk7XG5cbiAgICAgIGlmIChpbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgY29sbGlzaW9ucy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkcm9wcGFibGVDb250YWluZXIsXG4gICAgICAgICAgICB2YWx1ZTogaW50ZXJzZWN0aW9uUmF0aW9cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsaXNpb25zLnNvcnQoc29ydENvbGxpc2lvbnNEZXNjKTtcbn07XG5cbi8qKlxyXG4gKiBDaGVjayBpZiBhIGdpdmVuIHBvaW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBib3VuZGluZyByZWN0YW5nbGVcclxuICovXG5cbmZ1bmN0aW9uIGlzUG9pbnRXaXRoaW5SZWN0KHBvaW50LCByZWN0KSB7XG4gIGNvbnN0IHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICBib3R0b20sXG4gICAgcmlnaHRcbiAgfSA9IHJlY3Q7XG4gIHJldHVybiB0b3AgPD0gcG9pbnQueSAmJiBwb2ludC55IDw9IGJvdHRvbSAmJiBsZWZ0IDw9IHBvaW50LnggJiYgcG9pbnQueCA8PSByaWdodDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSByZWN0YW5nbGVzIHRoYXQgdGhlIHBvaW50ZXIgaXMgaG92ZXJpbmcgb3ZlclxyXG4gKi9cblxuXG5jb25zdCBwb2ludGVyV2l0aGluID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBwb2ludGVyQ29vcmRpbmF0ZXNcbiAgfSA9IF9yZWY7XG5cbiAgaWYgKCFwb2ludGVyQ29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBjb2xsaXNpb25zID0gW107XG5cbiAgZm9yIChjb25zdCBkcm9wcGFibGVDb250YWluZXIgb2YgZHJvcHBhYmxlQ29udGFpbmVycykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkXG4gICAgfSA9IGRyb3BwYWJsZUNvbnRhaW5lcjtcbiAgICBjb25zdCByZWN0ID0gZHJvcHBhYmxlUmVjdHMuZ2V0KGlkKTtcblxuICAgIGlmIChyZWN0ICYmIGlzUG9pbnRXaXRoaW5SZWN0KHBvaW50ZXJDb29yZGluYXRlcywgcmVjdCkpIHtcbiAgICAgIC8qIFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gYSBzaW5nbGUgcmVjdGFuZ2xlIGludGVyc2VjdGluZ1xyXG4gICAgICAgKiB3aXRoIHRoZSBwb2ludGVyIGNvb3JkaW5hdGVzLiBJbiBvcmRlciB0byBzb3J0IHRoZVxyXG4gICAgICAgKiBjb2xsaWRpbmcgcmVjdGFuZ2xlcywgd2UgbWVhc3VyZSB0aGUgZGlzdGFuY2UgYmV0d2VlblxyXG4gICAgICAgKiB0aGUgcG9pbnRlciBhbmQgdGhlIGNvcm5lcnMgb2YgdGhlIGludGVyc2VjdGluZyByZWN0YW5nbGVcclxuICAgICAgICovXG4gICAgICBjb25zdCBjb3JuZXJzID0gY29ybmVyc09mUmVjdGFuZ2xlKHJlY3QpO1xuICAgICAgY29uc3QgZGlzdGFuY2VzID0gY29ybmVycy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjb3JuZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZGlzdGFuY2VCZXR3ZWVuKHBvaW50ZXJDb29yZGluYXRlcywgY29ybmVyKTtcbiAgICAgIH0sIDApO1xuICAgICAgY29uc3QgZWZmZWN0aXZlRGlzdGFuY2UgPSBOdW1iZXIoKGRpc3RhbmNlcyAvIDQpLnRvRml4ZWQoNCkpO1xuICAgICAgY29sbGlzaW9ucy5wdXNoKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkcm9wcGFibGVDb250YWluZXIsXG4gICAgICAgICAgdmFsdWU6IGVmZmVjdGl2ZURpc3RhbmNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsaXNpb25zLnNvcnQoc29ydENvbGxpc2lvbnNBc2MpO1xufTtcblxuZnVuY3Rpb24gYWRqdXN0U2NhbGUodHJhbnNmb3JtLCByZWN0MSwgcmVjdDIpIHtcbiAgcmV0dXJuIHsgLi4udHJhbnNmb3JtLFxuICAgIHNjYWxlWDogcmVjdDEgJiYgcmVjdDIgPyByZWN0MS53aWR0aCAvIHJlY3QyLndpZHRoIDogMSxcbiAgICBzY2FsZVk6IHJlY3QxICYmIHJlY3QyID8gcmVjdDEuaGVpZ2h0IC8gcmVjdDIuaGVpZ2h0IDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0RGVsdGEocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiByZWN0MSAmJiByZWN0MiA/IHtcbiAgICB4OiByZWN0MS5sZWZ0IC0gcmVjdDIubGVmdCxcbiAgICB5OiByZWN0MS50b3AgLSByZWN0Mi50b3BcbiAgfSA6IGRlZmF1bHRDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVjdEFkanVzdG1lbnRGbihtb2RpZmllcikge1xuICByZXR1cm4gZnVuY3Rpb24gYWRqdXN0Q2xpZW50UmVjdChyZWN0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFkanVzdG1lbnRzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFkanVzdG1lbnRzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRqdXN0bWVudHMucmVkdWNlKChhY2MsIGFkanVzdG1lbnQpID0+ICh7IC4uLmFjYyxcbiAgICAgIHRvcDogYWNjLnRvcCArIG1vZGlmaWVyICogYWRqdXN0bWVudC55LFxuICAgICAgYm90dG9tOiBhY2MuYm90dG9tICsgbW9kaWZpZXIgKiBhZGp1c3RtZW50LnksXG4gICAgICBsZWZ0OiBhY2MubGVmdCArIG1vZGlmaWVyICogYWRqdXN0bWVudC54LFxuICAgICAgcmlnaHQ6IGFjYy5yaWdodCArIG1vZGlmaWVyICogYWRqdXN0bWVudC54XG4gICAgfSksIHsgLi4ucmVjdFxuICAgIH0pO1xuICB9O1xufVxuY29uc3QgZ2V0QWRqdXN0ZWRSZWN0ID0gLyojX19QVVJFX18qL2NyZWF0ZVJlY3RBZGp1c3RtZW50Rm4oMSk7XG5cbmZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICBpZiAodHJhbnNmb3JtLnN0YXJ0c1dpdGgoJ21hdHJpeDNkKCcpKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtQXJyYXkgPSB0cmFuc2Zvcm0uc2xpY2UoOSwgLTEpLnNwbGl0KC8sIC8pO1xuICAgIHJldHVybiB7XG4gICAgICB4OiArdHJhbnNmb3JtQXJyYXlbMTJdLFxuICAgICAgeTogK3RyYW5zZm9ybUFycmF5WzEzXSxcbiAgICAgIHNjYWxlWDogK3RyYW5zZm9ybUFycmF5WzBdLFxuICAgICAgc2NhbGVZOiArdHJhbnNmb3JtQXJyYXlbNV1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHRyYW5zZm9ybS5zdGFydHNXaXRoKCdtYXRyaXgoJykpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1BcnJheSA9IHRyYW5zZm9ybS5zbGljZSg3LCAtMSkuc3BsaXQoLywgLyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6ICt0cmFuc2Zvcm1BcnJheVs0XSxcbiAgICAgIHk6ICt0cmFuc2Zvcm1BcnJheVs1XSxcbiAgICAgIHNjYWxlWDogK3RyYW5zZm9ybUFycmF5WzBdLFxuICAgICAgc2NhbGVZOiArdHJhbnNmb3JtQXJyYXlbM11cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGludmVyc2VUcmFuc2Zvcm0ocmVjdCwgdHJhbnNmb3JtLCB0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm0odHJhbnNmb3JtKTtcblxuICBpZiAoIXBhcnNlZFRyYW5zZm9ybSkge1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgY29uc3Qge1xuICAgIHNjYWxlWCxcbiAgICBzY2FsZVksXG4gICAgeDogdHJhbnNsYXRlWCxcbiAgICB5OiB0cmFuc2xhdGVZXG4gIH0gPSBwYXJzZWRUcmFuc2Zvcm07XG4gIGNvbnN0IHggPSByZWN0LmxlZnQgLSB0cmFuc2xhdGVYIC0gKDEgLSBzY2FsZVgpICogcGFyc2VGbG9hdCh0cmFuc2Zvcm1PcmlnaW4pO1xuICBjb25zdCB5ID0gcmVjdC50b3AgLSB0cmFuc2xhdGVZIC0gKDEgLSBzY2FsZVkpICogcGFyc2VGbG9hdCh0cmFuc2Zvcm1PcmlnaW4uc2xpY2UodHJhbnNmb3JtT3JpZ2luLmluZGV4T2YoJyAnKSArIDEpKTtcbiAgY29uc3QgdyA9IHNjYWxlWCA/IHJlY3Qud2lkdGggLyBzY2FsZVggOiByZWN0LndpZHRoO1xuICBjb25zdCBoID0gc2NhbGVZID8gcmVjdC5oZWlnaHQgLyBzY2FsZVkgOiByZWN0LmhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogdyxcbiAgICBoZWlnaHQ6IGgsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgdyxcbiAgICBib3R0b206IHkgKyBoLFxuICAgIGxlZnQ6IHhcbiAgfTtcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGlnbm9yZVRyYW5zZm9ybTogZmFsc2Vcbn07XG4vKipcclxuICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQuXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgfVxuXG4gIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBpZiAob3B0aW9ucy5pZ25vcmVUcmFuc2Zvcm0pIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm1PcmlnaW5cbiAgICB9ID0gdXRpbGl0aWVzLmdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgcmVjdCA9IGludmVyc2VUcmFuc2Zvcm0ocmVjdCwgdHJhbnNmb3JtLCB0cmFuc2Zvcm1PcmlnaW4pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYm90dG9tLFxuICAgIHJpZ2h0XG4gIH0gPSByZWN0O1xuICByZXR1cm4ge1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBib3R0b20sXG4gICAgcmlnaHRcbiAgfTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydC5cclxuICpcclxuICogQHJlbWFya3NcclxuICogVGhlIENsaWVudFJlY3QgcmV0dXJuZWQgYnkgdGhpcyBtZXRob2QgZG9lcyBub3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtc1xyXG4gKiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IGl0IG1lYXN1cmVzLlxyXG4gKlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtQWdub3N0aWNDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENsaWVudFJlY3QoZWxlbWVudCwge1xuICAgIGlnbm9yZVRyYW5zZm9ybTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93Q2xpZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5pbm5lcldpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LmlubmVySGVpZ2h0O1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiB3aWR0aCxcbiAgICBib3R0b206IGhlaWdodCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNGaXhlZChub2RlLCBjb21wdXRlZFN0eWxlKSB7XG4gIGlmIChjb21wdXRlZFN0eWxlID09PSB2b2lkIDApIHtcbiAgICBjb21wdXRlZFN0eWxlID0gdXRpbGl0aWVzLmdldFdpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCc7XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtZW50LCBjb21wdXRlZFN0eWxlKSB7XG4gIGlmIChjb21wdXRlZFN0eWxlID09PSB2b2lkIDApIHtcbiAgICBjb21wdXRlZFN0eWxlID0gdXRpbGl0aWVzLmdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9XG5cbiAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvO1xuICBjb25zdCBwcm9wZXJ0aWVzID0gWydvdmVyZmxvdycsICdvdmVyZmxvd1gnLCAnb3ZlcmZsb3dZJ107XG4gIHJldHVybiBwcm9wZXJ0aWVzLnNvbWUocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBvdmVyZmxvd1JlZ2V4LnRlc3QodmFsdWUpIDogZmFsc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKGVsZW1lbnQsIGxpbWl0KSB7XG4gIGNvbnN0IHNjcm9sbFBhcmVudHMgPSBbXTtcblxuICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZUFuY2VzdG9ycyhub2RlKSB7XG4gICAgaWYgKGxpbWl0ICE9IG51bGwgJiYgc2Nyb2xsUGFyZW50cy5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxpdGllcy5pc0RvY3VtZW50KG5vZGUpICYmIG5vZGUuc2Nyb2xsaW5nRWxlbWVudCAhPSBudWxsICYmICFzY3JvbGxQYXJlbnRzLmluY2x1ZGVzKG5vZGUuc2Nyb2xsaW5nRWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMucHVzaChub2RlLnNjcm9sbGluZ0VsZW1lbnQpO1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNIVE1MRWxlbWVudChub2RlKSB8fCB1dGlsaXRpZXMuaXNTVkdFbGVtZW50KG5vZGUpKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsUGFyZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHV0aWxpdGllcy5nZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIGlmIChub2RlICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoaXNTY3JvbGxhYmxlKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSB7XG4gICAgICAgIHNjcm9sbFBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNGaXhlZChub2RlLCBjb21wdXRlZFN0eWxlKSkge1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmRTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgfVxuXG4gIHJldHVybiBmaW5kU2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGdldEZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yKG5vZGUpIHtcbiAgY29uc3QgW2ZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yXSA9IGdldFNjcm9sbGFibGVBbmNlc3RvcnMobm9kZSwgMSk7XG4gIHJldHVybiBmaXJzdFNjcm9sbGFibGVBbmNlc3RvciAhPSBudWxsID8gZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIGlmICghdXRpbGl0aWVzLmNhblVzZURPTSB8fCAhZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1dpbmRvdyhlbGVtZW50KSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgaWYgKCF1dGlsaXRpZXMuaXNOb2RlKGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzRG9jdW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudCA9PT0gdXRpbGl0aWVzLmdldE93bmVyRG9jdW1lbnQoZWxlbWVudCkuc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxYQ29vcmRpbmF0ZShlbGVtZW50KSB7XG4gIGlmICh1dGlsaXRpZXMuaXNXaW5kb3coZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxYO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbn1cbmZ1bmN0aW9uIGdldFNjcm9sbFlDb29yZGluYXRlKGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxpdGllcy5pc1dpbmRvdyhlbGVtZW50KSkge1xuICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5zY3JvbGxUb3A7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxDb29yZGluYXRlcyhlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgeDogZ2V0U2Nyb2xsWENvb3JkaW5hdGUoZWxlbWVudCksXG4gICAgeTogZ2V0U2Nyb2xsWUNvb3JkaW5hdGUoZWxlbWVudClcbiAgfTtcbn1cblxudmFyIERpcmVjdGlvbjtcblxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcbiAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkZvcndhcmRcIl0gPSAxXSA9IFwiRm9yd2FyZFwiO1xuICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiQmFja3dhcmRcIl0gPSAtMV0gPSBcIkJhY2t3YXJkXCI7XG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCF1dGlsaXRpZXMuY2FuVXNlRE9NIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQgPT09IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKHNjcm9sbGluZ0NvbnRhaW5lcikge1xuICBjb25zdCBtaW5TY3JvbGwgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGNvbnN0IGRpbWVuc2lvbnMgPSBpc0RvY3VtZW50U2Nyb2xsaW5nRWxlbWVudChzY3JvbGxpbmdDb250YWluZXIpID8ge1xuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICB9IDoge1xuICAgIGhlaWdodDogc2Nyb2xsaW5nQ29udGFpbmVyLmNsaWVudEhlaWdodCxcbiAgICB3aWR0aDogc2Nyb2xsaW5nQ29udGFpbmVyLmNsaWVudFdpZHRoXG4gIH07XG4gIGNvbnN0IG1heFNjcm9sbCA9IHtcbiAgICB4OiBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsV2lkdGggLSBkaW1lbnNpb25zLndpZHRoLFxuICAgIHk6IHNjcm9sbGluZ0NvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSBkaW1lbnNpb25zLmhlaWdodFxuICB9O1xuICBjb25zdCBpc1RvcCA9IHNjcm9sbGluZ0NvbnRhaW5lci5zY3JvbGxUb3AgPD0gbWluU2Nyb2xsLnk7XG4gIGNvbnN0IGlzTGVmdCA9IHNjcm9sbGluZ0NvbnRhaW5lci5zY3JvbGxMZWZ0IDw9IG1pblNjcm9sbC54O1xuICBjb25zdCBpc0JvdHRvbSA9IHNjcm9sbGluZ0NvbnRhaW5lci5zY3JvbGxUb3AgPj0gbWF4U2Nyb2xsLnk7XG4gIGNvbnN0IGlzUmlnaHQgPSBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsTGVmdCA+PSBtYXhTY3JvbGwueDtcbiAgcmV0dXJuIHtcbiAgICBpc1RvcCxcbiAgICBpc0xlZnQsXG4gICAgaXNCb3R0b20sXG4gICAgaXNSaWdodCxcbiAgICBtYXhTY3JvbGwsXG4gICAgbWluU2Nyb2xsXG4gIH07XG59XG5cbmNvbnN0IGRlZmF1bHRUaHJlc2hvbGQgPSB7XG4gIHg6IDAuMixcbiAgeTogMC4yXG59O1xuZnVuY3Rpb24gZ2V0U2Nyb2xsRGlyZWN0aW9uQW5kU3BlZWQoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxDb250YWluZXJSZWN0LCBfcmVmLCBhY2NlbGVyYXRpb24sIHRocmVzaG9sZFBlcmNlbnRhZ2UpIHtcbiAgbGV0IHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b21cbiAgfSA9IF9yZWY7XG5cbiAgaWYgKGFjY2VsZXJhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYWNjZWxlcmF0aW9uID0gMTA7XG4gIH1cblxuICBpZiAodGhyZXNob2xkUGVyY2VudGFnZSA9PT0gdm9pZCAwKSB7XG4gICAgdGhyZXNob2xkUGVyY2VudGFnZSA9IGRlZmF1bHRUaHJlc2hvbGQ7XG4gIH1cblxuICBjb25zdCB7XG4gICAgaXNUb3AsXG4gICAgaXNCb3R0b20sXG4gICAgaXNMZWZ0LFxuICAgIGlzUmlnaHRcbiAgfSA9IGdldFNjcm9sbFBvc2l0aW9uKHNjcm9sbENvbnRhaW5lcik7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbiAgY29uc3Qgc3BlZWQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGNvbnN0IHRocmVzaG9sZCA9IHtcbiAgICBoZWlnaHQ6IHNjcm9sbENvbnRhaW5lclJlY3QuaGVpZ2h0ICogdGhyZXNob2xkUGVyY2VudGFnZS55LFxuICAgIHdpZHRoOiBzY3JvbGxDb250YWluZXJSZWN0LndpZHRoICogdGhyZXNob2xkUGVyY2VudGFnZS54XG4gIH07XG5cbiAgaWYgKCFpc1RvcCAmJiB0b3AgPD0gc2Nyb2xsQ29udGFpbmVyUmVjdC50b3AgKyB0aHJlc2hvbGQuaGVpZ2h0KSB7XG4gICAgLy8gU2Nyb2xsIFVwXG4gICAgZGlyZWN0aW9uLnkgPSBEaXJlY3Rpb24uQmFja3dhcmQ7XG4gICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKChzY3JvbGxDb250YWluZXJSZWN0LnRvcCArIHRocmVzaG9sZC5oZWlnaHQgLSB0b3ApIC8gdGhyZXNob2xkLmhlaWdodCk7XG4gIH0gZWxzZSBpZiAoIWlzQm90dG9tICYmIGJvdHRvbSA+PSBzY3JvbGxDb250YWluZXJSZWN0LmJvdHRvbSAtIHRocmVzaG9sZC5oZWlnaHQpIHtcbiAgICAvLyBTY3JvbGwgRG93blxuICAgIGRpcmVjdGlvbi55ID0gRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKChzY3JvbGxDb250YWluZXJSZWN0LmJvdHRvbSAtIHRocmVzaG9sZC5oZWlnaHQgLSBib3R0b20pIC8gdGhyZXNob2xkLmhlaWdodCk7XG4gIH1cblxuICBpZiAoIWlzUmlnaHQgJiYgcmlnaHQgPj0gc2Nyb2xsQ29udGFpbmVyUmVjdC5yaWdodCAtIHRocmVzaG9sZC53aWR0aCkge1xuICAgIC8vIFNjcm9sbCBSaWdodFxuICAgIGRpcmVjdGlvbi54ID0gRGlyZWN0aW9uLkZvcndhcmQ7XG4gICAgc3BlZWQueCA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKChzY3JvbGxDb250YWluZXJSZWN0LnJpZ2h0IC0gdGhyZXNob2xkLndpZHRoIC0gcmlnaHQpIC8gdGhyZXNob2xkLndpZHRoKTtcbiAgfSBlbHNlIGlmICghaXNMZWZ0ICYmIGxlZnQgPD0gc2Nyb2xsQ29udGFpbmVyUmVjdC5sZWZ0ICsgdGhyZXNob2xkLndpZHRoKSB7XG4gICAgLy8gU2Nyb2xsIExlZnRcbiAgICBkaXJlY3Rpb24ueCA9IERpcmVjdGlvbi5CYWNrd2FyZDtcbiAgICBzcGVlZC54ID0gYWNjZWxlcmF0aW9uICogTWF0aC5hYnMoKHNjcm9sbENvbnRhaW5lclJlY3QubGVmdCArIHRocmVzaG9sZC53aWR0aCAtIGxlZnQpIC8gdGhyZXNob2xkLndpZHRoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlyZWN0aW9uLFxuICAgIHNwZWVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbEVsZW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lcldpZHRoLFxuICAgICAgaW5uZXJIZWlnaHRcbiAgICB9ID0gd2luZG93O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGlubmVyV2lkdGgsXG4gICAgICBib3R0b206IGlubmVySGVpZ2h0LFxuICAgICAgd2lkdGg6IGlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b21cbiAgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgYm90dG9tLFxuICAgIHdpZHRoOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5jbGllbnRIZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsT2Zmc2V0cyhzY3JvbGxhYmxlQW5jZXN0b3JzKSB7XG4gIHJldHVybiBzY3JvbGxhYmxlQW5jZXN0b3JzLnJlZHVjZSgoYWNjLCBub2RlKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5hZGQoYWNjLCBnZXRTY3JvbGxDb29yZGluYXRlcyhub2RlKSk7XG4gIH0sIGRlZmF1bHRDb29yZGluYXRlcyk7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxYT2Zmc2V0KHNjcm9sbGFibGVBbmNlc3RvcnMpIHtcbiAgcmV0dXJuIHNjcm9sbGFibGVBbmNlc3RvcnMucmVkdWNlKChhY2MsIG5vZGUpID0+IHtcbiAgICByZXR1cm4gYWNjICsgZ2V0U2Nyb2xsWENvb3JkaW5hdGUobm9kZSk7XG4gIH0sIDApO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsWU9mZnNldChzY3JvbGxhYmxlQW5jZXN0b3JzKSB7XG4gIHJldHVybiBzY3JvbGxhYmxlQW5jZXN0b3JzLnJlZHVjZSgoYWNjLCBub2RlKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIGdldFNjcm9sbFlDb29yZGluYXRlKG5vZGUpO1xuICB9LCAwKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChlbGVtZW50LCBtZWFzdXJlKSB7XG4gIGlmIChtZWFzdXJlID09PSB2b2lkIDApIHtcbiAgICBtZWFzdXJlID0gZ2V0Q2xpZW50UmVjdDtcbiAgfVxuXG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICBib3R0b20sXG4gICAgcmlnaHRcbiAgfSA9IG1lYXN1cmUoZWxlbWVudCk7XG4gIGNvbnN0IGZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yID0gZ2V0Rmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IoZWxlbWVudCk7XG5cbiAgaWYgKCFmaXJzdFNjcm9sbGFibGVBbmNlc3Rvcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChib3R0b20gPD0gMCB8fCByaWdodCA8PSAwIHx8IHRvcCA+PSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgbGVmdCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgICAgaW5saW5lOiAnY2VudGVyJ1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHByb3BlcnRpZXMgPSBbWyd4JywgWydsZWZ0JywgJ3JpZ2h0J10sIGdldFNjcm9sbFhPZmZzZXRdLCBbJ3knLCBbJ3RvcCcsICdib3R0b20nXSwgZ2V0U2Nyb2xsWU9mZnNldF1dO1xuY2xhc3MgUmVjdCB7XG4gIGNvbnN0cnVjdG9yKHJlY3QsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnJlY3QgPSB2b2lkIDA7XG4gICAgdGhpcy53aWR0aCA9IHZvaWQgMDtcbiAgICB0aGlzLmhlaWdodCA9IHZvaWQgMDtcbiAgICB0aGlzLnRvcCA9IHZvaWQgMDtcbiAgICB0aGlzLmJvdHRvbSA9IHZvaWQgMDtcbiAgICB0aGlzLnJpZ2h0ID0gdm9pZCAwO1xuICAgIHRoaXMubGVmdCA9IHZvaWQgMDtcbiAgICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JzID0gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50KTtcbiAgICBjb25zdCBzY3JvbGxPZmZzZXRzID0gZ2V0U2Nyb2xsT2Zmc2V0cyhzY3JvbGxhYmxlQW5jZXN0b3JzKTtcbiAgICB0aGlzLnJlY3QgPSB7IC4uLnJlY3RcbiAgICB9O1xuICAgIHRoaXMud2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG5cbiAgICBmb3IgKGNvbnN0IFtheGlzLCBrZXlzLCBnZXRTY3JvbGxPZmZzZXRdIG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9mZnNldHMgPSBnZXRTY3JvbGxPZmZzZXQoc2Nyb2xsYWJsZUFuY2VzdG9ycyk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxPZmZzZXRzRGVsdGxhID0gc2Nyb2xsT2Zmc2V0c1theGlzXSAtIGN1cnJlbnRPZmZzZXRzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjdFtrZXldICsgc2Nyb2xsT2Zmc2V0c0RlbHRsYTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyZWN0Jywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIExpc3RlbmVycyB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdm9pZCAwO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICB0aGlzLnJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICB2YXIgX3RoaXMkdGFyZ2V0O1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkdGFyZ2V0ID0gdGhpcy50YXJnZXQpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciguLi5saXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBhZGQoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJHRhcmdldDI7XG5cbiAgICAoX3RoaXMkdGFyZ2V0MiA9IHRoaXMudGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdGFyZ2V0Mi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChbZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zXSk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRFdmVudExpc3RlbmVyVGFyZ2V0KHRhcmdldCkge1xuICAvLyBJZiB0aGUgYGV2ZW50LnRhcmdldGAgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50IGV2ZW50cyB3aWxsIHN0aWxsIGJlIHRhcmdldGVkXG4gIC8vIGF0IGl0LCBhbmQgaGVuY2Ugd29uJ3QgYWx3YXlzIGJ1YmJsZSB1cCB0byB0aGUgd2luZG93IG9yIGRvY3VtZW50IGFueW1vcmUuXG4gIC8vIElmIHRoZXJlIGlzIGFueSByaXNrIG9mIGFuIGVsZW1lbnQgYmVpbmcgcmVtb3ZlZCB3aGlsZSBpdCBpcyBiZWluZyBkcmFnZ2VkLFxuICAvLyB0aGUgYmVzdCBwcmFjdGljZSBpcyB0byBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVycyBkaXJlY3RseSB0byB0aGUgdGFyZ2V0LlxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXRcbiAgY29uc3Qge1xuICAgIEV2ZW50VGFyZ2V0XG4gIH0gPSB1dGlsaXRpZXMuZ2V0V2luZG93KHRhcmdldCk7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBFdmVudFRhcmdldCA/IHRhcmdldCA6IHV0aWxpdGllcy5nZXRPd25lckRvY3VtZW50KHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGhhc0V4Y2VlZGVkRGlzdGFuY2UoZGVsdGEsIG1lYXN1cmVtZW50KSB7XG4gIGNvbnN0IGR4ID0gTWF0aC5hYnMoZGVsdGEueCk7XG4gIGNvbnN0IGR5ID0gTWF0aC5hYnMoZGVsdGEueSk7XG5cbiAgaWYgKHR5cGVvZiBtZWFzdXJlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKSA+IG1lYXN1cmVtZW50O1xuICB9XG5cbiAgaWYgKCd4JyBpbiBtZWFzdXJlbWVudCAmJiAneScgaW4gbWVhc3VyZW1lbnQpIHtcbiAgICByZXR1cm4gZHggPiBtZWFzdXJlbWVudC54ICYmIGR5ID4gbWVhc3VyZW1lbnQueTtcbiAgfVxuXG4gIGlmICgneCcgaW4gbWVhc3VyZW1lbnQpIHtcbiAgICByZXR1cm4gZHggPiBtZWFzdXJlbWVudC54O1xuICB9XG5cbiAgaWYgKCd5JyBpbiBtZWFzdXJlbWVudCkge1xuICAgIHJldHVybiBkeSA+IG1lYXN1cmVtZW50Lnk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBFdmVudE5hbWU7XG5cbihmdW5jdGlvbiAoRXZlbnROYW1lKSB7XG4gIEV2ZW50TmFtZVtcIkNsaWNrXCJdID0gXCJjbGlja1wiO1xuICBFdmVudE5hbWVbXCJEcmFnU3RhcnRcIl0gPSBcImRyYWdzdGFydFwiO1xuICBFdmVudE5hbWVbXCJLZXlkb3duXCJdID0gXCJrZXlkb3duXCI7XG4gIEV2ZW50TmFtZVtcIkNvbnRleHRNZW51XCJdID0gXCJjb250ZXh0bWVudVwiO1xuICBFdmVudE5hbWVbXCJSZXNpemVcIl0gPSBcInJlc2l6ZVwiO1xuICBFdmVudE5hbWVbXCJTZWxlY3Rpb25DaGFuZ2VcIl0gPSBcInNlbGVjdGlvbmNoYW5nZVwiO1xuICBFdmVudE5hbWVbXCJWaXNpYmlsaXR5Q2hhbmdlXCJdID0gXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7XG59KShFdmVudE5hbWUgfHwgKEV2ZW50TmFtZSA9IHt9KSk7XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbihmdW5jdGlvbiAoS2V5Ym9hcmRDb2RlKSB7XG4gIEtleWJvYXJkQ29kZVtcIlNwYWNlXCJdID0gXCJTcGFjZVwiO1xuICBLZXlib2FyZENvZGVbXCJEb3duXCJdID0gXCJBcnJvd0Rvd25cIjtcbiAgS2V5Ym9hcmRDb2RlW1wiUmlnaHRcIl0gPSBcIkFycm93UmlnaHRcIjtcbiAgS2V5Ym9hcmRDb2RlW1wiTGVmdFwiXSA9IFwiQXJyb3dMZWZ0XCI7XG4gIEtleWJvYXJkQ29kZVtcIlVwXCJdID0gXCJBcnJvd1VwXCI7XG4gIEtleWJvYXJkQ29kZVtcIkVzY1wiXSA9IFwiRXNjYXBlXCI7XG4gIEtleWJvYXJkQ29kZVtcIkVudGVyXCJdID0gXCJFbnRlclwiO1xuICBLZXlib2FyZENvZGVbXCJUYWJcIl0gPSBcIlRhYlwiO1xufSkoZXhwb3J0cy5LZXlib2FyZENvZGUgfHwgKGV4cG9ydHMuS2V5Ym9hcmRDb2RlID0ge30pKTtcblxuY29uc3QgZGVmYXVsdEtleWJvYXJkQ29kZXMgPSB7XG4gIHN0YXJ0OiBbZXhwb3J0cy5LZXlib2FyZENvZGUuU3BhY2UsIGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkVudGVyXSxcbiAgY2FuY2VsOiBbZXhwb3J0cy5LZXlib2FyZENvZGUuRXNjXSxcbiAgZW5kOiBbZXhwb3J0cy5LZXlib2FyZENvZGUuU3BhY2UsIGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkVudGVyLCBleHBvcnRzLktleWJvYXJkQ29kZS5UYWJdXG59O1xuY29uc3QgZGVmYXVsdEtleWJvYXJkQ29vcmRpbmF0ZUdldHRlciA9IChldmVudCwgX3JlZikgPT4ge1xuICBsZXQge1xuICAgIGN1cnJlbnRDb29yZGluYXRlc1xuICB9ID0gX3JlZjtcblxuICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlJpZ2h0OlxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudENvb3JkaW5hdGVzLFxuICAgICAgICB4OiBjdXJyZW50Q29vcmRpbmF0ZXMueCArIDI1XG4gICAgICB9O1xuXG4gICAgY2FzZSBleHBvcnRzLktleWJvYXJkQ29kZS5MZWZ0OlxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudENvb3JkaW5hdGVzLFxuICAgICAgICB4OiBjdXJyZW50Q29vcmRpbmF0ZXMueCAtIDI1XG4gICAgICB9O1xuXG4gICAgY2FzZSBleHBvcnRzLktleWJvYXJkQ29kZS5Eb3duOlxuICAgICAgcmV0dXJuIHsgLi4uY3VycmVudENvb3JkaW5hdGVzLFxuICAgICAgICB5OiBjdXJyZW50Q29vcmRpbmF0ZXMueSArIDI1XG4gICAgICB9O1xuXG4gICAgY2FzZSBleHBvcnRzLktleWJvYXJkQ29kZS5VcDpcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRDb29yZGluYXRlcyxcbiAgICAgICAgeTogY3VycmVudENvb3JkaW5hdGVzLnkgLSAyNVxuICAgICAgfTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jbGFzcyBLZXlib2FyZFNlbnNvciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHZvaWQgMDtcbiAgICB0aGlzLmF1dG9TY3JvbGxFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWZlcmVuY2VDb29yZGluYXRlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHZvaWQgMDtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycyA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdGFyZ2V0XG4gICAgICB9XG4gICAgfSA9IHByb3BzO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnModXRpbGl0aWVzLmdldE93bmVyRG9jdW1lbnQodGFyZ2V0KSk7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSBuZXcgTGlzdGVuZXJzKHV0aWxpdGllcy5nZXRXaW5kb3codGFyZ2V0KSk7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5oYW5kbGVTdGFydCgpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuUmVzaXplLCB0aGlzLmhhbmRsZUNhbmNlbCk7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMuYWRkKEV2ZW50TmFtZS5WaXNpYmlsaXR5Q2hhbmdlLCB0aGlzLmhhbmRsZUNhbmNlbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxpc3RlbmVycy5hZGQoRXZlbnROYW1lLktleWRvd24sIHRoaXMuaGFuZGxlS2V5RG93bikpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlTm9kZSxcbiAgICAgIG9uU3RhcnRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBub2RlID0gYWN0aXZlTm9kZS5ub2RlLmN1cnJlbnQ7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChub2RlKTtcbiAgICB9XG5cbiAgICBvblN0YXJ0KGRlZmF1bHRDb29yZGluYXRlcyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0tleWJvYXJkRXZlbnQoZXZlbnQpKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGtleWJvYXJkQ29kZXMgPSBkZWZhdWx0S2V5Ym9hcmRDb2RlcyxcbiAgICAgICAgY29vcmRpbmF0ZUdldHRlciA9IGRlZmF1bHRLZXlib2FyZENvb3JkaW5hdGVHZXR0ZXIsXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yID0gJ3Ntb290aCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb2RlXG4gICAgICB9ID0gZXZlbnQ7XG5cbiAgICAgIGlmIChrZXlib2FyZENvZGVzLmVuZC5pbmNsdWRlcyhjb2RlKSkge1xuICAgICAgICB0aGlzLmhhbmRsZUVuZChldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleWJvYXJkQ29kZXMuY2FuY2VsLmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbGxpc2lvblJlY3RcbiAgICAgIH0gPSBjb250ZXh0LmN1cnJlbnQ7XG4gICAgICBjb25zdCBjdXJyZW50Q29vcmRpbmF0ZXMgPSBjb2xsaXNpb25SZWN0ID8ge1xuICAgICAgICB4OiBjb2xsaXNpb25SZWN0LmxlZnQsXG4gICAgICAgIHk6IGNvbGxpc2lvblJlY3QudG9wXG4gICAgICB9IDogZGVmYXVsdENvb3JkaW5hdGVzO1xuXG4gICAgICBpZiAoIXRoaXMucmVmZXJlbmNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VDb29yZGluYXRlcyA9IGN1cnJlbnRDb29yZGluYXRlcztcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlR2V0dGVyKGV2ZW50LCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgY29udGV4dDogY29udGV4dC5jdXJyZW50LFxuICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobmV3Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXNEZWx0YSA9IHV0aWxpdGllcy5zdWJ0cmFjdChuZXdDb29yZGluYXRlcywgY3VycmVudENvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzY3JvbGxhYmxlQW5jZXN0b3JzXG4gICAgICAgIH0gPSBjb250ZXh0LmN1cnJlbnQ7XG5cbiAgICAgICAgZm9yIChjb25zdCBzY3JvbGxDb250YWluZXIgb2Ygc2Nyb2xsYWJsZUFuY2VzdG9ycykge1xuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGV2ZW50LmNvZGU7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaXNUb3AsXG4gICAgICAgICAgICBpc1JpZ2h0LFxuICAgICAgICAgICAgaXNMZWZ0LFxuICAgICAgICAgICAgaXNCb3R0b20sXG4gICAgICAgICAgICBtYXhTY3JvbGwsXG4gICAgICAgICAgICBtaW5TY3JvbGxcbiAgICAgICAgICB9ID0gZ2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgICAgICBjb25zdCBzY3JvbGxFbGVtZW50UmVjdCA9IGdldFNjcm9sbEVsZW1lbnRSZWN0KHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgICAgY29uc3QgY2xhbXBlZENvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgeDogTWF0aC5taW4oZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5SaWdodCA/IHNjcm9sbEVsZW1lbnRSZWN0LnJpZ2h0IC0gc2Nyb2xsRWxlbWVudFJlY3Qud2lkdGggLyAyIDogc2Nyb2xsRWxlbWVudFJlY3QucmlnaHQsIE1hdGgubWF4KGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuUmlnaHQgPyBzY3JvbGxFbGVtZW50UmVjdC5sZWZ0IDogc2Nyb2xsRWxlbWVudFJlY3QubGVmdCArIHNjcm9sbEVsZW1lbnRSZWN0LndpZHRoIC8gMiwgbmV3Q29vcmRpbmF0ZXMueCkpLFxuICAgICAgICAgICAgeTogTWF0aC5taW4oZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5Eb3duID8gc2Nyb2xsRWxlbWVudFJlY3QuYm90dG9tIC0gc2Nyb2xsRWxlbWVudFJlY3QuaGVpZ2h0IC8gMiA6IHNjcm9sbEVsZW1lbnRSZWN0LmJvdHRvbSwgTWF0aC5tYXgoZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5Eb3duID8gc2Nyb2xsRWxlbWVudFJlY3QudG9wIDogc2Nyb2xsRWxlbWVudFJlY3QudG9wICsgc2Nyb2xsRWxlbWVudFJlY3QuaGVpZ2h0IC8gMiwgbmV3Q29vcmRpbmF0ZXMueSkpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBjYW5TY3JvbGxYID0gZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5SaWdodCAmJiAhaXNSaWdodCB8fCBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkxlZnQgJiYgIWlzTGVmdDtcbiAgICAgICAgICBjb25zdCBjYW5TY3JvbGxZID0gZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5Eb3duICYmICFpc0JvdHRvbSB8fCBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlVwICYmICFpc1RvcDtcblxuICAgICAgICAgIGlmIChjYW5TY3JvbGxYICYmIGNsYW1wZWRDb29yZGluYXRlcy54ICE9PSBuZXdDb29yZGluYXRlcy54KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTY3JvbGxDb29yZGluYXRlcyA9IHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICsgY29vcmRpbmF0ZXNEZWx0YS54O1xuICAgICAgICAgICAgY29uc3QgY2FuU2Nyb2xsVG9OZXdDb29yZGluYXRlcyA9IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuUmlnaHQgJiYgbmV3U2Nyb2xsQ29vcmRpbmF0ZXMgPD0gbWF4U2Nyb2xsLnggfHwgZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5MZWZ0ICYmIG5ld1Njcm9sbENvb3JkaW5hdGVzID49IG1pblNjcm9sbC54O1xuXG4gICAgICAgICAgICBpZiAoY2FuU2Nyb2xsVG9OZXdDb29yZGluYXRlcyAmJiAhY29vcmRpbmF0ZXNEZWx0YS55KSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIGNvb3JkaW5hdGVzLCB0aGUgc2Nyb2xsIGFkanVzdG1lbnQgYWxvbmUgd2lsbCB0cmlnZ2VyXG4gICAgICAgICAgICAgIC8vIGxvZ2ljIHRvIGF1dG8tZGV0ZWN0IHRoZSBuZXcgY29udGFpbmVyIHdlIGFyZSBvdmVyXG4gICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgbGVmdDogbmV3U2Nyb2xsQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IHNjcm9sbEJlaGF2aW9yXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYW5TY3JvbGxUb05ld0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgIHNjcm9sbERlbHRhLnggPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAtIG5ld1Njcm9sbENvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2Nyb2xsRGVsdGEueCA9IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuUmlnaHQgPyBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAtIG1heFNjcm9sbC54IDogc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLSBtaW5TY3JvbGwueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjcm9sbERlbHRhLngpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtc2Nyb2xsRGVsdGEueCxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogc2Nyb2xsQmVoYXZpb3JcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2FuU2Nyb2xsWSAmJiBjbGFtcGVkQ29vcmRpbmF0ZXMueSAhPT0gbmV3Q29vcmRpbmF0ZXMueSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2Nyb2xsQ29vcmRpbmF0ZXMgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wICsgY29vcmRpbmF0ZXNEZWx0YS55O1xuICAgICAgICAgICAgY29uc3QgY2FuU2Nyb2xsVG9OZXdDb29yZGluYXRlcyA9IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuRG93biAmJiBuZXdTY3JvbGxDb29yZGluYXRlcyA8PSBtYXhTY3JvbGwueSB8fCBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlVwICYmIG5ld1Njcm9sbENvb3JkaW5hdGVzID49IG1pblNjcm9sbC55O1xuXG4gICAgICAgICAgICBpZiAoY2FuU2Nyb2xsVG9OZXdDb29yZGluYXRlcyAmJiAhY29vcmRpbmF0ZXNEZWx0YS54KSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIGNvb3JkaW5hdGVzLCB0aGUgc2Nyb2xsIGFkanVzdG1lbnQgYWxvbmUgd2lsbCB0cmlnZ2VyXG4gICAgICAgICAgICAgIC8vIGxvZ2ljIHRvIGF1dG8tZGV0ZWN0IHRoZSBuZXcgY29udGFpbmVyIHdlIGFyZSBvdmVyXG4gICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wOiBuZXdTY3JvbGxDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogc2Nyb2xsQmVoYXZpb3JcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhblNjcm9sbFRvTmV3Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsRGVsdGEueSA9IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgLSBuZXdTY3JvbGxDb29yZGluYXRlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNjcm9sbERlbHRhLnkgPSBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkRvd24gPyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIC0gbWF4U2Nyb2xsLnkgOiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIC0gbWluU2Nyb2xsLnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWx0YS55KSB7XG4gICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgICAgdG9wOiAtc2Nyb2xsRGVsdGEueSxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogc2Nyb2xsQmVoYXZpb3JcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZShldmVudCwgdXRpbGl0aWVzLmFkZCh1dGlsaXRpZXMuc3VidHJhY3QobmV3Q29vcmRpbmF0ZXMsIHRoaXMucmVmZXJlbmNlQ29vcmRpbmF0ZXMpLCBzY3JvbGxEZWx0YSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZlbnQsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25Nb3ZlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbk1vdmUoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgaGFuZGxlRW5kKGV2ZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgb25FbmRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgb25FbmQoKTtcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbChldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2FuY2VsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIG9uQ2FuY2VsKCk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucmVtb3ZlQWxsKCk7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMucmVtb3ZlQWxsKCk7XG4gIH1cblxufVxuS2V5Ym9hcmRTZW5zb3IuYWN0aXZhdG9ycyA9IFt7XG4gIGV2ZW50TmFtZTogJ29uS2V5RG93bicsXG4gIGhhbmRsZXI6IChldmVudCwgX3JlZiwgX3JlZjIpID0+IHtcbiAgICBsZXQge1xuICAgICAga2V5Ym9hcmRDb2RlcyA9IGRlZmF1bHRLZXlib2FyZENvZGVzLFxuICAgICAgb25BY3RpdmF0aW9uXG4gICAgfSA9IF9yZWY7XG4gICAgbGV0IHtcbiAgICAgIGFjdGl2ZVxuICAgIH0gPSBfcmVmMjtcbiAgICBjb25zdCB7XG4gICAgICBjb2RlXG4gICAgfSA9IGV2ZW50Lm5hdGl2ZUV2ZW50O1xuXG4gICAgaWYgKGtleWJvYXJkQ29kZXMuc3RhcnQuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgIGNvbnN0IGFjdGl2YXRvciA9IGFjdGl2ZS5hY3RpdmF0b3JOb2RlLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChhY3RpdmF0b3IgJiYgZXZlbnQudGFyZ2V0ICE9PSBhY3RpdmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25BY3RpdmF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBvbkFjdGl2YXRpb24oe1xuICAgICAgICBldmVudDogZXZlbnQubmF0aXZlRXZlbnRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XTtcblxuZnVuY3Rpb24gaXNEaXN0YW5jZUNvbnN0cmFpbnQoY29uc3RyYWludCkge1xuICByZXR1cm4gQm9vbGVhbihjb25zdHJhaW50ICYmICdkaXN0YW5jZScgaW4gY29uc3RyYWludCk7XG59XG5cbmZ1bmN0aW9uIGlzRGVsYXlDb25zdHJhaW50KGNvbnN0cmFpbnQpIHtcbiAgcmV0dXJuIEJvb2xlYW4oY29uc3RyYWludCAmJiAnZGVsYXknIGluIGNvbnN0cmFpbnQpO1xufVxuXG5jbGFzcyBBYnN0cmFjdFBvaW50ZXJTZW5zb3Ige1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZXZlbnRzLCBsaXN0ZW5lclRhcmdldCkge1xuICAgIHZhciBfZ2V0RXZlbnRDb29yZGluYXRlcztcblxuICAgIGlmIChsaXN0ZW5lclRhcmdldCA9PT0gdm9pZCAwKSB7XG4gICAgICBsaXN0ZW5lclRhcmdldCA9IGdldEV2ZW50TGlzdGVuZXJUYXJnZXQocHJvcHMuZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzID0gdm9pZCAwO1xuICAgIHRoaXMuZXZlbnRzID0gdm9pZCAwO1xuICAgIHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZG9jdW1lbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRpYWxDb29yZGluYXRlcyA9IHZvaWQgMDtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy5kb2N1bWVudExpc3RlbmVycyA9IHZvaWQgMDtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycyA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnRcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0XG4gICAgfSA9IGV2ZW50O1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLmRvY3VtZW50ID0gdXRpbGl0aWVzLmdldE93bmVyRG9jdW1lbnQodGFyZ2V0KTtcbiAgICB0aGlzLmRvY3VtZW50TGlzdGVuZXJzID0gbmV3IExpc3RlbmVycyh0aGlzLmRvY3VtZW50KTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnMobGlzdGVuZXJUYXJnZXQpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzID0gbmV3IExpc3RlbmVycyh1dGlsaXRpZXMuZ2V0V2luZG93KHRhcmdldCkpO1xuICAgIHRoaXMuaW5pdGlhbENvb3JkaW5hdGVzID0gKF9nZXRFdmVudENvb3JkaW5hdGVzID0gdXRpbGl0aWVzLmdldEV2ZW50Q29vcmRpbmF0ZXMoZXZlbnQpKSAhPSBudWxsID8gX2dldEV2ZW50Q29vcmRpbmF0ZXMgOiBkZWZhdWx0Q29vcmRpbmF0ZXM7XG4gICAgdGhpcy5oYW5kbGVTdGFydCA9IHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVuZCA9IHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93biA9IHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlVGV4dFNlbGVjdGlvbiA9IHRoaXMucmVtb3ZlVGV4dFNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnRzLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50LFxuICAgICAgICAgIGJ5cGFzc0FjdGl2YXRpb25Db25zdHJhaW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmxpc3RlbmVycy5hZGQoZXZlbnRzLm1vdmUubmFtZSwgdGhpcy5oYW5kbGVNb3ZlLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMubGlzdGVuZXJzLmFkZChldmVudHMuZW5kLm5hbWUsIHRoaXMuaGFuZGxlRW5kKTtcblxuICAgIGlmIChldmVudHMuY2FuY2VsKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5hZGQoZXZlbnRzLmNhbmNlbC5uYW1lLCB0aGlzLmhhbmRsZUNhbmNlbCk7XG4gICAgfVxuXG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMuYWRkKEV2ZW50TmFtZS5SZXNpemUsIHRoaXMuaGFuZGxlQ2FuY2VsKTtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycy5hZGQoRXZlbnROYW1lLkRyYWdTdGFydCwgcHJldmVudERlZmF1bHQpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuVmlzaWJpbGl0eUNoYW5nZSwgdGhpcy5oYW5kbGVDYW5jZWwpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuQ29udGV4dE1lbnUsIHByZXZlbnREZWZhdWx0KTtcbiAgICB0aGlzLmRvY3VtZW50TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuS2V5ZG93biwgdGhpcy5oYW5kbGVLZXlkb3duKTtcblxuICAgIGlmIChhY3RpdmF0aW9uQ29uc3RyYWludCkge1xuICAgICAgaWYgKGJ5cGFzc0FjdGl2YXRpb25Db25zdHJhaW50ICE9IG51bGwgJiYgYnlwYXNzQWN0aXZhdGlvbkNvbnN0cmFpbnQoe1xuICAgICAgICBldmVudDogdGhpcy5wcm9wcy5ldmVudCxcbiAgICAgICAgYWN0aXZlTm9kZTogdGhpcy5wcm9wcy5hY3RpdmVOb2RlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnNcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlbGF5Q29uc3RyYWludChhY3RpdmF0aW9uQ29uc3RyYWludCkpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlU3RhcnQsIGFjdGl2YXRpb25Db25zdHJhaW50LmRlbGF5KTtcbiAgICAgICAgdGhpcy5oYW5kbGVQZW5kaW5nKGFjdGl2YXRpb25Db25zdHJhaW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXN0YW5jZUNvbnN0cmFpbnQoYWN0aXZhdGlvbkNvbnN0cmFpbnQpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUGVuZGluZyhhY3RpdmF0aW9uQ29uc3RyYWludCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVN0YXJ0KCk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucmVtb3ZlQWxsKCk7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMucmVtb3ZlQWxsKCk7IC8vIFdhaXQgdW50aWwgdGhlIG5leHQgZXZlbnQgbG9vcCBiZWZvcmUgcmVtb3ZpbmcgZG9jdW1lbnQgbGlzdGVuZXJzXG4gICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB3ZSBsaXN0ZW4gZm9yIGBjbGlja2AgYW5kIGBzZWxlY3Rpb25gIGV2ZW50cyBvbiB0aGUgZG9jdW1lbnRcblxuICAgIHNldFRpbWVvdXQodGhpcy5kb2N1bWVudExpc3RlbmVycy5yZW1vdmVBbGwsIDUwKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQZW5kaW5nKGNvbnN0cmFpbnQsIG9mZnNldCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIG9uUGVuZGluZ1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUGVuZGluZyhhY3RpdmUsIGNvbnN0cmFpbnQsIHRoaXMuaW5pdGlhbENvb3JkaW5hdGVzLCBvZmZzZXQpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5pdGlhbENvb3JkaW5hdGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgb25TdGFydFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGluaXRpYWxDb29yZGluYXRlcykge1xuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlOyAvLyBTdG9wIHByb3BhZ2F0aW9uIG9mIGNsaWNrIGV2ZW50cyBvbmNlIGFjdGl2YXRpb24gY29uc3RyYWludHMgYXJlIG1ldFxuXG4gICAgICB0aGlzLmRvY3VtZW50TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuQ2xpY2ssIHN0b3BQcm9wYWdhdGlvbiwge1xuICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICB9KTsgLy8gUmVtb3ZlIGFueSB0ZXh0IHNlbGVjdGlvbiBmcm9tIHRoZSBkb2N1bWVudFxuXG4gICAgICB0aGlzLnJlbW92ZVRleHRTZWxlY3Rpb24oKTsgLy8gUHJldmVudCBmdXJ0aGVyIHRleHQgc2VsZWN0aW9uIHdoaWxlIGRyYWdnaW5nXG5cbiAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ZW5lcnMuYWRkKEV2ZW50TmFtZS5TZWxlY3Rpb25DaGFuZ2UsIHRoaXMucmVtb3ZlVGV4dFNlbGVjdGlvbik7XG4gICAgICBvblN0YXJ0KGluaXRpYWxDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZShldmVudCkge1xuICAgIHZhciBfZ2V0RXZlbnRDb29yZGluYXRlczI7XG5cbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmF0ZWQsXG4gICAgICBpbml0aWFsQ29vcmRpbmF0ZXMsXG4gICAgICBwcm9wc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWN0aXZhdGlvbkNvbnN0cmFpbnRcbiAgICAgIH1cbiAgICB9ID0gcHJvcHM7XG5cbiAgICBpZiAoIWluaXRpYWxDb29yZGluYXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gKF9nZXRFdmVudENvb3JkaW5hdGVzMiA9IHV0aWxpdGllcy5nZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KSkgIT0gbnVsbCA/IF9nZXRFdmVudENvb3JkaW5hdGVzMiA6IGRlZmF1bHRDb29yZGluYXRlcztcbiAgICBjb25zdCBkZWx0YSA9IHV0aWxpdGllcy5zdWJ0cmFjdChpbml0aWFsQ29vcmRpbmF0ZXMsIGNvb3JkaW5hdGVzKTsgLy8gQ29uc3RyYWludCB2YWxpZGF0aW9uXG5cbiAgICBpZiAoIWFjdGl2YXRlZCAmJiBhY3RpdmF0aW9uQ29uc3RyYWludCkge1xuICAgICAgaWYgKGlzRGlzdGFuY2VDb25zdHJhaW50KGFjdGl2YXRpb25Db25zdHJhaW50KSkge1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkNvbnN0cmFpbnQudG9sZXJhbmNlICE9IG51bGwgJiYgaGFzRXhjZWVkZWREaXN0YW5jZShkZWx0YSwgYWN0aXZhdGlvbkNvbnN0cmFpbnQudG9sZXJhbmNlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0V4Y2VlZGVkRGlzdGFuY2UoZGVsdGEsIGFjdGl2YXRpb25Db25zdHJhaW50LmRpc3RhbmNlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGVsYXlDb25zdHJhaW50KGFjdGl2YXRpb25Db25zdHJhaW50KSkge1xuICAgICAgICBpZiAoaGFzRXhjZWVkZWREaXN0YW5jZShkZWx0YSwgYWN0aXZhdGlvbkNvbnN0cmFpbnQudG9sZXJhbmNlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFuZGxlUGVuZGluZyhhY3RpdmF0aW9uQ29uc3RyYWludCwgZGVsdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uTW92ZShjb29yZGluYXRlcyk7XG4gIH1cblxuICBoYW5kbGVFbmQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25BYm9ydCxcbiAgICAgIG9uRW5kXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5kZXRhY2goKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIG9uQWJvcnQodGhpcy5wcm9wcy5hY3RpdmUpO1xuICAgIH1cblxuICAgIG9uRW5kKCk7XG4gIH1cblxuICBoYW5kbGVDYW5jZWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25BYm9ydCxcbiAgICAgIG9uQ2FuY2VsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5kZXRhY2goKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmF0ZWQpIHtcbiAgICAgIG9uQWJvcnQodGhpcy5wcm9wcy5hY3RpdmUpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCk7XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkVzYykge1xuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUZXh0U2VsZWN0aW9uKCkge1xuICAgIHZhciBfdGhpcyRkb2N1bWVudCRnZXRTZWw7XG5cbiAgICAoX3RoaXMkZG9jdW1lbnQkZ2V0U2VsID0gdGhpcy5kb2N1bWVudC5nZXRTZWxlY3Rpb24oKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGRvY3VtZW50JGdldFNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgfVxuXG59XG5cbmNvbnN0IGV2ZW50cyA9IHtcbiAgY2FuY2VsOiB7XG4gICAgbmFtZTogJ3BvaW50ZXJjYW5jZWwnXG4gIH0sXG4gIG1vdmU6IHtcbiAgICBuYW1lOiAncG9pbnRlcm1vdmUnXG4gIH0sXG4gIGVuZDoge1xuICAgIG5hbWU6ICdwb2ludGVydXAnXG4gIH1cbn07XG5jbGFzcyBQb2ludGVyU2Vuc29yIGV4dGVuZHMgQWJzdHJhY3RQb2ludGVyU2Vuc29yIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBldmVudFxuICAgIH0gPSBwcm9wczsgLy8gUG9pbnRlciBldmVudHMgc3RvcCBmaXJpbmcgaWYgdGhlIHRhcmdldCBpcyB1bm1vdW50ZWQgd2hpbGUgZHJhZ2dpbmdcbiAgICAvLyBUaGVyZWZvcmUgd2UgYXR0YWNoIGxpc3RlbmVycyB0byB0aGUgb3duZXIgZG9jdW1lbnQgaW5zdGVhZFxuXG4gICAgY29uc3QgbGlzdGVuZXJUYXJnZXQgPSB1dGlsaXRpZXMuZ2V0T3duZXJEb2N1bWVudChldmVudC50YXJnZXQpO1xuICAgIHN1cGVyKHByb3BzLCBldmVudHMsIGxpc3RlbmVyVGFyZ2V0KTtcbiAgfVxuXG59XG5Qb2ludGVyU2Vuc29yLmFjdGl2YXRvcnMgPSBbe1xuICBldmVudE5hbWU6ICdvblBvaW50ZXJEb3duJyxcbiAgaGFuZGxlcjogKF9yZWYsIF9yZWYyKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIG5hdGl2ZUV2ZW50OiBldmVudFxuICAgIH0gPSBfcmVmO1xuICAgIGxldCB7XG4gICAgICBvbkFjdGl2YXRpb25cbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAoIWV2ZW50LmlzUHJpbWFyeSB8fCBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkFjdGl2YXRpb24gPT0gbnVsbCA/IHZvaWQgMCA6IG9uQWN0aXZhdGlvbih7XG4gICAgICBldmVudFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XTtcblxuY29uc3QgZXZlbnRzJDEgPSB7XG4gIG1vdmU6IHtcbiAgICBuYW1lOiAnbW91c2Vtb3ZlJ1xuICB9LFxuICBlbmQ6IHtcbiAgICBuYW1lOiAnbW91c2V1cCdcbiAgfVxufTtcbnZhciBNb3VzZUJ1dHRvbjtcblxuKGZ1bmN0aW9uIChNb3VzZUJ1dHRvbikge1xuICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIlJpZ2h0Q2xpY2tcIl0gPSAyXSA9IFwiUmlnaHRDbGlja1wiO1xufSkoTW91c2VCdXR0b24gfHwgKE1vdXNlQnV0dG9uID0ge30pKTtcblxuY2xhc3MgTW91c2VTZW5zb3IgZXh0ZW5kcyBBYnN0cmFjdFBvaW50ZXJTZW5zb3Ige1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzLCBldmVudHMkMSwgdXRpbGl0aWVzLmdldE93bmVyRG9jdW1lbnQocHJvcHMuZXZlbnQudGFyZ2V0KSk7XG4gIH1cblxufVxuTW91c2VTZW5zb3IuYWN0aXZhdG9ycyA9IFt7XG4gIGV2ZW50TmFtZTogJ29uTW91c2VEb3duJyxcbiAgaGFuZGxlcjogKF9yZWYsIF9yZWYyKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIG5hdGl2ZUV2ZW50OiBldmVudFxuICAgIH0gPSBfcmVmO1xuICAgIGxldCB7XG4gICAgICBvbkFjdGl2YXRpb25cbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBNb3VzZUJ1dHRvbi5SaWdodENsaWNrKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25BY3RpdmF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBvbkFjdGl2YXRpb24oe1xuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufV07XG5cbmNvbnN0IGV2ZW50cyQyID0ge1xuICBjYW5jZWw6IHtcbiAgICBuYW1lOiAndG91Y2hjYW5jZWwnXG4gIH0sXG4gIG1vdmU6IHtcbiAgICBuYW1lOiAndG91Y2htb3ZlJ1xuICB9LFxuICBlbmQ6IHtcbiAgICBuYW1lOiAndG91Y2hlbmQnXG4gIH1cbn07XG5jbGFzcyBUb3VjaFNlbnNvciBleHRlbmRzIEFic3RyYWN0UG9pbnRlclNlbnNvciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMsIGV2ZW50cyQyKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAvLyBBZGRpbmcgYSBub24tY2FwdHVyZSBhbmQgbm9uLXBhc3NpdmUgYHRvdWNobW92ZWAgbGlzdGVuZXIgaW4gb3JkZXJcbiAgICAvLyB0byBmb3JjZSBgZXZlbnQucHJldmVudERlZmF1bHQoKWAgY2FsbHMgdG8gd29yayBpbiBkeW5hbWljYWxseSBhZGRlZFxuICAgIC8vIHRvdWNobW92ZSBldmVudCBoYW5kbGVycy4gVGhpcyBpcyByZXF1aXJlZCBmb3IgaU9TIFNhZmFyaS5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMkMi5tb3ZlLm5hbWUsIG5vb3AsIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMkMi5tb3ZlLm5hbWUsIG5vb3ApO1xuICAgIH07IC8vIFdlIGNyZWF0ZSBhIG5ldyBoYW5kbGVyIGJlY2F1c2UgdGhlIHRlYXJkb3duIGZ1bmN0aW9uIG9mIGFub3RoZXIgc2Vuc29yXG4gICAgLy8gY291bGQgcmVtb3ZlIG91ciBldmVudCBsaXN0ZW5lciBpZiB3ZSB1c2UgYSByZWZlcmVudGlhbGx5IGVxdWFsIGxpc3RlbmVyLlxuXG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gIH1cblxufVxuVG91Y2hTZW5zb3IuYWN0aXZhdG9ycyA9IFt7XG4gIGV2ZW50TmFtZTogJ29uVG91Y2hTdGFydCcsXG4gIGhhbmRsZXI6IChfcmVmLCBfcmVmMikgPT4ge1xuICAgIGxldCB7XG4gICAgICBuYXRpdmVFdmVudDogZXZlbnRcbiAgICB9ID0gX3JlZjtcbiAgICBsZXQge1xuICAgICAgb25BY3RpdmF0aW9uXG4gICAgfSA9IF9yZWYyO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdWNoZXNcbiAgICB9ID0gZXZlbnQ7XG5cbiAgICBpZiAodG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25BY3RpdmF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBvbkFjdGl2YXRpb24oe1xuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufV07XG5cbihmdW5jdGlvbiAoQXV0b1Njcm9sbEFjdGl2YXRvcikge1xuICBBdXRvU2Nyb2xsQWN0aXZhdG9yW0F1dG9TY3JvbGxBY3RpdmF0b3JbXCJQb2ludGVyXCJdID0gMF0gPSBcIlBvaW50ZXJcIjtcbiAgQXV0b1Njcm9sbEFjdGl2YXRvcltBdXRvU2Nyb2xsQWN0aXZhdG9yW1wiRHJhZ2dhYmxlUmVjdFwiXSA9IDFdID0gXCJEcmFnZ2FibGVSZWN0XCI7XG59KShleHBvcnRzLkF1dG9TY3JvbGxBY3RpdmF0b3IgfHwgKGV4cG9ydHMuQXV0b1Njcm9sbEFjdGl2YXRvciA9IHt9KSk7XG5cbihmdW5jdGlvbiAoVHJhdmVyc2FsT3JkZXIpIHtcbiAgVHJhdmVyc2FsT3JkZXJbVHJhdmVyc2FsT3JkZXJbXCJUcmVlT3JkZXJcIl0gPSAwXSA9IFwiVHJlZU9yZGVyXCI7XG4gIFRyYXZlcnNhbE9yZGVyW1RyYXZlcnNhbE9yZGVyW1wiUmV2ZXJzZWRUcmVlT3JkZXJcIl0gPSAxXSA9IFwiUmV2ZXJzZWRUcmVlT3JkZXJcIjtcbn0pKGV4cG9ydHMuVHJhdmVyc2FsT3JkZXIgfHwgKGV4cG9ydHMuVHJhdmVyc2FsT3JkZXIgPSB7fSkpO1xuXG5mdW5jdGlvbiB1c2VBdXRvU2Nyb2xsZXIoX3JlZikge1xuICBsZXQge1xuICAgIGFjY2VsZXJhdGlvbixcbiAgICBhY3RpdmF0b3IgPSBleHBvcnRzLkF1dG9TY3JvbGxBY3RpdmF0b3IuUG9pbnRlcixcbiAgICBjYW5TY3JvbGwsXG4gICAgZHJhZ2dpbmdSZWN0LFxuICAgIGVuYWJsZWQsXG4gICAgaW50ZXJ2YWwgPSA1LFxuICAgIG9yZGVyID0gZXhwb3J0cy5UcmF2ZXJzYWxPcmRlci5UcmVlT3JkZXIsXG4gICAgcG9pbnRlckNvb3JkaW5hdGVzLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsXG4gICAgZGVsdGEsXG4gICAgdGhyZXNob2xkXG4gIH0gPSBfcmVmO1xuICBjb25zdCBzY3JvbGxJbnRlbnQgPSB1c2VTY3JvbGxJbnRlbnQoe1xuICAgIGRlbHRhLFxuICAgIGRpc2FibGVkOiAhZW5hYmxlZFxuICB9KTtcbiAgY29uc3QgW3NldEF1dG9TY3JvbGxJbnRlcnZhbCwgY2xlYXJBdXRvU2Nyb2xsSW50ZXJ2YWxdID0gdXRpbGl0aWVzLnVzZUludGVydmFsKCk7XG4gIGNvbnN0IHNjcm9sbFNwZWVkID0gUmVhY3QudXNlUmVmKHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfSk7XG4gIGNvbnN0IHNjcm9sbERpcmVjdGlvbiA9IFJlYWN0LnVzZVJlZih7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0pO1xuICBjb25zdCByZWN0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgc3dpdGNoIChhY3RpdmF0b3IpIHtcbiAgICAgIGNhc2UgZXhwb3J0cy5BdXRvU2Nyb2xsQWN0aXZhdG9yLlBvaW50ZXI6XG4gICAgICAgIHJldHVybiBwb2ludGVyQ29vcmRpbmF0ZXMgPyB7XG4gICAgICAgICAgdG9wOiBwb2ludGVyQ29vcmRpbmF0ZXMueSxcbiAgICAgICAgICBib3R0b206IHBvaW50ZXJDb29yZGluYXRlcy55LFxuICAgICAgICAgIGxlZnQ6IHBvaW50ZXJDb29yZGluYXRlcy54LFxuICAgICAgICAgIHJpZ2h0OiBwb2ludGVyQ29vcmRpbmF0ZXMueFxuICAgICAgICB9IDogbnVsbDtcblxuICAgICAgY2FzZSBleHBvcnRzLkF1dG9TY3JvbGxBY3RpdmF0b3IuRHJhZ2dhYmxlUmVjdDpcbiAgICAgICAgcmV0dXJuIGRyYWdnaW5nUmVjdDtcbiAgICB9XG4gIH0sIFthY3RpdmF0b3IsIGRyYWdnaW5nUmVjdCwgcG9pbnRlckNvb3JkaW5hdGVzXSk7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgYXV0b1Njcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudDtcblxuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHNjcm9sbFNwZWVkLmN1cnJlbnQueCAqIHNjcm9sbERpcmVjdGlvbi5jdXJyZW50Lng7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsU3BlZWQuY3VycmVudC55ICogc2Nyb2xsRGlyZWN0aW9uLmN1cnJlbnQueTtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTtcbiAgfSwgW10pO1xuICBjb25zdCBzb3J0ZWRTY3JvbGxhYmxlQW5jZXN0b3JzID0gUmVhY3QudXNlTWVtbygoKSA9PiBvcmRlciA9PT0gZXhwb3J0cy5UcmF2ZXJzYWxPcmRlci5UcmVlT3JkZXIgPyBbLi4uc2Nyb2xsYWJsZUFuY2VzdG9yc10ucmV2ZXJzZSgpIDogc2Nyb2xsYWJsZUFuY2VzdG9ycywgW29yZGVyLCBzY3JvbGxhYmxlQW5jZXN0b3JzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbmFibGVkIHx8ICFzY3JvbGxhYmxlQW5jZXN0b3JzLmxlbmd0aCB8fCAhcmVjdCkge1xuICAgICAgY2xlYXJBdXRvU2Nyb2xsSW50ZXJ2YWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjcm9sbENvbnRhaW5lciBvZiBzb3J0ZWRTY3JvbGxhYmxlQW5jZXN0b3JzKSB7XG4gICAgICBpZiAoKGNhblNjcm9sbCA9PSBudWxsID8gdm9pZCAwIDogY2FuU2Nyb2xsKHNjcm9sbENvbnRhaW5lcikpID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSBzY3JvbGxhYmxlQW5jZXN0b3JzLmluZGV4T2Yoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlY3QgPSBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0c1tpbmRleF07XG5cbiAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyUmVjdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIHNwZWVkXG4gICAgICB9ID0gZ2V0U2Nyb2xsRGlyZWN0aW9uQW5kU3BlZWQoc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxDb250YWluZXJSZWN0LCByZWN0LCBhY2NlbGVyYXRpb24sIHRocmVzaG9sZCk7XG5cbiAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbJ3gnLCAneSddKSB7XG4gICAgICAgIGlmICghc2Nyb2xsSW50ZW50W2F4aXNdW2RpcmVjdGlvbltheGlzXV0pIHtcbiAgICAgICAgICBzcGVlZFtheGlzXSA9IDA7XG4gICAgICAgICAgZGlyZWN0aW9uW2F4aXNdID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3BlZWQueCA+IDAgfHwgc3BlZWQueSA+IDApIHtcbiAgICAgICAgY2xlYXJBdXRvU2Nyb2xsSW50ZXJ2YWwoKTtcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQgPSBzY3JvbGxDb250YWluZXI7XG4gICAgICAgIHNldEF1dG9TY3JvbGxJbnRlcnZhbChhdXRvU2Nyb2xsLCBpbnRlcnZhbCk7XG4gICAgICAgIHNjcm9sbFNwZWVkLmN1cnJlbnQgPSBzcGVlZDtcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uLmN1cnJlbnQgPSBkaXJlY3Rpb247XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxTcGVlZC5jdXJyZW50ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHNjcm9sbERpcmVjdGlvbi5jdXJyZW50ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGNsZWFyQXV0b1Njcm9sbEludGVydmFsKCk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW2FjY2VsZXJhdGlvbiwgYXV0b1Njcm9sbCwgY2FuU2Nyb2xsLCBjbGVhckF1dG9TY3JvbGxJbnRlcnZhbCwgZW5hYmxlZCwgaW50ZXJ2YWwsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgSlNPTi5zdHJpbmdpZnkocmVjdCksIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgSlNPTi5zdHJpbmdpZnkoc2Nyb2xsSW50ZW50KSwgc2V0QXV0b1Njcm9sbEludGVydmFsLCBzY3JvbGxhYmxlQW5jZXN0b3JzLCBzb3J0ZWRTY3JvbGxhYmxlQW5jZXN0b3JzLCBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0cywgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBKU09OLnN0cmluZ2lmeSh0aHJlc2hvbGQpXSk7XG59XG5jb25zdCBkZWZhdWx0U2Nyb2xsSW50ZW50ID0ge1xuICB4OiB7XG4gICAgW0RpcmVjdGlvbi5CYWNrd2FyZF06IGZhbHNlLFxuICAgIFtEaXJlY3Rpb24uRm9yd2FyZF06IGZhbHNlXG4gIH0sXG4gIHk6IHtcbiAgICBbRGlyZWN0aW9uLkJhY2t3YXJkXTogZmFsc2UsXG4gICAgW0RpcmVjdGlvbi5Gb3J3YXJkXTogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gdXNlU2Nyb2xsSW50ZW50KF9yZWYyKSB7XG4gIGxldCB7XG4gICAgZGVsdGEsXG4gICAgZGlzYWJsZWRcbiAgfSA9IF9yZWYyO1xuICBjb25zdCBwcmV2aW91c0RlbHRhID0gdXRpbGl0aWVzLnVzZVByZXZpb3VzKGRlbHRhKTtcbiAgcmV0dXJuIHV0aWxpdGllcy51c2VMYXp5TWVtbyhwcmV2aW91c0ludGVudCA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8ICFwcmV2aW91c0RlbHRhIHx8ICFwcmV2aW91c0ludGVudCkge1xuICAgICAgLy8gUmVzZXQgc2Nyb2xsIGludGVudCB0cmFja2luZyB3aGVuIGF1dG8tc2Nyb2xsaW5nIGlzIGRpc2FibGVkXG4gICAgICByZXR1cm4gZGVmYXVsdFNjcm9sbEludGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICB4OiBNYXRoLnNpZ24oZGVsdGEueCAtIHByZXZpb3VzRGVsdGEueCksXG4gICAgICB5OiBNYXRoLnNpZ24oZGVsdGEueSAtIHByZXZpb3VzRGVsdGEueSlcbiAgICB9OyAvLyBLZWVwIHRyYWNrIG9mIHRoZSB1c2VyIGludGVudCB0byBzY3JvbGwgaW4gZWFjaCBkaXJlY3Rpb24gZm9yIGJvdGggYXhpc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHtcbiAgICAgICAgW0RpcmVjdGlvbi5CYWNrd2FyZF06IHByZXZpb3VzSW50ZW50LnhbRGlyZWN0aW9uLkJhY2t3YXJkXSB8fCBkaXJlY3Rpb24ueCA9PT0gLTEsXG4gICAgICAgIFtEaXJlY3Rpb24uRm9yd2FyZF06IHByZXZpb3VzSW50ZW50LnhbRGlyZWN0aW9uLkZvcndhcmRdIHx8IGRpcmVjdGlvbi54ID09PSAxXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBbRGlyZWN0aW9uLkJhY2t3YXJkXTogcHJldmlvdXNJbnRlbnQueVtEaXJlY3Rpb24uQmFja3dhcmRdIHx8IGRpcmVjdGlvbi55ID09PSAtMSxcbiAgICAgICAgW0RpcmVjdGlvbi5Gb3J3YXJkXTogcHJldmlvdXNJbnRlbnQueVtEaXJlY3Rpb24uRm9yd2FyZF0gfHwgZGlyZWN0aW9uLnkgPT09IDFcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzYWJsZWQsIGRlbHRhLCBwcmV2aW91c0RlbHRhXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhY2hlZE5vZGUoZHJhZ2dhYmxlTm9kZXMsIGlkKSB7XG4gIGNvbnN0IGRyYWdnYWJsZU5vZGUgPSBpZCAhPSBudWxsID8gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgbm9kZSA9IGRyYWdnYWJsZU5vZGUgPyBkcmFnZ2FibGVOb2RlLm5vZGUuY3VycmVudCA6IG51bGw7XG4gIHJldHVybiB1dGlsaXRpZXMudXNlTGF6eU1lbW8oY2FjaGVkTm9kZSA9PiB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBJbiBzb21lIGNhc2VzLCB0aGUgZHJhZ2dhYmxlIG5vZGUgY2FuIHVubW91bnQgd2hpbGUgZHJhZ2dpbmdcbiAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIGZvciB2aXJ0dWFsaXplZCBsaXN0cy4gSW4gdGhvc2Ugc2l0dWF0aW9ucyxcbiAgICAvLyB3ZSBmYWxsIGJhY2sgdG8gdGhlIGxhc3Qga25vd24gdmFsdWUgZm9yIHRoYXQgbm9kZS5cblxuXG4gICAgcmV0dXJuIChfcmVmID0gbm9kZSAhPSBudWxsID8gbm9kZSA6IGNhY2hlZE5vZGUpICE9IG51bGwgPyBfcmVmIDogbnVsbDtcbiAgfSwgW25vZGUsIGlkXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbWJpbmVBY3RpdmF0b3JzKHNlbnNvcnMsIGdldFN5bnRoZXRpY0hhbmRsZXIpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gc2Vuc29ycy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBzZW5zb3IpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZW5zb3I6IFNlbnNvclxuICAgIH0gPSBzZW5zb3I7XG4gICAgY29uc3Qgc2Vuc29yQWN0aXZhdG9ycyA9IFNlbnNvci5hY3RpdmF0b3JzLm1hcChhY3RpdmF0b3IgPT4gKHtcbiAgICAgIGV2ZW50TmFtZTogYWN0aXZhdG9yLmV2ZW50TmFtZSxcbiAgICAgIGhhbmRsZXI6IGdldFN5bnRoZXRpY0hhbmRsZXIoYWN0aXZhdG9yLmhhbmRsZXIsIHNlbnNvcilcbiAgICB9KSk7XG4gICAgcmV0dXJuIFsuLi5hY2N1bXVsYXRvciwgLi4uc2Vuc29yQWN0aXZhdG9yc107XG4gIH0sIFtdKSwgW3NlbnNvcnMsIGdldFN5bnRoZXRpY0hhbmRsZXJdKTtcbn1cblxuKGZ1bmN0aW9uIChNZWFzdXJpbmdTdHJhdGVneSkge1xuICBNZWFzdXJpbmdTdHJhdGVneVtNZWFzdXJpbmdTdHJhdGVneVtcIkFsd2F5c1wiXSA9IDBdID0gXCJBbHdheXNcIjtcbiAgTWVhc3VyaW5nU3RyYXRlZ3lbTWVhc3VyaW5nU3RyYXRlZ3lbXCJCZWZvcmVEcmFnZ2luZ1wiXSA9IDFdID0gXCJCZWZvcmVEcmFnZ2luZ1wiO1xuICBNZWFzdXJpbmdTdHJhdGVneVtNZWFzdXJpbmdTdHJhdGVneVtcIldoaWxlRHJhZ2dpbmdcIl0gPSAyXSA9IFwiV2hpbGVEcmFnZ2luZ1wiO1xufSkoZXhwb3J0cy5NZWFzdXJpbmdTdHJhdGVneSB8fCAoZXhwb3J0cy5NZWFzdXJpbmdTdHJhdGVneSA9IHt9KSk7XG5cbihmdW5jdGlvbiAoTWVhc3VyaW5nRnJlcXVlbmN5KSB7XG4gIE1lYXN1cmluZ0ZyZXF1ZW5jeVtcIk9wdGltaXplZFwiXSA9IFwib3B0aW1pemVkXCI7XG59KShleHBvcnRzLk1lYXN1cmluZ0ZyZXF1ZW5jeSB8fCAoZXhwb3J0cy5NZWFzdXJpbmdGcmVxdWVuY3kgPSB7fSkpO1xuXG5jb25zdCBkZWZhdWx0VmFsdWUgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xuZnVuY3Rpb24gdXNlRHJvcHBhYmxlTWVhc3VyaW5nKGNvbnRhaW5lcnMsIF9yZWYpIHtcbiAgbGV0IHtcbiAgICBkcmFnZ2luZyxcbiAgICBkZXBlbmRlbmNpZXMsXG4gICAgY29uZmlnXG4gIH0gPSBfcmVmO1xuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7XG4gICAgZnJlcXVlbmN5LFxuICAgIG1lYXN1cmUsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgY29udGFpbmVyc1JlZiA9IFJlYWN0LnVzZVJlZihjb250YWluZXJzKTtcbiAgY29uc3QgZGlzYWJsZWQgPSBpc0Rpc2FibGVkKCk7XG4gIGNvbnN0IGRpc2FibGVkUmVmID0gdXRpbGl0aWVzLnVzZUxhdGVzdFZhbHVlKGRpc2FibGVkKTtcbiAgY29uc3QgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWRzKSB7XG4gICAgaWYgKGlkcyA9PT0gdm9pZCAwKSB7XG4gICAgICBpZHMgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFF1ZXVlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUuY29uY2F0KGlkcy5maWx0ZXIoaWQgPT4gIXZhbHVlLmluY2x1ZGVzKGlkKSkpO1xuICAgIH0pO1xuICB9LCBbZGlzYWJsZWRSZWZdKTtcbiAgY29uc3QgdGltZW91dElkID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBkcm9wcGFibGVSZWN0cyA9IHV0aWxpdGllcy51c2VMYXp5TWVtbyhwcmV2aW91c1ZhbHVlID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgJiYgIWRyYWdnaW5nKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGlmICghcHJldmlvdXNWYWx1ZSB8fCBwcmV2aW91c1ZhbHVlID09PSBkZWZhdWx0VmFsdWUgfHwgY29udGFpbmVyc1JlZi5jdXJyZW50ICE9PSBjb250YWluZXJzIHx8IHF1ZXVlICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgZm9yIChsZXQgY29udGFpbmVyIG9mIGNvbnRhaW5lcnMpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZSAmJiBxdWV1ZS5sZW5ndGggPiAwICYmICFxdWV1ZS5pbmNsdWRlcyhjb250YWluZXIuaWQpICYmIGNvbnRhaW5lci5yZWN0LmN1cnJlbnQpIHtcbiAgICAgICAgICAvLyBUaGlzIGNvbnRhaW5lciBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlLW1lYXN1cmVkXG4gICAgICAgICAgbWFwLnNldChjb250YWluZXIuaWQsIGNvbnRhaW5lci5yZWN0LmN1cnJlbnQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IGNvbnRhaW5lci5ub2RlLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBub2RlID8gbmV3IFJlY3QobWVhc3VyZShub2RlKSwgbm9kZSkgOiBudWxsO1xuICAgICAgICBjb250YWluZXIucmVjdC5jdXJyZW50ID0gcmVjdDtcblxuICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgIG1hcC5zZXQoY29udGFpbmVyLmlkLCByZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICB9LCBbY29udGFpbmVycywgcXVldWUsIGRyYWdnaW5nLCBkaXNhYmxlZCwgbWVhc3VyZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRhaW5lcnNSZWYuY3VycmVudCA9IGNvbnRhaW5lcnM7XG4gIH0sIFtjb250YWluZXJzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMoKTtcbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbZHJhZ2dpbmcsIGRpc2FibGVkXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXVlICYmIHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFF1ZXVlKG51bGwpO1xuICAgIH1cbiAgfSwgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtKU09OLnN0cmluZ2lmeShxdWV1ZSldKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgdHlwZW9mIGZyZXF1ZW5jeSAhPT0gJ251bWJlcicgfHwgdGltZW91dElkLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lb3V0SWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMoKTtcbiAgICAgIHRpbWVvdXRJZC5jdXJyZW50ID0gbnVsbDtcbiAgICB9LCBmcmVxdWVuY3kpO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtmcmVxdWVuY3ksIGRpc2FibGVkLCBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVycywgLi4uZGVwZW5kZW5jaWVzXSk7XG4gIHJldHVybiB7XG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgbWVhc3VyaW5nU2NoZWR1bGVkOiBxdWV1ZSAhPSBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZCgpIHtcbiAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICBjYXNlIGV4cG9ydHMuTWVhc3VyaW5nU3RyYXRlZ3kuQWx3YXlzOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNhc2UgZXhwb3J0cy5NZWFzdXJpbmdTdHJhdGVneS5CZWZvcmVEcmFnZ2luZzpcbiAgICAgICAgcmV0dXJuIGRyYWdnaW5nO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gIWRyYWdnaW5nO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VJbml0aWFsVmFsdWUodmFsdWUsIGNvbXB1dGVGbikge1xuICByZXR1cm4gdXRpbGl0aWVzLnVzZUxhenlNZW1vKHByZXZpb3VzVmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGNvbXB1dGVGbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbXB1dGVGbih2YWx1ZSkgOiB2YWx1ZTtcbiAgfSwgW2NvbXB1dGVGbiwgdmFsdWVdKTtcbn1cblxuZnVuY3Rpb24gdXNlSW5pdGlhbFJlY3Qobm9kZSwgbWVhc3VyZSkge1xuICByZXR1cm4gdXNlSW5pdGlhbFZhbHVlKG5vZGUsIG1lYXN1cmUpO1xufVxuXG4vKipcclxuICogUmV0dXJucyBhIG5ldyBNdXRhdGlvbk9ic2VydmVyIGluc3RhbmNlLlxyXG4gKiBJZiBgTXV0YXRpb25PYnNlcnZlcmAgaXMgdW5kZWZpbmVkIGluIHRoZSBleGVjdXRpb24gZW52aXJvbm1lbnQsIHJldHVybnMgYHVuZGVmaW5lZGAuXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjYWxsYmFjayxcbiAgICBkaXNhYmxlZFxuICB9ID0gX3JlZjtcbiAgY29uc3QgaGFuZGxlTXV0YXRpb25zID0gdXRpbGl0aWVzLnVzZUV2ZW50KGNhbGxiYWNrKTtcbiAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICB9ID0gd2luZG93O1xuICAgIHJldHVybiBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVNdXRhdGlvbnMpO1xuICB9LCBbaGFuZGxlTXV0YXRpb25zLCBkaXNhYmxlZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBtdXRhdGlvbk9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfSwgW211dGF0aW9uT2JzZXJ2ZXJdKTtcbiAgcmV0dXJuIG11dGF0aW9uT2JzZXJ2ZXI7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIGEgbmV3IFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlIGJvdW5kIHRvIHRoZSBgb25SZXNpemVgIGNhbGxiYWNrLlxyXG4gKiBJZiBgUmVzaXplT2JzZXJ2ZXJgIGlzIHVuZGVmaW5lZCBpbiB0aGUgZXhlY3V0aW9uIGVudmlyb25tZW50LCByZXR1cm5zIGB1bmRlZmluZWRgLlxyXG4gKi9cblxuZnVuY3Rpb24gdXNlUmVzaXplT2JzZXJ2ZXIoX3JlZikge1xuICBsZXQge1xuICAgIGNhbGxiYWNrLFxuICAgIGRpc2FibGVkXG4gIH0gPSBfcmVmO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1dGlsaXRpZXMudXNlRXZlbnQoY2FsbGJhY2spO1xuICBjb25zdCByZXNpemVPYnNlcnZlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBSZXNpemVPYnNlcnZlclxuICAgIH0gPSB3aW5kb3c7XG4gICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlcihoYW5kbGVSZXNpemUpO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtkaXNhYmxlZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbcmVzaXplT2JzZXJ2ZXJdKTtcbiAgcmV0dXJuIHJlc2l6ZU9ic2VydmVyO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0TWVhc3VyZShlbGVtZW50KSB7XG4gIHJldHVybiBuZXcgUmVjdChnZXRDbGllbnRSZWN0KGVsZW1lbnQpLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdXNlUmVjdChlbGVtZW50LCBtZWFzdXJlLCBmYWxsYmFja1JlY3QpIHtcbiAgaWYgKG1lYXN1cmUgPT09IHZvaWQgMCkge1xuICAgIG1lYXN1cmUgPSBkZWZhdWx0TWVhc3VyZTtcbiAgfVxuXG4gIGNvbnN0IFtyZWN0LCBzZXRSZWN0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmVSZWN0KCkge1xuICAgIHNldFJlY3QoY3VycmVudFJlY3QgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIGxhc3QgcmVjdCB3ZSBtZWFzdXJlZCBpZiB0aGUgZWxlbWVudCBpc1xuICAgICAgICAvLyBubyBsb25nZXIgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgICAgIHJldHVybiAoX3JlZiA9IGN1cnJlbnRSZWN0ICE9IG51bGwgPyBjdXJyZW50UmVjdCA6IGZhbGxiYWNrUmVjdCkgIT0gbnVsbCA/IF9yZWYgOiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdSZWN0ID0gbWVhc3VyZShlbGVtZW50KTtcblxuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRSZWN0KSA9PT0gSlNPTi5zdHJpbmdpZnkobmV3UmVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRSZWN0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3UmVjdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSB1c2VNdXRhdGlvbk9ic2VydmVyKHtcbiAgICBjYWxsYmFjayhyZWNvcmRzKSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHJlY29yZCBvZiByZWNvcmRzKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRhcmdldFxuICAgICAgICB9ID0gcmVjb3JkO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnY2hpbGRMaXN0JyAmJiB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0YXJnZXQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICBtZWFzdXJlUmVjdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuICBjb25zdCByZXNpemVPYnNlcnZlciA9IHVzZVJlc2l6ZU9ic2VydmVyKHtcbiAgICBjYWxsYmFjazogbWVhc3VyZVJlY3RcbiAgfSk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBtZWFzdXJlUmVjdCgpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgbXV0YXRpb25PYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSwgW2VsZW1lbnRdKTtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIHVzZVJlY3REZWx0YShyZWN0KSB7XG4gIGNvbnN0IGluaXRpYWxSZWN0ID0gdXNlSW5pdGlhbFZhbHVlKHJlY3QpO1xuICByZXR1cm4gZ2V0UmVjdERlbHRhKHJlY3QsIGluaXRpYWxSZWN0KTtcbn1cblxuY29uc3QgZGVmYXVsdFZhbHVlJDEgPSBbXTtcbmZ1bmN0aW9uIHVzZVNjcm9sbGFibGVBbmNlc3RvcnMobm9kZSkge1xuICBjb25zdCBwcmV2aW91c05vZGUgPSBSZWFjdC51c2VSZWYobm9kZSk7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IHV0aWxpdGllcy51c2VMYXp5TWVtbyhwcmV2aW91c1ZhbHVlID0+IHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUkMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSAmJiBwcmV2aW91c1ZhbHVlICE9PSBkZWZhdWx0VmFsdWUkMSAmJiBub2RlICYmIHByZXZpb3VzTm9kZS5jdXJyZW50ICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcHJldmlvdXNOb2RlLmN1cnJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFNjcm9sbGFibGVBbmNlc3RvcnMobm9kZSk7XG4gIH0sIFtub2RlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlvdXNOb2RlLmN1cnJlbnQgPSBub2RlO1xuICB9LCBbbm9kZV0pO1xuICByZXR1cm4gYW5jZXN0b3JzO1xufVxuXG5mdW5jdGlvbiB1c2VTY3JvbGxPZmZzZXRzKGVsZW1lbnRzKSB7XG4gIGNvbnN0IFtzY3JvbGxDb29yZGluYXRlcywgc2V0U2Nyb2xsQ29vcmRpbmF0ZXNdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHByZXZFbGVtZW50cyA9IFJlYWN0LnVzZVJlZihlbGVtZW50cyk7IC8vIFRvLWRvOiBUaHJvdHRsZSB0aGUgaGFuZGxlU2Nyb2xsIGNhbGxiYWNrXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBnZXRTY3JvbGxhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xuXG4gICAgaWYgKCFzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U2Nyb2xsQ29vcmRpbmF0ZXMoc2Nyb2xsQ29vcmRpbmF0ZXMgPT4ge1xuICAgICAgaWYgKCFzY3JvbGxDb29yZGluYXRlcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsQ29vcmRpbmF0ZXMuc2V0KHNjcm9sbGluZ0VsZW1lbnQsIGdldFNjcm9sbENvb3JkaW5hdGVzKHNjcm9sbGluZ0VsZW1lbnQpKTtcbiAgICAgIHJldHVybiBuZXcgTWFwKHNjcm9sbENvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzRWxlbWVudHMgPSBwcmV2RWxlbWVudHMuY3VycmVudDtcblxuICAgIGlmIChlbGVtZW50cyAhPT0gcHJldmlvdXNFbGVtZW50cykge1xuICAgICAgY2xlYW51cChwcmV2aW91c0VsZW1lbnRzKTtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBlbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVFbGVtZW50ID0gZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNjcm9sbGFibGVFbGVtZW50KSB7XG4gICAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7XG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIFtzY3JvbGxhYmxlRWxlbWVudCwgZ2V0U2Nyb2xsQ29vcmRpbmF0ZXMoc2Nyb2xsYWJsZUVsZW1lbnQpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkuZmlsdGVyKGVudHJ5ID0+IGVudHJ5ICE9IG51bGwpO1xuICAgICAgc2V0U2Nyb2xsQ29vcmRpbmF0ZXMoZW50cmllcy5sZW5ndGggPyBuZXcgTWFwKGVudHJpZXMpIDogbnVsbCk7XG4gICAgICBwcmV2RWxlbWVudHMuY3VycmVudCA9IGVsZW1lbnRzO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhbnVwKGVsZW1lbnRzKTtcbiAgICAgIGNsZWFudXAocHJldmlvdXNFbGVtZW50cyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAoZWxlbWVudHMpIHtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVFbGVtZW50ID0gZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBzY3JvbGxhYmxlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaGFuZGxlU2Nyb2xsLCBlbGVtZW50c10pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNjcm9sbENvb3JkaW5hdGVzID8gQXJyYXkuZnJvbShzY3JvbGxDb29yZGluYXRlcy52YWx1ZXMoKSkucmVkdWNlKChhY2MsIGNvb3JkaW5hdGVzKSA9PiB1dGlsaXRpZXMuYWRkKGFjYywgY29vcmRpbmF0ZXMpLCBkZWZhdWx0Q29vcmRpbmF0ZXMpIDogZ2V0U2Nyb2xsT2Zmc2V0cyhlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRDb29yZGluYXRlcztcbiAgfSwgW2VsZW1lbnRzLCBzY3JvbGxDb29yZGluYXRlc10pO1xufVxuXG5mdW5jdGlvbiB1c2VTY3JvbGxPZmZzZXRzRGVsdGEoc2Nyb2xsT2Zmc2V0cywgZGVwZW5kZW5jaWVzKSB7XG4gIGlmIChkZXBlbmRlbmNpZXMgPT09IHZvaWQgMCkge1xuICAgIGRlcGVuZGVuY2llcyA9IFtdO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbFNjcm9sbE9mZnNldHMgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdGlhbFNjcm9sbE9mZnNldHMuY3VycmVudCA9IG51bGw7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgZGVwZW5kZW5jaWVzKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNTY3JvbGxPZmZzZXRzID0gc2Nyb2xsT2Zmc2V0cyAhPT0gZGVmYXVsdENvb3JkaW5hdGVzO1xuXG4gICAgaWYgKGhhc1Njcm9sbE9mZnNldHMgJiYgIWluaXRpYWxTY3JvbGxPZmZzZXRzLmN1cnJlbnQpIHtcbiAgICAgIGluaXRpYWxTY3JvbGxPZmZzZXRzLmN1cnJlbnQgPSBzY3JvbGxPZmZzZXRzO1xuICAgIH1cblxuICAgIGlmICghaGFzU2Nyb2xsT2Zmc2V0cyAmJiBpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50KSB7XG4gICAgICBpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIFtzY3JvbGxPZmZzZXRzXSk7XG4gIHJldHVybiBpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50ID8gdXRpbGl0aWVzLnN1YnRyYWN0KHNjcm9sbE9mZnNldHMsIGluaXRpYWxTY3JvbGxPZmZzZXRzLmN1cnJlbnQpIDogZGVmYXVsdENvb3JkaW5hdGVzO1xufVxuXG5mdW5jdGlvbiB1c2VTZW5zb3JTZXR1cChzZW5zb3JzKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1dGlsaXRpZXMuY2FuVXNlRE9NKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGVhcmRvd25GbnMgPSBzZW5zb3JzLm1hcChfcmVmID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIHNlbnNvclxuICAgICAgfSA9IF9yZWY7XG4gICAgICByZXR1cm4gc2Vuc29yLnNldHVwID09IG51bGwgPyB2b2lkIDAgOiBzZW5zb3Iuc2V0dXAoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCB0ZWFyZG93biBvZiB0ZWFyZG93bkZucykge1xuICAgICAgICB0ZWFyZG93biA9PSBudWxsID8gdm9pZCAwIDogdGVhcmRvd24oKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCAvLyBUTy1ETzogU2Vuc29ycyBsZW5ndGggY291bGQgdGhlb3JldGljYWxseSBjaGFuZ2Ugd2hpY2ggd291bGQgbm90IGJlIGEgdmFsaWQgZGVwZW5kZW5jeVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIHNlbnNvcnMubWFwKF9yZWYyID0+IHtcbiAgICBsZXQge1xuICAgICAgc2Vuc29yXG4gICAgfSA9IF9yZWYyO1xuICAgIHJldHVybiBzZW5zb3I7XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gdXNlU3ludGhldGljTGlzdGVuZXJzKGxpc3RlbmVycywgaWQpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBsaXN0ZW5lcnMucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgaGFuZGxlclxuICAgICAgfSA9IF9yZWY7XG5cbiAgICAgIGFjY1tldmVudE5hbWVdID0gZXZlbnQgPT4ge1xuICAgICAgICBoYW5kbGVyKGV2ZW50LCBpZCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfSwgW2xpc3RlbmVycywgaWRdKTtcbn1cblxuZnVuY3Rpb24gdXNlV2luZG93UmVjdChlbGVtZW50KSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IGVsZW1lbnQgPyBnZXRXaW5kb3dDbGllbnRSZWN0KGVsZW1lbnQpIDogbnVsbCwgW2VsZW1lbnRdKTtcbn1cblxuY29uc3QgZGVmYXVsdFZhbHVlJDIgPSBbXTtcbmZ1bmN0aW9uIHVzZVJlY3RzKGVsZW1lbnRzLCBtZWFzdXJlKSB7XG4gIGlmIChtZWFzdXJlID09PSB2b2lkIDApIHtcbiAgICBtZWFzdXJlID0gZ2V0Q2xpZW50UmVjdDtcbiAgfVxuXG4gIGNvbnN0IFtmaXJzdEVsZW1lbnRdID0gZWxlbWVudHM7XG4gIGNvbnN0IHdpbmRvd1JlY3QgPSB1c2VXaW5kb3dSZWN0KGZpcnN0RWxlbWVudCA/IHV0aWxpdGllcy5nZXRXaW5kb3coZmlyc3RFbGVtZW50KSA6IG51bGwpO1xuICBjb25zdCBbcmVjdHMsIHNldFJlY3RzXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSQyKTtcblxuICBmdW5jdGlvbiBtZWFzdXJlUmVjdHMoKSB7XG4gICAgc2V0UmVjdHMoKCkgPT4ge1xuICAgICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSQyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4gaXNEb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoZWxlbWVudCkgPyB3aW5kb3dSZWN0IDogbmV3IFJlY3QobWVhc3VyZShlbGVtZW50KSwgZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSB1c2VSZXNpemVPYnNlcnZlcih7XG4gICAgY2FsbGJhY2s6IG1lYXN1cmVSZWN0c1xuICB9KTtcbiAgdXRpbGl0aWVzLnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHJlc2l6ZU9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgbWVhc3VyZVJlY3RzKCk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHJlc2l6ZU9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcbiAgfSwgW2VsZW1lbnRzXSk7XG4gIHJldHVybiByZWN0cztcbn1cblxuZnVuY3Rpb24gZ2V0TWVhc3VyYWJsZU5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBub2RlLmNoaWxkcmVuWzBdO1xuICByZXR1cm4gdXRpbGl0aWVzLmlzSFRNTEVsZW1lbnQoZmlyc3RDaGlsZCkgPyBmaXJzdENoaWxkIDogbm9kZTtcbn1cblxuZnVuY3Rpb24gdXNlRHJhZ092ZXJsYXlNZWFzdXJpbmcoX3JlZikge1xuICBsZXQge1xuICAgIG1lYXN1cmVcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IFtyZWN0LCBzZXRSZWN0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhlbnRyaWVzID0+IHtcbiAgICBmb3IgKGNvbnN0IHtcbiAgICAgIHRhcmdldFxuICAgIH0gb2YgZW50cmllcykge1xuICAgICAgaWYgKHV0aWxpdGllcy5pc0hUTUxFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgc2V0UmVjdChyZWN0ID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdSZWN0ID0gbWVhc3VyZSh0YXJnZXQpO1xuICAgICAgICAgIHJldHVybiByZWN0ID8geyAuLi5yZWN0LFxuICAgICAgICAgICAgd2lkdGg6IG5ld1JlY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5ld1JlY3QuaGVpZ2h0XG4gICAgICAgICAgfSA6IG5ld1JlY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sIFttZWFzdXJlXSk7XG4gIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gdXNlUmVzaXplT2JzZXJ2ZXIoe1xuICAgIGNhbGxiYWNrOiBoYW5kbGVSZXNpemVcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZU5vZGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhlbGVtZW50ID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0TWVhc3VyYWJsZU5vZGUoZWxlbWVudCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICByZXNpemVPYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShub2RlKTtcbiAgICB9XG5cbiAgICBzZXRSZWN0KG5vZGUgPyBtZWFzdXJlKG5vZGUpIDogbnVsbCk7XG4gIH0sIFttZWFzdXJlLCByZXNpemVPYnNlcnZlcl0pO1xuICBjb25zdCBbbm9kZVJlZiwgc2V0UmVmXSA9IHV0aWxpdGllcy51c2VOb2RlUmVmKGhhbmRsZU5vZGVDaGFuZ2UpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIG5vZGVSZWYsXG4gICAgcmVjdCxcbiAgICBzZXRSZWZcbiAgfSksIFtyZWN0LCBub2RlUmVmLCBzZXRSZWZdKTtcbn1cblxuY29uc3QgZGVmYXVsdFNlbnNvcnMgPSBbe1xuICBzZW5zb3I6IFBvaW50ZXJTZW5zb3IsXG4gIG9wdGlvbnM6IHt9XG59LCB7XG4gIHNlbnNvcjogS2V5Ym9hcmRTZW5zb3IsXG4gIG9wdGlvbnM6IHt9XG59XTtcbmNvbnN0IGRlZmF1bHREYXRhID0ge1xuICBjdXJyZW50OiB7fVxufTtcbmNvbnN0IGRlZmF1bHRNZWFzdXJpbmdDb25maWd1cmF0aW9uID0ge1xuICBkcmFnZ2FibGU6IHtcbiAgICBtZWFzdXJlOiBnZXRUcmFuc2Zvcm1BZ25vc3RpY0NsaWVudFJlY3RcbiAgfSxcbiAgZHJvcHBhYmxlOiB7XG4gICAgbWVhc3VyZTogZ2V0VHJhbnNmb3JtQWdub3N0aWNDbGllbnRSZWN0LFxuICAgIHN0cmF0ZWd5OiBleHBvcnRzLk1lYXN1cmluZ1N0cmF0ZWd5LldoaWxlRHJhZ2dpbmcsXG4gICAgZnJlcXVlbmN5OiBleHBvcnRzLk1lYXN1cmluZ0ZyZXF1ZW5jeS5PcHRpbWl6ZWRcbiAgfSxcbiAgZHJhZ092ZXJsYXk6IHtcbiAgICBtZWFzdXJlOiBnZXRDbGllbnRSZWN0XG4gIH1cbn07XG5cbmNsYXNzIERyb3BwYWJsZUNvbnRhaW5lcnNNYXAgZXh0ZW5kcyBNYXAge1xuICBnZXQoaWQpIHtcbiAgICB2YXIgX3N1cGVyJGdldDtcblxuICAgIHJldHVybiBpZCAhPSBudWxsID8gKF9zdXBlciRnZXQgPSBzdXBlci5nZXQoaWQpKSAhPSBudWxsID8gX3N1cGVyJGdldCA6IHVuZGVmaW5lZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy52YWx1ZXMoKSk7XG4gIH1cblxuICBnZXRFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5maWx0ZXIoX3JlZiA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBkaXNhYmxlZFxuICAgICAgfSA9IF9yZWY7XG4gICAgICByZXR1cm4gIWRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Tm9kZUZvcihpZCkge1xuICAgIHZhciBfdGhpcyRnZXQkbm9kZSRjdXJyZW4sIF90aGlzJGdldDtcblxuICAgIHJldHVybiAoX3RoaXMkZ2V0JG5vZGUkY3VycmVuID0gKF90aGlzJGdldCA9IHRoaXMuZ2V0KGlkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGdldC5ub2RlLmN1cnJlbnQpICE9IG51bGwgPyBfdGhpcyRnZXQkbm9kZSRjdXJyZW4gOiB1bmRlZmluZWQ7XG4gIH1cblxufVxuXG5jb25zdCBkZWZhdWx0UHVibGljQ29udGV4dCA9IHtcbiAgYWN0aXZhdG9yRXZlbnQ6IG51bGwsXG4gIGFjdGl2ZTogbnVsbCxcbiAgYWN0aXZlTm9kZTogbnVsbCxcbiAgYWN0aXZlTm9kZVJlY3Q6IG51bGwsXG4gIGNvbGxpc2lvbnM6IG51bGwsXG4gIGNvbnRhaW5lck5vZGVSZWN0OiBudWxsLFxuICBkcmFnZ2FibGVOb2RlczogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgZHJvcHBhYmxlUmVjdHM6IC8qI19fUFVSRV9fKi9uZXcgTWFwKCksXG4gIGRyb3BwYWJsZUNvbnRhaW5lcnM6IC8qI19fUFVSRV9fKi9uZXcgRHJvcHBhYmxlQ29udGFpbmVyc01hcCgpLFxuICBvdmVyOiBudWxsLFxuICBkcmFnT3ZlcmxheToge1xuICAgIG5vZGVSZWY6IHtcbiAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICB9LFxuICAgIHJlY3Q6IG51bGwsXG4gICAgc2V0UmVmOiBub29wXG4gIH0sXG4gIHNjcm9sbGFibGVBbmNlc3RvcnM6IFtdLFxuICBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0czogW10sXG4gIG1lYXN1cmluZ0NvbmZpZ3VyYXRpb246IGRlZmF1bHRNZWFzdXJpbmdDb25maWd1cmF0aW9uLFxuICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVyczogbm9vcCxcbiAgd2luZG93UmVjdDogbnVsbCxcbiAgbWVhc3VyaW5nU2NoZWR1bGVkOiBmYWxzZVxufTtcbmNvbnN0IGRlZmF1bHRJbnRlcm5hbENvbnRleHQgPSB7XG4gIGFjdGl2YXRvckV2ZW50OiBudWxsLFxuICBhY3RpdmF0b3JzOiBbXSxcbiAgYWN0aXZlOiBudWxsLFxuICBhY3RpdmVOb2RlUmVjdDogbnVsbCxcbiAgYXJpYURlc2NyaWJlZEJ5SWQ6IHtcbiAgICBkcmFnZ2FibGU6ICcnXG4gIH0sXG4gIGRpc3BhdGNoOiBub29wLFxuICBkcmFnZ2FibGVOb2RlczogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgb3ZlcjogbnVsbCxcbiAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnM6IG5vb3Bcbn07XG5jb25zdCBJbnRlcm5hbENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0SW50ZXJuYWxDb250ZXh0KTtcbmNvbnN0IFB1YmxpY0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0UHVibGljQ29udGV4dCk7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBkcmFnZ2FibGU6IHtcbiAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgIGluaXRpYWxDb29yZGluYXRlczoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgbm9kZXM6IG5ldyBNYXAoKSxcbiAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wcGFibGU6IHtcbiAgICAgIGNvbnRhaW5lcnM6IG5ldyBEcm9wcGFibGVDb250YWluZXJzTWFwKClcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uLkRyYWdTdGFydDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICBkcmFnZ2FibGU6IHsgLi4uc3RhdGUuZHJhZ2dhYmxlLFxuICAgICAgICAgIGluaXRpYWxDb29yZGluYXRlczogYWN0aW9uLmluaXRpYWxDb29yZGluYXRlcyxcbiAgICAgICAgICBhY3RpdmU6IGFjdGlvbi5hY3RpdmVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGNhc2UgQWN0aW9uLkRyYWdNb3ZlOlxuICAgICAgaWYgKHN0YXRlLmRyYWdnYWJsZS5hY3RpdmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICBkcmFnZ2FibGU6IHsgLi4uc3RhdGUuZHJhZ2dhYmxlLFxuICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgeDogYWN0aW9uLmNvb3JkaW5hdGVzLnggLSBzdGF0ZS5kcmFnZ2FibGUuaW5pdGlhbENvb3JkaW5hdGVzLngsXG4gICAgICAgICAgICB5OiBhY3Rpb24uY29vcmRpbmF0ZXMueSAtIHN0YXRlLmRyYWdnYWJsZS5pbml0aWFsQ29vcmRpbmF0ZXMueVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGNhc2UgQWN0aW9uLkRyYWdFbmQ6XG4gICAgY2FzZSBBY3Rpb24uRHJhZ0NhbmNlbDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICBkcmFnZ2FibGU6IHsgLi4uc3RhdGUuZHJhZ2dhYmxlLFxuICAgICAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgICAgICBpbml0aWFsQ29vcmRpbmF0ZXM6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgY2FzZSBBY3Rpb24uUmVnaXN0ZXJEcm9wcGFibGU6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBlbGVtZW50XG4gICAgICAgIH0gPSBhY3Rpb247XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpZFxuICAgICAgICB9ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IG5ldyBEcm9wcGFibGVDb250YWluZXJzTWFwKHN0YXRlLmRyb3BwYWJsZS5jb250YWluZXJzKTtcbiAgICAgICAgY29udGFpbmVycy5zZXQoaWQsIGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICBkcm9wcGFibGU6IHsgLi4uc3RhdGUuZHJvcHBhYmxlLFxuICAgICAgICAgICAgY29udGFpbmVyc1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGNhc2UgQWN0aW9uLlNldERyb3BwYWJsZURpc2FibGVkOlxuICAgICAge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgIH0gPSBhY3Rpb247XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5kcm9wcGFibGUuY29udGFpbmVycy5nZXQoaWQpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBrZXkgIT09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IG5ldyBEcm9wcGFibGVDb250YWluZXJzTWFwKHN0YXRlLmRyb3BwYWJsZS5jb250YWluZXJzKTtcbiAgICAgICAgY29udGFpbmVycy5zZXQoaWQsIHsgLi4uZWxlbWVudCxcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgZHJvcHBhYmxlOiB7IC4uLnN0YXRlLmRyb3BwYWJsZSxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBjYXNlIEFjdGlvbi5VbnJlZ2lzdGVyRHJvcHBhYmxlOlxuICAgICAge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAga2V5XG4gICAgICAgIH0gPSBhY3Rpb247XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5kcm9wcGFibGUuY29udGFpbmVycy5nZXQoaWQpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBrZXkgIT09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IG5ldyBEcm9wcGFibGVDb250YWluZXJzTWFwKHN0YXRlLmRyb3BwYWJsZS5jb250YWluZXJzKTtcbiAgICAgICAgY29udGFpbmVycy5kZWxldGUoaWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgICBkcm9wcGFibGU6IHsgLi4uc3RhdGUuZHJvcHBhYmxlLFxuICAgICAgICAgICAgY29udGFpbmVyc1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBSZXN0b3JlRm9jdXMoX3JlZikge1xuICBsZXQge1xuICAgIGRpc2FibGVkXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRvckV2ZW50LFxuICAgIGRyYWdnYWJsZU5vZGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KEludGVybmFsQ29udGV4dCk7XG4gIGNvbnN0IHByZXZpb3VzQWN0aXZhdG9yRXZlbnQgPSB1dGlsaXRpZXMudXNlUHJldmlvdXMoYWN0aXZhdG9yRXZlbnQpO1xuICBjb25zdCBwcmV2aW91c0FjdGl2ZUlkID0gdXRpbGl0aWVzLnVzZVByZXZpb3VzKGFjdGl2ZSA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlLmlkKTsgLy8gUmVzdG9yZSBrZXlib2FyZCBmb2N1cyBvbiB0aGUgYWN0aXZhdG9yIG5vZGVcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYWN0aXZhdG9yRXZlbnQgJiYgcHJldmlvdXNBY3RpdmF0b3JFdmVudCAmJiBwcmV2aW91c0FjdGl2ZUlkICE9IG51bGwpIHtcbiAgICAgIGlmICghdXRpbGl0aWVzLmlzS2V5Ym9hcmRFdmVudChwcmV2aW91c0FjdGl2YXRvckV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBwcmV2aW91c0FjdGl2YXRvckV2ZW50LnRhcmdldCkge1xuICAgICAgICAvLyBObyBuZWVkIHRvIHJlc3RvcmUgZm9jdXNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkcmFnZ2FibGVOb2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KHByZXZpb3VzQWN0aXZlSWQpO1xuXG4gICAgICBpZiAoIWRyYWdnYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2YXRvck5vZGUsXG4gICAgICAgIG5vZGVcbiAgICAgIH0gPSBkcmFnZ2FibGVOb2RlO1xuXG4gICAgICBpZiAoIWFjdGl2YXRvck5vZGUuY3VycmVudCAmJiAhbm9kZS5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFthY3RpdmF0b3JOb2RlLmN1cnJlbnQsIG5vZGUuY3VycmVudF0pIHtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZvY3VzYWJsZU5vZGUgPSB1dGlsaXRpZXMuZmluZEZpcnN0Rm9jdXNhYmxlTm9kZShlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChmb2N1c2FibGVOb2RlKSB7XG4gICAgICAgICAgICBmb2N1c2FibGVOb2RlLmZvY3VzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2FjdGl2YXRvckV2ZW50LCBkaXNhYmxlZCwgZHJhZ2dhYmxlTm9kZXMsIHByZXZpb3VzQWN0aXZlSWQsIHByZXZpb3VzQWN0aXZhdG9yRXZlbnRdKTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGFwcGx5TW9kaWZpZXJzKG1vZGlmaWVycywgX3JlZikge1xuICBsZXQge1xuICAgIHRyYW5zZm9ybSxcbiAgICAuLi5hcmdzXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gbW9kaWZpZXJzICE9IG51bGwgJiYgbW9kaWZpZXJzLmxlbmd0aCA/IG1vZGlmaWVycy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBtb2RpZmllcikgPT4ge1xuICAgIHJldHVybiBtb2RpZmllcih7XG4gICAgICB0cmFuc2Zvcm06IGFjY3VtdWxhdG9yLFxuICAgICAgLi4uYXJnc1xuICAgIH0pO1xuICB9LCB0cmFuc2Zvcm0pIDogdHJhbnNmb3JtO1xufVxuXG5mdW5jdGlvbiB1c2VNZWFzdXJpbmdDb25maWd1cmF0aW9uKGNvbmZpZykge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGRyYWdnYWJsZTogeyAuLi5kZWZhdWx0TWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcmFnZ2FibGUsXG4gICAgICAuLi4oY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZHJhZ2dhYmxlKVxuICAgIH0sXG4gICAgZHJvcHBhYmxlOiB7IC4uLmRlZmF1bHRNZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyb3BwYWJsZSxcbiAgICAgIC4uLihjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5kcm9wcGFibGUpXG4gICAgfSxcbiAgICBkcmFnT3ZlcmxheTogeyAuLi5kZWZhdWx0TWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcmFnT3ZlcmxheSxcbiAgICAgIC4uLihjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5kcmFnT3ZlcmxheSlcbiAgICB9XG4gIH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5kcmFnZ2FibGUsIGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmRyb3BwYWJsZSwgY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZHJhZ092ZXJsYXldKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0U2hpZnRTY3JvbGxDb21wZW5zYXRpb24oX3JlZikge1xuICBsZXQge1xuICAgIGFjdGl2ZU5vZGUsXG4gICAgbWVhc3VyZSxcbiAgICBpbml0aWFsUmVjdCxcbiAgICBjb25maWcgPSB0cnVlXG4gIH0gPSBfcmVmO1xuICBjb25zdCBpbml0aWFsaXplZCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICB4LFxuICAgIHlcbiAgfSA9IHR5cGVvZiBjb25maWcgPT09ICdib29sZWFuJyA/IHtcbiAgICB4OiBjb25maWcsXG4gICAgeTogY29uZmlnXG4gIH0gOiBjb25maWc7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9ICF4ICYmICF5O1xuXG4gICAgaWYgKGRpc2FibGVkIHx8ICFhY3RpdmVOb2RlKSB7XG4gICAgICBpbml0aWFsaXplZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluaXRpYWxpemVkLmN1cnJlbnQgfHwgIWluaXRpYWxSZWN0KSB7XG4gICAgICAvLyBSZXR1cm4gZWFybHkgaWYgbGF5b3V0IHNoaWZ0IHNjcm9sbCBjb21wZW5zYXRpb24gd2FzIGFscmVhZHkgYXR0ZW1wdGVkXG4gICAgICAvLyBvciBpZiB0aGVyZSBpcyBubyBpbml0aWFsUmVjdCB0byBjb21wYXJlIHRvLlxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gR2V0IHRoZSBtb3N0IHVwIHRvIGRhdGUgbm9kZSByZWYgZm9yIHRoZSBhY3RpdmUgZHJhZ2dhYmxlXG5cblxuICAgIGNvbnN0IG5vZGUgPSBhY3RpdmVOb2RlID09IG51bGwgPyB2b2lkIDAgOiBhY3RpdmVOb2RlLm5vZGUuY3VycmVudDtcblxuICAgIGlmICghbm9kZSB8fCBub2RlLmlzQ29ubmVjdGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIHRoZXJlIGlzIG5vIGF0dGFjaGVkIG5vZGUgcmVmIG9yIGlmIHRoZSBub2RlIGlzXG4gICAgICAvLyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgZG9jdW1lbnQuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IG1lYXN1cmUobm9kZSk7XG4gICAgY29uc3QgcmVjdERlbHRhID0gZ2V0UmVjdERlbHRhKHJlY3QsIGluaXRpYWxSZWN0KTtcblxuICAgIGlmICgheCkge1xuICAgICAgcmVjdERlbHRhLnggPSAwO1xuICAgIH1cblxuICAgIGlmICgheSkge1xuICAgICAgcmVjdERlbHRhLnkgPSAwO1xuICAgIH0gLy8gT25seSBwZXJmb3JtIGxheW91dCBzaGlmdCBzY3JvbGwgY29tcGVuc2F0aW9uIG9uY2VcblxuXG4gICAgaW5pdGlhbGl6ZWQuY3VycmVudCA9IHRydWU7XG5cbiAgICBpZiAoTWF0aC5hYnMocmVjdERlbHRhLngpID4gMCB8fCBNYXRoLmFicyhyZWN0RGVsdGEueSkgPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFNjcm9sbGFibGVBbmNlc3RvciA9IGdldEZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yKG5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IpIHtcbiAgICAgICAgZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3Iuc2Nyb2xsQnkoe1xuICAgICAgICAgIHRvcDogcmVjdERlbHRhLnksXG4gICAgICAgICAgbGVmdDogcmVjdERlbHRhLnhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYWN0aXZlTm9kZSwgeCwgeSwgaW5pdGlhbFJlY3QsIG1lYXN1cmVdKTtcbn1cblxuY29uc3QgQWN0aXZlRHJhZ2dhYmxlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHsgLi4uZGVmYXVsdENvb3JkaW5hdGVzLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufSk7XG52YXIgU3RhdHVzO1xuXG4oZnVuY3Rpb24gKFN0YXR1cykge1xuICBTdGF0dXNbU3RhdHVzW1wiVW5pbml0aWFsaXplZFwiXSA9IDBdID0gXCJVbmluaXRpYWxpemVkXCI7XG4gIFN0YXR1c1tTdGF0dXNbXCJJbml0aWFsaXppbmdcIl0gPSAxXSA9IFwiSW5pdGlhbGl6aW5nXCI7XG4gIFN0YXR1c1tTdGF0dXNbXCJJbml0aWFsaXplZFwiXSA9IDJdID0gXCJJbml0aWFsaXplZFwiO1xufSkoU3RhdHVzIHx8IChTdGF0dXMgPSB7fSkpO1xuXG5jb25zdCBEbmRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oZnVuY3Rpb24gRG5kQ29udGV4dChfcmVmKSB7XG4gIHZhciBfc2Vuc29yQ29udGV4dCRjdXJyZW4sIF9kcmFnT3ZlcmxheSRub2RlUmVmJCwgX2RyYWdPdmVybGF5JHJlY3QsIF9vdmVyJHJlY3Q7XG5cbiAgbGV0IHtcbiAgICBpZCxcbiAgICBhY2Nlc3NpYmlsaXR5LFxuICAgIGF1dG9TY3JvbGwgPSB0cnVlLFxuICAgIGNoaWxkcmVuLFxuICAgIHNlbnNvcnMgPSBkZWZhdWx0U2Vuc29ycyxcbiAgICBjb2xsaXNpb25EZXRlY3Rpb24gPSByZWN0SW50ZXJzZWN0aW9uLFxuICAgIG1lYXN1cmluZyxcbiAgICBtb2RpZmllcnMsXG4gICAgLi4ucHJvcHNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHN0b3JlID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCB1bmRlZmluZWQsIGdldEluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gc3RvcmU7XG4gIGNvbnN0IFtkaXNwYXRjaE1vbml0b3JFdmVudCwgcmVnaXN0ZXJNb25pdG9yTGlzdGVuZXJdID0gdXNlRG5kTW9uaXRvclByb3ZpZGVyKCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZShTdGF0dXMuVW5pbml0aWFsaXplZCk7XG4gIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSBzdGF0dXMgPT09IFN0YXR1cy5Jbml0aWFsaXplZDtcbiAgY29uc3Qge1xuICAgIGRyYWdnYWJsZToge1xuICAgICAgYWN0aXZlOiBhY3RpdmVJZCxcbiAgICAgIG5vZGVzOiBkcmFnZ2FibGVOb2RlcyxcbiAgICAgIHRyYW5zbGF0ZVxuICAgIH0sXG4gICAgZHJvcHBhYmxlOiB7XG4gICAgICBjb250YWluZXJzOiBkcm9wcGFibGVDb250YWluZXJzXG4gICAgfVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IG5vZGUgPSBhY3RpdmVJZCAhPSBudWxsID8gZHJhZ2dhYmxlTm9kZXMuZ2V0KGFjdGl2ZUlkKSA6IG51bGw7XG4gIGNvbnN0IGFjdGl2ZVJlY3RzID0gUmVhY3QudXNlUmVmKHtcbiAgICBpbml0aWFsOiBudWxsLFxuICAgIHRyYW5zbGF0ZWQ6IG51bGxcbiAgfSk7XG4gIGNvbnN0IGFjdGl2ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHZhciBfbm9kZSRkYXRhO1xuXG4gICAgcmV0dXJuIGFjdGl2ZUlkICE9IG51bGwgPyB7XG4gICAgICBpZDogYWN0aXZlSWQsXG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIGZvciB0aGUgYWN0aXZlIG5vZGUgdG8gdW5tb3VudCB3aGlsZSBkcmFnZ2luZ1xuICAgICAgZGF0YTogKF9ub2RlJGRhdGEgPSBub2RlID09IG51bGwgPyB2b2lkIDAgOiBub2RlLmRhdGEpICE9IG51bGwgPyBfbm9kZSRkYXRhIDogZGVmYXVsdERhdGEsXG4gICAgICByZWN0OiBhY3RpdmVSZWN0c1xuICAgIH0gOiBudWxsO1xuICB9LCBbYWN0aXZlSWQsIG5vZGVdKTtcbiAgY29uc3QgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBbYWN0aXZlU2Vuc29yLCBzZXRBY3RpdmVTZW5zb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmF0b3JFdmVudCwgc2V0QWN0aXZhdG9yRXZlbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGxhdGVzdFByb3BzID0gdXRpbGl0aWVzLnVzZUxhdGVzdFZhbHVlKHByb3BzLCBPYmplY3QudmFsdWVzKHByb3BzKSk7XG4gIGNvbnN0IGRyYWdnYWJsZURlc2NyaWJlZEJ5SWQgPSB1dGlsaXRpZXMudXNlVW5pcXVlSWQoXCJEbmREZXNjcmliZWRCeVwiLCBpZCk7XG4gIGNvbnN0IGVuYWJsZWREcm9wcGFibGVDb250YWluZXJzID0gUmVhY3QudXNlTWVtbygoKSA9PiBkcm9wcGFibGVDb250YWluZXJzLmdldEVuYWJsZWQoKSwgW2Ryb3BwYWJsZUNvbnRhaW5lcnNdKTtcbiAgY29uc3QgbWVhc3VyaW5nQ29uZmlndXJhdGlvbiA9IHVzZU1lYXN1cmluZ0NvbmZpZ3VyYXRpb24obWVhc3VyaW5nKTtcbiAgY29uc3Qge1xuICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzLFxuICAgIG1lYXN1cmluZ1NjaGVkdWxlZFxuICB9ID0gdXNlRHJvcHBhYmxlTWVhc3VyaW5nKGVuYWJsZWREcm9wcGFibGVDb250YWluZXJzLCB7XG4gICAgZHJhZ2dpbmc6IGlzSW5pdGlhbGl6ZWQsXG4gICAgZGVwZW5kZW5jaWVzOiBbdHJhbnNsYXRlLngsIHRyYW5zbGF0ZS55XSxcbiAgICBjb25maWc6IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJvcHBhYmxlXG4gIH0pO1xuICBjb25zdCBhY3RpdmVOb2RlID0gdXNlQ2FjaGVkTm9kZShkcmFnZ2FibGVOb2RlcywgYWN0aXZlSWQpO1xuICBjb25zdCBhY3RpdmF0aW9uQ29vcmRpbmF0ZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IGFjdGl2YXRvckV2ZW50ID8gdXRpbGl0aWVzLmdldEV2ZW50Q29vcmRpbmF0ZXMoYWN0aXZhdG9yRXZlbnQpIDogbnVsbCwgW2FjdGl2YXRvckV2ZW50XSk7XG4gIGNvbnN0IGF1dG9TY3JvbGxPcHRpb25zID0gZ2V0QXV0b1Njcm9sbGVyT3B0aW9ucygpO1xuICBjb25zdCBpbml0aWFsQWN0aXZlTm9kZVJlY3QgPSB1c2VJbml0aWFsUmVjdChhY3RpdmVOb2RlLCBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdnYWJsZS5tZWFzdXJlKTtcbiAgdXNlTGF5b3V0U2hpZnRTY3JvbGxDb21wZW5zYXRpb24oe1xuICAgIGFjdGl2ZU5vZGU6IGFjdGl2ZUlkICE9IG51bGwgPyBkcmFnZ2FibGVOb2Rlcy5nZXQoYWN0aXZlSWQpIDogbnVsbCxcbiAgICBjb25maWc6IGF1dG9TY3JvbGxPcHRpb25zLmxheW91dFNoaWZ0Q29tcGVuc2F0aW9uLFxuICAgIGluaXRpYWxSZWN0OiBpbml0aWFsQWN0aXZlTm9kZVJlY3QsXG4gICAgbWVhc3VyZTogbWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcmFnZ2FibGUubWVhc3VyZVxuICB9KTtcbiAgY29uc3QgYWN0aXZlTm9kZVJlY3QgPSB1c2VSZWN0KGFjdGl2ZU5vZGUsIG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ2dhYmxlLm1lYXN1cmUsIGluaXRpYWxBY3RpdmVOb2RlUmVjdCk7XG4gIGNvbnN0IGNvbnRhaW5lck5vZGVSZWN0ID0gdXNlUmVjdChhY3RpdmVOb2RlID8gYWN0aXZlTm9kZS5wYXJlbnRFbGVtZW50IDogbnVsbCk7XG4gIGNvbnN0IHNlbnNvckNvbnRleHQgPSBSZWFjdC51c2VSZWYoe1xuICAgIGFjdGl2YXRvckV2ZW50OiBudWxsLFxuICAgIGFjdGl2ZTogbnVsbCxcbiAgICBhY3RpdmVOb2RlLFxuICAgIGNvbGxpc2lvblJlY3Q6IG51bGwsXG4gICAgY29sbGlzaW9uczogbnVsbCxcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBkcmFnZ2FibGVOb2RlcyxcbiAgICBkcmFnZ2luZ05vZGU6IG51bGwsXG4gICAgZHJhZ2dpbmdOb2RlUmVjdDogbnVsbCxcbiAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgIG92ZXI6IG51bGwsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yczogW10sXG4gICAgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGU6IG51bGxcbiAgfSk7XG4gIGNvbnN0IG92ZXJOb2RlID0gZHJvcHBhYmxlQ29udGFpbmVycy5nZXROb2RlRm9yKChfc2Vuc29yQ29udGV4dCRjdXJyZW4gPSBzZW5zb3JDb250ZXh0LmN1cnJlbnQub3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9zZW5zb3JDb250ZXh0JGN1cnJlbi5pZCk7XG4gIGNvbnN0IGRyYWdPdmVybGF5ID0gdXNlRHJhZ092ZXJsYXlNZWFzdXJpbmcoe1xuICAgIG1lYXN1cmU6IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ092ZXJsYXkubWVhc3VyZVxuICB9KTsgLy8gVXNlIHRoZSByZWN0IG9mIHRoZSBkcmFnIG92ZXJsYXkgaWYgaXQgaXMgbW91bnRlZFxuXG4gIGNvbnN0IGRyYWdnaW5nTm9kZSA9IChfZHJhZ092ZXJsYXkkbm9kZVJlZiQgPSBkcmFnT3ZlcmxheS5ub2RlUmVmLmN1cnJlbnQpICE9IG51bGwgPyBfZHJhZ092ZXJsYXkkbm9kZVJlZiQgOiBhY3RpdmVOb2RlO1xuICBjb25zdCBkcmFnZ2luZ05vZGVSZWN0ID0gaXNJbml0aWFsaXplZCA/IChfZHJhZ092ZXJsYXkkcmVjdCA9IGRyYWdPdmVybGF5LnJlY3QpICE9IG51bGwgPyBfZHJhZ092ZXJsYXkkcmVjdCA6IGFjdGl2ZU5vZGVSZWN0IDogbnVsbDtcbiAgY29uc3QgdXNlc0RyYWdPdmVybGF5ID0gQm9vbGVhbihkcmFnT3ZlcmxheS5ub2RlUmVmLmN1cnJlbnQgJiYgZHJhZ092ZXJsYXkucmVjdCk7IC8vIFRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBwcmV2aW91cyBhbmQgbmV3IHBvc2l0aW9uIG9mIHRoZSBkcmFnZ2FibGUgbm9kZVxuICAvLyBpcyBvbmx5IHJlbGV2YW50IHdoZW4gdGhlcmUgaXMgbm8gZHJhZyBvdmVybGF5XG5cbiAgY29uc3Qgbm9kZVJlY3REZWx0YSA9IHVzZVJlY3REZWx0YSh1c2VzRHJhZ092ZXJsYXkgPyBudWxsIDogYWN0aXZlTm9kZVJlY3QpOyAvLyBHZXQgdGhlIHdpbmRvdyByZWN0IG9mIHRoZSBkcmFnZ2luZyBub2RlXG5cbiAgY29uc3Qgd2luZG93UmVjdCA9IHVzZVdpbmRvd1JlY3QoZHJhZ2dpbmdOb2RlID8gdXRpbGl0aWVzLmdldFdpbmRvdyhkcmFnZ2luZ05vZGUpIDogbnVsbCk7IC8vIEdldCBzY3JvbGxhYmxlIGFuY2VzdG9ycyBvZiB0aGUgZHJhZ2dpbmcgbm9kZVxuXG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvcnMgPSB1c2VTY3JvbGxhYmxlQW5jZXN0b3JzKGlzSW5pdGlhbGl6ZWQgPyBvdmVyTm9kZSAhPSBudWxsID8gb3Zlck5vZGUgOiBhY3RpdmVOb2RlIDogbnVsbCk7XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvclJlY3RzID0gdXNlUmVjdHMoc2Nyb2xsYWJsZUFuY2VzdG9ycyk7IC8vIEFwcGx5IG1vZGlmaWVyc1xuXG4gIGNvbnN0IG1vZGlmaWVkVHJhbnNsYXRlID0gYXBwbHlNb2RpZmllcnMobW9kaWZpZXJzLCB7XG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICB4OiB0cmFuc2xhdGUueCAtIG5vZGVSZWN0RGVsdGEueCxcbiAgICAgIHk6IHRyYW5zbGF0ZS55IC0gbm9kZVJlY3REZWx0YS55LFxuICAgICAgc2NhbGVYOiAxLFxuICAgICAgc2NhbGVZOiAxXG4gICAgfSxcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgY29udGFpbmVyTm9kZVJlY3QsXG4gICAgZHJhZ2dpbmdOb2RlUmVjdCxcbiAgICBvdmVyOiBzZW5zb3JDb250ZXh0LmN1cnJlbnQub3ZlcixcbiAgICBvdmVybGF5Tm9kZVJlY3Q6IGRyYWdPdmVybGF5LnJlY3QsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9ycyxcbiAgICBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0cyxcbiAgICB3aW5kb3dSZWN0XG4gIH0pO1xuICBjb25zdCBwb2ludGVyQ29vcmRpbmF0ZXMgPSBhY3RpdmF0aW9uQ29vcmRpbmF0ZXMgPyB1dGlsaXRpZXMuYWRkKGFjdGl2YXRpb25Db29yZGluYXRlcywgdHJhbnNsYXRlKSA6IG51bGw7XG4gIGNvbnN0IHNjcm9sbE9mZnNldHMgPSB1c2VTY3JvbGxPZmZzZXRzKHNjcm9sbGFibGVBbmNlc3RvcnMpOyAvLyBSZXByZXNlbnRzIHRoZSBzY3JvbGwgZGVsdGEgc2luY2UgZHJhZ2dpbmcgd2FzIGluaXRpYXRlZFxuXG4gIGNvbnN0IHNjcm9sbEFkanVzdG1lbnQgPSB1c2VTY3JvbGxPZmZzZXRzRGVsdGEoc2Nyb2xsT2Zmc2V0cyk7IC8vIFJlcHJlc2VudHMgdGhlIHNjcm9sbCBkZWx0YSBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBhY3RpdmUgbm9kZSByZWN0IHdhcyBtZWFzdXJlZFxuXG4gIGNvbnN0IGFjdGl2ZU5vZGVTY3JvbGxEZWx0YSA9IHVzZVNjcm9sbE9mZnNldHNEZWx0YShzY3JvbGxPZmZzZXRzLCBbYWN0aXZlTm9kZVJlY3RdKTtcbiAgY29uc3Qgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGUgPSB1dGlsaXRpZXMuYWRkKG1vZGlmaWVkVHJhbnNsYXRlLCBzY3JvbGxBZGp1c3RtZW50KTtcbiAgY29uc3QgY29sbGlzaW9uUmVjdCA9IGRyYWdnaW5nTm9kZVJlY3QgPyBnZXRBZGp1c3RlZFJlY3QoZHJhZ2dpbmdOb2RlUmVjdCwgbW9kaWZpZWRUcmFuc2xhdGUpIDogbnVsbDtcbiAgY29uc3QgY29sbGlzaW9ucyA9IGFjdGl2ZSAmJiBjb2xsaXNpb25SZWN0ID8gY29sbGlzaW9uRGV0ZWN0aW9uKHtcbiAgICBhY3RpdmUsXG4gICAgY29sbGlzaW9uUmVjdCxcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBkcm9wcGFibGVDb250YWluZXJzOiBlbmFibGVkRHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBwb2ludGVyQ29vcmRpbmF0ZXNcbiAgfSkgOiBudWxsO1xuICBjb25zdCBvdmVySWQgPSBnZXRGaXJzdENvbGxpc2lvbihjb2xsaXNpb25zLCAnaWQnKTtcbiAgY29uc3QgW292ZXIsIHNldE92ZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7IC8vIFdoZW4gdGhlcmUgaXMgbm8gZHJhZyBvdmVybGF5IHVzZWQsIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlXG4gIC8vIHdpbmRvdyBzY3JvbGwgZGVsdGFcblxuICBjb25zdCBhcHBsaWVkVHJhbnNsYXRlID0gdXNlc0RyYWdPdmVybGF5ID8gbW9kaWZpZWRUcmFuc2xhdGUgOiB1dGlsaXRpZXMuYWRkKG1vZGlmaWVkVHJhbnNsYXRlLCBhY3RpdmVOb2RlU2Nyb2xsRGVsdGEpO1xuICBjb25zdCB0cmFuc2Zvcm0gPSBhZGp1c3RTY2FsZShhcHBsaWVkVHJhbnNsYXRlLCAoX292ZXIkcmVjdCA9IG92ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG92ZXIucmVjdCkgIT0gbnVsbCA/IF9vdmVyJHJlY3QgOiBudWxsLCBhY3RpdmVOb2RlUmVjdCk7XG4gIGNvbnN0IGFjdGl2ZVNlbnNvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgaW5zdGFudGlhdGVTZW5zb3IgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQsIF9yZWYyKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHNlbnNvcjogU2Vuc29yLFxuICAgICAgb3B0aW9uc1xuICAgIH0gPSBfcmVmMjtcblxuICAgIGlmIChhY3RpdmVSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZSA9IGRyYWdnYWJsZU5vZGVzLmdldChhY3RpdmVSZWYuY3VycmVudCk7XG5cbiAgICBpZiAoIWFjdGl2ZU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0b3JFdmVudCA9IGV2ZW50Lm5hdGl2ZUV2ZW50O1xuICAgIGNvbnN0IHNlbnNvckluc3RhbmNlID0gbmV3IFNlbnNvcih7XG4gICAgICBhY3RpdmU6IGFjdGl2ZVJlZi5jdXJyZW50LFxuICAgICAgYWN0aXZlTm9kZSxcbiAgICAgIGV2ZW50OiBhY3RpdmF0b3JFdmVudCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICAvLyBTZW5zb3JzIG5lZWQgdG8gYmUgaW5zdGFudGlhdGVkIHdpdGggcmVmcyBmb3IgYXJndW1lbnRzIHRoYXQgY2hhbmdlIG92ZXIgdGltZVxuICAgICAgLy8gb3RoZXJ3aXNlIHRoZXkgYXJlIGZyb3plbiBpbiB0aW1lIHdpdGggdGhlIHN0YWxlIGFyZ3VtZW50c1xuICAgICAgY29udGV4dDogc2Vuc29yQ29udGV4dCxcblxuICAgICAgb25BYm9ydChpZCkge1xuICAgICAgICBjb25zdCBkcmFnZ2FibGVOb2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKTtcblxuICAgICAgICBpZiAoIWRyYWdnYWJsZU5vZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgb25EcmFnQWJvcnRcbiAgICAgICAgfSA9IGxhdGVzdFByb3BzLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgIGlkXG4gICAgICAgIH07XG4gICAgICAgIG9uRHJhZ0Fib3J0ID09IG51bGwgPyB2b2lkIDAgOiBvbkRyYWdBYm9ydChldmVudCk7XG4gICAgICAgIGRpc3BhdGNoTW9uaXRvckV2ZW50KHtcbiAgICAgICAgICB0eXBlOiAnb25EcmFnQWJvcnQnLFxuICAgICAgICAgIGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgb25QZW5kaW5nKGlkLCBjb25zdHJhaW50LCBpbml0aWFsQ29vcmRpbmF0ZXMsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBkcmFnZ2FibGVOb2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKTtcblxuICAgICAgICBpZiAoIWRyYWdnYWJsZU5vZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgb25EcmFnUGVuZGluZ1xuICAgICAgICB9ID0gbGF0ZXN0UHJvcHMuY3VycmVudDtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgY29uc3RyYWludCxcbiAgICAgICAgICBpbml0aWFsQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgb2Zmc2V0XG4gICAgICAgIH07XG4gICAgICAgIG9uRHJhZ1BlbmRpbmcgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRHJhZ1BlbmRpbmcoZXZlbnQpO1xuICAgICAgICBkaXNwYXRjaE1vbml0b3JFdmVudCh7XG4gICAgICAgICAgdHlwZTogJ29uRHJhZ1BlbmRpbmcnLFxuICAgICAgICAgIGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgb25TdGFydChpbml0aWFsQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgaWQgPSBhY3RpdmVSZWYuY3VycmVudDtcblxuICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5vZGUgPSBkcmFnZ2FibGVOb2Rlcy5nZXQoaWQpO1xuXG4gICAgICAgIGlmICghZHJhZ2dhYmxlTm9kZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBvbkRyYWdTdGFydFxuICAgICAgICB9ID0gbGF0ZXN0UHJvcHMuY3VycmVudDtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGRhdGE6IGRyYWdnYWJsZU5vZGUuZGF0YSxcbiAgICAgICAgICAgIHJlY3Q6IGFjdGl2ZVJlY3RzXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFjdERvbS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICAgICAgb25EcmFnU3RhcnQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgICBzZXRTdGF0dXMoU3RhdHVzLkluaXRpYWxpemluZyk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQWN0aW9uLkRyYWdTdGFydCxcbiAgICAgICAgICAgIGluaXRpYWxDb29yZGluYXRlcyxcbiAgICAgICAgICAgIGFjdGl2ZTogaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkaXNwYXRjaE1vbml0b3JFdmVudCh7XG4gICAgICAgICAgICB0eXBlOiAnb25EcmFnU3RhcnQnLFxuICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRBY3RpdmVTZW5zb3IoYWN0aXZlU2Vuc29yUmVmLmN1cnJlbnQpO1xuICAgICAgICAgIHNldEFjdGl2YXRvckV2ZW50KGFjdGl2YXRvckV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBvbk1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEFjdGlvbi5EcmFnTW92ZSxcbiAgICAgICAgICBjb29yZGluYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIG9uRW5kOiBjcmVhdGVIYW5kbGVyKEFjdGlvbi5EcmFnRW5kKSxcbiAgICAgIG9uQ2FuY2VsOiBjcmVhdGVIYW5kbGVyKEFjdGlvbi5EcmFnQ2FuY2VsKVxuICAgIH0pO1xuICAgIGFjdGl2ZVNlbnNvclJlZi5jdXJyZW50ID0gc2Vuc29ySW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIYW5kbGVyKHR5cGUpIHtcbiAgICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGNvbGxpc2lvbnMsXG4gICAgICAgICAgb3ZlcixcbiAgICAgICAgICBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZVxuICAgICAgICB9ID0gc2Vuc29yQ29udGV4dC5jdXJyZW50O1xuICAgICAgICBsZXQgZXZlbnQgPSBudWxsO1xuXG4gICAgICAgIGlmIChhY3RpdmUgJiYgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGUpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjYW5jZWxEcm9wXG4gICAgICAgICAgfSA9IGxhdGVzdFByb3BzLmN1cnJlbnQ7XG4gICAgICAgICAgZXZlbnQgPSB7XG4gICAgICAgICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICAgICAgY29sbGlzaW9ucyxcbiAgICAgICAgICAgIGRlbHRhOiBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIG92ZXJcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IEFjdGlvbi5EcmFnRW5kICYmIHR5cGVvZiBjYW5jZWxEcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDYW5jZWwgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2FuY2VsRHJvcChldmVudCkpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIHR5cGUgPSBBY3Rpb24uRHJhZ0NhbmNlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3RpdmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJlYWN0RG9tLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5VbmluaXRpYWxpemVkKTtcbiAgICAgICAgICBzZXRPdmVyKG51bGwpO1xuICAgICAgICAgIHNldEFjdGl2ZVNlbnNvcihudWxsKTtcbiAgICAgICAgICBzZXRBY3RpdmF0b3JFdmVudChudWxsKTtcbiAgICAgICAgICBhY3RpdmVTZW5zb3JSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gdHlwZSA9PT0gQWN0aW9uLkRyYWdFbmQgPyAnb25EcmFnRW5kJyA6ICdvbkRyYWdDYW5jZWwnO1xuXG4gICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gbGF0ZXN0UHJvcHMuY3VycmVudFtldmVudE5hbWVdO1xuICAgICAgICAgICAgaGFuZGxlciA9PSBudWxsID8gdm9pZCAwIDogaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICBkaXNwYXRjaE1vbml0b3JFdmVudCh7XG4gICAgICAgICAgICAgIHR5cGU6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbZHJhZ2dhYmxlTm9kZXNdKTtcbiAgY29uc3QgYmluZEFjdGl2YXRvclRvU2Vuc29ySW5zdGFudGlhdG9yID0gUmVhY3QudXNlQ2FsbGJhY2soKGhhbmRsZXIsIHNlbnNvcikgPT4ge1xuICAgIHJldHVybiAoZXZlbnQsIGFjdGl2ZSkgPT4ge1xuICAgICAgY29uc3QgbmF0aXZlRXZlbnQgPSBldmVudC5uYXRpdmVFdmVudDtcbiAgICAgIGNvbnN0IGFjdGl2ZURyYWdnYWJsZU5vZGUgPSBkcmFnZ2FibGVOb2Rlcy5nZXQoYWN0aXZlKTtcblxuICAgICAgaWYgKCAvLyBBbm90aGVyIHNlbnNvciBpcyBhbHJlYWR5IGluc3RhbnRpYXRpbmdcbiAgICAgIGFjdGl2ZVJlZi5jdXJyZW50ICE9PSBudWxsIHx8IC8vIE5vIGFjdGl2ZSBkcmFnZ2FibGVcbiAgICAgICFhY3RpdmVEcmFnZ2FibGVOb2RlIHx8IC8vIEV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gY2FwdHVyZWRcbiAgICAgIG5hdGl2ZUV2ZW50LmRuZEtpdCB8fCBuYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aXZhdGlvbkNvbnRleHQgPSB7XG4gICAgICAgIGFjdGl2ZTogYWN0aXZlRHJhZ2dhYmxlTm9kZVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNob3VsZEFjdGl2YXRlID0gaGFuZGxlcihldmVudCwgc2Vuc29yLm9wdGlvbnMsIGFjdGl2YXRpb25Db250ZXh0KTtcblxuICAgICAgaWYgKHNob3VsZEFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgIG5hdGl2ZUV2ZW50LmRuZEtpdCA9IHtcbiAgICAgICAgICBjYXB0dXJlZEJ5OiBzZW5zb3Iuc2Vuc29yXG4gICAgICAgIH07XG4gICAgICAgIGFjdGl2ZVJlZi5jdXJyZW50ID0gYWN0aXZlO1xuICAgICAgICBpbnN0YW50aWF0ZVNlbnNvcihldmVudCwgc2Vuc29yKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZHJhZ2dhYmxlTm9kZXMsIGluc3RhbnRpYXRlU2Vuc29yXSk7XG4gIGNvbnN0IGFjdGl2YXRvcnMgPSB1c2VDb21iaW5lQWN0aXZhdG9ycyhzZW5zb3JzLCBiaW5kQWN0aXZhdG9yVG9TZW5zb3JJbnN0YW50aWF0b3IpO1xuICB1c2VTZW5zb3JTZXR1cChzZW5zb3JzKTtcbiAgdXRpbGl0aWVzLnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVOb2RlUmVjdCAmJiBzdGF0dXMgPT09IFN0YXR1cy5Jbml0aWFsaXppbmcpIHtcbiAgICAgIHNldFN0YXR1cyhTdGF0dXMuSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZU5vZGVSZWN0LCBzdGF0dXNdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkRyYWdNb3ZlXG4gICAgfSA9IGxhdGVzdFByb3BzLmN1cnJlbnQ7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBjb2xsaXNpb25zLFxuICAgICAgb3ZlclxuICAgIH0gPSBzZW5zb3JDb250ZXh0LmN1cnJlbnQ7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhYWN0aXZhdG9yRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGFjdGl2YXRvckV2ZW50LFxuICAgICAgY29sbGlzaW9ucyxcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHg6IHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlLngsXG4gICAgICAgIHk6IHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlLnlcbiAgICAgIH0sXG4gICAgICBvdmVyXG4gICAgfTtcbiAgICByZWFjdERvbS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBvbkRyYWdNb3ZlID09IG51bGwgPyB2b2lkIDAgOiBvbkRyYWdNb3ZlKGV2ZW50KTtcbiAgICAgIGRpc3BhdGNoTW9uaXRvckV2ZW50KHtcbiAgICAgICAgdHlwZTogJ29uRHJhZ01vdmUnLFxuICAgICAgICBldmVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW3Njcm9sbEFkanVzdGVkVHJhbnNsYXRlLngsIHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlLnldKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGNvbGxpc2lvbnMsXG4gICAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgICAgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGVcbiAgICB9ID0gc2Vuc29yQ29udGV4dC5jdXJyZW50O1xuXG4gICAgaWYgKCFhY3RpdmUgfHwgYWN0aXZlUmVmLmN1cnJlbnQgPT0gbnVsbCB8fCAhYWN0aXZhdG9yRXZlbnQgfHwgIXNjcm9sbEFkanVzdGVkVHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgb25EcmFnT3ZlclxuICAgIH0gPSBsYXRlc3RQcm9wcy5jdXJyZW50O1xuICAgIGNvbnN0IG92ZXJDb250YWluZXIgPSBkcm9wcGFibGVDb250YWluZXJzLmdldChvdmVySWQpO1xuICAgIGNvbnN0IG92ZXIgPSBvdmVyQ29udGFpbmVyICYmIG92ZXJDb250YWluZXIucmVjdC5jdXJyZW50ID8ge1xuICAgICAgaWQ6IG92ZXJDb250YWluZXIuaWQsXG4gICAgICByZWN0OiBvdmVyQ29udGFpbmVyLnJlY3QuY3VycmVudCxcbiAgICAgIGRhdGE6IG92ZXJDb250YWluZXIuZGF0YSxcbiAgICAgIGRpc2FibGVkOiBvdmVyQ29udGFpbmVyLmRpc2FibGVkXG4gICAgfSA6IG51bGw7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGNvbGxpc2lvbnMsXG4gICAgICBkZWx0YToge1xuICAgICAgICB4OiBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS54LFxuICAgICAgICB5OiBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS55XG4gICAgICB9LFxuICAgICAgb3ZlclxuICAgIH07XG4gICAgcmVhY3REb20udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgc2V0T3ZlcihvdmVyKTtcbiAgICAgIG9uRHJhZ092ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRHJhZ092ZXIoZXZlbnQpO1xuICAgICAgZGlzcGF0Y2hNb25pdG9yRXZlbnQoe1xuICAgICAgICB0eXBlOiAnb25EcmFnT3ZlcicsXG4gICAgICAgIGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbb3ZlcklkXSk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBzZW5zb3JDb250ZXh0LmN1cnJlbnQgPSB7XG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGFjdGl2ZU5vZGUsXG4gICAgICBjb2xsaXNpb25SZWN0LFxuICAgICAgY29sbGlzaW9ucyxcbiAgICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgICBkcmFnZ2luZ05vZGUsXG4gICAgICBkcmFnZ2luZ05vZGVSZWN0LFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICAgIG92ZXIsXG4gICAgICBzY3JvbGxhYmxlQW5jZXN0b3JzLFxuICAgICAgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGVcbiAgICB9O1xuICAgIGFjdGl2ZVJlY3RzLmN1cnJlbnQgPSB7XG4gICAgICBpbml0aWFsOiBkcmFnZ2luZ05vZGVSZWN0LFxuICAgICAgdHJhbnNsYXRlZDogY29sbGlzaW9uUmVjdFxuICAgIH07XG4gIH0sIFthY3RpdmUsIGFjdGl2ZU5vZGUsIGNvbGxpc2lvbnMsIGNvbGxpc2lvblJlY3QsIGRyYWdnYWJsZU5vZGVzLCBkcmFnZ2luZ05vZGUsIGRyYWdnaW5nTm9kZVJlY3QsIGRyb3BwYWJsZVJlY3RzLCBkcm9wcGFibGVDb250YWluZXJzLCBvdmVyLCBzY3JvbGxhYmxlQW5jZXN0b3JzLCBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZV0pO1xuICB1c2VBdXRvU2Nyb2xsZXIoeyAuLi5hdXRvU2Nyb2xsT3B0aW9ucyxcbiAgICBkZWx0YTogdHJhbnNsYXRlLFxuICAgIGRyYWdnaW5nUmVjdDogY29sbGlzaW9uUmVjdCxcbiAgICBwb2ludGVyQ29vcmRpbmF0ZXMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9ycyxcbiAgICBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0c1xuICB9KTtcbiAgY29uc3QgcHVibGljQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmVOb2RlLFxuICAgICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGNvbGxpc2lvbnMsXG4gICAgICBjb250YWluZXJOb2RlUmVjdCxcbiAgICAgIGRyYWdPdmVybGF5LFxuICAgICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgICBvdmVyLFxuICAgICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgICBzY3JvbGxhYmxlQW5jZXN0b3JzLFxuICAgICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsXG4gICAgICBtZWFzdXJpbmdDb25maWd1cmF0aW9uLFxuICAgICAgbWVhc3VyaW5nU2NoZWR1bGVkLFxuICAgICAgd2luZG93UmVjdFxuICAgIH07XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0sIFthY3RpdmUsIGFjdGl2ZU5vZGUsIGFjdGl2ZU5vZGVSZWN0LCBhY3RpdmF0b3JFdmVudCwgY29sbGlzaW9ucywgY29udGFpbmVyTm9kZVJlY3QsIGRyYWdPdmVybGF5LCBkcmFnZ2FibGVOb2RlcywgZHJvcHBhYmxlQ29udGFpbmVycywgZHJvcHBhYmxlUmVjdHMsIG92ZXIsIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzLCBzY3JvbGxhYmxlQW5jZXN0b3JzLCBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0cywgbWVhc3VyaW5nQ29uZmlndXJhdGlvbiwgbWVhc3VyaW5nU2NoZWR1bGVkLCB3aW5kb3dSZWN0XSk7XG4gIGNvbnN0IGludGVybmFsQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGFjdGl2YXRvcnMsXG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmVOb2RlUmVjdCxcbiAgICAgIGFyaWFEZXNjcmliZWRCeUlkOiB7XG4gICAgICAgIGRyYWdnYWJsZTogZHJhZ2dhYmxlRGVzY3JpYmVkQnlJZFxuICAgICAgfSxcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgICBvdmVyLFxuICAgICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnNcbiAgICB9O1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9LCBbYWN0aXZhdG9yRXZlbnQsIGFjdGl2YXRvcnMsIGFjdGl2ZSwgYWN0aXZlTm9kZVJlY3QsIGRpc3BhdGNoLCBkcmFnZ2FibGVEZXNjcmliZWRCeUlkLCBkcmFnZ2FibGVOb2Rlcywgb3ZlciwgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnNdKTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG5kTW9uaXRvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcmVnaXN0ZXJNb25pdG9yTGlzdGVuZXJcbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChJbnRlcm5hbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaW50ZXJuYWxDb250ZXh0XG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHVibGljQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBwdWJsaWNDb250ZXh0XG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQWN0aXZlRHJhZ2dhYmxlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0cmFuc2Zvcm1cbiAgfSwgY2hpbGRyZW4pKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZXN0b3JlRm9jdXMsIHtcbiAgICBkaXNhYmxlZDogKGFjY2Vzc2liaWxpdHkgPT0gbnVsbCA/IHZvaWQgMCA6IGFjY2Vzc2liaWxpdHkucmVzdG9yZUZvY3VzKSA9PT0gZmFsc2VcbiAgfSkpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFjY2Vzc2liaWxpdHksIHsgLi4uYWNjZXNzaWJpbGl0eSxcbiAgICBoaWRkZW5UZXh0RGVzY3JpYmVkQnlJZDogZHJhZ2dhYmxlRGVzY3JpYmVkQnlJZFxuICB9KSk7XG5cbiAgZnVuY3Rpb24gZ2V0QXV0b1Njcm9sbGVyT3B0aW9ucygpIHtcbiAgICBjb25zdCBhY3RpdmVTZW5zb3JEaXNhYmxlc0F1dG9zY3JvbGwgPSAoYWN0aXZlU2Vuc29yID09IG51bGwgPyB2b2lkIDAgOiBhY3RpdmVTZW5zb3IuYXV0b1Njcm9sbEVuYWJsZWQpID09PSBmYWxzZTtcbiAgICBjb25zdCBhdXRvU2Nyb2xsR2xvYmFsbHlEaXNhYmxlZCA9IHR5cGVvZiBhdXRvU2Nyb2xsID09PSAnb2JqZWN0JyA/IGF1dG9TY3JvbGwuZW5hYmxlZCA9PT0gZmFsc2UgOiBhdXRvU2Nyb2xsID09PSBmYWxzZTtcbiAgICBjb25zdCBlbmFibGVkID0gaXNJbml0aWFsaXplZCAmJiAhYWN0aXZlU2Vuc29yRGlzYWJsZXNBdXRvc2Nyb2xsICYmICFhdXRvU2Nyb2xsR2xvYmFsbHlEaXNhYmxlZDtcblxuICAgIGlmICh0eXBlb2YgYXV0b1Njcm9sbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB7IC4uLmF1dG9TY3JvbGwsXG4gICAgICAgIGVuYWJsZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVuYWJsZWRcbiAgICB9O1xuICB9XG59KTtcblxuY29uc3QgTnVsbENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmNvbnN0IGRlZmF1bHRSb2xlID0gJ2J1dHRvbic7XG5jb25zdCBJRF9QUkVGSVggPSAnRHJhZ2dhYmxlJztcbmZ1bmN0aW9uIHVzZURyYWdnYWJsZShfcmVmKSB7XG4gIGxldCB7XG4gICAgaWQsXG4gICAgZGF0YSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGF0dHJpYnV0ZXNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGtleSA9IHV0aWxpdGllcy51c2VVbmlxdWVJZChJRF9QUkVGSVgpO1xuICBjb25zdCB7XG4gICAgYWN0aXZhdG9ycyxcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgYXJpYURlc2NyaWJlZEJ5SWQsXG4gICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgb3ZlclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChJbnRlcm5hbENvbnRleHQpO1xuICBjb25zdCB7XG4gICAgcm9sZSA9IGRlZmF1bHRSb2xlLFxuICAgIHJvbGVEZXNjcmlwdGlvbiA9ICdkcmFnZ2FibGUnLFxuICAgIHRhYkluZGV4ID0gMFxuICB9ID0gYXR0cmlidXRlcyAhPSBudWxsID8gYXR0cmlidXRlcyA6IHt9O1xuICBjb25zdCBpc0RyYWdnaW5nID0gKGFjdGl2ZSA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlLmlkKSA9PT0gaWQ7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IFJlYWN0LnVzZUNvbnRleHQoaXNEcmFnZ2luZyA/IEFjdGl2ZURyYWdnYWJsZUNvbnRleHQgOiBOdWxsQ29udGV4dCk7XG4gIGNvbnN0IFtub2RlLCBzZXROb2RlUmVmXSA9IHV0aWxpdGllcy51c2VOb2RlUmVmKCk7XG4gIGNvbnN0IFthY3RpdmF0b3JOb2RlLCBzZXRBY3RpdmF0b3JOb2RlUmVmXSA9IHV0aWxpdGllcy51c2VOb2RlUmVmKCk7XG4gIGNvbnN0IGxpc3RlbmVycyA9IHVzZVN5bnRoZXRpY0xpc3RlbmVycyhhY3RpdmF0b3JzLCBpZCk7XG4gIGNvbnN0IGRhdGFSZWYgPSB1dGlsaXRpZXMudXNlTGF0ZXN0VmFsdWUoZGF0YSk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBkcmFnZ2FibGVOb2Rlcy5zZXQoaWQsIHtcbiAgICAgIGlkLFxuICAgICAga2V5LFxuICAgICAgbm9kZSxcbiAgICAgIGFjdGl2YXRvck5vZGUsXG4gICAgICBkYXRhOiBkYXRhUmVmXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkcmFnZ2FibGVOb2Rlcy5nZXQoaWQpO1xuXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGRyYWdnYWJsZU5vZGVzLmRlbGV0ZShpZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbZHJhZ2dhYmxlTm9kZXMsIGlkXSk7XG4gIGNvbnN0IG1lbW9pemVkQXR0cmlidXRlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb2xlLFxuICAgIHRhYkluZGV4LFxuICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2FyaWEtcHJlc3NlZCc6IGlzRHJhZ2dpbmcgJiYgcm9sZSA9PT0gZGVmYXVsdFJvbGUgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICdhcmlhLXJvbGVkZXNjcmlwdGlvbic6IHJvbGVEZXNjcmlwdGlvbixcbiAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFEZXNjcmliZWRCeUlkLmRyYWdnYWJsZVxuICB9KSwgW2Rpc2FibGVkLCByb2xlLCB0YWJJbmRleCwgaXNEcmFnZ2luZywgcm9sZURlc2NyaXB0aW9uLCBhcmlhRGVzY3JpYmVkQnlJZC5kcmFnZ2FibGVdKTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgYXR0cmlidXRlczogbWVtb2l6ZWRBdHRyaWJ1dGVzLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgbGlzdGVuZXJzOiBkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGxpc3RlbmVycyxcbiAgICBub2RlLFxuICAgIG92ZXIsXG4gICAgc2V0Tm9kZVJlZixcbiAgICBzZXRBY3RpdmF0b3JOb2RlUmVmLFxuICAgIHRyYW5zZm9ybVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VEbmRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChQdWJsaWNDb250ZXh0KTtcbn1cblxuY29uc3QgSURfUFJFRklYJDEgPSAnRHJvcHBhYmxlJztcbmNvbnN0IGRlZmF1bHRSZXNpemVPYnNlcnZlckNvbmZpZyA9IHtcbiAgdGltZW91dDogMjVcbn07XG5mdW5jdGlvbiB1c2VEcm9wcGFibGUoX3JlZikge1xuICBsZXQge1xuICAgIGRhdGEsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBpZCxcbiAgICByZXNpemVPYnNlcnZlckNvbmZpZ1xuICB9ID0gX3JlZjtcbiAgY29uc3Qga2V5ID0gdXRpbGl0aWVzLnVzZVVuaXF1ZUlkKElEX1BSRUZJWCQxKTtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBkaXNwYXRjaCxcbiAgICBvdmVyLFxuICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KEludGVybmFsQ29udGV4dCk7XG4gIGNvbnN0IHByZXZpb3VzID0gUmVhY3QudXNlUmVmKHtcbiAgICBkaXNhYmxlZFxuICB9KTtcbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXJDb25uZWN0ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBjb25zdCByZWN0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBjYWxsYmFja0lkID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCB7XG4gICAgZGlzYWJsZWQ6IHJlc2l6ZU9ic2VydmVyRGlzYWJsZWQsXG4gICAgdXBkYXRlTWVhc3VyZW1lbnRzRm9yLFxuICAgIHRpbWVvdXQ6IHJlc2l6ZU9ic2VydmVyVGltZW91dFxuICB9ID0geyAuLi5kZWZhdWx0UmVzaXplT2JzZXJ2ZXJDb25maWcsXG4gICAgLi4ucmVzaXplT2JzZXJ2ZXJDb25maWdcbiAgfTtcbiAgY29uc3QgaWRzID0gdXRpbGl0aWVzLnVzZUxhdGVzdFZhbHVlKHVwZGF0ZU1lYXN1cmVtZW50c0ZvciAhPSBudWxsID8gdXBkYXRlTWVhc3VyZW1lbnRzRm9yIDogaWQpO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFyZXNpemVPYnNlcnZlckNvbm5lY3RlZC5jdXJyZW50KSB7XG4gICAgICAvLyBSZXNpemVPYnNlcnZlciBpbnZva2VzIHRoZSBgaGFuZGxlUmVzaXplYCBjYWxsYmFjayBhcyBzb29uIGFzIGBvYnNlcnZlYCBpcyBjYWxsZWQsXG4gICAgICAvLyBhc3N1bWluZyB0aGUgZWxlbWVudCBpcyByZW5kZXJlZCBhbmQgZGlzcGxheWVkLlxuICAgICAgcmVzaXplT2JzZXJ2ZXJDb25uZWN0ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrSWQuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQoY2FsbGJhY2tJZC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBjYWxsYmFja0lkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzKEFycmF5LmlzQXJyYXkoaWRzLmN1cnJlbnQpID8gaWRzLmN1cnJlbnQgOiBbaWRzLmN1cnJlbnRdKTtcbiAgICAgIGNhbGxiYWNrSWQuY3VycmVudCA9IG51bGw7XG4gICAgfSwgcmVzaXplT2JzZXJ2ZXJUaW1lb3V0KTtcbiAgfSwgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtyZXNpemVPYnNlcnZlclRpbWVvdXRdKTtcbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSB1c2VSZXNpemVPYnNlcnZlcih7XG4gICAgY2FsbGJhY2s6IGhhbmRsZVJlc2l6ZSxcbiAgICBkaXNhYmxlZDogcmVzaXplT2JzZXJ2ZXJEaXNhYmxlZCB8fCAhYWN0aXZlXG4gIH0pO1xuICBjb25zdCBoYW5kbGVOb2RlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soKG5ld0VsZW1lbnQsIHByZXZpb3VzRWxlbWVudCkgPT4ge1xuICAgIGlmICghcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNFbGVtZW50KSB7XG4gICAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUocHJldmlvdXNFbGVtZW50KTtcbiAgICAgIHJlc2l6ZU9ic2VydmVyQ29ubmVjdGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV3RWxlbWVudCkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShuZXdFbGVtZW50KTtcbiAgICB9XG4gIH0sIFtyZXNpemVPYnNlcnZlcl0pO1xuICBjb25zdCBbbm9kZVJlZiwgc2V0Tm9kZVJlZl0gPSB1dGlsaXRpZXMudXNlTm9kZVJlZihoYW5kbGVOb2RlQ2hhbmdlKTtcbiAgY29uc3QgZGF0YVJlZiA9IHV0aWxpdGllcy51c2VMYXRlc3RWYWx1ZShkYXRhKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlc2l6ZU9ic2VydmVyIHx8ICFub2RlUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgcmVzaXplT2JzZXJ2ZXJDb25uZWN0ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobm9kZVJlZi5jdXJyZW50KTtcbiAgfSwgW25vZGVSZWYsIHJlc2l6ZU9ic2VydmVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uLlJlZ2lzdGVyRHJvcHBhYmxlLFxuICAgICAgZWxlbWVudDoge1xuICAgICAgICBpZCxcbiAgICAgICAga2V5LFxuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgbm9kZTogbm9kZVJlZixcbiAgICAgICAgcmVjdCxcbiAgICAgICAgZGF0YTogZGF0YVJlZlxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb24uVW5yZWdpc3RlckRyb3BwYWJsZSxcbiAgICAgIGtleSxcbiAgICAgIGlkXG4gICAgfSk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW2lkXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkICE9PSBwcmV2aW91cy5jdXJyZW50LmRpc2FibGVkKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFjdGlvbi5TZXREcm9wcGFibGVEaXNhYmxlZCxcbiAgICAgICAgaWQsXG4gICAgICAgIGtleSxcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgIH0pO1xuICAgICAgcHJldmlvdXMuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfSwgW2lkLCBrZXksIGRpc2FibGVkLCBkaXNwYXRjaF0pO1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZSxcbiAgICByZWN0LFxuICAgIGlzT3ZlcjogKG92ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG92ZXIuaWQpID09PSBpZCxcbiAgICBub2RlOiBub2RlUmVmLFxuICAgIG92ZXIsXG4gICAgc2V0Tm9kZVJlZlxuICB9O1xufVxuXG5mdW5jdGlvbiBBbmltYXRpb25NYW5hZ2VyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBhbmltYXRpb24sXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY7XG4gIGNvbnN0IFtjbG9uZWRDaGlsZHJlbiwgc2V0Q2xvbmVkQ2hpbGRyZW5dID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBwcmV2aW91c0NoaWxkcmVuID0gdXRpbGl0aWVzLnVzZVByZXZpb3VzKGNoaWxkcmVuKTtcblxuICBpZiAoIWNoaWxkcmVuICYmICFjbG9uZWRDaGlsZHJlbiAmJiBwcmV2aW91c0NoaWxkcmVuKSB7XG4gICAgc2V0Q2xvbmVkQ2hpbGRyZW4ocHJldmlvdXNDaGlsZHJlbik7XG4gIH1cblxuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gY2xvbmVkQ2hpbGRyZW4gPT0gbnVsbCA/IHZvaWQgMCA6IGNsb25lZENoaWxkcmVuLmtleTtcbiAgICBjb25zdCBpZCA9IGNsb25lZENoaWxkcmVuID09IG51bGwgPyB2b2lkIDAgOiBjbG9uZWRDaGlsZHJlbi5wcm9wcy5pZDtcblxuICAgIGlmIChrZXkgPT0gbnVsbCB8fCBpZCA9PSBudWxsKSB7XG4gICAgICBzZXRDbG9uZWRDaGlsZHJlbihudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uKGlkLCBlbGVtZW50KSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRDbG9uZWRDaGlsZHJlbihudWxsKTtcbiAgICB9KTtcbiAgfSwgW2FuaW1hdGlvbiwgY2xvbmVkQ2hpbGRyZW4sIGVsZW1lbnRdKTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuLCBjbG9uZWRDaGlsZHJlbiA/IFJlYWN0LmNsb25lRWxlbWVudChjbG9uZWRDaGlsZHJlbiwge1xuICAgIHJlZjogc2V0RWxlbWVudFxuICB9KSA6IG51bGwpO1xufVxuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcbmZ1bmN0aW9uIE51bGxpZmllZENvbnRleHRQcm92aWRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEludGVybmFsQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBkZWZhdWx0SW50ZXJuYWxDb250ZXh0XG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQWN0aXZlRHJhZ2dhYmxlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBkZWZhdWx0VHJhbnNmb3JtXG4gIH0sIGNoaWxkcmVuKSk7XG59XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSB7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB0b3VjaEFjdGlvbjogJ25vbmUnXG59O1xuXG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbiA9IGFjdGl2YXRvckV2ZW50ID0+IHtcbiAgY29uc3QgaXNLZXlib2FyZEFjdGl2YXRvciA9IHV0aWxpdGllcy5pc0tleWJvYXJkRXZlbnQoYWN0aXZhdG9yRXZlbnQpO1xuICByZXR1cm4gaXNLZXlib2FyZEFjdGl2YXRvciA/ICd0cmFuc2Zvcm0gMjUwbXMgZWFzZScgOiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBQb3NpdGlvbmVkT3ZlcmxheSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfcmVmLCByZWYpID0+IHtcbiAgbGV0IHtcbiAgICBhcyxcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBhZGp1c3RTY2FsZSxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgcmVjdCxcbiAgICBzdHlsZSxcbiAgICB0cmFuc2Zvcm0sXG4gICAgdHJhbnNpdGlvbiA9IGRlZmF1bHRUcmFuc2l0aW9uXG4gIH0gPSBfcmVmO1xuXG4gIGlmICghcmVjdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2NhbGVBZGp1c3RlZFRyYW5zZm9ybSA9IGFkanVzdFNjYWxlID8gdHJhbnNmb3JtIDogeyAuLi50cmFuc2Zvcm0sXG4gICAgc2NhbGVYOiAxLFxuICAgIHNjYWxlWTogMVxuICB9O1xuICBjb25zdCBzdHlsZXMgPSB7IC4uLmJhc2VTdHlsZXMsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0cmFuc2Zvcm06IHV0aWxpdGllcy5DU1MuVHJhbnNmb3JtLnRvU3RyaW5nKHNjYWxlQWRqdXN0ZWRUcmFuc2Zvcm0pLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYWRqdXN0U2NhbGUgJiYgYWN0aXZhdG9yRXZlbnQgPyBnZXRSZWxhdGl2ZVRyYW5zZm9ybU9yaWdpbihhY3RpdmF0b3JFdmVudCwgcmVjdCkgOiB1bmRlZmluZWQsXG4gICAgdHJhbnNpdGlvbjogdHlwZW9mIHRyYW5zaXRpb24gPT09ICdmdW5jdGlvbicgPyB0cmFuc2l0aW9uKGFjdGl2YXRvckV2ZW50KSA6IHRyYW5zaXRpb24sXG4gICAgLi4uc3R5bGVcbiAgfTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYXMsIHtcbiAgICBjbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlcyxcbiAgICByZWZcbiAgfSwgY2hpbGRyZW4pO1xufSk7XG5cbmNvbnN0IGRlZmF1bHREcm9wQW5pbWF0aW9uU2lkZUVmZmVjdHMgPSBvcHRpb25zID0+IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGFjdGl2ZSxcbiAgICBkcmFnT3ZlcmxheVxuICB9ID0gX3JlZjtcbiAgY29uc3Qgb3JpZ2luYWxTdHlsZXMgPSB7fTtcbiAgY29uc3Qge1xuICAgIHN0eWxlcyxcbiAgICBjbGFzc05hbWVcbiAgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHN0eWxlcyAhPSBudWxsICYmIHN0eWxlcy5hY3RpdmUpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXMuYWN0aXZlKSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG9yaWdpbmFsU3R5bGVzW2tleV0gPSBhY3RpdmUubm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGtleSk7XG4gICAgICBhY3RpdmUubm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3R5bGVzICE9IG51bGwgJiYgc3R5bGVzLmRyYWdPdmVybGF5KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzLmRyYWdPdmVybGF5KSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRyYWdPdmVybGF5Lm5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNsYXNzTmFtZSAhPSBudWxsICYmIGNsYXNzTmFtZS5hY3RpdmUpIHtcbiAgICBhY3RpdmUubm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZS5hY3RpdmUpO1xuICB9XG5cbiAgaWYgKGNsYXNzTmFtZSAhPSBudWxsICYmIGNsYXNzTmFtZS5kcmFnT3ZlcmxheSkge1xuICAgIGRyYWdPdmVybGF5Lm5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUuZHJhZ092ZXJsYXkpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3JpZ2luYWxTdHlsZXMpKSB7XG4gICAgICBhY3RpdmUubm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9IG51bGwgJiYgY2xhc3NOYW1lLmFjdGl2ZSkge1xuICAgICAgYWN0aXZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUuYWN0aXZlKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBkZWZhdWx0S2V5ZnJhbWVSZXNvbHZlciA9IF9yZWYyID0+IHtcbiAgbGV0IHtcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgIGluaXRpYWwsXG4gICAgICBmaW5hbFxuICAgIH1cbiAgfSA9IF9yZWYyO1xuICByZXR1cm4gW3tcbiAgICB0cmFuc2Zvcm06IHV0aWxpdGllcy5DU1MuVHJhbnNmb3JtLnRvU3RyaW5nKGluaXRpYWwpXG4gIH0sIHtcbiAgICB0cmFuc2Zvcm06IHV0aWxpdGllcy5DU1MuVHJhbnNmb3JtLnRvU3RyaW5nKGZpbmFsKVxuICB9XTtcbn07XG5cbmNvbnN0IGRlZmF1bHREcm9wQW5pbWF0aW9uQ29uZmlndXJhdGlvbiA9IHtcbiAgZHVyYXRpb246IDI1MCxcbiAgZWFzaW5nOiAnZWFzZScsXG4gIGtleWZyYW1lczogZGVmYXVsdEtleWZyYW1lUmVzb2x2ZXIsXG4gIHNpZGVFZmZlY3RzOiAvKiNfX1BVUkVfXyovZGVmYXVsdERyb3BBbmltYXRpb25TaWRlRWZmZWN0cyh7XG4gICAgc3R5bGVzOiB7XG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgb3BhY2l0eTogJzAnXG4gICAgICB9XG4gICAgfVxuICB9KVxufTtcbmZ1bmN0aW9uIHVzZURyb3BBbmltYXRpb24oX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBjb25maWcsXG4gICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBtZWFzdXJpbmdDb25maWd1cmF0aW9uXG4gIH0gPSBfcmVmMztcbiAgcmV0dXJuIHV0aWxpdGllcy51c2VFdmVudCgoaWQsIG5vZGUpID0+IHtcbiAgICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRHJhZ2dhYmxlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKTtcblxuICAgIGlmICghYWN0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZSA9IGFjdGl2ZURyYWdnYWJsZS5ub2RlLmN1cnJlbnQ7XG5cbiAgICBpZiAoIWFjdGl2ZU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZWFzdXJhYmxlTm9kZSA9IGdldE1lYXN1cmFibGVOb2RlKG5vZGUpO1xuXG4gICAgaWYgKCFtZWFzdXJhYmxlTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zZm9ybVxuICAgIH0gPSB1dGlsaXRpZXMuZ2V0V2luZG93KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm0odHJhbnNmb3JtKTtcblxuICAgIGlmICghcGFyc2VkVHJhbnNmb3JtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZyA6IGNyZWF0ZURlZmF1bHREcm9wQW5pbWF0aW9uKGNvbmZpZyk7XG4gICAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChhY3RpdmVOb2RlLCBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdnYWJsZS5tZWFzdXJlKTtcbiAgICByZXR1cm4gYW5pbWF0aW9uKHtcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0YTogYWN0aXZlRHJhZ2dhYmxlLmRhdGEsXG4gICAgICAgIG5vZGU6IGFjdGl2ZU5vZGUsXG4gICAgICAgIHJlY3Q6IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ2dhYmxlLm1lYXN1cmUoYWN0aXZlTm9kZSlcbiAgICAgIH0sXG4gICAgICBkcmFnZ2FibGVOb2RlcyxcbiAgICAgIGRyYWdPdmVybGF5OiB7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIHJlY3Q6IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ092ZXJsYXkubWVhc3VyZShtZWFzdXJhYmxlTm9kZSlcbiAgICAgIH0sXG4gICAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgICAgbWVhc3VyaW5nQ29uZmlndXJhdGlvbixcbiAgICAgIHRyYW5zZm9ybTogcGFyc2VkVHJhbnNmb3JtXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0RHJvcEFuaW1hdGlvbihvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkdXJhdGlvbixcbiAgICBlYXNpbmcsXG4gICAgc2lkZUVmZmVjdHMsXG4gICAga2V5ZnJhbWVzXG4gIH0gPSB7IC4uLmRlZmF1bHREcm9wQW5pbWF0aW9uQ29uZmlndXJhdGlvbixcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIHJldHVybiBfcmVmNCA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRyYWdPdmVybGF5LFxuICAgICAgdHJhbnNmb3JtLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBfcmVmNDtcblxuICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgIC8vIERvIG5vdCBhbmltYXRlIGlmIGFuaW1hdGlvbiBkdXJhdGlvbiBpcyB6ZXJvLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgeDogZHJhZ092ZXJsYXkucmVjdC5sZWZ0IC0gYWN0aXZlLnJlY3QubGVmdCxcbiAgICAgIHk6IGRyYWdPdmVybGF5LnJlY3QudG9wIC0gYWN0aXZlLnJlY3QudG9wXG4gICAgfTtcbiAgICBjb25zdCBzY2FsZSA9IHtcbiAgICAgIHNjYWxlWDogdHJhbnNmb3JtLnNjYWxlWCAhPT0gMSA/IGFjdGl2ZS5yZWN0LndpZHRoICogdHJhbnNmb3JtLnNjYWxlWCAvIGRyYWdPdmVybGF5LnJlY3Qud2lkdGggOiAxLFxuICAgICAgc2NhbGVZOiB0cmFuc2Zvcm0uc2NhbGVZICE9PSAxID8gYWN0aXZlLnJlY3QuaGVpZ2h0ICogdHJhbnNmb3JtLnNjYWxlWSAvIGRyYWdPdmVybGF5LnJlY3QuaGVpZ2h0IDogMVxuICAgIH07XG4gICAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSB7XG4gICAgICB4OiB0cmFuc2Zvcm0ueCAtIGRlbHRhLngsXG4gICAgICB5OiB0cmFuc2Zvcm0ueSAtIGRlbHRhLnksXG4gICAgICAuLi5zY2FsZVxuICAgIH07XG4gICAgY29uc3QgYW5pbWF0aW9uS2V5ZnJhbWVzID0ga2V5ZnJhbWVzKHsgLi4ucmVzdCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRyYWdPdmVybGF5LFxuICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgIGluaXRpYWw6IHRyYW5zZm9ybSxcbiAgICAgICAgZmluYWw6IGZpbmFsVHJhbnNmb3JtXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW2ZpcnN0S2V5ZnJhbWVdID0gYW5pbWF0aW9uS2V5ZnJhbWVzO1xuICAgIGNvbnN0IGxhc3RLZXlmcmFtZSA9IGFuaW1hdGlvbktleWZyYW1lc1thbmltYXRpb25LZXlmcmFtZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZmlyc3RLZXlmcmFtZSkgPT09IEpTT04uc3RyaW5naWZ5KGxhc3RLZXlmcmFtZSkpIHtcbiAgICAgIC8vIFRoZSBzdGFydCBhbmQgZW5kIGtleWZyYW1lcyBhcmUgdGhlIHNhbWUsIGluZmVyIHRoYXQgdGhlcmUgaXMgbm8gYW5pbWF0aW9uIG5lZWRlZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbnVwID0gc2lkZUVmZmVjdHMgPT0gbnVsbCA/IHZvaWQgMCA6IHNpZGVFZmZlY3RzKHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRyYWdPdmVybGF5LFxuICAgICAgLi4ucmVzdFxuICAgIH0pO1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRyYWdPdmVybGF5Lm5vZGUuYW5pbWF0ZShhbmltYXRpb25LZXlmcmFtZXMsIHtcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzaW5nLFxuICAgICAgZmlsbDogJ2ZvcndhcmRzJ1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGFuaW1hdGlvbi5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgY2xlYW51cCA9PSBudWxsID8gdm9pZCAwIDogY2xlYW51cCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xufVxuXG5sZXQga2V5ID0gMDtcbmZ1bmN0aW9uIHVzZUtleShpZCkge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBrZXkrKztcbiAgICByZXR1cm4ga2V5O1xuICB9LCBbaWRdKTtcbn1cblxuY29uc3QgRHJhZ092ZXJsYXkgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQubWVtbyhfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBhZGp1c3RTY2FsZSA9IGZhbHNlLFxuICAgIGNoaWxkcmVuLFxuICAgIGRyb3BBbmltYXRpb246IGRyb3BBbmltYXRpb25Db25maWcsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICBtb2RpZmllcnMsXG4gICAgd3JhcHBlckVsZW1lbnQgPSAnZGl2JyxcbiAgICBjbGFzc05hbWUsXG4gICAgekluZGV4ID0gOTk5XG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgYWN0aXZlLFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGNvbnRhaW5lck5vZGVSZWN0LFxuICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgZHJhZ092ZXJsYXksXG4gICAgb3ZlcixcbiAgICBtZWFzdXJpbmdDb25maWd1cmF0aW9uLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsXG4gICAgd2luZG93UmVjdFxuICB9ID0gdXNlRG5kQ29udGV4dCgpO1xuICBjb25zdCB0cmFuc2Zvcm0gPSBSZWFjdC51c2VDb250ZXh0KEFjdGl2ZURyYWdnYWJsZUNvbnRleHQpO1xuICBjb25zdCBrZXkgPSB1c2VLZXkoYWN0aXZlID09IG51bGwgPyB2b2lkIDAgOiBhY3RpdmUuaWQpO1xuICBjb25zdCBtb2RpZmllZFRyYW5zZm9ybSA9IGFwcGx5TW9kaWZpZXJzKG1vZGlmaWVycywge1xuICAgIGFjdGl2YXRvckV2ZW50LFxuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmVOb2RlUmVjdCxcbiAgICBjb250YWluZXJOb2RlUmVjdCxcbiAgICBkcmFnZ2luZ05vZGVSZWN0OiBkcmFnT3ZlcmxheS5yZWN0LFxuICAgIG92ZXIsXG4gICAgb3ZlcmxheU5vZGVSZWN0OiBkcmFnT3ZlcmxheS5yZWN0LFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsXG4gICAgdHJhbnNmb3JtLFxuICAgIHdpbmRvd1JlY3RcbiAgfSk7XG4gIGNvbnN0IGluaXRpYWxSZWN0ID0gdXNlSW5pdGlhbFZhbHVlKGFjdGl2ZU5vZGVSZWN0KTtcbiAgY29uc3QgZHJvcEFuaW1hdGlvbiA9IHVzZURyb3BBbmltYXRpb24oe1xuICAgIGNvbmZpZzogZHJvcEFuaW1hdGlvbkNvbmZpZyxcbiAgICBkcmFnZ2FibGVOb2RlcyxcbiAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgIG1lYXN1cmluZ0NvbmZpZ3VyYXRpb25cbiAgfSk7IC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGFjdGl2ZSBub2RlIHRvIGJlIG1lYXN1cmVkIGJlZm9yZSBjb25uZWN0aW5nIHRoZSBkcmFnIG92ZXJsYXkgcmVmXG4gIC8vIG90aGVyd2lzZSBjb2xsaXNpb25zIGNhbiBiZSBjb21wdXRlZCBhZ2FpbnN0IGEgbWlzcG9zaXRpb25lZCBkcmFnIG92ZXJsYXlcblxuICBjb25zdCByZWYgPSBpbml0aWFsUmVjdCA/IGRyYWdPdmVybGF5LnNldFJlZiA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTnVsbGlmaWVkQ29udGV4dFByb3ZpZGVyLCBudWxsLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFuaW1hdGlvbk1hbmFnZXIsIHtcbiAgICBhbmltYXRpb246IGRyb3BBbmltYXRpb25cbiAgfSwgYWN0aXZlICYmIGtleSA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUG9zaXRpb25lZE92ZXJsYXksIHtcbiAgICBrZXk6IGtleSxcbiAgICBpZDogYWN0aXZlLmlkLFxuICAgIHJlZjogcmVmLFxuICAgIGFzOiB3cmFwcGVyRWxlbWVudCxcbiAgICBhY3RpdmF0b3JFdmVudDogYWN0aXZhdG9yRXZlbnQsXG4gICAgYWRqdXN0U2NhbGU6IGFkanVzdFNjYWxlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gICAgcmVjdDogaW5pdGlhbFJlY3QsXG4gICAgc3R5bGU6IHtcbiAgICAgIHpJbmRleCxcbiAgICAgIC4uLnN0eWxlXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IG1vZGlmaWVkVHJhbnNmb3JtXG4gIH0sIGNoaWxkcmVuKSA6IG51bGwpKTtcbn0pO1xuXG5leHBvcnRzLkRuZENvbnRleHQgPSBEbmRDb250ZXh0O1xuZXhwb3J0cy5EcmFnT3ZlcmxheSA9IERyYWdPdmVybGF5O1xuZXhwb3J0cy5LZXlib2FyZFNlbnNvciA9IEtleWJvYXJkU2Vuc29yO1xuZXhwb3J0cy5Nb3VzZVNlbnNvciA9IE1vdXNlU2Vuc29yO1xuZXhwb3J0cy5Qb2ludGVyU2Vuc29yID0gUG9pbnRlclNlbnNvcjtcbmV4cG9ydHMuVG91Y2hTZW5zb3IgPSBUb3VjaFNlbnNvcjtcbmV4cG9ydHMuYXBwbHlNb2RpZmllcnMgPSBhcHBseU1vZGlmaWVycztcbmV4cG9ydHMuY2xvc2VzdENlbnRlciA9IGNsb3Nlc3RDZW50ZXI7XG5leHBvcnRzLmNsb3Nlc3RDb3JuZXJzID0gY2xvc2VzdENvcm5lcnM7XG5leHBvcnRzLmRlZmF1bHRBbm5vdW5jZW1lbnRzID0gZGVmYXVsdEFubm91bmNlbWVudHM7XG5leHBvcnRzLmRlZmF1bHRDb29yZGluYXRlcyA9IGRlZmF1bHRDb29yZGluYXRlcztcbmV4cG9ydHMuZGVmYXVsdERyb3BBbmltYXRpb24gPSBkZWZhdWx0RHJvcEFuaW1hdGlvbkNvbmZpZ3VyYXRpb247XG5leHBvcnRzLmRlZmF1bHREcm9wQW5pbWF0aW9uU2lkZUVmZmVjdHMgPSBkZWZhdWx0RHJvcEFuaW1hdGlvblNpZGVFZmZlY3RzO1xuZXhwb3J0cy5kZWZhdWx0S2V5Ym9hcmRDb29yZGluYXRlR2V0dGVyID0gZGVmYXVsdEtleWJvYXJkQ29vcmRpbmF0ZUdldHRlcjtcbmV4cG9ydHMuZGVmYXVsdFNjcmVlblJlYWRlckluc3RydWN0aW9ucyA9IGRlZmF1bHRTY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnM7XG5leHBvcnRzLmdldENsaWVudFJlY3QgPSBnZXRDbGllbnRSZWN0O1xuZXhwb3J0cy5nZXRGaXJzdENvbGxpc2lvbiA9IGdldEZpcnN0Q29sbGlzaW9uO1xuZXhwb3J0cy5nZXRTY3JvbGxhYmxlQW5jZXN0b3JzID0gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycztcbmV4cG9ydHMucG9pbnRlcldpdGhpbiA9IHBvaW50ZXJXaXRoaW47XG5leHBvcnRzLnJlY3RJbnRlcnNlY3Rpb24gPSByZWN0SW50ZXJzZWN0aW9uO1xuZXhwb3J0cy51c2VEbmRDb250ZXh0ID0gdXNlRG5kQ29udGV4dDtcbmV4cG9ydHMudXNlRG5kTW9uaXRvciA9IHVzZURuZE1vbml0b3I7XG5leHBvcnRzLnVzZURyYWdnYWJsZSA9IHVzZURyYWdnYWJsZTtcbmV4cG9ydHMudXNlRHJvcHBhYmxlID0gdXNlRHJvcHBhYmxlO1xuZXhwb3J0cy51c2VTZW5zb3IgPSB1c2VTZW5zb3I7XG5leHBvcnRzLnVzZVNlbnNvcnMgPSB1c2VTZW5zb3JzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5janMuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29yZS5janMucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvcmUuY2pzLmRldmVsb3BtZW50LmpzJylcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAZG5kLWtpdC9jb3JlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnQGRuZC1raXQvdXRpbGl0aWVzJyk7XG5cbi8qKlxyXG4gKiBNb3ZlIGFuIGFycmF5IGl0ZW0gdG8gYSBkaWZmZXJlbnQgcG9zaXRpb24uIFJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgaXRlbSBtb3ZlZCB0byB0aGUgbmV3IHBvc2l0aW9uLlxyXG4gKi9cbmZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbSwgdG8pIHtcbiAgY29uc3QgbmV3QXJyYXkgPSBhcnJheS5zbGljZSgpO1xuICBuZXdBcnJheS5zcGxpY2UodG8gPCAwID8gbmV3QXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgbmV3QXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbiAgcmV0dXJuIG5ld0FycmF5O1xufVxuXG4vKipcclxuICogU3dhcCBhbiBhcnJheSBpdGVtIHRvIGEgZGlmZmVyZW50IHBvc2l0aW9uLiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW0gc3dhcHBlZCB0byB0aGUgbmV3IHBvc2l0aW9uLlxyXG4gKi9cbmZ1bmN0aW9uIGFycmF5U3dhcChhcnJheSwgZnJvbSwgdG8pIHtcbiAgY29uc3QgbmV3QXJyYXkgPSBhcnJheS5zbGljZSgpO1xuICBuZXdBcnJheVtmcm9tXSA9IGFycmF5W3RvXTtcbiAgbmV3QXJyYXlbdG9dID0gYXJyYXlbZnJvbV07XG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0U29ydGVkUmVjdHMoaXRlbXMsIHJlY3RzKSB7XG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBpZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gcmVjdHMuZ2V0KGlkKTtcblxuICAgIGlmIChyZWN0KSB7XG4gICAgICBhY2N1bXVsYXRvcltpbmRleF0gPSByZWN0O1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgQXJyYXkoaXRlbXMubGVuZ3RoKSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRJbmRleChpbmRleCkge1xuICByZXR1cm4gaW5kZXggIT09IG51bGwgJiYgaW5kZXggPj0gMDtcbn1cblxuZnVuY3Rpb24gaXRlbXNFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgaWYgKHR5cGVvZiBkaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYWdnYWJsZTogZGlzYWJsZWQsXG4gICAgICBkcm9wcGFibGU6IGRpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlZDtcbn1cblxuLy8gVG8tZG86IFdlIHNob3VsZCBiZSBjYWxjdWxhdGluZyBzY2FsZSB0cmFuc2Zvcm1hdGlvblxuY29uc3QgZGVmYXVsdFNjYWxlID0ge1xuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcbmNvbnN0IGhvcml6b250YWxMaXN0U29ydGluZ1N0cmF0ZWd5ID0gX3JlZiA9PiB7XG4gIHZhciBfcmVjdHMkYWN0aXZlSW5kZXg7XG5cbiAgbGV0IHtcbiAgICByZWN0cyxcbiAgICBhY3RpdmVOb2RlUmVjdDogZmFsbGJhY2tBY3RpdmVSZWN0LFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIG92ZXJJbmRleCxcbiAgICBpbmRleFxuICB9ID0gX3JlZjtcbiAgY29uc3QgYWN0aXZlTm9kZVJlY3QgPSAoX3JlY3RzJGFjdGl2ZUluZGV4ID0gcmVjdHNbYWN0aXZlSW5kZXhdKSAhPSBudWxsID8gX3JlY3RzJGFjdGl2ZUluZGV4IDogZmFsbGJhY2tBY3RpdmVSZWN0O1xuXG4gIGlmICghYWN0aXZlTm9kZVJlY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1HYXAgPSBnZXRJdGVtR2FwKHJlY3RzLCBpbmRleCwgYWN0aXZlSW5kZXgpO1xuXG4gIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICBjb25zdCBuZXdJbmRleFJlY3QgPSByZWN0c1tvdmVySW5kZXhdO1xuXG4gICAgaWYgKCFuZXdJbmRleFJlY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBhY3RpdmVJbmRleCA8IG92ZXJJbmRleCA/IG5ld0luZGV4UmVjdC5sZWZ0ICsgbmV3SW5kZXhSZWN0LndpZHRoIC0gKGFjdGl2ZU5vZGVSZWN0LmxlZnQgKyBhY3RpdmVOb2RlUmVjdC53aWR0aCkgOiBuZXdJbmRleFJlY3QubGVmdCAtIGFjdGl2ZU5vZGVSZWN0LmxlZnQsXG4gICAgICB5OiAwLFxuICAgICAgLi4uZGVmYXVsdFNjYWxlXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpbmRleCA+IGFjdGl2ZUluZGV4ICYmIGluZGV4IDw9IG92ZXJJbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiAtYWN0aXZlTm9kZVJlY3Qud2lkdGggLSBpdGVtR2FwLFxuICAgICAgeTogMCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZVxuICAgIH07XG4gIH1cblxuICBpZiAoaW5kZXggPCBhY3RpdmVJbmRleCAmJiBpbmRleCA+PSBvdmVySW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogYWN0aXZlTm9kZVJlY3Qud2lkdGggKyBpdGVtR2FwLFxuICAgICAgeTogMCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICAuLi5kZWZhdWx0U2NhbGVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEl0ZW1HYXAocmVjdHMsIGluZGV4LCBhY3RpdmVJbmRleCkge1xuICBjb25zdCBjdXJyZW50UmVjdCA9IHJlY3RzW2luZGV4XTtcbiAgY29uc3QgcHJldmlvdXNSZWN0ID0gcmVjdHNbaW5kZXggLSAxXTtcbiAgY29uc3QgbmV4dFJlY3QgPSByZWN0c1tpbmRleCArIDFdO1xuXG4gIGlmICghY3VycmVudFJlY3QgfHwgIXByZXZpb3VzUmVjdCAmJiAhbmV4dFJlY3QpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChhY3RpdmVJbmRleCA8IGluZGV4KSB7XG4gICAgcmV0dXJuIHByZXZpb3VzUmVjdCA/IGN1cnJlbnRSZWN0LmxlZnQgLSAocHJldmlvdXNSZWN0LmxlZnQgKyBwcmV2aW91c1JlY3Qud2lkdGgpIDogbmV4dFJlY3QubGVmdCAtIChjdXJyZW50UmVjdC5sZWZ0ICsgY3VycmVudFJlY3Qud2lkdGgpO1xuICB9XG5cbiAgcmV0dXJuIG5leHRSZWN0ID8gbmV4dFJlY3QubGVmdCAtIChjdXJyZW50UmVjdC5sZWZ0ICsgY3VycmVudFJlY3Qud2lkdGgpIDogY3VycmVudFJlY3QubGVmdCAtIChwcmV2aW91c1JlY3QubGVmdCArIHByZXZpb3VzUmVjdC53aWR0aCk7XG59XG5cbmNvbnN0IHJlY3RTb3J0aW5nU3RyYXRlZ3kgPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICByZWN0cyxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBvdmVySW5kZXgsXG4gICAgaW5kZXhcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG5ld1JlY3RzID0gYXJyYXlNb3ZlKHJlY3RzLCBvdmVySW5kZXgsIGFjdGl2ZUluZGV4KTtcbiAgY29uc3Qgb2xkUmVjdCA9IHJlY3RzW2luZGV4XTtcbiAgY29uc3QgbmV3UmVjdCA9IG5ld1JlY3RzW2luZGV4XTtcblxuICBpZiAoIW5ld1JlY3QgfHwgIW9sZFJlY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogbmV3UmVjdC5sZWZ0IC0gb2xkUmVjdC5sZWZ0LFxuICAgIHk6IG5ld1JlY3QudG9wIC0gb2xkUmVjdC50b3AsXG4gICAgc2NhbGVYOiBuZXdSZWN0LndpZHRoIC8gb2xkUmVjdC53aWR0aCxcbiAgICBzY2FsZVk6IG5ld1JlY3QuaGVpZ2h0IC8gb2xkUmVjdC5oZWlnaHRcbiAgfTtcbn07XG5cbmNvbnN0IHJlY3RTd2FwcGluZ1N0cmF0ZWd5ID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgaW5kZXgsXG4gICAgcmVjdHMsXG4gICAgb3ZlckluZGV4XG4gIH0gPSBfcmVmO1xuICBsZXQgb2xkUmVjdDtcbiAgbGV0IG5ld1JlY3Q7XG5cbiAgaWYgKGluZGV4ID09PSBhY3RpdmVJbmRleCkge1xuICAgIG9sZFJlY3QgPSByZWN0c1tpbmRleF07XG4gICAgbmV3UmVjdCA9IHJlY3RzW292ZXJJbmRleF07XG4gIH1cblxuICBpZiAoaW5kZXggPT09IG92ZXJJbmRleCkge1xuICAgIG9sZFJlY3QgPSByZWN0c1tpbmRleF07XG4gICAgbmV3UmVjdCA9IHJlY3RzW2FjdGl2ZUluZGV4XTtcbiAgfVxuXG4gIGlmICghbmV3UmVjdCB8fCAhb2xkUmVjdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBuZXdSZWN0LmxlZnQgLSBvbGRSZWN0LmxlZnQsXG4gICAgeTogbmV3UmVjdC50b3AgLSBvbGRSZWN0LnRvcCxcbiAgICBzY2FsZVg6IG5ld1JlY3Qud2lkdGggLyBvbGRSZWN0LndpZHRoLFxuICAgIHNjYWxlWTogbmV3UmVjdC5oZWlnaHQgLyBvbGRSZWN0LmhlaWdodFxuICB9O1xufTtcblxuLy8gVG8tZG86IFdlIHNob3VsZCBiZSBjYWxjdWxhdGluZyBzY2FsZSB0cmFuc2Zvcm1hdGlvblxuY29uc3QgZGVmYXVsdFNjYWxlJDEgPSB7XG4gIHNjYWxlWDogMSxcbiAgc2NhbGVZOiAxXG59O1xuY29uc3QgdmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5ID0gX3JlZiA9PiB7XG4gIHZhciBfcmVjdHMkYWN0aXZlSW5kZXg7XG5cbiAgbGV0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBhY3RpdmVOb2RlUmVjdDogZmFsbGJhY2tBY3RpdmVSZWN0LFxuICAgIGluZGV4LFxuICAgIHJlY3RzLFxuICAgIG92ZXJJbmRleFxuICB9ID0gX3JlZjtcbiAgY29uc3QgYWN0aXZlTm9kZVJlY3QgPSAoX3JlY3RzJGFjdGl2ZUluZGV4ID0gcmVjdHNbYWN0aXZlSW5kZXhdKSAhPSBudWxsID8gX3JlY3RzJGFjdGl2ZUluZGV4IDogZmFsbGJhY2tBY3RpdmVSZWN0O1xuXG4gIGlmICghYWN0aXZlTm9kZVJlY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICBjb25zdCBvdmVySW5kZXhSZWN0ID0gcmVjdHNbb3ZlckluZGV4XTtcblxuICAgIGlmICghb3ZlckluZGV4UmVjdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiBhY3RpdmVJbmRleCA8IG92ZXJJbmRleCA/IG92ZXJJbmRleFJlY3QudG9wICsgb3ZlckluZGV4UmVjdC5oZWlnaHQgLSAoYWN0aXZlTm9kZVJlY3QudG9wICsgYWN0aXZlTm9kZVJlY3QuaGVpZ2h0KSA6IG92ZXJJbmRleFJlY3QudG9wIC0gYWN0aXZlTm9kZVJlY3QudG9wLFxuICAgICAgLi4uZGVmYXVsdFNjYWxlJDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaXRlbUdhcCA9IGdldEl0ZW1HYXAkMShyZWN0cywgaW5kZXgsIGFjdGl2ZUluZGV4KTtcblxuICBpZiAoaW5kZXggPiBhY3RpdmVJbmRleCAmJiBpbmRleCA8PSBvdmVySW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IC1hY3RpdmVOb2RlUmVjdC5oZWlnaHQgLSBpdGVtR2FwLFxuICAgICAgLi4uZGVmYXVsdFNjYWxlJDFcbiAgICB9O1xuICB9XG5cbiAgaWYgKGluZGV4IDwgYWN0aXZlSW5kZXggJiYgaW5kZXggPj0gb3ZlckluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiBhY3RpdmVOb2RlUmVjdC5oZWlnaHQgKyBpdGVtR2FwLFxuICAgICAgLi4uZGVmYXVsdFNjYWxlJDFcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgLi4uZGVmYXVsdFNjYWxlJDFcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEl0ZW1HYXAkMShjbGllbnRSZWN0cywgaW5kZXgsIGFjdGl2ZUluZGV4KSB7XG4gIGNvbnN0IGN1cnJlbnRSZWN0ID0gY2xpZW50UmVjdHNbaW5kZXhdO1xuICBjb25zdCBwcmV2aW91c1JlY3QgPSBjbGllbnRSZWN0c1tpbmRleCAtIDFdO1xuICBjb25zdCBuZXh0UmVjdCA9IGNsaWVudFJlY3RzW2luZGV4ICsgMV07XG5cbiAgaWYgKCFjdXJyZW50UmVjdCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGFjdGl2ZUluZGV4IDwgaW5kZXgpIHtcbiAgICByZXR1cm4gcHJldmlvdXNSZWN0ID8gY3VycmVudFJlY3QudG9wIC0gKHByZXZpb3VzUmVjdC50b3AgKyBwcmV2aW91c1JlY3QuaGVpZ2h0KSA6IG5leHRSZWN0ID8gbmV4dFJlY3QudG9wIC0gKGN1cnJlbnRSZWN0LnRvcCArIGN1cnJlbnRSZWN0LmhlaWdodCkgOiAwO1xuICB9XG5cbiAgcmV0dXJuIG5leHRSZWN0ID8gbmV4dFJlY3QudG9wIC0gKGN1cnJlbnRSZWN0LnRvcCArIGN1cnJlbnRSZWN0LmhlaWdodCkgOiBwcmV2aW91c1JlY3QgPyBjdXJyZW50UmVjdC50b3AgLSAocHJldmlvdXNSZWN0LnRvcCArIHByZXZpb3VzUmVjdC5oZWlnaHQpIDogMDtcbn1cblxuY29uc3QgSURfUFJFRklYID0gJ1NvcnRhYmxlJztcbmNvbnN0IENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQuY3JlYXRlQ29udGV4dCh7XG4gIGFjdGl2ZUluZGV4OiAtMSxcbiAgY29udGFpbmVySWQ6IElEX1BSRUZJWCxcbiAgZGlzYWJsZVRyYW5zZm9ybXM6IGZhbHNlLFxuICBpdGVtczogW10sXG4gIG92ZXJJbmRleDogLTEsXG4gIHVzZURyYWdPdmVybGF5OiBmYWxzZSxcbiAgc29ydGVkUmVjdHM6IFtdLFxuICBzdHJhdGVneTogcmVjdFNvcnRpbmdTdHJhdGVneSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIGRyb3BwYWJsZTogZmFsc2VcbiAgfVxufSk7XG5mdW5jdGlvbiBTb3J0YWJsZUNvbnRleHQoX3JlZikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGlkLFxuICAgIGl0ZW1zOiB1c2VyRGVmaW5lZEl0ZW1zLFxuICAgIHN0cmF0ZWd5ID0gcmVjdFNvcnRpbmdTdHJhdGVneSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRQcm9wID0gZmFsc2VcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgZHJhZ092ZXJsYXksXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgb3ZlcixcbiAgICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVyc1xuICB9ID0gY29yZS51c2VEbmRDb250ZXh0KCk7XG4gIGNvbnN0IGNvbnRhaW5lcklkID0gdXRpbGl0aWVzLnVzZVVuaXF1ZUlkKElEX1BSRUZJWCwgaWQpO1xuICBjb25zdCB1c2VEcmFnT3ZlcmxheSA9IEJvb2xlYW4oZHJhZ092ZXJsYXkucmVjdCAhPT0gbnVsbCk7XG4gIGNvbnN0IGl0ZW1zID0gUmVhY3QudXNlTWVtbygoKSA9PiB1c2VyRGVmaW5lZEl0ZW1zLm1hcChpdGVtID0+IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAnaWQnIGluIGl0ZW0gPyBpdGVtLmlkIDogaXRlbSksIFt1c2VyRGVmaW5lZEl0ZW1zXSk7XG4gIGNvbnN0IGlzRHJhZ2dpbmcgPSBhY3RpdmUgIT0gbnVsbDtcbiAgY29uc3QgYWN0aXZlSW5kZXggPSBhY3RpdmUgPyBpdGVtcy5pbmRleE9mKGFjdGl2ZS5pZCkgOiAtMTtcbiAgY29uc3Qgb3ZlckluZGV4ID0gb3ZlciA/IGl0ZW1zLmluZGV4T2Yob3Zlci5pZCkgOiAtMTtcbiAgY29uc3QgcHJldmlvdXNJdGVtc1JlZiA9IFJlYWN0LnVzZVJlZihpdGVtcyk7XG4gIGNvbnN0IGl0ZW1zSGF2ZUNoYW5nZWQgPSAhaXRlbXNFcXVhbChpdGVtcywgcHJldmlvdXNJdGVtc1JlZi5jdXJyZW50KTtcbiAgY29uc3QgZGlzYWJsZVRyYW5zZm9ybXMgPSBvdmVySW5kZXggIT09IC0xICYmIGFjdGl2ZUluZGV4ID09PSAtMSB8fCBpdGVtc0hhdmVDaGFuZ2VkO1xuICBjb25zdCBkaXNhYmxlZCA9IG5vcm1hbGl6ZURpc2FibGVkKGRpc2FibGVkUHJvcCk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXRlbXNIYXZlQ2hhbmdlZCAmJiBpc0RyYWdnaW5nKSB7XG4gICAgICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVycyhpdGVtcyk7XG4gICAgfVxuICB9LCBbaXRlbXNIYXZlQ2hhbmdlZCwgaXRlbXMsIGlzRHJhZ2dpbmcsIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJldmlvdXNJdGVtc1JlZi5jdXJyZW50ID0gaXRlbXM7XG4gIH0sIFtpdGVtc10pO1xuICBjb25zdCBjb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgY29udGFpbmVySWQsXG4gICAgZGlzYWJsZWQsXG4gICAgZGlzYWJsZVRyYW5zZm9ybXMsXG4gICAgaXRlbXMsXG4gICAgb3ZlckluZGV4LFxuICAgIHVzZURyYWdPdmVybGF5LFxuICAgIHNvcnRlZFJlY3RzOiBnZXRTb3J0ZWRSZWN0cyhpdGVtcywgZHJvcHBhYmxlUmVjdHMpLFxuICAgIHN0cmF0ZWd5XG4gIH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFthY3RpdmVJbmRleCwgY29udGFpbmVySWQsIGRpc2FibGVkLmRyYWdnYWJsZSwgZGlzYWJsZWQuZHJvcHBhYmxlLCBkaXNhYmxlVHJhbnNmb3JtcywgaXRlbXMsIG92ZXJJbmRleCwgZHJvcHBhYmxlUmVjdHMsIHVzZURyYWdPdmVybGF5LCBzdHJhdGVneV0pO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbmNvbnN0IGRlZmF1bHROZXdJbmRleEdldHRlciA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGlkLFxuICAgIGl0ZW1zLFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIG92ZXJJbmRleFxuICB9ID0gX3JlZjtcbiAgcmV0dXJuIGFycmF5TW92ZShpdGVtcywgYWN0aXZlSW5kZXgsIG92ZXJJbmRleCkuaW5kZXhPZihpZCk7XG59O1xuY29uc3QgZGVmYXVsdEFuaW1hdGVMYXlvdXRDaGFuZ2VzID0gX3JlZjIgPT4ge1xuICBsZXQge1xuICAgIGNvbnRhaW5lcklkLFxuICAgIGlzU29ydGluZyxcbiAgICB3YXNEcmFnZ2luZyxcbiAgICBpbmRleCxcbiAgICBpdGVtcyxcbiAgICBuZXdJbmRleCxcbiAgICBwcmV2aW91c0l0ZW1zLFxuICAgIHByZXZpb3VzQ29udGFpbmVySWQsXG4gICAgdHJhbnNpdGlvblxuICB9ID0gX3JlZjI7XG5cbiAgaWYgKCF0cmFuc2l0aW9uIHx8ICF3YXNEcmFnZ2luZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcmV2aW91c0l0ZW1zICE9PSBpdGVtcyAmJiBpbmRleCA9PT0gbmV3SW5kZXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNTb3J0aW5nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gbmV3SW5kZXggIT09IGluZGV4ICYmIGNvbnRhaW5lcklkID09PSBwcmV2aW91c0NvbnRhaW5lcklkO1xufTtcbmNvbnN0IGRlZmF1bHRUcmFuc2l0aW9uID0ge1xuICBkdXJhdGlvbjogMjAwLFxuICBlYXNpbmc6ICdlYXNlJ1xufTtcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuY29uc3QgZGlzYWJsZWRUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL3V0aWxpdGllcy5DU1MuVHJhbnNpdGlvbi50b1N0cmluZyh7XG4gIHByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIGR1cmF0aW9uOiAwLFxuICBlYXNpbmc6ICdsaW5lYXInXG59KTtcbmNvbnN0IGRlZmF1bHRBdHRyaWJ1dGVzID0ge1xuICByb2xlRGVzY3JpcHRpb246ICdzb3J0YWJsZSdcbn07XG5cbi8qXHJcbiAqIFdoZW4gdGhlIGluZGV4IG9mIGFuIGl0ZW0gY2hhbmdlcyB3aGlsZSBzb3J0aW5nLFxyXG4gKiB3ZSBuZWVkIHRvIHRlbXBvcmFyaWx5IGRpc2FibGUgdGhlIHRyYW5zZm9ybXNcclxuICovXG5cbmZ1bmN0aW9uIHVzZURlcml2ZWRUcmFuc2Zvcm0oX3JlZikge1xuICBsZXQge1xuICAgIGRpc2FibGVkLFxuICAgIGluZGV4LFxuICAgIG5vZGUsXG4gICAgcmVjdFxuICB9ID0gX3JlZjtcbiAgY29uc3QgW2Rlcml2ZWRUcmFuc2Zvcm0sIHNldERlcml2ZWR0cmFuc2Zvcm1dID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHByZXZpb3VzSW5kZXggPSBSZWFjdC51c2VSZWYoaW5kZXgpO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXNhYmxlZCAmJiBpbmRleCAhPT0gcHJldmlvdXNJbmRleC5jdXJyZW50ICYmIG5vZGUuY3VycmVudCkge1xuICAgICAgY29uc3QgaW5pdGlhbCA9IHJlY3QuY3VycmVudDtcblxuICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNvcmUuZ2V0Q2xpZW50UmVjdChub2RlLmN1cnJlbnQsIHtcbiAgICAgICAgICBpZ25vcmVUcmFuc2Zvcm06IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICAgIHg6IGluaXRpYWwubGVmdCAtIGN1cnJlbnQubGVmdCxcbiAgICAgICAgICB5OiBpbml0aWFsLnRvcCAtIGN1cnJlbnQudG9wLFxuICAgICAgICAgIHNjYWxlWDogaW5pdGlhbC53aWR0aCAvIGN1cnJlbnQud2lkdGgsXG4gICAgICAgICAgc2NhbGVZOiBpbml0aWFsLmhlaWdodCAvIGN1cnJlbnQuaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGRlbHRhLnggfHwgZGVsdGEueSkge1xuICAgICAgICAgIHNldERlcml2ZWR0cmFuc2Zvcm0oZGVsdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICE9PSBwcmV2aW91c0luZGV4LmN1cnJlbnQpIHtcbiAgICAgIHByZXZpb3VzSW5kZXguY3VycmVudCA9IGluZGV4O1xuICAgIH1cbiAgfSwgW2Rpc2FibGVkLCBpbmRleCwgbm9kZSwgcmVjdF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZXJpdmVkVHJhbnNmb3JtKSB7XG4gICAgICBzZXREZXJpdmVkdHJhbnNmb3JtKG51bGwpO1xuICAgIH1cbiAgfSwgW2Rlcml2ZWRUcmFuc2Zvcm1dKTtcbiAgcmV0dXJuIGRlcml2ZWRUcmFuc2Zvcm07XG59XG5cbmZ1bmN0aW9uIHVzZVNvcnRhYmxlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBhbmltYXRlTGF5b3V0Q2hhbmdlcyA9IGRlZmF1bHRBbmltYXRlTGF5b3V0Q2hhbmdlcyxcbiAgICBhdHRyaWJ1dGVzOiB1c2VyRGVmaW5lZEF0dHJpYnV0ZXMsXG4gICAgZGlzYWJsZWQ6IGxvY2FsRGlzYWJsZWQsXG4gICAgZGF0YTogY3VzdG9tRGF0YSxcbiAgICBnZXROZXdJbmRleCA9IGRlZmF1bHROZXdJbmRleEdldHRlcixcbiAgICBpZCxcbiAgICBzdHJhdGVneTogbG9jYWxTdHJhdGVneSxcbiAgICByZXNpemVPYnNlcnZlckNvbmZpZyxcbiAgICB0cmFuc2l0aW9uID0gZGVmYXVsdFRyYW5zaXRpb25cbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBjb250YWluZXJJZCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBkaXNhYmxlZDogZ2xvYmFsRGlzYWJsZWQsXG4gICAgZGlzYWJsZVRyYW5zZm9ybXMsXG4gICAgc29ydGVkUmVjdHMsXG4gICAgb3ZlckluZGV4LFxuICAgIHVzZURyYWdPdmVybGF5LFxuICAgIHN0cmF0ZWd5OiBnbG9iYWxTdHJhdGVneVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgZGlzYWJsZWQgPSBub3JtYWxpemVMb2NhbERpc2FibGVkKGxvY2FsRGlzYWJsZWQsIGdsb2JhbERpc2FibGVkKTtcbiAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKGlkKTtcbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBzb3J0YWJsZToge1xuICAgICAgY29udGFpbmVySWQsXG4gICAgICBpbmRleCxcbiAgICAgIGl0ZW1zXG4gICAgfSxcbiAgICAuLi5jdXN0b21EYXRhXG4gIH0pLCBbY29udGFpbmVySWQsIGN1c3RvbURhdGEsIGluZGV4LCBpdGVtc10pO1xuICBjb25zdCBpdGVtc0FmdGVyQ3VycmVudFNvcnRhYmxlID0gUmVhY3QudXNlTWVtbygoKSA9PiBpdGVtcy5zbGljZShpdGVtcy5pbmRleE9mKGlkKSksIFtpdGVtcywgaWRdKTtcbiAgY29uc3Qge1xuICAgIHJlY3QsXG4gICAgbm9kZSxcbiAgICBpc092ZXIsXG4gICAgc2V0Tm9kZVJlZjogc2V0RHJvcHBhYmxlTm9kZVJlZlxuICB9ID0gY29yZS51c2VEcm9wcGFibGUoe1xuICAgIGlkLFxuICAgIGRhdGEsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLmRyb3BwYWJsZSxcbiAgICByZXNpemVPYnNlcnZlckNvbmZpZzoge1xuICAgICAgdXBkYXRlTWVhc3VyZW1lbnRzRm9yOiBpdGVtc0FmdGVyQ3VycmVudFNvcnRhYmxlLFxuICAgICAgLi4ucmVzaXplT2JzZXJ2ZXJDb25maWdcbiAgICB9XG4gIH0pO1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRvckV2ZW50LFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgc2V0Tm9kZVJlZjogc2V0RHJhZ2dhYmxlTm9kZVJlZixcbiAgICBsaXN0ZW5lcnMsXG4gICAgaXNEcmFnZ2luZyxcbiAgICBvdmVyLFxuICAgIHNldEFjdGl2YXRvck5vZGVSZWYsXG4gICAgdHJhbnNmb3JtXG4gIH0gPSBjb3JlLnVzZURyYWdnYWJsZSh7XG4gICAgaWQsXG4gICAgZGF0YSxcbiAgICBhdHRyaWJ1dGVzOiB7IC4uLmRlZmF1bHRBdHRyaWJ1dGVzLFxuICAgICAgLi4udXNlckRlZmluZWRBdHRyaWJ1dGVzXG4gICAgfSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQuZHJhZ2dhYmxlXG4gIH0pO1xuICBjb25zdCBzZXROb2RlUmVmID0gdXRpbGl0aWVzLnVzZUNvbWJpbmVkUmVmcyhzZXREcm9wcGFibGVOb2RlUmVmLCBzZXREcmFnZ2FibGVOb2RlUmVmKTtcbiAgY29uc3QgaXNTb3J0aW5nID0gQm9vbGVhbihhY3RpdmUpO1xuICBjb25zdCBkaXNwbGFjZUl0ZW0gPSBpc1NvcnRpbmcgJiYgIWRpc2FibGVUcmFuc2Zvcm1zICYmIGlzVmFsaWRJbmRleChhY3RpdmVJbmRleCkgJiYgaXNWYWxpZEluZGV4KG92ZXJJbmRleCk7XG4gIGNvbnN0IHNob3VsZERpc3BsYWNlRHJhZ1NvdXJjZSA9ICF1c2VEcmFnT3ZlcmxheSAmJiBpc0RyYWdnaW5nO1xuICBjb25zdCBkcmFnU291cmNlRGlzcGxhY2VtZW50ID0gc2hvdWxkRGlzcGxhY2VEcmFnU291cmNlICYmIGRpc3BsYWNlSXRlbSA/IHRyYW5zZm9ybSA6IG51bGw7XG4gIGNvbnN0IHN0cmF0ZWd5ID0gbG9jYWxTdHJhdGVneSAhPSBudWxsID8gbG9jYWxTdHJhdGVneSA6IGdsb2JhbFN0cmF0ZWd5O1xuICBjb25zdCBmaW5hbFRyYW5zZm9ybSA9IGRpc3BsYWNlSXRlbSA/IGRyYWdTb3VyY2VEaXNwbGFjZW1lbnQgIT0gbnVsbCA/IGRyYWdTb3VyY2VEaXNwbGFjZW1lbnQgOiBzdHJhdGVneSh7XG4gICAgcmVjdHM6IHNvcnRlZFJlY3RzLFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIG92ZXJJbmRleCxcbiAgICBpbmRleFxuICB9KSA6IG51bGw7XG4gIGNvbnN0IG5ld0luZGV4ID0gaXNWYWxpZEluZGV4KGFjdGl2ZUluZGV4KSAmJiBpc1ZhbGlkSW5kZXgob3ZlckluZGV4KSA/IGdldE5ld0luZGV4KHtcbiAgICBpZCxcbiAgICBpdGVtcyxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBvdmVySW5kZXhcbiAgfSkgOiBpbmRleDtcbiAgY29uc3QgYWN0aXZlSWQgPSBhY3RpdmUgPT0gbnVsbCA/IHZvaWQgMCA6IGFjdGl2ZS5pZDtcbiAgY29uc3QgcHJldmlvdXMgPSBSZWFjdC51c2VSZWYoe1xuICAgIGFjdGl2ZUlkLFxuICAgIGl0ZW1zLFxuICAgIG5ld0luZGV4LFxuICAgIGNvbnRhaW5lcklkXG4gIH0pO1xuICBjb25zdCBpdGVtc0hhdmVDaGFuZ2VkID0gaXRlbXMgIT09IHByZXZpb3VzLmN1cnJlbnQuaXRlbXM7XG4gIGNvbnN0IHNob3VsZEFuaW1hdGVMYXlvdXRDaGFuZ2VzID0gYW5pbWF0ZUxheW91dENoYW5nZXMoe1xuICAgIGFjdGl2ZSxcbiAgICBjb250YWluZXJJZCxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGlzU29ydGluZyxcbiAgICBpZCxcbiAgICBpbmRleCxcbiAgICBpdGVtcyxcbiAgICBuZXdJbmRleDogcHJldmlvdXMuY3VycmVudC5uZXdJbmRleCxcbiAgICBwcmV2aW91c0l0ZW1zOiBwcmV2aW91cy5jdXJyZW50Lml0ZW1zLFxuICAgIHByZXZpb3VzQ29udGFpbmVySWQ6IHByZXZpb3VzLmN1cnJlbnQuY29udGFpbmVySWQsXG4gICAgdHJhbnNpdGlvbixcbiAgICB3YXNEcmFnZ2luZzogcHJldmlvdXMuY3VycmVudC5hY3RpdmVJZCAhPSBudWxsXG4gIH0pO1xuICBjb25zdCBkZXJpdmVkVHJhbnNmb3JtID0gdXNlRGVyaXZlZFRyYW5zZm9ybSh7XG4gICAgZGlzYWJsZWQ6ICFzaG91bGRBbmltYXRlTGF5b3V0Q2hhbmdlcyxcbiAgICBpbmRleCxcbiAgICBub2RlLFxuICAgIHJlY3RcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU29ydGluZyAmJiBwcmV2aW91cy5jdXJyZW50Lm5ld0luZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgcHJldmlvdXMuY3VycmVudC5uZXdJbmRleCA9IG5ld0luZGV4O1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXJJZCAhPT0gcHJldmlvdXMuY3VycmVudC5jb250YWluZXJJZCkge1xuICAgICAgcHJldmlvdXMuY3VycmVudC5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuICAgIH1cblxuICAgIGlmIChpdGVtcyAhPT0gcHJldmlvdXMuY3VycmVudC5pdGVtcykge1xuICAgICAgcHJldmlvdXMuY3VycmVudC5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgfSwgW2lzU29ydGluZywgbmV3SW5kZXgsIGNvbnRhaW5lcklkLCBpdGVtc10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVJZCA9PT0gcHJldmlvdXMuY3VycmVudC5hY3RpdmVJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVJZCAhPSBudWxsICYmIHByZXZpb3VzLmN1cnJlbnQuYWN0aXZlSWQgPT0gbnVsbCkge1xuICAgICAgcHJldmlvdXMuY3VycmVudC5hY3RpdmVJZCA9IGFjdGl2ZUlkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJldmlvdXMuY3VycmVudC5hY3RpdmVJZCA9IGFjdGl2ZUlkO1xuICAgIH0sIDUwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH0sIFthY3RpdmVJZF0pO1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGRhdGEsXG4gICAgcmVjdCxcbiAgICBpbmRleCxcbiAgICBuZXdJbmRleCxcbiAgICBpdGVtcyxcbiAgICBpc092ZXIsXG4gICAgaXNTb3J0aW5nLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgbGlzdGVuZXJzLFxuICAgIG5vZGUsXG4gICAgb3ZlckluZGV4LFxuICAgIG92ZXIsXG4gICAgc2V0Tm9kZVJlZixcbiAgICBzZXRBY3RpdmF0b3JOb2RlUmVmLFxuICAgIHNldERyb3BwYWJsZU5vZGVSZWYsXG4gICAgc2V0RHJhZ2dhYmxlTm9kZVJlZixcbiAgICB0cmFuc2Zvcm06IGRlcml2ZWRUcmFuc2Zvcm0gIT0gbnVsbCA/IGRlcml2ZWRUcmFuc2Zvcm0gOiBmaW5hbFRyYW5zZm9ybSxcbiAgICB0cmFuc2l0aW9uOiBnZXRUcmFuc2l0aW9uKClcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uKCkge1xuICAgIGlmICggLy8gVGVtcG9yYXJpbHkgZGlzYWJsZSB0cmFuc2l0aW9ucyBmb3IgYSBzaW5nbGUgZnJhbWUgdG8gc2V0IHVwIGRlcml2ZWQgdHJhbnNmb3Jtc1xuICAgIGRlcml2ZWRUcmFuc2Zvcm0gfHwgLy8gT3IgdG8gcHJldmVudCBpdGVtcyBqdW1waW5nIHRvIGJhY2sgdG8gdGhlaXIgXCJuZXdcIiBwb3NpdGlvbiB3aGVuIGl0ZW1zIGNoYW5nZVxuICAgIGl0ZW1zSGF2ZUNoYW5nZWQgJiYgcHJldmlvdXMuY3VycmVudC5uZXdJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlZFRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZERpc3BsYWNlRHJhZ1NvdXJjZSAmJiAhdXRpbGl0aWVzLmlzS2V5Ym9hcmRFdmVudChhY3RpdmF0b3JFdmVudCkgfHwgIXRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzU29ydGluZyB8fCBzaG91bGRBbmltYXRlTGF5b3V0Q2hhbmdlcykge1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy5DU1MuVHJhbnNpdGlvbi50b1N0cmluZyh7IC4uLnRyYW5zaXRpb24sXG4gICAgICAgIHByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxEaXNhYmxlZChsb2NhbERpc2FibGVkLCBnbG9iYWxEaXNhYmxlZCkge1xuICB2YXIgX2xvY2FsRGlzYWJsZWQkZHJhZ2dhLCBfbG9jYWxEaXNhYmxlZCRkcm9wcGE7XG5cbiAgaWYgKHR5cGVvZiBsb2NhbERpc2FibGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHJhZ2dhYmxlOiBsb2NhbERpc2FibGVkLFxuICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgIGRyb3BwYWJsZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkcmFnZ2FibGU6IChfbG9jYWxEaXNhYmxlZCRkcmFnZ2EgPSBsb2NhbERpc2FibGVkID09IG51bGwgPyB2b2lkIDAgOiBsb2NhbERpc2FibGVkLmRyYWdnYWJsZSkgIT0gbnVsbCA/IF9sb2NhbERpc2FibGVkJGRyYWdnYSA6IGdsb2JhbERpc2FibGVkLmRyYWdnYWJsZSxcbiAgICBkcm9wcGFibGU6IChfbG9jYWxEaXNhYmxlZCRkcm9wcGEgPSBsb2NhbERpc2FibGVkID09IG51bGwgPyB2b2lkIDAgOiBsb2NhbERpc2FibGVkLmRyb3BwYWJsZSkgIT0gbnVsbCA/IF9sb2NhbERpc2FibGVkJGRyb3BwYSA6IGdsb2JhbERpc2FibGVkLmRyb3BwYWJsZVxuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNTb3J0YWJsZURhdGEoZW50cnkpIHtcbiAgaWYgKCFlbnRyeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBlbnRyeS5kYXRhLmN1cnJlbnQ7XG5cbiAgaWYgKGRhdGEgJiYgJ3NvcnRhYmxlJyBpbiBkYXRhICYmIHR5cGVvZiBkYXRhLnNvcnRhYmxlID09PSAnb2JqZWN0JyAmJiAnY29udGFpbmVySWQnIGluIGRhdGEuc29ydGFibGUgJiYgJ2l0ZW1zJyBpbiBkYXRhLnNvcnRhYmxlICYmICdpbmRleCcgaW4gZGF0YS5zb3J0YWJsZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBkaXJlY3Rpb25zID0gW2NvcmUuS2V5Ym9hcmRDb2RlLkRvd24sIGNvcmUuS2V5Ym9hcmRDb2RlLlJpZ2h0LCBjb3JlLktleWJvYXJkQ29kZS5VcCwgY29yZS5LZXlib2FyZENvZGUuTGVmdF07XG5jb25zdCBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMgPSAoZXZlbnQsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBjb250ZXh0OiB7XG4gICAgICBhY3RpdmUsXG4gICAgICBjb2xsaXNpb25SZWN0LFxuICAgICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgICAgb3ZlcixcbiAgICAgIHNjcm9sbGFibGVBbmNlc3RvcnNcbiAgICB9XG4gIH0gPSBfcmVmO1xuXG4gIGlmIChkaXJlY3Rpb25zLmluY2x1ZGVzKGV2ZW50LmNvZGUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghYWN0aXZlIHx8ICFjb2xsaXNpb25SZWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRDb250YWluZXJzID0gW107XG4gICAgZHJvcHBhYmxlQ29udGFpbmVycy5nZXRFbmFibGVkKCkuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoIWVudHJ5IHx8IGVudHJ5ICE9IG51bGwgJiYgZW50cnkuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWN0ID0gZHJvcHBhYmxlUmVjdHMuZ2V0KGVudHJ5LmlkKTtcblxuICAgICAgaWYgKCFyZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgY29yZS5LZXlib2FyZENvZGUuRG93bjpcbiAgICAgICAgICBpZiAoY29sbGlzaW9uUmVjdC50b3AgPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgZmlsdGVyZWRDb250YWluZXJzLnB1c2goZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgY29yZS5LZXlib2FyZENvZGUuVXA6XG4gICAgICAgICAgaWYgKGNvbGxpc2lvblJlY3QudG9wID4gcmVjdC50b3ApIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVycy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGNvcmUuS2V5Ym9hcmRDb2RlLkxlZnQ6XG4gICAgICAgICAgaWYgKGNvbGxpc2lvblJlY3QubGVmdCA+IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgZmlsdGVyZWRDb250YWluZXJzLnB1c2goZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgY29yZS5LZXlib2FyZENvZGUuUmlnaHQ6XG4gICAgICAgICAgaWYgKGNvbGxpc2lvblJlY3QubGVmdCA8IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgZmlsdGVyZWRDb250YWluZXJzLnB1c2goZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbGxpc2lvbnMgPSBjb3JlLmNsb3Nlc3RDb3JuZXJzKHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNvbGxpc2lvblJlY3Q6IGNvbGxpc2lvblJlY3QsXG4gICAgICBkcm9wcGFibGVSZWN0cyxcbiAgICAgIGRyb3BwYWJsZUNvbnRhaW5lcnM6IGZpbHRlcmVkQ29udGFpbmVycyxcbiAgICAgIHBvaW50ZXJDb29yZGluYXRlczogbnVsbFxuICAgIH0pO1xuICAgIGxldCBjbG9zZXN0SWQgPSBjb3JlLmdldEZpcnN0Q29sbGlzaW9uKGNvbGxpc2lvbnMsICdpZCcpO1xuXG4gICAgaWYgKGNsb3Nlc3RJZCA9PT0gKG92ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG92ZXIuaWQpICYmIGNvbGxpc2lvbnMubGVuZ3RoID4gMSkge1xuICAgICAgY2xvc2VzdElkID0gY29sbGlzaW9uc1sxXS5pZDtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VzdElkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZURyb3BwYWJsZSA9IGRyb3BwYWJsZUNvbnRhaW5lcnMuZ2V0KGFjdGl2ZS5pZCk7XG4gICAgICBjb25zdCBuZXdEcm9wcGFibGUgPSBkcm9wcGFibGVDb250YWluZXJzLmdldChjbG9zZXN0SWQpO1xuICAgICAgY29uc3QgbmV3UmVjdCA9IG5ld0Ryb3BwYWJsZSA/IGRyb3BwYWJsZVJlY3RzLmdldChuZXdEcm9wcGFibGUuaWQpIDogbnVsbDtcbiAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXdEcm9wcGFibGUgPT0gbnVsbCA/IHZvaWQgMCA6IG5ld0Ryb3BwYWJsZS5ub2RlLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChuZXdOb2RlICYmIG5ld1JlY3QgJiYgYWN0aXZlRHJvcHBhYmxlICYmIG5ld0Ryb3BwYWJsZSkge1xuICAgICAgICBjb25zdCBuZXdTY3JvbGxBbmNlc3RvcnMgPSBjb3JlLmdldFNjcm9sbGFibGVBbmNlc3RvcnMobmV3Tm9kZSk7XG4gICAgICAgIGNvbnN0IGhhc0RpZmZlcmVudFNjcm9sbEFuY2VzdG9ycyA9IG5ld1Njcm9sbEFuY2VzdG9ycy5zb21lKChlbGVtZW50LCBpbmRleCkgPT4gc2Nyb2xsYWJsZUFuY2VzdG9yc1tpbmRleF0gIT09IGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBoYXNTYW1lQ29udGFpbmVyID0gaXNTYW1lQ29udGFpbmVyKGFjdGl2ZURyb3BwYWJsZSwgbmV3RHJvcHBhYmxlKTtcbiAgICAgICAgY29uc3QgaXNBZnRlckFjdGl2ZSA9IGlzQWZ0ZXIoYWN0aXZlRHJvcHBhYmxlLCBuZXdEcm9wcGFibGUpO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBoYXNEaWZmZXJlbnRTY3JvbGxBbmNlc3RvcnMgfHwgIWhhc1NhbWVDb250YWluZXIgPyB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgeDogaXNBZnRlckFjdGl2ZSA/IGNvbGxpc2lvblJlY3Qud2lkdGggLSBuZXdSZWN0LndpZHRoIDogMCxcbiAgICAgICAgICB5OiBpc0FmdGVyQWN0aXZlID8gY29sbGlzaW9uUmVjdC5oZWlnaHQgLSBuZXdSZWN0LmhlaWdodCA6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVjdENvb3JkaW5hdGVzID0ge1xuICAgICAgICAgIHg6IG5ld1JlY3QubGVmdCxcbiAgICAgICAgICB5OiBuZXdSZWN0LnRvcFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlcyA9IG9mZnNldC54ICYmIG9mZnNldC55ID8gcmVjdENvb3JkaW5hdGVzIDogdXRpbGl0aWVzLnN1YnRyYWN0KHJlY3RDb29yZGluYXRlcywgb2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIG5ld0Nvb3JkaW5hdGVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5mdW5jdGlvbiBpc1NhbWVDb250YWluZXIoYSwgYikge1xuICBpZiAoIWhhc1NvcnRhYmxlRGF0YShhKSB8fCAhaGFzU29ydGFibGVEYXRhKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGEuZGF0YS5jdXJyZW50LnNvcnRhYmxlLmNvbnRhaW5lcklkID09PSBiLmRhdGEuY3VycmVudC5zb3J0YWJsZS5jb250YWluZXJJZDtcbn1cblxuZnVuY3Rpb24gaXNBZnRlcihhLCBiKSB7XG4gIGlmICghaGFzU29ydGFibGVEYXRhKGEpIHx8ICFoYXNTb3J0YWJsZURhdGEoYikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWlzU2FtZUNvbnRhaW5lcihhLCBiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhLmRhdGEuY3VycmVudC5zb3J0YWJsZS5pbmRleCA8IGIuZGF0YS5jdXJyZW50LnNvcnRhYmxlLmluZGV4O1xufVxuXG5leHBvcnRzLlNvcnRhYmxlQ29udGV4dCA9IFNvcnRhYmxlQ29udGV4dDtcbmV4cG9ydHMuYXJyYXlNb3ZlID0gYXJyYXlNb3ZlO1xuZXhwb3J0cy5hcnJheVN3YXAgPSBhcnJheVN3YXA7XG5leHBvcnRzLmRlZmF1bHRBbmltYXRlTGF5b3V0Q2hhbmdlcyA9IGRlZmF1bHRBbmltYXRlTGF5b3V0Q2hhbmdlcztcbmV4cG9ydHMuZGVmYXVsdE5ld0luZGV4R2V0dGVyID0gZGVmYXVsdE5ld0luZGV4R2V0dGVyO1xuZXhwb3J0cy5oYXNTb3J0YWJsZURhdGEgPSBoYXNTb3J0YWJsZURhdGE7XG5leHBvcnRzLmhvcml6b250YWxMaXN0U29ydGluZ1N0cmF0ZWd5ID0gaG9yaXpvbnRhbExpc3RTb3J0aW5nU3RyYXRlZ3k7XG5leHBvcnRzLnJlY3RTb3J0aW5nU3RyYXRlZ3kgPSByZWN0U29ydGluZ1N0cmF0ZWd5O1xuZXhwb3J0cy5yZWN0U3dhcHBpbmdTdHJhdGVneSA9IHJlY3RTd2FwcGluZ1N0cmF0ZWd5O1xuZXhwb3J0cy5zb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMgPSBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXM7XG5leHBvcnRzLnVzZVNvcnRhYmxlID0gdXNlU29ydGFibGU7XG5leHBvcnRzLnZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneSA9IHZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvcnRhYmxlLmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zb3J0YWJsZS5janMucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NvcnRhYmxlLmNqcy5kZXZlbG9wbWVudC5qcycpXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRG5kQ29udGV4dCwgXHJcbiAgY2xvc2VzdENlbnRlciwgXHJcbiAgS2V5Ym9hcmRTZW5zb3IsIFxyXG4gIFBvaW50ZXJTZW5zb3IsIFxyXG4gIHVzZVNlbnNvciwgXHJcbiAgdXNlU2Vuc29ycyxcclxuICBEcmFnRW5kRXZlbnRcclxufSBmcm9tICdAZG5kLWtpdC9jb3JlJztcclxuaW1wb3J0IHtcclxuICBhcnJheU1vdmUsXHJcbiAgU29ydGFibGVDb250ZXh0LFxyXG4gIHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcclxuICB2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnO1xyXG5pbXBvcnQge1xyXG4gIHVzZVNvcnRhYmxlLFxyXG59IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcclxuaW1wb3J0IHsgQ1NTIH0gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcclxuXHJcbi8vIFRpcG9zIGRlIGJsb2NvcyBkaXNwb27DrXZlaXNcclxudHlwZSBCbG9ja1R5cGUgPSBcclxuICB8ICdwYXJhZ3JhcGgnIFxyXG4gIHwgJ2hlYWRpbmcxJyBcclxuICB8ICdoZWFkaW5nMicgXHJcbiAgfCAnaGVhZGluZzMnIFxyXG4gIHwgJ2hlYWRpbmc0JyBcclxuICB8ICdoZWFkaW5nNScgXHJcbiAgfCAnaGVhZGluZzYnXHJcbiAgfCAnaW1hZ2UnIFxyXG4gIHwgJ3ZpZGVvJ1xyXG4gIHwgJ3lvdXR1YmUnXHJcbiAgfCAnY29sdW1ucydcclxuICB8ICdsaW5rJztcclxuXHJcbmludGVyZmFjZSBCbG9jayB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBCbG9ja1R5cGU7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGF0dHJpYnV0ZXM/OiB7XHJcbiAgICBocmVmPzogc3RyaW5nO1xyXG4gICAgYWx0Pzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG4gICAgdmlkZW9JZD86IHN0cmluZztcclxuICAgIGNvbHVtbkNvdW50PzogbnVtYmVyO1xyXG4gICAgY29sdW1ucz86IEJsb2NrW11bXTsgLy8gQWdvcmEgY2FkYSBjb2x1bmEgY29udMOpbSB1bSBhcnJheSBkZSBibG9jb3NcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU29ydGFibGVCbG9ja1Byb3BzIHtcclxuICBibG9jazogQmxvY2s7XHJcbiAgb25VcGRhdGU6IChpZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpID0+IHZvaWQ7XHJcbiAgb25EZWxldGU6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sdW1uQmxvY2tNYW5hZ2VyUHJvcHMge1xyXG4gIGNvbHVtbkluZGV4OiBudW1iZXI7XHJcbiAgYmxvY2tzOiBCbG9ja1tdO1xyXG4gIG9uVXBkYXRlQmxvY2tzOiAoY29sdW1uSW5kZXg6IG51bWJlciwgYmxvY2tzOiBCbG9ja1tdKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vLyBDb21wb25lbnRlIHBhcmEgZ2VyZW5jaWFyIGJsb2NvcyBkZW50cm8gZGUgdW1hIGNvbHVuYVxyXG5jb25zdCBDb2x1bW5CbG9ja01hbmFnZXI6IFJlYWN0LkZDPENvbHVtbkJsb2NrTWFuYWdlclByb3BzPiA9ICh7IGNvbHVtbkluZGV4LCBibG9ja3MsIG9uVXBkYXRlQmxvY2tzIH0pID0+IHtcclxuICBjb25zdCBzZW5zb3JzID0gdXNlU2Vuc29ycyhcclxuICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yKSxcclxuICAgIHVzZVNlbnNvcihLZXlib2FyZFNlbnNvciwge1xyXG4gICAgICBjb29yZGluYXRlR2V0dGVyOiBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XHJcblxyXG4gIGNvbnN0IGFkZEJsb2NrVG9Db2x1bW4gPSAodHlwZTogQmxvY2tUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdCbG9jazogQmxvY2sgPSB7XHJcbiAgICAgIGlkOiBnZW5lcmF0ZUlkKCksXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IFsuLi5ibG9ja3MsIG5ld0Jsb2NrXTtcclxuICAgIG9uVXBkYXRlQmxvY2tzKGNvbHVtbkluZGV4LCB1cGRhdGVkQmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVDb2x1bW5CbG9jayA9IChpZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBibG9ja3MubWFwKGJsb2NrID0+XHJcbiAgICAgIGJsb2NrLmlkID09PSBpZFxyXG4gICAgICAgID8geyAuLi5ibG9jaywgY29udGVudCwgYXR0cmlidXRlczogeyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH0gfVxyXG4gICAgICAgIDogYmxvY2tcclxuICAgICk7XHJcbiAgICBvblVwZGF0ZUJsb2Nrcyhjb2x1bW5JbmRleCwgdXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29sdW1uQmxvY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IGJsb2Nrcy5maWx0ZXIoYmxvY2sgPT4gYmxvY2suaWQgIT09IGlkKTtcclxuICAgIG9uVXBkYXRlQmxvY2tzKGNvbHVtbkluZGV4LCB1cGRhdGVkQmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcclxuXHJcbiAgICBpZiAoYWN0aXZlLmlkICE9PSBvdmVyPy5pZCkge1xyXG4gICAgICBjb25zdCBvbGRJbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoYmxvY2sgPT4gYmxvY2suaWQgPT09IGFjdGl2ZS5pZCk7XHJcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gYmxvY2tzLmZpbmRJbmRleChibG9jayA9PiBibG9jay5pZCA9PT0gb3Zlcj8uaWQpO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IGFycmF5TW92ZShibG9ja3MsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgIG9uVXBkYXRlQmxvY2tzKGNvbHVtbkluZGV4LCB1cGRhdGVkQmxvY2tzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgey8qIFRvb2xiYXIgbWluaSBwYXJhIGFkaWNpb25hciBibG9jb3MgbmEgY29sdW5hICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YxZjNmNCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGFkY2UwJ1xyXG4gICAgICB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMTBweCcsIGZvbnRXZWlnaHQ6ICc2MDAnLCBtYXJnaW5Cb3R0b206ICc2cHgnLCBjb2xvcjogJyM1ZjYzNjgnIH19PlxyXG4gICAgICAgICAgQWRpY2lvbmFyIMOgIENvbHVuYSB7Y29sdW1uSW5kZXggKyAxfTpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAnNHB4JyB9fT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2tUb0NvbHVtbigncGFyYWdyYXBoJyl9IHN0eWxlPXttaW5pQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5OdIFRleHRvXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2tUb0NvbHVtbignaGVhZGluZzInKX0gc3R5bGU9e21pbmlCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIEgyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2tUb0NvbHVtbignaW1hZ2UnKX0gc3R5bGU9e21pbmlCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCflrzvuI9cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9ja1RvQ29sdW1uKCd5b3V0dWJlJyl9IHN0eWxlPXttaW5pQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5O6XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2tUb0NvbHVtbignbGluaycpfSBzdHlsZT17bWluaUJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAg8J+Ul1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIExpc3RhIGRlIGJsb2NvcyBuYSBjb2x1bmEgKi99XHJcbiAgICAgIDxEbmRDb250ZXh0XHJcbiAgICAgICAgc2Vuc29ycz17c2Vuc29yc31cclxuICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2Nsb3Nlc3RDZW50ZXJ9XHJcbiAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNvcnRhYmxlQ29udGV4dCBpdGVtcz17YmxvY2tzLm1hcChiID0+IGIuaWQpfSBzdHJhdGVneT17dmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICB7YmxvY2tzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjOWFhMGE2JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2RhZGNlMCcsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzExcHgnXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBBZGljaW9uZSBibG9jb3MgbmVzdGEgY29sdW5hXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgYmxvY2tzLm1hcCgoYmxvY2spID0+IChcclxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YmxvY2suaWR9XHJcbiAgICAgICAgICAgICAgICAgIGJsb2NrPXtibG9ja31cclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e3VwZGF0ZUNvbHVtbkJsb2NrfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlQ29sdW1uQmxvY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NvcnRhYmxlQ29udGV4dD5cclxuICAgICAgPC9EbmRDb250ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIENvbXBvbmVudGUgZGUgYmxvY28gYXJyYXN0w6F2ZWxcclxuY29uc3QgU29ydGFibGVCbG9jazogUmVhY3QuRkM8U29ydGFibGVCbG9ja1Byb3BzPiA9ICh7IGJsb2NrLCBvblVwZGF0ZSwgb25EZWxldGUgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGF0dHJpYnV0ZXMsXHJcbiAgICBsaXN0ZW5lcnMsXHJcbiAgICBzZXROb2RlUmVmLFxyXG4gICAgdHJhbnNmb3JtLFxyXG4gICAgdHJhbnNpdGlvbixcclxuICAgIGlzRHJhZ2dpbmcsXHJcbiAgfSA9IHVzZVNvcnRhYmxlKHsgaWQ6IGJsb2NrLmlkIH0pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIHRyYW5zZm9ybTogQ1NTLlRyYW5zZm9ybS50b1N0cmluZyh0cmFuc2Zvcm0pLFxyXG4gICAgdHJhbnNpdGlvbixcclxuICAgIG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwLjUgOiAxLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRlbnRDaGFuZ2UgPSAoY29udGVudDogc3RyaW5nLCBhdHRycz86IGFueSkgPT4ge1xyXG4gICAgb25VcGRhdGUoYmxvY2suaWQsIGNvbnRlbnQsIGF0dHJzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCbG9ja0NvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJsb2NrLnR5cGUpIHtcclxuICAgICAgY2FzZSAncGFyYWdyYXBoJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKiBUb29sYmFyIGRlIGZvcm1hdGHDp8OjbyAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBnYXA6ICc0cHgnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzRweCcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2UwZTBlMCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dG9vbGJhckJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJOZWdyaXRvXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkI8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Rvb2xiYXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiSXTDoWxpY29cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxlbT5JPC9lbT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXJsaW5lJyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Rvb2xiYXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3VibGluaGFkb1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHU+VTwvdT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBwcm9tcHQoJ0RpZ2l0ZSBhIFVSTCBkbyBsaW5rOicpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NyZWF0ZUxpbmsnLCBmYWxzZSwgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0b29sYmFyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkluc2VyaXIgTGlua1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg8J+Ul1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxyXG4gICAgICAgICAgICAgIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBoYW5kbGVDb250ZW50Q2hhbmdlKGUudGFyZ2V0LmlubmVySFRNTCl9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBibG9jay5jb250ZW50IHx8ICdEaWdpdGUgc2V1IHRleHRvIGFxdWkuLi4nIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS42J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICBcclxuICAgICAgY2FzZSAnaGVhZGluZzEnOlxyXG4gICAgICBjYXNlICdoZWFkaW5nMic6XHJcbiAgICAgIGNhc2UgJ2hlYWRpbmczJzpcclxuICAgICAgY2FzZSAnaGVhZGluZzQnOlxyXG4gICAgICBjYXNlICdoZWFkaW5nNSc6XHJcbiAgICAgIGNhc2UgJ2hlYWRpbmc2JzpcclxuICAgICAgICBjb25zdCBIZWFkaW5nVGFnID0gYmxvY2sudHlwZSBhcyBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICA8SGVhZGluZ1RhZ1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxyXG4gICAgICAgICAgICAgIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBoYW5kbGVDb250ZW50Q2hhbmdlKGUudGFyZ2V0LmlubmVySFRNTCl9XHJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBibG9jay5jb250ZW50IHx8IGBUw610dWxvICR7YmxvY2sudHlwZS5zbGljZSgtMSl9YCB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2UwZTBlMCcsIGJvcmRlclJhZGl1czogJzRweCcsIHBhZGRpbmc6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICB7YmxvY2suYXR0cmlidXRlcz8uc3JjID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgc3JjPXtibG9jay5hdHRyaWJ1dGVzLnNyY30gXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvY2suYXR0cmlidXRlcz8uYWx0IHx8ICcnfSBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+TmVuaHVtYSBpbWFnZW0gc2VsZWNpb25hZGE8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb250ZW50Q2hhbmdlKGJsb2NrLmNvbnRlbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ibG9jay5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc4cHgnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXh0byBhbHRlcm5hdGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay5hdHRyaWJ1dGVzPy5hbHQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYmxvY2suYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnIFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSAneW91dHViZSc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgcGFkZGluZzogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJRCBkbyB2w61kZW8gZG8gWW91VHViZSAoZXg6IGRRdzR3OVdnWGNRKVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmxvY2suYXR0cmlidXRlcz8udmlkZW9JZCB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmJsb2NrLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtibG9jay5hdHRyaWJ1dGVzPy52aWRlb0lkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHBhZGRpbmdCb3R0b206ICc1Ni4yNSUnLCBoZWlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2Jsb2NrLmF0dHJpYnV0ZXMudmlkZW9JZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjYXNlICdjb2x1bW5zJzpcclxuICAgICAgICBjb25zdCBoYW5kbGVDb2x1bW5CbG9ja3NVcGRhdGUgPSAoY29sdW1uSW5kZXg6IG51bWJlciwgY29sdW1uQmxvY2tzOiBCbG9ja1tdKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ29sdW1ucyA9IFsuLi4oYmxvY2suYXR0cmlidXRlcz8uY29sdW1ucyB8fCBbXSldO1xyXG4gICAgICAgICAgdXBkYXRlZENvbHVtbnNbY29sdW1uSW5kZXhdID0gY29sdW1uQmxvY2tzO1xyXG4gICAgICAgICAgaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgIC4uLmJsb2NrLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IHVwZGF0ZWRDb2x1bW5zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiAnNTAwJywgbWFyZ2luQm90dG9tOiAnNHB4JywgZGlzcGxheTogJ2Jsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgTsO6bWVybyBkZSBjb2x1bmFzOlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmF0dHJpYnV0ZXM/LmNvbHVtbkNvdW50IHx8IDJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkNvdW50ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluaWNpYWxpemEgY29sdW5hcyBjb21vIGFycmF5cyBkZSBibG9jb3MgdmF6aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IEFycmF5KGNvbHVtbkNvdW50KS5maWxsKG51bGwpLm1hcCgoKSA9PiBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5ibG9jay5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHggOHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Mn0+MiBDb2x1bmFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezN9PjMgQ29sdW5hczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs0fT40IENvbHVuYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsIFxyXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgke2Jsb2NrLmF0dHJpYnV0ZXM/LmNvbHVtbkNvdW50IHx8IDJ9LCAxZnIpYCxcclxuICAgICAgICAgICAgICAgIGdhcDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7QXJyYXkoYmxvY2suYXR0cmlidXRlcz8uY29sdW1uQ291bnQgfHwgMikuZmlsbChudWxsKS5tYXAoKF8sIGNvbEluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjZTllY2VmJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxODBweCdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkJsb2NrTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg9e2NvbEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtibG9jay5hdHRyaWJ1dGVzPy5jb2x1bW5zPy5bY29sSW5kZXhdIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVCbG9ja3M9e2hhbmRsZUNvbHVtbkJsb2Nrc1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRleHRvIGRvIGxpbmtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbnRlbnRDaGFuZ2UoZS50YXJnZXQudmFsdWUsIGJsb2NrLmF0dHJpYnV0ZXMpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JywgXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJywgXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVUkwgZG8gbGlua1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmxvY2suYXR0cmlidXRlcz8uaHJlZiB8fCAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmJsb2NrLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnIFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtibG9jay5jb250ZW50ICYmIGJsb2NrLmF0dHJpYnV0ZXM/LmhyZWYgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YmxvY2suYXR0cmlidXRlcy5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+VGlwbyBkZSBibG9jbyBuw6NvIHN1cG9ydGFkbzwvZGl2PjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3NldE5vZGVSZWZ9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgY2xhc3NOYW1lPVwic29ydGFibGUtYmxvY2tcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IFxyXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjZjBmMGYwJywgXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JywgXHJcbiAgICAgICAgbWFyZ2luOiAnOHB4IDAnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICB9fT5cclxuICAgICAgICB7LyogQmFycmEgZGUgY29udHJvbGUgKi99XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlMGUwZTAnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4IDhweCAwIDAnXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzhweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB7Li4uYXR0cmlidXRlc31cclxuICAgICAgICAgICAgICB7Li4ubGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdncmFiJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZjNzU3ZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKLruKLrlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNmM3NTdkJywgZm9udFdlaWdodDogJzUwMCcgfX0+XHJcbiAgICAgICAgICAgICAge2Jsb2NrLnR5cGUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGJsb2NrLmlkKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2RjMzU0NScsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFeGNsdWlyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogQ29udGXDumRvIGRvIGJsb2NvICovfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEycHgnIH19PlxyXG4gICAgICAgICAge3JlbmRlckJsb2NrQ29udGVudCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBDb21wb25lbnRlIHByaW5jaXBhbCBkbyBlZGl0b3JcclxuY29uc3QgVmlzdWFsQ29tcG9zZXI6IFJlYWN0LkZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgcHJvcGVydHksIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbYmxvY2tzLCBzZXRCbG9ja3NdID0gdXNlU3RhdGU8QmxvY2tbXT4oKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSByZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdIHx8ICcnO1xyXG4gICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdbJykpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ29udmVydGUgSFRNTCBleGlzdGVudGUgcGFyYSB1bSBibG9jbyBkZSBwYXLDoWdyYWZvXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgaWQ6ICdpbml0aWFsJyxcclxuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnIGFzIEJsb2NrVHlwZSxcclxuICAgICAgICAgIGNvbnRlbnQ6IHZhbHVlXHJcbiAgICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUmVtb3ZpZG86IG7Do28gcHJlY2lzYW1vcyBtYWlzIGRlIGRlYm91bmNlIG91IGluZGljYWRvciBkZSBzYWx2YW1lbnRvXHJcblxyXG4gIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKFxyXG4gICAgdXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IpLFxyXG4gICAgdXNlU2Vuc29yKEtleWJvYXJkU2Vuc29yLCB7XHJcbiAgICAgIGNvb3JkaW5hdGVHZXR0ZXI6IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuXHJcbiAgY29uc3QgYWRkQmxvY2sgPSAodHlwZTogQmxvY2tUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdCbG9jazogQmxvY2sgPSB7XHJcbiAgICAgIGlkOiBnZW5lcmF0ZUlkKCksXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB0eXBlID09PSAnY29sdW1ucycgPyB7IGNvbHVtbkNvdW50OiAyLCBjb2x1bW5zOiBbW10sIFtdXSB9IDoge31cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBbLi4uYmxvY2tzLCBuZXdCbG9ja107XHJcbiAgICBzZXRCbG9ja3ModXBkYXRlZEJsb2Nrcyk7XHJcbiAgICB1cGRhdGVWYWx1ZSh1cGRhdGVkQmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVCbG9jayA9IChpZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBibG9ja3MubWFwKGJsb2NrID0+XHJcbiAgICAgIGJsb2NrLmlkID09PSBpZFxyXG4gICAgICAgID8geyAuLi5ibG9jaywgY29udGVudCwgYXR0cmlidXRlczogeyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH0gfVxyXG4gICAgICAgIDogYmxvY2tcclxuICAgICk7XHJcbiAgICBzZXRCbG9ja3ModXBkYXRlZEJsb2Nrcyk7XHJcbiAgICB1cGRhdGVWYWx1ZSh1cGRhdGVkQmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVCbG9jayA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQmxvY2tzID0gYmxvY2tzLmZpbHRlcihibG9jayA9PiBibG9jay5pZCAhPT0gaWQpO1xyXG4gICAgc2V0QmxvY2tzKHVwZGF0ZWRCbG9ja3MpO1xyXG4gICAgdXBkYXRlVmFsdWUodXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VDYWxsYmFjaygodXBkYXRlZEJsb2NrczogQmxvY2tbXSkgPT4ge1xyXG4gICAgLy8gQXBlbmFzIGNvbnZlcnRlIGUgYXR1YWxpemEgbyB2YWxvciBpbWVkaWF0YW1lbnRlLCBzZW0gZGVib3VuY2VcclxuICAgIC8vIE8gQWRtaW5KUyBuw6NvIGlyw6Egc2FsdmFyIGF1dG9tYXRpY2FtZW50ZSwgYXBlbmFzIHF1YW5kbyBvIHVzdcOhcmlvIGNsaWNhciBlbSBcIlNhbHZhclwiXHJcbiAgICBjb25zdCBodG1sID0gYmxvY2tzVG9IdG1sKHVwZGF0ZWRCbG9ja3MpO1xyXG4gICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgaHRtbCk7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UhCBDb250ZcO6ZG8gYXR1YWxpemFkbyBsb2NhbG1lbnRlIChuw6NvIHNhbHZvIG5vIGJhbmNvIGFpbmRhKScpO1xyXG4gIH0sIFtwcm9wZXJ0eS5uYW1lLCBvbkNoYW5nZV0pO1xyXG5cclxuICAvLyBSZW1vdmlkbzogY2xlYW51cCBkbyB0aW1lciBuw6NvIMOpIG1haXMgbmVjZXNzw6FyaW9cclxuXHJcbiAgY29uc3QgYmxvY2tzVG9IdG1sID0gKGJsb2NrczogQmxvY2tbXSk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYmxvY2tzLm1hcChibG9jayA9PiB7XHJcbiAgICAgIHN3aXRjaCAoYmxvY2sudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XHJcbiAgICAgICAgICByZXR1cm4gYDxwPiR7YmxvY2suY29udGVudH08L3A+YDtcclxuICAgICAgICBjYXNlICdoZWFkaW5nMSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxoMT4ke2Jsb2NrLmNvbnRlbnR9PC9oMT5gO1xyXG4gICAgICAgIGNhc2UgJ2hlYWRpbmcyJzpcclxuICAgICAgICAgIHJldHVybiBgPGgyPiR7YmxvY2suY29udGVudH08L2gyPmA7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZzMnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aDM+JHtibG9jay5jb250ZW50fTwvaDM+YDtcclxuICAgICAgICBjYXNlICdoZWFkaW5nNCc6XHJcbiAgICAgICAgICByZXR1cm4gYDxoND4ke2Jsb2NrLmNvbnRlbnR9PC9oND5gO1xyXG4gICAgICAgIGNhc2UgJ2hlYWRpbmc1JzpcclxuICAgICAgICAgIHJldHVybiBgPGg1PiR7YmxvY2suY29udGVudH08L2g1PmA7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZzYnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aDY+JHtibG9jay5jb250ZW50fTwvaDY+YDtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtibG9jay5hdHRyaWJ1dGVzPy5zcmMgfHwgJyd9XCIgYWx0PVwiJHtibG9jay5hdHRyaWJ1dGVzPy5hbHQgfHwgJyd9XCIgLz5gO1xyXG4gICAgICAgIGNhc2UgJ3lvdXR1YmUnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7YmxvY2suYXR0cmlidXRlcz8udmlkZW9JZH1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcclxuICAgICAgICBjYXNlICdjb2x1bW5zJzpcclxuICAgICAgICAgIGNvbnN0IGNvbHVtbkh0bWwgPSBibG9jay5hdHRyaWJ1dGVzPy5jb2x1bW5zPy5tYXAoY29sdW1uQmxvY2tzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uQ29udGVudCA9IGJsb2Nrc1RvSHRtbChjb2x1bW5CbG9ja3MgfHwgW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjb2x1bW5cIj4ke2NvbHVtbkNvbnRlbnR9PC9kaXY+YDtcclxuICAgICAgICAgIH0pLmpvaW4oJycpIHx8ICcnO1xyXG4gICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwiZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtibG9jay5hdHRyaWJ1dGVzPy5jb2x1bW5Db3VudCB8fCAyfSwgMWZyKTsgZ2FwOiAxNnB4O1wiPiR7Y29sdW1uSHRtbH08L2Rpdj5gO1xyXG4gICAgICAgIGNhc2UgJ2xpbmsnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHtibG9jay5hdHRyaWJ1dGVzPy5ocmVmIHx8ICcnfVwiPiR7YmxvY2suY29udGVudH08L2E+YDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9KS5qb2luKCdcXG4nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcclxuXHJcbiAgICBpZiAoYWN0aXZlLmlkICE9PSBvdmVyPy5pZCkge1xyXG4gICAgICBjb25zdCBvbGRJbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoYmxvY2sgPT4gYmxvY2suaWQgPT09IGFjdGl2ZS5pZCk7XHJcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gYmxvY2tzLmZpbmRJbmRleChibG9jayA9PiBibG9jay5pZCA9PT0gb3Zlcj8uaWQpO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IGFycmF5TW92ZShibG9ja3MsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgIHNldEJsb2Nrcyh1cGRhdGVkQmxvY2tzKTtcclxuICAgICAgdXBkYXRlVmFsdWUodXBkYXRlZEJsb2Nrcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgey8qIEF2aXNvIHNvYnJlIHNhbHZhbWVudG8gbWFudWFsICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzhweCAxNnB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZDFlY2YxJyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2JlZTVlYicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzBjNTQ2MCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGdhcDogJzhweCdcclxuICAgICAgfX0+XHJcbiAgICAgICAgPHNwYW4+8J+SoTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5GYcOnYSBzdWFzIGVkacOnw7VlcyBub3JtYWxtZW50ZS4gQ2xpcXVlIGVtIFwiU2FsdmFyXCIgbm8gZmluYWwgZGEgcMOhZ2luYSBwYXJhIHBlcnNpc3RpciBhcyBtdWRhbsOnYXMuPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUb29sYmFyIGRlIGFkaWNpb25hciBibG9jb3MgKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2UwZTBlMCdcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogJzAgMCAxMnB4IDAnLCBmb250U2l6ZTogJzE0cHgnLCBmb250V2VpZ2h0OiAnNjAwJyB9fT5cclxuICAgICAgICAgIPCfjqggRWRpdG9yIFZpc3VhbCAtIEFkaWNpb25hciBCbG9jb3NcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBnYXA6ICc4cHgnIH19PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygncGFyYWdyYXBoJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCfk50gUGFyw6FncmFmb1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCdoZWFkaW5nMScpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICBIMSBUw610dWxvIDFcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnaGVhZGluZzInKX0gc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgSDIgVMOtdHVsbyAyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2hlYWRpbmczJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIEgzIFTDrXR1bG8gM1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCdpbWFnZScpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5a877iPIEltYWdlbVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCd5b3V0dWJlJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCfk7ogWW91VHViZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCdjb2x1bW5zJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCfk5AgQ29sdW5hc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCdsaW5rJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCflJcgTGlua1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEVkaXRvciBkZSBibG9jb3MgKi99XHJcbiAgICAgIDxEbmRDb250ZXh0XHJcbiAgICAgICAgc2Vuc29ycz17c2Vuc29yc31cclxuICAgICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2Nsb3Nlc3RDZW50ZXJ9XHJcbiAgICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNvcnRhYmxlQ29udGV4dCBpdGVtcz17YmxvY2tzLm1hcChiID0+IGIuaWQpfSBzdHJhdGVneT17dmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMjAwcHgnIH19PlxyXG4gICAgICAgICAgICB7YmxvY2tzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjNmM3NTdkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBkYXNoZWQgI2RlZTJlNidcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxwPkFkaWNpb25lIGJsb2NvcyBwYXJhIGNvbWXDp2FyIGEgY3JpYXIgc2V1IGNvbnRlw7pkbzwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+QXJyYXN0ZSBvcyBibG9jb3MgcGFyYSByZW9yZGVuYXI8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgYmxvY2tzLm1hcCgoYmxvY2spID0+IChcclxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YmxvY2suaWR9XHJcbiAgICAgICAgICAgICAgICAgIGJsb2NrPXtibG9ja31cclxuICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e3VwZGF0ZUJsb2NrfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17ZGVsZXRlQmxvY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NvcnRhYmxlQ29udGV4dD5cclxuICAgICAgPC9EbmRDb250ZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIHBhZGRpbmc6ICc4cHggMTJweCcsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZWUyZTYnLFxyXG4gIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzJ1xyXG59O1xyXG5cclxuY29uc3QgdG9vbGJhckJ1dHRvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gIHBhZGRpbmc6ICc0cHggOHB4JyxcclxuICBib3JkZXI6ICcxcHggc29saWQgI2RlZTJlNicsXHJcbiAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgZm9udFNpemU6ICcxMnB4JyxcclxuICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICBtaW5XaWR0aDogJzI4cHgnLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC4ycydcclxufTtcclxuXHJcbmNvbnN0IG1pbmlCdXR0b25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICBwYWRkaW5nOiAnNHB4IDZweCcsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNkMWQ1ZGInLFxyXG4gIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXHJcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpc3VhbENvbXBvc2VyO1xyXG4iLCJpbXBvcnQgeyBEcm9wWm9uZSwgRHJvcFpvbmVJdGVtLCBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBFZGl0ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZDtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KTtcbiAgICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSk7XG4gICAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGl0IG1lYW5zIG1lYW5zIHRoYXQgc29tZW9uZSBoaXQgc2F2ZSBhbmQgbmV3IGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGZsaWVzVG9VcGxvYWQgc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgICAgIGlmICgodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSBvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiAhb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggIT09IG9yaWdpbmFsS2V5Lmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHNldE9yaWdpbmFsS2V5KGtleSk7XG4gICAgICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKFtdKTtcbiAgICAgICAgfVxuICAgIH0sIFtrZXksIG9yaWdpbmFsS2V5XSk7XG4gICAgY29uc3Qgb25VcGxvYWQgPSAoZmlsZXMpID0+IHtcbiAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcyk7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgbnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihzaW5nbGVLZXkpO1xuICAgICAgICBjb25zdCBmaWxlc1RvRGVsZXRlID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSkgfHwgW107XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgubWFwKChjdXJyZW50UGF0aCwgaSkgPT4gKGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsKSk7XG4gICAgICAgICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSwgWy4uLmZpbGVzVG9EZWxldGUsIGluZGV4XSk7XG4gICAgICAgICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZSwgeyBvbkNoYW5nZTogb25VcGxvYWQsIG11bHRpcGxlOiBjdXN0b20ubXVsdGlwbGUsIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzLFxuICAgICAgICAgICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgICAgICAgfSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSksXG4gICAgICAgICFjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIHBhdGggJiYgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmIGZpbGUgIT09IG51bGwgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGZpbGVuYW1lOiBrZXksIHNyYzogcGF0aCwgb25SZW1vdmU6IGhhbmRsZVJlbW92ZSB9KSksXG4gICAgICAgIGN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYga2V5Lmxlbmd0aCAmJiBwYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGtleS5tYXAoKHNpbmdsZUtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgcmVtb3ZlIGl0ZW1zIHdlIHNldCBvbmx5IHBhdGggaW5kZXggdG8gbnVsbHMuXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBtYWludGFpbiBhbGwgdGhlIGluZGV4ZXMuIFNvIGhlcmUgd2Ugc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZCBhbmQgZGlzcGxheSBvbmx5IHdoYXQgd2FzIGxlZnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF07XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsga2V5OiBzaW5nbGVLZXksIGZpbGVuYW1lOiBzaW5nbGVLZXksIHNyYzogcGF0aFtpbmRleF0sIG9uUmVtb3ZlOiAoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpIH0pKSA6ICcnO1xuICAgICAgICB9KSkpIDogJycpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAgICdhdWRpby9hYWMnLFxuICAgICdhdWRpby9taWRpJyxcbiAgICAnYXVkaW8veC1taWRpJyxcbiAgICAnYXVkaW8vbXBlZycsXG4gICAgJ2F1ZGlvL29nZycsXG4gICAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICAgJ2F1ZGlvL29wdXMnLFxuICAgICdhdWRpby93YXYnLFxuICAgICdhdWRpby93ZWJtJyxcbiAgICAnYXVkaW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgICAndmlkZW8vbXBlZycsXG4gICAgJ3ZpZGVvL29nZycsXG4gICAgJ3ZpZGVvL21wMnQnLFxuICAgICd2aWRlby93ZWJtJyxcbiAgICAndmlkZW8vM2dwcCcsXG4gICAgJ3ZpZGVvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICAgJ2ltYWdlL2JtcCcsXG4gICAgJ2ltYWdlL2dpZicsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9wbmcnLFxuICAgICdpbWFnZS9zdmcreG1sJyxcbiAgICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgICAnaW1hZ2UvdGlmZicsXG4gICAgJ2ltYWdlL3dlYnAnLFxuXTtcbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl07XG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl07XG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgICAndGV4dC9jc3MnLFxuICAgICd0ZXh0L2NzdicsXG4gICAgJ3RleHQvaHRtbCcsXG4gICAgJ3RleHQvY2FsZW5kYXInLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvcGxhaW4nLFxuICAgICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICd0ZXh0L3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgICAnYXBwbGljYXRpb24vcGRmJyxcbl07XG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgICAnZm9udC9vdGYnLFxuICAgICdmb250L3R0ZicsXG4gICAgJ2ZvbnQvd29mZicsXG4gICAgJ2ZvbnQvd29mZjInLFxuXTtcbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgICAnYXBwbGljYXRpb24veC1zaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgICAndm5kLnZpc2lvJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAgIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAgIC4uLlRleHRNaW1lVHlwZXMsXG4gICAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgICAuLi5Gb250TWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuXTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXVkaW9NaW1lVHlwZXMsIEltYWdlTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlLmpzJztcbmNvbnN0IFNpbmdsZUZpbGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhdGgsIG1pbWVUeXBlLCB3aWR0aCB9ID0gcHJvcHM7XG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwYXRoLCBzdHlsZTogeyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfSwgYWx0OiBuYW1lIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWltZVR5cGUgJiYgQXVkaW9NaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCB7IGNvbnRyb2xzOiB0cnVlLCBzcmM6IHBhdGggfSxcbiAgICAgICAgICAgICAgICBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYXVkaW9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyYWNrXCIsIHsga2luZDogXCJjYXB0aW9uc1wiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwiYVwiLCBocmVmOiBwYXRoLCBtbDogXCJkZWZhdWx0XCIsIHNpemU6IFwic21cIiwgcm91bmRlZDogdHJ1ZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJEb2N1bWVudERvd25sb2FkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1yOiBcImRlZmF1bHRcIiB9KSxcbiAgICAgICAgICAgIG5hbWUpKSk7XG59O1xuY29uc3QgRmlsZSA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgbGV0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgICAgICYmIGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSk7XG4gICAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBwYXRoOiBwYXRoLCBuYW1lOiBuYW1lLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZSB9KSk7XG4gICAgfVxuICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBjdXN0b20ub3B0cy5iYXNlVXJsIHx8ICcnO1xuICAgICAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBrZXk6IHNpbmdsZVBhdGgsIHBhdGg6IHNpbmdsZVBhdGgsIG5hbWU6IG5hbWVbaW5kZXhdLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZVtpbmRleF0gfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IDEwMCwgLi4ucHJvcHMgfSkpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IFNob3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogXCIxMDAlXCIsIC4uLnByb3BzIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hvdztcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IEN1c3RvbVVwbG9hZEVkaXQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkN1c3RvbVVwbG9hZEVkaXQgPSBDdXN0b21VcGxvYWRFZGl0XG5pbXBvcnQgVGh1bWIgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGh1bWInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlRodW1iID0gVGh1bWJcbmltcG9ydCBHcm91cGVkUHJpY2VzIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyb3VwZWQtcHJpY2VzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Hcm91cGVkUHJpY2VzID0gR3JvdXBlZFByaWNlc1xuaW1wb3J0IEdyb3VwZWREaXNwb25pYmlsaXRpZXMgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZ3JvdXBlZC1kaXNwb25pYmlsaXRpZXMnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkdyb3VwZWREaXNwb25pYmlsaXRpZXMgPSBHcm91cGVkRGlzcG9uaWJpbGl0aWVzXG5pbXBvcnQgU2hvd1Byb2R1Y3RJbWFnZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaG93UHJvZHVjdEltYWdlID0gU2hvd1Byb2R1Y3RJbWFnZVxuaW1wb3J0IEZvcm1hdHRlZERhdGUgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZm9ybWF0dGVkLWRhdGUnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkZvcm1hdHRlZERhdGUgPSBGb3JtYXR0ZWREYXRlXG5pbXBvcnQgUmVkaXJlY3REYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcmVkaXJlY3QtZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5SZWRpcmVjdERhc2hib2FyZCA9IFJlZGlyZWN0RGFzaGJvYXJkXG5pbXBvcnQgU3luY1ByaWNlc0FjdGlvbiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU3luY1ByaWNlc0FjdGlvbiA9IFN5bmNQcmljZXNBY3Rpb25cbmltcG9ydCBDYXRlZ29yaWFTZWxlY3RSZWFsIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2NhdGVnb3JpYS1zZWxlY3QtcmVhbCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ2F0ZWdvcmlhU2VsZWN0UmVhbCA9IENhdGVnb3JpYVNlbGVjdFJlYWxcbmltcG9ydCBQZXJpb2RvU2VsZWN0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3BlcmlvZG8tc2VsZWN0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5QZXJpb2RvU2VsZWN0ID0gUGVyaW9kb1NlbGVjdFxuaW1wb3J0IFRpbnlNQ0VFZGl0b3IgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlueW1jZS1lZGl0b3InXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlRpbnlNQ0VFZGl0b3IgPSBUaW55TUNFRWRpdG9yXG5pbXBvcnQgUXVpbGxFZGl0b3IgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcXVpbGwtZWRpdG9yJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5RdWlsbEVkaXRvciA9IFF1aWxsRWRpdG9yXG5pbXBvcnQgQmxvY2tCdWlsZGVyIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Jsb2NrLWJ1aWxkZXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkJsb2NrQnVpbGRlciA9IEJsb2NrQnVpbGRlclxuaW1wb3J0IFRpcHRhcEVkaXRvciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aXB0YXAtZWRpdG9yJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UaXB0YXBFZGl0b3IgPSBUaXB0YXBFZGl0b3JcbmltcG9ydCBWaXN1YWxDb21wb3NlciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy92aXN1YWwtY29tcG9zZXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlZpc3VhbENvbXBvc2VyID0gVmlzdWFsQ29tcG9zZXJcbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnQiXSwibmFtZXMiOlsiVXBsb2FkRWRpdCIsInByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaHRtbEZvciIsInByb3BlcnR5IiwibmFtZSIsImlkIiwidHlwZSIsIlRodW1iIiwicmVjb3JkIiwidXJsIiwicGFyYW1zIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkdyb3VwZWRQcmljZXMiLCJvbkNoYW5nZSIsInByZWNvVW5pY28iLCJwcmVjb01lZGlvIiwicHJlY29HcmFuZGUiLCJwcmVjb0luZGl2aWR1YWwiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJCb3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1yIiwibWIiLCJGb3JtR3JvdXAiLCJMYWJlbCIsIklucHV0Iiwic3RlcCIsIkdyb3VwZWREaXNwb25pYmlsaXRpZXMiLCJqYW50YXIiLCJkZWxpdmVyeSIsImhhbmRsZUNoYW5nZUphbnRhciIsImUiLCJjaGVja2VkIiwiaGFuZGxlQ2hhbmdlRGVsaXZlcnkiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiQ2hlY2tCb3giLCJtYXJnaW5SaWdodCIsIlNob3dQcm9kdWN0SW1hZ2UiLCJmaWVsZE5hbWUiLCJtZWRpYUtleSIsImFsdEtleSIsIm1lZGlhUGF0aCIsImFsdFRleHQiLCJmdWxsVXJsIiwic3RhcnRzV2l0aCIsImxhYmVsIiwibXQiLCJlbmRzV2l0aCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29udHJvbHMiLCJjb2xvciIsIkZvcm1hdHRlZERhdGUiLCJyYXdWYWx1ZSIsInBhdGgiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiUmVkaXJlY3REYXNoYm9hcmQiLCJuYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwidXNlRWZmZWN0IiwiU3luY1ByaWNlc0FjdGlvbiIsIm5vdGljZSIsIm1lc3NhZ2UiLCJhbGVydCIsImhhbmRsZUJhY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsInZhcmlhbnQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiQnV0dG9uIiwib25DbGljayIsImljb24iLCJDYXRlZ29yaWFTZWxlY3RSZWFsIiwiY2F0ZWdvcmlhcyIsInNldENhdGVnb3JpYXMiLCJ1c2VTdGF0ZSIsIm5vdmFDYXRlZ29yaWEiLCJzZXROb3ZhQ2F0ZWdvcmlhIiwic2VsZWN0ZWRDYXRlZ29yaWFzIiwic2V0U2VsZWN0ZWRDYXRlZ29yaWFzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaENhdGVnb3JpYXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRWYWx1ZSIsImNhdGVnb3JpYXNJbmRleGFkYXMiLCJpbmRleCIsInVuZGVmaW5lZCIsInB1c2giLCJjYW1pbmhvcyIsInBvcHVsYXRlZCIsImZvckVhY2giLCJjYW1pbmhvIiwiZmluZCIsIkFycmF5IiwiaXNBcnJheSIsInByb2Nlc3NlZElkcyIsIm1hcCIsIml0ZW0iLCJTdHJpbmciLCJfaWQiLCJmaWx0ZXIiLCJ1bmlxdWVJZHMiLCJTZXQiLCJjIiwibm9tZSIsIm1hdGNoZXMiLCJzZWxlY3RlZElkIiwic29tZSIsImNhdCIsImlzRWRpdE1vZGUiLCJPYmplY3QiLCJrZXlzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJyZWNvcmRzIiwiY2F0ZWdvcmlhc0Zvcm1hdGFkYXMiLCJjb3IiLCJlcnJvciIsImhhbmRsZUNyZWF0ZUNhdGVnb3JpYSIsInRyaW0iLCJwYXlsb2FkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJuZXdDYXRlZ29yaWEiLCJwcmV2IiwibmV3U2VsZWN0ZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9ybVJlc3BvbnNlIiwiRXJyb3IiLCJoYW5kbGVDYXRlZ29yaWFDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImNhdGVnb3JpYUlkIiwiaXNTZWxlY3RlZCIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwicCIsImJhY2tncm91bmRDb2xvciIsIlRleHQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiZmxleCIsImRpc2FibGVkIiwiYm9yZGVyIiwiY2F0ZWdvcmlhIiwib3ZlcmZsb3dZIiwic3RvcFByb3BhZ2F0aW9uIiwibWwiLCJQZXJpb2RvU2VsZWN0Iiwic2VsZWN0ZWRQZXJpb2RvIiwic2V0U2VsZWN0ZWRQZXJpb2RvIiwiaGFuZGxlUGVyaW9kb0NoYW5nZSIsInBlcmlvZG8iLCJwZXJpb2RvcyIsIm1pbldpZHRoIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0IiwiYm9yZGVyQ29sb3IiLCJvbk1vdXNlTGVhdmUiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiVGlueU1DRUVkaXRvciIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsImVkaXRvclJlZiIsInVzZVJlZiIsInRleHRhcmVhUmVmIiwiY3VycmVudCIsInRpbnltY2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsIm9ubG9hZCIsImluaXRpYWxpemVUaW55TUNFIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwiaW5pdCIsIm1lbnViYXIiLCJwbHVnaW5zIiwidG9vbGJhciIsImNvbnRlbnRfc3R5bGUiLCJpbWFnZXNfdXBsb2FkX2hhbmRsZXIiLCJibG9iSW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTUFYX1NJWkUiLCJmaWxlU2l6ZSIsImJsb2IiLCJzaXplIiwic2l6ZU1CIiwidG9GaXhlZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJiYXNlNjQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsInNldHVwIiwiZWRpdG9yIiwib24iLCJuZXdDb250ZW50IiwiZ2V0Q29udGVudCIsImluaXRpYWxDb250ZW50IiwicmVmIiwibWluSGVpZ2h0IiwiZGVmYXVsdFZhbHVlIiwiUXVpbGxFZGl0b3IiLCJxdWlsbFJlZiIsImNvbnRhaW5lclJlZiIsIlF1aWxsIiwibGluayIsInJlbCIsImhyZWYiLCJpbml0aWFsaXplUXVpbGwiLCJxdWlsbCIsInRoZW1lIiwibW9kdWxlcyIsImdldE1vZHVsZSIsImFkZEhhbmRsZXIiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsImNsaWNrIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJyYW5nZSIsImdldFNlbGVjdGlvbiIsImluc2VydEVtYmVkIiwiaHRtbCIsInJvb3QiLCJpbm5lckhUTUwiLCJCbG9ja0J1aWxkZXIiLCJibG9ja3MiLCJzZXRCbG9ja3MiLCJwYXJzZWQiLCJwYXJzZSIsIm5vdyIsInRvU3RyaW5nIiwiYWRkQmxvY2siLCJuZXdCbG9jayIsIm5ld0Jsb2NrcyIsInVwZGF0ZUNvbnRlbnQiLCJ1cGRhdGVCbG9jayIsInVwZGF0ZXMiLCJibG9jayIsImRlbGV0ZUJsb2NrIiwibW92ZUJsb2NrIiwiZGlyZWN0aW9uIiwiZmluZEluZGV4IiwibmV3SW5kZXgiLCJzcGxpdCIsImpvaW4iLCJ1cGxvYWRJbWFnZSIsInJlbmRlckJsb2NrIiwiY29tbW9uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJiIiwiYWNjZXB0IiwiVGV4dEFyZWEiLCJyb3dzIiwibWFyZ2luVG9wIiwiVGlwdGFwRWRpdG9yIiwic2V0RWRpdG9yIiwibG9hZFRpcHRhcCIsImRlc3Ryb3kiLCJxdWVyeVNlbGVjdG9yIiwiRWRpdG9yIiwibG9hZFNjcmlwdCIsImluaXRpYWxpemVUaXB0YXAiLCJlZGl0b3JFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdFZGl0b3IiLCJlbGVtZW50IiwiZXh0ZW5zaW9ucyIsIlN0YXJ0ZXJLaXQiLCJJbWFnZSIsImNvbmZpZ3VyZSIsIkhUTUxBdHRyaWJ1dGVzIiwiY2xhc3MiLCJMaW5rIiwib3Blbk9uQ2xpY2siLCJUZXh0QWxpZ24iLCJ0eXBlcyIsIkhpZ2hsaWdodCIsIlVuZGVybGluZSIsIm9uVXBkYXRlIiwiZ2V0SFRNTCIsImFkZEltYWdlIiwiY2hhaW4iLCJmb2N1cyIsInNldEltYWdlIiwicnVuIiwiYWRkTGluayIsInByb21wdCIsInNldExpbmsiLCJUb29sYmFyQnV0dG9uIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIlNlcGFyYXRvciIsInRvZ2dsZUJvbGQiLCJ0b2dnbGVJdGFsaWMiLCJ0b2dnbGVVbmRlcmxpbmUiLCJ0b2dnbGVIaWdobGlnaHQiLCJ0b2dnbGVIZWFkaW5nIiwibGV2ZWwiLCJzZXRUZXh0QWxpZ24iLCJ0b2dnbGVCdWxsZXRMaXN0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJ0b2dnbGVCbG9ja3F1b3RlIiwidW5kbyIsInJlZG8iLCJyZXF1aXJlJCQwIiwiZGlzdE1vZHVsZSIsIl9pbnRlcm9wRGVmYXVsdCIsIlJlYWN0X19kZWZhdWx0IiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwiQ29sdW1uQmxvY2tNYW5hZ2VyIiwiY29sdW1uSW5kZXgiLCJvblVwZGF0ZUJsb2NrcyIsInNlbnNvcnMiLCJ1c2VTZW5zb3JzIiwidXNlU2Vuc29yIiwiUG9pbnRlclNlbnNvciIsIktleWJvYXJkU2Vuc29yIiwiY29vcmRpbmF0ZUdldHRlciIsInNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyIsImdlbmVyYXRlSWQiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyIiwiYWRkQmxvY2tUb0NvbHVtbiIsImF0dHJpYnV0ZXMiLCJ1cGRhdGVkQmxvY2tzIiwidXBkYXRlQ29sdW1uQmxvY2siLCJkZWxldGVDb2x1bW5CbG9jayIsImhhbmRsZURyYWdFbmQiLCJhY3RpdmUiLCJvdmVyIiwib2xkSW5kZXgiLCJhcnJheU1vdmUiLCJtaW5pQnV0dG9uU3R5bGUiLCJEbmRDb250ZXh0IiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwiY2xvc2VzdENlbnRlciIsIm9uRHJhZ0VuZCIsIlNvcnRhYmxlQ29udGV4dCIsIml0ZW1zIiwic3RyYXRlZ3kiLCJ2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3kiLCJTb3J0YWJsZUJsb2NrIiwib25EZWxldGUiLCJsaXN0ZW5lcnMiLCJzZXROb2RlUmVmIiwidHJhbnNmb3JtIiwiaXNEcmFnZ2luZyIsInVzZVNvcnRhYmxlIiwiQ1NTIiwiVHJhbnNmb3JtIiwib3BhY2l0eSIsImhhbmRsZUNvbnRlbnRDaGFuZ2UiLCJhdHRycyIsInJlbmRlckJsb2NrQ29udGVudCIsIm9uTW91c2VEb3duIiwiZXhlY0NvbW1hbmQiLCJ0b29sYmFyQnV0dG9uU3R5bGUiLCJ0aXRsZSIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uQmx1ciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwib3V0bGluZSIsImxpbmVIZWlnaHQiLCJIZWFkaW5nVGFnIiwic2xpY2UiLCJtYXJnaW4iLCJ2aWRlb0lkIiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwidG9wIiwibGVmdCIsImFsbG93RnVsbFNjcmVlbiIsImhhbmRsZUNvbHVtbkJsb2Nrc1VwZGF0ZSIsImNvbHVtbkJsb2NrcyIsInVwZGF0ZWRDb2x1bW5zIiwiY29sdW1ucyIsImNvbHVtbkNvdW50IiwicGFyc2VJbnQiLCJmaWxsIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIl8iLCJjb2xJbmRleCIsImJvcmRlckJvdHRvbSIsIl9leHRlbmRzIiwidG9VcHBlckNhc2UiLCJiYWNrZ3JvdW5kIiwiVmlzdWFsQ29tcG9zZXIiLCJ1cGRhdGVWYWx1ZSIsImJsb2Nrc1RvSHRtbCIsImNvbHVtbkh0bWwiLCJjb2x1bW5Db250ZW50IiwiYnV0dG9uU3R5bGUiLCJ3aGl0ZVNwYWNlIiwidXNlVHJhbnNsYXRpb24iLCJmbGF0IiwiRHJvcFpvbmUiLCJEcm9wWm9uZUl0ZW0iLCJJY29uIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiQ3VzdG9tVXBsb2FkRWRpdCIsIlVwbG9hZEVkaXRDb21wb25lbnQiLCJVcGxvYWRMaXN0Q29tcG9uZW50IiwiVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0VBQUE7RUFDQTtFQUNBO0VBSUEsTUFBTUEsVUFBdUMsR0FBSUMsS0FBSyxpQkFDcERDLHdCQUFBLENBQUFDLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxlQUNFRCx3QkFBQSxDQUFBQyxhQUFBLENBQUEsT0FBQSxFQUFBO0VBQU9DLEVBQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDSSxRQUFRLENBQUNDO0VBQUssQ0FBQSxFQUFDLFFBQWEsQ0FBQyxlQUNuREosd0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE9BQUEsRUFBQTtFQUFPSSxFQUFBQSxFQUFFLEVBQUVOLEtBQUssQ0FBQ0ksUUFBUSxDQUFDQyxJQUFLO0VBQUNFLEVBQUFBLElBQUksRUFBQyxNQUFNO0VBQUNGLEVBQUFBLElBQUksRUFBQztFQUFNLENBQUUsQ0FDdEQsQ0FDTjs7RUNYRDtFQUNBO0VBQ0E7RUFJQSxTQUFTRyxLQUFLQSxDQUFDUixLQUFLLEVBQUU7SUFDcEIsTUFBTTtFQUFFUyxJQUFBQTtFQUFPLEdBQUMsR0FBR1QsS0FBSztJQUN4QixNQUFNVSxHQUFHLEdBQUcsQ0FBNERELHlEQUFBQSxFQUFBQSxNQUFNLENBQUNFLE1BQU0sQ0FBQ0Qs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QUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7Ozs7S0FJN0MsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7RUFDNUMsS0FBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7RUFDbkUsT0FBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7RUFDL0IsU0FBUTs7O0VBR1IsT0FBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzs7OztLQUlsRCxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtFQUM3QyxLQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDOzs7S0FHN0MsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7RUFDbEQsS0FBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzs7O0tBR3ZELE9BQU8sU0FBUyxPQUFPLEdBQUc7RUFDNUIsS0FBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtFQUMvRCxPQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDOzs7T0FHM0MsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7RUFDL0MsT0FBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7RUFFcEQsSUFBRztFQUNILEVBQUM7O0dB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MURtWCxPQUFPLENBQUNDLGNBQWMsQ0FBQ3RXLG1CQUFtQixHQUFHQSxtQkFBbUI7RUFFaEVxVyxPQUFPLENBQUNDLGNBQWMsQ0FBQzlRLGFBQWEsR0FBR0EsYUFBYTtFQUVwRDZRLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDOVAsYUFBYSxHQUFHQSxhQUFhO0VBRXBENlAsT0FBTyxDQUFDQyxjQUFjLENBQUM5TSxXQUFXLEdBQUdBLFdBQVc7RUFFaEQ2TSxPQUFPLENBQUNDLGNBQWMsQ0FBQ3JMLFlBQVksR0FBR0EsWUFBWTtFQUVsRG9MLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDdkosWUFBWSxHQUFHQSxZQUFZO0VBRWxEc0osT0FBTyxDQUFDQyxjQUFjLENBQUNiLGNBQWMsR0FBR0EsY0FBYztFQUV0RFksT0FBTyxDQUFDQyxjQUFjLENBQUNFLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUgsT0FBTyxDQUFDQyxjQUFjLENBQUNHLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUosT0FBTyxDQUFDQyxjQUFjLENBQUNJLG1CQUFtQixHQUFHQSxJQUFtQjs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMywyNCwyNSwyNiwyN119
