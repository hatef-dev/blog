<template>
  
  <div class="container grid grid-cols-1 lg:grid-cols-4 w-full mt-32">
    <div class="hidden lg:block">
      <the-icons-left></the-icons-left>
    </div>
    <div class="lg:col-span-2">
      <div class="grid grid-cols-1  lg:grid-cols-2 gap-7 px-4">
        <base-card v-for="res in resources" :key="res.id" :id="res.id" :author="res.author" :urlImage="res.srcImage" :date="res.date" :description="res.description" :title="res.title"></base-card>
      </div>
    </div>
    <div class="">ddd</div>
  </div>
</template>
<script>
import BaseCard from '../base/BaseCard.vue';
import TheIconsLeft from "./TheIconsLeft.vue";

export default {
  components: {
    BaseCard,
    TheIconsLeft,
  },
  
  inject: ["resources"],
};
</script>
