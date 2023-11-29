function showInfo() {
  var Name = document.querySelector(".userName").value;
  var secondname = document.querySelector(".userPassword").value;
  if (Name.trim() == "" || secondname.trim() == "") {
    alert("Будь ласка, заповніть усі поля.");
  }
 else if (/\d/.test(Name) || /\d/.test(secondname)) {
  alert("Ці поля не можуть містити цифри");
  }
  else {
    alert(`Ім'я: ${Name.trim()}\nФамілія: ${secondname.trim()}`);
  }
}
