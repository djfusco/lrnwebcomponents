!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@polymer/polymer/lib/elements/dom-repeat.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@polymer/polymer/lib/elements/dom-repeat.js"],t):t((e=e||self).TaskList={},e.polymerElement_js,e.schemaBehaviors_js)}(this,function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function l(){var e,t,r=(e=['\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <h3><span property="oer:name">[[name]]</span></h3>\n      <ol>\n        <template is="dom-repeat" items="[[tasks]]" as="task">\n          <li><span property="oer:task">[[task.name]]</span></li>\n        </template>\n      </ol>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return r},r}var c=function(e){function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),s(this,o(c).apply(this,arguments))}var p,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,r.SchemaBehaviors(t.PolymerElement)),p=c,f=[{key:"template",get:function(){return t.html(l())}},{key:"tag",get:function(){return"task-list"}},{key:"observers",get:function(){return["_valueChanged(tasks.*)"]}},{key:"properties",get:function(){var e={name:{type:String,value:"Steps to completion"},relatedResource:{type:String},tasks:{type:Array,value:[],notify:!0},_resourceLink:{type:Object,computed:"_generateResourceLink(relatedResource)"}};return a(o(c),"properties",this)&&(e=Object.assign(e,a(o(c),"properties",this))),e}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Task list",description:"A list of tasks which is an ordered list",icon:"icons:list",color:"orange",groups:["Content","Instructional"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"name",title:"Name",description:"Name of the list",inputMethod:"textfield",icon:"editor:title"},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"name",title:"Name",description:"Name of the list",inputMethod:"textfield",icon:"editor:title"},{property:"relatedResource",title:"Related resource",description:"A reference to the related Schema resource",inputMethod:"textfield",icon:"editor:title"},{property:"tasks",title:"Tasks",description:"The tasks to be completed",inputMethod:"array",itemLabel:"label",properties:[{property:"name",title:"Name",description:"Name of the task",inputMethod:"textfield",required:!0},{property:"link",title:"Link",description:"Optional link",inputMethod:"textfield"}]}],advanced:[]}}}}],(u=[{key:"_generateResourceLink",value:function(e){this._resourceLink&&document.head.removeChild(this._resourceLink);var t=document.createElement("link");return t.setAttribute("property","oer:forComponent"),t.setAttribute("content",e),document.head.appendChild(t),t}},{key:"_valueChanged",value:function(e){for(var t in e.base)for(var r in e.base[t])this.notifyPath("tasks."+t+"."+r)}},{key:"connectedCallback",value:function(){a(o(c.prototype),"connectedCallback",this).call(this),this.setAttribute("typeof","oer:SupportingMaterial")}}])&&n(p.prototype,u),f&&n(p,f),c}();window.customElements.define(c.tag,c),e.TaskList=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=task-list.umd.js.map
