// 1. 自定义 迭代器
class Counter{
    constructor(limit){
        this.count = 1;
        this.limit = limit;
    }
    next(){
        if(this.count <= this.limit){
            return {done:false,value:this.count+=3};
        }else{
            return {done:true,value:undefined};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}
let counter = new Counter(10);
for(let i of counter){
    console.log(i);
}// 4 7 10 13

// 2. 自定义迭代器
class Counter2{
    constructor(limit){
        this.limit = limit;
    }
    [Symbol.iterator](limit){
        let count = 1,
            limit = this.limit;
        return{
            next(){
                if(count <= limit){
                    return {done:false,value:count++};
                }else{
                    return {done:true,value:undefined};
                }
            }
        };
    }
}