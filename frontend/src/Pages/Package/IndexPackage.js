import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPackage = () => {
  const [packages, setPackages] = useState([]);
  // const URL = "http://localhost:3000/api"

  const getPackages = async () => {
    try {
      let temp = await axios({
        url: `http://localhost:3000/package`,
        method: "GET"
      });
      console.log(temp.data);
      setPackages(temp.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    console.log("useEffect running");
    getPackages();
  }, []);

  return (
    <div className="container">
      <h3>Welcome to Package</h3>
    </div>
  );
};

export default IndexPackage;
