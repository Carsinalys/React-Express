export interface UserAuthObj {
    expireAt: number
    localId: string
    name: string
    photo: string
    error: string
    status: string
    message: string
  }

  //Dispatch interface with void
interface ActionVoid<T = any> {
    type?: T
}

interface AnyActionVoid extends ActionVoid {
    [extraProps: string]: any
  }

export interface DispatchVoid<A extends ActionVoid = AnyActionVoid> {
    <T extends A>(action: T): T
  }
//////////////////////