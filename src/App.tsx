import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
const Boxes = lazy(() => import("./pages/Boxes"));
const DynamicMaterials = lazy(() => import("./pages/DynamicMaterials"));
const Home = lazy(() => import("./pages/Home"));
const HorizontalTiles = lazy(() => import("./pages/HorizontalTiles"));
const SimpleLighting = lazy(() => import("./pages/SimpleLighting"));
const SimpleModel = lazy(() => import("./pages/SimpleModel"));
const VerticalTiles = lazy(() => import("./pages/VerticalTiles"));

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">3js play around</Link>
        <a href="https://michaelymbong.art">my.art</a>
      </header>
      <div className="App-body">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
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
          <Route path="dynamic-materials" element={<DynamicMaterials />} />
          <Route path="horizontal-tiles" element={<HorizontalTiles />} />
          <Route path="vertical-tiles" element={<VerticalTiles />} />
          <Route path="simple-model" element={<SimpleModel />} />
          <Route path="simple-lighting" element={<SimpleLighting />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
