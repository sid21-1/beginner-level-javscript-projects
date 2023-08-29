let userInput = document.getElementById("date");
userInput.max= new Date().toISOString().split('T')[0];

function calculate(){
    let InputDate = new Date(userInput.value)

    let userInputYear= InputDate.getFullYear();
    let userInputMonth= InputDate.getMonth() + 1;
    let userInputDate= InputDate.getDate();

    let today= new Date();

    let currentYear= today.getFullYear();
    let currentMonth= today.getMonth() + 1;
    let currentDay= today.getDate();

    let differenceInYears , differenceInMonths , differenceInDays;

    // Here we are calculating the year difference 
    differenceInYears = currentYear - userInputYear // 2023 -2000


    // Here we are calculating the month difference
    if(currentMonth >= userInputMonth){
        differenceInMonths = currentMonth - userInputMonth;
    }
    else{
        differenceInYears--;
        differenceInMonths = 12 + currentMonth - userInputMonth;
    }
    if(currentDay >= userInputDate){
        differenceInDays = currentDay - userInputDate;
    }
    else{

        differenceInDays = getDaysInMonths(userInputYear, userInputMonth) + currentMonth - userInputDate
    }


    function getDaysInMonths(year, month){
        return new Date(year, month , 0).getDate();
    }
}