import styled from "styled-components";
import * as React from "react";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import { createSvgIcon } from "@mui/material/utils";
// import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
// import Chat from "../component/Chat";
import useStore from "../store/useStore";
import { Link } from "react-router-dom";
import {
  Avatar,
  Conversation,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { AccountCircle } from "@material-ui/icons";
import ChatAppBar from "../component/ChatAppBar";

const Container = styled.div`
  padding: 20px;
  color: grey;
`;

// function BearCounter() {
//   const bears = useStore((state) => state.bears);
//   return <h1>{bears}</h1>;
// }
// function Controls() {
//   const increasePopulation = useStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }

function Home() {
  const chatList = useStore((state) => state.chatList);

  return (
    <Container>
      {/* <BearCounter></BearCounter>
      <Controls></Controls>{" "} */}
      <ChatAppBar />
      <div
        style={{
          height: "auto",
        }}
      >
        <ConversationList>
          {chatList.map((item, index) => {
            return (
              <Link to={`/chatRoom/${index}`} key={index}>
                <Conversation
                  name={`${item.title}`}
                  lastSenderName="Lilly"
                  info={`${item.con}`}
                >
                  <AccountCircle className="chatIcon" />
                  <Avatar
                    src={
                      "https://ssl.pstatic.net/melona/libs/1476/1476963/7c6a3035093fedd80020_20240105154417884.jpg"
                    }
                    name=""
                    status="available"
                  />
                </Conversation>
              </Link>
            );
          })}
        </ConversationList>
      </div>
      {/* <MenuList>
        {chatList.map((item, index) => {
          return (
            <MenuItem key={index}>
              <Link to={`/chatRoom/${index}`}>
                <Chat selectItem={item} selectIndex={index} />
              </Link>
            </MenuItem>
          );
        })}
      </MenuList> */}
    </Container>
  );
}

export default Home;
