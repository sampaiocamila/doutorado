function _defineProperties(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,a,i){return a&&_defineProperties(e.prototype,a),i&&_defineProperties(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1D2W":function(e,a,i){"use strict";i.r(a),i.d(a,"AdministracaoModule",(function(){return H}));var t,o=i("ofXK"),n=i("/bhW"),r=i("XRci"),l=i("gqU8"),d=i("beWR"),s=i("ZwK7"),c=i("EMG7"),m=i("fXoL"),u=((t=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:t}),t.\u0275inj=m.Kb({factory:function(e){return new(e||t)},providers:[],imports:[[c.a,d.a,s.a,o.c,n.MaterialModule]]}),t),b=i("tyNb"),f=i("I02E"),p=i("LRne"),h=i("J3qu"),v=i("VTKa"),_=i("dMsE"),g=i("2ChS"),y=i("NFeN"),T=i("Rv7U"),S=i("3Pt+"),k=i("bTqV"),w=i("Qu3c"),D=i("92lz"),I=i("LpNs"),C=i("pxjv"),R=i("kmnG"),q=i("qFsG");function L(e,a){1&e&&(m.Tb(0,"mat-error",21),m.Dc(1,"In\xedcio obrigat\xf3ria"),m.Sb())}function j(e,a){1&e&&(m.Tb(0,"mat-error",21),m.Dc(1,"Fim obrigat\xf3ria"),m.Sb())}function x(e,a){1&e&&(m.Tb(0,"mat-error",21),m.Dc(1,"Observa\xe7\xe3o obrigat\xf3ria"),m.Sb())}function N(e,a){if(1&e&&(m.Tb(0,"form",6),m.Tb(1,"div",7),m.Tb(2,"div",8),m.Tb(3,"div",9),m.Ob(4,"responsavel",10),m.Sb(),m.Tb(5,"div",9),m.Tb(6,"h2",11),m.Dc(7," Informa\xe7\xf5es da prescri\xe7\xe3o e dispensa\xe7\xe3o realizada "),m.Sb(),m.Ob(8,"paciente-medico",12),m.Ob(9,"medicamento",13),m.Sb(),m.Tb(10,"div",9),m.Tb(11,"div",9),m.Tb(12,"h2",11),m.Dc(13," Controle da administra\xe7\xe3o do medicamento "),m.Sb(),m.Sb(),m.Tb(14,"mat-form-field",14),m.Tb(15,"mat-label"),m.Dc(16,"In\xedcio"),m.Sb(),m.Ob(17,"input",15),m.Bc(18,L,2,0,"mat-error",16),m.Sb(),m.Tb(19,"mat-form-field",17),m.Tb(20,"mat-label"),m.Dc(21,"Fim"),m.Sb(),m.Ob(22,"input",18),m.Bc(23,j,2,0,"mat-error",16),m.Sb(),m.Tb(24,"div",9),m.Tb(25,"mat-form-field",19),m.Tb(26,"mat-label"),m.Dc(27,"Observa\xe7\xe3o"),m.Sb(),m.Ob(28,"input",20),m.Bc(29,x,2,0,"mat-error",16),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&e){var i,t,o,n=m.ec(),r=null==(i=n.fb.get("inicio"))?null:i.invalid,l=null==(t=n.fb.get("fim"))?null:t.invalid,d=null==(o=n.fb.get("obs"))?null:o.invalid;m.jc("formGroup",n.fb),m.Bb(4),m.jc("responsavel",n.responsavel),m.Bb(4),m.jc("paciente",n._paciente_medico),m.Bb(1),m.jc("medicamento",n.medicamento_input),m.Bb(9),m.jc("ngIf",r),m.Bb(5),m.jc("ngIf",l),m.Bb(6),m.jc("ngIf",d)}}function O(e,a){if(1&e){var i=m.Ub();m.Tb(0,"button",22),m.ac("click",(function(){return m.uc(i),m.ec().back_stepper()})),m.Tb(1,"mat-icon"),m.Dc(2,"arrow_back"),m.Sb(),m.Tb(3,"strong"),m.Dc(4,"Voltar"),m.Sb(),m.Sb()}}var A,B,E,P,M=((A=function(){function e(a,i,t,o){_classCallCheck(this,e),this.log=a,this.router=i,this.service=t,this.alert=o,this.isLive=!1,this.responsavel={id:null,img:"r2img.jpg",identificacao:"Identifica\xe7\xe3o do Emitente da Administra\xe7\xe3o",nome:"Lincoln",formacao:"Enfermeiro",dt_nascimento:"26/03/1966",conselho:"00000-0/SP",telefone:"+1 2064047000",hospital:{img:"himg.jpg",nome:"Grace Hospital (Seattle)",data:(new Date).toLocaleDateString(),hora:(new Date).toLocaleTimeString()}},this.action=new m.o,this.fb=new S.h({}),this.fb.addControl("inicio",new S.e("",S.u.required)),this.fb.addControl("fim",new S.e("",S.u.required)),this.fb.addControl("obs",new S.e("",S.u.required))}return _createClass(e,[{key:"forms",set:function(e){e&&this._form!=e&&(this._form=e,this.isLive&&this.ngOnInit())}},{key:"onMouseLeave",value:function(){}},{key:"ngOnDestroy",value:function(){this.isLive=!1,this.fb=null,this._fb=null,this.alert.clearAll()}},{key:"ngOnInit",value:function(){this.isLive=!0,this._form&&(this._paciente_medico={id:this._form.patient.id,enable:!1},this.medicamento_input={enable:!1,medicine:this._form.medicine,pharmaceutical_form:{dose:this._form.pharmaceutical_form.dose,unit:this._form.pharmaceutical_form.unit,presentation:this._form.pharmaceutical_form.presentation},dosage:{route:this._form.dosage.route,intervalo:this._form.dosage.intervalo,duracao:this._form.dosage.duracao},justification:this._form.justification,note:this._form.note,dilute:this._form.dilute})}},{key:"regIntercorrencia",value:function(){var e=this._form;e.administracao=this.fb.value,e.administracao.responsavel=this.responsavel,e.administracao.data_realizacao=(new Date).toLocaleTimeString(),this.service.addData(e),this.alert.showToaster("Intercorrencia registrada com sucesso !")}},{key:"back_stepper",value:function(){this.action.emit({back_stepper:!0})}},{key:"next_stepper_and_intercorrencia",value:function(){this.next_stepper("/intercambialidade",!0)}},{key:"next_stepper",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",a=arguments.length>1?arguments[1]:void 0;if(this.fb.invalid)this.fb.markAllAsTouched();else{var i=this._form;i.administracao=this.fb.value,i.administracao.responsavel=this.responsavel,i.administracao.data_realizacao=(new Date).toLocaleTimeString(),this.service.addData(i),e&&this.router.navigate([e],{skipLocationChange:!1}),a||this.alert.showToaster("Administra\xe7\xe3o realizada com sucesso !")}}}]),e}()).\u0275fac=function(e){return new(e||A)(m.Nb(_.a),m.Nb(b.a),m.Nb(f.a),m.Nb(v.a))},A.\u0275cmp=m.Hb({type:A,selectors:[["administracao-form"]],hostBindings:function(e,a){1&e&&m.ac("mouseleave",(function(){return a.onMouseLeave()}))},inputs:{forms:"forms"},outputs:{action:"action"},decls:14,vars:2,consts:[["class","form-margin",3,"formGroup",4,"ngIf"],["id","actions",2,"align-items","center","display","flex","flex-direction","row","flex-wrap","wrap","justify-content","center","margin-top","15px"],[2,"margin","0 auto"],["mat-button","","style","color: #1d9bbb","matTooltipPosition","above","matTooltip","Voltar",3,"click",4,"ngIf"],["mat-raised-button","","matTooltipPosition","above","matTooltip","Administrado",2,"color","#1dbb3f",3,"click"],["mat-raised-button","","matTooltipPosition","above","matTooltip","Administrado",2,"color","#d84b4b",3,"click"],[1,"form-margin",3,"formGroup"],[1,"division",2,"display","flex"],[1,"block","m10",2,"margin","auto"],[1,"division"],[3,"responsavel"],[1,"raleway",2,"color","#0376bb"],[3,"paciente"],[3,"medicamento"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4",2,"padding-right","7px"],["aria-label","In\xedcio","matInput","","type","text","placeholder","01/01/2021 13:51","formControlName","inicio"],["align","end",4,"ngIf"],["hideRequiredMarker","false","floatLabel","always",1,"block","m4"],["aria-label","Fim","matInput","","type","text","placeholder","01/01/2021 14:52","formControlName","fim"],["hideRequiredMarker","false","floatLabel","always",1,"block","m12"],["aria-label","obs","matInput","","type","text","placeholder","Observa\xe7\xe3o","formControlName","obs"],["align","end"],["mat-button","","matTooltipPosition","above","matTooltip","Voltar",2,"color","#1d9bbb",3,"click"]],template:function(e,a){1&e&&(m.Bc(0,N,30,7,"form",0),m.Tb(1,"div",1),m.Tb(2,"div",2),m.Bc(3,O,5,0,"button",3),m.Tb(4,"button",4),m.ac("click",(function(){return a.next_stepper()})),m.Tb(5,"mat-icon"),m.Dc(6,"done_outline"),m.Sb(),m.Tb(7,"strong"),m.Dc(8,"Registrar Administra\xe7\xe3o"),m.Sb(),m.Sb(),m.Tb(9,"button",5),m.ac("click",(function(){return a.next_stepper_and_intercorrencia()})),m.Tb(10,"mat-icon"),m.Dc(11,"done_outline"),m.Sb(),m.Tb(12,"strong"),m.Dc(13,"Registrar Administra\xe7\xe3o com Intercorr\xeancia"),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.jc("ngIf",a.fb),m.Bb(3),m.jc("ngIf",null!=a.fb))},directives:[o.k,k.a,w.a,y.a,S.v,S.o,S.i,D.a,I.a,C.a,R.d,R.h,q.b,S.c,S.n,S.g,R.c],styles:[""]}),A),F=[{path:"",component:(B=function(){function e(a,i,t,o,n){_classCallCheck(this,e),this.alert=a,this.service=i,this.log=t,this.sheet=o,this.sheetService=n,this._form=null}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.isLive=null,this.values=null,this.settings=null,this._form=null}},{key:"ngAfterViewInit",value:function(){this.isLive=!0,this.settings=Object(p.a)({show_action:{search:!0,edit:!1,remove:!1,radio:!1,name:"",consulta_label:"Consultar",consulta_placeholder:"Fa\xe7a a busca por paciente, registro hospitalar, medicamento ou per\xedodo de administra\xe7\xe3o"}});var e=[];this.service.datas.filter((function(e){return e.dispensacao&&!e.administracao})).forEach((function(a){e.push([{displayed:"ID",placeholder:"ID",favorite:"0",name:"id",value:a.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do paciente",placeholder:"Id do paciente",favorite:"1",name:"id_paciente",value:a.patient.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do paciente",placeholder:"Nome do paciente",favorite:"2",name:"paciente",value:a.patient.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Registro Hospitalar",placeholder:"Registro Hospitalar",favorite:"3",name:"reg_hosp",value:a.patient.reg_hosp,validators:[],disabled:!0,hideRequired:!0},{displayed:"Imagem do perfil",placeholder:"Imagem do perfil",favorite:null,name:"img",value:a.patient.img,validators:[],disabled:!0,hideRequired:!0},{displayed:"Genero",placeholder:"Genero",favorite:null,name:"genero",value:a.patient.genero,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data de nascimento",placeholder:"Data de nascimento",favorite:null,name:"dt_nascimento",value:a.patient.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"CPF",placeholder:"CPF",favorite:null,name:"cpf",value:a.patient.cpf,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone",placeholder:"Telefone",favorite:null,name:"telefone",value:a.patient.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Endereco",placeholder:"Endereco",favorite:null,name:"endereco",value:a.patient.endereco,validators:[],disabled:!0,hideRequired:!0},{displayed:"Id do emitente",placeholder:"Id do emitente",favorite:null,name:"doctor_id",value:a.doctor.id,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nome do emitente",placeholder:"Nome do emitente",favorite:"4",name:"doctor_name",value:a.doctor.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma\xe7\xe3o do emitente",placeholder:"Forma\xe7\xe3o do emitente",favorite:null,name:"doctor_formacao",value:a.doctor.formacao,validators:[],disabled:!0,hideRequired:!0},{displayed:"Nascimento do emitente",placeholder:"Nascimento do emitente",favorite:null,name:"doctor_dt_nascimento",value:a.doctor.dt_nascimento,validators:[],disabled:!0,hideRequired:!0},{displayed:"Conselho do emitente",placeholder:"Conselho do emitente",favorite:null,name:"doctor_conselho",value:a.doctor.conselho,validators:[],disabled:!0,hideRequired:!0},{displayed:"Telefone do emitente",placeholder:"Telefone do emitente",favorite:null,name:"doctor_telefone",value:a.doctor.telefone,validators:[],disabled:!0,hideRequired:!0},{displayed:"Data e Hora",placeholder:"Data e Hora",favorite:"5",name:"time",value:"".concat(a.hospital.data," - ").concat(a.hospital.hora),validators:[],disabled:!0,hideRequired:!0},{displayed:"Hospital",placeholder:"Hospital",favorite:null,name:"nome_hospital",value:a.hospital.nome,validators:[],disabled:!0,hideRequired:!0},{displayed:"Medicamento",placeholder:"Medicamento",favorite:"6",name:"medicine",value:"Biologico "+a.medicine,validators:[],disabled:!0,hideRequired:!0},{displayed:"Forma farmac\xeautica",placeholder:"Forma farmaceutica",favorite:null,name:"pharmaceutical_form",value:"Dose: ".concat(a.pharmaceutical_form.dose,", Unidade de medida: ").concat(a.pharmaceutical_form.unit,", Apresenta\xe7\xe3o: ").concat(a.pharmaceutical_form.presentation," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Posologia",placeholder:"Posologia",favorite:null,name:"dosage",value:"Via de administra\xe7\xe3o: ".concat(a.dosage.route,", Intervalo: ").concat(a.dosage.intervalo,", Dura\xe7\xe3o: ").concat(a.dosage.duracao," "),validators:[],disabled:!0,hideRequired:!0},{displayed:"Diluir",placeholder:"Diluir",favorite:null,name:"dilute",value:a.dilute,validators:[],disabled:!0,hideRequired:!0}])})),this.values=Object(p.a)({push:e})}},{key:"elementListEvent",value:function(e){e&&(e.view?this._form=this.service.datas.find((function(a){return e.view.id==a.id})):e.filteredData?(this.sheetService.setInfo({desc1:'"'.concat(e.filteredData,'" n\xe3o foi encontrado !'),desc2:"Por favor verifique se a informa\xe7\xe3o esta correta ! "}),this.sheet.open(h.c)):e.error&&this.alert.showToaster(_.a.LISTA_DE_CODIGOS_E_STATUS._1_INFORMATIVA))}},{key:"formEvent",value:function(e){e&&e.back_stepper&&(this._form=null)}}]),e}(),B.\u0275fac=function(e){return new(e||B)(m.Nb(v.a),m.Nb(f.a),m.Nb(_.a),m.Nb(g.b),m.Nb(h.d))},B.\u0275cmp=m.Hb({type:B,selectors:[["ng-component"]],decls:11,vars:7,consts:[[2,"position","relative","min-height","420px"],[1,"division",2,"padding","5px 5px 0 10px","margin-left","10%","margin-right","10%","margin-top","7px"],[1,"hraleway",2,"color","#0376bb!important"],[2,"position","relative"],[2,"font-size","28px","color","#0376bb","position","absolute","left","-28px","padding-top","3px"],[1,"container-margin"],[1,"division",2,"padding-bottom","17px"],[3,"settings","values","action"],[3,"forms","action"]],template:function(e,a){1&e&&(m.Tb(0,"div",0),m.Tb(1,"div",1),m.Tb(2,"h2",2),m.Tb(3,"span",3),m.Tb(4,"mat-icon",4),m.Dc(5," library_add_check "),m.Sb(),m.Sb(),m.Dc(6," Administra\xe7\xe3o "),m.Sb(),m.Sb(),m.Tb(7,"div",5),m.Tb(8,"div",6),m.Tb(9,"element-list",7),m.ac("action",(function(e){return a.elementListEvent(e)})),m.Sb(),m.Sb(),m.Tb(10,"administracao-form",8),m.ac("action",(function(e){return a.formEvent(e)})),m.Sb(),m.Sb(),m.Sb()),2&e&&(m.Bb(8),m.Eb("hide",a._form),m.Bb(1),m.jc("settings",a.settings)("values",a.values),m.Bb(1),m.Eb("hide",!a._form),m.jc("forms",a._form))},directives:[y.a,T.a,M],styles:[""]}),B)}],G=((P=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:P}),P.\u0275inj=m.Kb({factory:function(e){return new(e||P)},imports:[[b.d.forChild(F)],b.d]}),P),H=((E=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=m.Lb({type:E}),E.\u0275inj=m.Kb({factory:function(e){return new(e||E)},providers:[],imports:[[u,r.a,l.a,n.MaterialModule,o.c,G]]}),E)}}]);