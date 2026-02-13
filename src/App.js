import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

   const [isAuthenticated, setIsAuthenticated] = useState(
      !!localStorage.getItem("token")
   );

   const handleLogin = () => {
      setIsAuthenticated(true);
   };

   const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
   };

   if (!isAuthenticated) {
      return <Login onLogin={handleLogin} />;
   }

   return (
      <div>
         <div style={{
            background: "#111827",
            padding: 10,
            textAlign: "right"
         }}>
            <button
               onClick={handleLogout}
               style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer"
               }}
            >
               Logout
            </button>
         </div>

         <Dashboard />
      </div>
   );
}

export default App;
