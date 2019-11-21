import React from "react";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import Jokes from "./Jokes";
import Login from "./Login";
import Register from "./Register";

function Container(props) {
  const withAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };
  return (
    <div>
      <nav>
        <NavLink className="navlink" exact to="/" activeClassName="active">
          Login
        </NavLink>
        &nbsp;
        <NavLink className="navlink" to="/jokes" activeClassName="active">
          Jokes
        </NavLink>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/jokes"
          component={props => withAuthCheck(Jokes, props)}
        />
      </main>
    </div>
  );
}

export default Container;
