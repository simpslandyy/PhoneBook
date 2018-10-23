import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import * as actions from './Phonebook.actions';
import '../assets/stylesheets/App.css';


class PhoneBook extends React.Component {
  componentDidMount() {
      this.props.fetchContacts();
      console.log(this.props)
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">

          </div>

          <div className="col-4">
            Over Here
          </div>
        </div>
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
