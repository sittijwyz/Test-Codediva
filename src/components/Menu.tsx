import React, { useState, useEffect } from "react";
import Footer from "./Footer";

interface Typemenu {
  menuId: number;
  menuName: string;
  menuPrice: number;
  menuType: string;
  menuImage: string;
}

function Menu() {
  const [menu, setMenu] = useState<Typemenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3333/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const menuType1 = menu.filter(
    (menuItem) => menuItem.menuType === "Ice Cream - Cake"
  );
  const menuType2 = menu.filter(
    (menuItem) => menuItem.menuType === "Ice Cream Quart"
  );

  return (
    <>
      <section className="w-full h-auto mt-[72px]">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/banner%2Fsw-banner.jpg?alt=media"
            alt="promotion"
          />
        </div>
      </section>
      <section className="flex flex-col w-full  px-[48px] bg-[#f4f2f2]">
        <div>
          <h1 className="text-[50px]">Ice Cream - Cake</h1>
          <div className="flex flex-wrap">
            {menuType1.map((menu) => (
              <div key={menu.menuName} className="w-1/4 px-[12px] py-[10px] h-auto">
                <img src={menu.menuImage} alt={menu.menuName} />
                <div className="bg-[#fff] ">
                <h3 className="text-[20px] text-black">{menu.menuName}</h3>
                <span className="text-[#e21c23] text-[20px] font-[500]">{menu.menuPrice} Bath</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full">
            <h1 className="text-[50px]">Ice Cream Quart (450g)</h1>
            <div className="flex flex-wrap">
              {menuType2.map((menu) => (
                <div key={menu.menuName} className="w-1/4 px-[12px] py-[10px] h-auto">
                  <img src={menu.menuImage} alt={menu.menuName} />
                  <div className="bg-[#fff] ">
                  <h3 className="text-[20px] text-black">{menu.menuName}</h3>
                  <span className="text-[#e21c23] text-[20px] font-[500]">{menu.menuPrice} Bath</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
export default Menu;
