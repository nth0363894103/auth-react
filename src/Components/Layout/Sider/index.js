import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';
import logo from '@/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import makeRoutes from '@/Utils/SidebarMap';
const RSider = () => {
  const { sidebarCollapsed } = useSelector((state) => state.ui);
  return (
    <Sider collapsible collapsed={sidebarCollapsed} trigger={null} style={{ zIndex: '10' }}>
      <div className="sidebar-logo-container">
        <img src={logo} className="sidebar-logo" alt="logo" />
        <h1 className="sidebar-title">Super</h1>
      </div>
      <div style={{ height: 'calc(100% - 64px)' }}>{makeRoutes()}</div>
    </Sider>
  );
};
export default RSider;
