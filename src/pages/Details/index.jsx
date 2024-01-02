import React,{useEffect, useState} from 'react'
import * as S from './style';
import * as I from '../../assets'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function Details() {
    const {id} = useParams()
    const [name,setName]  = useState("")
    const [content, setContent] = useState("")
    const [tag,setTags] = useState([])
    const [date,setDate] = useState("")
    const [comment,setComment] = useState([])
    const accessToken = localStorage.getItem("accessToken")

    const fetch = async () => {
        await axios.get(`http://192.168.117.15:8088/board/auth/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((res) => {
          setName(res.data.author)
          setContent(res.data.content)
          setTags(res.data.fieldList)
          setDate(`${res.data.startDate.split("").map((v) => v === "-" ? "." : v).join("")}~${res.data.endDate.split("").map((v) => v === "-" ? "." : v).join("")}`)
          setComment(res.data.commentResponseList)
        })
    }

   useEffect(() => {
     fetch()
   }, [])

    console.log(date)
  return (
    <S.DetailsWrapper>
    <S.DetailInlineWrapper>
    <S.DetailsIconBox>  
        <Link to="/">
        <I.back />
        </Link>
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
            {content}
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
                comment.map((i)=>(
                    <CommentItem 
                        key={i.commentId}
                        date={i.date}
                        comment={i.comment}
                        profile={i.profileUrl}
                        author={i.author}
                        createDate={i.createDate}
                    />
                ))
            }
        </S.CommentListWrapper>
    </S.DetailInlineWrapper>
    </S.DetailsWrapper>
  );
}

export default Details;

export function CommentItem({date,comment,author,profileUrl}) {
    return(
        <S.CommetItemWrapper>
            <S.commentProfileWrapper>
                <S.profileImage>
                    <img src={profileUrl} alt="프로필" />
                </S.profileImage>
                <div className='profileData' >
                <h4>{author}</h4>
                <p>{`${date}`}</p>
                </div>
            </S.commentProfileWrapper>
            <S.CommentContentWrapper>
                {comment}
            </S.CommentContentWrapper>
        </S.CommetItemWrapper>
    )
}