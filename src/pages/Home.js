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
      </ul>
    </div>
  );
};

export default Home;
