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

// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
// let sum = numbers.reduce((prev,cur,index,array) => prev+cur);
// console.log(sum) //25
// let sum2 = numbers.reduceRight((prev,cur,index,array) => prev+cur);
// console.log(sum2) //25



// 定型数组
// const buf = new ArrayBuffer(16); // 在内存中16字节
// const buf2 = buf.slice(4,12); 
// console.log(buf2.byteLength);

// const buf = new ArrayBuffer(16); 
// // DataView default to use the entire ArrayBuffer
// const fullDataView = new DataView(buf);
// console.log(fullDataView.byteOffset);      // 0
// console.log(fullDataView.byteLength);      // 16
// console.log(fullDataView.buffer === buf);  // true

// const ints = new Int16Array([1, 2, 3]);
// const doubleints = ints.map(x => 2*x);
// console.log(doubleints instanceof Int16Array);  // true



// 1. Set 方法
// const container = new Int16Array(8);  
// container.set(Int8Array.of(1, 2, 3, 4));
// console.log(container);  // [1,2,3,4,0,0,0,0] 
// container.set([5,6,7,8], 4); // 从第4个位置插入，0开始到4
// console.log(container);  // [1,2,3,4,5,6,7,8] 
// container.set([5,6,7,8], 7); //溢出错误

// 2. subarray方法
// const source = Int16Array.of(2, 4, 6, 8); 
// // Copies the entire array into a new array of the same type
// const fullCopy = source.subarray();
// console.log(fullCopy);  // [2, 4, 6, 8]  
// const halfCopy = source.subarray(2);//从第2个位置开始复制
// console.log(halfCopy);  // [6, 8] 
// const partialCopy = source.subarray(1, 3);//从[1,2]中复制
// console.log(partialCopy);  // [4, 6] 

// // Map 1. 使用嵌套数组初始化映射
// const m1 = new Map([
//     ['key1','val1'],
//     ['key2','val2'],
//     ['key3','val3'],
// ])
// console.log(m1.size)
// // 2. 使用迭代器初始化映射
// const m2 = new Map({
//     [Symbol.iterator]:function*(){
//         yield ['key1','val1'];
//         yield ['key2','val2'];
//         yield ['key3','val3'];
//     }
// })
// console.log(m2.size)

// Map方法
// const m = new Map();
// console.log(m.has("firstName")); //false
// console.log(m.get("firstName")); //undefined
// console.log(m.size);// 0
// m.set('firstName','Celine')
// .set('lastName','Zhang') // 链式
// console.log(m.has("firstName")); //true
// console.log(m.get("firstName")); //Celine
// console.log(m.size);// 2
// m.clear()// 清除所有的键值对


// 链式
// const ml = new Map().set('firstName','Celine');
// console.log(ml.get("firstName"))


// 使用function,symbol,object作为键
// const m = new Map();
// const funKey = function(){};
// const smbKey = Symbol();
// const objKey = new Object();
// m.set(funKey,'function some value')
// .set(smbKey,'symbol some value')
// .set(objKey,'object some value');
// // console.log(m.get(funKey));// function some value
// // console.log(m.get(smbKey));// symbol some value
// // console.log(m.get(objKey));// object some value
// objKey.attribute = "add test";
// console.log(m.get(objKey));// object some value


// 迭代
// const m = new Map([
//     ['key1','val1'],
//     ['key2','val2'],
// ]);
// console.log(m.entries === m[Symbol.iterator]); //true
// for(let pair of m.entries()){
//     console.log(pair);(2)  // ['key1', 'val1']  ['key2', 'val2']
// }
// for(let item of m[Symbol.iterator]()){
//     console.log(item) // 同上
// }
// // 回调方式 forEach(callback,args)
// m.forEach((val,key) =>console.log(`${key} -> ${val}`)) // key1 -> val1
// for(let key of m.keys()){
//     console.log(key) //key1
// }
// for(let val of m.values()){
//     console.log(val) //val1
// }

// 弱引用
// const key1 = {id:1};
// const wm = new WeakMap([[key1,"val1"]])
// console.log(wm.get(key1)); // val1
// const wm2 = new WeakMap([["key1","val2"]]); // TypeError类型错误
// console.log(wm2)

// 1. 弱映射私有变量
// const wm = new WeakMap();
// class User{
//     constructor(id){
//         this.idProperty = Symbol('id');
//         this.setId(id);
//     }
//     setPrivate(property,value){
//         const privateMembers = wm.get(this) || {};
//         privateMembers[property] = value;
//         wm.set(this,privateMembers);
//     }
//     getPrivate(property){
//         return wm.get(this)[property];
//     }
//     setId(id){
//         this.setPrivate(this.idProperty,id);
//     }
//     getId(){
//         return this.getPrivate(this.idProperty);
//     }
// }
// const user = new User(123);
// console.log(user.getId());// 123
// user.setId(456);
// console.log(user.getId());// 456
// console.log(wm.get(user)[user.idProperty])// 456

// 2. 使用闭包把WeakMap包装起来 
// const User = (()=>{   
//     const wm = new WeakMap();
//     class User{
//         constructor(id){
//             this.idProperty = Symbol('id');
//             this.setId(id);
//         }
//         setPrivate(property,value){
//             const privateMembers = wm.get(this) || {};
//             privateMembers[property] = value;
//             wm.set(this,privateMembers);
//         }
//         getPrivate(property){
//             return wm.get(this)[property];
//         }
//         setId(id){
//             this.setPrivate(this.idProperty,id);
//         }
//         getId(){
//             return this.getPrivate(this.idProperty);
//         }
//     }
//     return User;
// })();
// const user = new User(123);
// console.log(user.getId());// 123
// user.setId(456);
// console.log(user.getId());// 456
// console.log(wm.get(user)[user.idProperty])// 引用错误，wm未定义

// DOM元素节点数据 
// const m = new Map();
// const lginButton = document.querySelector("#login");
// m.set(lginButton,{disabled:true});  

// Set 
// const m = new Set();
// const s1 = new Set(["val1","val2","val3"]) // 使用数组初 始化集合
// const s2 = new Set({
//     [Symbol.iterator]:function*(){ // 使用自定义迭代器 初始化集合
//         yield "val1";
//         yield "val2";
//         yield "val3";
//     }
// })
// console.log(s2.size);

// 2
// const s = new Set();
// // console.log(s.has("Matt")); //  false
// // console.log(s.size); // 0
// s.add("Matt").add("Frisbie");
// console.log(s.has("Matt")); //  true
// console.log(s.size); // 2
// s.clear() // 销毁 集合实例中的所有值
// console.log(s.has("Matt")); //  false
// console.log(s.size); // 0

//3 链式
// const s = new Set().add("Celine");
// console.log(s.size);

// 4. 支持多种数据类型
// const s = new Set();
// const fnVal = function(){};
// const sbVal = Symbol();
// const obVal = new Object();
// s.add(fnVal).add(sbVal).add(obVal);
// console.log(s);
// obVal.flag = true;
// console.log(s);

// 5. 顺序与迭代
    // const s = new Set(["val1","val2","val3"]);
    // console.log(s.values === s[Symbol.iterator]); // true
    // console.log(s.keys === s[Symbol.iterator]); // true
    // for(let value of s.values()){
    //     console.log(value)
    // }
    // for(let val of s[Symbol.iterator]()){
    //     console.log(val)
    // }
    // for(let value of s.entries()){
    //     console.log(value) //['val1', 'val1']
    // }
    // s.forEach((val,dupVal) =>  console.log(`${val} -> ${dupVal}`)) // val1 -> val1

//  使用弱集合，给对象打标签
// const m = new WeakSet(); 
// const loginButton = document.querySelector('#login');  
// m.set(loginButton, {disabled: true});

// const iterableItems = [
//     Array.of(1,2), // 1,2
//     Int16Array.of(3,4), // 3,4
//     new Map([[5,6],[7,8]]), // [5,6],[7,8]
//     new Set([9,10]) // 9,10
// ]
// for(const Item of iterableItems){
//     for(const x of Item){
//         console.log(x);
//     }
// }

// 1. 扩展操作符在对象浅复制时，十分有用
// let ary1= [1,2,3];
// let ary2 = [...ary1];
// console.log(ary1 === ary2) // false

// 2. 可迭代对象构造函数只需要传入一个可迭代对象，即可实现赋值
// let map1 = new Map([[1,2],[3,4]]);
// let map2 = new Map(map1);
// console.log(map1 === map2)// false

// 3. 复制数组的部分元素
// let ary1 = [1,2,3];
// let ary2 = [0,...ary1,4,5]; //[0, 1, 2, 3, 4, 5]
// console.log(ary2)

// 4. 复制数组中对象时，只复制对象的引用
// let arr1 = [{}];
// let arr2 = [...arr1];
// arr1[0].foo = 'bar';
// console.log(arr2[0])  // {foo:'bar'}

// 5. Array.of(),Array.from()  与扩展操作符一起使用的技巧
// let arr1 = [1,2,3];
// // 1. 把数组复制到定型数组
// let typedAry1 = Int16Array.of(...arr1); // 定型数组
// let typedAry2 = Int16Array.from(arr1); 
// // console.log(typedAry1);
// // console.log(typedAry2);
// // 2. 把数组复制到映射
// let map = new Map(arr1.map((x)=>[x,'val'+x]));
// console.log(map); // {1 => 'val1', 2 => 'val2', 3 => 'val3'}
// // 3. 把数组复制到集合
// let set = new Set(typedAry2);
// console.log(set); // Set(3) {1, 2, 3}
// // 4. 把集合复制回数组
// let arr2 = [...set];
// console.log(arr2); // [1, 2, 3]

// 2022.3.13

