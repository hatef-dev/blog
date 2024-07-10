<template>
<div class="w-56 h-56  relative">

  <div class=" w-full h-full bg-no-repeat bg-cover bg-center" :style="`background-image : url(${urlImage})`"></div>
  <div class="opacity-0 hover:opacity-100 bg-black/0 hover:bg-black/40 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-lg text-white font-semibold"
    >Increased Range
    Faster Charge
    </div>
</div>
  
  <!-- <div class="w-64 h-64 bg-red-100 relative">
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="
        background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg');
      "
    ></div>
    <div
      class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
    >
      Dwayne
    </div>
  </div> -->
</template>
<script>
export default {
  props: ["urlImage"],
};
</script>
