// let date = new Date();
// console.log(date.getTimezoneOffset());
// console.log(date.valueOf());

// 正则
// 匹配所有的"at"
let pattern1 = /at/g;
// 匹配第一个"bat"或"cat"
let pattern2 = /[bc]at/g;
// 匹配所有以"at"结尾的3字符组合，忽略大小写
let pattern3 = /.at/gi;
// 匹配第一个"[bc]at"，忽略大小写
let pattern4 = /\[bc\]at/i;
// 使用字面量定义的正则，也可以通过构造函数来创建
let pattern5 = new RegExp("[bc]at",'i');

// 正则表达式的模式
// let text = "this has been a short summer";
// let pattern = /(.)hort/g;
// if (pattern.test(text)) {
//   console.log(RegExp.input);         // 最后搜索的字符串 this has been a short summer
//   console.log(RegExp.leftContext);   // 出现在lastMatch前面的文本 this has been a      
//   console.log(RegExp.rightContext);  // 出现在lastMatch后面的文本 summer
//   console.log(RegExp.lastMatch);     // 最后匹配的文本 short
//   console.log(RegExp.lastParen);     // 最后匹配的捕获组 s
// }
// 2. 属性名替换成简写形式
// if (pattern.test(text)) {
//     console.log(RegExp.$_);         // this has been a short summer
//     console.log(RegExp["$`"]);      // this has been a      
//     console.log(RegExp["$'"]);      // summer
//     console.log(RegExp["$&"]);      // short
//     console.log(RegExp["$+"]);      // s
//     console.log(RegExp["$*"]);      // false
// }


// 3. 捕获组匹配项 最多9个
// let pattern = /(..)or(.)/g; 
// if (pattern.test(text)) {
//   console.log(RegExp.$1);   // 第一个捕获组 sh
//   console.log(RegExp.$2);   // 第二个捕获组 t
// }

// 1. 捕获分组
// let text = "mom and dad and baby";
// let pattern = /mom( and dad( and baby)?)?/gi;    
// let matches = pattern.exec(text);
// console.log(matches.index);  // 0
// console.log(matches.input);  // "mom and dad and baby"
// console.log(matches[0]);     // 整个字符串 "mom and dad and baby"
// console.log(matches[1]);     // 第一个捕获组 " and dad and baby"
// console.log(matches[2]);     // 第二个捕获组 " and baby"

// 1.
// let text = "cat, bat, sat, fat";    
// let pattern = /.at/; // 只返回第一个匹配信息，因为她不是全局 
// let matches = pattern.exec(text);    
// console.log(matches.index);       // 0
// console.log(matches[0]);          // cat
// console.log(pattern.lastIndex);   // 0 
// matches = pattern.exec(text);    
// console.log(matches.index);       // 0
// console.log(matches[0]);          // cat
// console.log(pattern.lastIndex);   // 0 


// 2. 粘附标记覆盖全局标记
// let text = "cat, bat, sat, fat";    
// let pattern = /.at/y;     
// let matches = pattern.exec(text);    
// console.log(matches.index);       // 0
// console.log(matches[0]);          // cat
// console.log(pattern.lastIndex);   // 3 
// //以索引3对呀的字符开头找不到匹配项，返回null
// matches = pattern.exec(text);    
// console.log(matches);             // null
// console.log(pattern.lastIndex);   // 0
// //向前设置lastIndex可以使粘附模式找到下个匹配项
// pattern.lastIndex = 5; 
// matches = pattern.exec(text);    
// console.log(matches.index);       // 5
// console.log(matches[0]);          // bat
// console.log(pattern.lastIndex);   // 8

// 3. 正则表达式的全局标示
let text = "cat, bat, sat, fat";    
let pattern = /.at/g;     
let matches = pattern.exec(text);    
console.log(matches.index);       // 0
console.log(matches[0]);          // cat
console.log(pattern.lastIndex);   // 3 
// 以索引3对呀的字符开头找不到匹配项，返回null
matches = pattern.exec(text);    
console.log(matches);             // ['bat', index: 5, input: 'cat, bat, sat, fat', groups: undefined]
console.log(pattern.lastIndex);   // 8
// 向前设置lastIndex可以使粘附模式找到下个匹配项

matches = pattern.exec(text);    
console.log(matches.index);       // 10
console.log(matches[0]);          // sat
console.log(pattern.lastIndex);   // 13


// 1. test
// let text = "000-00-0000";    
// let pattern = /\d{3}-\d{2}-\d{4}/;  
// if (pattern.test(text)) {
//   console.log("The pattern was matched.匹配到了");
// }

// 1. 正则的字面量字符串
// let pattern = new RegExp("\\[bc\\]at", "gi"); 
// console.log(pattern.toString());      // /\[bc\]at/gi
// console.log(pattern.toLocaleString());  // /\[bc\]at/gi