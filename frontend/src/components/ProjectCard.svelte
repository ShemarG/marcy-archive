<script>
  export let project;
  import fallbackImage from '../assets/code-svg-icon.svg'
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { faLink } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="project">
  <div class="project-image">
    <figure class="image">
      <picture>
        <img src={project.screenshot ? `data:image/png;base64,${project.screenshot}` : fallbackImage} alt={project.name} />
      </picture>
    </figure>
    <div class="project-content">
      <div class="content">
        <p class="project-title">{project.name}</p>
        <span class="project-cohort">{`${project.cohort.start} ${project.cohort.year}`} cohort</span>
        &#8226;
        <span class="project-cohort">{project.assignment}</span>
        <ul class="project-authors">
          {#each project.authors.slice(0, 3) as author}
            <li>{author}</li>
          {/each}
        </ul>
        {#if project.description}
          <p>{project.description}</p>
        {/if}
        <div class="project-links">
          <div>
            <span class="icon is-small is-left">
              <Fa icon={faGithub}/>
            </span>
            &nbsp;
            <a href={project.github_repo_link}>Github Repo</a>
          </div>
          <div>
            <span class="icon is-small is-left">
              <Fa icon={faLink}/>
            </span>
            &nbsp;
            <a href={project.github_pages_link}>Deployed Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .project {
    width: 275px;
    height: 510px;
    margin: 10px;
    max-height: 510px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    transition: box-shadow 0.1s ease-in-out;
  }
  .project:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    cursor: pointer;
  }
  .project-image {
    width: 100%;
    border-radius: 20px;
  }
  picture {
    display: block;
    position: relative;
    padding-top: 70%;
  } 
  .image img{
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: left;
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
    width: 100%;
    background-color: white;
    position: relative;
    bottom: 15px;
    border-top: 1px solid rgba(0, 0, 0, .3);
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
    -webkit-line-clamp: 2;
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
      height: 565px;
      max-height: 565px;
    }
  }
</style>
