<template>
  <div class="v-wallets">
    <section class="v-header-section">
      <SpotAInternal 
      title="PKT Wallets"
      subtitle="Choose a wallet based on your use case"
      text="Whether you’re mining PKT, holding PKT or transacting WPKT on Binance Smart Chain, select the wallet that works for you. Also install the Watchr app on mobile or desktop to easily view and track any PKT wallet address." 
      button_1="View wallets" 
      button_2="Install Watchr"
      button_1_link="#wallets"
      button_2_link="https://pkt.watch/watchr/"
      button_2_target="false"
      button_3_target="true" />
    </section>
    <section class="v-watchr-section">
      <div class="container">
        <div class="v-watchr-section_img">
          <img src="/img/wallets-watchr.webp" title="Watchr screens" />
        </div>
        <div class="v-watchr-section_content">
          <img src="/img/wallets-watchr-logo.webp" title="Watchr" />
          <h5>Watch any wallet on the <br />PKT blockchain</h5>
          <p>Watchr enables you to get insights and track any wallet address using the mobile or desktop app.</p>
          <a href="https://pkt.watch/watchr/" target="_blank" class="c-common-button c-common-button__white"><span>Install Watchr</span></a>
        </div>
      </div>
    </section>
    <section id="wallets" class="v-wallet-section">
      <div class="container">
        <Wallets :list="pkt_wallets" />
        <Wallets :list="mining_wallets" />
      </div>
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
      title: "PKT Wallets",
      meta: [{ hid: "description", name: "description", content: "Choose a wallet based on your use case. Whether you are mining PKT, holding PKT or transacting wPKT on Binance Smart Chain, you can select that wallet that fits your needs. You can use the Watchr app to monitor any PKT wallet balance." }],
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
          bg_color: "background-color:#197CC7;background-image:url(/img/wallets-wallet-pkt-world.svg);background-size:23%;",
          heading: "Desktop Wallet",
          title: "PKT World Wallet",
          content: "Windows and MacOS wallet with built-in PKT miner",
          button_link: "https://pkt.world/wallet",
          // dropdown: true,
          // children: [
          //   {
          //     name:"Download for Mac",
          //     link: "/PktWorldWallet.pkg",
          //   },
          //   {
          //     name:"Download for PC",
          //     link: "/PktWorldWalletSetup.exe",
          //   },
          // ]
        },
        {
          bg_color: "background-color:#2B3991;background-image:url(/img/wallets-wallet-anode.svg);background-size:30%;",
          heading: "iOS Mobile Wallet",
          title: "Anode Mobile Wallet",
          content: "Mobile wallet for iOS with PKT Lightning for micro-transactions",
          button_link: "https://apps.apple.com/us/app/anode-wallet/id1609509719",
        },
        {
          bg_color: "background-color:#2B3991;background-image:url(/img/wallets-wallet-anode-vpn.webp);background-size:50%;",
          heading: "Android Mobile Wallet",
          title: "Anode VPN for Android",
          content: "Android mobile wallet that includes built-in PKT VPN app",
          button_link: "https://play.google.com/store/apps/details?id=co.anode.anodium.playstore&hl=en&gl=US",
        }
      ],
      mining_wallets: [
        {
          bg_color: "background-color:#197CC7;background-image:url(/img/wallets-wallet-pkt-world.svg);background-size:23%;",
          heading: "PKT Mining Wallet",
          title: "PKT World Wallet",
          content: "Windows and MacOS wallet with built-in PKT miner",
          button_link: "https://pkt.world/wallet",
          // dropdown: true,
          // children: [
          //   {
          //     name:"Download for Mac",
          //     link: "/PktWorldWallet.pkg",
          //   },
          //   {
          //     name:"Download for PC",
          //     link: "/PktWorldWalletSetup.exe",
          //   },
          // ]
        },
        {
          bg_color: "background-image:url(/img/wallets-wallet-command-line.webp);background-size:cover;",
          heading: "PKT Mining Wallet",
          title: "Command Line PKT Wallet",
          content: "This terminal-based wallet is a full node setup",
          button_link: "https://docs.pkt.cash/en/latest/pktd/pktwallet/",
        },
        {
          bg_color: "background-color:#FD9D2D;background-image:url(/img/wallets-wallet-metamask.svg);background-size:30%;",
          heading: "WPKT Wallet",
          title: "WPKT MetaMask",
          content: "Use this wallet for WPKT only on web browser and mobile",
          button_link: "https://docs.pkt.cash/en/latest/wrapped_pkt/",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.v-wallets {
  background-color:$black_blue;
  position:relative;
  &:before {
    content:'';
    background-image:url(/img/pkt-wallets-top-asset-2x-1.webp);
    position:absolute;
    top:0;
    right:0;
    width:75%;
    height:75%;
    background-position:right top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-tablet) {
      background-size:rem(800);
      background-position:left -100px top -100px;
    }
    @include for-width(-small-lg) {
      background-position:center top -100px;
      width:100%;
    }
  }
  &:after {
    content:'';
    background-image:url(/img/wallets-bottom.webp);
    position:absolute;
    bottom:-10%;
    left:0;
    width:50%;
    height:50%;
    background-position:left bottom;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      bottom:45%;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  .v-watchr-section {
    padding-top:rem(10);
    padding-bottom:rem(35);
    @include for-width(-tablet) {
      padding:0 rem(25);
    }
    & .container {
      background-image:url(/img/wallets-watchr-bg.webp);
      background-position:center center;
      background-size:cover;
      border-radius:rem(20);
      @extend %df;
      @extend %jcsb;
      @extend %aic;
      @include for-width(-small-lg) {
        border-radius:0;
        display:block;
        background-color:#FF007A;
        background-size:auto;
      }
    }
    &_img {
      @include for-width(-small-lg) {
        padding:rem(50) rem(10) 0;
      }
      & img {
        display:block;
        margin-top:-55px;
        margin-bottom:-55px;
        margin-left:-65px;
        @include for-width(-desktop-medium) {
          margin-left:-35px;
        }
        @include for-width(-laptop) {
          margin-left:-25px;
        }
        @include for-width(-tablet) {
          margin:0;
          max-width:rem(300);
        }
        @include for-width(-small-lg) {
          max-width:100%;
        }
      }
    }
    &_content {
      padding:rem(40) rem(120) rem(60) 0;
      @include for-width(-laptop) {
        padding:rem(30) rem(90) rem(50) rem(20);
      }
      @include for-width(-tablet) {
        padding:rem(30) rem(30) rem(50) rem(20);
      }
      @include for-width(-small-lg) {
        padding:rem(30) rem(15);
      }
      & img {
        max-width:rem(100);
        @include for-width(-laptop) {
          max-width:rem(75);
        }
        @include for-width(-small-lg) {
          width:25%;
          display:inline-block;
          vertical-align:middle;
        }
      }
      & h5 {
        @extend %p-big-common-thick;
        padding:rem(20) 0 rem(10);
        @include for-width(-small-lg) {
          width:73%;
          display:inline-block;
          vertical-align:middle;
          padding:0 0 0 rem(8);
          font-size: rem(16);
          line-height: rem(24);
        }
      }
      & p {
        @extend %p-big-common;
        margin-bottom:rem(25);
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
          margin-bottom:rem(30);
          margin-top:rem(20);
        }
      }
      & .c-common-button {
        @include for-width(-small-lg) {
          width:100%;
        }
      }
    }
  }
  .v-wallet-section {
    padding-bottom:rem(120);
    @include for-width(-small-lg) {
      padding-bottom:rem(145);
      padding-top:rem(70);
    }
  }
  .c-footer {
    z-index:3;
    position:relative;
  }
}
</style>