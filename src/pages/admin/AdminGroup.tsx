import React, { useState, useEffect, useRef } from 'react';
import * as A from '@/pages/admin/Admin.styled';
import axios from 'axios';
import GroupData from '@/pages/admin/GroupData';
import SelectBox2 from '@/components/common/selectbox/SelectBox2';

const sortOptions = [
  { value: '기본순', label: '기본순' },
  { value: '인기순', label: '인기순' },
  { value: '최근순', label: '최근순' },
];

function AdminGroup() {
  const [groupData, setGroupData] = useState([]);
  const element = useRef<HTMLDivElement>(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = '/api/v1/admin/groups?orderBy=oldest&limit=20&offset=0';

        if (selectedSort === '인기순') {
          apiUrl = '/api/v1/admin/groups?orderBy=popularity&limit=20&offset=0'; 
        } else if (selectedSort === '최근순') {
          apiUrl = '/api/v1/admin/groups?limit=20&offset=0';
        } 
        const data = await fetchAllGroupData(apiUrl); 
        setGroupData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }
    fetchData();
  }, [selectedSort]);

  async function fetchAllGroupData(apiUrl: string) {
    try {
      const response = await axios.get(apiUrl);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  return (
    <A.Wrapper>
      <A.Menu>
        <A.Top>
          <A.Headline>토론 모임 관리</A.Headline>
          <SelectBox2
            options={sortOptions}
            value={selectedSort}
            onChange={event => {
              setSelectedSort(event.target.value);
            }}
          />
        </A.Top>
        <A.Total>
          총 <A.Sum>{groupData.length}</A.Sum> 개
        </A.Total>
        <A.Layout>
          <div ref={element}></div>
          <A.Table>
            <thead>
              <tr>
                <th>번호</th>
                <th>모임명</th>
                <th>장소</th>
                <th>생성 일자</th>
                <th>관리</th>
              </tr>
            </thead>
            {groupData.map((name, group_id) => (
              <GroupData key={group_id} data={name} />
            ))}
          </A.Table>
        </A.Layout>
      </A.Menu>
      <A.TopButton>
        <A.ScrollToTop onClick={onMoveBox}>Top</A.ScrollToTop>
      </A.TopButton>
    </A.Wrapper>
  );
}
export default AdminGroup;
