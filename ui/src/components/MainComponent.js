import React from 'react';
import { Route } from 'react-router-dom';
import Messages from './Messages';
import Users from './Users';
import Login from './Login';
export default class MainComponent extends React.Component {
    render() {
        return (
            <main className="root-container">
                <Route path="/" component={Login} exact />
                <Route path="/messages" component={Messages} exact />
                <Route path="/users" component={Users} exact />
            </main>
        );
    }
}
