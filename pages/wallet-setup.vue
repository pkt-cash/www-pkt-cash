<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        title="Wallet Setup"
        subtitle="PKT Wallet Installation"
        text="To set up the command line wallet for PKT you will need:"
        bg="/img/wallet-setup-header-bg.jpg"
      />
    </section>
    <section class="v-network-section">
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
