<script>
  export let values = {}
  export let selectedFilters = {}
  export let selectedSort = '-cohort.year -cohort.start -name'


  Object.keys(values.filters).forEach(value => {
    selectedFilters[value] = 'All'
  })

  function handleFilterChange (valueToChange, newValue) {
    selectedFilters[valueToChange] = newValue
    selectedFilters = selectedFilters
  }

</script>

<div class="is-flex sort-and-filter-bar">
  {#each Object.keys(values.filters) as value}
    <div class="is-flex is-flex-direction-column select-wrapper">
      <label class="label">{value}</label>
      <div class="select">
        <select on:change={(e) => {handleFilterChange(value, e.target.value)}}>
          <option>All</option>
          {#each values.filters[value] as option}
            <option>{option}</option>
          {/each}
        </select>
      </div>
    </div>
  {/each}

  <div class="is-flex is-flex-direction-column select-wrapper">
    <label class="label">Sort By</label>
    <div class="select">
      <select on:change={(e) => { selectedSort = values.sorts[e.target.value]}}>
        {#each Object.keys(values.sorts) as option}
          <option>{option}</option>
        {/each}
      </select>
    </div>
  </div>
</div>