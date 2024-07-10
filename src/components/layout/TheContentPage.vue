<template>
  <base-banner
    :urlImage="'./../../../' + content.srcImage"
    :title="content.title"
  ></base-banner>
  <div class="container md:grid md:grid-cols-4 my-14">
    <!-- icons in left side -->
    <div class="md:flex flex-col space-y-3 hidden">
      <a href="https://www.facebook.com" target="black"
        ><font-awesome-icon :icon="['fab', 'facebook']"
      /></a>
      <a href="https://x.com" target="black"
        ><font-awesome-icon :icon="['fab', 'x-twitter']"
      /></a>
      <a href="https://www.instagram.com/" target="black">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="https://www.pinterest.com/" target="black">
        <font-awesome-icon :icon="['fab', 'pinterest']" />
      </a>
    </div>
    <!-- icons in left side -->

    <!-- description -->
    <p class="col-span-3 px-3 lg:px-0 text-base lg:text-lg">
      {{ content.description }}
    </p>
    <!-- description -->

  </div>
</template>
<script>
import BaseBanner from "../base/BaseBanner.vue";

export default {
  data() {
    return {
      content: null,
    };
  },
  props: ["blogId"],
  components: {
    BaseBanner,
  },
  inject: ["resources"],
  created() {
    const selectedContentId = this.blogId;
    const selectedContent = this.resources.find(
      (res) => res.id === selectedContentId
    );
    this.content = selectedContent;
    console.log(this.content);
  },
};
</script>
