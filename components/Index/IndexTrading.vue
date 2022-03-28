<template>
  <div class="c-index-trading">
    <div class="container">
      <div class="c-index-trading_left" vue-animate-onscroll.repeat="'animated flip'">
        <h2 class="c-index-trading__title">{{ $t('home.trading_title') }}</h2>
        <p class="c-index-trading__text">PKT can be traded on the BitMart exchange. It is also trading via OTC on Telegram in the PKT Trading Group chat. Wrapped PKT (wPKT) can be traded via Binance Smart Chain on PancakeSwap.</p>
        <div class="c-index-trading__links">
            <nuxt-link to="/getpkt" class="btn_blue_new button_new"><span>{{ $t('home.trading_link_1') }}</span></nuxt-link>
            <nuxt-link to="/wpkt" class="btn_blue_new button_new"><span>{{ $t('home.trading_link_2') }}</span></nuxt-link>
        </div>
      </div>
      <div class="c-index-trading_right">
        <img class="c-index-trading_right__img" src="/img/home-pancake_swap.png" alt="Pancake" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexTrading",
};
</script>
<style lang="scss">
.c-index-trading {
  margin:50px auto;
  z-index:3;
  position:relative;
  @include for-width(-small-lg) {
    margin:0;
    padding:rem(50) rem(20);
  }
  & .container {
    @extend %container_new;
    @extend %df;
    @extend %aic;
    @extend %jcsb;
    background-color: $light_bg;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    padding:rem(80) rem(45);
    background-image: url(/img/home-trading-bg.png);
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
    @include for-width(-tablet) {
      max-width:93%;
      width:100%;
      padding:rem(25) rem(25) rem(35);
      display:block;
    }
    @include for-width(-small-lg) {
      padding:rem(35) rem(30);
      max-width:98%;
      background-image: url(/img/home-trading-bg-mobile.png);
      background-position: bottom center;
      background-size: 100% auto;
    }
  }
  &__text {
    @extend %pn;
    @extend %regular;
    padding-right:rem(185);
    @include for-width(-tablet-lg) {
      padding-right:rem(85);
    }
    @include for-width(-small-lg) {
      padding-right:0;
    }
  }
  &_left {
    width:60%;
    position:relative;
    z-index:2;
    @include for-width(-laptop) {
      width:65%;
    }
    @include for-width(-tablet) {
      width:100%;
    }
  }
  &_right {
    @extend %t-center;
    position:relative;
    z-index:2;
    @include for-width(-tablet) {
      text-align:left;
      margin-top:rem(25);
    }
    img {
      max-width:80%;
      @include for-width(-tablet) {
        max-width:70%;
      }
      @include for-width(-small-lg) {
        max-width:100%;
        margin:rem(10) 0;
      }
    }
  }
  &__title {
    @extend %heading-large;
    margin-bottom:rem(30);
    @extend %heading-gradient-dark;
    @include for-width(-laptop) {
      margin-bottom:rem(20);
    }
    @include for-width(-small-lg) {
      font-size: rem(40);
      line-height: rem(50);
      margin-bottom:rem(15);
    }
  }
  &__links {
    margin-top:rem(50);
    @extend %df;
    @extend %aic;
    @include for-width(-tablet) {
      margin-top:rem(25);
    }
    @include for-width(-small-lg) {
      display:block;
      margin-top:0;
      padding-top:rem(5);
    }
    .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin-right: 20px;
        @include for-width(-tablet) {
          margin: rem(10) rem(10) rem(10) 0;
        }
        @include for-width(-small-lg) {
          display:block;
          width:100%;
          margin:rem(20) 0;
          font-family: "Poppins-SemiBold", sans-serif;
        }
      }
  }
  &__pancake {
    @extend %db;
    @extend %t-right;
    position:absolute;
    right:rem(45);
    bottom:rem(35);
    max-width:rem(200);
    @include for-width(-tablet) {
      position: relative;
      right: 0;
      bottom: 0;
      text-align: center;
    }
    @include for-width(-small-lg) {
      max-width:75%;
      margin:0 auto;
    }
  }
}
</style>