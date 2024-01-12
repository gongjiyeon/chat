import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import ChatRoom from "../component/ChatRoom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path={`/chatRoom/:index`} element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
