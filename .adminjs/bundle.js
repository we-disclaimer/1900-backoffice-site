(function (React, PropTypes, designSystem, adminjs) {
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

  const Edit = ({
    property,
    record,
    onChange
  }) => {
    const {
      translateProperty
    } = adminjs.useTranslation();
    const {
      params
    } = record;
    const {
      custom
    } = property;
    const path = adminjs.flat.get(params, custom.filePathProperty);
    const key = adminjs.flat.get(params, custom.keyProperty);
    const file = adminjs.flat.get(params, custom.fileProperty);
    const [originalKey, setOriginalKey] = React.useState(key);
    const [filesToUpload, setFilesToUpload] = React.useState([]);
    React.useEffect(() => {
      // it means means that someone hit save and new file has been uploaded
      // in this case fliesToUpload should be cleared.
      // This happens when user turns off redirect after new/edit
      if (typeof key === 'string' && key !== originalKey || typeof key !== 'string' && !originalKey || typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length) {
        setOriginalKey(key);
        setFilesToUpload([]);
      }
    }, [key, originalKey]);
    const onUpload = files => {
      setFilesToUpload(files);
      onChange(custom.fileProperty, files);
    };
    const handleRemove = () => {
      onChange(custom.fileProperty, null);
    };
    const handleMultiRemove = singleKey => {
      const index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
      const filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
      if (path && path.length > 0) {
        const newPath = path.map((currentPath, i) => i !== index ? currentPath : null);
        let newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
        newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
        onChange({
          ...record,
          params: newParams
        });
      } else {
        // eslint-disable-next-line no-console
        console.log('You cannot remove file when there are no uploaded files yet');
      }
    };
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)), /*#__PURE__*/React__default.default.createElement(designSystem.DropZone, {
      onChange: onUpload,
      multiple: custom.multiple,
      validate: {
        mimeTypes: custom.mimeTypes,
        maxSize: custom.maxSize
      },
      files: filesToUpload
    }), !custom.multiple && key && path && !filesToUpload.length && file !== null && (/*#__PURE__*/React__default.default.createElement(designSystem.DropZoneItem, {
      filename: key,
      src: path,
      onRemove: handleRemove
    })), custom.multiple && key && key.length && path ? (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, key.map((singleKey, index) => {
      // when we remove items we set only path index to nulls.
      // key is still there. This is because
      // we have to maintain all the indexes. So here we simply filter out elements which
      // were removed and display only what was left
      const currentPath = path[index];
      return currentPath ? (/*#__PURE__*/React__default.default.createElement(designSystem.DropZoneItem, {
        key: singleKey,
        filename: singleKey,
        src: path[index],
        onRemove: () => handleMultiRemove(singleKey)
      })) : '';
    }))) : '');
  };

  const AudioMimeTypes = ['audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'application/ogg', 'audio/opus', 'audio/wav', 'audio/webm', 'audio/3gpp2'];
  const ImageMimeTypes = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/vnd.microsoft.icon', 'image/tiff', 'image/webp'];

  // eslint-disable-next-line import/no-extraneous-dependencies
  const SingleFile = props => {
    const {
      name,
      path,
      mimeType,
      width
    } = props;
    if (path && path.length) {
      if (mimeType && ImageMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default.default.createElement("img", {
          src: path,
          style: {
            maxHeight: width,
            maxWidth: width
          },
          alt: name
        });
      }
      if (mimeType && AudioMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default.default.createElement("audio", {
          controls: true,
          src: path
        }, "Your browser does not support the", /*#__PURE__*/React__default.default.createElement("code", null, "audio"), /*#__PURE__*/React__default.default.createElement("track", {
          kind: "captions"
        }));
      }
    }
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      as: "a",
      href: path,
      ml: "default",
      size: "sm",
      rounded: true,
      target: "_blank"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "DocumentDownload",
      color: "white",
      mr: "default"
    }), name));
  };
  const File = ({
    width,
    record,
    property
  }) => {
    const {
      custom
    } = property;
    let path = adminjs.flat.get(record?.params, custom.filePathProperty);
    if (!path) {
      return null;
    }
    const name = adminjs.flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
    const mimeType = custom.mimeTypeProperty && adminjs.flat.get(record?.params, custom.mimeTypeProperty);
    if (!property.custom.multiple) {
      if (custom.opts && custom.opts.baseUrl) {
        path = `${custom.opts.baseUrl}/${name}`;
      }
      return /*#__PURE__*/React__default.default.createElement(SingleFile, {
        path: path,
        name: name,
        width: width,
        mimeType: mimeType
      });
    }
    if (custom.opts && custom.opts.baseUrl) {
      const baseUrl = custom.opts.baseUrl || '';
      path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
    }
    return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, path.map((singlePath, index) => (/*#__PURE__*/React__default.default.createElement(SingleFile, {
      key: singlePath,
      path: singlePath,
      name: name[index],
      width: width,
      mimeType: mimeType[index]
    }))));
  };

  const List = props => (/*#__PURE__*/React__default.default.createElement(File, {
    width: 100,
    ...props
  }));

  const Show = props => {
    const {
      property
    } = props;
    const {
      translateProperty
    } = adminjs.useTranslation();
    return /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)), /*#__PURE__*/React__default.default.createElement(File, {
      width: "100%",
      ...props
    }));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.CustomUploadEdit = UploadEdit;
  AdminJS.UserComponents.Thumb = Thumb;
  AdminJS.UserComponents.GroupedPrices = GroupedPrices;
  AdminJS.UserComponents.GroupedDisponibilities = GroupedDisponibilities;
  AdminJS.UserComponents.ShowProductImage = ShowProductImage;
  AdminJS.UserComponents.FormattedDate = FormattedDate;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, PropTypes, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdC50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYi50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLXByaWNlcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcy50c3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zaG93LW1lZGlhLnRzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1hdHRlZC1kYXRlLnRzeCIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZmlsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG4vLyBhZG1pbi9jb21wb25lbnRzL3VwbG9hZC1lZGl0LnRzeFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgVXBsb2FkRWRpdDogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5wcm9wZXJ0eS5uYW1lfT5VcGxvYWQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IGlkPXtwcm9wcy5wcm9wZXJ0eS5uYW1lfSB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEVkaXQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbi8vIGFkbWluL2NvbXBvbmVudHMvdXBsb2FkLWVkaXQudHN4XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5mdW5jdGlvbiBUaHVtYihwcm9wcykge1xyXG4gIGNvbnN0IHsgcmVjb3JkIH0gPSBwcm9wcztcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9iYWNrb2ZmaWNlLWFwcC1hc3NldHMuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHtyZWNvcmQucGFyYW1zLnVybH1gO1xyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIDxzcGFuPk5vIGltYWdlPC9zcGFuPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17dXJsfVxyXG4gICAgICBhbHQ9e3JlY29yZC5wYXJhbXMuYWx0IHx8ICdUaHVtYm5haWwnfVxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5UaHVtYi5wcm9wVHlwZXMgPSB7XHJcbiAgcmVjb3JkOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgcGFyYW1zOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LCBMYWJlbCwgSW5wdXQsIEZvcm1Hcm91cCxcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmZ1bmN0aW9uIEdyb3VwZWRQcmljZXMocHJvcHMpIHtcclxuICBjb25zdCB7IHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBwcmVjb1VuaWNvID0gcmVjb3JkLnBhcmFtcy5wcmVjb1VuaWNvIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvTWVkaW8gPSByZWNvcmQucGFyYW1zLnByZWNvTWVkaW8gfHwgJyc7XHJcbiAgY29uc3QgcHJlY29HcmFuZGUgPSByZWNvcmQucGFyYW1zLnByZWNvR3JhbmRlIHx8ICcnO1xyXG4gIGNvbnN0IHByZWNvSW5kaXZpZHVhbCA9IHJlY29yZC5wYXJhbXMucHJlY29JbmRpdmlkdWFsIHx8ICcnO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IChldmVudCkgPT4ge1xyXG4gICAgb25DaGFuZ2UoZmllbGQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwicm93XCIgZ2FwPVwiMTBweFwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgd2lkdGg9XCIyNSVcIlxyXG4gICAgICAgIG1yPVwiMTBweFwiXHJcbiAgICAgICAgbWI9XCIzNnB4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8TGFiZWw+UHJlw6dvIMOabmljbzwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb1VuaWNvfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVjb1VuaWNvJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgd2lkdGg9XCIyNSVcIlxyXG4gICAgICAgIG1yPVwiMTBweFwiXHJcbiAgICAgICAgbWI9XCIzNnB4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8TGFiZWw+UHJlw6dvIE3DqWRpbzwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb01lZGlvfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVjb01lZGlvJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgd2lkdGg9XCIyNSVcIlxyXG4gICAgICAgIG1yPVwiMTBweFwiXHJcbiAgICAgICAgbWI9XCIzNnB4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8TGFiZWw+UHJlw6dvIEdyYW5kZTwvTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmVjb0dyYW5kZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29HcmFuZGUnKX1cclxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggd2lkdGg9XCIyNSVcIj5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPExhYmVsPlByZcOnbyBJbmRpdmlkdWFsPC9MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ByZWNvSW5kaXZpZHVhbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlY29JbmRpdmlkdWFsJyl9XHJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZFByaWNlcztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgTGFiZWwsIENoZWNrQm94IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IEdyb3VwZWREaXNwb25pYmlsaXRpZXM6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IGphbnRhciA9IHJlY29yZC5wYXJhbXMuamFudGFyID8/IGZhbHNlO1xyXG4gIGNvbnN0IGRlbGl2ZXJ5ID0gcmVjb3JkLnBhcmFtcy5kZWxpdmVyeSA/PyBmYWxzZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSmFudGFyID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBvbkNoYW5nZSgnamFudGFyJywgZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGVsaXZlcnkgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIG9uQ2hhbmdlKCdkZWxpdmVyeScsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8TGFiZWwgZm9udFdlaWdodD1cImJvbGRcIiBtYj1cImRlZmF1bHRcIj5cclxuICAgICAgICBUaXBvcyBkZSBjYXJkw6FwaW9zXHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBnYXA9XCJsZ1wiIGZsZXhXcmFwPVwid3JhcFwiIG1iPVwiMzZweFwiPlxyXG4gICAgICAgIDxCb3ggd2lkdGg9XCI1MCVcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJzbVwiPlxyXG4gICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgIGlkPVwiamFudGFyXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17amFudGFyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSmFudGFyfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBKYW50YXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiamFudGFyXCI+RGlzcG9uw612ZWwgcGFyYSBKYW50YXI8L0xhYmVsPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggd2lkdGg9XCI1MCVcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJzbVwiPlxyXG4gICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgIGlkPVwiZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtkZWxpdmVyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbGl2ZXJ5fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzcG9uw612ZWwgcGFyYSBEZWxpdmVyeVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkZWxpdmVyeVwiPkRpc3BvbsOtdmVsIHBhcmEgRGVsaXZlcnk8L0xhYmVsPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm91cGVkRGlzcG9uaWJpbGl0aWVzO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5cclxuY29uc3QgU2hvd1Byb2R1Y3RJbWFnZTogUmVhY3QuRkM8QmFzZVByb3BlcnR5UHJvcHM+ID0gKHsgcmVjb3JkIH0pID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IGBodHRwczovL2JhY2tvZmZpY2UtYXBwLWFzc2V0cy5zMy51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS8ke3JlY29yZD8ucGFyYW1zPy5tZWRpYVVybH1gIHx8IG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwiMzZweFwiPlxyXG4gICAgICA8TGFiZWw+SW1hZ2VtIGRvIFByb2R1dG88L0xhYmVsPlxyXG4gICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgPEJveCBtdD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgYWx0PVwiSW1hZ2VtIGRvIFByb2R1dG9cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICczMDBweCcsIGJvcmRlclJhZGl1czogOCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Qm94IG10PVwiZGVmYXVsdFwiIGNvbG9yPVwiZ3JleTYwXCI+XHJcbiAgICAgICAgICBOZW5odW1hIGltYWdlbSBkaXNwb27DrXZlbFxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dQcm9kdWN0SW1hZ2U7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Z1bmN0aW9uLWNvbXBvbmVudC1kZWZpbml0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IEZvcm1hdHRlZERhdGU6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9ICh7IHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xyXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXTtcclxuXHJcbiAgaWYgKCFyYXdWYWx1ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyYXdWYWx1ZSk7XHJcbiAgY29uc3QgZm9ybWF0dGVkID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygncHQtQlInLCB7XHJcbiAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHtmb3JtYXR0ZWR9XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIHt0aW1lfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZERhdGU7XHJcbiIsImltcG9ydCB7IERyb3Bab25lLCBEcm9wWm9uZUl0ZW0sIEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEVkaXQgPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpO1xuICAgIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KTtcbiAgICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICAgICAgaWYgKCh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKSkge1xuICAgICAgICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcbiAgICAgICAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcbiAgICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKTtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKTtcbiAgICAgICAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdKTtcbiAgICAgICAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpO1xuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7IG9uQ2hhbmdlOiBvblVwbG9hZCwgbXVsdGlwbGU6IGN1c3RvbS5tdWx0aXBsZSwgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgICAgICB9LCBmaWxlczogZmlsZXNUb1VwbG9hZCB9KSxcbiAgICAgICAgIWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsgZmlsZW5hbWU6IGtleSwgc3JjOiBwYXRoLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlIH0pKSxcbiAgICAgICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBrZXk6IHNpbmdsZUtleSwgZmlsZW5hbWU6IHNpbmdsZUtleSwgc3JjOiBwYXRoW2luZGV4XSwgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSkgfSkpIDogJyc7XG4gICAgICAgIH0pKSkgOiAnJykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICAgJ2F1ZGlvL2FhYycsXG4gICAgJ2F1ZGlvL21pZGknLFxuICAgICdhdWRpby94LW1pZGknLFxuICAgICdhdWRpby9tcGVnJyxcbiAgICAnYXVkaW8vb2dnJyxcbiAgICAnYXBwbGljYXRpb24vb2dnJyxcbiAgICAnYXVkaW8vb3B1cycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2F1ZGlvL3dlYm0nLFxuICAgICdhdWRpby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAgICd2aWRlby94LW1zdmlkZW8nLFxuICAgICd2aWRlby9tcGVnJyxcbiAgICAndmlkZW8vb2dnJyxcbiAgICAndmlkZW8vbXAydCcsXG4gICAgJ3ZpZGVvL3dlYm0nLFxuICAgICd2aWRlby8zZ3BwJyxcbiAgICAndmlkZW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgICAnaW1hZ2UvYm1wJyxcbiAgICAnaW1hZ2UvZ2lmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAgICdpbWFnZS90aWZmJyxcbiAgICAnaW1hZ2Uvd2VicCcsXG5dO1xuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgICAnYXBwbGljYXRpb24veC10YXInLFxuICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXTtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXTtcbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAgICd0ZXh0L2NzcycsXG4gICAgJ3RleHQvY3N2JyxcbiAgICAndGV4dC9odG1sJyxcbiAgICAndGV4dC9jYWxlbmRhcicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9wbGFpbicsXG4gICAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgJ3RleHQveG1sJyxcbl07XG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuXTtcbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAgICdmb250L290ZicsXG4gICAgJ2ZvbnQvdHRmJyxcbiAgICAnZm9udC93b2ZmJyxcbiAgICAnZm9udC93b2ZmMicsXG5dO1xuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAgICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAgICd2bmQudmlzaW8nLFxuICAgICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl07XG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAgIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAgIC4uLlZpZGVvTWltZVR5cGVzLFxuICAgIC4uLkltYWdlTWltZVR5cGVzLFxuICAgIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gICAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gICAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuICAgIC4uLkZvbnRNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdWRpb01pbWVUeXBlcywgSW1hZ2VNaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMnO1xuY29uc3QgU2luZ2xlRmlsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhdGgsIHN0eWxlOiB7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9LCBhbHQ6IG5hbWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIHsgY29udHJvbHM6IHRydWUsIHNyYzogcGF0aCB9LFxuICAgICAgICAgICAgICAgIFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJhdWRpb1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgeyBraW5kOiBcImNhcHRpb25zXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IHBhdGgsIG1sOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbVwiLCByb3VuZGVkOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkRvY3VtZW50RG93bmxvYWRcIiwgY29sb3I6IFwid2hpdGVcIiwgbXI6IFwiZGVmYXVsdFwiIH0pLFxuICAgICAgICAgICAgbmFtZSkpKTtcbn07XG5jb25zdCBGaWxlID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHlcbiAgICAgICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KTtcbiAgICBpZiAoIXByb3BlcnR5LmN1c3RvbS5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICAgICAgcGF0aCA9IGAke2N1c3RvbS5vcHRzLmJhc2VVcmx9LyR7bmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IHBhdGg6IHBhdGgsIG5hbWU6IG5hbWUsIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlIH0pKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJyc7XG4gICAgICAgIHBhdGggPSBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IGAke2Jhc2VVcmx9LyR7bmFtZVtpbmRleF19YCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IGtleTogc2luZ2xlUGF0aCwgcGF0aDogc2luZ2xlUGF0aCwgbmFtZTogbmFtZVtpbmRleF0sIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlW2luZGV4XSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogMTAwLCAuLi5wcm9wcyB9KSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgQ3VzdG9tVXBsb2FkRWRpdCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy91cGxvYWQtZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ3VzdG9tVXBsb2FkRWRpdCA9IEN1c3RvbVVwbG9hZEVkaXRcbmltcG9ydCBUaHVtYiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy90aHVtYidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVGh1bWIgPSBUaHVtYlxuaW1wb3J0IEdyb3VwZWRQcmljZXMgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvZ3JvdXBlZC1wcmljZXMnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkdyb3VwZWRQcmljZXMgPSBHcm91cGVkUHJpY2VzXG5pbXBvcnQgR3JvdXBlZERpc3BvbmliaWxpdGllcyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9ncm91cGVkLWRpc3BvbmliaWxpdGllcydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuR3JvdXBlZERpc3BvbmliaWxpdGllcyA9IEdyb3VwZWREaXNwb25pYmlsaXRpZXNcbmltcG9ydCBTaG93UHJvZHVjdEltYWdlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3Nob3ctbWVkaWEnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNob3dQcm9kdWN0SW1hZ2UgPSBTaG93UHJvZHVjdEltYWdlXG5pbXBvcnQgRm9ybWF0dGVkRGF0ZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9mb3JtYXR0ZWQtZGF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRm9ybWF0dGVkRGF0ZSA9IEZvcm1hdHRlZERhdGVcbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnQiXSwibmFtZXMiOlsiVXBsb2FkRWRpdCIsInByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaHRtbEZvciIsInByb3BlcnR5IiwibmFtZSIsImlkIiwidHlwZSIsIlRodW1iIiwicmVjb3JkIiwidXJsIiwicGFyYW1zIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkdyb3VwZWRQcmljZXMiLCJvbkNoYW5nZSIsInByZWNvVW5pY28iLCJwcmVjb01lZGlvIiwicHJlY29HcmFuZGUiLCJwcmVjb0luZGl2aWR1YWwiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJCb3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1yIiwibWIiLCJGb3JtR3JvdXAiLCJMYWJlbCIsIklucHV0Iiwic3RlcCIsIkdyb3VwZWREaXNwb25pYmlsaXRpZXMiLCJqYW50YXIiLCJkZWxpdmVyeSIsImhhbmRsZUNoYW5nZUphbnRhciIsImUiLCJjaGVja2VkIiwiaGFuZGxlQ2hhbmdlRGVsaXZlcnkiLCJmb250V2VpZ2h0IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwiQ2hlY2tCb3giLCJTaG93UHJvZHVjdEltYWdlIiwiaW1hZ2VVcmwiLCJtZWRpYVVybCIsIm10IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIkZvcm1hdHRlZERhdGUiLCJyYXdWYWx1ZSIsInBhdGgiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiRWRpdCIsInRyYW5zbGF0ZVByb3BlcnR5IiwidXNlVHJhbnNsYXRpb24iLCJjdXN0b20iLCJmbGF0IiwiZ2V0IiwiZmlsZVBhdGhQcm9wZXJ0eSIsImtleSIsImtleVByb3BlcnR5IiwiZmlsZSIsImZpbGVQcm9wZXJ0eSIsIm9yaWdpbmFsS2V5Iiwic2V0T3JpZ2luYWxLZXkiLCJ1c2VTdGF0ZSIsImZpbGVzVG9VcGxvYWQiLCJzZXRGaWxlc1RvVXBsb2FkIiwidXNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib25VcGxvYWQiLCJmaWxlcyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZU11bHRpUmVtb3ZlIiwic2luZ2xlS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwiZmlsZXNUb0RlbGV0ZSIsImZpbGVzVG9EZWxldGVQcm9wZXJ0eSIsIm5ld1BhdGgiLCJtYXAiLCJjdXJyZW50UGF0aCIsImkiLCJuZXdQYXJhbXMiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJyZXNvdXJjZUlkIiwiRHJvcFpvbmUiLCJtdWx0aXBsZSIsInZhbGlkYXRlIiwibWltZVR5cGVzIiwibWF4U2l6ZSIsIkRyb3Bab25lSXRlbSIsImZpbGVuYW1lIiwib25SZW1vdmUiLCJGcmFnbWVudCIsIkF1ZGlvTWltZVR5cGVzIiwiSW1hZ2VNaW1lVHlwZXMiLCJTaW5nbGVGaWxlIiwibWltZVR5cGUiLCJpbmNsdWRlcyIsImNvbnRyb2xzIiwia2luZCIsIkJ1dHRvbiIsImFzIiwiaHJlZiIsIm1sIiwic2l6ZSIsInJvdW5kZWQiLCJJY29uIiwiaWNvbiIsIkZpbGUiLCJmaWxlTmFtZVByb3BlcnR5IiwibWltZVR5cGVQcm9wZXJ0eSIsIm9wdHMiLCJiYXNlVXJsIiwic2luZ2xlUGF0aCIsIkxpc3QiLCJTaG93IiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiQ3VzdG9tVXBsb2FkRWRpdCIsIlVwbG9hZEVkaXRDb21wb25lbnQiLCJVcGxvYWRMaXN0Q29tcG9uZW50IiwiVXBsb2FkU2hvd0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6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QUFLLENBQUM7RUFBRXRGLElBQUFBLEtBQUssRUFBRUEsS0FBSztNQUFFZ0gsUUFBUSxFQUFFQSxRQUFRLENBQUMxQixLQUFLO0tBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1TixDQUFDOztFQ3pDRCxNQUFNNEMsSUFBSSxHQUFJakosS0FBSyxrQkFBTUMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDeUksSUFBSSxFQUFFO0VBQUU1SCxFQUFBQSxLQUFLLEVBQUUsR0FBRztJQUFFLEdBQUdmO0VBQU0sQ0FBQyxDQUFDLENBQUM7O0VDRTdFLE1BQU1rSixJQUFJLEdBQUlsSixLQUFLLElBQUs7SUFDcEIsTUFBTTtFQUFFSSxJQUFBQTtFQUFTLEdBQUMsR0FBR0osS0FBSztJQUMxQixNQUFNO0VBQUU2RSxJQUFBQTtLQUFtQixHQUFHQyxzQkFBYyxFQUFFO0VBQzlDLEVBQUEsb0JBQVE3RSxzQkFBSyxDQUFDQyxhQUFhLENBQUNxQyxzQkFBUyxFQUFFLElBQUksZUFDdkN0QyxzQkFBSyxDQUFDQyxhQUFhLENBQUNzQyxrQkFBSyxFQUFFLElBQUksRUFBRXFDLGlCQUFpQixDQUFDekUsUUFBUSxDQUFDNkcsS0FBSyxFQUFFN0csUUFBUSxDQUFDOEcsVUFBVSxDQUFDLENBQUMsZUFDeEZqSCxzQkFBSyxDQUFDQyxhQUFhLENBQUN5SSxJQUFJLEVBQUU7RUFBRTVILElBQUFBLEtBQUssRUFBRSxNQUFNO01BQUUsR0FBR2Y7RUFBTSxHQUFDLENBQUMsQ0FBQztFQUMvRCxDQUFDOztFQ1ZEbUosT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNDLGdCQUFnQixHQUFHQSxVQUFnQjtFQUUxREYsT0FBTyxDQUFDQyxjQUFjLENBQUM1SSxLQUFLLEdBQUdBLEtBQUs7RUFFcEMySSxPQUFPLENBQUNDLGNBQWMsQ0FBQzlILGFBQWEsR0FBR0EsYUFBYTtFQUVwRDZILE9BQU8sQ0FBQ0MsY0FBYyxDQUFDekcsc0JBQXNCLEdBQUdBLHNCQUFzQjtFQUV0RXdHLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDOUYsZ0JBQWdCLEdBQUdBLGdCQUFnQjtFQUUxRDZGLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDdEYsYUFBYSxHQUFHQSxhQUFhO0VBRXBEcUYsT0FBTyxDQUFDQyxjQUFjLENBQUNFLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUgsT0FBTyxDQUFDQyxjQUFjLENBQUNHLG1CQUFtQixHQUFHQSxJQUFtQjtFQUVoRUosT0FBTyxDQUFDQyxjQUFjLENBQUNJLG1CQUFtQixHQUFHQSxJQUFtQjs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOls2LDcsOCw5LDEwXX0=
