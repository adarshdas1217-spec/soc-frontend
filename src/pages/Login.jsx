import React, { useState } from "react";
import api from "../services/api";

function Login({ onLogin }) {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await api.post("/auth/login", {
            email,
            password
         });

         localStorage.setItem("token", res.data.token);
         onLogin();

      } catch (err) {
         setError("Invalid credentials");
      }
   };

   return (
      <div style={{
         background: "#0f172a",
         height: "100vh",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         color: "#e2e8f0"
      }}>

         <form
            onSubmit={handleSubmit}
            style={{
               background: "#1e293b",
               padding: 40,
               borderRadius: 10,
               width: 350,
               boxShadow: "0 0 20px rgba(0,0,0,0.6)"
            }}
         >
            <h2 style={{ marginBottom: 20, color: "#38bdf8" }}>
               🔐 SOC360 Login
            </h2>

            {error && (
               <div style={{ color: "red", marginBottom: 10 }}>
                  {error}
               </div>
            )}

            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               style={inputStyle}
               required
            />

            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               style={inputStyle}
               required
            />

            <button style={buttonStyle}>
               Login
            </button>
         </form>
      </div>
   );
}

const inputStyle = {
   width: "100%",
   padding: 12,
   marginBottom: 15,
   borderRadius: 5,
   border: "none"
};

const buttonStyle = {
   width: "100%",
   padding: 12,
   background: "#38bdf8",
   border: "none",
   borderRadius: 5,
   fontWeight: "bold",
   cursor: "pointer"
};

export default Login;
