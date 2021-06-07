<script>
    import Button from './Button.svelte';
    let someText = `Software Developer at TuIdentidad`;
    let counter = 0;
    let styles = {darkMode: false}

    function handlerClick(){
        counter += 1;
    }

    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }

 </script>

<style>
    p{
        color: var(--theme-color);
    }
</style>

<div class="About">
    {#if !styles.darkMode}
    <p>{someText}</p>
    {:else}
    <p><span>Hello darkMode</span></p>
    {/if}    
    <Button 
    text="Click" 
    count={counter} 
    on:click={handlerClick}/>
    <Button 
    text="Dark Mode"
    on:click={toggle}/>

    <button on:click="{handlerClick}">Click {counter == 0 ? '' : counter}</button>
    <button on:click="{toggle}">Dark Mode</button>
</div>