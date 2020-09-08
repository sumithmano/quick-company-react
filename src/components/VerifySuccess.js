import React from 'react'
import { Link } from 'react-router-dom'

const VerifySuccess = (props) => (
    <div>
        Verified successfully
        <Link to="/login">Login</Link>
    </div>
)

export default VerifySuccess