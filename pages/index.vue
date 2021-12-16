<template>
  <div class="v-index">
    <section class="v-index-section">
      <IndexHeader />
    </section>
    <section class="v-mining-section">
      <Blocks :list="blocks_list" />
    </section>
    <section class="v-index-section">
      <IndexTechnology />
    </section>
    <section class="v-index-section">
      <IndexTrading />
    </section>
    <section class="v-index-section">
      <IndexJoinCommunity />
    </section>
  </div>
</template>

<script>
import IndexHeader from "~/components/Index/IndexHeader";
import IndexBlocks from "~/components/Blocks";
import IndexTechnology from "~/components/Index/IndexTechnology";
import IndexTrading from "~/components/Index/IndexTrading";
import IndexJoinCommunity from "~/components/Index/IndexJoinCommunity";
export default {
  components: {
    IndexHeader,
    IndexBlocks,
    IndexTechnology,
    IndexTrading,
    IndexJoinCommunity,
  },
  data() {
    return {
      blocks_list: [
        {
          Id: 'build',
          Title: this.$t("home.block_1_title"),
          subTitle: this.$t("home.block_1_subtitle"),
          content: this.$t("home.block_1_content"),
          content_last: this.$t("home.block_1_content_last"),
          button_label_1: this.$t("home.block_1_label_1"),
          button_link_1: '/roadmap',
          button_label_2: this.$t("home.block_1_label_2"),
          button_link_2: '/network-steward',
          single_1_title: this.$t("home.block_1_single_1_title"),
          single_1_descr: this.$t("home.block_1_single_1_descr"),
          single_2_title: this.$t("home.block_1_single_2_title"),
          single_2_descr: this.$t("home.block_1_single_2_descr"),
          single_3_title: this.$t("home.block_1_single_3_title"),
          single_3_descr: this.$t("home.block_1_single_3_descr"),
        },
        {
          Id: 'mine',
          Title: this.$t("home.block_2_title"),
          subTitle: this.$t("home.block_2_subtitle"),
          content: this.$t("home.block_2_content"),
          content_last: this.$t("home.block_2_content_last"),
          button_label_1: this.$t("home.block_2_label_1"),
          button_link_1: 'https://docs.pkt.cash/en/latest/mining/',
          blank: "_blank",
          button_label_2: this.$t("home.block_2_label_2"),
          button_link_2: '/wallet',
          single_1_title: this.$t("home.block_2_single_1_title"),
          single_1_descr: this.$t("home.block_2_single_1_descr"),
          single_2_title: this.$t("home.block_2_single_2_title"),
          single_2_descr: this.$t("home.block_2_single_2_descr"),
          single_3_title: this.$t("home.block_2_single_3_title"),
          single_3_descr: this.$t("home.block_2_single_3_descr"),
        },
        {
          Id: 'utility',
          Title: this.$t("home.block_3_title"),
          subTitle: this.$t("home.block_3_subtitle"),
          content: this.$t("home.block_3_content"),
          content_last: this.$t("home.block_3_content_last"),
          button_label_1: "Cryptoeconomics",
          button_link_1: '/cash',
          button_label_2: this.$t("home.block_3_label_2"),
          button_link_2: '/origin-story',
          single_1_title: this.$t("home.block_3_single_1_title"),
          single_1_descr: this.$t("home.block_3_single_1_descr"),
          single_2_title: this.$t("home.block_3_single_2_title"),
          single_2_descr: this.$t("home.block_3_single_2_descr"),
          single_3_title: this.$t("home.block_3_single_3_title"),
          single_3_descr: this.$t("home.block_3_single_3_descr"),
        }
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
  }
};
</script>