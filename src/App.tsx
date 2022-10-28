import { Route, Routes } from "react-router-dom";

import { Home, Login } from "./pages";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
