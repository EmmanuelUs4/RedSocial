import React from "react";
import "./users.scss";
import UserFilter from "../../components/userFilter/UserFilter";
import HeaderProfile from "../../components/headerProfile/HeaderProfile";

const users = () => {
  return (
    <>
      <div>
      <HeaderProfile />
      </div>
      <div className="containerFilter">
        <UserFilter />
      </div>
    </>
  );
};
export default users;
