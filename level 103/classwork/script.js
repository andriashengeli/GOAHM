let num1 = [1, 2, 3, 4, 5, 6]

let num2 = [7, 8, 9, 10, 11]

let result = num1.concat(num2)

num1.copyWithin(0,3,6)
console.log(num1)

num2.copyWithin(0,9,11)


let RESULT = num1.pop()
console.log(num1)
console.log(RESULT)


let Result2 = num2.pop()
console.log(num2)
console.log(Result2)


let result2 = num1.shift()
console.log(num1)
console.log(result2)



let result3 = num2.shift()
console.log(num2)
console.log(result3)


let result4 = num1.unshift(10,20)
console.log(result4)
console.log(num1)


let result5 = num2.unshift(10,20)
console.log(num2)
console.log(result5)