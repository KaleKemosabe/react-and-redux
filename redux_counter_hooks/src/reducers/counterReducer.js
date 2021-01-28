import * as actionTypes from '../actions/actions';

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREASE: return {...state, counter: state.counter +1};
        case actionTypes.DECREASE: return {...state, counter: state.counter -1};
        case actionTypes.INCREASEFIVE: return {...state, counter: state.counter + action.value};
        case actionTypes.DECREASEFIVE: return {...state, counter: state.counter - action.value};
        case actionTypes.RESET: return {...state, counter: state.counter = 0};
    }
    return state;
}
// no semicolons inside objects
const initialState = {
    counter: 10
}

export default counterReducer;