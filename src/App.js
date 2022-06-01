import React from 'react'
// import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Code from "./pages/Code";
import Visual from "./pages/Visual";
// import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <Router>
    {/* <nav>
      <Link> Home </Link>
      <Link> About </Link>
      <Link> Music </Link>
      <Link> Code </Link>
      <Link> Visual </Link>
    </nav> */}
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Visual" element={<Visual />} />
          <Route path="/Code" element={<Code />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      {/* </AnimatePresence> */}
    </Router>
  )
}

export default App