<template>
  <div class="v-wallet">
    <section class="v-wallet-header_section">
      <HeaderInternal 
      :title="this.$t('wallet.title')" 
      :subtitle="this.$t('wallet.subtitle')" 
      :text="this.$t('wallet.text')" 
      :button_1="this.$t('wallet.button_1')" 
      button_1_link="#options"
      is_arrow_down 
      arrow_down_link="#options" />
    </section>
    <section id="options" class="v-wallet-section">
      <h2 class="v-wallet-section_heading_main">{{ $t("wallet.heading_main") }}</h2>
      <p class="v-wallet-section_description_main">{{ $t("wallet.description_main") }}</p>
      <h3 class="v-wallet-section_subheading">{{ $t("wallet.subheading_main") }}</h3>
      <Wallets :list="pkt_wallets" />
      <h3 class="v-wallet-section_subheading">{{ $t("wallet.subheading_bold") }}</h3>
      <Wallets :list="mining_wallets" />
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import Wallets from "~/components/Base/Wallets";
export default {
  components: {
    HeaderInternal,
    Wallets
  },
  head() {
    return {
      title: this.$t("wallet.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
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
      pkt_wallets: [
        {
          img: "/img/wallet-electrum.png",
          title: "Electrum PKT Wallet",
          content: "Easy to use non-mining GUI wallet for Mac or PC desktop",
          button_link: "https://docs.pkt.cash/en/latest/electrum/",
          button_label: "Install Electrum"
        },
        {
          img: "/img/wallet-metamask.png",
          title: "WPKT MetaMask",
          content: "Use for wPKT only on browser and mobile",
          button_link: "https://metamask.io/",
          button_label: "Install MetaMask"
        },
        {
          img: "/img/wallet-anode.png",
          title: "Anode Mobile Wallet",
          content: "Mobile wallet for iOS with LND for micro-transactions",
          button_link: "https://anode.co",
          button_label: "Coming Soon",
          is_disabled: true
        }
      ],
      mining_wallets: [
        {
          img: "/img/wallet-command-line.png",
          title: "Command Line PKT Wallet",
          content: "This terminal-based wallet is a full node setup",
          button_link: "https://docs.pkt.cash/en/latest/pktd/pktwallet/",
          button_label: "Install CLI Wallet"
        },
        {
          img: "/img/wallet-world.svg",
          title: "PKT World Wallet",
          content: "Windows-based GUI wallet with built-in desktop miner",
          button_link: "https://www.pkt.world/wallet",
          button_label: "Install PKT World Wallet"
        },
        {
          id: "zulu",
          img: "/img/wallet-zulu.svg",
          title: "Zulu PKT Wallet",
          content: "Mac-based GUI wallet supports mining",
          button_link: "https://github.com/artrepreneur/Zulu/releases",
          button_label: "Install Zulu Wallet"
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.v-wallet {
  &-header_section {
    & .c-internal-header {
      @include for-width(-small-lg) {
        height:100vh;
        padding-top:rem(75);
      }
      &__text {
        max-width: 43rem;
        @include for-width(-tablet) {
          max-width: 65%;
        }
        @include for-width(-small-lg) {
          max-width: 90%;
          margin-bottom:rem(25);
        }
      }
      &__sub-title {
        text-transform:initial;
      }
      & .mobile_view {
        @include for-width(-small-lg) {
          display:none;
        }
      }
      & .desktop_view {
        @include for-width(-small-lg) {
          display:none;
        }
      }
      .arrow_down {
        @include for-width(-small-lg) {
          bottom: 5vh;
        }
      }
    }
  }
  &-section {
    @extend %container_new;
    background:$white;
    @extend %t-center;
    padding:rem(100) 0 rem(150);
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:rem(75) rem(25);
    }
    @include for-width(-small-lg) {
        padding:rem(80) rem(20);
    }
    &_heading_main {
      @extend %heading_internal;
      padding: 0 rem(25);
      text-transform:initial;
      margin-bottom:rem(35);
      @include for-width(+desktop-lg) {
        margin-bottom:rem(50);
      }
      @include for-width(-tablet-lg) {
        margin-bottom:rem(25);
        font-size: rem(40);
        line-height: rem(50);
      }
      @include for-width(-small-lg) {
        font-size: rem(24);
        line-height: rem(36);
        padding: 0;
      }
    }
    &_description_main {
      @extend %pn;
      margin:0 auto;
      max-width:65%;
      @include for-width(-small-lg) {
        max-width:95%;
      }
    }
    &_subheading {
      @extend %medium;
      font-size: rem(44);
      line-height:rem(64);
      margin:rem(50) auto;
      max-width:65%;
      @include for-width(+desktop-lg) {
        font-size: rem(55);
        line-height: rem(82);
      }
      @include for-width(-tablet-lg) {
        font-size: rem(34);
        line-height:rem(44);
        margin:rem(25) auto rem(35);
        max-width:55%;
      }
      @include for-width(-tablet) {
        max-width:75%;
      }
      @include for-width(-small-lg) {
        font-size: rem(16);
        line-height:rem(24);
      }
      &_bold {
        @extend %bold;
        font-size: rem(44);
        line-height: rem(54);
        margin:rem(75) auto;
        @include for-width(+desktop-lg) {
          font-size: rem(55);
          line-height: rem(65);
        }
        @include for-width(-tablet-lg) {
          font-size: rem(40);
          line-height: rem(50);
          margin:rem(50) auto;
        }
        @include for-width(-small-lg) {
          font-size: rem(24);
          line-height: rem(36);
          margin:rem(30) auto;
        }
      }
    }
  }
  .v-wallet-section_options {
    & #zulu {
      & .c-options_single_img {
        padding: rem(25) rem(15) rem(25);
        @include for-width(-tablet) {
          padding: rem(15) rem(10) rem(15);
        }
      }
    }
  }
}
</style>
