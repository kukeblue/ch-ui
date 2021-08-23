import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
  Button,
  Form,
  Row,
  Col,
  Select,
  Input,
  Cascader,
  Upload,
  Radio,
  Popconfirm,
  Table,
  Pagination,
  Modal,
  Layout,
  Dropdown,
  Menu,
} from 'antd';
import axios from 'axios';
import {
  UploadOutlined,
  DownOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError('Cannot destructure undefined');
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = '';
styleInject(css_248z);

var chMoveBook = function(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Button, null, '\u6309\u94AE'),
    /*#__PURE__*/ React.createElement('img', {
      alt: '',
      className: 'banner',
      style: {
        height: 'auto',
        width: '100%',
      },
    }),
  );
};

var css_248z$1 =
  '.block-selector {\n  justify-content: space-between;\n  display: flex;\n  flex-wrap: wrap;\n}\n.block-selector .block {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n  border-radius: 5px;\n  width: 30%;\n  height: 30px;\n  background-color: #eee;\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n}\n.block-selector .block-selected {\n  cursor: default;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n  border-radius: 5px;\n  width: 30%;\n  height: 30px;\n  background-color: #eee;\n  position: relative;\n  border: 1px solid indigo;\n  box-sizing: border-box;\n}\n.block-selector .block-selected::after {\n  content: \'\';\n  position: absolute;\n  top: -1px;\n  right: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.block-selector .block-selected::after {\n  border-radius: 0px 4px 0px 4px;\n  border-width: 10px;\n  border-right-color: indigo;\n  border-top-color: indigo;\n}\n.block-selector .close-warp {\n  position: absolute;\n  top: -6px;\n  right: 4px;\n  z-index: 99;\n}\n.block-selector .close {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  display: inline-block;\n}\n.block-selector .close:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n';
styleInject(css_248z$1);

function BlockSelector(_ref) {
  var _ref$list = _ref.list,
    list = _ref$list === void 0 ? [] : _ref$list,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    onChange = _ref.onChange,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'block-selector',
    },
    list.map(function(item, index) {
      var selected = value.indexOf(item.id) > -1;
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          onClick: function onClick() {
            var i = value.indexOf(item.id);
            var newValue = value.slice();

            if (selected) {
              newValue.splice(i, 1);
            } else {
              if (multiple) {
                newValue.push(item.id);
              } else {
                newValue = [item.id];
              }
            }

            onChange && onChange(newValue);
          },
          key: item.id || '_' + index,
          className: selected ? 'block-selected' : 'block',
        },
        item.name || '块状选择器',
        selected &&
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'close-warp',
            },
            /*#__PURE__*/ React.createElement('span', {
              className: 'close',
            }),
          ),
      );
    }),
  );
}

var setObCache = function setObCache(key, value, _expiresTime) {
  if (_expiresTime) {
    var expiresTime = _expiresTime * 1000;
    console.log('debug: setObCache 设置缓存过期时间成功', _expiresTime + 's');
    value.expiresTime = expiresTime;
    value.created = new Date().getTime();
  }

  localStorage.setItem(key, JSON.stringify(value));
};
var getObCache = function getObCache(key) {
  var _ob = localStorage.getItem(key);

  if (_ob) {
    if (_ob.expiresTime) {
      var isExpires = new Date().getTime() - _ob.created > _ob.expiresTime;

      if (!isExpires) {
        console.log('debug: getObCache 获取缓存未过期', _ob);
        delete _ob.expiresTime;
        delete _ob.created;
        return JSON.parse(_ob);
      } else {
        clearObCache(key);
      }
    } else {
      return JSON.parse(_ob);
    }
  }
};
var clearObCache = function clearObCache(key) {
  localStorage.setItem(key, '');
};

var RequestConfig = {
  config: {},
  onRequest: undefined,
  onError: undefined,
};
var request = function request(requestPrams) {
  var url = requestPrams.url,
    data = requestPrams.data,
    cache = requestPrams.cache,
    method = requestPrams.method;
  return new Promise(function(resolve, reject) {
    var user = getObCache('user') || {};

    if (cache && getObCache(url)) {
      return getObCache(url);
    }

    var config = {
      headers: {
        'Content-Type': 'application/json',
        Auth: user.token,
      },
      method: method || 'post',
      url: url,
      data: data,
      transformRequest: [
        function(data) {
          // Do whatever you want to transform the data
          if (!data) return data;
          Object.keys(data).forEach(function(key) {
            if (data[key] === undefined || data[key] === null) {
              delete data[key];
            }
          });

          if (RequestConfig.onRequest) {
            return RequestConfig.onRequest(data);
          } else {
            return JSON.stringify(data);
          }
        },
      ],
    };
    Object.assign(config, RequestConfig.config);
    console.log(
      '\u3010REQUEST SUCCESS\u3011 \u8BBF\u95EE\u5730\u5740:'.concat(url),
    );
    console.log(
      '\u3010REQUEST SUCCESS\u3011 \u8BF7\u6C42\u53C2\u6570:',
      config.data,
    );
    axios(config)
      .then(function(response) {
        console.log(
          '\u3010REQUEST SUCCESS\u3011 \u8FD4\u56DE\u7ED3\u679C:',
          response.data,
        );

        if (response.data && response.data.status === 0) {
          setObCache(url, response.data);
        }

        resolve(response.data);
      })
      .catch(function(error) {
        console.error('请求抛锚飞到了外太空～');
        RequestConfig.onError && RequestConfig.onError(error);
        reject(error);
      });
  });
};
var Ajax = {
  RequestConfig: RequestConfig,
  request: request,
};

function usePage(props) {
  var url = props.url,
    pageSize = props.pageSize,
    onReloadAfter = props.onReloadAfter;

  var _useState = useState(props.query),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];

  var _useState3 = useState('more'),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];

  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];

  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    list = _useState8[0],
    setList = _useState8[1];

  var ref = useRef({
    pageNo: 1,
  });
  useEffect(
    function() {
      reload();
    },
    [query],
  );

  var reload = /*#__PURE__*/ (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(pageNo) {
        var pz, resp, newList;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                setStatus('loading');
                if (!pageNo) pageNo = 1;
                ref.current.pageNo = pageNo;
                pz = pageSize || 10;
                _context.next = 6;
                return Ajax.request({
                  url: url,
                  data: {
                    query: query,
                    pageNo: pageNo,
                    pageSize: pz,
                  },
                });

              case 6:
                resp = _context.sent;
                console.log('分页PAGE获取成功', query, resp);

                if (resp.status === 0) {
                  setTotal(resp.page.total);

                  if (pageNo === 1) {
                    newList = resp.page.list;
                  } else {
                    newList = [].concat(
                      list,
                      resp.page.list.filter(function(x) {
                        return list.find(function(y) {
                          return y.id === x.id;
                        })
                          ? false
                          : true;
                      }),
                    );
                  }

                  setList(newList);
                  ref.current.pageNo = pageNo + 1;

                  if (resp.page.pages < pz) {
                    setStatus('noMore');
                  } else {
                    setStatus('more');
                  }
                } else {
                  setStatus('noMore');
                }

                onReloadAfter && onReloadAfter(resp);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function reload(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  var loadMore = /*#__PURE__*/ (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!(status === 'noMore')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.next = 4;
                return reload(ref.current.pageNo);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }),
    );

    return function loadMore() {
      return _ref2.apply(this, arguments);
    };
  })();

  return {
    list: list,
    setList: setList,
    status: status,
    setStatus: setStatus,
    reload: reload,
    loadMore: loadMore,
    total: total,
    setQuery: setQuery,
  };
}
function useOptionFormListHook(props) {
  var url = props.url,
    _props$query = props.query,
    query = _props$query === void 0 ? '' : _props$query;

  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    list = _useState10[0],
    setList = _useState10[1];

  var _useState11 = useState({}),
    _useState12 = _slicedToArray(_useState11, 2),
    optionsMap = _useState12[0],
    setOptionsMap = _useState12[1];

  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    options = _useState14[0],
    setOptions = _useState14[1];

  useEffect(function() {
    var cacheKey = url + query.toString();
    var res = getObCache(cacheKey);

    if (res) {
      refresh(res);
    } else {
      Ajax.request({
        url: url,
        data: {
          query: query,
        },
      }).then(function(res) {
        if (res.status == 0 && res.list) {
          setObCache(cacheKey, res, props.expiresTime || 0);
          refresh(res);
        }
      });
    }
  }, []);

  var refresh = function refresh(res) {
    var newOptions = [];
    var newOptionsMap = {};
    res.list.forEach(function(item) {
      newOptionsMap[item.id] = item;
      newOptions.push({
        label: item.name,
        value: item.id,
      });
    });
    setList(res.list);
    setOptionsMap(newOptionsMap);
    setOptions(newOptions);
  };

  return {
    list: list,
    optionsMap: optionsMap,
    options: options,
  };
}
var chHooks = {
  usePage: usePage,
  useOptionFormListHook: useOptionFormListHook,
};

// @type Function | @dec 去掉json里的空属性
var deleteObjectEmptyKey = function deleteObjectEmptyKey(data) {
  Object.keys(data).forEach(function(key) {
    if (data[key] === undefined || data[key] === null || data[key] === '') {
      delete data[key];
    }
  });
};

var chFormats = {
  deleteObjectEmptyKey: deleteObjectEmptyKey,
};

var ChUtils = {
  chHooks: chHooks,
  chFormats: chFormats,
  Ajax: Ajax,
};

var options = [
  {
    code: '110000',
    value: '北京市',
    label: '北京市',
    children: [
      {
        code: '110101',
        value: '东城区',
        label: '东城区',
      },
      {
        code: '110102',
        value: '西城区',
        label: '西城区',
      },
      {
        code: '110105',
        value: '朝阳区',
        label: '朝阳区',
      },
      {
        code: '110106',
        value: '丰台区',
        label: '丰台区',
      },
      {
        code: '110107',
        value: '石景山区',
        label: '石景山区',
      },
      {
        code: '110108',
        value: '海淀区',
        label: '海淀区',
      },
      {
        code: '110109',
        value: '门头沟区',
        label: '门头沟区',
      },
      {
        code: '110111',
        value: '房山区',
        label: '房山区',
      },
      {
        code: '110112',
        value: '通州区',
        label: '通州区',
      },
      {
        code: '110113',
        value: '顺义区',
        label: '顺义区',
      },
      {
        code: '110114',
        value: '昌平区',
        label: '昌平区',
      },
      {
        code: '110115',
        value: '大兴区',
        label: '大兴区',
      },
      {
        code: '110116',
        value: '怀柔区',
        label: '怀柔区',
      },
      {
        code: '110117',
        value: '平谷区',
        label: '平谷区',
      },
      {
        code: '110118',
        value: '密云区',
        label: '密云区',
      },
      {
        code: '110119',
        value: '延庆区',
        label: '延庆区',
      },
    ],
  },
];

var css_248z$2 = '';
styleInject(css_248z$2);

var _excluded = ['inputtype', 'itemshow'];
var Option = Select.Option;
var FormItemType;

(function(FormItemType) {
  FormItemType['input'] = 'input';
  FormItemType['radioGroup'] = 'radio-group';
  FormItemType['select'] = 'select';
  FormItemType['upload'] = 'upload';
  FormItemType['multipleSelect'] = 'mutipleSelect';
  FormItemType['regionSelect'] = 'region-select';
})(FormItemType || (FormItemType = {}));

var ChForm = function(_ref) {
  var formData = _ref.formData,
    onFinish = _ref.onFinish,
    form = _ref.form,
    editor = _ref.editor,
    layout = _ref.layout,
    submitname = _ref.submitname,
    showclear = _ref.showclear,
    className = _ref.className;

  if (!form) {
    var _useForm = useForm();

    var _useForm2 = _slicedToArray(_useForm, 1);

    form = _useForm2[0];
  }

  var _layout = layout || {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  }; // @type JSX Function | @dec 渲染单个formItem

  var renderFormItem = function renderFormItem(item) {
    var _item$options, _item$options2;

    var dom;

    switch (item.type) {
      case 'input':
        dom = /*#__PURE__*/ React.createElement(Input, {
          type: item.inputtype,
          placeholder: item.placeholder,
        });
        break;

      case 'radio-group':
        dom = /*#__PURE__*/ React.createElement(Radio.Group, {
          options: item.options,
          optionType: 'button',
          buttonStyle: 'solid',
        });
        break;

      case 'select':
        dom = /*#__PURE__*/ React.createElement(
          Select,
          {
            placeholder: item.placeholder,
          },
          (_item$options = item.options) === null || _item$options === void 0
            ? void 0
            : _item$options.map(function(item, index) {
                return /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    key: index,
                    value: item.value,
                  },
                  item.label,
                );
              }),
        );
        break;

      case 'upload':
        dom = /*#__PURE__*/ React.createElement(
          Upload,
          {
            headers: item.uploadheader,
            multiple: true,
            name: item.uploadname || 'file',
            action: item.uploadurl ? item.uploadurl : '/fileUpload',
            listType: item.uploadType,
          },
          /*#__PURE__*/ React.createElement(
            Button,
            {
              icon: /*#__PURE__*/ React.createElement(UploadOutlined, null),
            },
            '\u70B9\u51FB\u6587\u4EF6',
          ),
        );
        break;

      case 'mutipleSelect':
        dom = /*#__PURE__*/ React.createElement(
          Select,
          {
            placeholder: item.placeholder,
            mode: 'multiple',
          },
          (_item$options2 = item.options) === null || _item$options2 === void 0
            ? void 0
            : _item$options2.map(function(item, index) {
                return /*#__PURE__*/ React.createElement(
                  Option,
                  {
                    key: '_' + index,
                    value: item.value,
                  },
                  item.label,
                );
              }),
        );
        break;

      case 'region-select':
        dom = /*#__PURE__*/ React.createElement(Cascader, {
          options: options,
          placeholder: item.placeholder || '请选择地区',
        });
        break;

      default:
        dom = /*#__PURE__*/ React.createElement(Input, {
          placeholder: item.placeholder,
        });
    }

    return dom;
  };

  var buildFormItemProps = function buildFormItemProps(item) {
    item.key = item.key || 'formData_'.concat(item.name);

    var inputtype = item.inputtype,
      itemshow = item.itemshow,
      ob = _objectWithoutProperties(item, _excluded);

    return ob;
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
    },
    /*#__PURE__*/ React.createElement(
      Form,
      _objectSpread2(
        _objectSpread2(
          {
            preserve: false,
            form: form,
          },
          _layout,
        ),
        {},
        {
          onFinish: onFinish,
        },
      ),
      /*#__PURE__*/ React.createElement(
        Row,
        null,
        formData &&
          formData.map(function(item, index) {
            var layout = item.layout || {
              span: 24,
            };
            var formItemProps = buildFormItemProps(item);

            if (item.itemshow && !item.itemshow(editor, form)) {
              return null;
            }

            return /*#__PURE__*/ React.createElement(
              Col,
              _objectSpread2(
                {
                  key: formItemProps.key || index,
                },
                layout,
              ),
              /*#__PURE__*/ React.createElement(
                Form.Item,
                _objectSpread2({}, formItemProps),
                renderFormItem(item),
              ),
            );
          }),
        /*#__PURE__*/ React.createElement(
          Col,
          {
            offset: 1,
            span: 4,
          },
          onFinish &&
            /*#__PURE__*/ React.createElement(
              Form.Item,
              null,
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  type: 'primary',
                  htmlType: 'submit',
                },
                submitname || '确定',
              ),
              showclear &&
                /*#__PURE__*/ React.createElement(
                  Button,
                  {
                    onClick: function onClick() {
                      var _form;

                      (_form = form) === null || _form === void 0
                        ? void 0
                        : _form.resetFields();
                    },
                    style: {
                      marginLeft: 10,
                    },
                  },
                  '\u6E05\u7A7A\u9009\u9879',
                ),
            ),
        ),
      ),
    ),
  );
};

var css_248z$3 = '';
styleInject(css_248z$3);

var chTablePanel = /*#__PURE__*/ forwardRef(function(props, ref) {
  var columns = props.columns,
    url = props.url,
    urlAdd = props.urlAdd,
    urlDelete = props.urlDelete,
    urlUpdate = props.urlUpdate,
    formData = props.formData,
    searchFormData = props.searchFormData,
    expandable = props.expandable,
    query = props.query,
    onEditBefore = props.onEditBefore,
    onEditFormat = props.onEditFormat,
    actions = props.actions;

  var _ChUtils$chHooks$useP = ChUtils.chHooks.usePage({
      url: url,
      pageSize: 10,
      query: query || {},
    }),
    list = _ChUtils$chHooks$useP.list,
    reload = _ChUtils$chHooks$useP.reload,
    total = _ChUtils$chHooks$useP.total,
    setQuery = _ChUtils$chHooks$useP.setQuery,
    status = _ChUtils$chHooks$useP.status;

  var _useForm = useForm(),
    _useForm2 = _slicedToArray(_useForm, 1),
    form = _useForm2[0];

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    editor = _useState2[0],
    setEditor = _useState2[1];

  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showEditModal = _useState4[0],
    setShowEditModal = _useState4[1];

  useEffect(function() {
    if (ref) {
      ref.current = {
        status: status,
        setQuery: setQuery,
        total: total,
        list: list,
        reload: reload,
        form: form,
        editor: editor,
        showEditModal: showEditModal,
      };
    }
  }, []);

  var doDeleteItem = function doDeleteItem(id) {
    ChUtils.Ajax.request({
      url: urlDelete,
      data: {
        id: id,
      },
    }).then(function(res) {
      if (res && res.status == 0) {
        reload();
      }
    });
  };

  var doAddItem = function doAddItem(item) {
    if (!onEditBefore);
    else {
      var hasError = onEditBefore(item);

      if (hasError) {
        return;
      }
    }

    ChUtils.Ajax.request({
      url: urlAdd,
      data: item,
    }).then(function(res) {
      if (res && res.status == 0) {
        reload();
        setShowEditModal(false);
        setEditor(null);
      }
    });
  };

  var doEditItem = function doEditItem(item) {
    item.id = editor.id;

    if (!onEditBefore);
    else {
      var hasError = onEditBefore(item);

      if (hasError) {
        return;
      }
    }

    ChUtils.Ajax.request({
      url: urlUpdate,
      data: item,
    }).then(function(res) {
      if (res && res.status == 0) {
        reload();
        setShowEditModal(false);
        setEditor(null);
      }
    });
  };

  var _columns = columns.concat([
    {
      title: '',
      dataIndex: 'option',
      key: 'option',
      render: function render(_, item) {
        return /*#__PURE__*/ React.createElement(
          'div',
          null,
          /*#__PURE__*/ React.createElement(
            Popconfirm,
            {
              title: '\u60A8\u786E\u5B9A\u5220\u9664\u6B64\u9879?',
              onConfirm: function onConfirm() {
                doDeleteItem(item.id);
              },
              okText: 'Yes',
              cancelText: 'No',
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'link',
              },
              '\u5220\u9664',
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Button,
            {
              onClick: function onClick() {
                var data = JSON.parse(JSON.stringify(item));
                setEditor(data);
                onEditFormat && onEditFormat(data);
                form.setFieldsValue(data);
                setShowEditModal(true); //   setShowGradeModal(true)
              },
              type: 'link',
            },
            '\u7F16\u8F91',
          ),
        );
      },
    },
  ]);

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'ch-tablePanel',
    },
    searchFormData &&
      searchFormData.length > 0 &&
      /*#__PURE__*/ React.createElement(ChForm, {
        showclear: true,
        submitname: '\u641C\u7D22',
        layout: {},
        formData: searchFormData,
        onFinish: function onFinish(values) {
          var q = Object.assign(query || {}, values);
          ChUtils.chFormats.deleteObjectEmptyKey(q);
          setQuery(q);
        },
      }),
    /*#__PURE__*/ React.createElement(
      Button,
      {
        style: {
          marginBottom: '10px',
        },
        onClick: function onClick() {
          setEditor({});
          setShowEditModal(true);
        },
        type: 'primary',
      },
      '\u6DFB\u52A0',
    ),
    actions &&
      actions.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(
          Button,
          {
            key: '_' + index,
            style: {
              marginLeft: 20,
            },
            type: item.type,
            onClick: function onClick() {
              item.onClick && item.onClick();
            },
          },
          item.text,
        );
      }),
    /*#__PURE__*/ React.createElement(Table, {
      loading: status == 'loading',
      rowKey: 'id',
      dataSource: list,
      columns: _columns,
      expandable: expandable,
      pagination: false,
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          marginTop: 20,
        },
      },
      /*#__PURE__*/ React.createElement(Pagination, {
        defaultCurrent: 1,
        total: total,
        pageSize: 10,
        onChange: function onChange(page, pageSize) {
          reload(page);
        },
      }),
    ),
    /*#__PURE__*/ React.createElement(
      Modal,
      {
        title: editor && editor.id ? '编辑' : '新增',
        destroyOnClose: true,
        okText: '\u786E\u5B9A',
        cancelText: '\u53D6\u6D88',
        visible: showEditModal,
        onOk: function onOk() {
          form.validateFields().then(function(values) {
            console.log('提交编辑', values);

            if (!editor.id) {
              doAddItem(values);
            } else {
              doEditItem(values);
            }
          });
        },
        onCancel: function onCancel() {
          return setShowEditModal(false);
        },
      },
      /*#__PURE__*/ React.createElement(ChForm, {
        editor: editor,
        form: form,
        formData: formData,
      }),
    ),
  );
});

var css_248z$4 =
  '.ch-layout {\n  height: 100%;\n}\n.ch-layout .ch-layoutSider {\n  background-color: #1c3039;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-avatar {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  color: #fff;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-item {\n  cursor: pointer;\n  color: #fff;\n  width: 80px;\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-item_selected {\n  cursor: pointer;\n  color: #fff;\n  width: 80px;\n  height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ch-layout .ch-layoutHeader {\n  height: 80px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n}\n';
styleInject(css_248z$4);

var Header = Layout.Header,
  Footer = Layout.Footer,
  Sider = Layout.Sider,
  Content = Layout.Content;
var index = function(props) {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      Layout,
      {
        className: 'ch-layout',
      },
      /*#__PURE__*/ React.createElement(
        Sider,
        {
          width: '80',
          className: 'ch-layoutSider',
          theme: 'light',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'ch-layoutSider-avatar',
          },
          props.adminIcon || 'CH',
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          null,
          props.sider.siderItems &&
            props.sider.siderItems.map(function(item, index) {
              return /*#__PURE__*/ React.createElement(
                'div',
                {
                  onClick: function onClick() {
                    return item.click();
                  },
                  key: item.text,
                  className:
                    props.sider.currentItem == index + 1
                      ? 'ch-layoutSider-item_selected'
                      : 'ch-layoutSider-item',
                },
                /*#__PURE__*/ React.createElement('span', null, item.icon),
                /*#__PURE__*/ React.createElement('div', null, item.text),
              );
            }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        Layout,
        null,
        /*#__PURE__*/ React.createElement(
          Header,
          {
            className: 'ch-layoutHeader',
          },
          props.header,
        ),
        /*#__PURE__*/ React.createElement(Content, null, props.children),
      ),
    ),
  );
};

var css_248z$5 =
  '.action-arrow-down {\n  transform: scale(1.2, 0.8);\n  font-size: 12px;\n  margin: 0px 3px;\n  transition: transform 0.3s;\n}\n.action-arrow-down_active {\n  transform: scale(1.2, 0.8) rotate(0.5turn);\n}\n.ch-dropdown-content {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.chDropdown-demo {\n  background-color: rebeccapurple;\n}\n';
styleInject(css_248z$5);

var index$1 = function(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dropdownVisible = _useState2[0],
    setDropdownVisible = _useState2[1];

  console.log(props.menuItems);
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      Dropdown,
      {
        trigger: props.trigger || ['hover'],
        onVisibleChange: function onVisibleChange(value) {
          setDropdownVisible(value);
        },
        placement: 'bottomCenter',
        overlay: /*#__PURE__*/ React.createElement(
          Menu,
          null,
          props.menuItems &&
            props.menuItems.map(function(item) {
              return /*#__PURE__*/ React.createElement(
                Menu.Item,
                {
                  className: props.itemClassName,
                  key: item.text,
                },
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    onClick: function onClick() {
                      if (!item.click || !item.click()) {
                        setDropdownVisible(false);
                      }
                    },
                  },
                  item.text,
                ),
              );
            }),
        ),
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'ch-dropdown-content '.concat(props.className || ''),
        },
        props.text ||
          /*#__PURE__*/ React.createElement(
            'div',
            null,
            '\u4E0B\u62C9\u83DC\u5355',
          ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: dropdownVisible
              ? 'action-arrow-down action-arrow-down_active'
              : 'action-arrow-down',
          },
          /*#__PURE__*/ React.createElement(DownOutlined, null),
        ),
      ),
    ),
  );
};

var css_248z$6 =
  '.ch-sortor {\n  width: 14px;\n  line-height: 12px;\n}\n.ch-sortor-up {\n  line-height: 12px;\n  position: relative;\n  top: 3px;\n}\n.ch-sortor-down {\n  line-height: 12px;\n  position: relative;\n  top: -3px;\n}\n';
styleInject(css_248z$6);

var index$2 = function(props) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'ch-sortor ' + (props.className || ''),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style:
          props.value == 'up'
            ? {
                color: props.color || '#000',
              }
            : {},
        className: 'ch-sortor-up',
      },
      /*#__PURE__*/ React.createElement(CaretUpOutlined, null),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style:
          props.value == 'down'
            ? {
                color: props.color || '#000',
              }
            : {},
        className: 'ch-sortor-down',
      },
      /*#__PURE__*/ React.createElement(CaretDownOutlined, null),
    ),
  );
};

var css_248z$7 = '';
styleInject(css_248z$7);

var splitK = function splitK(num) {
  var decimal = String(num).split('.')[1] || ''; //小数部分

  var tempArr = [];
  var revNumArr = String(num)
    .split('.')[0]
    .split('')
    .reverse(); //倒序

  for (var i in revNumArr) {
    tempArr.push(revNumArr[i]);

    if ((Number(i) + 1) % 3 === 0 && Number(i) != revNumArr.length - 1) {
      tempArr.push(',');
    }
  }

  var zs = tempArr.reverse().join(''); //整数部分

  return decimal ? zs + '.' + decimal : zs;
};

var index$3 = function(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/ React.createElement('span', null, splitK(value || 0));
};

export {
  BlockSelector as ChBlockSelector,
  index$1 as ChDropdown,
  ChForm,
  index as ChLayout,
  chMoveBook as ChMoveBook,
  index$3 as ChPriceSplit,
  index$2 as ChSortor,
  chTablePanel as ChTablePanel,
  ChUtils,
  FormItemType,
};