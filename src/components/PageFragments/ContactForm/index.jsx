import {
  Col, Form, Input, Button, message,
} from 'antd';
import React from 'react';
import Config from '../../../../config';

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a valid email!',
  },
};
export default () => {
  const [form] = Form.useForm();
  const onFinish = (data) => {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    fetch(Config.contactFormUrl, { method: 'POST', body: formData })
      .then(() => {
        message.success('Thank you for your kind response 🙂. Will get back to you.');
        form.resetFields();
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      {/*
              This defines how your form is setup for the Netlify bots.
              Users will not see or interact with this form.
      */}
      <form
        name={form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['name']} rules={[{ required: true }]}>
          <Input size="large" placeholder="Full Name *" />
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item name={['description']} rules={[{ required: true }]}>
          <Input.TextArea size="large" rows={7} placeholder="Description *" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
