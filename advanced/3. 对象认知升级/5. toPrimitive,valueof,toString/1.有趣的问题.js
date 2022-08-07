
const obj = {
    value: 10,
    toString: function () {
        return this.value + 10;
    },
    valueOf: function () {
        return this.value;
    }
};

obj[obj] = obj.value; // obj作为key，期望值是string

console.log("keys:", Object.keys(obj)) // [ '20', 'value', 'toString', 'valueOf' ]
console.log("${obj}:", `${obj}`); // 期望是字符串：20 
console.log("obj + 1:", (obj + 1)); // 期望是默认转换，先ValueOf 再toString：11 
console.log("obj + \"\":", (obj + "")); // toString
