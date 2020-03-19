import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import { ChangeUserInfoFields, User } from '../interfaces/interfaces';
import { ChangeEvent } from "react";

export const setCabinetOnInput = (event: ChangeEvent) => {
  return {
    type: AC.CABINET_SET_INFO_ON_INPUT,
    payload: event
  };
};

export const setCabinetFetchOrder = (data: ChangeUserInfoFields, allGood: boolean, id: string):any => {
  return (dispatch: Dispatch) => {
    if (allGood) {
      dispatch(setCabinetToggleModal());
      const sendObj = {
        data,
        _id: id
      };
      client!
        .mutate({
          mutation: GQL.changeUserInfo,
          variables: { input: sendObj }
        })
        .then(res => {
          dispatch(setCabinetToggleModal());
            dispatch(setCabinetResetState());
            dispatch(setCabinetNewAddress(res.data.changeUserInfo));
            dispatch(setCabinetStoreNewPhotoAndName(res.data.changeUserInfo));
        })
        .then(() => client!.resetStore());
    }
  };
};

export const setCabinetChangePhoto = (data: string, id: string):any => {
  return (dispatch: Dispatch) => {
    dispatch(setCabinetToggleModal());
    const sendObj = {
      data: { photo: data },
      _id: id
    };
    client!
      .mutate({
        mutation: GQL.changeUserPhoto,
        variables: { input: sendObj }
      })
      .then(res => {
        dispatch(setCabinetToggleModal());
        dispatch(setCabinetStoreNewPhotoAndName(res.data.changeUserPhoto));
      })
      .then(() => client!.resetStore());
  };
};

export const setCabinetResetState = () => {
  return {
    type: AC.CABINET_SET_INFO_RESET
  };
};

export const setCabinetStoreNewPhotoAndName = (data: User) => {
  return {
    type: AC.CABINET_CHANGE_MAIL_STORE_PHOTO,
    payload: data
  };
};

export const setCabinetNewAddress = (res: User) => {
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

export const setCabinetCatchError = (err: string) => {
  return {
    type: AC.CABINET_SET_INFO_ERROR,
    payload: err
  };
};
