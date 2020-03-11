import * as AC from "./ac";
import {Pizza} from '../interfaces/interfaces';

export const minus = (ingredient: string) => {
  return {
    type: AC.MINUS,
    payload: ingredient
  };
};

export const plus = (ingredient: string) => {
  return {
    type: AC.PLUS,
    payload: ingredient
  };
};

export const the_same = (obj: Pizza) => {
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
