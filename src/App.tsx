import { Route, Routes } from "react-router-dom";

import { Home, Login } from "./pages";
import { AuthenCode } from "./pages/AuthenCode";
import { Authenticate } from "./pages/Authenticate";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/authencode" element={<AuthenCode />} />
      <Route path="/authentication" element={<Authenticate />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
