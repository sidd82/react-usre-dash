import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const handleSubmit = async () => {
    try {
      const response = await Axios.get(`https://api.one-o.in/api/auth/user`, {
        withCredentials: true,
        headers: {
          "x-api-key": process.env.X_API_KEY,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div className="App">
      <button onClick={handleSubmit} style={{ backgroundColor: "red" }}>
        Click
      </button>
    </div>
  );
}

export default App;
