import "./App.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box width="400 px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
