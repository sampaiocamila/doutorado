function _defineProperties(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,a,i){return a&&_defineProperties(e.prototype,a),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EMG7:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("ofXK"),o=i("/bhW"),r=i("fXoL"),n=function(){var e=_createClass((function e(){_classCallCheck(this,e)}));return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(a){return new(a||e)},providers:[],imports:[[t.c,o.MaterialModule]]}),e}()},P5sF:function(e,a,i){"use strict";i.r(a),i.d(a,"IntercambialidadeModule",(function(){return x}));var t=i("I02E"),o=i("ofXK"),r=i("/bhW"),n=i("XRci"),s=i("gqU8"),d=i("tyNb"),l=i("LRne"),c=i("J3qu"),u=i("VTKa"),f=i("dMsE"),m=i("fXoL"),p=i("2ChS"),h=i("NFeN"),v=i("Rv7U"),b=i("3Pt+"),_=i("bTqV"),y=i("Qu3c");function g(e,a){if(1&e&&(m.Tb(0,"form",4),m.Tb(1,"div",5),m.Tb(2,"div",6),m.Tb(3,"div",7),m.Ob(4,"h2",8),m.Tb(5,"div",7),m.Dc(6," A tela abaixo \xe9 sugerida para identificar todos medicamentos administrados, com indica\xe7\xe3o r\xe1pida sobre troca/substitui\xe7\xe3o e evento adverso do paciente selecionado. "),m.Ob(7,"img",9),m.Sb(),m.Sb(),m.Ob(8,"div",7),m.Sb(),m.Sb(),m.Sb()),2&e){var i=m.ec();m.jc("formGroup",i.fb)}}function C(e,a){if(1&e){var i=m.Ub();m.Tb(0,"button",10),m.ac("click",(function(){return m.uc(i),m.ec().back_stepper()})),m.Tb(1,"mat-icon"),m.Dc(2,"arrow_back"),m.Sb(),m.Tb(3,"strong"),m.Dc(4,"Voltar"),m.Sb(),m.Sb()}}var w,S,k,T,I,R=((w=function(){function e(a,i,t,o){_classCallCheck(this,e),this.log=a,this.router=i,this.service=t,this.alert=o,this.isLive=!1,this.action=new m.o,this.fb=new b.h({}),this.fb.addControl("situacao",new b.e("",b.u.required))}return _createClass(e,[{key:"forms",set:function(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngOnInit())}},{key:"ngOnDestroy",value:function(){this.isLive=!1,this.alert.clearAll()}},{key:"ngOnInit",value:function(){this.isLive=!0,this._form&&(this.administracao_input=this._form.administracao,this._paciente_medico={id:this._form.patient.id,enable:!1},this.medicamento_input={enable:!1,medicine:this._form.medicine,pharmaceutical_form:{dose:this._form.pharmaceutical_form.dose,unit:this._form.pharmaceutical_form.unit,presentation:this._form.pharmaceutical_form.presentation},dosage:{route:this._form.dosage.route,intervalo:this._form.dosage.intervalo,duracao:this._form.dosage.duracao},justification:this._form.justification,note:this._form.note,dilute:this._form.dilute})}},{key:"back_stepper",value:function(){this.action.emit({back_stepper:!0})}},{key:"next_stepper",value:function(){if(this.fb.invalid)this.fb.markAllAsTouched();else{var e=this._form;e.notificacao=this.fb.value,e.notificacao.data_realizacao=(new Date).toLocaleTimeString(),this.service.addData(e),this.router.navigate(["/"],{skipLocationChange:!1}),this.alert.showToaster("Notifica\xe7\xe3o realizada com sucesso !")}}}]),e}()).\u0275fac=function(e){return new(e||w)(m.Nb(f.a),m.Nb(d.a),m.Nb(t.a),m.Nb(u.a))},w.\u0275cmp=m.Hb({type:w,selectors:[["intercambialidade-info"]],inputs:{forms:"forms"},outputs:{action:"action"},decls:4,vars:2,consts:[["class","form-margin",3,"formGroup",4,"ngIf"],["id","actions",2,"align-items","center","display","flex","flex-direction","row","flex-wrap","wrap","justify-content","center","margin-top","15px"],[2,"margin","0 auto"],["mat-button","","style","color: #1d9bbb","matTooltipPosition","above","matTooltip","Voltar",3,"click",4,"ngIf"],[1,"form-margin",3,"formGroup"],[1,"division",2,"display","flex"],[1,"block","m10",2,"margin","auto"],[1,"division"],[1,"raleway",2,"color","#0376bb"],["src","../doutorado/intercambialidade.png","alt","Intercambialidade","srcset",""],["mat-button","","matTooltipPosition","above","matTooltip","Voltar",2,"color","#1d9bbb",3,"click"]],template:function(e,a){1&e&&(m.Bc(0,g,9,1,"form",0),m.Tb(1,"div",1),m.Tb(2,"div",2),m.Bc(3,C,5,0,"button",3),m.Sb(),m.Sb()),2&e&&(m.jc("ngIf",a.fb),m.Bb(3),m.jc("ngIf",null!=a.fb))},directives:[o.k,b.v,b.o,b.i,_.a,y.a,h.a],styles:[""]}),w),L=[{path:"",component:(S=function(){function e(a,i,t,o,r){_classCallCheck(this,e),this.alert=a,this.service=i,this.log=t,this.sheet=o,this.sheetService=r,this._form=null}return _createClass(e,[{key:"form",set:function(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngAfterViewInit())}},{key:"ngOnDestroy",value:function(){this.isLive=null,this.values=null,this.settings=null,this._form=null}},{key:"ngAfterViewInit",value:function(){var e=this;this.isLive=!0,this.settings=Object(l.a)({show_action:{search:!0,edit:!1,remove:!1,radio:!1,name:"",consulta_label:"Consultar",consulta_placeholder:"Fa\xe7a a busca por paciente, registro hospitalar, medicamento ou per\xedodo de dispensa\xe7\xe3o"}});var a=[],i=this.service.datas;if(this._form&&this._form.paciente_selected){var t=this._form.paciente_selected;i=this.service.datas.filter((function(e){var a=e.patient;return a.id==t.id&&a.cpf==t.cpf}))}i.forEach((function(i){var t=e.builderData(i);a.push(t)})),this.values=Object(l.a)({push:a})}},{key:"getIntercambialidade",value:function(e){var a=[];return e.dispensacao&&a.push(e.dispensacao.disponivel?{value:"check_circle",descricao:"Medicamento prescrito e dispensado"}:{value:"compare_arrows",descricao:"Medicamento dispensado diferente do prescrito"}),e.notificacao?a.push({value:"report_problem",descricao:"Evento Adverso Relatado"}):e.administracao&&a.push({value:"change_history",descricao:"Sem relato de evento adverso"}),JSON.stringify(a)}},{key:"elementListEvent",value:function(e){e&&(e.view?this._form=this.service.datas.find((function(a){return e.view.id_dispensacao==a.id_dispensacao})):e.filteredData?(this.sheetService.setInfo({desc1:'"'.concat(e.filteredData,'" n\xe3o foi encontrado !'),desc2:"Por favor verifique se a informa\xe7\xe3o esta correta ! "}),this.sheet.open(c.c)):e.error&&this.alert.showToaster(f.a.LISTA_DE_CODIGOS_E_STATUS._1_INFORMATIVA))}},{key:"formEvent",value:function(e){e&&e.back_stepper&&(this._form=null)}},{key:"builderData",value:function(e){return[{displayed:"ID",placeholder:"ID",favorite:"0",name:"id",value:e.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do paciente",placeholder:"Id do paciente",favorite:"1",name:"id_paciente",value:e.patient.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do paciente",placeholder:"Nome do paciente",favorite:"2",name:"paciente",value:e.patient.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Registro Hospitalar",placeholder:"Registro Hospitalar",favorite:"3",name:"reg_hosp",value:e.patient.reg_hosp,validators:[],disabled:!0,hideRequired:!0},{displayed:"Imagem do perfil",placeholder:"Imagem do perfil",favorite:null,name:"img",value:e.patient.img,validators:[],disabled:!0,hideRequired:!0},{displayed:"Genero",placeholder:"Genero",favorite:null,name:"genero",value:e.patient.genero,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data de nascimento",placeholder:"Data de nascimento",favorite:null,name:"dt_nascimento",value:e.patient.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"CPF",placeholder:"CPF",favorite:null,name:"cpf",value:e.patient.cpf,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone",placeholder:"Telefone",favorite:null,name:"telefone",value:e.patient.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Endereco",placeholder:"Endereco",favorite:null,name:"endereco",value:e.patient.endereco,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do emitente",placeholder:"Id do emitente",favorite:null,name:"doctor_id",value:e.doctor.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do emitente",placeholder:"Nome do emitente",favorite:"4",name:"doctor_name",value:e.doctor.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma\xe7\xe3o do emitente",placeholder:"Forma\xe7\xe3o do emitente",favorite:null,name:"doctor_formacao",value:e.doctor.formacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nascimento do emitente",placeholder:"Nascimento do emitente",favorite:null,name:"doctor_dt_nascimento",value:e.doctor.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"Conselho do emitente",placeholder:"Conselho do emitente",favorite:null,name:"doctor_conselho",value:e.doctor.conselho,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone do emitente",placeholder:"Telefone do emitente",favorite:null,name:"doctor_telefone",value:e.doctor.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data e Hora",placeholder:"Data e Hora",favorite:"5",name:"time",value:"".concat(e.hospital.data," - ").concat(e.hospital.hora),validators:[],disabled:!0,hideRequired:!0},{displayed:"Hospital",placeholder:"Hospital",favorite:null,name:"nome_hospital",value:e.hospital.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Medicamento",placeholder:"Medicamento",favorite:"6",name:"medicine",value:"Biologico "+e.medicine,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma farmaceutica",placeholder:"Forma farmaceutica",favorite:null,name:"pharmaceutical_form",value:"Dose: ".concat(e.pharmaceutical_form.dose,", Unidade de medida: ").concat(e.pharmaceutical_form.unit,", Apresenta\xe7\xe3o: ").concat(e.pharmaceutical_form.presentation," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Posologia",placeholder:"Posologia",favorite:null,name:"dosage",value:"Via de administra\xe7\xe3o: ".concat(e.dosage.route,", Intervalo: ").concat(e.dosage.intervalo,", Dura\xe7\xe3o: ").concat(e.dosage.duracao," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Diluir",placeholder:"Diluir",favorite:null,name:"dilute",value:e.dilute,validators:[],disabled:!0,hideRequired:!0},{displayed:"notificacao",placeholder:"notificacao",favorite:null,name:"notificacao",value:JSON.stringify(e.notificacao),validators:[],disabled:!0,hideRequired:!0},{displayed:"dispensacao",placeholder:"dispensacao",favorite:null,name:"dispensacao",value:JSON.stringify(e.dispensacao),validators:[],disabled:!0,hideRequired:!0},{displayed:"administracao",placeholder:"administracao",favorite:null,name:"administracao",value:JSON.stringify(e.administracao),validators:[],disabled:!0,hideRequired:!0},{displayed:"Intercambialidade",placeholder:"",favorite:"7",name:"icons",value:this.getIntercambialidade(e),validators:[],disabled:!0,hideRequired:!0}]}}]),e}(),S.\u0275fac=function(e){return new(e||S)(m.Nb(u.a),m.Nb(t.a),m.Nb(f.a),m.Nb(p.b),m.Nb(c.d))},S.\u0275cmp=m.Hb({type:S,selectors:[["intercambialidade"]],inputs:{form:"form"},decls:11,vars:7,consts:[[2,"position","relative","min-height","420px"],[1,"division",2,"padding","5px 5px 0 10px","margin-left","10%","margin-right","10%","margin-top","7px"],[1,"hraleway",2,"color","#0376bb!important"],[2,"position","relative"],[2,"font-size","28px","color","#0376bb","position","absolute","left","-28px","padding-top","3px"],[1,"container-margin"],[1,"division",2,"padding-bottom","17px"],[3,"settings","values","action"],[3,"form","action"]],template:function(e,a){1&e&&(m.Tb(0,"div",0),m.Tb(1,"div",1),m.Tb(2,"h2",2),m.Tb(3,"span",3),m.Tb(4,"mat-icon",4),m.Dc(5," sms_failed "),m.Sb(),m.Sb(),m.Dc(6," Intercambialidade "),m.Sb(),m.Sb(),m.Tb(7,"div",5),m.Tb(8,"div",6),m.Tb(9,"element-list",7),m.ac("action",(function(e){return a.elementListEvent(e)})),m.Sb(),m.Sb(),m.Tb(10,"intercambialidade-info",8),m.ac("action",(function(e){return a.formEvent(e)})),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.Bb(8),m.Eb("hide",a._form),m.Bb(1),m.jc("settings",a.settings)("values",a.values),m.Bb(1),m.Eb("hide",!a._form),m.jc("form",a._form))},directives:[h.a,v.a,R],styles:[""],changeDetection:0}),S)}],N=((k=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:k}),k.\u0275inj=m.Kb({factory:function(e){return new(e||k)},imports:[[d.d.forChild(L)],d.d]}),k),q=i("AJBQ"),O=i("beWR"),M=i("ZwK7"),j=i("EMG7"),D=((I=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:I}),I.\u0275inj=m.Kb({factory:function(e){return new(e||I)},providers:[],imports:[[j.a,O.a,M.a,q.a,o.c,r.MaterialModule,d.d]]}),I),x=((T=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:T}),T.\u0275inj=m.Kb({factory:function(e){return new(e||T)},providers:[t.a],imports:[[n.a,s.a,r.MaterialModule,r.LayoutModule,o.c,N,D]]}),T)},ZwK7:function(e,a,i){"use strict";i.d(a,"a",(function(){return v}));var t,o,r,n=i("ofXK"),s=i("tyNb"),d=i("I02E"),l=i("/bhW"),c=i("XRci"),u=i("gqU8"),f=i("fXoL"),m=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=f.Lb({type:o}),o.\u0275inj=f.Kb({factory:function(e){return new(e||o)},providers:[d.a],imports:[[c.a,u.a,l.MaterialModule,l.LayoutModule,n.c]]}),o),p=((t=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=f.Lb({type:t}),t.\u0275inj=f.Kb({factory:function(e){return new(e||t)},providers:[d.a],imports:[[c.a,u.a,l.MaterialModule,l.LayoutModule,n.c]]}),t),h=i("EMG7"),v=((r=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=f.Lb({type:r}),r.\u0275inj=f.Kb({factory:function(e){return new(e||r)},providers:[],imports:[[h.a,n.c,l.MaterialModule,s.d,m,p]]}),r)},beWR:function(e,a,i){"use strict";i.d(a,"a",(function(){return d}));var t=i("ofXK"),o=i("tyNb"),r=i("/bhW"),n=i("em2M"),s=i("fXoL"),d=function(){var e=_createClass((function e(){_classCallCheck(this,e)}));return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(a){return new(a||e)},providers:[n.a],imports:[[t.c,r.MaterialModule,o.d]]}),e}()},em2M:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i("lJxs"),o=i("fXoL"),r=i("tk/3"),n=function(){var e=function(){function e(a){var i=this;_classCallCheck(this,e),this.http=a,this._unit_ucum=this.http.get("assets/unit_ucum.json"),this.unit_ucum={all:function(){return i._unit_ucum},by:function(e){return i._unit_ucum.pipe(Object(t.a)((function(a){var i=e.toLowerCase().trim();return a.filter((function(e){return JSON.stringify(e).toLowerCase().trim().indexOf(i)>=0}))})))}},this._presentation_ema=this.http.get("assets/unit_presentation_ema.json"),this.presentation_ema={all:function(){return i._presentation_ema},by:function(e){return i._presentation_ema.pipe(Object(t.a)((function(a){var i=e.toLowerCase().trim();return a.filter((function(e){return JSON.stringify(e).toLowerCase().trim().indexOf(i)>=0}))})))}},this._routes_ema=this.http.get("assets/routes_ema.json"),this.routes_ema={all:function(){return i._routes_ema},by:function(e){return i._routes_ema.pipe(Object(t.a)((function(a){var i=e.toLowerCase().trim();return a.filter((function(e){return JSON.stringify(e).toLowerCase().trim().indexOf(i)>=0}))})))}},localStorage.getItem("medicamentos")||localStorage.setItem("medicamentos",JSON.stringify([]))}return _createClass(e,[{key:"medicamentos",get:function(){var e=JSON.parse(localStorage.getItem("medicamentos")),a=[];if(e)for(var i=0;i<e.length;i++){var t=e[i];t.id_prescription=i+70,a.push(t)}return a},set:function(e){localStorage.setItem("medicamentos",JSON.stringify(e))}},{key:"addMedicamento",value:function(e){var a=JSON.parse(localStorage.getItem("medicamentos"));a||(a=[]),a.push(e),localStorage.setItem("medicamentos",JSON.stringify(a))}}]),e}();return e.\u0275fac=function(a){return new(a||e)(o.Xb(r.a))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);