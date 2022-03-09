//My Solution
function sumDigPow(a, b) {
    let eurekaNumbers = [];
    for(let i = a;i<=b;i++){
        let numberE =(''+ i).split('')
        let eurekaCandidate = 0;
        numberE.forEach((element,index)=>{
            let powered = parseInt(element)**(index+1);
            eurekaCandidate = eurekaCandidate +powered;
            if(eurekaCandidate === i){
                eurekaNumbers.push(i)
            }
        })
    }
    return eurekaNumbers;
}
  
//Using reduce
function sumDigPow(a, b) {
    let eurekaNumbers = [];
    for(let i = a;i<=b;i++){
        let numberE =(''+ i).split('')
        let eurekaSum = numberE.reduce((eurekaCandidate,element,index)=>{
            return eurekaCandidate + parseInt(element)**(index+1)
        },0)
        if(i===eurekaSum){
            eurekaNumbers.push(i)
        }
    }
    return eurekaNumbers;
}

