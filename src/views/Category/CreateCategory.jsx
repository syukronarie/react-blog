import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import APICategories from '../../apis/category.api';
import Alert from '../../components/Alert';

const CreatePost = () => {
  const navigate = useNavigate();
  const category = useMutation((data) => APICategories.createCategory(data));
  const { data, error, isLoading, isError, isSuccess } = category;

  const onFinish = (values) => {
    category.mutate({ ...values });
  };

  useEffect(() => {
    if (isError) {
      const { statusText, message } = error;
      Alert.error(statusText, message);
    }
    if (isSuccess) {
      Alert.createCategorySuccess(navigate);
    }
  }, [isError, isSuccess, data, error, navigate]);

  return (
    <>
      <h1>Create Category</h1>
      <Form
        style={{ width: '1080px' }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="title"
          rules={[{ required: true, message: 'Please input category name!' }]}
        >
          <Input />
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
