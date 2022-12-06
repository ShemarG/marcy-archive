<script>
  import ProjectCard from "../components/ProjectCard.svelte";
  const projects = [
    {
    screenshot: 'https://via.placeholder.com/400x300',
    name: 'Gentry.io',
    authors: ['Stephanie', 'Devonte'],
    cohort: {
      start: 'Fall',
      year: '2019'
    },
    assignment: 'This is a gentrification heat map, using data from NYC open data, CoreData.nyc, and the USA census to quantify and plot the enchroachment of affluent individuals on low income communities resulting in the displacement of historically disenfranchised minorities and skyrocketing property values and average rent prices.',
    github_repo_link: 'https://github.com/Devonte202/gentry.io',
    github_pages_link: 'https://devonte202.github.io/gentry.io/'
  }
  ]
</script>
<section>
  <div class="main-content">
    {#each projects as project}
      <ProjectCard project={project} />
    {/each}
  </div>
  
</section>

<style>
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 900px;
  }
</style>
