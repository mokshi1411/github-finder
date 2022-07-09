import React from "react";

const Alert = ({ alertInfo }) => {
  return (
    alertInfo !== null && (
      <div className={`alert alert-${alertInfo.type}`}>
        <i className="fas fa-info-circle" />
        {alertInfo.msg}
      </div>
    )
  );
};

export default Alert;
