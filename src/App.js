import React from "react";
import JsonEditor from "./components/JsonEditorComponent/JsonEditor/JsonEditor";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/ext-language_tools";
import FormPreview from "./components/FormPreviewComponent/FormPreview";
import "./App.css";
import { FormContextProvider } from "./context/FormContext";

function App() {
  return (
    <div className="main_container">
      <JsonEditor />
      <FormContextProvider>
        <FormPreview />
      </FormContextProvider>
    </div>
  );
}

export default App;
