import React from 'react';

import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from 'scripts/store';

import { HomePage } from "./home";

export class RouterComponent extends React.Component {

    render() {
        return(<Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={HomePage} />
                </div>
            </ConnectedRouter>
        </Provider>);
    }

}