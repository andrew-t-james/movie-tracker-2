import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      email:'',
      password: ''
    };
  }

  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="email" name='email' value={this.state.email}/>
          <input onChange={this.handleChange} type="password" placeholder="password" name='password' value={this.state.value}/>
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
