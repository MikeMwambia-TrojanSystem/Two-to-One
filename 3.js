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