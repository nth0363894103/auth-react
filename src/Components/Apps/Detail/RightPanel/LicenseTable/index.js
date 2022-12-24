import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

const { Column } = Table;
const RenderStatus = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case 'NORMAL':
        return 'green';
      case 'EXPIRED':
        return 'yellow';
      case 'BANNED':
        return 'red';
      default:
        return 'blue';
    }
  };
  return <Tag color={getColor(status)}>{status}</Tag>;
};
const alloc = (id, license, created_by, status, expire, last_online) => {
  return { id, license, created_by, status, expire, last_online };
};
const status = ['NORMAL', 'BANNED', 'EXPIRED'];
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
const createData = (amout = 30) => {
  let a = [];
  for (let i = 0; i < amout; i++) {
    a.push(alloc(i + 1, v4(), 'HUY', status.random(), undefined, 1));
  }
  return a;
};
export const LicenseTable = ({ appid }) => {
  const handle = (a, b, c) => {
	 
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
  };
  const [data, setDaate] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
	setLoad(true);
	setTimeout(() => {
		setDaate(createData());
		setLoad(false);
	}, 20000);
  }, []);
  return (
    <Table
      onChange={handle}
      pagination={{ total: 30, current: 2 }}
      dataSource={data}
      style={{ backgroundColor: 'white' }}
	  loading={load}
    >
      <Column title="ID" dataIndex="id" />
      <Column title="Key" dataIndex="license" />
      <Column title="Created by" dataIndex="created_by" />
      <Column title="Status" dataIndex="status" render={(e) => <RenderStatus status={e} />} />
      <Column title="Expire" dataIndex="expire" />
      <Column title="Online" dataIndex="last_online" />
    </Table>
  );
};
