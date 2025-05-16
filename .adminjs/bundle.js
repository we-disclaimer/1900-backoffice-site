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
    }, /*#__PURE__*/React__default.default.createElement(designSystem.CheckBox, {
      id: "jantar",
      checked: jantar,
      onChange: handleChangeJantar,
      "aria-label": "Dispon\xEDvel para Jantar"
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      htmlFor: "jantar"
    }, "Dispon\xEDvel para Jantar")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: "sm"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.CheckBox, {
      id: "delivery",
      checked: delivery,
      onChange: handleChangeDelivery,
      "aria-label": "Dispon\xEDvel para Delivery"
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      htmlFor: "delivery"
    }, "Dispon\xEDvel para Delivery"))));
  };

  /* eslint-disable react/function-component-definition */
  /* eslint-disable linebreak-style */
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/destructuring-assignment */
  const ShowProductImage = ({
    record
  }) => {
    const imageUrl = `https://backoffice-app-assets.s3.us-east-1.amazonaws.com/${record?.params?.mediaUrl}` || null;
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "36px"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Imagem do Produto"), imageUrl ? /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "default"
    }, /*#__PURE__*/React__default.default.createElement("img", {
      src: imageUrl,
      alt: "Imagem do Produto",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zeW5jLWJ1dHRvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2ZpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50LmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuLy8gYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3hcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFVwbG9hZEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMucHJvcGVydHkubmFtZX0+VXBsb2FkPC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD17cHJvcHMucHJvcGVydHkubmFtZX0gdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIC8+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRFZGl0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVGh1bWIocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYmFja29mZmljZS1hcHAtYXNzZXRzLnMzLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7cmVjb3JkLnBhcmFtcy51cmx9YDtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiA8c3Bhbj5ObyBpbWFnZTwvc3Bhbj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgYWx0PXtyZWNvcmQucGFyYW1zLmFsdCB8fCAnVGh1bWJuYWlsJ31cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGh1bWIucHJvcFR5cGVzID0ge1xyXG4gIHJlY29yZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1iO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5mdW5jdGlvbiBHcm91cGVkUHJpY2VzKHByb3BzKSB7XHJcbiAgY29uc3QgeyByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJlY29VbmljbyA9IHJlY29yZC5wYXJhbXMucHJlY29VbmljbyB8fCAnJztcclxuICBjb25zdCBwcmVjb01lZGlvID0gcmVjb3JkLnBhcmFtcy5wcmVjb01lZGlvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvR3JhbmRlID0gcmVjb3JkLnBhcmFtcy5wcmVjb0dyYW5kZSB8fCAnJztcclxuICBjb25zdCBwcmVjb0luZGl2aWR1YWwgPSByZWNvcmQucGFyYW1zLnByZWNvSW5kaXZpZHVhbCB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGdhcD1cIjEwcHhcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyDDmm5pY288L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29Vbmljb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29VbmljbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBNw6lkaW88L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29NZWRpb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29NZWRpbycpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHdpZHRoPVwiMjUlXCJcclxuICAgICAgICBtcj1cIjEwcHhcIlxyXG4gICAgICAgIG1iPVwiMzZweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBHcmFuZGU8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJlY29HcmFuZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvR3JhbmRlJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHdpZHRoPVwiMjUlXCI+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxMYWJlbD5QcmXDp28gSW5kaXZpZHVhbDwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0luZGl2aWR1YWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ByZWNvSW5kaXZpZHVhbCcpfVxyXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRQcmljZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExhYmVsLCBDaGVja0JveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5jb25zdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBqYW50YXIgPSByZWNvcmQucGFyYW1zLmphbnRhciA/PyBmYWxzZTtcclxuICBjb25zdCBkZWxpdmVyeSA9IHJlY29yZC5wYXJhbXMuZGVsaXZlcnkgPz8gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUphbnRhciA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgb25DaGFuZ2UoJ2phbnRhcicsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlbGl2ZXJ5ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnZGVsaXZlcnknLCBlLnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgVGlwb3MgZGUgY2FyZMOhcGlvc1xyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZ2FwPVwibGdcIiBmbGV4V3JhcD1cIndyYXBcIiBtYj1cIjM2cHhcIj5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICBpZD1cImphbnRhclwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2phbnRhcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUphbnRhcn1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc3BvbsOtdmVsIHBhcmEgSmFudGFyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImphbnRhclwiPkRpc3BvbsOtdmVsIHBhcmEgSmFudGFyPC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPVwiNTAlXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZ2FwPVwic21cIj5cclxuICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICBpZD1cImRlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgY2hlY2tlZD17ZGVsaXZlcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VEZWxpdmVyeX1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc3BvbsOtdmVsIHBhcmEgRGVsaXZlcnlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZGVsaXZlcnlcIj5EaXNwb27DrXZlbCBwYXJhIERlbGl2ZXJ5PC9MYWJlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpc3BvbmliaWxpdGllcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IFNob3dQcm9kdWN0SW1hZ2U6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9iYWNrb2ZmaWNlLWFwcC1hc3NldHMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHtyZWNvcmQ/LnBhcmFtcz8ubWVkaWFVcmx9YCB8fCBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtYj1cIjM2cHhcIj5cclxuICAgICAgPExhYmVsPkltYWdlbSBkbyBQcm9kdXRvPC9MYWJlbD5cclxuICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgIDxCb3ggbXQ9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGFsdD1cIkltYWdlbSBkbyBQcm9kdXRvXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnMzAwcHgnLCBib3JkZXJSYWRpdXM6IDggfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIiBjb2xvcj1cImdyZXk2MFwiPlxyXG4gICAgICAgICAgTmVuaHVtYSBpbWFnZW0gZGlzcG9uw612ZWxcclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93UHJvZHVjdEltYWdlO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBGb3JtYXR0ZWREYXRlOiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAoeyByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcclxuICBjb25zdCByYXdWYWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF07XHJcblxyXG4gIGlmICghcmF3VmFsdWUpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUocmF3VmFsdWUpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZCA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICB9KTtcclxuICBjb25zdCB0aW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICB7Zm9ybWF0dGVkfVxyXG4gICAgICB7JyAnfVxyXG4gICAgICB7dGltZX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWREYXRlO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFJlZGlyZWN0RGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG5hdmlnYXRlKCcvYWRtaW4vcmVzb3VyY2VzL1Byb2R1dG9zJyk7IC8vIDwtIHN1YnN0aXR1YSBwZWxvIHNldSByZXNvdXJjZSBJRCBzZSBmb3IgZGlmZXJlbnRlXHJcbiAgfSwgW25hdmlnYXRlXSk7XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdERhc2hib2FyZDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LCBMYWJlbCwgQnV0dG9uLCBJY29uLFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5cclxuY29uc3QgU3luY1ByaWNlc0FjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm90aWNlIH0gPSBwcm9wcztcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3RpY2UgJiYgbm90aWNlLm1lc3NhZ2UpIHtcclxuICAgICAgLy8gVm9jw6ogcG9kZSB1c2FyIGEgbm90aWZpY2HDp8OjbyBkbyBBZG1pbkpTLCBtYXMgYXF1aSBzw7MgdW0gYWxlcnQgc2ltcGxlc1xyXG4gICAgICBhbGVydChub3RpY2UubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSwgW25vdGljZV0pO1xyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIHZvbHRhciBwYXJhIGEgbGlzdGFnZW0gZGUgcHJvZHV0b3NcclxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgLy8gU2UgcXVpc2VyIGlyIHBhcmEgdW1hIHJvdGEgZml4YTpcclxuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hZG1pbi9yZXNvdXJjZXMvUHJvZHV0b3MnO1xyXG4gICAgLy8gT3Ugc8OzIHZvbHRhciBuYSBuYXZlZ2HDp8OjbzpcclxuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB2YXJpYW50PVwic3VjY2Vzc1wiIHBhZGRpbmc9XCJsZ1wiPlxyXG5cclxuICAgICAgPEJveCBtdD1cImRlZmF1bHRcIiBtYj1cIjM2cHhcIiBzdHlsZT17eyBjb2xvcjogJyMwYzRhMmInLCBtYXJnaW5Cb3R0b206ICczcmVtJyB9fT5cclxuICAgICAgICBBIGHDp8OjbyBmb2kgZXhlY3V0YWRhIGNvbSBzdWNlc3NvIGVtIHRvZG9zIG9zIHByb2R1dG9zIHNlbGVjaW9uYWRvcy5cclxuICAgICAgICBWZXJpZmlxdWUgc2Ugb3MgcHJlw6dvcyBmb3JhbSBhdHVhbGl6YWRvcyBjb3JyZXRhbWVudGUuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgaWNvbj1cInBsdXNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgeyc8IFZvbHRhciBwYXJhIGxpc3RhZ2VtJ31cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3luY1ByaWNlc0FjdGlvbjtcclxuIiwiaW1wb3J0IHsgRHJvcFpvbmUsIERyb3Bab25lSXRlbSwgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgRWRpdCA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSByZWNvcmQ7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBjb25zdCBrZXkgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgZmlsZSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQcm9wZXJ0eSk7XG4gICAgY29uc3QgW29yaWdpbmFsS2V5LCBzZXRPcmlnaW5hbEtleV0gPSB1c2VTdGF0ZShrZXkpO1xuICAgIGNvbnN0IFtmaWxlc1RvVXBsb2FkLCBzZXRGaWxlc1RvVXBsb2FkXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBpdCBtZWFucyBtZWFucyB0aGF0IHNvbWVvbmUgaGl0IHNhdmUgYW5kIG5ldyBmaWxlIGhhcyBiZWVuIHVwbG9hZGVkXG4gICAgICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiB1c2VyIHR1cm5zIG9mZiByZWRpcmVjdCBhZnRlciBuZXcvZWRpdFxuICAgICAgICBpZiAoKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBzZXRPcmlnaW5hbEtleShrZXkpO1xuICAgICAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChbXSk7XG4gICAgICAgIH1cbiAgICB9LCBba2V5LCBvcmlnaW5hbEtleV0pO1xuICAgIGNvbnN0IG9uVXBsb2FkID0gKGZpbGVzKSA9PiB7XG4gICAgICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpO1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBmaWxlcyk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIG51bGwpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlTXVsdGlSZW1vdmUgPSAoc2luZ2xlS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSkgfHwgW10pLmluZGV4T2Yoc2luZ2xlS2V5KTtcbiAgICAgICAgY29uc3QgZmlsZXNUb0RlbGV0ZSA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHkpIHx8IFtdO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLm1hcCgoY3VycmVudFBhdGgsIGkpID0+IChpICE9PSBpbmRleCA/IGN1cnJlbnRQYXRoIDogbnVsbCkpO1xuICAgICAgICAgICAgbGV0IG5ld1BhcmFtcyA9IGZsYXQuc2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5maWxlc1RvRGVsZXRlUHJvcGVydHksIFsuLi5maWxlc1RvRGVsZXRlLCBpbmRleF0pO1xuICAgICAgICAgICAgbmV3UGFyYW1zID0gZmxhdC5zZXQobmV3UGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSwgbmV3UGF0aCk7XG4gICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucmVjb3JkLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjYW5ub3QgcmVtb3ZlIGZpbGUgd2hlbiB0aGVyZSBhcmUgbm8gdXBsb2FkZWQgZmlsZXMgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmUsIHsgb25DaGFuZ2U6IG9uVXBsb2FkLCBtdWx0aXBsZTogY3VzdG9tLm11bHRpcGxlLCB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgIG1pbWVUeXBlczogY3VzdG9tLm1pbWVUeXBlcyxcbiAgICAgICAgICAgICAgICBtYXhTaXplOiBjdXN0b20ubWF4U2l6ZSxcbiAgICAgICAgICAgIH0sIGZpbGVzOiBmaWxlc1RvVXBsb2FkIH0pLFxuICAgICAgICAhY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBwYXRoICYmICFmaWxlc1RvVXBsb2FkLmxlbmd0aCAmJiBmaWxlICE9PSBudWxsICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBmaWxlbmFtZToga2V5LCBzcmM6IHBhdGgsIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUgfSkpLFxuICAgICAgICBjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIGtleS5sZW5ndGggJiYgcGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBrZXkubWFwKChzaW5nbGVLZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIHdlIHJlbW92ZSBpdGVtcyB3ZSBzZXQgb25seSBwYXRoIGluZGV4IHRvIG51bGxzLlxuICAgICAgICAgICAgLy8ga2V5IGlzIHN0aWxsIHRoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gbWFpbnRhaW4gYWxsIHRoZSBpbmRleGVzLiBTbyBoZXJlIHdlIHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZXJlIHJlbW92ZWQgYW5kIGRpc3BsYXkgb25seSB3aGF0IHdhcyBsZWZ0XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHBhdGhbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGtleTogc2luZ2xlS2V5LCBmaWxlbmFtZTogc2luZ2xlS2V5LCBzcmM6IHBhdGhbaW5kZXhdLCBvblJlbW92ZTogKCkgPT4gaGFuZGxlTXVsdGlSZW1vdmUoc2luZ2xlS2V5KSB9KSkgOiAnJztcbiAgICAgICAgfSkpKSA6ICcnKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImV4cG9ydCBjb25zdCBBdWRpb01pbWVUeXBlcyA9IFtcbiAgICAnYXVkaW8vYWFjJyxcbiAgICAnYXVkaW8vbWlkaScsXG4gICAgJ2F1ZGlvL3gtbWlkaScsXG4gICAgJ2F1ZGlvL21wZWcnLFxuICAgICdhdWRpby9vZ2cnLFxuICAgICdhcHBsaWNhdGlvbi9vZ2cnLFxuICAgICdhdWRpby9vcHVzJyxcbiAgICAnYXVkaW8vd2F2JyxcbiAgICAnYXVkaW8vd2VibScsXG4gICAgJ2F1ZGlvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICAgJ3ZpZGVvL3gtbXN2aWRlbycsXG4gICAgJ3ZpZGVvL21wZWcnLFxuICAgICd2aWRlby9vZ2cnLFxuICAgICd2aWRlby9tcDJ0JyxcbiAgICAndmlkZW8vd2VibScsXG4gICAgJ3ZpZGVvLzNncHAnLFxuICAgICd2aWRlby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IEltYWdlTWltZVR5cGVzID0gW1xuICAgICdpbWFnZS9ibXAnLFxuICAgICdpbWFnZS9naWYnLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UvcG5nJyxcbiAgICAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbicsXG4gICAgJ2ltYWdlL3RpZmYnLFxuICAgICdpbWFnZS93ZWJwJyxcbl07XG5leHBvcnQgY29uc3QgQ29tcHJlc3NlZE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgICAnYXBwbGljYXRpb24veC1iemlwMicsXG4gICAgJ2FwcGxpY2F0aW9uL2d6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dO1xuZXhwb3J0IGNvbnN0IERvY3VtZW50TWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnLFxuICAgICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJyxcbiAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInLFxuICAgICdhcHBsaWNhdGlvbi9ydGYnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5dO1xuZXhwb3J0IGNvbnN0IFRleHRNaW1lVHlwZXMgPSBbXG4gICAgJ3RleHQvY3NzJyxcbiAgICAndGV4dC9jc3YnLFxuICAgICd0ZXh0L2h0bWwnLFxuICAgICd0ZXh0L2NhbGVuZGFyJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICd0ZXh0L3BsYWluJyxcbiAgICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgICAnYXBwbGljYXRpb24veG1sJyxcbiAgICAndGV4dC94bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3BkZicsXG5dO1xuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2ZvbnQvb3RmJyxcbiAgICAnZm9udC90dGYnLFxuICAgICdmb250L3dvZmYnLFxuICAgICdmb250L3dvZmYyJyxcbl07XG5leHBvcnQgY29uc3QgT3RoZXJNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtY3NoJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2gnLFxuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG4gICAgJ3ZuZC52aXNpbycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnLFxuXTtcbmV4cG9ydCBjb25zdCBNaW1lVHlwZXMgPSBbXG4gICAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gICAgLi4uVmlkZW9NaW1lVHlwZXMsXG4gICAgLi4uSW1hZ2VNaW1lVHlwZXMsXG4gICAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgICAuLi5Eb2N1bWVudE1pbWVUeXBlcyxcbiAgICAuLi5UZXh0TWltZVR5cGVzLFxuICAgIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG4gICAgLi4uRm9udE1pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbl07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyc7XG5jb25zdCBTaW5nbGVGaWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzO1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBJbWFnZU1pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogcGF0aCwgc3R5bGU6IHsgbWF4SGVpZ2h0OiB3aWR0aCwgbWF4V2lkdGg6IHdpZHRoIH0sIGFsdDogbmFtZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEF1ZGlvTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgeyBjb250cm9sczogdHJ1ZSwgc3JjOiBwYXRoIH0sXG4gICAgICAgICAgICAgICAgXCJZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImF1ZGlvXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiLCB7IGtpbmQ6IFwiY2FwdGlvbnNcIiB9KSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGFzOiBcImFcIiwgaHJlZjogcGF0aCwgbWw6IFwiZGVmYXVsdFwiLCBzaXplOiBcInNtXCIsIHJvdW5kZWQ6IHRydWUsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiRG9jdW1lbnREb3dubG9hZFwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtcjogXCJkZWZhdWx0XCIgfSksXG4gICAgICAgICAgICBuYW1lKSkpO1xufTtcbmNvbnN0IEZpbGUgPSAoeyB3aWR0aCwgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5O1xuICAgIGxldCBwYXRoID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgPyBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA6IGN1c3RvbS5rZXlQcm9wZXJ0eSk7XG4gICAgY29uc3QgbWltZVR5cGUgPSBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eVxuICAgICAgICAmJiBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLm1pbWVUeXBlUHJvcGVydHkpO1xuICAgIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgICAgICBwYXRoID0gYCR7Y3VzdG9tLm9wdHMuYmFzZVVybH0vJHtuYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsgcGF0aDogcGF0aCwgbmFtZTogbmFtZSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGUgfSkpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gY3VzdG9tLm9wdHMuYmFzZVVybCB8fCAnJztcbiAgICAgICAgcGF0aCA9IHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gYCR7YmFzZVVybH0vJHtuYW1lW2luZGV4XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZUZpbGUsIHsga2V5OiBzaW5nbGVQYXRoLCBwYXRoOiBzaW5nbGVQYXRoLCBuYW1lOiBuYW1lW2luZGV4XSwgd2lkdGg6IHdpZHRoLCBtaW1lVHlwZTogbWltZVR5cGVbaW5kZXhdIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiAxMDAsIC4uLnByb3BzIH0pKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWxlIGZyb20gJy4vZmlsZS5qcyc7XG5jb25zdCBTaG93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IFwiMTAwJVwiLCAuLi5wcm9wcyB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNob3c7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBDdXN0b21VcGxvYWRFZGl0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5DdXN0b21VcGxvYWRFZGl0ID0gQ3VzdG9tVXBsb2FkRWRpdFxuaW1wb3J0IFRodW1iIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RodW1iJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UaHVtYiA9IFRodW1iXG5pbXBvcnQgR3JvdXBlZFByaWNlcyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZFByaWNlcyA9IEdyb3VwZWRQcmljZXNcbmltcG9ydCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyb3VwZWQtZGlzcG9uaWJpbGl0aWVzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Hcm91cGVkRGlzcG9uaWJpbGl0aWVzID0gR3JvdXBlZERpc3BvbmliaWxpdGllc1xuaW1wb3J0IFNob3dQcm9kdWN0SW1hZ2UgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc2hvdy1tZWRpYSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2hvd1Byb2R1Y3RJbWFnZSA9IFNob3dQcm9kdWN0SW1hZ2VcbmltcG9ydCBGb3JtYXR0ZWREYXRlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Gb3JtYXR0ZWREYXRlID0gRm9ybWF0dGVkRGF0ZVxuaW1wb3J0IFJlZGlyZWN0RGFzaGJvYXJkIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3JlZGlyZWN0LWRhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUmVkaXJlY3REYXNoYm9hcmQgPSBSZWRpcmVjdERhc2hib2FyZFxuaW1wb3J0IFN5bmNQcmljZXNBY3Rpb24gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvc3luYy1idXR0b24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlN5bmNQcmljZXNBY3Rpb24gPSBTeW5jUHJpY2VzQWN0aW9uXG5pbXBvcnQgVXBsb2FkRWRpdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkRWRpdENvbXBvbmVudCA9IFVwbG9hZEVkaXRDb21wb25lbnRcbmltcG9ydCBVcGxvYWRMaXN0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRMaXN0Q29tcG9uZW50ID0gVXBsb2FkTGlzdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZFNob3dDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZFNob3dDb21wb25lbnQgPSBVcGxvYWRTaG93Q29tcG9uZW50Il0sIm5hbWVzIjpbIlVwbG9hZEVkaXQiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImh0bWxGb3IiLCJwcm9wZXJ0eSIsIm5hbWUiLCJpZCIsInR5cGUiLCJUaHVtYiIsInJlY29yZCIsInVybCIsInBhcmFtcyIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJHcm91cGVkUHJpY2VzIiwib25DaGFuZ2UiLCJwcmVjb1VuaWNvIiwicHJlY29NZWRpbyIsInByZWNvR3JhbmRlIiwicHJlY29JbmRpdmlkdWFsIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiQm94IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtciIsIm1iIiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJJbnB1dCIsInN0ZXAiLCJHcm91cGVkRGlzcG9uaWJpbGl0aWVzIiwiamFudGFyIiwiZGVsaXZlcnkiLCJoYW5kbGVDaGFuZ2VKYW50YXIiLCJlIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZURlbGl2ZXJ5IiwiZm9udFdlaWdodCIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsIkNoZWNrQm94IiwiU2hvd1Byb2R1Y3RJbWFnZSIsImltYWdlVXJsIiwibWVkaWFVcmwiLCJtdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJGb3JtYXR0ZWREYXRlIiwicmF3VmFsdWUiLCJwYXRoIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJ0aW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsIlJlZGlyZWN0RGFzaGJvYXJkIiwibmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZUVmZmVjdCIsIlN5bmNQcmljZXNBY3Rpb24iLCJub3RpY2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJoYW5kbGVCYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJ2YXJpYW50IiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwidXNlVHJhbnNsYXRpb24iLCJmbGF0IiwidXNlU3RhdGUiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkljb24iLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDdXN0b21VcGxvYWRFZGl0IiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztFQUFBO0VBQ0E7RUFDQTtFQUlBLE1BQU1BLFVBQXVDLEdBQUlDLEtBQUssaUJBQ3BEQyxzQkFBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsZUFDRUQsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLE9BQUEsRUFBQTtFQUFPQyxFQUFBQSxPQUFP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QUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztFQUM3RztFQUNBLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0VBQzVDLFFBQVEsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRTtFQUNqRCxRQUFRLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNFO0VBQ0EsSUFBSSxRQUFRQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQ0Esc0JBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1TixDQUFDOztFQ3pDRCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssTUFBTUEsc0JBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7O0VDRTdFLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLO0VBQ3hCLElBQUksTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUs7RUFDOUIsSUFBSSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRzZGLHNCQUFjLEVBQUU7RUFDbEQsSUFBSSxRQUFRN0Ysc0JBQUssQ0FBQyxhQUFhLENBQUNzQyxzQkFBUyxFQUFFLElBQUk7RUFDL0MsUUFBUXRDLHNCQUFLLENBQUMsYUFBYSxDQUFDdUMsa0JBQUssRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDaEcsUUFBUXZDLHNCQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQy9ELENBQUM7O0VDVkRtRyxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFO0VBRTNCRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0MsZ0JBQWdCLEdBQUdBLFVBQWdCO0VBRTFERixPQUFPLENBQUNDLGNBQWMsQ0FBQzdGLEtBQUssR0FBR0EsS0FBSztFQUVwQzRGLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDL0UsYUFBYSxHQUFHQSxhQUFhO0VBRXBEOEUsT0FBTyxDQUFDQyxjQUFjLENBQUMxRCxzQkFBc0IsR0FBR0Esc0JBQXNCO0VBRXRFeUQsT0FBTyxDQUFDQyxjQUFjLENBQUMvQyxnQkFBZ0IsR0FBR0EsZ0JBQWdCO0VBRTFEOEMsT0FBTyxDQUFDQyxjQUFjLENBQUN2QyxhQUFhLEdBQUdBLGFBQWE7RUFFcERzQyxPQUFPLENBQUNDLGNBQWMsQ0FBQ3pCLGlCQUFpQixHQUFHQSxpQkFBaUI7RUFFNUR3QixPQUFPLENBQUNDLGNBQWMsQ0FBQ3JCLGdCQUFnQixHQUFHQSxnQkFBZ0I7RUFFMURvQixPQUFPLENBQUNDLGNBQWMsQ0FBQ0UsbUJBQW1CLEdBQUdBLElBQW1CO0VBRWhFSCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0csbUJBQW1CLEdBQUdBLElBQW1CO0VBRWhFSixPQUFPLENBQUNDLGNBQWMsQ0FBQ0ksbUJBQW1CLEdBQUdBLElBQW1COzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzgsOSwxMCwxMSwxMl19
