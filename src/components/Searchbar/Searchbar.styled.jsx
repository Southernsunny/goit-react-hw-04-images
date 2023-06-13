import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  max-width: calc(100vw - 200px);
  margin: 0 auto;
  gap: 25px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  font-family: inherit;
  border-radius: 10px;
  outline: 2px solid #97606e;
  border: 0;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;

  &:hover {
    color: #97606e;
  }
  &:focus {
    outline: 2px solid #e6847b;
    outline-offset: 5px;
    background-color: #fff;
    color: #97606e;
  }
`;

export const SearchBtn = styled.button`
  font-family: inherit;
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 0 15px;
  position: relative;
  overflow: hidden;
  border: none;
  transition: all 0.5s;
  background-color: transparent;
  color: #fff;

  &:hover {
    color: #e6847b;
  }
`;
