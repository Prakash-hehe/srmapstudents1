import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar"
import LinkScreen from './components/LinkScreen';
import ProfileScreen from './components/ProfileScreen';
import Home from "./components/Home"
import GitHubDetailScreen from "./components/GitHubDetailScreen"
import CodeChefScreen from './components/CodeChefScreen';
import CodeForcesScreen from './components/CodeForcesScreen';
import NotFound from './components/NotFound';
import SearchPage from './components/SearchPage';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from "./components/RegisterScreen";
import ProfileForm from './components/ProfileForm';
import AskToLogin from './components/AskToLogin';
import LogOut from './components/LogOut';
import jwt_decode from 'jwt-decode';
import ForgotPass from './components/ForgotPass';

class App extends Component {
  state = {
    user: {
      user_id: -1,
    },
    id :parseInt(localStorage.getItem("id")) || -1
  }
  componentWillMount() {
    try {
      const jwt = localStorage.getItem("jwt");
      const user = jwt_decode(jwt);
      this.setState({ user: user});
    } catch (ex) {}
  }
  render() {
    const { user, id } = this.state
    return (
    <React.Fragment>
        <NavBar
          user={this.state.user}
        />
      <Switch>
        {user.user_id !== -1 &&(<Route path="/profile" component={ProfileScreen} />)}
        {user.user_id !== -1 && (<Route path="/log-out" component={LogOut} />)}
        {id !== -1 && (<Route path="/edit-profile" component={(props) => <ProfileForm user={ user } id={id} {...props} />} />)}
        {user.user_id !== -1 && (<Redirect from='/' exact to='/profile' />)}
        {user.user_id === -1 && (<Route path="/login" component={LoginScreen} />)}
        {user.user_id === -1 && (<Route path="/register" component={RegisterScreen} />)}
        {user.user_id === -1 && (<Route path="/ask-to-login" component={AskToLogin} />)}
        {user.user_id === -1 && (<Redirect from='/' exact to='/home' />)}
        <Route path="/home" component={Home} />
        <Route exact path="/student" component={SearchPage} />
        <Route exact path="/student/:id" component={LinkScreen} />
        <Route path="/student/:id/github" component={GitHubDetailScreen} />
        <Route path="/student/:id/codechef" component={CodeChefScreen} />
        <Route path="/student/:id/codeforces" component={CodeForcesScreen} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/forgot-password" component={ForgotPass} />
        <Redirect to="/not-found"/>
      </Switch>
    </React.Fragment>
  );
}
}

export default App;