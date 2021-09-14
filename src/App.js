import './styles.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFound404 from './components/404/404';
import AppHeader from './components/app-header'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import AppMenu from './components/menu'
import AllPosts from './pages/allPosts';
import AllPostsUser from './pages/AllPostsUser';
import NewPostsPage from './pages/NewPostPage'
import MyPostsRedactPage from './pages/MyPostsRedactPage'
import PostIdPage from "./pages/PostIdPage";
import {useState} from "react";
import React, { Component }  from 'react';

const App = () => {
  const [loggedIn, setloggedIn] = useState()
  const changeLoggedIn = (state) => setloggedIn(state)

  return (
    <Router>
      <AppMenu loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />

         <div className="App">
        <AppHeader loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />

        <Switch>
          {/*all users*/}
          <Route exact path="/login" render={() => <LoginPage changeLoggedIn={changeLoggedIn} />} />
          <Route exact path="/registration" render={() => <RegistrationPage  changeLoggedIn={changeLoggedIn} />} />
          <Route exact path="/" render={() => <MainPage />} />

          {/*admin and user*/}
          <Route exact path="/new-post" render={() => <NewPostsPage changeLoggedIn={changeLoggedIn} />} />
          <Route exact path="/my-posts" render={() => <MyPostsRedactPage />} />
          <Route exact path="/posts-authorized" component={AllPosts} />

          {/*admin*/}
          <Route exact path="/post-admin/:id" render={() => <PostIdPage changeLoggedIn={changeLoggedIn} />} />

          {/*user*/}
            <Route exact path="/posts-authorized-user" component={AllPostsUser} />

          <Route component={NotFound404} />

        </Switch>
        {/*<Footer />*/}
      </div>

    </Router>
  )
}

export default App;
