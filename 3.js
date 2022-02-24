//Best solution 1
//.match(/[a-z]/gi) ---- This means match A-Z and a - z ingnoring case returns an array
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}


//Own solution
function alphabetPosition(text) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let returnStringPos = []
    text.toLowerCase().split('').map(function(val){
      if(typeof(val)==='string' && val !==" " && letters.indexOf(val) !==-1){
        returnStringPos.push((1 +letters.indexOf(val)))
      }
    })
    return returnStringPos.join(' ')
  }




