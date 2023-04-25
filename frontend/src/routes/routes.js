import Home from './Home.svelte'
import Projects from './Projects.svelte'
import Documents from './Documents.svelte'
import AddArchiveForm from './AddArchiveForm.svelte'
import UploadPassword from './UploadPassword.svelte'

const routes = {
  '/': Home,
  '/projects': Projects,
  '/documents': Documents,
  '/add-archive': AddArchiveForm,
  '/authenticate': UploadPassword
}

export default routes
