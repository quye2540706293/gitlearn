import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div className="fix">
          <div>
            <Button type="primary" onClick={() => this.h("1")}>
              学习
            </Button>
          </div>
          <Link to="/login">登录</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/admin">Admin</Link>
        </div>

        <Route path="/admin" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
      </HashRouter>
    );
  }
  h = agr1 => {
    console.log("你好" + agr1);
  };
}
