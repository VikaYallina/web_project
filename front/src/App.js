import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Cart from "./components/cart.component";
import addItem from "./components/addItem.component";
import NotFound from "./components/notFound.component";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './history';
import About from "./components/about.component";

const App = () =>{

  const { user: currUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout())
  }

    return(
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              VS
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

            </div>

            {currUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/cart"} className="nav-link">
                      Cart
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>

              </div>
            )}

            <div className="navbar-nav ml-auto">
            <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              {/* <Route exact path={["/", "/home"]}>{currUser ? <Home/> : <Redirect to="/login"/>}</Route> */}
              <Route exact path={["/", "/home"]} component={Home}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/cart">{currUser ? <Cart/> : <Redirect to="/login"/>}</Route> */}
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/addItem" component={addItem}/>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }


export default App;