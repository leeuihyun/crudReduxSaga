import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

function LoginForm() {
  const dispatch = useDispatch();
  const form = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  //component가 처음 렌더링될 때 form을 초기화함.
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChangeField}
      onSubmit={onSubmit}
    ></AuthForm>
  );
}

export default LoginForm;
