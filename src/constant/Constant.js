export const fontSize = {
  semiSmall: 10,
  small: 12,
  medium: 14,
  large: 16,
};

export const handleCheckResponse = (response) => {
  if (response.status === 200 && response.data) {
    return true;
  }
  return false;
};

export const convertSecondsToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${hours}:${minutes}:${seconds}`;
};

export const handleFormatDate = (dateFormat) => {
  const date = new Date(dateFormat);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month}, ${day} ${year}`;

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  const formattedHour = `${hours}:${minutes}`;
  return {
    formattedDate: formattedDate,
    formattedHour: formattedHour,
    ampm: ampm,
  };
};

export const CALL_TYPE = {
  MISS: "missed",
  ANS: "answered",
  VOID: "voicemail",
};

export const DIRECTION = {
  IN: "inbound",
  OUT: "outbound",
};
