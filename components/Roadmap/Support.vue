<template>
  <div class="c-roadmap-support">
    <div class="container">
      <h1 class="c-roadmap-support__title">The PKT Roadmap is</h1>
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
        <nuxt-link class="c-roadmap-support__link blue-btn-arrow" to="/">
          <span>Info on Network Steward</span>
        </nuxt-link>
        <nuxt-link class="c-roadmap-support__link blue-btn-arrow" to="/">
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
  padding: rem(100) rem(15);

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(50);
    text-align: center;
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
  }

  &__btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: rem(50);
  }

  &__link:not(:last-child) {
    margin-right: rem(40);
  }
}
</style>