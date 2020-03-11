const logger = (_store: any) => {
  return (next: any) => {
    return (action: any) => {
      //console.log("LOGGER ACTION__TYPE:", action.type);
      const result = next(action);
      //console.log("LOGGER", store.getState());
      return result;
    };
  };
};

export default logger;
