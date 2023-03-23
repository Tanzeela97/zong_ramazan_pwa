<script lang="ts">
  function handleClick() {
    console.log("Button clicked!");
  }
</script>

<button class="badge badge-primary text-lg p-5" on:click={handleClick}
  >Subscribe to notifications</button
>
