import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import MainLayout from './MainLayout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<MainLayout />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
