import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, { maxAge: 60 * 60 * 3, path: '/' });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name, { path: '/', domain: "localhost"});
};

// removeCookie에서 domain을 나중에 배포 도메인으로 변경해야함! 지금은 로컬호스트에서만 잘됨