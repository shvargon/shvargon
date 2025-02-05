<script>
    import { Menu } from "lucide-svelte";
</script>

<div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button class="btn btn-square btn-ghost">
            <Menu />
        </button>
    </div>
    <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">Etheria</a>
    </div>
    <div class="flex-none">
        <!-- rightside -->
    </div>
</div>
