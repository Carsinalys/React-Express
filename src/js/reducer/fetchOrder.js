import * as AC from "../AC/ac";

const initState = {
  modalShow: false,
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
    pizza: {
      id: "checkout__pizza",
      placeholder: "Pizza name",
      label: "Name your pizza:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z0-9-_. ]{1,20}$"
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
      pattern: "^[0-9]{1,4}$"
    },
    flat: {
      id: "checkout__flat",
      placeholder: "Your flat",
      label: "Your flat:",
      type: "text",
      value: "",
      isValid: false,
      pattern: "^[0-9]{1,4}$"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.SEND_ORDER_ON_INPUT: {
      let fuck = new RegExp(
        state.inputs[action.payload.target.dataset.name].pattern
      );
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.target.dataset.name]: {
            ...state.inputs[action.payload.target.dataset.name],
            value: action.payload.target.value,
            isValid: fuck.test(action.payload.target.value)
          }
        }
      };
    }
    case AC.SEND_ORDER_RESET:
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
          pizza: {
            ...state.inputs.pizza,
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
    case AC.SEND_ORDER_ADDRES:
      let key = "";
      if (!action.payload.error && Object.keys(action.payload).length > 0) {
        Object.keys(action.payload).map(item => {
          return (key = item);
        });
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: {
            ...state.inputs.name,
            value: action.payload[key].name || "",
            isValid: action.payload[key].name != undefined ? true : false
          },
          phone: {
            ...state.inputs.phone,
            value: action.payload[key].phone || "",
            isValid: action.payload[key].phone != undefined ? true : false
          },
          street: {
            ...state.inputs.street,
            value: action.payload[key].street || "",
            isValid: action.payload[key].street != undefined ? true : false
          },
          house: {
            ...state.inputs.house,
            value: action.payload[key].house || "",
            isValid: action.payload[key].house != undefined ? true : false
          },
          flat: {
            ...state.inputs.flat,
            value: action.payload[key].flat || "",
            isValid: action.payload[key].flat != undefined ? true : false
          }
        }
      };
    case AC.SEND_ORDER_MODAL_ON:
      return {
        ...state,
        modalShow: true
      };
    case AC.SEND_ORDER_MODAL_OFF:
      return {
        ...state,
        modalShow: false
      };
    case AC.SEND_ORDER_ERROR:
      console.log(action.payload);
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default reducer;
