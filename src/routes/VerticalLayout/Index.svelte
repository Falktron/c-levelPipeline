<script>

  import Navbar from "./NavbarLLM.svelte";
  import Header from "./HeaderLLM.svelte";
  import Footer from "./Footer.svelte";
  import Prompt from "./PromptField.svelte";
  import Rightbar from "../../Components/RightbarLLM.svelte";

  // Get results of each prompt

  let open = false;

</script>

<div id="layout-wrapper">
  <Header bind:sidebar={open} />
  <Navbar />
  <div class="main-content" id="maincontent">
    <Prompt />
    <slot />
  </div>
  <Footer />

  <Rightbar layout="vertical" bind:open />
</div>
