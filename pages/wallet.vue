<template>
  <div class="v-wallet">
    <section class="v-wallet-section">
      <BigHeader
        title="Wallet Setup"
        subtitle="PKT Wallet Installation"
        text="To set up the command line wallet for PKT you will need:"
        bg="/img/wallet-setup-header-bg.jpg"
      />
    </section>
    <section class="v-wallet-section">
      <WalletSetupMain />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import WalletSetupMain from "~/components/Wallet/SetupMain";

export default {
  components: {
    BigHeader,
    WalletSetupMain,
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
