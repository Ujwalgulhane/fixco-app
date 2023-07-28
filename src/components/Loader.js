import React from 'react';

import HashLoader from "react-spinners/HashLoader";
function ShowDetail() {
  return (
    <div className="loadercenter">
        <HashLoader
    className="spin"
    color={"#670b0b"}
    size={70}
  />
    </div>
  );
}

export default ShowDetail;
