define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.TeamMember=void 0;function _templateObject_8fa2bfa0d70b11e880360d52061dc4aa(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_8fa2bfa0d70b11e880360d52061dc4aa=function(){return data};return data}var TeamMember=function(_PolymerElement){babelHelpers.inherits(TeamMember,_PolymerElement);function TeamMember(){babelHelpers.classCallCheck(this,TeamMember);return babelHelpers.possibleConstructorReturn(this,(TeamMember.__proto__||Object.getPrototypeOf(TeamMember)).apply(this,arguments))}babelHelpers.createClass(TeamMember,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(TeamMember.prototype.__proto__||Object.getPrototypeOf(TeamMember.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(TeamMember.haxProperties,TeamMember.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_8fa2bfa0d70b11e880360d52061dc4aa())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Team member",description:"Automated conversion of team-member/",icon:"icons:android",color:"green",groups:["Member"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function get(){return{}}},{key:"tag",get:function get(){return"team-member"}}]);return TeamMember}(_polymerElement.PolymerElement);_exports.TeamMember=TeamMember;window.customElements.define(TeamMember.tag,TeamMember)});