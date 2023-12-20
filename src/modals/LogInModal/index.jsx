import React, { useCallback, useState } from "react";
import * as S from "./style";
import * as I from "../../assets/index";
import {Link} from 'react-router-dom'

const LoginTemplate = ({open, close}) => {
const [form, setForm] = useState({
    email:"",
    password:"",
});

const onChange = useCallback((e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
}
, [form]);
    return open ? (
        <S.LogInModalContainer>
            <S.ModalBackGround>
      <S.ModalBox>
        <S.CloseWrapper>
            <button onClick={close}><I.cancel/></button>
        </S.CloseWrapper>
        <S.LogoHeader>
        <I.logo />
        로그인
        </S.LogoHeader>
        
        <S.LoginBody className="login-body">
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
        </S.LoginBody>
        <S.LoginFooterText>
        <span>아직 회원이 아니라면, <Link to="/signup">회원가입</Link>하세요.</span>        
        <span>아이디 또는 비밀번호가 일치하지 않습니다.</span>
        </S.LoginFooterText>
        <S.LoginFooter>
          <button onClick={close}>로그인</button>
        </S.LoginFooter>
      </S.ModalBox>
    </S.ModalBackGround>
        </S.LogInModalContainer>
    ) : null;
}

export default LoginTemplate;