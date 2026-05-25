function naughtyOrNice(year) {
  const highYear =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;

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

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const yearBehavior = {};

  for (let i = 0; i <= 11; i++) {
    const monthName = monthNames[i];
    yearBehavior[monthName] = {};
    const days = i === 1 ? highYear : daysInMonth[i];

    for (let day = 1; day < days + 1; day++) {
      yearBehavior[monthName][day] = Math.random() < 0.5 ? "Naughty" : "Nice";
    }
  }

  let niceCount = 0;
  let badCount = 0;

  for (const month in yearBehavior) {
    for (const day in yearBehavior[month]) {
      if (yearBehavior[month][day] === "Nice") {
        niceCount++;
        continue;
      }
      badCount++;
    }
  }

  console.log(yearBehavior);
  console.log(`nice count: ${niceCount}`);
  console.log(`bad conut: ${badCount}`);

  return niceCount >= badCount;
}

console.log(naughtyOrNice(2028));
