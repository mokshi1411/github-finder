import React from "react";

function Clear({clearkardosab}) {
  return (
    <div>
      <input type="button"
       value="clear" 
       className="btn btn-light btn-block" 
       onClick={()=>{
        clearkardosab();
       }}/>
    </div>
  );
}

export default Clear;
