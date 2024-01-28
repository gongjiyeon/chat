import { useParams } from 'react-router-dom';
import useStore from '../store/useStore';
//채팅 ui라이브러리 스타일
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from '@chatscope/chat-ui-kit-react';

//

function ChatRoom() {
  const chatList = useStore((state) => state.chatList);
  const { index } = useParams();
  const chat = chatList[index];
  console.log(chat);
  return (
    <>
      <div style={{ position: 'relative', height: '500px' }}>
        <MainContainer style={{ padding: '10px' }}>
          <ChatContainer>
            <MessageList>
              {chat.con.map((item, index) => {
                return (
                  <Message
                    key={index}
                    model={{
                      message: `${item.message}`,
                      sentTime: `${item.sentTime}`,
                      sender: `${item.sender}`,
                      direction: `${item.direction}`,
                      position: `${item.position}`,
                    }}
                  >
                    <Avatar
                      src={
                        'https://ssl.pstatic.net/melona/libs/1476/1476963/7c6a3035093fedd80020_20240105154417884.jpg'
                      }
                    />
                  </Message>
                );
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default ChatRoom;
