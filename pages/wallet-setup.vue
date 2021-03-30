<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        is_wallet_setup
        title="Wallet Setup"
        subtitle="PKT Wallet Installation"
        text="To set up the command line wallet for PKT you will need:"
        :list="wallet_setup"
        sometext="Here are instructions to install the command line wallet:"
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
  head() {
    return {
      title: "Wallet Setup - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  data() {
    return {
      wallet_setup: [
        "the PKT daemon",
        "the PKT wallet",
        "and pktctl for interacting with the wallet",
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
