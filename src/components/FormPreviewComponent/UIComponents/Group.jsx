import React from "react";
import Require from "./Require";
import "../../../style/Group.css";
import Tooltips from "./Tooltips";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Group = ({ data }) => {
  return (
    <div className="input-field-container group_type">
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
    </div>
  );
};

export default Group;
