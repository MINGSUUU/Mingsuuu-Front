import { Link } from 'react-router-dom';
import * as S from './style'

function ProjectItem({item}) {
  const nowDate = new Date().getDate()
    return (
        <S.ProjectItemContainer>
            <S.ProjectItemTitleBox>
                <S.TitleUserBox>
                  <S.Profile />
                  <span>{item.author}</span>
                </S.TitleUserBox>
                <S.DateBox>
                  마감 {+item.endDate.slice(8) - nowDate}일 전!
                </S.DateBox>
            </S.ProjectItemTitleBox>
                <S.DeadLineBox>
                  마감일 | {item.endDate}
                </S.DeadLineBox>
                <S.ProjectInfoBox>
                  <h2>
                    <Link to={`/details/${item.boardId}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <S.ProjectInfoListBox>
                    {item.fieldList.map((field, idx) => (
                      <S.ProjectInfoItem key={idx}>
                        <span>{field}</span>
                        </S.ProjectInfoItem>
                    ))}
                  </S.ProjectInfoListBox>
                </S.ProjectInfoBox>
        </S.ProjectItemContainer>
    );
}

export default ProjectItem;