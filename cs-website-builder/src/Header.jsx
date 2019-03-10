import React, { Component }  from 'react';

export class Header extends Component {
    render() {
        const policiesActive = this.props.activePage === 'policies';
        const scheduleActive = this.props.activePage === 'schedule';
        const taInformationActive = this.props.activePage === 'ta-information';
        

        return (
            <header className="navbar navbar-expand-lg navbar-dark background-primary">
                <a className="navbar-brand" href={this.props.baseURL}>
                    <img src="https://cs.byu.edu/sites/all/themes/apolleux/img/logo.png" style={{width:"40px"}} alt={this.props.className}/> CS202 
                </a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler collapsed" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item" + policiesActive ? " active" : ""}>
                            <a className="nav-link" href={this.props.baseURL + "/schedule"} >Schedule</a>
                        </li>
                        <li className={"nav-item" + taInformationActive ? " active" : ""}>
                            <a className="nav-link" href={this.props.baseURL + "/ta-information"}>TA Information</a>
                        </li>
                        <li className={"nav-item" + scheduleActive ? " active" : ""}>
                            <a className="nav-link" href={this.props.baseURL + "/policies"}>Policies</a>
                        </li>
                    </ul>
                    <a href="https://byu.edu"><img alt="BYU" className="float-right" src="https://cas.byu.edu/cas/images/BYUBar.png" /></a>
                </div>
            </header>
        );
    }
}