import React from "react";
import { Link } from "react-router-dom";
import IndexVehicle from "../../Pages/Vehicle/IndexVehicle";

const Content = () => {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Data Kendaraan</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Blank Page</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <div className="card">
          <div className="table table-bordered">
            <IndexVehicle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
