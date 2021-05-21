import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-nav-menu">
                    <li title="Home"><NavLink activeClassName='is-active' to="/home"><i className="lni-home"></i></NavLink></li>
                    <li title="Wedding Couple"><NavLink  activeClassName='is-active' to="/wedding-couple"><i className="lni-heart"></i></NavLink></li> 
                    <li title="Wedding Events"><NavLink activeClassName='is-active' to="/wedding-event"><i className="lni-calendar"></i></NavLink></li>
                    <li title="Gallery"><NavLink activeClassName='is-active' to="/gallery"><i className="lni-gallery"></i></NavLink></li>                     
                </ul>
            </div>
        )
    }
}

export default SidebarComponent
