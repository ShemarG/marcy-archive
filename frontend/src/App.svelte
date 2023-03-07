<script>
  import Router from 'svelte-spa-router'
  import routes from './routes/routes'
  import Navbar from './components/Navbar.svelte';
</script>

<main>
  <Navbar />
  <Router {routes} />
</main>

<style>
  @font-face {
    font-family: openSans;
    src: url('OpenSans.ttf');
  }
  * {
    font-family: openSans;
  }
</style>

