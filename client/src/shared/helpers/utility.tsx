export const toFriendlyTime = (dateTimeString: string | undefined) => {
  if (!dateTimeString) return "";

  const date = new Date(dateTimeString);

  // Format the date and time parts
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // Pad single digits with leading zero
  const pad = (num: number) => num.toString().padStart(2, "0");

  // Construct the reader-friendly format
  return `${pad(day)}/${pad(month)}/${year} ${pad(hour)}:${pad(minute)}:${pad(
    second
  )}`;
};
