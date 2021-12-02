<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        is_wallet_setup
        :title="this.$t('wallet_setup.heading')"
        :subtitle="this.$t('wallet_setup.subtitle')"
        :text="this.$t('wallet_setup.text_1')"
        :list="wallet_setup"
        :sometext="this.$t('wallet_setup.text_2')"
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
      title: this.$t("wallet_setup.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
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
