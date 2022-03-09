const ary = ['foo','bar','baz','qux'];

const a1 = ary.keys(); // Array Iterator {} 
const a2 = Array.from(a1);   //  [0, 1, 2, 3] 键

const b1 = ary.values(); // Array Iterator {} 
const b2 = Array.from(b1);   //   ['foo', 'bar', 'baz', 'qux'] 值

const c1 = ary.entries(); // Array Iterator {} 
const c2 = Array.from(c1);   //   [[1,'foo'],[2,'bar']...] 值
for(let [id,value] of c2){
    console.log(id, value); // 0 'foo', 1 'bar', 2 'baz', 3 'qux'
}