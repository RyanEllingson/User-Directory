import React from "react";
import "./style.css";

function Userform(props) {
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control-plaintext" readOnly placeholder={"  " + props.name} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
    </div>
  );
}

export default Userform;
