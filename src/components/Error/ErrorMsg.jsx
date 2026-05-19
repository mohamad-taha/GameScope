import "./ErrorMsg.css";

const Error = ({refetch}) => {
  return (
    <div className="errorContainer">
      <div className="errorIcon">⚠️</div>

      <h2>Something went wrong</h2>

      <p>Failed to load games. Please try again later.</p>

      <button className="primaryBtn" onClick={refetch} aria-label="Retry loading games">
        Retry
      </button>
    </div>
  );
};

export default Error;
