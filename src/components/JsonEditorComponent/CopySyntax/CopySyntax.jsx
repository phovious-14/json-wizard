import React from "react";

import CopyToClipboard from "react-copy-to-clipboard";
import DummyInputJson from "../JsonSyntaxComponents/DummyInputJson.json";
import DummySelectJson from "../JsonSyntaxComponents/DummySelectJson.json";
import DummyRadioJson from "../JsonSyntaxComponents/DummyRadioJson.json";
import DummyGroupJson from "../JsonSyntaxComponents/DummyGroupJson.json";

const CopySyntax = () => {
  return (
    <div className="json_header">
      <CopyToClipboard text={JSON.stringify(DummyInputJson, null, 2)}>
        <button title="Copy syntax of input">Input</button>
      </CopyToClipboard>
      <CopyToClipboard text={JSON.stringify(DummySelectJson, null, 2)}>
        <button title="Copy syntax of select">Select</button>
      </CopyToClipboard>
      <CopyToClipboard text={JSON.stringify(DummyRadioJson, null, 2)}>
        <button title="Copy syntax of radio">Radio</button>
      </CopyToClipboard>
      <CopyToClipboard text={JSON.stringify(DummyGroupJson, null, 2)}>
        <button title="Copy syntax of group">Group</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopySyntax;
