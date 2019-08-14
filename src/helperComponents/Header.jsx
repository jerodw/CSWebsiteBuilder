import React, { Component } from 'react';

export class Header extends Component {

    createNavLinks = () => {
        return (
            <ul className="navbar-nav mr-auto">
                {
                    this.props.config.navLinks.map((navLink, index) => {
                        return (
                            <li key={navLink.title} className="nav-item">
                                <a className="nav-link" href={`${this.props.config.baseURL}/${navLink.filename}`}>{navLink.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        const config = this.props.config;
        return (
            <header className="navbar navbar-expand-lg navbar-dark background-primary">
                <a className="navbar-brand" href={config.baseURL}>
                    <img src={`${this.props.config.baseURL}/images/logo.png`} style={{ width: "40px" }} alt={config.courseName} /> {config.courseName}
                </a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler collapsed" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    {this.createNavLinks()}
                    <a href="https://byu.edu"><img alt="BYU" className="float-right" src={`${this.props.config.baseURL}/images/BYUBar.png`} /></a>
                </div>
            </header>
        );
    }
}
