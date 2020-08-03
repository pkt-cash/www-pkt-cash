<template>
  <div class="v-index">
    <section class="v-index-section">
      <IndexHeader />
    </section>
    <section class="v-index-section">
      <IndexFeatures />
    </section>
    <section class="v-scroll-section">

    </section>
    <section class="v-mining-section">
      <Advantage :list="advantage_list" />
    </section>
    <section class="v-index-section">
      <IndexJoin />
    </section>
  </div>
</template>

<script>
import IndexHeader from "~/components/Index/IndexHeader";
import IndexFeatures from "~/components/Index/IndexFeatures";
import IndexJoin from "~/components/Index/IndexJoin";
import Advantage from "~/components/Advantage";

export default {
  components: {
    IndexHeader,
    IndexFeatures,
    IndexJoin,
    Advantage,
  },
  data() {
    return {
      advantage_list: [
        {
          title: "Network Steward",
          text:
            "The network steward is an address which gets 20% of every new block-mine so that the developers can finance the building of mesh network technology. Unlike a premine or founder’s fee, the recipient of the network steward payout can be changed by a PoS vote.",
          btnText: "Submit Proposal",
          img: "/img/advantage/index-1.png",
          aligh: true,
          textSVG: true,
          colorBlue: true,
          learnMore: true,
        },
        {
          title: "Wallet",
          text:
            "Currently there’s only a text based wallet for PKT and in order to install this you need to install the PKT daemon then the wallet, then btcctl for interacting with the wallet.",
          btnText: "Install Wallet",
          img: "/img/advantage/index-2-mobile.png",
          aligh: false,
          textSVG: true,
        },
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
