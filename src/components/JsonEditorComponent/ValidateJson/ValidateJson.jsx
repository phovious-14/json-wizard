import React from "react";

const ValidateJson = ({ isValidJson }) => {
  return (
    <>
      {isValidJson ? (
        <p
          className="status"
          style={{ backgroundColor: "#90EE90", color: "#1b1b1b" }}
        >
          Valid JSON
        </p>
      ) : (
        <p
          className="status"
          style={{ backgroundColor: "#FF474C", color: "white" }}
        >
          Invalid JSON or Add some data
        </p>
      )}
    </>
  );
};

export default ValidateJson;
