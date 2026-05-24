import Loader from "../Loader/Loader"; 
import ErrorMsg from "../Error/ErrorMsg"; 
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; 
import "./GameDetailsCard.css"; 

const GameDetailsCard = ({ game, isLoading, error, refetch }) => { 
  return ( 
    <div style={{ marginTop: "120px" }}>
      {isLoading ? ( 
        <Loader />
      ) : error ? ( 
        <ErrorMsg refetch={refetch} />
      ) : ( 
        <div className="gameDetailsCard">
          <div className="gameDetailsCardHero">
            <img src={game.background_image} alt={game.name} />
            <div className="gameDetailsCardOverlay"></div>

            <div className="gameDetailsCardContent">
              <span className="genre">{game.genres[0]?.name}</span>

              <h1>{game.name}</h1>

              <div className="gameDetailsCardInfo">
                <span>⭐ {game.rating}</span>

                <span>📅 {game.released}</span>
              </div>

              <div className="platforms">
                {game.platforms.map((p) => ( 
                  <span key={p.platform.id}>{p.platform.name}</span>
                ))} 
              </div>
            </div>
          </div>

          <div className="detailsCardContainer">
            <div className="leftSide">
              <h2>About Game</h2>

              <p>{game.description_raw}</p>
            </div>

            <div className="rightSide">
              <div className="infoDetailsCard">
                <h3>Metacritic</h3>

                <span>{game.metacritic}</span>
              </div>

              <div className="infoDetailsCard">
                <h3>ESRB</h3>

                <span>{game.esrb_rating?.name}</span>
              </div>

              <div className="infoDetailsCard">
                <h3>Website</h3>

                <a href={game.website} target="_blank">
                  Visit <FaArrowUpRightFromSquare fontSize={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  ); 
}; 

export default GameDetailsCard; 


