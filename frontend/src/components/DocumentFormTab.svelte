<script>
  import CohortDropdown from './CohortDropdown.svelte'
  import { getCurrentYear, fileToBase64 } from '../utils'
  import Assignments from '../constants/assignments';
  import axios from 'axios'

  let documentTitle = ''
  let document;
  let selectedYear = getCurrentYear();
  let selectedStart = 'Spring'
  let authors = ['foo', 'bar']
  let selectedAssignment = 'Unit 1'
  let selectedLocation = 'NYC'

  let fileInput;

  const handleFile = async (e) => {
    if (fileInput == '') return;
    let file = e.target.files[0]
    try {
      let dataURL = await fileToBase64(file)
      document = dataURL.split(';base64,')[1]
    } catch (err) {
      console.error(err)
    }
  }

  const submit = async () => {
    let payload = {}
    payload.title = documentTitle
    if (authors.length) payload.authors = authors
   
    payload.assignment = selectedAssignment
    payload.cohort = {
      location: selectedLocation,
      start: selectedStart,
      year: selectedYear
    }
    payload.document = document
    
    try {
      console.log(payload);
      await axios.post('http://localhost:3000/api/documents', payload)
    } catch (e) {
      console.log(e)
    }
  }

</script>

<div class="archive-form">
  <label>Document Title</label><br>
  <input bind:value={documentTitle} type="text" />
  <p>We need to put the author pill component in here, which means we should now have an idea of how we're going to abstract it better.</p>
  <CohortDropdown bind:year={selectedYear} bind:start={selectedStart} />
  <input on:change={handleFile} accept=".pdf" type="file" /><br>
  <select bind:value={selectedAssignment}>
    {#each Assignments as assignment}
      <option>{assignment}</option>
    {/each}
  </select><br>
  <button on:click={submit}>Submit</button>
</div>