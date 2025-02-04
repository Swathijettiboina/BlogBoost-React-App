import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
// import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-rows-1">
        <Blogs />
      </div>
      {/* <Footer/> */}
    </>
  );
};
export default Home;
