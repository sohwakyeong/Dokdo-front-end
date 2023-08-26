import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import GroupCreatePage1 from './GroupCreatePage1';
import GroupCreatePage2 from './GroupCreatePage2';
import GroupCreatePage3 from './GroupCreatePage3';

type FormData = {
  name: string;
  introduction: string;
  image: File | null;
  location: string;
  age: string;
  tag: string;
  genre: string;
  day: string;
  place: string;
};

const GroupFormWrapper: React.FC = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<FormData>({
    name: '',
    introduction: '',
    image: null,
    location: '',
    age: '',
    tag: '',
    genre: '',
    day: '',
    place: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const updateData = (newData: Partial<FormData>) => {
    setData(prevData => ({ ...prevData, ...newData }));
  };

  const handleNext = () => {
    if (page < 3) setPage(page + 1); // 최대 페이지를 3으로 제한
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', data);
      console.log('Response from the server:', response.data);
    } catch (err) {
      console.error('Error while sending data to the API:', err);

      if ((err as AxiosError).isAxiosError) {
        const axiosError = err as AxiosError;
        setError({ message: axiosError.message });
      } else {
        setError({ message: 'An unknown error occurred.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {page === 1 && (
        <GroupCreatePage1
          data={data}
          updateData={updateData}
          handleNext={handleNext}
        />
      )}
      {page === 2 && (
        <GroupCreatePage2
          data={data}
          updateData={updateData}
          handleNext={handleNext}
        />
      )}
      {page === 3 && (
        <GroupCreatePage3
          data={data}
          updateData={updateData}
          handleNext={handleSubmit} // 마지막 페이지에서 '다음' 버튼을 누르면 제출되게 함
        />
      )}
      {page > 3 && <div>Invalid page</div>}
    </div>
  );
};

export default GroupFormWrapper;
