// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

/**
 * @param {any} event_load
 */
export async function load(event_load) {
    const getRecipesurl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8'
    const getRecipesres = await fetch(getRecipesurl)
    // const {results}  = await getRecipesResults.json()  // ==  getRecipesResults.results
    let getRecipesResults = await getRecipesres.json()
    getRecipesResults = getRecipesResults.results


    const getRecipesurl2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8'
    const getRecipesres2 = await fetch(getRecipesurl2)
    // const {results}  = await getRecipesResults.json()  // ==  getRecipesResults.results
    let getRecipesResults2 = await getRecipesres2.json()
    getRecipesResults2 = getRecipesResults2.results


    return {
        recipes: getRecipesResults,
        recipes2: getRecipesResults2
        // recipes: [
        //     {
        //         title: "hello",
        //         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
        //     }
        // ]
    }
}
