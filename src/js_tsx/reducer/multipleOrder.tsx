import * as AC from "../AC/ac";
import { Pizza, Action } from "../interfaces/interfaces";

interface InitState {
  pizzas: Pizza[];
  totalCost: number;
}

const initState: InitState = {
  pizzas: [],
  totalCost: 0
};

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case AC.MULTIPLE_ORDER_ADD:
      let newPizzas = state.pizzas;
      let newCost = 0;
      newPizzas.push(action.payload);
      newPizzas.forEach(item => (newCost += +item.cost));
      return {
        ...state,
        pizzas: newPizzas,
        totalCost: newCost.toFixed(2)
      };
    case AC.MULTIPLE_ORDER_DELETE:
      let newArr = [...state.pizzas];
      let newLessCost = 0;
      newArr.splice(action.payload, 1);
      newArr.forEach(item => (newLessCost += +item.cost));
      return {
        ...state,
        pizzas: newArr,
        totalCost: newLessCost.toFixed(2)
      };
    case AC.MULTIPLE_ORDER_RESET:
      return {
        ...state,
        pizzas: [],
        totalCost: 0
      };
    case AC.MULTIPLE_ORDER_THE_SAME:
      return {
        ...state,
        totalCost: action.payload.totalCost,
        pizzas: action.payload.pizzas
      };
    default:
      return { ...state };
  }
};

export default reducer;
