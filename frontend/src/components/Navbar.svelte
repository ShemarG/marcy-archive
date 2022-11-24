<script>
  import { link, location } from 'svelte-spa-router'
  let showBurger = false;

  let pages = {
    LANDING: '/',
    PROJECTS: '/projects',
    DOCUMENTS: '/documents',
    NEW_ARCHIVE: '/add-archive'
  }
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 180 180" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M154.296 24.2311C154.296 32.9001 152.591 41.3161 149.248 49.243C146.007 56.9 141.381 63.7644 135.472 69.6674C129.564 75.5704 122.693 80.1917 115.028 83.4299C107.094 86.7862 98.6863 88.4728 89.992 88.4728C81.2977 88.4728 72.8904 86.7693 64.9559 83.4299C57.2914 80.1917 50.4204 75.5704 44.5116 69.6674C38.6029 63.7644 33.9772 56.9 30.7359 49.243C27.4101 41.3161 25.705 32.9169 25.705 24.2311V21.6H71.6581L89.992 48.4166L108.326 21.6H154.279V24.2311H154.296ZM154.296 155.769C154.296 147.1 152.59 138.684 149.248 130.757C146.006 123.1 141.381 116.235 135.472 110.332C129.563 104.429 122.692 99.8082 115.028 96.57C107.093 93.2137 98.6859 91.5271 89.9916 91.5271C81.2973 91.5271 72.8901 93.2306 64.9555 96.57C57.291 99.8082 50.42 104.429 44.5112 110.332C38.6025 116.235 33.9768 123.1 30.7355 130.757C27.4097 138.684 25.7046 147.083 25.7046 155.769V158.4H71.6577L89.9916 131.583L108.326 158.4H154.279V155.769H154.296Z" fill="#FFFCF7"/>
      </svg>
    </a>
    <div class="navbar-start">
      <h1>The Marcy Lab School Archive</h1>
    </div>
    <button
      on:click={(e) => (showBurger = !showBurger)}
      class={`navbar-burger ${showBurger ? "is-active" : ""}`}
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>

  <div
    class={`navbar-menu ${showBurger ? "is-active" : ""}`}
  >
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if $location !== pages.PROJECTS}
            <a use:link href={pages.PROJECTS} class="button is-light">Projects</a>
          {/if}
          {#if $location !== pages.DOCUMENTS}
            <a use:link href={pages.DOCUMENTS} class="button is-light">Documents</a>
          {/if}
          {#if $location !== pages.NEW_ARCHIVE}
            <a use:link href={pages.NEW_ARCHIVE} class="button is-primary">+ New Archive</a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(-40px, 0, 0);
    }
    to {
      transform: translate3d(0);
      opacity: 1;
    }
  }

  .is-primary {
    background-color: #ffffff;
    border: 1px solid #363636;
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar-menu {
    animation: fadeIn 0.3s forwards;
  }

  .navbar-burger {
    color: #ffffff;
  }

  .navbar-burger span {
    height: 3px;
    width: 20px;
  }

  .navbar-start {
    display: flex;
    align-items: center;
  }

  .navbar-start h1 {
    font-size: 0.8em;
    font-weight: bold;
    color: #ffffff;
  }

  .navbar {
    background-color: #0a0775;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    font-weight: bold;
  }

  .button {
    margin-right: 0.5rem;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    .buttons {
      flex-direction: row;
    }
    .button {
      width: auto;
    }
    .navbar-start h1 {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar {
      height: 80px;
    }
    .navbar-start h1 {
      font-size: 1.5em;
    }
  }

  
</style>
