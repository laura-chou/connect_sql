(function(){"use strict";var e={9996:function(e,t,n){var l=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(o.Ob,null,[(0,o.Wm)(n)],1024)}var i=n(89);const c={},s=(0,i.Z)(c,[["render",a]]);var d=s,r=n(678);const u={class:"home"};function m(e,t,n,l,a,i){const c=(0,o.up)("SqlForm");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(c)])}var h=n(7139);const f={class:"container p-0"},p=(0,o._)("div",{class:"row mb-3 subject"},[(0,o._)("div",{class:"col-12 text-center"},[(0,o._)("h2",{class:"font-monospace mt-2"},"ASP.NET Web Form MySQL CRUD")])],-1),b={class:"row"},k={class:"col-12"},y={class:"row g-3 mb-3 needs-validation",novalidate:""},g={class:"col-md-6"},v=(0,o._)("label",{for:"validationReturn",class:"form-label"},"Return",-1),C=(0,o._)("option",{selected:"",value:""},"Choose Type...",-1),T=(0,o._)("option",null,"No",-1),E=(0,o._)("option",null,"DataTable",-1),N=(0,o._)("option",null,"String",-1),S=(0,o._)("option",null,"Int",-1),_=[C,T,E,N,S],w=(0,o._)("div",{class:"invalid-feedback"}," Please select a valid return. ",-1),D={class:"col-md-6"},R=(0,o._)("label",{for:"validationCRUD",class:"form-label"},"CRUD",-1),x=(0,o.uE)('<option selected value="">Choose CRUD...</option><option value="SELECT">Select</option><option value="INSERT">Insert</option><option value="UPDATE">Update</option><option value="DELETE">Delete</option>',5),I=[x],U=(0,o._)("div",{class:"invalid-feedback"}," Please select a valid CRUD. ",-1),M={class:"col-md-4"},P=(0,o._)("label",{for:"validationMethodName",class:"form-label"},"Method Name",-1),V=(0,o._)("div",{class:"invalid-feedback"}," Please provide a valid method name. ",-1),q={class:"col-md-4"},F=(0,o._)("label",{for:"validationConnectionString",class:"form-label"},"ConnectionStrings",-1),O=(0,o._)("div",{class:"invalid-feedback"}," Please provide a valid connectionstrings. ",-1),L={class:"col-md-4"},A=(0,o._)("label",{for:"validationTableName",class:"form-label"},"Table Name",-1),W=(0,o._)("div",{class:"invalid-feedback"}," Please provide a valid table name. ",-1),j={class:"col-md-12"},B=(0,o._)("label",{class:"form-label"},"Field",-1),$={id:"fieldTable",class:"table table-striped"},Z={colspan:"8"},H={class:"form-group row d-flex align-items-center"},z=(0,o.uE)('<option selected value="">Choose Type...</option><option value="string">String</option><option value="int">Int</option><option value="DateTime">DateTime</option><option value="double">Double</option>',5),Q=[z],Y=(0,o.Uk)("   "),G=(0,o.Uk)("   "),J={class:"form-check form-check-inline",style:{width:"5%"}},K=(0,o._)("label",{class:"form-check-label"},"isnull",-1),X=(0,o.Uk)("   "),ee=(0,o._)("div",{class:"field invalid-feedback field-error"}," Please provide a valid field. ",-1),te={class:"title"},ne=(0,o._)("th",null,null,-1),le=(0,o._)("th",null,"WHERE",-1),oe=(0,o._)("th",null,"ORDER BY",-1),ae=(0,o._)("th",null,"Type",-1),ie=(0,o._)("th",null,"Name",-1),ce=(0,o._)("th",null,"Null",-1),se=(0,o._)("th",null,"Actions",-1),de=["checked","onClick"],re=["checked","onClick"],ue=["checked","onClick"],me={key:0},he={key:1},fe=["onUpdate:modelValue"],pe=(0,o._)("option",{value:"string"},"String",-1),be=(0,o._)("option",{value:"int"},"Int",-1),ke=(0,o._)("option",{value:"DateTime"},"DateTime",-1),ye=(0,o._)("option",{value:"double"},"Double",-1),ge=[pe,be,ke,ye],ve={key:2},Ce={key:3},Te=["onUpdate:modelValue"],Ee={key:4},Ne=["checked"],Se={key:5},_e=["onUpdate:modelValue","disabled"],we={key:6,class:"d-flex justify-content-center"},De=["onClick"],Re=(0,o.Uk)("   "),xe=["onClick"],Ie={key:7,class:"d-flex justify-content-center"},Ue=["onClick"],Me=(0,o.Uk)("   "),Pe=["onClick"],Ve={class:"col-12 text-center"},qe=(0,o.Uk)("   "),Fe={class:"col-12"},Oe={class:"javascript"};function Le(e,t,n,a,i,c){const s=(0,o.up)("vue-feather"),d=(0,o.up)("draggable"),r=(0,o.Q2)("highlightjs");return(0,o.wg)(),(0,o.iD)("div",f,[p,(0,o._)("div",b,[(0,o._)("div",k,[(0,o._)("form",y,[(0,o._)("div",g,[v,(0,o.wy)((0,o._)("select",{class:"form-select",id:"validationReturn","onUpdate:modelValue":t[0]||(t[0]=t=>e.colReturn=t),required:""},_,512),[[l.bM,e.colReturn]]),w]),(0,o._)("div",D,[R,(0,o.wy)((0,o._)("select",{class:"form-select",id:"validationCRUD","onUpdate:modelValue":t[1]||(t[1]=t=>e.colCrud=t),required:""},I,512),[[l.bM,e.colCrud]]),U]),(0,o._)("div",M,[P,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"validationMethodName","onUpdate:modelValue":t[2]||(t[2]=t=>e.colMethodName=t),required:""},null,512),[[l.nr,e.colMethodName]]),V]),(0,o._)("div",q,[F,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"validationConnectionString","onUpdate:modelValue":t[3]||(t[3]=t=>e.colConnectionStrings=t),required:""},null,512),[[l.nr,e.colConnectionStrings]]),O]),(0,o._)("div",L,[A,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"validationTableName","onUpdate:modelValue":t[4]||(t[4]=t=>e.colTableName=t),required:""},null,512),[[l.nr,e.colTableName]]),W]),(0,o._)("div",j,[B,(0,o._)("table",$,[(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("td",Z,[(0,o._)("div",H,[(0,o.wy)((0,o._)("select",{class:"form-select no-validate","onUpdate:modelValue":t[5]||(t[5]=t=>e.addType=t),style:{width:"30%"},onChange:t[6]||(t[6]=e=>c.ChangeType(e))},Q,544),[[l.bM,e.addType]]),Y,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control no-validate","onUpdate:modelValue":t[7]||(t[7]=t=>e.addName=t),autocomplete:"off",placeholder:"Name",style:{width:"30%"}},null,512),[[l.nr,e.addName]]),G,(0,o._)("div",J,[(0,o.wy)((0,o._)("input",{id:"add-null",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=t=>e.addNull=t)},null,512),[[l.e8,e.addNull]]),K]),X,(0,o._)("button",{type:"button",class:"btn btn-primary d-flex",onClick:t[9]||(t[9]=(...e)=>c.AddItem&&c.AddItem(...e)),style:{width:"auto"}},[(0,o.Wm)(s,{type:"plus",stroke:"white"})]),ee])])]),(0,o._)("tr",te,[ne,(0,o._)("th",null,(0,h.zw)(c.crudField),1),le,oe,ae,ie,ce,se])]),(0,o.Wm)(d,{modelValue:e.fields,"onUpdate:modelValue":t[10]||(t[10]=t=>e.fields=t),tag:"tbody","item-key":"name",handle:".handle",class:"drag",onChange:c.CheckMove,animation:100},{item:(0,o.w5)((({element:e,index:t})=>[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o.Wm)(s,{class:"handle",type:"align-justify",stroke:"black"})]),(0,o._)("td",null,[e.edit||"DELETE"===c.crudField?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("input",{key:0,class:"form-check-input",type:"checkbox",checked:e.check,onClick:n=>c.CheckItem("1",e.check,t)},null,8,de))]),(0,o._)("td",null,[e.edit||"INSERT INTO"===c.crudField?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("input",{key:0,class:"form-check-input",type:"checkbox",checked:e.check2,onClick:n=>c.CheckItem("2",e.check2,t)},null,8,re))]),(0,o._)("td",null,[e.edit||"SELECT"!==c.crudField?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("input",{key:0,class:"form-check-input",type:"checkbox",checked:e.check3,onClick:n=>c.CheckItem("3",e.check3,t)},null,8,ue))]),e.edit?((0,o.wg)(),(0,o.iD)("td",he,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":t=>e.editType=t},ge,8,fe),[[l.bM,e.editType]])])):((0,o.wg)(),(0,o.iD)("td",me,(0,h.zw)(e.type),1)),e.edit?((0,o.wg)(),(0,o.iD)("td",Ce,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>e.editName=t},null,8,Te),[[l.nr,e.editName]])])):((0,o.wg)(),(0,o.iD)("td",ve,(0,h.zw)(e.name),1)),e.edit?((0,o.wg)(),(0,o.iD)("td",Se,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t=>e.editNull=t,disabled:c.EditNull(e.editType)},null,8,_e),[[l.e8,e.editNull]])])):((0,o.wg)(),(0,o.iD)("td",Ee,[(0,o._)("input",{class:"form-check-input",type:"checkbox",checked:e.isnull,disabled:""},null,8,Ne)])),e.edit?((0,o.wg)(),(0,o.iD)("td",Ie,[(0,o._)("button",{type:"button",class:"btn btn-success d-flex",onClick:n=>c.UpdateItem(e,t)},[(0,o.Wm)(s,{type:"check",stroke:"white"})],8,Ue),Me,(0,o._)("button",{type:"button",class:"btn btn-danger d-flex",onClick:e=>c.CancelItem(t)},[(0,o.Wm)(s,{type:"x",stroke:"white"})],8,Pe)])):((0,o.wg)(),(0,o.iD)("td",we,[(0,o._)("button",{type:"button",class:"btn btn-success d-flex",onClick:t=>c.EditItem(e)},[(0,o.Wm)(s,{type:"edit",stroke:"white"})],8,De),Re,(0,o._)("button",{type:"button",class:"btn btn-danger d-flex",onClick:e=>c.DeleteItem(t)},[(0,o.Wm)(s,{type:"trash-2",stroke:"white"})],8,xe)]))])])),_:1},8,["modelValue","onChange"])])]),(0,o._)("div",Ve,[(0,o._)("button",{class:"btn btn-danger",type:"button",onClick:t[11]||(t[11]=(...e)=>c.Clear&&c.Clear(...e))},"Clear"),qe,(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:t[12]||(t[12]=(...e)=>c.Submit&&c.Submit(...e))},"Submit")])])]),(0,o._)("div",Fe,[(0,o.wy)(((0,o.wg)(),(0,o.iD)("pre",null,[(0,o._)("code",Oe,(0,h.zw)(c.codes),1)])),[[r]])])])])}var Ae={name:"SqlForm",data:function(){return{colReturn:this.$store.getters.colReturn,colMethodName:this.$store.getters.colMethodName,colConnectionStrings:this.$store.getters.colConnectionStrings,colCrud:this.$store.getters.colCrud,colTableName:this.$store.getters.colTableName,fields:this.$store.getters.fields,addType:"",addName:"",addNull:!1,isSubmit:!1}},computed:{codes(){return this.$store.getters.codes},crudField(){let e="";switch(this.colCrud){case"SELECT":e="SELECT";break;case"INSERT":e="INSERT INTO";break;case"UPDATE":e="UPDATE SET";break;case"DELETE":e="DELETE";break}return e}},methods:{CheckMove(){const e=this.fields;this.$store.commit("changeField",e)},ChangeType(e){"string"===e.target.value?document.getElementById("add-null").disabled=!0:document.getElementById("add-null").disabled=!1},Submit(){this.isSubmit=!0,0===this.fields.length&&(document.getElementsByClassName("field")[0].style.display="block",document.getElementsByClassName("title")[0].style.borderBottom="2px solid #dc3545");const e=this.fields.length,t=document.querySelectorAll(".needs-validation");let n=!1;if(Array.prototype.slice.call(t).forEach((function(t){t.checkValidity()?0===e?t.classList.add("was-validated"):n=!0:t.classList.add("was-validated")})),n){this.isSubmit=!1;let e="public "+("No"===this.colReturn?"void":"DataTable"!==this.colReturn?this.colReturn.toLowerCase():this.colReturn)+" "+this.colMethodName+" (",t="";for(const o of this.fields){const e=o.isnull&&"string"!==o.type?"?":"";switch(this.colCrud){case"SELECT":case"DELETE":o.check2&&(t+=""!==t?", ":"",t+=o.type+e+" "+o.name);break;case"INSERT":o.check&&(t+=""!==t?", ":"",t+=o.type+e+" "+o.name);break;case"UPDATE":o.check&&(t+=""!==t?", ":"",t+=o.type+e+" "+o.name),o.check2&&(t.includes(o.name)||(t+=""!==t?", ":"",t+=o.type+e+" "+o.name));break}}e+=t+"){\n\n  ","DataTable"===this.colReturn?e+="DataTable dataTable1 = new DataTable();\n\n  ":"String"===this.colReturn?e+='string returnStr="";\n\n  ':"Int"===this.colReturn&&(e+='string returnInt="";\n\n  '),e+='string sqlstr = @"'+this.colCrud;let n=0;switch(this.colCrud){case"SELECT":t="";for(const e of this.fields)e.check&&(t+=(""!==t?", ":"")+e.name,n++);n===this.fields.length&&(t="*"),e+=" "+t+" FROM "+this.colTableName,t="";for(const n of this.fields)n.check2&&(e.includes("WHERE")||(e+=" WHERE "),t+=(""!==t?" and ":"")+n.name+"=@"+n.name);e+=t,t="";for(const n of this.fields)n.check3&&(e.includes("ORDER BY")||(e+=" ORDER BY "),t+=(""!==t?" and ":"")+n.name);e+=t+'";\n\n';break;case"INSERT":e+=" INTO "+this.colTableName+" ( ",t="";for(const e of this.fields)e.check&&(t+=(""!==t?", ":"")+e.name);e+=t+" ) VALUES ( ",t="";for(const e of this.fields)e.check&&(t+=(""!==t?", ":"")+"@"+e.name);e+=t+' )";\n\n';break;case"UPDATE":e+=" "+this.colTableName+" SET ",t="";for(const e of this.fields)e.check&&(t+=(""!==t?", ":"")+e.name+"=@"+e.name);e+=t+" WHERE ",t="";for(const e of this.fields)e.check2&&(t+=(""!==t?" and ":"")+e.name+"=@"+e.name);e+=t+'";\n\n';break;case"DELETE":e+=" "+this.colTableName,t="";for(const n of this.fields)n.check2&&(e.includes("WHERE")||(e+=" WHERE "),t+=(""!==t?" and ":"")+n.name+"=@"+n.name);e+=t+'";\n\n';break}e+='  string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["'+this.colConnectionStrings+'"].ToString();\n\n',e+="  using (SqlConnection conn = new SqlConnection(connString)){\n\n    SqlCommand cmd = new SqlCommand(sqlstr);\n\n    ",t="";for(const o of this.fields){let e=o.type;switch(o.type){case"string":e="NVarChar";break;case"int":e="Int";break;case"double":e="Double";break}switch(this.colCrud){case"SELECT":case"DELETE":o.check2&&(t+=(""!==t?"\n    ":"")+'cmd.Parameters.Add("@'+o.name+'", SqlDbType.'+e+").Value = "+o.name+";");break;case"INSERT":o.check&&(t+=(""!==t?"\n    ":"")+'cmd.Parameters.Add("@'+o.name+'", SqlDbType.'+e+").Value = "+o.name+";");break;case"UPDATE":o.check&&(t+=(""!==t?"\n    ":"")+'cmd.Parameters.Add("@'+o.name+'", SqlDbType.'+e+").Value = "+o.name+";"),o.check2&&(t.includes(o.name)||(t+=(""!==t?"\n    ":"")+'cmd.Parameters.Add("@'+o.name+'", SqlDbType.'+e+").Value = "+o.name+";"));break}}e+=t+'\n\n    foreach (SqlParameter Parameter in cmd.Parameters)\n      if (Parameter.Value == null || Parameter.Value.ToString() == "")\n        Parameter.Value = DBNull.Value;\n\n    ',e+="cmd.Connection = conn;\n    conn.Open();\n\n  ","DataTable"===this.colReturn?e+="  SqlDataReader dr = cmd.ExecuteReader();\n\n    dataTable1.Load(dr);\n\n    ":"String"===this.colReturn?e+="  returnStr = Convert.ToString(cmd.ExecuteScalar());\n\n    ":"Int"===this.colReturn?e+="  returnInt = Convert.ToInt32(cmd.ExecuteScalar());\n\n    ":e+="  cmd.ExecuteNonQuery();\n\n    ",e+="conn.Close();\n  }","No"!==this.colReturn&&(e+="\n\n  "),"DataTable"===this.colReturn?e+="return dataTable1;":"String"===this.colReturn?e+="return returnStr;":"Int"===this.colReturn&&(e+="return returnInt;"),e+="\n}";const l={Return:this.colReturn,MethodName:this.colMethodName,ConnectionStrings:this.colConnectionStrings,Crud:this.colCrud,TableName:this.colTableName,Codes:e};this.$store.commit("addData",l)}},Clear(){confirm("Make sure you want to clear？")&&(location.reload(),this.$store.commit("clearData"))},AddItem(){if(""===this.addType)alert("Please choose type");else if(""===this.addName)alert("Please input name");else{const e=this.fields,t={type:this.addType,editType:this.addType,name:this.addName,editName:this.addName,isnull:this.addNull,editNull:this.addNull,edit:!1,check:!0,check2:!1,check3:!1};this.$store.commit("addField",{fields:e,data:t}),this.addType="",this.addName="",this.addNull=!1,this.isSubmit&&(document.getElementsByClassName("field")[0].style.display="none",document.getElementsByClassName("title")[0].style.borderBottom="none")}},EditItem(e){e.edit=!0},DeleteItem(e){confirm("Make sure you want to delete？")&&(this.$store.commit("deleteField",e),this.isSubmit&&0===this.fields.length&&(document.getElementsByClassName("field")[0].style.display="block",document.getElementsByClassName("title")[0].style.borderBottom="2px solid #dc3545"))},CancelItem(e){this.$store.commit("cancelField",e)},UpdateItem(e,t){e.edit=!1,this.$store.commit("updateField",{field:e,index:t})},CheckItem(e,t,n){const l=!t;this.$store.commit("checkbox",{checkbox:e,ischeck:l,index:n})},EditNull(e){if("string"===e)return!0}}};const We=(0,i.Z)(Ae,[["render",Le]]);var je=We,Be={name:"HomeView",components:{SqlForm:je}};const $e=(0,i.Z)(Be,[["render",m]]);var Ze=$e;const He=[{path:"/",name:"home",component:Ze}],ze=(0,r.p7)({history:(0,r.r5)(),routes:He});var Qe=ze,Ye=n(9749),Ge=n(2415),Je=(0,Ye.MT)({state:{colReturn:"",colMethodName:"",colConnectionStrings:"",colCrud:"",colTableName:"",fields:[],codes:""},getters:{colReturn(e){return e.colReturn},colMethodName(e){return e.colMethodName},colConnectionStrings(e){return e.colConnectionStrings},colCrud(e){return e.colCrud},colTableName(e){return e.colTableName},fields(e){return e.fields},codes(e){return e.codes}},mutations:{addData(e,t){e.colReturn=t.Return,e.colMethodName=t.MethodName,e.colConnectionStrings=t.ConnectionStrings,e.colCrud=t.Crud,e.colTableName=t.TableName,e.codes=t.Codes},clearData(e){e.colReturn="",e.colMethodName="",e.colConnectionStrings="",e.colCrud="",e.colTableName="",e.fields.length=0,e.codes=""},addField(e,{fields:t,data:n}){e.fields=t,e.fields.push(n)},deleteField(e,t){e.fields.splice(t,1)},cancelField(e,t){e.fields[t].editType=e.fields[t].type,e.fields[t].editName=e.fields[t].name,e.fields[t].editNull=e.fields[t].isnull,e.fields[t].edit=!1},updateField(e,{field:t,index:n}){e.fields[n].type=e.fields[n].editType,e.fields[n].name=e.fields[n].editName,e.fields[n].isnull=e.fields[n].editNull,e.fields[n]=t},changeField(e,t){e.fields=t},checkbox(e,{checkbox:t,ischeck:n,index:l}){switch(t){case"1":e.fields[l].check=n;break;case"2":e.fields[l].check2=n;break;case"3":e.fields[l].check3=n;break}}},plugins:[(0,Ge.Z)({storage:sessionStorage})]}),Ke=n(7557),Xe=(n(8937),n(2368)),et=n(6983),tt=n.n(et),nt=n(330);(0,l.ri)(d).use(Je).use(Qe).use(Xe.Z).component("sortable",nt.Z).component("draggable",tt()).component(Ke.Z.name,Ke.Z).mount("#app")}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,a){if(!l){var i=1/0;for(r=0;r<e.length;r++){l=e[r][0],o=e[r][1],a=e[r][2];for(var c=!0,s=0;s<l.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(r--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[l,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,a,i=l[0],c=l[1],s=l[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var r=s(n)}for(t&&t(l);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return n.O(r)},l=self["webpackChunkconnectsql"]=self["webpackChunkconnectsql"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(9996)}));l=n.O(l)})();
//# sourceMappingURL=app.08651704.js.map