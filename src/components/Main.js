import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserService from '../services/UserService'

import Company from './Company'
import About from './About'
import Login from './Login'
import Create from './Create'

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         UserService.isAthenticated()
//           ? <Component {...props} />
//           : <Redirect to='/login' />
//       )} />
// )

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' render={() =>  UserService.isAthenticated() ? <Company key="1" /> : <Redirect to="/login" />} />
            <Route exact path='/favourite' render={() =>  UserService.isAthenticated() ? <Company key="2" onlyFav={true}/> : <Redirect to="/login" />} />
            {/* <ProtectedRoute exact path='/' component={Company} /> */}
            <Route exact path='/login' render={() =>  !UserService.isAthenticated() ? <Login /> : <Redirect to="/" />} />
            <Route exact path='/create' render={() =>  !UserService.isAthenticated() ? <Create /> : <Redirect to="/" />} />
        </Switch>
    </main>
)

export default Main