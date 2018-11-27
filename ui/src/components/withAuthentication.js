import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default Component => {
    class IsAuthenticated extends React.Component {
        render() {
            const isAuthenticated = this.props.user;
            if (isAuthenticated) {
                return <Component {...this.props} />;
            }
            return (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: this.props.history.location }
                    }}
                />
            );
        }
    }
    const mapStatetToProps = ({ user }) => ({ user });

    return connect(mapStatetToProps)(withRouter(IsAuthenticated));
};
