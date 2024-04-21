import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../common/Footer";
import AllPosts from "../../components/AllPosts/AllPosts";
const home = () => {
  return (
    <>
      <Header />
      <AllPosts />
      <Footer/>
    </>
  );
};

export default home;
