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
          title: this.$t("header.network_st"),
          text: this.$t("home.adv_text_1"),
          btnText: this.$t("steward.network_02_content_05"),
          img: "/img/advantage/index-1.png",
          mobile_img: "/img/advantage/index-1-mobile.png",
          aligh: true,
          textSVG: true,
          colorBlue: true,
          learnMore: true,
          lear_link: '/network-steward'
        },
        {
          title: "",
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
        },
        {
          title: this.$t("header.wallet"),
          text: this.$t("home.adv_text_3"),
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
      title: this.$t("home.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
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