//NOT SUBMITTED
function comp(array1, array2){
    //your code here
   let processedArr1 = array1.map((element)=>{
        return element*element
    })
    processCompare(processedArr1);
    let processArr2 = array2.map((element)=>{
        return element * element
    })
    processCompare(processArr2);
    let firstArr = false;
    let secondArr = false;
    function processCompare(arr){
        for(var i = 0;i<arr.length;i++){
            if(array1[i]>1){
                firstArr = true
            }
            if(array2[i]>1){
                secondArr = true
            }
        }
    }
  }

  function comp(array1, array2){
    let match = false;
    //your code here
    let processArr = (arr)=>{
        let processed = arr.map((element)=>{
            return element*element
        })
    
        processed.forEach(pelement,index,prArr => {
            if(array1[pelement]>-1 ||array2[pelement]>-1){
                match = true;
            }else {
                match = false;
            }
            if((index+1)===prArr.length){
                return match
            }
        });
    }
    console.log(processArr(array1))
    console.log('--------------')
    console.log(processArr(array2))
    //return processArr ? processArr(array1) : processArr(array2)
  }


  function miniMaxSum(arr) {
    
    arr.sort((a,b)=>a-b); //Sort arrray ascending order

    let min = arr.slice(0,arr.length-1).reduce((a,b)=>a+b)//Calculate the minimum by removing largest element at the end

    let max = arr.slice(1).reduce((a,b)=>a+b)//Same calculates the max by removing the first smallest element at the beginning

    console.log(min, max)//Prints a space separated output to console
}