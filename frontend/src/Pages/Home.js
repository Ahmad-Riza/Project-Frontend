import React from "react";
import SideNav from "../components/global/SideNav";
import MenuBar from "../components/global/MenuBar";
import Footer from "../components/global/Footer";
import Content from "../components/global/Content";

const Home = () => {
  return (
    <div>
      <MenuBar />
      <SideNav />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
