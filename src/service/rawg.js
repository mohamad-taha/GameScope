const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const today = new Date().toISOString().split("T")[0];
const nextYear = new Date().getFullYear() + 1;
const currentYear = new Date().getFullYear();

export const fetchGames = async () => {
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();

  return data;
};

export const fetchUpcomingGames = async () => {
  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&dates=${today},${nextYear}-12-31&ordering=-added`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();

  return data;
};

export const fetchPCGames = async () => {
  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&platforms=4&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-added`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};

export const fetchPS5Games = async () => {
  const response = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&platforms=187&ordering=-added`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};

export const fetchPlatforms = async () => {
  const response = await fetch(`${BASE_URL}/platforms?key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};
