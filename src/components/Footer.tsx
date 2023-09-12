import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-[#fff]">
        <section className="flex p-[24px] bg-[#e21c23] h-[89px] text-[16px]">
          <div className="flex items-center h-full mr-[24px] ">
            <Link to="/" className="">
              <img
                src="https://cdn.minorfood.com/uploaded/brand/logo/large/15542614515ca425cb5c71a.png"
                alt="Logo Homepage"
                className="m-auto h-auto w-[160px] block overflow-hidden"
              />
            </Link>
          </div>
          <div className="inline-flex ml-auto items-center">
            <div>
              <ul className="flex flex-wrap my-[0] mx-[-12px]">
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    Brandsite
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    Privilege
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    Reward
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    My Coupon
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    Gift Voucher
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    Member Card
                  </Link>
                </li>
                <li className="px-[12px]">
                  <Link
                    to="https://www.facebook.com/weloveswensens/ "
                    target="blank"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex py-[16px] px-[24px] bg-[#cb191f]">
          <div>
            <ul className="flex flex-wrap">
              <li className="px-[8px]">
                <Link
                  to="https://www.facebook.com/weloveswensens/ "
                  target="blank"
                >
                  <img
                    src="https://www.swensens1112.com/images/icon-facebook.svg"
                    alt="facebook"
                  />
                </Link>
              </li>
              <li className="px-[8px]">
                <Link
                  to="https://www.instagram.com/we_love_swensens/ "
                  target="blank"
                >
                  <img
                    src="https://www.swensens1112.com/images/icon-instagram.svg"
                    alt="ig"
                  />
                </Link>
              </li>
              <li className="px-[8px]">
                <Link
                  to="https://www.youtube.com/channel/UCZg-uMHcpiqr3z1qiJCurIQ/videos "
                  target="blank"
                >
                  <img
                    src="https://www.swensens1112.com/images/icon-youtube.svg"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex ml-auto">
            <ul className="flex mx-[-12px]">
              <li className="px-[16px]">
                <Link
                  to="https://swensens1112.com/mobile/faq-en.html"
                  target="blank"
                >
                  FAQ
                </Link>
              </li>
              <li className="px-[16px]">
                <Link
                  to="https://www.swensens1112.com/en/terms-conditions"
                  target="blank"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="px-[16px]">
                <Link
                  to="https://www.swensens1112.com/en/privacy-policy"
                  target="blank"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
