<template>
  <div class="c-wallet-options">
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
          <nuxt-link class="c-wallet-options__item-btn blue-btn-arrow" to="/">
            <span>Setup Wallet</span>
          </nuxt-link>
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
          <nuxt-link class="c-wallet-options__item-btn blue-btn-arrow" to="/">
            <span>Setup Wallet</span>
          </nuxt-link>
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

  .container {
    width: 100%;
    max-width: rem(1039);
    margin: 0 auto;
  }

  &__title {
    @extend %text-main;
    margin-bottom: rem(50);
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

    &-img {
      margin-bottom: rem(50);
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
    }
  }
}
</style>
