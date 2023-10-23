const emailVerified = ["giacomo@gmail.com", "alfredo@libero.it", "jennifer@hotmail.it", "claudia@msn.it", "giovanni@gmail.com"];

const userEmailElem = document.getElementById("email");
console.log(userEmailElem);

const resultSectionNo = document.querySelector(".result-section-no");
const resultSectionYes = document.querySelector(".result-section-yes");

const checkBtn = document.getElementById("check");
const removeBtn = document.getElementById("remove");

let emailCorrect = 0;

checkBtn.addEventListener("click", function ()
{
    const userEmail = userEmailElem.value;
    for (i = 0; i < emailVerified.length; i++)
    {
        if (userEmail === emailVerified [i])
        {
            emailCorrect++;
        }
    }
    if (emailCorrect > 0)
        {
            console.log("E' Presente");
            resultSectionYes.classList.remove("d-none");
        }
        else 
        {
            console.log("Non è presente");
            resultSectionNo.classList.remove("d-none");
        }
});

removeBtn.addEventListener("click", function ()
{
    userEmailElem.value = "";
    emailCorrect = 0;
    resultSectionNo.classList.add("d-none");
    resultSectionYes.classList.add("d-none");
})