import React from "react";

function Quotes({ left, right }) {
  return (
    <div className="quotes">
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
}

export default Quotes;
