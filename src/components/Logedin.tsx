// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavLogedin from "./NavLogedin";

// export interface UserData {
//     fname: string;
//     lname: string;
//     mobile: string;
//     email: string;
//     password: string;
//     gender: string;
//     birthday: string;
// }

// const Logedin = () => {
//   const [user, setUser] = useState<UserData|null>(null);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   useEffect(() => {
//     const fetchData = async ():Promise<void> => {
//       try {
//         const res = await fetch("http://localhost:3333/authen", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         console.log(data);
//         if (data.success === true) {
//           // alert("authen success");
//           setUser(data.user);
          
//         } else {
//           alert("authen fail");
//           localStorage.removeItem("token");
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {user && (
//         <>
//           <NavLogedin user={user} />
//           <h2>{user.fname} {user.lname}</h2>
//         </>
//       )}
//     </div>
//   );
// };

// export default Logedin;
