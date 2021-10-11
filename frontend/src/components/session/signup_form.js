import React from 'react';
import { withRouter } from 'react-router-dom';
import { ImLeaf, ImInfo } from 'react-icons/im';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
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
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user);
  }

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
          <h1 className='title'>PlantPress<ImLeaf/></h1>
        </div>
        <form>
          <div className='d-flex justify-content-center'>
            <h2 className='subtitle'>Create New Account</h2>
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
            <input type="text"
              value={this.state.handle}
              onChange={this.update('handle')}
              placeholder="Handle"
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

          <div className='d-flex justify-content-center form-padding'>
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              className='session-input'
            />
          </div>

          <div className='d-flex justify-content-center form-padding form-margin'>
            <button className='session-button'>Sign Up!</button>
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

export default withRouter(SignupForm);