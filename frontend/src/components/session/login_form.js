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

  // Once the user has been authenticated, redirect to the Tweets page
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.currentUser === true) {
  //     this.props.history.push('/');
  //   }

  //   // Set or clear errors
  //   // this.setState({errors: this.props.errors})
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(() => this.props.history.push('/'));
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
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