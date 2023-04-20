import React from 'react'
import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import DeleteUser from './component/DeleteUser';
import MyPage from './component/MyPage';
import NoPage from './component/NoPage';
import LogOut from './component/LogOut';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/delete/:username" element={<DeleteUser />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
