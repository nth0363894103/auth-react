import { Button, Card, Typography, Icon, Badge, Tag, Row, Col, List, Spin, Modal } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.less';
import { useLocalStorage } from '@hook';
import { fetch, handleResponseError } from 'fetch';
import RightPanel from './RightPanel';
import Status from './Status';
import { LicenseTable } from './RightPanel/LicenseTable';
const { Title } = Typography;
const Detail = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const { appid } = useParams();
  const [token] = useLocalStorage('token', null);
  useEffect(() => {
    fetch(
      'app/get',
      {
        appid
      },
      {
        Authorization: token
      }
    )
      .then((res) => {
        setData(res?.data?.message);
        setLoad(false);
      })
      .catch((err) => {
        Modal.error({
          title: 'error',
          content: handleResponseError(err),
          okText: 'Huh',
          onOk: () => {
            navigate('/');
          }
        });
        setLoad(false);
      });
  }, []);
  return (
    <Spin spinning={load}>
      <Card bordered={false}>
        <div className="card_title">
          <div className="card_title_left">
            <Button size="large" className="button" icon="left" onClick={() => navigate(-1)} />
            <Title level={2} style={{ fontWeight: '500' }}>
              {data?.fullname ?? 'Loading'}
            </Title>
          </div>
          <div className="card_title_right">
            <Tag color={data?.enabled === 1 ? 'green' : 'red'}>
              {data?.enabled === 1 ? 'Enable' : 'Disable'}
            </Tag>
          </div>
        </div>
      </Card>
      <Row gutter={20} style={{ marginTop: 20 }}>
        <Col span={19}>
          <Status />
          <LicenseTable appid={data.appid} />
        </Col>
        <Col span={5}>
          <RightPanel data={data} />
        </Col>
      </Row>
    </Spin>
  );
};
export default Detail;
