<script lang="ts">
    import Fa from 'svelte-fa';
    import { faBell, faBellSlash} from '@fortawesome/free-solid-svg-icons';
    
    import {Notification} from '../../stores/store'
    
    function handleClick() {
        console.log("Button clicked!");
        Notification.set(!$Notification)
    }
</script>


<button class="badge badge-primary text-lg p-5" on:click={handleClick}
  >Subscribe to notifications {'   '} {#if $Notification}
  <Fa  icon={faBell}/>
  {:else}
  <Fa  icon={faBellSlash}/>
  {/if}</button>
