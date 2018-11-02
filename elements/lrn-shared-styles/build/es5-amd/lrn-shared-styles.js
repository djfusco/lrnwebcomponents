define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js"
], function(_exports, _polymerElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnSharedStyles = void 0;
  function _templateObject_85299970deab11e886ee2b6fe6b01a3f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_85299970deab11e886ee2b6fe6b01a3f = function() {
      return data;
    };
    return data;
  }
  var LrnSharedStyles = (function(_PolymerElement) {
    babelHelpers.inherits(LrnSharedStyles, _PolymerElement);
    function LrnSharedStyles() {
      babelHelpers.classCallCheck(this, LrnSharedStyles);
      return babelHelpers.possibleConstructorReturn(
        this,
        babelHelpers.getPrototypeOf(LrnSharedStyles).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnSharedStyles,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                babelHelpers.getPrototypeOf(LrnSharedStyles.prototype),
                "connectedCallback",
                this
              )
              .call(this);
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_85299970deab11e886ee2b6fe6b01a3f()
            );
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-shared-styles";
          }
        }
      ]
    );
    return LrnSharedStyles;
  })(_polymerElement.PolymerElement);
  _exports.LrnSharedStyles = LrnSharedStyles;
  window.customElements.define(LrnSharedStyles.tag, LrnSharedStyles);
});
