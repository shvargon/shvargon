<script lang="ts">
	import MainLayout from "$lib/layout/MainLayout.svelte";
	let { children } = $props();
</script>

<MainLayout>
	<div class="container mx-auto flex justify-center items-center">
		<div class="prose max-w-none prose-h1:text-2xl prose-h2:text-xl mt-6 w-full">
			{@render children()}
		</div>
	</div>
</MainLayout>
