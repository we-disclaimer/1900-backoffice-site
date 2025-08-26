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
              alert('Erro ao fazer upload da imagem');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGVyaW9kby1zZWxlY3QudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlueW1jZS1lZGl0b3IudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcXVpbGwtZWRpdG9yLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Jsb2NrLWJ1aWxkZXIudHN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlwdGFwLWVkaXRvci50c3giLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvdXRpbGl0aWVzL2Rpc3QvdXRpbGl0aWVzLmNqcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC91dGlsaXRpZXMvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9hY2Nlc3NpYmlsaXR5L2Rpc3QvYWNjZXNzaWJpbGl0eS5janMuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvYWNjZXNzaWJpbGl0eS9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BkbmQta2l0L2NvcmUvZGlzdC9jb3JlLmNqcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZG5kLWtpdC9jb3JlL2Rpc3QvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvc29ydGFibGUvZGlzdC9zb3J0YWJsZS5janMuZGV2ZWxvcG1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGRuZC1raXQvc29ydGFibGUvZGlzdC9pbmRleC5qcyIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3Zpc3VhbC1jb21wb3Nlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50LmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFVwbG9hZEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMucHJvcGVydHkubmFtZX0+VXBsb2FkPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD17cHJvcHMucHJvcGVydHkubmFtZX0gdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRFZGl0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVGh1bWIocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7cmVjb3JkLnBhcmFtcy51cmx9YDtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiA8c3Bhbj5ObyBpbWFnZTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXtyZWNvcmQucGFyYW1zLmFsdCB8fCAnVGh1bWJuYWlsJ31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGh1bWIucHJvcFR5cGVzID0ge1xyXG4gIHJlY29yZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5mdW5jdGlvbiBHcm91cGVkUHJpY2VzKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJlY29VbmljbyA9IHJlY29yZC5wYXJhbXMucHJlY29VbmljbyB8fCAnJztcclxuICBjb25zdCBwcmVjb01lZGlvID0gcmVjb3JkLnBhcmFtcy5wcmVjb01lZGlvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvR3JhbmRlID0gcmVjb3JkLnBhcmFtcy5wcmVjb0dyYW5kZSB8fCAnJztcclxuICBjb25zdCBwcmVjb0luZGl2aWR1YWwgPSByZWNvcmQucGFyYW1zLnByZWNvSW5kaXZpZHVhbCB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD1cIjEwcHhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyDDmm5pY288L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29Vbmljb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29VbmljbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBNw6lkaW88L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29NZWRpb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29NZWRpbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBHcmFuZGU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29HcmFuZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvR3JhbmRlJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gSW5kaXZpZHVhbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0luZGl2aWR1YWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvSW5kaXZpZHVhbCcpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRQcmljZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExhYmVsLCBDaGVja0JveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBqYW50YXIgPSByZWNvcmQucGFyYW1zLmphbnRhciA/PyBmYWxzZTtcclxuICBjb25zdCBkZWxpdmVyeSA9IHJlY29yZC5wYXJhbXMuZGVsaXZlcnkgPz8gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUphbnRhciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2phbnRhcicsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlbGl2ZXJ5ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnZGVsaXZlcnknLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgVGlwb3MgZGUgY2FyZMOhcGlvc1xyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwibGdcIiBmbGV4V3JhcD1cIndyYXBcIiBtYj1cIjM2cHhcIj5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiamFudGFyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlkPVwiamFudGFyXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtqYW50YXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUphbnRhcn1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBEaXNwb27DrXZlbCBwYXJhIEphbnRhclxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjdXJzb3I9XCJwb2ludGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEaXNwb27DrXZlbCBwYXJhIERlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpc3BvbmliaWxpdGllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgU2hvd1Byb2R1Y3RJbWFnZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgaWYgKCFyZWNvcmQgfHwgIXByb3BlcnR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGROYW1lID0gcHJvcGVydHkubmFtZTsgLy8gbWVkaWFDYXBhLCBtZWRpYVByaW5jaXBhbCwgZXRjLlxyXG4gIGNvbnN0IG1lZGlhS2V5ID0gYCR7ZmllbGROYW1lfVVybGA7IC8vIGJhbm5lclVybCwgZXRjLlxyXG4gIGNvbnN0IGFsdEtleSA9IGAke2ZpZWxkTmFtZX1BbHRgO1xyXG5cclxuICBjb25zdCBtZWRpYVBhdGggPSByZWNvcmQucGFyYW1zPy5bbWVkaWFLZXldO1xyXG4gIGNvbnN0IGFsdFRleHQgPSByZWNvcmQucGFyYW1zPy5bYWx0S2V5XSB8fCAnJztcclxuXHJcbiAgLy8gVmVyaWZpY2FyIHNlIGEgVVJMIGrDoSDDqSBjb21wbGV0YSBvdSBzZSBwcmVjaXNhIHNlciBjb25jYXRlbmFkYVxyXG4gIGNvbnN0IGZ1bGxVcmwgPSBtZWRpYVBhdGhcclxuICAgID8gKG1lZGlhUGF0aC5zdGFydHNXaXRoKCdodHRwJykgXHJcbiAgICAgICAgPyBtZWRpYVBhdGggXHJcbiAgICAgICAgOiBgaHR0cHM6Ly9iYWNrb2ZmaWNlLWFwcC1hc3NldHMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHttZWRpYVBhdGh9YClcclxuICAgIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbWI9XCIzNnB4XCI+XHJcbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWwgfHwgJ0ltYWdlbSd9PC9MYWJlbD5cclxuICAgICAge2Z1bGxVcmwgPyAoXHJcbiAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIHtmdWxsVXJsLmVuZHNXaXRoKCcubXA0JykgPyAoXHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHNyYz17ZnVsbFVybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtmdWxsVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17YWx0VGV4dCB8fCBgSW1hZ2VtIC0gJHtmaWVsZE5hbWV9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthbHRUZXh0ICYmIChcclxuICAgICAgICAgICAgPEJveCBtdD1cInNtXCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgICAgICB7YWx0VGV4dH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgY29sb3I9XCJncmV5NjBcIj5cclxuICAgICAgICAgIHthbHRUZXh0IHx8ICdOZW5odW0gYXJxdWl2byBkaXNwb27DrXZlbCd9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1Byb2R1Y3RJbWFnZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgRm9ybWF0dGVkRGF0ZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgY29uc3QgcmF3VmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdO1xyXG5cclxuICBpZiAoIXJhd1ZhbHVlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJhd1ZhbHVlKTtcclxuICBjb25zdCBmb3JtYXR0ZWQgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcbiAgY29uc3QgdGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCdwdC1CUicsIHtcclxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAge2Zvcm1hdHRlZH1cclxuICAgICAgeycgJ31cclxuICAgICAge3RpbWV9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkRGF0ZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdERhc2hib2FyZCgpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgnL2FkbWluL3Jlc291cmNlcy9Qcm9kdXRvcycpOyAvLyA8LSBzdWJzdGl0dWEgcGVsbyBzZXUgcmVzb3VyY2UgSUQgc2UgZm9yIGRpZmVyZW50ZVxyXG4gIH0sIFtuYXZpZ2F0ZV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3REYXNoYm9hcmQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIEJ1dHRvbiwgSWNvbixcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IFN5bmNQcmljZXNBY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGljZSB9ID0gcHJvcHM7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobm90aWNlICYmIG5vdGljZS5tZXNzYWdlKSB7XHJcbiAgICAgIC8vIFZvY8OqIHBvZGUgdXNhciBhIG5vdGlmaWNhw6fDo28gZG8gQWRtaW5KUywgbWFzIGFxdWkgc8OzIHVtIGFsZXJ0IHNpbXBsZXNcclxuICAgICAgYWxlcnQobm90aWNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtub3RpY2VdKTtcclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSB2b2x0YXIgcGFyYSBhIGxpc3RhZ2VtIGRlIHByb2R1dG9zXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIC8vIFNlIHF1aXNlciBpciBwYXJhIHVtYSByb3RhIGZpeGE6XHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1Byb2R1dG9zJztcclxuICAgIC8vIE91IHPDsyB2b2x0YXIgbmEgbmF2ZWdhw6fDo286XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdmFyaWFudD1cInN1Y2Nlc3NcIiBwYWRkaW5nPVwibGdcIj5cclxuXHJcbiAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgbWI9XCIzNnB4XCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJywgbWFyZ2luQm90dG9tOiAnM3JlbScgfX0+XHJcbiAgICAgICAgQSBhw6fDo28gZm9pIGV4ZWN1dGFkYSBjb20gc3VjZXNzbyBlbSB0b2RvcyBvcyBwcm9kdXRvcyBzZWxlY2lvbmFkb3MuXHJcbiAgICAgICAgVmVyaWZpcXVlIHNlIG9zIHByZcOnb3MgZm9yYW0gYXR1YWxpemFkb3MgY29ycmV0YW1lbnRlLlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgIGljb249XCJwbHVzXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsnPCBWb2x0YXIgcGFyYSBsaXN0YWdlbSd9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5bmNQcmljZXNBY3Rpb247XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRm9ybUdyb3VwLCBcclxuICBMYWJlbCwgXHJcbiAgQnV0dG9uLCBcclxuICBJbnB1dCxcclxuICBCb3gsXHJcbiAgVGV4dFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIENhdGVnb3JpYSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbm9tZTogc3RyaW5nO1xyXG4gIGNvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcmlhU2VsZWN0UmVhbDogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgb25DaGFuZ2UsIHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2NhdGVnb3JpYXMsIHNldENhdGVnb3JpYXNdID0gdXNlU3RhdGU8Q2F0ZWdvcmlhW10+KFtdKTtcclxuICBjb25zdCBbbm92YUNhdGVnb3JpYSwgc2V0Tm92YUNhdGVnb3JpYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcmlhcywgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDYXJyZWdhciBjYXRlZ29yaWFzIGV4aXN0ZW50ZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWFzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBJbmljaWFsaXphciBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcyAtIEVYRUNVVEFSIEFQRU5BUyBVTUEgVkVaXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWFzLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBBZ3VhcmRhciBjYXRlZ29yaWFzIGNhcnJlZ2FyZW1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ/CflIQgVXNlRWZmZWN0IC0gSW5pY2lhbGl6YW5kbyBjYXRlZ29yaWFzIHNlbGVjaW9uYWRhcycpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflIQgQ2F0ZWdvcmlhcyBjYXJyZWdhZGFzOicsIGNhdGVnb3JpYXMubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFJlY29yZCBjb21wbGV0byAoRlVMTCBEVU1QKTonLCBKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SEIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coICcgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsJyAsICByZWNvcmQ/LnBhcmFtcyk7ICAgIFxyXG4gICAgLy8gTk9WTzogQ29udmVydGVyIG9iamV0byBpbmRleGFkbyBkbyBBZG1pbkpTIHBhcmEgYXJyYXlcclxuICAgIGxldCBjdXJyZW50VmFsdWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBWZXJpZmljYXIgc2UgYXMgY2F0ZWdvcmlhcyBlc3TDo28gbm8gZm9ybWF0byAuMCwgLjEsIC4yIChvYmpldG8gaW5kZXhhZG8pXHJcbiAgICBpZiAocmVjb3JkPy5wYXJhbXMpIHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmlhc0luZGV4YWRhcyA9IFtdO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBcclxuICAgICAgLy8gQnVzY2FyIHRvZGFzIGFzIGNoYXZlcyBxdWUgY29tZcOnYW0gY29tICdjYXRlZ29yaWFzLidcclxuICAgICAgd2hpbGUgKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2F0ZWdvcmlhc0luZGV4YWRhcy5wdXNoKHJlY29yZC5wYXJhbXNbYGNhdGVnb3JpYXMuJHtpbmRleH1gXSk7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGNhdGVnb3JpYXNJbmRleGFkYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhdGVnb3JpYXNJbmRleGFkYXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gQ2F0ZWdvcmlhcyBlbmNvbnRyYWRhcyBjb21vIG9iamV0byBpbmRleGFkbzonLCBjYXRlZ29yaWFzSW5kZXhhZGFzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBjb21vIG9iamV0byBpbmRleGFkbywgdGVudGFyIGNhbWluaG9zIG5vcm1haXNcclxuICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGNhbWluaG9zID0gW1xyXG4gICAgICAgIHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5bcHJvcGVydHkubmFtZV0sXHJcbiAgICAgICAgcmVjb3JkPy5wYXJhbXM/LmNhdGVnb3JpYXMsXHJcbiAgICAgICAgcmVjb3JkPy5wb3B1bGF0ZWQ/Lltwcm9wZXJ0eS5uYW1lXSxcclxuICAgICAgICByZWNvcmQ/LnBvcHVsYXRlZD8uY2F0ZWdvcmlhcyxcclxuICAgICAgXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIFRlc3RhbmRvIGNhbWluaG9zIHRyYWRpY2lvbmFpczonKTtcclxuICAgICAgY2FtaW5ob3MuZm9yRWFjaCgoY2FtaW5obywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgICBDYW1pbmhvICR7aW5kZXh9OmAsIGNhbWluaG8pO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IGNhbWluaG9zLmZpbmQoY2FtaW5obyA9PiBjYW1pbmhvICE9PSB1bmRlZmluZWQgJiYgY2FtaW5obyAhPT0gbnVsbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCfwn5SNIFZhbG9yIEZJTkFMIEVTQ09MSElETzonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlwbyBkbyB2YWxvcjonLCB0eXBlb2YgY3VycmVudFZhbHVlLCBBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFZhbHVlICYmIEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBQcm9jZXNzYXIgSURzIHByaW1laXJvLCBkZXBvaXMgcmVtb3ZlciBkdXBsaWNhdGFzXHJcbiAgICAgIGNvbnN0IHByb2Nlc3NlZElkcyA9IGN1cnJlbnRWYWx1ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/CflI0gUHJvY2Vzc2FuZG8gaXRlbTonLCBpdGVtLCB0eXBlb2YgaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaXRlbS5faWQgfHwgaXRlbS5pZCB8fCBpdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5SNICAg4oaSIElEIGV4dHJhw61kbyBkbyBvYmpldG86JywgaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuZmlsdGVyKGlkID0+IGlkICYmIGlkICE9PSAnbnVsbCcgJiYgaWQgIT09ICd1bmRlZmluZWQnKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlbW92ZXIgZHVwbGljYXRhc1xyXG4gICAgICBjb25zdCB1bmlxdWVJZHMgPSBbLi4ubmV3IFNldChwcm9jZXNzZWRJZHMpXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyDDum5pY29zIHByb2Nlc3NhZG9zOicsIHVuaXF1ZUlkcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIENhdGVnb3JpYXMgZGlzcG9uw612ZWlzIHBhcmEgbWF0Y2hpbmc6JywgY2F0ZWdvcmlhcy5tYXAoYyA9PiAoeyBpZDogYy5faWQsIG5vbWU6IGMubm9tZSB9KSkpO1xyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2FyIHNlIGFsZ3VtIElEIGJhdGVcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHVuaXF1ZUlkcy5maWx0ZXIoc2VsZWN0ZWRJZCA9PiBcclxuICAgICAgICBjYXRlZ29yaWFzLnNvbWUoY2F0ID0+IGNhdC5faWQgPT09IHNlbGVjdGVkSWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIElEcyBxdWUgZmF6ZW0gbWF0Y2g6JywgbWF0Y2hlcyk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpYXModW5pcXVlSWRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfwn5SNIE5lbmh1bWEgY2F0ZWdvcmlhIHNlbGVjaW9uYWRhIGVuY29udHJhZGEnKTtcclxuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKFtdKTtcclxuICAgIH1cclxuICB9LCBbY2F0ZWdvcmlhcy5sZW5ndGhdKTsgLy8gTVVET1U6IFPDsyByb2RhIHF1YW5kbyBjYXRlZ29yaWFzIHPDo28gY2FycmVnYWRhc1xyXG5cclxuICAvLyBEZXRlY3RhciBzZSBlc3TDoSBubyBtb2RvIGRlIGVkacOnw6NvIG91IGNyaWHDp8Ojb1xyXG4gIGNvbnN0IGlzRWRpdE1vZGUgPSByZWNvcmQ/LmlkIHx8IHJlY29yZD8ucGFyYW1zPy5pZCB8fCAocmVjb3JkICYmIE9iamVjdC5rZXlzKHJlY29yZC5wYXJhbXMgfHwge30pLmxlbmd0aCA+IDEpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIE1vZG8gZGV0ZWN0YWRvOicsIGlzRWRpdE1vZGUgPyAnRURJw4fDg08nIDogJ0NSSUHDh8ODTycpO1xyXG4gIGNvbnNvbGUubG9nKCfwn5SnIFJlY29yZCBJRDonLCByZWNvcmQ/LmlkKTtcclxuICBjb25zb2xlLmxvZygn8J+UpyBSZWNvcmQgcGFyYW1zIElEOicsIHJlY29yZD8ucGFyYW1zPy5pZCk7XHJcbiAgY29uc29sZS5sb2coJ/CflKcgUmVjb3JkIHBhcmFtcyBrZXlzOicsIE9iamVjdC5rZXlzKHJlY29yZD8ucGFyYW1zIHx8IHt9KSk7XHJcblxyXG4gIC8vIERlYnVnIHF1YW5kbyBzZWxlY3RlZENhdGVnb3JpYXMgbXVkYVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UpSBzZWxlY3RlZENhdGVnb3JpYXMgTVVET1U6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzKTtcclxuICAgIGNvbnNvbGUubG9nKCfwn5SlIFF1YW50aWRhZGU6Jywgc2VsZWN0ZWRDYXRlZ29yaWFzLmxlbmd0aCk7XHJcbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcmlhc10pO1xyXG5cclxuICBjb25zdCBmZXRjaENhdGVnb3JpYXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL2xpc3QnKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoZGF0YS5yZWNvcmRzKSB7XHJcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWFzRm9ybWF0YWRhcyA9IGRhdGEucmVjb3Jkcy5tYXAoKHJlY29yZDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhyZWNvcmQuaWQpLFxyXG4gICAgICAgICAgICBub21lOiByZWNvcmQucGFyYW1zLm5vbWUsXHJcbiAgICAgICAgICAgIGNvcjogcmVjb3JkLnBhcmFtcy5jb3JcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHNldENhdGVnb3JpYXMoY2F0ZWdvcmlhc0Zvcm1hdGFkYXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBjYXRlZ29yaWFzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVDYXRlZ29yaWEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIW5vdmFDYXRlZ29yaWEudHJpbSgpIHx8IGxvYWRpbmcpIHJldHVybjtcclxuICAgIFxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENyaWFyIGNhdGVnb3JpYSB1c2FuZG8gZmV0Y2ggZGlyZXRvIHBhcmEgYSBBUEkgZG8gQWRtaW5KU1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIG5vbWU6IG5vdmFDYXRlZ29yaWEudHJpbSgpLFxyXG4gICAgICAgIGNvcjogJyMwYzRhMmInXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9DYXRlZ29yaWFOb3RpY2lhcy9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDYXRlZ29yaWE6IENhdGVnb3JpYSA9IHtcclxuICAgICAgICAgIF9pZDogU3RyaW5nKGRhdGEucmVjb3JkLmlkKSxcclxuICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgY29yOiBkYXRhLnJlY29yZC5wYXJhbXMuY29yIHx8ICcjMGM0YTJiJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRpY2lvbmFyIMOgIGxpc3RhIGxvY2FsXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmlhcyhwcmV2ID0+IFsuLi5wcmV2LCBuZXdDYXRlZ29yaWFdKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZWxlY2lvbmFyIGF1dG9tYXRpY2FtZW50ZVxyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gWy4uLnNlbGVjdGVkQ2F0ZWdvcmlhcywgbmV3Q2F0ZWdvcmlhLl9pZF07XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKG5ld1NlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb3RpZmljYXIgQWRtaW5KU1xyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXROb3ZhQ2F0ZWdvcmlhKCcnKTtcclxuICAgICAgICBhbGVydChg4pyFIENhdGVnb3JpYSBcIiR7bmV3Q2F0ZWdvcmlhLm5vbWV9XCIgY3JpYWRhIWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRlbnRhciBjb20gRm9ybURhdGEgc2UgSlNPTiBuw6NvIGZ1bmNpb25hclxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdub21lJywgbm92YUNhdGVnb3JpYS50cmltKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29yJywgJyMwYzRhMmInKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL0NhdGVnb3JpYU5vdGljaWFzL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZvcm1SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IG5ld0NhdGVnb3JpYTogQ2F0ZWdvcmlhID0ge1xyXG4gICAgICAgICAgICBfaWQ6IFN0cmluZyhkYXRhLnJlY29yZC5pZCksXHJcbiAgICAgICAgICAgIG5vbWU6IGRhdGEucmVjb3JkLnBhcmFtcy5ub21lLFxyXG4gICAgICAgICAgICBjb3I6IGRhdGEucmVjb3JkLnBhcmFtcy5jb3IgfHwgJyMwYzRhMmInXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRDYXRlZ29yaWFzKHByZXYgPT4gWy4uLnByZXYsIG5ld0NhdGVnb3JpYV0pO1xyXG4gICAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBuZXdDYXRlZ29yaWEuX2lkXTtcclxuICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICAgICAgYWxlcnQoYOKchSBDYXRlZ29yaWEgXCIke25ld0NhdGVnb3JpYS5ub21lfVwiIGNyaWFkYSFgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvIG5hIGNyaWHDp8OjbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjcmlhciBjYXRlZ29yaWE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgn4p2MIEVycm8gYW8gY3JpYXIgY2F0ZWdvcmlhLiBWb3UgdXNhciBvIHNpc3RlbWEgYXV0b23DoXRpY28gZG8gYmFja2VuZC4nKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZhbGxiYWNrOiB1c2FyIG8gc2lzdGVtYSBxdWUgasOhIGZ1bmNpb25hIG5vIGJhY2tlbmRcclxuICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbLi4uc2VsZWN0ZWRDYXRlZ29yaWFzLCBub3ZhQ2F0ZWdvcmlhLnRyaW0oKV07XHJcbiAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcmlhcyhuZXdTZWxlY3RlZCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNldE5vdmFDYXRlZ29yaWEoJycpO1xyXG4gICAgICBhbGVydChg8J+SoSBDYXRlZ29yaWEgXCIke25vdmFDYXRlZ29yaWEudHJpbSgpfVwiIHNlcsOhIGNyaWFkYSBxdWFuZG8gdm9jw6ogc2FsdmFyIGEgbm90w61jaWEuYCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yaWFDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0ZWdvcmlhSWQ6IHN0cmluZywgaXNTZWxlY3RlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWFzKHByZXZTZWxlY3RlZCA9PiB7XHJcbiAgICAgIGxldCBuZXdTZWxlY3RlZDtcclxuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAvLyBWZXJpZmljYXIgc2UgasOhIG7Do28gZXN0w6Egc2VsZWNpb25hZGEgcGFyYSBldml0YXIgZHVwbGljYXRhc1xyXG4gICAgICAgIGlmICghcHJldlNlbGVjdGVkLmluY2x1ZGVzKGNhdGVnb3JpYUlkKSkge1xyXG4gICAgICAgICAgbmV3U2VsZWN0ZWQgPSBbLi4ucHJldlNlbGVjdGVkLCBjYXRlZ29yaWFJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkOyAvLyBKw6EgZXN0w6Egc2VsZWNpb25hZGEsIG7Do28gYWRpY2lvbmFyXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1NlbGVjdGVkID0gcHJldlNlbGVjdGVkLmZpbHRlcihpZCA9PiBpZCAhPT0gY2F0ZWdvcmlhSWQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBuZXdTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBuZXdTZWxlY3RlZDtcclxuICAgIH0pO1xyXG4gIH0sIFtvbkNoYW5nZSwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPkNhdGVnb3JpYXMge2lzRWRpdE1vZGUgPyAnKEVkaXRhbmRvKScgOiAnKENyaWFuZG8pJ308L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgey8qIENyaWFyIG5vdmEgY2F0ZWdvcmlhICovfVxyXG4gICAgICA8Qm94IG1iPVwiZGVmYXVsdFwiIHA9XCJkZWZhdWx0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgQ3JpYXIgTm92YSBDYXRlZ29yaWFcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRhIG5vdmEgY2F0ZWdvcmlhLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e25vdmFDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm92YUNhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZUNhdGVnb3JpYSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVDYXRlZ29yaWF9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbm92YUNhdGVnb3JpYS50cmltKCkgfHwgbG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAnQ3JpYW5kby4uLicgOiAnQ3JpYXInfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIExpc3RhIGRlIGNhdGVnb3JpYXMgLSBBZGFwdGFkYSBwYXJhIG1vZG8gZGUgZWRpw6fDo28gKi99XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgbWI9XCJ4c1wiPlxyXG4gICAgICAgICAge2lzRWRpdE1vZGUgPyAnIENhdGVnb3JpYXMgRGlzcG9uw612ZWlzIC0gTWFycXVlL0Rlc21hcnF1ZScgOiAn8J+TiyBTZWxlY2lvbmFyIENhdGVnb3JpYXMnfSAoe2NhdGVnb3JpYXMubGVuZ3RofSlcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIE1vc3RyYXIgY2F0ZWdvcmlhcyBzZWxlY2lvbmFkYXMgcHJpbWVpcm8gbm8gbW9kbyBkZSBlZGnDp8OjbyAqL31cclxuICAgICAgICB7aXNFZGl0TW9kZSAmJiBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG1iPVwic21cIiBwPVwic21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JywgYm9yZGVyOiAnMnB4IHNvbGlkICMwYzRhMmInIH19PlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic3VjY2Vzc1wiIG1iPVwieHNcIj5cclxuICAgICAgICAgICAgICDinIUgQ2F0ZWdvcmlhcyBBdHVhbG1lbnRlIFNlbGVjaW9uYWRhcyAoe3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9KTpcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgIC5maWx0ZXIoY2F0ID0+IHNlbGVjdGVkQ2F0ZWdvcmlhcy5pbmNsdWRlcyhjYXQuX2lkKSlcclxuICAgICAgICAgICAgICAubWFwKGNhdGVnb3JpYSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y2F0ZWdvcmlhLl9pZH0gZGlzcGxheT1cImlubGluZS1ibG9ja1wiIG1yPVwieHNcIiBtYj1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwYzRhMmInLCBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCA4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLm5vbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcyMDBweCcsIG92ZXJmbG93WTogJ2F1dG8nLCBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIGJvcmRlclJhZGl1czogJzRweCcsIHBhZGRpbmc6ICc4cHgnIH19PlxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubWFwKGNhdGVnb3JpYSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZENhdGVnb3JpYXMuaW5jbHVkZXMoY2F0ZWdvcmlhLl9pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDwn5SNIENoZWNrYm94ICR7Y2F0ZWdvcmlhLm5vbWV9ICgke2NhdGVnb3JpYS5faWR9KTogaXNTZWxlY3RlZCA9ICR7aXNTZWxlY3RlZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYPCflI0gc2VsZWN0ZWRDYXRlZ29yaWFzIGF0dWFsOmAsIHNlbGVjdGVkQ2F0ZWdvcmlhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yaWEuX2lkfVxyXG4gICAgICAgICAgICAgICAgcD1cInhzXCJcclxuICAgICAgICAgICAgICAgIG1iPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/ICcjZThmNWU4JyA6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3JpYUNoYW5nZShjYXRlZ29yaWEuX2lkLCAhaXNTZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcmlhQ2hhbmdlKGNhdGVnb3JpYS5faWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250V2VpZ2h0OiBpc1NlbGVjdGVkID8gJ2JvbGQnIDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWEubm9tZX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInhzXCIgY29sb3I9XCJzdWNjZXNzXCIgbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyTIFNlbGVjaW9uYWRhXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2NhdGVnb3JpYXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmV5NjBcIiB2YXJpYW50PVwic21cIj5cclxuICAgICAgICAgICAgICBOZW5odW1hIGNhdGVnb3JpYSBlbmNvbnRyYWRhLiBDcmllIGEgcHJpbWVpcmEhXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgey8qIFJlc3VtbyBkZSBzZWxlY2lvbmFkYXMgLSBEaWZlcmVudGUgcGFyYSBjYWRhIG1vZG8gKi99XHJcbiAgICAgIHtpc0VkaXRNb2RlID8gKFxyXG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZjNjZCcsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgIPCfk50gTW9kbyBFZGnDp8Ojbzoge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSAtIEFsdGVyYcOnw7VlcyBzZXLDo28gc2FsdmFzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICBzZWxlY3RlZENhdGVnb3JpYXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICDinIUge3NlbGVjdGVkQ2F0ZWdvcmlhcy5sZW5ndGh9IGNhdGVnb3JpYShzKSBzZWxlY2lvbmFkYShzKSBwYXJhIGEgbm92YSBub3TDrWNpYVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhU2VsZWN0UmVhbDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIEZvcm1Hcm91cCwgXHJcbiAgTGFiZWwsIFxyXG4gIEJveCwgXHJcbiAgVGV4dCBcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBQZXJpb2RvU2VsZWN0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuY29uc3QgUGVyaW9kb1NlbGVjdDogUmVhY3QuRkM8UGVyaW9kb1NlbGVjdFByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQZXJpb2RvLCBzZXRTZWxlY3RlZFBlcmlvZG9dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWwgc2UgZXhpc3RpclxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhjdXJyZW50VmFsdWUpO1xyXG4gIH0sIFtyZWNvcmQsIHByb3BlcnR5Lm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGVyaW9kb0NoYW5nZSA9IChwZXJpb2RvOiBzdHJpbmcpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGVyaW9kbyhwZXJpb2RvKTtcclxuICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBwZXJpb2RvKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwZXJpb2RvcyA9IFtcclxuICAgIHsgdmFsdWU6ICdBTScsIGxhYmVsOiAnQU0gKE1hbmjDoyknLCBpY29uOiAn8J+MhScgfSxcclxuICAgIHsgdmFsdWU6ICdQTScsIGxhYmVsOiAnUE0gKFRhcmRlL05vaXRlKScsIGljb246ICfwn4yGJyB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ1BlcsOtb2RvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICBTZWxlY2lvbmUgbyBwZXLDrW9kbyBkbyBob3LDoXJpb1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICA8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTJweCcsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XHJcbiAgICAgICAgICB7cGVyaW9kb3MubWFwKHBlcmlvZG8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRQZXJpb2RvID09PSBwZXJpb2RvLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGtleT17cGVyaW9kby52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBlcmlvZG9DaGFuZ2UocGVyaW9kby52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpc1NlbGVjdGVkID8gJzJweCBzb2xpZCAjMGM0YTJiJyA6ICcycHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyAnI2U4ZjVlOCcgOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzE0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjOTk5JztcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmOGY5ZmEnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2RkZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyBmb250U2l6ZTogJzI0cHgnLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cGVyaW9kby5pY29ufVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogaXNTZWxlY3RlZCA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc1NlbGVjdGVkID8gJyMwYzRhMmInIDogJyMzMzMnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtwZXJpb2RvLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3NlbGVjdGVkUGVyaW9kbyAmJiAoXHJcbiAgICAgICAgICA8Qm94IG10PVwic21cIiBwPVwieHNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmNWU4JywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgY29sb3I6ICcjMGM0YTJiJyB9fT5cclxuICAgICAgICAgICAgICDinIUgUGVyw61vZG8gc2VsZWNpb25hZG86IDxzdHJvbmc+e3NlbGVjdGVkUGVyaW9kb308L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICB7cHJvcGVydHkuZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtdD1cInhzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJpb2RvU2VsZWN0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBUaW55TUNFRWRpdG9yUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcGVydHlQcm9wcyB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgdGlueW1jZTogYW55O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVGlueU1DRUVkaXRvcjogUmVhY3QuRkM8VGlueU1DRUVkaXRvclByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBUaW55TUNFIC0gVmFsb3IgaW5pY2lhbDonLCBjdXJyZW50VmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFJlY29yZCBjb21wbGV0bzonLCByZWNvcmQpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflI0gVGlueU1DRSAtIFByb3BlcnR5IG5hbWU6JywgcHJvcGVydHkubmFtZSk7XHJcbiAgICBcclxuICAgIHNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIFxyXG4gICAgLy8gU2UgbyBUaW55TUNFIGrDoSBlc3RpdmVyIGNhcnJlZ2FkbywgYXR1YWxpemFyIG8gY29udGXDumRvXHJcbiAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQgJiYgY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LnNldENvbnRlbnQoY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBUaW55TUNFIGRpbmFtaWNhbWVudGVcclxuICAgIGlmICghd2luZG93LnRpbnltY2UpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL2g0bzdkaDdwajU4ZXl2cXhmZGZrZDhrb2czeWU0NDdvaGR3eDU3MmQ1eTJ3Z21wNC90aW55bWNlLzYvdGlueW1jZS5taW4uanMnO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRpYWxpemVUaW55TUNFKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LnRpbnltY2UucmVtb3ZlKGVkaXRvclJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVUaW55TUNFID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0YXJlYVJlZi5jdXJyZW50IHx8IGlzTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgd2luZG93LnRpbnltY2UuaW5pdCh7XHJcbiAgICAgIHRhcmdldDogdGV4dGFyZWFSZWYuY3VycmVudCxcclxuICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgJ2Fkdmxpc3QnLCAnYXV0b2xpbmsnLCAnbGlzdHMnLCAnbGluaycsICdpbWFnZScsICdjaGFybWFwJywgJ3ByZXZpZXcnLFxyXG4gICAgICAgICdhbmNob3InLCAnc2VhcmNocmVwbGFjZScsICd2aXN1YWxibG9ja3MnLCAnY29kZScsICdmdWxsc2NyZWVuJyxcclxuICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUnLCAnbWVkaWEnLCAndGFibGUnLCAnaGVscCcsICd3b3JkY291bnQnXHJcbiAgICAgIF0sXHJcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBibG9ja3MgfCAnICtcclxuICAgICAgICAnYm9sZCBpdGFsaWMgZm9yZWNvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyICcgK1xyXG4gICAgICAgICdhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8ICcgK1xyXG4gICAgICAgICdyZW1vdmVmb3JtYXQgfCBpbWFnZSBtZWRpYSBsaW5rIHwgY29kZSBmdWxsc2NyZWVuIHwgaGVscCcsXHJcbiAgICAgIGNvbnRlbnRfc3R5bGU6ICdib2R5IHsgZm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4IH0nLFxyXG4gICAgICBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IGFzeW5jIChibG9iSW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vIE9Qw4fDg08gMTogVXNhciBiYXNlNjQgKG1haXMgc2ltcGxlcywgZnVuY2lvbmEgc2VtcHJlKVxyXG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4pyFIEltYWdlbSBjb252ZXJ0aWRhIHBhcmEgYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYmFzZTY0KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm8gYW8gY29udmVydGVyIGltYWdlbSBwYXJhIGJhc2U2NCcpO1xyXG4gICAgICAgICAgICByZWplY3QoJ0Vycm8gYW8gcHJvY2Vzc2FyIGltYWdlbScpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2JJbmZvLmJsb2IoKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE9Qw4fDg08gMjogVXBsb2FkIHZpYSBGb3JtRGF0YSAoY29tZW50YWRvLCBwb2RlIHRlbnRhciBkZXBvaXMpXHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2JJbmZvLmJsb2IoKSwgYmxvYkluZm8uZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FsdCcsIGJsb2JJbmZvLmZpbGVuYW1lKCkgfHwgJ0ltYWdlbSBkbyBUaW55TUNFJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZldGNoKCcvYWRtaW4vYXBpL3Jlc291cmNlcy9NZWRpYS9hY3Rpb25zL25ldycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVjb3JkPy5wYXJhbXM/LnVybCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnJlY29yZC5wYXJhbXMudXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZWplY3QoJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlamVjdCgnVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3I7XHJcbiAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZWRpdG9yLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgIHNldENvbnRlbnQobmV3Q29udGVudCk7XHJcbiAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgbmV3Q29udGVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAvLyBDYXJyZWdhciBjb250ZcO6ZG8gaW5pY2lhbCBkbyByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgICAgICAgIGlmIChpbml0aWFsQ29udGVudCkge1xyXG4gICAgICAgICAgICBlZGl0b3Iuc2V0Q29udGVudChpbml0aWFsQ29udGVudCk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaW5pdGlhbENvbnRlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbCB8fCAnQ29udGXDumRvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICBFZGl0b3IgYXZhbsOnYWRvIGNvbSB1cGxvYWQgZGUgaW1hZ2VucyBlIGZvcm1hdGHDp8OjbyByaWNhXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcmVmPXt0ZXh0YXJlYVJlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZWNvcmQ/LnBhcmFtcz8uW3Byb3BlcnR5Lm5hbWVdIHx8IGNvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sgY2FzbyBUaW55TUNFIG7Do28gY2FycmVndWVcclxuICAgICAgICAgICAgaWYgKCFpc0xvYWRlZCAmJiBvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHshaXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+TnSBDYXJyZWdhbmRvIGVkaXRvciBhdmFuw6dhZG8uLi5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlueU1DRUVkaXRvcjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5pbnRlcmZhY2UgUXVpbGxFZGl0b3JQcm9wcyBleHRlbmRzIEJhc2VQcm9wZXJ0eVByb3BzIHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBRdWlsbDogYW55O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUXVpbGxFZGl0b3I6IFJlYWN0LkZDPFF1aWxsRWRpdG9yUHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBzZXRDb250ZW50KGN1cnJlbnRWYWx1ZSk7XHJcbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2FycmVnYXIgUXVpbGwgZGluYW1pY2FtZW50ZVxyXG4gICAgaWYgKCF3aW5kb3cuUXVpbGwpIHtcclxuICAgICAgLy8gQ2FycmVnYXIgQ1NTXHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG4ucXVpbGxqcy5jb20vMS4zLjYvcXVpbGwuc25vdy5jc3MnO1xyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAgICAgLy8gQ2FycmVnYXIgSlNcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4ucXVpbGxqcy5jb20vMS4zLjYvcXVpbGwubWluLmpzJztcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpbml0aWFsaXplUXVpbGwoKTtcclxuICAgICAgfTtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdGlhbGl6ZVF1aWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHF1aWxsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBxdWlsbFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVRdWlsbCA9ICgpID0+IHtcclxuICAgIGlmICghY29udGFpbmVyUmVmLmN1cnJlbnQgfHwgaXNMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBxdWlsbCA9IG5ldyB3aW5kb3cuUXVpbGwoY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcclxuICAgICAgdGhlbWU6ICdzbm93JyxcclxuICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgIFt7ICdoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdIH1dLFxyXG4gICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sXHJcbiAgICAgICAgICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sXHJcbiAgICAgICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJ30sIHsgJ2xpc3QnOiAnYnVsbGV0JyB9XSxcclxuICAgICAgICAgIFt7ICdhbGlnbic6IFtdIH1dLFxyXG4gICAgICAgICAgWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXHJcbiAgICAgICAgICBbJ2NsZWFuJ11cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnRGlnaXRlIG8gY29udGXDumRvIGRhIG5vdMOtY2lhLi4uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgcXVpbGxSZWYuY3VycmVudCA9IHF1aWxsO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgdXBsb2FkIGRlIGltYWdlbSBjdXN0b21pemFkb1xyXG4gICAgY29uc3QgdG9vbGJhciA9IHF1aWxsLmdldE1vZHVsZSgndG9vbGJhcicpO1xyXG4gICAgdG9vbGJhci5hZGRIYW5kbGVyKCdpbWFnZScsICgpID0+IHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XHJcbiAgICAgIGlucHV0LmNsaWNrKCk7XHJcblxyXG4gICAgICBpbnB1dC5vbmNoYW5nZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBxdWlsbC5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICBxdWlsbC5pbnNlcnRFbWJlZChyYW5nZT8uaW5kZXggfHwgMCwgJ2ltYWdlJywgcmVzdWx0LnJlY29yZC5wYXJhbXMudXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Vycm8gYW8gZmF6ZXIgdXBsb2FkIGRhIGltYWdlbScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIExpc3RlbmVyIHBhcmEgbXVkYW7Dp2FzXHJcbiAgICBxdWlsbC5vbigndGV4dC1jaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBxdWlsbC5yb290LmlubmVySFRNTDtcclxuICAgICAgc2V0Q29udGVudChodG1sKTtcclxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgaHRtbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERlZmluaXIgY29udGXDumRvIGluaWNpYWxcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHF1aWxsLnJvb3QuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc0xvYWRlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cD5cclxuICAgICAgPExhYmVsPlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbCB8fCAnQ29udGXDumRvJ31cclxuICAgICAgICB7cHJvcGVydHkuaXNSZXF1aXJlZCAmJiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+ICo8L3NwYW4+fVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJveCBtdD1cInhzXCI+XHJcbiAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgY29sb3I9XCJncmV5NjBcIiBtYj1cInNtXCI+XHJcbiAgICAgICAgICDinKggRWRpdG9yIG1vZGVybm8gY29tIHVwbG9hZCBkZSBpbWFnZW5zIGUgZm9ybWF0YcOnw6NvIHJpY2FcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBpc0xvYWRlZCA/ICdub25lJyA6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogJzMwMHB4J1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHshaXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCIgcD1cInNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+UhCBDYXJyZWdhbmRvIGVkaXRvciBRdWlsbC5qcy4uLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7aXNMb2FkZWQgJiYgKFxyXG4gICAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAg8J+SoSBEaWNhczogVXNlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgcGFyYSBmb3JtYXRhci4gQ2xpcXVlIG5vIMOtY29uZSBkZSBpbWFnZW0gcGFyYSBmYXplciB1cGxvYWQuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aWxsRWRpdG9yO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgXHJcbiAgRm9ybUdyb3VwLCBcclxuICBMYWJlbCwgXHJcbiAgQm94LCBcclxuICBUZXh0LCBcclxuICBCdXR0b24sIFxyXG4gIElucHV0LFxyXG4gIFRleHRBcmVhXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5pbnRlcmZhY2UgQmxvY2sge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogJ3RleHQnIHwgJ2hlYWRpbmcnIHwgJ2ltYWdlJyB8ICdxdW90ZScgfCAnbGlzdCc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHVybD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJsb2NrQnVpbGRlclByb3BzIGV4dGVuZHMgQmFzZVByb3BlcnR5UHJvcHMge31cclxuXHJcbmNvbnN0IEJsb2NrQnVpbGRlcjogUmVhY3QuRkM8QmxvY2tCdWlsZGVyUHJvcHM+ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9ja3MsIHNldEJsb2Nrc10gPSB1c2VTdGF0ZTxCbG9ja1tdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldEJsb2NrcyhBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQgOiBbXSk7XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIC8vIFNlIG7Do28gw6kgSlNPTiwgY3JpYXIgdW0gYmxvY28gZGUgdGV4dG9cclxuICAgICAgICBzZXRCbG9ja3MoW3tcclxuICAgICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBjb250ZW50OiBjdXJyZW50VmFsdWVcclxuICAgICAgICB9XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcmVjb3JkLCBwcm9wZXJ0eS5uYW1lXSk7XHJcblxyXG4gIGNvbnN0IGFkZEJsb2NrID0gKHR5cGU6IEJsb2NrWyd0eXBlJ10pID0+IHtcclxuICAgIGNvbnN0IG5ld0Jsb2NrOiBCbG9jayA9IHtcclxuICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgICAgdHlwZSxcclxuICAgICAgY29udGVudDogJycsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gWy4uLmJsb2NrcywgbmV3QmxvY2tdO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQmxvY2sgPSAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxCbG9jaz4pID0+IHtcclxuICAgIGNvbnN0IG5ld0Jsb2NrcyA9IGJsb2Nrcy5tYXAoYmxvY2sgPT4gXHJcbiAgICAgIGJsb2NrLmlkID09PSBpZCA/IHsgLi4uYmxvY2ssIC4uLnVwZGF0ZXMgfSA6IGJsb2NrXHJcbiAgICApO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQmxvY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2tzID0gYmxvY2tzLmZpbHRlcihibG9jayA9PiBibG9jay5pZCAhPT0gaWQpO1xyXG4gICAgc2V0QmxvY2tzKG5ld0Jsb2Nrcyk7XHJcbiAgICB1cGRhdGVDb250ZW50KG5ld0Jsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW92ZUJsb2NrID0gKGlkOiBzdHJpbmcsIGRpcmVjdGlvbjogJ3VwJyB8ICdkb3duJykgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBibG9ja3MuZmluZEluZGV4KGJsb2NrID0+IGJsb2NrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gZGlyZWN0aW9uID09PSAndXAnID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xyXG4gICAgaWYgKG5ld0luZGV4IDwgMCB8fCBuZXdJbmRleCA+PSBibG9ja3MubGVuZ3RoKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5ld0Jsb2NrcyA9IFsuLi5ibG9ja3NdO1xyXG4gICAgW25ld0Jsb2Nrc1tpbmRleF0sIG5ld0Jsb2Nrc1tuZXdJbmRleF1dID0gW25ld0Jsb2Nrc1tuZXdJbmRleF0sIG5ld0Jsb2Nrc1tpbmRleF1dO1xyXG4gICAgXHJcbiAgICBzZXRCbG9ja3MobmV3QmxvY2tzKTtcclxuICAgIHVwZGF0ZUNvbnRlbnQobmV3QmxvY2tzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250ZW50ID0gKG5ld0Jsb2NrczogQmxvY2tbXSkgPT4ge1xyXG4gICAgLy8gQ29udmVydGVyIGJsb2NrcyBwYXJhIEhUTUxcclxuICAgIGNvbnN0IGh0bWwgPSBuZXdCbG9ja3MubWFwKGJsb2NrID0+IHtcclxuICAgICAgc3dpdGNoIChibG9jay50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZyc6XHJcbiAgICAgICAgICByZXR1cm4gYDxoMj4ke2Jsb2NrLmNvbnRlbnR9PC9oMj5gO1xyXG4gICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8cD4ke2Jsb2NrLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgY2FzZSAncXVvdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8YmxvY2txdW90ZT4ke2Jsb2NrLmNvbnRlbnR9PC9ibG9ja3F1b3RlPmA7XHJcbiAgICAgICAgY2FzZSAnbGlzdCc6XHJcbiAgICAgICAgICByZXR1cm4gYDx1bD48bGk+JHtibG9jay5jb250ZW50LnNwbGl0KCdcXG4nKS5qb2luKCc8L2xpPjxsaT4nKX08L2xpPjwvdWw+YDtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtibG9jay51cmx9XCIgYWx0PVwiJHtibG9jay5jb250ZW50fVwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87XCIgLz5gO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gYDxwPiR7YmxvY2suY29udGVudH08L3A+YDtcclxuICAgICAgfVxyXG4gICAgfSkuam9pbignXFxuJyk7XHJcblxyXG4gICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGh0bWwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gYXN5bmMgKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hZG1pbi9hcGkvcmVzb3VyY2VzL01lZGlhL2FjdGlvbnMvbmV3Jywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdC5yZWNvcmQ/LnBhcmFtcz8udXJsIHx8ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJsb2NrID0gKGJsb2NrOiBCbG9jaykgPT4ge1xyXG4gICAgY29uc3QgY29tbW9uU3R5bGVzID0ge1xyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgIHBhZGRpbmc6ICcxMnB4JyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3gga2V5PXtibG9jay5pZH0gc3R5bGU9e2NvbW1vblN0eWxlc30+XHJcbiAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxyXG4gICAgICAgICAgPFRleHQgdmFyaWFudD1cInNtXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyM2NjYnIH19PlxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3RleHQnICYmICfwn5OdIFBhcsOhZ3JhZm8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2hlYWRpbmcnICYmICfwn5OwIFTDrXR1bG8nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2ltYWdlJyAmJiAn8J+WvO+4jyBJbWFnZW0nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ3F1b3RlJyAmJiAn8J+SrCBDaXRhw6fDo28nfVxyXG4gICAgICAgICAgICB7YmxvY2sudHlwZSA9PT0gJ2xpc3QnICYmICfwn5OLIExpc3RhJ31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzRweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW92ZUJsb2NrKGJsb2NrLmlkLCAndXAnKX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17YmxvY2tzLmZpbmRJbmRleChiID0+IGIuaWQgPT09IGJsb2NrLmlkKSA9PT0gMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKGkVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtb3ZlQmxvY2soYmxvY2suaWQsICdkb3duJyl9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Jsb2Nrcy5maW5kSW5kZXgoYiA9PiBiLmlkID09PSBibG9jay5pZCkgPT09IGJsb2Nrcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4oaTXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVCbG9jayhibG9jay5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDwn5eR77iPXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIHtibG9jay50eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmnDp8OjbyBkYSBpbWFnZW0uLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtibG9jay5jb250ZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgdXJsIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGZhemVyIHVwbG9hZCBkYSBpbWFnZW0nKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtibG9jay51cmwgJiYgKFxyXG4gICAgICAgICAgICAgIDxCb3ggbXQ9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2NrLnVybH0gYWx0PXtibG9jay5jb250ZW50fSBzdHlsZT17eyBtYXhXaWR0aDogJzIwMHB4JywgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSA6IGJsb2NrLnR5cGUgPT09ICdsaXN0JyA/IChcclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBjYWRhIGl0ZW0gZW0gdW1hIGxpbmhhLi4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgIGJsb2NrLnR5cGUgPT09ICdoZWFkaW5nJyA/ICdEaWdpdGUgbyB0w610dWxvLi4uJyA6XHJcbiAgICAgICAgICAgICAgYmxvY2sudHlwZSA9PT0gJ3F1b3RlJyA/ICdEaWdpdGUgYSBjaXRhw6fDo28uLi4nIDpcclxuICAgICAgICAgICAgICAnRGlnaXRlIG8gdGV4dG8uLi4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlQmxvY2soYmxvY2suaWQsIHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHJvd3M9e2Jsb2NrLnR5cGUgPT09ICdoZWFkaW5nJyA/IDIgOiA0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgIDxMYWJlbD5cclxuICAgICAgICB7cHJvcGVydHkubGFiZWwgfHwgJ0NvbnRlw7pkbyd9XHJcbiAgICAgICAge3Byb3BlcnR5LmlzUmVxdWlyZWQgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiAqPC9zcGFuPn1cclxuICAgICAgPC9MYWJlbD5cclxuICAgICAgXHJcbiAgICAgIDxCb3ggbXQ9XCJ4c1wiPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCIgbWI9XCJzbVwiPlxyXG4gICAgICAgICAg8J+nsSBFZGl0b3IgZW0gYmxvY29zIC0gQ29uc3RydWEgc2V1IGNvbnRlw7pkbyBkZSBmb3JtYSBtb2R1bGFyXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBwYWRkaW5nOiAnMTZweCcsIGJhY2tncm91bmRDb2xvcjogJyNmYWZhZmEnIH19PlxyXG4gICAgICAgICAge2Jsb2Nrcy5tYXAocmVuZGVyQmxvY2spfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnOHB4JywgZmxleFdyYXA6ICd3cmFwJywgbWFyZ2luVG9wOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ3RleHQnKX0+KyBQYXLDoWdyYWZvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2hlYWRpbmcnKX0+KyBUw610dWxvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2ltYWdlJyl9PisgSW1hZ2VtPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ3F1b3RlJyl9PisgQ2l0YcOnw6NvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2xpc3QnKX0+KyBMaXN0YTwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJveCBtdD1cInNtXCI+XHJcbiAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiPlxyXG4gICAgICAgICAgICDwn5KhIFVzZSBvcyBib3TDtWVzIHBhcmEgYWRpY2lvbmFyIGRpZmVyZW50ZXMgdGlwb3MgZGUgY29udGXDumRvLiBBcnJhc3RlIHBhcmEgcmVvcmRlbmFyLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0J1aWxkZXI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBcclxuICBGb3JtR3JvdXAsIFxyXG4gIExhYmVsLCBcclxuICBCb3gsIFxyXG4gIFRleHQsIFxyXG4gIEJ1dHRvbiBcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmludGVyZmFjZSBUaXB0YXBFZGl0b3JQcm9wcyBleHRlbmRzIEJhc2VQcm9wZXJ0eVByb3BzIHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBFZGl0b3I6IGFueTtcclxuICAgIFN0YXJ0ZXJLaXQ6IGFueTtcclxuICAgIEltYWdlOiBhbnk7XHJcbiAgICBMaW5rOiBhbnk7XHJcbiAgICBUZXh0QWxpZ246IGFueTtcclxuICAgIEhpZ2hsaWdodDogYW55O1xyXG4gICAgVW5kZXJsaW5lOiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUaXB0YXBFZGl0b3I6IFJlYWN0LkZDPFRpcHRhcEVkaXRvclByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VkaXRvciwgc2V0RWRpdG9yXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbmljaWFsaXphciBjb20gdmFsb3IgYXR1YWxcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV0gfHwgJyc7XHJcbiAgICBjb25zb2xlLmxvZygn8J+UjSBUaXB0YXAgLSBWYWxvciBpbmljaWFsOicsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICBzZXRDb250ZW50KGN1cnJlbnRWYWx1ZSk7XHJcbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZFRpcHRhcCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoZWRpdG9yKSB7XHJcbiAgICAgICAgZWRpdG9yLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRUaXB0YXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBDYXJyZWdhciBDU1MgZG8gVGlwdGFwXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXB0YXAtY3NzJykpIHtcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5pZCA9ICd0aXB0YXAtY3NzJztcclxuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi10ZXh0LWFsaWduQDIuMS4xMy9kaXN0L2luZGV4LmNzcyc7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDU1MgcGVyc29uYWxpemFkbyBwYXJhIG8gZWRpdG9yXHJcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIC50aXB0YXAtZWRpdG9yIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC10b29sYmFyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBoMSB7IGZvbnQtc2l6ZTogMmVtOyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luOiAwLjY3ZW0gMDsgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBoMiB7IGZvbnQtc2l6ZTogMS41ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW46IDAuNzVlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IGgzIHsgZm9udC1zaXplOiAxLjE3ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW46IDAuODNlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHAgeyBtYXJnaW46IDFlbSAwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IHVsLCAudGlwdGFwLWNvbnRlbnQgb2wgeyBtYXJnaW46IDFlbSAwOyBwYWRkaW5nLWxlZnQ6IDJlbTsgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBibG9ja3F1b3RlIHsgXHJcbiAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkZGQ7IFxyXG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDsgXHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgXHJcbiAgICAgICAgICBjb2xvcjogIzY2NjsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXB0YXAtY29udGVudCBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgYm9yZGVyLXJhZGl1czogNHB4OyB9XHJcbiAgICAgICAgLnRpcHRhcC1jb250ZW50IC5oaWdobGlnaHQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7IH1cclxuICAgICAgICAudGlwdGFwLWJ0biB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpcHRhcC1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjBmMGYwOyB9XHJcbiAgICAgICAgLnRpcHRhcC1idG4uYWN0aXZlIHsgYmFja2dyb3VuZDogIzBjNGEyYjsgY29sb3I6IHdoaXRlOyB9XHJcbiAgICAgICAgLnRpcHRhcC1zZXBhcmF0b3IgeyB3aWR0aDogMXB4OyBiYWNrZ3JvdW5kOiAjZGRkOyBtYXJnaW46IDAgNHB4OyB9XHJcbiAgICAgIGA7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhcnJlZ2FyIFRpcHRhcCB2aWEgQ0ROXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpbmRvdy5FZGl0b3IpIHtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2NvcmVAMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9zdGFydGVyLWtpdEAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZUAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgICBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9AdGlwdGFwL2V4dGVuc2lvbi1saW5rQDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLXRleHQtYWxpZ25AMi4xLjEzL2Rpc3QvaW5kZXgudW1kLmpzJyk7XHJcbiAgICAgICAgYXdhaXQgbG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vQHRpcHRhcC9leHRlbnNpb24taGlnaGxpZ2h0QDIuMS4xMy9kaXN0L2luZGV4LnVtZC5qcycpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL0B0aXB0YXAvZXh0ZW5zaW9uLXVuZGVybGluZUAyLjEuMTMvZGlzdC9pbmRleC51bWQuanMnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW5pdGlhbGl6ZVRpcHRhcCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBUaXB0YXA6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRTY3JpcHQgPSAoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZVRpcHRhcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlwdGFwLWNvbnRlbnQnKTtcclxuICAgIGlmICghZWRpdG9yRWxlbWVudCB8fCAhd2luZG93LkVkaXRvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG5ld0VkaXRvciA9IG5ldyB3aW5kb3cuRWRpdG9yKHtcclxuICAgICAgZWxlbWVudDogZWRpdG9yRWxlbWVudCxcclxuICAgICAgZXh0ZW5zaW9uczogW1xyXG4gICAgICAgIHdpbmRvdy5TdGFydGVyS2l0LFxyXG4gICAgICAgIHdpbmRvdy5JbWFnZS5jb25maWd1cmUoe1xyXG4gICAgICAgICAgSFRNTEF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgY2xhc3M6ICd0aXB0YXAtaW1hZ2UnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aW5kb3cuTGluay5jb25maWd1cmUoe1xyXG4gICAgICAgICAgb3Blbk9uQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpbmRvdy5UZXh0QWxpZ24uY29uZmlndXJlKHtcclxuICAgICAgICAgIHR5cGVzOiBbJ2hlYWRpbmcnLCAncGFyYWdyYXBoJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2luZG93LkhpZ2hsaWdodCxcclxuICAgICAgICB3aW5kb3cuVW5kZXJsaW5lLFxyXG4gICAgICBdLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvblVwZGF0ZTogKHsgZWRpdG9yIH06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBlZGl0b3IuZ2V0SFRNTCgpO1xyXG4gICAgICAgIHNldENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCBodG1sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRFZGl0b3IobmV3RWRpdG9yKTtcclxuICAgIHNldElzTG9hZGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgIGlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgIGlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5maWxlcz8uWzBdO1xyXG4gICAgICBpZiAoZmlsZSAmJiBlZGl0b3IpIHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgIGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0SW1hZ2UoeyBzcmM6IGJhc2U2NCB9KS5ydW4oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5wdXQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRMaW5rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gcHJvbXB0KCdEaWdpdGUgYSBVUkwgZG8gbGluazonKTtcclxuICAgIGlmICh1cmwgJiYgZWRpdG9yKSB7XHJcbiAgICAgIGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0TGluayh7IGhyZWY6IHVybCB9KS5ydW4oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBUb29sYmFyQnV0dG9uID0gKHsgXHJcbiAgICBvbkNsaWNrLCBcclxuICAgIGlzQWN0aXZlID0gZmFsc2UsIFxyXG4gICAgY2hpbGRyZW4gXHJcbiAgfTogeyBcclxuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7IFxyXG4gICAgaXNBY3RpdmU/OiBib29sZWFuOyBcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IFxyXG4gIH0pID0+IChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtgdGlwdGFwLWJ0biAke2lzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgU2VwYXJhdG9yID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJ0aXB0YXAtc2VwYXJhdG9yXCIgLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICA8TGFiZWw+XHJcbiAgICAgICAge3Byb3BlcnR5LmxhYmVsIHx8ICdDb250ZcO6ZG8nfVxyXG4gICAgICAgIHtwcm9wZXJ0eS5pc1JlcXVpcmVkICYmIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4gKjwvc3Bhbj59XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8Qm94IG10PVwieHNcIj5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiIG1iPVwic21cIj5cclxuICAgICAgICAgIOKaoSBFZGl0b3IgVGlwdGFwIG1vZGVybm8gY29tIGNvbnRyb2xlcyBhdmFuw6dhZG9zXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwdGFwLWVkaXRvclwiPlxyXG4gICAgICAgICAge2lzTG9hZGVkICYmIGVkaXRvciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwdGFwLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVCb2xkKCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdib2xkJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUl0YWxpYygpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaXRhbGljJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGVtPkk8L2VtPlxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVVbmRlcmxpbmUoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ3VuZGVybGluZScpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1PlU8L3U+XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUhpZ2hsaWdodCgpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGlnaGxpZ2h0Jyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg8J+Wje+4j1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAxIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDEgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDFcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAyIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDIgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDJcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkudG9nZ2xlSGVhZGluZyh7IGxldmVsOiAzIH0pLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSgnaGVhZGluZycsIHsgbGV2ZWw6IDMgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSDNcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnNldFRleHRBbGlnbignbGVmdCcpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSh7IHRleHRBbGlnbjogJ2xlZnQnIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfk4RcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0VGV4dEFsaWduKCdjZW50ZXInKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCfk4RcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5jaGFpbigpLmZvY3VzKCkuc2V0VGV4dEFsaWduKCdyaWdodCcpLnJ1bigpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2VkaXRvci5pc0FjdGl2ZSh7IHRleHRBbGlnbjogJ3JpZ2h0JyB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDwn5OEXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS50b2dnbGVCdWxsZXRMaXN0KCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdidWxsZXRMaXN0Jyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oCiIExpc3RhXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZU9yZGVyZWRMaXN0KCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZWRpdG9yLmlzQWN0aXZlKCdvcmRlcmVkTGlzdCcpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDEuIExpc3RhXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnRvZ2dsZUJsb2NrcXVvdGUoKS5ydW4oKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtlZGl0b3IuaXNBY3RpdmUoJ2Jsb2NrcXVvdGUnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDwn5KsXHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBvbkNsaWNrPXthZGRJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICDwn5a877iPIEltYWdlbVxyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBvbkNsaWNrPXthZGRMaW5rfT5cclxuICAgICAgICAgICAgICAgIPCflJcgTGlua1xyXG4gICAgICAgICAgICAgIDwvVG9vbGJhckJ1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLmNoYWluKCkuZm9jdXMoKS51bmRvKCkucnVuKCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oa2XHJcbiAgICAgICAgICAgICAgPC9Ub29sYmFyQnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuY2hhaW4oKS5mb2N1cygpLnJlZG8oKS5ydW4oKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDihrdcclxuICAgICAgICAgICAgICA8L1Rvb2xiYXJCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgaWQ9XCJ0aXB0YXAtY29udGVudFwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXB0YXAtY29udGVudFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7IWlzTG9hZGVkICYmIChcclxuICAgICAgICAgICAgPEJveCBwPVwibGdcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbVwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICAgICAgICDimqEgQ2FycmVnYW5kbyBlZGl0b3IgVGlwdGFwLi4uXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2lzTG9hZGVkICYmIChcclxuICAgICAgICAgIDxCb3ggbXQ9XCJzbVwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21cIiBjb2xvcj1cImdyZXk2MFwiPlxyXG4gICAgICAgICAgICAgIPCfkqEgVXNlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgcGFyYSBmb3JtYXRhci4gVGlwdGFwIG9mZXJlY2UgdW1hIGV4cGVyacOqbmNpYSBtb2Rlcm5hIGRlIGVkacOnw6NvLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRm9ybUdyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXB0YXBFZGl0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gdXNlQ29tYmluZWRSZWZzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVmcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWZzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHJlYWN0LnVzZU1lbW8oKCkgPT4gbm9kZSA9PiB7XG4gICAgcmVmcy5mb3JFYWNoKHJlZiA9PiByZWYobm9kZSkpO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIHJlZnMpO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc2hhcmVkL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG5jb25zdCBjYW5Vc2VET00gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5mdW5jdGlvbiBpc1dpbmRvdyhlbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50U3RyaW5nID09PSAnW29iamVjdCBXaW5kb3ddJyB8fCAvLyBJbiBFbGVjdHJvbiBjb250ZXh0IHRoZSBXaW5kb3cgb2JqZWN0IHNlcmlhbGl6ZXMgdG8gW29iamVjdCBnbG9iYWxdXG4gIGVsZW1lbnRTdHJpbmcgPT09ICdbb2JqZWN0IGdsb2JhbF0nO1xufVxuXG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICByZXR1cm4gJ25vZGVUeXBlJyBpbiBub2RlO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3codGFyZ2V0KSB7XG4gIHZhciBfdGFyZ2V0JG93bmVyRG9jdW1lbnQsIF90YXJnZXQkb3duZXJEb2N1bWVudDI7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKGlzV2luZG93KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKCFpc05vZGUodGFyZ2V0KSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gKF90YXJnZXQkb3duZXJEb2N1bWVudCA9IChfdGFyZ2V0JG93bmVyRG9jdW1lbnQyID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfdGFyZ2V0JG93bmVyRG9jdW1lbnQyLmRlZmF1bHRWaWV3KSAhPSBudWxsID8gX3RhcmdldCRvd25lckRvY3VtZW50IDogd2luZG93O1xufVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50KG5vZGUpIHtcbiAgY29uc3Qge1xuICAgIERvY3VtZW50XG4gIH0gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTVkdFbGVtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBnZXRXaW5kb3cobm9kZSkuU1ZHRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0T3duZXJEb2N1bWVudCh0YXJnZXQpIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoaXNXaW5kb3codGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQuZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoIWlzTm9kZSh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9XG5cbiAgaWYgKGlzRG9jdW1lbnQodGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudCh0YXJnZXQpIHx8IGlzU1ZHRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50O1xufVxuXG4vKipcclxuICogQSBob29rIHRoYXQgcmVzb2x2ZXMgdG8gdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgYW5kIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgY2xpZW50XHJcbiAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBkZXBlbmRlbmNpZXMgb2YgdGhlIGhvb2sgY2hhbmdlXHJcbiAqL1xuXG5jb25zdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gY2FuVXNlRE9NID8gcmVhY3QudXNlTGF5b3V0RWZmZWN0IDogcmVhY3QudXNlRWZmZWN0O1xuXG5mdW5jdGlvbiB1c2VFdmVudChoYW5kbGVyKSB7XG4gIGNvbnN0IGhhbmRsZXJSZWYgPSByZWFjdC51c2VSZWYoaGFuZGxlcik7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZXJSZWYuY3VycmVudCA9IGhhbmRsZXI7XG4gIH0pO1xuICByZXR1cm4gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlclJlZi5jdXJyZW50ID09IG51bGwgPyB2b2lkIDAgOiBoYW5kbGVyUmVmLmN1cnJlbnQoLi4uYXJncyk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdXNlSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IGludGVydmFsUmVmID0gcmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBzZXQgPSByZWFjdC51c2VDYWxsYmFjaygobGlzdGVuZXIsIGR1cmF0aW9uKSA9PiB7XG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKGxpc3RlbmVyLCBkdXJhdGlvbik7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xlYXIgPSByZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGludGVydmFsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtzZXQsIGNsZWFyXTtcbn1cblxuZnVuY3Rpb24gdXNlTGF0ZXN0VmFsdWUodmFsdWUsIGRlcGVuZGVuY2llcykge1xuICBpZiAoZGVwZW5kZW5jaWVzID09PSB2b2lkIDApIHtcbiAgICBkZXBlbmRlbmNpZXMgPSBbdmFsdWVdO1xuICB9XG5cbiAgY29uc3QgdmFsdWVSZWYgPSByZWFjdC51c2VSZWYodmFsdWUpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVSZWYuY3VycmVudCAhPT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIGRlcGVuZGVuY2llcyk7XG4gIHJldHVybiB2YWx1ZVJlZjtcbn1cblxuZnVuY3Rpb24gdXNlTGF6eU1lbW8oY2FsbGJhY2ssIGRlcGVuZGVuY2llcykge1xuICBjb25zdCB2YWx1ZVJlZiA9IHJlYWN0LnVzZVJlZigpO1xuICByZXR1cm4gcmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjYWxsYmFjayh2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFsuLi5kZXBlbmRlbmNpZXNdKTtcbn1cblxuZnVuY3Rpb24gdXNlTm9kZVJlZihvbkNoYW5nZSkge1xuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSB1c2VFdmVudChvbkNoYW5nZSk7XG4gIGNvbnN0IG5vZGUgPSByZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IHNldE5vZGVSZWYgPSByZWFjdC51c2VDYWxsYmFjayhlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudCAhPT0gbm9kZS5jdXJyZW50KSB7XG4gICAgICBvbkNoYW5nZUhhbmRsZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG9uQ2hhbmdlSGFuZGxlcihlbGVtZW50LCBub2RlLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIG5vZGUuY3VycmVudCA9IGVsZW1lbnQ7XG4gIH0sIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFtdKTtcbiAgcmV0dXJuIFtub2RlLCBzZXROb2RlUmVmXTtcbn1cblxuZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgY29uc3QgcmVmID0gcmVhY3QudXNlUmVmKCk7XG4gIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cblxubGV0IGlkcyA9IHt9O1xuZnVuY3Rpb24gdXNlVW5pcXVlSWQocHJlZml4LCB2YWx1ZSkge1xuICByZXR1cm4gcmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSBpZHNbcHJlZml4XSA9PSBudWxsID8gMCA6IGlkc1twcmVmaXhdICsgMTtcbiAgICBpZHNbcHJlZml4XSA9IGlkO1xuICAgIHJldHVybiBwcmVmaXggKyBcIi1cIiArIGlkO1xuICB9LCBbcHJlZml4LCB2YWx1ZV0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGp1c3RtZW50Rm4obW9kaWZpZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYWRqdXN0bWVudHMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYWRqdXN0bWVudHNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhZGp1c3RtZW50cy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBhZGp1c3RtZW50KSA9PiB7XG4gICAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoYWRqdXN0bWVudCk7XG5cbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVBZGp1c3RtZW50XSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYWNjdW11bGF0b3Jba2V5XTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZSArIG1vZGlmaWVyICogdmFsdWVBZGp1c3RtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCB7IC4uLm9iamVjdFxuICAgIH0pO1xuICB9O1xufVxuXG5jb25zdCBhZGQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQWRqdXN0bWVudEZuKDEpO1xuY29uc3Qgc3VidHJhY3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlQWRqdXN0bWVudEZuKC0xKTtcblxuZnVuY3Rpb24gaGFzVmlld3BvcnRSZWxhdGl2ZUNvb3JkaW5hdGVzKGV2ZW50KSB7XG4gIHJldHVybiAnY2xpZW50WCcgaW4gZXZlbnQgJiYgJ2NsaWVudFknIGluIGV2ZW50O1xufVxuXG5mdW5jdGlvbiBpc0tleWJvYXJkRXZlbnQoZXZlbnQpIHtcbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBLZXlib2FyZEV2ZW50XG4gIH0gPSBnZXRXaW5kb3coZXZlbnQudGFyZ2V0KTtcbiAgcmV0dXJuIEtleWJvYXJkRXZlbnQgJiYgZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50O1xufVxuXG5mdW5jdGlvbiBpc1RvdWNoRXZlbnQoZXZlbnQpIHtcbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBUb3VjaEV2ZW50XG4gIH0gPSBnZXRXaW5kb3coZXZlbnQudGFyZ2V0KTtcbiAgcmV0dXJuIFRvdWNoRXZlbnQgJiYgZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgbm9ybWFsaXplZCB4IGFuZCB5IGNvb3JkaW5hdGVzIGZvciBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzLlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0RXZlbnRDb29yZGluYXRlcyhldmVudCkge1xuICBpZiAoaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgIGlmIChldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNsaWVudFg6IHgsXG4gICAgICAgIGNsaWVudFk6IHlcbiAgICAgIH0gPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjbGllbnRYOiB4LFxuICAgICAgICBjbGllbnRZOiB5XG4gICAgICB9ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNWaWV3cG9ydFJlbGF0aXZlQ29vcmRpbmF0ZXMoZXZlbnQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2ZW50LmNsaWVudFgsXG4gICAgICB5OiBldmVudC5jbGllbnRZXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBDU1MgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIFRyYW5zbGF0ZToge1xuICAgIHRvU3RyaW5nKHRyYW5zZm9ybSkge1xuICAgICAgaWYgKCF0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSB0cmFuc2Zvcm07XG4gICAgICByZXR1cm4gXCJ0cmFuc2xhdGUzZChcIiArICh4ID8gTWF0aC5yb3VuZCh4KSA6IDApICsgXCJweCwgXCIgKyAoeSA/IE1hdGgucm91bmQoeSkgOiAwKSArIFwicHgsIDApXCI7XG4gICAgfVxuXG4gIH0sXG4gIFNjYWxlOiB7XG4gICAgdG9TdHJpbmcodHJhbnNmb3JtKSB7XG4gICAgICBpZiAoIXRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2NhbGVYLFxuICAgICAgICBzY2FsZVlcbiAgICAgIH0gPSB0cmFuc2Zvcm07XG4gICAgICByZXR1cm4gXCJzY2FsZVgoXCIgKyBzY2FsZVggKyBcIikgc2NhbGVZKFwiICsgc2NhbGVZICsgXCIpXCI7XG4gICAgfVxuXG4gIH0sXG4gIFRyYW5zZm9ybToge1xuICAgIHRvU3RyaW5nKHRyYW5zZm9ybSkge1xuICAgICAgaWYgKCF0cmFuc2Zvcm0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW0NTUy5UcmFuc2xhdGUudG9TdHJpbmcodHJhbnNmb3JtKSwgQ1NTLlNjYWxlLnRvU3RyaW5nKHRyYW5zZm9ybSldLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgfSxcbiAgVHJhbnNpdGlvbjoge1xuICAgIHRvU3RyaW5nKF9yZWYpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nXG4gICAgICB9ID0gX3JlZjtcbiAgICAgIHJldHVybiBwcm9wZXJ0eSArIFwiIFwiICsgZHVyYXRpb24gKyBcIm1zIFwiICsgZWFzaW5nO1xuICAgIH1cblxuICB9XG59KTtcblxuY29uc3QgU0VMRUNUT1IgPSAnYSxmcmFtZSxpZnJhbWUsaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pOm5vdCg6ZGlzYWJsZWQpLHNlbGVjdDpub3QoOmRpc2FibGVkKSx0ZXh0YXJlYTpub3QoOmRpc2FibGVkKSxidXR0b246bm90KDpkaXNhYmxlZCksKlt0YWJpbmRleF0nO1xuZnVuY3Rpb24gZmluZEZpcnN0Rm9jdXNhYmxlTm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm1hdGNoZXMoU0VMRUNUT1IpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTtcbn1cblxuZXhwb3J0cy5DU1MgPSBDU1M7XG5leHBvcnRzLmFkZCA9IGFkZDtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NO1xuZXhwb3J0cy5maW5kRmlyc3RGb2N1c2FibGVOb2RlID0gZmluZEZpcnN0Rm9jdXNhYmxlTm9kZTtcbmV4cG9ydHMuZ2V0RXZlbnRDb29yZGluYXRlcyA9IGdldEV2ZW50Q29vcmRpbmF0ZXM7XG5leHBvcnRzLmdldE93bmVyRG9jdW1lbnQgPSBnZXRPd25lckRvY3VtZW50O1xuZXhwb3J0cy5nZXRXaW5kb3cgPSBnZXRXaW5kb3c7XG5leHBvcnRzLmhhc1ZpZXdwb3J0UmVsYXRpdmVDb29yZGluYXRlcyA9IGhhc1ZpZXdwb3J0UmVsYXRpdmVDb29yZGluYXRlcztcbmV4cG9ydHMuaXNEb2N1bWVudCA9IGlzRG9jdW1lbnQ7XG5leHBvcnRzLmlzSFRNTEVsZW1lbnQgPSBpc0hUTUxFbGVtZW50O1xuZXhwb3J0cy5pc0tleWJvYXJkRXZlbnQgPSBpc0tleWJvYXJkRXZlbnQ7XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmV4cG9ydHMuaXNTVkdFbGVtZW50ID0gaXNTVkdFbGVtZW50O1xuZXhwb3J0cy5pc1RvdWNoRXZlbnQgPSBpc1RvdWNoRXZlbnQ7XG5leHBvcnRzLmlzV2luZG93ID0gaXNXaW5kb3c7XG5leHBvcnRzLnN1YnRyYWN0ID0gc3VidHJhY3Q7XG5leHBvcnRzLnVzZUNvbWJpbmVkUmVmcyA9IHVzZUNvbWJpbmVkUmVmcztcbmV4cG9ydHMudXNlRXZlbnQgPSB1c2VFdmVudDtcbmV4cG9ydHMudXNlSW50ZXJ2YWwgPSB1c2VJbnRlcnZhbDtcbmV4cG9ydHMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZUxhdGVzdFZhbHVlID0gdXNlTGF0ZXN0VmFsdWU7XG5leHBvcnRzLnVzZUxhenlNZW1vID0gdXNlTGF6eU1lbW87XG5leHBvcnRzLnVzZU5vZGVSZWYgPSB1c2VOb2RlUmVmO1xuZXhwb3J0cy51c2VQcmV2aW91cyA9IHVzZVByZXZpb3VzO1xuZXhwb3J0cy51c2VVbmlxdWVJZCA9IHVzZVVuaXF1ZUlkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbGl0aWVzLmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMuY2pzLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMuY2pzLmRldmVsb3BtZW50LmpzJylcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RfX2RlZmF1bHQgPSBfaW50ZXJvcERlZmF1bHQoUmVhY3QpO1xuXG5jb25zdCBoaWRkZW5TdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdub25lJ1xufTtcbmZ1bmN0aW9uIEhpZGRlblRleHQoX3JlZikge1xuICBsZXQge1xuICAgIGlkLFxuICAgIHZhbHVlXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IGlkLFxuICAgIHN0eWxlOiBoaWRkZW5TdHlsZXNcbiAgfSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBMaXZlUmVnaW9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBpZCxcbiAgICBhbm5vdW5jZW1lbnQsXG4gICAgYXJpYUxpdmVUeXBlID0gXCJhc3NlcnRpdmVcIlxuICB9ID0gX3JlZjtcbiAgLy8gSGlkZSBlbGVtZW50IHZpc3VhbGx5IGJ1dCBrZWVwIGl0IHJlYWRhYmxlIGJ5IHNjcmVlbiByZWFkZXJzXG4gIGNvbnN0IHZpc3VhbGx5SGlkZGVuID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMSxcbiAgICBtYXJnaW46IC0xLFxuICAgIGJvcmRlcjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgY2xpcFBhdGg6ICdpbnNldCgxMDAlKScsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGlkOiBpZCxcbiAgICBzdHlsZTogdmlzdWFsbHlIaWRkZW4sXG4gICAgcm9sZTogXCJzdGF0dXNcIixcbiAgICBcImFyaWEtbGl2ZVwiOiBhcmlhTGl2ZVR5cGUsXG4gICAgXCJhcmlhLWF0b21pY1wiOiB0cnVlXG4gIH0sIGFubm91bmNlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVzZUFubm91bmNlbWVudCgpIHtcbiAgY29uc3QgW2Fubm91bmNlbWVudCwgc2V0QW5ub3VuY2VtZW50XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgYW5ub3VuY2UgPSBSZWFjdC51c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHNldEFubm91bmNlbWVudCh2YWx1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiB7XG4gICAgYW5ub3VuY2UsXG4gICAgYW5ub3VuY2VtZW50XG4gIH07XG59XG5cbmV4cG9ydHMuSGlkZGVuVGV4dCA9IEhpZGRlblRleHQ7XG5leHBvcnRzLkxpdmVSZWdpb24gPSBMaXZlUmVnaW9uO1xuZXhwb3J0cy51c2VBbm5vdW5jZW1lbnQgPSB1c2VBbm5vdW5jZW1lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY2Nlc3NpYmlsaXR5LmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9hY2Nlc3NpYmlsaXR5LmNqcy5wcm9kdWN0aW9uLm1pbi5qcycpXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYWNjZXNzaWJpbGl0eS5janMuZGV2ZWxvcG1lbnQuanMnKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCdAZG5kLWtpdC91dGlsaXRpZXMnKTtcbnZhciBhY2Nlc3NpYmlsaXR5ID0gcmVxdWlyZSgnQGRuZC1raXQvYWNjZXNzaWJpbGl0eScpO1xuXG5jb25zdCBEbmRNb25pdG9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VEbmRNb25pdG9yKGxpc3RlbmVyKSB7XG4gIGNvbnN0IHJlZ2lzdGVyTGlzdGVuZXIgPSBSZWFjdC51c2VDb250ZXh0KERuZE1vbml0b3JDb250ZXh0KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlZ2lzdGVyTGlzdGVuZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXNlRG5kTW9uaXRvciBtdXN0IGJlIHVzZWQgd2l0aGluIGEgY2hpbGRyZW4gb2YgPERuZENvbnRleHQ+Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gIH0sIFtsaXN0ZW5lciwgcmVnaXN0ZXJMaXN0ZW5lcl0pO1xufVxuXG5mdW5jdGlvbiB1c2VEbmRNb25pdG9yUHJvdmlkZXIoKSB7XG4gIGNvbnN0IFtsaXN0ZW5lcnNdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbmV3IFNldCgpKTtcbiAgY29uc3QgcmVnaXN0ZXJMaXN0ZW5lciA9IFJlYWN0LnVzZUNhbGxiYWNrKGxpc3RlbmVyID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH0sIFtsaXN0ZW5lcnNdKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDYWxsYmFjayhfcmVmID0+IHtcbiAgICBsZXQge1xuICAgICAgdHlwZSxcbiAgICAgIGV2ZW50XG4gICAgfSA9IF9yZWY7XG4gICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgdmFyIF9saXN0ZW5lciR0eXBlO1xuXG4gICAgICByZXR1cm4gKF9saXN0ZW5lciR0eXBlID0gbGlzdGVuZXJbdHlwZV0pID09IG51bGwgPyB2b2lkIDAgOiBfbGlzdGVuZXIkdHlwZS5jYWxsKGxpc3RlbmVyLCBldmVudCk7XG4gICAgfSk7XG4gIH0sIFtsaXN0ZW5lcnNdKTtcbiAgcmV0dXJuIFtkaXNwYXRjaCwgcmVnaXN0ZXJMaXN0ZW5lcl07XG59XG5cbmNvbnN0IGRlZmF1bHRTY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMgPSB7XG4gIGRyYWdnYWJsZTogXCJcXG4gICAgVG8gcGljayB1cCBhIGRyYWdnYWJsZSBpdGVtLCBwcmVzcyB0aGUgc3BhY2UgYmFyLlxcbiAgICBXaGlsZSBkcmFnZ2luZywgdXNlIHRoZSBhcnJvdyBrZXlzIHRvIG1vdmUgdGhlIGl0ZW0uXFxuICAgIFByZXNzIHNwYWNlIGFnYWluIHRvIGRyb3AgdGhlIGl0ZW0gaW4gaXRzIG5ldyBwb3NpdGlvbiwgb3IgcHJlc3MgZXNjYXBlIHRvIGNhbmNlbC5cXG4gIFwiXG59O1xuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gIG9uRHJhZ1N0YXJ0KF9yZWYpIHtcbiAgICBsZXQge1xuICAgICAgYWN0aXZlXG4gICAgfSA9IF9yZWY7XG4gICAgcmV0dXJuIFwiUGlja2VkIHVwIGRyYWdnYWJsZSBpdGVtIFwiICsgYWN0aXZlLmlkICsgXCIuXCI7XG4gIH0sXG5cbiAgb25EcmFnT3ZlcihfcmVmMikge1xuICAgIGxldCB7XG4gICAgICBhY3RpdmUsXG4gICAgICBvdmVyXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKG92ZXIpIHtcbiAgICAgIHJldHVybiBcIkRyYWdnYWJsZSBpdGVtIFwiICsgYWN0aXZlLmlkICsgXCIgd2FzIG1vdmVkIG92ZXIgZHJvcHBhYmxlIGFyZWEgXCIgKyBvdmVyLmlkICsgXCIuXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiRHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIiBpcyBubyBsb25nZXIgb3ZlciBhIGRyb3BwYWJsZSBhcmVhLlwiO1xuICB9LFxuXG4gIG9uRHJhZ0VuZChfcmVmMykge1xuICAgIGxldCB7XG4gICAgICBhY3RpdmUsXG4gICAgICBvdmVyXG4gICAgfSA9IF9yZWYzO1xuXG4gICAgaWYgKG92ZXIpIHtcbiAgICAgIHJldHVybiBcIkRyYWdnYWJsZSBpdGVtIFwiICsgYWN0aXZlLmlkICsgXCIgd2FzIGRyb3BwZWQgb3ZlciBkcm9wcGFibGUgYXJlYSBcIiArIG92ZXIuaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiRHJhZ2dhYmxlIGl0ZW0gXCIgKyBhY3RpdmUuaWQgKyBcIiB3YXMgZHJvcHBlZC5cIjtcbiAgfSxcblxuICBvbkRyYWdDYW5jZWwoX3JlZjQpIHtcbiAgICBsZXQge1xuICAgICAgYWN0aXZlXG4gICAgfSA9IF9yZWY0O1xuICAgIHJldHVybiBcIkRyYWdnaW5nIHdhcyBjYW5jZWxsZWQuIERyYWdnYWJsZSBpdGVtIFwiICsgYWN0aXZlLmlkICsgXCIgd2FzIGRyb3BwZWQuXCI7XG4gIH1cblxufTtcblxuZnVuY3Rpb24gQWNjZXNzaWJpbGl0eShfcmVmKSB7XG4gIGxldCB7XG4gICAgYW5ub3VuY2VtZW50cyA9IGRlZmF1bHRBbm5vdW5jZW1lbnRzLFxuICAgIGNvbnRhaW5lcixcbiAgICBoaWRkZW5UZXh0RGVzY3JpYmVkQnlJZCxcbiAgICBzY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMgPSBkZWZhdWx0U2NyZWVuUmVhZGVySW5zdHJ1Y3Rpb25zXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYW5ub3VuY2UsXG4gICAgYW5ub3VuY2VtZW50XG4gIH0gPSBhY2Nlc3NpYmlsaXR5LnVzZUFubm91bmNlbWVudCgpO1xuICBjb25zdCBsaXZlUmVnaW9uSWQgPSB1dGlsaXRpZXMudXNlVW5pcXVlSWQoXCJEbmRMaXZlUmVnaW9uXCIpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuICB1c2VEbmRNb25pdG9yKFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBvbkRyYWdTdGFydChfcmVmMikge1xuICAgICAgbGV0IHtcbiAgICAgICAgYWN0aXZlXG4gICAgICB9ID0gX3JlZjI7XG4gICAgICBhbm5vdW5jZShhbm5vdW5jZW1lbnRzLm9uRHJhZ1N0YXJ0KHtcbiAgICAgICAgYWN0aXZlXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIG9uRHJhZ01vdmUoX3JlZjMpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSA9IF9yZWYzO1xuXG4gICAgICBpZiAoYW5ub3VuY2VtZW50cy5vbkRyYWdNb3ZlKSB7XG4gICAgICAgIGFubm91bmNlKGFubm91bmNlbWVudHMub25EcmFnTW92ZSh7XG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIG92ZXJcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRyYWdPdmVyKF9yZWY0KSB7XG4gICAgICBsZXQge1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIG92ZXJcbiAgICAgIH0gPSBfcmVmNDtcbiAgICAgIGFubm91bmNlKGFubm91bmNlbWVudHMub25EcmFnT3Zlcih7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBvbkRyYWdFbmQoX3JlZjUpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgb3ZlclxuICAgICAgfSA9IF9yZWY1O1xuICAgICAgYW5ub3VuY2UoYW5ub3VuY2VtZW50cy5vbkRyYWdFbmQoe1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIG92ZXJcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgb25EcmFnQ2FuY2VsKF9yZWY2KSB7XG4gICAgICBsZXQge1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIG92ZXJcbiAgICAgIH0gPSBfcmVmNjtcbiAgICAgIGFubm91bmNlKGFubm91bmNlbWVudHMub25EcmFnQ2FuY2VsKHtcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBvdmVyXG4gICAgICB9KSk7XG4gICAgfVxuXG4gIH0pLCBbYW5ub3VuY2UsIGFubm91bmNlbWVudHNdKSk7XG5cbiAgaWYgKCFtb3VudGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBtYXJrdXAgPSBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFjY2Vzc2liaWxpdHkuSGlkZGVuVGV4dCwge1xuICAgIGlkOiBoaWRkZW5UZXh0RGVzY3JpYmVkQnlJZCxcbiAgICB2YWx1ZTogc2NyZWVuUmVhZGVySW5zdHJ1Y3Rpb25zLmRyYWdnYWJsZVxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChhY2Nlc3NpYmlsaXR5LkxpdmVSZWdpb24sIHtcbiAgICBpZDogbGl2ZVJlZ2lvbklkLFxuICAgIGFubm91bmNlbWVudDogYW5ub3VuY2VtZW50XG4gIH0pKTtcbiAgcmV0dXJuIGNvbnRhaW5lciA/IHJlYWN0RG9tLmNyZWF0ZVBvcnRhbChtYXJrdXAsIGNvbnRhaW5lcikgOiBtYXJrdXA7XG59XG5cbnZhciBBY3Rpb247XG5cbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gIEFjdGlvbltcIkRyYWdTdGFydFwiXSA9IFwiZHJhZ1N0YXJ0XCI7XG4gIEFjdGlvbltcIkRyYWdNb3ZlXCJdID0gXCJkcmFnTW92ZVwiO1xuICBBY3Rpb25bXCJEcmFnRW5kXCJdID0gXCJkcmFnRW5kXCI7XG4gIEFjdGlvbltcIkRyYWdDYW5jZWxcIl0gPSBcImRyYWdDYW5jZWxcIjtcbiAgQWN0aW9uW1wiRHJhZ092ZXJcIl0gPSBcImRyYWdPdmVyXCI7XG4gIEFjdGlvbltcIlJlZ2lzdGVyRHJvcHBhYmxlXCJdID0gXCJyZWdpc3RlckRyb3BwYWJsZVwiO1xuICBBY3Rpb25bXCJTZXREcm9wcGFibGVEaXNhYmxlZFwiXSA9IFwic2V0RHJvcHBhYmxlRGlzYWJsZWRcIjtcbiAgQWN0aW9uW1wiVW5yZWdpc3RlckRyb3BwYWJsZVwiXSA9IFwidW5yZWdpc3RlckRyb3BwYWJsZVwiO1xufSkoQWN0aW9uIHx8IChBY3Rpb24gPSB7fSkpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gdXNlU2Vuc29yKHNlbnNvciwgb3B0aW9ucykge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHNlbnNvcixcbiAgICBvcHRpb25zOiBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge31cbiAgfSksIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW3NlbnNvciwgb3B0aW9uc10pO1xufVxuXG5mdW5jdGlvbiB1c2VTZW5zb3JzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc2Vuc29ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzZW5zb3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gWy4uLnNlbnNvcnNdLmZpbHRlcihzZW5zb3IgPT4gc2Vuc29yICE9IG51bGwpLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFsuLi5zZW5zb3JzXSk7XG59XG5cbmNvbnN0IGRlZmF1bHRDb29yZGluYXRlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgeDogMCxcbiAgeTogMFxufSk7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcclxuICovXG5mdW5jdGlvbiBkaXN0YW5jZUJldHdlZW4ocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDEueCAtIHAyLngsIDIpICsgTWF0aC5wb3cocDEueSAtIHAyLnksIDIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVUcmFuc2Zvcm1PcmlnaW4oZXZlbnQsIHJlY3QpIHtcbiAgY29uc3QgZXZlbnRDb29yZGluYXRlcyA9IHV0aWxpdGllcy5nZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KTtcblxuICBpZiAoIWV2ZW50Q29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gJzAgMCc7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgeDogKGV2ZW50Q29vcmRpbmF0ZXMueCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoICogMTAwLFxuICAgIHk6IChldmVudENvb3JkaW5hdGVzLnkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodCAqIDEwMFxuICB9O1xuICByZXR1cm4gdHJhbnNmb3JtT3JpZ2luLnggKyBcIiUgXCIgKyB0cmFuc2Zvcm1PcmlnaW4ueSArIFwiJVwiO1xufVxuXG4vKipcclxuICogU29ydCBjb2xsaXNpb25zIGZyb20gc21hbGxlc3QgdG8gZ3JlYXRlc3QgdmFsdWVcclxuICovXG5mdW5jdGlvbiBzb3J0Q29sbGlzaW9uc0FzYyhfcmVmLCBfcmVmMikge1xuICBsZXQge1xuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiBhXG4gICAgfVxuICB9ID0gX3JlZjtcbiAgbGV0IHtcbiAgICBkYXRhOiB7XG4gICAgICB2YWx1ZTogYlxuICAgIH1cbiAgfSA9IF9yZWYyO1xuICByZXR1cm4gYSAtIGI7XG59XG4vKipcclxuICogU29ydCBjb2xsaXNpb25zIGZyb20gZ3JlYXRlc3QgdG8gc21hbGxlc3QgdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIHNvcnRDb2xsaXNpb25zRGVzYyhfcmVmMywgX3JlZjQpIHtcbiAgbGV0IHtcbiAgICBkYXRhOiB7XG4gICAgICB2YWx1ZTogYVxuICAgIH1cbiAgfSA9IF9yZWYzO1xuICBsZXQge1xuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlOiBiXG4gICAgfVxuICB9ID0gX3JlZjQ7XG4gIHJldHVybiBiIC0gYTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgY29ybmVycyBvZiBhIGdpdmVuIHJlY3RhbmdsZTpcclxuICogW1RvcExlZnQge3gsIHl9LCBUb3BSaWdodCB7eCwgeX0sIEJvdHRvbUxlZnQge3gsIHl9LCBCb3R0b21SaWdodCB7eCwgeX1dXHJcbiAqL1xuXG5mdW5jdGlvbiBjb3JuZXJzT2ZSZWN0YW5nbGUoX3JlZjUpIHtcbiAgbGV0IHtcbiAgICBsZWZ0LFxuICAgIHRvcCxcbiAgICBoZWlnaHQsXG4gICAgd2lkdGhcbiAgfSA9IF9yZWY1O1xuICByZXR1cm4gW3tcbiAgICB4OiBsZWZ0LFxuICAgIHk6IHRvcFxuICB9LCB7XG4gICAgeDogbGVmdCArIHdpZHRoLFxuICAgIHk6IHRvcFxuICB9LCB7XG4gICAgeDogbGVmdCxcbiAgICB5OiB0b3AgKyBoZWlnaHRcbiAgfSwge1xuICAgIHg6IGxlZnQgKyB3aWR0aCxcbiAgICB5OiB0b3AgKyBoZWlnaHRcbiAgfV07XG59XG5mdW5jdGlvbiBnZXRGaXJzdENvbGxpc2lvbihjb2xsaXNpb25zLCBwcm9wZXJ0eSkge1xuICBpZiAoIWNvbGxpc2lvbnMgfHwgY29sbGlzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IFtmaXJzdENvbGxpc2lvbl0gPSBjb2xsaXNpb25zO1xuICByZXR1cm4gcHJvcGVydHkgPyBmaXJzdENvbGxpc2lvbltwcm9wZXJ0eV0gOiBmaXJzdENvbGxpc2lvbjtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgb2YgYSBnaXZlbiBDbGllbnRSZWN0XHJcbiAqL1xuXG5mdW5jdGlvbiBjZW50ZXJPZlJlY3RhbmdsZShyZWN0LCBsZWZ0LCB0b3ApIHtcbiAgaWYgKGxlZnQgPT09IHZvaWQgMCkge1xuICAgIGxlZnQgPSByZWN0LmxlZnQ7XG4gIH1cblxuICBpZiAodG9wID09PSB2b2lkIDApIHtcbiAgICB0b3AgPSByZWN0LnRvcDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogbGVmdCArIHJlY3Qud2lkdGggKiAwLjUsXG4gICAgeTogdG9wICsgcmVjdC5oZWlnaHQgKiAwLjVcbiAgfTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjbG9zZXN0IHJlY3RhbmdsZXMgZnJvbSBhbiBhcnJheSBvZiByZWN0YW5nbGVzIHRvIHRoZSBjZW50ZXIgb2YgYSBnaXZlblxyXG4gKiByZWN0YW5nbGUuXHJcbiAqL1xuXG5cbmNvbnN0IGNsb3Nlc3RDZW50ZXIgPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBjb2xsaXNpb25SZWN0LFxuICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGNlbnRlclJlY3QgPSBjZW50ZXJPZlJlY3RhbmdsZShjb2xsaXNpb25SZWN0LCBjb2xsaXNpb25SZWN0LmxlZnQsIGNvbGxpc2lvblJlY3QudG9wKTtcbiAgY29uc3QgY29sbGlzaW9ucyA9IFtdO1xuXG4gIGZvciAoY29uc3QgZHJvcHBhYmxlQ29udGFpbmVyIG9mIGRyb3BwYWJsZUNvbnRhaW5lcnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZFxuICAgIH0gPSBkcm9wcGFibGVDb250YWluZXI7XG4gICAgY29uc3QgcmVjdCA9IGRyb3BwYWJsZVJlY3RzLmdldChpZCk7XG5cbiAgICBpZiAocmVjdCkge1xuICAgICAgY29uc3QgZGlzdEJldHdlZW4gPSBkaXN0YW5jZUJldHdlZW4oY2VudGVyT2ZSZWN0YW5nbGUocmVjdCksIGNlbnRlclJlY3QpO1xuICAgICAgY29sbGlzaW9ucy5wdXNoKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkcm9wcGFibGVDb250YWluZXIsXG4gICAgICAgICAgdmFsdWU6IGRpc3RCZXR3ZWVuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsaXNpb25zLnNvcnQoc29ydENvbGxpc2lvbnNBc2MpO1xufTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNsb3Nlc3QgcmVjdGFuZ2xlcyBmcm9tIGFuIGFycmF5IG9mIHJlY3RhbmdsZXMgdG8gdGhlIGNvcm5lcnMgb2ZcclxuICogYW5vdGhlciByZWN0YW5nbGUuXHJcbiAqL1xuXG5jb25zdCBjbG9zZXN0Q29ybmVycyA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGNvbGxpc2lvblJlY3QsXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVyc1xuICB9ID0gX3JlZjtcbiAgY29uc3QgY29ybmVycyA9IGNvcm5lcnNPZlJlY3RhbmdsZShjb2xsaXNpb25SZWN0KTtcbiAgY29uc3QgY29sbGlzaW9ucyA9IFtdO1xuXG4gIGZvciAoY29uc3QgZHJvcHBhYmxlQ29udGFpbmVyIG9mIGRyb3BwYWJsZUNvbnRhaW5lcnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZFxuICAgIH0gPSBkcm9wcGFibGVDb250YWluZXI7XG4gICAgY29uc3QgcmVjdCA9IGRyb3BwYWJsZVJlY3RzLmdldChpZCk7XG5cbiAgICBpZiAocmVjdCkge1xuICAgICAgY29uc3QgcmVjdENvcm5lcnMgPSBjb3JuZXJzT2ZSZWN0YW5nbGUocmVjdCk7XG4gICAgICBjb25zdCBkaXN0YW5jZXMgPSBjb3JuZXJzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGNvcm5lciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZGlzdGFuY2VCZXR3ZWVuKHJlY3RDb3JuZXJzW2luZGV4XSwgY29ybmVyKTtcbiAgICAgIH0sIDApO1xuICAgICAgY29uc3QgZWZmZWN0aXZlRGlzdGFuY2UgPSBOdW1iZXIoKGRpc3RhbmNlcyAvIDQpLnRvRml4ZWQoNCkpO1xuICAgICAgY29sbGlzaW9ucy5wdXNoKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkcm9wcGFibGVDb250YWluZXIsXG4gICAgICAgICAgdmFsdWU6IGVmZmVjdGl2ZURpc3RhbmNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsaXNpb25zLnNvcnQoc29ydENvbGxpc2lvbnNBc2MpO1xufTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGludGVyc2VjdGluZyByZWN0YW5nbGUgYXJlYSBiZXR3ZWVuIHR3byByZWN0YW5nbGVzXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRJbnRlcnNlY3Rpb25SYXRpbyhlbnRyeSwgdGFyZ2V0KSB7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRhcmdldC50b3AsIGVudHJ5LnRvcCk7XG4gIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0YXJnZXQubGVmdCwgZW50cnkubGVmdCk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4odGFyZ2V0LmxlZnQgKyB0YXJnZXQud2lkdGgsIGVudHJ5LmxlZnQgKyBlbnRyeS53aWR0aCk7XG4gIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRhcmdldC50b3AgKyB0YXJnZXQuaGVpZ2h0LCBlbnRyeS50b3AgKyBlbnRyeS5oZWlnaHQpO1xuICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gIGlmIChsZWZ0IDwgcmlnaHQgJiYgdG9wIDwgYm90dG9tKSB7XG4gICAgY29uc3QgdGFyZ2V0QXJlYSA9IHRhcmdldC53aWR0aCAqIHRhcmdldC5oZWlnaHQ7XG4gICAgY29uc3QgZW50cnlBcmVhID0gZW50cnkud2lkdGggKiBlbnRyeS5oZWlnaHQ7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IHdpZHRoICogaGVpZ2h0O1xuICAgIGNvbnN0IGludGVyc2VjdGlvblJhdGlvID0gaW50ZXJzZWN0aW9uQXJlYSAvICh0YXJnZXRBcmVhICsgZW50cnlBcmVhIC0gaW50ZXJzZWN0aW9uQXJlYSk7XG4gICAgcmV0dXJuIE51bWJlcihpbnRlcnNlY3Rpb25SYXRpby50b0ZpeGVkKDQpKTtcbiAgfSAvLyBSZWN0YW5nbGVzIGRvIG5vdCBvdmVybGFwLCBvciBvdmVybGFwIGhhcyBhbiBhcmVhIG9mIHplcm8gKGVkZ2UvY29ybmVyIG92ZXJsYXApXG5cblxuICByZXR1cm4gMDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSByZWN0YW5nbGVzIHRoYXQgaGFzIHRoZSBncmVhdGVzdCBpbnRlcnNlY3Rpb24gYXJlYSB3aXRoIGEgZ2l2ZW5cclxuICogcmVjdGFuZ2xlIGluIGFuIGFycmF5IG9mIHJlY3RhbmdsZXMuXHJcbiAqL1xuXG5jb25zdCByZWN0SW50ZXJzZWN0aW9uID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgY29sbGlzaW9uUmVjdCxcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBkcm9wcGFibGVDb250YWluZXJzXG4gIH0gPSBfcmVmO1xuICBjb25zdCBjb2xsaXNpb25zID0gW107XG5cbiAgZm9yIChjb25zdCBkcm9wcGFibGVDb250YWluZXIgb2YgZHJvcHBhYmxlQ29udGFpbmVycykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkXG4gICAgfSA9IGRyb3BwYWJsZUNvbnRhaW5lcjtcbiAgICBjb25zdCByZWN0ID0gZHJvcHBhYmxlUmVjdHMuZ2V0KGlkKTtcblxuICAgIGlmIChyZWN0KSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb25SYXRpbyA9IGdldEludGVyc2VjdGlvblJhdGlvKHJlY3QsIGNvbGxpc2lvblJlY3QpO1xuXG4gICAgICBpZiAoaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgIGNvbGxpc2lvbnMucHVzaCh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZHJvcHBhYmxlQ29udGFpbmVyLFxuICAgICAgICAgICAgdmFsdWU6IGludGVyc2VjdGlvblJhdGlvXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29sbGlzaW9ucy5zb3J0KHNvcnRDb2xsaXNpb25zRGVzYyk7XG59O1xuXG4vKipcclxuICogQ2hlY2sgaWYgYSBnaXZlbiBwb2ludCBpcyBjb250YWluZWQgd2l0aGluIGEgYm91bmRpbmcgcmVjdGFuZ2xlXHJcbiAqL1xuXG5mdW5jdGlvbiBpc1BvaW50V2l0aGluUmVjdChwb2ludCwgcmVjdCkge1xuICBjb25zdCB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgYm90dG9tLFxuICAgIHJpZ2h0XG4gIH0gPSByZWN0O1xuICByZXR1cm4gdG9wIDw9IHBvaW50LnkgJiYgcG9pbnQueSA8PSBib3R0b20gJiYgbGVmdCA8PSBwb2ludC54ICYmIHBvaW50LnggPD0gcmlnaHQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgcmVjdGFuZ2xlcyB0aGF0IHRoZSBwb2ludGVyIGlzIGhvdmVyaW5nIG92ZXJcclxuICovXG5cblxuY29uc3QgcG9pbnRlcldpdGhpbiA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgcG9pbnRlckNvb3JkaW5hdGVzXG4gIH0gPSBfcmVmO1xuXG4gIGlmICghcG9pbnRlckNvb3JkaW5hdGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgY29sbGlzaW9ucyA9IFtdO1xuXG4gIGZvciAoY29uc3QgZHJvcHBhYmxlQ29udGFpbmVyIG9mIGRyb3BwYWJsZUNvbnRhaW5lcnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZFxuICAgIH0gPSBkcm9wcGFibGVDb250YWluZXI7XG4gICAgY29uc3QgcmVjdCA9IGRyb3BwYWJsZVJlY3RzLmdldChpZCk7XG5cbiAgICBpZiAocmVjdCAmJiBpc1BvaW50V2l0aGluUmVjdChwb2ludGVyQ29vcmRpbmF0ZXMsIHJlY3QpKSB7XG4gICAgICAvKiBUaGVyZSBtYXkgYmUgbW9yZSB0aGFuIGEgc2luZ2xlIHJlY3RhbmdsZSBpbnRlcnNlY3RpbmdcclxuICAgICAgICogd2l0aCB0aGUgcG9pbnRlciBjb29yZGluYXRlcy4gSW4gb3JkZXIgdG8gc29ydCB0aGVcclxuICAgICAgICogY29sbGlkaW5nIHJlY3RhbmdsZXMsIHdlIG1lYXN1cmUgdGhlIGRpc3RhbmNlIGJldHdlZW5cclxuICAgICAgICogdGhlIHBvaW50ZXIgYW5kIHRoZSBjb3JuZXJzIG9mIHRoZSBpbnRlcnNlY3RpbmcgcmVjdGFuZ2xlXHJcbiAgICAgICAqL1xuICAgICAgY29uc3QgY29ybmVycyA9IGNvcm5lcnNPZlJlY3RhbmdsZShyZWN0KTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IGNvcm5lcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY29ybmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGRpc3RhbmNlQmV0d2Vlbihwb2ludGVyQ29vcmRpbmF0ZXMsIGNvcm5lcik7XG4gICAgICB9LCAwKTtcbiAgICAgIGNvbnN0IGVmZmVjdGl2ZURpc3RhbmNlID0gTnVtYmVyKChkaXN0YW5jZXMgLyA0KS50b0ZpeGVkKDQpKTtcbiAgICAgIGNvbGxpc2lvbnMucHVzaCh7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZHJvcHBhYmxlQ29udGFpbmVyLFxuICAgICAgICAgIHZhbHVlOiBlZmZlY3RpdmVEaXN0YW5jZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29sbGlzaW9ucy5zb3J0KHNvcnRDb2xsaXNpb25zQXNjKTtcbn07XG5cbmZ1bmN0aW9uIGFkanVzdFNjYWxlKHRyYW5zZm9ybSwgcmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiB7IC4uLnRyYW5zZm9ybSxcbiAgICBzY2FsZVg6IHJlY3QxICYmIHJlY3QyID8gcmVjdDEud2lkdGggLyByZWN0Mi53aWR0aCA6IDEsXG4gICAgc2NhbGVZOiByZWN0MSAmJiByZWN0MiA/IHJlY3QxLmhlaWdodCAvIHJlY3QyLmhlaWdodCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdERlbHRhKHJlY3QxLCByZWN0Mikge1xuICByZXR1cm4gcmVjdDEgJiYgcmVjdDIgPyB7XG4gICAgeDogcmVjdDEubGVmdCAtIHJlY3QyLmxlZnQsXG4gICAgeTogcmVjdDEudG9wIC0gcmVjdDIudG9wXG4gIH0gOiBkZWZhdWx0Q29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlY3RBZGp1c3RtZW50Rm4obW9kaWZpZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFkanVzdENsaWVudFJlY3QocmVjdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhZGp1c3RtZW50cyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhZGp1c3RtZW50c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkanVzdG1lbnRzLnJlZHVjZSgoYWNjLCBhZGp1c3RtZW50KSA9PiAoeyAuLi5hY2MsXG4gICAgICB0b3A6IGFjYy50b3AgKyBtb2RpZmllciAqIGFkanVzdG1lbnQueSxcbiAgICAgIGJvdHRvbTogYWNjLmJvdHRvbSArIG1vZGlmaWVyICogYWRqdXN0bWVudC55LFxuICAgICAgbGVmdDogYWNjLmxlZnQgKyBtb2RpZmllciAqIGFkanVzdG1lbnQueCxcbiAgICAgIHJpZ2h0OiBhY2MucmlnaHQgKyBtb2RpZmllciAqIGFkanVzdG1lbnQueFxuICAgIH0pLCB7IC4uLnJlY3RcbiAgICB9KTtcbiAgfTtcbn1cbmNvbnN0IGdldEFkanVzdGVkUmVjdCA9IC8qI19fUFVSRV9fKi9jcmVhdGVSZWN0QWRqdXN0bWVudEZuKDEpO1xuXG5mdW5jdGlvbiBwYXJzZVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgaWYgKHRyYW5zZm9ybS5zdGFydHNXaXRoKCdtYXRyaXgzZCgnKSkge1xuICAgIGNvbnN0IHRyYW5zZm9ybUFycmF5ID0gdHJhbnNmb3JtLnNsaWNlKDksIC0xKS5zcGxpdCgvLCAvKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogK3RyYW5zZm9ybUFycmF5WzEyXSxcbiAgICAgIHk6ICt0cmFuc2Zvcm1BcnJheVsxM10sXG4gICAgICBzY2FsZVg6ICt0cmFuc2Zvcm1BcnJheVswXSxcbiAgICAgIHNjYWxlWTogK3RyYW5zZm9ybUFycmF5WzVdXG4gICAgfTtcbiAgfSBlbHNlIGlmICh0cmFuc2Zvcm0uc3RhcnRzV2l0aCgnbWF0cml4KCcpKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtQXJyYXkgPSB0cmFuc2Zvcm0uc2xpY2UoNywgLTEpLnNwbGl0KC8sIC8pO1xuICAgIHJldHVybiB7XG4gICAgICB4OiArdHJhbnNmb3JtQXJyYXlbNF0sXG4gICAgICB5OiArdHJhbnNmb3JtQXJyYXlbNV0sXG4gICAgICBzY2FsZVg6ICt0cmFuc2Zvcm1BcnJheVswXSxcbiAgICAgIHNjYWxlWTogK3RyYW5zZm9ybUFycmF5WzNdXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpbnZlcnNlVHJhbnNmb3JtKHJlY3QsIHRyYW5zZm9ybSwgdHJhbnNmb3JtT3JpZ2luKSB7XG4gIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtKHRyYW5zZm9ybSk7XG5cbiAgaWYgKCFwYXJzZWRUcmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBzY2FsZVgsXG4gICAgc2NhbGVZLFxuICAgIHg6IHRyYW5zbGF0ZVgsXG4gICAgeTogdHJhbnNsYXRlWVxuICB9ID0gcGFyc2VkVHJhbnNmb3JtO1xuICBjb25zdCB4ID0gcmVjdC5sZWZ0IC0gdHJhbnNsYXRlWCAtICgxIC0gc2NhbGVYKSAqIHBhcnNlRmxvYXQodHJhbnNmb3JtT3JpZ2luKTtcbiAgY29uc3QgeSA9IHJlY3QudG9wIC0gdHJhbnNsYXRlWSAtICgxIC0gc2NhbGVZKSAqIHBhcnNlRmxvYXQodHJhbnNmb3JtT3JpZ2luLnNsaWNlKHRyYW5zZm9ybU9yaWdpbi5pbmRleE9mKCcgJykgKyAxKSk7XG4gIGNvbnN0IHcgPSBzY2FsZVggPyByZWN0LndpZHRoIC8gc2NhbGVYIDogcmVjdC53aWR0aDtcbiAgY29uc3QgaCA9IHNjYWxlWSA/IHJlY3QuaGVpZ2h0IC8gc2NhbGVZIDogcmVjdC5oZWlnaHQ7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHcsXG4gICAgaGVpZ2h0OiBoLFxuICAgIHRvcDogeSxcbiAgICByaWdodDogeCArIHcsXG4gICAgYm90dG9tOiB5ICsgaCxcbiAgICBsZWZ0OiB4XG4gIH07XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBpZ25vcmVUcmFuc2Zvcm06IGZhbHNlXG59O1xuLyoqXHJcbiAqIFJldHVybnMgdGhlIGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0LlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChlbGVtZW50LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gIH1cblxuICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgaWYgKG9wdGlvbnMuaWdub3JlVHJhbnNmb3JtKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luXG4gICAgfSA9IHV0aWxpdGllcy5nZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgIHJlY3QgPSBpbnZlcnNlVHJhbnNmb3JtKHJlY3QsIHRyYW5zZm9ybSwgdHJhbnNmb3JtT3JpZ2luKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGJvdHRvbSxcbiAgICByaWdodFxuICB9ID0gcmVjdDtcbiAgcmV0dXJuIHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgYm90dG9tLFxuICAgIHJpZ2h0XG4gIH07XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFRoZSBDbGllbnRSZWN0IHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXNcclxuICogYXBwbGllZCB0byB0aGUgZWxlbWVudCBpdCBtZWFzdXJlcy5cclxuICpcclxuICovXG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybUFnbm9zdGljQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDbGllbnRSZWN0KGVsZW1lbnQsIHtcbiAgICBpZ25vcmVUcmFuc2Zvcm06IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd0NsaWVudFJlY3QoZWxlbWVudCkge1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuaW5uZXJXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5pbm5lckhlaWdodDtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogd2lkdGgsXG4gICAgYm90dG9tOiBoZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzRml4ZWQobm9kZSwgY29tcHV0ZWRTdHlsZSkge1xuICBpZiAoY29tcHV0ZWRTdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgY29tcHV0ZWRTdHlsZSA9IHV0aWxpdGllcy5nZXRXaW5kb3cobm9kZSkuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnO1xufVxuXG5mdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbWVudCwgY29tcHV0ZWRTdHlsZSkge1xuICBpZiAoY29tcHV0ZWRTdHlsZSA9PT0gdm9pZCAwKSB7XG4gICAgY29tcHV0ZWRTdHlsZSA9IHV0aWxpdGllcy5nZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLztcbiAgY29uc3QgcHJvcGVydGllcyA9IFsnb3ZlcmZsb3cnLCAnb3ZlcmZsb3dYJywgJ292ZXJmbG93WSddO1xuICByZXR1cm4gcHJvcGVydGllcy5zb21lKHByb3BlcnR5ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbXB1dGVkU3R5bGVbcHJvcGVydHldO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gb3ZlcmZsb3dSZWdleC50ZXN0KHZhbHVlKSA6IGZhbHNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyhlbGVtZW50LCBsaW1pdCkge1xuICBjb25zdCBzY3JvbGxQYXJlbnRzID0gW107XG5cbiAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVBbmNlc3RvcnMobm9kZSkge1xuICAgIGlmIChsaW1pdCAhPSBudWxsICYmIHNjcm9sbFBhcmVudHMubGVuZ3RoID49IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2Nyb2xsUGFyZW50cztcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnNjcm9sbGluZ0VsZW1lbnQgIT0gbnVsbCAmJiAhc2Nyb2xsUGFyZW50cy5pbmNsdWRlcyhub2RlLnNjcm9sbGluZ0VsZW1lbnQpKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLnB1c2gobm9kZS5zY3JvbGxpbmdFbGVtZW50KTtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzSFRNTEVsZW1lbnQobm9kZSkgfHwgdXRpbGl0aWVzLmlzU1ZHRWxlbWVudChub2RlKSkge1xuICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFBhcmVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB1dGlsaXRpZXMuZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGlzU2Nyb2xsYWJsZShub2RlLCBjb21wdXRlZFN0eWxlKSkge1xuICAgICAgICBzY3JvbGxQYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRml4ZWQobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHtcbiAgICAgIHJldHVybiBzY3JvbGxQYXJlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kU2Nyb2xsYWJsZUFuY2VzdG9ycyhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbFBhcmVudHM7XG4gIH1cblxuICByZXR1cm4gZmluZFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXRGaXJzdFNjcm9sbGFibGVBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IFtmaXJzdFNjcm9sbGFibGVBbmNlc3Rvcl0gPSBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUsIDEpO1xuICByZXR1cm4gZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IgIT0gbnVsbCA/IGZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIXV0aWxpdGllcy5jYW5Vc2VET00gfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh1dGlsaXRpZXMuaXNXaW5kb3coZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzTm9kZShlbGVtZW50KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RvY3VtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQgPT09IHV0aWxpdGllcy5nZXRPd25lckRvY3VtZW50KGVsZW1lbnQpLnNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsWENvb3JkaW5hdGUoZWxlbWVudCkge1xuICBpZiAodXRpbGl0aWVzLmlzV2luZG93KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsWDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LnNjcm9sbExlZnQ7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxZQ29vcmRpbmF0ZShlbGVtZW50KSB7XG4gIGlmICh1dGlsaXRpZXMuaXNXaW5kb3coZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxZO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsVG9wO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsQ29vcmRpbmF0ZXMoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHg6IGdldFNjcm9sbFhDb29yZGluYXRlKGVsZW1lbnQpLFxuICAgIHk6IGdldFNjcm9sbFlDb29yZGluYXRlKGVsZW1lbnQpXG4gIH07XG59XG5cbnZhciBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltEaXJlY3Rpb25bXCJGb3J3YXJkXCJdID0gMV0gPSBcIkZvcndhcmRcIjtcbiAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkJhY2t3YXJkXCJdID0gLTFdID0gXCJCYWNrd2FyZFwiO1xufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xuXG5mdW5jdGlvbiBpc0RvY3VtZW50U2Nyb2xsaW5nRWxlbWVudChlbGVtZW50KSB7XG4gIGlmICghdXRpbGl0aWVzLmNhblVzZURPTSB8fCAhZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50ID09PSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxpbmdDb250YWluZXIpIHtcbiAgY29uc3QgbWluU2Nyb2xsID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuICBjb25zdCBkaW1lbnNpb25zID0gaXNEb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoc2Nyb2xsaW5nQ29udGFpbmVyKSA/IHtcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgfSA6IHtcbiAgICBoZWlnaHQ6IHNjcm9sbGluZ0NvbnRhaW5lci5jbGllbnRIZWlnaHQsXG4gICAgd2lkdGg6IHNjcm9sbGluZ0NvbnRhaW5lci5jbGllbnRXaWR0aFxuICB9O1xuICBjb25zdCBtYXhTY3JvbGwgPSB7XG4gICAgeDogc2Nyb2xsaW5nQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gZGltZW5zaW9ucy53aWR0aCxcbiAgICB5OiBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gZGltZW5zaW9ucy5oZWlnaHRcbiAgfTtcbiAgY29uc3QgaXNUb3AgPSBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsVG9wIDw9IG1pblNjcm9sbC55O1xuICBjb25zdCBpc0xlZnQgPSBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsTGVmdCA8PSBtaW5TY3JvbGwueDtcbiAgY29uc3QgaXNCb3R0b20gPSBzY3JvbGxpbmdDb250YWluZXIuc2Nyb2xsVG9wID49IG1heFNjcm9sbC55O1xuICBjb25zdCBpc1JpZ2h0ID0gc2Nyb2xsaW5nQ29udGFpbmVyLnNjcm9sbExlZnQgPj0gbWF4U2Nyb2xsLng7XG4gIHJldHVybiB7XG4gICAgaXNUb3AsXG4gICAgaXNMZWZ0LFxuICAgIGlzQm90dG9tLFxuICAgIGlzUmlnaHQsXG4gICAgbWF4U2Nyb2xsLFxuICAgIG1pblNjcm9sbFxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0VGhyZXNob2xkID0ge1xuICB4OiAwLjIsXG4gIHk6IDAuMlxufTtcbmZ1bmN0aW9uIGdldFNjcm9sbERpcmVjdGlvbkFuZFNwZWVkKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsQ29udGFpbmVyUmVjdCwgX3JlZiwgYWNjZWxlcmF0aW9uLCB0aHJlc2hvbGRQZXJjZW50YWdlKSB7XG4gIGxldCB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgYm90dG9tXG4gIH0gPSBfcmVmO1xuXG4gIGlmIChhY2NlbGVyYXRpb24gPT09IHZvaWQgMCkge1xuICAgIGFjY2VsZXJhdGlvbiA9IDEwO1xuICB9XG5cbiAgaWYgKHRocmVzaG9sZFBlcmNlbnRhZ2UgPT09IHZvaWQgMCkge1xuICAgIHRocmVzaG9sZFBlcmNlbnRhZ2UgPSBkZWZhdWx0VGhyZXNob2xkO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGlzVG9wLFxuICAgIGlzQm90dG9tLFxuICAgIGlzTGVmdCxcbiAgICBpc1JpZ2h0XG4gIH0gPSBnZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxDb250YWluZXIpO1xuICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGNvbnN0IHNwZWVkID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuICBjb25zdCB0aHJlc2hvbGQgPSB7XG4gICAgaGVpZ2h0OiBzY3JvbGxDb250YWluZXJSZWN0LmhlaWdodCAqIHRocmVzaG9sZFBlcmNlbnRhZ2UueSxcbiAgICB3aWR0aDogc2Nyb2xsQ29udGFpbmVyUmVjdC53aWR0aCAqIHRocmVzaG9sZFBlcmNlbnRhZ2UueFxuICB9O1xuXG4gIGlmICghaXNUb3AgJiYgdG9wIDw9IHNjcm9sbENvbnRhaW5lclJlY3QudG9wICsgdGhyZXNob2xkLmhlaWdodCkge1xuICAgIC8vIFNjcm9sbCBVcFxuICAgIGRpcmVjdGlvbi55ID0gRGlyZWN0aW9uLkJhY2t3YXJkO1xuICAgIHNwZWVkLnkgPSBhY2NlbGVyYXRpb24gKiBNYXRoLmFicygoc2Nyb2xsQ29udGFpbmVyUmVjdC50b3AgKyB0aHJlc2hvbGQuaGVpZ2h0IC0gdG9wKSAvIHRocmVzaG9sZC5oZWlnaHQpO1xuICB9IGVsc2UgaWYgKCFpc0JvdHRvbSAmJiBib3R0b20gPj0gc2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gLSB0aHJlc2hvbGQuaGVpZ2h0KSB7XG4gICAgLy8gU2Nyb2xsIERvd25cbiAgICBkaXJlY3Rpb24ueSA9IERpcmVjdGlvbi5Gb3J3YXJkO1xuICAgIHNwZWVkLnkgPSBhY2NlbGVyYXRpb24gKiBNYXRoLmFicygoc2Nyb2xsQ29udGFpbmVyUmVjdC5ib3R0b20gLSB0aHJlc2hvbGQuaGVpZ2h0IC0gYm90dG9tKSAvIHRocmVzaG9sZC5oZWlnaHQpO1xuICB9XG5cbiAgaWYgKCFpc1JpZ2h0ICYmIHJpZ2h0ID49IHNjcm9sbENvbnRhaW5lclJlY3QucmlnaHQgLSB0aHJlc2hvbGQud2lkdGgpIHtcbiAgICAvLyBTY3JvbGwgUmlnaHRcbiAgICBkaXJlY3Rpb24ueCA9IERpcmVjdGlvbi5Gb3J3YXJkO1xuICAgIHNwZWVkLnggPSBhY2NlbGVyYXRpb24gKiBNYXRoLmFicygoc2Nyb2xsQ29udGFpbmVyUmVjdC5yaWdodCAtIHRocmVzaG9sZC53aWR0aCAtIHJpZ2h0KSAvIHRocmVzaG9sZC53aWR0aCk7XG4gIH0gZWxzZSBpZiAoIWlzTGVmdCAmJiBsZWZ0IDw9IHNjcm9sbENvbnRhaW5lclJlY3QubGVmdCArIHRocmVzaG9sZC53aWR0aCkge1xuICAgIC8vIFNjcm9sbCBMZWZ0XG4gICAgZGlyZWN0aW9uLnggPSBEaXJlY3Rpb24uQmFja3dhcmQ7XG4gICAgc3BlZWQueCA9IGFjY2VsZXJhdGlvbiAqIE1hdGguYWJzKChzY3JvbGxDb250YWluZXJSZWN0LmxlZnQgKyB0aHJlc2hvbGQud2lkdGggLSBsZWZ0KSAvIHRocmVzaG9sZC53aWR0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpcmVjdGlvbixcbiAgICBzcGVlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxFbGVtZW50UmVjdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJXaWR0aCxcbiAgICAgIGlubmVySGVpZ2h0XG4gICAgfSA9IHdpbmRvdztcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiBpbm5lcldpZHRoLFxuICAgICAgYm90dG9tOiBpbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiBpbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiBpbm5lckhlaWdodFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgYm90dG9tXG4gIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIGJvdHRvbSxcbiAgICB3aWR0aDogZWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbE9mZnNldHMoc2Nyb2xsYWJsZUFuY2VzdG9ycykge1xuICByZXR1cm4gc2Nyb2xsYWJsZUFuY2VzdG9ycy5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICAgIHJldHVybiB1dGlsaXRpZXMuYWRkKGFjYywgZ2V0U2Nyb2xsQ29vcmRpbmF0ZXMobm9kZSkpO1xuICB9LCBkZWZhdWx0Q29vcmRpbmF0ZXMpO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsWE9mZnNldChzY3JvbGxhYmxlQW5jZXN0b3JzKSB7XG4gIHJldHVybiBzY3JvbGxhYmxlQW5jZXN0b3JzLnJlZHVjZSgoYWNjLCBub2RlKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIGdldFNjcm9sbFhDb29yZGluYXRlKG5vZGUpO1xuICB9LCAwKTtcbn1cbmZ1bmN0aW9uIGdldFNjcm9sbFlPZmZzZXQoc2Nyb2xsYWJsZUFuY2VzdG9ycykge1xuICByZXR1cm4gc2Nyb2xsYWJsZUFuY2VzdG9ycy5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyBnZXRTY3JvbGxZQ29vcmRpbmF0ZShub2RlKTtcbiAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoZWxlbWVudCwgbWVhc3VyZSkge1xuICBpZiAobWVhc3VyZSA9PT0gdm9pZCAwKSB7XG4gICAgbWVhc3VyZSA9IGdldENsaWVudFJlY3Q7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgYm90dG9tLFxuICAgIHJpZ2h0XG4gIH0gPSBtZWFzdXJlKGVsZW1lbnQpO1xuICBjb25zdCBmaXJzdFNjcm9sbGFibGVBbmNlc3RvciA9IGdldEZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yKGVsZW1lbnQpO1xuXG4gIGlmICghZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYm90dG9tIDw9IDAgfHwgcmlnaHQgPD0gMCB8fCB0b3AgPj0gd2luZG93LmlubmVySGVpZ2h0IHx8IGxlZnQgPj0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIGJsb2NrOiAnY2VudGVyJyxcbiAgICAgIGlubGluZTogJ2NlbnRlcidcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBwcm9wZXJ0aWVzID0gW1sneCcsIFsnbGVmdCcsICdyaWdodCddLCBnZXRTY3JvbGxYT2Zmc2V0XSwgWyd5JywgWyd0b3AnLCAnYm90dG9tJ10sIGdldFNjcm9sbFlPZmZzZXRdXTtcbmNsYXNzIFJlY3Qge1xuICBjb25zdHJ1Y3RvcihyZWN0LCBlbGVtZW50KSB7XG4gICAgdGhpcy5yZWN0ID0gdm9pZCAwO1xuICAgIHRoaXMud2lkdGggPSB2b2lkIDA7XG4gICAgdGhpcy5oZWlnaHQgPSB2b2lkIDA7XG4gICAgdGhpcy50b3AgPSB2b2lkIDA7XG4gICAgdGhpcy5ib3R0b20gPSB2b2lkIDA7XG4gICAgdGhpcy5yaWdodCA9IHZvaWQgMDtcbiAgICB0aGlzLmxlZnQgPSB2b2lkIDA7XG4gICAgY29uc3Qgc2Nyb2xsYWJsZUFuY2VzdG9ycyA9IGdldFNjcm9sbGFibGVBbmNlc3RvcnMoZWxlbWVudCk7XG4gICAgY29uc3Qgc2Nyb2xsT2Zmc2V0cyA9IGdldFNjcm9sbE9mZnNldHMoc2Nyb2xsYWJsZUFuY2VzdG9ycyk7XG4gICAgdGhpcy5yZWN0ID0geyAuLi5yZWN0XG4gICAgfTtcbiAgICB0aGlzLndpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuXG4gICAgZm9yIChjb25zdCBbYXhpcywga2V5cywgZ2V0U2Nyb2xsT2Zmc2V0XSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXRzID0gZ2V0U2Nyb2xsT2Zmc2V0KHNjcm9sbGFibGVBbmNlc3RvcnMpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsT2Zmc2V0c0RlbHRsYSA9IHNjcm9sbE9mZnNldHNbYXhpc10gLSBjdXJyZW50T2Zmc2V0cztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlY3Rba2V5XSArIHNjcm9sbE9mZnNldHNEZWx0bGE7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmVjdCcsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBMaXN0ZW5lcnMge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHZvaWQgMDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgdGhpcy5yZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgdmFyIF90aGlzJHRhcmdldDtcblxuICAgICAgICByZXR1cm4gKF90aGlzJHRhcmdldCA9IHRoaXMudGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoLi4ubGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgYWRkKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyR0YXJnZXQyO1xuXG4gICAgKF90aGlzJHRhcmdldDIgPSB0aGlzLnRhcmdldCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHRhcmdldDIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goW2V2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9uc10pO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRMaXN0ZW5lclRhcmdldCh0YXJnZXQpIHtcbiAgLy8gSWYgdGhlIGBldmVudC50YXJnZXRgIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudCBldmVudHMgd2lsbCBzdGlsbCBiZSB0YXJnZXRlZFxuICAvLyBhdCBpdCwgYW5kIGhlbmNlIHdvbid0IGFsd2F5cyBidWJibGUgdXAgdG8gdGhlIHdpbmRvdyBvciBkb2N1bWVudCBhbnltb3JlLlxuICAvLyBJZiB0aGVyZSBpcyBhbnkgcmlzayBvZiBhbiBlbGVtZW50IGJlaW5nIHJlbW92ZWQgd2hpbGUgaXQgaXMgYmVpbmcgZHJhZ2dlZCxcbiAgLy8gdGhlIGJlc3QgcHJhY3RpY2UgaXMgdG8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lcnMgZGlyZWN0bHkgdG8gdGhlIHRhcmdldC5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0XG4gIGNvbnN0IHtcbiAgICBFdmVudFRhcmdldFxuICB9ID0gdXRpbGl0aWVzLmdldFdpbmRvdyh0YXJnZXQpO1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgRXZlbnRUYXJnZXQgPyB0YXJnZXQgOiB1dGlsaXRpZXMuZ2V0T3duZXJEb2N1bWVudCh0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBoYXNFeGNlZWRlZERpc3RhbmNlKGRlbHRhLCBtZWFzdXJlbWVudCkge1xuICBjb25zdCBkeCA9IE1hdGguYWJzKGRlbHRhLngpO1xuICBjb25zdCBkeSA9IE1hdGguYWJzKGRlbHRhLnkpO1xuXG4gIGlmICh0eXBlb2YgbWVhc3VyZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMikgPiBtZWFzdXJlbWVudDtcbiAgfVxuXG4gIGlmICgneCcgaW4gbWVhc3VyZW1lbnQgJiYgJ3knIGluIG1lYXN1cmVtZW50KSB7XG4gICAgcmV0dXJuIGR4ID4gbWVhc3VyZW1lbnQueCAmJiBkeSA+IG1lYXN1cmVtZW50Lnk7XG4gIH1cblxuICBpZiAoJ3gnIGluIG1lYXN1cmVtZW50KSB7XG4gICAgcmV0dXJuIGR4ID4gbWVhc3VyZW1lbnQueDtcbiAgfVxuXG4gIGlmICgneScgaW4gbWVhc3VyZW1lbnQpIHtcbiAgICByZXR1cm4gZHkgPiBtZWFzdXJlbWVudC55O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgRXZlbnROYW1lO1xuXG4oZnVuY3Rpb24gKEV2ZW50TmFtZSkge1xuICBFdmVudE5hbWVbXCJDbGlja1wiXSA9IFwiY2xpY2tcIjtcbiAgRXZlbnROYW1lW1wiRHJhZ1N0YXJ0XCJdID0gXCJkcmFnc3RhcnRcIjtcbiAgRXZlbnROYW1lW1wiS2V5ZG93blwiXSA9IFwia2V5ZG93blwiO1xuICBFdmVudE5hbWVbXCJDb250ZXh0TWVudVwiXSA9IFwiY29udGV4dG1lbnVcIjtcbiAgRXZlbnROYW1lW1wiUmVzaXplXCJdID0gXCJyZXNpemVcIjtcbiAgRXZlbnROYW1lW1wiU2VsZWN0aW9uQ2hhbmdlXCJdID0gXCJzZWxlY3Rpb25jaGFuZ2VcIjtcbiAgRXZlbnROYW1lW1wiVmlzaWJpbGl0eUNoYW5nZVwiXSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xufSkoRXZlbnROYW1lIHx8IChFdmVudE5hbWUgPSB7fSkpO1xuXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG4oZnVuY3Rpb24gKEtleWJvYXJkQ29kZSkge1xuICBLZXlib2FyZENvZGVbXCJTcGFjZVwiXSA9IFwiU3BhY2VcIjtcbiAgS2V5Ym9hcmRDb2RlW1wiRG93blwiXSA9IFwiQXJyb3dEb3duXCI7XG4gIEtleWJvYXJkQ29kZVtcIlJpZ2h0XCJdID0gXCJBcnJvd1JpZ2h0XCI7XG4gIEtleWJvYXJkQ29kZVtcIkxlZnRcIl0gPSBcIkFycm93TGVmdFwiO1xuICBLZXlib2FyZENvZGVbXCJVcFwiXSA9IFwiQXJyb3dVcFwiO1xuICBLZXlib2FyZENvZGVbXCJFc2NcIl0gPSBcIkVzY2FwZVwiO1xuICBLZXlib2FyZENvZGVbXCJFbnRlclwiXSA9IFwiRW50ZXJcIjtcbiAgS2V5Ym9hcmRDb2RlW1wiVGFiXCJdID0gXCJUYWJcIjtcbn0pKGV4cG9ydHMuS2V5Ym9hcmRDb2RlIHx8IChleHBvcnRzLktleWJvYXJkQ29kZSA9IHt9KSk7XG5cbmNvbnN0IGRlZmF1bHRLZXlib2FyZENvZGVzID0ge1xuICBzdGFydDogW2V4cG9ydHMuS2V5Ym9hcmRDb2RlLlNwYWNlLCBleHBvcnRzLktleWJvYXJkQ29kZS5FbnRlcl0sXG4gIGNhbmNlbDogW2V4cG9ydHMuS2V5Ym9hcmRDb2RlLkVzY10sXG4gIGVuZDogW2V4cG9ydHMuS2V5Ym9hcmRDb2RlLlNwYWNlLCBleHBvcnRzLktleWJvYXJkQ29kZS5FbnRlciwgZXhwb3J0cy5LZXlib2FyZENvZGUuVGFiXVxufTtcbmNvbnN0IGRlZmF1bHRLZXlib2FyZENvb3JkaW5hdGVHZXR0ZXIgPSAoZXZlbnQsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBjdXJyZW50Q29vcmRpbmF0ZXNcbiAgfSA9IF9yZWY7XG5cbiAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgY2FzZSBleHBvcnRzLktleWJvYXJkQ29kZS5SaWdodDpcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRDb29yZGluYXRlcyxcbiAgICAgICAgeDogY3VycmVudENvb3JkaW5hdGVzLnggKyAyNVxuICAgICAgfTtcblxuICAgIGNhc2UgZXhwb3J0cy5LZXlib2FyZENvZGUuTGVmdDpcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRDb29yZGluYXRlcyxcbiAgICAgICAgeDogY3VycmVudENvb3JkaW5hdGVzLnggLSAyNVxuICAgICAgfTtcblxuICAgIGNhc2UgZXhwb3J0cy5LZXlib2FyZENvZGUuRG93bjpcbiAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRDb29yZGluYXRlcyxcbiAgICAgICAgeTogY3VycmVudENvb3JkaW5hdGVzLnkgKyAyNVxuICAgICAgfTtcblxuICAgIGNhc2UgZXhwb3J0cy5LZXlib2FyZENvZGUuVXA6XG4gICAgICByZXR1cm4geyAuLi5jdXJyZW50Q29vcmRpbmF0ZXMsXG4gICAgICAgIHk6IGN1cnJlbnRDb29yZGluYXRlcy55IC0gMjVcbiAgICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuY2xhc3MgS2V5Ym9hcmRTZW5zb3Ige1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSB2b2lkIDA7XG4gICAgdGhpcy5hdXRvU2Nyb2xsRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVmZXJlbmNlQ29vcmRpbmF0ZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHRhcmdldFxuICAgICAgfVxuICAgIH0gPSBwcm9wcztcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTGlzdGVuZXJzKHV0aWxpdGllcy5nZXRPd25lckRvY3VtZW50KHRhcmdldCkpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzID0gbmV3IExpc3RlbmVycyh1dGlsaXRpZXMuZ2V0V2luZG93KHRhcmdldCkpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmF0dGFjaCgpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuaGFuZGxlU3RhcnQoKTtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycy5hZGQoRXZlbnROYW1lLlJlc2l6ZSwgdGhpcy5oYW5kbGVDYW5jZWwpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuVmlzaWJpbGl0eUNoYW5nZSwgdGhpcy5oYW5kbGVDYW5jZWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saXN0ZW5lcnMuYWRkKEV2ZW50TmFtZS5LZXlkb3duLCB0aGlzLmhhbmRsZUtleURvd24pKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZU5vZGUsXG4gICAgICBvblN0YXJ0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgbm9kZSA9IGFjdGl2ZU5vZGUubm9kZS5jdXJyZW50O1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHNjcm9sbEludG9WaWV3SWZOZWVkZWQobm9kZSk7XG4gICAgfVxuXG4gICAgb25TdGFydChkZWZhdWx0Q29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNLZXlib2FyZEV2ZW50KGV2ZW50KSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge1xuICAgICAgICBrZXlib2FyZENvZGVzID0gZGVmYXVsdEtleWJvYXJkQ29kZXMsXG4gICAgICAgIGNvb3JkaW5hdGVHZXR0ZXIgPSBkZWZhdWx0S2V5Ym9hcmRDb29yZGluYXRlR2V0dGVyLFxuICAgICAgICBzY3JvbGxCZWhhdmlvciA9ICdzbW9vdGgnXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29kZVxuICAgICAgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Ym9hcmRDb2Rlcy5lbmQuaW5jbHVkZXMoY29kZSkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVFbmQoZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlib2FyZENvZGVzLmNhbmNlbC5pbmNsdWRlcyhjb2RlKSkge1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbChldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBjb2xsaXNpb25SZWN0XG4gICAgICB9ID0gY29udGV4dC5jdXJyZW50O1xuICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGVzID0gY29sbGlzaW9uUmVjdCA/IHtcbiAgICAgICAgeDogY29sbGlzaW9uUmVjdC5sZWZ0LFxuICAgICAgICB5OiBjb2xsaXNpb25SZWN0LnRvcFxuICAgICAgfSA6IGRlZmF1bHRDb29yZGluYXRlcztcblxuICAgICAgaWYgKCF0aGlzLnJlZmVyZW5jZUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlQ29vcmRpbmF0ZXMgPSBjdXJyZW50Q29vcmRpbmF0ZXM7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZUdldHRlcihldmVudCwge1xuICAgICAgICBhY3RpdmUsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQuY3VycmVudCxcbiAgICAgICAgY3VycmVudENvb3JkaW5hdGVzXG4gICAgICB9KTtcblxuICAgICAgaWYgKG5ld0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzRGVsdGEgPSB1dGlsaXRpZXMuc3VidHJhY3QobmV3Q29vcmRpbmF0ZXMsIGN1cnJlbnRDb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2Nyb2xsYWJsZUFuY2VzdG9yc1xuICAgICAgICB9ID0gY29udGV4dC5jdXJyZW50O1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2Nyb2xsQ29udGFpbmVyIG9mIHNjcm9sbGFibGVBbmNlc3RvcnMpIHtcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC5jb2RlO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlzVG9wLFxuICAgICAgICAgICAgaXNSaWdodCxcbiAgICAgICAgICAgIGlzTGVmdCxcbiAgICAgICAgICAgIGlzQm90dG9tLFxuICAgICAgICAgICAgbWF4U2Nyb2xsLFxuICAgICAgICAgICAgbWluU2Nyb2xsXG4gICAgICAgICAgfSA9IGdldFNjcm9sbFBvc2l0aW9uKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgICAgY29uc3Qgc2Nyb2xsRWxlbWVudFJlY3QgPSBnZXRTY3JvbGxFbGVtZW50UmVjdChzY3JvbGxDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IGNsYW1wZWRDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIHg6IE1hdGgubWluKGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuUmlnaHQgPyBzY3JvbGxFbGVtZW50UmVjdC5yaWdodCAtIHNjcm9sbEVsZW1lbnRSZWN0LndpZHRoIC8gMiA6IHNjcm9sbEVsZW1lbnRSZWN0LnJpZ2h0LCBNYXRoLm1heChkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlJpZ2h0ID8gc2Nyb2xsRWxlbWVudFJlY3QubGVmdCA6IHNjcm9sbEVsZW1lbnRSZWN0LmxlZnQgKyBzY3JvbGxFbGVtZW50UmVjdC53aWR0aCAvIDIsIG5ld0Nvb3JkaW5hdGVzLngpKSxcbiAgICAgICAgICAgIHk6IE1hdGgubWluKGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuRG93biA/IHNjcm9sbEVsZW1lbnRSZWN0LmJvdHRvbSAtIHNjcm9sbEVsZW1lbnRSZWN0LmhlaWdodCAvIDIgOiBzY3JvbGxFbGVtZW50UmVjdC5ib3R0b20sIE1hdGgubWF4KGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuRG93biA/IHNjcm9sbEVsZW1lbnRSZWN0LnRvcCA6IHNjcm9sbEVsZW1lbnRSZWN0LnRvcCArIHNjcm9sbEVsZW1lbnRSZWN0LmhlaWdodCAvIDIsIG5ld0Nvb3JkaW5hdGVzLnkpKVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgY2FuU2Nyb2xsWCA9IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuUmlnaHQgJiYgIWlzUmlnaHQgfHwgZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5MZWZ0ICYmICFpc0xlZnQ7XG4gICAgICAgICAgY29uc3QgY2FuU2Nyb2xsWSA9IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuRG93biAmJiAhaXNCb3R0b20gfHwgZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5VcCAmJiAhaXNUb3A7XG5cbiAgICAgICAgICBpZiAoY2FuU2Nyb2xsWCAmJiBjbGFtcGVkQ29vcmRpbmF0ZXMueCAhPT0gbmV3Q29vcmRpbmF0ZXMueCkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2Nyb2xsQ29vcmRpbmF0ZXMgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCArIGNvb3JkaW5hdGVzRGVsdGEueDtcbiAgICAgICAgICAgIGNvbnN0IGNhblNjcm9sbFRvTmV3Q29vcmRpbmF0ZXMgPSBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlJpZ2h0ICYmIG5ld1Njcm9sbENvb3JkaW5hdGVzIDw9IG1heFNjcm9sbC54IHx8IGRpcmVjdGlvbiA9PT0gZXhwb3J0cy5LZXlib2FyZENvZGUuTGVmdCAmJiBuZXdTY3JvbGxDb29yZGluYXRlcyA+PSBtaW5TY3JvbGwueDtcblxuICAgICAgICAgICAgaWYgKGNhblNjcm9sbFRvTmV3Q29vcmRpbmF0ZXMgJiYgIWNvb3JkaW5hdGVzRGVsdGEueSkge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSBjb29yZGluYXRlcywgdGhlIHNjcm9sbCBhZGp1c3RtZW50IGFsb25lIHdpbGwgdHJpZ2dlclxuICAgICAgICAgICAgICAvLyBsb2dpYyB0byBhdXRvLWRldGVjdCB0aGUgbmV3IGNvbnRhaW5lciB3ZSBhcmUgb3ZlclxuICAgICAgICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ld1Njcm9sbENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBzY3JvbGxCZWhhdmlvclxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FuU2Nyb2xsVG9OZXdDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICBzY3JvbGxEZWx0YS54ID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLSBuZXdTY3JvbGxDb29yZGluYXRlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNjcm9sbERlbHRhLnggPSBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLlJpZ2h0ID8gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLSBtYXhTY3JvbGwueCA6IHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC0gbWluU2Nyb2xsLng7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWx0YS54KSB7XG4gICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgICAgbGVmdDogLXNjcm9sbERlbHRhLngsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IHNjcm9sbEJlaGF2aW9yXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGNhblNjcm9sbFkgJiYgY2xhbXBlZENvb3JkaW5hdGVzLnkgIT09IG5ld0Nvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Njcm9sbENvb3JkaW5hdGVzID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCArIGNvb3JkaW5hdGVzRGVsdGEueTtcbiAgICAgICAgICAgIGNvbnN0IGNhblNjcm9sbFRvTmV3Q29vcmRpbmF0ZXMgPSBkaXJlY3Rpb24gPT09IGV4cG9ydHMuS2V5Ym9hcmRDb2RlLkRvd24gJiYgbmV3U2Nyb2xsQ29vcmRpbmF0ZXMgPD0gbWF4U2Nyb2xsLnkgfHwgZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5VcCAmJiBuZXdTY3JvbGxDb29yZGluYXRlcyA+PSBtaW5TY3JvbGwueTtcblxuICAgICAgICAgICAgaWYgKGNhblNjcm9sbFRvTmV3Q29vcmRpbmF0ZXMgJiYgIWNvb3JkaW5hdGVzRGVsdGEueCkge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSBjb29yZGluYXRlcywgdGhlIHNjcm9sbCBhZGp1c3RtZW50IGFsb25lIHdpbGwgdHJpZ2dlclxuICAgICAgICAgICAgICAvLyBsb2dpYyB0byBhdXRvLWRldGVjdCB0aGUgbmV3IGNvbnRhaW5lciB3ZSBhcmUgb3ZlclxuICAgICAgICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogbmV3U2Nyb2xsQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IHNjcm9sbEJlaGF2aW9yXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYW5TY3JvbGxUb05ld0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgIHNjcm9sbERlbHRhLnkgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIC0gbmV3U2Nyb2xsQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzY3JvbGxEZWx0YS55ID0gZGlyZWN0aW9uID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5Eb3duID8gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCAtIG1heFNjcm9sbC55IDogc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCAtIG1pblNjcm9sbC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVsdGEueSkge1xuICAgICAgICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgICAgIHRvcDogLXNjcm9sbERlbHRhLnksXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IHNjcm9sbEJlaGF2aW9yXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZU1vdmUoZXZlbnQsIHV0aWxpdGllcy5hZGQodXRpbGl0aWVzLnN1YnRyYWN0KG5ld0Nvb3JkaW5hdGVzLCB0aGlzLnJlZmVyZW5jZUNvb3JkaW5hdGVzKSwgc2Nyb2xsRGVsdGEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2ZW50LCBjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uTW92ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGhhbmRsZUVuZChldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uRW5kXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIG9uRW5kKCk7XG4gIH1cblxuICBoYW5kbGVDYW5jZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNhbmNlbFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICBvbkNhbmNlbCgpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLnJlbW92ZUFsbCgpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLnJlbW92ZUFsbCgpO1xuICB9XG5cbn1cbktleWJvYXJkU2Vuc29yLmFjdGl2YXRvcnMgPSBbe1xuICBldmVudE5hbWU6ICdvbktleURvd24nLFxuICBoYW5kbGVyOiAoZXZlbnQsIF9yZWYsIF9yZWYyKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGtleWJvYXJkQ29kZXMgPSBkZWZhdWx0S2V5Ym9hcmRDb2RlcyxcbiAgICAgIG9uQWN0aXZhdGlvblxuICAgIH0gPSBfcmVmO1xuICAgIGxldCB7XG4gICAgICBhY3RpdmVcbiAgICB9ID0gX3JlZjI7XG4gICAgY29uc3Qge1xuICAgICAgY29kZVxuICAgIH0gPSBldmVudC5uYXRpdmVFdmVudDtcblxuICAgIGlmIChrZXlib2FyZENvZGVzLnN0YXJ0LmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgICBjb25zdCBhY3RpdmF0b3IgPSBhY3RpdmUuYWN0aXZhdG9yTm9kZS5jdXJyZW50O1xuXG4gICAgICBpZiAoYWN0aXZhdG9yICYmIGV2ZW50LnRhcmdldCAhPT0gYWN0aXZhdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uQWN0aXZhdGlvbiA9PSBudWxsID8gdm9pZCAwIDogb25BY3RpdmF0aW9uKHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50Lm5hdGl2ZUV2ZW50XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIGlzRGlzdGFuY2VDb25zdHJhaW50KGNvbnN0cmFpbnQpIHtcbiAgcmV0dXJuIEJvb2xlYW4oY29uc3RyYWludCAmJiAnZGlzdGFuY2UnIGluIGNvbnN0cmFpbnQpO1xufVxuXG5mdW5jdGlvbiBpc0RlbGF5Q29uc3RyYWludChjb25zdHJhaW50KSB7XG4gIHJldHVybiBCb29sZWFuKGNvbnN0cmFpbnQgJiYgJ2RlbGF5JyBpbiBjb25zdHJhaW50KTtcbn1cblxuY2xhc3MgQWJzdHJhY3RQb2ludGVyU2Vuc29yIHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGV2ZW50cywgbGlzdGVuZXJUYXJnZXQpIHtcbiAgICB2YXIgX2dldEV2ZW50Q29vcmRpbmF0ZXM7XG5cbiAgICBpZiAobGlzdGVuZXJUYXJnZXQgPT09IHZvaWQgMCkge1xuICAgICAgbGlzdGVuZXJUYXJnZXQgPSBnZXRFdmVudExpc3RlbmVyVGFyZ2V0KHByb3BzLmV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcyA9IHZvaWQgMDtcbiAgICB0aGlzLmV2ZW50cyA9IHZvaWQgMDtcbiAgICB0aGlzLmF1dG9TY3JvbGxFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRvY3VtZW50ID0gdm9pZCAwO1xuICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsQ29vcmRpbmF0ZXMgPSB2b2lkIDA7XG4gICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gdm9pZCAwO1xuICAgIHRoaXMuZG9jdW1lbnRMaXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50XG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldFxuICAgIH0gPSBldmVudDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5kb2N1bWVudCA9IHV0aWxpdGllcy5nZXRPd25lckRvY3VtZW50KHRhcmdldCk7XG4gICAgdGhpcy5kb2N1bWVudExpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnModGhpcy5kb2N1bWVudCk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgTGlzdGVuZXJzKGxpc3RlbmVyVGFyZ2V0KTtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnModXRpbGl0aWVzLmdldFdpbmRvdyh0YXJnZXQpKTtcbiAgICB0aGlzLmluaXRpYWxDb29yZGluYXRlcyA9IChfZ2V0RXZlbnRDb29yZGluYXRlcyA9IHV0aWxpdGllcy5nZXRFdmVudENvb3JkaW5hdGVzKGV2ZW50KSkgIT0gbnVsbCA/IF9nZXRFdmVudENvb3JkaW5hdGVzIDogZGVmYXVsdENvb3JkaW5hdGVzO1xuICAgIHRoaXMuaGFuZGxlU3RhcnQgPSB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbmQgPSB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleWRvd24gPSB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZVRleHRTZWxlY3Rpb24gPSB0aGlzLnJlbW92ZVRleHRTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmF0dGFjaCgpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50cyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBhY3RpdmF0aW9uQ29uc3RyYWludCxcbiAgICAgICAgICBieXBhc3NBY3RpdmF0aW9uQ29uc3RyYWludFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lcnMuYWRkKGV2ZW50cy5tb3ZlLm5hbWUsIHRoaXMuaGFuZGxlTW92ZSwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5hZGQoZXZlbnRzLmVuZC5uYW1lLCB0aGlzLmhhbmRsZUVuZCk7XG5cbiAgICBpZiAoZXZlbnRzLmNhbmNlbCkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuYWRkKGV2ZW50cy5jYW5jZWwubmFtZSwgdGhpcy5oYW5kbGVDYW5jZWwpO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuUmVzaXplLCB0aGlzLmhhbmRsZUNhbmNlbCk7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMuYWRkKEV2ZW50TmFtZS5EcmFnU3RhcnQsIHByZXZlbnREZWZhdWx0KTtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycy5hZGQoRXZlbnROYW1lLlZpc2liaWxpdHlDaGFuZ2UsIHRoaXMuaGFuZGxlQ2FuY2VsKTtcbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycy5hZGQoRXZlbnROYW1lLkNvbnRleHRNZW51LCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgdGhpcy5kb2N1bWVudExpc3RlbmVycy5hZGQoRXZlbnROYW1lLktleWRvd24sIHRoaXMuaGFuZGxlS2V5ZG93bik7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkNvbnN0cmFpbnQpIHtcbiAgICAgIGlmIChieXBhc3NBY3RpdmF0aW9uQ29uc3RyYWludCAhPSBudWxsICYmIGJ5cGFzc0FjdGl2YXRpb25Db25zdHJhaW50KHtcbiAgICAgICAgZXZlbnQ6IHRoaXMucHJvcHMuZXZlbnQsXG4gICAgICAgIGFjdGl2ZU5vZGU6IHRoaXMucHJvcHMuYWN0aXZlTm9kZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5wcm9wcy5vcHRpb25zXG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZWxheUNvbnN0cmFpbnQoYWN0aXZhdGlvbkNvbnN0cmFpbnQpKSB7XG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLmhhbmRsZVN0YXJ0LCBhY3RpdmF0aW9uQ29uc3RyYWludC5kZWxheSk7XG4gICAgICAgIHRoaXMuaGFuZGxlUGVuZGluZyhhY3RpdmF0aW9uQ29uc3RyYWludCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzdGFuY2VDb25zdHJhaW50KGFjdGl2YXRpb25Db25zdHJhaW50KSkge1xuICAgICAgICB0aGlzLmhhbmRsZVBlbmRpbmcoYWN0aXZhdGlvbkNvbnN0cmFpbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTdGFydCgpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLnJlbW92ZUFsbCgpO1xuICAgIHRoaXMud2luZG93TGlzdGVuZXJzLnJlbW92ZUFsbCgpOyAvLyBXYWl0IHVudGlsIHRoZSBuZXh0IGV2ZW50IGxvb3AgYmVmb3JlIHJlbW92aW5nIGRvY3VtZW50IGxpc3RlbmVyc1xuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugd2UgbGlzdGVuIGZvciBgY2xpY2tgIGFuZCBgc2VsZWN0aW9uYCBldmVudHMgb24gdGhlIGRvY3VtZW50XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMuZG9jdW1lbnRMaXN0ZW5lcnMucmVtb3ZlQWxsLCA1MCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGVuZGluZyhjb25zdHJhaW50LCBvZmZzZXQpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmUsXG4gICAgICBvblBlbmRpbmdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblBlbmRpbmcoYWN0aXZlLCBjb25zdHJhaW50LCB0aGlzLmluaXRpYWxDb29yZGluYXRlcywgb2Zmc2V0KTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluaXRpYWxDb29yZGluYXRlc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU3RhcnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpbml0aWFsQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTsgLy8gU3RvcCBwcm9wYWdhdGlvbiBvZiBjbGljayBldmVudHMgb25jZSBhY3RpdmF0aW9uIGNvbnN0cmFpbnRzIGFyZSBtZXRcblxuICAgICAgdGhpcy5kb2N1bWVudExpc3RlbmVycy5hZGQoRXZlbnROYW1lLkNsaWNrLCBzdG9wUHJvcGFnYXRpb24sIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgfSk7IC8vIFJlbW92ZSBhbnkgdGV4dCBzZWxlY3Rpb24gZnJvbSB0aGUgZG9jdW1lbnRcblxuICAgICAgdGhpcy5yZW1vdmVUZXh0U2VsZWN0aW9uKCk7IC8vIFByZXZlbnQgZnVydGhlciB0ZXh0IHNlbGVjdGlvbiB3aGlsZSBkcmFnZ2luZ1xuXG4gICAgICB0aGlzLmRvY3VtZW50TGlzdGVuZXJzLmFkZChFdmVudE5hbWUuU2VsZWN0aW9uQ2hhbmdlLCB0aGlzLnJlbW92ZVRleHRTZWxlY3Rpb24pO1xuICAgICAgb25TdGFydChpbml0aWFsQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICB2YXIgX2dldEV2ZW50Q29vcmRpbmF0ZXMyO1xuXG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZhdGVkLFxuICAgICAgaW5pdGlhbENvb3JkaW5hdGVzLFxuICAgICAgcHJvcHNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBvbk1vdmUsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50XG4gICAgICB9XG4gICAgfSA9IHByb3BzO1xuXG4gICAgaWYgKCFpbml0aWFsQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IChfZ2V0RXZlbnRDb29yZGluYXRlczIgPSB1dGlsaXRpZXMuZ2V0RXZlbnRDb29yZGluYXRlcyhldmVudCkpICE9IG51bGwgPyBfZ2V0RXZlbnRDb29yZGluYXRlczIgOiBkZWZhdWx0Q29vcmRpbmF0ZXM7XG4gICAgY29uc3QgZGVsdGEgPSB1dGlsaXRpZXMuc3VidHJhY3QoaW5pdGlhbENvb3JkaW5hdGVzLCBjb29yZGluYXRlcyk7IC8vIENvbnN0cmFpbnQgdmFsaWRhdGlvblxuXG4gICAgaWYgKCFhY3RpdmF0ZWQgJiYgYWN0aXZhdGlvbkNvbnN0cmFpbnQpIHtcbiAgICAgIGlmIChpc0Rpc3RhbmNlQ29uc3RyYWludChhY3RpdmF0aW9uQ29uc3RyYWludCkpIHtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25Db25zdHJhaW50LnRvbGVyYW5jZSAhPSBudWxsICYmIGhhc0V4Y2VlZGVkRGlzdGFuY2UoZGVsdGEsIGFjdGl2YXRpb25Db25zdHJhaW50LnRvbGVyYW5jZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNFeGNlZWRlZERpc3RhbmNlKGRlbHRhLCBhY3RpdmF0aW9uQ29uc3RyYWludC5kaXN0YW5jZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlbGF5Q29uc3RyYWludChhY3RpdmF0aW9uQ29uc3RyYWludCkpIHtcbiAgICAgICAgaWYgKGhhc0V4Y2VlZGVkRGlzdGFuY2UoZGVsdGEsIGFjdGl2YXRpb25Db25zdHJhaW50LnRvbGVyYW5jZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhhbmRsZVBlbmRpbmcoYWN0aXZhdGlvbkNvbnN0cmFpbnQsIGRlbHRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbk1vdmUoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgaGFuZGxlRW5kKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQWJvcnQsXG4gICAgICBvbkVuZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZGV0YWNoKCk7XG5cbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB7XG4gICAgICBvbkFib3J0KHRoaXMucHJvcHMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBvbkVuZCgpO1xuICB9XG5cbiAgaGFuZGxlQ2FuY2VsKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQWJvcnQsXG4gICAgICBvbkNhbmNlbFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZGV0YWNoKCk7XG5cbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkKSB7XG4gICAgICBvbkFib3J0KHRoaXMucHJvcHMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpO1xuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5jb2RlID09PSBleHBvcnRzLktleWJvYXJkQ29kZS5Fc2MpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGV4dFNlbGVjdGlvbigpIHtcbiAgICB2YXIgX3RoaXMkZG9jdW1lbnQkZ2V0U2VsO1xuXG4gICAgKF90aGlzJGRvY3VtZW50JGdldFNlbCA9IHRoaXMuZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRkb2N1bWVudCRnZXRTZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gIH1cblxufVxuXG5jb25zdCBldmVudHMgPSB7XG4gIGNhbmNlbDoge1xuICAgIG5hbWU6ICdwb2ludGVyY2FuY2VsJ1xuICB9LFxuICBtb3ZlOiB7XG4gICAgbmFtZTogJ3BvaW50ZXJtb3ZlJ1xuICB9LFxuICBlbmQ6IHtcbiAgICBuYW1lOiAncG9pbnRlcnVwJ1xuICB9XG59O1xuY2xhc3MgUG9pbnRlclNlbnNvciBleHRlbmRzIEFic3RyYWN0UG9pbnRlclNlbnNvciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnRcbiAgICB9ID0gcHJvcHM7IC8vIFBvaW50ZXIgZXZlbnRzIHN0b3AgZmlyaW5nIGlmIHRoZSB0YXJnZXQgaXMgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXG4gICAgLy8gVGhlcmVmb3JlIHdlIGF0dGFjaCBsaXN0ZW5lcnMgdG8gdGhlIG93bmVyIGRvY3VtZW50IGluc3RlYWRcblxuICAgIGNvbnN0IGxpc3RlbmVyVGFyZ2V0ID0gdXRpbGl0aWVzLmdldE93bmVyRG9jdW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICBzdXBlcihwcm9wcywgZXZlbnRzLCBsaXN0ZW5lclRhcmdldCk7XG4gIH1cblxufVxuUG9pbnRlclNlbnNvci5hY3RpdmF0b3JzID0gW3tcbiAgZXZlbnROYW1lOiAnb25Qb2ludGVyRG93bicsXG4gIGhhbmRsZXI6IChfcmVmLCBfcmVmMikgPT4ge1xuICAgIGxldCB7XG4gICAgICBuYXRpdmVFdmVudDogZXZlbnRcbiAgICB9ID0gX3JlZjtcbiAgICBsZXQge1xuICAgICAgb25BY3RpdmF0aW9uXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKCFldmVudC5pc1ByaW1hcnkgfHwgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25BY3RpdmF0aW9uID09IG51bGwgPyB2b2lkIDAgOiBvbkFjdGl2YXRpb24oe1xuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufV07XG5cbmNvbnN0IGV2ZW50cyQxID0ge1xuICBtb3ZlOiB7XG4gICAgbmFtZTogJ21vdXNlbW92ZSdcbiAgfSxcbiAgZW5kOiB7XG4gICAgbmFtZTogJ21vdXNldXAnXG4gIH1cbn07XG52YXIgTW91c2VCdXR0b247XG5cbihmdW5jdGlvbiAoTW91c2VCdXR0b24pIHtcbiAgTW91c2VCdXR0b25bTW91c2VCdXR0b25bXCJSaWdodENsaWNrXCJdID0gMl0gPSBcIlJpZ2h0Q2xpY2tcIjtcbn0pKE1vdXNlQnV0dG9uIHx8IChNb3VzZUJ1dHRvbiA9IHt9KSk7XG5cbmNsYXNzIE1vdXNlU2Vuc29yIGV4dGVuZHMgQWJzdHJhY3RQb2ludGVyU2Vuc29yIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcywgZXZlbnRzJDEsIHV0aWxpdGllcy5nZXRPd25lckRvY3VtZW50KHByb3BzLmV2ZW50LnRhcmdldCkpO1xuICB9XG5cbn1cbk1vdXNlU2Vuc29yLmFjdGl2YXRvcnMgPSBbe1xuICBldmVudE5hbWU6ICdvbk1vdXNlRG93bicsXG4gIGhhbmRsZXI6IChfcmVmLCBfcmVmMikgPT4ge1xuICAgIGxldCB7XG4gICAgICBuYXRpdmVFdmVudDogZXZlbnRcbiAgICB9ID0gX3JlZjtcbiAgICBsZXQge1xuICAgICAgb25BY3RpdmF0aW9uXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gTW91c2VCdXR0b24uUmlnaHRDbGljaykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQWN0aXZhdGlvbiA9PSBudWxsID8gdm9pZCAwIDogb25BY3RpdmF0aW9uKHtcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1dO1xuXG5jb25zdCBldmVudHMkMiA9IHtcbiAgY2FuY2VsOiB7XG4gICAgbmFtZTogJ3RvdWNoY2FuY2VsJ1xuICB9LFxuICBtb3ZlOiB7XG4gICAgbmFtZTogJ3RvdWNobW92ZSdcbiAgfSxcbiAgZW5kOiB7XG4gICAgbmFtZTogJ3RvdWNoZW5kJ1xuICB9XG59O1xuY2xhc3MgVG91Y2hTZW5zb3IgZXh0ZW5kcyBBYnN0cmFjdFBvaW50ZXJTZW5zb3Ige1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzLCBldmVudHMkMik7XG4gIH1cblxuICBzdGF0aWMgc2V0dXAoKSB7XG4gICAgLy8gQWRkaW5nIGEgbm9uLWNhcHR1cmUgYW5kIG5vbi1wYXNzaXZlIGB0b3VjaG1vdmVgIGxpc3RlbmVyIGluIG9yZGVyXG4gICAgLy8gdG8gZm9yY2UgYGV2ZW50LnByZXZlbnREZWZhdWx0KClgIGNhbGxzIHRvIHdvcmsgaW4gZHluYW1pY2FsbHkgYWRkZWRcbiAgICAvLyB0b3VjaG1vdmUgZXZlbnQgaGFuZGxlcnMuIFRoaXMgaXMgcmVxdWlyZWQgZm9yIGlPUyBTYWZhcmkuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzJDIubW92ZS5uYW1lLCBub29wLCB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzJDIubW92ZS5uYW1lLCBub29wKTtcbiAgICB9OyAvLyBXZSBjcmVhdGUgYSBuZXcgaGFuZGxlciBiZWNhdXNlIHRoZSB0ZWFyZG93biBmdW5jdGlvbiBvZiBhbm90aGVyIHNlbnNvclxuICAgIC8vIGNvdWxkIHJlbW92ZSBvdXIgZXZlbnQgbGlzdGVuZXIgaWYgd2UgdXNlIGEgcmVmZXJlbnRpYWxseSBlcXVhbCBsaXN0ZW5lci5cblxuICAgIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICB9XG5cbn1cblRvdWNoU2Vuc29yLmFjdGl2YXRvcnMgPSBbe1xuICBldmVudE5hbWU6ICdvblRvdWNoU3RhcnQnLFxuICBoYW5kbGVyOiAoX3JlZiwgX3JlZjIpID0+IHtcbiAgICBsZXQge1xuICAgICAgbmF0aXZlRXZlbnQ6IGV2ZW50XG4gICAgfSA9IF9yZWY7XG4gICAgbGV0IHtcbiAgICAgIG9uQWN0aXZhdGlvblxuICAgIH0gPSBfcmVmMjtcbiAgICBjb25zdCB7XG4gICAgICB0b3VjaGVzXG4gICAgfSA9IGV2ZW50O1xuXG4gICAgaWYgKHRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQWN0aXZhdGlvbiA9PSBudWxsID8gdm9pZCAwIDogb25BY3RpdmF0aW9uKHtcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1dO1xuXG4oZnVuY3Rpb24gKEF1dG9TY3JvbGxBY3RpdmF0b3IpIHtcbiAgQXV0b1Njcm9sbEFjdGl2YXRvcltBdXRvU2Nyb2xsQWN0aXZhdG9yW1wiUG9pbnRlclwiXSA9IDBdID0gXCJQb2ludGVyXCI7XG4gIEF1dG9TY3JvbGxBY3RpdmF0b3JbQXV0b1Njcm9sbEFjdGl2YXRvcltcIkRyYWdnYWJsZVJlY3RcIl0gPSAxXSA9IFwiRHJhZ2dhYmxlUmVjdFwiO1xufSkoZXhwb3J0cy5BdXRvU2Nyb2xsQWN0aXZhdG9yIHx8IChleHBvcnRzLkF1dG9TY3JvbGxBY3RpdmF0b3IgPSB7fSkpO1xuXG4oZnVuY3Rpb24gKFRyYXZlcnNhbE9yZGVyKSB7XG4gIFRyYXZlcnNhbE9yZGVyW1RyYXZlcnNhbE9yZGVyW1wiVHJlZU9yZGVyXCJdID0gMF0gPSBcIlRyZWVPcmRlclwiO1xuICBUcmF2ZXJzYWxPcmRlcltUcmF2ZXJzYWxPcmRlcltcIlJldmVyc2VkVHJlZU9yZGVyXCJdID0gMV0gPSBcIlJldmVyc2VkVHJlZU9yZGVyXCI7XG59KShleHBvcnRzLlRyYXZlcnNhbE9yZGVyIHx8IChleHBvcnRzLlRyYXZlcnNhbE9yZGVyID0ge30pKTtcblxuZnVuY3Rpb24gdXNlQXV0b1Njcm9sbGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBhY2NlbGVyYXRpb24sXG4gICAgYWN0aXZhdG9yID0gZXhwb3J0cy5BdXRvU2Nyb2xsQWN0aXZhdG9yLlBvaW50ZXIsXG4gICAgY2FuU2Nyb2xsLFxuICAgIGRyYWdnaW5nUmVjdCxcbiAgICBlbmFibGVkLFxuICAgIGludGVydmFsID0gNSxcbiAgICBvcmRlciA9IGV4cG9ydHMuVHJhdmVyc2FsT3JkZXIuVHJlZU9yZGVyLFxuICAgIHBvaW50ZXJDb29yZGluYXRlcyxcbiAgICBzY3JvbGxhYmxlQW5jZXN0b3JzLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvclJlY3RzLFxuICAgIGRlbHRhLFxuICAgIHRocmVzaG9sZFxuICB9ID0gX3JlZjtcbiAgY29uc3Qgc2Nyb2xsSW50ZW50ID0gdXNlU2Nyb2xsSW50ZW50KHtcbiAgICBkZWx0YSxcbiAgICBkaXNhYmxlZDogIWVuYWJsZWRcbiAgfSk7XG4gIGNvbnN0IFtzZXRBdXRvU2Nyb2xsSW50ZXJ2YWwsIGNsZWFyQXV0b1Njcm9sbEludGVydmFsXSA9IHV0aWxpdGllcy51c2VJbnRlcnZhbCgpO1xuICBjb25zdCBzY3JvbGxTcGVlZCA9IFJlYWN0LnVzZVJlZih7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0pO1xuICBjb25zdCBzY3JvbGxEaXJlY3Rpb24gPSBSZWFjdC51c2VSZWYoe1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9KTtcbiAgY29uc3QgcmVjdCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZhdG9yKSB7XG4gICAgICBjYXNlIGV4cG9ydHMuQXV0b1Njcm9sbEFjdGl2YXRvci5Qb2ludGVyOlxuICAgICAgICByZXR1cm4gcG9pbnRlckNvb3JkaW5hdGVzID8ge1xuICAgICAgICAgIHRvcDogcG9pbnRlckNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgYm90dG9tOiBwb2ludGVyQ29vcmRpbmF0ZXMueSxcbiAgICAgICAgICBsZWZ0OiBwb2ludGVyQ29vcmRpbmF0ZXMueCxcbiAgICAgICAgICByaWdodDogcG9pbnRlckNvb3JkaW5hdGVzLnhcbiAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgIGNhc2UgZXhwb3J0cy5BdXRvU2Nyb2xsQWN0aXZhdG9yLkRyYWdnYWJsZVJlY3Q6XG4gICAgICAgIHJldHVybiBkcmFnZ2luZ1JlY3Q7XG4gICAgfVxuICB9LCBbYWN0aXZhdG9yLCBkcmFnZ2luZ1JlY3QsIHBvaW50ZXJDb29yZGluYXRlc10pO1xuICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGF1dG9TY3JvbGwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzY3JvbGxTcGVlZC5jdXJyZW50LnggKiBzY3JvbGxEaXJlY3Rpb24uY3VycmVudC54O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbFNwZWVkLmN1cnJlbnQueSAqIHNjcm9sbERpcmVjdGlvbi5jdXJyZW50Lnk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEJ5KHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgc29ydGVkU2Nyb2xsYWJsZUFuY2VzdG9ycyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gb3JkZXIgPT09IGV4cG9ydHMuVHJhdmVyc2FsT3JkZXIuVHJlZU9yZGVyID8gWy4uLnNjcm9sbGFibGVBbmNlc3RvcnNdLnJldmVyc2UoKSA6IHNjcm9sbGFibGVBbmNlc3RvcnMsIFtvcmRlciwgc2Nyb2xsYWJsZUFuY2VzdG9yc10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZW5hYmxlZCB8fCAhc2Nyb2xsYWJsZUFuY2VzdG9ycy5sZW5ndGggfHwgIXJlY3QpIHtcbiAgICAgIGNsZWFyQXV0b1Njcm9sbEludGVydmFsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzY3JvbGxDb250YWluZXIgb2Ygc29ydGVkU2Nyb2xsYWJsZUFuY2VzdG9ycykge1xuICAgICAgaWYgKChjYW5TY3JvbGwgPT0gbnVsbCA/IHZvaWQgMCA6IGNhblNjcm9sbChzY3JvbGxDb250YWluZXIpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gc2Nyb2xsYWJsZUFuY2VzdG9ycy5pbmRleE9mKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWN0ID0gc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHNbaW5kZXhdO1xuXG4gICAgICBpZiAoIXNjcm9sbENvbnRhaW5lclJlY3QpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBzcGVlZFxuICAgICAgfSA9IGdldFNjcm9sbERpcmVjdGlvbkFuZFNwZWVkKHNjcm9sbENvbnRhaW5lciwgc2Nyb2xsQ29udGFpbmVyUmVjdCwgcmVjdCwgYWNjZWxlcmF0aW9uLCB0aHJlc2hvbGQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgWyd4JywgJ3knXSkge1xuICAgICAgICBpZiAoIXNjcm9sbEludGVudFtheGlzXVtkaXJlY3Rpb25bYXhpc11dKSB7XG4gICAgICAgICAgc3BlZWRbYXhpc10gPSAwO1xuICAgICAgICAgIGRpcmVjdGlvbltheGlzXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNwZWVkLnggPiAwIHx8IHNwZWVkLnkgPiAwKSB7XG4gICAgICAgIGNsZWFyQXV0b1Njcm9sbEludGVydmFsKCk7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50ID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICBzZXRBdXRvU2Nyb2xsSW50ZXJ2YWwoYXV0b1Njcm9sbCwgaW50ZXJ2YWwpO1xuICAgICAgICBzY3JvbGxTcGVlZC5jdXJyZW50ID0gc3BlZWQ7XG4gICAgICAgIHNjcm9sbERpcmVjdGlvbi5jdXJyZW50ID0gZGlyZWN0aW9uO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsU3BlZWQuY3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBzY3JvbGxEaXJlY3Rpb24uY3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBjbGVhckF1dG9TY3JvbGxJbnRlcnZhbCgpO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFthY2NlbGVyYXRpb24sIGF1dG9TY3JvbGwsIGNhblNjcm9sbCwgY2xlYXJBdXRvU2Nyb2xsSW50ZXJ2YWwsIGVuYWJsZWQsIGludGVydmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIEpTT04uc3RyaW5naWZ5KHJlY3QpLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIEpTT04uc3RyaW5naWZ5KHNjcm9sbEludGVudCksIHNldEF1dG9TY3JvbGxJbnRlcnZhbCwgc2Nyb2xsYWJsZUFuY2VzdG9ycywgc29ydGVkU2Nyb2xsYWJsZUFuY2VzdG9ycywgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgSlNPTi5zdHJpbmdpZnkodGhyZXNob2xkKV0pO1xufVxuY29uc3QgZGVmYXVsdFNjcm9sbEludGVudCA9IHtcbiAgeDoge1xuICAgIFtEaXJlY3Rpb24uQmFja3dhcmRdOiBmYWxzZSxcbiAgICBbRGlyZWN0aW9uLkZvcndhcmRdOiBmYWxzZVxuICB9LFxuICB5OiB7XG4gICAgW0RpcmVjdGlvbi5CYWNrd2FyZF06IGZhbHNlLFxuICAgIFtEaXJlY3Rpb24uRm9yd2FyZF06IGZhbHNlXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHVzZVNjcm9sbEludGVudChfcmVmMikge1xuICBsZXQge1xuICAgIGRlbHRhLFxuICAgIGRpc2FibGVkXG4gIH0gPSBfcmVmMjtcbiAgY29uc3QgcHJldmlvdXNEZWx0YSA9IHV0aWxpdGllcy51c2VQcmV2aW91cyhkZWx0YSk7XG4gIHJldHVybiB1dGlsaXRpZXMudXNlTGF6eU1lbW8ocHJldmlvdXNJbnRlbnQgPT4ge1xuICAgIGlmIChkaXNhYmxlZCB8fCAhcHJldmlvdXNEZWx0YSB8fCAhcHJldmlvdXNJbnRlbnQpIHtcbiAgICAgIC8vIFJlc2V0IHNjcm9sbCBpbnRlbnQgdHJhY2tpbmcgd2hlbiBhdXRvLXNjcm9sbGluZyBpcyBkaXNhYmxlZFxuICAgICAgcmV0dXJuIGRlZmF1bHRTY3JvbGxJbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgeDogTWF0aC5zaWduKGRlbHRhLnggLSBwcmV2aW91c0RlbHRhLngpLFxuICAgICAgeTogTWF0aC5zaWduKGRlbHRhLnkgLSBwcmV2aW91c0RlbHRhLnkpXG4gICAgfTsgLy8gS2VlcCB0cmFjayBvZiB0aGUgdXNlciBpbnRlbnQgdG8gc2Nyb2xsIGluIGVhY2ggZGlyZWN0aW9uIGZvciBib3RoIGF4aXNcblxuICAgIHJldHVybiB7XG4gICAgICB4OiB7XG4gICAgICAgIFtEaXJlY3Rpb24uQmFja3dhcmRdOiBwcmV2aW91c0ludGVudC54W0RpcmVjdGlvbi5CYWNrd2FyZF0gfHwgZGlyZWN0aW9uLnggPT09IC0xLFxuICAgICAgICBbRGlyZWN0aW9uLkZvcndhcmRdOiBwcmV2aW91c0ludGVudC54W0RpcmVjdGlvbi5Gb3J3YXJkXSB8fCBkaXJlY3Rpb24ueCA9PT0gMVxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgW0RpcmVjdGlvbi5CYWNrd2FyZF06IHByZXZpb3VzSW50ZW50LnlbRGlyZWN0aW9uLkJhY2t3YXJkXSB8fCBkaXJlY3Rpb24ueSA9PT0gLTEsXG4gICAgICAgIFtEaXJlY3Rpb24uRm9yd2FyZF06IHByZXZpb3VzSW50ZW50LnlbRGlyZWN0aW9uLkZvcndhcmRdIHx8IGRpcmVjdGlvbi55ID09PSAxXG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc2FibGVkLCBkZWx0YSwgcHJldmlvdXNEZWx0YV0pO1xufVxuXG5mdW5jdGlvbiB1c2VDYWNoZWROb2RlKGRyYWdnYWJsZU5vZGVzLCBpZCkge1xuICBjb25zdCBkcmFnZ2FibGVOb2RlID0gaWQgIT0gbnVsbCA/IGRyYWdnYWJsZU5vZGVzLmdldChpZCkgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG5vZGUgPSBkcmFnZ2FibGVOb2RlID8gZHJhZ2dhYmxlTm9kZS5ub2RlLmN1cnJlbnQgOiBudWxsO1xuICByZXR1cm4gdXRpbGl0aWVzLnVzZUxhenlNZW1vKGNhY2hlZE5vZGUgPT4ge1xuICAgIHZhciBfcmVmO1xuXG4gICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy8gSW4gc29tZSBjYXNlcywgdGhlIGRyYWdnYWJsZSBub2RlIGNhbiB1bm1vdW50IHdoaWxlIGRyYWdnaW5nXG4gICAgLy8gVGhpcyBpcyB0aGUgY2FzZSBmb3IgdmlydHVhbGl6ZWQgbGlzdHMuIEluIHRob3NlIHNpdHVhdGlvbnMsXG4gICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBsYXN0IGtub3duIHZhbHVlIGZvciB0aGF0IG5vZGUuXG5cblxuICAgIHJldHVybiAoX3JlZiA9IG5vZGUgIT0gbnVsbCA/IG5vZGUgOiBjYWNoZWROb2RlKSAhPSBudWxsID8gX3JlZiA6IG51bGw7XG4gIH0sIFtub2RlLCBpZF0pO1xufVxuXG5mdW5jdGlvbiB1c2VDb21iaW5lQWN0aXZhdG9ycyhzZW5zb3JzLCBnZXRTeW50aGV0aWNIYW5kbGVyKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHNlbnNvcnMucmVkdWNlKChhY2N1bXVsYXRvciwgc2Vuc29yKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2Vuc29yOiBTZW5zb3JcbiAgICB9ID0gc2Vuc29yO1xuICAgIGNvbnN0IHNlbnNvckFjdGl2YXRvcnMgPSBTZW5zb3IuYWN0aXZhdG9ycy5tYXAoYWN0aXZhdG9yID0+ICh7XG4gICAgICBldmVudE5hbWU6IGFjdGl2YXRvci5ldmVudE5hbWUsXG4gICAgICBoYW5kbGVyOiBnZXRTeW50aGV0aWNIYW5kbGVyKGFjdGl2YXRvci5oYW5kbGVyLCBzZW5zb3IpXG4gICAgfSkpO1xuICAgIHJldHVybiBbLi4uYWNjdW11bGF0b3IsIC4uLnNlbnNvckFjdGl2YXRvcnNdO1xuICB9LCBbXSksIFtzZW5zb3JzLCBnZXRTeW50aGV0aWNIYW5kbGVyXSk7XG59XG5cbihmdW5jdGlvbiAoTWVhc3VyaW5nU3RyYXRlZ3kpIHtcbiAgTWVhc3VyaW5nU3RyYXRlZ3lbTWVhc3VyaW5nU3RyYXRlZ3lbXCJBbHdheXNcIl0gPSAwXSA9IFwiQWx3YXlzXCI7XG4gIE1lYXN1cmluZ1N0cmF0ZWd5W01lYXN1cmluZ1N0cmF0ZWd5W1wiQmVmb3JlRHJhZ2dpbmdcIl0gPSAxXSA9IFwiQmVmb3JlRHJhZ2dpbmdcIjtcbiAgTWVhc3VyaW5nU3RyYXRlZ3lbTWVhc3VyaW5nU3RyYXRlZ3lbXCJXaGlsZURyYWdnaW5nXCJdID0gMl0gPSBcIldoaWxlRHJhZ2dpbmdcIjtcbn0pKGV4cG9ydHMuTWVhc3VyaW5nU3RyYXRlZ3kgfHwgKGV4cG9ydHMuTWVhc3VyaW5nU3RyYXRlZ3kgPSB7fSkpO1xuXG4oZnVuY3Rpb24gKE1lYXN1cmluZ0ZyZXF1ZW5jeSkge1xuICBNZWFzdXJpbmdGcmVxdWVuY3lbXCJPcHRpbWl6ZWRcIl0gPSBcIm9wdGltaXplZFwiO1xufSkoZXhwb3J0cy5NZWFzdXJpbmdGcmVxdWVuY3kgfHwgKGV4cG9ydHMuTWVhc3VyaW5nRnJlcXVlbmN5ID0ge30pKTtcblxuY29uc3QgZGVmYXVsdFZhbHVlID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbmZ1bmN0aW9uIHVzZURyb3BwYWJsZU1lYXN1cmluZyhjb250YWluZXJzLCBfcmVmKSB7XG4gIGxldCB7XG4gICAgZHJhZ2dpbmcsXG4gICAgZGVwZW5kZW5jaWVzLFxuICAgIGNvbmZpZ1xuICB9ID0gX3JlZjtcbiAgY29uc3QgW3F1ZXVlLCBzZXRRdWV1ZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qge1xuICAgIGZyZXF1ZW5jeSxcbiAgICBtZWFzdXJlLFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IGNvbnRhaW5lcnNSZWYgPSBSZWFjdC51c2VSZWYoY29udGFpbmVycyk7XG4gIGNvbnN0IGRpc2FibGVkID0gaXNEaXNhYmxlZCgpO1xuICBjb25zdCBkaXNhYmxlZFJlZiA9IHV0aWxpdGllcy51c2VMYXRlc3RWYWx1ZShkaXNhYmxlZCk7XG4gIGNvbnN0IG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkcykge1xuICAgIGlmIChpZHMgPT09IHZvaWQgMCkge1xuICAgICAgaWRzID0gW107XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRRdWV1ZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlLmNvbmNhdChpZHMuZmlsdGVyKGlkID0+ICF2YWx1ZS5pbmNsdWRlcyhpZCkpKTtcbiAgICB9KTtcbiAgfSwgW2Rpc2FibGVkUmVmXSk7XG4gIGNvbnN0IHRpbWVvdXRJZCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZHJvcHBhYmxlUmVjdHMgPSB1dGlsaXRpZXMudXNlTGF6eU1lbW8ocHJldmlvdXNWYWx1ZSA9PiB7XG4gICAgaWYgKGRpc2FibGVkICYmICFkcmFnZ2luZykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXByZXZpb3VzVmFsdWUgfHwgcHJldmlvdXNWYWx1ZSA9PT0gZGVmYXVsdFZhbHVlIHx8IGNvbnRhaW5lcnNSZWYuY3VycmVudCAhPT0gY29udGFpbmVycyB8fCBxdWV1ZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgIGZvciAobGV0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVldWUgJiYgcXVldWUubGVuZ3RoID4gMCAmJiAhcXVldWUuaW5jbHVkZXMoY29udGFpbmVyLmlkKSAmJiBjb250YWluZXIucmVjdC5jdXJyZW50KSB7XG4gICAgICAgICAgLy8gVGhpcyBjb250YWluZXIgZG9lcyBub3QgbmVlZCB0byBiZSByZS1tZWFzdXJlZFxuICAgICAgICAgIG1hcC5zZXQoY29udGFpbmVyLmlkLCBjb250YWluZXIucmVjdC5jdXJyZW50KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGUgPSBjb250YWluZXIubm9kZS5jdXJyZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gbm9kZSA/IG5ldyBSZWN0KG1lYXN1cmUobm9kZSksIG5vZGUpIDogbnVsbDtcbiAgICAgICAgY29udGFpbmVyLnJlY3QuY3VycmVudCA9IHJlY3Q7XG5cbiAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICBtYXAuc2V0KGNvbnRhaW5lci5pZCwgcmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAgfSwgW2NvbnRhaW5lcnMsIHF1ZXVlLCBkcmFnZ2luZywgZGlzYWJsZWQsIG1lYXN1cmVdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250YWluZXJzUmVmLmN1cnJlbnQgPSBjb250YWluZXJzO1xuICB9LCBbY29udGFpbmVyc10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzKCk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW2RyYWdnaW5nLCBkaXNhYmxlZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWV1ZSAmJiBxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRRdWV1ZShudWxsKTtcbiAgICB9XG4gIH0sIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbSlNPTi5zdHJpbmdpZnkocXVldWUpXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHR5cGVvZiBmcmVxdWVuY3kgIT09ICdudW1iZXInIHx8IHRpbWVvdXRJZC5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGltZW91dElkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzKCk7XG4gICAgICB0aW1lb3V0SWQuY3VycmVudCA9IG51bGw7XG4gICAgfSwgZnJlcXVlbmN5KTtcbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbZnJlcXVlbmN5LCBkaXNhYmxlZCwgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMsIC4uLmRlcGVuZGVuY2llc10pO1xuICByZXR1cm4ge1xuICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzLFxuICAgIG1lYXN1cmluZ1NjaGVkdWxlZDogcXVldWUgIT0gbnVsbFxuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRGlzYWJsZWQoKSB7XG4gICAgc3dpdGNoIChzdHJhdGVneSkge1xuICAgICAgY2FzZSBleHBvcnRzLk1lYXN1cmluZ1N0cmF0ZWd5LkFsd2F5czpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjYXNlIGV4cG9ydHMuTWVhc3VyaW5nU3RyYXRlZ3kuQmVmb3JlRHJhZ2dpbmc6XG4gICAgICAgIHJldHVybiBkcmFnZ2luZztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICFkcmFnZ2luZztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlSW5pdGlhbFZhbHVlKHZhbHVlLCBjb21wdXRlRm4pIHtcbiAgcmV0dXJuIHV0aWxpdGllcy51c2VMYXp5TWVtbyhwcmV2aW91c1ZhbHVlID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBjb21wdXRlRm4gPT09ICdmdW5jdGlvbicgPyBjb21wdXRlRm4odmFsdWUpIDogdmFsdWU7XG4gIH0sIFtjb21wdXRlRm4sIHZhbHVlXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUluaXRpYWxSZWN0KG5vZGUsIG1lYXN1cmUpIHtcbiAgcmV0dXJuIHVzZUluaXRpYWxWYWx1ZShub2RlLCBtZWFzdXJlKTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgYSBuZXcgTXV0YXRpb25PYnNlcnZlciBpbnN0YW5jZS5cclxuICogSWYgYE11dGF0aW9uT2JzZXJ2ZXJgIGlzIHVuZGVmaW5lZCBpbiB0aGUgZXhlY3V0aW9uIGVudmlyb25tZW50LCByZXR1cm5zIGB1bmRlZmluZWRgLlxyXG4gKi9cblxuZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgY2FsbGJhY2ssXG4gICAgZGlzYWJsZWRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGhhbmRsZU11dGF0aW9ucyA9IHV0aWxpdGllcy51c2VFdmVudChjYWxsYmFjayk7XG4gIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBNdXRhdGlvbk9ic2VydmVyXG4gICAgfSA9IHdpbmRvdztcbiAgICByZXR1cm4gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaGFuZGxlTXV0YXRpb25zKTtcbiAgfSwgW2hhbmRsZU11dGF0aW9ucywgZGlzYWJsZWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gbXV0YXRpb25PYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFttdXRhdGlvbk9ic2VydmVyXSk7XG4gIHJldHVybiBtdXRhdGlvbk9ic2VydmVyO1xufVxuXG4vKipcclxuICogUmV0dXJucyBhIG5ldyBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSBib3VuZCB0byB0aGUgYG9uUmVzaXplYCBjYWxsYmFjay5cclxuICogSWYgYFJlc2l6ZU9ic2VydmVyYCBpcyB1bmRlZmluZWQgaW4gdGhlIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCwgcmV0dXJucyBgdW5kZWZpbmVkYC5cclxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjYWxsYmFjayxcbiAgICBkaXNhYmxlZFxuICB9ID0gX3JlZjtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gdXRpbGl0aWVzLnVzZUV2ZW50KGNhbGxiYWNrKTtcbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgUmVzaXplT2JzZXJ2ZXJcbiAgICB9ID0gd2luZG93O1xuICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXIoaGFuZGxlUmVzaXplKTtcbiAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbZGlzYWJsZWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gcmVzaXplT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfSwgW3Jlc2l6ZU9ic2VydmVyXSk7XG4gIHJldHVybiByZXNpemVPYnNlcnZlcjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE1lYXN1cmUoZWxlbWVudCkge1xuICByZXR1cm4gbmV3IFJlY3QoZ2V0Q2xpZW50UmVjdChlbGVtZW50KSwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVzZVJlY3QoZWxlbWVudCwgbWVhc3VyZSwgZmFsbGJhY2tSZWN0KSB7XG4gIGlmIChtZWFzdXJlID09PSB2b2lkIDApIHtcbiAgICBtZWFzdXJlID0gZGVmYXVsdE1lYXN1cmU7XG4gIH1cblxuICBjb25zdCBbcmVjdCwgc2V0UmVjdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBtZWFzdXJlUmVjdCgpIHtcbiAgICBzZXRSZWN0KGN1cnJlbnRSZWN0ID0+IHtcbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBsYXN0IHJlY3Qgd2UgbWVhc3VyZWQgaWYgdGhlIGVsZW1lbnQgaXNcbiAgICAgICAgLy8gbm8gbG9uZ2VyIGNvbm5lY3RlZCB0byB0aGUgRE9NLlxuICAgICAgICByZXR1cm4gKF9yZWYgPSBjdXJyZW50UmVjdCAhPSBudWxsID8gY3VycmVudFJlY3QgOiBmYWxsYmFja1JlY3QpICE9IG51bGwgPyBfcmVmIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UmVjdCA9IG1lYXN1cmUoZWxlbWVudCk7XG5cbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJyZW50UmVjdCkgPT09IEpTT04uc3RyaW5naWZ5KG5ld1JlY3QpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UmVjdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1JlY3Q7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gdXNlTXV0YXRpb25PYnNlcnZlcih7XG4gICAgY2FsbGJhY2socmVjb3Jkcykge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0YXJnZXRcbiAgICAgICAgfSA9IHJlY29yZDtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgdGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGFyZ2V0LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgbWVhc3VyZVJlY3QoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9KTtcbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSB1c2VSZXNpemVPYnNlcnZlcih7XG4gICAgY2FsbGJhY2s6IG1lYXN1cmVSZWN0XG4gIH0pO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgbWVhc3VyZVJlY3QoKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByZXNpemVPYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBtdXRhdGlvbk9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIFtlbGVtZW50XSk7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiB1c2VSZWN0RGVsdGEocmVjdCkge1xuICBjb25zdCBpbml0aWFsUmVjdCA9IHVzZUluaXRpYWxWYWx1ZShyZWN0KTtcbiAgcmV0dXJuIGdldFJlY3REZWx0YShyZWN0LCBpbml0aWFsUmVjdCk7XG59XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSQxID0gW107XG5mdW5jdGlvbiB1c2VTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUpIHtcbiAgY29uc3QgcHJldmlvdXNOb2RlID0gUmVhY3QudXNlUmVmKG5vZGUpO1xuICBjb25zdCBhbmNlc3RvcnMgPSB1dGlsaXRpZXMudXNlTGF6eU1lbW8ocHJldmlvdXNWYWx1ZSA9PiB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlJDE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzVmFsdWUgJiYgcHJldmlvdXNWYWx1ZSAhPT0gZGVmYXVsdFZhbHVlJDEgJiYgbm9kZSAmJiBwcmV2aW91c05vZGUuY3VycmVudCAmJiBub2RlLnBhcmVudE5vZGUgPT09IHByZXZpb3VzTm9kZS5jdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRTY3JvbGxhYmxlQW5jZXN0b3JzKG5vZGUpO1xuICB9LCBbbm9kZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpb3VzTm9kZS5jdXJyZW50ID0gbm9kZTtcbiAgfSwgW25vZGVdKTtcbiAgcmV0dXJuIGFuY2VzdG9ycztcbn1cblxuZnVuY3Rpb24gdXNlU2Nyb2xsT2Zmc2V0cyhlbGVtZW50cykge1xuICBjb25zdCBbc2Nyb2xsQ29vcmRpbmF0ZXMsIHNldFNjcm9sbENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBwcmV2RWxlbWVudHMgPSBSZWFjdC51c2VSZWYoZWxlbWVudHMpOyAvLyBUby1kbzogVGhyb3R0bGUgdGhlIGhhbmRsZVNjcm9sbCBjYWxsYmFja1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBjb25zdCBzY3JvbGxpbmdFbGVtZW50ID0gZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcblxuICAgIGlmICghc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFNjcm9sbENvb3JkaW5hdGVzKHNjcm9sbENvb3JkaW5hdGVzID0+IHtcbiAgICAgIGlmICghc2Nyb2xsQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbENvb3JkaW5hdGVzLnNldChzY3JvbGxpbmdFbGVtZW50LCBnZXRTY3JvbGxDb29yZGluYXRlcyhzY3JvbGxpbmdFbGVtZW50KSk7XG4gICAgICByZXR1cm4gbmV3IE1hcChzY3JvbGxDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c0VsZW1lbnRzID0gcHJldkVsZW1lbnRzLmN1cnJlbnQ7XG5cbiAgICBpZiAoZWxlbWVudHMgIT09IHByZXZpb3VzRWxlbWVudHMpIHtcbiAgICAgIGNsZWFudXAocHJldmlvdXNFbGVtZW50cyk7XG4gICAgICBjb25zdCBlbnRyaWVzID0gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IGdldFNjcm9sbGFibGVFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzY3JvbGxhYmxlRWxlbWVudCkge1xuICAgICAgICAgIHNjcm9sbGFibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwge1xuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBbc2Nyb2xsYWJsZUVsZW1lbnQsIGdldFNjcm9sbENvb3JkaW5hdGVzKHNjcm9sbGFibGVFbGVtZW50KV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pLmZpbHRlcihlbnRyeSA9PiBlbnRyeSAhPSBudWxsKTtcbiAgICAgIHNldFNjcm9sbENvb3JkaW5hdGVzKGVudHJpZXMubGVuZ3RoID8gbmV3IE1hcChlbnRyaWVzKSA6IG51bGwpO1xuICAgICAgcHJldkVsZW1lbnRzLmN1cnJlbnQgPSBlbGVtZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYW51cChlbGVtZW50cyk7XG4gICAgICBjbGVhbnVwKHByZXZpb3VzRWxlbWVudHMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwKGVsZW1lbnRzKSB7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IGdldFNjcm9sbGFibGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBzY3JvbGxhYmxlRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogc2Nyb2xsYWJsZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2hhbmRsZVNjcm9sbCwgZWxlbWVudHNdKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzY3JvbGxDb29yZGluYXRlcyA/IEFycmF5LmZyb20oc2Nyb2xsQ29vcmRpbmF0ZXMudmFsdWVzKCkpLnJlZHVjZSgoYWNjLCBjb29yZGluYXRlcykgPT4gdXRpbGl0aWVzLmFkZChhY2MsIGNvb3JkaW5hdGVzKSwgZGVmYXVsdENvb3JkaW5hdGVzKSA6IGdldFNjcm9sbE9mZnNldHMoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0Q29vcmRpbmF0ZXM7XG4gIH0sIFtlbGVtZW50cywgc2Nyb2xsQ29vcmRpbmF0ZXNdKTtcbn1cblxuZnVuY3Rpb24gdXNlU2Nyb2xsT2Zmc2V0c0RlbHRhKHNjcm9sbE9mZnNldHMsIGRlcGVuZGVuY2llcykge1xuICBpZiAoZGVwZW5kZW5jaWVzID09PSB2b2lkIDApIHtcbiAgICBkZXBlbmRlbmNpZXMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxTY3JvbGxPZmZzZXRzID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWxTY3JvbGxPZmZzZXRzLmN1cnJlbnQgPSBudWxsO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGRlcGVuZGVuY2llcyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFzU2Nyb2xsT2Zmc2V0cyA9IHNjcm9sbE9mZnNldHMgIT09IGRlZmF1bHRDb29yZGluYXRlcztcblxuICAgIGlmIChoYXNTY3JvbGxPZmZzZXRzICYmICFpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50KSB7XG4gICAgICBpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50ID0gc2Nyb2xsT2Zmc2V0cztcbiAgICB9XG5cbiAgICBpZiAoIWhhc1Njcm9sbE9mZnNldHMgJiYgaW5pdGlhbFNjcm9sbE9mZnNldHMuY3VycmVudCkge1xuICAgICAgaW5pdGlhbFNjcm9sbE9mZnNldHMuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9LCBbc2Nyb2xsT2Zmc2V0c10pO1xuICByZXR1cm4gaW5pdGlhbFNjcm9sbE9mZnNldHMuY3VycmVudCA/IHV0aWxpdGllcy5zdWJ0cmFjdChzY3JvbGxPZmZzZXRzLCBpbml0aWFsU2Nyb2xsT2Zmc2V0cy5jdXJyZW50KSA6IGRlZmF1bHRDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gdXNlU2Vuc29yU2V0dXAoc2Vuc29ycykge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXRpbGl0aWVzLmNhblVzZURPTSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRlYXJkb3duRm5zID0gc2Vuc29ycy5tYXAoX3JlZiA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBzZW5zb3JcbiAgICAgIH0gPSBfcmVmO1xuICAgICAgcmV0dXJuIHNlbnNvci5zZXR1cCA9PSBudWxsID8gdm9pZCAwIDogc2Vuc29yLnNldHVwKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgdGVhcmRvd24gb2YgdGVhcmRvd25GbnMpIHtcbiAgICAgICAgdGVhcmRvd24gPT0gbnVsbCA/IHZvaWQgMCA6IHRlYXJkb3duKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgLy8gVE8tRE86IFNlbnNvcnMgbGVuZ3RoIGNvdWxkIHRoZW9yZXRpY2FsbHkgY2hhbmdlIHdoaWNoIHdvdWxkIG5vdCBiZSBhIHZhbGlkIGRlcGVuZGVuY3lcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBzZW5zb3JzLm1hcChfcmVmMiA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHNlbnNvclxuICAgIH0gPSBfcmVmMjtcbiAgICByZXR1cm4gc2Vuc29yO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHVzZVN5bnRoZXRpY0xpc3RlbmVycyhsaXN0ZW5lcnMsIGlkKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gbGlzdGVuZXJzLnJlZHVjZSgoYWNjLCBfcmVmKSA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIGhhbmRsZXJcbiAgICAgIH0gPSBfcmVmO1xuXG4gICAgICBhY2NbZXZlbnROYW1lXSA9IGV2ZW50ID0+IHtcbiAgICAgICAgaGFuZGxlcihldmVudCwgaWQpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH0sIFtsaXN0ZW5lcnMsIGlkXSk7XG59XG5cbmZ1bmN0aW9uIHVzZVdpbmRvd1JlY3QoZWxlbWVudCkge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBlbGVtZW50ID8gZ2V0V2luZG93Q2xpZW50UmVjdChlbGVtZW50KSA6IG51bGwsIFtlbGVtZW50XSk7XG59XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZSQyID0gW107XG5mdW5jdGlvbiB1c2VSZWN0cyhlbGVtZW50cywgbWVhc3VyZSkge1xuICBpZiAobWVhc3VyZSA9PT0gdm9pZCAwKSB7XG4gICAgbWVhc3VyZSA9IGdldENsaWVudFJlY3Q7XG4gIH1cblxuICBjb25zdCBbZmlyc3RFbGVtZW50XSA9IGVsZW1lbnRzO1xuICBjb25zdCB3aW5kb3dSZWN0ID0gdXNlV2luZG93UmVjdChmaXJzdEVsZW1lbnQgPyB1dGlsaXRpZXMuZ2V0V2luZG93KGZpcnN0RWxlbWVudCkgOiBudWxsKTtcbiAgY29uc3QgW3JlY3RzLCBzZXRSZWN0c10gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0VmFsdWUkMik7XG5cbiAgZnVuY3Rpb24gbWVhc3VyZVJlY3RzKCkge1xuICAgIHNldFJlY3RzKCgpID0+IHtcbiAgICAgIGlmICghZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUkMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnRzLm1hcChlbGVtZW50ID0+IGlzRG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpID8gd2luZG93UmVjdCA6IG5ldyBSZWN0KG1lYXN1cmUoZWxlbWVudCksIGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gdXNlUmVzaXplT2JzZXJ2ZXIoe1xuICAgIGNhbGxiYWNrOiBtZWFzdXJlUmVjdHNcbiAgfSk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICByZXNpemVPYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIG1lYXN1cmVSZWN0cygpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiByZXNpemVPYnNlcnZlciA9PSBudWxsID8gdm9pZCAwIDogcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG4gIH0sIFtlbGVtZW50c10pO1xuICByZXR1cm4gcmVjdHM7XG59XG5cbmZ1bmN0aW9uIGdldE1lYXN1cmFibGVOb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5jaGlsZHJlblswXTtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc0hUTUxFbGVtZW50KGZpcnN0Q2hpbGQpID8gZmlyc3RDaGlsZCA6IG5vZGU7XG59XG5cbmZ1bmN0aW9uIHVzZURyYWdPdmVybGF5TWVhc3VyaW5nKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBtZWFzdXJlXG4gIH0gPSBfcmVmO1xuICBjb25zdCBbcmVjdCwgc2V0UmVjdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gUmVhY3QudXNlQ2FsbGJhY2soZW50cmllcyA9PiB7XG4gICAgZm9yIChjb25zdCB7XG4gICAgICB0YXJnZXRcbiAgICB9IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICh1dGlsaXRpZXMuaXNIVE1MRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgIHNldFJlY3QocmVjdCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3UmVjdCA9IG1lYXN1cmUodGFyZ2V0KTtcbiAgICAgICAgICByZXR1cm4gcmVjdCA/IHsgLi4ucmVjdCxcbiAgICAgICAgICAgIHdpZHRoOiBuZXdSZWN0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBuZXdSZWN0LmhlaWdodFxuICAgICAgICAgIH0gOiBuZXdSZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbWVhc3VyZV0pO1xuICBjb25zdCByZXNpemVPYnNlcnZlciA9IHVzZVJlc2l6ZU9ic2VydmVyKHtcbiAgICBjYWxsYmFjazogaGFuZGxlUmVzaXplXG4gIH0pO1xuICBjb25zdCBoYW5kbGVOb2RlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldE1lYXN1cmFibGVOb2RlKGVsZW1lbnQpO1xuICAgIHJlc2l6ZU9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgfVxuXG4gICAgc2V0UmVjdChub2RlID8gbWVhc3VyZShub2RlKSA6IG51bGwpO1xuICB9LCBbbWVhc3VyZSwgcmVzaXplT2JzZXJ2ZXJdKTtcbiAgY29uc3QgW25vZGVSZWYsIHNldFJlZl0gPSB1dGlsaXRpZXMudXNlTm9kZVJlZihoYW5kbGVOb2RlQ2hhbmdlKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBub2RlUmVmLFxuICAgIHJlY3QsXG4gICAgc2V0UmVmXG4gIH0pLCBbcmVjdCwgbm9kZVJlZiwgc2V0UmVmXSk7XG59XG5cbmNvbnN0IGRlZmF1bHRTZW5zb3JzID0gW3tcbiAgc2Vuc29yOiBQb2ludGVyU2Vuc29yLFxuICBvcHRpb25zOiB7fVxufSwge1xuICBzZW5zb3I6IEtleWJvYXJkU2Vuc29yLFxuICBvcHRpb25zOiB7fVxufV07XG5jb25zdCBkZWZhdWx0RGF0YSA9IHtcbiAgY3VycmVudDoge31cbn07XG5jb25zdCBkZWZhdWx0TWVhc3VyaW5nQ29uZmlndXJhdGlvbiA9IHtcbiAgZHJhZ2dhYmxlOiB7XG4gICAgbWVhc3VyZTogZ2V0VHJhbnNmb3JtQWdub3N0aWNDbGllbnRSZWN0XG4gIH0sXG4gIGRyb3BwYWJsZToge1xuICAgIG1lYXN1cmU6IGdldFRyYW5zZm9ybUFnbm9zdGljQ2xpZW50UmVjdCxcbiAgICBzdHJhdGVneTogZXhwb3J0cy5NZWFzdXJpbmdTdHJhdGVneS5XaGlsZURyYWdnaW5nLFxuICAgIGZyZXF1ZW5jeTogZXhwb3J0cy5NZWFzdXJpbmdGcmVxdWVuY3kuT3B0aW1pemVkXG4gIH0sXG4gIGRyYWdPdmVybGF5OiB7XG4gICAgbWVhc3VyZTogZ2V0Q2xpZW50UmVjdFxuICB9XG59O1xuXG5jbGFzcyBEcm9wcGFibGVDb250YWluZXJzTWFwIGV4dGVuZHMgTWFwIHtcbiAgZ2V0KGlkKSB7XG4gICAgdmFyIF9zdXBlciRnZXQ7XG5cbiAgICByZXR1cm4gaWQgIT0gbnVsbCA/IChfc3VwZXIkZ2V0ID0gc3VwZXIuZ2V0KGlkKSkgIT0gbnVsbCA/IF9zdXBlciRnZXQgOiB1bmRlZmluZWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudmFsdWVzKCkpO1xuICB9XG5cbiAgZ2V0RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b0FycmF5KCkuZmlsdGVyKF9yZWYgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgIH0gPSBfcmVmO1xuICAgICAgcmV0dXJuICFkaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldE5vZGVGb3IoaWQpIHtcbiAgICB2YXIgX3RoaXMkZ2V0JG5vZGUkY3VycmVuLCBfdGhpcyRnZXQ7XG5cbiAgICByZXR1cm4gKF90aGlzJGdldCRub2RlJGN1cnJlbiA9IChfdGhpcyRnZXQgPSB0aGlzLmdldChpZCkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRnZXQubm9kZS5jdXJyZW50KSAhPSBudWxsID8gX3RoaXMkZ2V0JG5vZGUkY3VycmVuIDogdW5kZWZpbmVkO1xuICB9XG5cbn1cblxuY29uc3QgZGVmYXVsdFB1YmxpY0NvbnRleHQgPSB7XG4gIGFjdGl2YXRvckV2ZW50OiBudWxsLFxuICBhY3RpdmU6IG51bGwsXG4gIGFjdGl2ZU5vZGU6IG51bGwsXG4gIGFjdGl2ZU5vZGVSZWN0OiBudWxsLFxuICBjb2xsaXNpb25zOiBudWxsLFxuICBjb250YWluZXJOb2RlUmVjdDogbnVsbCxcbiAgZHJhZ2dhYmxlTm9kZXM6IC8qI19fUFVSRV9fKi9uZXcgTWFwKCksXG4gIGRyb3BwYWJsZVJlY3RzOiAvKiNfX1BVUkVfXyovbmV3IE1hcCgpLFxuICBkcm9wcGFibGVDb250YWluZXJzOiAvKiNfX1BVUkVfXyovbmV3IERyb3BwYWJsZUNvbnRhaW5lcnNNYXAoKSxcbiAgb3ZlcjogbnVsbCxcbiAgZHJhZ092ZXJsYXk6IHtcbiAgICBub2RlUmVmOiB7XG4gICAgICBjdXJyZW50OiBudWxsXG4gICAgfSxcbiAgICByZWN0OiBudWxsLFxuICAgIHNldFJlZjogbm9vcFxuICB9LFxuICBzY3JvbGxhYmxlQW5jZXN0b3JzOiBbXSxcbiAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHM6IFtdLFxuICBtZWFzdXJpbmdDb25maWd1cmF0aW9uOiBkZWZhdWx0TWVhc3VyaW5nQ29uZmlndXJhdGlvbixcbiAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnM6IG5vb3AsXG4gIHdpbmRvd1JlY3Q6IG51bGwsXG4gIG1lYXN1cmluZ1NjaGVkdWxlZDogZmFsc2Vcbn07XG5jb25zdCBkZWZhdWx0SW50ZXJuYWxDb250ZXh0ID0ge1xuICBhY3RpdmF0b3JFdmVudDogbnVsbCxcbiAgYWN0aXZhdG9yczogW10sXG4gIGFjdGl2ZTogbnVsbCxcbiAgYWN0aXZlTm9kZVJlY3Q6IG51bGwsXG4gIGFyaWFEZXNjcmliZWRCeUlkOiB7XG4gICAgZHJhZ2dhYmxlOiAnJ1xuICB9LFxuICBkaXNwYXRjaDogbm9vcCxcbiAgZHJhZ2dhYmxlTm9kZXM6IC8qI19fUFVSRV9fKi9uZXcgTWFwKCksXG4gIG92ZXI6IG51bGwsXG4gIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzOiBub29wXG59O1xuY29uc3QgSW50ZXJuYWxDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdEludGVybmFsQ29udGV4dCk7XG5jb25zdCBQdWJsaWNDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdFB1YmxpY0NvbnRleHQpO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgZHJhZ2dhYmxlOiB7XG4gICAgICBhY3RpdmU6IG51bGwsXG4gICAgICBpbml0aWFsQ29vcmRpbmF0ZXM6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiBuZXcgTWFwKCksXG4gICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcHBhYmxlOiB7XG4gICAgICBjb250YWluZXJzOiBuZXcgRHJvcHBhYmxlQ29udGFpbmVyc01hcCgpXG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvbi5EcmFnU3RhcnQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB7IC4uLnN0YXRlLmRyYWdnYWJsZSxcbiAgICAgICAgICBpbml0aWFsQ29vcmRpbmF0ZXM6IGFjdGlvbi5pbml0aWFsQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgYWN0aXZlOiBhY3Rpb24uYWN0aXZlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBjYXNlIEFjdGlvbi5EcmFnTW92ZTpcbiAgICAgIGlmIChzdGF0ZS5kcmFnZ2FibGUuYWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB7IC4uLnN0YXRlLmRyYWdnYWJsZSxcbiAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgIHg6IGFjdGlvbi5jb29yZGluYXRlcy54IC0gc3RhdGUuZHJhZ2dhYmxlLmluaXRpYWxDb29yZGluYXRlcy54LFxuICAgICAgICAgICAgeTogYWN0aW9uLmNvb3JkaW5hdGVzLnkgLSBzdGF0ZS5kcmFnZ2FibGUuaW5pdGlhbENvb3JkaW5hdGVzLnlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBjYXNlIEFjdGlvbi5EcmFnRW5kOlxuICAgIGNhc2UgQWN0aW9uLkRyYWdDYW5jZWw6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB7IC4uLnN0YXRlLmRyYWdnYWJsZSxcbiAgICAgICAgICBhY3RpdmU6IG51bGwsXG4gICAgICAgICAgaW5pdGlhbENvb3JkaW5hdGVzOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGNhc2UgQWN0aW9uLlJlZ2lzdGVyRHJvcHBhYmxlOlxuICAgICAge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZWxlbWVudFxuICAgICAgICB9ID0gYWN0aW9uO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaWRcbiAgICAgICAgfSA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBuZXcgRHJvcHBhYmxlQ29udGFpbmVyc01hcChzdGF0ZS5kcm9wcGFibGUuY29udGFpbmVycyk7XG4gICAgICAgIGNvbnRhaW5lcnMuc2V0KGlkLCBlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgZHJvcHBhYmxlOiB7IC4uLnN0YXRlLmRyb3BwYWJsZSxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBjYXNlIEFjdGlvbi5TZXREcm9wcGFibGVEaXNhYmxlZDpcbiAgICAgIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICB9ID0gYWN0aW9uO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3RhdGUuZHJvcHBhYmxlLmNvbnRhaW5lcnMuZ2V0KGlkKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwga2V5ICE9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBuZXcgRHJvcHBhYmxlQ29udGFpbmVyc01hcChzdGF0ZS5kcm9wcGFibGUuY29udGFpbmVycyk7XG4gICAgICAgIGNvbnRhaW5lcnMuc2V0KGlkLCB7IC4uLmVsZW1lbnQsXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgICAgIGRyb3BwYWJsZTogeyAuLi5zdGF0ZS5kcm9wcGFibGUsXG4gICAgICAgICAgICBjb250YWluZXJzXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgY2FzZSBBY3Rpb24uVW5yZWdpc3RlckRyb3BwYWJsZTpcbiAgICAgIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGtleVxuICAgICAgICB9ID0gYWN0aW9uO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3RhdGUuZHJvcHBhYmxlLmNvbnRhaW5lcnMuZ2V0KGlkKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwga2V5ICE9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBuZXcgRHJvcHBhYmxlQ29udGFpbmVyc01hcChzdGF0ZS5kcm9wcGFibGUuY29udGFpbmVycyk7XG4gICAgICAgIGNvbnRhaW5lcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgZHJvcHBhYmxlOiB7IC4uLnN0YXRlLmRyb3BwYWJsZSxcbiAgICAgICAgICAgIGNvbnRhaW5lcnNcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVzdG9yZUZvY3VzKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBkaXNhYmxlZFxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBkcmFnZ2FibGVOb2Rlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChJbnRlcm5hbENvbnRleHQpO1xuICBjb25zdCBwcmV2aW91c0FjdGl2YXRvckV2ZW50ID0gdXRpbGl0aWVzLnVzZVByZXZpb3VzKGFjdGl2YXRvckV2ZW50KTtcbiAgY29uc3QgcHJldmlvdXNBY3RpdmVJZCA9IHV0aWxpdGllcy51c2VQcmV2aW91cyhhY3RpdmUgPT0gbnVsbCA/IHZvaWQgMCA6IGFjdGl2ZS5pZCk7IC8vIFJlc3RvcmUga2V5Ym9hcmQgZm9jdXMgb24gdGhlIGFjdGl2YXRvciBub2RlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2YXRvckV2ZW50ICYmIHByZXZpb3VzQWN0aXZhdG9yRXZlbnQgJiYgcHJldmlvdXNBY3RpdmVJZCAhPSBudWxsKSB7XG4gICAgICBpZiAoIXV0aWxpdGllcy5pc0tleWJvYXJkRXZlbnQocHJldmlvdXNBY3RpdmF0b3JFdmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gcHJldmlvdXNBY3RpdmF0b3JFdmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gTm8gbmVlZCB0byByZXN0b3JlIGZvY3VzXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJhZ2dhYmxlTm9kZSA9IGRyYWdnYWJsZU5vZGVzLmdldChwcmV2aW91c0FjdGl2ZUlkKTtcblxuICAgICAgaWYgKCFkcmFnZ2FibGVOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBhY3RpdmF0b3JOb2RlLFxuICAgICAgICBub2RlXG4gICAgICB9ID0gZHJhZ2dhYmxlTm9kZTtcblxuICAgICAgaWYgKCFhY3RpdmF0b3JOb2RlLmN1cnJlbnQgJiYgIW5vZGUuY3VycmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbYWN0aXZhdG9yTm9kZS5jdXJyZW50LCBub2RlLmN1cnJlbnRdKSB7XG4gICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb2N1c2FibGVOb2RlID0gdXRpbGl0aWVzLmZpbmRGaXJzdEZvY3VzYWJsZU5vZGUoZWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoZm9jdXNhYmxlTm9kZSkge1xuICAgICAgICAgICAgZm9jdXNhYmxlTm9kZS5mb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFthY3RpdmF0b3JFdmVudCwgZGlzYWJsZWQsIGRyYWdnYWJsZU5vZGVzLCBwcmV2aW91c0FjdGl2ZUlkLCBwcmV2aW91c0FjdGl2YXRvckV2ZW50XSk7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBhcHBseU1vZGlmaWVycyhtb2RpZmllcnMsIF9yZWYpIHtcbiAgbGV0IHtcbiAgICB0cmFuc2Zvcm0sXG4gICAgLi4uYXJnc1xuICB9ID0gX3JlZjtcbiAgcmV0dXJuIG1vZGlmaWVycyAhPSBudWxsICYmIG1vZGlmaWVycy5sZW5ndGggPyBtb2RpZmllcnMucmVkdWNlKChhY2N1bXVsYXRvciwgbW9kaWZpZXIpID0+IHtcbiAgICByZXR1cm4gbW9kaWZpZXIoe1xuICAgICAgdHJhbnNmb3JtOiBhY2N1bXVsYXRvcixcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSwgdHJhbnNmb3JtKSA6IHRyYW5zZm9ybTtcbn1cblxuZnVuY3Rpb24gdXNlTWVhc3VyaW5nQ29uZmlndXJhdGlvbihjb25maWcpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBkcmFnZ2FibGU6IHsgLi4uZGVmYXVsdE1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ2dhYmxlLFxuICAgICAgLi4uKGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmRyYWdnYWJsZSlcbiAgICB9LFxuICAgIGRyb3BwYWJsZTogeyAuLi5kZWZhdWx0TWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcm9wcGFibGUsXG4gICAgICAuLi4oY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZHJvcHBhYmxlKVxuICAgIH0sXG4gICAgZHJhZ092ZXJsYXk6IHsgLi4uZGVmYXVsdE1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ092ZXJsYXksXG4gICAgICAuLi4oY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZHJhZ092ZXJsYXkpXG4gICAgfVxuICB9KSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZHJhZ2dhYmxlLCBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5kcm9wcGFibGUsIGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmRyYWdPdmVybGF5XSk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dFNoaWZ0U2Nyb2xsQ29tcGVuc2F0aW9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBhY3RpdmVOb2RlLFxuICAgIG1lYXN1cmUsXG4gICAgaW5pdGlhbFJlY3QsXG4gICAgY29uZmlnID0gdHJ1ZVxuICB9ID0gX3JlZjtcbiAgY29uc3QgaW5pdGlhbGl6ZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgeCxcbiAgICB5XG4gIH0gPSB0eXBlb2YgY29uZmlnID09PSAnYm9vbGVhbicgPyB7XG4gICAgeDogY29uZmlnLFxuICAgIHk6IGNvbmZpZ1xuICB9IDogY29uZmlnO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSAheCAmJiAheTtcblxuICAgIGlmIChkaXNhYmxlZCB8fCAhYWN0aXZlTm9kZSkge1xuICAgICAgaW5pdGlhbGl6ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbml0aWFsaXplZC5jdXJyZW50IHx8ICFpbml0aWFsUmVjdCkge1xuICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGxheW91dCBzaGlmdCBzY3JvbGwgY29tcGVuc2F0aW9uIHdhcyBhbHJlYWR5IGF0dGVtcHRlZFxuICAgICAgLy8gb3IgaWYgdGhlcmUgaXMgbm8gaW5pdGlhbFJlY3QgdG8gY29tcGFyZSB0by5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEdldCB0aGUgbW9zdCB1cCB0byBkYXRlIG5vZGUgcmVmIGZvciB0aGUgYWN0aXZlIGRyYWdnYWJsZVxuXG5cbiAgICBjb25zdCBub2RlID0gYWN0aXZlTm9kZSA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlTm9kZS5ub2RlLmN1cnJlbnQ7XG5cbiAgICBpZiAoIW5vZGUgfHwgbm9kZS5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIFJldHVybiBlYXJseSBpZiB0aGVyZSBpcyBubyBhdHRhY2hlZCBub2RlIHJlZiBvciBpZiB0aGUgbm9kZSBpc1xuICAgICAgLy8gZGlzY29ubmVjdGVkIGZyb20gdGhlIGRvY3VtZW50LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBtZWFzdXJlKG5vZGUpO1xuICAgIGNvbnN0IHJlY3REZWx0YSA9IGdldFJlY3REZWx0YShyZWN0LCBpbml0aWFsUmVjdCk7XG5cbiAgICBpZiAoIXgpIHtcbiAgICAgIHJlY3REZWx0YS54ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoIXkpIHtcbiAgICAgIHJlY3REZWx0YS55ID0gMDtcbiAgICB9IC8vIE9ubHkgcGVyZm9ybSBsYXlvdXQgc2hpZnQgc2Nyb2xsIGNvbXBlbnNhdGlvbiBvbmNlXG5cblxuICAgIGluaXRpYWxpemVkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKE1hdGguYWJzKHJlY3REZWx0YS54KSA+IDAgfHwgTWF0aC5hYnMocmVjdERlbHRhLnkpID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RTY3JvbGxhYmxlQW5jZXN0b3IgPSBnZXRGaXJzdFNjcm9sbGFibGVBbmNlc3Rvcihub2RlKTtcblxuICAgICAgaWYgKGZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yKSB7XG4gICAgICAgIGZpcnN0U2Nyb2xsYWJsZUFuY2VzdG9yLnNjcm9sbEJ5KHtcbiAgICAgICAgICB0b3A6IHJlY3REZWx0YS55LFxuICAgICAgICAgIGxlZnQ6IHJlY3REZWx0YS54XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjdGl2ZU5vZGUsIHgsIHksIGluaXRpYWxSZWN0LCBtZWFzdXJlXSk7XG59XG5cbmNvbnN0IEFjdGl2ZURyYWdnYWJsZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7IC4uLmRlZmF1bHRDb29yZGluYXRlcyxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn0pO1xudmFyIFN0YXR1cztcblxuKGZ1bmN0aW9uIChTdGF0dXMpIHtcbiAgU3RhdHVzW1N0YXR1c1tcIlVuaW5pdGlhbGl6ZWRcIl0gPSAwXSA9IFwiVW5pbml0aWFsaXplZFwiO1xuICBTdGF0dXNbU3RhdHVzW1wiSW5pdGlhbGl6aW5nXCJdID0gMV0gPSBcIkluaXRpYWxpemluZ1wiO1xuICBTdGF0dXNbU3RhdHVzW1wiSW5pdGlhbGl6ZWRcIl0gPSAyXSA9IFwiSW5pdGlhbGl6ZWRcIjtcbn0pKFN0YXR1cyB8fCAoU3RhdHVzID0ge30pKTtcblxuY29uc3QgRG5kQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKGZ1bmN0aW9uIERuZENvbnRleHQoX3JlZikge1xuICB2YXIgX3NlbnNvckNvbnRleHQkY3VycmVuLCBfZHJhZ092ZXJsYXkkbm9kZVJlZiQsIF9kcmFnT3ZlcmxheSRyZWN0LCBfb3ZlciRyZWN0O1xuXG4gIGxldCB7XG4gICAgaWQsXG4gICAgYWNjZXNzaWJpbGl0eSxcbiAgICBhdXRvU2Nyb2xsID0gdHJ1ZSxcbiAgICBjaGlsZHJlbixcbiAgICBzZW5zb3JzID0gZGVmYXVsdFNlbnNvcnMsXG4gICAgY29sbGlzaW9uRGV0ZWN0aW9uID0gcmVjdEludGVyc2VjdGlvbixcbiAgICBtZWFzdXJpbmcsXG4gICAgbW9kaWZpZXJzLFxuICAgIC4uLnByb3BzXG4gIH0gPSBfcmVmO1xuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgdW5kZWZpbmVkLCBnZXRJbml0aWFsU3RhdGUpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHN0b3JlO1xuICBjb25zdCBbZGlzcGF0Y2hNb25pdG9yRXZlbnQsIHJlZ2lzdGVyTW9uaXRvckxpc3RlbmVyXSA9IHVzZURuZE1vbml0b3JQcm92aWRlcigpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoU3RhdHVzLlVuaW5pdGlhbGl6ZWQpO1xuICBjb25zdCBpc0luaXRpYWxpemVkID0gc3RhdHVzID09PSBTdGF0dXMuSW5pdGlhbGl6ZWQ7XG4gIGNvbnN0IHtcbiAgICBkcmFnZ2FibGU6IHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlSWQsXG4gICAgICBub2RlczogZHJhZ2dhYmxlTm9kZXMsXG4gICAgICB0cmFuc2xhdGVcbiAgICB9LFxuICAgIGRyb3BwYWJsZToge1xuICAgICAgY29udGFpbmVyczogZHJvcHBhYmxlQ29udGFpbmVyc1xuICAgIH1cbiAgfSA9IHN0YXRlO1xuICBjb25zdCBub2RlID0gYWN0aXZlSWQgIT0gbnVsbCA/IGRyYWdnYWJsZU5vZGVzLmdldChhY3RpdmVJZCkgOiBudWxsO1xuICBjb25zdCBhY3RpdmVSZWN0cyA9IFJlYWN0LnVzZVJlZih7XG4gICAgaW5pdGlhbDogbnVsbCxcbiAgICB0cmFuc2xhdGVkOiBudWxsXG4gIH0pO1xuICBjb25zdCBhY3RpdmUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICB2YXIgX25vZGUkZGF0YTtcblxuICAgIHJldHVybiBhY3RpdmVJZCAhPSBudWxsID8ge1xuICAgICAgaWQ6IGFjdGl2ZUlkLFxuICAgICAgLy8gSXQncyBwb3NzaWJsZSBmb3IgdGhlIGFjdGl2ZSBub2RlIHRvIHVubW91bnQgd2hpbGUgZHJhZ2dpbmdcbiAgICAgIGRhdGE6IChfbm9kZSRkYXRhID0gbm9kZSA9PSBudWxsID8gdm9pZCAwIDogbm9kZS5kYXRhKSAhPSBudWxsID8gX25vZGUkZGF0YSA6IGRlZmF1bHREYXRhLFxuICAgICAgcmVjdDogYWN0aXZlUmVjdHNcbiAgICB9IDogbnVsbDtcbiAgfSwgW2FjdGl2ZUlkLCBub2RlXSk7XG4gIGNvbnN0IGFjdGl2ZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgW2FjdGl2ZVNlbnNvciwgc2V0QWN0aXZlU2Vuc29yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWN0aXZhdG9yRXZlbnQsIHNldEFjdGl2YXRvckV2ZW50XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBsYXRlc3RQcm9wcyA9IHV0aWxpdGllcy51c2VMYXRlc3RWYWx1ZShwcm9wcywgT2JqZWN0LnZhbHVlcyhwcm9wcykpO1xuICBjb25zdCBkcmFnZ2FibGVEZXNjcmliZWRCeUlkID0gdXRpbGl0aWVzLnVzZVVuaXF1ZUlkKFwiRG5kRGVzY3JpYmVkQnlcIiwgaWQpO1xuICBjb25zdCBlbmFibGVkRHJvcHBhYmxlQ29udGFpbmVycyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZHJvcHBhYmxlQ29udGFpbmVycy5nZXRFbmFibGVkKCksIFtkcm9wcGFibGVDb250YWluZXJzXSk7XG4gIGNvbnN0IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24gPSB1c2VNZWFzdXJpbmdDb25maWd1cmF0aW9uKG1lYXN1cmluZyk7XG4gIGNvbnN0IHtcbiAgICBkcm9wcGFibGVSZWN0cyxcbiAgICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBtZWFzdXJpbmdTY2hlZHVsZWRcbiAgfSA9IHVzZURyb3BwYWJsZU1lYXN1cmluZyhlbmFibGVkRHJvcHBhYmxlQ29udGFpbmVycywge1xuICAgIGRyYWdnaW5nOiBpc0luaXRpYWxpemVkLFxuICAgIGRlcGVuZGVuY2llczogW3RyYW5zbGF0ZS54LCB0cmFuc2xhdGUueV0sXG4gICAgY29uZmlnOiBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyb3BwYWJsZVxuICB9KTtcbiAgY29uc3QgYWN0aXZlTm9kZSA9IHVzZUNhY2hlZE5vZGUoZHJhZ2dhYmxlTm9kZXMsIGFjdGl2ZUlkKTtcbiAgY29uc3QgYWN0aXZhdGlvbkNvb3JkaW5hdGVzID0gUmVhY3QudXNlTWVtbygoKSA9PiBhY3RpdmF0b3JFdmVudCA/IHV0aWxpdGllcy5nZXRFdmVudENvb3JkaW5hdGVzKGFjdGl2YXRvckV2ZW50KSA6IG51bGwsIFthY3RpdmF0b3JFdmVudF0pO1xuICBjb25zdCBhdXRvU2Nyb2xsT3B0aW9ucyA9IGdldEF1dG9TY3JvbGxlck9wdGlvbnMoKTtcbiAgY29uc3QgaW5pdGlhbEFjdGl2ZU5vZGVSZWN0ID0gdXNlSW5pdGlhbFJlY3QoYWN0aXZlTm9kZSwgbWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcmFnZ2FibGUubWVhc3VyZSk7XG4gIHVzZUxheW91dFNoaWZ0U2Nyb2xsQ29tcGVuc2F0aW9uKHtcbiAgICBhY3RpdmVOb2RlOiBhY3RpdmVJZCAhPSBudWxsID8gZHJhZ2dhYmxlTm9kZXMuZ2V0KGFjdGl2ZUlkKSA6IG51bGwsXG4gICAgY29uZmlnOiBhdXRvU2Nyb2xsT3B0aW9ucy5sYXlvdXRTaGlmdENvbXBlbnNhdGlvbixcbiAgICBpbml0aWFsUmVjdDogaW5pdGlhbEFjdGl2ZU5vZGVSZWN0LFxuICAgIG1lYXN1cmU6IG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24uZHJhZ2dhYmxlLm1lYXN1cmVcbiAgfSk7XG4gIGNvbnN0IGFjdGl2ZU5vZGVSZWN0ID0gdXNlUmVjdChhY3RpdmVOb2RlLCBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdnYWJsZS5tZWFzdXJlLCBpbml0aWFsQWN0aXZlTm9kZVJlY3QpO1xuICBjb25zdCBjb250YWluZXJOb2RlUmVjdCA9IHVzZVJlY3QoYWN0aXZlTm9kZSA/IGFjdGl2ZU5vZGUucGFyZW50RWxlbWVudCA6IG51bGwpO1xuICBjb25zdCBzZW5zb3JDb250ZXh0ID0gUmVhY3QudXNlUmVmKHtcbiAgICBhY3RpdmF0b3JFdmVudDogbnVsbCxcbiAgICBhY3RpdmU6IG51bGwsXG4gICAgYWN0aXZlTm9kZSxcbiAgICBjb2xsaXNpb25SZWN0OiBudWxsLFxuICAgIGNvbGxpc2lvbnM6IG51bGwsXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgZHJhZ2dpbmdOb2RlOiBudWxsLFxuICAgIGRyYWdnaW5nTm9kZVJlY3Q6IG51bGwsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBvdmVyOiBudWxsLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnM6IFtdLFxuICAgIHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlOiBudWxsXG4gIH0pO1xuICBjb25zdCBvdmVyTm9kZSA9IGRyb3BwYWJsZUNvbnRhaW5lcnMuZ2V0Tm9kZUZvcigoX3NlbnNvckNvbnRleHQkY3VycmVuID0gc2Vuc29yQ29udGV4dC5jdXJyZW50Lm92ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfc2Vuc29yQ29udGV4dCRjdXJyZW4uaWQpO1xuICBjb25zdCBkcmFnT3ZlcmxheSA9IHVzZURyYWdPdmVybGF5TWVhc3VyaW5nKHtcbiAgICBtZWFzdXJlOiBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdPdmVybGF5Lm1lYXN1cmVcbiAgfSk7IC8vIFVzZSB0aGUgcmVjdCBvZiB0aGUgZHJhZyBvdmVybGF5IGlmIGl0IGlzIG1vdW50ZWRcblxuICBjb25zdCBkcmFnZ2luZ05vZGUgPSAoX2RyYWdPdmVybGF5JG5vZGVSZWYkID0gZHJhZ092ZXJsYXkubm9kZVJlZi5jdXJyZW50KSAhPSBudWxsID8gX2RyYWdPdmVybGF5JG5vZGVSZWYkIDogYWN0aXZlTm9kZTtcbiAgY29uc3QgZHJhZ2dpbmdOb2RlUmVjdCA9IGlzSW5pdGlhbGl6ZWQgPyAoX2RyYWdPdmVybGF5JHJlY3QgPSBkcmFnT3ZlcmxheS5yZWN0KSAhPSBudWxsID8gX2RyYWdPdmVybGF5JHJlY3QgOiBhY3RpdmVOb2RlUmVjdCA6IG51bGw7XG4gIGNvbnN0IHVzZXNEcmFnT3ZlcmxheSA9IEJvb2xlYW4oZHJhZ092ZXJsYXkubm9kZVJlZi5jdXJyZW50ICYmIGRyYWdPdmVybGF5LnJlY3QpOyAvLyBUaGUgZGVsdGEgYmV0d2VlbiB0aGUgcHJldmlvdXMgYW5kIG5ldyBwb3NpdGlvbiBvZiB0aGUgZHJhZ2dhYmxlIG5vZGVcbiAgLy8gaXMgb25seSByZWxldmFudCB3aGVuIHRoZXJlIGlzIG5vIGRyYWcgb3ZlcmxheVxuXG4gIGNvbnN0IG5vZGVSZWN0RGVsdGEgPSB1c2VSZWN0RGVsdGEodXNlc0RyYWdPdmVybGF5ID8gbnVsbCA6IGFjdGl2ZU5vZGVSZWN0KTsgLy8gR2V0IHRoZSB3aW5kb3cgcmVjdCBvZiB0aGUgZHJhZ2dpbmcgbm9kZVxuXG4gIGNvbnN0IHdpbmRvd1JlY3QgPSB1c2VXaW5kb3dSZWN0KGRyYWdnaW5nTm9kZSA/IHV0aWxpdGllcy5nZXRXaW5kb3coZHJhZ2dpbmdOb2RlKSA6IG51bGwpOyAvLyBHZXQgc2Nyb2xsYWJsZSBhbmNlc3RvcnMgb2YgdGhlIGRyYWdnaW5nIG5vZGVcblxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JzID0gdXNlU2Nyb2xsYWJsZUFuY2VzdG9ycyhpc0luaXRpYWxpemVkID8gb3Zlck5vZGUgIT0gbnVsbCA/IG92ZXJOb2RlIDogYWN0aXZlTm9kZSA6IG51bGwpO1xuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JSZWN0cyA9IHVzZVJlY3RzKHNjcm9sbGFibGVBbmNlc3RvcnMpOyAvLyBBcHBseSBtb2RpZmllcnNcblxuICBjb25zdCBtb2RpZmllZFRyYW5zbGF0ZSA9IGFwcGx5TW9kaWZpZXJzKG1vZGlmaWVycywge1xuICAgIHRyYW5zZm9ybToge1xuICAgICAgeDogdHJhbnNsYXRlLnggLSBub2RlUmVjdERlbHRhLngsXG4gICAgICB5OiB0cmFuc2xhdGUueSAtIG5vZGVSZWN0RGVsdGEueSxcbiAgICAgIHNjYWxlWDogMSxcbiAgICAgIHNjYWxlWTogMVxuICAgIH0sXG4gICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgYWN0aXZlLFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGNvbnRhaW5lck5vZGVSZWN0LFxuICAgIGRyYWdnaW5nTm9kZVJlY3QsXG4gICAgb3Zlcjogc2Vuc29yQ29udGV4dC5jdXJyZW50Lm92ZXIsXG4gICAgb3ZlcmxheU5vZGVSZWN0OiBkcmFnT3ZlcmxheS5yZWN0LFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsXG4gICAgd2luZG93UmVjdFxuICB9KTtcbiAgY29uc3QgcG9pbnRlckNvb3JkaW5hdGVzID0gYWN0aXZhdGlvbkNvb3JkaW5hdGVzID8gdXRpbGl0aWVzLmFkZChhY3RpdmF0aW9uQ29vcmRpbmF0ZXMsIHRyYW5zbGF0ZSkgOiBudWxsO1xuICBjb25zdCBzY3JvbGxPZmZzZXRzID0gdXNlU2Nyb2xsT2Zmc2V0cyhzY3JvbGxhYmxlQW5jZXN0b3JzKTsgLy8gUmVwcmVzZW50cyB0aGUgc2Nyb2xsIGRlbHRhIHNpbmNlIGRyYWdnaW5nIHdhcyBpbml0aWF0ZWRcblxuICBjb25zdCBzY3JvbGxBZGp1c3RtZW50ID0gdXNlU2Nyb2xsT2Zmc2V0c0RlbHRhKHNjcm9sbE9mZnNldHMpOyAvLyBSZXByZXNlbnRzIHRoZSBzY3JvbGwgZGVsdGEgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgYWN0aXZlIG5vZGUgcmVjdCB3YXMgbWVhc3VyZWRcblxuICBjb25zdCBhY3RpdmVOb2RlU2Nyb2xsRGVsdGEgPSB1c2VTY3JvbGxPZmZzZXRzRGVsdGEoc2Nyb2xsT2Zmc2V0cywgW2FjdGl2ZU5vZGVSZWN0XSk7XG4gIGNvbnN0IHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlID0gdXRpbGl0aWVzLmFkZChtb2RpZmllZFRyYW5zbGF0ZSwgc2Nyb2xsQWRqdXN0bWVudCk7XG4gIGNvbnN0IGNvbGxpc2lvblJlY3QgPSBkcmFnZ2luZ05vZGVSZWN0ID8gZ2V0QWRqdXN0ZWRSZWN0KGRyYWdnaW5nTm9kZVJlY3QsIG1vZGlmaWVkVHJhbnNsYXRlKSA6IG51bGw7XG4gIGNvbnN0IGNvbGxpc2lvbnMgPSBhY3RpdmUgJiYgY29sbGlzaW9uUmVjdCA/IGNvbGxpc2lvbkRldGVjdGlvbih7XG4gICAgYWN0aXZlLFxuICAgIGNvbGxpc2lvblJlY3QsXG4gICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVyczogZW5hYmxlZERyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgcG9pbnRlckNvb3JkaW5hdGVzXG4gIH0pIDogbnVsbDtcbiAgY29uc3Qgb3ZlcklkID0gZ2V0Rmlyc3RDb2xsaXNpb24oY29sbGlzaW9ucywgJ2lkJyk7XG4gIGNvbnN0IFtvdmVyLCBzZXRPdmVyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpOyAvLyBXaGVuIHRoZXJlIGlzIG5vIGRyYWcgb3ZlcmxheSB1c2VkLCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZVxuICAvLyB3aW5kb3cgc2Nyb2xsIGRlbHRhXG5cbiAgY29uc3QgYXBwbGllZFRyYW5zbGF0ZSA9IHVzZXNEcmFnT3ZlcmxheSA/IG1vZGlmaWVkVHJhbnNsYXRlIDogdXRpbGl0aWVzLmFkZChtb2RpZmllZFRyYW5zbGF0ZSwgYWN0aXZlTm9kZVNjcm9sbERlbHRhKTtcbiAgY29uc3QgdHJhbnNmb3JtID0gYWRqdXN0U2NhbGUoYXBwbGllZFRyYW5zbGF0ZSwgKF9vdmVyJHJlY3QgPSBvdmVyID09IG51bGwgPyB2b2lkIDAgOiBvdmVyLnJlY3QpICE9IG51bGwgPyBfb3ZlciRyZWN0IDogbnVsbCwgYWN0aXZlTm9kZVJlY3QpO1xuICBjb25zdCBhY3RpdmVTZW5zb3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGluc3RhbnRpYXRlU2Vuc29yID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50LCBfcmVmMikgPT4ge1xuICAgIGxldCB7XG4gICAgICBzZW5zb3I6IFNlbnNvcixcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAoYWN0aXZlUmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSBkcmFnZ2FibGVOb2Rlcy5nZXQoYWN0aXZlUmVmLmN1cnJlbnQpO1xuXG4gICAgaWYgKCFhY3RpdmVOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdG9yRXZlbnQgPSBldmVudC5uYXRpdmVFdmVudDtcbiAgICBjb25zdCBzZW5zb3JJbnN0YW5jZSA9IG5ldyBTZW5zb3Ioe1xuICAgICAgYWN0aXZlOiBhY3RpdmVSZWYuY3VycmVudCxcbiAgICAgIGFjdGl2ZU5vZGUsXG4gICAgICBldmVudDogYWN0aXZhdG9yRXZlbnQsXG4gICAgICBvcHRpb25zLFxuICAgICAgLy8gU2Vuc29ycyBuZWVkIHRvIGJlIGluc3RhbnRpYXRlZCB3aXRoIHJlZnMgZm9yIGFyZ3VtZW50cyB0aGF0IGNoYW5nZSBvdmVyIHRpbWVcbiAgICAgIC8vIG90aGVyd2lzZSB0aGV5IGFyZSBmcm96ZW4gaW4gdGltZSB3aXRoIHRoZSBzdGFsZSBhcmd1bWVudHNcbiAgICAgIGNvbnRleHQ6IHNlbnNvckNvbnRleHQsXG5cbiAgICAgIG9uQWJvcnQoaWQpIHtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTm9kZSA9IGRyYWdnYWJsZU5vZGVzLmdldChpZCk7XG5cbiAgICAgICAgaWYgKCFkcmFnZ2FibGVOb2RlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG9uRHJhZ0Fib3J0XG4gICAgICAgIH0gPSBsYXRlc3RQcm9wcy5jdXJyZW50O1xuICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICBpZFxuICAgICAgICB9O1xuICAgICAgICBvbkRyYWdBYm9ydCA9PSBudWxsID8gdm9pZCAwIDogb25EcmFnQWJvcnQoZXZlbnQpO1xuICAgICAgICBkaXNwYXRjaE1vbml0b3JFdmVudCh7XG4gICAgICAgICAgdHlwZTogJ29uRHJhZ0Fib3J0JyxcbiAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIG9uUGVuZGluZyhpZCwgY29uc3RyYWludCwgaW5pdGlhbENvb3JkaW5hdGVzLCBvZmZzZXQpIHtcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTm9kZSA9IGRyYWdnYWJsZU5vZGVzLmdldChpZCk7XG5cbiAgICAgICAgaWYgKCFkcmFnZ2FibGVOb2RlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG9uRHJhZ1BlbmRpbmdcbiAgICAgICAgfSA9IGxhdGVzdFByb3BzLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGNvbnN0cmFpbnQsXG4gICAgICAgICAgaW5pdGlhbENvb3JkaW5hdGVzLFxuICAgICAgICAgIG9mZnNldFxuICAgICAgICB9O1xuICAgICAgICBvbkRyYWdQZW5kaW5nID09IG51bGwgPyB2b2lkIDAgOiBvbkRyYWdQZW5kaW5nKGV2ZW50KTtcbiAgICAgICAgZGlzcGF0Y2hNb25pdG9yRXZlbnQoe1xuICAgICAgICAgIHR5cGU6ICdvbkRyYWdQZW5kaW5nJyxcbiAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIG9uU3RhcnQoaW5pdGlhbENvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gYWN0aXZlUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOb2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKTtcblxuICAgICAgICBpZiAoIWRyYWdnYWJsZU5vZGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgb25EcmFnU3RhcnRcbiAgICAgICAgfSA9IGxhdGVzdFByb3BzLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgIGFjdGl2YXRvckV2ZW50LFxuICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBkYXRhOiBkcmFnZ2FibGVOb2RlLmRhdGEsXG4gICAgICAgICAgICByZWN0OiBhY3RpdmVSZWN0c1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhY3REb20udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgICAgIG9uRHJhZ1N0YXJ0ID09IG51bGwgPyB2b2lkIDAgOiBvbkRyYWdTdGFydChldmVudCk7XG4gICAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5Jbml0aWFsaXppbmcpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbi5EcmFnU3RhcnQsXG4gICAgICAgICAgICBpbml0aWFsQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBhY3RpdmU6IGlkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzcGF0Y2hNb25pdG9yRXZlbnQoe1xuICAgICAgICAgICAgdHlwZTogJ29uRHJhZ1N0YXJ0JyxcbiAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0QWN0aXZlU2Vuc29yKGFjdGl2ZVNlbnNvclJlZi5jdXJyZW50KTtcbiAgICAgICAgICBzZXRBY3RpdmF0b3JFdmVudChhY3RpdmF0b3JFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgb25Nb3ZlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBBY3Rpb24uRHJhZ01vdmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBvbkVuZDogY3JlYXRlSGFuZGxlcihBY3Rpb24uRHJhZ0VuZCksXG4gICAgICBvbkNhbmNlbDogY3JlYXRlSGFuZGxlcihBY3Rpb24uRHJhZ0NhbmNlbClcbiAgICB9KTtcbiAgICBhY3RpdmVTZW5zb3JSZWYuY3VycmVudCA9IHNlbnNvckluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGFuZGxlcih0eXBlKSB7XG4gICAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICBjb2xsaXNpb25zLFxuICAgICAgICAgIG92ZXIsXG4gICAgICAgICAgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGVcbiAgICAgICAgfSA9IHNlbnNvckNvbnRleHQuY3VycmVudDtcbiAgICAgICAgbGV0IGV2ZW50ID0gbnVsbDtcblxuICAgICAgICBpZiAoYWN0aXZlICYmIHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2FuY2VsRHJvcFxuICAgICAgICAgIH0gPSBsYXRlc3RQcm9wcy5jdXJyZW50O1xuICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnMsXG4gICAgICAgICAgICBkZWx0YTogc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGUsXG4gICAgICAgICAgICBvdmVyXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0eXBlID09PSBBY3Rpb24uRHJhZ0VuZCAmJiB0eXBlb2YgY2FuY2VsRHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ2FuY2VsID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGNhbmNlbERyb3AoZXZlbnQpKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENhbmNlbCkge1xuICAgICAgICAgICAgICB0eXBlID0gQWN0aW9uLkRyYWdDYW5jZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICByZWFjdERvbS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFN0YXR1cyhTdGF0dXMuVW5pbml0aWFsaXplZCk7XG4gICAgICAgICAgc2V0T3ZlcihudWxsKTtcbiAgICAgICAgICBzZXRBY3RpdmVTZW5zb3IobnVsbCk7XG4gICAgICAgICAgc2V0QWN0aXZhdG9yRXZlbnQobnVsbCk7XG4gICAgICAgICAgYWN0aXZlU2Vuc29yUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHR5cGUgPT09IEFjdGlvbi5EcmFnRW5kID8gJ29uRHJhZ0VuZCcgOiAnb25EcmFnQ2FuY2VsJztcblxuICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGxhdGVzdFByb3BzLmN1cnJlbnRbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIGhhbmRsZXIgPT0gbnVsbCA/IHZvaWQgMCA6IGhhbmRsZXIoZXZlbnQpO1xuICAgICAgICAgICAgZGlzcGF0Y2hNb25pdG9yRXZlbnQoe1xuICAgICAgICAgICAgICB0eXBlOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW2RyYWdnYWJsZU5vZGVzXSk7XG4gIGNvbnN0IGJpbmRBY3RpdmF0b3JUb1NlbnNvckluc3RhbnRpYXRvciA9IFJlYWN0LnVzZUNhbGxiYWNrKChoYW5kbGVyLCBzZW5zb3IpID0+IHtcbiAgICByZXR1cm4gKGV2ZW50LCBhY3RpdmUpID0+IHtcbiAgICAgIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZXZlbnQubmF0aXZlRXZlbnQ7XG4gICAgICBjb25zdCBhY3RpdmVEcmFnZ2FibGVOb2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGFjdGl2ZSk7XG5cbiAgICAgIGlmICggLy8gQW5vdGhlciBzZW5zb3IgaXMgYWxyZWFkeSBpbnN0YW50aWF0aW5nXG4gICAgICBhY3RpdmVSZWYuY3VycmVudCAhPT0gbnVsbCB8fCAvLyBObyBhY3RpdmUgZHJhZ2dhYmxlXG4gICAgICAhYWN0aXZlRHJhZ2dhYmxlTm9kZSB8fCAvLyBFdmVudCBoYXMgYWxyZWFkeSBiZWVuIGNhcHR1cmVkXG4gICAgICBuYXRpdmVFdmVudC5kbmRLaXQgfHwgbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGl2YXRpb25Db250ZXh0ID0ge1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZURyYWdnYWJsZU5vZGVcbiAgICAgIH07XG4gICAgICBjb25zdCBzaG91bGRBY3RpdmF0ZSA9IGhhbmRsZXIoZXZlbnQsIHNlbnNvci5vcHRpb25zLCBhY3RpdmF0aW9uQ29udGV4dCk7XG5cbiAgICAgIGlmIChzaG91bGRBY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBuYXRpdmVFdmVudC5kbmRLaXQgPSB7XG4gICAgICAgICAgY2FwdHVyZWRCeTogc2Vuc29yLnNlbnNvclxuICAgICAgICB9O1xuICAgICAgICBhY3RpdmVSZWYuY3VycmVudCA9IGFjdGl2ZTtcbiAgICAgICAgaW5zdGFudGlhdGVTZW5zb3IoZXZlbnQsIHNlbnNvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2RyYWdnYWJsZU5vZGVzLCBpbnN0YW50aWF0ZVNlbnNvcl0pO1xuICBjb25zdCBhY3RpdmF0b3JzID0gdXNlQ29tYmluZUFjdGl2YXRvcnMoc2Vuc29ycywgYmluZEFjdGl2YXRvclRvU2Vuc29ySW5zdGFudGlhdG9yKTtcbiAgdXNlU2Vuc29yU2V0dXAoc2Vuc29ycyk7XG4gIHV0aWxpdGllcy51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlTm9kZVJlY3QgJiYgc3RhdHVzID09PSBTdGF0dXMuSW5pdGlhbGl6aW5nKSB7XG4gICAgICBzZXRTdGF0dXMoU3RhdHVzLkluaXRpYWxpemVkKTtcbiAgICB9XG4gIH0sIFthY3RpdmVOb2RlUmVjdCwgc3RhdHVzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25EcmFnTW92ZVxuICAgIH0gPSBsYXRlc3RQcm9wcy5jdXJyZW50O1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGFjdGl2YXRvckV2ZW50LFxuICAgICAgY29sbGlzaW9ucyxcbiAgICAgIG92ZXJcbiAgICB9ID0gc2Vuc29yQ29udGV4dC5jdXJyZW50O1xuXG4gICAgaWYgKCFhY3RpdmUgfHwgIWFjdGl2YXRvckV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmF0b3JFdmVudCxcbiAgICAgIGNvbGxpc2lvbnMsXG4gICAgICBkZWx0YToge1xuICAgICAgICB4OiBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS54LFxuICAgICAgICB5OiBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS55XG4gICAgICB9LFxuICAgICAgb3ZlclxuICAgIH07XG4gICAgcmVhY3REb20udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgb25EcmFnTW92ZSA9PSBudWxsID8gdm9pZCAwIDogb25EcmFnTW92ZShldmVudCk7XG4gICAgICBkaXNwYXRjaE1vbml0b3JFdmVudCh7XG4gICAgICAgIHR5cGU6ICdvbkRyYWdNb3ZlJyxcbiAgICAgICAgZXZlbnRcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS54LCBzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZS55XSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBjb2xsaXNpb25zLFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICAgIHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlXG4gICAgfSA9IHNlbnNvckNvbnRleHQuY3VycmVudDtcblxuICAgIGlmICghYWN0aXZlIHx8IGFjdGl2ZVJlZi5jdXJyZW50ID09IG51bGwgfHwgIWFjdGl2YXRvckV2ZW50IHx8ICFzY3JvbGxBZGp1c3RlZFRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIG9uRHJhZ092ZXJcbiAgICB9ID0gbGF0ZXN0UHJvcHMuY3VycmVudDtcbiAgICBjb25zdCBvdmVyQ29udGFpbmVyID0gZHJvcHBhYmxlQ29udGFpbmVycy5nZXQob3ZlcklkKTtcbiAgICBjb25zdCBvdmVyID0gb3ZlckNvbnRhaW5lciAmJiBvdmVyQ29udGFpbmVyLnJlY3QuY3VycmVudCA/IHtcbiAgICAgIGlkOiBvdmVyQ29udGFpbmVyLmlkLFxuICAgICAgcmVjdDogb3ZlckNvbnRhaW5lci5yZWN0LmN1cnJlbnQsXG4gICAgICBkYXRhOiBvdmVyQ29udGFpbmVyLmRhdGEsXG4gICAgICBkaXNhYmxlZDogb3ZlckNvbnRhaW5lci5kaXNhYmxlZFxuICAgIH0gOiBudWxsO1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBjb2xsaXNpb25zLFxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgeDogc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGUueCxcbiAgICAgICAgeTogc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGUueVxuICAgICAgfSxcbiAgICAgIG92ZXJcbiAgICB9O1xuICAgIHJlYWN0RG9tLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIHNldE92ZXIob3Zlcik7XG4gICAgICBvbkRyYWdPdmVyID09IG51bGwgPyB2b2lkIDAgOiBvbkRyYWdPdmVyKGV2ZW50KTtcbiAgICAgIGRpc3BhdGNoTW9uaXRvckV2ZW50KHtcbiAgICAgICAgdHlwZTogJ29uRHJhZ092ZXInLFxuICAgICAgICBldmVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW292ZXJJZF0pO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgc2Vuc29yQ29udGV4dC5jdXJyZW50ID0ge1xuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBhY3RpdmUsXG4gICAgICBhY3RpdmVOb2RlLFxuICAgICAgY29sbGlzaW9uUmVjdCxcbiAgICAgIGNvbGxpc2lvbnMsXG4gICAgICBkcm9wcGFibGVSZWN0cyxcbiAgICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgICAgZHJhZ2dpbmdOb2RlLFxuICAgICAgZHJhZ2dpbmdOb2RlUmVjdCxcbiAgICAgIGRyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgICBvdmVyLFxuICAgICAgc2Nyb2xsYWJsZUFuY2VzdG9ycyxcbiAgICAgIHNjcm9sbEFkanVzdGVkVHJhbnNsYXRlXG4gICAgfTtcbiAgICBhY3RpdmVSZWN0cy5jdXJyZW50ID0ge1xuICAgICAgaW5pdGlhbDogZHJhZ2dpbmdOb2RlUmVjdCxcbiAgICAgIHRyYW5zbGF0ZWQ6IGNvbGxpc2lvblJlY3RcbiAgICB9O1xuICB9LCBbYWN0aXZlLCBhY3RpdmVOb2RlLCBjb2xsaXNpb25zLCBjb2xsaXNpb25SZWN0LCBkcmFnZ2FibGVOb2RlcywgZHJhZ2dpbmdOb2RlLCBkcmFnZ2luZ05vZGVSZWN0LCBkcm9wcGFibGVSZWN0cywgZHJvcHBhYmxlQ29udGFpbmVycywgb3Zlciwgc2Nyb2xsYWJsZUFuY2VzdG9ycywgc2Nyb2xsQWRqdXN0ZWRUcmFuc2xhdGVdKTtcbiAgdXNlQXV0b1Njcm9sbGVyKHsgLi4uYXV0b1Njcm9sbE9wdGlvbnMsXG4gICAgZGVsdGE6IHRyYW5zbGF0ZSxcbiAgICBkcmFnZ2luZ1JlY3Q6IGNvbGxpc2lvblJlY3QsXG4gICAgcG9pbnRlckNvb3JkaW5hdGVzLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvcnMsXG4gICAgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHNcbiAgfSk7XG4gIGNvbnN0IHB1YmxpY0NvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aXZlTm9kZSxcbiAgICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBjb2xsaXNpb25zLFxuICAgICAgY29udGFpbmVyTm9kZVJlY3QsXG4gICAgICBkcmFnT3ZlcmxheSxcbiAgICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgICAgb3ZlcixcbiAgICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzLFxuICAgICAgc2Nyb2xsYWJsZUFuY2VzdG9ycyxcbiAgICAgIHNjcm9sbGFibGVBbmNlc3RvclJlY3RzLFxuICAgICAgbWVhc3VyaW5nQ29uZmlndXJhdGlvbixcbiAgICAgIG1lYXN1cmluZ1NjaGVkdWxlZCxcbiAgICAgIHdpbmRvd1JlY3RcbiAgICB9O1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9LCBbYWN0aXZlLCBhY3RpdmVOb2RlLCBhY3RpdmVOb2RlUmVjdCwgYWN0aXZhdG9yRXZlbnQsIGNvbGxpc2lvbnMsIGNvbnRhaW5lck5vZGVSZWN0LCBkcmFnT3ZlcmxheSwgZHJhZ2dhYmxlTm9kZXMsIGRyb3BwYWJsZUNvbnRhaW5lcnMsIGRyb3BwYWJsZVJlY3RzLCBvdmVyLCBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVycywgc2Nyb2xsYWJsZUFuY2VzdG9ycywgc2Nyb2xsYWJsZUFuY2VzdG9yUmVjdHMsIG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24sIG1lYXN1cmluZ1NjaGVkdWxlZCwgd2luZG93UmVjdF0pO1xuICBjb25zdCBpbnRlcm5hbENvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgICBhY3RpdmF0b3JzLFxuICAgICAgYWN0aXZlLFxuICAgICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgICBhcmlhRGVzY3JpYmVkQnlJZDoge1xuICAgICAgICBkcmFnZ2FibGU6IGRyYWdnYWJsZURlc2NyaWJlZEJ5SWRcbiAgICAgIH0sXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgICAgb3ZlcixcbiAgICAgIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzXG4gICAgfTtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSwgW2FjdGl2YXRvckV2ZW50LCBhY3RpdmF0b3JzLCBhY3RpdmUsIGFjdGl2ZU5vZGVSZWN0LCBkaXNwYXRjaCwgZHJhZ2dhYmxlRGVzY3JpYmVkQnlJZCwgZHJhZ2dhYmxlTm9kZXMsIG92ZXIsIG1lYXN1cmVEcm9wcGFibGVDb250YWluZXJzXSk7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KERuZE1vbml0b3JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJlZ2lzdGVyTW9uaXRvckxpc3RlbmVyXG4gIH0sIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGludGVybmFsQ29udGV4dFxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFB1YmxpY0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcHVibGljQ29udGV4dFxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFjdGl2ZURyYWdnYWJsZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdHJhbnNmb3JtXG4gIH0sIGNoaWxkcmVuKSksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVzdG9yZUZvY3VzLCB7XG4gICAgZGlzYWJsZWQ6IChhY2Nlc3NpYmlsaXR5ID09IG51bGwgPyB2b2lkIDAgOiBhY2Nlc3NpYmlsaXR5LnJlc3RvcmVGb2N1cykgPT09IGZhbHNlXG4gIH0pKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChBY2Nlc3NpYmlsaXR5LCB7IC4uLmFjY2Vzc2liaWxpdHksXG4gICAgaGlkZGVuVGV4dERlc2NyaWJlZEJ5SWQ6IGRyYWdnYWJsZURlc2NyaWJlZEJ5SWRcbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGdldEF1dG9TY3JvbGxlck9wdGlvbnMoKSB7XG4gICAgY29uc3QgYWN0aXZlU2Vuc29yRGlzYWJsZXNBdXRvc2Nyb2xsID0gKGFjdGl2ZVNlbnNvciA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlU2Vuc29yLmF1dG9TY3JvbGxFbmFibGVkKSA9PT0gZmFsc2U7XG4gICAgY29uc3QgYXV0b1Njcm9sbEdsb2JhbGx5RGlzYWJsZWQgPSB0eXBlb2YgYXV0b1Njcm9sbCA9PT0gJ29iamVjdCcgPyBhdXRvU2Nyb2xsLmVuYWJsZWQgPT09IGZhbHNlIDogYXV0b1Njcm9sbCA9PT0gZmFsc2U7XG4gICAgY29uc3QgZW5hYmxlZCA9IGlzSW5pdGlhbGl6ZWQgJiYgIWFjdGl2ZVNlbnNvckRpc2FibGVzQXV0b3Njcm9sbCAmJiAhYXV0b1Njcm9sbEdsb2JhbGx5RGlzYWJsZWQ7XG5cbiAgICBpZiAodHlwZW9mIGF1dG9TY3JvbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4geyAuLi5hdXRvU2Nyb2xsLFxuICAgICAgICBlbmFibGVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBlbmFibGVkXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IE51bGxDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5jb25zdCBkZWZhdWx0Um9sZSA9ICdidXR0b24nO1xuY29uc3QgSURfUFJFRklYID0gJ0RyYWdnYWJsZSc7XG5mdW5jdGlvbiB1c2VEcmFnZ2FibGUoX3JlZikge1xuICBsZXQge1xuICAgIGlkLFxuICAgIGRhdGEsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBhdHRyaWJ1dGVzXG4gIH0gPSBfcmVmO1xuICBjb25zdCBrZXkgPSB1dGlsaXRpZXMudXNlVW5pcXVlSWQoSURfUFJFRklYKTtcbiAgY29uc3Qge1xuICAgIGFjdGl2YXRvcnMsXG4gICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgYWN0aXZlLFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGFyaWFEZXNjcmliZWRCeUlkLFxuICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgIG92ZXJcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoSW50ZXJuYWxDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHJvbGUgPSBkZWZhdWx0Um9sZSxcbiAgICByb2xlRGVzY3JpcHRpb24gPSAnZHJhZ2dhYmxlJyxcbiAgICB0YWJJbmRleCA9IDBcbiAgfSA9IGF0dHJpYnV0ZXMgIT0gbnVsbCA/IGF0dHJpYnV0ZXMgOiB7fTtcbiAgY29uc3QgaXNEcmFnZ2luZyA9IChhY3RpdmUgPT0gbnVsbCA/IHZvaWQgMCA6IGFjdGl2ZS5pZCkgPT09IGlkO1xuICBjb25zdCB0cmFuc2Zvcm0gPSBSZWFjdC51c2VDb250ZXh0KGlzRHJhZ2dpbmcgPyBBY3RpdmVEcmFnZ2FibGVDb250ZXh0IDogTnVsbENvbnRleHQpO1xuICBjb25zdCBbbm9kZSwgc2V0Tm9kZVJlZl0gPSB1dGlsaXRpZXMudXNlTm9kZVJlZigpO1xuICBjb25zdCBbYWN0aXZhdG9yTm9kZSwgc2V0QWN0aXZhdG9yTm9kZVJlZl0gPSB1dGlsaXRpZXMudXNlTm9kZVJlZigpO1xuICBjb25zdCBsaXN0ZW5lcnMgPSB1c2VTeW50aGV0aWNMaXN0ZW5lcnMoYWN0aXZhdG9ycywgaWQpO1xuICBjb25zdCBkYXRhUmVmID0gdXRpbGl0aWVzLnVzZUxhdGVzdFZhbHVlKGRhdGEpO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgZHJhZ2dhYmxlTm9kZXMuc2V0KGlkLCB7XG4gICAgICBpZCxcbiAgICAgIGtleSxcbiAgICAgIG5vZGUsXG4gICAgICBhY3RpdmF0b3JOb2RlLFxuICAgICAgZGF0YTogZGF0YVJlZlxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gZHJhZ2dhYmxlTm9kZXMuZ2V0KGlkKTtcblxuICAgICAgaWYgKG5vZGUgJiYgbm9kZS5rZXkgPT09IGtleSkge1xuICAgICAgICBkcmFnZ2FibGVOb2Rlcy5kZWxldGUoaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgW2RyYWdnYWJsZU5vZGVzLCBpZF0pO1xuICBjb25zdCBtZW1vaXplZEF0dHJpYnV0ZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcm9sZSxcbiAgICB0YWJJbmRleCxcbiAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICdhcmlhLXByZXNzZWQnOiBpc0RyYWdnaW5nICYmIHJvbGUgPT09IGRlZmF1bHRSb2xlID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAnYXJpYS1yb2xlZGVzY3JpcHRpb24nOiByb2xlRGVzY3JpcHRpb24sXG4gICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhRGVzY3JpYmVkQnlJZC5kcmFnZ2FibGVcbiAgfSksIFtkaXNhYmxlZCwgcm9sZSwgdGFiSW5kZXgsIGlzRHJhZ2dpbmcsIHJvbGVEZXNjcmlwdGlvbiwgYXJpYURlc2NyaWJlZEJ5SWQuZHJhZ2dhYmxlXSk7XG4gIHJldHVybiB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRvckV2ZW50LFxuICAgIGFjdGl2ZU5vZGVSZWN0LFxuICAgIGF0dHJpYnV0ZXM6IG1lbW9pemVkQXR0cmlidXRlcyxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGxpc3RlbmVyczogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBsaXN0ZW5lcnMsXG4gICAgbm9kZSxcbiAgICBvdmVyLFxuICAgIHNldE5vZGVSZWYsXG4gICAgc2V0QWN0aXZhdG9yTm9kZVJlZixcbiAgICB0cmFuc2Zvcm1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRG5kQ29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUHVibGljQ29udGV4dCk7XG59XG5cbmNvbnN0IElEX1BSRUZJWCQxID0gJ0Ryb3BwYWJsZSc7XG5jb25zdCBkZWZhdWx0UmVzaXplT2JzZXJ2ZXJDb25maWcgPSB7XG4gIHRpbWVvdXQ6IDI1XG59O1xuZnVuY3Rpb24gdXNlRHJvcHBhYmxlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBkYXRhLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgaWQsXG4gICAgcmVzaXplT2JzZXJ2ZXJDb25maWdcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGtleSA9IHV0aWxpdGllcy51c2VVbmlxdWVJZChJRF9QUkVGSVgkMSk7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgZGlzcGF0Y2gsXG4gICAgb3ZlcixcbiAgICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVyc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChJbnRlcm5hbENvbnRleHQpO1xuICBjb25zdCBwcmV2aW91cyA9IFJlYWN0LnVzZVJlZih7XG4gICAgZGlzYWJsZWRcbiAgfSk7XG4gIGNvbnN0IHJlc2l6ZU9ic2VydmVyQ29ubmVjdGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgY29uc3QgcmVjdCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FsbGJhY2tJZCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkOiByZXNpemVPYnNlcnZlckRpc2FibGVkLFxuICAgIHVwZGF0ZU1lYXN1cmVtZW50c0ZvcixcbiAgICB0aW1lb3V0OiByZXNpemVPYnNlcnZlclRpbWVvdXRcbiAgfSA9IHsgLi4uZGVmYXVsdFJlc2l6ZU9ic2VydmVyQ29uZmlnLFxuICAgIC4uLnJlc2l6ZU9ic2VydmVyQ29uZmlnXG4gIH07XG4gIGNvbnN0IGlkcyA9IHV0aWxpdGllcy51c2VMYXRlc3RWYWx1ZSh1cGRhdGVNZWFzdXJlbWVudHNGb3IgIT0gbnVsbCA/IHVwZGF0ZU1lYXN1cmVtZW50c0ZvciA6IGlkKTtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghcmVzaXplT2JzZXJ2ZXJDb25uZWN0ZWQuY3VycmVudCkge1xuICAgICAgLy8gUmVzaXplT2JzZXJ2ZXIgaW52b2tlcyB0aGUgYGhhbmRsZVJlc2l6ZWAgY2FsbGJhY2sgYXMgc29vbiBhcyBgb2JzZXJ2ZWAgaXMgY2FsbGVkLFxuICAgICAgLy8gYXNzdW1pbmcgdGhlIGVsZW1lbnQgaXMgcmVuZGVyZWQgYW5kIGRpc3BsYXllZC5cbiAgICAgIHJlc2l6ZU9ic2VydmVyQ29ubmVjdGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjYWxsYmFja0lkLmN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGNhbGxiYWNrSWQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2tJZC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVycyhBcnJheS5pc0FycmF5KGlkcy5jdXJyZW50KSA/IGlkcy5jdXJyZW50IDogW2lkcy5jdXJyZW50XSk7XG4gICAgICBjYWxsYmFja0lkLmN1cnJlbnQgPSBudWxsO1xuICAgIH0sIHJlc2l6ZU9ic2VydmVyVGltZW91dCk7XG4gIH0sIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbcmVzaXplT2JzZXJ2ZXJUaW1lb3V0XSk7XG4gIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gdXNlUmVzaXplT2JzZXJ2ZXIoe1xuICAgIGNhbGxiYWNrOiBoYW5kbGVSZXNpemUsXG4gICAgZGlzYWJsZWQ6IHJlc2l6ZU9ic2VydmVyRGlzYWJsZWQgfHwgIWFjdGl2ZVxuICB9KTtcbiAgY29uc3QgaGFuZGxlTm9kZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXdFbGVtZW50LCBwcmV2aW91c0VsZW1lbnQpID0+IHtcbiAgICBpZiAoIXJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzRWxlbWVudCkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHByZXZpb3VzRWxlbWVudCk7XG4gICAgICByZXNpemVPYnNlcnZlckNvbm5lY3RlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobmV3RWxlbWVudCk7XG4gICAgfVxuICB9LCBbcmVzaXplT2JzZXJ2ZXJdKTtcbiAgY29uc3QgW25vZGVSZWYsIHNldE5vZGVSZWZdID0gdXRpbGl0aWVzLnVzZU5vZGVSZWYoaGFuZGxlTm9kZUNoYW5nZSk7XG4gIGNvbnN0IGRhdGFSZWYgPSB1dGlsaXRpZXMudXNlTGF0ZXN0VmFsdWUoZGF0YSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyZXNpemVPYnNlcnZlciB8fCAhbm9kZVJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHJlc2l6ZU9ic2VydmVyQ29ubmVjdGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKG5vZGVSZWYuY3VycmVudCk7XG4gIH0sIFtub2RlUmVmLCByZXNpemVPYnNlcnZlcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvbi5SZWdpc3RlckRyb3BwYWJsZSxcbiAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGtleSxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIG5vZGU6IG5vZGVSZWYsXG4gICAgICAgIHJlY3QsXG4gICAgICAgIGRhdGE6IGRhdGFSZWZcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uLlVucmVnaXN0ZXJEcm9wcGFibGUsXG4gICAgICBrZXksXG4gICAgICBpZFxuICAgIH0pO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtpZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCAhPT0gcHJldmlvdXMuY3VycmVudC5kaXNhYmxlZCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBY3Rpb24uU2V0RHJvcHBhYmxlRGlzYWJsZWQsXG4gICAgICAgIGlkLFxuICAgICAgICBrZXksXG4gICAgICAgIGRpc2FibGVkXG4gICAgICB9KTtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG4gIH0sIFtpZCwga2V5LCBkaXNhYmxlZCwgZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmUsXG4gICAgcmVjdCxcbiAgICBpc092ZXI6IChvdmVyID09IG51bGwgPyB2b2lkIDAgOiBvdmVyLmlkKSA9PT0gaWQsXG4gICAgbm9kZTogbm9kZVJlZixcbiAgICBvdmVyLFxuICAgIHNldE5vZGVSZWZcbiAgfTtcbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9uTWFuYWdlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYW5pbWF0aW9uLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICBjb25zdCBbY2xvbmVkQ2hpbGRyZW4sIHNldENsb25lZENoaWxkcmVuXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgcHJldmlvdXNDaGlsZHJlbiA9IHV0aWxpdGllcy51c2VQcmV2aW91cyhjaGlsZHJlbik7XG5cbiAgaWYgKCFjaGlsZHJlbiAmJiAhY2xvbmVkQ2hpbGRyZW4gJiYgcHJldmlvdXNDaGlsZHJlbikge1xuICAgIHNldENsb25lZENoaWxkcmVuKHByZXZpb3VzQ2hpbGRyZW4pO1xuICB9XG5cbiAgdXRpbGl0aWVzLnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IGNsb25lZENoaWxkcmVuID09IG51bGwgPyB2b2lkIDAgOiBjbG9uZWRDaGlsZHJlbi5rZXk7XG4gICAgY29uc3QgaWQgPSBjbG9uZWRDaGlsZHJlbiA9PSBudWxsID8gdm9pZCAwIDogY2xvbmVkQ2hpbGRyZW4ucHJvcHMuaWQ7XG5cbiAgICBpZiAoa2V5ID09IG51bGwgfHwgaWQgPT0gbnVsbCkge1xuICAgICAgc2V0Q2xvbmVkQ2hpbGRyZW4obnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKGFuaW1hdGlvbihpZCwgZWxlbWVudCkpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0Q2xvbmVkQ2hpbGRyZW4obnVsbCk7XG4gICAgfSk7XG4gIH0sIFthbmltYXRpb24sIGNsb25lZENoaWxkcmVuLCBlbGVtZW50XSk7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbiwgY2xvbmVkQ2hpbGRyZW4gPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2xvbmVkQ2hpbGRyZW4sIHtcbiAgICByZWY6IHNldEVsZW1lbnRcbiAgfSkgOiBudWxsKTtcbn1cblxuY29uc3QgZGVmYXVsdFRyYW5zZm9ybSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5mdW5jdGlvbiBOdWxsaWZpZWRDb250ZXh0UHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChJbnRlcm5hbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGVmYXVsdEludGVybmFsQ29udGV4dFxuICB9LCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFjdGl2ZURyYWdnYWJsZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGVmYXVsdFRyYW5zZm9ybVxuICB9LCBjaGlsZHJlbikpO1xufVxuXG5jb25zdCBiYXNlU3R5bGVzID0ge1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG91Y2hBY3Rpb246ICdub25lJ1xufTtcblxuY29uc3QgZGVmYXVsdFRyYW5zaXRpb24gPSBhY3RpdmF0b3JFdmVudCA9PiB7XG4gIGNvbnN0IGlzS2V5Ym9hcmRBY3RpdmF0b3IgPSB1dGlsaXRpZXMuaXNLZXlib2FyZEV2ZW50KGFjdGl2YXRvckV2ZW50KTtcbiAgcmV0dXJuIGlzS2V5Ym9hcmRBY3RpdmF0b3IgPyAndHJhbnNmb3JtIDI1MG1zIGVhc2UnIDogdW5kZWZpbmVkO1xufTtcblxuY29uc3QgUG9zaXRpb25lZE92ZXJsYXkgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZiwgcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgYXMsXG4gICAgYWN0aXZhdG9yRXZlbnQsXG4gICAgYWRqdXN0U2NhbGUsXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIHJlY3QsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNmb3JtLFxuICAgIHRyYW5zaXRpb24gPSBkZWZhdWx0VHJhbnNpdGlvblxuICB9ID0gX3JlZjtcblxuICBpZiAoIXJlY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNjYWxlQWRqdXN0ZWRUcmFuc2Zvcm0gPSBhZGp1c3RTY2FsZSA/IHRyYW5zZm9ybSA6IHsgLi4udHJhbnNmb3JtLFxuICAgIHNjYWxlWDogMSxcbiAgICBzY2FsZVk6IDFcbiAgfTtcbiAgY29uc3Qgc3R5bGVzID0geyAuLi5iYXNlU3R5bGVzLFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdHJhbnNmb3JtOiB1dGlsaXRpZXMuQ1NTLlRyYW5zZm9ybS50b1N0cmluZyhzY2FsZUFkanVzdGVkVHJhbnNmb3JtKSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGFkanVzdFNjYWxlICYmIGFjdGl2YXRvckV2ZW50ID8gZ2V0UmVsYXRpdmVUcmFuc2Zvcm1PcmlnaW4oYWN0aXZhdG9yRXZlbnQsIHJlY3QpIDogdW5kZWZpbmVkLFxuICAgIHRyYW5zaXRpb246IHR5cGVvZiB0cmFuc2l0aW9uID09PSAnZnVuY3Rpb24nID8gdHJhbnNpdGlvbihhY3RpdmF0b3JFdmVudCkgOiB0cmFuc2l0aW9uLFxuICAgIC4uLnN0eWxlXG4gIH07XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFzLCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBzdHlsZXMsXG4gICAgcmVmXG4gIH0sIGNoaWxkcmVuKTtcbn0pO1xuXG5jb25zdCBkZWZhdWx0RHJvcEFuaW1hdGlvblNpZGVFZmZlY3RzID0gb3B0aW9ucyA9PiBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBhY3RpdmUsXG4gICAgZHJhZ092ZXJsYXlcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG9yaWdpbmFsU3R5bGVzID0ge307XG4gIGNvbnN0IHtcbiAgICBzdHlsZXMsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBvcHRpb25zO1xuXG4gIGlmIChzdHlsZXMgIT0gbnVsbCAmJiBzdHlsZXMuYWN0aXZlKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzLmFjdGl2ZSkpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5hbFN0eWxlc1trZXldID0gYWN0aXZlLm5vZGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpO1xuICAgICAgYWN0aXZlLm5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0eWxlcyAhPSBudWxsICYmIHN0eWxlcy5kcmFnT3ZlcmxheSkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcy5kcmFnT3ZlcmxheSkpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBkcmFnT3ZlcmxheS5ub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjbGFzc05hbWUgIT0gbnVsbCAmJiBjbGFzc05hbWUuYWN0aXZlKSB7XG4gICAgYWN0aXZlLm5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUuYWN0aXZlKTtcbiAgfVxuXG4gIGlmIChjbGFzc05hbWUgIT0gbnVsbCAmJiBjbGFzc05hbWUuZHJhZ092ZXJsYXkpIHtcbiAgICBkcmFnT3ZlcmxheS5ub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLmRyYWdPdmVybGF5KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9yaWdpbmFsU3R5bGVzKSkge1xuICAgICAgYWN0aXZlLm5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzTmFtZSAhPSBudWxsICYmIGNsYXNzTmFtZS5hY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZGVmYXVsdEtleWZyYW1lUmVzb2x2ZXIgPSBfcmVmMiA9PiB7XG4gIGxldCB7XG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICBpbml0aWFsLFxuICAgICAgZmluYWxcbiAgICB9XG4gIH0gPSBfcmVmMjtcbiAgcmV0dXJuIFt7XG4gICAgdHJhbnNmb3JtOiB1dGlsaXRpZXMuQ1NTLlRyYW5zZm9ybS50b1N0cmluZyhpbml0aWFsKVxuICB9LCB7XG4gICAgdHJhbnNmb3JtOiB1dGlsaXRpZXMuQ1NTLlRyYW5zZm9ybS50b1N0cmluZyhmaW5hbClcbiAgfV07XG59O1xuXG5jb25zdCBkZWZhdWx0RHJvcEFuaW1hdGlvbkNvbmZpZ3VyYXRpb24gPSB7XG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2luZzogJ2Vhc2UnLFxuICBrZXlmcmFtZXM6IGRlZmF1bHRLZXlmcmFtZVJlc29sdmVyLFxuICBzaWRlRWZmZWN0czogLyojX19QVVJFX18qL2RlZmF1bHREcm9wQW5pbWF0aW9uU2lkZUVmZmVjdHMoe1xuICAgIHN0eWxlczoge1xuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIG9wYWNpdHk6ICcwJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07XG5mdW5jdGlvbiB1c2VEcm9wQW5pbWF0aW9uKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgY29uZmlnLFxuICAgIGRyYWdnYWJsZU5vZGVzLFxuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnMsXG4gICAgbWVhc3VyaW5nQ29uZmlndXJhdGlvblxuICB9ID0gX3JlZjM7XG4gIHJldHVybiB1dGlsaXRpZXMudXNlRXZlbnQoKGlkLCBub2RlKSA9PiB7XG4gICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZURyYWdnYWJsZSA9IGRyYWdnYWJsZU5vZGVzLmdldChpZCk7XG5cbiAgICBpZiAoIWFjdGl2ZURyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSBhY3RpdmVEcmFnZ2FibGUubm9kZS5jdXJyZW50O1xuXG4gICAgaWYgKCFhY3RpdmVOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVhc3VyYWJsZU5vZGUgPSBnZXRNZWFzdXJhYmxlTm9kZShub2RlKTtcblxuICAgIGlmICghbWVhc3VyYWJsZU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2Zvcm1cbiAgICB9ID0gdXRpbGl0aWVzLmdldFdpbmRvdyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtKHRyYW5zZm9ybSk7XG5cbiAgICBpZiAoIXBhcnNlZFRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicgPyBjb25maWcgOiBjcmVhdGVEZWZhdWx0RHJvcEFuaW1hdGlvbihjb25maWcpO1xuICAgIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoYWN0aXZlTm9kZSwgbWVhc3VyaW5nQ29uZmlndXJhdGlvbi5kcmFnZ2FibGUubWVhc3VyZSk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbih7XG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGE6IGFjdGl2ZURyYWdnYWJsZS5kYXRhLFxuICAgICAgICBub2RlOiBhY3RpdmVOb2RlLFxuICAgICAgICByZWN0OiBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdnYWJsZS5tZWFzdXJlKGFjdGl2ZU5vZGUpXG4gICAgICB9LFxuICAgICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgICBkcmFnT3ZlcmxheToge1xuICAgICAgICBub2RlLFxuICAgICAgICByZWN0OiBtZWFzdXJpbmdDb25maWd1cmF0aW9uLmRyYWdPdmVybGF5Lm1lYXN1cmUobWVhc3VyYWJsZU5vZGUpXG4gICAgICB9LFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICAgIG1lYXN1cmluZ0NvbmZpZ3VyYXRpb24sXG4gICAgICB0cmFuc2Zvcm06IHBhcnNlZFRyYW5zZm9ybVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdERyb3BBbmltYXRpb24ob3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZHVyYXRpb24sXG4gICAgZWFzaW5nLFxuICAgIHNpZGVFZmZlY3RzLFxuICAgIGtleWZyYW1lc1xuICB9ID0geyAuLi5kZWZhdWx0RHJvcEFuaW1hdGlvbkNvbmZpZ3VyYXRpb24sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICByZXR1cm4gX3JlZjQgPT4ge1xuICAgIGxldCB7XG4gICAgICBhY3RpdmUsXG4gICAgICBkcmFnT3ZlcmxheSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gX3JlZjQ7XG5cbiAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAvLyBEbyBub3QgYW5pbWF0ZSBpZiBhbmltYXRpb24gZHVyYXRpb24gaXMgemVyby5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgIHg6IGRyYWdPdmVybGF5LnJlY3QubGVmdCAtIGFjdGl2ZS5yZWN0LmxlZnQsXG4gICAgICB5OiBkcmFnT3ZlcmxheS5yZWN0LnRvcCAtIGFjdGl2ZS5yZWN0LnRvcFxuICAgIH07XG4gICAgY29uc3Qgc2NhbGUgPSB7XG4gICAgICBzY2FsZVg6IHRyYW5zZm9ybS5zY2FsZVggIT09IDEgPyBhY3RpdmUucmVjdC53aWR0aCAqIHRyYW5zZm9ybS5zY2FsZVggLyBkcmFnT3ZlcmxheS5yZWN0LndpZHRoIDogMSxcbiAgICAgIHNjYWxlWTogdHJhbnNmb3JtLnNjYWxlWSAhPT0gMSA/IGFjdGl2ZS5yZWN0LmhlaWdodCAqIHRyYW5zZm9ybS5zY2FsZVkgLyBkcmFnT3ZlcmxheS5yZWN0LmhlaWdodCA6IDFcbiAgICB9O1xuICAgIGNvbnN0IGZpbmFsVHJhbnNmb3JtID0ge1xuICAgICAgeDogdHJhbnNmb3JtLnggLSBkZWx0YS54LFxuICAgICAgeTogdHJhbnNmb3JtLnkgLSBkZWx0YS55LFxuICAgICAgLi4uc2NhbGVcbiAgICB9O1xuICAgIGNvbnN0IGFuaW1hdGlvbktleWZyYW1lcyA9IGtleWZyYW1lcyh7IC4uLnJlc3QsXG4gICAgICBhY3RpdmUsXG4gICAgICBkcmFnT3ZlcmxheSxcbiAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICBpbml0aWFsOiB0cmFuc2Zvcm0sXG4gICAgICAgIGZpbmFsOiBmaW5hbFRyYW5zZm9ybVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IFtmaXJzdEtleWZyYW1lXSA9IGFuaW1hdGlvbktleWZyYW1lcztcbiAgICBjb25zdCBsYXN0S2V5ZnJhbWUgPSBhbmltYXRpb25LZXlmcmFtZXNbYW5pbWF0aW9uS2V5ZnJhbWVzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGZpcnN0S2V5ZnJhbWUpID09PSBKU09OLnN0cmluZ2lmeShsYXN0S2V5ZnJhbWUpKSB7XG4gICAgICAvLyBUaGUgc3RhcnQgYW5kIGVuZCBrZXlmcmFtZXMgYXJlIHRoZSBzYW1lLCBpbmZlciB0aGF0IHRoZXJlIGlzIG5vIGFuaW1hdGlvbiBuZWVkZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW51cCA9IHNpZGVFZmZlY3RzID09IG51bGwgPyB2b2lkIDAgOiBzaWRlRWZmZWN0cyh7XG4gICAgICBhY3RpdmUsXG4gICAgICBkcmFnT3ZlcmxheSxcbiAgICAgIC4uLnJlc3RcbiAgICB9KTtcbiAgICBjb25zdCBhbmltYXRpb24gPSBkcmFnT3ZlcmxheS5ub2RlLmFuaW1hdGUoYW5pbWF0aW9uS2V5ZnJhbWVzLCB7XG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2luZyxcbiAgICAgIGZpbGw6ICdmb3J3YXJkcydcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBhbmltYXRpb24ub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgIGNsZWFudXAgPT0gbnVsbCA/IHZvaWQgMCA6IGNsZWFudXAoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbn1cblxubGV0IGtleSA9IDA7XG5mdW5jdGlvbiB1c2VLZXkoaWQpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAga2V5Kys7XG4gICAgcmV0dXJuIGtleTtcbiAgfSwgW2lkXSk7XG59XG5cbmNvbnN0IERyYWdPdmVybGF5ID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0Lm1lbW8oX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgYWRqdXN0U2NhbGUgPSBmYWxzZSxcbiAgICBjaGlsZHJlbixcbiAgICBkcm9wQW5pbWF0aW9uOiBkcm9wQW5pbWF0aW9uQ29uZmlnLFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgbW9kaWZpZXJzLFxuICAgIHdyYXBwZXJFbGVtZW50ID0gJ2RpdicsXG4gICAgY2xhc3NOYW1lLFxuICAgIHpJbmRleCA9IDk5OVxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGFjdGl2YXRvckV2ZW50LFxuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmVOb2RlUmVjdCxcbiAgICBjb250YWluZXJOb2RlUmVjdCxcbiAgICBkcmFnZ2FibGVOb2RlcyxcbiAgICBkcm9wcGFibGVDb250YWluZXJzLFxuICAgIGRyYWdPdmVybGF5LFxuICAgIG92ZXIsXG4gICAgbWVhc3VyaW5nQ29uZmlndXJhdGlvbixcbiAgICBzY3JvbGxhYmxlQW5jZXN0b3JzLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvclJlY3RzLFxuICAgIHdpbmRvd1JlY3RcbiAgfSA9IHVzZURuZENvbnRleHQoKTtcbiAgY29uc3QgdHJhbnNmb3JtID0gUmVhY3QudXNlQ29udGV4dChBY3RpdmVEcmFnZ2FibGVDb250ZXh0KTtcbiAgY29uc3Qga2V5ID0gdXNlS2V5KGFjdGl2ZSA9PSBudWxsID8gdm9pZCAwIDogYWN0aXZlLmlkKTtcbiAgY29uc3QgbW9kaWZpZWRUcmFuc2Zvcm0gPSBhcHBseU1vZGlmaWVycyhtb2RpZmllcnMsIHtcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZlTm9kZVJlY3QsXG4gICAgY29udGFpbmVyTm9kZVJlY3QsXG4gICAgZHJhZ2dpbmdOb2RlUmVjdDogZHJhZ092ZXJsYXkucmVjdCxcbiAgICBvdmVyLFxuICAgIG92ZXJsYXlOb2RlUmVjdDogZHJhZ092ZXJsYXkucmVjdCxcbiAgICBzY3JvbGxhYmxlQW5jZXN0b3JzLFxuICAgIHNjcm9sbGFibGVBbmNlc3RvclJlY3RzLFxuICAgIHRyYW5zZm9ybSxcbiAgICB3aW5kb3dSZWN0XG4gIH0pO1xuICBjb25zdCBpbml0aWFsUmVjdCA9IHVzZUluaXRpYWxWYWx1ZShhY3RpdmVOb2RlUmVjdCk7XG4gIGNvbnN0IGRyb3BBbmltYXRpb24gPSB1c2VEcm9wQW5pbWF0aW9uKHtcbiAgICBjb25maWc6IGRyb3BBbmltYXRpb25Db25maWcsXG4gICAgZHJhZ2dhYmxlTm9kZXMsXG4gICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICBtZWFzdXJpbmdDb25maWd1cmF0aW9uXG4gIH0pOyAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBhY3RpdmUgbm9kZSB0byBiZSBtZWFzdXJlZCBiZWZvcmUgY29ubmVjdGluZyB0aGUgZHJhZyBvdmVybGF5IHJlZlxuICAvLyBvdGhlcndpc2UgY29sbGlzaW9ucyBjYW4gYmUgY29tcHV0ZWQgYWdhaW5zdCBhIG1pc3Bvc2l0aW9uZWQgZHJhZyBvdmVybGF5XG5cbiAgY29uc3QgcmVmID0gaW5pdGlhbFJlY3QgPyBkcmFnT3ZlcmxheS5zZXRSZWYgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KE51bGxpZmllZENvbnRleHRQcm92aWRlciwgbnVsbCwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChBbmltYXRpb25NYW5hZ2VyLCB7XG4gICAgYW5pbWF0aW9uOiBkcm9wQW5pbWF0aW9uXG4gIH0sIGFjdGl2ZSAmJiBrZXkgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFBvc2l0aW9uZWRPdmVybGF5LCB7XG4gICAga2V5OiBrZXksXG4gICAgaWQ6IGFjdGl2ZS5pZCxcbiAgICByZWY6IHJlZixcbiAgICBhczogd3JhcHBlckVsZW1lbnQsXG4gICAgYWN0aXZhdG9yRXZlbnQ6IGFjdGl2YXRvckV2ZW50LFxuICAgIGFkanVzdFNjYWxlOiBhZGp1c3RTY2FsZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICAgIHJlY3Q6IGluaXRpYWxSZWN0LFxuICAgIHN0eWxlOiB7XG4gICAgICB6SW5kZXgsXG4gICAgICAuLi5zdHlsZVxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiBtb2RpZmllZFRyYW5zZm9ybVxuICB9LCBjaGlsZHJlbikgOiBudWxsKSk7XG59KTtcblxuZXhwb3J0cy5EbmRDb250ZXh0ID0gRG5kQ29udGV4dDtcbmV4cG9ydHMuRHJhZ092ZXJsYXkgPSBEcmFnT3ZlcmxheTtcbmV4cG9ydHMuS2V5Ym9hcmRTZW5zb3IgPSBLZXlib2FyZFNlbnNvcjtcbmV4cG9ydHMuTW91c2VTZW5zb3IgPSBNb3VzZVNlbnNvcjtcbmV4cG9ydHMuUG9pbnRlclNlbnNvciA9IFBvaW50ZXJTZW5zb3I7XG5leHBvcnRzLlRvdWNoU2Vuc29yID0gVG91Y2hTZW5zb3I7XG5leHBvcnRzLmFwcGx5TW9kaWZpZXJzID0gYXBwbHlNb2RpZmllcnM7XG5leHBvcnRzLmNsb3Nlc3RDZW50ZXIgPSBjbG9zZXN0Q2VudGVyO1xuZXhwb3J0cy5jbG9zZXN0Q29ybmVycyA9IGNsb3Nlc3RDb3JuZXJzO1xuZXhwb3J0cy5kZWZhdWx0QW5ub3VuY2VtZW50cyA9IGRlZmF1bHRBbm5vdW5jZW1lbnRzO1xuZXhwb3J0cy5kZWZhdWx0Q29vcmRpbmF0ZXMgPSBkZWZhdWx0Q29vcmRpbmF0ZXM7XG5leHBvcnRzLmRlZmF1bHREcm9wQW5pbWF0aW9uID0gZGVmYXVsdERyb3BBbmltYXRpb25Db25maWd1cmF0aW9uO1xuZXhwb3J0cy5kZWZhdWx0RHJvcEFuaW1hdGlvblNpZGVFZmZlY3RzID0gZGVmYXVsdERyb3BBbmltYXRpb25TaWRlRWZmZWN0cztcbmV4cG9ydHMuZGVmYXVsdEtleWJvYXJkQ29vcmRpbmF0ZUdldHRlciA9IGRlZmF1bHRLZXlib2FyZENvb3JkaW5hdGVHZXR0ZXI7XG5leHBvcnRzLmRlZmF1bHRTY3JlZW5SZWFkZXJJbnN0cnVjdGlvbnMgPSBkZWZhdWx0U2NyZWVuUmVhZGVySW5zdHJ1Y3Rpb25zO1xuZXhwb3J0cy5nZXRDbGllbnRSZWN0ID0gZ2V0Q2xpZW50UmVjdDtcbmV4cG9ydHMuZ2V0Rmlyc3RDb2xsaXNpb24gPSBnZXRGaXJzdENvbGxpc2lvbjtcbmV4cG9ydHMuZ2V0U2Nyb2xsYWJsZUFuY2VzdG9ycyA9IGdldFNjcm9sbGFibGVBbmNlc3RvcnM7XG5leHBvcnRzLnBvaW50ZXJXaXRoaW4gPSBwb2ludGVyV2l0aGluO1xuZXhwb3J0cy5yZWN0SW50ZXJzZWN0aW9uID0gcmVjdEludGVyc2VjdGlvbjtcbmV4cG9ydHMudXNlRG5kQ29udGV4dCA9IHVzZURuZENvbnRleHQ7XG5leHBvcnRzLnVzZURuZE1vbml0b3IgPSB1c2VEbmRNb25pdG9yO1xuZXhwb3J0cy51c2VEcmFnZ2FibGUgPSB1c2VEcmFnZ2FibGU7XG5leHBvcnRzLnVzZURyb3BwYWJsZSA9IHVzZURyb3BwYWJsZTtcbmV4cG9ydHMudXNlU2Vuc29yID0gdXNlU2Vuc29yO1xuZXhwb3J0cy51c2VTZW5zb3JzID0gdXNlU2Vuc29ycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY2pzLmRldmVsb3BtZW50LmpzLm1hcFxuIiwiXG4ndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvcmUuY2pzLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb3JlLmNqcy5kZXZlbG9wbWVudC5qcycpXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGRuZC1raXQvY29yZScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJ0BkbmQta2l0L3V0aWxpdGllcycpO1xuXG4vKipcclxuICogTW92ZSBhbiBhcnJheSBpdGVtIHRvIGEgZGlmZmVyZW50IHBvc2l0aW9uLiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIGl0ZW0gbW92ZWQgdG8gdGhlIG5ldyBwb3NpdGlvbi5cclxuICovXG5mdW5jdGlvbiBhcnJheU1vdmUoYXJyYXksIGZyb20sIHRvKSB7XG4gIGNvbnN0IG5ld0FycmF5ID0gYXJyYXkuc2xpY2UoKTtcbiAgbmV3QXJyYXkuc3BsaWNlKHRvIDwgMCA/IG5ld0FycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIG5ld0FycmF5LnNwbGljZShmcm9tLCAxKVswXSk7XG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuLyoqXHJcbiAqIFN3YXAgYW4gYXJyYXkgaXRlbSB0byBhIGRpZmZlcmVudCBwb3NpdGlvbi4gUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSBpdGVtIHN3YXBwZWQgdG8gdGhlIG5ldyBwb3NpdGlvbi5cclxuICovXG5mdW5jdGlvbiBhcnJheVN3YXAoYXJyYXksIGZyb20sIHRvKSB7XG4gIGNvbnN0IG5ld0FycmF5ID0gYXJyYXkuc2xpY2UoKTtcbiAgbmV3QXJyYXlbZnJvbV0gPSBhcnJheVt0b107XG4gIG5ld0FycmF5W3RvXSA9IGFycmF5W2Zyb21dO1xuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldFNvcnRlZFJlY3RzKGl0ZW1zLCByZWN0cykge1xuICByZXR1cm4gaXRlbXMucmVkdWNlKChhY2N1bXVsYXRvciwgaWQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHJlY3RzLmdldChpZCk7XG5cbiAgICBpZiAocmVjdCkge1xuICAgICAgYWNjdW11bGF0b3JbaW5kZXhdID0gcmVjdDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIEFycmF5KGl0ZW1zLmxlbmd0aCkpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkSW5kZXgoaW5kZXgpIHtcbiAgcmV0dXJuIGluZGV4ICE9PSBudWxsICYmIGluZGV4ID49IDA7XG59XG5cbmZ1bmN0aW9uIGl0ZW1zRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpc2FibGVkKGRpc2FibGVkKSB7XG4gIGlmICh0eXBlb2YgZGlzYWJsZWQgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB7XG4gICAgICBkcmFnZ2FibGU6IGRpc2FibGVkLFxuICAgICAgZHJvcHBhYmxlOiBkaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZGlzYWJsZWQ7XG59XG5cbi8vIFRvLWRvOiBXZSBzaG91bGQgYmUgY2FsY3VsYXRpbmcgc2NhbGUgdHJhbnNmb3JtYXRpb25cbmNvbnN0IGRlZmF1bHRTY2FsZSA9IHtcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5jb25zdCBob3Jpem9udGFsTGlzdFNvcnRpbmdTdHJhdGVneSA9IF9yZWYgPT4ge1xuICB2YXIgX3JlY3RzJGFjdGl2ZUluZGV4O1xuXG4gIGxldCB7XG4gICAgcmVjdHMsXG4gICAgYWN0aXZlTm9kZVJlY3Q6IGZhbGxiYWNrQWN0aXZlUmVjdCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBvdmVySW5kZXgsXG4gICAgaW5kZXhcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGFjdGl2ZU5vZGVSZWN0ID0gKF9yZWN0cyRhY3RpdmVJbmRleCA9IHJlY3RzW2FjdGl2ZUluZGV4XSkgIT0gbnVsbCA/IF9yZWN0cyRhY3RpdmVJbmRleCA6IGZhbGxiYWNrQWN0aXZlUmVjdDtcblxuICBpZiAoIWFjdGl2ZU5vZGVSZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVtR2FwID0gZ2V0SXRlbUdhcChyZWN0cywgaW5kZXgsIGFjdGl2ZUluZGV4KTtcblxuICBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4KSB7XG4gICAgY29uc3QgbmV3SW5kZXhSZWN0ID0gcmVjdHNbb3ZlckluZGV4XTtcblxuICAgIGlmICghbmV3SW5kZXhSZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogYWN0aXZlSW5kZXggPCBvdmVySW5kZXggPyBuZXdJbmRleFJlY3QubGVmdCArIG5ld0luZGV4UmVjdC53aWR0aCAtIChhY3RpdmVOb2RlUmVjdC5sZWZ0ICsgYWN0aXZlTm9kZVJlY3Qud2lkdGgpIDogbmV3SW5kZXhSZWN0LmxlZnQgLSBhY3RpdmVOb2RlUmVjdC5sZWZ0LFxuICAgICAgeTogMCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZVxuICAgIH07XG4gIH1cblxuICBpZiAoaW5kZXggPiBhY3RpdmVJbmRleCAmJiBpbmRleCA8PSBvdmVySW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogLWFjdGl2ZU5vZGVSZWN0LndpZHRoIC0gaXRlbUdhcCxcbiAgICAgIHk6IDAsXG4gICAgICAuLi5kZWZhdWx0U2NhbGVcbiAgICB9O1xuICB9XG5cbiAgaWYgKGluZGV4IDwgYWN0aXZlSW5kZXggJiYgaW5kZXggPj0gb3ZlckluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGFjdGl2ZU5vZGVSZWN0LndpZHRoICsgaXRlbUdhcCxcbiAgICAgIHk6IDAsXG4gICAgICAuLi5kZWZhdWx0U2NhbGVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgLi4uZGVmYXVsdFNjYWxlXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRJdGVtR2FwKHJlY3RzLCBpbmRleCwgYWN0aXZlSW5kZXgpIHtcbiAgY29uc3QgY3VycmVudFJlY3QgPSByZWN0c1tpbmRleF07XG4gIGNvbnN0IHByZXZpb3VzUmVjdCA9IHJlY3RzW2luZGV4IC0gMV07XG4gIGNvbnN0IG5leHRSZWN0ID0gcmVjdHNbaW5kZXggKyAxXTtcblxuICBpZiAoIWN1cnJlbnRSZWN0IHx8ICFwcmV2aW91c1JlY3QgJiYgIW5leHRSZWN0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoYWN0aXZlSW5kZXggPCBpbmRleCkge1xuICAgIHJldHVybiBwcmV2aW91c1JlY3QgPyBjdXJyZW50UmVjdC5sZWZ0IC0gKHByZXZpb3VzUmVjdC5sZWZ0ICsgcHJldmlvdXNSZWN0LndpZHRoKSA6IG5leHRSZWN0LmxlZnQgLSAoY3VycmVudFJlY3QubGVmdCArIGN1cnJlbnRSZWN0LndpZHRoKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0UmVjdCA/IG5leHRSZWN0LmxlZnQgLSAoY3VycmVudFJlY3QubGVmdCArIGN1cnJlbnRSZWN0LndpZHRoKSA6IGN1cnJlbnRSZWN0LmxlZnQgLSAocHJldmlvdXNSZWN0LmxlZnQgKyBwcmV2aW91c1JlY3Qud2lkdGgpO1xufVxuXG5jb25zdCByZWN0U29ydGluZ1N0cmF0ZWd5ID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgcmVjdHMsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgb3ZlckluZGV4LFxuICAgIGluZGV4XG4gIH0gPSBfcmVmO1xuICBjb25zdCBuZXdSZWN0cyA9IGFycmF5TW92ZShyZWN0cywgb3ZlckluZGV4LCBhY3RpdmVJbmRleCk7XG4gIGNvbnN0IG9sZFJlY3QgPSByZWN0c1tpbmRleF07XG4gIGNvbnN0IG5ld1JlY3QgPSBuZXdSZWN0c1tpbmRleF07XG5cbiAgaWYgKCFuZXdSZWN0IHx8ICFvbGRSZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IG5ld1JlY3QubGVmdCAtIG9sZFJlY3QubGVmdCxcbiAgICB5OiBuZXdSZWN0LnRvcCAtIG9sZFJlY3QudG9wLFxuICAgIHNjYWxlWDogbmV3UmVjdC53aWR0aCAvIG9sZFJlY3Qud2lkdGgsXG4gICAgc2NhbGVZOiBuZXdSZWN0LmhlaWdodCAvIG9sZFJlY3QuaGVpZ2h0XG4gIH07XG59O1xuXG5jb25zdCByZWN0U3dhcHBpbmdTdHJhdGVneSA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIGluZGV4LFxuICAgIHJlY3RzLFxuICAgIG92ZXJJbmRleFxuICB9ID0gX3JlZjtcbiAgbGV0IG9sZFJlY3Q7XG4gIGxldCBuZXdSZWN0O1xuXG4gIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICBvbGRSZWN0ID0gcmVjdHNbaW5kZXhdO1xuICAgIG5ld1JlY3QgPSByZWN0c1tvdmVySW5kZXhdO1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSBvdmVySW5kZXgpIHtcbiAgICBvbGRSZWN0ID0gcmVjdHNbaW5kZXhdO1xuICAgIG5ld1JlY3QgPSByZWN0c1thY3RpdmVJbmRleF07XG4gIH1cblxuICBpZiAoIW5ld1JlY3QgfHwgIW9sZFJlY3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogbmV3UmVjdC5sZWZ0IC0gb2xkUmVjdC5sZWZ0LFxuICAgIHk6IG5ld1JlY3QudG9wIC0gb2xkUmVjdC50b3AsXG4gICAgc2NhbGVYOiBuZXdSZWN0LndpZHRoIC8gb2xkUmVjdC53aWR0aCxcbiAgICBzY2FsZVk6IG5ld1JlY3QuaGVpZ2h0IC8gb2xkUmVjdC5oZWlnaHRcbiAgfTtcbn07XG5cbi8vIFRvLWRvOiBXZSBzaG91bGQgYmUgY2FsY3VsYXRpbmcgc2NhbGUgdHJhbnNmb3JtYXRpb25cbmNvbnN0IGRlZmF1bHRTY2FsZSQxID0ge1xuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcbmNvbnN0IHZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneSA9IF9yZWYgPT4ge1xuICB2YXIgX3JlY3RzJGFjdGl2ZUluZGV4O1xuXG4gIGxldCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgYWN0aXZlTm9kZVJlY3Q6IGZhbGxiYWNrQWN0aXZlUmVjdCxcbiAgICBpbmRleCxcbiAgICByZWN0cyxcbiAgICBvdmVySW5kZXhcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGFjdGl2ZU5vZGVSZWN0ID0gKF9yZWN0cyRhY3RpdmVJbmRleCA9IHJlY3RzW2FjdGl2ZUluZGV4XSkgIT0gbnVsbCA/IF9yZWN0cyRhY3RpdmVJbmRleCA6IGZhbGxiYWNrQWN0aXZlUmVjdDtcblxuICBpZiAoIWFjdGl2ZU5vZGVSZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4KSB7XG4gICAgY29uc3Qgb3ZlckluZGV4UmVjdCA9IHJlY3RzW292ZXJJbmRleF07XG5cbiAgICBpZiAoIW92ZXJJbmRleFJlY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogYWN0aXZlSW5kZXggPCBvdmVySW5kZXggPyBvdmVySW5kZXhSZWN0LnRvcCArIG92ZXJJbmRleFJlY3QuaGVpZ2h0IC0gKGFjdGl2ZU5vZGVSZWN0LnRvcCArIGFjdGl2ZU5vZGVSZWN0LmhlaWdodCkgOiBvdmVySW5kZXhSZWN0LnRvcCAtIGFjdGl2ZU5vZGVSZWN0LnRvcCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZSQxXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1HYXAgPSBnZXRJdGVtR2FwJDEocmVjdHMsIGluZGV4LCBhY3RpdmVJbmRleCk7XG5cbiAgaWYgKGluZGV4ID4gYWN0aXZlSW5kZXggJiYgaW5kZXggPD0gb3ZlckluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAtYWN0aXZlTm9kZVJlY3QuaGVpZ2h0IC0gaXRlbUdhcCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZSQxXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IGFjdGl2ZUluZGV4ICYmIGluZGV4ID49IG92ZXJJbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogYWN0aXZlTm9kZVJlY3QuaGVpZ2h0ICsgaXRlbUdhcCxcbiAgICAgIC4uLmRlZmF1bHRTY2FsZSQxXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIC4uLmRlZmF1bHRTY2FsZSQxXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRJdGVtR2FwJDEoY2xpZW50UmVjdHMsIGluZGV4LCBhY3RpdmVJbmRleCkge1xuICBjb25zdCBjdXJyZW50UmVjdCA9IGNsaWVudFJlY3RzW2luZGV4XTtcbiAgY29uc3QgcHJldmlvdXNSZWN0ID0gY2xpZW50UmVjdHNbaW5kZXggLSAxXTtcbiAgY29uc3QgbmV4dFJlY3QgPSBjbGllbnRSZWN0c1tpbmRleCArIDFdO1xuXG4gIGlmICghY3VycmVudFJlY3QpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChhY3RpdmVJbmRleCA8IGluZGV4KSB7XG4gICAgcmV0dXJuIHByZXZpb3VzUmVjdCA/IGN1cnJlbnRSZWN0LnRvcCAtIChwcmV2aW91c1JlY3QudG9wICsgcHJldmlvdXNSZWN0LmhlaWdodCkgOiBuZXh0UmVjdCA/IG5leHRSZWN0LnRvcCAtIChjdXJyZW50UmVjdC50b3AgKyBjdXJyZW50UmVjdC5oZWlnaHQpIDogMDtcbiAgfVxuXG4gIHJldHVybiBuZXh0UmVjdCA/IG5leHRSZWN0LnRvcCAtIChjdXJyZW50UmVjdC50b3AgKyBjdXJyZW50UmVjdC5oZWlnaHQpIDogcHJldmlvdXNSZWN0ID8gY3VycmVudFJlY3QudG9wIC0gKHByZXZpb3VzUmVjdC50b3AgKyBwcmV2aW91c1JlY3QuaGVpZ2h0KSA6IDA7XG59XG5cbmNvbnN0IElEX1BSRUZJWCA9ICdTb3J0YWJsZSc7XG5jb25zdCBDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xuICBhY3RpdmVJbmRleDogLTEsXG4gIGNvbnRhaW5lcklkOiBJRF9QUkVGSVgsXG4gIGRpc2FibGVUcmFuc2Zvcm1zOiBmYWxzZSxcbiAgaXRlbXM6IFtdLFxuICBvdmVySW5kZXg6IC0xLFxuICB1c2VEcmFnT3ZlcmxheTogZmFsc2UsXG4gIHNvcnRlZFJlY3RzOiBbXSxcbiAgc3RyYXRlZ3k6IHJlY3RTb3J0aW5nU3RyYXRlZ3ksXG4gIGRpc2FibGVkOiB7XG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBkcm9wcGFibGU6IGZhbHNlXG4gIH1cbn0pO1xuZnVuY3Rpb24gU29ydGFibGVDb250ZXh0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBpZCxcbiAgICBpdGVtczogdXNlckRlZmluZWRJdGVtcyxcbiAgICBzdHJhdGVneSA9IHJlY3RTb3J0aW5nU3RyYXRlZ3ksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGRyYWdPdmVybGF5LFxuICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgIG92ZXIsXG4gICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnNcbiAgfSA9IGNvcmUudXNlRG5kQ29udGV4dCgpO1xuICBjb25zdCBjb250YWluZXJJZCA9IHV0aWxpdGllcy51c2VVbmlxdWVJZChJRF9QUkVGSVgsIGlkKTtcbiAgY29uc3QgdXNlRHJhZ092ZXJsYXkgPSBCb29sZWFuKGRyYWdPdmVybGF5LnJlY3QgIT09IG51bGwpO1xuICBjb25zdCBpdGVtcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gdXNlckRlZmluZWRJdGVtcy5tYXAoaXRlbSA9PiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgJ2lkJyBpbiBpdGVtID8gaXRlbS5pZCA6IGl0ZW0pLCBbdXNlckRlZmluZWRJdGVtc10pO1xuICBjb25zdCBpc0RyYWdnaW5nID0gYWN0aXZlICE9IG51bGw7XG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gYWN0aXZlID8gaXRlbXMuaW5kZXhPZihhY3RpdmUuaWQpIDogLTE7XG4gIGNvbnN0IG92ZXJJbmRleCA9IG92ZXIgPyBpdGVtcy5pbmRleE9mKG92ZXIuaWQpIDogLTE7XG4gIGNvbnN0IHByZXZpb3VzSXRlbXNSZWYgPSBSZWFjdC51c2VSZWYoaXRlbXMpO1xuICBjb25zdCBpdGVtc0hhdmVDaGFuZ2VkID0gIWl0ZW1zRXF1YWwoaXRlbXMsIHByZXZpb3VzSXRlbXNSZWYuY3VycmVudCk7XG4gIGNvbnN0IGRpc2FibGVUcmFuc2Zvcm1zID0gb3ZlckluZGV4ICE9PSAtMSAmJiBhY3RpdmVJbmRleCA9PT0gLTEgfHwgaXRlbXNIYXZlQ2hhbmdlZDtcbiAgY29uc3QgZGlzYWJsZWQgPSBub3JtYWxpemVEaXNhYmxlZChkaXNhYmxlZFByb3ApO1xuICB1dGlsaXRpZXMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGl0ZW1zSGF2ZUNoYW5nZWQgJiYgaXNEcmFnZ2luZykge1xuICAgICAgbWVhc3VyZURyb3BwYWJsZUNvbnRhaW5lcnMoaXRlbXMpO1xuICAgIH1cbiAgfSwgW2l0ZW1zSGF2ZUNoYW5nZWQsIGl0ZW1zLCBpc0RyYWdnaW5nLCBtZWFzdXJlRHJvcHBhYmxlQ29udGFpbmVyc10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByZXZpb3VzSXRlbXNSZWYuY3VycmVudCA9IGl0ZW1zO1xuICB9LCBbaXRlbXNdKTtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIGNvbnRhaW5lcklkLFxuICAgIGRpc2FibGVkLFxuICAgIGRpc2FibGVUcmFuc2Zvcm1zLFxuICAgIGl0ZW1zLFxuICAgIG92ZXJJbmRleCxcbiAgICB1c2VEcmFnT3ZlcmxheSxcbiAgICBzb3J0ZWRSZWN0czogZ2V0U29ydGVkUmVjdHMoaXRlbXMsIGRyb3BwYWJsZVJlY3RzKSxcbiAgICBzdHJhdGVneVxuICB9KSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBbYWN0aXZlSW5kZXgsIGNvbnRhaW5lcklkLCBkaXNhYmxlZC5kcmFnZ2FibGUsIGRpc2FibGVkLmRyb3BwYWJsZSwgZGlzYWJsZVRyYW5zZm9ybXMsIGl0ZW1zLCBvdmVySW5kZXgsIGRyb3BwYWJsZVJlY3RzLCB1c2VEcmFnT3ZlcmxheSwgc3RyYXRlZ3ldKTtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5jb25zdCBkZWZhdWx0TmV3SW5kZXhHZXR0ZXIgPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBpZCxcbiAgICBpdGVtcyxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBvdmVySW5kZXhcbiAgfSA9IF9yZWY7XG4gIHJldHVybiBhcnJheU1vdmUoaXRlbXMsIGFjdGl2ZUluZGV4LCBvdmVySW5kZXgpLmluZGV4T2YoaWQpO1xufTtcbmNvbnN0IGRlZmF1bHRBbmltYXRlTGF5b3V0Q2hhbmdlcyA9IF9yZWYyID0+IHtcbiAgbGV0IHtcbiAgICBjb250YWluZXJJZCxcbiAgICBpc1NvcnRpbmcsXG4gICAgd2FzRHJhZ2dpbmcsXG4gICAgaW5kZXgsXG4gICAgaXRlbXMsXG4gICAgbmV3SW5kZXgsXG4gICAgcHJldmlvdXNJdGVtcyxcbiAgICBwcmV2aW91c0NvbnRhaW5lcklkLFxuICAgIHRyYW5zaXRpb25cbiAgfSA9IF9yZWYyO1xuXG4gIGlmICghdHJhbnNpdGlvbiB8fCAhd2FzRHJhZ2dpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJldmlvdXNJdGVtcyAhPT0gaXRlbXMgJiYgaW5kZXggPT09IG5ld0luZGV4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzU29ydGluZykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG5ld0luZGV4ICE9PSBpbmRleCAmJiBjb250YWluZXJJZCA9PT0gcHJldmlvdXNDb250YWluZXJJZDtcbn07XG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbiA9IHtcbiAgZHVyYXRpb246IDIwMCxcbiAgZWFzaW5nOiAnZWFzZSdcbn07XG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbmNvbnN0IGRpc2FibGVkVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi91dGlsaXRpZXMuQ1NTLlRyYW5zaXRpb24udG9TdHJpbmcoe1xuICBwcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5LFxuICBkdXJhdGlvbjogMCxcbiAgZWFzaW5nOiAnbGluZWFyJ1xufSk7XG5jb25zdCBkZWZhdWx0QXR0cmlidXRlcyA9IHtcbiAgcm9sZURlc2NyaXB0aW9uOiAnc29ydGFibGUnXG59O1xuXG4vKlxyXG4gKiBXaGVuIHRoZSBpbmRleCBvZiBhbiBpdGVtIGNoYW5nZXMgd2hpbGUgc29ydGluZyxcclxuICogd2UgbmVlZCB0byB0ZW1wb3JhcmlseSBkaXNhYmxlIHRoZSB0cmFuc2Zvcm1zXHJcbiAqL1xuXG5mdW5jdGlvbiB1c2VEZXJpdmVkVHJhbnNmb3JtKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBkaXNhYmxlZCxcbiAgICBpbmRleCxcbiAgICBub2RlLFxuICAgIHJlY3RcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IFtkZXJpdmVkVHJhbnNmb3JtLCBzZXREZXJpdmVkdHJhbnNmb3JtXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBwcmV2aW91c0luZGV4ID0gUmVhY3QudXNlUmVmKGluZGV4KTtcbiAgdXRpbGl0aWVzLnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlzYWJsZWQgJiYgaW5kZXggIT09IHByZXZpb3VzSW5kZXguY3VycmVudCAmJiBub2RlLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluaXRpYWwgPSByZWN0LmN1cnJlbnQ7XG5cbiAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjb3JlLmdldENsaWVudFJlY3Qobm9kZS5jdXJyZW50LCB7XG4gICAgICAgICAgaWdub3JlVHJhbnNmb3JtOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgICB4OiBpbml0aWFsLmxlZnQgLSBjdXJyZW50LmxlZnQsXG4gICAgICAgICAgeTogaW5pdGlhbC50b3AgLSBjdXJyZW50LnRvcCxcbiAgICAgICAgICBzY2FsZVg6IGluaXRpYWwud2lkdGggLyBjdXJyZW50LndpZHRoLFxuICAgICAgICAgIHNjYWxlWTogaW5pdGlhbC5oZWlnaHQgLyBjdXJyZW50LmhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkZWx0YS54IHx8IGRlbHRhLnkpIHtcbiAgICAgICAgICBzZXREZXJpdmVkdHJhbnNmb3JtKGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gcHJldmlvdXNJbmRleC5jdXJyZW50KSB7XG4gICAgICBwcmV2aW91c0luZGV4LmN1cnJlbnQgPSBpbmRleDtcbiAgICB9XG4gIH0sIFtkaXNhYmxlZCwgaW5kZXgsIG5vZGUsIHJlY3RdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVyaXZlZFRyYW5zZm9ybSkge1xuICAgICAgc2V0RGVyaXZlZHRyYW5zZm9ybShudWxsKTtcbiAgICB9XG4gIH0sIFtkZXJpdmVkVHJhbnNmb3JtXSk7XG4gIHJldHVybiBkZXJpdmVkVHJhbnNmb3JtO1xufVxuXG5mdW5jdGlvbiB1c2VTb3J0YWJsZShfcmVmKSB7XG4gIGxldCB7XG4gICAgYW5pbWF0ZUxheW91dENoYW5nZXMgPSBkZWZhdWx0QW5pbWF0ZUxheW91dENoYW5nZXMsXG4gICAgYXR0cmlidXRlczogdXNlckRlZmluZWRBdHRyaWJ1dGVzLFxuICAgIGRpc2FibGVkOiBsb2NhbERpc2FibGVkLFxuICAgIGRhdGE6IGN1c3RvbURhdGEsXG4gICAgZ2V0TmV3SW5kZXggPSBkZWZhdWx0TmV3SW5kZXhHZXR0ZXIsXG4gICAgaWQsXG4gICAgc3RyYXRlZ3k6IGxvY2FsU3RyYXRlZ3ksXG4gICAgcmVzaXplT2JzZXJ2ZXJDb25maWcsXG4gICAgdHJhbnNpdGlvbiA9IGRlZmF1bHRUcmFuc2l0aW9uXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgY29udGFpbmVySWQsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgZGlzYWJsZWQ6IGdsb2JhbERpc2FibGVkLFxuICAgIGRpc2FibGVUcmFuc2Zvcm1zLFxuICAgIHNvcnRlZFJlY3RzLFxuICAgIG92ZXJJbmRleCxcbiAgICB1c2VEcmFnT3ZlcmxheSxcbiAgICBzdHJhdGVneTogZ2xvYmFsU3RyYXRlZ3lcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGRpc2FibGVkID0gbm9ybWFsaXplTG9jYWxEaXNhYmxlZChsb2NhbERpc2FibGVkLCBnbG9iYWxEaXNhYmxlZCk7XG4gIGNvbnN0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihpZCk7XG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgc29ydGFibGU6IHtcbiAgICAgIGNvbnRhaW5lcklkLFxuICAgICAgaW5kZXgsXG4gICAgICBpdGVtc1xuICAgIH0sXG4gICAgLi4uY3VzdG9tRGF0YVxuICB9KSwgW2NvbnRhaW5lcklkLCBjdXN0b21EYXRhLCBpbmRleCwgaXRlbXNdKTtcbiAgY29uc3QgaXRlbXNBZnRlckN1cnJlbnRTb3J0YWJsZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gaXRlbXMuc2xpY2UoaXRlbXMuaW5kZXhPZihpZCkpLCBbaXRlbXMsIGlkXSk7XG4gIGNvbnN0IHtcbiAgICByZWN0LFxuICAgIG5vZGUsXG4gICAgaXNPdmVyLFxuICAgIHNldE5vZGVSZWY6IHNldERyb3BwYWJsZU5vZGVSZWZcbiAgfSA9IGNvcmUudXNlRHJvcHBhYmxlKHtcbiAgICBpZCxcbiAgICBkYXRhLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZC5kcm9wcGFibGUsXG4gICAgcmVzaXplT2JzZXJ2ZXJDb25maWc6IHtcbiAgICAgIHVwZGF0ZU1lYXN1cmVtZW50c0ZvcjogaXRlbXNBZnRlckN1cnJlbnRTb3J0YWJsZSxcbiAgICAgIC4uLnJlc2l6ZU9ic2VydmVyQ29uZmlnXG4gICAgfVxuICB9KTtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmF0b3JFdmVudCxcbiAgICBhY3RpdmVOb2RlUmVjdCxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIHNldE5vZGVSZWY6IHNldERyYWdnYWJsZU5vZGVSZWYsXG4gICAgbGlzdGVuZXJzLFxuICAgIGlzRHJhZ2dpbmcsXG4gICAgb3ZlcixcbiAgICBzZXRBY3RpdmF0b3JOb2RlUmVmLFxuICAgIHRyYW5zZm9ybVxuICB9ID0gY29yZS51c2VEcmFnZ2FibGUoe1xuICAgIGlkLFxuICAgIGRhdGEsXG4gICAgYXR0cmlidXRlczogeyAuLi5kZWZhdWx0QXR0cmlidXRlcyxcbiAgICAgIC4uLnVzZXJEZWZpbmVkQXR0cmlidXRlc1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLmRyYWdnYWJsZVxuICB9KTtcbiAgY29uc3Qgc2V0Tm9kZVJlZiA9IHV0aWxpdGllcy51c2VDb21iaW5lZFJlZnMoc2V0RHJvcHBhYmxlTm9kZVJlZiwgc2V0RHJhZ2dhYmxlTm9kZVJlZik7XG4gIGNvbnN0IGlzU29ydGluZyA9IEJvb2xlYW4oYWN0aXZlKTtcbiAgY29uc3QgZGlzcGxhY2VJdGVtID0gaXNTb3J0aW5nICYmICFkaXNhYmxlVHJhbnNmb3JtcyAmJiBpc1ZhbGlkSW5kZXgoYWN0aXZlSW5kZXgpICYmIGlzVmFsaWRJbmRleChvdmVySW5kZXgpO1xuICBjb25zdCBzaG91bGREaXNwbGFjZURyYWdTb3VyY2UgPSAhdXNlRHJhZ092ZXJsYXkgJiYgaXNEcmFnZ2luZztcbiAgY29uc3QgZHJhZ1NvdXJjZURpc3BsYWNlbWVudCA9IHNob3VsZERpc3BsYWNlRHJhZ1NvdXJjZSAmJiBkaXNwbGFjZUl0ZW0gPyB0cmFuc2Zvcm0gOiBudWxsO1xuICBjb25zdCBzdHJhdGVneSA9IGxvY2FsU3RyYXRlZ3kgIT0gbnVsbCA/IGxvY2FsU3RyYXRlZ3kgOiBnbG9iYWxTdHJhdGVneTtcbiAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSBkaXNwbGFjZUl0ZW0gPyBkcmFnU291cmNlRGlzcGxhY2VtZW50ICE9IG51bGwgPyBkcmFnU291cmNlRGlzcGxhY2VtZW50IDogc3RyYXRlZ3koe1xuICAgIHJlY3RzOiBzb3J0ZWRSZWN0cyxcbiAgICBhY3RpdmVOb2RlUmVjdCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBvdmVySW5kZXgsXG4gICAgaW5kZXhcbiAgfSkgOiBudWxsO1xuICBjb25zdCBuZXdJbmRleCA9IGlzVmFsaWRJbmRleChhY3RpdmVJbmRleCkgJiYgaXNWYWxpZEluZGV4KG92ZXJJbmRleCkgPyBnZXROZXdJbmRleCh7XG4gICAgaWQsXG4gICAgaXRlbXMsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgb3ZlckluZGV4XG4gIH0pIDogaW5kZXg7XG4gIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlID09IG51bGwgPyB2b2lkIDAgOiBhY3RpdmUuaWQ7XG4gIGNvbnN0IHByZXZpb3VzID0gUmVhY3QudXNlUmVmKHtcbiAgICBhY3RpdmVJZCxcbiAgICBpdGVtcyxcbiAgICBuZXdJbmRleCxcbiAgICBjb250YWluZXJJZFxuICB9KTtcbiAgY29uc3QgaXRlbXNIYXZlQ2hhbmdlZCA9IGl0ZW1zICE9PSBwcmV2aW91cy5jdXJyZW50Lml0ZW1zO1xuICBjb25zdCBzaG91bGRBbmltYXRlTGF5b3V0Q2hhbmdlcyA9IGFuaW1hdGVMYXlvdXRDaGFuZ2VzKHtcbiAgICBhY3RpdmUsXG4gICAgY29udGFpbmVySWQsXG4gICAgaXNEcmFnZ2luZyxcbiAgICBpc1NvcnRpbmcsXG4gICAgaWQsXG4gICAgaW5kZXgsXG4gICAgaXRlbXMsXG4gICAgbmV3SW5kZXg6IHByZXZpb3VzLmN1cnJlbnQubmV3SW5kZXgsXG4gICAgcHJldmlvdXNJdGVtczogcHJldmlvdXMuY3VycmVudC5pdGVtcyxcbiAgICBwcmV2aW91c0NvbnRhaW5lcklkOiBwcmV2aW91cy5jdXJyZW50LmNvbnRhaW5lcklkLFxuICAgIHRyYW5zaXRpb24sXG4gICAgd2FzRHJhZ2dpbmc6IHByZXZpb3VzLmN1cnJlbnQuYWN0aXZlSWQgIT0gbnVsbFxuICB9KTtcbiAgY29uc3QgZGVyaXZlZFRyYW5zZm9ybSA9IHVzZURlcml2ZWRUcmFuc2Zvcm0oe1xuICAgIGRpc2FibGVkOiAhc2hvdWxkQW5pbWF0ZUxheW91dENoYW5nZXMsXG4gICAgaW5kZXgsXG4gICAgbm9kZSxcbiAgICByZWN0XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1NvcnRpbmcgJiYgcHJldmlvdXMuY3VycmVudC5uZXdJbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVySWQgIT09IHByZXZpb3VzLmN1cnJlbnQuY29udGFpbmVySWQpIHtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQuY29udGFpbmVySWQgPSBjb250YWluZXJJZDtcbiAgICB9XG5cbiAgICBpZiAoaXRlbXMgIT09IHByZXZpb3VzLmN1cnJlbnQuaXRlbXMpIHtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQuaXRlbXMgPSBpdGVtcztcbiAgICB9XG4gIH0sIFtpc1NvcnRpbmcsIG5ld0luZGV4LCBjb250YWluZXJJZCwgaXRlbXNdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlSWQgPT09IHByZXZpb3VzLmN1cnJlbnQuYWN0aXZlSWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSWQgIT0gbnVsbCAmJiBwcmV2aW91cy5jdXJyZW50LmFjdGl2ZUlkID09IG51bGwpIHtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQuYWN0aXZlSWQgPSBhY3RpdmVJZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHByZXZpb3VzLmN1cnJlbnQuYWN0aXZlSWQgPSBhY3RpdmVJZDtcbiAgICB9LCA1MCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbYWN0aXZlSWRdKTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgYXR0cmlidXRlcyxcbiAgICBkYXRhLFxuICAgIHJlY3QsXG4gICAgaW5kZXgsXG4gICAgbmV3SW5kZXgsXG4gICAgaXRlbXMsXG4gICAgaXNPdmVyLFxuICAgIGlzU29ydGluZyxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGxpc3RlbmVycyxcbiAgICBub2RlLFxuICAgIG92ZXJJbmRleCxcbiAgICBvdmVyLFxuICAgIHNldE5vZGVSZWYsXG4gICAgc2V0QWN0aXZhdG9yTm9kZVJlZixcbiAgICBzZXREcm9wcGFibGVOb2RlUmVmLFxuICAgIHNldERyYWdnYWJsZU5vZGVSZWYsXG4gICAgdHJhbnNmb3JtOiBkZXJpdmVkVHJhbnNmb3JtICE9IG51bGwgPyBkZXJpdmVkVHJhbnNmb3JtIDogZmluYWxUcmFuc2Zvcm0sXG4gICAgdHJhbnNpdGlvbjogZ2V0VHJhbnNpdGlvbigpXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbigpIHtcbiAgICBpZiAoIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgdHJhbnNpdGlvbnMgZm9yIGEgc2luZ2xlIGZyYW1lIHRvIHNldCB1cCBkZXJpdmVkIHRyYW5zZm9ybXNcbiAgICBkZXJpdmVkVHJhbnNmb3JtIHx8IC8vIE9yIHRvIHByZXZlbnQgaXRlbXMganVtcGluZyB0byBiYWNrIHRvIHRoZWlyIFwibmV3XCIgcG9zaXRpb24gd2hlbiBpdGVtcyBjaGFuZ2VcbiAgICBpdGVtc0hhdmVDaGFuZ2VkICYmIHByZXZpb3VzLmN1cnJlbnQubmV3SW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gZGlzYWJsZWRUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlmIChzaG91bGREaXNwbGFjZURyYWdTb3VyY2UgJiYgIXV0aWxpdGllcy5pc0tleWJvYXJkRXZlbnQoYWN0aXZhdG9yRXZlbnQpIHx8ICF0cmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChpc1NvcnRpbmcgfHwgc2hvdWxkQW5pbWF0ZUxheW91dENoYW5nZXMpIHtcbiAgICAgIHJldHVybiB1dGlsaXRpZXMuQ1NTLlRyYW5zaXRpb24udG9TdHJpbmcoeyAuLi50cmFuc2l0aW9uLFxuICAgICAgICBwcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsRGlzYWJsZWQobG9jYWxEaXNhYmxlZCwgZ2xvYmFsRGlzYWJsZWQpIHtcbiAgdmFyIF9sb2NhbERpc2FibGVkJGRyYWdnYSwgX2xvY2FsRGlzYWJsZWQkZHJvcHBhO1xuXG4gIGlmICh0eXBlb2YgbG9jYWxEaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyYWdnYWJsZTogbG9jYWxEaXNhYmxlZCxcbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICBkcm9wcGFibGU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZHJhZ2dhYmxlOiAoX2xvY2FsRGlzYWJsZWQkZHJhZ2dhID0gbG9jYWxEaXNhYmxlZCA9PSBudWxsID8gdm9pZCAwIDogbG9jYWxEaXNhYmxlZC5kcmFnZ2FibGUpICE9IG51bGwgPyBfbG9jYWxEaXNhYmxlZCRkcmFnZ2EgOiBnbG9iYWxEaXNhYmxlZC5kcmFnZ2FibGUsXG4gICAgZHJvcHBhYmxlOiAoX2xvY2FsRGlzYWJsZWQkZHJvcHBhID0gbG9jYWxEaXNhYmxlZCA9PSBudWxsID8gdm9pZCAwIDogbG9jYWxEaXNhYmxlZC5kcm9wcGFibGUpICE9IG51bGwgPyBfbG9jYWxEaXNhYmxlZCRkcm9wcGEgOiBnbG9iYWxEaXNhYmxlZC5kcm9wcGFibGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzU29ydGFibGVEYXRhKGVudHJ5KSB7XG4gIGlmICghZW50cnkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkYXRhID0gZW50cnkuZGF0YS5jdXJyZW50O1xuXG4gIGlmIChkYXRhICYmICdzb3J0YWJsZScgaW4gZGF0YSAmJiB0eXBlb2YgZGF0YS5zb3J0YWJsZSA9PT0gJ29iamVjdCcgJiYgJ2NvbnRhaW5lcklkJyBpbiBkYXRhLnNvcnRhYmxlICYmICdpdGVtcycgaW4gZGF0YS5zb3J0YWJsZSAmJiAnaW5kZXgnIGluIGRhdGEuc29ydGFibGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgZGlyZWN0aW9ucyA9IFtjb3JlLktleWJvYXJkQ29kZS5Eb3duLCBjb3JlLktleWJvYXJkQ29kZS5SaWdodCwgY29yZS5LZXlib2FyZENvZGUuVXAsIGNvcmUuS2V5Ym9hcmRDb2RlLkxlZnRdO1xuY29uc3Qgc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzID0gKGV2ZW50LCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgY29udGV4dDoge1xuICAgICAgYWN0aXZlLFxuICAgICAgY29sbGlzaW9uUmVjdCxcbiAgICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVycyxcbiAgICAgIG92ZXIsXG4gICAgICBzY3JvbGxhYmxlQW5jZXN0b3JzXG4gICAgfVxuICB9ID0gX3JlZjtcblxuICBpZiAoZGlyZWN0aW9ucy5pbmNsdWRlcyhldmVudC5jb2RlKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhY29sbGlzaW9uUmVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkQ29udGFpbmVycyA9IFtdO1xuICAgIGRyb3BwYWJsZUNvbnRhaW5lcnMuZ2V0RW5hYmxlZCgpLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKCFlbnRyeSB8fCBlbnRyeSAhPSBudWxsICYmIGVudHJ5LmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVjdCA9IGRyb3BwYWJsZVJlY3RzLmdldChlbnRyeS5pZCk7XG5cbiAgICAgIGlmICghcmVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlIGNvcmUuS2V5Ym9hcmRDb2RlLkRvd246XG4gICAgICAgICAgaWYgKGNvbGxpc2lvblJlY3QudG9wIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVycy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGNvcmUuS2V5Ym9hcmRDb2RlLlVwOlxuICAgICAgICAgIGlmIChjb2xsaXNpb25SZWN0LnRvcCA+IHJlY3QudG9wKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENvbnRhaW5lcnMucHVzaChlbnRyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBjb3JlLktleWJvYXJkQ29kZS5MZWZ0OlxuICAgICAgICAgIGlmIChjb2xsaXNpb25SZWN0LmxlZnQgPiByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVycy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGNvcmUuS2V5Ym9hcmRDb2RlLlJpZ2h0OlxuICAgICAgICAgIGlmIChjb2xsaXNpb25SZWN0LmxlZnQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVycy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjb2xsaXNpb25zID0gY29yZS5jbG9zZXN0Q29ybmVycyh7XG4gICAgICBhY3RpdmUsXG4gICAgICBjb2xsaXNpb25SZWN0OiBjb2xsaXNpb25SZWN0LFxuICAgICAgZHJvcHBhYmxlUmVjdHMsXG4gICAgICBkcm9wcGFibGVDb250YWluZXJzOiBmaWx0ZXJlZENvbnRhaW5lcnMsXG4gICAgICBwb2ludGVyQ29vcmRpbmF0ZXM6IG51bGxcbiAgICB9KTtcbiAgICBsZXQgY2xvc2VzdElkID0gY29yZS5nZXRGaXJzdENvbGxpc2lvbihjb2xsaXNpb25zLCAnaWQnKTtcblxuICAgIGlmIChjbG9zZXN0SWQgPT09IChvdmVyID09IG51bGwgPyB2b2lkIDAgOiBvdmVyLmlkKSAmJiBjb2xsaXNpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNsb3Nlc3RJZCA9IGNvbGxpc2lvbnNbMV0uaWQ7XG4gICAgfVxuXG4gICAgaWYgKGNsb3Nlc3RJZCAhPSBudWxsKSB7XG4gICAgICBjb25zdCBhY3RpdmVEcm9wcGFibGUgPSBkcm9wcGFibGVDb250YWluZXJzLmdldChhY3RpdmUuaWQpO1xuICAgICAgY29uc3QgbmV3RHJvcHBhYmxlID0gZHJvcHBhYmxlQ29udGFpbmVycy5nZXQoY2xvc2VzdElkKTtcbiAgICAgIGNvbnN0IG5ld1JlY3QgPSBuZXdEcm9wcGFibGUgPyBkcm9wcGFibGVSZWN0cy5nZXQobmV3RHJvcHBhYmxlLmlkKSA6IG51bGw7XG4gICAgICBjb25zdCBuZXdOb2RlID0gbmV3RHJvcHBhYmxlID09IG51bGwgPyB2b2lkIDAgOiBuZXdEcm9wcGFibGUubm9kZS5jdXJyZW50O1xuXG4gICAgICBpZiAobmV3Tm9kZSAmJiBuZXdSZWN0ICYmIGFjdGl2ZURyb3BwYWJsZSAmJiBuZXdEcm9wcGFibGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2Nyb2xsQW5jZXN0b3JzID0gY29yZS5nZXRTY3JvbGxhYmxlQW5jZXN0b3JzKG5ld05vZGUpO1xuICAgICAgICBjb25zdCBoYXNEaWZmZXJlbnRTY3JvbGxBbmNlc3RvcnMgPSBuZXdTY3JvbGxBbmNlc3RvcnMuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHNjcm9sbGFibGVBbmNlc3RvcnNbaW5kZXhdICE9PSBlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaGFzU2FtZUNvbnRhaW5lciA9IGlzU2FtZUNvbnRhaW5lcihhY3RpdmVEcm9wcGFibGUsIG5ld0Ryb3BwYWJsZSk7XG4gICAgICAgIGNvbnN0IGlzQWZ0ZXJBY3RpdmUgPSBpc0FmdGVyKGFjdGl2ZURyb3BwYWJsZSwgbmV3RHJvcHBhYmxlKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaGFzRGlmZmVyZW50U2Nyb2xsQW5jZXN0b3JzIHx8ICFoYXNTYW1lQ29udGFpbmVyID8ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9IDoge1xuICAgICAgICAgIHg6IGlzQWZ0ZXJBY3RpdmUgPyBjb2xsaXNpb25SZWN0LndpZHRoIC0gbmV3UmVjdC53aWR0aCA6IDAsXG4gICAgICAgICAgeTogaXNBZnRlckFjdGl2ZSA/IGNvbGxpc2lvblJlY3QuaGVpZ2h0IC0gbmV3UmVjdC5oZWlnaHQgOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlY3RDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICB4OiBuZXdSZWN0LmxlZnQsXG4gICAgICAgICAgeTogbmV3UmVjdC50b3BcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbmV3Q29vcmRpbmF0ZXMgPSBvZmZzZXQueCAmJiBvZmZzZXQueSA/IHJlY3RDb29yZGluYXRlcyA6IHV0aWxpdGllcy5zdWJ0cmFjdChyZWN0Q29vcmRpbmF0ZXMsIG9mZnNldCk7XG4gICAgICAgIHJldHVybiBuZXdDb29yZGluYXRlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZnVuY3Rpb24gaXNTYW1lQ29udGFpbmVyKGEsIGIpIHtcbiAgaWYgKCFoYXNTb3J0YWJsZURhdGEoYSkgfHwgIWhhc1NvcnRhYmxlRGF0YShiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhLmRhdGEuY3VycmVudC5zb3J0YWJsZS5jb250YWluZXJJZCA9PT0gYi5kYXRhLmN1cnJlbnQuc29ydGFibGUuY29udGFpbmVySWQ7XG59XG5cbmZ1bmN0aW9uIGlzQWZ0ZXIoYSwgYikge1xuICBpZiAoIWhhc1NvcnRhYmxlRGF0YShhKSB8fCAhaGFzU29ydGFibGVEYXRhKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpc1NhbWVDb250YWluZXIoYSwgYikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gYS5kYXRhLmN1cnJlbnQuc29ydGFibGUuaW5kZXggPCBiLmRhdGEuY3VycmVudC5zb3J0YWJsZS5pbmRleDtcbn1cblxuZXhwb3J0cy5Tb3J0YWJsZUNvbnRleHQgPSBTb3J0YWJsZUNvbnRleHQ7XG5leHBvcnRzLmFycmF5TW92ZSA9IGFycmF5TW92ZTtcbmV4cG9ydHMuYXJyYXlTd2FwID0gYXJyYXlTd2FwO1xuZXhwb3J0cy5kZWZhdWx0QW5pbWF0ZUxheW91dENoYW5nZXMgPSBkZWZhdWx0QW5pbWF0ZUxheW91dENoYW5nZXM7XG5leHBvcnRzLmRlZmF1bHROZXdJbmRleEdldHRlciA9IGRlZmF1bHROZXdJbmRleEdldHRlcjtcbmV4cG9ydHMuaGFzU29ydGFibGVEYXRhID0gaGFzU29ydGFibGVEYXRhO1xuZXhwb3J0cy5ob3Jpem9udGFsTGlzdFNvcnRpbmdTdHJhdGVneSA9IGhvcml6b250YWxMaXN0U29ydGluZ1N0cmF0ZWd5O1xuZXhwb3J0cy5yZWN0U29ydGluZ1N0cmF0ZWd5ID0gcmVjdFNvcnRpbmdTdHJhdGVneTtcbmV4cG9ydHMucmVjdFN3YXBwaW5nU3RyYXRlZ3kgPSByZWN0U3dhcHBpbmdTdHJhdGVneTtcbmV4cG9ydHMuc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzID0gc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzO1xuZXhwb3J0cy51c2VTb3J0YWJsZSA9IHVzZVNvcnRhYmxlO1xuZXhwb3J0cy52ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3kgPSB2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3k7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb3J0YWJsZS5janMuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29ydGFibGUuY2pzLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zb3J0YWJsZS5janMuZGV2ZWxvcG1lbnQuanMnKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcbmltcG9ydCB7IFxyXG4gIERuZENvbnRleHQsIFxyXG4gIGNsb3Nlc3RDZW50ZXIsIFxyXG4gIEtleWJvYXJkU2Vuc29yLCBcclxuICBQb2ludGVyU2Vuc29yLCBcclxuICB1c2VTZW5zb3IsIFxyXG4gIHVzZVNlbnNvcnMsXHJcbiAgRHJhZ0VuZEV2ZW50XHJcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgYXJyYXlNb3ZlLFxyXG4gIFNvcnRhYmxlQ29udGV4dCxcclxuICBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXHJcbiAgdmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5LFxyXG59IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcclxuaW1wb3J0IHtcclxuICB1c2VTb3J0YWJsZSxcclxufSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XHJcbmltcG9ydCB7IENTUyB9IGZyb20gJ0BkbmQta2l0L3V0aWxpdGllcyc7XHJcblxyXG4vLyBUaXBvcyBkZSBibG9jb3MgZGlzcG9uw612ZWlzXHJcbnR5cGUgQmxvY2tUeXBlID0gXHJcbiAgfCAncGFyYWdyYXBoJyBcclxuICB8ICdoZWFkaW5nMScgXHJcbiAgfCAnaGVhZGluZzInIFxyXG4gIHwgJ2hlYWRpbmczJyBcclxuICB8ICdoZWFkaW5nNCcgXHJcbiAgfCAnaGVhZGluZzUnIFxyXG4gIHwgJ2hlYWRpbmc2J1xyXG4gIHwgJ2ltYWdlJyBcclxuICB8ICd2aWRlbydcclxuICB8ICd5b3V0dWJlJ1xyXG4gIHwgJ2NvbHVtbnMnXHJcbiAgfCAnbGluayc7XHJcblxyXG5pbnRlcmZhY2UgQmxvY2sge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogQmxvY2tUeXBlO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBhdHRyaWJ1dGVzPzoge1xyXG4gICAgaHJlZj86IHN0cmluZztcclxuICAgIGFsdD86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxuICAgIHZpZGVvSWQ/OiBzdHJpbmc7XHJcbiAgICBjb2x1bW5Db3VudD86IG51bWJlcjtcclxuICAgIGNvbHVtbnM/OiBCbG9ja1tdW107IC8vIEFnb3JhIGNhZGEgY29sdW5hIGNvbnTDqW0gdW0gYXJyYXkgZGUgYmxvY29zXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNvcnRhYmxlQmxvY2tQcm9wcyB7XHJcbiAgYmxvY2s6IEJsb2NrO1xyXG4gIG9uVXBkYXRlOiAoaWQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KSA9PiB2b2lkO1xyXG4gIG9uRGVsZXRlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbHVtbkJsb2NrTWFuYWdlclByb3BzIHtcclxuICBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG4gIGJsb2NrczogQmxvY2tbXTtcclxuICBvblVwZGF0ZUJsb2NrczogKGNvbHVtbkluZGV4OiBudW1iZXIsIGJsb2NrczogQmxvY2tbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuLy8gQ29tcG9uZW50ZSBwYXJhIGdlcmVuY2lhciBibG9jb3MgZGVudHJvIGRlIHVtYSBjb2x1bmFcclxuY29uc3QgQ29sdW1uQmxvY2tNYW5hZ2VyOiBSZWFjdC5GQzxDb2x1bW5CbG9ja01hbmFnZXJQcm9wcz4gPSAoeyBjb2x1bW5JbmRleCwgYmxvY2tzLCBvblVwZGF0ZUJsb2NrcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnMoXHJcbiAgICB1c2VTZW5zb3IoUG9pbnRlclNlbnNvciksXHJcbiAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcclxuICAgICAgY29vcmRpbmF0ZUdldHRlcjogc29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xyXG5cclxuICBjb25zdCBhZGRCbG9ja1RvQ29sdW1uID0gKHR5cGU6IEJsb2NrVHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2s6IEJsb2NrID0ge1xyXG4gICAgICBpZDogZ2VuZXJhdGVJZCgpLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBjb250ZW50OiAnJyxcclxuICAgICAgYXR0cmlidXRlczoge31cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBbLi4uYmxvY2tzLCBuZXdCbG9ja107XHJcbiAgICBvblVwZGF0ZUJsb2Nrcyhjb2x1bW5JbmRleCwgdXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQ29sdW1uQmxvY2sgPSAoaWQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQmxvY2tzID0gYmxvY2tzLm1hcChibG9jayA9PlxyXG4gICAgICBibG9jay5pZCA9PT0gaWRcclxuICAgICAgICA/IHsgLi4uYmxvY2ssIGNvbnRlbnQsIGF0dHJpYnV0ZXM6IHsgLi4uYmxvY2suYXR0cmlidXRlcywgLi4uYXR0cmlidXRlcyB9IH1cclxuICAgICAgICA6IGJsb2NrXHJcbiAgICApO1xyXG4gICAgb25VcGRhdGVCbG9ja3MoY29sdW1uSW5kZXgsIHVwZGF0ZWRCbG9ja3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNvbHVtbkJsb2NrID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBibG9ja3MuZmlsdGVyKGJsb2NrID0+IGJsb2NrLmlkICE9PSBpZCk7XHJcbiAgICBvblVwZGF0ZUJsb2Nrcyhjb2x1bW5JbmRleCwgdXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChldmVudDogRHJhZ0VuZEV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XHJcblxyXG4gICAgaWYgKGFjdGl2ZS5pZCAhPT0gb3Zlcj8uaWQpIHtcclxuICAgICAgY29uc3Qgb2xkSW5kZXggPSBibG9ja3MuZmluZEluZGV4KGJsb2NrID0+IGJsb2NrLmlkID09PSBhY3RpdmUuaWQpO1xyXG4gICAgICBjb25zdCBuZXdJbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoYmxvY2sgPT4gYmxvY2suaWQgPT09IG92ZXI/LmlkKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBhcnJheU1vdmUoYmxvY2tzLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICBvblVwZGF0ZUJsb2Nrcyhjb2x1bW5JbmRleCwgdXBkYXRlZEJsb2Nrcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgIHsvKiBUb29sYmFyIG1pbmkgcGFyYSBhZGljaW9uYXIgYmxvY29zIG5hIGNvbHVuYSAqL31cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBhZGRpbmc6ICc4cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMWYzZjQnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RhZGNlMCdcclxuICAgICAgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEwcHgnLCBmb250V2VpZ2h0OiAnNjAwJywgbWFyZ2luQm90dG9tOiAnNnB4JywgY29sb3I6ICcjNWY2MzY4JyB9fT5cclxuICAgICAgICAgIEFkaWNpb25hciDDoCBDb2x1bmEge2NvbHVtbkluZGV4ICsgMX06XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGdhcDogJzRweCcgfX0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrVG9Db2x1bW4oJ3BhcmFncmFwaCcpfSBzdHlsZT17bWluaUJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAg8J+TnSBUZXh0b1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrVG9Db2x1bW4oJ2hlYWRpbmcyJyl9IHN0eWxlPXttaW5pQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICBIMlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrVG9Db2x1bW4oJ2ltYWdlJyl9IHN0eWxlPXttaW5pQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5a877iPXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2tUb0NvbHVtbigneW91dHViZScpfSBzdHlsZT17bWluaUJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAg8J+TulxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrVG9Db2x1bW4oJ2xpbmsnKX0gc3R5bGU9e21pbmlCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIPCflJdcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBMaXN0YSBkZSBibG9jb3MgbmEgY29sdW5hICovfVxyXG4gICAgICA8RG5kQ29udGV4dFxyXG4gICAgICAgIHNlbnNvcnM9e3NlbnNvcnN9XHJcbiAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjbG9zZXN0Q2VudGVyfVxyXG4gICAgICAgIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTb3J0YWJsZUNvbnRleHQgaXRlbXM9e2Jsb2Nrcy5tYXAoYiA9PiBiLmlkKX0gc3RyYXRlZ3k9e3ZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAge2Jsb2Nrcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzlhYTBhNicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggZGFzaGVkICNkYWRjZTAnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMXB4J1xyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgQWRpY2lvbmUgYmxvY29zIG5lc3RhIGNvbHVuYVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIGJsb2Nrcy5tYXAoKGJsb2NrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U29ydGFibGVCbG9ja1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Jsb2NrLmlkfVxyXG4gICAgICAgICAgICAgICAgICBibG9jaz17YmxvY2t9XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt1cGRhdGVDb2x1bW5CbG9ja31cclxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2RlbGV0ZUNvbHVtbkJsb2NrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XHJcbiAgICAgIDwvRG5kQ29udGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBDb21wb25lbnRlIGRlIGJsb2NvIGFycmFzdMOhdmVsXHJcbmNvbnN0IFNvcnRhYmxlQmxvY2s6IFJlYWN0LkZDPFNvcnRhYmxlQmxvY2tQcm9wcz4gPSAoeyBibG9jaywgb25VcGRhdGUsIG9uRGVsZXRlIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBhdHRyaWJ1dGVzLFxyXG4gICAgbGlzdGVuZXJzLFxyXG4gICAgc2V0Tm9kZVJlZixcclxuICAgIHRyYW5zZm9ybSxcclxuICAgIHRyYW5zaXRpb24sXHJcbiAgICBpc0RyYWdnaW5nLFxyXG4gIH0gPSB1c2VTb3J0YWJsZSh7IGlkOiBibG9jay5pZCB9KTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB0cmFuc2Zvcm06IENTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKSxcclxuICAgIHRyYW5zaXRpb24sXHJcbiAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb250ZW50Q2hhbmdlID0gKGNvbnRlbnQ6IHN0cmluZywgYXR0cnM/OiBhbnkpID0+IHtcclxuICAgIG9uVXBkYXRlKGJsb2NrLmlkLCBjb250ZW50LCBhdHRycyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQmxvY2tDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChibG9jay50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICB7LyogVG9vbGJhciBkZSBmb3JtYXRhw6fDo28gKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZ2FwOiAnNHB4JyxcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Rvb2xiYXJCdXR0b25TdHlsZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTmVncml0b1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0b29sYmFyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkl0w6FsaWNvXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZW0+STwvZW0+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt0b29sYmFyQnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlN1YmxpbmhhZG9cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1PlU8L3U+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvbXB0KCdEaWdpdGUgYSBVUkwgZG8gbGluazonKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjcmVhdGVMaW5rJywgZmFsc2UsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dG9vbGJhckJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJJbnNlcmlyIExpbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIPCflJdcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcclxuICAgICAgICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gaGFuZGxlQ29udGVudENoYW5nZShlLnRhcmdldC5pbm5lckhUTUwpfVxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvY2suY29udGVudCB8fCAnRGlnaXRlIHNldSB0ZXh0byBhcXVpLi4uJyB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgXHJcbiAgICAgIGNhc2UgJ2hlYWRpbmcxJzpcclxuICAgICAgY2FzZSAnaGVhZGluZzInOlxyXG4gICAgICBjYXNlICdoZWFkaW5nMyc6XHJcbiAgICAgIGNhc2UgJ2hlYWRpbmc0JzpcclxuICAgICAgY2FzZSAnaGVhZGluZzUnOlxyXG4gICAgICBjYXNlICdoZWFkaW5nNic6XHJcbiAgICAgICAgY29uc3QgSGVhZGluZ1RhZyA9IGJsb2NrLnR5cGUgYXMga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPEhlYWRpbmdUYWdcclxuICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcclxuICAgICAgICAgICAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gaGFuZGxlQ29udGVudENoYW5nZShlLnRhcmdldC5pbm5lckhUTUwpfVxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvY2suY29udGVudCB8fCBgVMOtdHVsbyAke2Jsb2NrLnR5cGUuc2xpY2UoLTEpfWAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAge2Jsb2NrLmF0dHJpYnV0ZXM/LnNyYyA/IChcclxuICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YmxvY2suYXR0cmlidXRlcy5zcmN9IFxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Jsb2NrLmF0dHJpYnV0ZXM/LmFsdCB8fCAnJ30gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk5lbmh1bWEgaW1hZ2VtIHNlbGVjaW9uYWRhPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29udGVudENoYW5nZShibG9jay5jb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYmxvY2suYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGV4dG8gYWx0ZXJuYXRpdm9cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YmxvY2suYXR0cmlidXRlcz8uYWx0IHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbnRlbnRDaGFuZ2UoYmxvY2suY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmJsb2NrLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJywgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyBcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNhc2UgJ3lvdXR1YmUnOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2UwZTBlMCcsIGJvcmRlclJhZGl1czogJzRweCcsIHBhZGRpbmc6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQgZG8gdsOtZGVvIGRvIFlvdVR1YmUgKGV4OiBkUXc0dzlXZ1hjUSlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmF0dHJpYnV0ZXM/LnZpZGVvSWQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbnRlbnRDaGFuZ2UoYmxvY2suY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ibG9jay5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7YmxvY2suYXR0cmlidXRlcz8udmlkZW9JZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBwYWRkaW5nQm90dG9tOiAnNTYuMjUlJywgaGVpZ2h0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtibG9jay5hdHRyaWJ1dGVzLnZpZGVvSWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSAnY29sdW1ucyc6XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ29sdW1uQmxvY2tzVXBkYXRlID0gKGNvbHVtbkluZGV4OiBudW1iZXIsIGNvbHVtbkJsb2NrczogQmxvY2tbXSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZENvbHVtbnMgPSBbLi4uKGJsb2NrLmF0dHJpYnV0ZXM/LmNvbHVtbnMgfHwgW10pXTtcclxuICAgICAgICAgIHVwZGF0ZWRDb2x1bW5zW2NvbHVtbkluZGV4XSA9IGNvbHVtbkJsb2NrcztcclxuICAgICAgICAgIGhhbmRsZUNvbnRlbnRDaGFuZ2UoYmxvY2suY29udGVudCwge1xyXG4gICAgICAgICAgICAuLi5ibG9jay5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiB1cGRhdGVkQ29sdW1uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgcGFkZGluZzogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogJzUwMCcsIG1hcmdpbkJvdHRvbTogJzRweCcsIGRpc3BsYXk6ICdibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE7Dum1lcm8gZGUgY29sdW5hczpcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay5hdHRyaWJ1dGVzPy5jb2x1bW5Db3VudCB8fCAyfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5Db3VudCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbmljaWFsaXphIGNvbHVuYXMgY29tbyBhcnJheXMgZGUgYmxvY29zIHZhemlvc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBBcnJheShjb2x1bW5Db3VudCkuZmlsbChudWxsKS5tYXAoKCkgPT4gW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvbnRlbnRDaGFuZ2UoYmxvY2suY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uYmxvY2suYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJywgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9PjIgQ29sdW5hczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXszfT4zIENvbHVuYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NH0+NCBDb2x1bmFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLCBcclxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoJHtibG9jay5hdHRyaWJ1dGVzPy5jb2x1bW5Db3VudCB8fCAyfSwgMWZyKWAsXHJcbiAgICAgICAgICAgICAgICBnYXA6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzIwMHB4J1xyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge0FycmF5KGJsb2NrLmF0dHJpYnV0ZXM/LmNvbHVtbkNvdW50IHx8IDIpLmZpbGwobnVsbCkubWFwKChfLCBjb2xJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y29sSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgI2U5ZWNlZicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTgwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5CbG9ja01hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXtjb2xJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17YmxvY2suYXR0cmlidXRlcz8uY29sdW1ucz8uW2NvbEluZGV4XSB8fCBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlQmxvY2tzPXtoYW5kbGVDb2x1bW5CbG9ja3NVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjZTBlMGUwJywgYm9yZGVyUmFkaXVzOiAnNHB4JywgcGFkZGluZzogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZXh0byBkbyBsaW5rXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDb250ZW50Q2hhbmdlKGUudGFyZ2V0LnZhbHVlLCBibG9jay5hdHRyaWJ1dGVzKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVVJMIGRvIGxpbmtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLmF0dHJpYnV0ZXM/LmhyZWYgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbnRlbnRDaGFuZ2UoYmxvY2suY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ibG9jay5hdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAgICAgICBocmVmOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnLCBcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7YmxvY2suY29udGVudCAmJiBibG9jay5hdHRyaWJ1dGVzPy5ocmVmICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Jsb2NrLmF0dHJpYnV0ZXMuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtibG9jay5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiA8ZGl2PlRpcG8gZGUgYmxvY28gbsOjbyBzdXBvcnRhZG88L2Rpdj47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtzZXROb2RlUmVmfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cInNvcnRhYmxlLWJsb2NrXCJcclxuICAgID5cclxuICAgICAgPGRpdiBzdHlsZT17eyBcclxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgI2YwZjBmMCcsIFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsIFxyXG4gICAgICAgIG1hcmdpbjogJzhweCAwJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgfX0+XHJcbiAgICAgICAgey8qIEJhcnJhIGRlIGNvbnRyb2xlICovfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyxcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTBlMGUwJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCA4cHggMCAwJ1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc4cHgnIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgey4uLmF0dHJpYnV0ZXN9XHJcbiAgICAgICAgICAgICAgey4uLmxpc3RlbmVyc31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZ3JhYicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2Yzc1N2QnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDii67ii65cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzZjNzU3ZCcsIGZvbnRXZWlnaHQ6ICc1MDAnIH19PlxyXG4gICAgICAgICAgICAgIHtibG9jay50eXBlLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShibG9jay5pZCl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNkYzM1NDUnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzRweCA4cHgnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRXhjbHVpclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIENvbnRlw7pkbyBkbyBibG9jbyAqL31cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMnB4JyB9fT5cclxuICAgICAgICAgIHtyZW5kZXJCbG9ja0NvbnRlbnQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gQ29tcG9uZW50ZSBwcmluY2lwYWwgZG8gZWRpdG9yXHJcbmNvbnN0IFZpc3VhbENvbXBvc2VyOiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIHByb3BlcnR5LCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2Nrcywgc2V0QmxvY2tzXSA9IHVzZVN0YXRlPEJsb2NrW10+KCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSB8fCAnJztcclxuICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnWycpKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENvbnZlcnRlIEhUTUwgZXhpc3RlbnRlIHBhcmEgdW0gYmxvY28gZGUgcGFyw6FncmFmb1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgIGlkOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyBhcyBCbG9ja1R5cGUsXHJcbiAgICAgICAgICBjb250ZW50OiB2YWx1ZVxyXG4gICAgICAgIH1dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFJlbW92aWRvOiBuw6NvIHByZWNpc2Ftb3MgbWFpcyBkZSBkZWJvdW5jZSBvdSBpbmRpY2Fkb3IgZGUgc2FsdmFtZW50b1xyXG5cclxuICBjb25zdCBzZW5zb3JzID0gdXNlU2Vuc29ycyhcclxuICAgIHVzZVNlbnNvcihQb2ludGVyU2Vuc29yKSxcclxuICAgIHVzZVNlbnNvcihLZXlib2FyZFNlbnNvciwge1xyXG4gICAgICBjb29yZGluYXRlR2V0dGVyOiBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XHJcblxyXG4gIGNvbnN0IGFkZEJsb2NrID0gKHR5cGU6IEJsb2NrVHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3QmxvY2s6IEJsb2NrID0ge1xyXG4gICAgICBpZDogZ2VuZXJhdGVJZCgpLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBjb250ZW50OiAnJyxcclxuICAgICAgYXR0cmlidXRlczogdHlwZSA9PT0gJ2NvbHVtbnMnID8geyBjb2x1bW5Db3VudDogMiwgY29sdW1uczogW1tdLCBbXV0gfSA6IHt9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCB1cGRhdGVkQmxvY2tzID0gWy4uLmJsb2NrcywgbmV3QmxvY2tdO1xyXG4gICAgc2V0QmxvY2tzKHVwZGF0ZWRCbG9ja3MpO1xyXG4gICAgdXBkYXRlVmFsdWUodXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQmxvY2sgPSAoaWQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQmxvY2tzID0gYmxvY2tzLm1hcChibG9jayA9PlxyXG4gICAgICBibG9jay5pZCA9PT0gaWRcclxuICAgICAgICA/IHsgLi4uYmxvY2ssIGNvbnRlbnQsIGF0dHJpYnV0ZXM6IHsgLi4uYmxvY2suYXR0cmlidXRlcywgLi4uYXR0cmlidXRlcyB9IH1cclxuICAgICAgICA6IGJsb2NrXHJcbiAgICApO1xyXG4gICAgc2V0QmxvY2tzKHVwZGF0ZWRCbG9ja3MpO1xyXG4gICAgdXBkYXRlVmFsdWUodXBkYXRlZEJsb2Nrcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQmxvY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IGJsb2Nrcy5maWx0ZXIoYmxvY2sgPT4gYmxvY2suaWQgIT09IGlkKTtcclxuICAgIHNldEJsb2Nrcyh1cGRhdGVkQmxvY2tzKTtcclxuICAgIHVwZGF0ZVZhbHVlKHVwZGF0ZWRCbG9ja3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gdXNlQ2FsbGJhY2soKHVwZGF0ZWRCbG9ja3M6IEJsb2NrW10pID0+IHtcclxuICAgIC8vIEFwZW5hcyBjb252ZXJ0ZSBlIGF0dWFsaXphIG8gdmFsb3IgaW1lZGlhdGFtZW50ZSwgc2VtIGRlYm91bmNlXHJcbiAgICAvLyBPIEFkbWluSlMgbsOjbyBpcsOhIHNhbHZhciBhdXRvbWF0aWNhbWVudGUsIGFwZW5hcyBxdWFuZG8gbyB1c3XDoXJpbyBjbGljYXIgZW0gXCJTYWx2YXJcIlxyXG4gICAgY29uc3QgaHRtbCA9IGJsb2Nrc1RvSHRtbCh1cGRhdGVkQmxvY2tzKTtcclxuICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsIGh0bWwpO1xyXG4gICAgY29uc29sZS5sb2coJ/CflIQgQ29udGXDumRvIGF0dWFsaXphZG8gbG9jYWxtZW50ZSAobsOjbyBzYWx2byBubyBiYW5jbyBhaW5kYSknKTtcclxuICB9LCBbcHJvcGVydHkubmFtZSwgb25DaGFuZ2VdKTtcclxuXHJcbiAgLy8gUmVtb3ZpZG86IGNsZWFudXAgZG8gdGltZXIgbsOjbyDDqSBtYWlzIG5lY2Vzc8OhcmlvXHJcblxyXG4gIGNvbnN0IGJsb2Nrc1RvSHRtbCA9IChibG9ja3M6IEJsb2NrW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJsb2Nrcy5tYXAoYmxvY2sgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGJsb2NrLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdwYXJhZ3JhcGgnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8cD4ke2Jsb2NrLmNvbnRlbnR9PC9wPmA7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZzEnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aDE+JHtibG9jay5jb250ZW50fTwvaDE+YDtcclxuICAgICAgICBjYXNlICdoZWFkaW5nMic6XHJcbiAgICAgICAgICByZXR1cm4gYDxoMj4ke2Jsb2NrLmNvbnRlbnR9PC9oMj5gO1xyXG4gICAgICAgIGNhc2UgJ2hlYWRpbmczJzpcclxuICAgICAgICAgIHJldHVybiBgPGgzPiR7YmxvY2suY29udGVudH08L2gzPmA7XHJcbiAgICAgICAgY2FzZSAnaGVhZGluZzQnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aDQ+JHtibG9jay5jb250ZW50fTwvaDQ+YDtcclxuICAgICAgICBjYXNlICdoZWFkaW5nNSc6XHJcbiAgICAgICAgICByZXR1cm4gYDxoNT4ke2Jsb2NrLmNvbnRlbnR9PC9oNT5gO1xyXG4gICAgICAgIGNhc2UgJ2hlYWRpbmc2JzpcclxuICAgICAgICAgIHJldHVybiBgPGg2PiR7YmxvY2suY29udGVudH08L2g2PmA7XHJcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7YmxvY2suYXR0cmlidXRlcz8uc3JjIHx8ICcnfVwiIGFsdD1cIiR7YmxvY2suYXR0cmlidXRlcz8uYWx0IHx8ICcnfVwiIC8+YDtcclxuICAgICAgICBjYXNlICd5b3V0dWJlJzpcclxuICAgICAgICAgIHJldHVybiBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2Jsb2NrLmF0dHJpYnV0ZXM/LnZpZGVvSWR9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmA7XHJcbiAgICAgICAgY2FzZSAnY29sdW1ucyc6XHJcbiAgICAgICAgICBjb25zdCBjb2x1bW5IdG1sID0gYmxvY2suYXR0cmlidXRlcz8uY29sdW1ucz8ubWFwKGNvbHVtbkJsb2NrcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkNvbnRlbnQgPSBibG9ja3NUb0h0bWwoY29sdW1uQmxvY2tzIHx8IFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+JHtjb2x1bW5Db250ZW50fTwvZGl2PmA7XHJcbiAgICAgICAgICB9KS5qb2luKCcnKSB8fCAnJztcclxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7YmxvY2suYXR0cmlidXRlcz8uY29sdW1uQ291bnQgfHwgMn0sIDFmcik7IGdhcDogMTZweDtcIj4ke2NvbHVtbkh0bWx9PC9kaXY+YDtcclxuICAgICAgICBjYXNlICdsaW5rJzpcclxuICAgICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7YmxvY2suYXR0cmlidXRlcz8uaHJlZiB8fCAnJ31cIj4ke2Jsb2NrLmNvbnRlbnR9PC9hPmA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfSkuam9pbignXFxuJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChldmVudDogRHJhZ0VuZEV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XHJcblxyXG4gICAgaWYgKGFjdGl2ZS5pZCAhPT0gb3Zlcj8uaWQpIHtcclxuICAgICAgY29uc3Qgb2xkSW5kZXggPSBibG9ja3MuZmluZEluZGV4KGJsb2NrID0+IGJsb2NrLmlkID09PSBhY3RpdmUuaWQpO1xyXG4gICAgICBjb25zdCBuZXdJbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoYmxvY2sgPT4gYmxvY2suaWQgPT09IG92ZXI/LmlkKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBhcnJheU1vdmUoYmxvY2tzLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICBzZXRCbG9ja3ModXBkYXRlZEJsb2Nrcyk7XHJcbiAgICAgIHVwZGF0ZVZhbHVlKHVwZGF0ZWRCbG9ja3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgIHsvKiBBdmlzbyBzb2JyZSBzYWx2YW1lbnRvIG1hbnVhbCAqL31cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2QxZWNmMScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNiZWU1ZWInLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICBjb2xvcjogJyMwYzU0NjAnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxzcGFuPvCfkqE8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+RmHDp2Egc3VhcyBlZGnDp8O1ZXMgbm9ybWFsbWVudGUuIENsaXF1ZSBlbSBcIlNhbHZhclwiIG5vIGZpbmFsIGRhIHDDoWdpbmEgcGFyYSBwZXJzaXN0aXIgYXMgbXVkYW7Dp2FzLjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogVG9vbGJhciBkZSBhZGljaW9uYXIgYmxvY29zICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmEnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlMGUwZTAnXHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46ICcwIDAgMTJweCAwJywgZm9udFNpemU6ICcxNHB4JywgZm9udFdlaWdodDogJzYwMCcgfX0+XHJcbiAgICAgICAgICDwn46oIEVkaXRvciBWaXN1YWwgLSBBZGljaW9uYXIgQmxvY29zXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAnOHB4JyB9fT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ3BhcmFncmFwaCcpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5OdIFBhcsOhZ3JhZm9cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnaGVhZGluZzEnKX0gc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgSDEgVMOtdHVsbyAxXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQmxvY2soJ2hlYWRpbmcyJyl9IHN0eWxlPXtidXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgIEgyIFTDrXR1bG8gMlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJsb2NrKCdoZWFkaW5nMycpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICBIMyBUw610dWxvIDNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnaW1hZ2UnKX0gc3R5bGU9e2J1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAg8J+WvO+4jyBJbWFnZW1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygneW91dHViZScpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5O6IFlvdVR1YmVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnY29sdW1ucycpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5OQIENvbHVuYXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCbG9jaygnbGluaycpfSBzdHlsZT17YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICDwn5SXIExpbmtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBFZGl0b3IgZGUgYmxvY29zICovfVxyXG4gICAgICA8RG5kQ29udGV4dFxyXG4gICAgICAgIHNlbnNvcnM9e3NlbnNvcnN9XHJcbiAgICAgICAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjbG9zZXN0Q2VudGVyfVxyXG4gICAgICAgIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTb3J0YWJsZUNvbnRleHQgaXRlbXM9e2Jsb2Nrcy5tYXAoYiA9PiBiLmlkKX0gc3RyYXRlZ3k9e3ZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAge2Jsb2Nrcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzZjNzU3ZCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZhJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggZGFzaGVkICNkZWUyZTYnXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8cD5BZGljaW9uZSBibG9jb3MgcGFyYSBjb21lw6dhciBhIGNyaWFyIHNldSBjb250ZcO6ZG88L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PkFycmFzdGUgb3MgYmxvY29zIHBhcmEgcmVvcmRlbmFyPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIGJsb2Nrcy5tYXAoKGJsb2NrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U29ydGFibGVCbG9ja1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2Jsb2NrLmlkfVxyXG4gICAgICAgICAgICAgICAgICBibG9jaz17YmxvY2t9XHJcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt1cGRhdGVCbG9ja31cclxuICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2RlbGV0ZUJsb2NrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XHJcbiAgICAgIDwvRG5kQ29udGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBidXR0b25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICBwYWRkaW5nOiAnOHB4IDEycHgnLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZGVlMmU2JyxcclxuICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBmb250U2l6ZTogJzEycHgnLFxyXG4gIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC4ycydcclxufTtcclxuXHJcbmNvbnN0IHRvb2xiYXJCdXR0b25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICBwYWRkaW5nOiAnNHB4IDhweCcsXHJcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZWUyZTYnLFxyXG4gIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgbWluV2lkdGg6ICcyOHB4JyxcclxuICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMnXHJcbn07XHJcblxyXG5jb25zdCBtaW5pQnV0dG9uU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgcGFkZGluZzogJzRweCA2cHgnLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZDFkNWRiJyxcclxuICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBmb250U2l6ZTogJzEwcHgnLFxyXG4gIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxyXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxDb21wb3NlcjtcclxuIiwiaW1wb3J0IHsgRHJvcFpvbmUsIERyb3Bab25lSXRlbSwgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgRWRpdCA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSByZWNvcmQ7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBjb25zdCBrZXkgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgZmlsZSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQcm9wZXJ0eSk7XG4gICAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpO1xuICAgIGNvbnN0IFtmaWxlc1RvVXBsb2FkLCBzZXRGaWxlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB1c2VyIHR1cm5zIG9mZiByZWRpcmVjdCBhZnRlciBuZXcvZWRpdFxuICAgICAgICBpZiAoKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBzZXRPcmlnaW5hbEtleShrZXkpO1xuICAgICAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSk7XG4gICAgICAgIH1cbiAgICB9LCBba2V5LCBvcmlnaW5hbEtleV0pO1xuICAgIGNvbnN0IG9uVXBsb2FkID0gKGZpbGVzKSA9PiB7XG4gICAgICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpO1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcyk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTXVsdGlSZW1vdmUgPSAoc2luZ2xlS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSkgfHwgW10pLmluZGV4T2Yoc2luZ2xlS2V5KTtcbiAgICAgICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHkpIHx8IFtdO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+IChpICE9PSBpbmRleCA/IGN1cnJlbnRQYXRoIDogbnVsbCkpO1xuICAgICAgICAgICAgbGV0IG5ld1BhcmFtcyA9IGZsYXQuc2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHksIFsuLi5maWxlc1RvRGVsZXRlLCBpbmRleF0pO1xuICAgICAgICAgICAgbmV3UGFyYW1zID0gZmxhdC5zZXQobmV3UGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSwgbmV3UGF0aCk7XG4gICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjYW5ub3QgcmVtb3ZlIGZpbGUgd2hlbiB0aGVyZSBhcmUgbm8gdXBsb2FkZWQgZmlsZXMgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmUsIHsgb25DaGFuZ2U6IG9uVXBsb2FkLCBtdWx0aXBsZTogY3VzdG9tLm11bHRpcGxlLCB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgIG1pbWVUeXBlczogY3VzdG9tLm1pbWVUeXBlcyxcbiAgICAgICAgICAgICAgICBtYXhTaXplOiBjdXN0b20ubWF4U2l6ZSxcbiAgICAgICAgICAgIH0sIGZpbGVzOiBmaWxlc1RvVXBsb2FkIH0pLFxuICAgICAgICAhY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBwYXRoICYmICFmaWxlc1RvVXBsb2FkLmxlbmd0aCAmJiBmaWxlICE9PSBudWxsICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBmaWxlbmFtZToga2V5LCBzcmM6IHBhdGgsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUgfSkpLFxuICAgICAgICBjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBrZXkubWFwKChzaW5nbGVLZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxuICAgICAgICAgICAgLy8ga2V5IGlzIHN0aWxsIHRoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gbWFpbnRhaW4gYWxsIHRoZSBpbmRleGVzLiBTbyBoZXJlIHdlIHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHBhdGhbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGtleTogc2luZ2xlS2V5LCBmaWxlbmFtZTogc2luZ2xlS2V5LCBzcmM6IHBhdGhbaW5kZXhdLCBvblJlbW92ZTogKCkgPT4gaGFuZGxlTXVsdGlSZW1vdmUoc2luZ2xlS2V5KSB9KSkgOiAnJztcbiAgICAgICAgfSkpKSA6ICcnKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgICAnYXVkaW8vYWFjJyxcbiAgICAnYXVkaW8vbWlkaScsXG4gICAgJ2F1ZGlvL3gtbWlkaScsXG4gICAgJ2F1ZGlvL21wZWcnLFxuICAgICdhdWRpby9vZ2cnLFxuICAgICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAgICdhdWRpby9vcHVzJyxcbiAgICAnYXVkaW8vd2F2JyxcbiAgICAnYXVkaW8vd2VibScsXG4gICAgJ2F1ZGlvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICAgJ3ZpZGVvL21wZWcnLFxuICAgICd2aWRlby9vZ2cnLFxuICAgICd2aWRlby9tcDJ0JyxcbiAgICAndmlkZW8vd2VibScsXG4gICAgJ3ZpZGVvLzNncHAnLFxuICAgICd2aWRlby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAgICdpbWFnZS9ibXAnLFxuICAgICdpbWFnZS9naWYnLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UvcG5nJyxcbiAgICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICAgJ2ltYWdlL3RpZmYnLFxuICAgICdpbWFnZS93ZWJwJyxcbl07XG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dO1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAgICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAgICdhcHBsaWNhdGlvbi9ydGYnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dO1xuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICAgJ3RleHQvY3NzJyxcbiAgICAndGV4dC9jc3YnLFxuICAgICd0ZXh0L2h0bWwnLFxuICAgICd0ZXh0L2NhbGVuZGFyJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICd0ZXh0L3BsYWluJyxcbiAgICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAndGV4dC94bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dO1xuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2ZvbnQvb3RmJyxcbiAgICAnZm9udC90dGYnLFxuICAgICdmb250L3dvZmYnLFxuICAgICdmb250L3dvZmYyJyxcbl07XG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICAgJ3ZuZC52aXNpbycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gICAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gICAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gICAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gICAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgICAuLi5UZXh0TWltZVR5cGVzLFxuICAgIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gICAgLi4uRm9udE1pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbl07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyc7XG5jb25zdCBTaW5nbGVGaWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzO1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcGF0aCwgc3R5bGU6IHsgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH0sIGFsdDogbmFtZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgeyBjb250cm9sczogdHJ1ZSwgc3JjOiBwYXRoIH0sXG4gICAgICAgICAgICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImF1ZGlvXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCB7IGtpbmQ6IFwiY2FwdGlvbnNcIiB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGFzOiBcImFcIiwgaHJlZjogcGF0aCwgbWw6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtXCIsIHJvdW5kZWQ6IHRydWUsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiRG9jdW1lbnREb3dubG9hZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtcjogXCJkZWZhdWx0XCIgfSksXG4gICAgICAgICAgICBuYW1lKSkpO1xufTtcbmNvbnN0IEZpbGUgPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGxldCBwYXRoID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgPyBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA6IGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eVxuICAgICAgICAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpO1xuICAgIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgICAgICBwYXRoID0gYCR7Y3VzdG9tLm9wdHMuYmFzZVVybH0vJHtuYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsgcGF0aDogcGF0aCwgbmFtZTogbmFtZSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGUgfSkpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gY3VzdG9tLm9wdHMuYmFzZVVybCB8fCAnJztcbiAgICAgICAgcGF0aCA9IHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gYCR7YmFzZVVybH0vJHtuYW1lW2luZGV4XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsga2V5OiBzaW5nbGVQYXRoLCBwYXRoOiBzaW5nbGVQYXRoLCBuYW1lOiBuYW1lW2luZGV4XSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGVbaW5kZXhdIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiAxMDAsIC4uLnByb3BzIH0pKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBTaG93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IFwiMTAwJVwiLCAuLi5wcm9wcyB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNob3c7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDdXN0b21VcGxvYWRFZGl0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5DdXN0b21VcGxvYWRFZGl0ID0gQ3VzdG9tVXBsb2FkRWRpdFxuaW1wb3J0IFRodW1iIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RodW1iJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UaHVtYiA9IFRodW1iXG5pbXBvcnQgR3JvdXBlZFByaWNlcyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZFByaWNlcyA9IEdyb3VwZWRQcmljZXNcbmltcG9ydCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyb3VwZWQtZGlzcG9uaWJpbGl0aWVzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Hcm91cGVkRGlzcG9uaWJpbGl0aWVzID0gR3JvdXBlZERpc3BvbmliaWxpdGllc1xuaW1wb3J0IFNob3dQcm9kdWN0SW1hZ2UgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc2hvdy1tZWRpYSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2hvd1Byb2R1Y3RJbWFnZSA9IFNob3dQcm9kdWN0SW1hZ2VcbmltcG9ydCBGb3JtYXR0ZWREYXRlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Gb3JtYXR0ZWREYXRlID0gRm9ybWF0dGVkRGF0ZVxuaW1wb3J0IFJlZGlyZWN0RGFzaGJvYXJkIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUmVkaXJlY3REYXNoYm9hcmQgPSBSZWRpcmVjdERhc2hib2FyZFxuaW1wb3J0IFN5bmNQcmljZXNBY3Rpb24gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc3luYy1idXR0b24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlN5bmNQcmljZXNBY3Rpb24gPSBTeW5jUHJpY2VzQWN0aW9uXG5pbXBvcnQgQ2F0ZWdvcmlhU2VsZWN0UmVhbCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9jYXRlZ29yaWEtc2VsZWN0LXJlYWwnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNhdGVnb3JpYVNlbGVjdFJlYWwgPSBDYXRlZ29yaWFTZWxlY3RSZWFsXG5pbXBvcnQgUGVyaW9kb1NlbGVjdCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9wZXJpb2RvLXNlbGVjdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUGVyaW9kb1NlbGVjdCA9IFBlcmlvZG9TZWxlY3RcbmltcG9ydCBUaW55TUNFRWRpdG9yIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RpbnltY2UtZWRpdG9yJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UaW55TUNFRWRpdG9yID0gVGlueU1DRUVkaXRvclxuaW1wb3J0IFF1aWxsRWRpdG9yIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3F1aWxsLWVkaXRvcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUXVpbGxFZGl0b3IgPSBRdWlsbEVkaXRvclxuaW1wb3J0IEJsb2NrQnVpbGRlciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ibG9jay1idWlsZGVyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5CbG9ja0J1aWxkZXIgPSBCbG9ja0J1aWxkZXJcbmltcG9ydCBUaXB0YXBFZGl0b3IgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGlwdGFwLWVkaXRvcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVGlwdGFwRWRpdG9yID0gVGlwdGFwRWRpdG9yXG5pbXBvcnQgVmlzdWFsQ29tcG9zZXIgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdmlzdWFsLWNvbXBvc2VyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5WaXN1YWxDb21wb3NlciA9IFZpc3VhbENvbXBvc2VyXG5pbXBvcnQgVXBsb2FkRWRpdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkRWRpdENvbXBvbmVudCA9IFVwbG9hZEVkaXRDb21wb25lbnRcbmltcG9ydCBVcGxvYWRMaXN0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRMaXN0Q29tcG9uZW50ID0gVXBsb2FkTGlzdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZFNob3dDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZFNob3dDb21wb25lbnQgPSBVcGxvYWRTaG93Q29tcG9uZW50Il0sIm5hbWVzIjpbIlVwbG9hZEVkaXQiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImh0bWxGb3IiLCJwcm9wZXJ0eSIsIm5hbWUiLCJpZCIsInR5cGUiLCJUaHVtYiIsInJlY29yZCIsInVybCIsInBhcmFtcyIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJHcm91cGVkUHJpY2VzIiwib25DaGFuZ2UiLCJwcmVjb1VuaWNvIiwicHJlY29NZWRpbyIsInByZWNvR3JhbmRlIiwicHJlY29JbmRpdmlkdWFsIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiQm94IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtciIsIm1iIiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJJbnB1dCIsInN0ZXAiLCJHcm91cGVkRGlzcG9uaWJpbGl0aWVzIiwiamFudGFyIiwiZGVsaXZlcnkiLCJoYW5kbGVDaGFuZ2VKYW50YXIiLCJlIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZURlbGl2ZXJ5IiwiZm9udFdlaWdodCIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsImN1cnNvciIsIkNoZWNrQm94IiwibWFyZ2luUmlnaHQiLCJTaG93UHJvZHVjdEltYWdlIiwiZmllbGROYW1lIiwibWVkaWFLZXkiLCJhbHRLZXkiLCJtZWRpYVBhdGgiLCJhbHRUZXh0IiwiZnVsbFVybCIsInN0YXJ0c1dpdGgiLCJsYWJlbCIsIm10IiwiZW5kc1dpdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImJvcmRlclJhZGl1cyIsImNvbnRyb2xzIiwiY29sb3IiLCJGb3JtYXR0ZWREYXRlIiwicmF3VmFsdWUiLCJwYXRoIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJ0aW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIlJlZGlyZWN0RGFzaGJvYXJkIiwibmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZUVmZmVjdCIsIlN5bmNQcmljZXNBY3Rpb24iLCJub3RpY2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJoYW5kbGVCYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJ2YXJpYW50IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwiQ2F0ZWdvcmlhU2VsZWN0UmVhbCIsImNhdGVnb3JpYXMiLCJzZXRDYXRlZ29yaWFzIiwidXNlU3RhdGUiLCJub3ZhQ2F0ZWdvcmlhIiwic2V0Tm92YUNhdGVnb3JpYSIsInNlbGVjdGVkQ2F0ZWdvcmlhcyIsInNldFNlbGVjdGVkQ2F0ZWdvcmlhcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hDYXRlZ29yaWFzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50VmFsdWUiLCJjYXRlZ29yaWFzSW5kZXhhZGFzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY2FtaW5ob3MiLCJwb3B1bGF0ZWQiLCJmb3JFYWNoIiwiY2FtaW5obyIsImZpbmQiLCJBcnJheSIsImlzQXJyYXkiLCJwcm9jZXNzZWRJZHMiLCJtYXAiLCJpdGVtIiwiU3RyaW5nIiwiX2lkIiwiZmlsdGVyIiwidW5pcXVlSWRzIiwiU2V0IiwiYyIsIm5vbWUiLCJtYXRjaGVzIiwic2VsZWN0ZWRJZCIsInNvbWUiLCJjYXQiLCJpc0VkaXRNb2RlIiwiT2JqZWN0Iiwia2V5cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwicmVjb3JkcyIsImNhdGVnb3JpYXNGb3JtYXRhZGFzIiwiY29yIiwiZXJyb3IiLCJoYW5kbGVDcmVhdGVDYXRlZ29yaWEiLCJ0cmltIiwicGF5bG9hZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibmV3Q2F0ZWdvcmlhIiwicHJldiIsIm5ld1NlbGVjdGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvcm1SZXNwb25zZSIsIkVycm9yIiwiaGFuZGxlQ2F0ZWdvcmlhQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJjYXRlZ29yaWFJZCIsImlzU2VsZWN0ZWQiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsInAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJUZXh0IiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImZsZXgiLCJkaXNhYmxlZCIsImJvcmRlciIsImNhdGVnb3JpYSIsIm92ZXJmbG93WSIsInN0b3BQcm9wYWdhdGlvbiIsIm1sIiwiUGVyaW9kb1NlbGVjdCIsInNlbGVjdGVkUGVyaW9kbyIsInNldFNlbGVjdGVkUGVyaW9kbyIsImhhbmRsZVBlcmlvZG9DaGFuZ2UiLCJwZXJpb2RvIiwicGVyaW9kb3MiLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsInRyYW5zaXRpb24iLCJ1c2VyU2VsZWN0Iiwib25Nb3VzZUVudGVyIiwiY3VycmVudFRhcmdldCIsImJvcmRlckNvbG9yIiwib25Nb3VzZUxlYXZlIiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiIsIlRpbnlNQ0VFZGl0b3IiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJlZGl0b3JSZWYiLCJ1c2VSZWYiLCJ0ZXh0YXJlYVJlZiIsImN1cnJlbnQiLCJ0aW55bWNlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJvbmxvYWQiLCJpbml0aWFsaXplVGlueU1DRSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsImluaXQiLCJtZW51YmFyIiwicGx1Z2lucyIsInRvb2xiYXIiLCJjb250ZW50X3N0eWxlIiwiaW1hZ2VzX3VwbG9hZF9oYW5kbGVyIiwiYmxvYkluZm8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJiYXNlNjQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsImJsb2IiLCJzZXR1cCIsImVkaXRvciIsIm9uIiwibmV3Q29udGVudCIsImdldENvbnRlbnQiLCJpbml0aWFsQ29udGVudCIsInJlZiIsIm1pbkhlaWdodCIsImRlZmF1bHRWYWx1ZSIsIlF1aWxsRWRpdG9yIiwicXVpbGxSZWYiLCJjb250YWluZXJSZWYiLCJRdWlsbCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW5pdGlhbGl6ZVF1aWxsIiwicXVpbGwiLCJ0aGVtZSIsIm1vZHVsZXMiLCJnZXRNb2R1bGUiLCJhZGRIYW5kbGVyIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJjbGljayIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwicmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJpbnNlcnRFbWJlZCIsImh0bWwiLCJyb290IiwiaW5uZXJIVE1MIiwiQmxvY2tCdWlsZGVyIiwiYmxvY2tzIiwic2V0QmxvY2tzIiwicGFyc2VkIiwicGFyc2UiLCJub3ciLCJ0b1N0cmluZyIsImFkZEJsb2NrIiwibmV3QmxvY2siLCJuZXdCbG9ja3MiLCJ1cGRhdGVDb250ZW50IiwidXBkYXRlQmxvY2siLCJ1cGRhdGVzIiwiYmxvY2siLCJkZWxldGVCbG9jayIsIm1vdmVCbG9jayIsImRpcmVjdGlvbiIsImZpbmRJbmRleCIsIm5ld0luZGV4Iiwic3BsaXQiLCJqb2luIiwidXBsb2FkSW1hZ2UiLCJyZW5kZXJCbG9jayIsImNvbW1vblN0eWxlcyIsImp1c3RpZnlDb250ZW50Iiwic2l6ZSIsImIiLCJhY2NlcHQiLCJUZXh0QXJlYSIsInJvd3MiLCJtYXJnaW5Ub3AiLCJUaXB0YXBFZGl0b3IiLCJzZXRFZGl0b3IiLCJsb2FkVGlwdGFwIiwiZGVzdHJveSIsInF1ZXJ5U2VsZWN0b3IiLCJFZGl0b3IiLCJsb2FkU2NyaXB0IiwiaW5pdGlhbGl6ZVRpcHRhcCIsImVkaXRvckVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5ld0VkaXRvciIsImVsZW1lbnQiLCJleHRlbnNpb25zIiwiU3RhcnRlcktpdCIsIkltYWdlIiwiY29uZmlndXJlIiwiSFRNTEF0dHJpYnV0ZXMiLCJjbGFzcyIsIkxpbmsiLCJvcGVuT25DbGljayIsIlRleHRBbGlnbiIsInR5cGVzIiwiSGlnaGxpZ2h0IiwiVW5kZXJsaW5lIiwib25VcGRhdGUiLCJnZXRIVE1MIiwiYWRkSW1hZ2UiLCJjaGFpbiIsImZvY3VzIiwic2V0SW1hZ2UiLCJydW4iLCJhZGRMaW5rIiwicHJvbXB0Iiwic2V0TGluayIsIlRvb2xiYXJCdXR0b24iLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiU2VwYXJhdG9yIiwidG9nZ2xlQm9sZCIsInRvZ2dsZUl0YWxpYyIsInRvZ2dsZVVuZGVybGluZSIsInRvZ2dsZUhpZ2hsaWdodCIsInRvZ2dsZUhlYWRpbmciLCJsZXZlbCIsInNldFRleHRBbGlnbiIsInRvZ2dsZUJ1bGxldExpc3QiLCJ0b2dnbGVPcmRlcmVkTGlzdCIsInRvZ2dsZUJsb2NrcXVvdGUiLCJ1bmRvIiwicmVkbyIsInJlcXVpcmUkJDAiLCJkaXN0TW9kdWxlIiwiX2ludGVyb3BEZWZhdWx0IiwiUmVhY3RfX2RlZmF1bHQiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJDb2x1bW5CbG9ja01hbmFnZXIiLCJjb2x1bW5JbmRleCIsIm9uVXBkYXRlQmxvY2tzIiwic2Vuc29ycyIsInVzZVNlbnNvcnMiLCJ1c2VTZW5zb3IiLCJQb2ludGVyU2Vuc29yIiwiS2V5Ym9hcmRTZW5zb3IiLCJjb29yZGluYXRlR2V0dGVyIiwic29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzIiwiZ2VuZXJhdGVJZCIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJhZGRCbG9ja1RvQ29sdW1uIiwiYXR0cmlidXRlcyIsInVwZGF0ZWRCbG9ja3MiLCJ1cGRhdGVDb2x1bW5CbG9jayIsImRlbGV0ZUNvbHVtbkJsb2NrIiwiaGFuZGxlRHJhZ0VuZCIsImFjdGl2ZSIsIm92ZXIiLCJvbGRJbmRleCIsImFycmF5TW92ZSIsIm1pbmlCdXR0b25TdHlsZSIsIkRuZENvbnRleHQiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJjbG9zZXN0Q2VudGVyIiwib25EcmFnRW5kIiwiU29ydGFibGVDb250ZXh0IiwiaXRlbXMiLCJzdHJhdGVneSIsInZlcnRpY2FsTGlzdFNvcnRpbmdTdHJhdGVneSIsIlNvcnRhYmxlQmxvY2siLCJvbkRlbGV0ZSIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwidXNlU29ydGFibGUiLCJDU1MiLCJUcmFuc2Zvcm0iLCJvcGFjaXR5IiwiaGFuZGxlQ29udGVudENoYW5nZSIsImF0dHJzIiwicmVuZGVyQmxvY2tDb250ZW50Iiwib25Nb3VzZURvd24iLCJleGVjQ29tbWFuZCIsInRvb2xiYXJCdXR0b25TdHlsZSIsInRpdGxlIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25CbHVyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJvdXRsaW5lIiwibGluZUhlaWdodCIsIkhlYWRpbmdUYWciLCJzbGljZSIsIm1hcmdpbiIsInZpZGVvSWQiLCJwb3NpdGlvbiIsInBhZGRpbmdCb3R0b20iLCJ0b3AiLCJsZWZ0IiwiYWxsb3dGdWxsU2NyZWVuIiwiaGFuZGxlQ29sdW1uQmxvY2tzVXBkYXRlIiwiY29sdW1uQmxvY2tzIiwidXBkYXRlZENvbHVtbnMiLCJjb2x1bW5zIiwiY29sdW1uQ291bnQiLCJwYXJzZUludCIsImZpbGwiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiXyIsImNvbEluZGV4IiwiYm9yZGVyQm90dG9tIiwiX2V4dGVuZHMiLCJ0b1VwcGVyQ2FzZSIsImJhY2tncm91bmQiLCJWaXN1YWxDb21wb3NlciIsInVwZGF0ZVZhbHVlIiwiYmxvY2tzVG9IdG1sIiwiY29sdW1uSHRtbCIsImNvbHVtbkNvbnRlbnQiLCJidXR0b25TdHlsZSIsIndoaXRlU3BhY2UiLCJ1c2VUcmFuc2xhdGlvbiIsImZsYXQiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkljb24iLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDdXN0b21VcGxvYWRFZGl0IiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7RUFBQTtFQUNBO0VBQ0E7RUFJQSxNQUFNQSxVQUF1QyxHQUFJQyxLQUFLLGlCQUNwREMsd0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLGVBQ0VELHdCQUFBLENBQUFDLGFBQUEsQ0FBQSxPQUFBLEVBQUE7RUFBT0MsRUFBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJLFFBQVEsQ0FBQ0M7RUFBSyxDQUFBLEVBQUMsUUFBYSxDQUFDLGVBQ25ESix3QkFBQSxDQUFBQyxhQUFBLENBQUEsT0FBQSxFQUFBO0VBQU9JLEVBQUFBLEVBQUUsRUFBRU4sS0FBSyxDQUFDSSxRQUFRLENBQUNDLElBQUs7RUFBQ0UsRUFBQUEsSUFBSSxFQUFDLE1BQU07RUFBQ0YsRUFBQUEsSUFBSSxFQUFDO0VBQU0sQ0FBRSxDQUN0RCxDQUNOOztFQ1hEO0VBQ0E7RUFDQTtFQUlBLFNBQVNHLEtBQUtBLENBQUNSLEtBQUssRUFBRTtJQUNwQixNQUFNO0VBQUVTLElBQUFBO0VBQU8sR0FBQyxHQUFHVCxLQUFLO0lBQ3hCLE1BQU1VLEdBQUcsR0FBRyxDQUE0REQseURBQUFBLEVBQUFBLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRCxHQUFHLENBQUUsQ0FBQTtJQUUzRixJQUFJLENBQUNBLEdBQUcsRUFBRTtFQUNSLElBQUEsb0JBQU9ULHdCQUFBLENBQUFDLGFBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxFQUFNLFVBQWMsQ0FBQztFQUM5QjtJQUVBLG9CQUNFRCx3QkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBO0VBQ0VVLElBQUFBLEdBQUcsRUFBRUYsR0FBSTtFQUNURyxJQUFBQSxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRSxHQUFHLElBQUksV0FBWTtFQUN0Q0MsSUFBQUEsS0FBSyxFQUFFO0VBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFNO0VB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S0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztFQUMxRCxLQUFJLE1BQU0sRUFBRSxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRztFQUMzRCxJQUFHOzs7RUFHSCxDQUFBLFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDcEMsR0FBRSxPQUFPLEtBQUssSUFBSSxLQUFLLEdBQUc7T0FDdEIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7T0FDMUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO01BQ3RCLEdBQUcsa0JBQWtCOzs7R0FHeEIsU0FBUyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUU7RUFDMUMsR0FBRSxPQUFPLFNBQVMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFO0VBQ3pDLEtBQUksS0FBSyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1NBQ2pILFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQzs7O0VBRzdDLEtBQUksT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLEdBQUcsR0FBRztTQUN0RCxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7U0FDdEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQzVDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxVQUFV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dUMsa0JBQUssRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDaEcsUUFBUXZDLHdCQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQy9ELENBQUM7O0VDVkR3YyxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFO0VBRTNCRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0MsZ0JBQWdCLEdBQUdBLFVBQWdCO0VBRTFERixPQUFPLENBQUNDLGNBQWMsQ0FBQ2xjLEtBQUssR0FBR0EsS0FBSztFQUVwQ2ljLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDcGIsYUFBYSxHQUFHQSxhQUFhO0VBRXBEbWIsT0FBTyxDQUFDQyxjQUFjLENBQUMvWixzQkFBc0IsR0FBR0Esc0JBQXNCO0VBRXRFOFosT0FBTyxDQUFDQyxjQUFjLENBQUNsWixnQkFBZ0IsR0FBR0EsZ0JBQWdCO0VBRTFEaVosT0FBTyxDQUFDQyxjQUFjLENBQUNsWSxhQUFhLEdBQUdBLGFBQWE7RUFFcERpWSxPQUFPLENBQUNDLGNBQWMsQ0FBQ3BYLGlCQUFpQixHQUFHQSxpQkFBaUI7RUFFNURtWCxPQUFPLENBQUNDLGNBQWMsQ0FBQ2hYLGdCQUFnQixHQUFHQSxnQkFBZ0I7RUFFMUQrVyxPQUFPLENBQUNDLGNBQWMsQ0FBQ2xXLG1CQUFtQixHQUFHQSxtQkFBbUI7RUFFaEVpVyxPQUFPLENBQUNDLGNBQWMsQ0FBQzFRLGFBQWEsR0FBR0EsYUFBYTtFQUVwRHlRLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDMVAsYUFBYSxHQUFHQSxhQUFhO0VBRXBEeVAsT0FBTyxDQUFDQyxjQUFjLENBQUMvTSxXQUFXLEdBQUdBLFdBQVc7RUFFaEQ4TSxPQUFPLENBQUNDLGNBQWMsQ0FBQ3RMLFlBQVksR0FBR0EsWUFBWTtFQUVsRHFMLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDdkosWUFBWSxHQUFHQSxZQUFZO0VBRWxEc0osT0FBTyxDQUFDQyxjQUFjLENBQUNiLGNBQWMsR0FBR0EsY0FBYztFQUV0RFksT0FBTyxDQUFDQyxjQUFjLENBQUNFLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUgsT0FBTyxDQUFDQyxjQUFjLENBQUNHLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUosT0FBTyxDQUFDQyxjQUFjLENBQUNJLG1CQUFtQixHQUFHQSxJQUFtQjs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMywyNCwyNSwyNiwyN119
