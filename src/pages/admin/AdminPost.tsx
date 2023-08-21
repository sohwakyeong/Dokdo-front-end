import React from "react";
import * as A from "./Admin.styled";

function AdminPost (){
    return (
        <div>
        <section>
            <A.MenuTop>
            <A.Headline>게시글 관리</A.Headline>
            <A.Toggle>셀렉터</A.Toggle>
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
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>가나다라마바사</td>
                    <td>싹난 감자</td>
                    <td>23.01.12</td>
                    <td>
                        <button>수정</button>
                        <button>삭제</button>
                    </td>
                </tr>
                </tbody>
            </A.Table>        
        </section>
        </div>
    )
}

export default AdminPost;





