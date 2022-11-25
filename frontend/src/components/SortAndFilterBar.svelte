<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // Values for dynamic creation of select tags.
  export let values = {};
  // Currently selected filters.
  export let selectedFilters;
  // currently selected sort.
  export let selectedSort;

  // Both the below functions update the selected state and fire an event
  // so that the parent component can send requests. Slightly better than raw reactivity as
  // this is more intentional and does not fire unnecessary requests as the
  // initial values of selectedFilters and selectedSort are set.
  function handleFilterChange(valueToChange, newValue) {
    selectedFilters[valueToChange] = newValue;
    selectedFilters = selectedFilters;
    dispatch("sendRequest");
  }

  function handleSortChange(value) {
    selectedSort = values.sorts[value];
    dispatch("sendRequest");
  }
</script>

<div class="is-flex sort-and-filter-bar">
  {#each Object.keys(values.filters) as value}
    <div class="is-flex is-flex-direction-column select-wrapper">
      <label class="label">{value}</label>
      <div class="select">
        <select
          on:change={(e) => {
            handleFilterChange(value, e.target.value);
          }}
        >
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
      <select
        on:change={(e) => {
          handleSortChange(e.target.value);
        }}
      >
        {#each Object.keys(values.sorts) as option}
          <option>{option}</option>
        {/each}
      </select>
    </div>
  </div>
</div>
