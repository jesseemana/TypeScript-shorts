function sum(num1: number, num2: number, isResult: boolean, text: string) {
    const result = num1 + num2
    if (isResult) {
        console.log(text + result);        
    } else{
        return num1 + num2
    }
    
}

//don't usually initialise types like this as it beats the whole purpose of TypeScript
const number1 = 10
const number2 = 7.8
const showResult = true
const phrase = "Result is: "

sum(number1, number2, showResult, phrase)
 