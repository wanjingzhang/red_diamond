const proto = {
	name: "p_parent",
	type: "p_object",
	[Symbol.for("p_address")]: "地球"
}

const ins = Object.create(proto);
Object.defineProperty(ins, "age", { // 默认不可枚举
	value: 18
});
ins.sex = 1;
ins[Symbol.for("say")] = function () {
	console.log("say");
}

const inKeys = []
for (let p in ins) {
	inKeys.push(p);
}

console.log(inKeys);
console.log(Reflect.ownKeys(ins)); // 不能遍历原型属性，可遍历Symbol 不可枚举