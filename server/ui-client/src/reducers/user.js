import {
  GET_BALANCE_SUCCESS,
  UPDATE_BALANCE_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
} from "../actions/type";


//  MAKE SURE TO COME BACK AND CLEAN UP THE PAYLOADS DANIEL



//  SET THE USER INITIAL STATE 



//  web dev simplified  learn useReducer in 20 minute and corresponding white paper daniel revert back 
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BALANCE_SUCCESS:
      return payload;
    case UPDATE_BALANCE_SUCCESS:
      return payload;
    case GET_TRANSACTIONS_SUCCESS:
      return payload;
    default:
      return state;
  }
}

export default userReducer;
