<script lang="ts">
    import { fade } from "svelte/transition";

    let hovered = false;

    let textwidth = "0";
    let logos: HTMLElement | undefined = undefined;
    let text: HTMLElement | undefined = undefined;

    $: if (logos && !hovered) {
        textwidth = `${logos.getBoundingClientRect().width}px`;
    } else if (text && hovered) {
        textwidth = `${text.getBoundingClientRect().width}px`;
    }

    let showContent = false;

    $: if(hovered){
        showContent = true;
    }
</script>

<h1 class="title">Introducing...</h1>
<h1
    class="sf"
    on:mouseenter={() => {
        hovered = true;
    }}
    on:mouseleave={() => {
        hovered = false;
    }}
>
    The F<div class="root" style="min-width:{textwidth}">
        {#if !hovered}<div class="logoContainer" bind:this={logos} transition:fade>
                <img src="/firebaselogo.png" alt="" /><img src="/svelte.svg" alt="" />
            </div>{:else}<span class="text" bind:this={text} transition:fade>irebase Svelte</span
            >{/if}
    </div>{#if hovered}ki{:else}k I{/if}t Stack
</h1>


{#if showContent}
    <div transition:fade={{duration:1000}}>
        <div class="hor" style="width: 100%;">
            <div style="justify-self: left;">
                <h2 class="title">Sveltekit</h2>
                <ul>
                    <li>Our frontend, similar role to NextJs</li>
                    <li>Automatic reactivity</li>
                    <li>Builtin state management</li>
                    <li>Builtin transitions</li>
                    <li>Style scoped to individual components</li>
                </ul>
            </div>
            
            <div class="verDiv"></div>
            <div style="justify-self: left;">
                <h2 class="title">Firebase</h2>
                <ul>
                    <li>"Database as a service"</li>
                    <li>Logics are all in frontend 
                        <ul>
                            <li>No server code!</li>
                            <li>No server deployments!</li>
                        </ul>
                    </li>
                    <li>Real time changes to client</li>
                    <li>Builtin auth with google(though we arent doing this today.)</li>
                </ul>
            </div>
        </div>
    </div>
{/if}

<style>
    .sf {
        font-size: 3rem;
    }

    .logoContainer {
        position: absolute;
        display: inline;
        top: 0;
    }

    .text {
        position: absolute;
        top: 0;
    }

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    .root {
        width:5rem;
        display: inline-block;
        transition: min-width ease-out 500ms;
    }

    h1 {
        position: relative;
    }

    h1:hover{
        color: var(--orange)
    }
</style>
