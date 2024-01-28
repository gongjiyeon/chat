import * as React from 'react';
import useStore from '../store/useStore';
import {
  Avatar,
  Conversation,
  ConversationList,
} from '@chatscope/chat-ui-kit-react';
import { useNavigate } from 'react-router-dom/dist';

function Home() {
  const chatList = useStore((state) => state.chatList);

  //링크이동
  let navigate = useNavigate();

  return (
    <>
      <ConversationList>
        {chatList.map((item, index) => {
          return (
            <Conversation
              key={index}
              onClick={() => navigate(`/chatRoom/${index}`)}
              name={`${item.title}`}
              lastSenderName={`${item.con[0].sender}`}
              info={`${item.con[0].message}`}
            >
              <Avatar
                src={
                  'https://ssl.pstatic.net/melona/libs/1476/1476963/7c6a3035093fedd80020_20240105154417884.jpg'
                }
                name=''
                status='available'
              />
            </Conversation>
          );
        })}
      </ConversationList>
    </>
  );
}

export default Home;
