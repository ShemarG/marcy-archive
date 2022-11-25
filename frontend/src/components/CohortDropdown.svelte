<script>
  import { possibleYears } from "../utils";

  export let start;
  export let year;

  const years = possibleYears()

  // This makes sure if the user selects year < 2021, it automaticaly triggers an update of
  // start to 'Fall' without also needing to manually select that option.
  $: if (year < 2021) start = 'Fall';

</script>

<div class="field">
  <label class="label">Cohort</label>
  <div class="cohort-dropdowns">
    <div class="control">
      <div class="select">
        <select class="dropdown" bind:value={start}>
          {#if (year > 2020)}
            <option>Spring</option>
          {/if}
          <option>Fall</option>
        </select>
      </div>
    </div>

    <div class="control">
      <div class="select">
        <select class="dropdown" bind:value={year}>
          {#each years as year}
            <option value={year}>{year}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>

<style>
  .cohort-dropdowns {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .dropdown {
    padding-right: 4.5em !important;
  }

  @media screen and (min-width: 375px) {
    .dropdown {
      padding-right: 5.5em !important;
    }
  }

  @media screen and (min-width: 425px) {
    .dropdown {
      padding-right: 7.5em !important;
    }
  }

  @media screen and (min-width: 768px) {
    .cohort-dropdowns {
      justify-content: initial;
    }
  }
</style>
