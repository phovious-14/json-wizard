import React from "react";
import Require from "./Require";
import "../../../style/Group.css";
import Tooltips from "./Tooltips";
import { Tooltip } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";

const Group = ({ data }) => {
  return (
    <div className="input-field-container group_type">
      <label>
        {data.label}
        {data.validate.required && <Require />}
        {data.description && (
          <Tooltip title={Tooltips(data.label, data.description)}>
            <span>
              <InfoCircleFilled />
            </span>
          </Tooltip>
        )}
      </label>
      <hr style={{ width: "100%", borderColor: "#fff" }} />
    </div>
  );
};

export default Group;
