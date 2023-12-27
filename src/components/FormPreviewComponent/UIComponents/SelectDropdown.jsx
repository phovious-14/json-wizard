import React, { useContext, useState, useEffect } from "react";
import "../../../style/SelectDropdown.css";
import Require from "./Require";
import FormContext from "../../../context/FormContext";
import Tooltips from "./Tooltips";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const SelectDropdown = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState({
    [data.jsonKey]: data.validate.defaultValue,
  });
  const { handleFormData, formSubmitted } = useContext(FormContext);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOption({ [name]: value });
  };

  // Set default value and update when JSON data changes
  useEffect(() => {
    setSelectedOption({ [data.jsonKey]: data.validate.defaultValue });
  }, [data.validate.defaultValue, data.jsonKey]);

  useEffect(() => {
    if (formSubmitted) {
      handleFormData(selectedOption);
      // Clear selectedOption after form submission if needed
      setSelectedOption({});
    }
  }, [formSubmitted, selectedOption, handleFormData]);

  return (
    <div className="select-dropdown-container">
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
      <select
        value={selectedOption[data.jsonKey]}
        name={data.jsonKey}
        onChange={handleSelectChange}
      >
        {data.validate.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
