import React, { useState } from "react";
import AceEditor from "react-ace";
import CopySyntax from "../CopySyntax/CopySyntax";
import ActionButtons from "../ActionButtons/ActionButtons";
import ValidateJson from "../ValidateJson/ValidateJson";
import logo from "../../../assets/logo.png";

const JsonEditor = () => {
  const [isValidJson, setIsValidJson] = useState(false);
  const [data, setData] = useState("[]");

  const handleJsonChange = (newJsonContent) => {
    setData(newJsonContent);
    validateJson(newJsonContent);
  };

  const validateJson = (content) => {
    try {
      const pattern = /(\{\s*\}|\[\s*\])/;

      content = content.trim();

      if (pattern.test(content) || content[0] !== "[") {
        setIsValidJson(false);
      } else {
        JSON.parse(content);
        setIsValidJson(true);
      }
    } catch (error) {
      setIsValidJson(false);
    }
  };
  return (
    <div className="semi_container">
      <img src={logo} alt="" />
      <CopySyntax />
      <AceEditor
        mode="json"
        value={data}
        onChange={handleJsonChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        style={{ width: "100%", height: "88%" }}
      />
      <div className="json_footer">
        <ValidateJson isValidJson={isValidJson} />
        <ActionButtons
          data={data}
          setData={setData}
          isValidJson={isValidJson}
        />
      </div>
    </div>
  );
};

export default JsonEditor;
