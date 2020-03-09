const logger = store => {
  return next => {
    return action => {
      //console.log("LOGGER ACTION__TYPE:", action.type);
      const result = next(action);
      //console.log("LOGGER", store.getState());
      return result;
    };
  };
};

export default logger;
