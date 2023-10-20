<template>
  <div class="c-mining-header">
    <div class="container">
      <div class="c-mining-header__title">
        <h1 class="c-mining-header__title-header">{{ $t("header.mining") }}</h1>
        <h2 class="c-mining-header__title-text">
          {{ $t("header.packetcrypt") }}: <br />{{ $t("mining.header_titletext") }}
        </h2>
      </div>
      <div class="c-mining-header__button">
        <h3 class="c-mining-header__button-title">{{ $t("mining.header_buttons_title") }}:</h3>
        <nuxt-link to="/wallet" class="c-mining-header__button-link blue-btn-arrow">
          <span class="c-mining-header__button-btn">{{ $t("wallet.header_button") }}</span>
        </nuxt-link>
        <a href="https://docs.pkt.cash/en/latest/mining/" class="c-mining-header__button-link blue-btn-arrow">
          <span class="c-mining-header__button-btn">{{ $t("mining.header_button_2") }}</span>
        </a>
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
  min-height: 100vh;
  padding: rem(209) rem(25) rem(122);
  @include for-width(-small-lg) {
    padding: rem(150) rem(25) rem(30);
  }
  background-image: url("/img/mining-header-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: $white;

  & .container {
    width: 100%;
    max-width: rem(1070);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: rem(120);
    @include for-width(-small-lg) {
      margin-bottom: rem(15);
    }

    &-header {
      @extend %h1-title;
      margin-bottom: rem(21);
      @include for-width(-tablet) {
        font-size: rem(33);
        /*display: none;*/
      }
    }

    &-text {
      @extend %h2-title;
      @include for-width(-tablet) {
        font-size: rem(16);
        line-height: rem(20);
      }
    }
  }

  &__button {
    &-title {
      @include font_sizes(25, 50);
      @include for-width(-tablet) {
        @include font_sizes(20, 26);
      }
      margin-bottom: rem(50);
    }
    &-link {
      @include for-width(-small-lg) {
        display: block !important;
        width: rem(223);
        margin: 0 auto rem(15);
      }
    }
    &-link:not(:last-child) {
      margin-right: rem(70);
      @include for-width(-small-lg) {
        margin-bottom: rem(20);
        margin-right: auto;
      }
    }
  }
}
</style>
