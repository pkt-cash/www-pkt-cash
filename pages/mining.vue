<template>
  <div class="v-mining">
    <section class="v-mining-section">
      <MiningHeader />
    </section>
    <section class="v-mining-section">
      <Advantage is_mining :list="advantage_list" />
    </section>
  </div>
</template>

<script>
import MiningHeader from "~/components/Mining/Header";
import Advantage from "~/components/Advantage";

export default {
  components: {
    MiningHeader,
    Advantage,
  },
  head() {
    return {
      title: this.$t("mining.meta_title"),
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
      advantage_list: [
        {
          title: this.$t("home.scroll_section_block_2_title"),
          subTitle: this.$t("mining.adv_subtitle_1"),
          text:this.$t("mining.adv_text_1"),
          btnText: this.$t("setup.nav_04_link_01"),
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-1.png",
          mobile_img: "/img/advantage/mining-1-mobile.png",
          aligh: false,
          textSVG: true,
          lear_link: '/cash'
        },
        {
          title: this.$t("home.scroll_section_block_3_title"),
          subTitle: this.$t("mining.adv_subtitle_2"),
          text:this.$t("mining.adv_text_2"),
          btnText: this.$t("mining.adv_button_2"),
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-2.png",
          mobile_img: "/img/advantage/mining-2-mobile.png",
          aligh: true,
          textSVG: true,
          lear_link: '/cash'
        },
        {
          title: this.$t("home.scroll_section_block_4_title"),
          subTitle: this.$t("mining.adv_subtitle_3"),
          text:this.$t("mining.adv_text_3"),
          btnText: this.$t("mining.adv_button_2"),
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-3.png",
          mobile_img: "/img/advantage/mining-3-mobile.png",
          aligh: false,
          textSVG: true,
          lear_link: '/cash'
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
