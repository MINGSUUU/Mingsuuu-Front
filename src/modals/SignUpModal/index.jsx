import React, { useCallback, useState } from "react";
import * as S from "./style";
import * as I from "../../assets/index";
import {Link} from 'react-router-dom'
import axios from "axios";
import { API } from "../../api";


const SignUpTemplate = ({open, close, setOpen2, setOpen}) => {
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

    const onClickSignUp = useCallback(() => {
        axios.post("http://192.168.117.15:8088/auth/signup", {
            email: form.email,
            password: form.password,
            name: form.name,
            role: "ROLE_USER",
            profileUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwin",
          })
          .then((res) => {
            setOpen2(false)
            setOpen(true)
          })
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
        <span>이미 회원이라면, <b onClick={() => {
          setOpen2(false)
          setOpen(true)
        }}>로그인</b>하세요.</span>        
        <span>이미 회원가입된 이메일입니다. </span>
        </S.SignUpFooterText>
        <S.SignUpFooter>
          <button onClick={onClickSignUp}>회원가입</button>
        </S.SignUpFooter>
      </S.ModalBox>
    </S.ModalBackGround>
        </S.SignUpModalContainer>
    ) : null;
}

export default SignUpTemplate