<template>
  <div class="c-roadmap-is">
    <div class="container">
      <h1 class="c-roadmap-is__title">The PKT Roadmap is</h1>
      <ul class="c-roadmap-is__list">
        <li class="c-roadmap-is__item">
          <a href="#VPN Marketplace">Phase 1</a> - Build a VPN market where anyone can participate and the minimum price is free
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Support Internet Sharing">Phase 2</a> - Support low cost Internet sharing hardware that allows people to earn PKT using their extra bandwidth
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Tokenized Bandwidth Leases">Phase 3</a> - Create a bandwidth market where network operators do the network engineering so that building a mesh network is easy
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Support Next Gen Networking Hardware">Phase 4</a> - Support high performance networking hardware which automatically sells its bandwidth into the bandwidth market
        </li>
      </ul>
      <div class="d">
        <nuxt-link to="/about" class="c-roadmap-is__btn blue-btn">
          <span>Letter from CJD</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapIs",
};
</script>

<style lang="scss">
.c-roadmap-is {
  padding: rem(100) rem(25) rem(82);
  @include for-width(-small-lg) {
    padding: rem(25) rem(25) rem(21);
  }

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    color: $dark_blue;
    margin-bottom: rem(39);
    @include for-width(+ small-lg) {
      text-align: center;
      margin-bottom: rem(50);
    }
  }

  &__item {
    @extend %text-main;
    margin-bottom: rem(20);

    & a {
      color: $hard_blue;
    }
  }
  .d {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: rem(96);
    @include for-width(-tablet) {
      margin-top: rem(30);
    }
  }
  &__btn {
    display: block;
    width: rem(231);
  }
}
</style>
