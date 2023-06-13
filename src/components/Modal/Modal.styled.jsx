import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
`;

export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 700px;
  min-height: auto;
  padding: 12px;
  border-radius: 20px;
  background-color: transparent;
`;
