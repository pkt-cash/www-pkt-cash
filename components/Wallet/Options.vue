<template>
  <div class="c-wallet-options" id="setup">
    <div class="container">
      <h2 class="c-wallet-options__title">{{ $t("wallet.options_heading") }}</h2>
      <div class="c-wallet-options__list">
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-1.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">{{ $t("wallet.option_01_title") }}</h3>
          <a href="#" class="c-wallet-options__item-link">
            {{ $t("wallet.option_01_descr") }}
          </a>
          <a class="c-wallet-options__item-btn blue-btn-arrow" href="https://docs.pkt.cash/en/latest/pktd/pktwallet" target="_blank">
            <span>{{ $t("wallet.option_01_button") }}</span>
          </a>
        </div>
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-2.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">{{ $t("wallet.option_02_title") }}</h3>
          <a href="#" class="c-wallet-options__item-link">
            {{ $t("wallet.option_02_descr") }}
          </a>
          <a class="c-wallet-options__item-btn blue-btn-arrow" href="https://docs.pkt.cash/en/latest/electrum/" target="_blank">
            <span>{{ $t("wallet.option_02_button") }}</span>
          </a>
        </div>
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-1.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">{{ $t("wallet.option_03_title") }}</h3>
          <a href="#" class="c-wallet-options__item-link">
            {{ $t("wallet.option_03_descr") }}
          </a>
          <a class="c-wallet-options__item-btn blue-btn-arrow" href="https://github.com/artrepreneur/PKT-Cash-Wallet/releases" target="_blank">
            <span>{{ $t("wallet.option_03_button") }}</span>
          </a>
        </div>
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-2.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">{{ $t("wallet.option_03_1_title") }}</h3>
          <a href="#" class="c-wallet-options__item-link">
            {{ $t("wallet.option_03_1_descr") }}
          </a>
          <a class="c-wallet-options__item-btn blue-btn-arrow" href="https://www.pkt.world/wallet" target="_blank">
            <span>{{ $t("wallet.option_03_1_button") }}</span>
          </a>
        </div>
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-1.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">{{ $t("wallet.option_04_title") }}</h3>
          <a href="#" class="c-wallet-options__item-link">{{ $t("wallet.option_04_descr") }}</a>
          <a class="c-wallet-options__item-btn blue-btn-arrow disabled" href="#">
            <span>{{ $t("wallet.option_04_descr") }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletOptions",
};
</script>

<style lang="scss" scoped>
.c-wallet-options {
  padding: rem(100) rem(15);
  text-align: center;
  @include for-width(-tablet) {
    padding: rem(30) rem(15) rem(50);
  }

  .container {
    width: 100%;
    max-width: rem(1039);
    margin: 0 auto;
  }

  &__title {
    @extend %text-main;
    margin-bottom: rem(50);
    @include for-width(-tablet) {
      margin-bottom: rem(5);
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    @include for-width(-tablet) {
      flex-direction: column;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: rem(25) rem(50);
    @include for-width(-tablet) {
      margin: rem(25) rem(20);
    }

    &-img {
      margin-bottom: rem(15);
      height: rem(250);
      @include for-width(-tablet) {
        margin-bottom: rem(15);
        height: auto;
        max-height: rem(250);
      }

      & img {
        max-height: rem(220);
      }
    }

    &-title {
      @extend %text-main;
      text-decoration: underline;
    }

    &-link {
      @extend %text-main;
      color: $hard_blue;
    }

    &-btn {
      margin-top: rem(50);
      @include for-width(-tablet) {
        margin-top: rem(10);
      }
    }
  }
}
.disabled {
  &:hover {
    cursor: not-allowed;
  }
}
</style>
