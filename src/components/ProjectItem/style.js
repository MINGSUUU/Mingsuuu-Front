import styled from "styled-components";
import profile from "../../assets/icon-profile.png";

export const ProjectItemContainer = styled.div`
  border: 4px solid #b5b4b4;
  border-radius: 30px;
  width: 330px;
  height: 250px;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 30px;
`;

export const ProjectItemTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TitleUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DateBox = styled.div`
  width: 90px;
  height: 35px;
  border: 4px solid #c3c4e7;
  border-radius: 30px;
  color: #2152b3;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeadLineBox = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #808080;
`;

export const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -2px;
  h2 {
    a {
      color: #000;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ProjectInfoListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProjectInfoItem = styled.div`
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
