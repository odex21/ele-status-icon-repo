'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var validators = require('../../../utils/validators.js');
require('../../../hooks/index.js');
require('./descriptions-row.js');
var token = require('./token.js');
var descriptionsRow_vue_vue_type_script_lang = require('./descriptions-row.vue_vue_type_script_lang.js');
var index = require('../../../hooks/use-common-props/index.js');

var script = vue.defineComponent({
  name: "ElDescriptions",
  components: {
    [descriptionsRow_vue_vue_type_script_lang["default"].name]: descriptionsRow_vue_vue_type_script_lang["default"]
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 3
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      validator: validators.isValidComponentSize
    },
    title: {
      type: String,
      default: ""
    },
    extra: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots }) {
    vue.provide(token.elDescriptionsKey, props);
    const descriptionsSize = index.useSize();
    const flattedChildren = (children) => {
      const temp = Array.isArray(children) ? children : [children];
      const res = [];
      temp.forEach((child) => {
        if (Array.isArray(child.children)) {
          res.push(...flattedChildren(child.children));
        } else {
          res.push(child);
        }
      });
      return res;
    };
    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = span;
      }
      return node;
    };
    const getRows = () => {
      var _a;
      const children = flattedChildren((_a = slots.default) == null ? void 0 : _a.call(slots)).filter((node) => {
        var _a2;
        return ((_a2 = node == null ? void 0 : node.type) == null ? void 0 : _a2.name) === "ElDescriptionsItem";
      });
      const rows = [];
      let temp = [];
      let count = props.column;
      let totalSpan = 0;
      children.forEach((node, index) => {
        var _a2;
        const span = ((_a2 = node.props) == null ? void 0 : _a2.span) || 1;
        if (index < children.length - 1) {
          totalSpan += span > count ? count : span;
        }
        if (index === children.length - 1) {
          const lastSpan = props.column - totalSpan % props.column;
          temp.push(filledNode(node, lastSpan, count, true));
          rows.push(temp);
          return;
        }
        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(filledNode(node, span, count));
          rows.push(temp);
          count = props.column;
          temp = [];
        }
      });
      return rows;
    };
    return {
      descriptionsSize,
      getRows
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
