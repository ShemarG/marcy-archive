<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faXmark } from '@fortawesome/free-solid-svg-icons'
  
  export let content;

  let handleDelete = (item) => {
    content.splice(content.indexOf(item), 1)
    content = content
    console.log(content)
  }

</script>

<article class="box buttons">
  {#if content.length}
    {#each content as item}
    <button on:click={() => {handleDelete(item)}} class="button">
      <span>{item}</span>
      <span class="icon is-small">
        <Fa icon={faXmark}/>
      </span>
    </button>
    {/each}
  {:else}
    <button class="button" disabled>Added authors will show up here</button>
  {/if}
</article>