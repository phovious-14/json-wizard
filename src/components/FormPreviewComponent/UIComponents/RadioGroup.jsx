import React, { useEffect, useState, useContext } from "react";
import "../../../style/RadioGroup.css";
import Require from "./Require";
import FormContext from "../../../context/FormContext";
import Tooltips from "./Tooltips";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const RadioGroup = ({ data }) => {
  const { handleFormData, formSubmitted } = useContext(FormContext);

  // Use the defaultValue from data.validate or an empty string as the default value
  const [radioValue, setRadioValue] = useState(
    data.validate.defaultValue !== "" ? data.validate.defaultValue : ""
  );

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setRadioValue(value);
  };

  useEffect(() => {
    formSubmitted && handleFormData({ [data.jsonKey]: radioValue });
  }, [formSubmitted, radioValue, data.jsonKey, handleFormData]);

  // Update the default value if the JSON data changes
  useEffect(() => {
    setRadioValue(
      data.validate.defaultValue !== "" ? data.validate.defaultValue : ""
    );
  }, [data.validate.defaultValue]);

  return (
    <div className="radio-group-container">
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
      <hr style={{ width: "100%", borderColor: "#fff" }} />
      <div className="radio-opts">
        {data.validate.options.map((option) => (
          <div key={option.value} className="radio-option">
            <input
              type="radio"
              name={data.jsonKey}
              id={option.value}
              value={option.value}
              checked={radioValue === option.value}
              onChange={handleRadioChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
