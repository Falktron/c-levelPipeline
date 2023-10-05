<script>
  import {
    Dropdown,
  } from "sveltestrap";

  import { Link } from "svelte-routing";

  import { _ } from "svelte-i18n";

  import LanguageDropdown from "../../common/LanguageDropdown.svelte";
  import NotificationDropdown from "../../common/NotificationDropdown.svelte";
  import ProfileMenu from "../../common/ProfileMenu.svelte";
  import RightsidebarButton from "../../Components/RightsidebarButton.svelte";

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  export let sidebar = false;
  export let show = false;
</script>

<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <div class="navbar-brand-box">
        <Link to="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="assets/images/logo.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </Link>

        <Link to="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="assets/images/logoFalktron-h.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="assets/images/logoFalktron-h.png" alt="" height="19" />
          </span>
        </Link>
      </div>

      <button
        type="button"
        class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
        data-toggle="collapse"
        onClick={this.toggleMenu}
        class:show on:click={() => (show = !show)}
        data-target="#topnav-menu-content"
      >
        <i class="fa fa-fw fa-bars" />
      </button>

    </div>

    <div class="d-flex">

      <LanguageDropdown />

      <Dropdown class="d-none d-lg-inline-block ms-1">
        <button
          type="button"
          class="btn header-item noti-icon headerbtn"
          on:click={toggleFullscreen}
          data-toggle="fullscreen"
        >
          <i class="bx bx-fullscreen" />
        </button>
      </Dropdown>


      <ProfileMenu />

      <Dropdown class="d-inline-block">
        <RightsidebarButton bind:open={sidebar} />
      </Dropdown>
    </div>
  </div>
</header>
