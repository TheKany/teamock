import { Route, Routes, useLocation } from "react-router-dom";

import "./style/main.scss";

import LoginPage from "./pages/login";
import SelectTeamPage from "./pages/select";
import TeamMainPage from "./pages/team";
import ToggleMenu from "./components/toggleMenu";
import GnbBar from "./components/gnb";
import NoticeDetailPage from "./pages/notice/detail";
import NoticeMainPage from "./pages/notice";
import ScheduleMainPage from "./pages/schedule";

function App() {
  const location = useLocation();

  // GNB 필요없는 곳

  const handleGnb = () => {
    if (location.pathname === "/") return false;
    if (location.pathname === "/select/main") return false;

    return true;
  };

  return (
    <>
      {handleGnb() ? <GnbBar /> : null}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/select/main" element={<SelectTeamPage />}></Route>
        <Route path="/team/main" element={<TeamMainPage />}></Route>
        {/* 공지사항 */}
        <Route path="/notice/main" element={<NoticeMainPage />}></Route>
        <Route path="/notice/detail/:id" element={<NoticeDetailPage />}></Route>
        {/* 경기일정 */}
        <Route path="/schedule/main" element={<ScheduleMainPage />}></Route>
      </Routes>
      {handleGnb() ? <ToggleMenu /> : null}
    </>
  );
}

export default App;
