const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const today = new Date().toISOString().split("T")[0];
const nextYear = new Date().getFullYear() + 1;
const currentYear = new Date().getFullYear();

/* ---------------------------
  🔥 Generic fetch helper
---------------------------- */
const fetchAPI = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};

/* ---------------------------
  🎮 Games (pagination + platform filter)
---------------------------- */
export const fetchGames = (page, platform, searchQuery) => {
  return fetchAPI(
    `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=20${
      platform ? `&platforms=${platform}` : ""
    }${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""}`,
  );
};

/* ---------------------------
  🚀 Upcoming games
---------------------------- */
export const fetchUpcomingGames = (page = 1) => {
  return fetchAPI(
    `${BASE_URL}/games?key=${API_KEY}&dates=${today},${nextYear}-12-31&ordering=-added&page=${page}&page_size=20`,
  );
};

/* ---------------------------
  🖥️ PC games
---------------------------- */
export const fetchPCGames = () => {
  return fetchAPI(
    `${BASE_URL}/games?key=${API_KEY}&platforms=4&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-added`,
  );
};

/* ---------------------------
  🎮 PS5 games
---------------------------- */
export const fetchPS5Games = () => {
  return fetchAPI(
    `${BASE_URL}/games?key=${API_KEY}&platforms=187&ordering=-added`,
  );
};

/* ---------------------------
  📱 Platforms list
---------------------------- */
export const fetchPlatforms = () => {
  return fetchAPI(`${BASE_URL}/platforms?key=${API_KEY}`);
};

/* ---------------------------
  🎯 Single game details
---------------------------- */
export const fetchGame = (id) => {
  return fetchAPI(`${BASE_URL}/games/${id}?key=${API_KEY}`);
};

/* ---------------------------
  🖼️ Screenshots
---------------------------- */
export const fetchScreenshots = (id) => {
  return fetchAPI(`${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`);
};

/* ---------------------------
  🎥 YouTube trailer search
---------------------------- */
export const fetchTrailer = (gameName) => {
  return fetchAPI(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      gameName + " trailer",
    )}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`,
  );
};

/* ---------------------------
  📝 GameReviewsSection
---------------------------- */
export const fetchReviews = (id) => {
  return fetchAPI(`${BASE_URL}/games/${id}/reviews?key=${API_KEY}`);
};
