export const formatSecondsToTime = (seconds: number | string) => {
  const formattedSeconds = Number(seconds);
  const hours = Math.floor(formattedSeconds / 3600);
  const minutes = Math.floor((formattedSeconds % 3600) / 60);

  const hoursDisplay = hours > 0 ? `${hours}h ` : "";
  const minutesDisplay = minutes > 0 ? `${minutes}m` : "";

  return hoursDisplay + minutesDisplay;
};
