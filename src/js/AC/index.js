export { plus, minus, the_same, reset_build } from "./pizzaBuilder";
export {
  startGetOrders,
  gerOrders,
  setOrders,
  getError
} from "./fetchingOrders";
export {
  getReviews,
  startGetReviews,
  setReviews,
  getReviewsError
} from "./fetchingRewiews";
export { onInput, getInfoAddresCheckout, callApiAddOrderr } from "./fetchOrder";
export {
  authOnInput,
  authSignUp,
  authSignIn,
  getTokenFromCookie,
  callApiNewUser
} from "./pizzaAuth";
export { logOut } from "./pizzaLogOut";
export { getInfo, getInfoAddres } from "./getInfoCabinet";
export {
  setCabinetOnInput,
  setCabinetFetchOrder,
  deleteCabinetAddres
} from "./setInfoCabinet";
export { viewOrdersCabinet, deleteOrder } from "./viewOrdersCabinet";
export { fetchResetPass, authResetOnInput } from "./pizzaAuthForgotPass";
export {
  multipleAdd,
  deleteMultiOrder,
  multiPizzaTheSame,
  resetMultiPizza
} from "./multipleOrder";
export {
  createChatRoom,
  chatOnInput,
  chatChooseRoom,
  chatOnMessageInput,
  chatSendMessage,
  chatSetUserName,
  chatOnNameInput,
  chatSetUserNameToRedux,
  chatDeleteUserName,
  chatDeleteMessage,
  chatNewMessageOn,
  chatNewMessageOff,
  chatGetRooms,
  chatGetUsersNames,
  chatSetCurrentMessages
} from "./chat";
