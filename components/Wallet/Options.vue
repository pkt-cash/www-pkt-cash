<template>
  <div class="c-wallet-options" id="setup">
    <div class="container">
      <h2 class="c-wallet-options__title">There are currently two options to get a free PKT Wallet</h2>
      <div class="c-wallet-options__list">
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-1.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">Command line Wallet</h3>
          <a href="#" class="c-wallet-options__item-link">
            Terminal-based
            <br />full node setup
          </a>
          <a
            class="c-wallet-options__item-btn blue-btn-arrow"
            href="https://docs.pkt.cash/en/latest/pktd/#pktwallet"
            target="_blank"
          >
            <span>Setup CLI Wallet</span>
          </a>
        </div>
        <div class="c-wallet-options__item">
          <figure class="c-wallet-options__item-img">
            <img src="/img/wallet-item-2.png" alt />
          </figure>
          <h3 class="c-wallet-options__item-title">Desktop PKT Wallet</h3>
          <a href="#" class="c-wallet-options__item-link">
            Graphical User Interface (GUI)
            <br />wallet for desktop
          </a>
          <a
            class="c-wallet-options__item-btn blue-btn-arrow"
            href="https://docs.pkt.cash/en/latest/electrum/"
            target="_blank"
          >
            <span>Setup GUI Wallet</span>
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
</style>
