<script>
  export let pipeline;
  import { Link } from "svelte-routing";
</script>

<li class="event-list">
  <div class="event-timeline-dot">
    <i
      class={pipeline.id === 3
        ? "bx bx-right-arrow-circle bx-fade-right"
        : "bx bx-right-arrow-circle"}
    />
  </div>
  <div class="media">
    <li>
      <Link class="side-nav-link-ref" to={pipeline.link}>
        <i class={pipeline.icon} />
        <span key={pipeline.key}>{pipeline.name}</span>
      </Link>
    </li>
  </div>
</li>
