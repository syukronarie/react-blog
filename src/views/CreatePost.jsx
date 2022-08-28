import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../hooks/useMutation';
import APIPosts from '../api/posts.api';
import Alert from '../components/Alert';

const CreatePost = () => {
  const navigate = useNavigate();
  const posts = useMutation((data) => APIPosts.createPost(data));
  const { data, error, isLoading, isError, isSuccess } = posts;

  const onFinish = (values) => {
    posts.mutate({ ...values });
  };

  useEffect(() => {
    if (isError) {
      const { statusText, message } = error;
      Alert.error(statusText, message);
    }
    if (isSuccess) {
      Alert.createPostSuccess(navigate);
    }
  }, [isError, isSuccess, data, error, navigate]);

  return (
    <>
      <h1>Create Post</h1>
      <Form
        style={{ width: '1080px' }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please input content!' }]}>
          <Input.TextArea minLength={100} maxLength={1500} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePost;
