<template>
  <div class="v-ecosystem">
    <section class="v-header-section">
      <SpotAInternal 
      title="Explore the PKT Network"
      text="PKT Network is a permissionless ecosystem where entrepreneurs and developers can build decentralized infrastructure, expand the decentralized web and scale internet connectivity worldwide." 
       />
    </section>
    <section class="v-networks">
      <div class="container v-network_inner">
        <div class="v-network_inner_single v-network_inner_single_anode">
          <div class="v-network_inner_single__img"><img src="/img/ecosystem-anode.webp" alt="Anode VPN" /></div>
          <div class="v-network_inner_single__content">
            <a href="https://anode.co/" target="_blank" class="white"><img src="/img/ecosystem-anode-logo.webp" alt="Anode VPN" /></a>
            <div class="v-network_inner_single__content_text">
              <h4><a href="https://anode.co/" target="_blank" class="white">Anode VPN</a></h4>
              <p><a href="https://anode.co/" target="_blank" class="white">Free VPN access, powered by cjdns</a></p>
            </div>
          </div>
        </div>
        <div class="v-network_inner_single v-network_inner_single_pkt_watch">
          <div class="v-network_inner_single__img"><img src="/img/ecosystem-pktwatch.svg" alt="PKT Watch" /></div>
          <div class="v-network_inner_single__content">
            <a href="https://pkt.watch/" target="_blank" class="white"><img src="/img/ecosystem-pktwatch-logo.svg" alt="PKT Watch" /></a>
            <div class="v-network_inner_single__content_text">
              <h4><a href="https://pkt.watch/" target="_blank" class="white">PKT Watch</a></h4>
              <p><a href="https://pkt.watch/" target="_blank" class="white">A collection of free tools and resources</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="v-new-projects">
      <div class="container">
        <h2 class="v-new-projects__heading">New Projects</h2>
        <ProjectBlock :list="projects" />
      </div>
    </section>
    <section class="v-projects-eco">
      <div class="container">
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">Infrastructure</h3>
          <ProjectSBlock :list="projects_infra" />
        </div>
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">Payments</h3>
          <ProjectSBlock :list="projects_payments" />
        </div>
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">Consumer</h3>
          <ProjectSBlock :list="projects_consumer" />
        </div>
        <div class="v-projects-eco_inner">
          <h3 class="v-projects-eco_inner__heading">DeFi</h3>
          <ProjectSBlock :list="projects_defi" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import ProjectBlock from "~/components/Common/ProjectBlock";
export default {
  components: {
    SpotAInternal,
    ProjectBlock
  },
  data() {
    return {
      projects: [
        {
          img_style:"background-color:#FF007A;",
          img_url:"/img/ecosystem-new-watchr.svg",
          title:"Watchr",
          descr:"Watch any PKT wallet on the blockchain",
          project_link: "https://pkt.watch/watchr/"
        },
        {
          img_style:"background-color:#8F33D5;",
          img_url:"/img/ecosystem-new-minr.svg",
          title:"Minr",
          descr:"Watch any PKT address on the blockchain",
          project_link: "https://pkt.watch/minr/"
        },
        {
          img_style:"background-color:#3CADEF;",
          img_url:"/img/ecosystem-new-pktworld.svg",
          title:"World.wallet",
          descr:"PKT wallet for Mac, Windows, and Linux",
          project_link: "https://www.pkt.world/wallet"
        },
        {
          img_style:"background-color:#0D4AE7;",
          img_url:"/img/ecosystem-new-routie.svg",
          title:"Routie",
          descr:"Guest wifi solutions for businesses",
          project_link: "https://routie.io/"
        },
        {
          img_style:"background-color:#2B3991;",
          img_url:"/img/ecosystem-new-anode.svg",
          title:"Anode",
          descr:"Free VPN powered by cjdns",
          project_link: "https://anode.co"
        },
        {
          img_style:"background-color:#fff;",
          img_url:"/img/ecosystem-new-odapp.svg",
          title:"Odapp",
          descr:"Bridge to swap PKT to WPKT",
          project_link: "https://odapp.io/"
        }
      ],
      projects_infra:  [
        {
          projects_link: "https://docs.pkt.cash/en/latest/mining/pool_setup_guide/",
          img_url: "/img/ecosystem-zetahash.svg",
          title: "Zetahash",
          style: "background-color:#F43939;",
        },
        {
          projects_link: "https://www.pkt.world",
          img_url: "/img/ecosystem-new-pktworld.svg",
          title: "PKT World",
          style: "background-color:#3CADEF;",
        },
        {
          projects_link: "https://docs.pkt.cash/en/latest/mining/pool_setup_guide/",
          img_url: "/img/ecosystem-new-pkt-pool.svg",
          title: "PKT Pool",
          style: "background-color:#2F36A1;",
        },
        {
          projects_link: "https://github.com/pkteer",
          img_url: "/img/ecosystem-pkteer.svg",
          title: "Pkteer",
          style: "background-color:#FFFFFF;",
          img_style: "width:80px;",
        },
        {
          projects_link: "https://pkt.watch/minr/",
          img_url: "/img/ecosystem-new-minr.svg",
          title: "Minr",
          style: "background-color:#8F33D5;",
        },
        {
          projects_link: "https://akash.network/",
          img_url: "/img/ecosystem-akash.svg",
          title: "Akash",
          style: "background-color:#FFFFFF;",
        },
      ],
      projects_payments:  [
        {
          projects_link: "https://www.pkt.world/wallet",
          img_url: "/img/ecosystem-new-pktworld.svg",
          title: "World.wallet",
          style: "background-color:#3CADEF;",
        },
        {
          projects_link: "https://anode.co",
          img_url: "/img/ecosystem-new-anode.svg",
          title: "Anode",
          style: "background-color:#2B3991;",
          img_style: "width:80px;",
        },
        {
          projects_link: "https://exchange.pkt.net/",
          img_url: "/img/ecosystem-pktnet.svg",
          title: "PKT.Net",
          style: "background-color:#FF9039;",
          img_style: "width:100px;",
        },
      ],
      projects_consumer:  [
        {
          projects_link: "https://pkt.watch/watchr/",
          img_url: "/img/ecosystem-new-watchr.svg",
          title: "Watchr",
          style: "background-color:#FF007A;",
          img_style: "width:54px;",
        },
        {
          projects_link: "https://routie.io/",
          img_url: "/img/ecosystem-new-routie.svg",
          title: "Routie",
          style: "background-color:#0D4AE7;",
        },
        {
          projects_link: "https://pkt.watch",
          img_url: "/img/ecosystem-pkt-watch.svg",
          title: "PKT Watch",
          style: "background-color:#FFFFFF;",
          img_style: "width:52px;",
        },
        {
          projects_link: "https://packetscan.io",
          img_url: "/img/ecosystem-packetscan.svg",
          title: "Packetscan",
          style: "background-color:#FFFFFF;",
          img_style: "width:54px;",
        },
      ],
      projects_defi:  [
        {
          projects_link: "https://odapp.io/",
          img_url: "/img/ecosystem-new-odapp.svg",
          title: "ODapp",
          style: "background-color:#FFFFFF;",
        },
      ],
    };
  },
  head() {
    return {
      title: "Ecosystem - PKT",
      meta: [{ hid: "description", name: "description", content: "Explore the PKT Network" }],
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
    padding:rem(165) 0 rem(55);
    @include for-width(-small-lg) {
      padding:rem(90) 0 rem(50);
    }
  }
  & .v-networks {
    & .v-network_inner {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0 rem(40);
      @include for-width(-small-lg) {
        display:block;
      }
      &_single {
        border-radius:rem(20);
        background-color:rgba(255,255,255,0.15);
        @include for-width(-small-lg) {
          margin-bottom:rem(60);
        }
        &__img {
          border-top-left-radius:rem(20);
          border-top-right-radius:rem(20);
          height:rem(200);
          @include for-width(-small-lg) {
            height:rem(160);
          }
          & img {
            border-top-left-radius:rem(20);
            border-top-right-radius:rem(20);
          }
        }
        &__content {
          padding:rem(30);
          @extend %df;
          @extend %jcs;
          @extend %aic;
          & img {
            width:rem(80);
            margin-right:rem(20);
          }
          &_text {
            @include for-width(-small-lg) {
              padding-left:rem(20);
            }
            & h4 {
              @extend %p-big-common-bold;
              @include for-width(-small-lg) {
                margin-bottom:rem(5);
              }
            }
            & p {
              @extend %p-common;
              @include for-width(-tablet) {
                line-height: rem(20);
              }
              @include for-width(-small-lg) {
                line-height: rem(24);
              }
            }
          }
        }
      }
      &_single_anode {
        & .v-network_inner_single__img {
          & img {
            width:100%;
            height:100%;
            object-fit:cover;
            object-position:center;
          }
        }
      }
      &_single_pkt_watch {
        & .v-network_inner_single__img {
          background-color:$dark_black;
          @extend %df;
          @extend %jcc;
          @extend %aic;
          & img {
            height:rem(60);
            object-fit:contain;
            object-position:center;
          }
        }
      }
    }
  }
  .v-new-projects {
    padding:rem(60) 0 rem(80);
    @include for-width(-small-lg) {
      padding:0 0 rem(60);
    }
    & .container {
      @include for-width(-small-lg) {
        padding:0;
      }
    }
    &__heading {
      @extend %p-big-common-bold;
      padding-bottom:rem(25);
      @include for-width(-small-lg) {
        padding:0 rem(20) rem(18);
      }
    }
  }
  .v-projects-eco {
    padding-bottom:rem(95);
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