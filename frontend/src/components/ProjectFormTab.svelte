<script>
  import assignments from '../constants/assignments'
  import Input from './Input.svelte'
  import CohortDropdown from './CohortDropdown.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faPenToSquare, faUser, faPlus, faLink, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
	import AuthorPillContainer from './AuthorPillContainer.svelte';
  import { fileToBinary, imageBinaryToDataURL } from '../utils'
  
  const currentYear = new Date(Date.now()).getFullYear()

  // Data to send in API call.
  let projectName = '';
  let authors = [];
  let selectedYear = currentYear;
  let screenshotAsBinary;
  let selectedStart = 'Spring';
  let selectedAssignment = assignments[0];
  let repoLink = '';
  let pagesLink = '';
  let selectedLocation = 'NYC';
  
  // These control the validation of specific required inputs.
  let projectNameValid;
  let repoLinkValid;
  let authorValid;
  
  let screenshotImgUrl;
  let screenshotInput = ''
  let authorInput = ''

  const submit = () => {
    if (!validateRequiredInputs()) return
    let payload = {}
    payload.name = projectName
    payload.cohort = {
      location: selectedLocation,
      start: `${selectedStart} ${selectedYear}`
    }
    payload.authors = authors
    payload.github_repo_link = repoLink
    payload.assignment = selectedAssignment
    if (screenshotAsBinary){ 
      payload.screenshot = screenshotAsBinary
    }
    if (pagesLink) {
      payload.github_pages_link = pagesLink
    }
  }

  const updateScreenshotPreview = async (e) => {
    if (screenshotInput == '') return;
    let file = e.target.files[0]
    let binary = await fileToBinary(file)
    screenshotAsBinary = binary
    screenshotImgUrl = imageBinaryToDataURL(binary)
  }

  const validateRequiredInputs = () => {
    let allValid = true

    if(!authors.length) {
      authorValid = false
      allValid = false
    }
    if (!projectName) {
      projectNameValid = false
      allValid = false
    }
    if (!repoLink) {
      repoLinkValid = false
      allValid = false
    }
    return allValid
  }

  const addAuthor = () => {
    if (authorInput) {
      authors.push(authorInput)
      authorValid = true
      authorInput = ''
    }
    authors = authors
  }

  const removeScreenshot = () => {
    screenshotInput = ''
    screenshotAsBinary = ''
    screenshotImgUrl = '';
  }

  $: if (!authors.length && authorValid !== undefined) authorValid = false
  
</script>

<div class="project-tab">

  <Input
    label="Project Name"
    icon={faPenToSquare}
    bind:value={projectName}
    hasValidation={true}
    bind:isSuccess={projectNameValid}
    errorMessage="Please add a name for the project."
  />

  <div class="author-input is-align-items-center">
    <Input 
      label="Author(s)"
      icon={faUser}
      hasValidation={true}
      bind:value={authorInput}
      bind:isSuccess={authorValid}
      errorMessage="Please list the author(s) of this project"
      deferValidation={true}
    />
    <button on:click={addAuthor} class="add-author-btn button is-success">
      <span class="icon is-small">
        <Fa icon={faPlus}/>
      </span>
      <span>Add Author</span>
    </button>
  </div>

  <AuthorPillContainer bind:content={authors} />

  <div class="github-info">
    <Input 
      label="Github Repo Link"
      isSuccess={repoLinkValid}
      icon={faGithub}
      hasValidation={true}
      errorMessage="Please add a link to the project repo."
      bind:value={repoLink}
    />
    <Input 
      label="Github Pages Link"
      icon={faLink}
      bind:value={pagesLink}
    />
  </div>

  <CohortDropdown 
    bind:start={selectedStart}
    bind:year={selectedYear}
  />

  <div class="field">
    <label class="label">Assignment</label>
    <div class="control">
      <div class="select">
        <select class="assignment-dropdown" bind:value={selectedAssignment}>
          {#each assignments as assignment}
            <option value={assignment}>{assignment}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>

  <div class="field">
    <label class="label">Screenshot</label>
    <div class="file has-name">
      <label class="file-label">
        <input class="file-input"
          type="file" accept=".jpeg, .jpg, .png"
          bind:value={screenshotInput}
          on:change={updateScreenshotPreview}
        />
        <span class="file-cta">
          <span class="file-icon"><Fa icon={faUpload}/></span>
          <span class="file-label">Choose a file…</span>
        </span>
        <span class="file-name">{screenshotInput ? screenshotInput.split(/[\/\\]/)[2] : '...'}</span>
      </label>
      {#if screenshotImgUrl}
        <button on:click={removeScreenshot} class="button is-danger">
          <span class="icon is-small">
            <Fa icon={faXmark}/>
          </span>
        </button>
      {/if}
    </div>
    {#if screenshotImgUrl}
      <figure>
        <img class="image-preview" src={screenshotImgUrl} alt="Screenshot Preview"/>
      </figure>
    {/if}
  </div>

  <button on:click={submit} class="button">Submit</button>
</div>

<style>
  .image-preview {
    margin-top: 20px;
  }
  .project-tab {
    margin: 0 auto;
    margin-top: 25px;
  }
  .assignment-dropdown {
    padding-right: 0.13em !important;
  }

  @media screen and (min-width: 375px) {
    .assignment-dropdown {
      padding-right: 1.13em !important;
    }
  }

  @media screen and (min-width: 425px) {
    .assignment-dropdown {
      padding-right: 3.13em !important;
    }
  }

  @media screen and (min-width: 768px) {
    .author-input {
      display: flex;
    }
    
    .add-author-btn {
      margin-left: 15px;
    }

    .project-tab {
      border: 2px solid;
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
      border-radius: 5%;
      padding: 40px;
      width: 85%;
    }
  }

  @media screen and (min-width: 1024px) {
   .project-tab {
    width: 75%;
    max-width: 1020px;
    margin-top: 50px;
   }
  }
</style>