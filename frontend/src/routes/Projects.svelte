<script>
  import SortAndFilterBar from "../components/SortAndFilterBar.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import Assignments from "../constants/assignments";
  import { possibleYears } from "../utils";
  import axios from "axios";

  // Object that dynamically populates select tags, adding a select tag for each key in
  // 'projectsSortsAndFilters.filters' and their respective values. Sorts adds a potential
  // value for the 'Sort By' dropdown. The values in this object are probably worth abstracting
  // to constants later.
  let projectsSortsAndFilters = {
    filters: {
      Year: possibleYears(),
      Start: ["Fall", "Spring"],
      Assignment: Assignments,
      "Has Demo": ["True", "False"],
    },
    sorts: {
      "Year: Desc": "-cohort.year -cohort.start -name",
      "Year: Asc": "cohort.year -cohort.start -name",
      "Name: A-Z": "name -cohort.year -cohort.start",
      "Name: Z-A": "-name -cohort.year -cohort.start",
    },
  };

  // Array to hold fetched projects.
  let projects = [];

  // Sets default value for all the filters to "All".
  let filter = Object.keys(projectsSortsAndFilters.filters)
  .reduce((acc, curr) => {
    acc[curr] = "All";
    return acc;
  }, {});

  // Sets the default sort order .
  let sort = "-cohort.year -cohort.start -name";

  // API call function listening for an event fired by the SortAndFilterBar
  async function apiRequest() {
    let filterPayload = {};
    if (filter.Year != "All") filterPayload["cohort.year"] = filter.Year;
    if (filter.Start != "All") filterPayload["cohort.start"] = filter.Start;
    if (filter.Assignment != "All") filterPayload.assignment = filter.Assignment;
    try {
      let response = await axios.post(
        "http://localhost:3000/api/projects/list",
        { sort, filter: filterPayload }
      );
      projects = [...response.data];
    } catch (e) {
      console.error(e);
    }
  }

  // Initial API request with default settings.
  apiRequest();
</script>

<section class="sort-and-filter">
  <SortAndFilterBar
    on:sendRequest={apiRequest}
    bind:selectedFilters={filter}
    bind:selectedSort={sort}
    values={projectsSortsAndFilters}
  />
</section>

<section class="content-list">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</section>
