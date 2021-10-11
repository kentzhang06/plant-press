import React from 'react';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>P P</h1>
                <button onClick={this.props.logout}>Log out</button>
                <footer>
                    Copyright &copy; 2019 Chirper
                </footer>
            </div>
        );
    }
}

export default HomePage;