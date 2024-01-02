import styled, { keyframes } from "styled-components";

export const ModalFade = keyframes`
    from {
        opacity: 0;
        margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`;

export const SignUpModalContainer = styled.div`
  /* border-radius: 30px; */
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 0.5rem;
  background-color: #fff;
  animation: ${ModalFade} 0.5s;
  overflow: hidden;
  padding: 20px 0;
`;

export const SignUpHeader = styled.div`
  position: relative;
  padding: 16px 64px 16px 16px;
  font-weight: 700;

  & > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    border: 0;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 20px 20px 20px;
  width: 100%;

  svg {
    height: 30px;
  }
`;

export const SignUpBody = styled.div`
  padding: 10px;
  & > div {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & > div > input {
    padding: 18px 29px;
    border-radius: 5px;
    width: 290px;
    height: 25px;
    font-size: 14px;
    border: 1px solid #d5d5d5;
  }
`;

export const SignUpFooter = styled.div`
  display: flex;
  padding: 7px 16px;
  text-align: right;
  justify-content: center;
  & > button {
    border: none;
    display: flex;
    width: 150px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex-wrap: wrap;
    border-radius: 37.84px;
    background: #8a90c8;
    color: #fff;
    font-family: SUIT;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  button {
    cursor: pointer;
  }
`;

export const SignUpFooterText = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 10px;

  span {
    &:nth-child(1) {
      color: #000;
    }
    &:nth-child(2) {
      color: red;
    }

    b {
      color: blue;
      font-weight: 500;
    }
  }

  a {
    text-decoration: none;
    color: blue;
  }
`;

export const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 20px 0 20px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
