import React from "react";

const IndexVehicle = () => {
  return (
    <div className="table table-bordered">
      <thead>
        <tr>
          <th>Nomor</th>
          <th>Nama Pemilik</th>
          <th>Nama Kendaraan</th>
          <th>Plat Nomor Kendaraan</th>
          <th>Nomor Telpon/WA</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Reza</td>
          <td>Honda</td>
          <td>B 5702 KJR</td>
          <td>081212341234</td>
          <th>
            <button className="btn btn-sm btn-danger">Remove</button>
            <button className="btn btn-sm btn-info">Edit</button>
          </th>
        </tr>
      </tbody>
    </div>
  );
};

export default IndexVehicle;
