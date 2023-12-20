import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: white;
`;

export const HeaderTextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  gap: 3rem;
  span {
    cursor: pointer;
  }
`;
