import * as AC from "./ac";
import { port } from "../../../portForFront";

export const getInfo = id => {
  return dispatch => {
    dispatch(cabinetGetInfoModalON());
    fetch(`${port}/api/v1.0/user/getInfo?id=${id}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(cabinetGetInfoModalOFF());
        dispatch(cabinetGetInfo(data.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(cabinetGetInfoModalOFF());
      });
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
