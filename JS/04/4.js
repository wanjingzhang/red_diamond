// 冻结属性修改
const obj = {a:1}
Object.freeze(obj)
obj.a = 3;
console.log(obj)