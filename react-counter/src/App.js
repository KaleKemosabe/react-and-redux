import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    likes: 0,
  };

addHandler = () => {
  console.log('addHandler was clicked');
  this.setState({ likes: this.state.likes + 1 });
};
removeHandler = () => {
  console.log('removeHandler was clicked');
  if (this.state.likes > 0) {
    this.setState({ likes: this.state.likes - 1 });
  }
};
resetHandler = () => {
  console.log('resetHandler was clicked');
  this.setState({ likes: 0 });
};

render() {

  const isEven = this.state.likes % 2 === 0
  const bgColor = isEven ? 'burlywood' : 'chocolate'

    return (
      <>
        <Header />
        <main>
          <div className="counter-box">
            <Result isEven={isEven} likes={this.state.likes} color={bgColor}/>
              <div className="counter-buttons">
              <button onClick={this.addHandler}>+1</button>
              <button onClick={this.removeHandler}>-1</button>
              <button onClick={this.resetHandler}>Reset</button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
