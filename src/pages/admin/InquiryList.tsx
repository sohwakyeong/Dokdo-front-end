import React, { useState } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import * as A from './Admin.styled';
import * as Reply from "./InquiryReply.styled";

function InquiryList (){
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
        <div>
            <section>
            <A.MenuTop>
            <A.Headline>문의사항</A.Headline>
            <A.Select> 문의유형 
                <option value="독서모임">독서모임</option>
                <option value="게시글">게시글</option> 
                <option value="회원관리">회원관리</option>
                <option value="기타문의">기타문의</option> 
            </A.Select>
            </A.MenuTop>
            <A.Table>
            <thead>
                <tr>
                    <th>문의 유형</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton>답변하기</A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton>답변하기</A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.ReplyButton>답변하기</A.ReplyButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>답변완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>답변완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>답변완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                        <A.CheckButton>답변완료</A.CheckButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>회원관리</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.08.31</td>
                    <td>
                    <button onClick={openModal}>모달 열기</button>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    
                    <Reply.Wrapper>
                        <Reply.Header>
                        <Reply.Container>
                             <Reply.Title>문의 답변</Reply.Title>
                        </Reply.Container>
                        </Reply.Header>
                    <Reply.Main>
                        <Reply.Container>
                        <Reply.Name>제목</Reply.Name>
                        <Reply.Input placeholder="제목을 입력해 주세요" />
                        <Reply.Name>내용</Reply.Name>
                        <Reply.Detail placeholder="문의사항을 입력해 주세요" />
                        </Reply.Container>
                            <div></div>
                        <button onClick={closeModal}>닫기</button>
                    </Reply.Main>
                    </Reply.Wrapper>            
                
                    </Modal>
                    <Link to="/admin/inquiryReply"> 답변하기 </Link>
                    </td>
                </tr>
                </tbody>
            </A.Table>
            </section>
        </div>
    )
}

export default InquiryList;