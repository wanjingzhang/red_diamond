function abc(){
    var a = 1;
    return function log(){
        console.log(a++)
    }
}
var a = abc();
console.dir(a); // f log() => Scopes[0].Closure
a(); // 2
a(); // 3