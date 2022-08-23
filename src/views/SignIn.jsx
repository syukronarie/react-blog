import { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import useMutation from '../hooks/useMutation';
import APIAuth from '../api/auth.api';

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useMutation((data) => APIAuth.signin(data));
  const { isLoading, isError, isSuccess, error } = signIn;

  const onFinish = async (values) => {
    signIn.mutate(values);
  };

  useEffect(() => {
    if (isError) {
      const { statusText, message } = error;
      Alert.error(statusText, message);
    }
    if (isSuccess) {
      Alert.signInSuccess(navigate);
    }
  }, [isError, isSuccess, error, navigate]);

  return (
    <>
      <h1>Sign In</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <p>
        Don&apos;t have account? <Link to="/signup">Signup</Link>
      </p>
    </>
  );
};

export default SignIn;
