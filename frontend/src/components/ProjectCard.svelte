<script>
  export let project;
  import fallbackImage from '../assets/code-svg-icon.svg'
</script>

<div class="project">
  <div class="project-image">
    <figure class="image">
      <img src={project.screenshot ? project.screenshot : fallbackImage} alt={project.name} />
    </figure>
    <div class="project-content">
      <div class="content">
        <p class="project-title">{project.name}</p>
        <p class="project-cohort">{`${project.cohort.start} ${project.cohort.year}`} cohort</p>
        <ul>
          {#each project.authors as author}
            <li>{author}</li>
          {/each}
        </ul>
        <p>{project.assignment}</p>
        <div class="project-links">
          <a href={project.github_repo_link}>Github Repo</a>
          <a href={project.github_pages_link}>Deployed Project</a>
        </div>
        

      </div>
    </div>
  </div>
</div>

<style>
  .project {
    width: 275px;
    max-height: 600px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    transition: box-shadow 0.1s ease-in-out;
  }
  .project:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    cursor: pointer;
    background-color: linear-gradient(90deg, #0a0775, transparent) #2196f3;
  }
  .project-image {
    width: 100%;
    border-radius: 20px;
  }
  .image img{
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
  }
  .project-title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
  }
  .project-cohort {
    background: #0a0775;
    border-radius: 50px;
    font-size: 12px;
    width: fit-content;
    margin: 0;
    margin-bottom: 15px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .project-links {
    display: flex;
    flex-direction: column;
  }
  .project-content, .content {
    border-radius: 20px;
    width: 100%;
    background-color: white;
    position: relative;
    bottom: 15px;
  }

  .content {
    padding: 20px;
  }

  li::marker {
    content: "▶ ";
    color: #0a0775;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .project-title {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    .project {
      width: 300px;
    }
  }

  @media screen and (min-width: 1024px) {
    .project {
      width: 350px;
    }
  }
</style>