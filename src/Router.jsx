import { BrowserRouter, Route, Routes } from "react-router-dom";
import Algorithm from "./pages/Algorithm";
import AppShell from "./pages/AppShell";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />}/>
          <Route path="algorithms/:algoId" element={<Algorithm/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
