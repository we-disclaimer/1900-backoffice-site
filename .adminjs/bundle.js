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
    const mediaKey = `${fieldName}Url`; // mediaCapaUrl, etc.
    const mediaPath = record.params?.[mediaKey];
    const imageUrl = mediaPath ? `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${mediaPath}` : null;
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, property.label || 'Imagem'), imageUrl ? /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default"
    }, /*#__PURE__*/React__default.default.createElement("img", {
      src: imageUrl,
      alt: `Imagem - ${fieldName}`,
      style: {
        maxWidth: '100%',
        maxHeight: '300px',
        borderRadius: 8
      }
    })) : /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default",
      color: "grey60"
    }, "Nenhuma imagem dispon\xEDvel"));
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
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, PropTypes, AdminJSDesignSystem, ReactRouter, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50LmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFVwbG9hZEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMucHJvcGVydHkubmFtZX0+VXBsb2FkPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD17cHJvcHMucHJvcGVydHkubmFtZX0gdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRFZGl0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVGh1bWIocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7cmVjb3JkLnBhcmFtcy51cmx9YDtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiA8c3Bhbj5ObyBpbWFnZTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXtyZWNvcmQucGFyYW1zLmFsdCB8fCAnVGh1bWJuYWlsJ31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGh1bWIucHJvcFR5cGVzID0ge1xyXG4gIHJlY29yZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5mdW5jdGlvbiBHcm91cGVkUHJpY2VzKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJlY29VbmljbyA9IHJlY29yZC5wYXJhbXMucHJlY29VbmljbyB8fCAnJztcclxuICBjb25zdCBwcmVjb01lZGlvID0gcmVjb3JkLnBhcmFtcy5wcmVjb01lZGlvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvR3JhbmRlID0gcmVjb3JkLnBhcmFtcy5wcmVjb0dyYW5kZSB8fCAnJztcclxuICBjb25zdCBwcmVjb0luZGl2aWR1YWwgPSByZWNvcmQucGFyYW1zLnByZWNvSW5kaXZpZHVhbCB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD1cIjEwcHhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyDDmm5pY288L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29Vbmljb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29VbmljbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBNw6lkaW88L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29NZWRpb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29NZWRpbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBHcmFuZGU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29HcmFuZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvR3JhbmRlJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gSW5kaXZpZHVhbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0luZGl2aWR1YWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvSW5kaXZpZHVhbCcpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRQcmljZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExhYmVsLCBDaGVja0JveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBqYW50YXIgPSByZWNvcmQucGFyYW1zLmphbnRhciA/PyBmYWxzZTtcclxuICBjb25zdCBkZWxpdmVyeSA9IHJlY29yZC5wYXJhbXMuZGVsaXZlcnkgPz8gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUphbnRhciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2phbnRhcicsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlbGl2ZXJ5ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnZGVsaXZlcnknLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgVGlwb3MgZGUgY2FyZMOhcGlvc1xyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwibGdcIiBmbGV4V3JhcD1cIndyYXBcIiBtYj1cIjM2cHhcIj5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiamFudGFyXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiIGdhcD1cInNtXCI+XHJcbiAgICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICAgIGlkPVwiamFudGFyXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtqYW50YXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUphbnRhcn1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41cmVtJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICBEaXNwb27DrXZlbCBwYXJhIEphbnRhclxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjdXJzb3I9XCJwb2ludGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17ZGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEaXNwb27DrXZlbCBwYXJhIERlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuNXJlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpc3BvbmliaWxpdGllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgU2hvd1Byb2R1Y3RJbWFnZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgaWYgKCFyZWNvcmQgfHwgIXByb3BlcnR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGROYW1lID0gcHJvcGVydHkubmFtZTsgLy8gbWVkaWFDYXBhLCBtZWRpYVByaW5jaXBhbCwgZXRjLlxyXG4gIGNvbnN0IG1lZGlhS2V5ID0gYCR7ZmllbGROYW1lfVVybGA7IC8vIG1lZGlhQ2FwYVVybCwgZXRjLlxyXG4gIGNvbnN0IG1lZGlhUGF0aCA9IHJlY29yZC5wYXJhbXM/LlttZWRpYUtleV07XHJcblxyXG4gIGNvbnN0IGltYWdlVXJsID0gbWVkaWFQYXRoXHJcbiAgICA/IGBodHRwczovL2JhY2tvZmZpY2UtYXBwLWFzc2V0cy5zMy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS8ke21lZGlhUGF0aH1gXHJcbiAgICA6IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwiMzZweFwiPlxyXG4gICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsIHx8ICdJbWFnZW0nfTwvTGFiZWw+XHJcbiAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICBhbHQ9e2BJbWFnZW0gLSAke2ZpZWxkTmFtZX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICBOZW5odW1hIGltYWdlbSBkaXNwb27DrXZlbFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dQcm9kdWN0SW1hZ2U7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IEZvcm1hdHRlZERhdGU6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xyXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXTtcclxuXHJcbiAgaWYgKCFyYXdWYWx1ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyYXdWYWx1ZSk7XHJcbiAgY29uc3QgZm9ybWF0dGVkID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHtmb3JtYXR0ZWR9XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIHt0aW1lfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZERhdGU7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gUmVkaXJlY3REYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoJy9hZG1pbi9yZXNvdXJjZXMvUHJvZHV0b3MnKTsgLy8gPC0gc3Vic3RpdHVhIHBlbG8gc2V1IHJlc291cmNlIElEIHNlIGZvciBkaWZlcmVudGVcclxuICB9LCBbbmF2aWdhdGVdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0RGFzaGJvYXJkO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsIExhYmVsLCBCdXR0b24sIEljb24sXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBTeW5jUHJpY2VzQWN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBub3RpY2UgfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5vdGljZSAmJiBub3RpY2UubWVzc2FnZSkge1xyXG4gICAgICAvLyBWb2PDqiBwb2RlIHVzYXIgYSBub3RpZmljYcOnw6NvIGRvIEFkbWluSlMsIG1hcyBhcXVpIHPDsyB1bSBhbGVydCBzaW1wbGVzXHJcbiAgICAgIGFsZXJ0KG5vdGljZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LCBbbm90aWNlXSk7XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgdm9sdGFyIHBhcmEgYSBsaXN0YWdlbSBkZSBwcm9kdXRvc1xyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBTZSBxdWlzZXIgaXIgcGFyYSB1bWEgcm90YSBmaXhhOlxyXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluL3Jlc291cmNlcy9Qcm9kdXRvcyc7XHJcbiAgICAvLyBPdSBzw7Mgdm9sdGFyIG5hIG5hdmVnYcOnw6NvOlxyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHZhcmlhbnQ9XCJzdWNjZXNzXCIgcGFkZGluZz1cImxnXCI+XHJcblxyXG4gICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIG1iPVwiMzZweFwiIHN0eWxlPXt7IGNvbG9yOiAnIzBjNGEyYicsIG1hcmdpbkJvdHRvbTogJzNyZW0nIH19PlxyXG4gICAgICAgIEEgYcOnw6NvIGZvaSBleGVjdXRhZGEgY29tIHN1Y2Vzc28gZW0gdG9kb3Mgb3MgcHJvZHV0b3Mgc2VsZWNpb25hZG9zLlxyXG4gICAgICAgIFZlcmlmaXF1ZSBzZSBvcyBwcmXDp29zIGZvcmFtIGF0dWFsaXphZG9zIGNvcnJldGFtZW50ZS5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICBpY29uPVwicGx1c1wiXHJcbiAgICAgID5cclxuICAgICAgICB7JzwgVm9sdGFyIHBhcmEgbGlzdGFnZW0nfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW5jUHJpY2VzQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBEcm9wWm9uZSwgRHJvcFpvbmVJdGVtLCBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBFZGl0ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZDtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KTtcbiAgICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSk7XG4gICAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGl0IG1lYW5zIG1lYW5zIHRoYXQgc29tZW9uZSBoaXQgc2F2ZSBhbmQgbmV3IGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGZsaWVzVG9VcGxvYWQgc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgICAgIGlmICgodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSBvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiAhb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggIT09IG9yaWdpbmFsS2V5Lmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHNldE9yaWdpbmFsS2V5KGtleSk7XG4gICAgICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKFtdKTtcbiAgICAgICAgfVxuICAgIH0sIFtrZXksIG9yaWdpbmFsS2V5XSk7XG4gICAgY29uc3Qgb25VcGxvYWQgPSAoZmlsZXMpID0+IHtcbiAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcyk7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgbnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihzaW5nbGVLZXkpO1xuICAgICAgICBjb25zdCBmaWxlc1RvRGVsZXRlID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSkgfHwgW107XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgubWFwKChjdXJyZW50UGF0aCwgaSkgPT4gKGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsKSk7XG4gICAgICAgICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSwgWy4uLmZpbGVzVG9EZWxldGUsIGluZGV4XSk7XG4gICAgICAgICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZSwgeyBvbkNoYW5nZTogb25VcGxvYWQsIG11bHRpcGxlOiBjdXN0b20ubXVsdGlwbGUsIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzLFxuICAgICAgICAgICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgICAgICAgfSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSksXG4gICAgICAgICFjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIHBhdGggJiYgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmIGZpbGUgIT09IG51bGwgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGZpbGVuYW1lOiBrZXksIHNyYzogcGF0aCwgb25SZW1vdmU6IGhhbmRsZVJlbW92ZSB9KSksXG4gICAgICAgIGN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYga2V5Lmxlbmd0aCAmJiBwYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGtleS5tYXAoKHNpbmdsZUtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgcmVtb3ZlIGl0ZW1zIHdlIHNldCBvbmx5IHBhdGggaW5kZXggdG8gbnVsbHMuXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBtYWludGFpbiBhbGwgdGhlIGluZGV4ZXMuIFNvIGhlcmUgd2Ugc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZCBhbmQgZGlzcGxheSBvbmx5IHdoYXQgd2FzIGxlZnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF07XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsga2V5OiBzaW5nbGVLZXksIGZpbGVuYW1lOiBzaW5nbGVLZXksIHNyYzogcGF0aFtpbmRleF0sIG9uUmVtb3ZlOiAoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpIH0pKSA6ICcnO1xuICAgICAgICB9KSkpIDogJycpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAgICdhdWRpby9hYWMnLFxuICAgICdhdWRpby9taWRpJyxcbiAgICAnYXVkaW8veC1taWRpJyxcbiAgICAnYXVkaW8vbXBlZycsXG4gICAgJ2F1ZGlvL29nZycsXG4gICAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICAgJ2F1ZGlvL29wdXMnLFxuICAgICdhdWRpby93YXYnLFxuICAgICdhdWRpby93ZWJtJyxcbiAgICAnYXVkaW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgICAndmlkZW8vbXBlZycsXG4gICAgJ3ZpZGVvL29nZycsXG4gICAgJ3ZpZGVvL21wMnQnLFxuICAgICd2aWRlby93ZWJtJyxcbiAgICAndmlkZW8vM2dwcCcsXG4gICAgJ3ZpZGVvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICAgJ2ltYWdlL2JtcCcsXG4gICAgJ2ltYWdlL2dpZicsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9wbmcnLFxuICAgICdpbWFnZS9zdmcreG1sJyxcbiAgICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgICAnaW1hZ2UvdGlmZicsXG4gICAgJ2ltYWdlL3dlYnAnLFxuXTtcbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl07XG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl07XG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgICAndGV4dC9jc3MnLFxuICAgICd0ZXh0L2NzdicsXG4gICAgJ3RleHQvaHRtbCcsXG4gICAgJ3RleHQvY2FsZW5kYXInLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvcGxhaW4nLFxuICAgICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICd0ZXh0L3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgICAnYXBwbGljYXRpb24vcGRmJyxcbl07XG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgICAnZm9udC9vdGYnLFxuICAgICdmb250L3R0ZicsXG4gICAgJ2ZvbnQvd29mZicsXG4gICAgJ2ZvbnQvd29mZjInLFxuXTtcbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgICAnYXBwbGljYXRpb24veC1zaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgICAndm5kLnZpc2lvJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAgIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAgIC4uLlRleHRNaW1lVHlwZXMsXG4gICAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgICAuLi5Gb250TWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuXTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXVkaW9NaW1lVHlwZXMsIEltYWdlTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlLmpzJztcbmNvbnN0IFNpbmdsZUZpbGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhdGgsIG1pbWVUeXBlLCB3aWR0aCB9ID0gcHJvcHM7XG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwYXRoLCBzdHlsZTogeyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfSwgYWx0OiBuYW1lIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWltZVR5cGUgJiYgQXVkaW9NaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCB7IGNvbnRyb2xzOiB0cnVlLCBzcmM6IHBhdGggfSxcbiAgICAgICAgICAgICAgICBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYXVkaW9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyYWNrXCIsIHsga2luZDogXCJjYXB0aW9uc1wiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwiYVwiLCBocmVmOiBwYXRoLCBtbDogXCJkZWZhdWx0XCIsIHNpemU6IFwic21cIiwgcm91bmRlZDogdHJ1ZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJEb2N1bWVudERvd25sb2FkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1yOiBcImRlZmF1bHRcIiB9KSxcbiAgICAgICAgICAgIG5hbWUpKSk7XG59O1xuY29uc3QgRmlsZSA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgbGV0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgICAgICYmIGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSk7XG4gICAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBwYXRoOiBwYXRoLCBuYW1lOiBuYW1lLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZSB9KSk7XG4gICAgfVxuICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBjdXN0b20ub3B0cy5iYXNlVXJsIHx8ICcnO1xuICAgICAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBrZXk6IHNpbmdsZVBhdGgsIHBhdGg6IHNpbmdsZVBhdGgsIG5hbWU6IG5hbWVbaW5kZXhdLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZVtpbmRleF0gfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IDEwMCwgLi4ucHJvcHMgfSkpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IFNob3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogXCIxMDAlXCIsIC4uLnByb3BzIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hvdztcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IEN1c3RvbVVwbG9hZEVkaXQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkN1c3RvbVVwbG9hZEVkaXQgPSBDdXN0b21VcGxvYWRFZGl0XG5pbXBvcnQgVGh1bWIgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvdGh1bWInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlRodW1iID0gVGh1bWJcbmltcG9ydCBHcm91cGVkUHJpY2VzIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyb3VwZWQtcHJpY2VzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Hcm91cGVkUHJpY2VzID0gR3JvdXBlZFByaWNlc1xuaW1wb3J0IEdyb3VwZWREaXNwb25pYmlsaXRpZXMgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZ3JvdXBlZC1kaXNwb25pYmlsaXRpZXMnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkdyb3VwZWREaXNwb25pYmlsaXRpZXMgPSBHcm91cGVkRGlzcG9uaWJpbGl0aWVzXG5pbXBvcnQgU2hvd1Byb2R1Y3RJbWFnZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaG93UHJvZHVjdEltYWdlID0gU2hvd1Byb2R1Y3RJbWFnZVxuaW1wb3J0IEZvcm1hdHRlZERhdGUgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZm9ybWF0dGVkLWRhdGUnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkZvcm1hdHRlZERhdGUgPSBGb3JtYXR0ZWREYXRlXG5pbXBvcnQgUmVkaXJlY3REYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcmVkaXJlY3QtZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5SZWRpcmVjdERhc2hib2FyZCA9IFJlZGlyZWN0RGFzaGJvYXJkXG5pbXBvcnQgU3luY1ByaWNlc0FjdGlvbiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU3luY1ByaWNlc0FjdGlvbiA9IFN5bmNQcmljZXNBY3Rpb25cbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnQiXSwibmFtZXMiOlsiVXBsb2FkRWRpdCIsInByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaHRtbEZvciIsInByb3BlcnR5IiwibmFtZSIsImlkIiwidHlwZSIsIlRodW1iIiwicmVjb3JkIiwidXJsIiwicGFyYW1zIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkdyb3VwZWRQcmljZXMiLCJvbkNoYW5nZSIsInByZWNvVW5pY28iLCJwcmVjb01lZGlvIiwicHJlY29HcmFuZGUiLCJwcmVjb0luZGl2aWR1YWwiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJCb3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1yIiwibWIiLCJGb3JtR3JvdXAiLCJMYWJlbCIsIklucHV0Iiwic3RlcCIsIkdyb3VwZWREaXNwb25pYmlsaXRpZXMiLCJqYW50YXIiLCJkZWxpdmVyeSIsImhhbmRsZUNoYW5nZUphbnRhciIsImUiLCJjaGVja2VkIiwiaGFuZGxlQ2hhbmdlRGVsaXZlcnkiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwiQ2hlY2tCb3giLCJtYXJnaW5SaWdodCIsIlNob3dQcm9kdWN0SW1hZ2UiLCJmaWVsZE5hbWUiLCJtZWRpYUtleSIsIm1lZGlhUGF0aCIsImltYWdlVXJsIiwibGFiZWwiLCJtdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJGb3JtYXR0ZWREYXRlIiwicmF3VmFsdWUiLCJwYXRoIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJ0aW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIlJlZGlyZWN0RGFzaGJvYXJkIiwibmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZUVmZmVjdCIsIlN5bmNQcmljZXNBY3Rpb24iLCJub3RpY2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJoYW5kbGVCYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJ2YXJpYW50IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwidXNlVHJhbnNsYXRpb24iLCJmbGF0IiwidXNlU3RhdGUiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkljb24iLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDdXN0b21VcGxvYWRFZGl0IiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztFQUFBO0VBQ0E7RUFDQTtFQUlBLE1BQU1BLFVBQXVDLEdBQUlDLEtBQUssaUJBQ3BEQyxzQkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsZUFDRUQsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE9BQUEsRUFBQTtFQUFPQyxFQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksUUFBUSxDQUFDQztFQUFLLENBQUEsRUFBQyxRQUFhLENBQUMsZUFDbkRKLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxPQUFBLEVBQUE7RUFBT0ksRUFBQUEsRUFBRSxFQUFFTixLQUFLLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSztFQUFDRSxFQUFBQSxJQUFJLEVBQUMsTUFBTTtFQUFDRixFQUFBQSxJQUFJLEVBQUM7RUFBTSxDQUFFLENB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
