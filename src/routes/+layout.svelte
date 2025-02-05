<script lang="ts">
	import '../app.css';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />