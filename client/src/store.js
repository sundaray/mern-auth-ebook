import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./components/stateSlices/registerSlice";
import loginReducer from "./components/stateSlices/loginSlice";
import passwordResetEmailReducer from "./components/stateSlices/passwordResetEmailSlice";
import passwordResetPasswordReducer from "./components/stateSlices/passwordResetPasswordSlice";

const loggedInUserFromStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : null;

const preloadedState = {
  login: {
    loggedInUser: loggedInUserFromStorage,
  },
};

export default configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    passwordResetEmail: passwordResetEmailReducer,
    passwordResetPassword: passwordResetPasswordReducer,
  },
  preloadedState,
});
