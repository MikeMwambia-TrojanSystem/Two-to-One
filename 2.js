//Best practice solution
//.map works on each item of an array and returns the processed array

function squareDigits(num){
    
    return Number((''+num).split('').map(function(val){ return val * val;}).join(''))

}