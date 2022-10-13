import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Center, Box } from "@chakra-ui/react";
import Questionaire from "./pages/Questionaire";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <span id="logo">DNMF</span>
        </nav>

        <Center w="100vw" h="100vh">
          <Box w={["100%", "400px", "400px"]} p={[10,5,10,5]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questionaire" element={<Questionaire />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </Box>
        </Center>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
