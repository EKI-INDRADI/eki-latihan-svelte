<nav>
	LAYOUT-NAV == EKI TESTING 20221215 SvelteKit <br />
	<a href="/">Home</a>
	<a href="/produk">Produk</a>
	<a href="/about">About</a>
	<hr />
	<div>
		<!-- <a href="/protected">Protected</a> -->
		<form action="?/login" method="POST"><button type="submit">Login</button></form>
		<form action="/logout" method="POST"><button type="submit">Logout</button></form>
	</div>
</nav>
