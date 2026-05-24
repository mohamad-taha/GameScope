import "./Header.css";

const Header = ({ title, click }) => {
  return (
    <div className="contentHeader">
      <h1> {title}</h1>
      <button
        className="primaryBtn"
        onClick={click}
        aria-label={`See all ${title}`}
      >
        SEE ALL
      </button>
    </div>
  );
};

export default Header;
