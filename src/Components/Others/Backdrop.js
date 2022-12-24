import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './backdrop.less';
const Backdrop = ({ enable, text }) => {
  return (
    <div className="backdrop">
      <Spin tip={text} size="large" spinning={enable} />
    </div>
  );
};
Backdrop.proptypes = {
  enable: PropTypes.bool,
  text: PropTypes.string
};
Backdrop.defaultProps = {
  enable: true,
  text: ''
};
export default Backdrop;
