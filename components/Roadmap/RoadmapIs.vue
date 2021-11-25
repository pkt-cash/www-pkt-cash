<template>
  <div class="c-roadmap-is">
    <div class="container">
      <h1 class="c-roadmap-is__title">{{ $t("roadmap.roadmap_is_heading") }}</h1>
      <ul class="c-roadmap-is__list">
        <li class="c-roadmap-is__item">
          <a href="#VPN Marketplace">{{ $t("roadmap.phase_1_pre") }}</a> - {{ $t("roadmap.roadmap_is_01") }}
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Support Internet Sharing">{{ $t("roadmap.phase_2_pre") }}</a> - {{ $t("roadmap.roadmap_is_02") }}
        </li>
        <li class="c-roadmap-is__item">
          <a href="#Tokenized Bandwidth Leases">{{ $t("roadmap.phase_3_pre") }}</a> - {{ $t("roadmap.roadmap_is_03") }}
        </li>
        <li class="c-roadmap-is__item" id="letter_from_cjd">
          <a href="#Support Next Gen Networking Hardware">{{ $t("roadmap.phase_4_pre") }}</a> - {{ $t("roadmap.roadmap_is_04") }}
        </li>
      </ul>
      <div class="d">
        <nuxt-link to="/about" class="c-roadmap-is__btn blue-btn">
          <span>{{ $t("header.letter") }}</span>
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
