import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#cd9042' : '#846a29')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};

  &:hover {
    transform: translateY(-2px);
  }
`;
