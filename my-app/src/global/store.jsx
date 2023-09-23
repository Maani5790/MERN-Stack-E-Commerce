import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ Children }) => {
   const userData = {
    country: "Pakistan",
    age: 23
   };
   return <AppContext.Provider value={userData}>{Children}</AppContext.Provider>
}

export { AppContext, AppProvider }