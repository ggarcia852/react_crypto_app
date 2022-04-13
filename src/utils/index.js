export const ConvertCurrency = (n) => {
  if (n < 0) return n.toFixed();
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const CurrencyFormat = (n) => {
  if (n === null) return 0;
  if (n >= 1) return n.toFixed(2);
  if (n < 1) return n.toFixed(5);
};

export const RemoveNegative = (n) => {
  if (n < 0) return n * -1;
  if (n > 0) return n;
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
