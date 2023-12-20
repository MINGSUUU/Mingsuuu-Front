import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Details from "./pages/Details";
import Writing from "./pages/Writing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </>
  );
}

export default App;
