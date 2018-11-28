import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './style.css';

import reducers from './reducers';
import DrinkList from './containers/drink_list';

class App extends React.Component {
    render() {
        return (
            <div>
                <DrinkList />
            </div>
        );
    }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'));