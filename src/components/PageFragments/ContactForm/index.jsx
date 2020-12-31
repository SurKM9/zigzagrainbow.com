import {
  Col, Form, Input, Button, Row, message,
} from 'antd';
import React from 'react';
import Config from '../../../../config';

const { TextArea } = Input
import { UserOutlined, MailOutlined } from '@ant-design/icons'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`)
}

export default () => {
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
        // TODO: Show a success message or navigate to a success page.
        console.log(`form submitted successfully`)
    }

    const showError = (error) => {
        // TODO: Show an error message to the user
        console.log(`There was an error submitting the form`)
        console.log(error)
    }

    return (

            <Col
                sm={24} md={24} lg={12} className="widthFull"
            >

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
                        rules={[{ required: true, type: `email`, message: `Please enter your email.` }]}
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
                        <Button type="primary" htmlType="submit" disabled={false}>
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

    )
}
// const validateMessages = {
//   required: 'This field is required!',
//   types: {
//     email: 'Not a valid email!',
//   },
// };
// export default () => {
//   const [form] = Form.useForm();
//   const onFinish = (data) => {
//     const formData = new FormData();
//     // eslint-disable-next-line no-restricted-syntax
//     for (const key in data) {
//       if (data[key]) {
//         formData.append(key, data[key]);
//       }
//     }

//     fetch(Config.contactFormUrl, { method: 'POST', body: formData })
//       .then(() => {
//         message.success('Thank you for your kind response 🙂. Will get back to you.');
//         form.resetFields();
//       })
//       // eslint-disable-next-line no-console
//       .catch((error) => console.error('Error:', error));
//   };

//   return (
//     <Col sm={24} md={24} lg={12} className="widthFull">
//       {/*
//               This defines how your form is setup for the Netlify bots.
//               Users will not see or interact with this form.
//       */}
//       <form
//         name={form}
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         hidden
//       >
//         <input type="text" name="name" />
//         <input type="email" name="email" />
//         <textarea name="message" />
//       </form>
//       <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//         <Form.Item name={['name']} rules={[{ required: true }]}>
//           <Input size="large" placeholder="Full Name *" />
//         </Form.Item>
//         <Form.Item name={['email']} rules={[{ type: 'email' }]}>
//           <Input size="large" placeholder="Email" />
//         </Form.Item>
//         <Form.Item name={['description']} rules={[{ required: true }]}>
//           <Input.TextArea size="large" rows={7} placeholder="Description *" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
//             SUBMIT
//           </Button>
//         </Form.Item>
//       </Form>
//     </Col>
//   );
// };
