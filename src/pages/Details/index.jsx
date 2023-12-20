import React,{useState} from 'react'
import * as S from './style';
import * as I from '../../assets'



function Details() {
    const [name,setName]  = useState("홍길동")
    const [tag,setTags] = useState(["프론트엔드","백엔드"])
    const [date,setDate] = useState("2023.12.15 ~ 2023.12.21")
    const [comment,setComment] = useState([{content:"dddddddddd",username:"김민수",date:'2023-12-16 20:41:46'},{content:"dddddddddd",username:"김민수",date:'2023-12-16 20:41:46'}])
  return (
    <S.DetailsWrapper>
    <S.DetailInlineWrapper>
    <S.DetailsIconBox>   
        <I.back />
    </S.DetailsIconBox>
    <S.DetailsContainer>
    <h1>프로젝트 같이 할 사람 찾습니다.</h1>
    <S.DetailInfoList>
    {
        tag.map((i)=>(
            <S.DetailsInfoItem>
            <span>{i}</span>
        </S.DetailsInfoItem>
        ))
    }
    </S.DetailInfoList>
    </S.DetailsContainer>
    <S.profileWrapper>
            <S.profileImage>
                <img src="" alt="" />
            </S.profileImage>
            <div className='profileData' >
            <h1>{name}</h1>
            <p>{`| ${date}`}</p>
            </div>
        </S.profileWrapper>
        <S.Line/>
        <S.detailContentWrapper>
            {`블록/아이템
매다는 표지판
표지판처럼 글자를 적어 장식할 수 있는 아이템이다. 기존의 표지판과는 달리 다른 블록 아랫면에 걸어두는 형태로 설치되는데 막대에 거는 형태, 천장에 거는 형태, 좁은 곳에 거는 형태가 있다. 표지판 위에 표지판을 놓을 수 있는 것처럼 걸이형 표지판 아래에 걸이형 표지판을 걸 수도 있다.
사슬과 껍질 벗긴 원목으로 제작이 가능하다.
대나무 관련 아이템
대나무 블록
대나무 9개를 뭉쳐 만드는 블록. 대나무를 뭉친 듯한 모습을 하고 있으며 원목처럼 껍질을 벗길 수 있다. 대나무 판자로 산출이 가능한데 이때는 2개만 나온다.
대나무 판자
대나무 블록을 가공하여 나오는 블록. 대나무 판자를 이용해 계단, 반 블록, 문, 울타리, 다락문, 뗏목을 제작할 수 있다.
대나무 모자이크
대나무 반 블록을 이용해 만들 수 있는 블록으로 종류는 일반 블록, 계단이 있다.
대나무 뗏목
대나무를 이용한 새로운 수상 이동 수단이다. 기존의 보트와 거의 유사하다.`}
        </S.detailContentWrapper>
        <S.CommentWrapper>
            <h1>댓글<span>{2}</span></h1>
            <S.CommentInputWrapper>
                <S.profileImage>
                    <img src="" alt="" />
                </S.profileImage>
               <div className='commentForm'>
                <textarea placeholder='댓글을 입력해주세요' />
                <button className='submitButton'>댓글 등록</button>
               </div>
            </S.CommentInputWrapper>
        </S.CommentWrapper>
        <S.CommentListWrapper>
            {
                comment.map((i,idx)=>(
                    <CommentItem 
                        date={i.date}
                        content={i.content}
                        profile={""}
                        username={i.username}
                    />
                ))
            }
        </S.CommentListWrapper>
    </S.DetailInlineWrapper>
    </S.DetailsWrapper>
  );
}

export default Details;

export function CommentItem({date,content,username,profile}) {
    return(
        <S.CommetItemWrapper>
            <S.commentProfileWrapper>
                <S.profileImage>
                    <img src={profile} alt="" />
                </S.profileImage>
                <div className='profileData' >
                <h4>{username}</h4>
                <p>{`${date}`}</p>
                </div>
            </S.commentProfileWrapper>
            <S.CommentContentWrapper>
                {content}
            </S.CommentContentWrapper>
        </S.CommetItemWrapper>
    )
}