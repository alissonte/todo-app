import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
    { route: "/about", label: "Sobre"},
    { route: "/todos", label: "Tarefas"}
];

export class Menu extends Component {
    renderLink = () => {
        return links.map( link =>
            <Link key={link.route} className="nav-item active nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link key='/todos' className="navbar-brand" to='/todos'>TodoApp</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        { this.renderLink() }
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Menu