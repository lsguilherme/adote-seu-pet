import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({
  userStored: {},
  setUserStored: () => {},
  tokenStored: {},
  setTokenStored: () => {},
});

export function UserContextProvider({ children }) {
  const [userStored, setUserStored] = useState({});
  const [tokenStored, setTokenStored] = useState({});

  useEffect(() => {
    const getToken = async () => {
      await AsyncStorage.getItem("token").then((res) => {
        const result = JSON.parse(res);
        setTokenStored(result);
      });
    };
    getToken();
  }, [tokenStored]);

  const setToken = async (token) => {
    await AsyncStorage.setItem("token", JSON.stringify(token));
    setTokenStored(token);
  };
  const currentUser = {
    userStored,
    setUserStored,
    tokenStored,
    setTokenStored: setToken,
  };

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
