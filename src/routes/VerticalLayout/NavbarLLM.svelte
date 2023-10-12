<script>
  import { onMount } from "svelte";
  import { Row, Col, Card, CardBody, CardTitle } from "sveltestrap";

  import { Link } from "svelte-routing";

  import { _ } from "svelte-i18n";

  import LiVerticalTimeline from "./vertical-timeline.svelte";

  let current = "dashboard";
  let current_child = "dashboard";


  function changeClassAttribute(attribute, child = null) {
    if (child && child === current_child) {
      current_child = null;
    } else if (attribute === current && child === null) {
      current = null;
      current_child = null;
    } else {
      current = attribute;
      current_child = child;
    }

    return false;
  }

  onMount(() => {
    menuActivation();
  });

  function menuActivation() {
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    const paths = [];

    for (var i = 0; i < links.length; i++) {
      paths.push(links[i]["pathname"]);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf("/");
      const item = window.location.pathname.substr(0, strIndex).toString();

      matchingMenuItem = links[paths.indexOf(item)];
    } else {
      matchingMenuItem = links[itemIndex];
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4 && parent4.id !== "side-menu") {
              parent4.classList.add("mm-show");
              const parent5 = parent4.parentElement;
              if (parent5 && parent5.id !== "side-menu") {
                parent5.classList.add("mm-active");
                const childanchor = parent5.querySelector(".is-parent");
                if (childanchor && parent5.id !== "side-menu") {
                  childanchor.classList.add("mm-active");
                }
              }
            }
          }
        }
      }
    }
    return false;
  }
  
</script>

<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">
  <div data-simplebar class="h-100">
    <!--- Sidemenu -->
    <div id="sidebar-menu">
      <!-- Left Menu Start -->
      <ul class="metismenu list-unstyled" id="side-menu">

        <li class="menu-title" key="t-pipeline">{$_("menuitems.pipeline.text")}</li> </ul>
        <Row>
          <Col lg="12">       
            <div class="mm-active" >

              <ul class="verti-timeline list-unstyled  sub-menu pipeline">
                <li class="event-headline text-uppercase menu-title">
                  <span  style="color:{$_("menuitems.research.color")}" key="t-research">{$_("menuitems.research.text")}</span>
                </li>
                {#each $_("menuitems.research.list")  as pipeline}
                  <LiVerticalTimeline {pipeline} />
                {/each}
                <li class="event-headline text-uppercase menu-title">
                  <span  style="color:{$_("menuitems.ideation.color")}" key="t-ideation">{$_("menuitems.ideation.text")}</span>
                </li>
                {#each $_("menuitems.ideation.list")  as pipeline}
                  <LiVerticalTimeline {pipeline} />
                {/each}
                <li class="event-headline text-uppercase menu-title">
                  <span  style="color:{$_("menuitems.methods.color")}" key="t-methods">{$_("menuitems.methods.text")}</span>
                </li>
                {#each $_("menuitems.methods.list")  as pipeline}
                  <LiVerticalTimeline {pipeline} />
                {/each}
                <li class="event-headline text-uppercase menu-title">
                  <span  style="color:{$_("menuitems.strategicplanning.color")}" key="t-strategicplanning">{$_("menuitems.strategicplanning.text")}</span>
                </li>
                {#each $_("menuitems.strategicplanning.list")  as pipeline}
                  <LiVerticalTimeline {pipeline} />
                {/each}
              </ul>
            </div>      
          </Col>
        </Row>


     
    </div>
    <!-- Sidebar -->
  </div>
</div>
<!-- Left Sidebar End -->