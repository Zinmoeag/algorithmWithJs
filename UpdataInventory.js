function updateInventory(curInv, newInv) {
    // return Inventory
    const inventory = Array.from(curInv);

    // extract item to get index
    const itemOfCurInv = Array.from(curInv, item => item[1]);
    const itemOfNewInv = Array.from(newInv, item => item[1]);


    for(let i =0 ; i < newInv.length; i++){
        let item = newInv[i][1];
        let position = itemOfCurInv.indexOf(item);
        let positionNew = itemOfNewInv.indexOf(item);


        // check item exist or not
        // add new item into inventory if item does exist && apend quantity if exist
        if(position === -1){
            inventory.push(newInv[i])
        }
        else{
            inventory[position][0] += newInv[positionNew][0]
        }
    }

    //return sorted inventory Array
    return inventory.sort((prev,next) => prev[1] > next[1] ? 1 : -1)
}

var newInv = [
    [50, "dog"],
    [2, "cat"],
    [3, "monkey"],
    [8, "snake"],
]

var curInv = [
    [2, "chinpenzy"],
    [6, "monkey"],
    [8, "rat"],
    [9, "cow"],
    [-10, "dog"],
]

console.log(updateInventory(curInv, newInv));