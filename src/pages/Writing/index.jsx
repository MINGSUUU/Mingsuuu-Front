import React from 'react'
import { useState } from 'react';
import * as S from './style';
import * as I from '../../'
import MDEditor from "@uiw/react-md-editor";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { API } from '../../api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    const router = useNavigate()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [endDate, setEndDate] = useState(new Date());

    const [fieldList, setFieldList] = useState([]) 
    const [field, setField] = useState(null)
    const handleFieldList = (selected) => {
      setField(selected)
      if (fieldList.length === 5) return
      else {
        setFieldList((prev) => [...prev, selected])
        setField("")
      }
    }

    const accessToken = localStorage.getItem("accessToken")

    const postEdit = () => {
      axios.post('http://192.168.117.15:8088/board/auth', {
        title,
        content,
        endDate: `${endDate.getFullYear().toString()}-${(endDate.getMonth() + 1).toString()}-${endDate.getDate().toString()}`,
        fieldList: fieldList.map((field) => field.value)
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
      }})
      .then((res) => {
        router("/")
      })
    };
    console.log(title, content, `${endDate.getFullYear().toString()}-${(endDate.getMonth() + 1).toString()}-${endDate.getDate().toString()}`, fieldList)

  return (
    <S.CommentWrapper>
    <h1>제목</h1>
    <S.SelectInputBox>
    <S.CommentInputWrapper>
      <S.SelectInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder='제목을 입력하세요' />
    </S.CommentInputWrapper>
    </S.SelectInputBox>
    <h1>모집 분야</h1>
    <S.SelectBoxListWrapper>
      <S.SelectedBox>

    <S.styledSelect
    placeholder={'직군 선택'}
    options={options}
    value={field}
    onChange={handleFieldList}
    />
    <S.SelectedListBox>{fieldList.map((field) => <span>{field.value}</span>)}</S.SelectedListBox>
      </S.SelectedBox>
    <S.DateBox>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date.$d)}
      slotProps={{textField: {size: 'small', fullWidth:true}}} />
    </LocalizationProvider>
    </S.DateBox>
    </S.SelectBoxListWrapper>
<S.Markarea>
	<div data-color-mode="light">
  <MDEditor 
    value={content}
    onChange={setContent}
    preview='edit'
    height={300}
    />
    <S.ButtonWrapper>
    <S.Button1>취소</S.Button1>
    <S.Button2 onClick={postEdit}>글 등록</S.Button2>
    </S.ButtonWrapper>
  </div>
</S.Markarea>
</S.CommentWrapper>
  )
};

export default Writing;