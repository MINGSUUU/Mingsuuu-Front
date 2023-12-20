import * as I from '../../assets';
import LoginTemplate from '../../modals/LogInModal';
import SignUpTemplate from '../../modals/SignUpModal';
import * as S from './style';
import { useCallback, useState } from "react";


function Header() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const onClick = useCallback(() => {
    console.log("open login modal");
    setOpen(!open);
  }, [open]);

  const onClick2 = () => {
    console.log("open signup modal");
    setOpen2(!open2);
  };

    return (
      <S.HeaderContainer>
        <I.logo />
        <S.HeaderTextBox>
            <span onClick={onClick2}>회원가입</span>
            <SignUpTemplate open={open2} close={onClick2} />
            <span onClick={onClick}>로그인</span>
            <LoginTemplate open={open} close={onClick} />
        </S.HeaderTextBox>
      </S.HeaderContainer>
    );
}

export default Header;