import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/home/Home";
import Error from "./components/Error/Error";
import Game from "./components/Page/Game";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
