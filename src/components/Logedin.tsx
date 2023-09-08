import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logedin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3333/authen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        console.log(data.decoded);
        if (data.success === true) {
          alert("authen success")
        } else {
          alert("authen fail");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>Logedin</div>
  )
}

export default Logedin;
