// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

import axios from 'axios';
/**
 * @param {any} page
 */
export async function load(page) {
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



    // if (getRecipesres.ok) {
    //     return {
    //          recipes: getRecipesResults
    //     }
    // }

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

    let VITE_MAIN_API_URL_WITH_PORT = import.meta.env.VITE_MAIN_API_URL_WITH_PORT
    let VITE_STATIC_TOKEN = import.meta.env.VITE_STATIC_TOKEN

//   console.log(import.meta.env) 
//   supaya kepanggil ENV harus di awalin VITE_

    let set_skip = 0
    let set_limit = 10
    let set_token = `${VITE_STATIC_TOKEN}`
    let url_parameter = `${VITE_MAIN_API_URL_WITH_PORT}/produk?skip=${set_skip}&limit=${set_limit}`


   
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
    let product_res_json = {}
    product_res_json.statusCode = 404
    product_res_json.message = 'unkown error'
    try {
        result = await axios(AxiosParams)


        result_data = result.data
        result_status = result.status
        product_res_json.statusCode = result_status
        product_res_json.message = "SUCCESS"
        product_res_json.response = result_data
    } catch (error2) { // re-try + error info
        result = await axios(AxiosParams).catch(async (error) => {
            result_data = (error && error.response && error.response.data) ? error.response.data : null
            result_status = (error && error.response && error.response.status) ? error.response.status : null
            product_res_json.statusCode = result_status
            let token_message = (error && error.response && error.response.data && error.response.data.error) ? error.response.data.error : "error unkown" //"ERROR"
            product_res_json.message = `Error ${token_message}, unkown error` //"ERROR"
            product_res_json.response = result_data
        })
    }

    //------------------ USING AXIOS


    let all_response = {}
    if (product_res_json.statusCode >= 200 && product_res_json.statusCode <= 400) {

        all_response.product_res_json = product_res_json

    } else {
        // all_response.product_res_json = {}
        // // @ts-ignore
        // all_response.product_res_json.response = {}
        // // @ts-ignore
        // all_response.product_res_json.response.data = []

        all_response.product_res_json = product_res_json //<<< auto validation
        // status : 404,
        // ...
    }



    return all_response

    // {
    //     product_res_json: product_res_json,
    //     // recipes2: getRecipesResults2
    //     // recipes: [
    //     //     {
    //     //         title: "hello",
    //     //         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
    //     //     }
    //     // ]
    // }

}

