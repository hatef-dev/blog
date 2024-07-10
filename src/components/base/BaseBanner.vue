<template>
  <div
    class="m-0 opacityFun relative w-full bg-slate-50 bg-center bg-no-repeat bg-cover h-[90vh] text-center font-bold"
    :style="`background-image : url(${urlImage})`"
  >
    <div
      class="container relative text-3xl lg:text-4xl font-extrabold text-white top-[60%] text-left"
    >
      <h1 class="w-full md:w-4/5 lg:w-3/5 leading-normal">{{ title }}</h1>
    </div>
  </div>
</template>
<style scoped>
body {
  margin: 0;
  height: 1000px;
}

.opacityFun {
  opacity: 1;
}
</style>
<script>
import $ from "jquery";
export default {
  mounted() {
    $(window).scroll(function () {
      $(".opacityFun").css("opacity", 1 - $(window).scrollTop() / 500);
    });
  },
  computed: {
    setBackgroundImage() {
      return `'background-image' :url(${this.urlImage})`;
    },
  },
  props: ["urlImage", "title"],
};
</script>
