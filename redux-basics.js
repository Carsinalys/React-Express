const redux = require('redux');
const createstore = redux.createStore;

const initStore = {
    counter: 0
}

// reducer
const rootReducer = (state = initStore, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// store

const store = createstore(rootReducer);

console.log(store.getState())

// subscribtion 

store.subscribe(()=>{
    console.log('Subdcription', store.getState())
})

// action creator

store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 10});

console.log(store.getState())

