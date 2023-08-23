import React from "react";
import * as A from "./Admin.styled";

function AdminGroup (){
    return (
        <div>
            <section>
            <A.MenuTop>
            <A.Headline>토론 모임 관리</A.Headline>
            <A.Select>
                <option value="좋아요">좋아요</option>
                <option value="조회">조회</option>
                <option value="업로드">활동 빈도</option>   
            </A.Select>
            </A.MenuTop>
            <A.Table>
            <thead>
                <tr>
                    <th>좋아요</th>
                    <th>모임명</th>
                    <th>모임장</th>
                    <th>인원</th>
                    <th>관리</th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>42</td>
                    <td>가나다바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>94</td>
                    <td>가나다라마바사</td>
                    <td>고구마</td>
                    <td>10</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>89</td>
                    <td>가나다바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>    
                <tr>
                    <td>87</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>68</td>
                    <td>가다바사</td>
                    <td>싹트네</td>
                    <td>22</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>55</td>
                    <td>가나다바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>    
                <tr>
                    <td>47</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>12</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>38</td>
                    <td>가다바사</td>
                    <td>싹트네</td>
                    <td>22</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>가다바사</td>
                    <td>싹트네</td>
                    <td>22</td>
                    <td>
                        <A.AdminButton>수정</A.AdminButton>
                        <A.AdminButton>삭제</A.AdminButton>
                    </td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>가다바사</td>
                    <td>싹트네</td>
                    <td>22</td>
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

export default AdminGroup;