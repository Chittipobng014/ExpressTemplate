(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8pe8":function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},LUTN:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},YoXu:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},drnZ:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"close",function(){return g}),e.d(r,"open",function(){return w}),e.d(r,"\u02750",function(){return h}),e.d(r,"\u02751",function(){return y}),e.d(r,"\u02752",function(){return m});var o,i=e("CcnG"),a=function(){return function(){}}(),u=e("pMnS"),c=e("K9Ia"),s=e("ny24"),l=e("S1nX"),f=function(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(n){try{c(r.next(n))}catch(t){i(t)}}function u(n){try{c(r.throw(n))}catch(t){i(t)}}function c(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,u)}c((r=r.apply(n,t||[])).next())})},p=function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(u){i=[6,u],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},d=function(){var n=document.createElement("style");n.innerHTML="\n.alert2.fadein {\n  animation: fadein 0.3s cubic-bezier(0, 1, 1, 1);\n}\n\n@keyframes fadein {\n  0% {\n    opacity: 0;\n    /* transform: translateY(-100px); */\n  }\n  100% {\n    opacity: 1;\n    /* transform: translateY(0); */\n  }\n}\n\n.alert2.fadeout {\n  animation: fadeout 0.3s cubic-bezier(1, 0, 1, 1);\n}\n\n@keyframes fadeout {\n  0% {\n    opacity: 1;\n    /* transform: translateY(0); */\n  }\n  100% {\n    opacity: 0;\n    /* transform: translateY(100px); */\n  }\n}\n\n.alert2.background {\n  background: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  padding: 10vh;\n}\n\n.messagebox {\n  display: inline-block;\n  padding: 10vh;\n  background: white;\n  border: 1px solid #ccc;\n  // box-shadow: inset 0px 0px 0px 1px #ccc;\n}\n",document.getElementsByTagName("head")[0].appendChild(n)},h=d;d();var b=function(n){n&&n.parentNode&&n.parentNode.removeChild(n)},y=b,v=function(n,t){if(n)return new Promise(function(e){n.addEventListener("animationend",function(){e()}),n.classList.add(t)})},m=v,g=function(){return f(void 0,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,v(o,"fadeout")];case 1:return n.sent(),b(o),o=void 0,[2]}})})},w=function(n){return new Promise(function(t){return f(void 0,void 0,void 0,function(){var e;return p(this,function(r){switch(r.label){case 0:return[4,g()];case 1:return r.sent(),(e=document.createElement("div")).classList.add("messagebox"),(o=document.createElement("div")).classList.add("alert2"),o.classList.add("background"),o.classList.add("fadein"),o.appendChild(e),o.onclick=function(){g(),t()},e.textContent=n,document.body.appendChild(o),[2]}})})})},k=function(){function n(n,t,e,r,o){this.api=n,this.notificationService=t,this.element=e,this.zone=r,this.cd=o,this.options=[{id:"1",code:"A",name:"Option E"},{id:"2",code:"B",name:"Option F"},{id:"3",code:"C",name:"Option G"},{id:"4",code:"D",name:"Option H"}],this.selected=[],this.model={left:!0,middle:!1,right:!1},this.latlng={lat:1.35,lng:103.82},this.time="12:35",this.value="Option A",this.values=["items"],this.list=["this","is","a","list","of","items","in","an","array","there","are","multiple","repeated","items"],this.date="",this._ngDestroy$=new c.a,this.data0$=this.api.get("/api4/dashboard/r0").pipe(Object(s.a)(this._ngDestroy$),Object(l.a)()),this.data1$=this.api.get("/api4/dashboard/r1").pipe(Object(s.a)(this._ngDestroy$),Object(l.a)()),this.data2$=this.api.get("/api4/dashboard/r2").pipe(Object(s.a)(this._ngDestroy$),Object(l.a)())}return n.prototype.random=function(n){return Math.round(Math.random()*Math.pow(10,n))+1},n.prototype.ngOnInit=function(){},n.prototype.ngOnDestroy=function(){this._ngDestroy$.next(),this._ngDestroy$.complete()},n.prototype.log=function(n){console.log(n)},n.prototype.testAlert=function(){return n=this,void 0,e=function(){return function(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(u){i=[6,u],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,function(n){switch(n.label){case 0:return console.log(r),w("Message "+new Date),[4,new Promise(function(n){return setTimeout(n,2e3)})];case 1:return n.sent(),g(),[2]}})},new((t=void 0)||(t=Promise))(function(r,o){function i(n){try{u(e.next(n))}catch(t){o(t)}}function a(n){try{u(e.throw(n))}catch(t){o(t)}}function u(n){n.done?r(n.value):new t(function(t){t(n.value)}).then(i,a)}u((e=e.apply(n,[])).next())});var n,t,e},n.prototype.getStyle=function(n){return{"background-image":"url('https://orderbot.kidoapps.com/api1/image/"+n+"')"}},n.prototype.testNotification=function(){this.notificationService.alert("test")},n.prototype.runChangeDetection=function(){var n=this;return this.element.nativeElement.style.outline="2px solid orange",this.zone.runOutsideAngular(function(){setTimeout(function(){n.element.nativeElement.style.outline="none"},1e3)}),null},n}(),x=e("eokG"),A=e("iHlq"),O=i.qb({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{padding:10px}\n/*# sourceMappingURL=test.component.css.map*/"]],data:{}});function j(n){return i.Mb(2,[],null,null)}function E(n){return i.Mb(0,[(n()(),i.sb(0,0,null,null,1,"app-test",[],null,null,null,j,O)),i.rb(1,245760,null,0,k,[x.a,A.a,i.k,i.B,i.h],null,null)],function(n,t){n(t,1,0)},null)}var C=i.ob("app-test",k,E,{},{},[]),D=e("Ip0R"),L=e("gIcY"),M=e("ZYCi"),T=function(){return function(){}}(),G=e("YoXu"),S=function(){return function(){}}(),$=e("x04h"),I=function(){return function(){}}(),N=e("eGC9"),Y=e("8pe8"),_=e("hO9l"),z=e("LUTN"),P=function(){return function(){}}(),B=function(){return function(){}}(),U=e("iTUp");e.d(t,"TestModuleNgFactory",function(){return Z});var Z=i.pb(a,[],function(n){return i.zb([i.Ab(512,i.j,i.eb,[[8,[u.a,C]],[3,i.j],i.z]),i.Ab(4608,D.o,D.n,[i.w,[2,D.A]]),i.Ab(4608,L.y,L.y,[]),i.Ab(1073742336,D.c,D.c,[]),i.Ab(1073742336,M.n,M.n,[[2,M.t],[2,M.k]]),i.Ab(1073742336,T,T,[]),i.Ab(1073742336,L.v,L.v,[]),i.Ab(1073742336,L.j,L.j,[]),i.Ab(1073742336,G.a,G.a,[]),i.Ab(1073742336,S,S,[]),i.Ab(1073742336,$.a,$.a,[]),i.Ab(1073742336,I,I,[]),i.Ab(1073742336,N.a,N.a,[]),i.Ab(1073742336,Y.a,Y.a,[]),i.Ab(1073742336,_.a,_.a,[]),i.Ab(1073742336,z.a,z.a,[]),i.Ab(1073742336,P,P,[]),i.Ab(1073742336,B,B,[]),i.Ab(1073742336,U.a,U.a,[]),i.Ab(1073742336,a,a,[]),i.Ab(1024,M.i,function(){return[[{path:"",component:k}]]},[])])})},eGC9:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},eokG:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("F/XL"),o=e("9Z1F"),i=e("CcnG"),a=e("t/Na"),u=function(){function n(n){this.http=n}return n.prototype.get=function(n){return this.http.get(n).pipe(Object(o.a)(this.handleError("get "+n,[])))},n.prototype.post=function(n,t,e){return this.http.post(n,t,e).pipe(Object(o.a)(this.handleError("post "+n,[])))},n.prototype.put=function(n,t){return this.http.put(n,t).pipe(Object(o.a)(this.handleError("put "+n,[])))},n.prototype.delete=function(n){return this.http.delete(n).pipe(Object(o.a)(this.handleError("delete "+n,[])))},n.prototype.handleError=function(n,t){return void 0===n&&(n=""),function(n){return console.error(n),Object(r.a)(t)}},n.ngInjectableDef=i.V({factory:function(){return new n(i.Z(a.c))},token:n,providedIn:"root"}),n}()},hO9l:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},iHlq:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e("CcnG"),o=e("vARd"),i=function(){function n(n){this.snackBar=n}return n.prototype.alert=function(n){this.snackBar.open(n)},n.ngInjectableDef=r.V({factory:function(){return new n(r.Z(o.c))},token:n,providedIn:"root"}),n}()},iTUp:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()},x04h:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){return function(){}}()}}]);
//# sourceMappingURL=14.333a021421a1f62a8264.js.map