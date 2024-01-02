import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 100%;
`;

export const MainSelectBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 20px;
`;

export const SelectInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 53px;
  width: 230px;
  height: 40px;
  background-color: #e8e8e8;
  padding-left: 20px;
  gap: 10px;
`;

export const SelectInput = styled.input`
  border: none;
  outline: none;
  background: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #8ea3aa;
    font-size: 14.5px;
    font-weight: 600;
  }
`;

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;
