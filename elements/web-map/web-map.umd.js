!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js"],e):e(t.polymerLegacy_js,t.polymer_dom_js)}(this,function(t,e){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var o=document.createElement("div");function a(){var t=n(['\n    <style include="map-styles">\n     :host {\n       display: none;\n     }\n    </style>\n    \x3c!-- hide any feature, image or tile elements the author includes --\x3e\n    <slot></slot>\n']);return a=function(){return t},t}o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="map-styles">\n  <template>\n    <style>\n/* required styles  copied from leaflet.css and mapml.css for use in web-map and related\n   custom elements */\n/* this is required by tiles which are actually divs with multiple images in them */\n.leaflet-tile img {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n        \n/* MapML treats images like map layers, so far as fade animation is concerned */\n.leaflet-fade-anim .leaflet-image-layer {\n\twill-change: opacity;\n\t}\n        \n.leaflet-image-layer {\n        visibility: hidden;\n        }\n.leaflet-image-loaded {\n        visibility: inherit;\n        }\n.mapml-popup-overflow {\n        overflow: auto;\n        }\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers "stretching" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\t}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t/* Fallback for FF which doesn\'t support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-tile {\n\twill-change: opacity;\n\t}\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t     -o-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\twill-change: transform;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t     -o-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn\'t have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline: 0;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-container a.leaflet-active {\n\toutline: 2px solid orange;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a,\n.leaflet-bar a:hover {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px \'Lucida Console\', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers.png);\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers-2x.png);\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n/* Default icon URLs */\n.leaflet-default-icon-path {\n\tbackground-image: url(images/marker-icon.png);\n\t}\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.7);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover {\n\ttext-decoration: underline;\n\t}\n.leaflet-container .leaflet-control-attribution,\n.leaflet-container .leaflet-control-scale {\n\tfont-size: 11px;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\tfont-size: 11px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.5);\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 19px;\n\tline-height: 1.4;\n\t}\n.leaflet-popup-content p {\n\tmargin: 18px 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\n\t-webkit-transform: rotate(45deg);\n\t   -moz-transform: rotate(45deg);\n\t    -ms-transform: rotate(45deg);\n\t     -o-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 4px 4px 0 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 18px;\n\theight: 14px;\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\n\tcolor: #c3c3c3;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover {\n\tcolor: #999;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\tborder-bottom: 1px solid #ddd;\n\tborder-top: 1px solid #ddd;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\tzoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n.leaflet-oldie .leaflet-popup-tip-container {\n\tmargin-top: -1px;\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-clickable {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: "";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(o),t.Polymer({_template:t.html(a()),is:"layer-",properties:{src:{type:String,reflectToAttribute:!0,observer:"_srcChanged"},label:{type:String,value:"Layer",reflectToAttribute:!0,observer:"_labelChanged"},checked:{type:Boolean,reflectToAttribute:!0,observer:"_toggleChecked"},disabled:{type:Boolean,reflectToAttribute:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_toggleHidden"},legendLinks:{type:Object,reflectToAttribute:!1,value:function(){return[]}}},_srcChanged:function(){this._layer&&this._layer.initialize(this.src,this)},_labelChanged:function(){this.parentElement&&this.parentElement._map&&this._toggleHidden(!1)},_apiToggleChecked:!0,_toggleChecked:function(){var t=this.parentElement&&this.parentElement._map;t&&(this._apiToggleChecked&&(t.hasLayer(this._layer)?t.removeLayer(this._layer):t.addLayer(this._layer),this._validateDisabled()),this._apiToggleChecked=!0)},_onLayerExtentLoad:function(t){this._layer._legendUrl&&(this.legendLinks=[{type:"application/octet-stream",href:this._layer._legendUrl,rel:"legend",lang:null,hreflang:null,sizes:null}]),this._layer._title&&"Layer"===this.label&&(this.label=this._layer._title),this._layer._map&&this._layer.fire("attached",this._layer)},_validateDisabled:function(){var t=this._layer,e=t._map;if(e){var n=t.getZoomBounds(),o=e.getZoom(),a=n&&n.min<=o&&o<=n.max,l=t._projectionMatches(e)&&a&&e.getPixelBounds().intersects(t.getLayerExtentBounds(e));this.disabled=!l}},_onLayerChange:function(){this._layer._map&&(this._apiToggleChecked=!1,this.checked=this._layer._map.hasLayer(this._layer))},_toggleHidden:function(t){this.parentElement&&this.parentElement._map&&this.parentElement.controls&&(t?this.parentElement._layerControl.removeLayer(this._layer):(this._layerControl=this.parentElement._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label)),this._validateDisabled())},detached:function(){this._layer._map&&this._layer._map.removeLayer(this._layer),this._layerControl&&!this.hidden&&this._layerControl.removeLayer(this._layer),this._removeEvents()},ready:function(){var t=this.baseURI?this.baseURI:document.baseURI;this._layer=M.mapMLLayer(this.src?new URI(this.src).resolve(new URI(t)).toString():null,this),this._layer.on("extentload",this._onLayerExtentLoad,this),this._setUpEvents()},_attachedToMap:function(){for(var t=0,n=1,o=e.dom(this).parentNode.children;t<o.length;t++)if("LAYER-"===e.dom(this).parentNode.children[t].nodeName){if(e.dom(this).parentNode.children[t]===this)break;n++}L.setOptions(this._layer,{zIndex:n,opacity:window.getComputedStyle(this).opacity}),this._layer._map=e.dom(this).parentNode._map,this._layer.fire("attached"),this.checked&&this._layer.addTo(this._layer._map),this._layer.on("add remove",this._onLayerChange,this),e.dom(this).parentNode.controls&&!this.hidden&&(this._layerControl=e.dom(this).parentNode._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label)),this._layer._map.on("moveend",this._validateDisabled,this),this._layer._map.fire("moveend")},attached:function(){"MAP"===e.dom(this).parentNode.nodeName?e.dom(this).parentNode._map&&this._attachedToMap():console.log("ERROR: "+this.localName+"#"+this.id+" must be a child of a map element")},_removeEvents:function(){this._layer&&this._layer.off("loadstart",!1,this)},_setUpEvents:function(){this._layer.on("loadstart",function(){this.fire("loadstart",{target:this})},this)}});var l=document.createElement("div");function i(){var t=n(['\n  \x3c!-- use the leaflet-styles style module --\x3e\n  <style include="map-styles">\n    /* make sure the map element doesn\'t get selected and styled by document styles */\n    :host {\n        display: inline-block !important;\n        position: relative !important;\n    }\n    /* try to constrain the map and the leaflet div#map to the size of the container */\n        :host, :host #map {\n         max-width: 100%;\n         min-width: 100%;\n    }\n    /* this is a hack for shady DOM, as max-width messes with Leaflet tiles */\n    :host img {\n        max-width: none !important;\n    }\n    #map:focus {\n        outline: 2px  double lightskyblue;\n    }\n  </style>\n  \x3c!-- giving the map div a tabindex allows the map to display its focus. --\x3e\n  \x3c!-- see the #map:focus selector in styles, above. --\x3e\n  <div id="map" tabindex="0"></div>\n  <slot></slot>\n']);return i=function(){return t},t}l.setAttribute("style","display: none;"),l.innerHTML='<dom-module id="map-area">\n<style include="map-styles">\n :host {\n   display: none;\n }\n</style>\n\n</dom-module>',document.head.appendChild(l),t.Polymer({is:"map-area",extends:"area",properties:{alt:{type:String,reflectToAttribute:!0},coords:{type:String,reflectToAttribute:!0},href:{type:String,reflectToAttribute:!0},shape:{type:String,value:"default",reflectToAttribute:!0},rel:{type:String,reflectToAttribute:!0},type:{type:String,reflectToAttribute:!0},target:{type:String,reflectToAttribute:!0}},attached:function(){this.parentElement._map&&this._attachedToMap()},_attachedToMap:function(){this._map=this.parentElement._map;var t=this.parentElement._map;if(!this._feature){var n=this._styleToPathOptions(window.getComputedStyle(this)),o=this.coords?this._coordsToArray(this.coords):null;if(o&&this.parentElement.poster)for(var a=(this.parentElement.poster.width-this.parentElement.width)/2,l=0;l<o.length;l++)o[l][0]=o[l][0]-a;if("marker"===this.shape)this.alt&&(n.title=this.alt),this._feature=L.marker(t.containerPointToLatLng(o[0]),n).addTo(t);else if("circle"===this.shape){var i=parseInt(this.coords.split(",")[2]),r=L.point(o[0]).add(L.point(0,i)),s=t.containerPointToLatLng(r),p=t.containerPointToLatLng(o[0]),h=t.distance(p,s);this._feature=L.circle(p,h,n).addTo(t)}else if(this.shape&&"rect"!==this.shape)"line"===this.shape?this._feature=L.polyline(this._pointsToLatLngs(o),n).addTo(t):"poly"===this.shape?this._feature=L.polygon(this._pointsToLatLngs(o),n).addTo(t):"default"===this.shape&&(this._feature=L.rectangle(t.getBounds(),n).addTo(t));else{var f=L.latLngBounds(t.containerPointToLatLng(o[0]),t.containerPointToLatLng(o[1]));this._feature=L.rectangle(f,n).addTo(t)}if("marker"!==this.shape&&this.alt){var c=L.SVG.create("title"),d=document.createTextNode(this.alt);e.dom(c).appendChild(d),e.dom(this._feature._path).appendChild(c)}this.href&&this._feature.on("click",function(){this.href&&window.open(this.href)},this)}},detached:function(){this._map.removeLayer(this._feature),delete this._feature},_coordsToArray:function(t){for(var e=1,n=[],o=t.split(",");e<o.length;e+=2)n.push([parseInt(o[e-1]),parseInt(o[e])]);return n},_pointsToLatLngs:function(t){var e=[];if(this._map)for(var n=0,o=this._map;n<t.length;n++)e.push(o.containerPointToLatLng(t[n]));return e},_styleToPathOptions:function(t){var e={};return"none"!==t.stroke?(e.stroke=!0,e.color=t.stroke,e.opacity=t.strokeOpacity,e.weight=parseInt(t.strokeWidth),e.dashArray=t.strokeDasharray,e.lineCap=t.strokeLinecap,e.lineJoin=t.strokeLinejoin):e.stroke=!1,"none"!==t.fill?(e.fill=!0,e.fillColor=t.fill,e.fillOpacity=t.fillOpacity,e.fillRule=t.fillRule):e.fill=!1,e}}),t.Polymer({_template:t.html(i()),is:"web-map",extends:"map",factoryImpl:function(t,e,n,o,a,l,i){this.width=t,this.height=e,this.lat=n||this.lat,this.lon=o||this.lon,this.zoom=a||this.zoom,this.projection=l||"OSMTILE",this.controls=i||this.controls},properties:{lat:{type:Number,value:0,reflectToAttribute:!0},lon:{type:Number,value:0,reflectToAttribute:!0},zoom:{type:Number,value:0,reflectToAttribute:!0},projection:{type:String,value:"OSMTILE",reflectToAttribute:!1},width:{type:Number,value:null,reflectToAttribute:!0},height:{type:Number,value:null,reflectToAttribute:!0},layers:{type:Object,value:function(){return this.getElementsByTagName("layer-")}},areas:{type:Object,value:function(){return this.getElementsByTagName("area")}},controls:{type:Boolean,reflectToAttribute:!0}},observers:["_widthChanged(width)","_heightChanged(height)","_toggleControls(controls)"],_toggleControls:function(t){if(this._map)if(t){this._zoomControl=L.control.zoom().addTo(this._map),this._layerControl=M.mapMlLayerControl(null,{collapsed:!0}).addTo(this._map);for(var e=0;e<this.layers.length;e++)this.layers[e].hidden||(this._layerControl.addOverlay(this.layers[e]._layer,this.layers[e].label),this._map.on("moveend",this.layers[e]._validateDisabled,this.layers[e]),this.layers[e]._layerControl=this._layerControl)}else this._map.removeControl(this._layerControl),this._map.removeControl(this._zoomControl)},_widthChanged:function(t){this.style.width=t+"px",this.$.map.style.width=t+"px",this._map&&this._map.invalidateSize(!1)},_heightChanged:function(t){this.style.height=t+"px",this.$.map.style.height=t+"px",this._map&&this._map.invalidateSize(!1)},zoomTo:function(t,e,n){n=n||this.zoom;var o=new L.LatLng(t,e);this._map.setView(o,n),this.zoom=n,this.lat=o.lat,this.lon=o.lng},_updateMapCenter:function(){this.lat=this._map.getCenter().lat,this.lon=this._map.getCenter().lng,this.zoom=this._map.getZoom()},ready:function(){if(L.Icon.Default.imagePath=function(){var t,e,n,o,a=document.querySelector('link[rel="import"][href*="web-map.html"]'),l=(a?a.import:document).getElementsByTagName("script"),i=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,e=l.length;t<e;t++)if((n=l[t].src).match(i))return((o=n.split(i)[0])?o+"/":"")+"images"}(),this.hasAttribute("name")){var t=this.getAttribute("name");t&&(this.poster=document.querySelector('img[usemap="#'+t+'"]'),this.poster&&(L.Browser.gecko&&this.poster.removeAttribute("usemap"),e.dom(this.$.map).appendChild(this.poster)))}},detached:function(){this._removeEvents()},attached:function(){this.async(function(){var t=window.getComputedStyle(this),e=t.width,n=t.height,o=parseInt(e.replace("px","")),a=parseInt(n.replace("px",""));if(""!==e&&""!==n&&(this.width&&this.width===o?this.$.map.style.width=this.width+"px":(this.$.map.style.width=e,this.width=o),this.height&&this.height===a?this.$.map.style.height=this.height+"px":(this.$.map.style.height=a,this.height=a),!this._map)){this._map=L.map(this.$.map,{center:new L.LatLng(this.lat,this.lon),projection:this.projection,crs:M[this.projection],zoom:this.zoom,zoomControl:!1,fadeAnimation:!0}),this.controls&&(this._layerControl=M.mapMlLayerControl(null,{collapsed:!0}).addTo(this._map),this._zoomControl=L.control.zoom().addTo(this._map)),this._attributionControl=this._map.attributionControl.setPrefix('<a href="https://www.w3.org/community/maps4html/" title="W3C Maps4HTML Community Group">Maps4HTML</a> | <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');for(var l=0;l<this.layers.length;l++)this.layers[l]._attachedToMap();for(l=0;l<this.areas.length;l++)this.areas[l]._attachedToMap();this.layers[0]&&void 0===this.layers[0]._layer.error&&this.layers[0]._layer._extent&&this.poster&&(this.poster.style.display="none"),this._setUpEvents(),this.fire("load",{target:this})}},10)},_removeEvents:function(){this._map&&(this._map.off("preclick click dblclick mousemove mouseover mouseout mousedown mouseup contextmenu",!1,this),this._map.off("load movestart move moveend zoomstart zoom zoomend",!1,this))},_setUpEvents:function(){this._map.on("load",function(){this.fire("load",{target:this})},this),this._map.on("preclick",function(t){this.fire("preclick",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("click",function(t){this.fire("click",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("dblclick",function(t){this.fire("dblclick",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("mousemove",function(t){this.fire("mousemove",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("mouseover",function(t){this.fire("mouseover",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("mouseout",function(t){this.fire("mouseout",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("mousedown",function(t){this.fire("mousedown",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("mouseup",function(t){this.fire("mouseup",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("contextmenu",function(t){this.fire("contextmenu",{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y})},this),this._map.on("movestart",function(){this._updateMapCenter(),this.fire("movestart",{target:this})},this),this._map.on("move",function(){this._updateMapCenter(),this.fire("move",{target:this})},this),this._map.on("moveend",function(){this._updateMapCenter(),this.fire("moveend",{target:this})},this),this._map.on("zoomstart",function(){this._updateMapCenter(),this.fire("zoomstart",{target:this})},this),this._map.on("zoom",function(){this._updateMapCenter(),this.fire("zoom",{target:this})},this),this._map.on("zoomend",function(){this._updateMapCenter(),this.fire("zoomend",{target:this})},this)}})});
//# sourceMappingURL=web-map.umd.js.map