import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="boxes">Boxes</Link>
        </li>
        <li>
          <Link to="horizontal-tiles">Horizontal Tiles</Link>
        </li>
        <li>
          <Link to="vertical-tiles">Vertical Tiles</Link>
        </li>
        <li>
          <Link to="simple-model">Simple Model Rendering</Link>
        </li>
      </ul>
      <h3 style={{ margin: "1.5rem" }}>
        Using{" "}
        <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
          React-three-fiber
        </a>
        {" & "}
        <a href="https://threejs.org/">three.js</a>
      </h3>
    </div>
  );
};

export default Home;
