import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import * as BC from '@/components/common/BookContest/BookBox.styled';

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

const BookAndContestBox = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const callbackName = 'handleJSONPResponse';

    const url = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.REACT_APP_ALADIN_SECRET_KEY}&QueryType=Bestseller&MaxResults=2&start=1&SearchTarget=Book&output=js&Version=20131101&callback=${callbackName}`;

    const originalCallback = window[callbackName];

    window[callbackName] = data => {
      console.log('JSONP Response:', data);
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
  
   const handleBookClick = (isbn:string) => 
   navigate(`/bookrec/${isbn}`)

  return (
    <BC.Wrapper>
      {books.map((book,index)=> (
      <BC.List key ={index} >
        <BC.ImgBox onClick={() => handleBookClick(book.isbn)}>
            <BC.Img>
              <img src={book.cover} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <BC.Title>{book.title}</BC.Title>
              <div>{book.author}</div>
            </BC.Info>
        </BC.ImgBox>
      </BC.List>
      ))}
    </BC.Wrapper>
  );
}

export default BookAndContestBox;
