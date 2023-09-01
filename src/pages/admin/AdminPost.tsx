import React,{useState, useEffect, useRef} from "react";
import * as A from "./Admin.styled";
import axios from "axios";
import PostData from './PostData';

async function fetchAllPost() {
    try{
        const response = await axios.get('http://34.64.149.22:3001/api/v1/admin/posts?') 
        return response.data.data;
    } catch (error) {
        throw error;
    }
}


function AdminPost (){
    const [postData, setPostData] = useState([]);
    const element = useRef<HTMLDivElement>(null);
    
    const onMoveBox = () => {
        element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      };

    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetchAllPost(); 
                setPostData(data);
            } catch(error) {
                console.error('데이터를 가져오는 중 에러 발생:', error);
            }
        }
        fetchData();
    },[]);

    return (
        <A.Wrapper>
            <A.Menu>
                <A.Top>
                    <A.Headline> 회원 게시글 관리</A.Headline>
                </A.Top>
                <A.Layout>
                    <div ref={element}></div>
                    <A.Table>
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>토론 모임</th>
                                <th>작성자</th>
                                <th>작성일자</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        {postData.map((email,name) => ( 
                        <PostData key={name} data={email} />   
                        ))}
                    </A.Table>
                </A.Layout>
            </A.Menu>
            <A.TopButton>
                <A.ScrollToTop onClick={onMoveBox}>Top</A.ScrollToTop>
            </A.TopButton>      
        </A.Wrapper>
        );
    };

export default AdminPost;


