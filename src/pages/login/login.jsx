import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

/* import "./css/login.css"; */

import "./login.less";


import logo from "./images/logo.png";

const onFinish = values => {
  console.log("Received values of form: ", values);
};

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="mei" srcset="" />
          <h1>React项目：后台管理系统</h1>
        </div>
        <div className="login-content">
          <h2>用户登录</h2>
          <div className="login-form">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入你的用户名!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入你的密码!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
