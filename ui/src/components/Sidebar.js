import React from 'react';
import { NavLink } from 'react-router-dom';

import IconUserGroup from '../icons/UserGroup';
import IconChat from '../icons/IconChat';
class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <header className="header">
                    <i className="icon">
                        <IconUserGroup />
                    </i>
                </header>

                <nav className="links">
                    <NavLink to="/messages" exact>
                        <IconChat />
                        Messages
                    </NavLink>
                    <NavLink to="/users" exact>
                        <IconUserGroup />
                        Users
                    </NavLink>
                </nav>
            </aside>
        );
    }
}
export default Sidebar;


