import * as React from 'react';
import ChatAppBar from '../component/ChatAppBar';
import { Route, Routes } from 'react-router-dom/dist';
import ChatRoom from './ChatRoom';
import Home from './Home';
import styled from 'styled-components';
const Container = styled.div`
  // padding: 20px;
  border: 0;
`;
function MainLayout() {
  return (
    <>
      <ChatAppBar />
      <Container>
        <Routes>
          <Route path={`/`} element={<Home />}></Route>
          <Route path={`/chatRoom/:index`} element={<ChatRoom />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default MainLayout;
