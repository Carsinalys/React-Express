import * as AC from "./ac";

export const getInfo = body => {
  return dispatch => {
    dispatch(cabinetGetInfoModalON());
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(cabinetGetInfoModalOFF());
        dispatch(cabinetGetInfo(data));
      })
      .catch(error => {
        console.log(error);
        dispatch(cabinetGetInfoModalOFF());
      });
  };
};

export const getInfoAddres = (token, id) => {
  return dispatch => {
    dispatch(cabinetGetInfoModalON());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/users/${id}.json?auth=${token}`,
      {
        method: "get"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(cabinetGetInfoAddres(res));
        dispatch(cabinetGetInfoModalOFF());
      })
      .catch(error => {
        console.log(error);
        dispatch(cabinetGetInfoModalOFF());
      });
  };
};

export const cabinetGetInfoAddres = response => {
  return {
    type: AC.CABINET_GET_INFO_ADDRES,
    payload: response
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
