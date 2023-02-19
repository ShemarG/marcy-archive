<script>
  import { link } from "svelte-spa-router";

  let pages = {
    LANDING: "/",
    PROJECTS: "/projects",
    DOCUMENTS: "/documents",
    NEW_ARCHIVE: "/add-archive",
  };
</script>

<section>
  <div class="main-content">
    <div class="main-content-wrapper">
      <div class="context">
        <div class="context-wrapper">
          <h1>Welcome to the Marcy Archive</h1>
          <p>A place to put those foolish ambitions to rest</p>
          <div class="buttons">
            <a use:link href={pages.PROJECTS} class="button is-light"
              >View Projects</a
            >
            <a use:link href={pages.DOCUMENTS} class="button is-light"
              >View Documents</a
            >
            <a use:link href={pages.NEW_ARCHIVE} class="button"
              >Upload Your Own</a
            >
          </div>
        </div>
      </div>
      <div class="website-showcase">
        <img
          class="showcase-image"
          src="https://boagworld.sirv.com/Images/Blog-Images/homepage-design-hotjar.png?profile=small"
          alt="placeholder screenshot"
        />
        <img
          class="showcase-image"
          src="https://muffingroup.com/blog/wp-content/uploads/2021/08/beschoo.jpg"
          alt="placeholder screenshot"
        />
        <img
        class="showcase-image"
        src="https://www.plerdy.com/wp-content/uploads/2020/05/best-home-pages-9-1024x529.png"
        alt="placeholder screenshot"
      />
      </div>
    </div>
    <div class="area">
      <ul class="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  </div>
</section>

<style>
  .main-content {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .main-content-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .showcase-image {
    width: 480px;
    height: 300px;
    padding: 0px;
    position: absolute;
    transform: skew(-0.04turn, 8deg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .website-showcase .showcase-image:nth-child(1) {
    bottom: 150px;
    right: 40px;
  }

  .website-showcase .showcase-image:nth-child(2) {
    bottom: 300px;
    right: 180px;
  }


 

  .context {
    color: #0a0775;
  }

  .context-wrapper {
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 55px;
    border-radius: 10px;
  }

  .buttons {
    display: flex;
    width: 100%;
    z-index: 999;
    margin-top: 40px;
  }

  .button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .context h1 {
    font-style: normal;
    font-weight: 500;
    line-height: 0.9em;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 96px;
    margin-bottom: 12px;
  }

  .context p {
    font-style: normal;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 0;
    font-size: 18px;
  }

  .area {
    background: #ffffff;
    background: -webkit-linear-gradient(to left, #ffffff, #e7e7e9);
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(10, 7, 117, 0.5);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
</style>
