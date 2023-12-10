import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL , CLEAR_ERRORS } from "../Constants/userConstant";
import axios from "axios";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};


// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
        const{name,email,password} =userData;
        // console.log(name);
      const { data } = await axios.post(`/api/v1/register`,{name,email,password}, config);
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  