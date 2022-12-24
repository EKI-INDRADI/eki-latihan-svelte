<!---- ".svelete = FRONTEND RENDER" -->


<!--- FOR SUBSCRIBE / AXIOS / HTTP REQUEST USING CALLBACK onMount-->
<script>
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	export let data; //  get from +page.js // <---- return { .... }

	/**
	 * @type {any[]}
	 */
	// @ts-ignore
	let product_res_json = data['product_res_json'];
	// @ts-ignore
	let product_res_json_data = product_res_json['response']['data'];

	onMount(async () => {
		// axios / fetch
	});
</script>



<h1>Daftar produk</h1>


<!-- create dynamic detail -->
{#each product_res_json_data as item}
	<a href={`/produk/${item.id}`}>
		<p>{item.nama_produk}</p>
		<!-- <p>Nama produk : {item.nama_produk}</p>
	    <p>Deskripsi produk : {item.deskripsi_produk}</p>
		<p>Harga jual : {item.harga_jual}</p>
		<p>Harga beli : {item.harga_beli}</p> -->
		<img src={item.foto} alt={item.foto} />
	</a>
{/each}

<!-- --------------------- RESPONSE HTTP REQUEST -->
