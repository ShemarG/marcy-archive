<script>

  import ProjectForm from '../components/ProjectForm.svelte'
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
      <ul>
        <li on:click={() => selectArchiveType("project")} class:is-active={archiveType == 'project'}>
          <a>
            <span class="icon is-small"><Fa icon={faCode}/></span>
            <span>Project</span>
          </a>
        </li>
        <li on:click={() => selectArchiveType("document")} class:is-active={archiveType == 'document'}>
          <a>
            <span class="icon is-small"><Fa icon={faFile}/></span>
            <span>Document</span>
          </a>
        </li>
        <li on:click={() => selectArchiveType("photo")} class:is-active={archiveType == 'photo'}>
          <a>
            <span class="icon is-small"><Fa icon={faImage}/></span>
            <span>Photo</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section>
    {#if archiveType == 'project'}
      <ProjectForm />
    {/if}
    <!-- {#if activeButton == 'document'}

    {/if}
    {#if activeButton == 'photo'}

    {/if} -->
  </section>
</div>
