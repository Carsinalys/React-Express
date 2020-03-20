(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(9),n=a(12),r=a(11),o=a(6),_=a(17),m=a(76),p=a(25),c=a(88);var u=e=>i.a.createElement("div",{className:"checkout__content__cover"},i.a.createElement("h3",{className:"checkout__content__title"},"Checkout form:"),i.a.createElement("form",{action:"#",id:"checkout__form",onSubmit:t=>{const a=t;e.confirm(a)}},i.a.createElement("div",{className:"checkout__content__top__cover"},i.a.createElement(p.a,{inputs:e.inputs,changeHandler:e.changeHandler})),Object.keys(e.multi.pizzas).length>0?i.a.createElement(c.a,{pizzas:e.multi.pizzas,minus:e.minusDlete,delete:e.delete,cost:e.multi.totalCost}):i.a.createElement("div",null,i.a.createElement("div",{className:"checkout__content__ingredients__cover"},i.a.createElement("p",null,"Your pizza ingredients:"),i.a.createElement(m.a,{ingredients:e.data.ingredients,minus:e.minus,browser:e.browser})),i.a.createElement("div",{className:"checkout__content__params__cover"},i.a.createElement("p",null,"Weight is: ",i.a.createElement("strong",null,e.data.weight)," g."),i.a.createElement("p",null,"Cost is: ",i.a.createElement("strong",null,e.data.cost)," $"),i.a.createElement("p",null,"Diameter is: ",i.a.createElement("strong",null,e.data.diameter)," cm."))),i.a.createElement("div",{className:"checkout__content__submit__cover"},i.a.createElement("input",{type:"submit",value:"Confirm",id:"checkout__submit",form:"checkout__form",onClick:t=>{const a=t;e.confirm(a)}}))));class d extends i.a.Component{constructor(){super(...arguments),this.state={smallPizza:!1,badName:!1,badPhone:!1,badPizzaName:!1,badHouse:!1,badFlat:!1,badStreet:!1},this.confirmHandler=e=>{let t;return e.preventDefault(),t=this.props.multi.pizzas.length>0?{name:this.props.inputs.inputs.name.value,phone:+this.props.inputs.inputs.phone.value,pizzaName:this.props.inputs.inputs.pizza.value,street:this.props.inputs.inputs.street.value,house:+this.props.inputs.inputs.house.value,flat:+this.props.inputs.inputs.flat.value,pizzas:this.props.multi.pizzas,totalCost:this.props.multi.totalCost.toString(),id:this.props.auth.localId}:{name:this.props.inputs.inputs.name.value,phone:+this.props.inputs.inputs.phone.value,pizzaName:this.props.inputs.inputs.pizza.value,street:this.props.inputs.inputs.street.value,house:+this.props.inputs.inputs.house.value,flat:+this.props.inputs.inputs.flat.value,cost:this.props.state.cost.toString(),weight:this.props.state.weight,diameter:this.props.state.diameter,ingredients:this.props.state.ingredients,id:this.props.auth.localId},/^[a-zA-Z][a-zA-Z0-9-_ .]{1,20}$/.test(this.props.inputs.inputs.name.value)?/^(375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})$/.test(this.props.inputs.inputs.phone.value)?/^[a-zA-Z0-9-_. ]{1,20}$/.test(this.props.inputs.inputs.pizza.value)?/^[0-9]{1,4}$/.test(this.props.inputs.inputs.house.value)?/^[0-9]{1,4}$/.test(this.props.inputs.inputs.flat.value)?/^[0-9a-zA-Z -_.]{1,20}$/.test(this.props.inputs.inputs.street.value)?void(""!==this.props.inputs.inputs.name.value&&""!==this.props.inputs.inputs.phone.value&&""!==this.props.inputs.inputs.pizza.value&&""!==this.props.inputs.inputs.street.value&&""!==this.props.inputs.inputs.house.value&&""!==this.props.inputs.inputs.flat.value&&this.props.state.weight>500||this.props.multi.pizzas.length>0?this.props.callApiAddOrderrFun(t):this.setState({smallPizza:!0})):(this.setState({badStreet:!0}),!1):(this.setState({badFlat:!0}),!1):(this.setState({badHouse:!0}),!1):(this.setState({badPizzaName:!0}),!1):(this.setState({badPhone:!0}),!1):(this.setState({badName:!0}),!1)},this.minusDeleteHandler=()=>{console.log("minus delete handler")}}componentDidMount(){this.props.getAddresFun(this.props.auth.localId)}render(){return i.a.createElement("section",{className:"container"},i.a.createElement(r.a,{toggle:this.props.inputs.modalShow},i.a.createElement("div",null,i.a.createElement(_.a,null))),i.a.createElement(r.a,{toggle:this.state.smallPizza},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({smallPizza:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"You need to fill all fields to complete or choose pizza correctly..."))),i.a.createElement(r.a,{toggle:this.state.badName},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badName:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Name must be 2-20 symbols length and first symbol must be letter..."))),i.a.createElement(r.a,{toggle:this.state.badPhone},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badPhone:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Phone must look like 80 29 760 18 83 or 375 33 765 98 22, must be without spaces"))),i.a.createElement(r.a,{toggle:this.state.badPizzaName},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badPizzaName:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Pizza name must be 2-20 symbols length"))),i.a.createElement(r.a,{toggle:this.state.badHouse},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badHouse:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"House name must be 2-4 numbers length"))),i.a.createElement(r.a,{toggle:this.state.badFlat},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badFlat:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Flat must be 2-4 numbers length"))),i.a.createElement(r.a,{toggle:this.state.badStreet},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({badStreet:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Street must be 2-20 symbols length"))),this.props.auth.isAuthindicated?i.a.createElement(u,{data:this.props.state,minus:this.props.minusFun,confirm:this.confirmHandler,inputs:this.props.inputs.inputs,changeHandler:this.props.onInputFun,multi:this.props.multi,delete:this.props.deleteMultiOrderFun,minusDlete:this.minusDeleteHandler,browser:this.props.browser}):i.a.createElement(n.a,{to:"/authentication"}))}}t.default=Object(l.b)(e=>({state:e.pizza,inputs:e.order,auth:e.auth,multi:e.multi,browser:e.browser}),e=>({minusFun:t=>e(Object(o.Q)(t)),resetFun:()=>e(Object(o.W)()),onInputFun:t=>e(Object(o.T)(t)),getAddresFun:t=>e(Object(o.L)(t)),deleteMultiOrderFun:t=>e(Object(o.z)(t)),callApiAddOrderrFun:t=>e(Object(o.g)(t))}))(d)},76:function(e,t,a){"use strict";var s=a(0),i=a.n(s);t.a=e=>{let t=Object.keys(e.ingredients).map(t=>{let a=t;return e.ingredients[a].count>0?i.a.createElement("div",{className:"pizza__view__icon",key:t},i.a.createElement("div",{className:"pizza__view__icon__count"},i.a.createElement("strong",null,e.ingredients[a].count,"X")),"false"==e.showCross?null:i.a.createElement("div",{className:"pizza__view__icon__delete","data-value":t,onClick:t=>{const a=t.target;a.getAttribute("data-value"),e.minus(a.getAttribute("data-value"))}}),i.a.createElement("div",{className:"pizza__view__icon__pic"},i.a.createElement("img",{src:e.browser&&e.browser.safari?`assets/img/${t}.png`:`assets/img/webp/${t}.webp`,alt:t,className:"pizza__view__icon__image"}))):null});return i.a.createElement("div",{className:"cover__for__indredient__icon"},t)}},88:function(e,t,a){"use strict";var s=a(0),i=a.n(s),l=a(76);t.a=e=>{let t=e.pizzas.length>0?e.pizzas.map((t,a)=>i.a.createElement("li",{key:a,className:"multi__order__item"},i.a.createElement("div",{className:"pizza__view__order__content__flex"},i.a.createElement("div",{className:"multi__order__params__cover"},t.name?i.a.createElement("p",{className:"multi__pizza__name__obj"},t.name):null,i.a.createElement("p",null,"Weight is: ",t.weight," g."),i.a.createElement("p",null,"Diameter is: ",t.diameter," cm."),i.a.createElement("p",null,"Cost is: ",t.cost," $")),i.a.createElement("div",{className:"multi__order__icons__cover"},i.a.createElement(l.a,{ingredients:t.ingredients,minus:e.minus}))),i.a.createElement("button",{className:"delete__multi__order",onClick:()=>e.delete(a)},"delete"))):null;return i.a.createElement("div",{className:"multi__pizzas__cover"},e.pizzas.length>0?i.a.createElement("h4",{className:"multi__title"},"You pizzas:"):null,e.pizzas.length>0?i.a.createElement("h5",{className:"multi__total__price"},"Total price: ",e.cost,"$"):null,i.a.createElement("ul",null,t))}}}]);