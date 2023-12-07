import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import * as BC from '@/pages/bookrec/BookRec.styled';

interface Book {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  cover: string;
  description: string;
  isbn : string;
}

declare global {
  interface Window {
    handleJSONPResponse?: (data: any) => void;
  }
}
/**
 * 독서 토론 추천도서 목록을 표시하는 BookRec 컴포넌트.
 * @returns {React.ReactNode} 추천 도서 목록을 렌더링.
 */
const BookRec = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const callbackName = 'handleJSONPResponse';

    const url = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.REACT_APP_ALADIN_SECRET_KEY}&QueryType=Bestseller&MaxResults=20&start=1&SearchTarget=Book&output=js&Version=20131101&callback=${callbackName}`;

    const originalCallback = window[callbackName];

    window[callbackName] = data => {
      setBooks(data.item);


      if (originalCallback) {
        window[callbackName] = originalCallback;
      } else {
        delete window[callbackName];
      }
    };

    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);

    return () => {
      if (originalCallback) {
        window[callbackName] = originalCallback;
      } else {
        delete window[callbackName];
      }
      document.head.removeChild(script);
    };
  }, []);
   /**
   * 특정 도서를 클릭할 때 해당 도서의 상세 페이지로 이동하는 함수.
   * @param {string} isbn - 클릭된 도서의 ISBN.
   */
   const handleBookClick = (isbn:string) => 
   navigate(`/bookrec/${isbn}`)

  return (
    <BC.Wrapper>
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>
             독서 토론 추천도서✨
          </BC.BoxTitle>
        </BC.BoxTitleBox>
        <BC.SliederBox>
        <BC.WrapperBook>
        {books.map((book) => (
          <BC.BookSet key={book.isbn}>
            <BC.List>
              <BC.ImgBox onClick={() => handleBookClick(book.isbn)}>
                <BC.Img>
                  <img src={book.cover} alt="도서이미지" />
                </BC.Img>
                <BC.Info>
                  <BC.BookTitle>{book.title}</BC.BookTitle>
                  <div>{book.author}</div>
                </BC.Info>
              </BC.ImgBox>
            </BC.List>
          </BC.BookSet>
        ))}
      </BC.WrapperBook>
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default BookRec;


