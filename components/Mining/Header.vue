<template>
  <div class="c-mining-header">
    <div class="container">
      <div class="c-mining-header__title">
        <h1 class="c-mining-header__title-header">Mining</h1>
        <h2 class="c-mining-header__title-text">
          PacketCrypt:
          <br />The firs idth-hard proof of work
        </h2>
      </div>
      <div class="c-mining-header__button">
        <h3 class="c-mining-header__button-title">In order to begin mining, you will need to:</h3>
        <nuxt-link to="#" class="c-mining-header__button-link blue-btn-arrow">
          <span class="c-mining-header__button-btn">Setup a Wallet</span>
        </nuxt-link>
        <nuxt-link to="#" class="c-mining-header__button-link blue-btn-arrow">
          <span class="c-mining-header__button-btn">Install PacketCrypt</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiningHeader",
};
</script>

<style lang="scss">
.c-mining-header {
  background-image: url("/img/mining-header-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: $white;

  & .container {
    width: 100%;
    max-width: rem(1098);
    padding: rem(109) rem(15) rem(122);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 100px);
    @include for-width(-small-md) {
      min-height: calc(100vh - 45px);
    }
  }

  &__title {
    margin-bottom: rem(60);

    &-header {
      @extend %h1-title;
      margin-bottom: rem(21);
    }

    &-text {
      @extend %h2-title;
    }
  }

  &__button {
    &-title {
      @extend %h3-title;
      margin-bottom: rem(50);
    }

    &-link:not(:last-child) {
      margin-right: rem(70);
    }
  }
}
</style>