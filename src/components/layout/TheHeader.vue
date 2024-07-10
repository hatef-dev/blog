<template>
  <nav class="">
    <div
      class="container left-1/2 -translate-x-1/2 grid grid-cols-3 lg:grid-cols-12 fixed md:w-full lg:w-4/5 z-50 top-6 ring-slate-400 items-center bg-white dark:text-white dark:backdrop-blur-sm px-6 py-4 rounded-xl isolate dark:bg-white/5 shadow-lg ring-1 dark:ring-black/5"
    >
      <!-- logo with image and svg -->
      <div>
        <div v-if="$slots.logoPng" class="">
          <slot name="logoPng"> </slot>
        </div>
        <div v-if="$slots.logoSvg" class="w-12 h-12">
          <slot name="logoSvg"></slot>
        </div>
      </div>
      <!-- end logo with image and svg -->

      <!-- button -->
      <div class="flex lg:hidden justify-center">
        <button
        @click="toggleMenu"
          ref="buttonMenu"
          type="button"
          class="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <!-- end button -->
      </div>
      <!-- menu item list -->
      <div ref="menu" class="hidden absolute top-24 w-full lg:static lg:block lg:col-start-2 lg:col-span-7 ring-slate-400 lg:ring-transparent bg-white dark:text-white  dark:backdrop-blur-sm  rounded-xl isolate dark:bg-white/5 shadow-lg ring-1 dark:ring-black/5 lg:shadow-none dark:lg:bg-transparent lg:ring-0 lg:rounded-none dark:lg:backdrop-blur-none">
        <div class="">
          <ul
            class="font-medium flex flex-col p-4 lg:p-0 mt-4  rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0"
          >
            <li>
              <a
                href="#"
                class="list-item"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="list-item"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="list-item"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="list-item" 
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="list-item"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- end menu item list  -->
      <!-- button darkmode and light mode and button profile -->
      <div
        class="flex lg:col-start-10 justify-end lg:col-span-full items-center space-x-4"
      >
        <theme-toggle></theme-toggle>
        <button
          class="bg-black dark:bg-red-400 text-white rounded p-1 lg:px-4 lg:py-2 font-semibold text-sm"
        >
          My Profile
        </button>
      </div>
    </div>
    <!-- end button darkmode and light mode and button profile -->
  </nav>
</template>
<script>
import ThemeToggle from "../Theme/ThemeToggle.vue";
export default {
  components: {
    ThemeToggle,
  },
  methods: {
    toggleMenu() {
      const toggleMenu = this.$refs.menu
      toggleMenu.classList.toggle("hidden")
      
    },
  },
};
</script>
