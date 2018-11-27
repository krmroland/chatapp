import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        let { user } = this.props;

        let { from } = this.props.location.state || {
            from: { pathname: '/messages' },
        };

        if (user) return <Redirect to={from} />;

        return (
            <div>
                <p>Please Sign In</p>
                <div
                    className="g-signin2"
                    data-onsuccess="onSignIn"
                    data-theme="dark"
                />
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(withRouter(Login));
