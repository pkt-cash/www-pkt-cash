<template>
  <div class="v-cash">
    <section class="v-cash-section">
      <SimpleHeader
        mobile_img="/img/cash-mobile.jpg"
        title="PKT"
        :subtitle="this.$t('cash.page_subtitle')"
        bg="/img/cash-header-bg.jpg"
      />
    </section>
    <section class="v-cash-section">
      <CashMain />
    </section>
    <section class="v-cash-section">
      <Advantage :list="advantage_item" />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import CashMain from "~/components/Cash/Main";
import Advantage from "~/components/Advantage";

export default {
  components: {
    SimpleHeader,
    CashMain,
    Advantage
  },
  data() {
    return {
      advantage_item: [
        {
          title: this.$t("header.network_st"),
          subTitle: this.$t("cash.adv_subtitle"),
          text:this.$t("cash.adv_text"),
          btnText: this.$t("header.network_st"),
          img: "/img/advantage/mining-4.png",
          mobile_img: "/img/advantage/mining-4-mobile.png",
          btnLink: "/network-steward"
        }
      ]
    };
  },
  head() {
    return {
      title: this.$t("cash.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
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
