import React from 'react';
import { Card, Typography, Button, Menu, Icon } from 'antd';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { LicenseTable } from './LicenseTable';
const CusCard = styled(Card)`
  .ant-card-body {
    padding: 10px;
  }
`;
const alloc = (
  icon,
  title,
  role,
  action = () => {
    console.log('ãction');
  },
  type = 'menu'
) => {
  return { icon, title, role, action, type };
};

const RightPanel = ({ data }) => {
  const maps = [
    alloc('plus', 'Add licenses', 'all', () => {
      console.log(12345643);
    }),
    alloc('setting', 'Settings', 'all', () => {
      console.log(1234);
    })
  ];
  const get = (array = ['reseller']) => {
    array.push('all');
    return maps.filter((value) => {
      return array.includes(value.role);
    });
  };
  const List = ({ role }) => {
    return (
      <Menu style={{ borderRight: 'none' }} selectable={false}>
        {get([role]).map((v, i) => {
          return (
            <Menu.Item key={v4()} onClick={v.action}>
              <Icon type={v.icon} />
              <span>{v.title}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };
  return (
    <CusCard title={<Typography>Shortcut</Typography>}>
      <List role={data.role} />
    </CusCard>
  );
};

export default RightPanel;
