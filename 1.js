function longest(s1, s2) {
    // your code
    let indexOf = -1;
    let uniqueElements = (value,index,arr)=>{
      return arr.indexOf(value) === index
    }

    let s1u = s1.split("")
  
    let s2u = s2.split("")
   
    let allTogether = s1u.concat(s2u).sort()
    //.join('') joins as well as removes the commas
    let final = allTogether.filter(uniqueElements).join('')
    
    return final
  
  }

  //Best Practice
  //Use Set which lets you store unique values of any type
  //To solve the above you do
  const longest = (s1,s2)=>[...new Set(s1+s2)].sort().join('')


  //Or you can still use
  function longest(s1,s2) {
      return Array.from(new Set(s1 + s2)).sort().join('')
  }