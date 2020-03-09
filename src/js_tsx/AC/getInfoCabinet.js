import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const getInfo = id => {
  return dispatch => {
    client
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        dispatch(cabinetGetInfoModalOFF());
        if (res.error) console.log(res.error);
        else dispatch(cabinetGetInfo(res.data.GetUserInfo));
      });
    dispatch(cabinetGetInfoModalON());
  };
};

export const cabinetGetInfo = data => {
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
