import React, { useState, useEffect } from 'react';
import * as PA from './PhotoAlbum.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import { useParams } from 'react-router-dom';
import GroupHeader from '../../../components/layout/header/GroupHeader';

interface PhotoItem {
  _id: string;
  title: string;
  content: string;
  images: string[]; 
  createdAt: string;
  updateAT: string;
  post_id: number;
  user: {
    name: string;
    profilePic: string;
  };
}

interface PhotoItemProps {
  data?: PhotoItem;
}

const PhotoAlbum: React.FC<PhotoItemProps> = ({ data }) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [photoItems, setPhotoItems] = useState<PhotoItem[]>([]);
  const loginToken = getCookie('loginToken');

  async function fetchAllGroupPhotoData(groupId: number) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${groupId}/albums`
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const groupDataResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          }
        );
        if (groupDataResponse.status === 200) {
          const fetchedGroupData = groupDataResponse.data.data;
          setPhotoItems(await fetchAllGroupPhotoData(fetchedGroupData.group_id));
        } else {
          console.error('그룹 정보 가져오기 에러:', groupDataResponse.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchData();
  }, [loginToken, groupId]);

  return (
    <PA.Wrapper>
      <GroupHeader data={{ group: Number(groupId) }} />
      <PenFooter />
      <PA.InputDisplay>
        <SearchInput />
      </PA.InputDisplay>
      <PA.GroupPhotoTitle>모임 사진첩</PA.GroupPhotoTitle>

      <PA.PhotoList>
        <ul>
          {photoItems.length === 0 ? (
            <div>사진이 없습니다.</div>
          ) : (
            photoItems.map((photoItem, index) => (
              <li key={index}>
                <PA.PhotoBoardBox>
                  <PA.PhotoImg>
                    <img src={photoItem.images[0]} alt="업로드사진" />
                  </PA.PhotoImg>
                  <PA.PhotoBoxBottom>
                    <PA.PhotoBoardTitle>{photoItem.createdAt}</PA.PhotoBoardTitle>
                    <PA.Profile>
                      <PA.ProfileImg>
                        <img src={photoItem.user.profilePic} alt="프로필" />
                      </PA.ProfileImg>
                      <div>{photoItem.user.name}</div>
                    </PA.Profile>
                  </PA.PhotoBoxBottom>
                </PA.PhotoBoardBox>
              </li>
            ))
          )}
        </ul>
      </PA.PhotoList>
    </PA.Wrapper>
  );
};

export default PhotoAlbum;