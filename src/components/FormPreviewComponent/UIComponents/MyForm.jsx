import React from "react";
import InputField from "./InputField";
import SelectDropdown from "./SelectDropdown";
import RadioGroup from "./RadioGroup";
import "../../../style/MyForm.css";
import Group from "./Group";

const MyForm = ({ jsonData }) => {
  return (
    <>
      {jsonData &&
        jsonData.map((item) => {
          switch (item.uiType) {
            case "Input":
              return (
                <div className="div_group" key={item.jsonKey}>
                  <InputField
                    data={item}
                    jsonKey={item.jsonKey}
                    defaultValue={item.validate.defaultValue}
                  />
                </div>
              );

            case "Radio":
              return (
                <div className="div_group" key={item.jsonKey}>
                  <RadioGroup
                    data={item}
                    jsonKey={item.jsonKey}
                    defaultValue={item.validate.defaultValue}
                  />
                </div>
              );

            case "Select":
              return (
                <div className="div_group" key={item.jsonKey}>
                  <SelectDropdown data={item} />
                </div>
              );

            case "Group":
              return (
                <div className="div_group" key={item.jsonKey}>
                  <Group data={item} />
                  <MyForm
                    jsonData={item.subParameters.sort(
                      (a, b) => a.sort - b.sort
                    )}
                  />
                </div>
              );

            default:
              return null;
          }
        })}
    </>
  );
};

export default MyForm;
