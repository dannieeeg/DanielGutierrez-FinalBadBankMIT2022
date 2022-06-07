
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./type";

import AuthService from "../services/auth.service";


//  AUTHENTICATION SERVICE FOR THE REGISTER PAGE AND MAKE SURE TO RELAY THE MESSAGE AND PAYLOAD OVER 


//  REGISTER SUCCESS  OR FAIL  


//  Refactor for dispath arrow functions daniel 

//  think python django backend 
export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
//  LOGIN AUTHENTICATION SUCCESS OR FAIL FOR DATA  DISPATCH 


//  DANIEL REFACTOR TO TAKE OUT THE FULL NAME FOR LOGIN  DISPATCH HERE BECAUSE YOU ALREADY TOOK IT OUT OF THE ALREADY COMPONENTS


//  DANIEL REFACTOR TO USE PAY LOAD 


export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};



//  LOGOUT FUNCTION


//  HAVE USER LOGOUT DISPATCH  AND RETURN TO THE ORIGINAL WELCOME URL 
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
