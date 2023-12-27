import React, { useContext } from "react";
import MainContext from "../../../context/MainContext";

const ActionButtons = ({ data, setData, isValidJson }) => {
  const { setJsonData, setUpdatedJsonData } = useContext(MainContext);

  const handleClear = () => {
    setData("");
    setJsonData("");
    setUpdatedJsonData(true);
  };

  const handleFormatJson = () => {
    isValidJson && setData(JSON.stringify(JSON.parse(data), null, 2));
  };

  const handleGenerate = () => {
    if (isValidJson) {
      setJsonData(JSON.parse(data).sort((a, b) => a.sort - b.sort));
      setUpdatedJsonData(true);
    }
  };

  return (
    <div className="action_btn">
      <button onClick={handleClear}>Clear editor</button>
      <button onClick={handleFormatJson}>Format Document</button>
      <button onClick={handleGenerate} className="submit">
        Generate
      </button>
    </div>
  );
};

export default ActionButtons;
