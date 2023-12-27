import React, { useContext, useEffect, useState } from "react";
import "../../../style/InputField.css"; // Import the corresponding CSS file
import Require from "./Require";
import FormContext from "../../../context/FormContext";
import { Tooltip } from "antd";
import Tooltips from "./Tooltips";
import { InfoCircleOutlined } from "@ant-design/icons";

const InputField = ({ data }) => {
  const { handleFormData, formSubmitted } = useContext(FormContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ [name]: value });
  };

  useEffect(() => {
    if (formSubmitted) {
      handleFormData(inputValue);
    }
  }, [formSubmitted]);

  return (
    <div className="input-field-container">
      <label>
        {data.label}
        {data.validate.required && <Require />}
        {data.description && (
          <Tooltip title={Tooltips(data.label, data.description)}>
            <span>
              <InfoCircleOutlined
                style={{ fontSize: "14px", marginLeft: "5px" }}
              />
            </span>
          </Tooltip>
        )}
      </label>
      <input
        type="text"
        name={data.jsonKey}
        placeholder={data.placeholder}
        value={inputValue[data?.jsonKey] || ""}
        onChange={handleInputChange}
        required={data.validate.required}
      />
    </div>
  );
};

export default InputField;
