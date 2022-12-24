import React, { Fragment, useEffect, useState } from 'react';
import { Table, Tag, Typography, Card, message, Modal } from 'antd';
import { v4 } from 'uuid';
import './index.less';
import list from '@/assets/images/list.svg';
import { fetch, handleResponseError } from 'fetch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addListApp } from '@redux/Actions/Apps';
const { Column } = Table;
const { Title } = Typography;

const RenderName = ({ name }) => {
  return (
    <div className="name">
      <img className="img-name" src={list} />
      <div className="title-name">
        <div className="one">{name}</div>
        <div className="two">Main app</div>
      </div>
    </div>
  );
};
const RenderRole = ({ role }) => {
  const isAdmin = role === 'admin';
  return <Tag color={isAdmin ? 'green' : 'blue'}>{role}</Tag>;
};
const RenderEnable = ({ enabled }) => {
  const enable = enabled === 1;
  return <Tag color={enable ? 'green' : 'red'}>{enable ? 'Yes' : 'No'}</Tag>;
};
function Main() {
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.apps);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleRow = (e) => {
    console.log(e);
    navigate(e?.appid);
  };
  useEffect(() => {
    fetch(
      'app/all',
      {},
      {
        Authorization: token
      }
    )
      .then((res) => {
        setLoading(false);
        dispatch(addListApp(res?.data?.message));
      })
      .catch((err) => {
        setLoading(false);
        Modal.error({
          title: 'Error',
          content: handleResponseError(err)
        });
      });
  }, []);
  return (
    <Card>
      <Card
        title={
          <Title level={2} style={{ fontWeight: '500' }}>
            My apps
          </Title>
        }
        bordered={false}
      >
        <Table
          dataSource={data}
          className="table"
          rowKey={'id'}
          loading={loading}
          onRowClick={(e) => handleRow(e)}
        >
          <Column title="Name" dataIndex="fullname" render={(f) => <RenderName name={f} />} />
          <Column title="Created by" dataIndex="created_by" />
          <Column
            title="Enabled"
            dataIndex="enabled"
            render={(e) => <RenderEnable enabled={e} />}
          />
          <Column title="Role" dataIndex="role" render={(role) => <RenderRole role={role} />} />
        </Table>
      </Card>
    </Card>
  );
}
export default Main;
