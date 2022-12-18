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
	let product_res_json_data = product_res_json['response'];

	onMount(async () => {});
</script>



<h1>Produk detail</h1>


<div>
	<p>Nama produk : {product_res_json_data.nama_produk}</p>
	<p>Deskripsi produk : {product_res_json_data.deskripsi_produk}</p>
	<p>Harga jual : {product_res_json_data.harga_jual}</p>
	<p>Harga beli : {product_res_json_data.harga_beli}</p>
	<img src={product_res_json_data.foto} alt={product_res_json_data.foto} />
	<p>created by : </p>
	<p>username : {product_res_json_data.user.username}</p>
	<p>email : {product_res_json_data.user.email}</p>
	<p>created at: {product_res_json_data.create_at}</p>
	<p>update at: {product_res_json_data.update_at}</p>

	<!-- // jika bentuk array berarti hrs looping lagi -->
</div>


