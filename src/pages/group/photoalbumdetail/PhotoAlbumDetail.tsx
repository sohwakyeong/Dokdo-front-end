import React, { useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import * as PAD from '@/pages/group/photoalbumdetail/PhotoAlbumDetail.styled';
import { getCookie } from '@/helper/Cookie';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import userImg from '@/assets/img/userbasicimg.png';


interface PhotoDetailData {
  error: null | string;
  data: {
    post: {
      _id: string;
      title: string;
      content: string;
      images: string[];
      createdAt: string;
      updatedAt: string;
      post_id: number;
      __v: number;
    };
    user: {
      name: string;
      profilePic: string[];
    };
  };
}

interface Comment {
  text: string;
  isDeleted: boolean;
  comment_id: number;
  createdAt: string;
}

interface PhotoDetailDataProps {
  data?: PhotoDetailData;
}

interface UserData {
  name: string;
  profilePic: string;
}

interface PhotoDetailDataProps {
  data?: PhotoDetailData;
}

interface GroupNameData {
  data: {
    name: string;
  };
}
interface GroupNameProps {
  data?: GroupNameData;
}

const PhotoDetail: React.FC<PhotoDetailDataProps & GroupNameProps> = ({
  data,
}) => {
  const loginToken = getCookie('loginToken');
  const navigate = useNavigate();
  const { groupId, postsId } = useParams<{
    groupId?: string;
    postsId?: string;
  }>();

  const group_Id = groupId ? parseInt(groupId, 10) : 0;
  const post_Id = postsId ? parseInt(postsId, 10) : 0;

  const [photoDetail, setPhotoDetail] = useState<PhotoDetailData | null>(
    data || null,
  );
  const [groupName, setGroupName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [commentsName, setCommentsName] = useState<UserData[]>([]);
  const [replyText, setReplyText] = useState<string>('');

  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [isLiked, setIsLiked] = useState(false);

  function formatCreatedAt(createdAt: string | number | Date) {
    const date = new Date(createdAt);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  }

  useEffect(() => {
    if (group_Id && post_Id) {
      fetchPhotoDetail(group_Id, post_Id);
      fetchComments(group_Id, post_Id);
      fetchGroupName(group_Id); // 모임 이름 가져오기
      fetchLikeStatus(group_Id, post_Id);
    }
  }, [loginToken, group_Id, post_Id]);

  const fetchPhotoDetail = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(`/api/v1/group/${gId}/posts/${pId}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        setPhotoDetail(response.data);
      } else {
        console.error('Error fetching detail data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGroupName = async (gId: number) => {
    try {
      const response = await axios.get(`/api/v1/group/${gId}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        const groupData = response.data.data;
        if (groupData) {
          setGroupName(response.data.data.name);
        } else {
          console.error('Group data not found');
        }
      } else {
        console.error('Error fetching Name data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching group name:', error);
      setGroupName('');
    }
  };

  const postComment = async () => {
    try {
      const response = await axios.post(
        `/api/v1/group/${group_Id}/posts/${post_Id}/comments`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        // 댓글 작성 후에 댓글 목록을 업데이트
        //@ts-ignore
        fetchComments(group_Id, post_Id);
        setCommentText(''); // 작성한 댓글 내용을 초기화
      } else {
        console.error('Error posting comment:', response.status);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const postReply = async (commentId: number) => {
    try {
      const response = await axios.post(
        `/api/v1/group/${group_Id}/posts/${post_Id}/comments/${commentId}/reply`,
        { text: replyText },
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        // window.location.reload();
      } else {
        console.error('Error posting reply:', response.status);
      }
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  const fetchComments = async (gId: number, pId: number) => {
    try {
      const response = await axios.get(
        `/api/v1/group/${gId}/posts/${pId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const commentsData = response.data.data;
        setComments(commentsData.map((comment: any) => comment.comments));
        setCommentsName(commentsData.map((comment: any) => comment.user));
      } else {
        console.error('Error fetching comments:', response.status);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const deletePost = async () => {
    const confirmed = window.confirm('게시글을 삭제하시겠습니까?');

    if (!confirmed) {
      return; // 삭제를 취소한 경우 함수 종료
    }

    try {
      const response = await axios.delete(
        `/api/v1/group/${group_Id}/albums/${post_Id}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (response.status === 204) {
        navigate(-1); // -1을 넘겨주면 이전 페이지로 이동합니다.
        // 게시글이 성공적으로 삭제된 경우, 해당 페이지를 새로고침하거나 다른 동작을 수행할 수 있습니다.
        // 예: history.push()를 사용하여 게시글 목록 페이지로 이동
      } else {
        console.error('Error deleting post:', response.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const fetchLikeStatus = async (group_Id: number, post_Id: number) => {
    try {
      const response = await axios.get(
        `/api/v1/group/${group_Id}/posts/${post_Id}/like`,
      );

      if (response.status === 200) {
        const likeCount = response.data.data.likeNum;
        const userLikedStatus = response.data.data.userLiked; // 가정: API 응답에서 userLiked 항목을 사용하여 사용자가 좋아요를 눌렀는지 확인

        setLikeCounter(likeCount);
        setIsLiked(userLikedStatus);
      } else {
        console.error('Error fetching like status:', response.status);
        console.log('API Response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

  // 게시글 좋아요
  const handleLikeBtn = async () => {
    try {
      const response = await axios.put(
        `/api/v1/group/${group_Id}/posts/${post_Id}/like`,
        {},
      );

      if (response.status === 200) {
        fetchLikeStatus(group_Id, post_Id); // 다시 좋아요 상태를 가져옵니다.
      } else {
        console.error('Error liking/unliking post:', response.status);
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  const handleShareBtn = () => {
    const url = window.location.href; // 현재 페이지의 URL을 가져옵니다.
    navigator.clipboard.writeText(url).then(
      () => {
        alert('현재 게시글이 복사되었습니다!'); // 복사 성공 시 알림
      },
      err => {
        console.error('URL 복사에 실패했습니다!:', err); // 복사 실패 시 에러 출력
      },
    );
  };

  const defaultUserImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = userImg;
  };

  return (
    <PAD.Wrapper>
      <PAD.GroupBoardTitle>
        <div>{groupName} 🍀 모임의 사진첩</div>
      </PAD.GroupBoardTitle>
      <PAD.EditButton onClick={deletePost}>●●●</PAD.EditButton>

      <PAD.User>
        <div>
          <PAD.ProfileImg
            src={`/api/v1/image/profile/${photoDetail?.data.user.profilePic}`}
            onError={defaultUserImg}
          ></PAD.ProfileImg>
        </div>
        <PAD.Desc>
          <PAD.DescDisplay>
            <PAD.UserName>{photoDetail?.data.user.name}</PAD.UserName>
            <PAD.MMDD>
              {formatCreatedAt(
                photoDetail?.data?.post.createdAt || 'Loading...',
              )}
            </PAD.MMDD>
          </PAD.DescDisplay>
        </PAD.Desc>
      </PAD.User>

      <PAD.UserWriteBox>
        <PAD.UserContent>
          {photoDetail?.data?.post.content || '게시글이 없습니다.'}
        </PAD.UserContent>
        {photoDetail?.data?.post.images &&
          photoDetail.data.post.images.length > 0 && (
            <img
              src={`/api/v1/image/post/${photoDetail.data.post.images[0]}`}
              alt="게시된 이미지"
            />
          )}
      </PAD.UserWriteBox>
      <PAD.Button>
        <button onClick={handleLikeBtn}>
          {isLiked ? `❤️ ${likeCounter} 취소` : `❤️ 좋아요`} {likeCounter}
        </button>
        <button onClick={handleShareBtn}>공유하기</button>
      </PAD.Button>
      <PAD.Comment>
  <PAD.CommentsTitle>
    댓글 <span> {comments.length}</span>
  </PAD.CommentsTitle>
  {comments.length > 0 ? (
    comments.map((comment, index) => (
      <div key={comment.comment_id}>
        {!comment.isDeleted ? (
          <PAD.CommentsList>
            <PAD.ComentsBox>
              <PAD.PFImg>
                <img
                  src={`/api/v1/image/profile/${commentsName[index]?.profilePic}`}
                  alt="프사"
                />
              </PAD.PFImg>
              <PAD.PFText>
                <PAD.CommentUser>
                  {commentsName[index]?.name}
                </PAD.CommentUser>
                <PAD.CommentText>{comment.text}</PAD.CommentText>
                <PAD.CommnetCreatedAt>
                  {formatCreatedAt(comment.createdAt)}
                </PAD.CommnetCreatedAt>
              </PAD.PFText>
            </PAD.ComentsBox>
          </PAD.CommentsList>
        ) : (
          <div>Deleted Comment</div>
        )}
      </div>
    ))
  ) : (
    <PAD.NoCommentsText>댓글이 아직 없습니다.</PAD.NoCommentsText>
  )}
</PAD.Comment>
      <PAD.CIWrapper>
        <PAD.CIDisplay>
          <PAD.CIInput>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
            />
          </PAD.CIInput>
          <PAD.CIButton>
            <button onClick={postComment}>등록</button>
          </PAD.CIButton>
        </PAD.CIDisplay>
      </PAD.CIWrapper>
    </PAD.Wrapper>
  );
};

export default PhotoDetail;
