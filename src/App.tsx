// import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <main className="flex flex-col mt-[72px]">
        <section className="relative py-[100px] bg-gradient-to-b from-[#ff807c] to-[#fd4b47] w-full ">
          <div className="max-w-[1200px] mx-auto px-[24px]">
            <div className="flex items-center mx-[-15px] ">
              <section className="px-[15px] w-[50%]">
                <div className="text-[#fff] ">
                  <h1 className="text-[40px] font-[500] ">
                    สมัครเป็นสมาชิก
                    <br />
                    สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
                  </h1>
                  <article className="text-[18px] mt-[16px]">
                    <p className="m-0">
                      พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้ ยิ่งคุ้ม
                      ใครๆก็สมัครได้ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ
                      รอไม่ได้แล้ว สมัครเลย
                    </p>
                  </article>
                  <div className="relative h-auto mx-0 ">
                    <div className="lg:w-[50%] md:w-[50%] sm:w-[100%]">
                      <div className="mt-[40px]">
                        <Link
                          to="https://www.swensens1112.com/en/delivery"
                          target="_black"
                        >
                          <img
                            src="https://www.swensens1112.com/images/button/EN_normal.svg"
                            alt="delevery now"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="px-[15px] w-[50%]">
                <img
                  src="https://www.swensens1112.com/images/banner-image.svg"
                  alt="banner"
                  className="block w-full max-h-full h-auto"
                />
              </section>
            </div>
          </div>
        </section>
        <section className="pt-[64px] pb-[80px]">
          <div className="px-[24px] my-0 mx-[auto] max-w-[1200px]">
            <section className="mb-[28px]">
              <h2 className="flex items-center justify-between text-[32px] text-black">
                Super deal
              </h2>
            </section>
            <section className="pb-[30px] overflow-hidden">
              <div className="relative mx-[-12px] h-[172px] ">
                <div className="relative overflow-hidden w-full h-full">
                  <div className="relative top-0 left-0 w-[654px] opacity-100">
                    <section className="w-[327px] h-full float-left">
                      <div>
                        <div className="px-[12px] rounded-[12px] overflow-hidden w-full">
                          <Link
                            to="https://www.facebook.com/100069194975161/posts/pfbid02JEGMnwZZvjKUtpC3hcEQkUBcbgWmGxTZaazgitHepb19s9YxaXw9ybyGwDvX7cr7l/?mibextid=cr9u03"
                            target="_blank"
                          >
                            <div className=" relative list-item h-full w-full rounded-[12px] bg-[50%] bg-contain bg-no-repeat">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FAW_SW 9.9 Campaign AUG23_1440x810-01.jpg?alt=media"
                                alt="promote1"
                                className="rounded-[12px]"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </section>
                    <section className="w-[327px] h-full float-left">
                      <div>
                        <div className="px-[12px] rounded-[12px] overflow-hidden w-full">
                          <Link
                            to="https://www.facebook.com/100069194975161/posts/pfbid02JEGMnwZZvjKUtpC3hcEQkUBcbgWmGxTZaazgitHepb19s9YxaXw9ybyGwDvX7cr7l/?mibextid=cr9u03"
                            target="_blank"
                          >
                            <div className="relative list-item h-full w-full rounded-[12px] bg-[50%] bg-contain bg-no-repeat">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FSW Toasty Sundae_KV 1440x810px_0.jpg?alt=media"
                                alt="promote2"
                                className="rounded-[12px]"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-[56px]">
            <div className="px-[24px] my-0 mx-[auto] max-w-[1200px]">
              <div className="mb-[28px]">
                <h2 className="flex text-[32px] items-center justify-between m-0 text-black">
                  News
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-download bg-[50%] bg-no-repeat bg-cover pt-[70px]">
          <div className="px-[24px] my-0 mx-[auto] max-w-[1200px]">
            <div className="flex items-center ">
              <section className="ml-[8.3%] w-[41.67%]">
                <div>
                  <img
                    src="https://www.swensens1112.com/images/app-screen-webp.webp"
                    alt="img-app"
                    className="w-full h-auto"
                  />
                </div>
              </section>
              <section className="ml-[4.16%] w-[37.5%]">
                <div>
                  <h2 className="text-[40px] mb-[24px] text-black">
                    Download on
                  </h2>
                  <div>
                    <div className="flex relative h-auto mx-[-12px] ">
                      <section className="px-[12px] w-[50%]">
                        <Link to="" target="">
                          <img
                            src="	https://www.swensens1112.com/images/google-play.png"
                            alt="play store"
                            className="w-full h-auto"
                          />
                        </Link>
                      </section>
                      <section className=" px-[12px] w-[50%]">
                        <Link to="" target="">
                          <img
                            src="	https://www.swensens1112.com/images/app-store.png"
                            alt="app store"
                            className="w-full h-auto"
                          />
                        </Link>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
