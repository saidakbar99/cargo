import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Test } from "./pages/Test";
import { HomePage } from "./pages/HomePage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";


export const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/sign-in" element={<Test />} />
          <Route path="/auth/sign-up" element={<Test />} />
          <Route path="/auth/recovery" element={<Test />} />
          <Route path="/cargo" element={<Test />} />
          <Route path="/address" element={<Test />} />
          <Route path="/settings" element={<Test />} />
          <Route path="/calculator" element={<Test />} />
          <Route path="/settings" element={<Test />} />
          <Route path="/404" element={<Test />} />
          <Route path="/500" element={<Test />} />
      </Routes>
    </Router>
  )
}
