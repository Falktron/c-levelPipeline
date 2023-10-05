<script>
  import { onMount } from "svelte";

  import { Link } from "svelte-routing";

  import { _ } from "svelte-i18n";

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
        <li class="menu-title" key="t-menu">{$_("menuitems.menu.text")}</li>

        <li>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("dashboards")}>
            <i class="bx bx-home-circle" />
            <span key="t-dashboards">{$_("menuitems.dashboards.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current == 'dashboards'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link to="/" key="t-default" class="side-nav-link-ref">{$_("menuitems.dashboards.list.default")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-saas">{$_("menuitems.dashboards.list.saas")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-crypto">{$_("menuitems.dashboards.list.crypto")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-blog">{$_("menuitems.dashboards.list.blog")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs">
                <span class="badge rounded-pill text-bg-success float-end" key="t-new">New</span>
                <span>{$_("menuitems.dashboards.list.jobs")}</span>
              </Link>
            </li>
          </ul>
        </li>

        <li class="menu-title" key="t-apps">{$_("menuitems.apps.text")}</li>

        <li>
          <Link class="side-nav-link-ref" to="/">
            <i class="bx bx-calendar" />
            <span key="t-calendar">{$_("menuitems.calendar.text")}</span>
          </Link>
        </li>

        <li>
          <Link class="side-nav-link-ref" to="/">
            <i class="bx bx-chat" />
            <span key="t-chat">{$_("menuitems.chat.text")}</span>
          </Link>
        </li>

        <li>
          <Link class="side-nav-link-ref" to="/">
            <i class="bx bx-file" />
            <span key="t-file-manager">{$_("menuitems.filemanager.text")}</span>
          </Link>
        </li>

        <li class={current == "ecommerce" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("ecommerce")}>
            <i class="bx bx-store" />
            <span key="t-ecommerce">{$_("menuitems.ecommerce.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'ecommerce'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-products">{$_("menuitems.ecommerce.list.products")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-product-detail">{$_("menuitems.ecommerce.list.productdetail")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-orders">{$_("menuitems.ecommerce.list.orders")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-customers">{$_("menuitems.ecommerce.list.customers")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-cart">{$_("menuitems.ecommerce.list.cart")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-checkout">{$_("menuitems.ecommerce.list.checkout")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-shops">{$_("menuitems.ecommerce.list.shops")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-add-product">{$_("menuitems.ecommerce.list.addproduct")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "crypto" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("crypto")}>
            <i class="bx bx-bitcoin" />
            <span key="t-crypto">{$_("menuitems.crypto.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'crypto' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-wallet">{$_("menuitems.crypto.list.wallet")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/-sell" key="t-buy">{$_("menuitems.crypto.list.buy/sell")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-exchange">{$_("menuitems.crypto.list.exchange")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-lending">{$_("menuitems.crypto.list.lending")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-orders">{$_("menuitems.crypto.list.orders")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-kyc">{$_("menuitems.crypto.list.kycapplication")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-ico">{$_("menuitems.crypto.list.icolanding")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "email" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("email")}>
            <i class="bx bx-envelope" />
            <span key="t-email">{$_("menuitems.email.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'email' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-inbox">{$_("menuitems.email.list.inbox")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-read-email">{$_("menuitems.email.list.reademail")}</Link>
            </li>
            <li class={current_child === "templates" ? "mm-active" : ""}>
              <a
                href={null}
                on:click={() => changeClassAttribute("email", "templates")}>
                <span
                  class="badge rounded-pill badge-soft-success float-end"
                  key="t-new">New</span>
                <span key="t-email-templates"
                  >{$_("menuitems.email.list.template.text")}</span>
              </a>
              <ul
                class={current_child === "templates"
                  ? "sub-menu mm-collapse mm-show"
                  : "sub-menu mm-collapse"}
                aria-expanded="true">
                <li>
                  <Link
                    class="side-nav-link-ref"
                    to="/"
                    key="t-basic-action"
                    >{$_("menuitems.email.list.template.list.basic")}</Link
                  >
                </li>
                <li>
                  <Link
                    class="side-nav-link-ref"
                    to="/"
                    key="t-alert-email"
                    >{$_("menuitems.email.list.template.list.alert")}</Link
                  >
                </li>
                <li>
                  <Link
                    class="side-nav-link-ref"
                    to="/"
                    key="t-bill-email"
                    >{$_("menuitems.email.list.template.list.billing")}</Link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li class={current == "invoices" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("invoices")}>
            <i class="bx bx-receipt" />
            <span key="t-invoices">{$_("menuitems.invoices.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'invoices'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-invoice-list">{$_("menuitems.invoices.list.invoicelist")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-invoice-detail">{$_("menuitems.invoices.list.invoicedetail")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "projects" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("projects")}>
            <i class="bx bx-briefcase-alt-2" />
            <span key="t-projects">{$_("menuitems.projects.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'projects'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-p-grid">{$_("menuitems.projects.list.grid")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-p-list">{$_("menuitems.projects.list.projectlist")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-p-overview">{$_("menuitems.projects.list.overview")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-create-new">{$_("menuitems.projects.list.create")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "tasks" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("tasks")}>
            <i class="bx bx-task" />
            <span key="t-tasks">{$_("menuitems.tasks.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'tasks' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-task-list">{$_("menuitems.tasks.list.tasklist")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-create-task">{$_("menuitems.tasks.list.createtask")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "contacts" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("contacts")}>
            <i class="bx bxs-user-detail" />
            <span key="t-contacts">{$_("menuitems.contacts.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'contacts'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-user-grid">{$_("menuitems.contacts.list.usergrid")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-user-list">{$_("menuitems.contacts.list.userlist")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-profile">{$_("menuitems.contacts.list.profile")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "blog" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("blog")}>
            <i class="bx bx-detail" />
            <span key="t-blog">{$_("menuitems.blog.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'blog' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-blog-list">{$_("menuitems.blog.list.bloglist")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-blog-grid">{$_("menuitems.blog.list.grid")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-blog-details">{$_("menuitems.blog.list.detail")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "jobs" ? "mm-active" : ""}>
          <a
            href={null}
            class="waves-effect"
            on:click={() => changeClassAttribute("jobs")}>
            <span class="badge rounded-pill bg-success float-end" key="t-new">New</span>
            <i class="bx bx-detail" />
            <span key="t-jobs">{$_("menuitems.jobs.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'jobs' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs-list">{$_("menuitems.jobs.list.joblist")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs-jobgrid">{$_("menuitems.jobs.list.jobgrid")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs-applyjob">{$_("menuitems.jobs.list.applyjob")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs-jobdetails">{$_("menuitems.jobs.list.jobdetails")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-jobs-jobcategories">{$_("menuitems.jobs.list.jobcategories")}</Link>
            </li>

            <li class={current_child === "candidate" ? "mm-active" : ""}>
              <a
                href={null}
                class="has-arrow"
                on:click={() => changeClassAttribute("jobs", "candidate")}>
                <span 
                  >{$_("menuitems.jobs.list.candidate.text")}</span>
              </a>
              <ul
                class={current_child === "candidate"
                  ? "sub-menu mm-collapse mm-show"
                  : "sub-menu mm-collapse"}
                aria-expanded="true">
                <li>
                  <Link
                    class="side-nav-link-ref"
                    to="/"
                    >{$_("menuitems.jobs.list.candidate.list.list")}</Link
                  >
                </li>
                <li>
                  <Link
                    class="side-nav-link-ref"
                    to="/"
                    >{$_("menuitems.jobs.list.candidate.list.overview")}</Link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="menu-title" key="t-pages">{$_("menuitems.pages.text")}</li>

        <li class={current == "authentication" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("authentication")}>
            <i class="bx bx-user-circle" />
            <span key="t-authentication">{$_("menuitems.authentication.text")}</span
            >
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'authentication'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-login">{$_("menuitems.authentication.list.login")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-login-2">{$_("menuitems.authentication.list.login-2")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-register">{$_("menuitems.authentication.list.register")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-register-2">{$_("menuitems.authentication.list.register-2")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-recover-password">{$_("menuitems.authentication.list.recoverpwd")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-recover-password-2">{$_("menuitems.authentication.list.recoverpwd-2")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-lock-screen">{$_("menuitems.authentication.list.lockscreen")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-lock-screen-2">{$_("menuitems.authentication.list.lockscreen-2")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-confirm-mail">{$_("menuitems.authentication.list.confirm-mail")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-confirm-mail-2">{$_("menuitems.authentication.list.confirm-mail-2")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-email-verification">{$_("menuitems.authentication.list.verification")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-email-verification-2">{$_("menuitems.authentication.list.verification-2")}</Link>
            </li>
            <li>
              <Link
                to="/"
                key="t-two-step-verification">{$_("menuitems.authentication.list.verification-step")}</Link>
            </li>
            <li>
              <Link
                to="/"
                key="t-two-step-verification-2">{$_("menuitems.authentication.list.verification-step-2")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "utility" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("utility")}>
            <i class="bx bx-file" />
            <span key="t-utility">{$_("menuitems.utility.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'utility'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-starter-page">{$_("menuitems.utility.list.starter")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-maintenance">{$_("menuitems.utility.list.maintenance")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-coming-soon">{$_("menuitems.utility.list.comingsoon")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-timeline">{$_("menuitems.utility.list.timeline")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-faqs">{$_("menuitems.utility.list.faqs")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-pricing">{$_("menuitems.utility.list.pricing")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-error-404">{$_("menuitems.utility.list.error404")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-error-500">{$_("menuitems.utility.list.error500")}</Link>
            </li>
          </ul>
        </li>

        <li class="menu-title" key="t-components">
          {$_("menuitems.components.text")}
        </li>

        <li class={current == "uielements" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("uielements")}>
            <i class="bx bx-tone" />
            <span key="t-ui-elements">{$_("menuitems.uielements.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'uielements'
              ? 'mm-show'
              : ''}"
            aria-expanded="false">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-alerts">{$_("menuitems.uielements.list.alerts")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-buttons">{$_("menuitems.uielements.list.buttons")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-cards">{$_("menuitems.uielements.list.cards")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-carousel">{$_("menuitems.uielements.list.carousel")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-dropdowns">{$_("menuitems.uielements.list.dropdowns")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-offcanvas">{$_("menuitems.uielements.list.offcanvas")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-grid">{$_("menuitems.uielements.list.grid")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-images">{$_("menuitems.uielements.list.images")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-modals">{$_("menuitems.uielements.list.modals")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-range-slider">{$_("menuitems.uielements.list.rangeslider")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-session-timeout">{$_("menuitems.uielements.list.session-timeout")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-placeholders">{$_("menuitems.uielements.list.placeholders")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-progress-bars">{$_("menuitems.uielements.list.progressbar")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-sweet-alert">{$_("menuitems.uielements.list.sweetalert")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-tabs-accordions">{$_("menuitems.uielements.list.tabs")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-typography">{$_("menuitems.uielements.list.typography")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-toast">{$_("menuitems.uielements.list.toast")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-video">{$_("menuitems.uielements.list.video")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-general">{$_("menuitems.uielements.list.general")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-colors">{$_("menuitems.uielements.list.colors")}</Link>
            </li>
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-utility">
                <span key="t-utilities">{$_("menuitems.uielements.list.utility")}</span>
                <span class="badge rounded-pill bg-success float-end" key="t-new">New</span>
                </Link>
            </li>
          </ul>
        </li>

        <li class={current == "forms" ? "mm-active" : ""}>
          <a
            href={null}
            class="waves-effect"
            on:click={() => changeClassAttribute("forms")}>
            <i class="bx bxs-eraser" />
            <span class="badge rounded-pill bg-danger float-end">10</span>
            <span key="t-forms">{$_("menuitems.forms.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'forms' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-elements">{$_("menuitems.forms.list.elements")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-layouts">{$_("menuitems.forms.list.layouts")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-advanced">{$_("menuitems.forms.list.advanced")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-editors">{$_("menuitems.forms.list.editor")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-upload">{$_("menuitems.forms.list.fileupload")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-repeater">{$_("menuitems.forms.list.repeater")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-form-wizard">{$_("menuitems.forms.list.wizard")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "tables" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("tables")}>
            <i class="bx bx-list-ul" />
            <span key="t-tables">{$_("menuitems.tables.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'tables' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-basic-tables">{$_("menuitems.tables.list.basic")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-data-tables">{$_("menuitems.tables.list.datatable")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-editable-table">{$_("menuitems.tables.list.editabletable")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "charts" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("charts")}>
            <i class="bx bxs-bar-chart-alt-2" />
            <span key="t-charts">{$_("menuitems.charts.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'charts' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-apex-charts">{$_("menuitems.charts.list.apex")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-chartjs-charts">{$_("menuitems.charts.list.chartjs")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "icons" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("icons")}>
            <i class="bx bx-aperture" />
            <span key="t-icons">{$_("menuitems.icons.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'icons' ? 'mm-show' : ''}"
            aria-expanded="false">
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-boxicons">{$_("menuitems.icons.list.boxicons")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-material-design">{$_("menuitems.icons.list.materialdesign")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-dripicons">{$_("menuitems.icons.list.dripicons")}</Link>
            </li>
            <li>
              <Link
                class="side-nav-link-ref"
                to="/"
                key="t-font-awesome">{$_("menuitems.icons.list.fontawesome")}</Link>
            </li>
          </ul>
        </li>

        <li class={current == "multilevel" ? "mm-active" : ""}>
          <a
            href={null}
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("multilevel")}>
            <i class="bx bx-share-alt" />
            <span key="t-multi-level">{$_("menuitems.multilevel.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'multilevel'
              ? 'mm-show'
              : ''}"
            aria-expanded="true">
            <li>
              <Link class="side-nav-link-ref" to="/" key="t-level-1-1">{$_("menuitems.multilevel.list.level1.1")}</Link>
            </li>
            <li class={current_child === "level2" ? "mm-active" : ""}>
              <a
                href={null}
                class="has-arrow"
                key="t-level-1-2"
                on:click={() => changeClassAttribute("multilevel", "level2")}>{$_("menuitems.multilevel.list.level1.2")}</a>
              <ul
                class={current_child === "level2"
                  ? "sub-menu mm-collapse mm-show"
                  : "sub-menu mm-collapse"}
                aria-expanded="true">
                <li>
                  <Link class="side-nav-link-ref" to="/" key="t-level-2-1"
                    >{$_("menuitems.multilevel.list.level1.level2.1")}</Link
                  >
                </li>
                <li>
                  <Link class="side-nav-link-ref" to="/" key="t-level-2-2"
                    >{$_("menuitems.multilevel.list.level1.level2.2")}</Link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Sidebar -->
  </div>
</div>
<!-- Left Sidebar End -->