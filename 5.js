//My Implementation
function highAndLow(numbers){

    let arrayJ = numbers.split(' ').sort((a,b)=>{
        if(parseInt(a)>parseInt(b)) return 1;
        if(parseInt(a)<parseInt(b)) return -1;
        return 0;
    })
    console.log(arrayJ)
    let firstE = arrayJ[0];
    let secondE = arrayJ.slice(-1)[0]
    return secondE.toString()+' '+firstE.toString()
  }

//Other implementation
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);//Converts array into numbers 
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);//Returns the maximum and minimum
  }


  function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)//Converts the array into numbers
    
    var min = Math.min.apply(null, numbers)
    var max = Math.max.apply(null, numbers)
    
    return max + ' ' + min
  }