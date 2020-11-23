// let dateNumber = "22.04.1991";

function isDateValid(dateString) {
  // let dateNumber = dateString;

  // let day = dateNumber.substring(0, 2);
  // let month = dateNumber.substring(3, 5);
  // let year = dateNumber.substring(6, 10);

  return isLengthCorrect(dateString) &&
        isSetupCorrect(dateString) &&
        isYearCorrect(dateString) &&
        isMonthCorrect(dateString) &&
        isDayCorrect(dateString);
  }

// sjekker lengde
function isLengthCorrect(dateString) {
  return dateString.length == 10;
}

// sjekker om det er punktum i tredje og sjette posisjon
function isSetupCorrect(dateString) {
  return dateString.charAt(2) === "." && dateString.charAt(5) === ".";
}

// sjekker om år er 0000 eller mer, og 9999 eller mindre
function isYearCorrect(dateString) {
  let year = dateString.substring(6, 10);
  return parseInt(year) >= 0000 && parseInt(year) <= 9999 && year.length == 4;
}

// sjekker om mnd er 1-12
function isMonthCorrect(dateString) {
  let month = dateString.substring(3, 5);
  return parseInt(month) >= 01 && parseInt(month) <= 12 && month.length == 2;
}

// sjekker når det er skuddår
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// sjekker antall dager per mnd
function isDayCorrect(dateString) {
  let day = dateString.substring(0, 2);
  let month = dateString.substring(3,5);
  let year = dateString.substring(6, 10);

  if ((month === '02') && (day <= '28')) {
    return true;
  }
  else if ((month === '04' || month === '06' || month === '09' || month === '11') && (day <= '30' && day >= '01')) {
    return true;
  }
  else if (month === '02' && isLeapYear(year) && day <= '29') {
    return true;
  }
  else if ((month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') && (day <= '31')) {
    return true;
  } else {
    return false;
  }
}