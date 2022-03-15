import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyled = css`
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  padding: 0.25rem 1rem;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom.: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[3]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyled}
`;

const StyledLinked = styled(Link)`
  ${buttonStyled}
`;

const Button = (props) => {
  return props.to ? <StyledLinked {...props} /> : <StyledButton {...props} />;
};
export default Button;
