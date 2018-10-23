define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignBlockquote = void 0;
  function _templateObject_1d5dc1b0d6f711e8b07f1d79b767f745() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_1d5dc1b0d6f711e8b07f1d79b767f745 = function() {
      return data;
    };
    return data;
  }
  var LrndesignBlockquote = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignBlockquote, _PolymerElement);
    function LrndesignBlockquote() {
      babelHelpers.classCallCheck(this, LrndesignBlockquote);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignBlockquote.__proto__ ||
          Object.getPrototypeOf(LrndesignBlockquote)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignBlockquote,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignBlockquote.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignBlockquote.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignBlockquote.haxProperties,
              LrndesignBlockquote.tag,
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
              _templateObject_1d5dc1b0d6f711e8b07f1d79b767f745()
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
                title: "Lrndesign blockquote",
                description: "Automated conversion of lrndesign-blockquote/",
                icon: "icons:android",
                color: "green",
                groups: ["Blockquote"],
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
            return "lrndesign-blockquote";
          }
        }
      ]
    );
    return LrndesignBlockquote;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignBlockquote = LrndesignBlockquote;
  window.customElements.define(LrndesignBlockquote.tag, LrndesignBlockquote);
});