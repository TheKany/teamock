import { Route, Routes, useLocation } from "react-router-dom";

import "./style/main.scss";

import LoginPage from "./pages/login";
import SelectTeamPage from "./pages/select";
import TeamMainPage from "./pages/team";
import ToggleMenu from "./components/toggleMenu";
import GnbBar from "./components/gnb";

function App() {
  const location = useLocation();

  // GNB 필요없는 곳

  const handleGnb = () => {
    if (location.pathname === "/") return false;
    if (location.pathname === "/select") return false;

    return true;
  };

  return (
    <>
      {handleGnb() ? <GnbBar /> : null}
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/select" element={<SelectTeamPage />}></Route>
        <Route path="/sixers" element={<TeamMainPage />}></Route>
      </Routes>
      {handleGnb() ? <ToggleMenu /> : null}
    </>
  );
}

export default App;
