(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{KcVf:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[a("div",{staticStyle:{width:"700px","max-width":"90vw"}},[a("div",{staticStyle:{"text-align":"center","padding-bottom":"15px"}},[a("h4",[e._v("MODELS APPLICATION FORM")])]),a("q-stepper",{ref:"stepper",attrs:{flat:"",color:"black","alternative-labels":e.alt,contractable:!0}},[a("q-step",{attrs:{default:"",title:"Event & Courses"}},[a("h6",[e._v("Choose the event / course you want to join: ")]),a("br"),a("div",{staticClass:"container event-cards items-start row"},e._l(e.events,function(t){return a("div",{key:t[".key"],staticClass:"col-md-3 col-xs-6 q-pa-sm",attrs:{id:"card-wrapper"},on:{click:function(a){e.getEvent(t)}}},[a("q-card",[a("q-card-media",{attrs:{id:"news"}},[a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"image-holder"},[a("img",{attrs:{src:t.pagePhotos.eventLogoUrl}})])])],1)],1)})),a("q-stepper-navigation",{staticClass:"q-pa-md float-right"},[a("q-btn",{staticClass:"q-ml-sm",attrs:{"icon-right":"send",color:"black"},on:{click:function(t){e.$refs.stepper.next()}}},[e._v("Next Step")])],1)],1),a("q-step",{attrs:{title:"Model Information"}},[a("p",[e._v("Please fill out completely all the fields below.")]),a("q-icon",{staticClass:"text-primary",staticStyle:{"font-size":"20px"},attrs:{name:"person"}}),a("small",{staticClass:"text-dark"},[e._v(" Personal Details")]),a("br"),a("div",{staticClass:"container row q-py-sm"},[a("div",{staticClass:"col-md-4  col-xs-12 q-px-sm"},[a("q-input",{attrs:{"float-label":"First Name",value:""},model:{value:e.newModel.firstName,callback:function(t){e.$set(e.newModel,"firstName",t)},expression:"newModel.firstName"}})],1),a("div",{staticClass:"col-md-5 col-xs-12 q-px-sm"},[a("q-input",{attrs:{"float-label":"Last Name",value:""},model:{value:e.newModel.lastName,callback:function(t){e.$set(e.newModel,"lastName",t)},expression:"newModel.lastName"}})],1),a("div",{staticClass:"col-md-3  col-xs-12 q-px-sm"},[a("q-input",{attrs:{"float-label":"Middle Initial",value:""},model:{value:e.newModel.middleInitial,callback:function(t){e.$set(e.newModel,"middleInitial",t)},expression:"newModel.middleInitial"}})],1)]),a("div",{staticClass:"container row  q-py-sm"},[a("div",{staticClass:"col-md-2 col-xs-12 q-px-sm"},[a("q-input",{attrs:{type:"number","float-label":"Age",value:""},model:{value:e.newModel.age,callback:function(t){e.$set(e.newModel,"age",t)},expression:"newModel.age"}})],1),a("div",{staticClass:"col-md-5 col-xs-12 q-px-sm"},[a("q-select",{attrs:{"float-label":"Gender",options:e.genders,value:""},model:{value:e.newModel.gender,callback:function(t){e.$set(e.newModel,"gender",t)},expression:"newModel.gender"}})],1)]),a("div",{staticClass:"container row  q-py-sm"},[a("q-input",{staticClass:"col-12",attrs:{type:"textarea","float-label":"Complete Address","max-height":100,rows:"",value:""},model:{value:e.newModel.address,callback:function(t){e.$set(e.newModel,"address",t)},expression:"newModel.address"}})],1),a("br"),a("q-icon",{staticClass:"text-primary",staticStyle:{"font-size":"20px"},attrs:{name:"phone"}}),a("small",{staticClass:"text-dark",attrs:{value:""}},[e._v(" Contact Details")]),a("br"),a("div",{staticClass:"container row q-py-sm"},[a("div",{staticClass:"col-md-6 col-xs-12 q-px-sm"},[a("q-input",{attrs:{type:"number","float-label":"Telephone Number",value:""},model:{value:e.newModel.telNumber,callback:function(t){e.$set(e.newModel,"telNumber",t)},expression:"newModel.telNumber"}})],1),a("div",{staticClass:"col-md-6 col-xs-12 q-px-sm"},[a("q-input",{attrs:{type:"email","float-label":"Email",suffix:"@gmail.com",value:""},model:{value:e.newModel.email,callback:function(t){e.$set(e.newModel,"email",t)},expression:"newModel.email"}})],1),a("div",{staticClass:"col-md-6 col-xs-12 q-px-sm"},[a("q-input",{attrs:{type:"number","float-label":"Mobile Number",value:""},model:{value:e.newModel.mobileNumber,callback:function(t){e.$set(e.newModel,"mobileNumber",t)},expression:"newModel.mobileNumber"}})],1)]),a("br"),a("q-icon",{staticClass:"text-primary",staticStyle:{"font-size":"20px"},attrs:{name:"format_list_bulleted"}}),a("small",{staticClass:"text-dark"},[e._v(" More about you")]),a("br"),a("div",{staticClass:"container row  q-py-sm"},[a("q-input",{staticClass:"col-12",attrs:{type:"textarea","float-label":"Past Modelling Experience","max-height":100,rows:"3",value:""}})],1),a("br"),a("q-icon",{staticClass:"text-primary",staticStyle:{"font-size":"20px"},attrs:{name:"photo"}}),a("small",{staticClass:"text-dark"},[e._v(" Upload your photos")]),a("br"),a("br"),a("div",{staticClass:"container row q-py-sm"},[a("q-uploader",{ref:"upld",attrs:{url:e.newModel.photo,name:"eventLogo","hide-upload-progress":"","float-label":"Model Portfolio","hide-upload-button":"","auto-expand":"",extensions:"'.gif,.GIF,.jpg,.JPG,.jpeg,.JPEG,.png,.PNG'"},on:{add:function(t){e.photoAdded},remove:function(t){e.photoRemoved}}})],1),a("br"),a("div",{staticClass:"container row q-py-sm"},[a("q-checkbox",{staticClass:"q-body-1",attrs:{color:"primary",label:"I have read and agree to the <a href=''>user agreement</a>.<br>View our <a href=''>privacy policy</a>."},model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}})],1),a("q-stepper-navigation",{staticClass:"float-right q-pa-md"},[a("q-btn",{staticClass:"q-mr-sm",attrs:{color:"black",flat:""},on:{click:function(t){e.$refs.stepper.previous()}}},[e._v("Back")]),a("q-btn",{attrs:{color:"black","icon-right":"send"},on:{click:[function(t){e.$refs.stepper.next()},e.submit]}},[e._v("Submit")])],1)],1),a("q-step",{attrs:{title:"Verification"}},[a("q-input",{attrs:{type:"number","float-label":"Enter Code",value:""}}),a("small",{staticClass:"text-faded"},[e._v("\r\n           A code has been sent to your device via SMS. You may request another code after one minute.\r\n          ")]),a("q-stepper-navigation",{staticClass:"float-right q-pa-md"},[a("q-btn",{staticClass:"q-ml-sm",attrs:{color:"black",flat:""},on:{click:function(t){e.$refs.stepper.previous()}}},[e._v("Resend")]),a("q-btn",{attrs:{color:"black"},on:{click:function(t){e.$refs.stepper.next()}}},[e._v("Verify")])],1)],1),a("q-step",{attrs:{title:"Done!"}},[a("h6",[e._v("Thank you for registering to @EVENT."),a("br"),e._v("Please wait for a SMS for futher instruction.")]),a("p"),a("q-stepper-navigation",{staticClass:"q-pa-md float-right"},[a("q-btn",{attrs:{color:"red-14"}},[e._v("Restart Form")])],1)],1),a("q-stepper-navigation")],1)],1)])},o=[];s._withStripped=!0;a("f3/d");var l=a("vDqi"),n=a.n(l),i=Math.floor(1e3+9e3*Math.random());function r(e){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a="",s=0;s<e;s++)a+=t[Math.floor(Math.random()*t.length)];return a}i=String(i),console.log(i);var c=r(15),d={mounted:function(){this.$bindAsArray("events",this.$database.ref("events")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.storageRef=this.$firebase.storage().ref()},data:function(){return{events:[],schedules:[],selectedEvent:[],storageRef:null,uploadedPhoto:null,alt:"",step:"",url:"http://1.1.1.195/upload.php",genders:[{label:"Male",value:"Male"},{label:"Female",value:"Female"}],check1:!1,newModel:{firstName:"",lastName:"",middleInitial:"",age:0,birthdate:"",gender:"",address:"",telNumber:"",mobileNumber:"",mobile_code:i,email:"",photo:"",eventName:"",eventKey:"",seasonName:"",batchKey:"",payment:{},accountNumber:"",password:"",emailVerification:!1,emailToken:String(c),contractSign:!1}}},methods:{photoAdded:function(e){var t=this.$refs.upld.files[0];this.uploadedPhoto=t},photoRemove:function(){this.uploadedPhoto=null},getEvent:function(e){this.selectedEvent=e,console.log("selected event",this.selectedEvent)},submit:function(){var e=this;this.newModel.eventKey=this.selectedEvent[".key"],this.newModel.eventName=this.selectedEvent.eventName,this.newModel.seasonName=this.selectedEvent.seasons[0].seasonName;var t=this.$lodash.filter(this.schedules,function(t){return t.eventKey===e.selectedEvent[".key"]});this.newModel.batchKey=t[0][".key"],this.uploadedPhoto=this.$refs.upld.files[0],console.log("new model",this.newModel),console.log("event",this.selectedEvent),console.log("batch schedule",t[0]),console.log("uploaded photo",this.uploadedPhoto);var a=this,s=this.storageRef.child("modelPhotos/".concat(this.newModel.lastName,"_").concat(this.$refs.upld.name)).put(this.uploadedPhoto);s.on("state_changed",function(e){},function(e){this.$q.notify({message:"An error occur",type:"negative",color:"negative",textColor:"white",icon:"warning"}),console.log("error occur",e)},function(){s.snapshot.ref.getDownloadURL().then(function(e){a.newModel.photo=e,console.log("url photo",a.newModel.photo),a.$database.ref("models").push(a.newModel).then(function(){a.$q.notify({message:"model has been added",type:"positive",color:"positive",textColor:"white",icon:"positive"})}),a.posting()})})},posting:function(){var e={mobile_number:"0"+this.newModel.mobileNumber},t="mobile_number="+e.mobile_number+"&mobile_code="+this.newModel.mobile_code;console.log(t),n.a.post("https://maleficent-sms.000webhostapp.com/index.php",t).then(function(e){console.log(e)}).catch(function(e){console.log(e.response)})},emailer:function(){var e={email:this.email+"@gmail.com",first_name:this.firstName,last_name:this.lastName,token:this.newModel.emailToken},t="email="+e.email+"&token="+e.token+"&first_name="+e.first_name+"&last_name="+e.last_name;console.log(t),n.a.post("https://maleficent-sms.000webhostapp.com/email.php",t).then(function(e){console.log(e)}).catch(function(e){console.log(e.response)})}}},m=d,p=(a("r9MY"),a("KHd+")),u=Object(p["a"])(m,s,o,!1,null,null,null);t["default"]=u.exports},nVrK:function(e,t,a){},r9MY:function(e,t,a){"use strict";var s=a("nVrK"),o=a.n(s);o.a}}]);