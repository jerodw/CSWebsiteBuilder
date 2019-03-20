import React, { Component } from 'react';

export class Header extends Component {

    createNavLinks = () => {
        return (
            <ul className="navbar-nav mr-auto">
                {
                    this.props.config.navLinks.map((navLink, index) => {
                        return (
                            <li key={navLink.title} className="nav-item">
                                <a className="nav-link" href={navLink.filename}>{navLink.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-dark background-primary">
                <a className="navbar-brand" href={this.props.config.baseURL}>
                    <img src="https://cs.byu.edu/sites/all/themes/apolleux/img/logo.png" style={{ width: "40px" }} alt={this.props.className} /> CS202
                </a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler collapsed" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    {this.createNavLinks()}
                    <a href="https://byu.edu"><img alt="BYU" className="float-right" src="https://cas.byu.edu/cas/images/BYUBar.png" /></a>
                </div>
            </header>
        );
    }
}