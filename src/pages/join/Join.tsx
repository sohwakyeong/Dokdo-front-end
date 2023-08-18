import React from 'react';
import {} from 'react-router-dom';
import * as J from './Join.styled';

function JoinComponent() {
    
  return (
    <J.Container>
      <J.TitleWrap>
        <J.Title>회원 가입</J.Title>
        <J.Description>회원이 되어 독서 토론 모임에 참여하세요!</J.Description>
      </J.TitleWrap>
      <J.Wrapper>
        <J.FormTag>
          <J.Tag>이메일</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.EmailInput
            id="email_val"
            type="text"
            name="is_Useremail"
            placeholder="이메일을 입력해주세요."
          />
          <J.Egoll>@</J.Egoll>
          <J.EmailSelect
            id="email2_val"
            name="is_Useremail2"
            className="select_ty1"
          >
            <option value="">선택하세요</option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="yahoo.co.kr">yahoo.co.kr</option>
            <option value="yahoo.com">yahoo.com</option>
          </J.EmailSelect>

          <J.DupleButton
            type="button"
            id="email_check"
            name="is_NotDuple"
            value="중복 확인"
          />
        </J.FormInput>
        <J.FormTag>
          <J.Tag>비밀번호</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>

        <J.Input
          id="pwd_val"
          type="password"
          name="is_Password"
          placeholder="비밀번호를 입력해주세요."
        />
        <J.FormTag>
          <J.Tag>비밀번호 확인</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.Input
          id="pwd_cnf_val"
          type="password"
          name="is_Password"
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <J.FormTag>
          <J.Tag>닉네임</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.Input
          id="name_val"
          type="text"
          name="is_Username"
          placeholder="사용하실 닉네임을 입력해주세요."
        />
        <J.FormTag>
          <J.Tag>한 줄 소개</J.Tag>
        </J.FormTag>
        <J.Input
          id="introduce_val"
          type="text"
          name="is_Introduce"
          placeholder="10문자 이상 입력해주세요."
        />
        <J.FormTag>
          <J.Tag>전화번호</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.Input
          id="phone1_val"
          type="text"
          name="is_Userphone1"
          placeholder='휴대폰 번호 입력("-" 제외 11자리 숫자 입력)'
        />
        <J.FormTag>
          <J.Tag>성별 (선택)</J.Tag>
        </J.FormTag>
        <J.FormInput>
          <J.GenderButton
            type="button"
            name="is_Gender"
            id="gender"
            value="남성"
          />
          <J.GenderButton
            type="button"
            name="is_Gender"
            id="gender"
            value="여성"
          />
        </J.FormInput>
      </J.Wrapper>
    </J.Container>
  );
}

export default JoinComponent;
