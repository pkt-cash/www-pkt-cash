<template>
  <div class="c-index-join">
    <div class="container">
      <h1 class="c-index-join__title">Join the community</h1>
      <p
        class="c-index-join__text"
      >PKT is run by the community for the community. The network becomes most secure when it is populated by people just like YOU. Join the community now for updates and discussions around how to participate in this growing network.</p>
      <nuxt-link class="c-index-join__link blue-btn-arrow" to="/community">
        <span>Join Now</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexJoin",
};
</script>

<style lang="scss">
.c-index-join {
  padding: rem(233) rem(25) rem(100);
  @include for-width(-small-lg) {
    padding: rem(50) rem(25) rem(50);
  }

  .container {
    width: 100%;
    max-width: rem(1315);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(43);
    @include for-width(-tablet) {
      margin-bottom: rem(30);
    }
  }

  &__text {
    @extend %text-main;
    text-align: center;
    @include for-width(+ tablet) {
      max-width: 65%;
    }
    margin-bottom: rem(38);
    @include for-width(-tablet) {
      margin-bottom: rem(50);
    }
  }

  &__link {
    @include for-width(-tablet) {
      display: block;
      width: 100%;
    }
  }
}
</style>
