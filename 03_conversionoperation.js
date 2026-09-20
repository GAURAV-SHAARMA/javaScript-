let score = "33aa"

console.log(typeof score)
console.log(typeof (score))


let valueInNumber = Number(score)// now that converted in to number in javascript but gives NaN on running in terminal
console.log(typeof valueInNumber) 
console.log(valueInNumber) 


// "33" => 33
//"33abc"=> NaN
//true => 1 and false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) 
//1 ->> true
//"" ->> false
//"hitesh" -> true


let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)




//**********************Operations******************* */


let value = 3
let negValue = -value

console.log(negValue)

let str1 = "hello"
let str2 = " gaurav"

let str3 = str1 + str2

console.log(str3)

console.log("1"+2)
console.log(1+'2')
console.log("1"+2+2)//122 taken as string
console.log(1+2+'2')//32 string given at last (nt usable)

console.log(true)//true
console.log(+true)//1
console.log(+"")//0
// console.log(true+)//error


let num1  , num2 , num3

num1 = num2 = num3= 2+2
console.log(num1)


let gamecounter = 100
gamecounter++
++gamecounter// both do same work of increment here only
console.log(gamecounter);


