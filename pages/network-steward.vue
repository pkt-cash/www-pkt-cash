<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        is_network_st
        mobile_img="/img/net-mobile.jpg"
        :title="this.$t('header.network_st')"
        :text="this.$t('steward.big_header_text')"
        :btn="this.$t('steward_vote.big_header_title')"
        btnLink="/network-steward-vote"
        bg="/img/network-header-bg.jpg"
      />
    </section>
    <section class="v-network-section">
      <NetworkMain />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import NetworkMain from "~/components/Network/Main";

export default {
  components: {
    BigHeader,
    NetworkMain,
  },
  head() {
    return {
      title: this.$t("steward.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
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
