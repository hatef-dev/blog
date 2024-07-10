<template>
  <!-- banner site  -->
  <base-banner
    :title="titleText"
    :urlImage="resources[0].srcImage"
  ></base-banner>
  <!-- banner site  -->

  <div class="container grid grid-cols-1 lg:grid-cols-4 w-full mt-32">
    <!-- left icons in main page -->
    <div class="hidden lg:block">
      <the-icons-left></the-icons-left>
    </div>
    <!-- left icons in main page -->

    <!-- card in link to content dynamic -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 px-4">
        <base-card
          v-for="res in resources"
          :key="res.id"
          :id="res.id"
          :author="res.author"
          :urlImage="res.srcImage"
          :date="res.date"
          :description="res.description"
          :title="res.title"
        ></base-card>
      </div>
    </div>
    <!-- card in link to content dynamic -->

    <div class="hidden lg:flex flex-col items-center space-y-4">
      <the-side-right-main-page
        v-for="res in resources"
        :key="res.id"
        :urlImage="res.srcImage"
      ></the-side-right-main-page>
    </div>
  </div>
</template>
<script>
import BaseBanner from "../base/BaseBanner.vue";
import BaseCard from "../base/BaseCard.vue";
import TheIconsLeft from "./TheIconsLeft.vue";
import TheSideRightMainPage from "./TheSideRightMainPage.vue";
export default {
  components: {
    BaseCard,
    TheIconsLeft,
    BaseBanner,
    TheSideRightMainPage,
  },
  computed: {
    titleText() {
      return "Design plan for arranging elements is such a way as best to accomplish a paticular purpose";
    },
  },

  inject: ["resources"],
};
</script>
