import Loadable from 'react-loadable';
import Loading from '@/Components/Others/Loadable';
import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 } from 'uuid';
const Alloc = (component) => {
  return Loadable({ loader: component, loading: Loading });
};
const AppListPage = Alloc(() => import('@/Components/Apps'));
const AppMainPage = Alloc(() => import('@/Components/Apps/Detail'));
const Home = Alloc(() => import('@/Components/Home'));
const routes = {
  '': [{ path: '', component: <Home />, role: 1 }],
  apps: [
    { path: '', component: <AppListPage />, role: 1 },
    { path: '/:appid', component: <AppMainPage />, role: 1 }
  ]
};
const printr = () => {
  let rows = [];
  for (let key in routes) {
    routes?.[key].map((v, i) => {
      rows.push(<Route key={v4()} path={`/${key}${v.path}`} element={v.component} />);
    });
  }
  return <Routes>{rows}</Routes>;
};
export const GetRoute = () => {
  return <>{printr()}</>;
};
