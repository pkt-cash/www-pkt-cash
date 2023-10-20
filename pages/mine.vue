<template>
  <div class="v-mining">
    <section class="v-header-section">
      <HeaderInternal 
      :title="this.$t('mine.title')"
      :subtitle="this.$t('mine.subtitle')" 
      :text="this.$t('mine.text')" 
      :add_title="this.$t('mine.add_title')" 
      :button_1="this.$t('mine.button_1')" 
      :button_2="this.$t('mine.button_2')"
      :button_1_link="localePath('wallet')"
      button_2_link="https://docs.pkt.cash/en/latest/mining/" button_2_target="_blank"
      is_arrow_down 
      arrow_down_link="#mine_scroll" />
    </section>
    <section id="mine_scroll" class="v-scroll-section">
      <ScrollSection/>
    </section>
    <section class="v-mine-section">
      <JoinCommunity/>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import ScrollSection from "~/components/Base/ScrollSection";
import JoinCommunity from "~/components/Mine/JoinCommunity";
export default {
  components: {
    HeaderInternal,
    ScrollSection,
    JoinCommunity
  },
  head() {
    return {
      title: this.$t("mine.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("mine.meta_descr") }],
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
.v-mining {
  & .v-header-section {
    & .c-internal-header {
      @include for-width(+desktop-er) {
        padding-top:rem(75);
      }
      @include for-width(-small-lg) {
        height:100vh;
      }
      &__text {
        @include for-width(+desktop-er) {
          max-width: 60%;
        }
      }
      &__links {
        @include for-width(+desktop-er) {
          margin-top:rem(35);
        }
        .button_new {
          @include for-width(-small-lg) {
            padding:rem(10) rem(15);
            width:49%;
          }
        }
      }
      & .arrow_down {
        @include for-width(+desktop-er) {
          bottom:3vh;
        }
        @include for-width(-small-lg) {
          bottom:4vh;
        }
      }
    }
  }
}
#mine_scroll {
  padding-top:rem(75);
}
</style>