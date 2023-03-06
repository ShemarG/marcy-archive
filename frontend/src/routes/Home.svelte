<script>
  import { link } from "svelte-spa-router";
  import FloatingBoxes from "../components/FloatingBoxes.svelte";

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
      <div class="hero-text">
        <div class="hero-text-wrapper">
          <h1>Welcome to <span class="hero-blue-text">The Marcy Archive</span></h1>
          <p>A place to put those foolish ambitions to rest</p>
          <div class="buttons">
            <a use:link href={pages.PROJECTS} class="btn darker-btn"
              >View Projects</a
            >
            <a use:link href={pages.DOCUMENTS} class="btn darker-btn"
              >View Documents</a
            >
            <a use:link href={pages.NEW_ARCHIVE} class="btn"
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
  </div>
  <FloatingBoxes/>
</section>

<style>
  .main-content {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
  }

  .main-content-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80vh;
    z-index: 999;
  }

  .showcase-image {
    display: none;
    width: 200px;
    height: 125px;
    padding: 0px;
    position: absolute;
    transform: skew(-0.04turn, 8deg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .website-showcase {
    width: 100%;
    display: none;
    align-items: center;
  }

  .hero-text {
    color: #0a0775;
  }

  .hero-text-wrapper {
    padding: 20px;
    border-radius: 10px;
  }

  .hero-blue-text {
    color: #ffffff;
    -webkit-text-stroke: 4px #0a0775;
    text-stroke: 4px #0a0775;
  }

  .buttons {
    display: flex;
    z-index: 999;
    margin-top: 40px;
    justify-content: center;
  }

  .btn {
    width: 100%;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    color: black;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
  }

  .darker-btn {
    background-color: rgb(194, 192, 192);
  }

  .btn:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .hero-text h1 {
    font-style: normal;
    font-weight: 900;
    line-height: 0.9em;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 3em;
    text-align: center;
    margin-bottom: 12px;
  }

  .hero-text p {
    font-style: normal;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 0;
    font-size: 18px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .showcase-image {
      display: block;
      width: 280px;
      height: 160px;
    }
    .website-showcase {
    width: 100%;
    display: flex;
    align-items: center;
    }
    .website-showcase .showcase-image:nth-child(1) {
      bottom: 8%;
      right: 10%;
    }

    .website-showcase .showcase-image:nth-child(2) {
      bottom: 18%;
      right: 15%;
    }

    .website-showcase .showcase-image:nth-child(3) {
      bottom: 28%;
      right: 20%;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      margin-top: 60px;
    }
    .btn {
      width: 100%;
      padding: 25px;
    }
    .hero-text h1 {
      text-align: left;
      font-size: 4em;
      width: 10em;
    }
    .hero-text-wrapper {
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 35px;
    }
  }

  @media (min-width: 1024px) {
    .showcase-image {
      width: 320px;
      height: 180px;
    }
    .hero-text h1 {
      font-size: 4em;
      width: 10em;
    }

    .buttons {
      width: 60%;
    }

    .main-content {
      padding: 40px;
      padding-bottom: 0px;
    }
    
  }

  @media (min-width: 1440px) {
    .showcase-image {
      width: 500px;
      height: 282px;
    }

    .buttons {
      width: 50%;
    }
    .hero-text h1 {
      text-align: left;
      font-size: 4.8em;
      width: 8em;
    }
    .main-content {
      padding: 80px;
      padding-bottom: 0px;
    }
  }
</style>
