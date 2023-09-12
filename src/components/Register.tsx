import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Register = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
    birthday: null as Date | null,
  });

  useEffect(() => {
    const isComplete = checkFormCompleteness(); // เรียกฟังก์ชันเช็กความครบถ้วนของฟอร์ม
    setIsFormComplete(isComplete);
  }, [formData]);

  const checkFormCompleteness = ():boolean => {
    // ตรวจสอบความครบถ้วนของฟอร์ม
    return formData.fname &&
      formData.lname &&
      formData.mobile &&
      formData.email &&
      formData.password &&
      formData.gender &&
      formData.birthday !== null
      ? true
      : false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (event.target.type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const isComplete = checkFormCompleteness(); // เรียกฟังก์ชันเช็กความครบถ้วนของฟอร์ม
      setIsFormComplete(isComplete);

      const res = await fetch("http://localhost:3333/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: formData.fname,
          lname: formData.lname,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
          birthday: formData.birthday,
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log(formData);
      // ล้างค่าในฟอร์ม
      setFormData({
        fname: "",
        lname: "",
        mobile: "",
        email: "",
        password: "",
        gender: "",
        birthday: null as Date | null,
      });
    } catch (error) {
      console.error(error);
    }
    alert("สมัครสมาชิกเรียบร้อย");
  };
  return (
    <>
      <header className="flex">
        <Nav />
      </header>
      <main className=" flex flex-auto mt-[72px] py-[40px] px-0 ">
        <section className="bg-[#fff] w-[480px] my-[0] mx-auto overflow-hidden rounded-[10px]">
          <div className="text-[#fff] bg-[url(https://www.swensens1112.com/images/card-head.png)] flex flex-col h-[240px] py-[32px] px-[40px] justify-center items-start bg-cover bg-top">
            <div className="">
              <h2 className="text-inherit text-[32px]">Register</h2>
              <p className="text-inherit">
                Register to start your sweet journer
              </p>
            </div>
          </div>
          <div className="p-[40px]">
            <div>
              <form onSubmit={handleSubmit}>
                <section className="flex rerative h-auto mx-[-8px]">
                  <section className="px-[8px] w-1/2 mx-0">
                    <label>
                      <p>First Name</p>
                      <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        autoComplete="off"
                        className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                      />
                    </label>
                  </section>
                  <section className="px-[8px] w-1/2 mx-0">
                    <label>
                      <p>Last Name</p>
                      <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        autoComplete="off"
                        className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                      />
                    </label>
                  </section>
                </section>
                <section className="rerative h-auto mt-[16px] mb-[16px]">
                  <label>
                    <p>Mobile no.</p>
                    <input
                      type="tel"
                      name="mobile"
                      pattern="[0-9]{10}"
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="off"
                      className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                    />
                  </label>
                </section>
                <section className="rerative h-auto mb-[16px]">
                  <label>
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                    />
                  </label>
                </section>
                <section className="rerative h-auto mb-[16px]">
                  <label>
                    <p>Password</p>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                    />
                  </label>
                </section>
                <section className="rerative h-auto mb-[16px]">
                  <label>
                    <div>Gender (optional)</div>
                    <div className="flex mx-[-8px] mt-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        id="male-radio"
                      />
                      <label
                        htmlFor="male-radio"
                        className="h-auto mx-[8px] py-[12px] px-[32px] rounded-[30px] border-solid border-[1px] border-[#d2d2d2]"
                      >
                        Male
                      </label>

                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        id="female-radio"
                      />
                      <label
                        htmlFor="female-radio"
                        className="h-auto mx-[8px] py-[12px] px-[32px] rounded-[30px] border-solid border-[1px] border-[#d2d2d2]"
                      >
                        Female
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        value="not specified"
                        checked={formData.gender === "not specified"}
                        onChange={handleChange}
                        id="not-specified-radio"
                      />
                      <label
                        htmlFor="not-specified-radio"
                        className="h-auto mx-[8px] py-[12px] px-[30px] rounded-[30px] border-solid border-[1px] border-[#d2d2d2]"
                      >
                        Not Specified
                      </label>
                    </div>
                  </label>
                </section>
                <section className="rerative h-auto mb-[16px]">
                  <label>
                    <p>Your birthday present is waiting</p>
                    <section className="w-full">
                    <DatePicker
                      selected={
                        formData.birthday ? new Date(formData.birthday) : null
                      }
                      onChange={(date) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          birthday: date,
                        }));
                      }}
                      dateFormat="dd/MM/yyyy"
                      className="border-[#d2d2d2] border-solid border-[1px] w-full h-[48px] py-[4px] px-[11px] rounded-[10px]"
                    />
                    </section>
                  </label>
                </section>
                <section className="rerative h-auto mt-[16px] mb-0">
                  <button
                    type="submit"
                    disabled={!isFormComplete}
                    className="w-full h-[48px] bg-[#f4f4f4] rounded-[20px]"
                  >
                    Register
                  </button>
                </section>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
