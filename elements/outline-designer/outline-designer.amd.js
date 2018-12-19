define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/social-icons.js","./node_modules/@polymer/iron-icons/device-icons.js","./node_modules/@polymer/iron-pages/iron-pages.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/iron-ajax/iron-ajax.js","./node_modules/@polymer/iron-list/iron-list.js","./node_modules/@polymer/iron-swipeable-container/iron-swipeable-container.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@polymer/paper-progress/paper-progress.js","./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","./node_modules/@polymer/app-layout/app-header/app-header.js","./node_modules/@lrnwebcomponents/item-overlay-ops/item-overlay-ops.js","./node_modules/@lrnwebcomponents/lrnsys-outline/lrnsys-outline.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js","./node_modules/@lrnwebcomponents/editable-list/editable-list.js","./lib/sortable-list.js","./lib/pagemap.js"],function(_exports,_polymerElement,async,_paperIconButton,_ironIcons,_socialIcons,_deviceIcons,_ironPages,_ironImage,_paperButton,_paperCard,_ironAjax,_ironList,_ironSwipeableContainer,_paperTooltip,_paperProgress,_appToolbar,_appHeader,_itemOverlayOps,_lrnsysOutline,_simpleColors,_simpleModal,_editableList,_sortableList,_pagemap){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.OutlineDesigner=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_9098cdb0fe4211e8b627c7523b19a1a7(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\napp-toolbar {\n  background-color: var(--simple-colors-default-theme-light-blue-1, #4285f4);\n  color: var(--simple-colors-default-theme-grey-12, #222222);\n  margin: 20px 0;\n}\n\n#viewmode, #detailsmode {\n  transition: .3s all ease;\n  -webkit-transition: .3s all ease;\n  -moz-transition: .3s all ease;\n  -ms-transition: .3s all ease;\n  -o-transition: .3s all ease;\n}\n.rotate-90 {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n}\n\n.breadcrumb-arrow:first-child {\n    display: none;\n}\n.breadcrumb-arrow {\n  color: var(--breadcrumb-color1,rgb(67, 110, 144));\n  margin: -2px 6px 0 6px;\n}\n.breadcrumb {\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  background-color: transparent;\n  line-height: 34px;\n  font-size: 18px;\n  color: var(--breadcrumb-color1,rgb(67, 110, 144));\n  opacity: 0.8;\n}\n\npaper-progress {\n  display: block;\n  width: 100%;\n  --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n  --paper-progress-container-color: transparent;\n}\n.card-wrapper {\n  padding: 16px;\n}\n\n#sort .card-wrapper {\n  background: #dddddd;\n  display: inline-block;\n  float: left;\n  margin: 16px;\n  vertical-align: top;\n}\n\npaper-card {\n  width: 250px;\n  height: 300px;\n  display: block;\n  visibility: visible;\n  opacity: 1;\n}\n\n#addbutton {\n  opacity: .6;\n  background-color: #dddddd;\n}\n.add-button {\n  width: 200px;\n  height: 200px;\n  margin: auto;\n  display: flex;\n}\n\npaper-card.expanded {\n  min-height: 300px;\n}\n\niron-list {\n  flex: 1 1 auto;\n}\n\n.low-detail,\n.mid-detail,\n.high-detail {\n  visibility: visible;\n  opacity: 1;\n  transition: .6s all ease;\n  -webkit-transition: .6s all ease;\n  -moz-transition: .6s all ease;\n  -ms-transition: .6s all ease;\n  -o-transition: .6s all ease;\n}\n\n:host([details-mode=\"low\"]) .mid-detail,\n:host([details-mode=\"low\"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n\n:host([details-mode=\"mid\"]) .high-detail {\n  visibility: hidden;\n  opacity: 0;\n}\n:host([details-mode=\"mid\"]) .mid-detail {\n  visibility: visible;\n  opacity: 1;\n}\n\npaper-card.card-low-detail {\n  width: 150px;\n  height: 150px;\n}\npaper-card.card-mid-detail {\n  width: 250px;\n  height: 250px;\n}\npaper-card.card-high-detail {\n  width: 250px;\n  height: 300px;\n}\n\n#minimaparea {\n  position: fixed;\n  top: 125px;\n  right: 0;\n  width: 100px;\n  height: 100%;\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: .3s all linear;\n  background-color: transparent;\n  -webkit-transition: .3s all linear;\n  -moz-transition: .3s all linear;\n  -ms-transition: .3s all linear;\n  -o-transition: .3s all linear;\n}\n#minimaparea.show-minimap {\n  background-color: white;\n  opacity: .5;\n  visibility: visible;\n}\n#minimaparea.show-minimap:hover {\n  opacity: .9;\n}\n\n.tf-tree{transition: .3s all ease;font-size:16px;overflow:auto}.tf-tree *{transition: .3s all ease;box-sizing:border-box;margin:0;padding:0}.tf-tree ul{display:inline-flex}.tf-tree li{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;padding:0 1em;position:relative}.tf-tree li ul{margin:2em 0}.tf-tree li li:before{border-top:.0625em solid #000;content:\"\";display:block;height:.0625em;left:-.03125em;position:absolute;top:-1.03125em;width:100%}.tf-tree li li:first-child:before{left:calc(50% - .03125em);max-width:calc(50% + .0625em)}.tf-tree li li:last-child:before{left:auto;max-width:calc(50% + .0625em);right:calc(50% - .03125em)}.tf-tree li li:only-child:before{display:none}.tf-tree li li:only-child>.tf-nc:before,.tf-tree li li:only-child>.tf-node-content:before{height:1.0625em;top:-1.0625em}.tf-tree .tf-nc,.tf-tree .tf-node-content{border:.0625em solid #000;display:inline-block;padding:.5em 1em;position:relative}.tf-tree .tf-nc:before,.tf-tree .tf-node-content:before{top:-1.03125em}.tf-tree .tf-nc:after,.tf-tree .tf-nc:before,.tf-tree .tf-node-content:after,.tf-tree .tf-node-content:before{border-left:.0625em solid #000;content:\"\";display:block;height:1em;left:calc(50% - .03125em);position:absolute;width:.0625em}.tf-tree .tf-nc:after,.tf-tree .tf-node-content:after{top:calc(100% + .03125em)}.tf-tree .tf-nc:only-child:after,.tf-tree .tf-node-content:only-child:after,.tf-tree>ul>li>.tf-nc:before,.tf-tree>ul>li>.tf-node-content:before{display:none}.tf-tree.tf-gap-sm li{padding:0 .6em}.tf-tree.tf-gap-sm li>.tf-nc:before,.tf-tree.tf-gap-sm li>.tf-node-content:before{height:.6em;top:-.6em}.tf-tree.tf-gap-sm li>.tf-nc:after,.tf-tree.tf-gap-sm li>.tf-node-content:after{height:.6em}.tf-tree.tf-gap-sm li ul{margin:1.2em 0}.tf-tree.tf-gap-sm li li:before{top:-.63125em}.tf-tree.tf-gap-sm li li:only-child>.tf-nc:before,.tf-tree.tf-gap-sm li li:only-child>.tf-node-content:before{height:.6625em;top:-.6625em}.tf-tree.tf-gap-lg li{padding:0 1.5em}.tf-tree.tf-gap-lg li>.tf-nc:before,.tf-tree.tf-gap-lg li>.tf-node-content:before{height:1.5em;top:-1.5em}.tf-tree.tf-gap-lg li>.tf-nc:after,.tf-tree.tf-gap-lg li>.tf-node-content:after{height:1.5em}.tf-tree.tf-gap-lg li ul{margin:3em 0}.tf-tree.tf-gap-lg li li:before{top:-1.53125em}.tf-tree.tf-gap-lg li li:only-child>.tf-nc:before,.tf-tree.tf-gap-lg li li:only-child>.tf-node-content:before{height:1.5625em;top:-1.5625em}.tf-tree li.tf-dotted-children .tf-nc:after,.tf-tree li.tf-dotted-children .tf-nc:before,.tf-tree li.tf-dotted-children .tf-node-content:after,.tf-tree li.tf-dotted-children .tf-node-content:before{border-left-style:dotted}.tf-tree li.tf-dotted-children li:before{border-top-style:dotted}.tf-tree li.tf-dotted-children>.tf-nc:before,.tf-tree li.tf-dotted-children>.tf-node-content:before{border-left-style:solid}.tf-tree li.tf-dashed-children .tf-nc:after,.tf-tree li.tf-dashed-children .tf-nc:before,.tf-tree li.tf-dashed-children .tf-node-content:after,.tf-tree li.tf-dashed-children .tf-node-content:before{border-left-style:dashed}.tf-tree li.tf-dashed-children li:before{border-top-style:dashed}.tf-tree li.tf-dashed-children>.tf-nc:before,.tf-tree li.tf-dashed-children>.tf-node-content:before{border-left-style:solid}\n.tf-label {\n  transition: .3s all ease;\n  cursor: pointer;\n}\n\n.node-high-detail li iron-image {\n  height: 50px;\n  position: static;\n}\n.node-high-detail li .tf-label {\n  z-index: 1;\n  position: relative;\n  font-size: 1.75em;\n  padding: 8px;\n  background-color: rgba(250,250,250,.8);\n}\n\n  .node-low-detail .tf-nc {\n    height: 32px;\n    width: 32px;\n    background-color: dodgerblue;\n    border-color: dodgerblue;\n    padding: 0;\n    border-radius: 50%;\n    overflow: hidden;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n  }\n\n  \n  .node-low-detail .tf-nc:before,\n  .node-low-detail .tf-nc:after {\n    border-left-color: dodgerblue;\n    border-left-width: 2px;\n  }\n  .node-low-detail li li:before {\n    border-top-color: dodgerblue;\n    border-top-width: 2px;\n  }</style>\n<style is=\"custom-style\" include=\"simple-colors\"></style>\n<iron-ajax\n  auto\n  url=\"[[outlineSchemaUrl]]\"\n  handle-as=\"json\"\n  on-response=\"handleResponse\"\n  last-response=\"{{manifest}}\"\n  loading=\"{{__loading}}\">\n</iron-ajax>\n<app-header reveals>\n  <app-toolbar>\n    View: [[viewModeLabel]]\n    <paper-icon-button on-tap=\"_toggleViewMode\" id=\"viewmode\" icon=\"[[viewModeIcon]]\"></paper-icon-button>\n    <paper-tooltip for=\"viewmode\">[[viewModeLabel]]</paper-tooltip>\n    Detail: [[detailsModeLabel]]\n    <paper-icon-button on-tap=\"_toggleDetailsMode\" id=\"detailsmode\" icon=\"[[detailsModeIcon]]\"></paper-icon-button>\n    <paper-tooltip for=\"detailsmode\">[[detailsModeLabel]]</paper-tooltip>\n    <div main-title class=\"flex layout breadcrumb_layout\">\n      <iron-icon class=\"breadcrumb-arrow\" icon=\"icons:chevron-right\"></iron-icon>\n      <a class=\"breadcrumb\" id=\"main\">[[manifest.title]]</a>\n\n          <iron-icon class=\"breadcrumb-arrow\" icon=\"icons:chevron-right\"></iron-icon>\n      <a class=\"breadcrumb\" id=\"second\">Lesson 2</a>\n\n          <iron-icon class=\"breadcrumb-arrow\" icon=\"icons:chevron-right\"></iron-icon>\n      <a class=\"breadcrumb\" id=\"third\">Math Basics</a>\n    </div>\n    <div>\n      <paper-icon-button on-tap=\"_toggleMiniMap\" id=\"minimap\" icon=\"device:gps-fixed\" title=\"Toggle outline mini map\"></paper-icon-button>\n      <paper-tooltip for=\"helpbutton\">Toggle mini-map</paper-tooltip>\n      <paper-icon-button id=\"helpbutton\" icon=\"icons:help\" title=\"help\"></paper-icon-button>\n      <paper-tooltip for=\"helpbutton\">Help</paper-tooltip>\n    </div>\n    <paper-progress value=\"10\" indeterminate bottom-item hidden$=\"[[!__loading]]\"></paper-progress>\n  </app-toolbar>\n</app-header>\n<iron-pages selected=\"[[selectedView]]\">\n  <section id=\"listpage\">\n    <iron-list id=\"ironlist\" items=\"[[manifest.items]]\" as=\"item\" grid>\n    <template>\n      <div class=\"card-wrapper\">\n      <item-overlay-ops fixed-height=\"140\" data-item-id$=\"[[item.id]]\" add=\"\" edit=\"\" remove=\"\" duplicate=\"\" move=\"\" edit-mode=\"\">\n        <paper-card class$=\"card-[[detailsMode]]-detail\" heading=\"[[item.title]]\" image=\"[[item.metadata.image]]\" elevation=\"2\" animated-shadow=\"false\">\n          <div class=\"card-content mid-detail\">[[item.description]]</div>\n          <div class=\"card-actions high-detail\">\n            <editable-list edit-mode=\"[[editMode]]\" items=\"[[manifest.items]]\">\n              <editable-list-item>[[item.title]]</editable-list-item>\n            </editable-list>\n            <ul>\n              <li>Page 1</li>\n              <iron-swipeable-container><li>Page 2</li></iron-swipeable-container>\n              <iron-swipeable-container><li>Page 3</li></iron-swipeable-container>\n            </ul>\n          </div>\n        </paper-card>\n      </item-overlay-ops>\n      </div>\n    </template>\n    </iron-list>\n  </section>\n  <section id=\"outlinepage\">\n    <lrnsys-outline id=\"outline\" items=\"{{manifest.items}}\" title=\"[[manifest.title]]\"></lrnsys-outline>\n  </section>\n  <section id=\"treepage\">\n    <div class$=\"node-[[detailsMode]]-detail tf-tree\">\n      <ul>\n        <template is=\"dom-repeat\" items=\"{{manifest.items}}\" as=\"item\" mutable-data>\n        <li>\n          <span class=\"tf-nc\">\n            <div class=\"tf-label\" id$=\"item-tip-[[item.id]]\">[[item.title]]</div>\n            <paper-tooltip for$=\"item-tip-[[item.id]]\">[[item.title]]</paper-tooltip>\n            <iron-image src=\"[[item.metadata.image]]\" preload sizing=\"cover\" class=\"high-detail\"></iron-image>\n          </span>\n        </li>\n        </template>\n      </ul>\n    </div>\n  </section>\n  <section id=\"sortpage\">\n    <sortable-list id=\"sort\" sortable=\".card-wrapper\" on-sort-finish=\"_onSortFinish\" dragging=\"{{dragging}}\">\n      <template is=\"dom-repeat\" items=\"{{manifest.items}}\" as=\"item\" mutable-data>\n        <div class=\"card-wrapper\">\n          <paper-card class$=\"card-[[detailsMode]]-detail\" data-item-id$=\"[[item.id]]\" heading=\"[[item.title]]\" image=\"[[item.metadata.image]]\" elevation=\"2\"\n            animated-shadow=\"false\">\n            <div class=\"card-content mid-detail\">[[item.description]]</div>\n            <div class=\"card-actions high-detail\"></div>\n          </paper-card>\n        </div>\n      </template>\n    </sortable-list>\n  </section>\n</iron-pages>\n<canvas id=\"minimaparea\"></canvas>\n<slot></slot>"]);_templateObject_9098cdb0fe4211e8b627c7523b19a1a7=function _templateObject_9098cdb0fe4211e8b627c7523b19a1a7(){return data};return data}var OutlineDesigner=function(_PolymerElement){babelHelpers.inherits(OutlineDesigner,_PolymerElement);function OutlineDesigner(){babelHelpers.classCallCheck(this,OutlineDesigner);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OutlineDesigner).apply(this,arguments))}babelHelpers.createClass(OutlineDesigner,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(OutlineDesigner.prototype),"connectedCallback",this).call(this);this.$.ironlist.addEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this));this.$.ironlist.addEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this));(0,_pagemap.pagemap)(this.$.minimaparea,{viewport:null,styles:{"ul,ol,li":"rgba(0, 0, 0, 0.08)","h1,h2,h3,h4,h5,h6,a":"rgba(0, 0, 0, 0.10)","lrnsys-outline-item":"rgba(0, 0, 0, 0.08)","p,section":"rgba(0, 0, 0, 0.02)"},back:"rgba(0, 0, 0, 0.02)",view:"rgba(0, 0, 0, 0.05)",drag:"rgba(0, 0, 0, 0.10)",interval:null})}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(OutlineDesigner.prototype),"disconnectedCallback",this).call(this);this.$.ironlist.removeEventListener("item-overlay-op-changed",this._overlayOpChanged.bind(this));this.$.ironlist.removeEventListener("item-overlay-option-selected",this._overlayOpSelected.bind(this))}},{key:"_toggleMiniMap",value:function _toggleMiniMap(e){this.miniMap=!this.miniMap}},{key:"_miniMapChanged",value:function _miniMapChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){if(newValue){this.$.minimap.icon="device:gps-fixed";this.$.minimaparea.classList.add("show-minimap")}else{this.$.minimap.icon="device:gps-off";this.$.minimaparea.classList.remove("show-minimap")}}}},{key:"_toggleViewMode",value:function _toggleViewMode(e){switch(this.viewMode){case"cards":this.viewMode="outline";break;case"outline":this.outlineData=this.$.outline.getData();this.viewMode="tree";break;case"tree":this.viewMode="drag";break;case"drag":this.viewMode="cards";break;}}},{key:"_toggleDetailsMode",value:function _toggleDetailsMode(e){switch(this.detailsMode){case"low":this.detailsMode="mid";break;case"mid":this.detailsMode="high";break;case"high":this.detailsMode="low";break;}}},{key:"_detailsModeChanged",value:function _detailsModeChanged(newValue,oldValue){var _this=this;if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){switch(newValue){case"low":this.detailsModeIcon="icons:apps";this.detailsModeLabel="Low";break;case"mid":this.detailsModeIcon="icons:view-module";this.detailsModeLabel="Medium";break;case"high":this.detailsModeIcon="icons:view-carousel";this.detailsModeLabel="High";break;}if(0===this.selectedView){async.microTask.run(function(){setTimeout(function(){_this.$.ironlist.fire("iron-resize");window.dispatchEvent(new Event("resize"))},50)})}}}},{key:"_onSortFinish",value:function _onSortFinish(e){console.log(e.detail)}},{key:"_overlayOpChanged",value:function _overlayOpChanged(e){console.log(e.detail);switch(e.detail.operation){case"add":console.log("add item");console.log(e.detail.element.getAttribute("data-item-id"));break;case"edit":console.log("edit item");console.log(e.detail.element.getAttribute("data-item-id"));break;}}},{key:"_overlayOpSelected",value:function _overlayOpSelected(e){console.log(e.detail);switch(e.detail.operation){case"move":if("option1"===e.detail.option){console.log("move left")}else if("option2"===e.detail.option){console.log("move right")}console.log(e.detail.element.getAttribute("data-item-id"));break;case"duplicate":if("option1"===e.detail.option){console.log("duplicate");console.log(e.detail.element.getAttribute("data-item-id"))}break;case"remove":if("option1"===e.detail.option){console.log("remove");console.log(e.detail.element.getAttribute("data-item-id"))}break;}}},{key:"_viewModeChanged",value:function _viewModeChanged(newValue,oldValue){var _this2=this;if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){switch(newValue){case"cards":this.$.viewmode.classList.add("rotate-90");this.selectedView=0;this.viewModeIcon="icons:view-module";this.viewModeLabel="Card view";async.microTask.run(function(){setTimeout(function(){_this2.$.ironlist.fire("iron-resize");window.dispatchEvent(new Event("resize"))},100)});break;case"outline":this.$.viewmode.classList.remove("rotate-90");this.selectedView=1;this.viewModeIcon="icons:view-list";this.viewModeLabel="Outline view";break;case"tree":this.$.viewmode.classList.add("rotate-90");this.selectedView=2;this.viewModeIcon="social:share";this.viewModeLabel="Tree view";break;case"drag":this.$.viewmode.classList.remove("rotate-90");this.selectedView=3;this.viewModeIcon="icons:touch-app";this.viewModeLabel="Draggable cards";break;}}}},{key:"_editModeChanged",value:function _editModeChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){console.log(newValue)}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_9098cdb0fe4211e8b627c7523b19a1a7())}},{key:"properties",get:function get(){return{viewMode:{name:"viewMode",type:"String",value:"cards",observer:"_viewModeChanged"},viewModeIcon:{name:"viewModeIcon",type:"String"},viewModeLabel:{name:"viewModeLabel",type:"String"},detailsMode:{name:"detailsMode",type:"String",value:"mid",reflectToAttribute:!0,observer:"_detailsModeChanged"},detailsModeIcon:{name:"detailsModeIcon",type:"String"},detailsModeLabel:{name:"detailsModeLabel",type:"String"},selectedView:{name:"selectedView",type:"Number"},editMode:{name:"editMode",type:"Boolean",value:!1,reflectToAttribute:!0,observer:"_editModeChanged"},miniMap:{name:"miniMap",type:"Boolean",value:!0,reflectToAttribute:!0,observer:"_miniMapChanged"},outlineSchemaUrl:{name:"outlineSchemaUrl",type:"String"},manifest:{name:"manifest",type:"Object",notify:!0},outlineData:{name:"outlineData",type:"Object",notify:!0}}}},{key:"tag",get:function get(){return"outline-designer"}}]);return OutlineDesigner}(_polymerElement.PolymerElement);_exports.OutlineDesigner=OutlineDesigner;window.customElements.define("outline-designer",OutlineDesigner)});