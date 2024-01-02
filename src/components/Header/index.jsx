import * as I from '../../assets';
import LoginTemplate from '../../modals/LogInModal';
import SignUpTemplate from '../../modals/SignUpModal';
import * as S from './style';
import { useCallback, useState } from "react";
import profile from '../../assets/icon-profile.png'
import { useNavigate } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const router = useNavigate()

  const onClick = useCallback(() => {
    console.log("open login modal");
    setOpen(!open);
  }, [open]);

  const onClick2 = () => {
    console.log("open signup modal");
    setOpen2(!open2);
  };
 
  const accessToken = localStorage.getItem("accessToken")
    return (
      <S.HeaderContainer>
        <I.logo />
        <S.HeaderTextBox>
            <span onClick={() => !accessToken ? onClick2() : router("/writing")}>{accessToken ? "새 글 쓰기" : "회원가입"}</span>
            <SignUpTemplate open={open2} close={onClick2} setOpen2={setOpen2} setOpen={setOpen} />
            <span onClick={() => !accessToken ? onClick() : null}>{accessToken ? <S.Profile /> : "로그인"}</span>
            <LoginTemplate open={open} close={onClick} setOpen={setOpen} setOpen2={setOpen2} />
        </S.HeaderTextBox>
      </S.HeaderContainer>
    );
}

export default Header;