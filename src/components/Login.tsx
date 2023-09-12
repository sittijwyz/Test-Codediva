import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const isComplete = checkFormCompleteness(); // เรียกฟังก์ชันเช็กความครบถ้วนของฟอร์ม
    setIsFormComplete(isComplete);
  }, [email, password]);

  const checkFormCompleteness = ():boolean => {
    return email != "" && password != "" ? true : false;
  };
  const showPasswordInput = ():void => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (event:React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === true) {
        localStorage.setItem("token", data.token);
        navigate("/HomeLogin");
      } else {
        alert("Invalid Password");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="py-[40px] mt-[72px] bg-[##f0f2f5] h-screen">
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-[480px] content-center">
            <section className="flex flex-col p-[40px] justify-center  bg-page-login bg-[100%] bg-cover w-hull h-[240px] ">
              <div className="text-[#fff]">
                <h2 className="text-[32px]">Welcome</h2>
                <p>Login to begin journey</p>
              </div>
            </section>
            <section className="p-[40px] bg-[#fff]">
              <div>
                <form onSubmit={handleSubmit}>
                  <section className="relative mx-0 h-auto mb-[16px]">
                    <label>
                      <p>Email</p>
                      <section className="h-[48px]">
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter email"
                          value={email}
                          required
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-[#d2d2d2] border-solid border-[1px] w-full h-full py-[4px] px-[11px] rounded-[10px]"
                        />
                      </section>
                    </label>
                  </section>
                  <section className="relative mx-0 h-auto mb-[16px]">
                    <label>
                      <p>Password</p>
                      <section className="h-[48px]">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Password"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          className="border-[#d2d2d2] border-solid border-[1px] w-full h-full py-[4px] px-[11px] rounded-[10px]"
                        />
                        <button
                          type="button"
                          onClick={showPasswordInput}
                          className="absolute top-1/2 right-2 "
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </section>
                    </label>
                  </section>
                  <section className="relative mx-0 h-auto mb-[16px]">
                    <button
                      type="submit"
                      disabled={!isFormComplete}
                      className="w-full h-[48px] bg-[#f4f4f4] rounded-[20px]"
                    >
                      <span>Login</span>
                    </button>
                  </section>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
