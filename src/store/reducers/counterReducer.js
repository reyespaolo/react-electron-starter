import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter:0
}
const reducer = (state = initialState, action) => {
  if(action.type === actionTypes.INCREMENT){
    return {
      counter: state.counter + 1
    }
  }
  if(action.type === actionTypes.DECREMENT){
    return {
      counter: state.counter - 1
    }
  }
  return state;
}

export default reducer;
