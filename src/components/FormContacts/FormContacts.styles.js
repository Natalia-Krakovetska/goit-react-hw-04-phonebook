import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 30px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 40px 0px;
`;

export const FormBtn = styled.button`
  position: relative;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-shadow: -1px -1px #000;
  user-select: none;
  padding: 0.8em 2em;
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

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  color: #1a3b5d;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  background: none;
  color: #1a3b5d;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #3d9cff;
  }
`;
