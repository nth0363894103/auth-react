import React from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
const { Content } = Layout;
import { GetRoute } from '@/Utils/routemap';
const RContent = () => {
  return (
    <Content style={{ height: 'calc(100% - 100px)' }}>
      <div className="app-container">
        <GetRoute />
      </div>
    </Content>
  );
};
export default RContent;
