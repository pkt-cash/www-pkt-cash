<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        is_network_st
        mobile_img="/img/net-mobile.jpg"
        title="Network Steward"
        text="20% of every newly mined block goes to a network steward address. This address can be changed by way of a PoS based vote. See the Network Steward Vote for more information about the mechanics of the vote. The payments to the network steward address have one special rule, they cannot be spent after 129600 blocks (approximately 3 months) have elapsed, so if the network steward cannot decide how to spend its treasury, the PKT will be burned rather than piling up."
        btn="Network Steward Vote"
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
      title: "Network Steward - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
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
