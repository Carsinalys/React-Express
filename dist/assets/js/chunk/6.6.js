(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a(7),o=a(12),l=a(11);var c=s.a.memo(e=>s.a.createElement("div",{className:"cabinet__info__cover"},s.a.createElement("ul",{className:"cabinet__info__list"},Object.keys(e.info.info).map(t=>{const a=t;if(void 0!==e.info.info[a])return s.a.createElement("li",{key:t,className:"cabinet__info__item"},s.a.createElement("span",{className:"cabinet__info__item_bold"},t),":"," ",e.info.info[a])})))),_=a(24),m=a(16),d=a(23);var p=s.a.memo(e=>{const[t,a]=Object(n.useState)(!1);return s.a.createElement("div",null,s.a.createElement(l.a,{toggle:e.modal},s.a.createElement(m.a,null)),s.a.createElement("form",{action:"#",className:"set_cabinet__form"},s.a.createElement("h3",{className:"set_cabinet__form__title"},"Set your delivery info:"),s.a.createElement(_.a,{inputs:e.inputs,changeHandler:t=>e.onInput(t)}),s.a.createElement("div",{className:"set_cabinet__form__submit__cover"},s.a.createElement("button",{type:"submit",className:"set_cabinet__form__submit",onClick:t=>{const a=t;e.check(a)}},"Send"))),s.a.createElement("div",null,s.a.createElement("h3",{className:"add__photo__title"},"Set photo profile"),s.a.createElement("form",{action:`${d.a}/api/v1.0/user/setPhoto`,id:"avatar",method:"POST",encType:"multipart/form-data",className:"add__photo__form",onSubmit:t=>(t=>{t.preventDefault();const n=new FileReader,s=document.querySelector("#avatarInput").files[0];s.size<307200?(a(!1),n.onloadend=function(){e.sendPhoto(n.result,e.auth.localId)},n.readAsDataURL(s)):a(!0)})(t)},s.a.createElement("div",{className:"add__photo__input__cover"},s.a.createElement("input",{type:"file",id:"avatarInput",name:"avatar",form:"avatar",accept:"image/*",onChange:e=>(e=>{const t=document.getElementById("preview1"),a=e.target;t.style.backgroundImage="url("+URL.createObjectURL(a.files[0])+")",t.style.borderRadius="50%"})(e),style:{width:"20rem",height:"20rem",opacity:0,margin:0,zIndex:10,top:0,left:0,position:"absolute",cursor:"pointer"}}),s.a.createElement("div",{className:"add__photo__preview",id:"preview1"})),s.a.createElement("div",{className:"add__photo__submit__cover"},t?s.a.createElement("p",{className:"error_cabinet_photo"},"too large file (maxSize - 300kb)"):null,s.a.createElement("button",{type:"submit",id:"avatar__submit",name:"submit",form:"avatar",className:"add__photo__submit"},"Send")))))});var u=Object(o.g)(e=>{let t=[];for(let a=0;a<e.num;a++)t.push(a+1);return s.a.createElement("div",{className:"pizza__cabinet__pagination__list__cover"},s.a.createElement("ul",{className:"pizza__cabinet__pagination__list"},t.map((t,a)=>s.a.createElement("li",{key:t,className:e.page==t?"pizza__cabinet__pagination__item pizza__cabinet__pagination__item_active":"pizza__cabinet__pagination__item",onClick:()=>{e.changePage(t),e.viewOrders(`page=${a+1}&limit=4&id=${e.id}`),e.history.push(`/personalRoom/${a+1}`)}},t))))});var h=s.a.memo(e=>{let t=1;e.orders.orders&&e.orders.orders.length>0&&(t=Math.ceil(e.orders.count/4)),Object(n.useEffect)(()=>e.viewOrders(`page=1&limit=4&id=${e.id}`),[]);const[a,r]=Object(n.useState)(!1),[i,o]=Object(n.useState)(""),[c,_]=Object(n.useState)(1);let d;return d=e.orders.orders?e.orders.orders.length>0?e.orders.orders.map((t,a)=>t.pizzas.length?s.a.createElement("div",{key:t._id,className:"prev__order__cover"},s.a.createElement("div",{className:"delete__order",onClick:()=>{r(!0),o(t._id)}}),s.a.createElement("div",{className:"prev__order__info__cover"},s.a.createElement("p",null,s.a.createElement("span",{className:"prev__order__name"},t.name," "),"ordered"," ",s.a.createElement("span",{className:"prev__order__name"},t.pizzaName)),s.a.createElement("p",null,t.street,t.house,"-",t.flat," total:"," ",s.a.createElement("span",{className:"prev__order__name"},t.totalCost,"$"))),s.a.createElement("div",{className:"prev__order__icon__cover"},t.pizzas.map((n,r)=>s.a.createElement("div",{key:r,className:"multi__pizza__single__cover"},n.name?s.a.createElement("p",{className:"multi__pizza__name__obj"},n.name):null,s.a.createElement("p",{key:a+t._id+r},"worth ",n.cost,"$, weight ",n.weight,"g. and diameter ",n.diameter," cm"),s.a.createElement("div",{className:"prev__order__icon__cover"},Object.keys(n.ingredients).map(t=>{const a=t;return n.ingredients[a].count>0?s.a.createElement("div",{className:"pizza__view__icon pizza__view__icon_small",key:t},s.a.createElement("div",{className:"pizza__view__icon__count pizza__view__icon__count_small"},s.a.createElement("strong",null,n.ingredients[a].count,"X")),s.a.createElement("div",{className:"pizza__view__icon__pic"},s.a.createElement("img",{src:e.browser.safari?`/assets/img/${t}.png`:`/assets/img/webp/${t}.webp`,alt:t,className:"pizza__view__icon__image"}))):null})))))):s.a.createElement("div",{key:t._id,className:"prev__order__cover"},s.a.createElement("div",{className:"delete__order",onClick:()=>{r(!0),o(t._id)}}),s.a.createElement("div",{className:"prev__order__info__cover"},s.a.createElement("p",null,s.a.createElement("span",{className:"prev__order__name"},t.name)," ordered"," ",t.pizzaName," worth ",t.cost,"$, weight ",t.weight,"g. and diameter ",t.diameter,"cm"),s.a.createElement("p",null,t.street,t.house,"-",t.flat)),s.a.createElement("div",{className:"prev__order__icon__cover"},Object.keys(t.ingredients).map(a=>{const n=a;return t.ingredients[n].count>0?s.a.createElement("div",{className:"pizza__view__icon pizza__view__icon_small",key:a},s.a.createElement("div",{className:"pizza__view__icon__count pizza__view__icon__count_small"},s.a.createElement("strong",null,t.ingredients[n].count,"X")),s.a.createElement("div",{className:"pizza__view__icon__pic"},s.a.createElement("img",{src:e.browser.safari?`/assets/img/${a}.png`:`/assets/img/webp/${a}.webp`,alt:a,className:"pizza__view__icon__image"}))):null})))):null:s.a.createElement("h1",null,"No orders get yet"),s.a.createElement("div",null,s.a.createElement(l.a,{toggle:e.orders.modal},s.a.createElement("div",null,s.a.createElement(m.a,null))),s.a.createElement(l.a,{toggle:a},s.a.createElement("div",{className:"modal__delete"},s.a.createElement("div",{className:"modal__delete__cover"},s.a.createElement("div",null,s.a.createElement("h3",null,"Are you shure?")),s.a.createElement("div",{className:"modal__delete__buttons__cover"},s.a.createElement("button",{className:"modal__delete__button",onClick:()=>{e.delete(i),r(!1)}},"Yes"),s.a.createElement("button",{className:"modal__delete__button",onClick:()=>r(!1)},"Cancel"))))),s.a.createElement("button",{onClick:()=>{e.viewOrders(`?page=1&limit=4&id=${e.id}`),_(1)},className:"refresh__orders__btn"},"Refresh"),d,s.a.createElement(u,{num:t,page:c,changePage:_,viewOrders:e.viewOrders,id:e.id}))}),v=a(6);class b extends s.a.Component{constructor(){super(...arguments),this.state={showingContent:1,trigger:!1},this.sendDataHnadler=e=>{e.preventDefault();let t={flat:this.props.cabinetSet.inputs.flat.value,house:this.props.cabinetSet.inputs.house.value,name:this.props.cabinetSet.inputs.name.value,street:this.props.cabinetSet.inputs.street.value,phone:this.props.cabinetSet.inputs.phone.value};this.props.fetchDataFun(t,this.props.cabinetSet.allGood,this.props.auth.localId)},this.changeContentHandler=e=>{this.setState({trigger:!0}),setTimeout(()=>{this.setState({showingContent:e,trigger:!1})},280)},this.showModalHandler=e=>{this.props.deleteOrderfun(e,this.props.auth.localId)}}componentDidMount(){this.props.getInfoFun(this.props.auth.localId)}render(){return s.a.createElement("section",{className:"container"},s.a.createElement(l.a,{toggle:this.props.cabinet.modalShow},s.a.createElement(m.a,null)),s.a.createElement("div",{className:"room__change__mail__cover"},s.a.createElement(i.c,{to:"/personalRoom/changeMail"},s.a.createElement("button",{className:"room__change__mail"},"Change mail."))),this.props.auth.isAuthindicated?null:s.a.createElement(o.a,{to:"/"}),s.a.createElement("nav",{className:"room__nav"},s.a.createElement("ul",{className:"room__list"},s.a.createElement("li",{className:"room__item"},s.a.createElement(i.c,{to:"/personalRoom",className:"room__link",onClick:()=>this.changeContentHandler(1)},"Info")),s.a.createElement("li",{className:"room__item"},s.a.createElement(i.c,{to:"/personalRoom",className:"room__link",onClick:()=>this.changeContentHandler(2)},"Set my contacts")),s.a.createElement("li",{className:"room__item"},s.a.createElement(i.c,{to:"/personalRoom/1",className:"room__link",onClick:()=>this.changeContentHandler(3)},"My orders")))),s.a.createElement("div",{className:this.state.trigger?"room__output_cabinet hide":"room__output_cabinet show"},s.a.createElement("div",{className:"cabinet__user__cover"},s.a.createElement("div",{className:"log__out__cover"},s.a.createElement("div",{className:"log__out__name__block"},s.a.createElement("p",{className:"cabinet__user__name"},"null"!==this.props.auth.name?this.props.auth.name:"user")),s.a.createElement("div",{className:"log__out__image__block"},this.props.auth.photo.startsWith("data")?s.a.createElement("div",{className:"log__out__image__div",style:{backgroundImage:"url("+this.props.auth.photo+")"}}):s.a.createElement("div",{className:"log__out__image__div",style:{backgroundImage:"url(/assets/users/"+this.props.auth.photo+")"}})))),1===this.state.showingContent?s.a.createElement(c,{info:this.props.cabinet}):null,2===this.state.showingContent?s.a.createElement(p,{inputs:this.props.cabinetSet.inputs,modal:this.props.cabinetSet.modalShow,onInput:this.props.onInputFun,check:this.sendDataHnadler,auth:this.props.auth,sendPhoto:this.props.setCabinetChangePhotoFun}):null,3===this.state.showingContent?s.a.createElement(h,{viewOrders:this.props.viewOrdersFun,orders:this.props.cabinetGet,id:this.props.auth.localId,delete:this.showModalHandler,browser:this.props.browser}):null))}}t.default=Object(r.b)(e=>({auth:e.auth,cabinet:e.cabinet,cabinetSet:e.cabinetSet,cabinetGet:e.cabinetGetOrders,browser:e.browser}),e=>({getInfoFun:t=>e(Object(v.K)(t)),onInputFun:t=>e(Object(v.cb)(t)),fetchDataFun:(t,a,n)=>e(Object(v.bb)(t,a,n)),viewOrdersFun:t=>e(Object(v.gb)(t)),deleteOrderfun:(t,a)=>e(Object(v.A)(t,a)),setCabinetChangePhotoFun:(t,a)=>e(Object(v.ab)(t,a))}))(b)}}]);