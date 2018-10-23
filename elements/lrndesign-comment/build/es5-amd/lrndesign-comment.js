define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignComment = void 0;
  function _templateObject_a988a150d6f711e88a944722b381f932() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_a988a150d6f711e88a944722b381f932 = function() {
      return data;
    };
    return data;
  }
  var LrndesignComment = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignComment, _PolymerElement);
    function LrndesignComment() {
      babelHelpers.classCallCheck(this, LrndesignComment);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignComment.__proto__ || Object.getPrototypeOf(LrndesignComment)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignComment,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignComment.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignComment.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignComment.haxProperties,
              LrndesignComment.tag,
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
              _templateObject_a988a150d6f711e88a944722b381f932()
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
                title: "Lrndesign comment",
                description: "Automated conversion of lrndesign-comment/",
                icon: "icons:android",
                color: "green",
                groups: ["Comment"],
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
            return "lrndesign-comment";
          }
        }
      ]
    );
    return LrndesignComment;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignComment = LrndesignComment;
  window.customElements.define(LrndesignComment.tag, LrndesignComment);
});