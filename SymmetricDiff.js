function sym() {

   const getDif = (arr1,arr2) => {
      const filteredArr = (arr1,arr2) => {
        return arr1.filter(item => arr2.indexOf(item) === -1);
      }
      return filteredArr(arr1,arr2).concat(filteredArr(arr2,arr1))
   }

    const diff = [...arguments].reduce(getDif).sort()

    // get unique diff
    return [...new Set(diff)]   
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))