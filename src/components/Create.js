import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import UserService from '../services/UserService'

/* global M */

class Login extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.passwordRef1.value != this.passwordRef2.value) {
            M.toast({html: 'Passwords don\'t match', classes: 'rounded'})
            return
        }

        // TODO: need to encrypt payload
        const payload = {
            email: this.emailRef.value,
            password: this.passwordRef1.value
        }
        
        UserService.create(payload)
            .then(response => {
                this.props.history.push("/login")
            })
            .catch(err =>  console.log(err))

    }

    render() {
        return (
            <div>
                <br />
                <center>
                    <img className="responsive-img" style={{ width: "100px" }} src="./icon.svg" />
                    <br /><br />

                    <h5 className="indigo-text">Create your account</h5>
                    <br />

                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE", minWidth: "390px" }}>

                            <form className="col s12" onSubmit={this.onSubmit}>
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field s12'>
                                        <input className='validate' type='email' name='email' ref={email => this.emailRef = email} />
                                        <label htmlFor='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' ref={password => this.passwordRef1 = password} />
                                        <label htmlFor='password'>Enter your password</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' ref={password => this.passwordRef2 = password} />
                                        <label htmlFor='password'>Confirm your password</label>
                                    </div>
                                </div>

                                <center>
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Create</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </center>

                <br /><br />
                <br /><br />
            </div>
        )
    }

}

export default withRouter(Login)