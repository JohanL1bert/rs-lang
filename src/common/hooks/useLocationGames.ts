export const useLocationGames = (): boolean[] => {
  const isLocationGames = window.location.hash;
  const isLocation = isLocationGames.includes(`#/games`);
  return [isLocation];
};
