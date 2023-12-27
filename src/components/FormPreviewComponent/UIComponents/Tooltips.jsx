import React from "react";

const Tooltips = (label, desc) => {
  return (
    <>
      <span>{label}</span>
      <hr />
      <span>{desc}</span>
    </>
  );
};

export default Tooltips;
