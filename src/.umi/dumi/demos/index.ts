// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChBlockSelector/blockSelector.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChBlockSelector/blockSelector.less?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChDropdown/index.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChDropdown/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChForm/index.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/regionOptions.ts?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChForm/index.less?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChGuitarTool/index.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChGuitarTool/index.less?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChLayout/index.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChLayout/index.less?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChMoveBook/chMoveBook.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChMoveBook/index.less?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChSortor/index.less?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChSortor/index.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChTablePanel/index.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/index.ts?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/chHooks.ts?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/cache.ts?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/request.ts?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/chFormats.ts?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/chutils/chValidator.ts?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/ChTablePanel/index.less?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/Format/PriceSplit/index.tsx?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!/Users/huanchen/Project/ch/ch-ui/src/component/Format/PriceSplit/index.less?dumi-raw-code';

export default {
  'ChBlockSelector-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _blockSelector = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChBlockSelector/blockSelector"));

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    var _useState = (0, _react.useState)(['1']),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var list = [{
      id: '1',
      name: '块状选择1'
    }, {
      id: '2',
      name: '块状选择器2'
    }, {
      id: '3',
      name: '块状选择器3'
    }];
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_blockSelector["default"], {
      multiple: false,
      list: list,
      value: value,
      onChange: function onChange(value) {
        setValue(value);
      }
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React, { useState } from 'react';\nimport ChBlockSelector from './blockSelector';\n\nexport default () => { \n\n    const [value, setValue] = useState(['1'])\n\n    const list = [{id: '1', name: '块状选择1'}, {id: '2', name: '块状选择器2'}, {id: '3', name: '块状选择器3'}]\n    return <div style={{width: '350px'}}>\n       <ChBlockSelector multiple={false} list={list} value={value} onChange={(value)=>{\n           setValue(value)\n       }}/>\n    </div>}"},"blockSelector.tsx":{"import":"./blockSelector","content":rawCode1},"blockSelector.less":{"import":"./blockSelector.less","content":rawCode2}},"dependencies":{"react":{"version":"16.14.0"}},"identifier":"ChBlockSelector-demo"},
  },
  'ChDropdown-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChDropdown/index"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/ChDropdown/index.less");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      trigger: ['click'],
      itemClassName: "chDropdown-demo",
      text: "1312312",
      menuItems: [{
        text: '1'
      }]
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport ChDropdown from './index';\nimport './index.less'\n\nexport default () => { \n    return <div style={{display: 'flex'}}>\n       <ChDropdown trigger={['click']} itemClassName=\"chDropdown-demo\" text=\"1312312\" menuItems={[{\n           text: '1',\n       }]}/>\n    </div>;}"},"index.tsx":{"import":"./index","content":rawCode3},"index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":">=16.0.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"@ant-design/icons":{"version":"4.6.3"},"react-dom":{"version":">=16.0.0"}},"componentName":"ChDropdown","identifier":"ChDropdown-demo"},
  },
  'ChForm-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChForm/index.tsx"));

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      formData: [{
        type: 'radio-group',
        label: 'label',
        name: 'name',
        options: [{
          label: '上学期',
          value: 'UP'
        }, {
          label: '下学期',
          value: 'DOWN'
        }]
      }, {
        type: 'select',
        label: 'label',
        name: 'name1',
        rules: [],
        options: [{
          label: '上学期',
          value: 'UP'
        }, {
          label: '下学期',
          value: 'DOWN'
        }]
      }, {
        type: 'region-select',
        label: 'label',
        name: 'name3'
      }, {
        type: 'upload',
        label: '上传接口',
        name: 'file',
        rules: [{
          required: true,
          message: '文件上传失败',
          validator: function validator(rule, value, callback) {
            try {
              if (value[0].response) {
                if (value[0].response.status == 0) {
                  console.log('debug: 单文件上传成功！');
                } else {
                  callback('文件上传失败！');
                }
              }
            } catch (err) {
              callback(err);
            }
          }
        }]
      }],
      onFinish: function onFinish(values) {
        console.log('debug: form onFinish values', values);
      }
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport ChForm from './index.tsx'\nexport default () => { \n    return <div style={{width: '350px'}}>\n        <ChForm\n            formData = {[\n               {\n                  type: 'radio-group',\n                  label: 'label',\n                  name: 'name',\n                  options: [\n                        { label: '上学期', value: 'UP' },\n                        { label: '下学期', value: 'DOWN' },\n                  ]\n               },\n               {\n                  type: 'select',\n                  label: 'label',\n                  name: 'name1',\n                  rules: [],\n                  options: [\n                        { label: '上学期', value: 'UP' },\n                        { label: '下学期', value: 'DOWN' },\n                  ]\n               },\n               {\n                  type: 'region-select',\n                  label: 'label',\n                  name: 'name3',\n               },\n               {\n                  type: 'upload',\n                  label: '上传接口',\n                  name: 'file',\n                  rules: [{ required: true, message: '文件上传失败', validator: \n                    (rule, value, callback) => {\n                        try {\n                            if(value[0].response)  {\n                               if(value[0].response.status == 0) {\n                                 console.log('debug: 单文件上传成功！')\n                               }else {\n                                 callback('文件上传失败！');\n                               }\n                            }\n                        } catch (err) {\n                            callback(err);\n                        }\n                    }\n                  }],\n               }\n            ]}\n            onFinish={(values)=>{\n                console.log('debug: form onFinish values', values)\n            }}\n        />\n    </div>;}"},"index.tsx":{"import":"./index.tsx","content":rawCode5},"chutils/regionOptions.ts":{"import":"../../chutils/regionOptions","content":rawCode6},"index.less":{"import":"./index.less","content":rawCode7}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"@ant-design/icons":{"version":"4.6.3"},"react-dom":{"version":">=16.9.0"}},"componentName":"ChForm","identifier":"ChForm-demo"},
  },
  'ChGuitarTool-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChGuitarTool/index.tsx"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/ChGuitarTool/index.less");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], null));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport ChGuitarTool from './index.tsx';\nimport './index.less'\n\nexport default () => { \n    return <div style={{width: '350px'}}>\n       <ChGuitarTool/>\n    </div>;}"},"index.tsx":{"import":"./index.tsx","content":rawCode8},"index.less":{"import":"./index.less","content":rawCode9},"ChForm/index.tsx":{"import":"./index.tsx","content":rawCode5},"chutils/regionOptions.ts":{"import":"../../chutils/regionOptions","content":rawCode6}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"},"@ant-design/icons":{"version":"4.6.3"}},"componentName":"ChGuitarTool","identifier":"ChGuitarTool-demo"},
  },
  'ChLayout-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChLayout/index.tsx"));

  var _default = function _default() {
    var sider = {
      currentItem: 1,
      siderItems: [{
        icon: '1',
        text: '1',
        click: function click() {
          console.log('1');
        }
      }]
    };
    return /*#__PURE__*/_react["default"].createElement(_index["default"], {
      sider: sider
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"    import React from 'react';\n    import ChLayout from './index.tsx'\n\n    export default () => {\n        let sider = {\n            currentItem: 1,\n            siderItems:[\n                {\n                    icon: '1',\n                    text: '1',\n                    click: ()=>{console.log('1')},\n                }\n            ]\n        }\n        \n        return <ChLayout \n                sider={sider}    \n             >\n             </ChLayout>\n    }\n"},"index.tsx":{"import":"./index.tsx","content":rawCode10},"index.less":{"import":"./index.less","content":rawCode11}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"}},"componentName":"ChLayout","identifier":"ChLayout-demo"},
  },
  'ChMoveBook-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _chMoveBook = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChMoveBook/chMoveBook"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/ChMoveBook/index.less");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_chMoveBook["default"], null));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport ChMoveBook from './chMoveBook';\nimport './index.less'\n\nexport default () => { \n    return <div style={{width: '350px'}}>\n       <ChMoveBook/>\n    </div>;}"},"chMoveBook.tsx":{"import":"./chMoveBook","content":rawCode12},"index.less":{"import":"./index.less","content":rawCode13}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"}},"identifier":"ChMoveBook-demo"},
  },
  'ChSortor-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/ChSortor/index.less");

  var _index2 = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChSortor/index.tsx"));

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index2["default"], {
      className: "grey",
      color: "red",
      value: "up"
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport './index.less'\nimport ChSortor from './index.tsx'\n\nexport default () => { \n    return <div style={{width: '350px'}}>\n        <ChSortor className='grey' color='red' value='up'></ChSortor>\n    </div>;}"},"index.less":{"import":"./index.less","content":rawCode14},"index.tsx":{"import":"./index.tsx","content":rawCode15}},"dependencies":{"react":{"version":">=16.0.0"},"@ant-design/icons":{"version":"4.6.3"},"react-dom":{"version":">=16.0.0"}},"componentName":"ChSortor","identifier":"ChSortor-demo"},
  },
  'ChTablePanel-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireWildcard(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/ChTablePanel/index.tsx"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/ChTablePanel/index.less");

  var _chHooks = require("/Users/huanchen/Project/ch/ch-ui/src/chutils/chHooks");

  var _index3 = require("/Users/huanchen/Project/ch/ch-ui/src/component/ChForm/index.tsx");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    var _useOptionFormListHoo = (0, _chHooks.useOptionFormListHook)({
      url: 'http://api-paper.kukechen.top/api/grade/list'
    }),
        options = _useOptionFormListHoo.options;

    var columns = [{
      title: '年级名称',
      dataIndex: 'name',
      key: 'name'
    }];
    var childColumns = [{
      title: '学期名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '上下学期',
      dataIndex: 'term',
      key: 'term'
    }];
    var ref = (0, _react.useRef)();
    (0, _react.useEffect)(function () {
      console.log('ref', ref);
    }, []);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "chTablePanel"
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      ref: ref,
      urlDelete: "http://localhost:8000/api/grade/delete",
      urlAdd: "http://localhost:8000/api/grade/add",
      urlUpdate: "http://localhost:8000/api/grade/edit",
      url: "http://localhost:8000/api/grade/page",
      columns: columns,
      searchFormData: [{
        placeholder: '请输入名称',
        layout: {
          span: 6
        },
        type: _index3.FormItemType.input,
        label: '名称',
        name: 'name',
        rules: [//   { required: true, message: '请输入名称' }
        ]
      }],
      formData: [{
        type: 'input',
        label: '名称',
        name: 'name',
        rules: [{
          required: true,
          message: '请输入年级名称'
        }]
      }, {
        type: 'upload',
        label: '上传接口',
        name: 'file',
        rules: [{
          required: true,
          message: '文件上传失败',
          validator: function validator(rule, value, callback) {
            try {
              if (value[0].response) {
                if (value[0].response.status == 0) {
                  console.log('debug: 单文件上传成功！');
                } else {
                  callback('文件上传失败！');
                }
              }
            } catch (err) {
              callback(err);
            }
          }
        }]
      }, {
        type: 'mutipleSelect',
        label: '名称',
        name: 'name',
        rules: [{
          required: true,
          message: '请输入年级名称'
        }]
      }],
      expandable: {
        expandedRowRender: function expandedRowRender(record) {
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
            onAddBefore: function onAddBefore(item) {
              item.gradeId = record.id;
              console.log(item);
            },
            urlDelete: "http://localhost:8000/api/gradeStep/delete",
            urlAdd: "http://localhost:8000/api/gradeStep/add",
            urlUpdate: "http://localhost:8000/api/gradeStep/edit",
            url: "http://api-paper.kukechen.top/api/gradeStep/page",
            query: {
              gradeId: record.id
            },
            columns: childColumns,
            formData: [{
              type: 'input',
              label: '名称',
              name: 'name',
              rules: [{
                required: true,
                message: '请输入年级名称'
              }]
            }, {
              type: 'select',
              label: '学期',
              name: 'term',
              rules: [{
                required: true,
                message: '请选择学期'
              }],
              initialValue: 'UP',
              options: [{
                label: '上学期',
                value: 'UP'
              }, {
                label: '下学期',
                value: 'DOWN'
              }]
            }]
          }));
        }
      },
      actions: [{
        text: '导入',
        onClick: function onClick() {
          console.log('点击了导入');
        }
      }]
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React, { useRef, useEffect } from 'react';\nimport ChTablePanel from './index.tsx';\nimport './index.less';\nimport { useOptionFormListHook } from '../../chutils/chHooks';\nimport { FormItemType } from '../ChForm/index.tsx';\n\nexport default () => {\n  const { options } = useOptionFormListHook({\n    url: 'http://api-paper.kukechen.top/api/grade/list',\n  });\n\n  const columns = [\n    {\n      title: '年级名称',\n      dataIndex: 'name',\n      key: 'name',\n    },\n  ];\n  const childColumns = [\n    {\n      title: '学期名称',\n      dataIndex: 'name',\n      key: 'name',\n    },\n    {\n      title: '上下学期',\n      dataIndex: 'term',\n      key: 'term',\n    },\n  ];\n  const ref = useRef();\n\n  useEffect(() => {\n    console.log('ref', ref);\n  }, []);\n\n  return (\n    <div className=\"chTablePanel\">\n      <ChTablePanel\n        ref={ref}\n        urlDelete=\"http://localhost:8000/api/grade/delete\"\n        urlAdd=\"http://localhost:8000/api/grade/add\"\n        urlUpdate=\"http://localhost:8000/api/grade/edit\"\n        url=\"http://localhost:8000/api/grade/page\"\n        columns={columns}\n        searchFormData={[\n          {\n            placeholder: '请输入名称',\n            layout: { span: 6 },\n            type: FormItemType.input,\n            label: '名称',\n            name: 'name',\n            rules: [\n              //   { required: true, message: '请输入名称' }\n            ],\n          },\n        ]}\n        formData={[\n          {\n            type: 'input',\n            label: '名称',\n            name: 'name',\n            rules: [{ required: true, message: '请输入年级名称' }],\n          },\n          {\n            type: 'upload',\n            label: '上传接口',\n            name: 'file',\n            rules: [\n              {\n                required: true,\n                message: '文件上传失败',\n                validator: (rule, value, callback) => {\n                  try {\n                    if (value[0].response) {\n                      if (value[0].response.status == 0) {\n                        console.log('debug: 单文件上传成功！');\n                      } else {\n                        callback('文件上传失败！');\n                      }\n                    }\n                  } catch (err) {\n                    callback(err);\n                  }\n                },\n              },\n            ],\n          },\n          {\n            type: 'mutipleSelect',\n            label: '名称',\n            name: 'name',\n            rules: [{ required: true, message: '请输入年级名称' }],\n          },\n        ]}\n        expandable={{\n          expandedRowRender: record => (\n            <div>\n              <ChTablePanel\n                onAddBefore={item => {\n                  item.gradeId = record.id;\n                  console.log(item);\n                }}\n                urlDelete=\"http://localhost:8000/api/gradeStep/delete\"\n                urlAdd=\"http://localhost:8000/api/gradeStep/add\"\n                urlUpdate=\"http://localhost:8000/api/gradeStep/edit\"\n                url=\"http://api-paper.kukechen.top/api/gradeStep/page\"\n                query={{ gradeId: record.id }}\n                columns={childColumns}\n                formData={[\n                  {\n                    type: 'input',\n                    label: '名称',\n                    name: 'name',\n                    rules: [{ required: true, message: '请输入年级名称' }],\n                  },\n                  {\n                    type: 'select',\n                    label: '学期',\n                    name: 'term',\n                    rules: [{ required: true, message: '请选择学期' }],\n                    initialValue: 'UP',\n                    options: [\n                      { label: '上学期', value: 'UP' },\n                      { label: '下学期', value: 'DOWN' },\n                    ],\n                  },\n                ]}\n              />\n            </div>\n          ),\n        }}\n        actions={[\n          {\n            text: '导入',\n            onClick: () => {\n              console.log('点击了导入');\n            },\n          },\n        ]}\n      />\n    </div>\n  );\n};"},"index.tsx":{"import":"./index.tsx","content":rawCode16},"chutils/index.ts":{"import":"../../chutils","content":rawCode17},"chHooks.ts":{"import":"./chHooks","content":rawCode18},"cache.ts":{"import":"./cache","content":rawCode19},"request.ts":{"import":"./request","content":rawCode20},"chFormats.ts":{"import":"./chFormats","content":rawCode21},"chValidator.ts":{"import":"./chValidator","content":rawCode22},"ChForm/index.tsx":{"import":"./index.tsx","content":rawCode5},"chutils/regionOptions.ts":{"import":"../../chutils/regionOptions","content":rawCode6},"index.less":{"import":"./index.less","content":rawCode23},"chutils/chHooks.ts":{"import":"./chHooks","content":rawCode18}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"},"axios":{"version":"0.21.1"},"@ant-design/icons":{"version":"4.6.3"}},"componentName":"ChTablePanel","identifier":"ChTablePanel-demo"},
  },
  'PriceSplit-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/huanchen/Project/ch/ch-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _index = _interopRequireDefault(require("/Users/huanchen/Project/ch/ch-ui/src/component/Format/PriceSplit/index.tsx"));

  require("/Users/huanchen/Project/ch/ch-ui/src/component/Format/PriceSplit/index.less");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      value: 12345
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport PriceSplit from './index.tsx';\nimport './index.less'\n\nexport default () => { \n    return <div style={{width: '350px'}}>\n        <PriceSplit value={12345}/>\n    </div>;}"},"index.tsx":{"import":"./index.tsx","content":rawCode24},"index.less":{"import":"./index.less","content":rawCode25}},"dependencies":{"react":{"version":"16.14.0"}},"componentName":"PriceSplit","identifier":"PriceSplit-demo"},
  },
};
