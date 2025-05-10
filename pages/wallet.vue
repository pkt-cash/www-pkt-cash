<template>
  <div class="v-wallets">
    <section class="v-header-section">
      <SpotAInternal 
      :title="this.$t('wallets.title')"
      text="PKT works with all Ethereum compatible wallets. The wallets that are most recommended for staking and storing PKT are the Coinbase Wallet and MetaMask." 
      button_1="Buy PKT" 
      button_2="Stake PKT"
      button_1_link="https://uniswap.org/"
      button_2_link="https://pkt.cash/1ea983ba3453631d914755e7ad96840d/overview"
      button_1_target="_blank"
      button_2_target="_blank" />
    </section>
    <section id="wallets" class="v-wallet-section">
      <CompanyPreview :list="wallets_list" />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import Wallets from "~/components/Wallet/Wallets";
export default {
  components: {
    SpotAInternal,
    Wallets
  },
  head() {
    return {
      title: 'PKT Wallets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t("wallets.subtitle")
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'PKT Wallets | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t("wallets.subtitle")
        }
      ],
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
      wallets_list: [
        {
          unique_class: "anode",
          company_img: "/img/wallet-coinbase.webp",
          company_logo_square: "/img/wallet-logo-coinbase.svg",
          company_title: "Coinbase Wallet",
          company_descr: "Non-custodial wallet that supports all chains",
          company_link: "https://www.coinbase.com/wallet",
        },
        {
          unique_class: "pkt_watch",
          company_img: "/img/wallet-metamask.webp",
          company_logo_square: "/img/wallet-logo-metamask.svg",
          company_title: "MetaMask",
          company_descr: "The leading self-custodial web3 wallet.",
          company_link: "https://metamask.io",
        },
        {
          unique_class: "pkt_net",
          company_img: "/img/wallet-edge.webp",
          company_logo_square: "/img/wallet-logo-edge.svg",
          company_title: "Edge Wallet",
          company_descr: "Manage all of your crypto assets.",
          company_link: "https://edge.app",
        },
        {
          unique_class: "akash",
          company_img: "/img/wallet-ledger.webp",
          company_logo_square: "/img/wallet-logo-ledger.svg",
          company_title: "Ledger",
          company_descr: "A collection of free tools and resources",
          company_link: "https://www.ledger.com",
        }
      ]
    };
  },
};
</script>
<style lang="scss">
.v-wallets {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/ecosystem-top.webp);
  background-size:rem(900);
  background-position:top -65px right;
  background-repeat:no-repeat;
  &:before {
    content:'';
    background-image:url(/img/ecosystem-before.webp);
    position:absolute;
    bottom:-20%;
    left:0;
    width:95%;
    height:95%;
    background-position:left bottom;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-lg) {
      width:75%;
      height:80%;
      top:17%;
    }
    @include for-width(-laptop) {
      width:50%;
      height:50%;
      top:45%;
    }
    @include for-width(-small-lg) {
      width:150%;
      height:100%;
      top:17%;
      opacity:0.35;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding-bottom:0;
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(80);
    }
  }
  & .v-wallet-section {
    padding:rem(70) 0 rem(140);
    @include for-width(-small-lg) {
      padding:0 0 rem(80);
    }
  }
  .c-footer {
    z-index:3;
    position:relative;
  }
}
</style>