!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self)["st-yandex-maps"]={})}(this,function(e){"use strict";function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,o,n,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,n)}function a(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function u(e,t){var l=t.options,u=t.callbacks,p=t.map,d=t.useObjectManager,m=t.objectManagerClusterize,f={},r=[];if(e.forEach(function(e){e.clusterName?f[e.clusterName]=f[e.clusterName]?[].concat(y(f[e.clusterName]),[e]):[e]:r.push(e)}),Object.keys(f).forEach(function(e){var t=l[e]||{},r=u[e]||{},o=t.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";t.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(o);var n=t.clusterBalloonLayout||t.clusterLayout;delete t.clusterBalloonLayout;var a=n?ymaps.templateLayoutFactory.createClass(n):t.clusterBalloonContentLayout||"cluster#balloonTwoColumns";t.clusterBalloonContentLayout=a;var i=t.clusterIconContentLayout;if(t.clusterIconContentLayout=i&&ymaps.templateLayoutFactory.createClass(i),d){var s=new ymaps.ObjectManager(Object.assign({clusterize:m},t));Object.keys(r).forEach(function(e){s.clusters.events.add(e,r[e])}),s.add(f[e]),p.geoObjects.add(s)}else{var c=new ymaps.Clusterer(t);Object.keys(r).forEach(function(e){c.events.add(e,r[e])}),t.createCluster&&(c.createCluster=t.createCluster),c.add(f[e]),p.geoObjects.add(c)}}),r.length){var o=d?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;r.forEach(function(e){return o.add(e)}),p.geoObjects.add(o)}}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e,t){var a=[];return function e(t,r){if(t===r)return!0;if(t instanceof Date&&r instanceof Date)return+t==+r;if("object"!==i(t)||"object"!==i(r))return!1;if(function(e,t){for(var r=a.length;r--;)if(!(a[r][0]!==e&&a[r][0]!==t||a[r][1]!==t&&a[r][1]!==e))return!0;return!1}(t,r))return!0;a.push([t,r]);var o=Object.keys(t),n=o.length;if(Object.keys(r).length!==n)return!1;for(;n--;)if(!e(t[o[n]],r[o[n]]))return!1;return!0}(e,t)}var h=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,r,o;return t=e,(r=[{key:"$on",value:function(e,t){var r=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){r.events[e]=r.events[e].filter(function(e){return t!==e})}}},{key:"$emit",value:function(e,t){var r=this.events[e];r&&r.forEach(function(e){return e(t)})}}])&&a(t.prototype,r),o&&a(t,o),e}()),t=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function r(e){return 0===e.filter(function(e){return![].concat(t,["default"]).includes(e)}).length}function d(){var y=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,t){if(window.ymaps)return e();if(document.getElementById("st-yandex-maps"))h.$on("scriptIsLoaded",e);else{var r=document.createElement("SCRIPT"),o=y.apiKey,n=void 0===o?"":o,a=y.lang,i=void 0===a?"ru_RU":a,s=y.version,c=void 0===s?"2.1":s,l=y.coordorder,u=void 0===l?"latlong":l,p=y.debug,d=void 0!==p&&p?"debug":"release",m="lang=".concat(i).concat(n&&"&apikey=".concat(n),"&mode=").concat(d,"&coordorder=").concat(u),f="https://api-maps.yandex.ru/".concat(c,"/?").concat(m);r.setAttribute("src",f),r.setAttribute("async",""),r.setAttribute("defer",""),r.setAttribute("id","st-yandex-maps"),document.head.appendChild(r),h.scriptIsNotAttached=!1,r.onload=function(){ymaps.ready(function(){h.ymapReady=!0,h.$emit("scriptIsLoaded"),e()})},r.onerror=t}})}var m=h,f=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],g={pluginOptions:{},provide:function(){var t,n,a=this,r=[],i=[];return{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){a.myMap.geoObjects&&(r.push(e),t&&clearTimeout(t),t=setTimeout(function(){a.deleteMarkers(r),r=[]},0))},compareValues:function(e){var t=e.newVal,r=e.oldVal,o=e.marker;p(t,r)||(i.push(o),n&&clearTimeout(n),n=setTimeout(function(){a.setMarkers(i),i=[]},0))}}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null,markers:[],lastObject:null}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return r(e)}},detailedControls:{type:Object,validator:function(e){return r(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},showAllMarkers:Boolean},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var a=this;if(window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){if(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),f.forEach(function(t){return a.myMap.events.add(t,function(e){return a.$emit(t,e)})}),this.myMap.events.add("boundschange",function(e){var t=e.originalEvent,r=t.newZoom,o=t.newCenter,n=t.newBounds;a.$emit("boundschange",e),a.$emit("update:zoom",r),a.$emit("update:coords",o),a.$emit("update:bounds",n)}),this.detailedControls)Object.keys(this.detailedControls).forEach(function(e){a.myMap.controls.remove(e),a.myMap.controls.add(e,a.detailedControls[e])});!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap)}},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.setMarkers(t.markers)},0)},setMarkers:function(e){var t=this,r={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};if(this.markers!==e){var o=e.map(function(e){return t.useObjectManager?e.id:e.properties.get("markerId")});this.deleteMarkers(o),u(e,r),this.$emit("markers-was-change",o)}else u(e,r);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(a){var i=this;this.myMap.geoObjects.each(function(t){var r=[];if(i.useObjectManager)t.remove(a);else{var e,o=function(e){var t=e.properties.get("markerId");a.includes(t)&&r.push(e)};if(t.each)t.each(o),e=t.getLength();else if(t.getGeoObjects){var n=t.getGeoObjects();n.forEach(o),e=n.length}0===e||e===r.length?i.myMap.geoObjects.remove(t):r.length&&r.forEach(function(e){return t.remove(e)})}}),this.$emit("markers-was-delete",a)},addObject:function(e){this.myMap.geoObjects.add(e)},replaceObject:function(t){var s,r=this;return s=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.lastObject&&r.myMap.geoObjects.remove(r.lastObject),r.myMap.geoObjects.add(t),r.lastObject=Object.assign({},t);case 2:case"end":return e.stop()}},e)}),function(){var e=this,i=arguments;return new Promise(function(t,r){var o=s.apply(e,i);function n(e){c(o,t,r,n,a,"next",e)}function a(e){c(o,t,r,n,a,"throw",e)}n(void 0)})}()}},watch:{coordinates:function(e){this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0})},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(e){return e("section",{class:"ymap-container",ref:"mapContainer"},[e("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&e("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("st-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("st-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver(function(){e.myMap.container&&e.myMap.container.fitToViewport()});var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),m.scriptIsNotAttached){var r=this.debug;d(n(n(n({},this.$options.pluginOptions),this.settings),{},{debug:r}))}m.ymapReady?ymaps.ready(this.init):m.$on("scriptIsLoaded",function(){ymaps.ready(e.init)})},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},k=["placemark","polyline","rectangle","polygon","circle"],v=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],O={inject:["useObjectManager","addMarker","deleteMarker","compareValues"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return k.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},data:function(){return{unwatchArr:[]}},render:function(e){return this.$slots.balloon&&e("div",{style:"display: none;"},[this.$slots.balloon])},mounted:function(){var r=this;Object.keys(this.$props).forEach(function(e){r.unwatchArr.push(r.$watch(e,function(e,t){return r.compareValues({newVal:e,oldVal:t,marker:r.defineMarker()})}))}),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var r=this,e={};this.balloonTemplate&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.balloonTemplate)});this.$slots.balloon&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.$slots.balloon[0].elm.outerHTML)});var t={markerId:this.markerId,markerType:this.markerType||"placemark",coords:function t(e){return e.map(function(e){return Array.isArray(e)?t(e):+e})}(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:e};this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(t.iconContent=this.icon.content,t.iconLayout=this.icon.layout,t.iconImageHref=this.icon.imageHref,t.iconImageSize=this.icon.imageSize,t.iconImageOffset=this.icon.imageOffset,t.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(t.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):t.icon=this.icon;var o,n=function(e,t){var r=b(e);if(!t)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}(t.markerType,this.useObjectManager),a={hintContent:t.hintContent,iconContent:t.icon?t.icon.content:t.iconContent,markerId:t.markerId},i=t.balloon?{balloonContentHeader:t.balloon.header,balloonContentBody:t.balloon.body,balloonContentFooter:t.balloon.footer}:{},s=Object.assign(a,i,t.properties),c=t.iconLayout?{iconLayout:t.iconLayout,iconImageHref:t.iconImageHref,iconImageSize:t.iconImageSize,iconImageOffset:t.iconImageOffset,iconContentOffset:t.iconContentOffset,iconContentLayout:t.iconContentLayout}:{preset:t.icon&&"islands#".concat((o=t,(o.icon.color||"blue")+(o.icon.glyph?b(o.icon.glyph):o.icon.content?"Stretchy":"")),"Icon")},l=t.markerStroke?{strokeColor:t.markerStroke.color||"0066ffff",strokeOpacity:0<=parseFloat(t.markerStroke.opacity)?parseFloat(t.markerStroke.opacity):1,strokeStyle:t.markerStroke.style,strokeWidth:0<=parseFloat(t.markerStroke.width)?parseFloat(t.markerStroke.width):1}:{},u=t.markerFill?{fill:t.markerFill.enabled||!0,fillColor:t.markerFill.color||"0066ff99",fillOpacity:0<=parseFloat(t.markerFill.opacity)?parseFloat(t.markerFill.opacity):1,fillImageHref:t.markerFill.imageHref||""}:{},p=Object.assign(c,l,u,t.balloonOptions,t.options);"Circle"===n&&(t.coords=[t.coords,t.circleRadius]);var d,m,f,y={properties:s,options:p,markerType:n,coords:t.coords,clusterName:t.clusterName},h=(d=y,m=this.useObjectManager,this.$emit,(f=m?{type:"Feature",id:d.properties.markerId,geometry:{type:d.markerType,coordinates:d.coords},properties:d.properties,options:d.options}:new ymaps[d.markerType](d.coords,d.properties,d.options)).clusterName=d.clusterName,f);return this.useObjectManager||v.forEach(function(t){return h.events.add(t,function(e){return r.$emit(t,e)})}),h}},beforeDestroy:function(){this.unwatchArr.forEach(function(e){return e()}),this.deleteMarker(this.markerId)}};g.install=function e(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e.installed||(e.installed=!0,g.pluginOptions=r,t.component("yandex-map",g),t.component("ymap-marker",O))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(g);var j=d,M=g,C=O;e.default=g,e.loadYmap=j,e.yandexMap=M,e.ymapMarker=C,Object.defineProperty(e,"__esModule",{value:!0})});