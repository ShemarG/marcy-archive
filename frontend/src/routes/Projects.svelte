<script>
  import SortAndFilterBar from "../components/SortAndFilterBar.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import Assignments from "../constants/assignments";
  import { possibleYears } from "../utils";
  import axios from "axios";

  const apiUrl = import.meta.env.VITE_API_URL

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
  let filter = Object.keys(projectsSortsAndFilters.filters).reduce(
    (acc, curr) => {
      acc[curr] = "All";
      return acc;
    },
    {}
  );

  // Sets the default sort order .
  let sort = "-cohort.year -cohort.start -name";

  // API call function listening for an event fired by the SortAndFilterBar
  async function apiRequest() {
    let filterPayload = {};
    if (filter.Year != "All") filterPayload["cohort.year"] = filter.Year;
    if (filter.Start != "All") filterPayload["cohort.start"] = filter.Start;
    if (filter.Assignment != "All")
      filterPayload.assignment = filter.Assignment;
    try {
      let response = await axios.post(
        `${apiUrl}/api/projects/list`,
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

<div class="project-page">
  <h1 class="page-title">Projects</h1>
  <h3 class="page-subtitle">
    Explore the last few years of projects built by some of the greatest minds
    from Marcy!
  </h3>
  <section class="sort-and-filter">
    <SortAndFilterBar
      on:sendRequest={apiRequest}
      bind:selectedFilters={filter}
      bind:selectedSort={sort}
      values={projectsSortsAndFilters}
    />
  </section>

  <section class="content-list">
    <div class="projects-container">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </section>
</div>

<style>
  .page-title {
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 900;
    background: -webkit-linear-gradient(#0a0775, #0f09ac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .page-subtitle {
    font-size: 1em;
    font-weight: 500;
    width: 20em;
    text-align: center;
    padding: 20px;
  }
  .project-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .projects-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      justify-content: center;
    }
    .page-title {
      font-size: 5em;
    }
    .page-subtitle {
      font-size: 2em;
      font-weight: 500;
      text-align: center;
      padding: 20px;
    }
  }
  @media screen and (min-width: 1440px) {
    .projects-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
