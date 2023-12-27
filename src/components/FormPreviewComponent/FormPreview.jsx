import React, { useContext, useEffect } from "react";
import MyForm from "./UIComponents/MyForm";
import MainContext from "../../context/MainContext";
import FormContext from "../../context/FormContext";
import SubmitForm from "./UIComponents/SubmitForm";

const FormPreview = () => {
  const { jsonData, isUpdatedJsonData } = useContext(MainContext);
  const { setFormData } = useContext(FormContext);

  useEffect(() => {
    if(isUpdatedJsonData) {
      setFormData({})
    }
  }, [jsonData]);

  console.log("form preview");
  return (
    <div className="semi_container form_container">
      <form>
        <MyForm jsonData={jsonData} />
        {jsonData && <SubmitForm />}
      </form>
    </div>
  );
};

export default FormPreview;
