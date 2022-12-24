import React, { Fragment, useState } from 'react';
import { Button, Dropdown, Layout, Menu, Avatar, Icon, Modal, message } from 'antd';
import { Form, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ToggleCollapse from './ToggleCollapse';
import './index.less';
import CreateApp from './CreateApp';
const { Header } = Layout;

const RHeader = () => {
  const { sidebarCollapsed } = useSelector((state) => state.ui);
  const handleLogout = () => {
    Modal.confirm({
      title: '注销',
      content: '确定要退出系统吗?',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        //logout(token);
        message.info('OK');
      }
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="user">
        <Link to="/user">User details</Link>
      </Menu.Item>
      <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/NLRX-WJC/react-antd-admin-template"
          rel="noopener noreferrer"
        >
          Project on GitHub
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  const computedStyle = () => {
    let styles;
    if (true) {
      if (sidebarCollapsed) {
        styles = {
          width: 'calc(100% - 80px)'
        };
      } else {
        styles = {
          width: 'calc(100% - 200px)'
        };
      }
    }
    return styles;
  };

  return (
    <Fragment>
      <Header />
      <Header style={computedStyle()} className="fix-header">
        <ToggleCollapse />
        <CreateApp />
        <div className="right-menu">
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                <Avatar shape="square" size="medium" icon="user" />
                <Icon style={{ color: 'rgba(0,0,0,.3)' }} type="caret-down" />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </Fragment>
  );
};
export default RHeader;
