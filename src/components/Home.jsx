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
      <div className="p-1 h-auto fixed bottom-0 bg-gray-200  w-full dark:bg-gray-800">
        <Footer />
      </div>
    </>
  );
};
export default Home;
