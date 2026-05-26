function naughtyOrNice(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const yearBehavior = {};
  let niceCount = 0;
  let naughtyCount = 0;

  for (let i = 0; i < 12; i++) {
    const monthName = monthNames[i];
    yearBehavior[monthName] = {};
    const days = daysInMonth[i];

    for (let day = 1; day <= days; day++) {
      const status = Math.random() < 0.5 ? "Naughty" : "Nice";
      yearBehavior[monthName][day] = status;

      if (status === "Nice") {
        niceCount++;
      } else {
        naughtyCount++;
      }
    }
  }

  console.log(yearBehavior);
  console.log(`nice count: ${niceCount}`);
  console.log(`naughty count: ${naughtyCount}`);

  return niceCount >= naughtyCount;
}

console.log(naughtyOrNice(2028));
