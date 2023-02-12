import styled from 'styled-components';
export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;
export const DeleteBtn = styled.button`
  position: relative;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-shadow: -1px -1px #000;
  user-select: none;
  padding: 0.4em 4em;
  outline: none;
  background-color: #000;
  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    ),
    radial-gradient(
      190% 100% at 50% 0%,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(0, 0, 0, 0) 50%
    );
  background-repeat: no-repeat;
  background-size: 200% 100%, auto;
  background-position: 200% 0, 0 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0 2px 5px;

  &:active {
    top: 1px;
    box-shadow: none;
  }
  &:hover {
    transition: 0.5s linear;
    background-position: -200% 0, 0 0;
  }
`;
