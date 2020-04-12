import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_AGOOGLE_CLIENT_ID_WEB,
      });
    });
  });
  const handleSubmit = async () => {
    try {
      const response = await Axios.get(`https://api.one-o.in/api/auth/user`, {
        withCredentials: true,
        headers: {
          "x-api-key": "Si78757875",
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div className="App">
      <button onClick={handleSubmit} style={{ backgroundColor: "yellow" }}>
        Click
      </button>
      <button
        onClick={async () => {
          try {
            const auth2 = window.gapi.auth2.getAuthInstance();
            if (auth2 != null) {
              auth2
                .signOut()
                .then(auth2.disconnect().then(() => console.log("Success")));
            }
            const response = await Axios.get(
              `https://api.one-o.in/api/auth/user/sign-out`,
              {
                withCredentials: true,
                headers: {
                  "x-api-key": process.env.REACT_APP_AGOOGLE_CLIENT_ID_WEB,
                },
              }
            );
            console.log(response);
          } catch (e) {
            console.log(e.response.data);
          }
        }}
      >
        Signout
      </button>
    </div>
  );
}

export default App;
