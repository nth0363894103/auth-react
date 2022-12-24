import React from 'react';
import './index.less';
import { Row, Col, Icon } from 'antd';
import CountUp from 'react-countup';
const chartList = [
  {
    type: 'Total license(s)',
    icon: 'user',
    num: 102400,
    color: '#40c9c6'
  },
  {
    type: 'Total online(s)',
    icon: 'message',
    num: 81212,
    color: '#36a3f7'
  },
  {
    type: 'Total ticket(s)',
    icon: 'pay-circle',
    num: 9280,
    color: '#f4516c'
  }
];
const Status = () => {
  return (
    <div className="panel-group-container">
      <Row gutter={20} className="panel-group">
        {chartList.map((chart, i) => (
          <Col key={i} span={8} onClick={() => {}} className="card-panel-col">
            <div className="card-panel">
              <div className="card-panel-icon-wrapper">
                <Icon
                  className={chart.type}
                  style={{ fontSize: 55, color: chart.color }}
                  type={chart.icon}
                />
              </div>
              <div className="card-panel-description">
                <p className="card-panel-text">{chart.type}</p>
                <CountUp end={chart.num} start={0} className="card-panel-num" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Status;
