//  1. 实现了迭代器的类型
let str = 'abc';
let arr = ['a','b','c'];
let map = new Map().set('a',1).set('b',2);
console.log(str[Symbol.iterator]()); // StringIterator {}[[Prototype]]: String Iterator
console.log(arr[Symbol.iterator]()); // VM11064:6 Array Iterator {}
console.log(map[Symbol.iterator]()); // VM11064:7 MapIterator {'a' => 1, 'b' => 2}

// 2. 原生结构在后台调用可迭代对象工厂函数
// for(let el of arr){
//     console.log(el);  // a,b,c
// }
// 3. 数组解构
// let  [c,d,e] =  arr;
// console.log(c,d,e); // a,b,c
// 4. 数组迭代
// let iter1 = arr[Symbol.iterator]();
// console.log(iter1.next());// {value: 'a', done: false}
// console.log(iter1.next());// VM12048:3 {value: 'b', done: false}
// console.log(iter1.next());// VM12048:4 {value: 'c', done: false}
// console.log(iter1.next());// VM12048:5 {value: undefined, done: true}

// - 接收可迭代对象的原生语言
// 1. for-of 循环
// 2. 数组解构
// 3. 扩展操作付
// let arr2 = [...arr]; console.log(arr2); // ['a', 'b', 'c']
// let arr3 = Array.from(arr); console.log(arr3); // ['a', 'b', 'c']
// 4. Set 构造函数
// let set = new Set(arr);console.log(set); // Set(3) {'a', 'b', 'c'}
// 5. Map 构造函数

// - 迭代器
// 自定义迭代器
// 1. 这个可迭代对象，每个实例只能被迭代一次
// class Counter{
//     constructor(limit){
//         this.count = 1;
//         this.limit = limit;
//     } 
//     next(){
//         if(this.count <= this.limit){
//             return {done:false,value:this.count++};
//         }else{
//             return {done:true,value:undefined};
//         }
//     }
//     // 实现迭代器接口
//     [Symbol.iterator](){
//         return this;
//     }
// }
// let counter = new Counter(3);
// for(let i of counter){
//     console.log(i);
// }
// for(let i of counter){ // nothing
//     console.log(i);
// }

// 2. 让每创建的迭代器对应一个新的迭代器，把计数器放在闭包内，通过闭包返回迭代器。
//      它实现了Iterator接口， Symbol.iterator属性引用的工厂函数 会返回相同的迭代器。
// class Counter{
//     constructor(limit){
//         this.limit = limit;
//     }
//     [Symbol.iterator](){
//         let count = 1,
//             limit = this.limit;
//         return {
//             next(){
//                 if(count<=limit){
//                     return {done:false,value:count ++};
//                 }else{
//                     return {done:true,value:undefined};
//                 }
//             }
//         }
//     }
// }
// let counter = new Counter(3);
// for(let i of counter){
//     console.log(i);   // 1 2 3
// }
// for(let i of counter){
//     console.log(i);  // 1 2 3
// } 


// - 提前终止迭代器
// class Counter{
//     constructor(limit){
//         this.limit = limit;
//     }
//     [Symbol.iterator](){
//         let count = 1,
//             limit = this.limit;
//         return {
//             next(){
//                 if(count<=limit){
//                     return {done:false,value:count ++};
//                 }else{
//                     return {done:true,value:undefined};
//                 }
//             },
//             return(){
//                 console.log('Exiting early');
//                 return {done:true};
//             }
//         }
//     }
// }
// let counter = new Counter(3);
// 1. break 退出
// for(let i of counter){
//     if(i>2){break;}
//     console.log(i);   // 1 2 Exiting early
// }
// 2. throw
// let counter2 = new Counter(5);
// try{
//     for(let i of counter){
//         if(i>2){throw 'err';}
//         console.log(i);   // 1 2 Exiting early
//     }
// }catch(e){ }
// 3. 从中断的地方继续执行
// let a = [1,2,3,4,5];
// let iter = a[Symbol.iterator]();
// for(let i of iter){
//     if(i>=2)break;
//     console.log(i); // 1
// }
// for(let i of iter){ 
//     console.log(i); // 2
// }

 
// 1. 用*产出可迭代对象
// function* generatorFn(){
//     yield* [1,2,3];
// }
// let  generatorObject = generatorFn();
// for(const x of generatorFn()){
//     console.log(x); //  1,  2, 3
// }
// 2. 
// function* generatorFn(){
//     yield* [1,2,3];
//     yield* [4,5,6];
//     yield* [7,8,9];
// }
// let  generatorObject = generatorFn();
// for(const x of generatorFn()){
//     console.log(x); //  1,  2, 3, 4, 5, 6, 7, 8, 9
// }

// yield实现递归算法, 是最有用的操作，可产生自身
// 1. 递归
function * nTimes(n){
    if(n>0){
        yield* nTimes(n-1);
        yield n-1;
    }
}
for(const x of nTimes(3)){
    console.log(x);
}

// 2. 双向图 
// 3. 深度优先遍历