<template>
  <div class="c-join-community">
    <div class="container">
      <h2 class="c-join-community__title">Need Help?</h2>
      <h4 class="c-join-community__subtitle">Ask the community</h4>
      <p class="c-join-community__text">The PKT community is built around supporting the greater vision of decentralizing access to the internet and getting the next 1 billion people online. While each announcement miner and pool owner is operating a competitive business, collaboration and camaraderie is the essence of acommplishing the roadmap and supporting the growth of the PKT Network.</p>
      <nuxt-link class="c-join-community__link" to="/community">
        <span>{{ $t('home.join_community_label_link') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinCommunity",
};
</script>

<style lang="scss">
.c-join-community {
  background: $light_bg;
  .container {
    @extend %container_new; 
    @extend %t-center;
    padding:rem(75) 0 rem(100);
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:rem(50) rem(25) rem(75);
    }
    @include for-width(-small-lg) {
      width:100%;
      padding:rem(75) rem(20) rem(85);
    }
  }
  &__title {
    @extend %heading_internal;
    @extend %heading-gradient-dark;
    @include for-width(-small-lg) {
        font-size: rem(36);
        line-height:rem(42);
    }
  }
  &__subtitle {
    @extend %subheading;
    color:$black_new;
    margin:rem(20) 0;
    @include for-width(-tablet) {
      margin:rem(10) 0;
    }
  }
  &__text {
    @extend %pn;
    max-width:50%;
    margin:0 auto;
    @include for-width(-tablet-lg) {
      max-width:42%;
    }
    @include for-width(-tablet) {
      max-width:55%;
    }
    @include for-width(-small-lg) {
      max-width:95%;
    }
  }
  &__link {
    @extend %btn-new;
    @extend %btn_blue_new;
    margin: rem(30) auto 0;
    display:block;
    @include for-width(-tablet) {
      margin: rem(25) auto 0;
    }
    @include for-width(-small-lg) {
      font-family: "Poppins-SemiBold", sans-serif;
      padding:rem(10) rem(35);
      display:inline-block;
    }
  }
}
</style>