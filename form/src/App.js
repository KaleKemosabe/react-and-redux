import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Form from "./Components/Form/Form"
import Result from "./Components/Result/Result"
import Popup from "./Components/Popup/Popup"

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopup: false,
  };

  changeValueHandler = (event) => {
    console.log("testing stuff");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    console.log("testing stuff again");
    this.setState({
      showPopup: true,
    });
// use preventDefault to keep the popup on screen
    event.preventDefault();
  };

  render() {
    return (
      <>
      <Header />
      <div className="main-area">
        <Form onChange={this.changeValueHandler} submit={this.submitHandler} />
        <Result 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message} 
        />
      </div>
      {this.state.showPopup && (
        <Popup
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
      )}
      <Footer />
      </>
    );
  }
}

export default App;
