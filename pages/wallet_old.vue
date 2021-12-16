<template>
  <div class="v-wallet">
    <section class="v-wallet-section">
      <BigHeader
        mobile_img="/img/wallet-header-bg.jpg"
        is_wallet
        :title="this.$t('header.wallet')"
        :subtitle="this.$t('wallet.header_descr')"
        :listTick="wallet_list"
        is_anchor
        btnLink="#setup"
        bg="/img/wallet-header-bg.jpg"
        :btn="this.$t('wallet.header_button')"
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
  head() {
    return {
      title: this.$t("wallet.meta_title"),
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
      wallet_list: [
        this.$t("wallet.wallet_list_item_1"),
        this.$t("wallet.wallet_list_item_2"),
        this.$t("wallet.wallet_list_item_3"),
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
