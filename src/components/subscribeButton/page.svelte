<script>
  let inputValue = "";
  let active = false;

  let cancelInactive = () => {
    if (inputValue) {
      active = true;
    } else {
      active = false;
    }
  };
  let phoneNumberVal = "";
</script>

<!-- The button to open modal -->
<label for="my-modal-3" class="btn btn-secondary animate-bounce text-white">
  Subscribe to Zong Islamic Portal</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"
      >✕</label
    >
    <div class="form-control items-center flex flex-col">
      <form method="POST" action="?/getOTP">
        <label class="label flex-1">
          <span class="label-text">Enter Phone Number</span>
        </label>
        <label class="input-group flex-2">
          <span>+92</span>
          <input
            type="text"
            name="phoneNumber"
            placeholder="31xxxxxxxx"
            class="input input-bordered"
            bind:value={phoneNumberVal}
          />
        </label>
        <div class="mt-2 justify-center flex-3">
          <button class=" btn btn-primary"> Subscribe</button>
        </div>
      </form>
      <p class="py-4">
        Subscribe to Zong Islamic Portal for Daily prayer alerts, Ayaat and
        Hadith and access to Islamic content only @ Rs.3+tax daily
      </p>
    </div>
    <!-- <input
      name="phoneNumber"
      type="text"
      placeholder="Enter your phone number"
    /> -->
  </div>
</div>
