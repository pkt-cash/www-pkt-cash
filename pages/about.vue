<template>
  <div class="v-about">
    <section class="v-about-section">
      <SimpleHeader title="Wallet Setup" bg="/img/about-header-bg.jpg" />
    </section>
    <section class="v-about-section">
      <AboutMain />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import AboutMain from "~/components/About/Main";

export default {
  components: {
    SimpleHeader,
    AboutMain,
  },
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
