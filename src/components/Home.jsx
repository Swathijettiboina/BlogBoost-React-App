import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-rows-1">
        <Blogs />
      </div>
      <div className="p-4 h-auto bg-blue-200 md:p-8 lg:p-10 w-full dark:bg-gray-800">
        <Footer />
      </div>
    </>
  );
};
export default Home;
