import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { initializeForm, changeField, register } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

function RegisterForm({ history }) {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      //TODO 오류처리
      console.log('Plz same password confirm');
      return;
    }
    dispatch(register({ username, password }));
  };
  //컴포넌트가 처음 렌더링 될때 form 을 register로 초기화함.
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);
  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
      history.push('/');
    }
  }, [history, user]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChangeField}
      onSubmit={onSubmit}
    ></AuthForm>
  );
}

export default withRouter(RegisterForm);
