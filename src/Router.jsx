import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./pages/AppShell";
import Home from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
