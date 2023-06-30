import React from "react";
import {
  Blog,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
