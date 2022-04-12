// - 数据属性
//   1. 属性不可以写入
// let person = {};
// Object.defineProperty(person,"name",{
//     writable:false,
//     value:"Celine"
// })
// console.log(person); // Celine
// person.name = "2";
// console.log(person); // Celine

//   2. 属性不可以被删除
// let person = {};
// Object.defineProperty(person,"name",{
//     configurable:false,
//     writable:false,
//     value:"Celine"
// })
// Object.defineProperty(person,"name",{  // TypeError: Cannot redefine property: name
//     configurable:true, 
//     value:"Cai"
// }) 

// 访问器属性
// let book = {
//     year_: 2017,
//     edition: 1
// }
// Object.defineProperty(book,"year",{
//     get(){
//         return this.year_;
//     },
//     set(newValue){
//         if(newValue > 2017){
//             this.year_ = newValue;
//             this.edition += newValue - 2017;
//         }
//     }
// })
// book.year = 2018;
// console.log(book.edition);

// - 定义多个属性
// let book = {};
// Object.defineProperties(book,{
//     year_:{
//         value:2017
//     },
//     edition:{
//         value:1
//     },
//     year:{
//         get(){
//             return this.year_;
//         },
//         set(newValue){
//             if(newValue > 2017){
//                 this.year_ = newValue;
//                 this.edition += newValue - 2017;
//             }
//         }
//     }
// })

// // - 读取单个属性
// let descriptor = Object.getOwnPropertyDescriptor(book,'year_');
// console.log(descriptor.value);  // 2017
// // - 读取多个属性
// let descriptors = Object.getOwnPropertyDescriptors(book);
// console.log(descriptors)

// - 合并对象
// 1. 浅复制使对象指向相等
// let desc = {};
// let src = {a:{b:1}}
// Object.assign(desc,src);
// console.log(desc); // {a:{b:1}}
// console.log(desc.a === src.a); // true

// 2. 遇到异常会暂停复制，前面的复制保留
// let desc,src,result;
// desc = {};
// src = {
//     a: 'foo',
//     get b(){
//         throw new Error();
//     },
//     c: 'bar' 
// };
// try{
//     Object.assign(desc,src);
// }catch(e){}
// console.log(desc); // {a: 'foo'}

// - 对象是否相等
// let desc={a:1};
// let src = desc;
// console.log(Object.is(desc,src)); // true
// console.log(Object.is(NaN,NaN)); // true

// 简写
// 1. 属性
// let name = "abc"
// let person = {
//     name
// }
// console.log(person); // {name: 'abc'}
// 2. 方法名 
// 2.1
// let person = {
//     sayName:function(name){
//         console.log(`My name is ${name}`);
//     }
// }
// person.sayName('celine');  // My name is celine
// 2.2 == 
// let person = {
//     sayName(name){
//         console.log(`My name is ${name}`);
//     }
// }
// person.sayName('celine');  // My name is celine
// 2.3 ==
// let methodKey = 'sayName';
// let person = {
//     [methodKey](name){
//         console.log(`My name is ${name} 3`);
//     }
// }
// person.sayName('celine');  // My name is celine 3

// - 解构
let person = {name:"Celine",age:18,job:{title:'software engineer'}};
// 1. 别名
// let {name:personName,age:personAge} = person;
// console.log(personName,personAge); // Celine 18
// 2. 默认值
// let {name:personName="celine"} = person;
// console.log(personName)
// 3. 原始对象的赋值
// let personName, personAge;
// ({name:personName,age:personAge} = person)
// console.log(personName,personAge); // Celine 18
// 4. 
//    1. 结构赋值对象
// let personCopy = {};
// ({name:personCopy.name,age:personCopy.age,job:personCopy.job} = person);
// person.job.title = 'painter'; // 浅拷贝
// console.log(person)
// console.log(personCopy)
//     2. 嵌套解构
// let {job:{title}}= person;
// console.log(title); // software engineer
//     3. 嵌套解构在外层属性没有定义的情况下不能使用！无论源还是目标对象。
// let personCopy = {};
//      - 源对象的foo未定义 
// ({foo:{bar:personCopy.bar}} = person); // TypeError: Cannot read properties of undefined (reading 'bar')
//      - 目标对象job为定义
// ({job:{title:personCopy.job.title}} = person); // TypeError: Cannot set properties of undefined (setting 'title')
//      4. 参数解构
function printPerson(foo,{name,age},bar){
    console.log(arguments); // ['1st', {…}, '2nd']
    console.log(name,age); // Celine 18
}
function printPerson2(foo,{name:personName,age:personAge},bar){
    console.log(arguments); // ['1st', {…}, '2nd']
    console.log(personName,personAge); // Celine 18
}
printPerson('1st',person,'2nd');
printPerson2('1st',person,'2nd');


