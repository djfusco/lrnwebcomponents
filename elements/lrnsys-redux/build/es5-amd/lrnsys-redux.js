define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysRedux = void 0;
  function _templateObject_227c1fb0d6fd11e8a73b5df5f5ff7c15() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_227c1fb0d6fd11e8a73b5df5f5ff7c15 = function() {
      return data;
    };
    return data;
  }
  var LrnsysRedux = (function(_PolymerElement) {
    babelHelpers.inherits(LrnsysRedux, _PolymerElement);
    function LrnsysRedux() {
      babelHelpers.classCallCheck(this, LrnsysRedux);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnsysRedux.__proto__ || Object.getPrototypeOf(LrnsysRedux)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnsysRedux,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnsysRedux.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnsysRedux.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnsysRedux.haxProperties,
              LrnsysRedux.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_227c1fb0d6fd11e8a73b5df5f5ff7c15()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrnsys redux",
                description: "Automated conversion of lrnsys-redux/",
                icon: "icons:android",
                color: "green",
                groups: ["Redux"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
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
            return "lrnsys-redux";
          }
        }
      ]
    );
    return LrnsysRedux;
  })(_polymerElement.PolymerElement);
  _exports.LrnsysRedux = LrnsysRedux;
  window.customElements.define(LrnsysRedux.tag, LrnsysRedux);
});