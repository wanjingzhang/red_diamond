for(let key in {a:1,b:2}){
     console.log(key); // a b 
 }

 for(let value of [1,2,3]){
    console.log(value); // 1 2 3 
} 

console.log(0/0) // NaN

let name = 'John';
console.log(`Hello ${name}, good morning!`)

// let a=1,b=2;
// console.log(`${a} + ${b} = ${a+b}`)


let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo'); 
console.log(fooSymbol == otherFooSymbol);          // false 

// let mySymbol = new Symbol();  // TypeError:

// let num = (5, 1, 4, 8, 0);  // num becomes 0

Math.pow(3,3) //第一个参数的 第二个参数次方 3*3*3

function capitalize(word){
    return `${word[0].toUpperCase()}${word.slice(1)}`
}
console.log(`${ capitalize('hello') }, ${ capitalize('world!') }`)


label: 
  for(let i=0;i<10;i++){
    console.log(i)
	  if(i == 3)break label
  }

console.log(NaN == NaN);  // false

console.log(String.raw`first line
second line`);  
// 'first line\nsecond line'


let a = 6;
let b = 9;
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for(const expression of expressions) {
    console.log(expression);
  }
  return 'foobar';
}
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(taggedResult);  // "foobar"


// let num = 0;   
// outermost:
// for (let i = 0; i < 10; i++) {
//    for (let j = 0; j < 10; j++) {
//     if (i == 5 && j == 5) {
//       continue outermost;
//     }
//     num++;
//   }
// }          
// console.log(num);  // 95
 
// function Foo() {}
// let f = new Foo();
// console.log(Foo[Symbol.hasInstance](f));  // true

// let foo = Symbol.for('CelineFoo') // 全局注册表
// Symbol.keyFor(foo);               // CelineFoo

// 使用符号作为属性
let o ={}, job = Symbol.for('job'), where = Symbol.for("where"), gender = Symbol.for('gender');
Object.defineProperty(o,'age',{value:18})
Object.defineProperty(o,job,{value: 'software'})
Object.defineProperties(o,{
  [where]:{value:'Shanghai'},
  [gender]:{value: true}
}) 
// console.log(o);
// 实例的 常规属性数组
Object.getOwnPropertyNames(o); // age
// 实例的 符号属性数组
Object.getOwnPropertySymbols(o); //[Symbol(job), Symbol(where), Symbol(gender)]
// 实例的 常规和符号属性数组 的对象
Object.getOwnPropertyDescriptors(o); //{age: {…}, Symbol(job): {…}, Symbol(where): {…}, Symbol(gender): {…}}
// 实例的 常规和符号属性数组 键
Reflect.ownKeys(o); //['age', Symbol(job), Symbol(where), Symbol(gender)]
 
// let f = new Foo();
// console.log(f instanceof Foo);  // true 
// console.log(Foo[Symbol.hasInstance](f));  // 
 
// let o = { foo: 'bar' }; 
// with (o) {
//   console.log(foo);  // bar
// } 
// o[Symbol.unscopables] = {
//   foo: true
// }; 
// with (o) {
//   console.log(foo);  // ReferenceError
// }

// 把大象关到冰箱要几步 generator 方法
// 1. *
// function* trick(){
//   yield '1. clean the elephant';
//   yield '2. open the door of refrigerator';
//   yield '3. push the elephant to the refrigerator';
//   yield '4. close the door of refrigerator';
//   return '5. the elephant has been locked in the refrigerator successfully'
// }
// let how_to_locked_the_elephant = trick();
// console.log(how_to_locked_the_elephant.next()); // {value: '1. clean the elephant', done: false}
// console.log(how_to_locked_the_elephant.next()); // {value: '2. open the door of refrigerator', done: false}
// console.log(how_to_locked_the_elephant.next()); // {value: '3. push the elephant to the refrigerator', done: false}
// console.log(how_to_locked_the_elephant.next()); // {value: '4. close the door of refrigerator', done: false}
// console.log(how_to_locked_the_elephant.next()); // {value: '5. the elephant has been locked in the refrigerator successfully', done: true}


// 2. *
// function* generatorFn(){
//   let _n = 1;
//   let _v = yield _n + 22;
//   console.log('aa---', _v);
//   yield ++_n;
//   let _x = yield ++_n;
//   console.log('xx---',_x)

//   return _x; // 返回了return中的数字 9 
// }
// let gfn = generatorFn();
// console.log(gfn.next()); // yield _n + 22: 23
// console.log(gfn.next('abc')); // console.log('aa---', _v);: 输出:(aa--- abc)  返回:{value:2,done:false}
// console.log(gfn.next()); // {value:3,done:false}
// console.log(gfn.next(9));


// 3. *
function* trick(){
  yield '1. clean the elephant';
  yield '2. open the door ofr refrigerator';
  yield '3. push the elephant to the refrigerator';
  yield '4. close the door of refrigerator';
  yield '5. the elephant has been locked in the refrigerator successfully'
}
let myTrick = trick();
for(let i of myTrick){
  console.log(i);
}

