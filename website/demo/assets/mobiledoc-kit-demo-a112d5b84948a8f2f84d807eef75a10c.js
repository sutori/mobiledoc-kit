"use strict";define("mobiledoc-kit-demo/app",["exports","ember","ember/resolver","ember/load-initializers","mobiledoc-kit-demo/config/environment"],function(e,t,o,d,i){var n;t["default"].MODEL_FACTORY_INJECTIONS=!0,n=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:o["default"]}),d["default"](n,i["default"].modulePrefix),e["default"]=n}),define("mobiledoc-kit-demo/components/app-version",["exports","ember-cli-app-version/components/app-version","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,i=d.name,n=d.version;e["default"]=t["default"].extend({version:n,name:i})}),define("mobiledoc-kit-demo/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-component-card",["exports","ember-mobiledoc-editor/components/mobiledoc-component-card/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-dom-renderer",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/index"],function(e,t,o){var d=t["default"].computed,i=t["default"].run;e["default"]=t["default"].Component.extend({domRenderer:d(function(){return new window.MobiledocDOMRenderer}),didRender:function(){var e=this,t=this.get("domRenderer"),d=this.get("mobiledoc");i(function(){var i=e.$(".rendered-mobiledoc");i.empty(),d&&t.render(d,i[0],o.cardsHash)})}})}),define("mobiledoc-kit-demo/components/mobiledoc-editor",["exports","ember-mobiledoc-editor/components/mobiledoc-editor/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-link-button",["exports","ember-mobiledoc-editor/components/mobiledoc-link-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-link-prompt",["exports","ember-mobiledoc-editor/components/mobiledoc-link-prompt/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-markup-button",["exports","ember-mobiledoc-editor/components/mobiledoc-markup-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-section-button",["exports","ember-mobiledoc-editor/components/mobiledoc-section-button/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/mobiledoc-toolbar",["exports","ember-mobiledoc-editor/components/mobiledoc-toolbar/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/components/tether-to-selection",["exports","ember-mobiledoc-editor/components/tether-to-selection/component"],function(e,t){e["default"]=t["default"]}),define("mobiledoc-kit-demo/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/controllers/index",["exports","ember","mobiledoc-kit-demo/mobiledocs/index"],function(e,t,o){var d=t["default"].$;e["default"]=t["default"].Controller.extend({init:function(){this._super.apply(this,arguments);var e=o.simple;this.set("mobiledoc",e),this.set("editedMobiledoc",e)},actions:{changeMobiledoc:function(){var e=d("#select-mobiledoc"),t=e.val(),i=o[t];this.set("mobiledoc",i),this.set("editedMobiledoc",i)},didEdit:function(e){this.set("editedMobiledoc",e)}}})}),define("mobiledoc-kit-demo/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("mobiledoc-kit-demo/helpers/format-object",["exports","ember"],function(e,t){function o(e){var t=d(e,1),o=t[0];return JSON.stringify(o,null,"  ")}e.formatObject=o;var d=function(){function e(e,t){var o=[],d=!0,i=!1,n=void 0;try{for(var a,r=e[Symbol.iterator]();!(d=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);d=!0);}catch(l){i=!0,n=l}finally{try{!d&&r["return"]&&r["return"]()}finally{if(i)throw n}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=t["default"].Helper.helper(o)}),define("mobiledoc-kit-demo/helpers/hash",["exports","ember-mobiledoc-editor/helpers/hash"],function(e,t){e["default"]=t["default"],e.hash=t.hash}),define("mobiledoc-kit-demo/helpers/in-array",["exports","ember-mobiledoc-editor/helpers/in-array"],function(e,t){e["default"]=t["default"],e.inArray=t.inArray}),define("mobiledoc-kit-demo/helpers/mobiledoc-cards-list",["exports","ember","mobiledoc-kit-demo/mobiledoc-cards/index"],function(e,t,o){function d(){return o.cardsList}e.mobiledocCardsList=d,e["default"]=t["default"].Helper.helper(d)}),define("mobiledoc-kit-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=o["default"].APP,i=d.name,n=d.version;e["default"]={name:"App Version",initialize:t["default"](i,n)}}),define("mobiledoc-kit-demo/initializers/export-application-global",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){function d(){var e=arguments[1]||arguments[0];if(o["default"].exportApplicationGlobal!==!1){var d,i=o["default"].exportApplicationGlobal;d="string"==typeof i?i:t["default"].String.classify(o["default"].modulePrefix),window[d]||(window[d]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[d]}}))}}e.initialize=d,e["default"]={name:"export-application-global",initialize:d}}),define("mobiledoc-kit-demo/mobiledoc-cards/image",["exports"],function(e){var t={name:"image-card",display:{setup:function(e){var t=document.createElement("img");t.src="http://placehold.it/200x75",e.appendChild(t)}}};e.imageCard=t}),define("mobiledoc-kit-demo/mobiledoc-cards/index",["exports","mobiledoc-kit-demo/mobiledoc-cards/input","mobiledoc-kit-demo/mobiledoc-cards/simple","mobiledoc-kit-demo/mobiledoc-cards/selfie","mobiledoc-kit-demo/mobiledoc-cards/image"],function(e,t,o,d,i){function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var a,r=[t.inputCard,o.simpleCard,d.selfieCard,i.imageCard],l=(a={},n(a,"input-card",t.inputCard),n(a,"simple-card",o.simpleCard),n(a,"selfie-card",d.selfieCard),n(a,"image-card",i.imageCard),a);e.cardsList=r,e.cardsHash=l}),define("mobiledoc-kit-demo/mobiledoc-cards/input",["exports","ember"],function(e,t){var o=t["default"].$,d={name:"input-card",display:{setup:function(e,t,d,i){o(e).empty();var n="I am in display mode";i.name&&(n="Hello, "+i.name+"!");var a=o("<div>"+n+"</div>"),r=o("<button>Edit</button>");r.on("click",d.edit),d.edit&&a.append(r),o(e).append(a)}},edit:{setup:function(e,t,d){o(e).empty();var i=o("<div>What is your name?</div>");i.innerHTML="What is your name?";var n=o('<input placeholder="Enter your name...">'),a=o("<button>Save</button>");a.on("click",function(){var e=n.val();d.save({name:e})}),i.append(n),i.append(a),o(e).append(i)}}};e.inputCard=d}),define("mobiledoc-kit-demo/mobiledoc-cards/selfie",["exports","ember"],function(e,t){var o=t["default"].$,d={name:"selfie-card",display:{setup:function(e,t,d,i){o(e).empty(),i.src?e.appendChild(o('<div><img src="'+i.src+'"><br><div>You look nice today.</div>'+(d.edit?"<div><button id='go-edit'>Take a better picture</button></div>":"")+"</div>")[0]):e.appendChild(o("<div>Hello there!"+(d.edit?"<button id='go-edit'>Click here to take a picture</button>":"")+"</div>")[0]),o("#go-edit").click(function(){d.edit()})}},edit:{setup:function(e,t,d){o(e).empty();var i=o('<div><video id="video" width="160" height="120" autoplay></video><button id="snap">Snap Photo</button><canvas id="canvas" width="160" height="120"></canvas></div>');e.appendChild(i[0]);var n=document.getElementById("canvas"),a=n.getContext("2d"),r=document.getElementById("video"),l={video:!0},c=function(){alert("error getting video feed")};navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getMedia(l,function(e){var t;navigator.mozGetUserMedia?r.mozSrcObject=e:(t=window.URL||window.webkitURL,r.src=t.createObjectURL(e),r.play()),o("#snap").click(function(){a.drawImage(r,0,0,160,120);var e=n.toDataURL("image/png");d.save({src:e})})},c)}}};e.selfieCard=d}),define("mobiledoc-kit-demo/mobiledoc-cards/simple",["exports","ember"],function(e,t){var o=t["default"].$,d={name:"simple-card",display:{setup:function(e,t,d){var i=document.createElement("span");i.innerHTML="Hello, world",e.appendChild(i);var n=o("<button>Remove card</button>");n.on("click",d.remove),o(e).append(n)}}};e.simpleCard=d}),define("mobiledoc-kit-demo/mobiledoc-titleize/helper",["exports","ember-mobiledoc-editor/helpers/mobiledoc-titleize"],function(e,t){e["default"]=t["default"],e.mobiledocTitleize=t.mobiledocTitleize}),define("mobiledoc-kit-demo/mobiledocs/empty",["exports"],function(e){var t={version:"0.2.0",sections:[[],[]]};e.empty=t}),define("mobiledoc-kit-demo/mobiledocs/image-card",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"p",[[[],0,"before"]]],[10,"image-card"],[1,"p",[[[],0,"after"]]]]]};e.imageCard=t}),define("mobiledoc-kit-demo/mobiledocs/index",["exports","mobiledoc-kit-demo/mobiledocs/simple","mobiledoc-kit-demo/mobiledocs/empty","mobiledoc-kit-demo/mobiledocs/simple-list","mobiledoc-kit-demo/mobiledocs/simple-card","mobiledoc-kit-demo/mobiledocs/input-card","mobiledoc-kit-demo/mobiledocs/selfie-card","mobiledoc-kit-demo/mobiledocs/image-card"],function(e,t,o,d,i,n,a,r){e.simple=t.simple,e.empty=o.empty,e.simpleList=d.simpleList,e.simpleCard=i.simpleCard,e.inputCard=n.inputCard,e.selfieCard=a.selfieCard,e.imageCard=r.imageCard}),define("mobiledoc-kit-demo/mobiledocs/input-card",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"Input Card"]]],[10,"input-card"],[1,"P",[[[],0,"Text after the card."]]]]]};e.inputCard=t}),define("mobiledoc-kit-demo/mobiledocs/selfie-card",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"Selfie Card"]]],[10,"selfie-card"]]]};e.selfieCard=t}),define("mobiledoc-kit-demo/mobiledocs/simple-card",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"p",[[[],0,"before"]]],[10,"simple-card"],[1,"p",[[[],0,"after"]]]]]};e.simpleCard=t}),define("mobiledoc-kit-demo/mobiledocs/simple-list",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"To do today:"]]],[3,"ul",[[[[],0,"buy milk"]],[[[],0,"water plants"]],[[[],0,"world domination"]]]]]]};e.simpleList=t}),define("mobiledoc-kit-demo/mobiledocs/simple",["exports"],function(e){var t={version:"0.2.0",sections:[[],[[1,"H2",[[[],0,"headline h2"]]],[1,"P",[[[],0,"hello world"]]]]]};e.simple=t}),define("mobiledoc-kit-demo/router",["exports","ember","mobiledoc-kit-demo/config/environment"],function(e,t,o){var d=t["default"].Router.extend({location:o["default"].locationType});d.map(function(){}),e["default"]=d}),define("mobiledoc-kit-demo/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"mobiledoc-kit-demo/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h1"),i=e.createTextNode("Mobiledoc");e.appendChild(d,i);var i=e.createElement("span");e.setAttribute(i,"class","headline-note");var n=e.createTextNode("beta!");e.appendChild(i,n),e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p");e.setAttribute(d,"class","subheadline");var i=e.createTextNode("A web-friendly file format for WYSIWYG editors");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("hr");e.appendChild(t,o);var o=e.createTextNode("\n\n");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=new Array(1);return d[0]=e.createMorphAt(t,4,4,o),d},statements:[["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"mobiledoc-kit-demo/templates/components/mobiledoc-dom-renderer.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","rendered-mobiledoc");var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("mobiledoc-kit-demo/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:29,column:6},end:{line:36,column:6}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createTextNode("        ");e.appendChild(t,o);var o=e.createComment("");e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=new Array(1);return d[0]=e.createMorphAt(t,1,1,o),d},statements:[["inline","mobiledoc-toolbar",[],["editor",["subexpr","@mut",[["get","editor",["loc",[null,[35,35],[35,41]]]]],[],[]]],["loc",[null,[35,8],[35,43]]]]],locals:["editor"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:56,column:0}},moduleName:"mobiledoc-kit-demo/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createTextNode("\n    Mobiledoc is a publishing solution designed for both text and\n    dynamically rendered cards. Posts are serialized into ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/bustlelabs/mobiledoc-kit/blob/master/MOBILEDOC.md");var n=e.createTextNode("Mobiledoc");e.appendChild(i,n),e.appendChild(d,i);var i=e.createTextNode(", and\n    rendered to DOM in a reader's browser.\n  ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("p"),i=e.createTextNode("\n    Read more on the ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/bustlelabs/mobiledoc-kit");var n=e.createTextNode("mobiledoc-kit");e.appendChild(i,n),e.appendChild(d,i);var i=e.createTextNode("\n    GitHub repo.\n  ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","section");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("br");e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("h2"),i=e.createTextNode("Try a Demo");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");e.appendChild(t,o);var o=e.createElement("div");e.setAttribute(o,"class","container");var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var i=e.createTextNode("\n    ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","output full-left");var n=e.createTextNode("\n      ");e.appendChild(i,n);var n=e.createElement("select");e.setAttribute(n,"id","select-mobiledoc");var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"disabled","");var r=e.createTextNode("Load a new Mobiledoc");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","simple");var r=e.createTextNode("Simple text content");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","empty");var r=e.createTextNode("Empty mobiledoc");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","simpleList");var r=e.createTextNode("List example");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","simpleCard");var r=e.createTextNode("Simple Card");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","imageCard");var r=e.createTextNode("Image Card");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","inputCard");var r=e.createTextNode("Card with Input");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a);var a=e.createElement("option");e.setAttribute(a,"value","selfieCard");var r=e.createTextNode("Selfie Card");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a),e.appendChild(i,n);var n=e.createTextNode("\n");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n);var n=e.createTextNode("    ");e.appendChild(i,n),e.appendChild(d,i);var i=e.createTextNode("\n  ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var i=e.createTextNode("\n    ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","output");var n=e.createTextNode("\n      ");e.appendChild(i,n);var n=e.createElement("h4"),a=e.createTextNode("Mobiledoc Output");e.appendChild(n,a),e.appendChild(i,n);var n=e.createTextNode("\n      ");e.appendChild(i,n);var n=e.createElement("pre");e.setAttribute(n,"class","serialized-mobiledoc-wrapper");var a=e.createElement("code");e.setAttribute(a,"id","serialized-mobiledoc");var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(i,n);var n=e.createTextNode("\n    ");e.appendChild(i,n),e.appendChild(d,i);var i=e.createTextNode("\n  ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n  ");e.appendChild(o,d);var d=e.createElement("div");e.setAttribute(d,"class","pane");var i=e.createTextNode("\n    ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","output full-right");var n=e.createTextNode("\n      ");e.appendChild(i,n);var n=e.createElement("h4"),a=e.createTextNode("Rendered with ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/bustlelabs/mobiledoc-dom-renderer");var r=e.createTextNode("DOM-Renderer");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(i,n);var n=e.createTextNode("\n      ");e.appendChild(i,n);var n=e.createComment("");e.appendChild(i,n);var n=e.createTextNode("\n    ");e.appendChild(i,n),e.appendChild(d,i);var i=e.createTextNode("\n  ");e.appendChild(d,i),e.appendChild(o,d);var d=e.createTextNode("\n\n");e.appendChild(o,d),e.appendChild(t,o);var o=e.createTextNode("\n");return e.appendChild(t,o),t},buildRenderNodes:function(e,t,o){var d=e.childAt(t,[4]),i=e.childAt(d,[1,1]),n=e.childAt(i,[1]),a=new Array(4);return a[0]=e.createElementMorph(n),a[1]=e.createMorphAt(i,3,3),a[2]=e.createMorphAt(e.childAt(d,[3,1,3,0]),0,0),a[3]=e.createMorphAt(e.childAt(d,[5,1]),3,3),a},statements:[["element","action",["changeMobiledoc"],["on","change"],["loc",[null,[19,36],[19,76]]]],["block","mobiledoc-editor",[],["class","post-editor__editor","mobiledoc",["subexpr","@mut",[["get","mobiledoc",["loc",[null,[31,20],[31,29]]]]],[],[]],"cards",["subexpr","mobiledoc-cards-list",[],[],["loc",[null,[32,16],[32,38]]]],"on-change",["subexpr","action",["didEdit"],[],["loc",[null,[33,20],[33,38]]]]],0,null,["loc",[null,[29,6],[36,27]]]],["inline","format-object",[["get","editedMobiledoc",["loc",[null,[44,24],[44,39]]]]],[],["loc",[null,[44,6],[44,43]]]],["inline","mobiledoc-dom-renderer",[],["mobiledoc",["subexpr","@mut",[["get","editedMobiledoc",["loc",[null,[51,41],[51,56]]]]],[],[]]],["loc",[null,[51,6],[51,58]]]]],locals:[],templates:[e]}}())}),define("mobiledoc-kit-demo/config/environment",["ember"],function(e){var t="mobiledoc-kit-demo";try{var o=t+"/config/environment",d=e["default"].$('meta[name="'+o+'"]').attr("content"),i=JSON.parse(unescape(d));return{"default":i}}catch(n){throw new Error('Could not read config from meta tag with name "'+o+'".')}}),runningTests?require("mobiledoc-kit-demo/tests/test-helper"):require("mobiledoc-kit-demo/app")["default"].create({name:"mobiledoc-kit-demo",version:"0.0.0+45e3b42b"});