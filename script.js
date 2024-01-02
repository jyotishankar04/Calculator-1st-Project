const clearBtn = document.getElementById("clearBtn");
const backBtn = document.getElementById("backBtn");
const devideBtn = document.getElementById("devideBtn");
const multiBtn = document.getElementById("multiBtn");
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");
const dotBtn = document.getElementById("dotBtn");
const equalBtn = document.getElementById("equalBtn");
const numberBtns = document.querySelectorAll(".number");
const resulstElement = document.getElementById("result")

//Example 20 + 3
// operation = +
// previousOperand = 20
// result = 23
// !Initialze the result 
let result = '';
let operation = '';
let previousOperand = 0;




// Making a function to select operator
function selectOperation(operaterValue){
    if(result === '') return;// this returns if there is no vaule in the result display
    

    // the bellow condition checks if  operator and a previousOperand is empty ( if empty the returns)
    if(operation !== '' && previousOperand !== ''){
        calculateResult();  //This function calculate the result
    }
    operation = operaterValue;
    previousOperand = result;
    result = '';
    updateDisplay();


}


// Function to calculate the result
function calculateResult(){
let evaluatedResult;
const prev =parseFloat(previousOperand);
const current = parseFloat(result);

if(isNaN(prev) || isNaN(current)){
    return;
}


    
    switch (operation) {
        
        case '+':
    evaluatedResult = prev + current;
        break;

        case '-':
    evaluatedResult = prev - current;        
        break;

    case '*':
    evaluatedResult = prev * current;        
        break;
        
    case '÷':
    evaluatedResult = prev / current;        
        break;


    default:
        return;
    }


result = evaluatedResult.toString();
operation = '';
previousOperand = '';

}



//? function for the APPEND function
function appendNumber(number){
    if(number === '.' && result.includes('.')) return;
    result = result + number;
    updateDisplay();
}

function updateDisplay(){
    if(operation){
        resulstElement.innerText = `${previousOperand} ${operation} ${result}`;
        resulstElement.style.animation = "none";
    }else
    resulstElement.innerText = result;
    resulstElement.style.animation = "none";
}

// *Function to delete the last charecter form display
function deleteLastDgit(){
    if(operation !=='' && result === ''){
            operation = '';
            result = previousOperand;
            updateDisplay();
    }else{
        result = result.slice(0,-1);

        updateDisplay();
    }
    if(resulstElement ===''){
        resulstElement.innerText= '|';
            updateDisplay();
    }
    
}


//? function to clear all the digits
function clearButton(){
    resulstElement.innerText= '|';
    
    previousOperand = '';
    result = '';
    operation = '';
}

//? adding event Listiner to all the numbers of the calculater
//*I use foreach loop to get all elements
//! innerText is a keyword that gives the inner text (Means what is written in the element given by the selector)
numberBtns.forEach(button => {
    button.addEventListener('click',()=>{
        appendNumber(button.innerText);
    })
});


// !Adding Event Listiner for the operations & symbols
dotBtn.addEventListener('click',()=>{
    appendNumber('.');

});


// Seleting the operaters
addBtn.addEventListener('click',() =>{

    selectOperation('+');
})
subtractBtn.addEventListener('click',() =>{

    selectOperation('-');
})
multiBtn.addEventListener('click',() =>{

    selectOperation('*');
})
devideBtn.addEventListener('click',() =>{

    selectOperation('÷');
})

clearBtn.addEventListener('click',() => {
   clearButton();
});

equalBtn.addEventListener('click', () => {
    calculateResult();
    updateDisplay();
});



backBtn.addEventListener('click',()=>{
    deleteLastDgit();
})


    