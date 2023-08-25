import React from "react";
import * as A from "./Admin.styled";

function AdminGroup (){
    return (
        <A.Wrapper>
            <A.Menu>
            <A.Top>
            <A.Headline>토론 모임 관리</A.Headline>
            <A.Select>
                <option value="좋아요">좋아요</option>
                <option value="조회">조회</option>
                <option value="업로드">활동 빈도</option>   
            </A.Select>
            </A.Top>
            <A.Layout> 
                <A.Table>
                <tr>
                    <th>좋아요</th>
                    <th>모임명</th>
                    <th>모임장</th>
                    <th>인원</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>가나다아자아자아자아장자자자라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>90</td>
                    <td>가나다라마바사</td>
                    <td>감자에싹이나서잎이나서포테토칩</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>80</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
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

export default AdminGroup;