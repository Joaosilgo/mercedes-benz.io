(self.webpackChunkmercedes_benz_io=self.webpackChunkmercedes_benz_io||[]).push([[443],{454:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("v-img",{attrs:{dark:"","max-height":"500px",src:"https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258M3xmZjEzWVg3TlJDWXx8fHx8Mnx8MTYyMDY4NDk1OA&ixlib=rb-1.2.1"}},[a("v-layout",{attrs:{"fill-height":"","align-center":""}},[a("v-container",[a("v-row",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{class:{"display-2 font-weight-bold ":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("\n              Work Page.\n            ")]),t._v(" "),a("div",{class:{headline:t.$vuetify.breakpoint.smAndUp,"subtitle-1":t.$vuetify.breakpoint.smAndDown}},[t._v("\n              I make applications.\n            ")])])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"block latestPostBlock"},[a("v-container",[a("h2",{staticClass:"text-center"},[t._v("Projects")]),t._v(" "),a("v-row",t._l(t.item,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"3"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1"}},[a("v-card-title",[t._v(t._s(e.name))])],1),t._v(" "),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.language))]),t._v(" "),a("v-card-text",{staticClass:"text--primary"}),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{to:{name:"Details",params:{id:e.id,image:"https://images.unsplash.com/photo-1568332339712-fa479d5494fa?ixid=MnwxOTkyMTB8MHwxfGNvbGxlY3Rpb258N3wxODM2NjgwNHx8fHx8Mnx8MTYyMDY5ODMzOA&ixlib=rb-1.2.1",title:e.name,language:e.language,description:e.description,full_name:e.full_name,owner:e.owner,license:e.license,raw:e}},color:"light-blue darken-1",elevation:"2",medium:"",rounded:"",text:""}},[t._v("More")])],1)],1)],1)})),1)],1)],1)],1)};i._withStripped=!0;var s=a(9669),n=a.n(s);const r={name:"work",components:{},methods:{fetchData(){n().get(this.url).then((t=>{this.item=t.data})).catch((t=>{console.log("error",err)}))}},created(){this.fetchData()},watch:{$route:"fetchData"},data:()=>({url:"https://api.github.com/users/JoaoSilgo/repos?per_page=100",item:[]})};var l=a(1900),o=a(3453),c=a.n(o),d=a(6014),v=a(4445),h=a(5255),p=a(7024),u=a(6530),m=a(3264),x=a(9456),b=a(7894),g=(0,l.Z)(r,i,[],!1,null,null,null);c()(g,{VBtn:d.Z,VCard:v.Z,VCardActions:h.h7,VCardSubtitle:h.Qq,VCardText:h.ZB,VCardTitle:h.EB,VCol:p.Z,VContainer:u.Z,VImg:m.Z,VLayout:x.Z,VRow:b.Z}),g.options.__file="src/views/Work.vue";const f=g.exports}}]);