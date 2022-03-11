export const ConvertCurrency = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const ConvertTime = (n) => {
  const time = new Date(n).toLocaleTimeString("en-US")
  return time;
};

export const ConvertDate = (n) => {
  const date = new Date(n).toLocaleDateString("en-US");
  return date;
};

export const ConvertDay = (n) => {
  const day = new Date(n).getDate();
  return day;
};

