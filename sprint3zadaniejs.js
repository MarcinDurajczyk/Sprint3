// Pod każdym punktem dodaj swoje rozwiązanie, w tym celu stwórz plik sprint3zadanie.js
// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let age = 10;
// b) Utwórz zmienną typu string przechowującą twoje imię.
let name = 'Marcin';
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let surname;
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const fullName1 = {
    name: 'Marcin ',
    age: 28,
};
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
const a = true
let b = false
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let x,y;
x = 15;
y = 8;
let sum1;
sum1 = x + y;
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let fullName2;
fullName2 = name + ' ' + surname;
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let floatingPoint = 3.14159265359;
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let sum2;
sum2 = x + y;
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
const city = 'Głowaczów'
// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let array = ['Marcin', 28, fullName1];
// b) Stwórz obiekt car z właściwościami make, model i year.
let car = {
    make: 2006,
    model: 'yaris',
    year: 2023,
};
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let array3Number = [123, 242, 877];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let person = {
    name: 'Marcin',
    age: 28,
    isStudent: true,
}
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let object1;
object1 = {color: 'grey'};
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
let animals = [
    lion: {
        name: 'Mufasa',
        age: 13,
    },
    crocodile: {
        name: 'Tabaluga',
        age: 201,
    },
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
let lawArray = [false, true];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let student = {
    name: 'Artur',
    grades: [3, 4, 3, 2, 6],
    isActive: true,
};
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let randomArray = [
    name: 'Andrzej',
    age: 46,
    married: true,
    kids: true,
    debt: {
        mbank: 2400,
        PKO: 4000,
    },
];
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let book = {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    yearPublished: 1954, 
};

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let c = 12;
if (c > 10) {
    console.log(a)
}
else{
    console.log(b)
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa 'Hello'.
if (c === 'Hello') {
    console.log(a)
}
else{
    console.log(b)
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const tern = c === 12 ? a : b ;
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
if (age >= 18) {
    console.log('jesteś pełnoletni')
}
else{
    console.log('nie jesteś pełnoletni')
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let array3 = [1, 2, 3];
let none = [];
if(array3 === none){
    console.log('pusta')
}
else{
    console.log('pełna')
};
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = true;
let discount = isMember ? true : false;
console.log(discount)? true: false;
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
if (city.length > 5){
    console.log(true)
}
else{console.log(false)}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let d = 7;
let checkedNumber = d % 2
if (checkedNumber === 1){
    console.log('nieparzysta')
}
else{
    console.log('parzysta')
}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let tern2 = checkedNumber===1? 'nieparzysta': 'parzysta';
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
if('author' in book){
    console.log('poprawny klucz')
}
else{
    console.log('niepoprawny klucz')
}