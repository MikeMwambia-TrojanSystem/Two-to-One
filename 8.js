/*
My solution
*/
function inArray(array1,array2){

    let matchedArray = [];
    array1.forEach(k=>{
      array2.forEach(l=>{
        let match = l.match(k)
        if(match !== null){
          matchedArray.push(k)
        }
      })
    })
   
    let unique = (value,index,arr)=>{
      return arr.indexOf(value) === index
    }
    return matchedArray.filter(unique).sort()  
}

//Clever solution
function inArray(arr1, arr2) {
    return arr1.filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    }).sort();
  }


//Another clever one
function inArray(a1,a2) {
    let str = a2.join(' ')
    return a1.filter(s => str.indexOf(s) !== -1).sort();
}

//Clever one
function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }