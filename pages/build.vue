<template>
  <div class="v-build">
    <section class="v-header-section">
      <HeaderInternal
      :title="this.$t('header.build')" 
      :subtitle="this.$t('build.subtitle')" 
      :text="this.$t('build.text')" 
      :button_1="this.$t('build.button_1')" 
      :button_2="this.$t('build.button_2')"
      :button_1_link="localePath('network-steward')"
      button_2_link="https://github.com/pkt-cash/ns-projects/tree/master/projects" 
      is_arrow_down 
      arrow_down_link="#roadmap"/>
    </section>
    <section id="roadmap" class="v-roadmap-section dark_section">
      <div class="container">
        <h2 class="v-roadmap-section-title_h2">{{ $t("build.roadmap_title") }}</h2>
        <div id="desktop" class="roadmap_illustration">
          <div class="roadmap_illustration__headings">
            <div class="roadmap_illustration__headings_single"><span class="single_button btn_blue_new button_new">Phase 1</span><p class="roadmap_illustration__headings_single_phase_title">Launch</p></div>
            <div class="roadmap_illustration__headings_single"><span class="single_button btn_blue_new button_new">Phase 2</span><p class="roadmap_illustration__headings_single_phase_title">Utilize</p></div>
            <div class="roadmap_illustration__headings_single"><span class="single_button btn_blue_new button_new">Phase 3</span><p class="roadmap_illustration__headings_single_phase_title">Scale</p></div>
            <div class="roadmap_illustration__headings_single"><span class="single_button btn_blue_new button_new">Phase 4</span><p class="roadmap_illustration__headings_single_phase_title">Innovate</p></div>
          </div>
          <RoadmapTrack />
          <div class="roadmap_illustration__content">
            <div class="roadmap_illustration__content_single">
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />PacketCrypt Created</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />Mainnet Launch</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />CLI Wallet</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />PKT.Cash Website</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />Electrum Wallet</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />GUI Wallet</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />Community Launch</nuxt-link></p>
            </div>
            <div class="roadmap_illustration__content_single active">
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#RouteServer"><RoadmapCheck />Route Server</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#glossary"><RoadmapCheck />Exchange Listing</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#AnodiumVPN"><RoadmapCheck />Anodium VPN</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#Strike"><RoadmapLoad />Token Strike</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#MiningWallet"><RoadmapCheck />Mining Wallet</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#EdgePointDevice"><RoadmapCheck />Edge Point Device</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#LightningPaymaker"><RoadmapLoad />PKT Lightning</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#Lighting"><RoadmapLoad />Lightning Paymaker</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#WPKTDeFiETH"><RoadmapLoad />WPKT DeFi - ETH</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#WPKTDeFiBSC"><RoadmapCheck />WPKT DeFi - BSC</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#LINKPKTOracles"><RoadmapLoad />LINK/PKT Oracles</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PacketCryptRs"><RoadmapLoad />PacketCryptRs</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PKTNFTs"><RoadmapLoad />PKT NFTs</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to=""><RoadmapCheck />Mobile Wallet</nuxt-link></p>

            </div>
            <div class="roadmap_illustration__content_single">
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PaidVPN"><RoadmapPause />Paid VPN</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#DesktopApp"><RoadmapPause />Desktop App</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#AtomicSwapMarket"><RoadmapPause />Atomic Swap Market</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#AddrLease"><RoadmapPause />AddrLease</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#BandwidthLease"><RoadmapPause />Bandwidth Lease</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PKTVPN"><RoadmapPause />PKT VPN</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#WinCjdns"><RoadmapPause />WinCjdns</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CjdnsPriority"><RoadmapPause />Cjdns Priority</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CjdnsMT"><RoadmapPause />Cjdns MT</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CjdnsDocker"><RoadmapPause />Cjdns Docker</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CjdnsTool"><RoadmapPause />Cjdns Tool</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CustomerBit"><RoadmapPause />Customer Bit</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PKTDEX"><RoadmapPause />PKT DEX</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#SmartContracts"><RoadmapPause />Smart Contracts</nuxt-link></p>

            </div>
            <div class="roadmap_illustration__content_single">
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#FullPaidNet"><RoadmapPause />Full Paid Net</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PaidVPN"><RoadmapPause />Paid VPN</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#VRouterLease"><RoadmapPause />VRouter Lease</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#CjdnsWiFi"><RoadmapPause />Cjdns WiFi</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#PKTCDNBridge"><RoadmapPause />PKT CDN Bridge</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#DappsAPI"><RoadmapPause />Dapps API</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#StreamingAPI"><RoadmapPause />Streaming API</nuxt-link></p>
              <p class="roadmap_illustration__content_single_title"><nuxt-link to="#BandwidthMarket"><RoadmapPause />Bandwidth Market</nuxt-link></p>
            </div>
          </div>
        </div>
			  <div id="mobile"><img src="/img/build-roadmap-updated-2023.svg" alt="Roadmap" /></div>
        <nuxt-link to="#glossary" class="single_button btn_blue_new button_new"><span>{{ $t("build.glossary_link") }}</span></nuxt-link>
      </div>
      <div class="v-roadmap-section-bottom_bg"></div>
    </section>
    <BuildArials/>
    <img class="mobile_illustration" src="/img/build-way.png" alt="Way" />
    <section id="phases_overview" class="v-roadmap-section">
      <div class="container">
        <h2 class="v-roadmap-section-title_h2 dark_gradient">{{ $t("build.phases_title") }}</h2>
        <p class="v-roadmap-section-title_supersmall">{{ $t("build.phases_descr") }}</p>
        <div class="v-roadmap-section_phases_description">
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase1/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">{{ $t("build.phase_1_number") }}</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">{{ $t("build.phase_1_title") }}</h4>
            <p class="v-roadmap-section_phases_description_single_descr">{{ $t("build.phase_1_descr") }}</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase2/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">{{ $t("build.phase_2_number") }}</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">{{ $t("build.phase_2_title") }}</h4>
            <p class="v-roadmap-section_phases_description_single_descr">{{ $t("build.phase_2_descr") }}</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase3/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">{{ $t("build.phase_3_number") }}</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">{{ $t("build.phase_3_title") }}</h4>
            <p class="v-roadmap-section_phases_description_single_descr">{{ $t("build.phase_3_descr") }}</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase4/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">{{ $t("build.phase_4_number") }}</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">{{ $t("build.phase_4_title") }}</h4>
            <p class="v-roadmap-section_phases_description_single_descr">{{ $t("build.phase_4_descr") }}</p>
          </div>
        </div>
        <nuxt-link :to="localePath('letter')" class="single_button btn_blue_new button_new"><span>{{ $t("header.letter") }}</span></nuxt-link>
      </div>
    </section>
    <section class="v-roadmap-section">
      <Phases :list="phases_list" />
    </section>
	  <section id="glossary" class="v-glossary-section dark_section">
      <Glossary :accordion_list="glossary_list" />
    </section>
    <section class="v-roadmap-section">
      <RoadmapSupport />
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import Glossary from "~/components/Build/Glossary";
import RoadmapSupport from "~/components/Build/Support";
import Phases from "~/components/Build/Phases";
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoadmapTrack from "~/components/SVG/RoadmapTrack";
import RoadmapCheck from "~/components/SVG/RoadmapCheck";
import RoadmapPause from "~/components/SVG/RoadmapPause";
import BuildArials from "~/components/SVG/BuildArials";
import Phase1 from "~/components/SVG/Phase1";
import Phase2 from "~/components/SVG/Phase2";
import Phase3 from "~/components/SVG/Phase3";
import Phase4 from "~/components/SVG/Phase4";
export default {
  components: {
    HeaderInternal,
	  Glossary,
    RoadmapSupport,
    Phases
  },
  head() {
    return {
      title: "Build - PKT",
      meta: [{ hid: "description", name: "description", content: "A Network Powered By The People" }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
  data() {
    return {
    phases_list: [
      {
        bg: true,
        utilize: false,
        illustration: "/img/build-launch.png",
        Title: this.$t("build.phase_1_title"),
        subTitle:this.$t("build.phase_block_1_subtitle"),
        content: this.$t("build.phase_block_1_content")
      },
      {
        bg: false,
        utilize: true,
        illustration: "/img/build-utilize.png",
        Title: this.$t("build.phase_2_title"),
        subTitle: this.$t("build.phase_block_2_subtitle"),
        content: this.$t("build.phase_block_2_content")
      },
      {
        bg: true,
        utilize: false,
        illustration: "/img/build-scale.png",
        Title: this.$t("build.phase_3_title"),
        subTitle:this.$t("build.phase_block_3_subtitle"),
        content: this.$t("build.phase_block_3_content")
      },
      {
        bg: false,
        utilize: false,
        illustration: "/img/build-innovate.png",
        Title: this.$t("build.phase_4_title"),
        subTitle: this.$t("build.phase_block_4_subtitle"),
        content: this.$t("build.phase_block_4_content")
      }
    ],
	  glossary_list: [
        {
		      id: "CjdnsTool",
          heading: this.$t("build.glossary_item_heading_01"),
          content: this.$t("build.glossary_item_content_01")
        },
		{
		      id: "CjdnsDocker",
          heading: this.$t("build.glossary_item_heading_02"),
          content: this.$t("build.glossary_item_content_02")
        },
		{
		      id: "Lighting",
          heading: this.$t("build.glossary_item_heading_03"),
          content: this.$t("build.glossary_item_content_03")
        },
		{
		      id: "WinCjdns",
          heading: this.$t("build.glossary_item_heading_04"),
          content: this.$t("build.glossary_item_content_04")
        },
		{
		      id: "CjdnsMT",
          heading: this.$t("build.glossary_item_heading_05"),
          content: this.$t("build.glossary_item_content_05")
        },
		{
		      id: "Strike",
          heading: this.$t("build.glossary_item_heading_06"),
          content: this.$t("build.glossary_item_content_06")
        },
		{
		      id: "AtomicSwapMarket",
          heading: this.$t("build.glossary_item_heading_07"),
          content: this.$t("build.glossary_item_content_07")
        },
		{
		      id: "CjdnsWiFi",
          heading: this.$t("build.glossary_item_heading_08"),
          content: this.$t("build.glossary_item_content_08")
        },
		{
		      id: "PKTVPN",
          heading: this.$t("build.glossary_item_heading_09"),
          content: this.$t("build.glossary_item_content_09")
        },
		{
		      id: "CjdnsPriority",
          heading: this.$t("build.glossary_item_heading_10"),
          content: this.$t("build.glossary_item_content_10")
        },
		{
		      id: "BandwidthLease",
          heading: this.$t("build.glossary_item_heading_11"),
          content: this.$t("build.glossary_item_content_11")
        },
		{
		      id: "AddrLease",
          heading: this.$t("build.glossary_item_heading_12"),
          content: this.$t("build.glossary_item_content_12") 
        },
		{
		      id: "DesktopApp",
          heading: this.$t("build.glossary_item_heading_13"),
          content: this.$t("build.glossary_item_content_13")
        },
		{
		      id: "LightningPaymaker",
          heading: this.$t("build.glossary_item_heading_14"),
          content: this.$t("build.glossary_item_content_14")
        },
		{
		      id: "MiningWallet",
          heading: this.$t("build.glossary_item_heading_15"),
          content: this.$t("build.glossary_item_content_15")
        },
		{
		      id: "EdgePointDevice",
          heading: this.$t("build.glossary_item_heading_16"),
          content: this.$t("build.glossary_item_content_16")
        },
		{
		      id: "VRouterLease",
          heading: this.$t("build.glossary_item_heading_17"),
          content: this.$t("build.glossary_item_heading_17")
        },
		{
		      id: "PaidVPN",
          heading: this.$t("build.glossary_item_heading_18"),
          content: this.$t("build.glossary_item_heading_18")
        },
		{
		      id: "PaidAccess",
          heading: this.$t("build.glossary_item_heading_19"),
          content: this.$t("build.glossary_item_heading_19")
        },
		{
		      id: "FullPaidNet",
          heading: this.$t("build.glossary_item_heading_20"),
          content: this.$t("build.glossary_item_heading_20")
        },
		{
		      id: "PacketCryptRs",
          heading: this.$t("build.glossary_item_heading_21"),
          content: this.$t("build.glossary_item_heading_21")
        },
		{
		      id: "RouteServer",
          heading: this.$t("build.glossary_item_heading_22"),
          content: this.$t("build.glossary_item_heading_22")
        },
		{
		      id: "AnodiumVPN",
          heading: this.$t("build.glossary_item_heading_23"),
          content: this.$t("build.glossary_item_heading_23")
        },
		{
		      id: "WPKTDeFiETH",
          heading: this.$t("build.glossary_item_heading_24"),
          content: this.$t("build.glossary_item_heading_24")
        },
		{
		      id: "WPKTDeFiBSC",
          heading: this.$t("build.glossary_item_heading_25"),
          content: this.$t("build.glossary_item_heading_25")
        },
		{
		      id: "LINKPKTOracles",
          heading: this.$t("build.glossary_item_heading_26"),
          content: this.$t("build.glossary_item_heading_26")
        },
		{
		      id: "PKTNFTs",
          heading: this.$t("build.glossary_item_heading_27"),
          content: this.$t("build.glossary_item_heading_27")
        },
		{
		      id: "CustomerBit",
          heading: this.$t("build.glossary_item_heading_28"),
          content: this.$t("build.glossary_item_heading_28")
        },
		{
		      id: "PKTDEX",
          heading: this.$t("build.glossary_item_heading_29"),
          content: this.$t("build.glossary_item_heading_29")
        },
		{
		      id: "SmartContracts",
          heading: this.$t("build.glossary_item_heading_30"),
          content: this.$t("build.glossary_item_heading_30")
        },
		{
		      id: "PKTCDNBridge",
          heading: this.$t("build.glossary_item_heading_31"),
          content: this.$t("build.glossary_item_heading_31")
        },
		{
		      id: "DappsAPI",
          heading: this.$t("build.glossary_item_heading_32"),
          content: this.$t("build.glossary_item_heading_32")
        },
		{
		      id: "StreamingAPI",
          heading: this.$t("build.glossary_item_heading_33"),
          content: this.$t("build.glossary_item_heading_33")
        },
		{
		      id: "BandwidthMarket",
          heading: this.$t("build.glossary_item_heading_34"),
          content: this.$t("build.glossary_item_heading_34")
        },
	  ]
    };
  },
};
</script>

<style lang="scss">
.v-build {
  & .v-header-section {
    .c-internal-header {
      @include for-width(-small-lg) {
        padding:rem(75) 0 rem(50);
      }
      &__sub-title {
        @include for-width(-small-lg) {
          margin:0 rem(40) rem(20);
        }
      }
      &__text {
        @include for-width(-small-lg) {
          max-width: 100%;
        }
      }
      &__links {
        width: 40%;
        margin: rem(50) auto 0;
        @include for-width(-desktop-medium) {
          width: 45%;
        }
        @include for-width(-laptop) {
          width: 50%;
        }
        @include for-width(-tablet-lg) {
          width: 100%;
        }
        @include for-width(-small-lg) {
          display: -webkit-flex;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          justify-content: center;
          -ms-align-items: center;
          align-items: center;
        }
        & .button_new {
          padding: rem(12) 0;
          width:45%;
          margin:0 rem(10);
          @include for-width(-tablet-lg) {
            max-width: rem(225);
          }
          @include for-width(-small-lg) {
            width:49%;
            margin:0 rem(5);
            padding: rem(10) 0;
          }
        }
      }
    }
  }
}
.v-roadmap-section {
  @extend %t-center;
  position: relative;
  & .container {
    @extend %container_new;
    @include for-width(-tablet) {
      max-width:100%;
      width:100%;
      padding:0 rem(25);
    }
    @include for-width(-small-lg) {
      padding:0 rem(20);
    }
  }
  &-title_h2 {
    @extend %heading_internal;
    @extend %heading-gradient-light;
    padding:rem(50) 0 rem(50);
    @include for-width(-small-lg) {
      font-size: rem(40);
      line-height: rem(50);
      padding:rem(15) 0;
    }
  }
  .dark_gradient {
    @extend %heading-gradient-dark;
  }
  &-title_supersmall {
    @extend %heading-super-small;
    color:$black_new;
    text-transform:initial;
    max-width:60%;
    margin:0 auto;
    @include for-width(-small-lg) {
      max-width:100%;
    }
  }
  #mobile {
    display:none;
    @include for-width(-small-lg) {
      display:block;
      width:100%;
    }
    img {
      width:100%;
    }
  }
  #desktop {
    display:none;
    @include for-width(+small-lg) {
      display:block;
    }
  }
  &-bottom_bg {
    background-image:url(/img/build-roadmap-bottom-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: -100px;
    z-index: -1;
    background-position: bottom center;
    @include for-width(-tablet) {
      height: rem(75);
      bottom: -75px;
    }
  }
  &_phases_description {
		@extend %df;
		@extend %fw;
		@extend %jcsb;
		padding:rem(50) 0 0;
		@include for-width(+desktop-hg) {
			padding:rem(50) 0 rem(100);
		}
		@include for-width(-small-lg) {
			display:block;
		}
		&_single {
			width: calc(25% - 24px);
			flex: 1 1 auto;
			margin:	0 12px;
      padding: rem(25) rem(35) rem(35);
			@include for-width(+desktop-lg) {
				padding: rem(30) rem(35) rem(45);
			}
			@include for-width(-laptop) {
				padding: 0;
			}
			@include for-width(-small-lg) {
				width:100%;
				margin:	0 0 rem(35);
			}
      &_img {
        background: $light_bg;
        border-radius:50%;
        margin:0 auto rem(20);
        height:rem(125);
        width:rem(125);
        position:relative;
        @extend %df;
        @extend %jcc;
        @extend %aic;
        svg {
          max-width:rem(60);
        }
      }
      &_number {
        @extend %heading-small;
        @extend %semibold;
        margin-bottom:rem(5);
        @include for-width(-small-lg) {
          margin-bottom:rem(15);
        }
      }
			&_title {
				@extend %semibold;
				@extend %pn;
				margin-bottom:rem(10);
				@include for-width(-laptop) {
					font-size:rem(16);
				}
			}
			&_descr {
				@extend %pn;
        @include for-width(-small-lg) {
          max-width:65%;
          margin:0 auto;
        }
			}
		}
	}
  & .single_button {
    @extend %btn-new;
    @extend %btn_blue_new;
    display:block;
    margin:rem(50) auto 0;
    @include for-width(-small-lg) {
      margin:rem(25) auto 0;
      padding:rem(10) rem(25);
      display:inline-block;
    }
  }
  & .roadmap_illustration {
    &__headings {
      @extend %df;
      @extend %jcsb;
      @extend %aic;
      @include for-width(+desktop-medium-default) {
        padding:0 rem(25);
      }
      @include for-width(+desktop-lg) {
        padding:0 rem(50);
      }
      &_single {
        width:25%;
        @extend %t-center;
        &_phase_title {
          @extend %semibold;
				  @extend %heading-small;
          color:$white;
          margin:rem(24) 0 rem(20);
          @include for-width(-tablet) {
            margin-bottom:0;
          }
        }
        & .single_button {
          @include for-width(-tablet) {
            width:90%;
          }
        }
      }
    }
    &__content {
      @extend %df;
      @extend %jcsb;
      @extend %ais;
      margin-top:-33px;
      position:relative;
      z-index:1;
      @include for-width(+desktop-medium-default) {
        padding:0 rem(15);
      }
      @include for-width(+desktop-lg) {
        padding:0 rem(35);
      }
      @include for-width(-desktop-medium-default) {
        padding:0;
      }
      &_single {
        width:25%;
        @extend %t-left;
        padding:rem(40) 0 rem(25) rem(75);
        @include for-width(-desktop-medium-default) {
          padding:rem(40) 0 rem(25) rem(50);
        }
        @include for-width(-laptop) {
          padding:rem(35) rem(25) rem(25);
        }
        @include for-width(-tablet) {
          padding:rem(25) rem(15) rem(20);
        }
        &_title {
          & a {
            @extend %regular;
            @extend %pn;
            color:$white;
            @include for-width(-tablet) {
              font-size: rem(12);
              line-height: rem(20);
            }
            & svg {
              @extend %dib;
              width:rem(16);
              vertical-align:middle;
              margin-right:rem(10);
              @include for-width(-tablet) {
                width:rem(14);
                margin-right:rem(5);
              }
            }
          }
        }
      }
      & .active {
        background: linear-gradient(0deg, #3688C8 47.86%, rgba(27, 11, 62, 0.8) 95.72%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        border-radius: 0px 0px 20px 20px;
      }
    }
    & svg {
      width:100%;
      position:relative;
      z-index:2;
    }
  }
}
#phases_overview {
  padding-bottom:rem(75);
  @include for-width(-small-lg) {
    padding-bottom:rem(35);
  }
  & .single_button {
    margin-top:0;
    @include for-width(-small-lg) {
      padding:rem(10) rem(25);
    }
  }
}
.dark_section {
  background-color:$dark_blue_new;
}
#roadmap {
  margin-bottom: rem(100);
  padding-top:rem(50);
  @include for-width(-tablet) {
    margin-bottom: rem(75);
  }
  @include for-width(-tablet) {
    padding-top:rem(35);
  }
  @include for-width(-small-lg) {
    padding-top:0;
  }
  & .v-roadmap-section-title_h2 {
    padding-bottom:0;
  }
  #desktop {
    & #Rectangle_34 {
      fill: #141738;
    }
  }
}
.mobile_illustration {
  display:none;
  @include for-width(-small-lg) {
    display:block;
  }
}
#arials {
  @include for-width(-small-lg) {
    display:none;
  }
}
.c-roadmap-support {
  @include for-width(-small-lg) {
    padding: rem(50) rem(20);
  }
  .container {
    @include for-width(-small-lg) {
      padding:0;
    }
  }
}
</style>