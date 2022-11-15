<script>
  let showBurger = false;
  export let page;
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img
        src="/marcy-logo-classic.png"
        width="40"
        height="45"
      />
    </a>
    <div class="navbar-start">
      <h1>The Marcy Lab School Archive</h1>
    </div>
    <a
      on:click={(e) => (showBurger = !showBurger)}
      role="button"
      class={`navbar-burger ${showBurger ? "is-active" : ""}`}
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div
    class={`navbar-menu ${showBurger ? "is-active" : ""}`}
  >
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if page !== "/projects"}
            <a href="/projects" class="button is-light">Projects</a>
          {/if}
          <a class="button is-light">Documents</a>
          <a class="button is-primary">+ New Archive</a>
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
    background-color: #0a0775;
  }

  .navbar-menu {
    animation: fadeIn 0.3s forwards;
  }

  .navbar-burger {
    color: #ffffff;
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
  

  
</style>
