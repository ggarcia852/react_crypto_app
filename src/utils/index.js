export const CurrencyFormat = (n) => {
  if (n === null) return 0;
  if (n < -1) return n.toLocaleString();
  if (n < 1) return n.toFixed(5);
  if (n < 1e6) return n.toLocaleString();
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const RemoveNegative = (n) => {
  if (n < 0) return n * -1;
};

export const ConvertTime = (n) => {
  const time = new Date(n).toLocaleTimeString("en-US");
  return time;
};

export const ConvertDate = (n) => {
  const date = new Date(n).toDateString("en-US");
  return date;
};

export const ConvertDay = (n) => {
  const day = new Date(n).getDate();
  return day;
};
