import * as S from './style';
import * as I from '../../assets'
import ProjectItem from '../../components/ProjectItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
    const [projectList, setProjectList] = useState([]);
    const fetch = async () => {
      await axios.get("http://192.168.117.15:8088/board").then((res) => {
        setProjectList(res.data.boardResponseList)
      })
    }
    useEffect(() => {
      fetch()
    }, [])

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
        {projectList.map((project) => (
          <ProjectItem key={project.boardId} item={project} />
        ))}
        </S.ProjectListContainer>
      </S.MainContainer>
      
    );
}

export default Main;