<script lang="ts">
	import MainLayout from "$lib/layout/MainLayout.svelte";
	let { children, title } = $props();
</script>

<svelte:head>
	<title>{title}</title>	
</svelte:head>

<MainLayout>
		<div class="conainer mx-auto prose prose-h1:text-2xl prose-h2:text-xl mt-6">
			{@render children()}
		</div>
</MainLayout>