"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[148],{98555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>g,metadata:()=>m,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),o=a(94891),c=(a(75190),a(47507)),r=a(24310),l=a(63303),p=(a(75035),a(85162));const g={id:"get-gas-account",title:"Get gas account, who will charge gas fees for transactions",description:"Get gas account, who will charge gas fees for transactions",sidebar_label:"Get gas account, who will charge gas fees for transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Info"],operationId:"GetGasAccount",responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"GasAccount",required:["index","l1_address","status"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},status:{type:"integer",format:"int64"},index:{type:"integer",format:"int64"},l1_address:{type:"string"}}}}}}},description:"Get gas account, who will charge gas fees for transactions",method:"get",path:"/api/v1/gasAccount",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get gas account, who will charge gas fees for transactions",description:{type:"text/plain"},url:{path:["api","v1","gasAccount"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},d=void 0,m={unversionedId:"zkbnb/get-gas-account",id:"zkbnb/get-gas-account",title:"Get gas account, who will charge gas fees for transactions",description:"Get gas account, who will charge gas fees for transactions",source:"@site/docs/zkbnb/get-gas-account.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/get-gas-account",permalink:"/docs/zkbnb/get-gas-account",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-gas-account",title:"Get gas account, who will charge gas fees for transactions",description:"Get gas account, who will charge gas fees for transactions",sidebar_label:"Get gas account, who will charge gas fees for transactions",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Info"],operationId:"GetGasAccount",responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"GasAccount",required:["index","l1_address","status"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},status:{type:"integer",format:"int64"},index:{type:"integer",format:"int64"},l1_address:{type:"string"}}}}}}},description:"Get gas account, who will charge gas fees for transactions",method:"get",path:"/api/v1/gasAccount",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get gas account, who will charge gas fees for transactions",description:{type:"text/plain"},url:{path:["api","v1","gasAccount"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"GetCurrentHeight",permalink:"/docs/zkbnb/get-current-height"},next:{title:"Get gas fee amount for using a specific asset as gas asset",permalink:"/docs/zkbnb/get-gas-fee"}},u={},h=[{value:"Get gas account, who will charge gas fees for transactions",id:"get-gas-account-who-will-charge-gas-fees-for-transactions",level:2}],f={toc:h};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-gas-account-who-will-charge-gas-fees-for-transactions"},"Get gas account, who will charge gas fees for transactions"),(0,n.kt)("p",null,"Get gas account, who will charge gas fees for transactions"),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"l1_address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "status": 0,\n  "index": 0,\n  "l1_address": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);