export const INCREASE = "INCREASE";
export const INCREASEFIVE = "INCREASEFIVE"
export const DECREASE = "DECREASE";
export const DECREASEFIVE = "DECREASEFIVE";
export const RESET = "RESET";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increase = () => ({type: INCREASE});
export const increaseFive = () => ({type: INCREASEFIVE, value:5});
export const decrease = () => ({type: DECREASE});
export const decreaseFive = () => ({type: DECREASEFIVE, value:5});
export const reset = () => ({type: RESET});
export const storeResult = (currentState) => ({type: currentState});
export const deleteResult = (id) => ({type: DELETE_RESULT, id:id});