import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import GroupCreatePage1 from './GroupCreatePage1';
import GroupCreatePage2 from './GroupCreatePage2';
import GroupCreatePage3 from './GroupCreatePage3';
import GroupCreatePage4 from './GroupCreatePage4';

type FormData = {
  title: string;
  description: string;
  image: File | null;
  region: string;
  age: string;
  keyword: string;
  genre: string;
  dateTime: string;
  location: string;
  postTitle: string;
  postImages: File[];
};

const GroupFormWrapper: React.FC = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<FormData>({
    title: '',
    description: '',
    image: null,
    region: '',
    age: '',
    keyword: '',
    genre: '',
    dateTime: '',
    location: '',
    postTitle: '',
    postImages: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const updateData = (newData: Partial<FormData>) => {
    setData(prevData => ({ ...prevData, ...newData }));
  };

  const handleNext = () => {
    if (page < 4) setPage(page + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Adjust the endpoint URL and headers as per your API requirements
      const response = await axios.post('YOUR_API_ENDPOINT', data);
      console.log('Response from the server:', response.data);
      // Additional logic after successful API call can go here (e.g. redirection, user feedback)
    } catch (err) {
      console.error('Error while sending data to the API:', err);

      // Check if the error is an AxiosError
      if ((err as AxiosError).isAxiosError) {
        const axiosError = err as AxiosError;
        setError({ message: axiosError.message });
      } else {
        setError({ message: 'An unknown error occurred.' });
      }
      // Logic for error handling can be added here
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
          handleNext={handleNext}
        />
      )}
      {page === 4 && (
        <GroupCreatePage4
          data={data}
          updateData={updateData}
          handleSubmit={handleSubmit}
        />
      )}
      {page > 4 && <div>Invalid page</div>}
    </div>
  );
};

export default GroupFormWrapper;
