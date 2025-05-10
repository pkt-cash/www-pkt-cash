<template>
  <div class="v-ecosystem">
    <section class="v-header-section">
      <SpotAInternal 
      title="Explore what’s built on and using PKT Network"
      text="PKT Network is a permissionless network ecosystem where entrepreneurs and developers can build next gen applications, websites and digital products for worldwide access. All content is globally accessible without geofencing and purchasable using any fiat or digital currency."
       />
    </section>
    <section class="v-built">
      <ImgSection :list="network_list" />
    </section>
    <section class="v-networks">
      <CompanyPreview :list="company_list" />
    </section>
    <section class="v-projects-eco">
      <div class="container">
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">Partnerships</h3>
          <ProjectSBlock :list="projects_partnerships" />
        </div>
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">Wallets</h3>
          <ProjectSBlock :list="projects_wallets" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import ProjectBlock from "~/components/Common/ProjectBlock";
import ImgSection from "~/components/Common/ImgSection";
import CompanyPreview from "~/components/Common/CompanyPreview";
export default {
  components: {
    SpotAInternal,
    ProjectBlock,
    ImgSection,
    CompanyPreview
  },
  data() {
    return {
      company_list: [
        {
          unique_class: "anode",
          company_img: "/img/ecosystem/company-overview-anode.webp",
          company_logo_square: "/img/ecosystem/company-overview-logo-anode.svg",
          company_title: "Anode VPN",
          company_descr: "Free VPN access, powered by cjdns",
          company_link: "https://anode.co/#/",
        },
        {
          unique_class: "pkt_watch",
          company_img: "/img/ecosystem/company-overview-pktwatch.webp",
          company_logo_square: "/img/ecosystem/company-overview-logo-pktwatch.svg",
          company_title: "PKT Watch",
          company_descr: "A collection of free tools and resources",
          company_link: "https://pkt.watch",
        },
        // {
        //   unique_class: "pkt_net",
        //   company_img: "/img/ecosystem/company-overview-pktnet.webp",
        //   company_logo_square: "/img/ecosystem/company-overview-logo-pktnet.svg",
        //   company_title: "PKT.Net",
        //   company_descr: "Building technology for PKT Network",
        //   company_link: "https://pkt.net",
        // },
        {
          unique_class: "akash",
          company_img: "/img/ecosystem/company-overview-akash.webp",
          company_logo_square: "/img/ecosystem/company-overview-logo-akash.svg",
          company_title: "Akash Network",
          company_descr: "A decentralized compute marketplace",
          company_link: "https://akash.network",
        }
      ],
      network_list: [
        {
          single_title: "The future of streaming",
          single_descr: "BIA is a streaming platform that pays its audience to power the network. Audiences can then use their income pay for content. BIA uses the PKT Network for infrastructure and payments.",
          single_url: "https://docs.pkt.cash/utility/bia/",
          single_link: "Learn more",
          single_img: "/img/ecosystem/ecosystem-network-bia-img.webp",
          external: true,
          logo_img: "/img/ecosystem/ecosystem-network-bia.svg",
          logo_title: "BIA",
          bg_color: "background-color:#0D4AE7;",
          unique_class: "bia_block"
        },
        {
          single_title: "Guest wifi for businesses",
          single_descr: "Routie is a hardware and software company that offers guest wifi solutions for hospitality businesses. Their networking and VPN solutions are built using the PKT Network.",
          single_url: "https://routie.io/",
          single_link: "Visit Routie",
          single_img: "/img/ecosystem/ecosystem-network-routie-img.webp",
          external: true,
          logo_img: "/img/ecosystem/ecosystem-network-routie.svg",
          logo_title: "Routie",
          bg_color: "background-color:#C4C4C4;",
          unique_class: "routie_block"
        },
        {
          single_title: "Powering the PKT Network",
          single_descr: "PKT Pal offers turnkey hardware solutions that power infrastructure for the PKT Network. Each device comes pre-loaded so every user earns 4x Stake-and-Earn daily yields.",
          single_url: "https://pktpal.com/",
          single_link: "Visit PKT Pal",
          single_img: "/img/ecosystem/ecosystem-network-pktpal-img.webp",
          external: true,
          logo_img: "/img/ecosystem/ecosystem-network-pktpal.svg",
          logo_title: "PKT Pal",
          bg_color: "background-color:#4174DB;",
          unique_class: "pktpal_block"
        }
      ],
      projects_partnerships:  [
        {
          projects_link: "https://www.allora.network",
          img_url: "/img/ecosystem-allora.svg",
          title:"Allora AI",
          style: "background-color:#FFFFFF;",
        },
        {
          projects_link: "https://akash.network/",
          img_url: "/img/ecosystem-akash.svg",
          title:"Akash",
          style: "background-color:#FFFFFF;",
        },
        {
          projects_link: "https://www.pkt.world",
          img_url: "/img/ecosystem-new-pktworld.svg",
          title:"PKT World",
          style: "background-color:#3CADEF;",
        },
        {
          projects_link: "https://github.com/pkteer",
          img_url: "/img/ecosystem-pkteer.svg",
          title:"Pkteer",
          style: "background-color:#C4C4C4;",
          img_style: "width:80px;",
        },
        // {
        //   projects_link: "https://docs.pkt.cash/en/latest/mining/pool_setup_guide/",
        //   img_url: "/img/ecosystem-zetahash.svg",
        //   title:"Zetahash",
        //   style: "background-color:#F43939;",
        // },
        {
          projects_link: "https://docs.pkt.cash/en/latest/mining/pool_setup_guide/",
          img_url: "/img/ecosystem-new-pkt-pool.svg",
          title:"PKT Pool",
          style: "background-color:#2F36A1;",
        },
      ],
      projects_wallets:  [
        {
          projects_link: "https://www.coinbase.com/wallet",
          img_url: "/img/ecosystem-coinmarketcap.svg",
          title:"Coinbase Wallet",
          style: "background-color:#ffffff;",
          img_style: "width:70px;",
        },
        {
          projects_link: "https://metamask.io",
          img_url: "/img/ecosystem-metamask.svg",
          title:"MetaMask",
          style: "background-color:#ffffff;",
          img_style: "width:80px;",
        },
        {
          projects_link: "https://edge.app",
          img_url: "/img/ecosystem-edge-wallet.svg",
          title:"Edge Wallet",
          style: "background-color:#ffffff;",
          img_style: "width:65px;",
        },
        {
          projects_link: "https://www.ledger.com",
          img_url: "/img/ecosystem-ledger.svg",
          title:"Ledger",
          style: "background-color:#ffffff;",
          img_style: "width:66px;",
        },
      ]
    };
  },
  head() {
    return {
      title: "Ecosystem | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore the PKT Network'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Ecosystem | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Explore the PKT Network'
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
};
</script>
<style lang="scss">
.v-ecosystem {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/ecosystem-top.webp);
  background-size:rem(900);
  background-position:top -65px right;
  background-repeat:no-repeat;
  overflow:hidden;
  @include for-width(-tablet) {
    background-size:rem(550);
  }
  @include for-width(-small-lg) {
    background-size:100%;
  }
  &:before {
    content:'';
    background-image:url(/img/ecosystem-before.webp);
    position:absolute;
    top:13%;
    left:0;
    width:95%;
    height:95%;
    background-position:left top;
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
  &:after {
    content:'';
    background-image:url(/img/ecosystem-after.webp);
    position:absolute;
    bottom:0;
    right:0;
    width:95%;
    height:95%;
    background-position:right bottom -175px;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      display:none;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding:rem(165) 0 rem(105);
    @include for-width(-small-lg) {
      padding:rem(100) 0 rem(50);
    }
  }
  & .v-built {
    & .c-img_text-block {
      &_inner_single_descr {
        padding-right:rem(25);
        @include for-width(-small-lg) {
          padding-right:0;
        }
      }
      & .bia_block {
        justify-content: flex-end;
        & .c-img_text-block_inner_single_img {
          position:absolute;
          @include for-width(-tablet) {
            position:relative;
          }
          & img {
            position:absolute;
            left:-400px;
            top:-285px;
            max-width:rem(635);
            @include for-width(-desktop-lg) {
              max-width:rem(600);
              left:-450px;
              top:-265px;
            }
            @include for-width(-desktop-medium) {
              left:-500px;
            }
            @include for-width(-tablet) {
              position:relative;
              left:0;
              top:-25px;
              max-width:80%;
            }
            @include for-width(-small-lg) {
              top:0;
              max-width:100%;
            }
          }
        }
        & .c-img_text-block_inner_single {
          padding-left:rem(15);
          & img {
            max-width:rem(165);
            @include for-width(-small-lg) {
              max-width:rem(100);
            }
          }
          & .c-common-button {
            border-color: #fff;
            background-color: #fff;
            color: #0D4AE7;
          }
        }
      }
      & .routie_block {
        & .c-img_text-block_inner_single_img {
          padding-right:rem(10);
          @include for-width(-small-lg) {
            padding:0;
          }
        }
        & .c-img_text-block_inner_single {
          &_title {
            color:#0D4AE7;
          }
          &_descr {
            color:#0D4AE7;
          }
          & img {
            max-width:rem(345);
            @include for-width(-small-lg) {
              max-width:rem(200);
            }
          }
          & .c-common-button {
            border-color: #fff;
            background-color: #fff;
            color: #0D4AE7;
          }
        }
      }
      & .pktpal_block {
        & .c-img_text-block_inner_single_img {
          & img {
            margin-left:-10%;
          }
        }
        & .c-img_text-block_inner_single {
          & img {
            max-width:rem(244);
            @include for-width(-small-lg) {
              max-width:rem(175);
            }
          }
          &_title {
            margin-top:rem(10);
          }
        }
      }
    }
  }
  & .v-networks {
    padding-top:rem(80);
  }
  .v-projects-eco {
    padding-bottom:rem(95);
    padding-top:rem(52);
    @include for-width(-small-lg) {
      padding-bottom:rem(40);
    }
    &_inner {
      @extend %df;
      @extend %jcs;
      @extend %aic;
      border-top:1px solid rgba(255,255,255,.2);
      padding:rem(40) 0 rem(35);
      @include for-width(-tablet) {
        display:block;
      }
      @include for-width(-small-lg) {
        border:0;
        padding:0 0 rem(60);
      }
      &:last-child {
        border-bottom:1px solid rgba(255,255,255,.2);
      }
      &__heading {
        @extend %p-big-common-bold;
        width:rem(200);
        @include for-width(-tablet) {
          width:100%;
          margin-bottom:rem(20);
        }
        @include for-width(-small-lg) {
          margin-bottom:rem(25);
        }
      }
    }
  }
}
</style>