import React from "react";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";
import { login } from "../../actions/session_actions"
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  demoUser: {
    email: "groot@guardians.gal",
    password: "groot123"
  }
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

const Welcome = (props) => {

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center push-center">
        <h1 className="title-dark">
          PlantPress
          <span className="leaf-icon">
            <ImLeaf />
          </span>
        </h1>
      </div>

      <Link to="/login">
        <div className="d-flex justify-content-center splash-login">Log In</div>
      </Link>
      <div className="d-flex justify-content-center splash-signup">
      </div>
      <Link to="#"> 
        <div onClick={() => props.login(props.demoUser)} className="d-flex justify-content-center splash-login">Demo</div>
      </Link>
      <div className="d-flex justify-content-center splash-signup">
        <Link to="/signup">Create A New Account</Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
