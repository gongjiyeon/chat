import { useParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import useStore from "../store/useStore";
//
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

//

const Container = styled.div`
  padding: 20px;
  color: grey;
`;

function ChatRoom() {
  const chatList = useStore((state) => state.chatList);
  const { index } = useParams();
  const chat = chatList[index];
  console.log(chat);
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {chat.con.map((item, index) => {
              return (
                <div key={index}>
                  <Message
                    model={{
                      message: `${item}`,
                      sentTime: "just now",
                      sender: "Joe",
                      direction: "incoming",
                      position: "single",
                    }}
                  >
                    <Avatar
                      src={
                        "https://ssl.pstatic.net/melona/libs/1476/1476963/7c6a3035093fedd80020_20240105154417884.jpg"
                      }
                    />
                  </Message>
                  <Message
                    model={{
                      message: "Hello my friend",
                      sentTime: "15 mins ago",
                      direction: "outgoing",
                      position: "single",
                      sender: "Joe",
                    }}
                  />
                </div>
              );
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
    // <>
    //   <Container>
    //     <Box sx={{ flexGrow: 1 }}>
    //       <AppBar position="static">
    //         <Toolbar>
    //           <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //             {chatList[index].title}
    //           </Typography>
    //         </Toolbar>
    //       </AppBar>
    //     </Box>
    //     <div>{chatList[index].con}</div>
    //     <div>{chatList[index].con}</div>
    //     <div>{chatList[index].con}</div>
    //   </Container>
    // </>
  );
}

export default ChatRoom;
