<!-- SveleteKit 1.0 change to +page.js -->
<script context="module">
</script>

<!--- FOR SUBSCRIBE / AXIOS / HTTP REQUEST USING CALLBACK onMount-->
<script>
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	export let data; // export let data;  get from +page.js // <---- return { recipes: results }
	// @ts-ignore
	//  const { recipes } =  data
	data = data.recipes;
	// @ts-ignore
	// const recipes2 = data.recipes2;

	onMount(async () => {});
</script>

<!--------------------- GUNAKAN MODULE SETELAH BERHASIL HTTP REQUEST (data) -->
<!-- function yang pertama kali di load sebelum load content  
     kalo di angular namnya contructor atau bs juga form_load -->



<!--------------------- GUNAKAN MODULE SETELAH BERHASIL HTTP REQUEST (data) -->


<!--- FOR SUBSCRIBE / AXIOS / HTTP REQUEST USING onMount-->

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<h1>Food Recepies</h1>
<!--<<<-----  USING LOAD +page.js (CONTRUCTOR/FORM LOAD)-->
<!-- --------------------- RESPONSE HTTP REQUEST -->
{#each data as item}
	<div>
		<p>{item.nama_produk}</p>
        <p>{item.deskripsi_produk}</p>
        <p>{item.harga_jual}</p>
        <p>{item.harga_beli}</p>
		<img src={item.foto} alt={item.foto} />
	</div>
{/each}

<!-- {#each recipes2 as item}
	<div>
		{item.id}
	</div>
{/each} -->
<!-- --------------------- RESPONSE HTTP REQUEST -->
