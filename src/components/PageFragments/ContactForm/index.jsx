import {
  Col, Form, Input, Button, message,
} from 'antd';
import React from 'react';
import { UserOutlined, MailOutlined } from '@ant-design/icons'

const { TextArea } = Input

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`)
}

export default () => {
    const [form] = Form.useForm();
    const formName = `contact`

    const handleSubmit = (values) => {
        if (values[`bot-field`] === undefined) {
            delete values[`bot-field`]
        }

        fetch(`/`, {
            method: `POST`,
            headers: { 'Content-Type': `application/x-www-form-urlencoded` },
            body: encode({
                'form-name': formName,
                ...values,
            }),
        })
            .then(() => showSuccess())
            .catch(error => showError(error))
    }

    const showSuccess = () => {
        message.success('Thank you for your kind response 🙂. Will get back to you.');
        form.resetFields();
    }

    const showError = (error) => {
        console.log(`There was an error submitting the form`);
        console.log(error);
    }

    return (
      <Col sm={24} md={24} lg={12} className="widthFull" >
        {/*
          This defines how your form is setup for the Netlify bots.
          Users will not see or interact with this form.
       */}
        <form
            name={formName}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
        >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>

        <Form
            form={form}
            name="cf"
            method="post"
            onFinish={handleSubmit}
            layout="vertical"
        >
            {/* This is the hidden field that the netlify-honeypot uses. */}
            <Form.Item
                label="Don't fill this out"
                className={`hidden`}
                style={{ display: `none` }}
                name="bot-field"
            >
                <Input type={`hidden`} />
            </Form.Item>

            <Form.Item
                label="Name"
                rules={[{ required: true, message: `Please enter your name.` }]}
                name="name"
            >
                <Input
                    placeholder="Name"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                rules={[{ type: `email`, message: `Please enter your email.` }]}
                name="email"
            >
                <Input
                    placeholder="Your Email"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                />
            </Form.Item>

            <Form.Item
                label="Message"
                rules={[{ required: true, message: `Please enter your message.` }]}
                name="message"
            >
                <TextArea
                    placeholder="Your Message"
                    rows={5}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" shape="round" size="large" htmlType="submit"
                  disabled={false} style={{ background: '#304CFD' }} >
                    Send
                </Button>
            </Form.Item>
        </Form>
    </Col>
  )
}

