import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
