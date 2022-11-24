<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faTriangleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'

  export let label = '';
  export let isSuccess = undefined;
  export let hasValidation = undefined;
  export let icon = undefined;
  export let value = '';
  export let errorMessage = undefined;
  // This unhooks the validation of the input being controlled by the reactive block below.
  export let deferValidation = false;


  let controlSuccessClass = (isSuccess) => {
    if (hasValidation && isSuccess) {
      return 'is-success'
    } else if (hasValidation && isSuccess === false) {
      return 'is-danger'
    } else {
      return ''
    }
  }

  // Reactively toggles the is-success classes based on the length of the input value.
  $: if (hasValidation && isSuccess !== undefined && !deferValidation) {
    isSuccess = !!value.length
  }

</script>

<div class="field">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">{label}</label>
  <div class={`control ${icon ? 'has-icons-left' : null} ${hasValidation ? 'has-icons-right' : null}`}>
    <input class={`input ${controlSuccessClass(isSuccess)}`} type="text" bind:value>
    {#if icon}
      <span class="icon is-small is-left">
        <Fa icon={icon}/>
      </span>
    {/if}
    {#if hasValidation}
      <span class="icon is-small is-right">
        {#if hasValidation && isSuccess}
          <Fa icon={faCheck}/>
        {:else if hasValidation && isSuccess !== undefined}
          <Fa icon={faTriangleExclamation}/>
        {/if}
      </span>
    {/if}
  </div>
  {#if hasValidation && isSuccess === false}
    <p class="help is-danger">{errorMessage}</p>
  {:else}
    <p class="help is-success"><br></p>
  {/if}
</div>