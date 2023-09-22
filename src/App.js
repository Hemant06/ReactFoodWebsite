import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Home/Menu";
import About from "./Pages/Home/About";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { Home } from "./HomeLayout";
import BookTable from "./Pages/BookTable";

function App() {
  return (
    <Box>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/booktable" element={<BookTable />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
