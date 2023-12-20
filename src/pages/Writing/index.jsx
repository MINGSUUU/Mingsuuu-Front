import React from 'react'
import { useState } from 'react';
import * as S from './style';
import * as I from '../../'
import MDEditor from "@uiw/react-md-editor";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// '프론트엔드', '백엔드', '디자이너', 'PM', '안드로이드', 'ios', '기획자', '데브옵스'
function Writing() {
    const options = [
        {value: '전체', label: '전체'},
        {value: '프론트엔드', label: '프론트엔드'},
        {value: '백엔드', label: '백엔드'},
        {value: '디자이너', label: '디자이너'},
        {value: 'PM', label: 'PM'},
        {value: '안드로이드', label: '안드로이드'},
        {value: 'ios', label: 'ios'},
        {value: '기획자', label: '기획자'},
        {value: '데브옵스', label: '데브옵스'},
    ];
    const [value, setValue] = useState(null);
  return (
    <S.CommentWrapper>
    <h1>제목</h1>
    <S.SelectInputBox>
    <S.CommentInputWrapper>
      <S.SelectInput placeholder='제목을 입력하세요'/>
    </S.CommentInputWrapper>
    </S.SelectInputBox>
    <h1>모집 분야</h1>
    <S.SelectBoxListWrapper>
    <S.styledSelect
    placeholder={'직군 선택'}
    options = {options}
    />
    <S.DateBox>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      slotProps={{textField: {size: 'small', fullWidth:true}}}      />
    </LocalizationProvider>
    </S.DateBox>
    </S.SelectBoxListWrapper>
<S.Markarea>
	<div data-color-mode="light">
		<MDEditor 
    preview='edit'
    height={300}
    />
    <S.ButtonWrapper>
    <S.Button1>취소</S.Button1>
    <S.Button2>글 등록</S.Button2>
    </S.ButtonWrapper>
  </div>
</S.Markarea>
</S.CommentWrapper>
  )
};

export default Writing;