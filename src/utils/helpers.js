/* eslint-disable import/prefer-default-export */
export function convertUTCtoID(utc) {
  const date = new Date(utc);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleTimeString('en-id', options);
}
