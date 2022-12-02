function countHours(year, holidays) {
  return holidays
    .map((date) => new Date(`${date}/${year}`).getDay())
    .reduce((acc, day) => (day !== 0 && day !== 6 ? (acc += 2) : acc));
}

//Otra manera

function countHours(year, holidays) {
  return (
    holidays.filter((date) => new Date(`${date}/${year}`).getDay() % 6 !== 0)
      .length * 2
  );
}

function countHours(year, holidays) {
  return holidays.reduce(
    (acc, date) => new Date(`${date}/${year}`).getDay() % 6 !== 0 
      ? (acc += 2) 
      : acc
    , 0);
}
