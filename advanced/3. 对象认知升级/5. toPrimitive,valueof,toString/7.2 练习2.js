
// 对象转换成原始值的问题
const val = [] == ![]; 
console.log(val)
 //'' == ! true (false)
 //0 == 0
 // true

let val2 = [+val, [] + 1] == [1, 1] + []
// [+true, ''+1]
// [1, '1'] = [1, 1] + ''
// '1, 1'   = [1,1]调用了内部的join方法 + ''
// '1, 1' == '1, 1'
// true
console.log(val2)

console.log([+val, [] + 1] == [1, '1'])
// [1, '1']  == [1, '1']

console.log([+val, [] + 1] == [1, '1'])