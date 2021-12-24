const userInfo = localStorage.getItem("userInfo");

console.log(window.location.href);

function goto(fileName) {
  let link = window.location.href;
  link= link.split("/");
  let x = link.pop();
  if (x === fileName) {
      return;
  }
  let newlink = link.join("/");
  newlink = newlink + "/" + fileName;
  window.location.href = newlink;
}
if (!userInfo) {
  goto("registration.html");
}
if (userInfo){
const logout = document.getElementById("Logout");
logout.innerHTML ='<pclass ="nav-link">Logout</p>';
logout.onclick = function () {
    localStorage.removeItem("userInfo");
    goto("registration.html");
};
}