import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ImLeaf, ImInfo } from 'react-icons/im';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user);
  }

  renderErrors() {
    return (
      <div className='row'>
        <ul className='session-errors'>
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>{this.props.errors[error]}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleDemo(e) {
    e.preventDefault();
    let user = {
      email: 'groot@guardians.gal',
      password: 'groot123',
    };
    this.props.login(user);
  }

  render() {
    return (
      <>
        <main>
          <div className='white-box'>
            <div className='d-flex justify-content-center space-above'>
              &nbsp;&nbsp;
            </div>
            <form className='session-form'>
              <div className='d-flex justify-content-center'>
                <h2>Create New Account!</h2>
              </div>

              <div className='d-flex justify-content-center form-padding'>
                <input
                  type='text'
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder='Email'
                  className='session-input'
                />
              </div>

              <div className='d-flex justify-content-center form-padding'>
                <input
                  type='text'
                  value={this.state.handle}
                  onChange={this.update('handle')}
                  placeholder='Handle'
                  className='session-input'
                />
              </div>

              <div className='d-flex justify-content-center form-padding'>
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder='Password'
                  className='session-input'
                />
              </div>

              <div className='d-flex justify-content-center form-padding'>
                <input
                  type='password'
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder='Confirm Password'
                  className='session-input'
                />
              </div>

              <div className='d-flex justify-content-center form-padding form-margin'>
                <button onClick={this.handleSubmit} className='session-button'>
                  Sign Up!
                </button>
              </div>
              <div className='d-flex justify-content-center form-padding form-margin'>
                <button onClick={this.handleDemo} className='session-button'>
                  Demo
                </button>
              </div>
              <div className='d-flex justify-content-center form-padding form-margin'>
                <Link className='purple bold' to='/login'>
                  Log In
                </Link>
              </div>
              {this.renderErrors()}
            </form>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(SignupForm);
