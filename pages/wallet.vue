<template>
  <div class="v-wallet">
    <section class="v-wallet-section">
      <BigHeader
        mobile_img="/img/wallet-header-bg.jpg"
        is_wallet
        title="Wallet"
        subtitle="You store your PKT in a PKT Wallet"
        :listTick="wallet_list"
        bg="/img/wallet-header-bg.jpg"
      />
    </section>
    <section class="v-wallet-section">
      <WalletOptions />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import WalletOptions from "~/components/Wallet/Options";

export default {
  components: {
    BigHeader,
    WalletOptions,
  },
  data() {
    return {
      wallet_list: [
        "End, receive and earn PKT.  ",
        "Control your own private keys.  ",
        "Backup your wallet by writing a short 13 word seed.  ",
      ],
    };
  },
};
</script>

<style lang="scss">
.test {
  @extend %h1-title;
  height: calc(100vh - 100px);
  background-color: grey;
}
</style>
