import React, { useState } from "react";
import Timer from "./Components/Timer";
import SignIn from "./SignIn";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <SignIn />
      <Timer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/timer" element={<Timer />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
