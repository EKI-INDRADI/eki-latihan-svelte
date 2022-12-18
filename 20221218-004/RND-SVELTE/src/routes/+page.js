// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

/**
 * @param {any} event_load
 */
export async function load(event_load) {
    let getRecipesurl = 'http://127.0.0.1:3000/produk?limit=10'

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    let getRecipesres = await fetch(getRecipesurl, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyMjEyMTYwNzI3MDc4LCJ1c2VyX3BheWxvYWQiOnsiX2lkIjoiNjM5YzVmN2Y2OGE5NDIwOTJlYTQ1ZmRmIiwicGFzc3dvcmQiOiIkMmIkMTAkSy5sWEE4d28vVWczVGoyRlhNbURoLjMzczY4OVNpOGVNNnQ1QWxwc3liUXFJWHJ1aDRINXEiLCJ1c2VybmFtZSI6ImVraXRlc3RpbmciLCJlbWFpbCI6ImVraXRlc3RpbmdAbWFpbC5jb20iLCJuYW1hX3VzZXIiOiJla2kgdGVzdGluZyIsInVwZGF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImNyZWF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImlkIjoyMDIyMTIxNjA3MjcwNzgsIl9fdiI6MH0sImlhdCI6MTY3MTE5NDQ0NCwiZXhwIjoxNjcxMjM3NjQ0fQ.3jT1z84_-ffvPiNkdhMBUDwatArBTdpndAF-YC-gFbg'
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({})
    }).catch(console.error)


    let getRecipesResults = []

    try {

        if (getRecipesres) {
            getRecipesResults = await getRecipesres.json()
            getRecipesResults = getRecipesResults.results
        }

    } catch (error) {
        console.log("getRecipesResults", error)
    }

    console.log("getRecipesResults" ,getRecipesResults)



    // const getRecipesurl2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8'

    // let getRecipesResults2 = []
    // try {
    //     const getRecipesres2 = await fetch(getRecipesurl2)
    //     // const {results}  = await getRecipesResults.json()  // ==  getRecipesResults.results

    //     getRecipesResults2 = await getRecipesres2.json()
    //     getRecipesResults2 = getRecipesResults2.results
    // } catch (error) {
    //     console.log("getRecipesurl2" , error)

    // }



    return {
        data: getRecipesResults,
        // recipes2: getRecipesResults2
        // recipes: [
        //     {
        //         title: "hello",
        //         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
        //     }
        // ]
    }
}
