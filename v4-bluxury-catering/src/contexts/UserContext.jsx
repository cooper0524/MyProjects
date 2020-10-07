import React, { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user.uid);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unlisten();
    };
  });
  return (
    <UserContext.Provider value={{ authUser }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
