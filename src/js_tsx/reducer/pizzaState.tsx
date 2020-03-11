import * as AC from "../AC/ac";
import { Action } from "../interfaces/interfaces";

interface Ingredient {
  count: number;
  weight: number;
  cost: number;
}

type Ingredients =
  | "base"
  | "pizza-sause"
  | "cheese"
  | "bacon"
  | "beef"
  | "chicken"
  | "ham"
  | "meat"
  | "pork"
  | "tomato"
  | "pickels"
  | "onion"
  | "mushroom"
  | "green-onion"
  | "chili"
  | "jalapeo"
  | "barbecue-sauce"
  | "cheese-sauce"
  | "garlic-sauce"
  | "mustard-sauce"
  | "spicy-sauce"
  | "ketchup"
  | "mayonnaise"
  | "barbecue-sauce"
  | "ranch-sauce"
  | "cherry"
  | "pepperoni-pepper"
  | "marinated-onion"
  | "black-olives"
  | "sausage"
  | "lemon"
  | "shrimps"
  | "mussels"
  | "salmon"
  | "capers"
  | "marinated-pepper"
  | "pineapple"
  | "small-sausage"
  | "feta-cheese"
  | "spinach"
  | "egg";

interface InitState {
  ingredients: {
    base: Ingredient;
    "pizza-sause": Ingredient;
    cheese: Ingredient;
    bacon: Ingredient;
    beef: Ingredient;
    chicken: Ingredient;
    ham: Ingredient;
    meat: Ingredient;
    pork: Ingredient;
    tomato: Ingredient;
    pickels: Ingredient;
    onion: Ingredient;
    mushroom: Ingredient;
    "green-onion": Ingredient;
    chili: Ingredient;
    jalapeo: Ingredient;
    "barbecue-sauce": Ingredient;
    "cheese-sauce": Ingredient;
    "garlic-sauce": Ingredient;
    "mustard-sauce": Ingredient;
    "spicy-sauce": Ingredient;
    ketchup: Ingredient;
    mayonnaise: Ingredient;
    "ranch-sauce": Ingredient;
    cherry: Ingredient;
    "pepperoni-pepper": Ingredient;
    "marinated-onion": Ingredient;
    "black-olives": Ingredient;
    sausage: Ingredient;
    lemon: Ingredient;
    shrimps: Ingredient;
    mussels: Ingredient;
    salmon: Ingredient;
    capers: Ingredient;
    "marinated-pepper": Ingredient;
    pineapple: Ingredient;
    "small-sausage": Ingredient;
    "feta-cheese": Ingredient;
    spinach: Ingredient;
    egg: Ingredient;
  };
  weight: number;
  cost: number;
  diameter: number;
  message: string;
}

interface ActionIngredients {
  type: string;
  payload: Ingredients;
}

const startState: InitState = {
  ingredients: {
    base: { count: 1, weight: 300, cost: 2 },
    "pizza-sause": { count: 0, weight: 100, cost: 0.6 },
    cheese: { count: 0, weight: 50, cost: 0.6 },
    bacon: { count: 0, weight: 30, cost: 0.8 },
    beef: { count: 0, weight: 30, cost: 0.9 },
    chicken: { count: 0, weight: 30, cost: 0.6 },
    ham: { count: 0, weight: 30, cost: 0.7 },
    meat: { count: 0, weight: 30, cost: 0.7 },
    pork: { count: 0, weight: 30, cost: 0.9 },
    tomato: { count: 0, weight: 50, cost: 0.4 },
    pickels: { count: 0, weight: 50, cost: 0.2 },
    onion: { count: 0, weight: 30, cost: 0.2 },
    mushroom: { count: 0, weight: 50, cost: 0.4 },
    "green-onion": { count: 0, weight: 30, cost: 0.5 },
    chili: { count: 0, weight: 30, cost: 0.99 },
    jalapeo: { count: 0, weight: 30, cost: 0.7 },
    "barbecue-sauce": { count: 0, weight: 30, cost: 0.2 },
    "cheese-sauce": { count: 0, weight: 30, cost: 0.2 },
    "garlic-sauce": { count: 0, weight: 30, cost: 0.2 },
    "mustard-sauce": { count: 0, weight: 30, cost: 0.2 },
    "spicy-sauce": { count: 0, weight: 30, cost: 0.2 },
    ketchup: { count: 0, weight: 30, cost: 0 },
    mayonnaise: { count: 0, weight: 30, cost: 0 },
    "ranch-sauce": { count: 0, weight: 30, cost: 0.2 },
    cherry: { count: 0, weight: 30, cost: 0.5 },
    "pepperoni-pepper": { count: 0, weight: 30, cost: 0.7 },
    "marinated-onion": { count: 0, weight: 30, cost: 0.7 },
    "black-olives": { count: 0, weight: 30, cost: 0.4 },
    sausage: { count: 0, weight: 40, cost: 0.4 },
    lemon: { count: 0, weight: 30, cost: 0.3 },
    shrimps: { count: 0, weight: 30, cost: 0.9 },
    mussels: { count: 0, weight: 30, cost: 0.9 },
    salmon: { count: 0, weight: 30, cost: 0.9 },
    capers: { count: 0, weight: 30, cost: 0.3 },
    "marinated-pepper": { count: 0, weight: 30, cost: 0.5 },
    pineapple: { count: 0, weight: 30, cost: 0.3 },
    "small-sausage": { count: 0, weight: 30, cost: 0.4 },
    "feta-cheese": { count: 0, weight: 30, cost: 0.4 },
    spinach: { count: 0, weight: 30, cost: 0.3 },
    egg: { count: 0, weight: 80, cost: 0.5 }
  },
  weight: 300,
  cost: 2,
  diameter: 30,
  message: "need more ingredients...)"
};

const reducer = (state = startState, action: ActionIngredients | Action) => {
  switch (action.type) {
    case AC.PLUS:
      if (action.payload !== "base" && state.weight <= 1500) {
        return calculationHandler({
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.payload]: {
              ...state.ingredients[action.payload],
              count: state.ingredients[action.payload].count + 1
            }
          }
        });
      } else {
        return { ...state };
      }
    case AC.MINUS:
      if (action.payload !== "base") {
        return calculationHandler({
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.payload]: {
              ...state.ingredients[action.payload],
              count:
                state.ingredients[action.payload].count == 0
                  ? state.ingredients[action.payload].count
                  : state.ingredients[action.payload].count - 1
            }
          }
        });
      } else {
        return { ...state };
      }
    case AC.RESET_BUILD:
      const resetState = { ...state };
      const resetIngr = { ...state.ingredients };
      Object.keys(resetIngr).map(item => {
        item == "base"
          ? (resetIngr[item].count = 1)
          : (resetIngr[item].count = 0);
      });
      resetState.ingredients = resetIngr;
      return calculationHandler(resetState);
    case AC.THE_SAME:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        cost: action.payload.cost,
        weight: action.payload.weight,
        diameter: action.payload.diameter
      };
  }
  return { ...state };
};

export default reducer;

const calculationHandler = (state: InitState) => {
  let newWeight = 0;
  let newCost = 0;
  Object.keys(state.ingredients).forEach(item => {
    if (state.ingredients[item].count > 0) {
      newWeight +=
        state.ingredients[item].weight * state.ingredients[item].count;
      newCost += state.ingredients[item].cost * state.ingredients[item].count;
    }
  });
  const newState = calculateBaseWeightAndMessageHandler({
    ...state,
    weight: newWeight,
    cost: newCost.toFixed(2)
  });
  return checkingWeigtCosthHandler(newState);
};

const checkingWeigtCosthHandler = (state: InitState) => {
  if (state.weight >= 750 && state.weight < 1200) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        base: {
          ...state.ingredients.base,
          weight: 400
        }
      }
    };
  } else if (state.weight >= 1200) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        base: {
          ...state.ingredients.base,
          weight: 500
        }
      }
    };
  } else if (state.weight < 750) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        base: {
          ...state.ingredients.base,
          weight: 300
        }
      }
    };
  }
};

const calculateBaseWeightAndMessageHandler = (state: InitState) => {
  let newDiameter = 30;
  let newMessage = "need more ingredients...)";

  if (state.weight >= 500 && state.weight < 699) {
    newDiameter = 35;
    newMessage = "pizza for 1-2 people";
  } else if (state.weight >= 700 && state.weight < 900) {
    newDiameter = 40;
    newMessage = "pizza for 2-3 people";
  } else if (state.weight >= 900 && state.weight < 1100) {
    newDiameter = 45;
    newMessage = "pizza for 3-4 people";
  } else if (state.weight >= 1100 && state.weight < 1500) {
    newDiameter = 50;
    newMessage = "pizza for 4-5 people";
  } else if (state.weight >= 1500) {
    newDiameter = 50;
    newMessage = "Too big weight, we don`t have such a big base...";
  }
  return {
    ...state,
    diameter: newDiameter,
    message: newMessage
  };
};
