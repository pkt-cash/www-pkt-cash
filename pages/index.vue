<template>
  <div class="v-index">
    <section class="v-index-section">
      <IndexHeader />
    </section>
    <section class="v-index-section">
      <IndexFeatures />
    </section>
    <section class="v-scroll-section">
      <IndexScrollSection/>
    </section>
    <section class="v-mining-section">
      <Advantage is_index :list="advantage_list" />
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
import IndexScrollSection from "~/components/Index/IndexScrollSection";
export default {
  components: {
    IndexScrollSection,
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
          mobile_img: "/img/advantage/index-1-mobile.png",
          aligh: true,
          textSVG: true,
          colorBlue: true,
          learnMore: true,
          lear_link: '/network-steward'
        },
        {
          title: "PKT Roadmap",
          text: "",
          btnText: "",
          img: "",
          mobile_img: "",
          aligh: false,
          textSVG: true,
          colorBlue: false,
          learnMore: true,
          lear_link: '/roadmap',
		  aId: "pkt_roadmap",
		  graphic: "pkt_roadmap_graphic",
		  graphicSrc: "/img/advantage/home-pkt-roadmap-graph.jpg",
		  graphicAlt: "PKT Roadmap",
        },
        {
          title: "Wallet",
          text:
            "There are several options for installing a PKT wallet. Certain wallets are suited for simple transactions while others are enabled for mining. The wallets currently supported include a terminal based command line wallet, the Electrum PKT wallet, and the PKT Zulu GUI wallet. A mobile wallet is also being developed and will be available soon.",
          btnText: "Install Wallet",
          img: "/img/advantage/index-2.png",
          mobile_img: "/img/advantage/index-2-mobile.png",
          aligh: false,
          textSVG: true,
          linkMore: true,
          lear_link: '/wallet'
        },
      ],
    };
  },
  head() {
    return {
      title: "Main - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  async middleware({ store }) {
    await store.dispatch('pkt-analytics/load')
  },
  async mounted() {
    await this.$store.dispatch('pkt-analytics/load')
  },
};
</script>

<style lang="scss">
</style>
