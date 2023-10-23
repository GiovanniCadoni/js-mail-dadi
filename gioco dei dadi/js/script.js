let userNumber;
let pcNumber;

let userNumberElem = document.getElementById("number-user");
let pcNumberElem = document.getElementById("number-pc");
let result = document.getElementById("result");

let resultClass = document.querySelector(".result");

const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", function ()
{
    userNumber = Math.floor((Math.random() * 6) + 1);
    console.log(userNumber);
    pcNumber = Math.floor((Math.random() * 6) + 1);
    console.log(pcNumber);
    userNumberElem.innerHTML = `${userNumber}`;
    pcNumberElem.innerHTML = `${pcNumber}`;
    if (userNumber > pcNumber)
    {
        console.log("Hai vinto!");
        result.innerHTML = `Hai vinto!`
        resultClass.classList.remove("d-none");
        resultClass.classList.remove("text-danger");
        resultClass.classList.add("text-success");
    } else
    {
        console.log("Hai perso!");
        result.innerHTML = `Hai perso!`
        resultClass.classList.remove("d-none");
        resultClass.classList.remove("text-success");
        resultClass.classList.add("text-danger");
    }
});