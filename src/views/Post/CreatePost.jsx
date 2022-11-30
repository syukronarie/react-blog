import { Button, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import useQuery from '../../hooks/useQuery';
import APIPosts from '../../apis/post.api';
import APICategories from '../../apis/category.api';
import Alert from '../../components/Alert';

const CreatePost = () => {
  const navigate = useNavigate();
  const posts = useMutation((data) => APIPosts.createPost(data));
  const categories = useQuery(() => APICategories.getCategories());
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
        <Form.Item label="Category" name="categories" rules={[{ required: true, message: 'Please input category!' }]}>
          <Select style={{ width: '100%' }} allowClear>
            {categories.isSuccess &&
              categories.data.data.data.map((category) => (
                <Select.Option key={category.id} value={category.title}>
                  {category.title}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please input content!' }]}>
          <Input.TextArea minLength={100} maxLength={1500} rows={10} />
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
