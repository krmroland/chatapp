import React from 'react';
import { connect } from 'react-redux';
import withAuthentication from './withAuthentication';

class Users extends React.Component {
    render() {
        const { contacts } = this.props;
        return (
            <ul className="contacts">
                {contacts.map(contact => (
                    <li key={contact._id} className="contact">
                        <img src={contact.image} alt={contact.name} />
                        <div className="contact-details">
                            <h5 className="contact-name">{contact.name}</h5>
                            <span>{contact.email}</span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}
const mapStateToProps = ({ contacts }) => ({ contacts });
export default connect(mapStateToProps)(withAuthentication(Users));
