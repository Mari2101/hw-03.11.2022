//1. Modals
// Get the modal
var modal = document.getElementById("myModal") as HTMLDivElement;

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn") as HTMLButtonElement;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//2. Phone Book
const book = document.getElementById("phoneBook") as HTMLDivElement;
class Addressee {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  constructor(firstName: string, lastName: string, phoneNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}

const firstPersObj = new Addressee("John", "Smith", "0538037000");
const secondPersObj = new Addressee("Sarah", "Parker", "0538424242");
const firstPers = JSON.stringify(firstPersObj);
const secondPers = JSON.stringify(secondPersObj);

const myTable = document.getElementById("myTable") as HTMLTableElement;

const formBtn = document.getElementById("formBtn") as HTMLButtonElement;
book.innerHTML += `<table id="myTable">
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Phone number</th>
</tr>
<tbody id="tbody">
<tr>
<td>${firstPersObj.firstName}</td>
<td>${firstPersObj.lastName}</td>
<td>${firstPersObj.phoneNumber}</td>
</tr>
<tr>
<td>${secondPersObj.firstName}</td>
<td>${secondPersObj.lastName}</td>
<td>${secondPersObj.phoneNumber}</td>
</tr></tbody>
</table>`;

formBtn.addEventListener("click", () => {
  const first: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  const surname = document.getElementById("surname") as HTMLInputElement;
  const tel = document.getElementById("tel") as HTMLInputElement;
  /* const firstInput = first.value; */
  const surnameInput = String(surname.value);
  const telInput = String(tel.value);
  console.log(first, surnameInput, telInput);

  const tableRef = document.getElementsByTagName("tbody")[1];

  tableRef.innerHTML += `<td>${first}</td>
  <td>${surnameInput}</td>
  <td>${telInput}</td>`;
});

//3
const funcTask = document.getElementById("task3") as HTMLDivElement;
/* const ageInput = (document.getElementById("age") as HTMLInputElement).value;
 */ const emailInput = (document.getElementById("email") as HTMLInputElement)
  .value;
const UserNameInput = (document.getElementById("username") as HTMLInputElement)
  .value;
const btn2 = document.getElementById("btn2") as HTMLButtonElement;

class Validators {
  static checkValidAge(age: number) {
    return age >= 0 && age <= 120;
  }

  static checkValidEmail(email: string) {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return email.match(emailPattern) !== null; //email.length >= 5 && email.indexOf("@") != -1;
  }

  static checkValidUserName(username: string) {
    let noDigits = username.match(/[0-9]/) === null;
    return username.length >= 3 && noDigits;
  }
}
btn2.addEventListener("click", () => {
  const ageInput = (document.getElementById("age") as HTMLInputElement).value;
  const ageInputNum = +ageInput;
  const emailInput = (document.getElementById("email") as HTMLInputElement)
    .value;
  const UserNameInput = (
    document.getElementById("username") as HTMLInputElement
  ).value;
  if (Validators.checkValidAge(ageInputNum)) {
    console.log("Hmmm, age looks good");
  } else {
    console.log("Hmmm, the age does not seem valid");
  }
  if (Validators.checkValidEmail(emailInput)) {
    console.log("Hmmm, email looks good");
  } else {
    console.log("Hmmm, the email must be a valid");
  }
  if (Validators.checkValidUserName(UserNameInput)) {
    console.log("Hmmm, username looks good");
  } else {
    console.log("Hmmm, the username must be a valid");
  }
});
