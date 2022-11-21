<script>
  import assignments from '../constants/assignments'
  import Input from './Input.svelte'
  import CohortDropdown from './CohortDropdown.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faPenToSquare, faUser, faPlus, faLink, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
	import AuthorPillContainer from './AuthorPillContainer.svelte';
  import { fileToBase64, fileToObjectURL } from '../utils'
  import axios from 'axios'
  
  const currentYear = new Date(Date.now()).getFullYear()

  // Data to send in API call.
  let projectName = '';
  let authors = [];
  let selectedYear = currentYear;
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
    if (!validateRequiredInputs()) return
    let payload = {}
    payload.name = projectName
    payload.cohort = {location: selectedLocation, start: selectedStart, year: selectedYear}
    if (screenshot) payload.screenshot = screenshot
    payload.authors = authors
    payload.github_repo_link = repoLink
    if (pagesLink) payload.github_pages_link = pagesLink
    payload.assignment = selectedAssignment
    try {
      console.log(payload);
      await axios.post('http://localhost:3000/api/projects', payload)
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
    authors.push(authorInput)
    if (authorValid) authorValid = true
    authors = authors
    authorInput = ''
  }

  const removeScreenshot = () => {
    screenshotInput = ''
    screenshot = ''
    screenshotPreviewURL = '';
  }

  $: if (!authors.length && authorValid !== undefined) authorValid = false
  
</script>

<div class="archive-form">

  <Input
    label="Project Name"
    icon={faPenToSquare}
    bind:value={projectName}
    hasValidation={true}
    bind:isSuccess={projectNameValid}
    errorMessage="Please add a name for the project."
  />

  <div class="is-flex is-align-items-center">
    <Input 
      label="Author(s)"
      icon={faUser}
      hasValidation={true}
      bind:value={authorInput}
      bind:isSuccess={authorValid}
      errorMessage="Please list the author(s) of this project"
      deferValidation={true}
    />
    <button on:click={addAuthor} class="button is-success">
      <span class="icon is-small">
        <Fa icon={faPlus}/>
      </span>
      <span>Add Author</span>
    </button>
  </div>

  <AuthorPillContainer bind:content={authors} />

  <div class="is-flex">
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
        <select bind:value={selectedAssignment}>
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
    
    <figure>
      <img src={screenshotPreviewURL} alt="Screenshot Preview"/>
    </figure>
  </div>

  <button on:click={submit} class="button">Submit</button>
</div>