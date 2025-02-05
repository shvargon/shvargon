<script lang="ts">
	import MainLayout from "$lib/layout/MainLayout.svelte";
	let { children } = $props();
</script>

<MainLayout>
	<div class="prose prose-h1:text-2xl prose-h2:text-xl">
		{@render children()}
	</div>
</MainLayout>
