export interface UserAuthObj {
  expireAt: number;
  localId: string;
  name: string;
  photo: string;
  error: string;
  status: string;
  message: string;
}

export interface Room {
  _id: string;
  createAt: string;
  name: string;
}

export type Rooms = Room[];

export interface ChangeUserInfoFields {
  flat?: string;
  house?: string;
  name?: string;
  street?: string;
  phone?: string;
  mail?: string;
  photo?: string;
}

export interface Message {
  _id: string;
  createAt: string;
  message: string;
  room: string;
  id: string;
}

//Dispatch interface with void
interface ActionVoid<T = any> {
  type?: T;
}

interface AnyActionVoid extends ActionVoid {
  [extraProps: string]: any;
}

export interface DispatchVoid<A extends ActionVoid = AnyActionVoid> {
  <T extends A>(action: T): T;
}
//////////////////////

export interface GetMoreOrders {
  orders: Order[];
  count: number;
}

export interface Order {
  _id: string;
  name: string;
  pizzaName: string;
  diameter?: number;
  weight?: number;
  cost?: number;
  totalCost?: number;
  phone: string;
  street: string;
  house: number;
  flat: number;
  pizzas?: Pizza[];
  ingredients: object;
  id?: string;
}

export interface Pizza {
  _id: string;
  name: String;
  diameter: number;
  weight: number;
  cost: number;
  ingredients: object;
  reviews?: Review_Build[];
  id?: string;
}

type Review_Build = {
  _id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  build?: Pizza;
  user: string;
};

export interface Review {
  _id: string;
  name: string;
  rating: number;
  text: string;
  id: string;
  date: string;
  edited: boolean;
}

export interface BuildsReviewsInput {
  name: string;
  rating: string;
  text: string;
  build: string;
  user: string;
}

export interface OrderInput {
  name: string;
  pizzaName: string;
  diameter?: number;
  weight?: number;
  cost?: string;
  totalCost?: string;
  phone: number;
  street: string;
  house: number;
  flat: number;
  pizzas: PizzaInput[];
  ingredients: Object;
  id: string;
}

interface PizzaInput {
  name: string;
  diameter: number;
  weight: number;
  cost: number;
  ingredients: object;
  reviews: object;
  id?: string;
}

export interface User {
  _id: string;
  createdAt?: string;
  role?: string;
  photo?: string;
  phone?: number;
  mail?: string;
  flat?: number;
  house?: number;
  street?: string;
  name?: string;
}

export interface Action {
  type: string;
  payload: any;
  count?: number;
  error?: string;
}

export interface ActionEvent {
  type: string;
  payload: {
    name?: string;
    phone?: string;
    pizza?: string;
    street?: string;
    house?: string;
    flat?: string;
    photo?: string;
    expireAt?: number;
    localId?: string;
    error?: string;
    target?: {
      value: string;
      dataset: {
        name:
          | "name"
          | "phone"
          | "pizza"
          | "street"
          | "house"
          | "flat"
          | "mail"
          | "password";
      };
    };
  };
}

export interface Input {
  id?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  value: string;
  isValid: boolean;
  pattern: string;
}
