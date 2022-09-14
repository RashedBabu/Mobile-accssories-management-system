import React from "react";
import AddLcd from "./AddLcd";
import AllLcd from "./AllLcd"

const LcdDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
              <AllLcd/>
          </div>
          <div className="col-md-4">
            <AddLcd />
          </div>
        </div>
      </div>
    </>
  );
};

export default LcdDashboard;
