import Joystick from "../../assets/imgs/joystick.webp";
import { Link } from "react-router-dom";
import Banner from "../GameScopeBanner/Banner";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="heroContent">
        <small>Trusted by gamers worldwide</small>

        <h1> Discover the Best Games for Every Platform</h1>

        <p>
          Explore trending games, top ratings, latest releases, and detailed
          reviews all in one place.
        </p>

        <Link to="/details" className="primaryBtn" aria-label="Explore Games">
          Explore Games
        </Link>
      </div>

      <img src={Joystick} alt="Joystick" />

      <Banner title="GameScope" />
    </div>
  );
};

export default Hero;
