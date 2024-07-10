<template>
  <header>
    <the-header>
      <template #logoSvg>
        <font-awesome-icon class="w-full h-full" icon="fa-brands fa-github" />
      </template>
    </the-header>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <the-footer :title="storedResources[0].title" :author="storedResources[0].author">
      <template #logoSvg>
        <font-awesome-icon class="w-full h-full" icon="fa-brands fa-github" />
      </template>
    </the-footer>
  </footer>
</template>
<script>
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      storedResources: [
        {
          id: "t1",
          title: "Growing a distributed product design team",
          description:
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          srcImage: "./person.jpg",
          author: "Sean Anderson",
          date: "sep 8 2023",
        },
        {
          id: "t2",
          title: "Growing a distributed product design team",
          description:
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          srcImage: "./building.jpg",
          author: "Sean Anderson",
          date: "sep 8 2023",
        },
        {
          id: "t3",
          title: "Growing a distributed product design team",
          description:
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          srcImage: "./office-building.jpg",
          author: "Sean Anderson",
          date: "sep 8 2023",
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
    };
  },
};
</script>
<style>
html.dark {
  color-scheme: dark;
}
</style>
