import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ImLeaf, ImInfo } from 'react-icons/im';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

<<<<<<< HEAD
    this.props.login(user)
=======
    this.props.login(user);
>>>>>>> e3509b07ac30b5d6371bcb04211cf1bf451ed298
  }

  renderErrors() {
    return(
      <div className='row'>
        <ul className='session-errors'>
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>
              {this.props.errors[error]}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <>
      <div className='container'>
        <div className='d-flex justify-content-center space-above'>
          <Link to='/'>
            <h1 className='title'>
              PlantPress<span className='leaf-icon'><ImLeaf/></span>&nbsp;&nbsp;
            </h1>
          </Link>&nbsp;&nbsp;
        </div>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='d-flex justify-content-center'>
            <h2 className='subtitle'>Welcome Back!</h2>
          </div>

          <div className='d-flex justify-content-center form-padding'>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className='session-input'
            />
          </div>

          <div className='d-flex justify-content-center form-padding'>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className='session-input'
            />
          </div>

          <div className='d-flex justify-content-center form-padding form-margin'>
            <button className='session-button'>Log In!</button>
          </div>
          <div className='d-flex justify-content-center form-padding form-margin'>
            <Link className='purple bold' to='/signup'>
              Create A New Account
            </Link>
          </div>
          {this.renderErrors()}
        </form>
      </div>
      <div className='info-icon-bottom'>
        <ImInfo />
      </div>
      </>
    );
  }
}

export default withRouter(LoginForm);