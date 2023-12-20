import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DetailInlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 0 50px;
  display: flex;
  gap: 30px;
`;

export const DetailsIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  h1 {
    font-size: 24px;
    display: inline-block;
    width: 70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const DetailInfoList = styled.div`
  display: flex;
  gap: 10px;
`;

export const DetailsInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsInfoItem = styled.div`
  width: auto;
  padding: 0 10px;
  height: 25px;
  background-color: #e4ecee;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
`;

export const DetailsInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -2px;
`;

export const DetailsUserInfo = styled.div``;

export const profileWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  .profileData {
    display: flex;
    gap: 4px;

    h1 {
      font-size: 16px;
      font-weight: 600;
      color: #313131;
      font-style: normal;
      line-height: normal;
    }
  }
`;

export const profileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: aqua;
  img {
    object-fit: cover;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d9d9d9;
`;

export const detailContentWrapper = styled.div`
  width: 100%;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 18px;
    font-weight: 600;
    color: #313131;
    font-style: normal;
    line-height: normal;
    span {
      color: #8f8f8f;
      margin-left: 2px;
    }
  }
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  gap: 20px;
  .commentForm {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;

    textarea {
      padding: 15px 10px;
      width: 100%;
      resize: none;
      border-radius: 10px;
      border: 2px solid #8a8a8a;
      height: 100px;
    }
    .submitButton {
      width: 120px;
      height: 40px;
      border-radius: 20px;
      background-color: #76737f;
      color: #ffffff;
      font-size: 16px;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CommetItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const commentProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  .commentProfiledata {
    gap: 6px;
    align-items: center;

    .profileData {
      display: flex;
      gap: 4px;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #313131;
        font-style: normal;
        line-height: normal;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

export const CommentContentWrapper = styled.div``;
