import React, { createContext, useState } from "react";

const MainContext = createContext({});

export const MainContextProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState();
  const [isUpdatedJsonData, setUpdatedJsonData] = useState(false);

  return (
    <MainContext.Provider
      value={{
        jsonData,
        setJsonData,
        isUpdatedJsonData,
        setUpdatedJsonData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
