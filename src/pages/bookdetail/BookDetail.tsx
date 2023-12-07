import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as BC from '@/pages/bookdetail/BookDetail.styled';

interface Book {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  cover: string;
  description: string;
  isbn: string;
  categoryName: string;
  priceStandard: number;
  publisher: string;
  subInfo: SubInfo;
}
interface SubInfo {
  itemPage: number;
}
// 글로벌 window 객체에 handleJSONPResponse 함수 타입 정의.
declare global {
  interface Window {
    handleJSONPResponse?: (data: any) => void;
  }
}
/**
 * 책 상세 정보를 표시하는 BookDetail 컴포넌트.
 * @returns {React.ReactNode} 책 상세 정보를 렌더링.
 */
const BookDetail = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { isbn } = useParams();

  useEffect(() => {
    const callbackName = 'handleJSONPResponse';

    const url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${process.env.REACT_APP_ALADIN_SECRET_KEY}&itemIdType=ISBN&ItemId=${isbn}&output=js&Version=20131101&callback=${callbackName}`;

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
  }, [isbn]);

  return (
    <BC.Wrapper>
      {books.map((book, index) => (
        <div key={index}>
          <BC.HeaderBox>
            <BC.TitleInfo>
              <ul>
                <li>
                  <BC.TitleBox>{book.title}</BC.TitleBox>
                </li>
                <li>
                  <BC.CategoryBox>{book.categoryName}</BC.CategoryBox>
                </li>
              </ul>
            </BC.TitleInfo>
          </BC.HeaderBox>
          <BC.MainInfo>
            <BC.ImageBox>
              <img src={book.cover} alt="책커버이미지" />
            </BC.ImageBox>
            <BC.TableBox>
              <BC.Table>
              <table>
                <tbody>
                  <tr>
                    <th scope="row">정가</th>
                    <td>{book.priceStandard.toLocaleString()}원</td>
                  </tr>
                  <tr>
                    <th scope="row">출판사</th>
                    <td>{book.publisher}</td>
                  </tr>
                  <tr>
                    <th scope="row">발행일</th>
                    <td>{book.pubDate}</td>
                  </tr>
                  <tr>
                    <th scope="row">지은이</th>
                    <td>{book.author}</td>
                  </tr>
                  <tr>
                    <th scope="row">총페이지</th>
                    <td>{book.subInfo.itemPage}쪽</td>
                  </tr>
                </tbody>
                </table>
              </BC.Table>
            </BC.TableBox>
          </BC.MainInfo>
          <BC.DescriptionInfo>
            <BC.Description>책 설명</BC.Description>
            <BC.DescriptionDetail>
              {book.description
                ? book.description
                : '해당 책의 상세 설명은 제공되지 않습니다.'}
            </BC.DescriptionDetail>
          </BC.DescriptionInfo>
          <BC.ButtonBox>
            <BC.ButtonLink to={book.link}>구매하러가기</BC.ButtonLink>
          </BC.ButtonBox>
        </div>
      ))}
    </BC.Wrapper>
  );
};

export default BookDetail;
