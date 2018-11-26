import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import NavBar from './components/nav-bar';
import Login from './components/login';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Login />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));