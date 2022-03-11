function cakes(recipeNeeded,availableIn) {
    let recipeProperties = Object.getOwnPropertyNames(recipeNeeded);
    let cakesP = []
    recipeProperties.forEach((recipe)=>{
        let  availableIngredients = availableIn[recipe]
        if(undefined != availableIngredients){
                let possibleBake = availableIngredients/(recipeNeeded[recipe])
                cakesP.push(possibleBake);
        }else{
            cakesP.push(99999);
        }
    })
    let findUndefined = cakesP.find(element => element ===99999);
    if(findUndefined != undefined){
        return 0
    }else{
        return Math.floor(Math.min(...cakesP))
    }
}

//Best solution 
const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)

