import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export interface User {
  user: {
    fname: string;
    lname: string;
    mobile: string;
    email: string;
    password: string;
    gender: string;
    birthday: string;
  };
}

const NavLogedin = (props: User) => {
  const navigate = useNavigate();
  const [sidepanelWidth, setSidepanelWidth] = useState("0");
  const { user } = props;
  console.log(user);

  const openNav = ():void => {
    setSidepanelWidth("320px");
  };

  const closeNav = ():void => {
    setSidepanelWidth("0");
  };

  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

  const handleLogout = ():void => {
    // ทำการลบข้อมูลเชิงที่เกี่ยวข้องกับการเข้าสู่ระบบที่คุณต้องการลบ เช่น token หรือข้อมูลอื่น ๆ
    localStorage.removeItem("token");

    // หลังจากลบข้อมูลแล้ว คุณสามารถเปลี่ยนเส้นทางไปยังหน้า Login หรือหน้าอื่นที่คุณต้องการ
    navigate("/login");
  };

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
        <section className="flex justify-center items-center w-[89px]">
          <p>EN</p>
        </section>
        <section>
          <div
            id="mySidepanel"
            className="sidepanel flex flex-col"
            style={{ width: sidepanelWidth }}
          >
            <a className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <section className="p-[24px]">
              <h2 className="text-[24px]">Welcome ☺ 🍨️</h2>
              <p className="text-[20px] mb-[0.5em] text-[#e21e23]">
                {user.fname} {user.lname}
              </p>
            </section>
            <section>
              <Link to ="/profile" >Profile</Link> 
            </section>
            <section className=" mt-auto ">
              <ul className="w-full">
                <li
                  onClick={handleLogout}
                  className="pl-[24px] py-[16px] h-auto"
                >
                  Logout
                </li>
              </ul>
            </section>
          </div>
          <button className="openbtn" onClick={openNav}>
            &#9776;
          </button>
        </section>
      </div>
    </header>
  );
};

export default NavLogedin;
