<script>
  import SortAndFilterBar from "../components/SortAndFilterBar.svelte";
  import Assignments from '../constants/assignments'
  import { possibleYears } from '../utils'

  let filters;
  let sort; 

  let foo = {
    filters: {
      Year: possibleYears(),
      Start: ['Fall', 'Spring'],
      Assignment: Assignments,
      'Has Demo': ['True', 'False']
    },
    sorts: {
      'Year: Desc': '-cohort.year -cohort.start -name',
      'Year: Asc': 'cohort.year -cohort.start -name',
      'Name: A-Z': '-name -cohort.year -cohort.start', 
      'Name: Z-A': 'name -cohort.year -cohort.start', 
    }
  }

</script>
<section class="sort&filter">
  <SortAndFilterBar bind:selectedFilters={filters} bind:selectedSort={sort} values={foo}/>
</section>
<section>

</section>