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
    <button class="button" disabled><p>Added authors will show up here</p></button>
  {/if}
</article>

<style>
  .box {
    padding: 0.8rem;
    padding-left: 0px;
    margin-top: 10px;
    margin-left: 0px;
    box-shadow: none;
  }
  .box  {
    width: 100%;
  }
</style>
