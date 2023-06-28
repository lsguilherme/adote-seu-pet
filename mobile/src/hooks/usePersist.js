import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default () => {
  const context = useContext(UserContext);
  return context;
};
