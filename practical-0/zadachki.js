function capitalizeFirstLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

name = 'hello'
console.log(capitalizeFirstLetter(name))

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

function countVowels(str) {
    const volumes = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (volumes.includes(str[i])) {
            count++
        }
    }
    return count
}

console.log(countVowels('pronunciation'))

function truncateText(str, maxLength) {
    return str.slice(0, maxLength) + '...'
}

console.log(truncateText('очень длинный текст', 5))

function removeSpaces(str) {
     return str.split(' ').join('')
}

console.log(removeSpaces('очень длинный текст'))

// --------------------------------------------------

function sumArray(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

const summArrayv2 = (arr) => Math.sum(...arr)

console.log(sumArray([1, 2, 3, 4, 5]))

const sumArrayv2 = (arr) => arr.reduce((sum, num) => sum + num, 0);

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([2, 3, 4, 5]))

const findMax = (arr) => Math.max(...arr)

console.log(findMax([1, 2, 3, 4, 5]))

const flattenArray = (arr) => arr.flat()

console.log(flattenArray([[1, 2], [3, [2]], [5, 6]]))

const uniqueValues = (arr) => [...new Set(arr)]

console.log(uniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]))

// ----------------------------------------------------

const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

console.log(printNumbers(10))

const calculateFactorial = (n) => {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(calculateFactorial(5))

const generateMultiplicationTable = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

generateMultiplicationTable(7)

const sumOfDigits = (num) => {return num.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0)}

console.log(sumOfDigits(12345))

const repeatString = (str, count) => {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += str
    }
    return result
}

console.log(repeatString('abc', 12))