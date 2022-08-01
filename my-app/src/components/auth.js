// import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Order from "../components/Order";
// const About = (props) => {
//   const history = useHistory();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   async function registerUser(event) {
//     event.preventDefault();

//     const response = await fetch("http://localhost:5000/api/user/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const data = await response.json();

//     console.log(data);
//   }
//   async function loginUser(event) {
//     event.preventDefault();

//     const response = await fetch("http://localhost:5000/api/user/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
// //<Order val="aaa"/>;
//     const data = await response.json();
//     console.log("user", data);
// 	// TODO Save token in localStorage

//     if (data) {

//       alert("Login successfull");
//       history.push("/");

//     } else {
//       alert("Please check your username and password");
//     }
//     console.log("I am data", data.userlog);
//   }
//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={registerUser}>
//         <br />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email"
//         />
//         <br />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//         />
//         <br />

//         <input type="submit" value="SUBMIT" />
//         <br />
//       </form>
//       <form onSubmit={loginUser}>
//         <input type="submit" value="SIGNIN" />
//       </form>
//     </div>
//   );
// };

// export default About;
