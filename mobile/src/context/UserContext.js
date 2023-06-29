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

    const getUser = async () => {
      await AsyncStorage.getItem("userId").then((res) => {
        const result = JSON.parse(res);
        setUserStored(result);
      });
    };

    getToken();
    getUser();
  }, [tokenStored, userStored]);

  const setToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", JSON.stringify(token));
      setTokenStored(token);
    } catch (error) {
      console.log("Error saving token:", error);
    }
  };

  const setUserId = async (userId) => {
    try {
      await AsyncStorage.setItem("userId", JSON.stringify(userId));
      setUserStored(userId);
    } catch (error) {
      console.log("Error saving userId:", error);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    setUserStored({});
    setTokenStored({});
  };

  const currentUser = {
    userStored,
    setUserStored: setUserId,
    tokenStored,
    setTokenStored: setToken,
    signOut,
  };

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
