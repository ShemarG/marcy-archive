<script>
  import Navbar from '../components/Navbar.svelte';
  import { afterUpdate } from 'svelte'
  let page
  afterUpdate(() => {
    page = window.location.pathname
    console.log(page)
  })
</script>

<main>
 <Navbar page={page} />
 Howdydoo
</main>

<style>
  
</style>