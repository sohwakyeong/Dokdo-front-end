
import React, { useEffect, useState } from 'react';
import * as EditStyle from './EditProfile.styled';
import UserIcon from '../../../assets/img/userprofile.png';
import { getCookie } from '../../../helper/Cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 데이터 API. fetchData할 때는 axios를 써야함
// 여기서는 get 요청으로 이메일만 받아오면 됨

function EditProfileComponent() {
// 유저 정보 가져옴
  const navigate = useNavigate();

  const [userData, setUserData] = useState<{
    email: string;
    password: string;
    profilePic: string;
    introduction: string;
    user_id:number;
  } | null>(null);

  const loginToken = getCookie('loginToken'); // getCookie 함수로 'loginToken' 쿠키 값을 가져옵니다.

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('유저 정보 가져오기 에러:', error);
        navigate('/login');
      });
  }, [navigate, loginToken]);

  if (!userData) {
    // userData가 없으면 로딩 또는 에러 메시지 표시
    return <div>로딩 중...</div>;
  }


  // 저장하기 함수
const onClickSubmit = () => {



}
  
  return (
    <EditStyle.Container>
      <EditStyle.Wrapper>
        <EditStyle.UserIcon src={UserIcon} alt="유저 설정 이미지" />
        <EditStyle.IconDes>
          5mb 이하의 크기로 파일을 첨부해주세요.
        </EditStyle.IconDes>
        <EditStyle.IconDes>
          pdf, jpeg 파일만 업로드가 가능합니다.
        </EditStyle.IconDes>
      </EditStyle.Wrapper>
      <EditStyle.Wrapper>
        <EditStyle.FormTag>
          <EditStyle.Tag>이메일</EditStyle.Tag>
          <EditStyle.TagPlus>
            *변경을 원하시면 문의하기를 이용해주세요.
          </EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Email
            readOnly
            id="email_val"
            type="text"
            name="is_Useremail"
            value={userData.email}
          />
        </EditStyle.FormInput>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호</EditStyle.Tag>
          <EditStyle.TagPlus>*(필수)</EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            placeholder="사용하실 비밀번호를 입력해주세요."
          />
        </EditStyle.FormInput>
        <EditStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
        </EditStyle.Alert>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호 확인</EditStyle.Tag>
          <EditStyle.TagPlus>*(필수)</EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            placeholder="사용하실 비밀번호를 다시 입력해주세요."
          />
        </EditStyle.FormInput>
        <EditStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
        </EditStyle.Alert>

        {/* 닉네임 수정하고싶으면 일단 관리자한테 연락하라고 햇음 회의때 물어보기 */}
        <EditStyle.FormTag>
          <EditStyle.Tag>닉네임</EditStyle.Tag>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="name_val"
            type="text"
            name="is_Username"
           
          />
        </EditStyle.FormInput>

        {/* 한줄 소개 띄우는 곳이 없는데 이거 어디에 띄워지는 건지?? 만약 띄운다면 마이페이지의 닉네임 하단과 모임가입 신청할 때 개인의 프로필도 같이 보내지는 건지?? 회의때 물어보기 */}
        <EditStyle.FormTag>
          <EditStyle.Tag>한 줄 소개</EditStyle.Tag>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="introduce_val"
            type="text"
            name="is_Introduce"
            placeholder="15문자 이내로 입력해주세요."
          />
        </EditStyle.FormInput>
      </EditStyle.Wrapper>
      {/* 나중에 Link to="" 지우고 navigate로 이동? */}
      <EditStyle.SubmitButton onClick={onClickSubmit}>
        저장하기
      </EditStyle.SubmitButton>
      <EditStyle.DeleteWrap>
        <EditStyle.DeleteAccount to="/user/deleteaccount">
          탈퇴하기
        </EditStyle.DeleteAccount>
      </EditStyle.DeleteWrap>
    </EditStyle.Container>
  );
}

export default EditProfileComponent;
