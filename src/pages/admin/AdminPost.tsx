import React from "react";
import * as A from "./Admin.styled";

function AdminPost (){
    return (
        <A.Wrapper>
            <A.Menu>
            <A.Top>
            <A.Headline> 회원 게시글 관리</A.Headline>
            <A.Select>
                <option value="groupboard">토론 모임 공고</option>
                <option value="freeboard">자유 게시글</option> 
            </A.Select>
            </A.Top>
            <A.Layout>
            <A.Table>
                <tr>
                    <th>글 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성 일자</th>
                    <th>관리</th>
                </tr>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
            </A.Table>
            </A.Layout>
            </A.Menu>     
        </A.Wrapper>
    )
}

export default AdminPost;





