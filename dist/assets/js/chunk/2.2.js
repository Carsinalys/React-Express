(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{131:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(12),l=a(9),r=a(6),c=a(75);var o=i.a.memo(e=>i.a.createElement("div",{className:"pizza__view__block"},i.a.createElement("div",{className:"pizza__view__layout"},e.ingredients.base.count>0?i.a.createElement("div",{className:"pizza__view__bottom"}):null,e.ingredients["pizza-sause"].count>0?i.a.createElement("div",{className:"pizza__view__sauce__bottom"}):null,e.ingredients.cheese.count>0?i.a.createElement("div",{className:"pizza__view__cheese"}):null,e.ingredients.bacon.count>0||e.ingredients.beef.count>0||e.ingredients.chicken.count>0||e.ingredients.ham.count>0||e.ingredients.meat.count>0||e.ingredients.pork.count>0?i.a.createElement("div",{className:"pizza__view__meat"}):null,e.ingredients.tomato.count>0||e.ingredients.pickels.count>0||e.ingredients.onion.count>0||e.ingredients.mushroom.count>0||e.ingredients["green-onion"].count>0?i.a.createElement("div",{className:"pizza__view__other"}):null,e.ingredients.chili.count>0||e.ingredients.jalapeo.count>0?i.a.createElement("div",{className:"pizza__view__chili"}):null),i.a.createElement("div",{className:"pizza__view__info"},e.weight>=1500?i.a.createElement("h1",null,"Pizza is too big, we can`t make it..."):null,i.a.createElement("h2",null,"About your pizza:"),i.a.createElement("div",null,i.a.createElement("h4",{className:"pizza__view__info__small__title"},"ingredients:"),i.a.createElement("div",{className:"pizza__view__info__icons"},i.a.createElement(c.a,{ingredients:e.ingredients,minus:e.minus,browser:e.browser}))),i.a.createElement("p",null,"Pizza weight is: ",e.weight," g. ",e.message),i.a.createElement("p",null,"Base weight is: ",e.ingredients.base.weight," g."),i.a.createElement("p",null,"Diameter: ",e.diameter," cm"),i.a.createElement("p",null,"Cost is: ",e.cost," $"))));var _=e=>i.a.createElement("div",{className:"pizza__control"},i.a.createElement("div",{className:"pizza__control__title"},i.a.createElement("p",{className:"pizza__builder__controls__ingredient__title"},e.name),i.a.createElement("span",{className:"pizza__control__title__weight"},"weight: ",e.weight," g. her point")),i.a.createElement("div",null,i.a.createElement("button",{className:"pizza__control__button",onClick:()=>e.minus(e.name)},"-"),i.a.createElement("span",null,e.count),i.a.createElement("button",{className:"pizza__control__button",onClick:()=>e.plus(e.name)},"+")),i.a.createElement("div",{className:"pizza__controls__image"},e.browser.safari?i.a.createElement("img",{src:`/assets/img/${e.name}.png`,alt:"Current ingredient"}):i.a.createElement("img",{src:`/assets/img/webp/${e.name}.webp`,alt:"Current ingredient"})));var m=e=>e.children,u=a(81);var d=e=>{const[t,a]=Object(s.useState)(!1);return i.a.createElement("div",{className:"select__cover__ul"},i.a.createElement("button",{className:"toggle__select",onClick:()=>{a(!t)}},"Choose ingredient..."),i.a.createElement(u.a,{toggle:t},i.a.createElement("ul",{className:"select__list"},Object.keys(e.ingredients).map(t=>i.a.createElement("li",{value:t,key:t,className:"select__item",onClick:t=>{const s=t.target.textContent;a(!1),e.change(s)}},i.a.createElement("div",{className:"select__item__title__cover"},i.a.createElement("p",{className:"ul__select__title__ingredients"},t)),i.a.createElement("div",null,e.browser.safari?i.a.createElement("img",{src:`/assets/img/${t}.png`,alt:t,className:"select__item__pic"}):i.a.createElement("img",{src:`/assets/img/webp/${t}.webp`,alt:t,className:"select__item__pic"})))))))};var p=e=>i.a.createElement("div",{className:"pizza__view__order__controls"},i.a.createElement("button",{className:"pizza__view__order__controls__button red_theme",onClick:()=>{e.resetBuild(),e.resetMultiBuild()}},"Reset your build"),i.a.createElement("button",{className:"pizza__view__order__controls__button",onClick:e.toggleModal},"Go to checkout"));var g=e=>i.a.createElement("div",{className:"modal"},e.children);var h=e=>i.a.createElement("div",{className:"pizza__view__order__content__modal"},i.a.createElement("div",{className:"pizza__view__order__content__flex"},i.a.createElement("div",null,i.a.createElement("h2",null,"Check your pizza:"),i.a.createElement("p",null,"Weight is: ",e.weight," g."),i.a.createElement("p",null,"Diameter is: ",e.diameter," cm."),i.a.createElement("p",null,"Cost is: ",e.cost," $")),i.a.createElement("div",{className:"pizza__view__order__modal__icons"},i.a.createElement(c.a,{ingredients:e.ingredients,minus:e.minus,browser:e.browser}))),i.a.createElement("button",{className:"pizza__view__order__controls__button",onClick:e.add},"Save pizza fro order another one..."),i.a.createElement("button",{className:"pizza__view__order__controls__button",onClick:e.checkout},"Go to checkout")),z=a(87),E=a(11);class v extends i.a.Component{constructor(){super(...arguments),this.state={currentIngredient:"base",modalIsShow:!1,smallPizza:!1,redirect:!1},this.changeSelectHandler=e=>{this.setState(()=>({currentIngredient:e}))},this.toggleModalHandler=()=>{this.setState((e,t)=>({modalIsShow:!e.modalIsShow}))},this.checkoutHandler=()=>{Object.keys(this.props.multi.pizzas).length>0&&this.addPizzaHandler(),this.props.state.weight>500||Object.keys(this.props.multi.pizzas).length>0?this.setState({redirect:!0}):this.setState({smallPizza:!0,modalIsShow:!1})},this.addPizzaHandler=()=>{let e={};Object.keys(this.props.state.ingredients).map(t=>{const a=t;0!==this.props.state.ingredients[a].count&&(e[a]=Object.assign({},this.props.state.ingredients[a]))});let t={cost:this.props.state.cost,diameter:this.props.state.diameter,weight:this.props.state.weight,ingredients:e};t.weight>=500?(this.setState({modalIsShow:!1}),this.props.multipleAddFun(t)):this.setState({smallPizza:!0,modalIsShow:!1})},this.minusFunHandler=e=>{console.log("in",e)}}render(){return i.a.createElement(m,null,i.a.createElement(E.a,{toggle:this.state.modalIsShow},i.a.createElement("div",{className:"modal__background",onClick:this.toggleModalHandler})),i.a.createElement(E.a,{toggle:this.state.modalIsShow},i.a.createElement(g,null,i.a.createElement(h,{cost:this.props.state.cost,diameter:this.props.state.diameter,message:this.props.state.message,weight:this.props.state.weight,ingredients:this.props.state.ingredients,minus:this.props.minusFun,checkout:this.checkoutHandler,add:this.addPizzaHandler,browser:this.props.browser}))),i.a.createElement(E.a,{toggle:this.state.smallPizza},i.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:()=>this.setState({smallPizza:!1})},i.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Too small pizza, need more ingredients..."))),this.state.redirect?i.a.createElement(n.a,{to:"/checkout"}):null,i.a.createElement("div",{className:"pizza__view__cover"},i.a.createElement("div",{className:"pizza__buttons__cover"},i.a.createElement(d,{ingredients:this.props.state.ingredients,change:this.changeSelectHandler,browser:this.props.browser}),i.a.createElement(_,{name:this.state.currentIngredient,weight:this.props.state.ingredients[this.state.currentIngredient].weight,count:this.props.state.ingredients[this.state.currentIngredient].count,plus:this.props.plusFun,minus:this.props.minusFun,browser:this.props.browser}),i.a.createElement(p,{toggleModal:this.toggleModalHandler,resetBuild:this.props.resetFun,resetMultiBuild:this.props.resetMultiFun}),i.a.createElement(z.a,{pizzas:this.props.multi.pizzas,cost:this.props.multi.totalCost,minus:this.minusFunHandler,delete:this.props.deleteMulriOrderFun})),i.a.createElement(o,{ingredients:this.props.state.ingredients,weight:this.props.state.weight,minus:this.props.minusFun,cost:this.props.state.cost,diameter:this.props.state.diameter,message:this.props.state.message,browser:this.props.browser})))}}t.default=Object(l.b)(e=>({state:e.pizza,multi:e.multi,browser:e.browser}),e=>({plusFun:t=>e(Object(r.U)(t)),minusFun:t=>e(Object(r.Q)(t)),resetFun:()=>e(Object(r.W)()),multipleAddFun:t=>e(Object(r.S)(t)),deleteMulriOrderFun:t=>e(Object(r.z)(t)),resetMultiFun:()=>e(Object(r.V)())}))(v)},75:function(e,t,a){"use strict";var s=a(0),i=a.n(s);t.a=e=>{let t=Object.keys(e.ingredients).map(t=>{let a=t;return e.ingredients[a].count>0?i.a.createElement("div",{className:"pizza__view__icon",key:t},i.a.createElement("div",{className:"pizza__view__icon__count"},i.a.createElement("strong",null,e.ingredients[a].count,"X")),"false"==e.showCross?null:i.a.createElement("div",{className:"pizza__view__icon__delete","data-value":t,onClick:t=>{const a=t.target;a.getAttribute("data-value"),e.minus(a.getAttribute("data-value"))}}),i.a.createElement("div",{className:"pizza__view__icon__pic"},i.a.createElement("img",{src:e.browser&&e.browser.safari?`assets/img/${t}.png`:`assets/img/webp/${t}.webp`,alt:t,className:"pizza__view__icon__image"}))):null});return i.a.createElement("div",{className:"cover__for__indredient__icon"},t)}},81:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(74);t.a=e=>i.a.createElement(n.a,{in:e.toggle,timeout:300,classNames:"select__global",mountOnEnter:!0,unmountOnExit:!0},e.children)},87:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(75);t.a=e=>{let t=e.pizzas.length>0?e.pizzas.map((t,a)=>i.a.createElement("li",{key:a,className:"multi__order__item"},i.a.createElement("div",{className:"pizza__view__order__content__flex"},i.a.createElement("div",{className:"multi__order__params__cover"},t.name?i.a.createElement("p",{className:"multi__pizza__name__obj"},t.name):null,i.a.createElement("p",null,"Weight is: ",t.weight," g."),i.a.createElement("p",null,"Diameter is: ",t.diameter," cm."),i.a.createElement("p",null,"Cost is: ",t.cost," $")),i.a.createElement("div",{className:"multi__order__icons__cover"},i.a.createElement(n.a,{ingredients:t.ingredients,minus:e.minus}))),i.a.createElement("button",{className:"delete__multi__order",onClick:()=>e.delete(a)},"delete"))):null;return i.a.createElement("div",{className:"multi__pizzas__cover"},e.pizzas.length>0?i.a.createElement("h4",{className:"multi__title"},"You pizzas:"):null,e.pizzas.length>0?i.a.createElement("h5",{className:"multi__total__price"},"Total price: ",e.cost,"$"):null,i.a.createElement("ul",null,t))}}}]);