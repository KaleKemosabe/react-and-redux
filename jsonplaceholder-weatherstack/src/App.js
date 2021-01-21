import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Weather from "./components/Weather/Weather";

const App = () => {
  return (
    <div>
      <Header />
      <Weather />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
