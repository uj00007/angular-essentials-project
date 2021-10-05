"use strict";(self.webpackChunkangular_essentials_project=self.webpackChunkangular_essentials_project||[]).push([[75],{75:(k,p,o)=>{o.r(p),o.d(p,{StarWarsModule:()=>v});var l=o(583),i=o(353),t=o(639);const C=[{name:"Luke Skywalker",isLight:!0},{name:"Annikan Skywalker"},{name:"Lea Skywalker",isLight:!0}];let u=(()=>{class r{constructor(){this.charactersList=[],this.charactersList=C}addCharacter(e){this.charactersList.push(e)}changeCharacterSide(e){this.charactersList=this.charactersList.map(a=>(a.name===e.name&&(a.isLight=e.isLight),a))}getCharacters(e){switch(e){case"Light":return this.charactersList.filter(a=>a.isLight);case"Dark":return this.charactersList.filter(a=>null!=a.isLight&&!1===a.isLight);default:return this.charactersList}}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),m=(()=>{class r{constructor(){this.changeSide=new t.vpe}onClick(e=!1){this.props.isLight=e,this.changeSide.emit(this.props)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-character"]],inputs:{props:"props"},outputs:{changeSide:"changeSide"},decls:9,vars:2,consts:[[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"button",0),t.NdJ("click",function(){return a.onClick(!0)}),t._uU(6,"Light"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return a.onClick(!1)}),t._uU(8,"Dark"),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(a.props.name),t.xp6(2),t.hij(" from the ",a.props.isLight?"Light":"Dark"," side!! "))},styles:[""]}),r})();function d(r,n){if(1&r&&(t.TgZ(0,"li",4),t.TgZ(1,"a",5),t._uU(2),t.qZA(),t.qZA()),2&r){const e=n.$implicit;t.xp6(1),t.Q6J("routerLink","/star-wars/characters/"+e),t.xp6(1),t.Oqu(e)}}function f(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"app-character",6),t.NdJ("changeSide",function(c){return t.CHM(e),t.oxw().characterService.changeCharacterSide(c)}),t.qZA()}2&r&&t.Q6J("props",n.$implicit)}let _=(()=>{class r{constructor(e,a){this.characterService=e,this.route=a,this.routesList=["All","Light","Dark"],this.activeRoute="",this.charactersList=[]}ngOnInit(){this.route.params.subscribe(e=>{this.activeRoute=e.side,this.charactersList=this.characterService.getCharacters(this.activeRoute)})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u),t.Y36(i.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-character-list"]],decls:4,vars:2,consts:[[1,"container-fluid"],[1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"props","changeSide",4,"ngFor","ngForOf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],[3,"props","changeSide"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"ul",1),t.YNc(2,d,3,2,"li",2),t.qZA(),t.YNc(3,f,1,1,"app-character",3),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",a.routesList),t.xp6(1),t.Q6J("ngForOf",a.charactersList))},directives:[l.sg,i.yS,i.Od,m],styles:[""]}),r})();var h=o(665);let L=(()=>{class r{constructor(e){this.characterService=e,this.name="",this.radioOption=""}onCreate(){this.name&&this.radioOption&&this.characterService.addCharacter({name:this.name,isLight:"Light"===this.radioOption})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-create-character"]],decls:14,vars:7,consts:[["type","text",3,"ngModel","ngModelChange"],["type","radio",3,"value","name","ngModel","ngModelChange"],[3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h2"),t._uU(2,"U can create a character here"),t.qZA(),t.TgZ(3,"input",0),t.NdJ("ngModelChange",function(s){return a.name=s}),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Choose side"),t.qZA(),t.TgZ(6,"input",1),t.NdJ("ngModelChange",function(s){return a.radioOption=s}),t.qZA(),t.TgZ(7,"label"),t._uU(8,"Light"),t.qZA(),t.TgZ(9,"input",1),t.NdJ("ngModelChange",function(s){return a.radioOption=s}),t.qZA(),t.TgZ(10,"label"),t._uU(11,"Dark"),t.qZA(),t.TgZ(12,"button",2),t.NdJ("click",function(){return a.onCreate()}),t._uU(13,"Add Character"),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngModel",a.name),t.xp6(3),t.Q6J("value","Light")("name","isL")("ngModel",a.radioOption),t.xp6(3),t.Q6J("value","Dark")("name","isL")("ngModel",a.radioOption))},directives:[h.Fj,h.JJ,h.On,h._],styles:[""]}),r})(),g=(()=>{class r{constructor(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-star-wars"]],decls:10,vars:4,consts:[[1,"nav","nav-pills"],[1,"nav-item"],["aria-current","page",1,"nav-link",3,"routerLink","routerLinkActive"],[1,"nav-link",3,"routerLink","routerLinkActive"]],template:function(e,a){1&e&&(t._UZ(0,"br"),t.TgZ(1,"ul",0),t.TgZ(2,"li",1),t.TgZ(3,"a",2),t._uU(4,"Characters"),t.qZA(),t.qZA(),t.TgZ(5,"li",1),t.TgZ(6,"a",3),t._uU(7,"Create Character"),t.qZA(),t.qZA(),t.qZA(),t._UZ(8,"br"),t._UZ(9,"router-outlet")),2&e&&(t.xp6(3),t.Q6J("routerLink","/star-wars/characters")("routerLinkActive","active"),t.xp6(3),t.Q6J("routerLink","/star-wars/create-character")("routerLinkActive","active"))},directives:[i.yS,i.Od,i.lC],encapsulation:2}),r})();const Z=[{path:"",pathMatch:"full",redirectTo:"characters"},{path:"characters",component:g,children:[{path:"",pathMatch:"full",redirectTo:"All"},{path:":side",component:_}]},{path:"create-character",component:g,children:[{path:"",component:L}]}];let v=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[l.ez,h.u5,i.Bz.forChild(Z)]]}),r})()}}]);