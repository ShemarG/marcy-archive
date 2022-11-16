<script>
  import Navbar from '../components/Navbar.svelte';
  import { afterUpdate } from 'svelte'
  let page
  afterUpdate(() => {
    page = window.location.pathname
  })
</script>

<main>
 <Navbar page={page} />
</main>

<style>
  
</style>