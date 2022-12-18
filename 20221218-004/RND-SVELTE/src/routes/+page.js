// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

import axios from 'axios';
/**
 * @param {any} event_load
 */
export async function load(event_load) {
    // let getRecipesurl = 'http://127.0.0.1:3000/produk?limit=10'
    // // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // let getRecipesres = await fetch(getRecipesurl, {
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     // mode: 'cors', // no-cors, *cors, same-origin
    //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     // credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyMjEyMTYwNzI3MDc4LCJ1c2VyX3BheWxvYWQiOnsiX2lkIjoiNjM5YzVmN2Y2OGE5NDIwOTJlYTQ1ZmRmIiwicGFzc3dvcmQiOiIkMmIkMTAkSy5sWEE4d28vVWczVGoyRlhNbURoLjMzczY4OVNpOGVNNnQ1QWxwc3liUXFJWHJ1aDRINXEiLCJ1c2VybmFtZSI6ImVraXRlc3RpbmciLCJlbWFpbCI6ImVraXRlc3RpbmdAbWFpbC5jb20iLCJuYW1hX3VzZXIiOiJla2kgdGVzdGluZyIsInVwZGF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImNyZWF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImlkIjoyMDIyMTIxNjA3MjcwNzgsIl9fdiI6MH0sImlhdCI6MTY3MTMzOTMwMCwiZXhwIjoxNjcxMzgyNTAwfQ.djvdC_fcKFOqcjdgUQBvR6cKJTiC0pprJ7SF9lB0Spo'
    //     },
    //     // redirect: 'follow', // manual, *follow, error
    //     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     // body: JSON.stringify({})
    // }).catch(console.error)


    // let getRecipesResults = []
    // try {
    //     if (getRecipesres) {
    //         getRecipesResults = await getRecipesres.json()
    //         getRecipesResults = getRecipesResults.results
    //     }
    // } catch (error) {
    //     console.log("getRecipesResults", error)
    // }
    // console.log("getRecipesResults" ,getRecipesResults)



    //------------------ USING AXIOS

    let set_skip = 0
    let set_limit = 10
    let set_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAyMjEyMTYwNzI3MDc4LCJ1c2VyX3BheWxvYWQiOnsiX2lkIjoiNjM5YzVmN2Y2OGE5NDIwOTJlYTQ1ZmRmIiwicGFzc3dvcmQiOiIkMmIkMTAkSy5sWEE4d28vVWczVGoyRlhNbURoLjMzczY4OVNpOGVNNnQ1QWxwc3liUXFJWHJ1aDRINXEiLCJ1c2VybmFtZSI6ImVraXRlc3RpbmciLCJlbWFpbCI6ImVraXRlc3RpbmdAbWFpbC5jb20iLCJuYW1hX3VzZXIiOiJla2kgdGVzdGluZyIsInVwZGF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImNyZWF0ZV9hdCI6IjIwMjItMTItMTZUMTI6MDc6MjcuMDc4WiIsImlkIjoyMDIyMTIxNjA3MjcwNzgsIl9fdiI6MH0sImlhdCI6MTY3MTMzOTMwMCwiZXhwIjoxNjcxMzgyNTAwfQ.djvdC_fcKFOqcjdgUQBvR6cKJTiC0pprJ7SF9lB0Spo'
    let url_parameter = `http://127.0.0.1:3000/produk?skip=${set_skip}&limit=${set_limit}`
    let result = null
    let AxiosParams = {
        method: 'get',
        url: url_parameter,
        headers: {
            "Authorization": `Bearer ${set_token}`,
            "Access-Control-Allow-Origin": "*"
        },
        data: {}
    }

    let result_data = null
    let result_status = null
    let res_json = {}
    res_json.statusCode = 404
    res_json.message = 'unkown error'
    try {
        result = await axios(AxiosParams)
        result_data = result.data
        result_status = result.status
        res_json.statusCode = result_status
        res_json.message = "SUCCESS"
        res_json.response = result_data
    } catch (error2) { // re-try + error info
        result = await axios(AxiosParams).catch(async (error) => {
            result_data = (error && error.response && error.response.data) ? error.response.data : null
            result_status = (error && error.response && error.response.status) ? error.response.status : null
            res_json.statusCode = result_status
            let token_message = (error && error.response && error.response.data && error.response.data.error) ? error.response.data.error : "error unkown" //"ERROR"
            res_json.message = `Error ${token_message}, unkown error` //"ERROR"
            res_json.response = result_data
        })
    }

    //------------------ USING AXIOS


    return {
        product_res_json: res_json,
        // recipes2: getRecipesResults2
        // recipes: [
        //     {
        //         title: "hello",
        //         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
        //     }
        // ]
    }
}

