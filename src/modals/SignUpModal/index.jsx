import React, { useCallback, useState } from "react";
import * as S from "./style";
import * as I from "../../assets/index";
import {Link} from 'react-router-dom'


const SignUpTemplate = ({open, close}) => {
    const [form, setForm] = useState({
        email:"",
        password:"",
        name:"",
    });

    const onChange = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

return open ? (
        <S.SignUpModalContainer>
            <S.ModalBackGround>
      <S.ModalBox>
        <S.CloseWrapper>
            <button onClick={close}><I.cancel/></button>
        </S.CloseWrapper>
        <S.LogoHeader>
        <I.logo />
        회원가입
        </S.LogoHeader>
        
        <S.SignUpBody className="login-body">
          <div>
            <input 
            id="name"
            name="name"
            type="name"
            placeholder="이름"
            onChange={onChange}
            />  
            </div>
            <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일"
              onChange={onChange}
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChange}
            />
          </div>
        </S.SignUpBody>
        <S.SignUpFooterText>
        <span>이미 회원이라면, <Link to="/login">로그인</Link>하세요.</span>        
        <span>이미 회원가입된 이메일입니다. </span>
        </S.SignUpFooterText>
        <S.SignUpFooter>
          <button onClick={close}>회원가입</button>
        </S.SignUpFooter>
      </S.ModalBox>
    </S.ModalBackGround>
        </S.SignUpModalContainer>
    ) : null;
}

export default SignUpTemplate