console.log("delete null     :", delete null);
console.log("delete 11       :", delete 11);
console.log("delete undefined:", delete undefined);

a = { c: 12 };
console.log("delete a        :", delete a);

var b = 12;
console.log("delete b        :", delete b);

console.log("delete xxxxxxxxx:", delete xxxxxxxxx); //不可达

var obj = ({})
console.log("delete .toString:", delete obj.toString); //不可达
console.log("obj.toString:", obj.toString); // 虽然返回true，但是不会自动删除原型链