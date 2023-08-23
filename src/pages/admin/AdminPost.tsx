import React from "react";
import * as A from "./Admin.styled";

function AdminPost (){
    return (
        <div>
        <section>
            <A.MenuTop>
            <A.Headline> 회원 게시글 관리</A.Headline>
            <A.Select>
                <option value="groupboard">토론 모임 공고</option>
                <option value="freeboard">자유 게시글</option> 
            </A.Select>
            </A.MenuTop>
            <A.Table>
                <thead>
                <tr>
                    <th>글 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성 일자</th>
                    <th>관리</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>101</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>102</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>103</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>104</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>105</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>106</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>107</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>108</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>109</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                </tbody>
            </A.Table>        
        </section>
        </div>
    )
}

export default AdminPost;





