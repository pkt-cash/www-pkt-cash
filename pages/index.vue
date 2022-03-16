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
import 'popups/css/popupS.min.css';
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
  },
  mounted: function() {
    var popupS = require('popups');
    popupS.alert({
        content: '<div class="bittrex_popup__images"><img src="/img/popup-bittrex-logo.png" alt="Bittrex" /><img src="/img/popup-bitmart-logo.png" alt="Bitmart" /></div><h2 class="bittrex_popup__title">TRADING IS<br />NOW LIVE</h2><h4 class="bittrex_popup__sub-title">Buy PKT</h4><div class="bittrex_popup__links"><a href="https://bittrex.com/discover/join?referralCode=2IP-T42-MSE" target="_blank" class="btn_blue_new bittrex_popup__links__link">Bittrex Global (Non-USA)</a><a href="https://www.bitmart.com/en?r=rD6Q7w" target="_blank" class="btn_blue_new bittrex_popup__links__link">Bitmart (Global/USA)</a></div>',
        className : 'bittrex_popup',
    });

  }
};
</script>
<style lang="scss">
.popupS-base .popupS-layer {
  border-radius: 0;
  box-shadow: none;
  margin: 0;
}
#popupS-resetFocusBack {
  display:none;
}
#popupS-close {
  color:#fff;
  font-weight:300;
  top: rem(10);
  right: rem(10);
}
.popupS-base .bittrex_popup {
  background-color:$dark_blue_new;
  background-image: url(/img/popup-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0;
  width:70vw;
  max-width: rem(1440);
  padding:rem(100) rem(50);
  @extend %df;
	@extend %jcc;
  @extend %aic;
  @extend %t-center;
  @include for-width(-desktop-lg) {
    padding:rem(75) rem(50);
  }
  @include for-width(-desktop-medium) {
    width:75vw;
  }
  @include for-width(-tablet) {
    width:80vw;
    padding:rem(65) rem(35);
  }
  @include for-width(-small-lg) {
    background-image: url(/img/popup-bg-mobile.jpg);
    background-position: center;
    height:100vh;
    width:100vw;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: space-between;
    padding:rem(65) rem(25);
  }
  & .popupS-buttons {
    display:none;
  }
  &__images {
    @extend %df;
    @extend %jcc;
    @extend %aic;
    @extend %t-center;
    margin-bottom:rem(50);
    @include for-width(-desktop-medium) {
      margin-bottom:rem(40);
    }
    @include for-width(-small-lg) {
      margin-bottom:rem(35);
    }
    & img {
      margin:rem(0) rem(20);
      max-width:rem(150);
      @include for-width(-desktop-medium) {
        max-width:rem(135);
      }
      @include for-width(-small-lg) {
        max-width:30vw;
        margin:rem(0) rem(10);
      }
    }
  }
  &__title {
    @extend %heading-mlarge;
    @extend %heading-gradient-light;
    line-height:rem(90);
    @include for-width(+desktop-hg) {
      line-height:rem(116);
    }
    @include for-width(-desktop-medium) {
        line-height:rem(78);
    }
    @include for-width(-small-lg) {
      font-size: rem(50);
      line-height: rem(54);
    }
    @include for-width(-small-sm) {
      font-size: rem(46);
      line-height: rem(50);
    }
  }
  &__sub-title {
		@extend %subheading;
		margin:rem(40) 0 rem(50);
		color: $white;
    @extend %semibold;
    @include for-width(-small-lg) {
      font-size: rem(22);
      line-height: rem(30);
      margin:rem(30) 0 rem(50);
    }
	}
  &__links {
    @extend %df;
    @extend %jcc;
    @extend %aic;
    @extend %t-center;
    margin:0;
    @include for-width(-small-lg) {
      position:absolute;
      bottom:rem(125);
      width:100%;
      left:0;
    }
    &__link {
      @extend %btn-new;
      @extend %btn_blue_new;
      margin:rem(0) rem(15);
      width:rem(265);
      @include for-width(-desktop-medium) {
        padding:rem(12);
        width:rem(245);
      }
      @include for-width(-small-lg) {
        line-height: rem(16);
        padding:rem(7) rem(22);
        max-width:50%;
        width:rem(175);
        margin:rem(0) rem(10);
      }
      @include for-width(-small-sm) {

      }
    }
  }
}
</style>