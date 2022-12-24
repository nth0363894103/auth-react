import { Menu, Icon } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { v4 } from 'uuid';
const create = (path, title, icon, role = ['admin', 'reseller']) => {
  return { path, title, icon, role };
};
const routes = [
  [create('/', 'Home', 'home'), create('/apps', 'Apps', 'appstore')],
  [create('/user', 'User details', 'user'), create('/download', 'Download', 'download')]
];
const getAllRoutes = () => {
  let output = [];
  routes.map((v) => {
    v.map((v1) => {
      output.push(v1?.path);
    });
  });
  return output;
};
const getParentPathname = (current) => {
  const result = getAllRoutes().filter((v) => current.includes(v));
  console.log(result);
};
const makeRoutes = () => {
  const location = useLocation();

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
      {routes.map((v, i) => {
        return (
          <Menu.ItemGroup key={v4()}>
            {v.map((v1, i1) => {
              return (
                <Menu.Item key={v1.path}>
                  <Link to={v1.path}>
                    <Icon type={v1.icon} />
                    <span>{v1.title}</span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.ItemGroup>
        );
      })}
    </Menu>
  );
};
export default makeRoutes;
