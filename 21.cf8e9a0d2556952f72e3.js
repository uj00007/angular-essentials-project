"use strict";(self.webpackChunkangular_essentials_project=self.webpackChunkangular_essentials_project||[]).push([[21],{21:(F,f,l)=>{l.r(f),l.d(f,{StarWarsModule:()=>H});var u=l(583),h=l(353),e=l(639);const v=[{name:"Luke Skywalker",isLight:!0},{name:"Annikan Skywalker"},{name:"Lea Skywalker",isLight:!0}];let C=(()=>{class r{constructor(){this.charactersList=[],this.charactersList=v}addCharacter(t){this.charactersList.push(t)}changeCharacterSide(t){this.charactersList=this.charactersList.map(s=>(s.name===t.name&&(s.isLight=t.isLight),s))}getCharacters(t){switch(t){case"Light":return this.charactersList.filter(s=>s.isLight);case"Dark":return this.charactersList.filter(s=>null!=s.isLight&&!1===s.isLight);default:return this.charactersList}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),L=(()=>{class r{constructor(){this.changeSide=new e.vpe}onClick(t=!1){this.props.isLight=t,this.changeSide.emit(this.props)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-character"]],inputs:{props:"props"},outputs:{changeSide:"changeSide"},decls:9,vars:2,consts:[[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"button",0),e.NdJ("click",function(){return s.onClick(!0)}),e._uU(6,"Light"),e.qZA(),e.TgZ(7,"button",1),e.NdJ("click",function(){return s.onClick(!1)}),e._uU(8,"Dark"),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Oqu(s.props.name),e.xp6(2),e.hij(" from the ",s.props.isLight?"Light":"Dark"," side!! "))},styles:[""]}),r})();function b(r,n){if(1&r&&(e.TgZ(0,"li",4),e.TgZ(1,"a",5),e._uU(2),e.qZA(),e.qZA()),2&r){const t=n.$implicit;e.xp6(1),e.Q6J("routerLink","/star-wars/characters/"+t),e.xp6(1),e.Oqu(t)}}function S(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"app-character",6),e.NdJ("changeSide",function(a){return e.CHM(t),e.oxw().characterService.changeCharacterSide(a)}),e.qZA()}2&r&&e.Q6J("props",n.$implicit)}let x=(()=>{class r{constructor(t,s){this.characterService=t,this.route=s,this.routesList=["All","Light","Dark"],this.activeRoute="",this.charactersList=[]}ngOnInit(){this.route.params.subscribe(t=>{this.activeRoute=t.side,this.charactersList=this.characterService.getCharacters(this.activeRoute)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C),e.Y36(h.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-character-list"]],decls:4,vars:2,consts:[[1,"container-fluid"],[1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"props","changeSide",4,"ngFor","ngForOf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],[3,"props","changeSide"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"ul",1),e.YNc(2,b,3,2,"li",2),e.qZA(),e.YNc(3,S,1,1,"app-character",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",s.routesList),e.xp6(1),e.Q6J("ngForOf",s.charactersList))},directives:[u.sg,h.yS,h.Od,L],styles:[""]}),r})();var p=l(665);let M=(()=>{class r{constructor(t){this.characterService=t,this.name="",this.radioOption=""}onCreate(){this.name&&this.radioOption&&this.characterService.addCharacter({name:this.name,isLight:"Light"===this.radioOption})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-character"]],decls:14,vars:7,consts:[["type","text",3,"ngModel","ngModelChange"],["type","radio",3,"value","name","ngModel","ngModelChange"],[3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h2"),e._uU(2,"U can create a character here"),e.qZA(),e.TgZ(3,"input",0),e.NdJ("ngModelChange",function(i){return s.name=i}),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Choose side"),e.qZA(),e.TgZ(6,"input",1),e.NdJ("ngModelChange",function(i){return s.radioOption=i}),e.qZA(),e.TgZ(7,"label"),e._uU(8,"Light"),e.qZA(),e.TgZ(9,"input",1),e.NdJ("ngModelChange",function(i){return s.radioOption=i}),e.qZA(),e.TgZ(10,"label"),e._uU(11,"Dark"),e.qZA(),e.TgZ(12,"button",2),e.NdJ("click",function(){return s.onCreate()}),e._uU(13,"Add Character"),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngModel",s.name),e.xp6(3),e.Q6J("value","Light")("name","isL")("ngModel",s.radioOption),e.xp6(3),e.Q6J("value","Dark")("name","isL")("ngModel",s.radioOption))},directives:[p.Fj,p.JJ,p.On,p._],styles:[""]}),r})(),m=(()=>{class r{constructor(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-star-wars"]],decls:10,vars:4,consts:[[1,"nav","nav-pills"],[1,"nav-item"],["aria-current","page",1,"nav-link",3,"routerLink","routerLinkActive"],[1,"nav-link",3,"routerLink","routerLinkActive"]],template:function(t,s){1&t&&(e._UZ(0,"br"),e.TgZ(1,"ul",0),e.TgZ(2,"li",1),e.TgZ(3,"a",2),e._uU(4,"Characters"),e.qZA(),e.qZA(),e.TgZ(5,"li",1),e.TgZ(6,"a",3),e._uU(7,"Create Character"),e.qZA(),e.qZA(),e.qZA(),e._UZ(8,"br"),e._UZ(9,"router-outlet")),2&t&&(e.xp6(3),e.Q6J("routerLink","/star-wars/characters")("routerLinkActive","active"),e.xp6(3),e.Q6J("routerLink","/star-wars/create-character")("routerLinkActive","active"))},directives:[h.yS,h.Od,h.lC],encapsulation:2}),r})();const k=[{path:"",pathMatch:"full",redirectTo:"characters"},{path:"characters",component:m,children:[{path:"",pathMatch:"full",redirectTo:"All"},{path:":side",component:x}]},{path:"create-character",component:m,children:[{path:"",component:M}]}];let U=(()=>{class r{constructor(){this.urlChanges=[],this._history=[new _("","",null)],this._historyIndex=0,this._subject=new e.vpe,this._baseHref="",this._platformStrategy=null,this._platformLocation=null,this._urlChangeListeners=[]}setInitialPath(t){this._history[this._historyIndex].path=t}setBaseHref(t){this._baseHref=t}path(){return this._history[this._historyIndex].path}getState(){return this._history[this._historyIndex].state}isCurrentPathEqualTo(t,s=""){const a=t.endsWith("/")?t.substring(0,t.length-1):t;return(this.path().endsWith("/")?this.path().substring(0,this.path().length-1):this.path())==a+(s.length>0?"?"+s:"")}simulateUrlPop(t){this._subject.emit({url:t,pop:!0,type:"popstate"})}simulateHashChange(t){this.setInitialPath(t),this.urlChanges.push("hash: "+t),this._subject.emit({url:t,pop:!0,type:"hashchange"})}prepareExternalUrl(t){return t.length>0&&!t.startsWith("/")&&(t="/"+t),this._baseHref+t}go(t,s="",a=null){t=this.prepareExternalUrl(t),this._historyIndex>0&&this._history.splice(this._historyIndex+1),this._history.push(new _(t,s,a)),this._historyIndex=this._history.length-1;const i=this._history[this._historyIndex-1];if(i.path==t&&i.query==s)return;const o=t+(s.length>0?"?"+s:"");this.urlChanges.push(o),this._subject.emit({url:o,pop:!1})}replaceState(t,s="",a=null){t=this.prepareExternalUrl(t);const i=this._history[this._historyIndex];i.path==t&&i.query==s||(i.path=t,i.query=s,i.state=a,this.urlChanges.push("replace: "+t+(s.length>0?"?"+s:"")))}forward(){this._historyIndex<this._history.length-1&&(this._historyIndex++,this._subject.emit({url:this.path(),state:this.getState(),pop:!0}))}back(){this._historyIndex>0&&(this._historyIndex--,this._subject.emit({url:this.path(),state:this.getState(),pop:!0}))}historyGo(t=0){const s=this._historyIndex+t;s>=0&&s<this._history.length&&(this._historyIndex=s,this._subject.emit({url:this.path(),state:this.getState(),pop:!0,type:"popstate"}))}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(s=>{this._notifyUrlChangeListeners(s.url,s.state)}))}_notifyUrlChangeListeners(t="",s){this._urlChangeListeners.forEach(a=>a(t,s))}subscribe(t,s,a){return this._subject.subscribe({next:t,error:s,complete:a})}normalize(t){return null}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();class _{constructor(n,t,s){this.path=n,this.query=t,this.state=s}}let T=(()=>{class r extends u.S${constructor(){super(),this.internalBaseHref="/",this.internalPath="/",this.internalTitle="",this.urlChanges=[],this._subject=new e.vpe,this.stateChanges=[]}simulatePopState(t){this.internalPath=t,this._subject.emit(new Z(this.path()))}path(t=!1){return this.internalPath}prepareExternalUrl(t){return t.startsWith("/")&&this.internalBaseHref.endsWith("/")?this.internalBaseHref+t.substring(1):this.internalBaseHref+t}pushState(t,s,a,i){this.stateChanges.push(t),this.internalTitle=s;const o=a+(i.length>0?"?"+i:"");this.internalPath=o;const c=this.prepareExternalUrl(o);this.urlChanges.push(c)}replaceState(t,s,a,i){this.stateChanges[(this.stateChanges.length||1)-1]=t,this.internalTitle=s;const o=a+(i.length>0?"?"+i:"");this.internalPath=o;const c=this.prepareExternalUrl(o);this.urlChanges.push("replace: "+c)}onPopState(t){this._subject.subscribe({next:t})}getBaseHref(){return this.internalBaseHref}back(){this.urlChanges.length>0&&(this.urlChanges.pop(),this.stateChanges.pop(),this.simulatePopState(this.urlChanges.length>0?this.urlChanges[this.urlChanges.length-1]:""))}forward(){throw"not implemented"}getState(){return this.stateChanges[(this.stateChanges.length||1)-1]}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();class Z{constructor(n){this.newUrl=n,this.pop=!0,this.type="popstate"}}let w=(()=>{class r{constructor(t){this.compiler=t,this._stubbedModules={}}set stubbedModules(t){const s={};for(const a of Object.keys(t))s[a]=this.compiler.compileModuleAsync(t[a]);this._stubbedModules=s}get stubbedModules(){return this._stubbedModules}load(t){return this._stubbedModules[t]?this._stubbedModules[t]:Promise.reject(new Error(`Cannot find module ${t}`))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(e.Sil))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();function A(r,n,t,s,a,i,o,c,d,y){const g=new h.F0(null,r,n,t,i,s,a,(0,h.kZ)(o));return c&&(function(r){return"shouldProcessUrl"in r}(c)?g.urlHandlingStrategy=c:(0,h.Hw)(c,g)),d&&(g.urlHandlingStrategy=d),y&&(g.routeReuseStrategy=y),g}let P=(()=>{class r{static withRoutes(t,s){return{ngModule:r,providers:[(0,h.co)(t),{provide:h.cx,useValue:s||{}}]}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[h.Kx,{provide:u.Ye,useClass:U},{provide:u.S$,useClass:T},{provide:e.v3s,useClass:w},{provide:h.F0,useFactory:A,deps:[h.Hx,h.y6,u.Ye,e.v3s,e.Sil,e.zs3,h.Z6,h.cx,[h.oI,new e.FiY],[h.wN,new e.FiY]]},{provide:h.NM,useExisting:h.GZ},(0,h.co)([])],imports:[h.Bz]}),r})(),H=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.ez,p.u5,h.Bz.forChild(k),P]]}),r})()}}]);