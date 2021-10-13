import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>Plant Press</h1>
                <Link to="/login">Log in</Link><br/>
                <Link to="/signup">Sign Up</Link><br/>
                <button onClick={this.props.logout}>Log out</button>
                <footer>
                    Copyright &copy; 2019 Chirper
                </footer>
            </div>
        );
    }
}

export default HomePage;