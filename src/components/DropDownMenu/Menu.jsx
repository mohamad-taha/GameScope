import { IoIosArrowUp } from "react-icons/io";
import { fetchPlatforms } from "../../service/rawg";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader//Loader";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [isOver, setIsOver] = useState(false);

  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });

  return (
    <li
      onMouseMove={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      className="dropDown"
    >
      Platforms
      <IoIosArrowUp
        style={{
          transform: isOver ? "rotate(180deg)" : "rotate(0deg)",
          transition: "200ms",
        }}
      />
      <ul className="dropDownMenu">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <li>Error loading platforms</li>
        ) : (
          platforms?.results.map((platform) => (
            <li key={platform.id}>
              <Link>{platform.name}</Link>
            </li>
          ))
        )}
      </ul>
    </li>
  );
};

export default Menu;
