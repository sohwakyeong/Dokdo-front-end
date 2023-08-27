import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import SelectBox from '../../../components/common/selectbox/SelectBox2';
import {
  Container,
  Title,
  FormGroup,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
} from './GroupCreatePage3.Styled';

interface GroupCreatePage3Data {
  name: string;
  introduction: string;
  location: string;
  age: string;
  tag: string[];
  genre: string;
  day: string;
  place: string;
}

interface GroupCreatePage3Props {
  data: GroupCreatePage3Data;
  updateData: (newData: Partial<GroupCreatePage3Data>) => void;
}

const dayOptions = [
  { value: '', label: '모임 일정' },
  { value: '월요일', label: '월요일' },
  { value: '화요일', label: '화요일' },
  { value: '수요일', label: '수요일' },
  { value: '목요일', label: '목요일' },
  { value: '금요일', label: '금요일' },
  { value: '토요일', label: '토요일' },
  { value: '일요일', label: '일요일' },
];

const GroupCreatePage3: React.FC<GroupCreatePage3Props> = ({
  data,
  updateData,
}) => {
  const [genre, setGenre] = useState(data.genre);
  const [day, setDay] = useState(data.day);
  const [place, setPlace] = useState(data.place);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setDay(selectedValue);
  };

  const handlePageSubmit = async () => {
    console.log('GroupCreatePage3: handlePageSubmit is called');

    updateData({
      genre,
      day,
      place,
    });

    setLoading(true);
    setError(null);

    const payload = {
      ...data,
      genre,
      day,
      place,
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/group/',
        payload,
        { withCredentials: true },
      );
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
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
      </StepsContainer>
      <Title>
        독서 토론 모임에 대한 <br /> 정보를 설정해주세요
      </Title>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <FormGroup>
        <label>장르 </label>
        <Input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          placeholder="장르를 입력하세요."
        />
      </FormGroup>
      <FormGroup>
        <label>요일 </label>
        <SelectBox
          options={dayOptions}
          value={day}
          onChange={handleDayChange}
        />
      </FormGroup>
      <FormGroup>
        <label>장소 </label>
        <Input
          type="text"
          value={place}
          onChange={e => setPlace(e.target.value)}
          placeholder="장소를 입력하세요."
        />
      </FormGroup>
      <SubmitButton onClick={handlePageSubmit}>확인</SubmitButton>
    </Container>
  );
};

export default GroupCreatePage3;
