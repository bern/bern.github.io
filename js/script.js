function tenureAtTwitch() {
  var startDate = new Date('2017-02-13T18:00:00.000Z');
  var currentDate = new Date();

  var yearsElapsed = currentDate.getYear() - startDate.getYear();
  var monthsElapsed = currentDate.getMonth() - startDate.getMonth();

  var yearString = "";
  if (yearsElapsed > 0) {
    if (yearsElapsed > 1) {
      yearString = `${yearsElapsed} Years`;
    } else {
      yearString = `${yearsElapsed} Year`;
    }
  } 

  var monthString = "";
  if (monthsElapsed > 0) {
    if (monthsElapsed > 1) {
      monthString = `, ${monthsElapsed} Month`;
    } else {
      monthString = `, ${monthsElapsed} Months`;
    }
  } 

  document.write(yearsElapsed + " Years, " + monthsElapsed + " Months")
}