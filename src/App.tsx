import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const axiosInstance = axios.create({ baseURL: "" });
  return (
    <div className="App">
      <button
        onClick={() => {
          axiosInstance.get("/aaa").then((res) => {
            console.log(res);
          });
        }}
      >
        aaaa
      </button>
    </div>
  );
}

export default App;
