// iteration 迭代
// const ary = ['foo','bar','baz','qux'];
// const a1 = ary.keys(); // Array Iterator {} 
// const a2 = Array.from(a1);   //  [0, 1, 2, 3] 键
// const b1 = ary.values(); // Array Iterator {} 
// const b2 = Array.from(b1);   //   ['foo', 'bar', 'baz', 'qux'] 值
// const c1 = ary.entries(); // Array Iterator {} 
// const c2 = Array.from(c1);   //   [[1,'foo'],[2,'bar']...] 值
// for(let [id,value] of c2){
//     console.log(id, value); // 0 'foo', 1 'bar', 2 'baz', 3 'qux'
// }
 
// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1, x => x**2); 
// const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 3});
// console.log(a2);  // [1, 4, 9, 16] 
// console.log(a3);  // [1, 8, 27, 64] 
 

// Sets and Maps can be converted into an new array instance using from()
// const m = new Map().set(1, 2)
//                    .set(3, 4);
// const s = new Set().add(1)
//                    .add(2)
//                    .add(3)
//                    .add(4);

// console.log(Array.from(m));  // [[1, 2], [3, 4]]
// console.log(Array.from(s));  // [1, 2, 3, 4] 

// // Array.from() performs a shallow copy of an existing array
// const a1 = [1, 2, 3, 4]; 
// const a2 = Array.from(a1);
// console.log(a1);         // [1, 2, 3, 4] 
// console.log(a1 === a2);  // false


// // Any iterable object can be used
// const iter = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2; 
//     yield 3;
//     yield 4;

//   }
// };
// console.log(Array.from(iter));  // [1, 2, 3, 4]

// // The arguments object can now easily be casted into an array:
// function getArgsArray() {
//   return Array.from(arguments);
// }
// console.log(getArgsArray(1, 2, 3, 4));  // [1, 2, 3, 4]

// // from() will happily use a custom object with required properties
// const arrayLikeObject = {
//   0: 1,
//   1: 2, 
//   2: 3,
//   3: 4,
//   length: 4
// };
// console.log(Array.from(arrayLikeObject));  // [1, 2, 3, 4] 



// 填充
// const zeroes = [0, 0, 0, 0, 0];

// // Fill the entire array with 5
// zeroes.fill(5);
// console.log(zeroes);   // [5, 5, 5, 5, 5]
// zeroes.fill(0);  // reset

// // Fill all indices >=3 with 6
// zeroes.fill(6, 3);
// console.log(zeroes);   // [0, 0, 0, 6, 6]
// zeroes.fill(0);  // reset

// // Fill all indices >= 1 and < 3 with 7
// zeroes.fill(7, 1, 3);
// console.log(zeroes);   // [0, 7, 7, 0, 0]; 
// zeroes.fill(0);  // reset

// // Fill all indices >=1 and < 4 with 8
// // (-4 + zeroes.length = 1)
// // (-1 + zeroes.length = 4)
// zeroes.fill(8, -4, -1);
// console.log(zeroes);   // [0, 8, 8, 8, 0];

// copyWithin
// let ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  
// console.log(ints.copyWithin(5)) //[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

// 数组toString方法的重写
// let person1 = {
//     toLocaleString() {
//       return "Nikolaos";
//     }, 
//     toString() {
//       return "Nicholas -";
//     }
//   };         
//   let person2 = {
//     toLocaleString() {
//       return "Grigorios";
//     }, 
//     toString() {
//       return "Greg -";
//     }
//   };         
//   let people = [person1, person2];
//   console.log(people);                   // Nicholas,Greg
//   console.log(people.toString());        // Nicholas,Greg
//   console.log(people.toLocaleString());  // Nikolaos,Grigorios

// [1,2,3].join("*")

// 排序
// let ary = [1,6,8,9]
// ary.sort((a,b) => a<b?1 : a>b?-1:0);
// console.log(ary) // 9,8,6,1
// console.log(ary.reverse()) 


// 迭代
// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// let everyResult = numbers.every((item, index, array) => item > 2);
// console.log(everyResult);  // false 
// let someResult = numbers.some((item, index, array) => item > 2);      
// console.log(someResult);   // true

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
let sum = numbers.reduce((prev,cur,index,array) => prev+cur);
console.log(sum) //25
let sum2 = numbers.reduceRight((prev,cur,index,array) => prev+cur);
console.log(sum2) //25