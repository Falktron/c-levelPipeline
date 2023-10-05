<script>
  import Navbar from "./NavbarLLM.svelte";
  import Header from "./HeaderLLM.svelte";
  import Footer from "./Footer.svelte";
  import Rightbar from "../../Components/RightbarLLM.svelte";

  let open = false;
  let show = false;
</script>

<div id="layout-wrapper">
  <Navbar bind:show />
  <Header bind:sidebar={open} bind:show />

  <div class="main-content" id="maincontent">
    <slot />
  </div>

  <Footer />

  <Rightbar layout="horizontal" bind:open />
</div>
