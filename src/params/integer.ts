// new reference : https://kit.svelte.dev/docs/advanced-routing

/** @type {import('@sveltejs/kit').ParamMatcher} */
/**
 * @param {any} params
 */
export async function match(params : any) {

    // [id=integer] buat folder di routes produk ( untuk memvalidasi id harus number)

    return /^\d+$/.test(params);

}

