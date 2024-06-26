
export const formatDate = (transactionDate) => {
  const date = new Date(transactionDate + 'T00:00:00Z')
  return date.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: '2-digit', year: 'numeric' });
}

export const formatAmount = (transactionAmount) => {
  const value = Number(transactionAmount);
  return value.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}

export function formatDateToDB(inputDateString) {
  const inputDate = new Date(inputDateString);

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(inputDate.getDate()).padStart(2, '0');

  const formattedDateString = `${year}-${month}-${day}`;

  return formattedDateString;
}

export function parseStringToFloat(userInput) {
  const sanitizedInput = userInput.replace('$', '').trim();
  const parsedValue = parseFloat(sanitizedInput);

  if (!isNaN(parsedValue)) {
    const formattedValue = parsedValue.toFixed(2);

    return formattedValue;
  }

  return parsedValue;
}

export const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function formatDateString(inputDate) {
  let date = inputDate;

  if (!inputDate) {
    return '';
  }

  if (!(inputDate instanceof Date)) {
    date = new Date(inputDate + 'T12:00:00Z');
  }

  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}