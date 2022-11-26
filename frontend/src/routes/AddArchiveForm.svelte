<script>

  import ProjectFormTab from '../components/ProjectFormTab.svelte'
  import DocumentFormTab from '../components/DocumentFormTab.svelte'
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faCode, faFile, faImage } from '@fortawesome/free-solid-svg-icons'
  
  let archiveType = 'project';

  function selectArchiveType (type) {
    archiveType = type
  }

</script>

<div class="add-archive-form">
  <section class="archive-type-selection">
    <div class="tabs is-centered is-fullwidth">
      <ul class="tabs-wrapper">
        <li tabIndex="0" on:keydown={(e) => e.key === 'Enter' ? selectArchiveType("project") : null} on:click={() => selectArchiveType("project")} class:is-active={archiveType == 'project'}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>
            <span class="icon is-small"><Fa icon={faCode}/></span>
            <span> Add Project</span>
          </a>
        </li>
        <li tabIndex="0" on:keydown={(e) => e.key === 'Enter' ? selectArchiveType("document") : null} on:click={() => selectArchiveType("document")} class:is-active={archiveType == 'document'}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>
            <span class="icon is-small"><Fa icon={faFile}/></span>
            <span>Add Document</span>
          </a>
        </li>
        <li tabIndex="0" on:keydown={(e) => e.key === 'Enter' ? selectArchiveType("photo") : null} on:click={() => selectArchiveType("photo")} class:is-active={archiveType == 'photo'}>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>
            <span class="icon is-small"><Fa icon={faImage}/></span>
            <span>Add Photo</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section>
    {#if archiveType == 'project'}
      <ProjectFormTab />
    {/if}
    {#if archiveType == 'document'}
      <DocumentFormTab />
    {/if}
    <!-- {#if activeButton == 'photo'}

    {/if} -->
  </section>
</div>

<style>
  .add-archive-form {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }
  .tabs-wrapper {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .tabs-wrapper {
      flex-direction: row;
    }
    .add-archive-form {
      margin: 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    .add-archive-form {
      margin: 80px;

    }
  }
</style>
