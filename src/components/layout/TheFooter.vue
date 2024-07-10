<template>
  <div class="bg-black text-white ">
    <div class="container flex flex-col ">
      <div class="grid gap-y-5 lg:gap-0 px-5 lg:px-0 lg:grid-cols-2 items-center py-20">
        <div class="flex flex-col space-y-4">
          <div>
            <div v-if="$slots.logoPng" class="w-12 h-12">
              <slot name="logoPng"> </slot>
            </div>
            <div v-if="$slots.logoSvg" class="w-12 h-12">
              <slot name="logoSvg"></slot>
            </div>
          </div>
          <h4 class="text-2xl">{{ title }}</h4>
          <span class="">by {{ author }}</span>
        </div>
        <div class="grid grid-cols-3   items-start text-base">
          <ul class="flex flex-col space-y-3">
            <li>Company</li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Pricing</a></li>
          </ul>
          <ul class="flex flex-col space-y-3">
            <li>Resources</li>
            <li><a href="">Documentation</a></li>
            <li><a href="">Papers</a></li>
            <li><a href="">Press Conferences</a></li>
          </ul>
          <ul class="flex flex-col space-y-3">
            <li>Legal</li>
            <li><a href="">Team of Service</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cooking Policy</a></li>
            <li><a href="">Data Processing</a></li>
          </ul>
        </div>
      </div>
      <div class="w-full h-0.5 rounded bg-white"></div>
      <div class="flex justify-between py-10 px-5 lg:px-0">
        <div>
          <span>2023 Maxwell Inc. All rights reseved.</span>
        </div>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com" target="black"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
          <a href="https://x.com" target="black"
            ><font-awesome-icon :icon="['fab', 'x-twitter']"
          /></a>
          <a href="https://www.instagram.com/" target="black">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "author"],
};
</script>
