<template>
  <router-link :to="'/blog/'+ id">
    <div
      class="h-[40vh] w-full overflow-hidden grid grid-rows-2 bg-white dark:bg-black rounded-lg shadow-md"
    >
      <div
        :style="`background-image : url(${urlImage})`"
        class="rounded-t-lg max-w-full bg-center bg-no-repeat bg-cover"
      ></div>
      <div class="flex flex-col gap-y-1 p-4 w-full">
        <h3 class="font-bold text-xl w-[90%]">
          {{ title }}
        </h3>

        <p
          class="relative text-base dark:text-white/40 text-black/40 h-full w-72 lg:w-48 xl:w-64 whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {{ description }}
        </p>

        <div class="w-8 h-1 dark:bg-white bg-black rounded-full"></div>
        <div class="flex items-end h-full justify-start space-x-2">
          <span class="dark:text-white/50 text-black/50 text-sm"
            >by {{ author }}</span
          >
          <span class="dark:text-white/30 text-black/30 text-sm">{{
            date
          }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["urlImage", "title", "description", "author", "date", "id"],
  computed: {
    
  },
};
</script>
