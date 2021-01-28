import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import * as actionTypes from './actions/actions';
import './App.css';

class App extends Component {
  // state = {
  //   likes: 777,
  // };

  // addHandler = () => {
  //   this.setState({ likes: this.state.likes + 1 });
  // };
  // removeHandler = () => {
  //   this.setState({ likes: this.state.likes - 1 });
  // };
  // resetHandler = () => {
  //   this.setState({ likes: 777 });
  // };

  render() {
    return (
      <>
        <main>
          <div className="counter-container">
            <div className="result">{this.props.ctr}</div>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
              <Button onClick={this.props.onIncCounter}>Like</Button>
              <Button onClick={this.props.onDecCounter}>Dislike</Button>
              <Button onClick={this.props.resetCounter}>Reset</Button>
            </ButtonGroup>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({type: "INCREMENT"}),
    onDecCounter: () => dispatch({type: "DECREMENT"}),
    resetCounter: () => dispatch({type: "RESET"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);