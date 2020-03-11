import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import {User} from '../interfaces/interfaces';

export const getInfo = (id: string) => {
  return (dispatch: Dispatch) => {
    client!
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        dispatch(cabinetGetInfoModalOFF());
        dispatch(cabinetGetInfo(res.data.GetUserInfo));
      });
    dispatch(cabinetGetInfoModalON());
  };
};

export const cabinetGetInfo = (data: User) => {
  return {
    type: AC.CABINET_GET_INFO,
    payload: data
  };
};

export const cabinetGetInfoModalON = () => {
  return {
    type: AC.CABINET_MODAL_ON
  };
};

export const cabinetGetInfoModalOFF = () => {
  return {
    type: AC.CABINET_MODAL_OFF
  };
};
