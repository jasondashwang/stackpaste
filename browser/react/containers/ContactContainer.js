import React, { Component } from 'react';
import Contact from '../components/Contact';
import { connect } from 'react-redux';
import { submitMessage, validateEmail } from '../utilities/utils';

class ContactContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
      response: 'Send Message',
      disabled: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    this.setState({
      name: evt.target.value
    });
  }

  handleEmailChange (evt) {

    this.setState({
      email: evt.target.value
    });
  }

  handleMessageChange (evt) {
    this.setState({
      body: evt.target.value
    });
  }

  handleReset (evt) {
    evt.preventDefault();

    this.setState({
      name: '',
      email: '',
      body: ''
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const name = this.state.name,
          email = this.state.email,
          body = this.state.body;

    if (name.length === 0) {
      this.setState({
        name: 'Name must not be an empty field'
      });
      return;
    }

    if (email.length === 0) {
      this.setState({
        email: 'Email must not be an empty field'
      });
      return;
    }

    if (!validateEmail(email)) {
      this.setState({
        email: 'Must be a valid email format'
      });
      return;
    }

    if (body.length === 0) {
      this.setState({
        body: 'Message must not be an empty field'
      });
      return;
    }

    submitMessage(name, email, body)
    .then(res => {
      this.setState({
        response: res,
        disabled: true
      });
    });
  }


  render () {
    return (
      <Contact
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handleMessageChange={this.handleMessageChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        response={this.state.response}
        disabled={this.state.disabled}
        name={this.state.name}
        email={this.state.email}
        body={this.state.body}
      />
    );
  }
}

export default connect(null, null)(ContactContainer);
