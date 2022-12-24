import React from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar as toggle } from '@redux/Actions/UI';
import './index.less';
const ToggleCollapse = () => {
  const { sidebarCollapsed } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const toggleSiderBar = () => {
    dispatch(toggle());
  };
  return (
    <div className="hamburger-container">
      <Icon type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleSiderBar} />
    </div>
  );
};
export default ToggleCollapse;
