import React, { Fragment, useState } from 'react';
import './index.less';
import DocumentTitle from 'react-document-title';
import { Form, Icon, Input, Button, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@redux/Actions/Auth';
import Loadable from '@/Components/Others/Loadable';
const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { form } = props;
  const { getFieldDecorator } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        setLoading(true);
        dispatch(login(values))
          .then((res) => {
            setLoading(false);
            navigate('/');
          })
          .catch((err) => {
            message.error(err);
            setLoading(false);
          });
      } else {
        message.error('Invalid form data');
      }
    });
  };
  return (
    <DocumentTitle title={'Login'}>
      <div className="login-container">
        <Form onSubmit={onSubmit} className="content" autoComplete="off">
          <div className="title">
            <h2>Login</h2>
          </div>
          <Spin spinning={loading} tip="Logging...">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: 'Username or email is required'
                  }
                ],
                initialValue: '' // 初始值
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username or email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: 'Password is required'
                  }
                ],
                initialValue: '' // 初始值
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              Or <Link to="/register">register now</Link>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};
const WrapLogin = Form.create()(Login);
export default WrapLogin;
