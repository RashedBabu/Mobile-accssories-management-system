import React from "react";
import AddDisplay from "./addDisplay";
import AllDisplay from "./allDisplay";

const DisplayDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
            <AllDisplay />
          </div>
          <div className="col-md-4">
            <AddDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayDashboard;
