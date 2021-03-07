function age() {
  var year = prompt("Whats your year?");
  var age = (2021 - year);
  var h1 = document.createElement("h1");
  var ans = document.createTextNode("Your age is" + "  " + age);
  h1.appendChild(ans);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("flex-box-result").remove().age;

}
