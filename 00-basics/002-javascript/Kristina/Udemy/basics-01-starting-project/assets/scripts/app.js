const defaultResult=0;
let currentResult=defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
};
function createAndWriteLog(operator,resultBeforeCalc,calcNumber){
    const calcDescription=`${resultBeforeCalc}${operator}${calcNumber}`;
    outputResult(currentResult,calcDescription);
};
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(num1, num2) {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult+=enteredNumber;
    createAndWriteLog('+',initialResult,enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
};

function subtract(num1, num2) {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult-=enteredNumber;
    createAndWriteLog('-',initialResult,enteredNumber);
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
};

function multiply(num1, num2) {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult*=enteredNumber;
    createAndWriteLog('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
};

function divide(num1, num2) {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult/=enteredNumber;
    createAndWriteLog('/',initialResult,enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

