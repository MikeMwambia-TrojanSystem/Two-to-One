let uniqueInOrder = (iterable)=>{
    iterable = typeof iterable === 'string' ? iterable.split(''):iterable;
    return iterable.filter(function(e,i,arr){
        return e !== arr[i-1]
    })
}