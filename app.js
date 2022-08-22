const birthDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector(".link-btn");
const result = document.querySelector(".result");
const luckyImage = document.querySelector(".lucky");
const unluckyImage = document.querySelector(".notlucky");

checkBtn.addEventListener("click", function () {
    if(Number(birthDate.value) === 0){
        messagePrint("Please enter date.");
        result.style.color = "#d97706";
        unsetImage("none", "none");
    }
    
    else if (Number(luckyNumber.value) <= 0 ) {
        messagePrint("Please enter a value that is above zero.");
        result.style.color = "#d97706";
        unsetImage("none", "none");
    }    
    
    else {
        result.style.color = "unset";
        let sumOfDigits = sumCalc(birthDate.value);
        if (sumOfDigits % Number(luckyNumber.value) === 0) {
            messagePrint("You are lucky! 🤗");
            result.style.color = "#15803d";
            unsetImage("none", "block");
        } else {
            messagePrint("You are not that lucky! 😥");
            result.style.color = "#1e40af";
            unsetImage("block", "none");

        }
    }
});

function sumCalc(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    let digitSum = 0;

    for (let index = 0; index < dateOfBirth.length; index++) {
        digitSum += Number(dateOfBirth.charAt(index));
    }
    console.log(digitSum);
    return digitSum;
}

function messagePrint(message) {
    result.innerText = message;
}

function unsetImage(state1, state2){
    unluckyImage.style.display = state1;
    luckyImage.style.display = state2;
}