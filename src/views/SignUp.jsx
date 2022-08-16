import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ContainerSyled } from '../components/styled';

const SignUp = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <ContainerSyled>
      <h1>Sign Up</h1>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            // loading={signIn.isLoading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <p>
        Already have account? <Link to="/signin">Signin</Link>
      </p>
    </ContainerSyled>
  );
};

export default SignUp;
