<script>
  export let project;
  import fallbackImage from '../assets/code-svg-icon.svg'
</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={project.screenshot ? `data:image/png;base64,${project.screenshot}` : fallbackImage} alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <strong><p>{project.name}</p></strong>
      <p>{project.authors.toString()}</p>
      <p>{`${project.cohort.start} ${project.cohort.year}`}</p>
      <p>{project.assignment}</p>
      <p>{project.github_repo_link}</p>
      <p>{project.github_pages_link}</p>
    </div>
  </div>
</div>