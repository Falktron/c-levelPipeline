<script>
  export let pipeline;
  import { Link } from "svelte-routing";
  import { pipelineResults } from '../../helpers/store.js';

</script>

<li class="event-list">
  <div class="event-timeline-dot">
    <i
      class={pipeline.key === $pipelineResults.currentPipeline
        ? "bx bx-right-arrow-circle bx-fade-right"
        : "bx bx-right-arrow-circle  hold-color"}
    />
  </div>
  <div class="media">
    <li>
      <Link class="side-nav-link-ref" to={pipeline.link} on:click={e => {e.preventDefault();}}>
        <i class={pipeline.icon} />
        <span key={pipeline.key}>{pipeline.name}</span>
      </Link>
    </li>
  </div>
</li>
