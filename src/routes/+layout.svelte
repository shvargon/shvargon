<script lang="ts">
	import "../app.css";
	import Header from "$lib/layout/Header.svelte";
	import Footer from "$lib/layout/Footer.svelte";
	let { children } = $props();
</script>

<div class="flex flex-col h-screen justify-between">
	<Header />

	<div class="mb-auto">
		{@render children()}
	</div>

	<Footer />
</div>
