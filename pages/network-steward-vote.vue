<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        mobile_img="/img/network-steward-vote-header-bg.jpg"
        :title="this.$t("steward_vote.big_header_title")"
        :text="this.$t("steward_vote.big_header_text")"
        :btn="this.$t('header.network_st')"
        btnLink="/network-steward"
        bg="/img/network-steward-vote-header-bg.jpg"
      />
    </section>
    <section class="v-network-section">
      <NetworkStewardVoteMain />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import NetworkStewardVoteMain from "~/components/Network/StewardVoteMain";

export default {
  components: {
    BigHeader,
    NetworkStewardVoteMain,
  },
  head() {
    return {
      title: this.$t("steward_vote.meta_title"),
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
