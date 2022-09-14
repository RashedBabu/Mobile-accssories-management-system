import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDisplay } from "../../../api/display";

const AllDisplay = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadDisplay();
  }, []);

  const loadDisplay = async () => {
    const response = await getDisplay();
    setUsers(response.data);
    console.log("Axios All Display success: ", response);
  };

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <div className="card card_table">
        <div className="card-body">
          <div className="card-title">
            <div className="table">
              <h1 className="table_text " align="center ">
                Display Table List
              </h1>
              <div className="form-group input-group form_margin">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  className="form-control form_input "
                  placeholder="Search ... "
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <table class="table table-hover table-fixed">
                <thead align="center">
                  <tr className="table_header">
                    <th scope="col">Box_No</th>
                    <th scope="col">P_Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">T-Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody className="table_body" align="center">
                  {users
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.productName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.boxNumber
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.modelName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((display, key) => (
                      <tr key={key}>
                        <td className="th_color" scope="row">
                          {display.boxNumber}
                        </td>
                        <td className="td_color">{display.productName} </td>
                        <td className="th_color">{display.modelName} </td>
                        <td className="td_color">{display.quantity} </td>
                        <td className="th_color">{display.allQuantity} </td>
                        <td className="td_color">{display.price} Tk </td>
                        <td className="th_body">{display.date} </td>
                        <td>
                          <Link
                            className="btn btn-outline-primary mr-2"
                            to={`/user/dashboard/display/edit/${display._id}`}
                          >
                            <i class="fas fa-pen"></i>
                          </Link>
                          {/* <Link className="btn btn-outline-danger">
                              <i
                                className="far fa-trash-alt"
                                // onClick={() => deleteDisplayData(display._id)}
                              ></i>
                            </Link> */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDisplay;
