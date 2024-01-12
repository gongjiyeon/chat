import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

function Chat(props) {
  const Chat = styled.div`
    color: black;
    padding: 16px;
    border-bottom: 1px solid #ccc;
    display: flex;
    width: 100%;
    align-items: center;
    .chatIcon {
      margin-right: 16px;
      font-size: 60px;
      color: #999;
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
      padding: 4px 0;
      color: #222;
    }
    p {
      font-size: 14px;
      padding: 4px 0;
      color: #666;
    }
  `;
  const [selectItem, setSelectItem] = useState(props.selectItem);
  const [selectIndex, setSelectIndex] = useState(props.selectIndex);
  return (
    <>
      <Chat>
        <div>
          <AccountCircle className="chatIcon" />
        </div>
        <div>
          <h4>{selectItem.title}</h4>
          <p>{selectItem.con}</p>
        </div>
      </Chat>
    </>
  );
}

export default Chat;
