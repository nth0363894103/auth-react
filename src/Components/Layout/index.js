import { Layout } from 'antd';
import React from 'react';
import Sider from './Sider';
import Header from './Header';
import Content from './Content';
const RLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
};
export default RLayout;
