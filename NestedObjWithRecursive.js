const array = ["depth1", "depth2", "depth3", "depth4"];
const lastValue = "this is the way";

class DoNest{
    nestedObj = {};
    currentIdx = 0;
    totalIdx = 0;
    
    constructor(array, lastValue){
        this.array = array;
        this.lastValue = lastValue;
        this.totalIdx = this.array.length - 1;
        
        this.doNest(this.array, this.nestedObj, this.currentIdx, this.totalIdx)
        return this.nestedObj;
    }
    
    doNest(array, targetNestedObj, currentIdx, totalIdx){
        const key = array[currentIdx];
        if(currentIdx === totalIdx){
            console.log("exit")
            targetNestedObj[key] = this.lastValue
            return;
        }
    
        targetNestedObj[key] = {};
        currentIdx ++;
        this.doNest(array, targetNestedObj[key], currentIdx, totalIdx)
    }
    
    getNestedObj(){
        return this.nestObj;
    }
}
// console.log(new DoNest(array, "this is the way"));
const nestedObj = new DoNest(array, lastValue);

console.log(nestedObj)