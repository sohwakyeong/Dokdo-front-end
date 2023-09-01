import React, { useState, useCallback, useEffect } from 'react';
import AxiosC from '@/helper/AxiosC';
import { useNavigate } from 'react-router-dom';
import * as SignupStyle from '@/pages/signup/Signup.styled';
import Modal from '@/components/common/modal/modal';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  const navigate = useNavigate();

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [personCheck, setPersonCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
  const [isAdversibilityeModalOpen, setIsAdversibilityModalOpen] =
    useState(false);

  // 유효성 검사 이메일
  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      );
  };

  // 유효성 검사 비밀번호
  const validatePwd = (password: string) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  // 유효성 검사 부분 함수명으로 줄임
  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;

  // 이메일
  const onChangeEmail = useCallback(async (e: { target: { value: any } }) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg('이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailMsg('확인되었습니다.');
    }
  }, []);

  // 비밀번호
  const onChangePwd = useCallback((e: { target: { value: any } }) => {
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg('영문, 숫자, 특수기호 포함 8~20자.');
    } else {
      setPwdMsg('확인되었습니다.');
    }
  }, []);

  //비밀번호 확인
  const onChangeConfirmPwd = useCallback(
    (e: { target: { value: any } }) => {
      const currConfirmPwd = e.target.value;
      setConfirmPwd(currConfirmPwd);

      if (currConfirmPwd !== password) {
        setConfirmPwdMsg('동일한 비밀번호를 입력해주세요.');
      } else {
        setConfirmPwdMsg('일치하는 비밀번호입니다.');
      }
    },
    [password],
  );
  // 약관 동의
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setPersonCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setPersonCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const personBtnEvent = () => {
    if (personCheck === false) {
      setPersonCheck(true);
    } else {
      setPersonCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (
      ageCheck === true &&
      useCheck === true &&
      personCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, personCheck, marketingCheck]);

  // 리로드 방지, 입력안한 칸 있으면 alert
  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (
        !(
          emailMsg === '확인되었습니다.' &&
          pwdMsg === '확인되었습니다.' &&
          confirmPwdMsg === '일치하는 비밀번호입니다.'
        )
      ) {
        return alert('유효한 아이디와 비밀번호를 입력해주세요.');
      }
      if (!(email && password && confirmPwd)) {
        return alert('빈칸 없이 입력해주세요.');
      }

      if (!(ageCheck && useCheck && personCheck)) {
        return alert('필수 약관을 모두 동의해주셔야 가입이 진행됩니다.');
      }

      // 위까지 응답 성공시 밑으로
      const response = await AxiosC.post(
        'http://localhost:3001/api/v1/auth/register',
        {
          email,
          password,
        },
      );
      console.log(response);
      navigate('/signupsuccess');
    } catch (e) {
      console.error(e);
    }
  };

  const onClickModalOpen = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsServiceModalOpen(true);
  };
  const onClickModalSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsServiceModalOpen(false);
  };
  const PersonalModalOpen = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsPersonalModalOpen(true);
  };
  const PersonalModalSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsPersonalModalOpen(false);
  };

  const AdversibilityModalOpen = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsAdversibilityModalOpen(true);
  };
  const AdversibilityModalSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsAdversibilityModalOpen(false);
  };

  return (
    <SignupStyle.Container>
      <SignupStyle.Wrapper>
        <SignupStyle.FormTag>
          <SignupStyle.Tag>이메일 주소</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="email_val"
            type="text"
            name="is_Useremail"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert className={isEmailValid ? 'success' : 'error'}>
          {emailMsg}
        </SignupStyle.Alert>
        {/* 여기에 중복된 이메일입니다 => 확인되었습니다로 바뀌는 거 삼항연산자로 ?isNotDuple === "확인되었습니다": "중복된 이메일입니다" */}
        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            // minLength 나중에 2에서 8로 바꾸기
            minLength={10}
            placeholder="영문, 숫자, 특수문자 포함 8~20자를 입력해주세요."
            autoComplete="off"
            value={password}
            onChange={onChangePwd}
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert className={isPwdValid ? 'success' : 'error'}>
          {pwdMsg}
        </SignupStyle.Alert>

        {/* 여기에 비밀번호 식별?해서 삼항연산자로 ?isNotFit === "확인되었습니다": "비밀번호는 영문, 숫자, 특수문자 포함 8~20자." */}

        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호 확인</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            // minLength 나중에 2에서 8로 바꾸기
            minLength={10}
            placeholder="비밀번호를 재입력해주세요."
            autoComplete="off"
            value={confirmPwd}
            onChange={onChangeConfirmPwd}
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert className={isConfirmPwd ? 'success' : 'error'}>
          {confirmPwdMsg}
        </SignupStyle.Alert>
        {/* 여기에 비밀번호 식별?해서 위에 쓴 비밀번호랑 같은지 안 같은지 삼항연산자로 ?isNotFit === "확인되었습니다": "ehddl" */}
      </SignupStyle.Wrapper>

      <SignupStyle.CheckContainer>
        <SignupStyle.Wrapper2>
          <SignupStyle.CheckWrapper>
            <SignupStyle.AllCheckLabel>
              <SignupStyle.AllCheckInput
                type="checkbox"
                id="allCheck"
                onChange={allBtnEvent}
                checked={allCheck}
              />
              <SignupStyle.Ptag>약관 전체 동의</SignupStyle.Ptag>
            </SignupStyle.AllCheckLabel>

            <SignupStyle.CheckBox>
              <SignupStyle.CheckLine>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="ageCheck"
                    onChange={ageBtnEvent}
                    checked={ageCheck}
                  />
                  <p>[필수] 본인은 만 14세 이상입니다.</p>
                </SignupStyle.CheckLabel>
              </SignupStyle.CheckLine>

              <SignupStyle.CheckLine>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="usingListCheck"
                    onChange={useBtnEvent}
                    checked={useCheck}
                  />
                  <p>[필수] 서비스 이용 약관 동의</p>
                </SignupStyle.CheckLabel>

                <SignupStyle.ModalButton onClick={onClickModalOpen}>
                  <div>내용보기</div>
                </SignupStyle.ModalButton>

                {isServiceModalOpen && (
                  <Modal>
                    <h1>서비스 이용 약관</h1>
                    <p>
                      제1조 (목적) 이 약관은 독도 (이하 “회사” 또는 “독도”)가
                      제공하는 독도 및 독도 관련 제반 서비스의 이용과 관련하여
                      회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을
                      규정함을 목적으로 합니다. 제2조 (정의) 이 약관에서
                      사용하는 용어의 정의는 다음과 같습니다. (1) 회사: “독도”를
                      말합니다. (2) 사이트: 회사가 운영하는 웹 및 애플리케이션
                      사이트를 말합니다. (3) 이용자: 사이트에 접속하여 이 약관에
                      따라 회사가 제공하는 서비스를 받는 회원 및 비회원을
                      말합니다. (4) 회원: 개인정보를 제공하여 사이트 회원가입을
                      한 자를 말합니다. (5) 멤버: 약관에 따라 “회사”와
                      이용계약을 체결하고 “회사”가 제공하는 “유료 서비스”를
                      이용하는 “회원”을 말합니다. (6) 서비스: 구현되는
                      단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)
                      혹은 물리적 형태와 상관없이 “이용자”가 이용할 수 있는 독도
                      및 독도 관련 모든 서비스를 의미합니다. (7) 유료 서비스:
                      “회사”가 유료로 제공하는 각종 온오프라인콘텐츠(각종
                      정보콘텐츠, 기타 유료콘텐츠를 포함) 및 제반 서비스를
                      의미합니다. (8) 독서 토론 모임 서비스: “회사”가 제공하는
                      “무료 서비스” 중 독서 토론 모임 서비스를 의미합니다. 제 3
                      조 (약관의 게시와 개정) (1) 회사는 이 약관의 내용을
                      이용자가 알 수 있도록 사이트의 초기 서비스 화면에
                      게시합니다. 다만, 약관의 구체적 내용은 이용자가 연결화면을
                      통하여 볼 수 있도록 합니다. . .
                    </p>
                    <SignupStyle.ModalSubmitButton onClick={onClickModalSubmit}>
                      닫기
                    </SignupStyle.ModalSubmitButton>
                  </Modal>
                )}
              </SignupStyle.CheckLine>
              <SignupStyle.CheckLine>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="personalInfoCheck"
                    onChange={personBtnEvent}
                    checked={personCheck}
                  />
                  <p>[필수] 개인정보 수집 및 이용 동의</p>
                </SignupStyle.CheckLabel>
                <SignupStyle.ModalButton onClick={PersonalModalOpen}>
                  <div>내용보기</div>
                </SignupStyle.ModalButton>

                {isPersonalModalOpen && (
                  <Modal>
                    <h1>개인 정보 수집 및 이용</h1>
                    <p>
                      개인정보의 수집항목 및 이용목적 1. 회사가 개인정보를
                      수집하는 목적은 이용자의 신분과 서비스 이용의사를 확인하여
                      최적화되고 맞춤화된 서비스를 제공하기 위함입니다. 회사는
                      최초 회원가입 시 서비스의 본질적 기능을 수행하기 위해
                      반드시 필요한 최소한의 정보만을 수집하고 있으며 회사가
                      제공하는 서비스 이용에 따라 대금결제, 물품배송 및 환불
                      등에 필요한 정보를 추가로 수집할 수 있습니다. 2. 회사는
                      개인정보를 수집•이용목적 이외에 다른 용도로 이를
                      이용하거나 이용자의 동의 없이 제3자에게 이를 제공하지
                      않습니다. 3. 회사는 다음과 같은 목적으로 개인정보를
                      수집하여 이용할 수 있습니다. 다만, 전자상거래 등에서의
                      소비자보호에 관한 법률, 국세기본법, 전자금융거래법 등
                      관련법령에 따라 개인정보 항목이 추가되는 경우 수집하는
                      화면에서 별도로 고지하고 동의를 받아 이용할 수 있습니다.
                    </p>
                    <SignupStyle.ModalSubmitButton
                      onClick={PersonalModalSubmit}
                    >
                      닫기
                    </SignupStyle.ModalSubmitButton>
                  </Modal>
                )}
              </SignupStyle.CheckLine>
              <SignupStyle.CheckLine>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="marketingInfoCheck"
                    onChange={marketingBtnEvent}
                    checked={marketingCheck}
                  />
                  <p>[선택] 광고성 정보 수신 동의 및 활용 동의 </p>
                </SignupStyle.CheckLabel>

                <SignupStyle.ModalButton onClick={AdversibilityModalOpen}>
                  <div>내용보기</div>
                </SignupStyle.ModalButton>

                {isAdversibilityeModalOpen && (
                  <Modal>
                    <h1>광고성 정보 수신 동의 및 활용 동의</h1>
                    <p>
                      마케팅 수신 동의 1. 다양한 정보 안내를 위해 마케팅 활용에
                      동의하신 회원에 한하여 아래와 같은 정보를 전달합니다. 제공
                      정보 : 독서 토론 모임 안내, 프로모션, 이벤트 2. 거래
                      안전을 위한 여행상품 이용사항, 약관 및 서비스 변경에 대한
                      서비스 공지는 수신 동의 여부와 상관없이 발송됩니다. 3.
                      향후 정보제공을 원치 않거나, 새롭게 동의를 하고자 하는
                      경우에는 광고 수신 정보 설정에서 마케팅 활용 동의 여부를
                      변경할 수 있습니다. 4. 이용자의 사전 동의를 받지 않은
                      영리목적의 광고성 정보를 전송하지 않습니다. 단, 다음의
                      경우에는 「정보통신망 이용촉진 및 정보보호 등에 관한
                      법률」 제50조에 근거하여 사전 동의 없이 광고성 정보를
                      전송할 수 있습니다. 5. 재화 등의 거래관계를 통하여
                      고객으로부터 직접 연락처를 수집한 자가 6개월 이내에 자신이
                      처리하고 고객과 거래한 것과 동종의 재하 등에 대한
                      영리목적의 광고성 정보를 전송하려는 경우 마케팅 활용 동의
                      거부 시 회원가입은 가능하나, 각종 광고 및 이벤트 안내 등의
                      서비스가 제한됩니다.
                    </p>
                    <SignupStyle.ModalSubmitButton
                      onClick={AdversibilityModalSubmit}
                    >
                      닫기
                    </SignupStyle.ModalSubmitButton>
                  </Modal>
                )}
              </SignupStyle.CheckLine>
            </SignupStyle.CheckBox>
          </SignupStyle.CheckWrapper>{' '}
        </SignupStyle.Wrapper2>
      </SignupStyle.CheckContainer>
      <SignupStyle.SubmitButton type="submit" onClick={onSubmitHandler}>
        {' '}
        가입하기
      </SignupStyle.SubmitButton>
    </SignupStyle.Container>
  );
};
export default SignupComponent;
