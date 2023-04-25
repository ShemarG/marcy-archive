<script>
  import assignments from '../constants/assignments'
  import Input from './Input.svelte'
  import CohortDropdown from './CohortDropdown.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { push } from 'svelte-spa-router'
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faPenToSquare, faUser, faPlus, faLink, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
	import AuthorPillContainer from './AuthorPillContainer.svelte';
  import { getCurrentYear, fileToBase64, fileToObjectURL } from '../utils'
  import axios from 'axios'

  const apiUrl = import.meta.env.VITE_API_URL
  let actualPassword = import.meta.env.VITE_NEW_DOC_PSWD
  

  // Data to send in API call.
  let projectName = '';
  let authors = [];
  let selectedYear = getCurrentYear();
  let screenshot;
  let selectedStart = 'Spring';
  let selectedAssignment = assignments[0];
  let repoLink = '';
  let pagesLink = '';
  let selectedLocation = 'NYC';
  
  // These control the validation of specific required inputs.
  let projectNameValid;
  let repoLinkValid;
  let authorValid;
  
  let screenshotPreviewURL;
  let screenshotInput = ''
  let authorInput = ''

  const submit = async () => {
    if(localStorage.getItem('secret-password') !== actualPassword) return
    if (!validateRequiredInputs()) return
    let payload = {}
    payload.name = projectName
    payload.authors = authors
    payload.github_repo_link = repoLink
    payload.assignment = selectedAssignment
    payload.cohort = {
      location: selectedLocation,
      start: selectedStart,
      year: selectedYear
    }
    if (screenshot) {
      payload.screenshot = screenshot
    }
    try {
      await axios.post(`${apiUrl}/api/projects`, payload)
      push('/projects');
    } catch (e) {
      console.log(e)
    }
  }

  const updateScreenshotPreview = async (e) => {
    if (screenshotInput == '') return;
    if (screenshotPreviewURL) URL.revokeObjectURL(screenshotPreviewURL)
    let file = e.target.files[0]
    try {
      let dataURL = await fileToBase64(file)
      screenshot = dataURL.split(';base64,')[1]
      screenshotPreviewURL = fileToObjectURL(file)
    } catch (err) {
      console.log(err)
    }
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
    screenshot = ''
    screenshotPreviewURL = '';
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
      {#if screenshotPreviewURL}
        <button on:click={removeScreenshot} class="button is-danger">
          <span class="icon is-small">
            <Fa icon={faXmark}/>
          </span>
        </button>
      {/if}
    </div>
    {#if screenshotPreviewURL}
      <figure>
        <img class="image-preview" src={screenshotPreviewURL} alt="Screenshot Preview"/>
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
      box-shadow: 0 15px 25px rgba(0,0,0,.6);
      border-radius: 5px;
      padding: 40px;
      width: 85%;
    }
  }

  @media screen and (min-width: 1024px) {
   .project-tab {
    width: 75%;
    max-width: 650px;
    margin-top: 50px;
    background-image: linear-gradient(to top, rgba(245, 245, 245, 0.5), white);
   }
  }
</style>
