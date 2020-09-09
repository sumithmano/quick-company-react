import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import UserService from '../services/UserService'
/* global M */

class Navbar extends Component {

    constructor(props) {
        super(props)
        // this.state = { show: UserService.isAthenticated() }
        this.onSideClose = this.onSideClose.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
        // this.checkAuthentication = this.checkAuthentication.bind(this);
    }

    componentDidMount() {
        M.Sidenav.init(this.sidenav)
        // window.addEventListener('storage', this.checkAuthentication)
    }

    // componentWillUnmount() {
    //     debugger
    //     window.removeEventListener('storage', this.checkAuthentication)
    // }

    // checkAuthentication() {
    //     console.log('------sadf checkAuthentication')
    //     this.setState({ show: UserService.isAthenticated() })
    // }

    onSideClose() {
        var instance = M.Sidenav.getInstance(this.sidenav)
        instance.close()
    }

    logoutClick(e) {
        e.preventDefault()
        UserService.logout()
            .finally(() => {
                this.props.history.push("/login");
            })
    }

    render() {
        return (
            <div style={{display: UserService.isAthenticated() ? "block" : "none" }}>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Quick Company</a>
                        <a data-target="main-menu" className="sidenav-trigger show-on-large">
                            <i className="fa fa-bars"></i>
                        </a>
                        <ul className="right hide-on-small-only">
                            <li><Link to="/">Company</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/" type="button" onClick={this.logoutClick}>Logout</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul onClick={this.onSideClose} ref={ (sidenav) => {this.sidenav = sidenav} } className="sidenav" id="main-menu">
                    <li><Link to="/"><i className="fa fa-suitcase"></i>Company</Link></li>
                    <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar)
