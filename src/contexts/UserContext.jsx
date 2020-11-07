import React, {createContext, useContext} from "react";
import {userData} from "data";

export const userInfo = userData

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const user = userInfo;

return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
      throw Error("useUser must be used within UserProvider");
    }
    return context;
  }
