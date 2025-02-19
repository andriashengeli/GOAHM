 let numsArray = [1,2,3,4,5,6,7,8,9,10]
 let strArray = [11,12,13,14,15,16,17,18]

 let combinedArray = numsArray.concat(strArray)

console.log(combinedArray)

numsArray.copyWithin(0,4,8)
console.log(numsArray)


let num1 = numsArray.pop(10)
console.log(num1)

let num2 = numsArray.shift()
console.log(num2)

let num3 = numsArray.unshift(100,200)
console.log(num3)