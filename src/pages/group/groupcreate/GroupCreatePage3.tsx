import React, { useState } from 'react';

interface GroupCreatePage3Data {
  genre: string;
  dateTime: string;
  location: string;
}

interface GroupCreatePage3Props {
  data: GroupCreatePage3Data;
  updateData: (newData: Partial<GroupCreatePage3Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage3: React.FC<GroupCreatePage3Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [genre, setGenre] = useState(data.genre);
  const [dateTime, setDateTime] = useState(data.dateTime);
  const [location, setLocation] = useState(data.location);

  const handleSubmit = () => {
    updateData({
      genre,
      dateTime,
      location,
    });
    handleNext();
  };

  return (
    <div>
      {/* ... 생략 ... */}
      <input
        type="text"
        value={genre}
        onChange={e => setGenre(e.target.value)}
        placeholder="장르를 입력하세요."
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={e => setDateTime(e.target.value)}
      />
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="장소를 입력하세요."
      />
      <button onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage3;
