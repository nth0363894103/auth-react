import React, { Fragment, useState } from 'react';
import { Button, Modal, Form, Spin, Input, Icon, message } from 'antd';
import { fetch, handleResponseError } from 'fetch';
import { connect } from 'react-redux';
import { appendApp } from '@redux/Actions/Apps';
const FormCreate = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, loading } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          okText="Create"
          title="Create new app"
          visible={visible}
          onOk={onCreate}
          onCancel={onCancel}
          okButtonProps={{ disabled: loading }}
        >
          <Form>
            <Spin spinning={loading} tip="Creating...">
              <Form.Item>
                {getFieldDecorator('fullname', {
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: 'App name is required'
                    }
                  ],
                  initialValue: '' // 初始值
                })(
                  <Input
                    prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Enter your app name"
                  />
                )}
              </Form.Item>
            </Spin>
          </Form>
        </Modal>
      );
    }
  }
);
class CreateApp extends React.Component {
  state = {
    visible: false,
    loading: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };
  render() {
    const { token, appendApp } = this.props;
    const handleCreate = () => {
      const { form } = this.formRef.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        //this.setState({ visible: false });
        this.setState({ loading: true });
        fetch('app/create', { fullname: values.fullname }, { Authorization: token })
          .then((res) => {
            this.setState({ loading: false });
            appendApp(res?.data?.message);
            this.handleCancel();
          })
          .catch((err) => {
            this.setState({ loading: false });
            message.error(handleResponseError(err));
            this.handleCancel();
          });
        //fetch("app/create", )
      });
    };
    return (
      <Fragment>
        <Button
          icon="plus"
          style={{ marginLeft: '20px' }}
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          Create your own app
        </Button>
        <FormCreate
          loading={this.state.loading}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={handleCreate}
        />
      </Fragment>
    );
  }
}
export default connect((state) => state.auth, { appendApp })(CreateApp);
