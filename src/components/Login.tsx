import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event:any) => {
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
        localStorage.setItem("token",data.token)
        navigate("/logedin");
      } else {
        alert("รหัสผิดนะจ๊ะเด็กๆ");
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
      <main className="pt-[72px] bg-slate-200 h-screen">
        <section className="flex w-[480px] content-center">
          <div>
            <img src="https://www.swensens1112.com/images/card-head.png" alt="" />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="PASSWORD"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">LOGIN</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
