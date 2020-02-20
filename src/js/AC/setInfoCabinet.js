import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const setCabinetOnInput = event => {
  return {
    type: AC.CABINET_SET_INFO_ON_INPUT,
    payload: event
  };
};

export const setCabinetFetchOrder = (data, allGood, id) => {
  return dispatch => {
    if (allGood) {
      dispatch(setCabinetToggleModal());
      const sendObj = {
        data,
        _id: id
      };
      client
        .mutate({
          mutation: GQL.changeUserInfo,
          variables: { input: sendObj }
        })
        .then(res => {
          dispatch(setCabinetToggleModal());
          if (res.error) dispatch(setCabinetCatchError(res.error));
          else {
            dispatch(setCabinetResetState());
            dispatch(setCabinetNewAddress(res.data.changeUserInfo));
          }
        })
        .then(() => client.resetStore());
    }
  };
};

export const setCabinetResetState = () => {
  return {
    type: AC.CABINET_SET_INFO_RESET
  };
};

export const setCabinetNewAddress = res => {
  return {
    type: AC.CABINET_NEW_ADDRESS_SET,
    payload: res
  };
};

export const setCabinetToggleModal = () => {
  return {
    type: AC.CABINET_SET_INFO_TOGGLE_MODAL
  };
};

export const setCabinetCatchError = err => {
  return {
    type: AC.CABINET_SET_INFO_ERROR,
    payload: err
  };
};
