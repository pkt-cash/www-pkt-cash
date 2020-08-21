<template>
  <div class="c-roadmap-support">
    <div class="container">
      <h1 class="c-roadmap-support__title">Support the PKT Network</h1>
      <p
        class="c-roadmap-support__text"
      >If you want to get involved, build on PKT, or start a business and work alongside the PKT team, then join the community today.</p>
      <p
        class="c-roadmap-support__text"
      >PKT also contains a Network Steward (an elected institution which receives 20% of the newly mined coins), which is dedicated to supporting infrastructure growth and technology development, while making sure the core components of the project are open source.</p>
      <p
        class="c-roadmap-support__text"
      >The Network Steward makes it possible for new businesses to propose and have projects funded that coincide with the PKT project roadmap.</p>
      <div class="c-roadmap-support__btns">
        <nuxt-link class="c-roadmap-support__link blue-btn" to="/network-steward">
          <span>Network Steward</span>
        </nuxt-link>
        <nuxt-link class="c-roadmap-support__link blue-btn" to="/community">
          <span>Join The Community</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapSupport",
};
</script>

<style lang="scss">
.c-roadmap-support {
  padding: rem(100) rem(25);
  @include for-width(-small-lg) {
    padding: rem(50) rem(25);
  }

  .container {
    width: 100%;
    max-width: rem(1035);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(29);
    @include for-width(+ tablet) {
      text-align: center;
      margin-bottom: rem(40);
    }
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(10);
    @include for-width(+ tablet) {
      padding: 0 rem(105);
      margin-bottom: rem(40);
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: rem(50);
    @include for-width(-tablet) {
      flex-direction: column;
    }
  }

  &__link:not(:last-child) {
    @include for-width(-tablet) {
      margin-bottom: rem(20);
    }
    @include for-width(+ tablet) {
      margin-right: rem(40);
    }
  }
}
</style>
