<script>
  export let start;
  export let year;

  const currentYear = new Date(Date.now()).getFullYear()

  const possibleYears = () => {
    let years = []
    for (let i=currentYear - 1; i >= 2019; i--) {
      years.push(i)
    }
    return years
  }

  const years = possibleYears()

  // This makes sure if the user selects year < 2021, it automaticaly triggers an update of
  // start to 'Fall' without also needing to manually select that option.
  $: if (year < 2021) start = 'Fall';

</script>

<div class="field">
  <label class="label">Cohort</label>
  <div class="is-flex">
    <div class="control">
      <div class="select">
        <select bind:value={start}>
          {#if (year > 2020)}
            <option>Spring</option>
          {/if}
          <option>Fall</option>
        </select>
      </div>
    </div>

    <div class="control">
      <div class="select">
        <select bind:value={year}>
          <option value={currentYear}>{currentYear}</option>
          {#each years as year}
            <option value={year}>{year}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>