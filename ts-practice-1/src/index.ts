// Задание 2.1. В файле src/index.ts объявите переменные всех пяти базовых типов: string, number, boolean, null, undefined. Для каждой — явная аннотация типа и осмысленное значение.

let studentName: string = "Anna"
let studentAge: number = 20
let isEnrolled: boolean = true
let middleName: null = null
let hobby: undefined = undefined

// Задание 2.2. Объявите три переменные без аннотации, но с начальным значением. В комментарии укажите, какой тип вывел компилятор (проверьте наведением курсора в VS Code).

let city = "moscow" // string
let population = 12_000_000 // number
let isCapital = true // boolean

// Задание 2.3. Намеренно создайте по одной ошибке типизации для string, number и boolean. Запустите npx tsc и выпишите полный текст сообщений компилятора. Затем исправьте ошибки.

// let title: string = "book"
// title = 123

// let pages: number = 300
// pages = "many"

// let isRead: boolean = true
// isRead = 1

// vadim@MacBook-Air-vadim ts-practice-1 % npx tsc
// src/index.ts:18:1 - error TS2322: Type 'number' is not assignable to type 'string'.

// 18 title = 123
//    ~~~~~

// src/index.ts:21:1 - error TS2322: Type 'string' is not assignable to type 'number'.

// 21 pages = "many"
//    ~~~~~

// src/index.ts:24:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.

// 24 isRead = 1
//    ~~~~~~


// Found 3 errors in the same file, starting at: src/index.ts:18


let title: string = "book"
title = "Book"

let pages: number = 300
pages = 450

let isRead: boolean = true
isRead = false

// Задание 2.4. Объясните, почему при "strict": true следующий код вызывает ошибку и как её исправить корректно?

// let userName: string = null;

// При strict: true включается опция strictNullChecks,
// которая запрещает присваивать null и undefined переменным других типов. 
// Правильные варианты:

let userName1: string | null = null; // Использовать объединение типов
let userName2: string = ""; // Инициализировать пустой строкой
let userName3: string | undefined = undefined; // Использовать необязательный параметр или undefined

// Задание 3.1. Напишите функции с явной аннотацией параметров и возвращаемого значения:

function formatPrice(value: number): string {
    return value.toLocaleString('ru-RU',{ minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

function logMessage(message: string): void {
    console.log(message)
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times)
}

function describeUser(name: string, age?: number): string {
    if (age !== undefined) {
        return `${name}, age: ${age}`
    }
    return name
}

// Задание 3.2. Вызовите каждую функцию корректно. Затем сделайте по одному некорректному вызову. Зафиксируйте текст ошибок компилятора.

console.log(formatPrice(123123.5))
console.log(clamp(15, 0, 10))
logMessage("hello")
console.log(repeat("abc"))
console.log(describeUser("Vadim", 19))
console.log("Vadim")

// formatPrice("123")
// clamp(5, 0)
// logMessage(123)

// src/index.ts:101:13 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// 101 formatPrice("123")
//                 ~~~~~

// src/index.ts:102:1 - error TS2554: Expected 3 arguments, but got 2.

// 102 clamp(5, 0)
//     ~~~~~

//   src/index.ts:73:44 - An argument for 'max' was not provided.
//     73 function clamp(value: number, min: number, max: number): number {
//                                                   ~~~~~~~~~~~

// src/index.ts:103:12 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// 103 logMessage(123)
//                ~~~

// Задание 3.3. Чем отличается тип возвращаемого значения void от undefined?

// void — означает, что функция ничего не возвращает (или возвращает undefined неявно). Используется для функций с побочными эффектами (например, console.log).
// undefined — конкретное значение, которое может быть возвращено явно. Функция с типом возврата undefined обязана вернуть undefined.
function logMessage2(msg: string): void {
    console.log(msg);
}

function returnUndefined(): undefined {
    return undefined;
}

// Часть 4. Мини-проект «Библиотека»
// Задание 4.2. В файле src/index.ts импортируйте функции, создайте массив из 3–4 книг, отметьте часть как прочитанные и выведите в консоль информацию.

import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library"

const books = [
    createBook("1984", "Джордж Оруэлл", 1949),
    createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
    createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
]

if (books[0] && books[2]) {
    books[0] = markAsRead(books[0])
    books[2] = markAsRead(books[2])
}

books.forEach(book => console.log(getBookInfo(book)))
console.log(`Прочитано книг: ${countReadBooks(books)}`);