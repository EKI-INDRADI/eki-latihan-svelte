


<!--------------------- GUNAKAN MODULE SETELAH BERHASIL HTTP REQUEST (data) -->
<!-- function yang pertama kali di load sebelum load content  
     kalo di angular namnya contructor atau bs juga form_load -->


<script context="module">

// ISSUE FORM LOAD / CONTRUCTOR LOAD-------------------- NEW VERISION

//     /** @type {import('./$types').PageLoad} */
//     export async function load(event) {
//         const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8'
//         const res =  await fetch(url)
//         const {results}  = await res.json()
//         return  {
//             props : {
//                 // recipes : results
//                 recipes : [
//                     {
//                         title: "hello",
//                         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
//                     }
//                 ]
//             }
//         }
//     }




// ISSUE FORM LOAD / CONTRUCTOR LOAD-------------------- OLD VERISION
 
// //    /** @type {import('@sveltejs/kit').Load} */
// //    export async function load(page) {
// //         const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8'
// //         const res =  await fetch(url)
// //         const {results}  = await res.json()
// //         return  {
// //             props : {
// //                 recipes : results
// //                 // recipes : [
// //                 //     {
// //                 //         title: "hello",
// //                 //         image: 'https://lightrun.com/answers/static/github_icon-09b634433ea463575cb8c3c7818ee4e2.svg'
// //                 //     }
// //                 // ]
// //             }
// //         }

// //     }




</script>

<!--------------------- GUNAKAN MODULE SETELAH BERHASIL HTTP REQUEST (data) -->



<!--- FOR SUBSCRIBE / AXIOS / HTTP REQUEST USING CALLBACK onMount-->
<script >
	import { onMount } from "svelte";


     /**
	 * @type {any[]}
	 */

    //   export let recipes = []  <<<-----  USING LOAD (CONTRUCTOR/FORM LOAD)-->

    /**
	 * @type {any[]}
     *  auto fix for  data :any = []
	 */

     let data = []
    // https://spoonacular.com/food-api/console#Dashboard
    // https://spoonacular.com/food-api/docs

    onMount( async () => {
        // console.log(recipes) <<<-----  USING LOAD (CONTRUCTOR/FORM LOAD)-->


        // --------------------- HTTP REQUEST (data) 
        const res  = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=b1c0836dd2e742f0af3199712142aee8");
        
        //------------------ NOT USED
        // const data = await res.json()
        // console.log(data);
        // const data_result = await res.json()
        // data = data_result.results
        //------------------ /NOT USED


        const {results} = await res.json()
        data = results

        // --------------------- HTTP REQUEST (data) 
  
    })


</script>
<!--- FOR SUBSCRIBE / AXIOS / HTTP REQUEST USING onMount-->



<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<h1>Food Recepies</h1>
 <!--{#each recipes as item}  <<<-----  USING LOAD (CONTRUCTOR/FORM LOAD)-->
<!-- --------------------- HTTP REQUEST (data)  -->
<!-- {#each data as item} <<<----- default kalo pake data-->

{#each data as item} 
<div>
    <p>{item.title}</p>
    <img src={item.image} alt={item.title}>
</div>
{/each}
<!-- --------------------- HTTP REQUEST (data)  -->