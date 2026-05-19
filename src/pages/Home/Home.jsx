import GamesSpotlight from "../../components/GamesSpotlight/GamesSpotlight";
import Hero from "../../components/Hero/Hero";
import TrendingCards from "../../components/TrendingCards/TrendingCards";
import UpcomingCards from "../../components/UpcomingCards/UpcomingCards";
import PCCards from "../../components/PCCards/PCCards";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingCards />
      <PCCards />
      <GamesSpotlight />
      <UpcomingCards />
    </>
  );
};

export default Home;
