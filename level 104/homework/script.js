let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [11, 12, 13, 14, 15]

let result = arr1.concat(arr2).concat(arr3)

console.log(result)


arr1.copyWithin(0, 3, 5)

console.log(arr1)

let removed = arr1.pop()

console.log(arr1)


let removed2 = arr2.pop()

console.log(arr2)

let removed3 = arr3.pop()

console.log(arr3)


let removed4 = arr1.unshift("hello world")

console.log(arr1)


let removed5 = arr2.unshift("100")

console.log(arr2)


let removed6 = arr3.unshift("200")

console.log(arr3)

