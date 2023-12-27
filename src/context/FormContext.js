import React, { createContext, useState } from "react";

const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormData = (value) => {
    setFormData((prev) => ({
      ...prev,
      ...value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleFormData,
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
