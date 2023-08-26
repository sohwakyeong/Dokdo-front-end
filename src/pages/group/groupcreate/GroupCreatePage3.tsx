import React, { useState } from 'react';

interface GroupCreatePage3Data {
  genre: string;
  day: string; // 변경: dateTime -> day
  place: string; // 변경: location -> place
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
  const [day, setDay] = useState(data.day); // 변경: dateTime -> day
  const [place, setPlace] = useState(data.place); // 변경: location -> place

  const handleSubmit = () => {
    updateData({
      genre,
      day, // 변경: dateTime -> day
      place, // 변경: location -> place
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
        value={day} // 변경: dateTime -> day
        onChange={e => setDay(e.target.value)} // 변경: setDateTime -> setDay
      />
      <input
        type="text"
        value={place} // 변경: location -> place
        onChange={e => setPlace(e.target.value)} // 변경: setLocation -> setPlace
        placeholder="장소를 입력하세요."
      />
      <button onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage3;
