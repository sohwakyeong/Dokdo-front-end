import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Main from './pages/main/Main';
// import Group from './pages/Group/Group';
// import Contest from './pages/Contest/Contest';
// import GroupList from './pages/GroupList/GroupList';
// import FreeBoardList from './pages/FreeBoardList/FreeBoardList';
// import BookRecommendation from './pages/BookRecommendation/BookRecommendation';
// import GroupDetail from './pages/GroupDetail/GroupDetail';
// import FreeBoardDetail from './pages/FreeBoardDetail/FreeBoardDetail';
// import WriteFreeBoard from './pages/WriteFreeBoard/WriteFreeBoard';
// import GroupBoard from './pages/GroupBoard/GroupBoard';
// import GroupPhotoAlbum from './pages/GroupPhotoAlbum/GroupPhotoAlbum';
// import GroupBoardDetail from './pages/GroupBoardDetail/GroupBoardDetail';
// import WriteBoard from './pages/WriteBoard/WriteBoard';
// import PhotoAlbumDetail from './pages/PhotoAlbumDetail/PhotoAlbumDetail';
// import WritePhotoAlbum from './pages/WritePhotoAlbum/WritePhotoAlbum';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/group" element={<Group />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/grouplist" element={<GroupList />} />
          <Route path="/freeboard" element={<FreeBoardList />} />
          <Route path="/books" element={<BookRecommendation />} />
          <Route path="/group/:id" element={<GroupDetail />} />
          <Route path="/freeboard/:id" element={<FreeBoardDetail />} />
          <Route path="/writefreeboard" element={<WriteFreeBoard />} />
          <Route path="/groupboard" element={<GroupBoard />} />
          <Route path="/groupphoto" element={<GroupPhotoAlbum />} />
          <Route path="/board/:id" element={<GroupBoardDetail />} />
          <Route path="/writeboard" element={<WriteBoard />} />
          <Route path="/photoalbum/:id" element={<PhotoAlbumDetail />} />
          <Route path="/writephotoalbum" element={<WritePhotoAlbum />} />
          <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
