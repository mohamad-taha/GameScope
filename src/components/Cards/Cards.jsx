import "./Cards.css";

const Cards = ({ game }) => {
  return (
    <div className="card">
      <img src={game.background_image} alt={game.name} />
      <p>{game.name}</p>
    </div>
  );
};

export default Cards;
