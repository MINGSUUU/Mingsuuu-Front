import * as S from './style';
import * as I from '../../assets'
import ProjectItem from '../../components/ProjectItem';

function Main() {
    return (
      <S.MainContainer>
        <S.MainSelectBox>
            <h2>프로젝트</h2>
            <S.SelectInputBox>
            <I.search />
            <S.SelectInput placeholder='프로젝트를 검색해보세요.'/>
            </S.SelectInputBox>
        </S.MainSelectBox>
        <S.ProjectListContainer>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        </S.ProjectListContainer>
      </S.MainContainer>
      
    );
}

export default Main;