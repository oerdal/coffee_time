import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';

import reducers from './reducers';
import NavBar from './components/nav-bar';
import Home from './components/home';
import About from './components/about';
import Login from './components/login';
import DrinkList from './containers/drink_list';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={ NavBar } />
                    <Route path="/" exact component={ Home } />
                    <Route path="/about/" exact component={ About } />
                    <Route path="/login/" component={ Login } />
                    <Route path="/orders/" component={ DrinkList } />
                </div>
            </Router>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'));