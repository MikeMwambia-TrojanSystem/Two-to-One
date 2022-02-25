function DNAStrand(dna){
    console.log(dna.split(""))
      if(dna.split("").length ===0) return dna
      else return dna.split("").map((element)=>{
        if(element=="A"){
          return "T"
        }else if(element=="T"){
          return "A"
        }else if(element=="C"){
          return "G"
        }else if(element=="G"){
          return "C"
        }
      }).join('')//join('') joins an array and removes the spaces
  }