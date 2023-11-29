
var monthInput = prompt("Введіть номер місяця від 1 до 12:");
if (/^[1-9]$|1[0-2]$/.test(monthInput)) {
  var monthNumber = parseInt(monthInput);
  switch (true) {
    case monthNumber >= 3 && monthNumber <= 5:
      alert(`Пора року - Весна`);
      break;
    case monthNumber >= 6 && monthNumber <= 8:
      alert(`Пора року - Літо`);
      break;
    case monthNumber >= 9 && monthNumber <= 11:
      alert(`Пора року - Осінь`);
      break;
    case monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12:
      alert(`Пора року - Зима`);
      break;
  }
} else {
  alert("Некоректний номер місяця. Введіть число від 1 до 12.");
}