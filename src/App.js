import "./App.css";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
import { Boxes, Home } from "./pages";

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">3js play around</Link>
        <a href="https://michaelymbong.art">my.art</a>
      </header>
      <div className="App-body">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="boxes" element={<Boxes />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
