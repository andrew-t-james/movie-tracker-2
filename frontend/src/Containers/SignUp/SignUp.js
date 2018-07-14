import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignUpRequest } from '../../helpers/apiCalls';
import * as actions from '../../Actions';

export class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      email:'',
      password: '',
      failedSignUp: false,
      error: null
    };
  }

  handleChange=(event)=> {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userName, email, password } = this.state;
    try {
      const newUserData = await userSignUpRequest(userName, email, password);
      this.props.handleUserSignUp(newUserData);
    } catch (error) {
      this.setState({ error, failedSignUp: true });
    }
    this.setState({userName: '', email: '', password: ''});
  }

  render() {
    return (
      <section className="sign-up">
        <h1 className="sign-up__title">Sign Up</h1>
        {this.state.failedSignUp && <p className="sign-up__error">{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            name="userName"
            className="form__input"
            value={this.state.userName}
          />
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Email"
            name="email"
            className="form__input"
            value={this.state.email}
          />
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
            className="form__input"
            value={this.state.password}
          />
          <button className="form__button">Sign Up</button>
        </form>
      </section>
    );
  }
}

// export const mapStateToProps = (state) => ({
//   userInfo: state.userInfo
// });

export const mapDispatchToProps = (dispatch) => ({
  handleUserSignUp: (newUserData) => dispatch(actions.userSignUp(newUserData))
});

export default connect(null, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  handleUserSignUp: PropTypes.func
};