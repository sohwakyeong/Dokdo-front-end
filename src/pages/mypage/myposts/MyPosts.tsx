import React, { useEffect, useState } from 'react';
import * as MyPostsStyle from '@/pages/mypage/myposts/MyPosts.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '@/helper/Cookie';
import MorePost from '@/assets/icon/newIcon/chat1.png';
import UserData from '@/pages/admin/UserData';
import PostData from '@/pages/admin/PostData';
interface PostData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  title: string;
  content: string;
  images: string[];
  posts: string[];
}

interface UserData {
  name: string;
  profilePic: string;
  group: number[]; 
}

function MyPostsComponent() {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState<PostData[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<PostData[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);
    const month = date.getMonth() + 1;
    const day = date.getDate() - 1;
    return `${month}월 ${day}일`;
  }
  

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    axios
      .get('/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('myposts 유저 정보 가져오기 에러:', error);
        navigate('/');
      });
  }, [navigate]);

  useEffect(() => {
    const loginToken = getCookie('loginToken');
    setLoading(true);

    axios
      .get(`/api/v1/auth/me/posts?limit=10&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
        params: {
          includeGroupID: true, 
        },
      })
      .then(postsResponse => {
        if (postsResponse.data.error === null) {
          const userPosts: PostData[] = postsResponse.data.data.posts;
          setMyPosts(userPosts);

          const fetchAllPosts = async () => {
            const selectedPostsWithImages: PostData[] = [];

            for (const post of userPosts) {
              try {
                if (userPosts.length === 0) {
                }
                const postResponse = await axios.get(
                  `/api/v1/group/${post.group_id}/posts/${post.post_id}`,
                );

                if (postResponse.data.error === null) {
                  const postData: PostData = {
                    ...postResponse.data.data.post,
                    group_id: post.group_id,
                  };
                  selectedPostsWithImages.push(postData);
                } else {
                  console.error(
                    '포스트 가져오기 오류:',
                    postResponse.data.error,
                  );
                }
              } catch (error) {
                console.error('포스트 가져오기 에러:', error);
              }
            }

            setSelectedPosts(prevPosts => [
              ...prevPosts,
              ...selectedPostsWithImages,
            ]);
            setLoading(false);
          };

          fetchAllPosts();
        } else {
          console.error('게시글 가져오기 오류:', postsResponse.data.error);
        }
      })
      .catch(error => {
        console.error('게시글 가져오기 에러:', error);
      });
  }, [offset]);

  const onClickToPost = (group_id: number, post_id: number) => {
    navigate(`/group/${group_id}/board/${post_id}`);
  };
   

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 100 && !loading) {
      setOffset(prevOffset => prevOffset + 5);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MyPostsStyle.Container>
      {loading ? (
        <MyPostsStyle.LoadingContainer>
          <MyPostsStyle.LoadingContent>
            <MyPostsStyle.LoadingImg src={MorePost} alt="MorePost" />
            <MyPostsStyle.LoadingText>
              내가 쓴 글 목록을 불러오는 중...
            </MyPostsStyle.LoadingText>
          </MyPostsStyle.LoadingContent>
        </MyPostsStyle.LoadingContainer>
      ) : userData && selectedPosts.length > 0 ? (
        <MyPostsStyle.GroupBoardList>
          {selectedPosts.map((selectedPost, index) => (
            <MyPostsStyle.BoardWrap key={selectedPost._id || index} onClick={() =>
                onClickToPost(selectedPost.group_id, selectedPost.post_id)}>
              <MyPostsStyle.Boardbox>
                <MyPostsStyle.BoardLeft>
                  <MyPostsStyle.ProfileData>
                    <MyPostsStyle.ProfileImg
                      src={`/api/v1/image/profile/${userData.profilePic}`}
                      alt={`${userData.name}의 프로필 사진`}
                    />
                    <MyPostsStyle.UpdatedProfile>
                      <MyPostsStyle.Writer>{userData.name}</MyPostsStyle.Writer>
                      <MyPostsStyle.PostedDate>
                        {formatCreatedAt(selectedPost.createdAt)}
                      </MyPostsStyle.PostedDate>
                    </MyPostsStyle.UpdatedProfile>
                  </MyPostsStyle.ProfileData>
                  <MyPostsStyle.Title>{selectedPost.title}</MyPostsStyle.Title>
                  <MyPostsStyle.Content>
                    {selectedPost.content}
                  </MyPostsStyle.Content>
                </MyPostsStyle.BoardLeft>
                <MyPostsStyle.BoardImg
                  src={`/api/v1/image/post/${selectedPost.images[0]}`}
                  alt="게시된 이미지"
                />
              </MyPostsStyle.Boardbox>
            </MyPostsStyle.BoardWrap>
          ))}
        </MyPostsStyle.GroupBoardList>
      ) : (
        <MyPostsStyle.NoContainer>
          <MyPostsStyle.NoContent>
            <MyPostsStyle.NoContentImg src={MorePost} alt="MorePost" />
            <MyPostsStyle.NoContentText>
              아직 작성하신 글이 없습니다.
            </MyPostsStyle.NoContentText>
            <MyPostsStyle.GoPostBtn onClick={()=> navigate('/group/list')}>토론 모임으로 가기</MyPostsStyle.GoPostBtn>
          </MyPostsStyle.NoContent>
        </MyPostsStyle.NoContainer>
      )}
    </MyPostsStyle.Container>
  );
}

export default MyPostsComponent;
