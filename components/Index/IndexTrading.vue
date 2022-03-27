<template>
  <div class="c-index-trading">
    <div class="container">
      <div class="c-index-trading_left" vue-animate-onscroll.repeat="'animated flip'">
        <h2 class="c-index-trading__title">{{ $t('home.trading_title') }}</h2>
        <p class="c-index-trading__text">{{ $t('home.trading_text_1') }}</p>
        <p class="c-index-trading__text">Buy, sell or stake Wrapped PKT (wPKT) and<br />enter the world of DeFi on Pancake Swap.</p>
        <div class="c-index-trading__links">
            <a href="https://global.bittrex.com/Market/Index?MarketName=USDT-PKT" target="_blank" class="btn_blue_new button_new"><span>{{ $t('home.trading_link_1') }}</span></a>
            <a href="https://www.bitmart.com/trade/en?symbol=PKT_USDT&layout=basic" target="_blank" class="btn_blue_new button_new"><span>{{ $t('home.trading_link_1') }}</span></a>
            <a href="https://pancakeswap.finance/info/token/0x1c25222994531c4ac35e4d94bbf7552c9aa92e32" target="_blank" class="btn_blue_new button_new"><span>{{ $t('home.trading_link_2') }}</span></a>
        </div>
      </div>
      <div class="c-index-trading_right">
        <img class="c-index-trading_right__img" src="/img/home-pancake_swap.png" alt="Pancake" />
      </div>
      <a href="https://pancakeswap.finance" target="_blank" class="c-index-trading__pancake"><img src="/img/pancake-swap-logo.svg" alt="PancakeSwap" /></a>
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
      max-width:100%;
      width:100%;
      padding:rem(15) rem(25) rem(35);
      display:block;
    }
    @include for-width(-small-lg) {
      padding:rem(35);
      background-image: url(/img/home-trading-bg-mobile.png);
      background-position: bottom center;
      background-size: 100% auto;
    }
  }
  &__text {
    @extend %pn;
    @extend %regular;
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
    text-align:right;
    position:relative;
    z-index:2;
    @include for-width(-tablet) {
      text-align:center;
    }
    img {
      max-width:90%;
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
      text-align:center;
      justify-content: center;
    }
    @include for-width(-small-lg) {
      display:block;
      margin-top:0;
      padding-top:rem(10);
    }
    .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin-right: 20px;
        @include for-width(-tablet) {
          margin: rem(10);
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
