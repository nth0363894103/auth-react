import React, { Component } from 'react';
import { handleResponseError } from 'fetch';
import { Alert } from 'antd';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: 'nrbefv' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
    this.setState({
      error
    });
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Alert
          style={{ margin: 20 }}
          type="error"
          message={handleResponseError(this.state.error)}
        ></Alert>
      );
    }
    return this.props.children;
  }
}
