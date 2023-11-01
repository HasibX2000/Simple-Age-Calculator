// declaration
const datePicker = document.getElementById('datePicker');
datePicker.max = new Date().toISOString().split('T')[0];
datePicker.value = new Date().toISOString().split('T')[0];

// calculator funtion
function ageCalc() {
  // birthDate
  let birthDate = new Date(datePicker.value);
  let dateBirth = birthDate.getDate();
  let monthBirth = birthDate.getMonth() + 1;
  let yearBirth = birthDate.getFullYear();

  //   current date
  let currentDate = new Date();
  let dateCurrent = currentDate.getDate();
  let monthCurrent = currentDate.getMonth() + 1;
  let yearCurrent = currentDate.getFullYear();

  // calculation
  let dateAge, monthAge, yearAge;

  // * year
  yearAge = yearCurrent - yearBirth;

  // todo : month
  if (monthCurrent >= monthBirth) {
    monthAge = monthCurrent - monthBirth;
  } else {
    yearAge--;
    monthAge = 12 + monthCurrent - monthBirth;
  }

  // ! date
  if (dateCurrent >= dateBirth) {
    dateAge = dateCurrent - dateBirth;
  } else if (monthAge < 0) {
    monthAge = 11;
    yearAge--;
  } else {
    monthAge--;
    dateAge = daysInMonth(yearBirth, monthBirth) + dateCurrent - dateBirth;
  }

  // ? Days in month
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // Output
  const outputArea = document.getElementById('result');
  outputArea.innerHTML = `<h3>You are <span>${yearAge}</span> years, <span>${monthAge}</span> months, <span>${dateAge}</span> days old </h3>`;
}
