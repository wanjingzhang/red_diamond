//  1. 实现了迭代器的类型
let str = 'abc';
let arr = ['a','b','c'];
let map = new Map().set('a',1).set('b',2);
console.log(str[Symbol.iterator]()); // StringIterator {}[[Prototype]]: String Iterator
console.log(arr[Symbol.iterator]()); // VM11064:6 Array Iterator {}
console.log(map[Symbol.iterator]()); // VM11064:7 MapIterator {'a' => 1, 'b' => 2}

// 2. 原生结构在后台调用可迭代对象工厂函数
for(let el of arr){
    console.log(el);  // a,b,c
}
// 3. 数组结构
let  [c,d,e] =  arr;
console.log(c,d,e); // a,b,c
// 4. 数组迭代
let iter1 = arr[Symbol.iterator]();
console.log(iter1.next());// {value: 'a', done: false}
console.log(iter1.next());// VM12048:3 {value: 'b', done: false}
console.log(iter1.next());// VM12048:4 {value: 'c', done: false}
console.log(iter1.next());// VM12048:5 {value: undefined, done: true}