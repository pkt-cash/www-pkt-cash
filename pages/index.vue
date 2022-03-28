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
          Id: 'utility',
          Title: this.$t("home.block_3_title"),
          subTitle: 'The New Ultra Fast Network',
          content: 'PKT is an open source project focused on decentralizing access to the internet and helping the next billion people get online.',
          content_last: 'The PKT Network is growing to become the fastest, global internet service provider (ISP), powered by the people, instead of paying a traditional ISP for internet access.',
          button_label_1: "Cryptoeconomics",
          button_link_1: '/cryptoeconomics',
          button_label_2: this.$t("home.block_3_label_2"),
          button_link_2: '/origin-story',
          single_1_title: 'VPN',
          single_1_descr: 'Get VPN access for free and only pay for bandwidth speed when you need it.',
          single_2_title: 'Monetize Bandwidth',
          single_2_descr: 'Convert unused bandwidth into revenue and power the PKT Network from any compatible hardware.',
          single_3_title: 'WiFi Sharing',
          single_3_descr: 'People can share and enable encrypted access to the internet without requiring an ISP.',
        },
        {
          Id: 'mine',
          Title: this.$t("home.block_2_title"),
          subTitle: 'Turn Bandwidth Into Income',
          content: 'PKT uses PacketCrypt, the world’s first bandwidth-hard proof of work. When you connect your home or office internet to the PKT Network, you earn PKT Cash (PKT).',
          content_last: 'PKT mining does not require permission from a centralized company. Miners power the network in a decentralized way, which scales to provide low cost, high speed internet access worldwide.',
          button_label_1: 'Learn More',
          button_link_1: '/mine',
          button_label_2: 'Download Wallet',
          button_link_2: '/wallet',
          single_1_title: 'Earn PKT',
          single_1_descr: 'PKT is a mined coin, not a token. It is minted every 60 seconds and 10x faster than Bitcoin.',
          single_2_title: 'People Powered',
          single_2_descr: 'PKT mining pools are community operated and ensure high speed network infrastructure.',
          single_3_title: 'Edge Networking',
          single_3_descr: 'Miners build the network, which expands low cost internet access at the edge.',
        },
        {
          Id: 'build',
          Title: this.$t("home.block_1_title"),
          subTitle: 'The Future of Networking',
          content: 'The PKT ecosystem aims to solve the problem of internet access monopolization from ISPs. The community is incentivized to build the roadmap to support this mission.',
          content_last: '20% of the every mined block is paid to the Network Steward, which transparently provides grants to build open-source technology, or the funds are burned every 90 days.',
          button_label_1: this.$t("home.block_1_label_1"),
          button_link_1: '/build',
          button_label_2: this.$t("home.block_1_label_2"),
          button_link_2: '/network-steward',
          single_1_title: 'Business Use Cases',
          single_1_descr: 'Non-discriminatory so anyone can start a business in the PKT ecosystem without permission.',
          single_2_title: 'Open Participation',
          single_2_descr: 'Anyone can contribute without requiring technical or administrative capabilities.',
          single_3_title: 'Building on cjdns',
          single_3_descr: 'Enables end-to-end encrypted data transfer and access to IP addresses without a central issuer.',
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