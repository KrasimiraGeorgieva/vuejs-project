<template>
    <div id="app">
        <header-partial></header-partial>
        <transition name="view">
          <router-view></router-view>
        </transition>
        <footer-partial></footer-partial>
    </div>
</template>

<script>
import HeaderPartial from "@/components/common/HeaderPartial";
import FooterPartial from "@/components/common/FooterPartial";

export default {
  name: "App",
  components: {
    HeaderPartial,
    FooterPartial
  },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Lato', sans-serif;
}

.view-enter-active, .view-leave-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s
}

.view-enter, .view-leave-to {
  opacity: 0;
}

.view-enter-to, .view-leave {
  opacity: 1;
}

</style>