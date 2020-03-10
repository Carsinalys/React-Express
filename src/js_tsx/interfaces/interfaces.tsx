export interface UserAuthObj {
  expireAt: number;
  localId: string;
  name: string;
  photo: string;
  error: string;
  status: string;
  message: string;
}

interface Room {
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

// export interface User {
//   _id: string;
//   createdAt?: string;
//   role?: string;
//   photo?: string;
//   phone?: number;
//   mail?: string;
//   flat?: number;
//   house?: number;
//   street?: string;
//   name?: string;
// }

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
  orders: Order[]
  count: number
}


export interface Order {
  _id: string
  name: string
  pizzaName: string
  diameter?: number
  weight?: number
  cost?: number
  totalCost?: number
  phone: string
  street: string
  house: number
  flat: number
  pizzas?: Pizza[]
  ingredients: object
  id?: string
}

interface Pizza {
  _id: string
  name: String
  diameter: number
  weight: number
  cost: number
  ingredients: object
  reviews?: Review_Build[]
  id: string
}

type Review_Build {
  _id: string
  name: string
  date: string
  rating: number
  text: string
  build?: Pizza
  user: string
}