import React from 'react';
import { connect } from 'react-redux';

import withAuthentication from './withAuthentication';

class Messages extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.messages.map(message => (
                        <li key={message._id}>{message.body}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ messages }) => ({ messages });

export default withAuthentication(connect(mapStateToProps)(Messages));
