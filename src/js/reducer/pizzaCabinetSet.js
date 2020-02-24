import * as AC from "../AC/ac";

const initState = {
  modalShow: false,
  allGood: false,
  inputs: {
    name: {
      id: "checkout__name",
      placeholder: "Name",
      label: "Enter your name:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z][a-zA-Z0-9-_ .]{1,20}$"
    },
    phone: {
      id: "checkout__phone",
      placeholder: "Phone",
      label: "Enter your phone:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^(375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})$"
    },
    street: {
      id: "checkout__street",
      placeholder: "Your street",
      label: "Your street:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[0-9a-zA-Z -_.]{1,20}$"
    },
    house: {
      id: "checkout__house",
      placeholder: "Your house",
      label: "Your house:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[0-9]+$"
    },
    flat: {
      id: "checkout__flat",
      placeholder: "Your flat",
      label: "Your flat:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[0-9]+$"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.CABINET_SET_INFO_ON_INPUT: {
      const regExp = new RegExp(
        state.inputs[action.payload.target.dataset.name].pattern
      );
      const valid = regExp.test(action.payload.target.value);
      let copyState = {
        ...state,
        allGood: false,
        inputs: {
          ...state.inputs,
          [action.payload.target.dataset.name]: {
            ...state.inputs[action.payload.target.dataset.name],
            value: action.payload.target.value,
            isValid: valid
          }
        }
      };
      let arr = Object.keys(copyState.inputs).map(
        item => copyState.inputs[item].isValid
      );
      let valueValid = 0;
      arr.forEach(item => (item === true ? valueValid++ : valueValid));
      console.log(arr.length === valueValid);
      console.log(arr.length, valueValid);

      return {
        ...copyState,
        allGood: arr.length === valueValid
      };
    }
    case AC.CABINET_SET_INFO_RESET:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: {
            ...state.inputs.name,
            value: "",
            isValid: false
          },
          phone: {
            ...state.inputs.phone,
            value: "",
            isValid: false
          },
          street: {
            ...state.inputs.street,
            value: "",
            isValid: false
          },
          house: {
            ...state.inputs.house,
            value: "",
            isValid: false
          },
          flat: {
            ...state.inputs.flat,
            value: "",
            isValid: false
          }
        }
      };
    case AC.CABINET_SET_INFO_TOGGLE_MODAL:
      let curVal = state.modalShow;
      return {
        ...state,
        modalShow: !curVal
      };
    case AC.CABINET_SET_INFO_ERROR:
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default reducer;
