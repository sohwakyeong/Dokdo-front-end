import React from "react";
import * as Reply from "./InquiryReply.styled";

function InquiryReply (){
    return (
        <div>
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
            <Reply.Button>답변 전송</Reply.Button>
        </Reply.Main>
        </Reply.Wrapper>
        </div>
    )
}

export default InquiryReply;