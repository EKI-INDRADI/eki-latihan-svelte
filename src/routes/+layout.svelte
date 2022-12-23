<!----------------------------static before CHANGE TO components Nav.svelete
    
    <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    </nav> 

-->


<!----------------------------dynamic after CHANGE TO components Nav.svelete -->
<script>
    // rename src to .. for work directory
	// import Nav from "src/components/Nav.svelte";
    import Nav from "../components/Nav.svelte";

    // import Footer from "src/components/Footer.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<Nav />
<!-- <Nav  + CTRL + SPACE (AUTO IMPORT) -->


<!---- slot untuk semua routes untuk menggantikan content-->

<hr>
LAYOUT-SLOT == EKI TESTING 20221215 SvelteKit
<slot></slot>
<hr>


<!----------------------------static before CHANGE TO components Footer.svelete
    
<footer>
LAYOUT FOOTER EKI TESTING 20221215 SvelteKit
</footer>

-->

<Footer  />
<!-- <Footer  + CTRL + SPACE (AUTO IMPORT) -->


