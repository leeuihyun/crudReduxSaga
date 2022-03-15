import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { initializeForm, changeField, register } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

function RegisterForm({ history }) {
  const [error, setError] = useState(null);
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
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력해주세요');
      return;
    }
    if (password !== passwordConfirm) {
      //TODO 오류처리
      console.log('Plz same password confirm');
      setError('비밀번호가 일치하지 않습니다');
      dispatch({
        form: 'register',
        key: 'password',
        value: '',
      });
      dispatch({
        form: 'register',
        key: 'passwordConfirm',
        value: '',
      });
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
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다');
        return;
      }
      setError('회원가입 실패');
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
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
        console.log('localStorage Error');
      }
    }
  }, [history, user]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChangeField}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  );
}

export default withRouter(RegisterForm);
