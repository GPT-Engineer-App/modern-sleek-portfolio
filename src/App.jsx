import Home from "./pages/Home.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Project from "./pages/Project.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Index />} />
        {Array.from({ length: 12 }, (_, i) => (
          <Route key={i} path={`/project/${i + 1}`} element={<Project projectId={i + 1} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
