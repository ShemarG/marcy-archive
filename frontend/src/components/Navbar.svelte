<script>
	let showBurger = false
</script>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/277226378_336398221858699_2845459025042218157_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cWxgN_El3XQAX_DS8VX&_nc_ht=scontent-lga3-1.xx&oh=00_AfCe9ZVvoJdQxpCE7CuS9ObWuqhAm1VN5TTN4EVWcCKchg&oe=63753458" width="50" height="50">
    </a>

    <a on:click={(e) => showBurger = !showBurger } role="button" class={`navbar-burger ${showBurger ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class={`navbar-menu ${showBurger ? 'is-active' : ''}`}>
		<div class="navbar-start">
			<h1>The Marcy Lab School Archive</h1>
		</div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Projects</strong>
          </a>
          <a class="button is-light">
            Documents
          </a>
					<a class="button is-light">
            + New Archive
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar-start {
		display: flex;
		align-items: center;
		color: #ffffff;
	}

	.navbar {
		background-color: #0a0775;
		
	}

	.navbar-btns {
		display: flex;
		justify-content: space-evenly;
		width: 20%;
	}
</style>
