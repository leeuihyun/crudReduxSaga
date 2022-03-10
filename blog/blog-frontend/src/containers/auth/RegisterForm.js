import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { initializeForm, changeField } from '../../modules/auth';

function RegisterForm() {
  const dispatch = useDispatch();
  const form = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const onChangeField = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChangeField}
      onSubmit={onSubmit}
    ></AuthForm>
  );
}

export default RegisterForm;
