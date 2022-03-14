import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여준다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
  }
  &:hover {
    color: ${palette.gray[9]};
  }
`;

const typeMap = {
  login: '로그인',
  register: '회원가입',
};
const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const formType = typeMap[type];
  return (
    <AuthFormBlock>
      <h3>{formType}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          placeholder="아이디"
          name="username"
          autoComplete="username"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          placeholder="비밀번호"
          name="password"
          autoComplete="new-password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            placeholder="비밀번호 확인"
            name="passwordConfirm"
            autoComplete="new-password"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ErrorMessage>에러 발생!</ErrorMessage>
        <Button fullWidth cyan style={{ marginTop: '1rem' }}>
          {formType}
        </Button>
      </form>

      <Footer>
        {type === 'login' ? (
          <Link to="register">회원가입</Link>
        ) : (
          <Link to="login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
