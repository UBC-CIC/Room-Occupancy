/**
 * Converts a UTC datetime string to Pacific Standard Time (PST) or Pacific Daylight Time (PDT),
 * depending on the time of the year, and formats it for readability.
 *
 * The function expects a datetime string in ISO format (YYYY-MM-DDTHH:MM:SS.sssZ or similar).
 * It then converts this UTC time to the "America/Los_Angeles" time zone, accounting for
 * both PST and PDT. The output is formatted as "DD/MM/YYYY HH:MM:SS" in a 24-hour format.
 *
 * Note: The function appends 'Z' to the input datetime string to ensure it is interpreted as UTC.
 * This is crucial for correct conversion across different local time zones of the execution environment.
 *
 * @param {string | undefined} dateTimeString - The UTC datetime string to be converted.
 * If the input is undefined or an empty string, the function returns an empty string.
 *
 * @returns {string} - The formatted datetime string in PST/PDT as "DD/MM/YYYY HH:MM:SS".
 */
export const toFriendlyTime = (dateTimeString: string | undefined) => {
  if (!dateTimeString) return "";

  // Create the date object in local time
  const date = new Date(dateTimeString + "Z");

  // Convert to PST/PDT time zone
  const pstDateStr = date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  });

  // Since toLocaleString returns the date in the format MM/DD/YYYY, HH:MM:SS, we need to reformat it
  const [datePart, timePart] = pstDateStr.split(", ");
  const [month, day, year] = datePart.split("/");
  const [hour, minute, second] = timePart.split(":");

  // Pad single digits with leading zero, if necessary (toLocaleString should already handle this)
  const pad = (num: string) => num.padStart(2, "0");

  // Construct the reader-friendly format in DD/MM/YYYY HH:MM:SS format
  return `${pad(day)}/${pad(month)}/${year} ${pad(hour)}:${pad(minute)}:${pad(
    second
  )}`;
};

export const toFeedTime = (dateTimeString: string | undefined) => {
  if (!dateTimeString) return "";

  // Create the date object from UTC time and convert to local browser time
  const date = new Date(dateTimeString + "Z");
  const now = new Date();

  // Calculate the time difference in seconds
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Convert the time difference to a human-readable format
  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 3600) {
    // less than 1 hour
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 86400) {
    // less than 1 day
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 2592000) {
    // less than 30 days
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < 31536000) {
    // less than 1 year
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};
