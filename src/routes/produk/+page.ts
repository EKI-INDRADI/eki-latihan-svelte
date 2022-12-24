//<!---- ".page.ts / .page.js = GET DATA / LOAD / API CALL / DEFINE DATA SOURCE , ETC" -->


// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

import axios from 'axios';
/**
 * @param {any} page
 */




// export const load = async ({ fetch }) => {
//     const productRes = await fetch('https://dunmyjson.con/products?limit=10')
//     Const productData = await productRes.json()
//     const products = productData.products

//     return {
//         products: products
//     }
// }



export async function load(page: any) {




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
    let product_res_json: any = {}
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


    let all_response: any = {}
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

