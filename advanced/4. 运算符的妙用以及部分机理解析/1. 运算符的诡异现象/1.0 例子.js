let name = "let的name";
const person = {
  name: "person的Name",
  getName() {
    return this.name
  }
};

const getName = person.getName;

const print = function (prefix, ...args) {
  console.log(prefix.padEnd(20, " ") + ":", ...args)
}
 
print("person.getName", person.getName()); // person的Name
print("getName", getName());  // undefined

print("(person.getName)", (person.getName)()); // 分组运算符，没产生赋值运算
print("(0, person.getName)", (0, person.getName)()); // 逗号运算符，产生了赋值 (const getName = person.getName)() undefined


// typeof 如果得到结果undefined 引用不可达