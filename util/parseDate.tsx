export default function parseDate(DATE: any) {
  let year = DATE.getFullYear();
  let month = leftPad(DATE.getMonth() + 1);
  let day = leftPad(DATE.getDate());

  return [year, month, day].join("-");
}

function leftPad(value: number) {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
}
