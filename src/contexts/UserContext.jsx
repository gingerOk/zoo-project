import React, {createContext, useContext} from "react";

import {setAuthorizationHeader} from "api";

const initState = {
  token: null,
  role: "user",
};

const reducer = (state, action) => {
  const {type, token, role} = action;
  switch (type) {
    case "setUser":
      return {...state, token, role};
    case "login":
      return {...state, token, role};
    case "logout":
      return {...state, ...initState};
    default:
      throw Error("no cases found");
  }
};

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, dispatch] = React.useReducer(reducer, initState);
  React.useEffect(() => {
    if (localStorage.animalsToken) {
      dispatch({
        type: "setUser",
        token: localStorage.animalsToken,
        role: localStorage.animalsToken.user.role,
      });
      setAuthorizationHeader(localStorage.animalsToken);
    }
  }, []);
  const value = [user, dispatch];
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw Error("useUser must be used within UserProvider");
  }
  return context;
}

export const login = (dispatch, token) => {
  console.log("token", token)
  console.log("dispatch", dispatch)
  dispatch({type: "login", token, role: token.user.role});
  localStorage.animalsToken = token;
  setAuthorizationHeader(token);
};

export const logout = dispatch => {
  dispatch({type: "logout"});
  setAuthorizationHeader();
  delete localStorage.animalsToken;
};

export default UserContext;
