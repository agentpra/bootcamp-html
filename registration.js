console.log("this is registration page");
const registrationform = document.getElementById("registration-form");

console.log(registrationform); 
function getSelected(select)
{
    let selectValues = [];
    for (optionIndex in select.options){

        if (select.options[optionIndex].selected){
            selectValues.push(select.options[optionIndex].value);
        }
    }
    return selectValues;
}
registrationform.onsubmit = function(event){
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
let name = document.getElementById("name").value;
let interests = getSelected(document.getElementById("interests"));
let dob = document.getElementById("dob").value;
let darkmode = document.getElementById("darkmode").checked;
const data = {
    name,
    interests,
    dob,
    darkmode,
};
console.log(data);
localStorage.setItem("userInfo", JSON.stringify(data));
};