(this["webpackJsonpelemental-x-webapp"]=this["webpackJsonpelemental-x-webapp"]||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(25),i=n.n(c),l=(n(89),n(9)),o=(n(90),n(10)),s=n.n(o),u=n(17),m=n(26),d=n(27),p=n(33),h=n(32),f=n(28),v=n.n(f),g=n(169),E=n(168),b=["#950909","#FB5757","#FF934C","#5E2F00","#D5B89B","#F5FF20","#808000","#00FF00","#318327","#A7C8DC","#4C93FF","#103FBA","#D2B9F9","#8B27C0","#FFFFFF","#B2B2B2","#757575","#000000","#FF00FF","#FFC1DC"];function y(e,t){return Object.keys(e).forEach((function(n){t.hasOwnProperty(n)||delete e[n]})),Object.assign(e,t)}var O=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).primitives=[],e.elements={},e.elementByName={},e.recipes={},e}return Object(d.a)(n,[{key:"notifyElement",value:function(e){if(!e.id)throw new Error("Element [".concat(e.name||JSON.stringify(e),"] requires 'id' property"));if(this.elements.hasOwnProperty(e.id)){var t=this.elements[e.id];e.local||this.elementByName[t.name]!==this||delete this.elementByName[e.id],e=y(t,e)}else this.elements[e.id]=e;return e.local||(this.elementByName[e.name]=e),this.emit("element",e),this.emit("element:"+e.id,e),e}},{key:"notifyRecipe",value:function(e){var t=this.getRecipeKey(e.parent1,e.parent2);if(!t)throw new Error("Recipe has invalid parent elements");return this.recipes.hasOwnProperty(t)?e=y(this.recipes[t],e):this.recipes[t]=e,this.emit("recipe",e),this.emit("recipe:"+t,e),e}},{key:"getElement",value:function(e){return this.elements[e]||null}},{key:"getElementByName",value:function(e){return this.elementByName.hasOwnProperty(e)?this.elementByName[e]:null}},{key:"getRecipeKey",value:function(e,t){if(!e.id||!t.id)return null;if(e.id>t.id){var n=[t,e];e=n[0],t=n[1]}return e.id+"+"+t.id}},{key:"getRecipe",value:function(e,t){return this.recipes[this.getRecipeKey(e,t)]||null}},{key:"addRecipe",value:function(e,t){if(e.id>t.id){var n=[t,e];e=n[0],t=n[1]}var a=this.notifyElement({id:Object(E.a)(),name:e.name+" + "+t.name,color:Math.random()<.5?e.color:t.color,local:!0}),r=this.notifyRecipe({id:Object(E.a)(),parent1:e,parent2:t,child:a,local:!0});return r.child.recipe=r,r}}]),n}(v.a),w=null;function k(){return(k=Object(u.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=18;break}return e.t0=Promise,e.next=4,fetch("https://www.ryanvandersmith.com/elemental-x/data/Elements.json").then((function(e){return e.json()}));case 4:return e.t1=e.sent,e.next=7,fetch("https://www.ryanvandersmith.com/elemental-x/data/Recipes.json").then((function(e){return e.json()}));case 7:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,n=Object(l.a)(t,2),a=n[0],r=n[1],w=new O,a.forEach((function(e){e.id=String(e.id),e.name=j(e.name)||"(Element #".concat(e.id,")"),e.color=b[e.color],e.primitive=e.id<4,w.notifyElement(e),e.primitive&&(w.primitives.push(e),w.primitives.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0})))})),r.forEach((function(e){e.parent1!==e.child&&e.parent2!==e.child&&(e.child<4||(e.parent1=w.getElement(e.parent1),e.parent2=w.getElement(e.parent2),e.child=w.getElement(e.child),w.notifyRecipe(e)))}));case 18:return e.abrupt("return",w);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return Object(g.a)(e.replace(/[']/,""))}var x=a.createContext(void 0);function I(e){var t=e.message;return a.createElement("div",null,a.createElement("h4",{className:"text-muted text-center pt-5"},t||"Loading..."))}var N=a.createContext(void 0),S=n(43),C=n.n(S),F=n(73),D=n.n(F),P=(n(108),n(110),D.a.initializeApp({apiKey:"AIzaSyCTwBdOnne9_EsQm5U7X1numBUAljUSPOA",authDomain:"elemental-exchange.firebaseapp.com",databaseURL:"https://elemental-exchange.firebaseio.com",projectId:"elemental-exchange",storageBucket:"elemental-exchange.appspot.com",messagingSenderId:"442567411353",appId:"1:442567411353:web:78ea9bb9ea809f14281a08",measurementId:"G-F395HHHFB4"})),B=P.auth(),R=(P.firestore(),Object({NODE_ENV:"production",PUBLIC_URL:"https://www.ryanvandersmith.com/elemental-x",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"");C.a.interceptors.request.use(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.currentUser.getIdToken();case 2:return e.t0=e.sent,t.headers.Authorization="Bearer "+e.t0,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var A=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"user";return Object(m.a)(this,n),(e=t.call(this)).storageKey=a,e.data={name:null,inventory:{},knownElementIDs:[]},e.account=B.currentUser,B.onAuthStateChanged((function(t){return e.setAccount(t)})),e._savePromise=null,e}return Object(d.a)(n,[{key:"isLoggedIn",value:function(){return!!this.account}},{key:"findAccountOrLogin",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.account){e.next=5;break}return e.next=3,B.signInAnonymously();case 3:this.account=e.sent.user,console.log("Signed in anonymously");case 5:return e.abrupt("return",this.account);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setAccount",value:function(e){this.account=e,this.emit("account",e)}},{key:"hasIdentity",value:function(){return this.account&&!this.account.isAnonymous}},{key:"suggest",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.recipe){e.next=3;break}return console.warn("Tried to suggest element without recipe"),e.abrupt("return");case 3:if(console.log(t.submitted?"Updating":"Adding","suggestion:",t),!t.recipe){e.next=13;break}return n=t.recipe,e.next=8,this.findAccountOrLogin();case 8:return e.next=10,C.a.post(R+"/suggest-element",{parent1:n.parent1.id,parent2:n.parent2.id,name:t.name,color:b.indexOf(t.color)});case 10:a=e.sent,console.log(a),t.submitted=!0;case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getName",value:function(){return this.data.name}},{key:"getInventory",value:function(){return this.data.inventory}},{key:"hasItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.primitive||this.getItemCount(e)>=t}},{key:"getItemCount",value:function(e){return this.getInventory()[e.id]}},{key:"removeItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.primitive)return!0;var n=this.getInventory();if(n.hasOwnProperty(e.id)){var a=n[e.id]-t;return a>0?n[e.id]=a:delete n[e.id],this.save().catch(console.error),a>=0}return!1}},{key:"removeItemsWithId",value:function(e){var t=this.getInventory();return!!t.hasOwnProperty(e)&&(delete t[e],this.save().catch(console.error),!0)}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.primitive)return!0;var n=this.getInventory();return n.hasOwnProperty(e.id)?n[e.id]+=t:n[e.id]=t,this.data.knownElementIDs.includes(e.id)||this.data.knownElementIDs.push(e.id),this.save().catch(console.error),!0}},{key:"getKnownElementIDs",value:function(){return this.data.knownElementIDs}},{key:"hasKnownElement",value:function(e){return e&&(this.getKnownElementIDs().includes(e.id)||this.hasItem(e))}},{key:"load",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.emit("load",this),(t=localStorage[this.storageKey])&&Object.assign(this.data,JSON.parse(t)),console.log("Loaded:",this.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.emit("save",this),!this.data){e.next=4;break}return this._savePromise||(this._savePromise=new Promise((function(e,n){setTimeout((function(){t._savePromise=null;try{localStorage[t.storageKey]=JSON.stringify(t.data),e()}catch(a){n(a)}}))}))),e.abrupt("return",this._savePromise);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(v.a),L=null;function _(){return(_=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=4;break}return L=new A,e.next=4,L.load();case 4:return e.abrupt("return",L);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.USER=function(){return L},window.GIVE=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;L.inventory[e]=(L.inventory[e]||0)+t};var K=n(81),T=n(78),z=n(7),U=n(80),W=n(82),M=n(75),H=n.n(M),J=n(76),G=n.n(J),q=n(5),V=n.n(q),X=n(170),Q=n(171),$=n(163),Y=n(164),Z=n(165);function ee(e,t,n,r){var c=e.hasOwnProperty("addEventListener");return Object(a.useEffect)((function(){return c?e.addEventListener(t,n,r):e.addListener(t,n,r),function(){c?e.removeEventListener(t,n):e.removeListener(t,n)}})),n}n(70);var te=a.createContext(void 0);function ne(){var e=Object(a.useState)({})[1];return function(){return e({})}}var ae=[$.a,Y.a,Z.a,Y.b];function re(e){var t=e.element,n=e.count,c=e.compact,i=e.onDrop,o=e.onClick,s=ne(),u=Object(a.useContext)(x),m=Object(a.useContext)(te),d=(m.selected,m.setSelected);ee(u,"element:"+t.id,s);var p=Object(X.a)({item:{type:"ELEMENT",element:t,count:n},collect:function(e){return{isDragging:e.isDragging()}}}),h=Object(l.a)(p,2),f=h[0].isDragging,v=h[1],g=Object(Q.a)({accept:["ELEMENT"],canDrop:function(e){return!!u.getRecipe(t,e.element)&&(!t.local&&!e.element.local)},drop:function(e){i&&i(e)},collect:function(e){return{isDropping:e.isOver()&&e.canDrop(),dropRecipe:e.getItem()&&u.getRecipe(t,e.getItem().element)}}}),E=Object(l.a)(g,2),b=E[0],y=b.isDropping,O=b.dropRecipe,w=E[1],k=G()(t.color).isDark(),j=k?"#FFF":"#000",I={width:80,height:c?40:80,verticalAlign:"top",lineHeight:1,background:t.color,color:j,fontSize:20,borderRadius:8,boxShadow:"1px 4px #0004",textShadow:k&&"1px 2px #0004",overflowWrap:"break-word",transform:i&&(f||y&&O&&!O.local)&&"scale(.8)"};o=o||function(e){return!e.primitive&&d(e)};var N=ae[t.id];return r.a.createElement("span",{ref:i&&w,className:"d-inline-block p-1"},r.a.createElement("span",{ref:i&&v,className:V()("d-inline-block p-1 text-center noselect",i?"grabbable":o&&"clickable"),style:I,onClick:function(e){return o&&e.stopPropagation()&o(t)}},r.a.createElement("div",{className:"d-inline-block",style:{height:40}},r.a.createElement(H.a,{maxFontSize:20,minFontSize:14},t.name||"(?)")),!c&&r.a.createElement("div",{className:"h5",style:{opacity:.8}},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("small",null,"x"),n):N&&r.a.createElement(N,null))))}var ce=n(166),ie=n(172);function le(e){var t=e.children;return r.a.createElement("span",{className:"text-secondary noselect",style:{fontSize:40}},t)}function oe(e){var t=e.recipe,n=e.child,r=e.compact;return a.createElement("div",{className:"d-flex align-items-center"},a.createElement(re,{element:t.parent1,compact:r}),a.createElement(le,null,"+"),a.createElement(re,{element:t.parent2,compact:r}),a.createElement(le,null,"="),a.createElement(re,{element:n||t.child,compact:r}))}var se=n(48),ue=n(167);function me(e){var t=e.color,n=e.active,r=e.onSelect,c={width:30,height:30,background:t,transition:"transform .1s ease-out",transform:n&&"scale(.5)"};return a.createElement("div",{className:"d-inline-block clickable p-1",onClick:function(e){return e.preventDefault()&r(t)}},a.createElement("div",{className:"d-inline-block rounded-sm",style:c}))}function de(e){var t=e.element,n=e.onSubmit,r=Object(a.useState)(String(t.submitted&&t.name||"")),c=Object(l.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(t.color),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),f=h[0],v=h[1];if(m){var g=Object(se.a)(Object(se.a)({},t),{},{name:j(i)||t.name||"",color:m}),E=null;return g.name.trim()?g.name.length>20&&(E="Name must be 20 characters or less."):E="Please enter an element name.",a.createElement(ue.a,{className:"mt-3",onSubmit:function(e){e.preventDefault(),v(!0),E||n&&n(g)}},a.createElement(ie.a,{variant:"primary",size:"lg",className:"w-100",onClick:y},"Cancel"),a.createElement("div",{className:"p-2 mb-2",style:{background:"#0005"}},g.recipe&&a.createElement(oe,{recipe:g.recipe,child:g})),a.createElement(ue.a.Group,null,a.createElement(ue.a.Label,{className:"h4"},"What should these create?"),a.createElement(ue.a.Control,{size:"lg",type:"text",autoFocus:!0,autoComplete:"off",placeholder:t.name,value:i,onKeyDown:function(e){return 27===e.which&&y()},onChange:function(e){return o(e.target.value)}})),a.createElement("div",null,b.flatMap((function(e,t){return[a.createElement(me,{key:e,color:e,active:g.color===e,onSelect:function(){return d(e)}}),(t+1)%10===0&&a.createElement("br",{key:e+":"+t})]}))),a.createElement("hr",{className:"my-2"}),a.createElement(ie.a,{variant:"primary",size:"lg",type:"submit",className:"w-100 py-2"},"Submit"),E&&f&&a.createElement("p",{className:"h5 text-light mt-2"},E))}function y(){n&&n()}d(b[Math.floor(Math.random()*b.length)])}var pe=n(77);function he(){var e=Object(a.useContext)(x),t=Object(a.useContext)(N);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{fluid:"sm"},b.map((function(n){return r.a.createElement("div",{key:n,className:"mb-4"},Object(pe.a)(t.getKnownElementIDs().map((function(t){return e.getElement(t)})).filter((function(e){return e&&e.color===n}))).asc("name").map((function(e,n){return r.a.createElement(re,{key:e.id+":"+n,element:e,count:t.getItemCount(e)})})))}))))}function fe(){var e=Object(a.useContext)(x),t=Object(a.useContext)(N),n=Object(a.useState)(null),c=Object(l.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(a.useState)(null),h=Object(l.a)(p,2),f=h[0],v=h[1],g=Object(a.useState)(!1),E=Object(l.a)(g,2),b=E[0],y=E[1],O=e.primitives;if(ee(t,"save",(function(){return w()})),i)return r.a.createElement(r.a.Fragment,null,f?r.a.createElement(ce.a,{fluid:"sm"},r.a.createElement(de,{element:f,onSubmit:function(n){v(null),n&&((n=e.notifyElement(n)).recipe&&(m=e.notifyRecipe(n.recipe),d(m),t.removeItem(m.parent1),t.removeItem(m.parent2)),t.suggest(n).catch(console.error))}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-4",style:{background:"#0005"}},r.a.createElement("div",{className:"float-right mt-1 mr-2"},r.a.createElement(ie.a,{variant:"primary",size:"lg",className:"py-2",onClick:function(){return y(!b)}},b?r.a.createElement(Z.f,null):r.a.createElement(Z.c,null))),r.a.createElement(ce.a,{fluid:"sm",style:{height:"4em",paddingTop:".125em"}},m?r.a.createElement(oe,{recipe:m,compact:!0}):r.a.createElement("h1",{className:"cursor-default text-dark text-uppercase",style:{paddingTop:".0625em"}},"Elemental X"))),b?r.a.createElement(he,null):r.a.createElement(ce.a,{fluid:"sm"},r.a.createElement("div",{className:"mb-4"},O.map((function(e){return r.a.createElement(k,{key:e.id,element:e})}))),r.a.createElement("div",{className:"mb-4"},i.map((function(e,n){return r.a.createElement(k,{key:e.id+":"+n,element:e,count:t.getItemCount(e)})}))))));function w(){var n=Object.keys(t.getInventory()).map((function(n){var a=e.getElement(n);return a||(console.log("Missing element:",n),t.removeItemsWithId(n),null)})).filter((function(e){return e}));o(n)}function k(n){var a=n.element,c=Object(W.a)(n,["element"]);return r.a.createElement(re,Object.assign({element:a},c,{usable:!0,onDrop:function(n){return function(n,a){if(n===a?t.hasItem(n,2):t.hasItem(n)&&t.hasItem(a)){var r=e.getRecipe(n,a);if(r||(r=e.addRecipe(n,a)),r.local)return void v(r.child);t.removeItem(n),t.removeItem(a);var c=r.child;t.addItem(c),console.log("Crafted:",c.name),d(r)}}(a,n.element)}}))}w()}function ve(){return a.createElement("div",null,a.createElement("div",{className:"btn btn-outline-red btn-lg"},a.createElement(Z.b,null),"Sign in with Google"),a.createElement("div",{className:"btn btn-outline-red btn-lg"},"Join as guest"))}function ge(e){var t=e.element,n=e.onClose,c=ne(),i=(Object(a.useContext)(x),Object(a.useContext)(N));return ee(i,"save",c),r.a.createElement("div",{className:"p-2 d-flex"},r.a.createElement(re,{element:t,count:i.getItemCount(t)}),r.a.createElement("div",{className:"mx-3 flex-grow-1"},r.a.createElement("span",{className:"btn btn-outline-secondary text-white",onClick:function(){return i.hasKnownElement(t)&&i.addItem(t)}},r.a.createElement(Z.e,null)),r.a.createElement("span",{className:"btn btn-outline-secondary text-white",onClick:function(){return i.removeItem(t)}},r.a.createElement(Z.d,null))),n&&r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-outline-secondary",onClick:function(){return n()}},r.a.createElement(Z.f,null))))}function Ee(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),s=o[0],u=o[1],m=Object(a.useState)(null),d=Object(l.a)(m,2),p=d[0],h=d[1];return Object(a.useEffect)((function(){(function(){return k.apply(this,arguments)})().then(c).catch(console.error),function(){return _.apply(this,arguments)}().then(u).catch(console.error)}),[]),n&&s?r.a.createElement(T.a,null,r.a.createElement(K.a,{options:U.a},r.a.createElement(x.Provider,{value:n},r.a.createElement(N.Provider,{value:s},r.a.createElement(te.Provider,{value:{selected:p,setSelected:h}},p&&r.a.createElement("div",{className:"position-fixed w-100",style:{background:"#222",boxShadow:"0 .25em #0008",zIndex:100}},r.a.createElement(ge,{element:p,onClose:function(){return h(null)}})),r.a.createElement("div",{onClick:function(){return h(null)}},r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/login"},r.a.createElement(ve,null)),r.a.createElement(z.a,{path:"/history"},r.a.createElement(he,null)),r.a.createElement(z.a,{path:"/"},r.a.createElement(fe,null))))))))):r.a.createElement(I,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){},84:function(e,t,n){e.exports=n(158)},89:function(e,t,n){},90:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.39dc86bf.chunk.js.map