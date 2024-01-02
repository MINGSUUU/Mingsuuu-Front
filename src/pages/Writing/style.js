import styled from "styled-components";
import Select from "react-select";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10%;
  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #3b3b3b;
    font-style: normal;
    line-height: normal;
  }
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  width: 100%;
  .commentForm {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  }
`;

export const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SelectedListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const styledSelect = styled(Select)`
  width: 45%;
  height: 60px;
`;

export const SelectInputBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 53px;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  gap: 10px;
`;

export const SelectInput = styled.input`
  display: flex;
  width: 100%;
  padding: 18px 29px;
  border-radius: 10px;
  border: 2px solid #d5d5d5;

  &::placeholder {
    color: #8ea3aa;
    font-size: 14.5px;
    font-weight: 600;
    vertical-align: middle;
  }
`;

export const Markarea = styled.div`
  width: 100%;
  height: 200px;
  textarea {
    resize: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button1 = styled.button`
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 65px;
  height: 40px;
  border-radius: 15px;
  background-color: #aeaeae;
  color: #ffffff;
  font-size: 16px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const Button2 = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  background-color: #858585;
  color: #ffffff;
  font-size: 16px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export const SelectBoxListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DateBox = styled.div`
  width: 45%;
  height: 40px;
`;
