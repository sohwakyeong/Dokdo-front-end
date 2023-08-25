import React from "react";
import * as A from './Admin.styled';

function AdminUser() {
    return (
        <A.Wrapper>
            <A.Menu>
            <A.Headline>회원 정보 관리</A.Headline>
            <A.Total>총 100 명</A.Total>
            <A.Layout> 
                <A.Table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>관리</th>
                </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                 <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
	            </tr>
                <tr>
                    <td>강낭콩</td>
                    <td>abcabd@test.com</td>
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

export default AdminUser;