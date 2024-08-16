// task--- masala matni chapacha qib berad 

// function reverseString (str ) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("dollar"));

// task 2 -. Masala: Matn Ichida Belgini Hisoblash

// function countCharacter(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCharacter("hello", "l")); 

// task 3  Masala: So‘zlar Birinchi Belgisining Katta Harfga O‘zgartirilishi

// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(capitalizeWords("hello world"));


// task 4 --Ob’ekt Ichidagi Barcha Kalitlar Ro‘yxatini Olish

function getKeys(obj) {
    return Object.keys(obj);
}

let person = { name: "Alice", age: 25, city: "New York" };
console.log(getKeys(person)); // [ "name", "age", "city" ]
