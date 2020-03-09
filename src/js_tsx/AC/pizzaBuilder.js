import * as AC from "./ac";

export const minus = ingredient => {
  return {
    type: AC.MINUS,
    payload: ingredient
  };
};

export const plus = ingredient => {
  return {
    type: AC.PLUS,
    payload: ingredient
  };
};

export const the_same = obj => {
  return {
    type: AC.THE_SAME,
    payload: obj
  };
};

export const reset_build = () => {
  return {
    type: AC.RESET_BUILD
  };
};
