define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.HaxLogo=void 0;/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */ /**
 * `hax-logo`
 * `logo element for hax, obviously as a hax capable element.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @demo demo/index.html
 */var HaxLogo=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(HaxLogo,_HTMLElement);babelHelpers.createClass(HaxLogo,[{key:"html",// render function
get:function get(){return"\n<style>:host {\n  display: block;\n  --hax-logo-letter-spacing: -16px;\n  --hax-logo-font-size: 64px;\n  --hax-logo-inner-font-size: 48px;\n  --hax-logo-innerslot-margin: 8px 4px 4px 4px;\n  --hax-logo-inner-margin: 8px -4px 8px 8px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n:host([toupper]) {\n  text-transform: uppercase;\n}\n\n:host([size=\"mini\"]) {\n  --hax-logo-letter-spacing: -6px;\n  --hax-logo-font-size: 18px;\n  --hax-logo-inner-font-size: 16px;\n  --hax-logo-innerslot-margin: 0px 0px 2px 4px;\n  --hax-logo-inner-margin: 0px 0px 2px 4px;\n}\n\n:host([size=\"small\"]) {\n  --hax-logo-font-size: 36px;\n  --hax-logo-inner-font-size: 28px;\n  --hax-logo-innerslot-margin: 4px 0px 4px 4px;\n  --hax-logo-inner-margin: 4px -4px 4px 8px;\n}\n\n:host([size=\"large\"]) {\n  --hax-logo-font-size: 346px;\n  --hax-logo-inner-font-size: 100px;\n}\n.the {\n  display: none;\n}\n.web {\n  display: none;\n}\n:host([size=\"large\"]) .left {\n  margin-right:-72px;\n}\n:host([size=\"large\"]) .right {\n  margin-left: -44px;\n}\n:host([size=\"large\"]) .the {\n  letter-spacing: 20px;\n  margin-left: 20px;\n  text-transform: uppercase;\n  display: inline-block;\n}\n:host([size=\"large\"]) .web {\n  letter-spacing: 20px;\n  margin-left: 20px;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.wrap {\n  font-family: 'Press Start 2P', cursive;\n  font-size: var(--hax-logo-font-size);\n  letter-spacing: var(--hax-logo-letter-spacing);\n  text-align: center;\n}\n.inner {\n  font-size: var(--hax-logo-inner-font-size);\n  display: inline-block;\n  vertical-align: text-top;\n  margin: var(--hax-logo-inner-margin);\n  letter-spacing: -2px;\n}\n.innerslot {\n  font-size: var(--hax-logo-inner-font-size);\n  display: inline-block;\n  vertical-align: text-top;\n  margin: var(--hax-logo-innerslot-margin);\n  letter-spacing: -2px;\n}</style>\n<span class=\"wrap\"><span class=\"left\">&lt;</span><span class=\"innerslot\"><slot name=\"pre\"></slot></span><span class=\"inner\">h-a-x<br><span class=\"the\">the</span><br><span class=\"web\">web</span></bt></span><span class=\"innerslot\"><slot name=\"post\"></slot></span><span class=\"right\">&gt;</span></span>"}// haxProperty definition
}],[{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Hax logo",description:"logo element for hax, obviously as a hax capable element.",icon:"icons:android",color:"green",groups:["Logo"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{attribute:"size",description:"Size of the HAX logo to place",inputMethod:"select",options:{mini:"Mini",small:"Small",normal:"Normal",large:"Large"},required:!1},{attribute:"toupper",description:"Whether to transform logo to upper case",inputMethod:"boolean",required:!1}],advanced:[]}}}// properties available to the custom element for data binding
},{key:"properties",get:function get(){var props={};if(babelHelpers.get(babelHelpers.getPrototypeOf(HaxLogo),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(HaxLogo),"properties",this))}return props}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"hax-logo"}/**
   * life cycle
   */}]);function HaxLogo(){var _this,delayRender=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!1;babelHelpers.classCallCheck(this,HaxLogo);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(HaxLogo).call(this));if(!window.__haxLogoFontLoaded){var link=document.createElement("link");link.setAttribute("href","https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");link.setAttribute("rel","stylesheet");document.head.appendChild(link);window.__haxLogoFontLoaded=!0}// set tag for later use
_this.tag=HaxLogo.tag;_this.template=document.createElement("template");_this.attachShadow({mode:"open"});if(!delayRender){_this.render()}return _this}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(HaxLogo,[{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}}},{key:"render",value:function render(){this.shadowRoot.innerHTML=null;this.template.innerHTML=this.html;if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(this.template,this.tag)}this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"size",get:function get(){return this.getAttribute("size")},set:function set(newValue){if(newValue){this.setAttribute("size",newValue)}}},{key:"toupper",get:function get(){return this.getAttribute("toupper")},set:function set(newValue){if(newValue){this.setAttribute("toupper","toupper")}}}]);return HaxLogo}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.HaxLogo=HaxLogo;window.customElements.define(HaxLogo.tag,HaxLogo)});