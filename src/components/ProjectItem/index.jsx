import * as S from './style'

function ProjectItem(props) {
    return (
        <S.ProjectItemContainer>
            <S.ProjectItemTitleBox>
                <S.TitleUserBox>
                  <div style={{width: '30px', height: '30px', borderRadius: '50%', background: 'red'}} />
                  <span>나연균</span>
                </S.TitleUserBox>
                <S.DateBox>
                  마감 6일 전!
                </S.DateBox>
            </S.ProjectItemTitleBox>
                <S.DeadLineBox>
                  마감일 | 2023.12.21
                </S.DeadLineBox>
                <S.ProjectInfoBox>
                  <h2>프로젝트 같이 할 사람 찾아요</h2>
                  <S.ProjectInfoListBox>
                    <S.ProjectInfoItem>
                        <span>프론트엔드</span>
                    </S.ProjectInfoItem>
                  </S.ProjectInfoListBox>
                </S.ProjectInfoBox>
        </S.ProjectItemContainer>
    );
}

export default ProjectItem;