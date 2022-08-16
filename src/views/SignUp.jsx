/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerSyled } from '../components/styled';
import useMutation from '../hooks/useMutation';
import APIUser from '../api/user.api';
import Alert from '../components/Alert';

const SignUp = () => {
  const signUp = useMutation((data) => APIUser.signup(data));
  const navigate = useNavigate();

  const onFinish = async (values) => {
    signUp.mutate(values);
  };

  useEffect(() => {
    if (signUp.isError) {
      const { statusText, message } = signUp.error;
      Alert.error(statusText, message);
    }
    if (signUp.isSuccess) {
      Alert.signUpSuccess(navigate('/signin'));
    }
  }, [signUp, navigate]);

  console.log('render');

  return (
    <ContainerSyled>
      <h1>Sign Up</h1>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
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
          <Button loading={signUp.isLoading} type="primary" htmlType="submit">
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
