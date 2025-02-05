<script lang="ts">
    let { children } = $props();
</script>

<div class="prose prose-h1:text-2xl prose-h2:text-xl">
    {@render children()}
</div>
