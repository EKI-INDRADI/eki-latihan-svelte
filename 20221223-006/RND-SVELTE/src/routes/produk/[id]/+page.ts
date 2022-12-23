// function yang pertama kali di load sebelum load content  
// kalo di angular namnya contructor atau bs juga form_load

import { error } from '@sveltejs/kit';
import axios from 'axios';
/**
 * @param {number} page
 */
export async function load(page : any) {


    //------------------ USING AXIOS

    let VITE_MAIN_API_URL_WITH_PORT = import.meta.env.VITE_MAIN_API_URL_WITH_PORT
    let VITE_STATIC_TOKEN = import.meta.env.VITE_STATIC_TOKEN

    //   console.log(import.meta.env) 
    //   supaya kepanggil ENV harus di awalin VITE_


    // @ts-ignore
    let set_id = page.params.id
    let set_token = `${VITE_STATIC_TOKEN}`
    let url_parameter = `${VITE_MAIN_API_URL_WITH_PORT}/produk/${set_id}`





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
    let product_res_json : any = {}
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



    let all_response  : any= {}
    if (product_res_json.statusCode >= 200 && product_res_json.statusCode <= 400) {

        all_response.product_res_json = product_res_json

    } else {


        all_response.product_res_json = product_res_json

    }





    return all_response






}

