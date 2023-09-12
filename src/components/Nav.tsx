import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <header className=" flex w-full h-[72px] z-[1] pl-[24px] fixed bg-[#fff] justify-between items-center top-0">
        <div className="flex items-center mr-[24px] w-[103px] h-full ">
          <Link to="/" className="">
            <img
              src="https://cdn.minorfood.com/uploaded/brand/logo/large/15542614515ca425cb5c71a.png"
              alt="Logo Homepage"
            />
          </Link>
        </div>
        <div className="flex items-center ml-auto  h-full">
          <section className="mr-[24px] h-[48px] flex items-center justify-center w-[329px] text-gray-500 text-[20px]">
            <p>Select a delivery address </p>
          </section>
          <section className="mr-[24px] ">
            <Link to="/register">
              <button className="relative rounded-[50px] bg-[#fff] text-[#e21c23] border-[#e21c23] border-solid border-[1px] h-[48px] min-w-[140px] inline-block">
                Register
              </button>
            </Link>
          </section>
          <section className="mr-[24px]">
            <Link to="/login">
              <button className="relative rounded-[50px] text-[#fff] bg-[#e21c23] h-[48px] min-w-[140px] inline-block">
                Login
              </button>
            </Link>
          </section>
          <section className="flex justify-center items-center w-[89px]">
            <p>EN</p>
          </section>
        </div>
      </header>
  );
};

export default Nav;
