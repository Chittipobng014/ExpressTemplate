(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8pe8":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},Iab2:function(n,l,t){var u,e;void 0===(e="function"==typeof(u=function(){"use strict";function l(n,l,t){var u=new XMLHttpRequest;u.open("GET",n),u.responseType="blob",u.onload=function(){o(u.response,l,t)},u.onerror=function(){console.error("could not download file")},u.send()}function t(n){var l=new XMLHttpRequest;return l.open("HEAD",n,!1),l.send(),200<=l.status&&299>=l.status}function u(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(l){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(t)}}var e="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=e.saveAs||"object"!=typeof window||window!==e?function(){}:"download"in HTMLAnchorElement.prototype?function(n,o,r){var i=e.URL||e.webkitURL,a=document.createElement("a");a.download=o=o||n.name||"download",a.rel="noopener","string"==typeof n?(a.href=n,a.origin===location.origin?u(a):t(a.href)?l(n,o,r):u(a,a.target="_blank")):(a.href=i.createObjectURL(n),setTimeout(function(){i.revokeObjectURL(a.href)},4e4),setTimeout(function(){u(a)},0))}:"msSaveOrOpenBlob"in navigator?function(n,e,o){if(e=e||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function(n,l){return void 0===l?l={autoBom:!1}:"object"!=typeof l&&(console.warn("Depricated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,o),e);else if(t(n))l(n,e,o);else{var r=document.createElement("a");r.href=n,r.target="_blank",setTimeout(function(){u(r)})}}:function(n,t,u,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof n)return l(n,t,u);var r="application/octet-stream"===n.type,i=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&i)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var n=c.result;n=a?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=n:location=n,o=null},c.readAsDataURL(n)}else{var s=e.URL||e.webkitURL,p=s.createObjectURL(n);o?o.location=p:location.href=p,o=null,setTimeout(function(){s.revokeObjectURL(p)},4e4)}};e.saveAs=o.saveAs=o,n.exports=o})?u.apply(l,[]):u)||(n.exports=e)},"XS+m":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("gIcY"),i=t("Ip0R"),a=function(){function n(){this.uploaded=!1,this.root="https://drive.orderbot.org",this.done=new u.n}return n.prototype.ngOnInit=function(){},n.prototype.upload=function(n){var l=this;this.status="Uploading...";var t=n.target.files;if(t.length>0){var u=new FormData;if(t instanceof FileList)for(var e=0;e<t.length;e++)u.append("files",t[e]);t instanceof Blob&&u.append("files",t);var o=new XMLHttpRequest;o.upload.onprogress=function(n){n.lengthComputable&&(l.status="Uploading "+n.loaded/n.total*100+" %")},o.onreadystatechange=function(){4===o.readyState&&200===o.status&&(l.status="Upload complete",l.uploaded=!0,l.uploadResults=JSON.parse(o.response),l.uploadResults.map(function(n){n.url=l.root+"/"+n.path}),l.done.emit(l.uploadResults))},o.withCredentials=!0,o.open("post",this.root+"/upload",!1,"asd","asd"),o.send(u)}},n}(),c=u.qb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-height:100px}\n/*# sourceMappingURL=uploader.component.css.map*/"]],data:{}});function s(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.sb(2,0,null,null,0,"img",[],[[8,"src",4],[8,"title",0]],null,null,null,null))],null,function(n,l){n(l,1,0,u.ub(1,"",l.parent.context.$implicit.url,"")),n(l,2,0,u.ub(1,"",l.parent.context.$implicit.url,""),u.ub(1,"",l.parent.context.$implicit.originalname,""))})}function p(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.sb(2,0,null,null,0,"img",[],[[8,"src",4],[8,"title",0]],null,null,null,null))],null,function(n,l){n(l,1,0,u.ub(1,"",l.parent.context.$implicit.url,"")),n(l,2,0,u.ub(1,"",l.parent.context.$implicit.url,""),u.ub(1,"",l.parent.context.$implicit.originalname,""))})}function b(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Kb(2,null,[" "," "]))],null,function(n,l){n(l,1,0,u.ub(1,"",l.parent.context.$implicit.url,"")),n(l,2,0,l.parent.context.$implicit.originalname)})}function f(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,7,"li",[],null,null,null,null,null)),u.rb(1,16384,null,0,i.q,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),u.jb(16777216,null,null,1,null,s)),u.rb(3,278528,null,0,i.r,[u.R,u.O,i.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),u.jb(16777216,null,null,1,null,p)),u.rb(5,278528,null,0,i.r,[u.R,u.O,i.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),u.jb(16777216,null,null,1,null,b)),u.rb(7,16384,null,0,i.s,[u.R,u.O,i.q],null,null)],function(n,l){n(l,1,0,l.context.$implicit.mimetype),n(l,3,0,"image/png"),n(l,5,0,"image/jpeg")},null)}function d(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u.sb(1,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),u.jb(16777216,null,null,1,null,f)),u.rb(3,278528,null,0,i.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.uploadResults)},null)}function h(n){return u.Mb(0,[(n()(),u.sb(0,0,[["inputField",1]],null,0,"input",[["multiple",""],["type","file"]],null,[[null,"change"]],function(n,l,t){var u=!0;return"change"===l&&(u=!1!==n.component.upload(t)&&u),u},null,null)),(n()(),u.Kb(1,null,["\n","\n"])),(n()(),u.jb(16777216,null,null,1,null,d)),u.rb(3,16384,null,0,i.m,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.uploaded)},function(n,l){n(l,1,0,l.component.status)})}var g=t("Iab2"),m=t.n(g),v=function(n,l,t,u){return new(t||(t=Promise))(function(e,o){function r(n){try{a(u.next(n))}catch(l){o(l)}}function i(n){try{a(u.throw(n))}catch(l){o(l)}}function a(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(r,i)}a((u=u.apply(n,l||[])).next())})},w=function(n,l){var t,u,e,o,r={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,u&&(e=2&o[0]?u.return:o[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,o[1])).done)return e;switch(u=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,u=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(e=(e=r.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){r.label=o[1];break}if(6===o[0]&&r.label<e[1]){r.label=e[1],e=o;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(o);break}e[2]&&r.ops.pop(),r.trys.pop();continue}o=l.call(n,r)}catch(i){o=[6,i],u=0}finally{t=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},y=function(){function n(n,l){this.api=n,this.notificationService=l,this.tables=["Products"],this.table="Products"}return n.prototype.ngOnInit=function(){},n.prototype.export=function(n){return v(this,void 0,void 0,function(){var l,t;return w(this,function(u){switch(u.label){case 0:return[4,this.api.post("/api3/exports/"+this.table,n,{responseType:"text"}).toPromise()];case 1:return l=u.sent(),console.log(l),t=new Blob([l],{type:"text/csv"}),m.a.saveAs(t,this.table+" ("+Date.now().toString(36)+").csv"),[2]}})})},n.prototype.uploaded=function(n){console.log("uploaded"),this.importurl=n[0].url},n.prototype.runimport=function(n,l){return v(this,void 0,void 0,function(){var t;return w(this,function(u){switch(u.label){case 0:return console.log("runimport"),console.log(l),[4,this.api.post("/api3/imports/",{table:n,importurl:l}).toPromise()];case 1:return t=u.sent(),this.notificationService.alert(JSON.stringify(t)),[2]}})})},n}(),x=t("eokG"),k=t("iHlq"),C=u.qb({encapsulation:0,styles:[["\n/*# sourceMappingURL=importexport.component.css.map*/"]],data:{}});function j(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,3,"option",[],null,null,null,null,null)),u.rb(1,147456,null,0,r.r,[u.k,u.G,[2,r.t]],null,null),u.rb(2,147456,null,0,r.A,[u.k,u.G,[8,null]],null,null),(n()(),u.Kb(3,null,["",""]))],null,function(n,l){n(l,3,0,l.context.$implicit)})}function O(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Import / Export"])),(n()(),u.sb(2,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Export"])),(n()(),u.sb(4,0,null,null,16,"div",[["class","form columnise"]],null,null,null,null,null)),(n()(),u.sb(5,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),u.sb(6,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Table"])),(n()(),u.sb(8,0,null,null,7,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var e=!0,o=n.component;return"change"===l&&(e=!1!==u.Cb(n,9).onChange(t.target.value)&&e),"blur"===l&&(e=!1!==u.Cb(n,9).onTouched()&&e),"ngModelChange"===l&&(e=!1!==(o.table=t)&&e),e},null,null)),u.rb(9,16384,null,0,r.t,[u.G,u.k],null,null),u.Hb(1024,null,r.l,function(n){return[n]},[r.t]),u.rb(11,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,r.m,null,[r.q]),u.rb(13,16384,null,0,r.n,[[4,r.m]],null,null),(n()(),u.jb(16777216,null,null,1,null,j)),u.rb(15,278528,null,0,i.l,[u.R,u.O,u.u],{ngForOf:[0,"ngForOf"]},null),(n()(),u.sb(16,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.sb(17,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Actions"])),(n()(),u.sb(19,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;return"click"===l&&(u=!1!==e.export(e.table)&&u),u},null,null)),(n()(),u.Kb(-1,null,["Export"])),(n()(),u.sb(21,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Import"])),(n()(),u.sb(23,0,null,null,10,"div",[["class","form columnise"]],null,null,null,null,null)),(n()(),u.sb(24,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.sb(25,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["File"])),(n()(),u.sb(27,0,null,null,1,"app-uploader",[],null,[[null,"done"]],function(n,l,t){var u=!0;return"done"===l&&(u=!1!==n.component.uploaded(t)&&u),u},h,c)),u.rb(28,114688,null,0,a,[],null,{done:"done"}),(n()(),u.sb(29,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.sb(30,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u.Kb(-1,null,["Actions"])),(n()(),u.sb(32,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0,e=n.component;return"click"===l&&(u=!1!==e.runimport(e.table,e.importurl)&&u),u},null,null)),(n()(),u.Kb(-1,null,[" Import "]))],function(n,l){var t=l.component;n(l,11,0,t.table),n(l,15,0,t.tables),n(l,28,0)},function(n,l){var t=l.component;n(l,8,0,u.Cb(l,13).ngClassUntouched,u.Cb(l,13).ngClassTouched,u.Cb(l,13).ngClassPristine,u.Cb(l,13).ngClassDirty,u.Cb(l,13).ngClassValid,u.Cb(l,13).ngClassInvalid,u.Cb(l,13).ngClassPending),n(l,32,0,!t.importurl)})}function R(n){return u.Mb(0,[(n()(),u.sb(0,0,null,null,1,"app-importexport",[],null,null,null,O,C)),u.rb(1,114688,null,0,y,[x.a,k.a],null,null)],function(n,l){n(l,1,0)},null)}var M=u.ob("app-importexport",y,R,{},{},[]),A=t("ZYCi"),E=function(){return function(){}}(),S=t("8pe8");t.d(l,"ImportexportModuleNgFactory",function(){return L});var L=u.pb(e,[],function(n){return u.zb([u.Ab(512,u.j,u.eb,[[8,[o.a,M]],[3,u.j],u.z]),u.Ab(4608,i.o,i.n,[u.w,[2,i.A]]),u.Ab(4608,r.y,r.y,[]),u.Ab(1073742336,i.c,i.c,[]),u.Ab(1073742336,A.n,A.n,[[2,A.t],[2,A.k]]),u.Ab(1073742336,E,E,[]),u.Ab(1073742336,r.v,r.v,[]),u.Ab(1073742336,r.j,r.j,[]),u.Ab(1073742336,S.a,S.a,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,A.i,function(){return[[{path:"",component:y}]]},[])])})},eokG:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var u=t("F/XL"),e=t("9Z1F"),o=t("CcnG"),r=t("t/Na"),i=function(){function n(n){this.http=n}return n.prototype.get=function(n){return this.http.get(n).pipe(Object(e.a)(this.handleError("get "+n,[])))},n.prototype.post=function(n,l,t){return this.http.post(n,l,t).pipe(Object(e.a)(this.handleError("post "+n,[])))},n.prototype.put=function(n,l){return this.http.put(n,l).pipe(Object(e.a)(this.handleError("put "+n,[])))},n.prototype.delete=function(n){return this.http.delete(n).pipe(Object(e.a)(this.handleError("delete "+n,[])))},n.prototype.handleError=function(n,l){return void 0===n&&(n=""),function(n){return console.error(n),Object(u.a)(l)}},n.ngInjectableDef=o.V({factory:function(){return new n(o.Z(r.c))},token:n,providedIn:"root"}),n}()},iHlq:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t("CcnG"),e=t("vARd"),o=function(){function n(n){this.snackBar=n}return n.prototype.alert=function(n){this.snackBar.open(n)},n.ngInjectableDef=u.V({factory:function(){return new n(u.Z(e.c))},token:n,providedIn:"root"}),n}()}}]);
//# sourceMappingURL=17.8d9378ba425fad56bef5.js.map