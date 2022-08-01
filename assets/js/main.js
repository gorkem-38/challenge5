// first_input.focus();
// soumis = false;
// function myFunction() {
//   soumis = true;
//   document.forms[0].submit();
// }
// function toto() {
//   if (!soumis) return "CE FORMULAIRE\nEST A NOUS RENVOYER\nMERCI...";
// }

let button = document.getElementById("liveAlertBtn");

const body = document.querySelector("body");

console.log(body);

const text = () => {
  let p = document.createElement("p");
  p.innerHTML = "lorem";
  body.append(p);
};

button.addEventListener("click", text);

console.log(button);
