import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import * as actions from './Phonebook.actions';
import '../assets/stylesheets/App.css';


class PhoneBook extends React.Component {
  componentDidMount() {
      console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phoneBook: state
  };
}

export default connect(mapStateToProps, actions)(PhoneBook);
