// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/huanchen/Project/ch-ui/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/huanchen/Project/ch-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/huanchen/Project/ch-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/huanchen/Project/ch-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/huanchen/Project/ch-ui/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/foo",
        "component": require('/Users/huanchen/Project/ch-ui/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Foo/index.md",
          "updatedTime": 1628581836754,
          "componentName": "Foo",
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "group": {
            "path": "/foo",
            "title": "Foo"
          }
        },
        "title": "Foo"
      },
      {
        "path": "/component/ch-block-selector",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChBlockSelector/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChBlockSelector/index.md",
          "updatedTime": 1628581652009,
          "slugs": [
            {
              "depth": 2,
              "value": "MoveBook",
              "heading": "movebook"
            }
          ],
          "title": "MoveBook",
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "MoveBook"
      },
      {
        "path": "/component/ch-dropdown",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChDropdown/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChDropdown/index.md",
          "updatedTime": 1628581652012,
          "componentName": "ChDropdown",
          "title": "Dropdown(下拉按钮动画版本)",
          "slugs": [
            {
              "depth": 2,
              "value": "Dropdown",
              "heading": "dropdown"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Dropdown(下拉按钮动画版本)"
      },
      {
        "path": "/component/ch-form",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChForm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChForm/index.md",
          "updatedTime": 1628581652014,
          "componentName": "ChForm",
          "title": "Form(表单渲染处理组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "Form",
              "heading": "form"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Form(表单渲染处理组件)"
      },
      {
        "path": "/component/ch-guitar-tool",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChGuitarTool/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChGuitarTool/index.md",
          "updatedTime": 1628581652018,
          "componentName": "ChGuitarTool",
          "title": "ChGuitarTool",
          "slugs": [
            {
              "depth": 2,
              "value": "ChGuitarTool",
              "heading": "chguitartool"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "ChGuitarTool"
      },
      {
        "path": "/component/ch-layout",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChLayout/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChLayout/index.md",
          "updatedTime": 1628581652022,
          "componentName": "ChLayout",
          "title": "Layout(管理后台组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "Layout",
              "heading": "layout"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Layout(管理后台组件)"
      },
      {
        "path": "/component/ch-move-book",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChMoveBook/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChMoveBook/index.md",
          "updatedTime": 1628581652025,
          "title": "MoveBook(流动书本动画)",
          "slugs": [
            {
              "depth": 2,
              "value": "MoveBook",
              "heading": "movebook"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "MoveBook(流动书本动画)"
      },
      {
        "path": "/component/ch-sortor",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChSortor/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChSortor/index.md",
          "updatedTime": 1628581652031,
          "componentName": "ChSortor",
          "title": "Sortor(箭头排序器)",
          "slugs": [
            {
              "depth": 2,
              "value": "Sortor(箭头排序器)",
              "heading": "sortor箭头排序器"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Sortor(箭头排序器)"
      },
      {
        "path": "/component/ch-table-panel",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/ChTablePanel/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChTablePanel/index.md",
          "updatedTime": 1628581652037,
          "componentName": "ChTablePanel",
          "title": "TablePanel(常规表格组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "TablePanel",
              "heading": "tablepanel"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "TablePanel(常规表格组件)"
      },
      {
        "path": "/component/format/price-split",
        "component": require('/Users/huanchen/Project/ch-ui/src/component/Format/PriceSplit/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/Format/PriceSplit/index.md",
          "updatedTime": 1628581652044,
          "componentName": "PriceSplit",
          "title": "PriceSplit(金额小数点转换器)",
          "slugs": [
            {
              "depth": 2,
              "value": "PriceSplit",
              "heading": "pricesplit"
            }
          ],
          "group": {
            "path": "/component/format",
            "title": "Component"
          }
        },
        "title": "PriceSplit(金额小数点转换器)"
      },
      {
        "path": "/",
        "component": require('/Users/huanchen/Project/ch-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1628580888326,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      },
      {
        "path": "/component",
        "meta": {},
        "exact": true,
        "redirect": "/component/ch-block-selector"
      },
      {
        "path": "/component/format",
        "meta": {},
        "exact": true,
        "redirect": "/component/format/price-split"
      }
    ],
    "title": "影遇组件库",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
