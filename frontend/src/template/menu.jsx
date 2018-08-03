import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
    { route: "/about", label: "Sobre"},
    { route: "/todos", label: "Tarefas"}
];

export class Menu extends Component {
    renderLink = () => {
        return links.map( link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">TodoApp</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    { this.renderLink() }
                </ul>
              </div>
            </nav>
        )
    }
};

export default Menu


