<script lang="ts">
  export let props: any;
</script>

<div class="card text-xl w-96 bg-base-100 shadow-xl image-full">
  <figure>
    <img src="/images/islamic-background-1.png" alt="Time" />
  </figure>
  <div class="card-body ">
    <div class="card-title">
      {props.title}
    </div>
    <h1>{props.description}</h1>
  </div>
</div>
