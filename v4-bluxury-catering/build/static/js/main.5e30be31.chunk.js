(this["webpackJsonpbluxury-catering"]=this["webpackJsonpbluxury-catering"]||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/memoryLogoWithText.234b5369.JPG"},115:function(e,t,a){e.exports=a.p+"static/media/simplistLogoWithText.4c4328c8.JPG"},116:function(e,t,a){e.exports=a.p+"static/media/1.49ab656d.png"},117:function(e,t,a){e.exports=a.p+"static/media/5.966f7c83.png"},118:function(e,t,a){e.exports=a.p+"static/media/logoWithText.a1adabdf.png"},121:function(e,t,a){e.exports=a(145)},143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),l=a.n(c),o=a(18),i=a(10);var s=function(){return r.a.createElement("footer",{id:"footer",className:"text-black-50  text-center"},r.a.createElement("div",{id:"socialIcons",style:{display:"flex",alignItems:"center"}},r.a.createElement("a",{href:"https://www.facebook.com/Memorydessert2017/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"social-fb",className:"fa fa-facebook-square fa-3x social"})),r.a.createElement("a",{href:"https://www.instagram.com/memory_dessert/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"social-ins",className:"fa fa-instagram fa-3x social"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://lin.ee/Quz5dqu",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{id:"social-line",src:"https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png",alt:"line-add-friends",height:"36"})))),r.a.createElement("p",{className:"text-center",id:"copyRight",style:{fontSize:"10px"}},"2020 Cooper Yeh \xa9 BLUXURY CATERING"))},m=a(6),u=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"",placeholder:"\u5546\u54c1\u540d\u7a31\u641c\u5c0b...",className:"form-control",id:"searchBar",value:t,onChange:a,style:{borderColor:"silver"}}))},d=function(e){var t=e.products,a=e.selectedGenre,n=e.onClick,c=["\u5168\u90e8\u5546\u54c1"];return t.forEach((function(e){c.indexOf(e.category)<0&&c.push(e.category)})),r.a.createElement("div",{className:"btn-group d-flex",role:"group"},c.map((function(e){return r.a.createElement("button",{key:e,className:e===a?"btn btn-outline-info w-100 active":"btn btn-outline-info w-100",id:"cat-button",onClick:function(){return n(e)}},e)})))},p=a(73),f=a.n(p);a(126),a(146),a(130);f.a.initializeApp({apiKey:"AIzaSyCPYaotOuUu1R6RiGPfop7WifhfcmZgYHk",authDomain:"bluxury-catering.firebaseapp.com",databaseURL:"https://bluxury-catering.firebaseio.com",projectId:"bluxury-catering",storageBucket:"bluxury-catering.appspot.com",messagingSenderId:"73281934969",appId:"1:73281934969:web:5fb290eac07b81814326a8",measurementId:"G-5GC0MKS63S"});var b=f.a.auth(),E=f.a.storage(),g=a(148),h=a(150),v=a(14),y=function(e){var t=e.label,a=e.name,n=e.type,c=e.errors,l=e.touched,o=e.onKeyUp,i=e.placeholder,s=e.component;return r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement(v.b,{component:s,name:a,type:n,placeholder:i,onKeyUp:o,className:"form-control"+(c&&l?" is-invalid":"")}),r.a.createElement(v.a,{name:a,component:"div",className:"invalid-feedback"}))},x=a(70),O=a(7),j=function(e){var t=e.categories,a=e.product,c=e.onCloseModal,l=e.doc,o=e.collection,i=Object(n.useState)(null),s=Object(m.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(a.url),b=Object(m.a)(p,2),h=b[0],j=b[1],w=Object(n.useState)(0),N=Object(m.a)(w,2),C=N[0],S=N[1],k=Object(n.useState)(a.title),I=Object(m.a)(k,2),P=I[0],q=I[1],_=Object(n.useState)(a.category),R=Object(m.a)(_,2),U=R[0],T=R[1],D=Object(n.useState)(a.price),L=Object(m.a)(D,2),F=L[0],M=L[1],K=Object(n.useState)(a.xPrice),B=Object(m.a)(K,2),A=B[0],H=B[1],z=Object(n.useState)(a.desc),W=Object(m.a)(z,2),G=W[0],V=W[1],J=a.id,X=1+999*Math.random(),Y=function(e){e.preventDefault();var t=u.name+X;E.ref("images/".concat(t)).put(u).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);S(t)}),(function(e){console.log(e)}),(function(){E.ref("images").child(t).getDownloadURL().then((function(e){j(e)}))}))},$=O.a().shape({title:O.c().required("First Name is required"),category:O.c().required(),price:O.c().required("Password is required"),xPrice:O.c(),desc:O.c()}),Q={title:P,category:U,price:F,xPrice:A,desc:G};return r.a.createElement("div",null,r.a.createElement("section",{id:"productForm"},r.a.createElement("progress",{id:"progress",value:C,max:"100"}),r.a.createElement(x.a,null,r.a.createElement("img",{className:"d-flex m-auto",src:h,alt:"productImg",height:"200px",width:"100%"}),r.a.createElement(x.a.File,{id:"exampleFormControlFile1",label:"\u9078\u53d6\u5716\u7247",onChange:function(e){d(e.target.files[0])}}),r.a.createElement("div",{className:"d-flex justify-content-center pt-2"},u?r.a.createElement(g.a,{variant:"danger",type:"button",onClick:Y},"\u65b0\u589e"):r.a.createElement(g.a,{variant:"danger",type:"button",onClick:Y,disabled:!0},"\u65b0\u589e")))),r.a.createElement(v.d,{initialValues:Q,validationSchema:$,onSubmit:function(){if(""===P.trim())alert("?");else{var e=Date();e=f.a.firestore.Timestamp.fromDate(new Date).toDate(),f.a.firestore().collection("products").doc(l).collection(o).doc(J).set({title:P,category:U,price:F,xPrice:A,url:h,editTime:e,desc:G}).then(c)}}},(function(e){var a=e.errors,n=e.touched;return r.a.createElement(v.c,null,r.a.createElement(y,{label:"\u7522\u54c1\u540d\u7a31",name:"title",errors:a.title,touched:n.title,onKeyUp:function(e){q(e.target.value)}}),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"category"},"\u7522\u54c1\u985e\u5225"),r.a.createElement(v.b,{as:"select",label:"\u7522\u54c1\u985e\u5225",name:"category",onBlur:function(e){T(e.target.value)},className:"form-control"+(a.category&&n.category?" is-invalid":"")},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(v.a,{name:"category",component:"div",className:"invalid-feedback"})),r.a.createElement(y,{type:"textarea",label:"\u5b9a\u50f9",name:"price",errors:a.price,touched:n.price,onKeyUp:function(e){M(e.target.value)}}),r.a.createElement(y,{label:"\u7279\u50f9",name:"xPrice",placeholder:"\u7121\u7279\u50f9\u8acb\u7a7a\u767d",errors:a.xPrice,touched:n.xPrice,onKeyUp:function(e){H(e.target.value)}}),r.a.createElement(y,{component:"textarea",label:"\u5546\u54c1\u4ecb\u7d39",name:"desc",errors:a.desc,touched:n.desc,onKeyUp:function(e){V(e.target.value)}}),r.a.createElement(g.a,{variant:"primary",type:"submit",value:"Submit",block:!0},"\u65b0\u589e"))})))};var w=function(e){var t=e.product,a=e.categories,c=e.title,l=e.doc,o=e.collection,i=Object(n.useState)(!1),s=Object(m.a)(i,2),u=s[0],d=s[1],p=function(){return d(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"btn btn-warning btn-sm ",variant:"primary",onClick:function(){return d(!0)},"data-toggle":"modal"},c),r.a.createElement(h.a,{show:u,onHide:p,backdrop:"static",keyboard:!1},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,c)),r.a.createElement(h.a.Body,null,r.a.createElement(j,{product:t,categories:a,onCloseModal:p,doc:l,collection:o}))))},N=Object(n.createContext)(),C=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){e&&f.a.firestore().collection("users").doc(e.uid).get().then((function(e){e.exists?o(e.data().admin):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}));return function(){e()}})),r.a.createElement(N.Provider,{value:{admin:l}},t)},S=a(9),k=a(77),I=function(e){return function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0)}},P=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(S.a)(Object(S.a)({},t.payload),{},{quantity:1})),Object(S.a)(Object(S.a)(Object(S.a)({},e),I(e.cartItems)),{},{cartItems:Object(k.a)(e.cartItems)});case"REMOVE_ITEM":return Object(S.a)(Object(S.a)(Object(S.a)({},e),I(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(k.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(S.a)(Object(S.a)(Object(S.a)({},e),I(e.cartItems)),{},{cartItems:Object(k.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(S.a)(Object(S.a)(Object(S.a)({},e),I(e.cartItems)),{},{cartItems:Object(k.a)(e.cartItems)});case"CHECKOUT":return Object(S.a)({cartItems:[],checkout:!0},I([]));case"CLEAR":return Object(S.a)({cartItems:[]},I([]));default:return e}},q=Object(n.createContext)(),_=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],R=Object(S.a)(Object(S.a)({cartItems:_},I(_)),{},{checkout:!1}),U=function(e){var t=e.children,a=Object(n.useReducer)(P,R),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(S.a)({removeProduct:function(e){o({type:"REMOVE_ITEM",payload:e})},addProduct:function(e){o({type:"ADD_ITEM",payload:e})},increase:function(e){o({type:"INCREASE",payload:e})},decrease:function(e){o({type:"DECREASE",payload:e})},clearCart:function(){o({type:"CLEAR"})},handleCheckout:function(){console.log("CHECKOUT",l),o({type:"CHECKOUT"});var e="";b.currentUser&&(e=b.currentUser.uid);var t=f.a.firestore.Timestamp.fromDate(new Date).toDate();f.a.firestore().collection("consumption").doc(t.toString()).set({items:l,purchaseDate:t,consumer:e})}},l);return r.a.createElement(q.Provider,{value:i},t)},T=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},D=function(e){var t=e.product,a=e.href;if(a){var n=a.charAt(0);n>0&&n<9&&(a="a"+a)}return r.a.createElement("div",null,r.a.createElement("a",{id:"myCollapse","data-toggle":"collapse",href:"#"+a,role:"button","aria-expanded":"false","aria-controls":"collapseExample"},"\u5546\u54c1\u4ecb\u7d39",r.a.createElement(T,{symbol:" \ud83d\udc47\ud83c\udffc"})),r.a.createElement("div",{className:"collapse",id:a},r.a.createElement("textarea",{className:"pt-2",id:"desc",rows:"5",cols:"33",value:t.desc,readOnly:!0})))},L=function(e){var t=e.product,a=e.categories,c=e.doc,l=e.collection,o=Object(n.useContext)(N).admin,i=Object(n.useContext)(q),s=i.addProduct,m=i.cartItems,u=i.removeProduct,d=t.id;return r.a.createElement("div",{className:"card card-body text-center",style:{borderColor:"lightBlue"}},o&&r.a.createElement("div",{className:"d-flex"},r.a.createElement(w,{product:t,categories:a,title:"\u7de8\u8f2f\u5546\u54c1",doc:c,collection:l}),r.a.createElement("button",{className:"btn btn-danger btn-sm mr-0 ml-auto",onClick:function(){f.a.firestore().collection("products").doc(c).collection(l).doc(d).delete(),E.refFromURL(t.url).delete().then((function(){console.log("Deleted")})).catch((function(e){return console.log(e)}))}},"X")),r.a.createElement("img",{style:{display:"block",margin:"10px auto 10px",height:"200px"},className:"img-fluid",alt:"prdImg",src:t.url}),r.a.createElement("h5",null,t.title),!t.xPrice&&r.a.createElement("h5",{className:"text-center"}," $ ",t.price," "),t.xPrice&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("del",{className:"strike ",style:{paddingRight:"20px"}}," ","$ ",t.price," "),r.a.createElement("h5",{className:"text-center",style:{color:"red"}}," ","\u7279\u50f9 $ ",t.xPrice," ")),r.a.createElement(D,{product:t,href:t.title}),function(e){return!!m.find((function(t){return t.id===e.id}))}(t)?r.a.createElement("button",{className:"btn btn-outline-danger mt-2",onClick:function(){return u(t)}},r.a.createElement(T,{symbol:"\ud83d\uddd1 "}),"\u79fb\u51fa\u8cfc\u7269\u8eca"):r.a.createElement("button",{className:"btn btn-outline-success mt-2",onClick:function(){return s(t)}},r.a.createElement(T,{symbol:"\ud83d\uded2 "}),"\u52a0\u5165\u8cfc\u7269\u8eca"))},F=a(113),M=a.n(F),K=function(e){var t=e.searchResults,a=e.categories,n=e.doc,c=e.collection;return r.a.createElement("div",{id:"productGrid"},0===t.length?r.a.createElement("p",null,"\u67e5\u7121\u5546\u54c1"):M.a.sortBy(t,"editTime").reverse().map((function(e){return r.a.createElement(L,{key:e.id,product:e,categories:a,doc:n,collection:c})})))},B=function(e){var t=e.src,a=e.categories,c=e.onCloseModal,l=e.doc,o=e.collection,i=Object(n.useState)(null),s=Object(m.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(t),b=Object(m.a)(p,2),h=b[0],j=b[1],w=Object(n.useState)(0),N=Object(m.a)(w,2),C=N[0],S=N[1],k=Object(n.useState)(""),I=Object(m.a)(k,2),P=I[0],q=I[1],_=Object(n.useState)(a[0]),R=Object(m.a)(_,2),U=R[0],T=R[1],D=Object(n.useState)(""),L=Object(m.a)(D,2),F=L[0],M=L[1],K=Object(n.useState)(""),B=Object(m.a)(K,2),A=B[0],H=B[1],z=Object(n.useState)(""),W=Object(m.a)(z,2),G=W[0],V=W[1],J=1+999*Math.random(),X=function(e){e.preventDefault();var t=u.name+J;E.ref("images/".concat(t)).put(u).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);S(t)}),(function(e){console.log(e)}),(function(){E.ref("images").child(t).getDownloadURL().then((function(e){j(e)}))}))},Y=O.a().shape({title:O.c().required("First Name is required"),category:O.c().required("Email is required"),price:O.c().required("Password is required"),xPrice:O.c()}),$={title:P,category:U,price:F,xPrice:A};return r.a.createElement("div",null,r.a.createElement("section",{id:"productForm"},r.a.createElement("progress",{id:"progress",value:C,max:"100"}),r.a.createElement(x.a,null,r.a.createElement("img",{className:"d-flex m-auto",src:h,alt:"productImg",height:"200px",width:"100%"}),r.a.createElement(x.a.File,{id:"exampleFormControlFile1",label:"\u9078\u53d6\u5716\u7247",onChange:function(e){d(e.target.files[0])}}),r.a.createElement("div",{className:"d-flex justify-content-center pt-2"},u?r.a.createElement(g.a,{variant:"danger",type:"button",onClick:X},"\u65b0\u589e"):r.a.createElement(g.a,{variant:"danger",type:"button",onClick:X,disabled:!0},"\u65b0\u589e")))),r.a.createElement(v.d,{initialValues:$,validationSchema:Y,onSubmit:function(){if(""===P.trim())alert("?");else{var e=f.a.firestore.Timestamp.fromDate(new Date).toDate();f.a.firestore().collection("products").doc(l).collection(o).doc(e.toString()).set({title:P,category:U,price:F,xPrice:A,url:h,editTime:e,desc:G}).then(c)}}},(function(e){var t=e.errors,n=e.touched;return r.a.createElement(v.c,null,r.a.createElement(y,{label:"\u7522\u54c1\u540d\u7a31",name:"title",errors:t.title,touched:n.title,onKeyUp:function(e){q(e.target.value)}}),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"category"},"\u7522\u54c1\u985e\u5225"),r.a.createElement(v.b,{as:"select",label:"\u7522\u54c1\u985e\u5225",name:"category",onBlur:function(e){T(e.target.value)},className:"form-control"+(t.category&&n.category?" is-invalid":"")},a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(v.a,{name:"category",component:"div",className:"invalid-feedback"})),r.a.createElement(y,{label:"\u5b9a\u50f9",name:"price",errors:t.price,touched:n.price,onKeyUp:function(e){M(e.target.value)}}),r.a.createElement(y,{label:"\u7279\u50f9",name:"xPrice",placeholder:"\u7121\u7279\u50f9\u8acb\u7a7a\u767d",errors:t.xPrice,touched:n.xPrice,onKeyUp:function(e){H(e.target.value)}}),r.a.createElement(y,{component:"textarea",label:"\u5546\u54c1\u4ecb\u7d39",name:"desc",errors:t.desc,touched:n.desc,onKeyUp:function(e){V(e.target.value)}}),r.a.createElement(g.a,{variant:"primary",type:"submit",value:"Submit",block:!0},"\u65b0\u589e"))})))};var A=function(e){var t=e.src,a=e.categories,c=e.doc,l=e.collection,o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],u=i[1],d=function(){return u(!1)};return r.a.createElement("div",{className:"pt-3"},r.a.createElement(g.a,{variant:"primary",onClick:function(){return u(!0)}},"\u65b0\u589e\u5546\u54c1"),r.a.createElement(h.a,{show:s,onHide:d,backdrop:"static",keyboard:!1},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,null,"\u65b0\u589e\u5546\u54c1")),r.a.createElement(h.a.Body,null,r.a.createElement(B,{src:t,categories:a,onCloseModal:d,doc:c,collection:l}))))},H=function(e,t){var a=Object(n.useState)([]),r=Object(m.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var a=f.a.firestore().collection("products").doc(e).collection(t).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));l(t)}));return function(){return a()}}),[e,t]),c},z=a(114),W=a.n(z),G=a(91),V=a.n(G),J=function(){var e=H("memory","memoryProducts"),t=Object(n.useContext)(N).admin,a=["\u751f\u4e73\u6372","\u751f\u4e73\u5854","\u5e38\u6eab\u86cb\u7cd5","\u7bc0\u6176\u79ae\u76d2","\u5176\u4ed6\u5546\u54c1"],c=Object(n.useState)(""),l=Object(m.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)("\u5168\u90e8\u5546\u54c1"),p=Object(m.a)(s,2),f=p[0],b=p[1],E=Object(n.useState)([]),g=Object(m.a)(E,2),h=g[0],v=g[1];return Object(n.useEffect)((function(){var t=e;o?t=e.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})):"\u5168\u90e8\u5546\u54c1"===f?t=e:f&&(t=e.filter((function(e){return e.category===f}))),v(t)}),[e,o,f]),r.a.createElement("div",{style:{alignItems:"baseline"}},t&&r.a.createElement(A,{src:"https://scontent.ftpe12-1.fna.fbcdn.net/v/t31.0-0/p206x206/22712353_648259815562546_9040069549059309313_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=4RxqhClM2n0AX9KLJX_&_nc_ht=scontent.ftpe12-1.fna&_nc_tp=6&oh=c2710cb7a11d7c2f90527348f4d35902&oe=5F624FE0",categories:a,doc:"memory",collection:"memoryProducts"}),r.a.createElement("div",{className:"d-flex mt-2",style:{justifyContent:"center",backgroundColor:"white",alignItems:"center"}},r.a.createElement("img",{src:V.a,alt:"memoryLogo",width:"100px",height:"80px"}),r.a.createElement("img",{src:W.a,alt:"memoryLogoWithText",width:"250px",height:"100px"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8",style:{paddingTop:"20px"}},r.a.createElement(d,{products:e,categories:a,selectedGenre:f,onClick:function(e){b(e),i("")}})),r.a.createElement("div",{className:"col-sm-4",style:{paddingTop:"20px"}},r.a.createElement(u,{products:e,value:o,onChange:function(e){i(e.target.value),b("\u5168\u90e8\u5546\u54c1")}}))),r.a.createElement(K,{searchResults:h,categories:a,doc:"memory",collection:"memoryProducts"}))},X=a(115),Y=a.n(X),$=a(92),Q=a.n($),Z=function(){var e=H("simplist","simplistProducts"),t=Object(n.useContext)(N).admin,a="https://scontent.ftpe11-2.fna.fbcdn.net/v/t1.0-9/118357132_102096594957330_7643131861856996871_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=R6lhp2UfybUAX9DN-mq&_nc_ht=scontent.ftpe11-2.fna&oh=87849d515a8cacedd527c19404651a70&oe=5F7176F2",c=["\u725b\u8089","\u96de\u8089","\u8c6c\u8089","\u5176\u4ed6\u5546\u54c1"],l=Object(n.useState)(""),o=Object(m.a)(l,2),i=o[0],s=o[1],p=Object(n.useState)("\u5168\u90e8\u5546\u54c1"),f=Object(m.a)(p,2),b=f[0],E=f[1],g=Object(n.useState)([]),h=Object(m.a)(g,2),v=h[0],y=h[1];return Object(n.useEffect)((function(){var t=e;i?t=e.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})):"\u5168\u90e8\u5546\u54c1"===b?t=e:b&&(t=e.filter((function(e){return e.category===b}))),y(t)}),[e,i,b]),r.a.createElement("div",{style:{alignItems:"baseline"}},t&&r.a.createElement(A,{src:a,categories:c,doc:"simplist",collection:"simplistProducts"}),r.a.createElement("div",{className:"d-flex mt-2",style:{justifyContent:"center",backgroundColor:"white",alignItems:"center"}},r.a.createElement("img",{src:Q.a,alt:"simplistLogo",width:"100px",height:"80px"}),r.a.createElement("img",{src:Y.a,alt:"simplistLogoWithText",width:"250px",height:"100px"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8",style:{paddingTop:"20px"}},r.a.createElement(d,{products:e,categories:c,selectedGenre:b,onClick:function(e){E(e),s("")}})),r.a.createElement("div",{className:"col-sm-4",style:{paddingTop:"20px"}},r.a.createElement(u,{products:e,value:i,onChange:function(e){s(e.target.value),E("\u5168\u90e8\u5546\u54c1")}}))),r.a.createElement(K,{searchResults:v,categories:c,doc:"simplist",collection:"simplistProducts",src:a}))},ee=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"}))},te=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"}))},ae=function(e){var t=e.width;return r.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"}))},ne=function(e){var t=e.product,a=Object(n.useContext)(q),c=a.increase,l=a.decrease,o=a.removeProduct;return r.a.createElement("div",{className:"row no-gutters py-2"},r.a.createElement("div",{className:"col-sm-2 p-2"},r.a.createElement("img",{alt:t.title,style:{margin:"0 auto",maxHeight:"100px"},src:t.url,className:"img-fluid d-block"})),r.a.createElement("div",{className:"col-sm-4 p-2 d-flex",style:{alignItems:"center",justifyContent:"center"}},r.a.createElement("h5",{className:"mb-1"},t.title)),r.a.createElement("div",{className:"col-sm-2 p-2 text-center ",style:{display:"grid",alignItems:"center"}},r.a.createElement("p",{className:"mb-1"},"\u55ae\u50f9: ",t.price," "),r.a.createElement("p",{className:"mb-0"},"\u6578\u91cf: ",t.quantity)),r.a.createElement("div",{className:"col-sm-4 p-2 text-right d-flex",style:{alignItems:"center",justifyContent:"center"}},t.quantity>1?r.a.createElement("button",{onClick:function(){return l(t)},className:"btn btn-danger btn-sm mr-4 mb-1"},r.a.createElement(ee,{width:"20px"})):r.a.createElement("button",{onClick:function(){return l(t)},className:"btn btn-danger btn-sm mr-4 mb-1",disabled:!0},r.a.createElement(ee,{width:"20px"})),r.a.createElement("button",{onClick:function(){return c(t)},className:"btn btn-primary btn-sm mr-4 mb-1"},r.a.createElement(te,{width:"20px"})),r.a.createElement("button",{onClick:function(){return o(t)},className:"btn btn-warning btn-sm mb-1"},r.a.createElement(ae,{width:"20px"}))))},re=function(){var e=Object(n.useContext)(q).cartItems;return r.a.createElement("div",null,r.a.createElement("div",{className:"card card-body border-0"},e.map((function(e){return r.a.createElement(ne,{key:e.id,product:e})}))))},ce=function(){var e=Object(n.useContext)(q),t=e.total,a=e.cartItems,c=e.itemCount,l=e.checkout,i=e.handleCheckout;return r.a.createElement("div",null,r.a.createElement("div",{className:" mt-3 pl-2 pr-2",style:{justifyContent:"center",backgroundColor:"white",alignItems:"center",marginLeft:"1rem",marginRight:"1rem"}},r.a.createElement("h1",null,"\u8cfc\u7269\u8eca")),r.a.createElement("div",{className:"row no-gutters justify-content-center"},r.a.createElement("div",{className:"col-sm-9 p-3"},a.length>0?r.a.createElement(re,null):r.a.createElement("div",{className:"p-3 text-center text-muted"},"\u8cfc\u7269\u8eca\u5c1a\u672a\u6dfb\u52a0\u4efb\u4f55\u5546\u54c1"),l&&r.a.createElement("div",{className:"p-3 text-center text-success"},r.a.createElement("p",null,"Checkout successfull"),r.a.createElement(o.b,{to:"/",className:"btn btn-outline-success btn-sm"},"BUY MORE"))),a.length>0&&r.a.createElement("div",{className:"col-sm-3 p-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("p",{className:"mb-1"},"\u5546\u54c1\u7e3d\u6578"),r.a.createElement("h4",{className:" mb-3 txt-right"},c),r.a.createElement("p",{className:"mb-1"},"\u7e3d\u91d1\u984d"),r.a.createElement("h3",{className:"m-0 txt-right"},"$ ",t),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{target:"_blank",href:"https://p-stage.ecpay.com.tw/400515E",rel:"noopener noreferrer",onClick:i,style:{border:"none"},type:"button",disabled:!0},r.a.createElement("img",{src:"https://payment-stage.ecpay.com.tw/Content/themes/WebStyle20170517/images/ecgo.png",alt:"",width:"100%"})))))))},le=a(116),oe=a.n(le),ie=a(117),se=a.n(ie),me=a(152),ue=function(e){var t=e.src;return r.a.createElement(me.a,{className:"p-2"},t.map((function(e){return r.a.createElement(me.a.Item,{key:e,interval:1e3},r.a.createElement("img",{id:"homeImg",className:"d-block w-100",src:e,alt:""}))})))},de=function(){return r.a.createElement("div",null,r.a.createElement(ue,{src:[oe.a,se.a]}))},pe=a(153),fe=a(149),be=a(151),Ee=a(118),ge=a.n(Ee),he=function(e){var t=e.imgSrc,a=e.alt,n=e.title,c=e.path;return r.a.createElement(o.c,{key:n,id:"navItems",className:"nav-item nav-link",to:"".concat(c)},t&&r.a.createElement("img",{src:t,alt:a,width:"40px"}),n)},ve=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){r(e?e.uid:null)}));return function(){return e()}}),[]),a},ye=function(){var e=ve(),t=Object(n.useContext)(q).itemCount,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement(pe.a,{collapseOnSelect:!0,id:"navbar",bg:"white",expand:"lg",expanded:l,className:"mr-auto navbar-fixed-top"},r.a.createElement(fe.a,null,r.a.createElement(pe.a.Brand,{onClick:function(){return i(!1)}},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:ge.a,alt:"bluxury-catering",width:"300",height:"70"}))),r.a.createElement(pe.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return i(!l&&"expanded")}}),r.a.createElement(pe.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(be.a,{id:"navbarNavDropdown",className:"ml-auto",onClick:function(){return i(!1)}},r.a.createElement(he,{imgSrc:V.a,alt:"memoryLogo",title:"\u9006\u5149\u8a18\u61b6",path:"\u9006\u5149\u8a18\u61b6"}),r.a.createElement(he,{imgSrc:Q.a,alt:"simplistLogo",title:"\u97ff\u7cb9",path:"\u97ff\u7cb9"}),r.a.createElement(he,{title:"\u54c1\u724c\u6545\u4e8b",path:"\u54c1\u724c\u6545\u4e8b"}),r.a.createElement(he,{title:"\u5b89\u5fc3\u98df\u6750",path:"\u5b89\u5fc3\u98df\u6750"}),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{className:"nav-item nav-link",style:{paddingRight:"30px"},to:"/\u767b\u5165"},"\u767b\u5165")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"nav-item nav-link",style:{paddingRight:"30px"},href:"/",onClick:function(){b.signOut().then((function(){localStorage.clear()}))}},"\u767b\u51fa")),t>0?r.a.createElement(he,{title:r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg","aria-hidden":"true",style:{cursor:"pointer"}},"(",t,")"),path:"\u8cfc\u7269\u8eca"}):r.a.createElement(he,{title:r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg","aria-hidden":"true",style:{cursor:"pointer"}}),path:"\u8cfc\u7269\u8eca"})))))},xe=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),s=o[0],u=o[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),E=p[0],g=p[1],h=Object(n.useState)(""),x=Object(m.a)(h,2),j=x[0],w=x[1],N=ve();function C(){b.createUserWithEmailAndPassword(a,s).then((function(){f.a.firestore().collection("users").doc(b.currentUser.uid).set({email:a,password:s,username:E,admin:!1}).catch((function(e){console.log("Something went wrong with added user to firestore: ",e)}))})).catch((function(e){var t=e.code,a=e.message;"auth/weak-password"===t?alert("The password is too weak."):console.log(a)}))}var S=O.a().shape({username:O.c().required("Username is required"),email:O.c().email("Email is invalid").required("Email is required"),password:O.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:O.c().oneOf([O.b("password"),null],"Passwords must match").required("Confirm Password is required")}),k={username:E,email:a,password:s,confirmPassword:j};return r.a.createElement("div",{id:"form"},N&&r.a.createElement(i.a,{to:"/"}),r.a.createElement("h1",{id:"formTitle"},"\u6703\u54e1\u8a3b\u518a"),r.a.createElement(v.d,{initialValues:k,validationSchema:S,onSubmit:function(e){return console.log(e)}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(v.c,null,r.a.createElement(y,{label:"\u540d\u7a31",name:"username",type:"text",errors:t.username,touched:a.username,onKeyUp:function(e){g(e.target.value)}}),r.a.createElement(y,{label:"\u90f5\u4ef6",name:"email",type:"email",errors:t.email,touched:a.email,onKeyUp:function(e){c(e.target.value)}}),r.a.createElement(y,{label:"\u5bc6\u78bc",name:"password",type:"password",errors:t.password,touched:a.password,onKeyUp:function(e){u(e.target.value)}}),r.a.createElement(y,{label:"\u78ba\u8a8d\u5bc6\u78bc",name:"confirmPassword",type:"password",errors:t.confirmPassword,touched:a.confirmPassword,onKeyUp:function(e){w(e.target.value)}}),r.a.createElement("div",{className:"form-group mt-2"},r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary mt-2",onClick:C},"\u78ba\u8a8d\u9001\u51fa")))})))},Oe=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),u=s[0],d=s[1],p=ve();function f(){b.signInWithEmailAndPassword(a,u).catch((function(e){var t=e.code,a=e.message;"auth/wrong-password"===t?alert("Wrong password."):console.log(a)}))}var E=O.a().shape({username:O.c().required("First Name is required"),email:O.c().email("Email is invalid").required("Email is required"),password:O.c().min(6,"Password must be at least 6 characters").required(" Password is required"),confirmPassword:O.c().oneOf([O.b("password"),null],"Passwords must match").required("Confirm Password is required")}),g={email:a,password:u};return r.a.createElement("div",{id:"form"},p&&r.a.createElement(i.a,{to:"/"}),r.a.createElement("h1",{id:"formTitle"},"\u6703\u54e1\u767b\u5165"),r.a.createElement(v.d,{initialValues:g,validationSchema:E,onSubmit:function(e){return console.log(e)}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(v.c,null,r.a.createElement(y,{label:"\u90f5\u4ef6",name:"email",type:"email",errors:t.email,touched:a.email,onKeyUp:function(e){c(e.target.value)}}),r.a.createElement(y,{label:"\u5bc6\u78bc",name:"password",type:"password",errors:t.password,touched:a.password,onKeyUp:function(e){d(e.target.value)}}),r.a.createElement("p",null,"\u66ab\u672a\u958b\u653e\u4e00\u822c\u6703\u54e1\u8a3b\u518a\uff0c\u656c\u8acb\u898b\u8ad2"),r.a.createElement("div",{className:"form-group mt-4 d-flex justify-content-center"},r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary m-auto",onClick:f},"\u767b\u5165"),r.a.createElement(o.b,{className:"m-auto",to:"/\u8a3b\u518a"},r.a.createElement("button",{className:"btn btn-primary ",disabled:!0},"\u8a3b\u518a"))))})))};var je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null),r.a.createElement("main",{className:"mainContainer"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/home",exact:!0,component:de}),r.a.createElement(i.b,{path:"/\u9006\u5149\u8a18\u61b6",exact:!0,component:J}),r.a.createElement(i.b,{path:"/\u97ff\u7cb9",exact:!0,component:Z}),r.a.createElement(i.b,{path:"/\u8cfc\u7269\u8eca",exact:!0,component:ce}),r.a.createElement(i.b,{path:"/\u767b\u5165",exact:!0,component:Oe}),r.a.createElement(i.b,{path:"/\u8a3b\u518a",exact:!0,component:xe}),r.a.createElement(i.a,{from:"/",to:"/home"}))),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(139),a(140),a(143),a(144);l.a.render(r.a.createElement(o.a,null,r.a.createElement(C,null,r.a.createElement(U,null,r.a.createElement(je,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a.p+"static/media/memoryLogo.5a32c902.png"},92:function(e,t,a){e.exports=a.p+"static/media/simplistLogo.204ef993.png"}},[[121,1,2]]]);
//# sourceMappingURL=main.5e30be31.chunk.js.map