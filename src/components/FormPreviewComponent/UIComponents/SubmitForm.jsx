import React, { useContext, useEffect } from "react";
import "../../../style/SubmitForm.css";
import FormContext from "../../../context/FormContext";
import { notification } from "antd";

const SubmitForm = () => {
  const { formData, setFormSubmitted, formSubmitted } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      notification.success({
        message: "Form Submitted",
        description: "Your form has been submitted successfully!",
      });
      // formData !== "" && console.log(formData);
      console.log("formData", formData);
    }

    setFormSubmitted(false);
  }, [setFormSubmitted, formData]);

  return (
    <button onClick={handleSubmit} className="submit">
      submit
    </button>
  );
};

export default SubmitForm;
