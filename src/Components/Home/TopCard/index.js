import React from 'react';
import { Card } from 'antd';
import './index.less';
import pic from '@/assets/images/mask-group-2.png';
import { useSelector } from 'react-redux';
const HomeTopCard = () => {
  const { fullname } = useSelector((state) => state.auth?.data);
  return (
    <div className="card-container">
      <div className="card-left">
        <div className="header">Hello {fullname}</div>
        <div className="description">Ưelcome to my system</div>
      </div>
      <div className="card-right">
        <img src={pic} />
      </div>
    </div>
  );
};
export default HomeTopCard;
