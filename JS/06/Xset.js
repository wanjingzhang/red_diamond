// 在子类上实现静态方法，在实例方法中使用这些静态方法
class XSet extends Set{
    union(...sets){
        return XSet.union(this,...sets);
    }

    intersection(...sets){
        return XSet.intersection(this,...sets)
    }

    difference(set){
        return XSet.difference(this,set);
    }

    symmetricDifference(set){
        return XSet.symmetricDifference(this,set);
    }

    cartesianProduct(set){
        return XSet.cartesianProduct(this,set);
    }

    powerSet(){
        return XSet.powerSet(this);
    }


    // 集合们的并集
    static union(a,...bSets){
        const unionSet = new XSet(a);
        for(const b of bSets){
            for(const bValue of b){
                unionSet.add(bValue);
            }
        }
    }
    
    // 集合们的交集
    static intersection(a,...bSets){
        const intersectionSet = new XSet(a);
        for(const aValue of intersectionSet){
            for(const b of bSets){
                if(!b.has(aValue)){
                    intersectionSet.delete(aValue);
                }
            }
        }
        return intersectionSet;
    }

    // 两个集合的差集
    static difference(a,b){
        const differenceSet = new XSet(a);
        for(const bValue of b){
            if(a.has(bValue)){
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }

    // 两个集合的对称差集
    static symmetricDifference(a,b){
        return a.union(b).difference(a.intersection(b));
    }

    // 两个集合的笛卡尔集
    static cartesianProduct(a,b){
        const cartesianProductSet = new XSet();
        for(const aValue of a){
            for(const bValue of b){
                cartesianProductSet.add([aValue,bValue]);
            }
        }
        return cartesianProductSet;
    }

    // 一个集合的幂集
    static powerSet(a){
        const powerSet = new XSet().add(new XSet());
        for(const aValue of a){
            for(const set of new XSet(powerSet)){
                powerSet.add(new XSet(set).add(aValue));
            }
        }
        return powerSet;
    }


}