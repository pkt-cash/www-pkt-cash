<template>
  <div id="roadmap-page" class="v-roadmap">
    <section class="v-roadmap-section">
      <SimpleHeader :cta_title="this.$t('roadmap.glossary_heading')"
      />
    </section>
    <section class="v-roadmap-section">
      <RoadmapIs />
    </section>
    <section class="v-roadmap-section">
      <Advantage :list="advantage_list" />
    </section>
	<section id="glossary" class="v-glossary-section">
      <Glossary :accordion_list="glossary_list" />
    </section>
    <section class="v-roadmap-section">
      <RoadmapSupport />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Roadmap/SimpleHeader";
import RoadmapIs from "~/components/Roadmap/RoadmapIs";
import Glossary from "~/components/Roadmap/Glossary";
import Advantage from "~/components/Advantage";
import RoadmapSupport from "~/components/Roadmap/Support";

export default {
  components: {
    SimpleHeader,
    RoadmapIs,
	Glossary,
    Advantage,
    RoadmapSupport,
  },
  head() {
    return {
      title: this.$t("roadmap.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("home.meta_descr") }],
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
      advantage_list: [
        {
		      upTitle: this.$t("roadmap.phase_1_pre"),
          title: this.$t("roadmap.phase_1_title"),
          subTitle: this.$t("roadmap.phase_1_subtitle"),
          text:this.$t("roadmap.phase_1_text"),
          img: "/img/advantage/stage-2.jpg",
          mobile_img: "/img/advantage/stage-2-mobile.jpg",
          aligh: true,
          colorBlue: true,
          textSVG: false,
		      aId: "phase_1",
        },
        {
		      upTitle: this.$t("roadmap.phase_2_pre"),
          title: this.$t("roadmap.phase_2_title"),
          subTitle: this.$t("roadmap.phase_2_subtitle"),
          text:this.$t("roadmap.phase_2_text"),
          img: "/img/advantage/stage-1.png",
          mobile_img: "/img/advantage/stage-1-mobile.png",
          aligh: false,
          colorBlue: true,
          textSVG: false,
		      aId: "phase_2",
        },
        {
		      upTitle: this.$t("roadmap.phase_3_pre"),
          title: this.$t("roadmap.phase_3_title"),
          subTitle: this.$t("roadmap.phase_3_subtitle"),
          text:this.$t("roadmap.phase_3_text"),
          img: "/img/advantage/stage-4.png",
          mobile_img: "/img/advantage/stage-4-mobile.png",
          aligh: true,
          colorBlue: true,
          textSVG: false,
		      aId: "phase_3",
        },
        {
		      upTitle: this.$t("roadmap.phase_4_pre"),
          title: this.$t("roadmap.phase_4_title"),
          subTitle: this.$t("roadmap.phase_4_subtitle"),
          text:this.$t("roadmap.phase_4_text"),
          btnText: this.$t("roadmap.phase_4_button"),
		      img: "/img/advantage/stage-3.png",
          mobile_img: "/img/advantage/stage-3-mobile.png",
          btnLink: '/origin-story',
          aligh: false,
          colorBlue: true,
          textSVG: false,
		      aId: "phase_4",
        },
      ],
	  glossary_list: [
        {
		  id: "CjdnsTool",
          heading: this.$t("roadmap.glossary_item_heading_01"),
          content: this.$t("roadmap.glossary_item_content_01")
        },
		  {
		  id: "CjdnsDocker",
          heading: this.$t("roadmap.glossary_item_heading_02"),
          content: this.$t("roadmap.glossary_item_content_02")
        },
		  {
		  id: "Lighting",
          heading: this.$t("roadmap.glossary_item_heading_03"),
          content: this.$t("roadmap.glossary_item_content_03")
      },
		  {
		  id: "WinCjdns",
          heading: this.$t("roadmap.glossary_item_heading_04"),
          content: this.$t("roadmap.glossary_item_content_04")
        },
		{
		  id: "CjdnsMT",
          heading: this.$t("roadmap.glossary_item_heading_05"),
          content: this.$t("roadmap.glossary_item_content_05")
        },
		{
		  id: "Strike",
          heading: this.$t("roadmap.glossary_item_heading_06"),
          content: this.$t("roadmap.glossary_item_content_06")
        },
		{
		  id: "AtomicSwapMarket",
          heading: this.$t("roadmap.glossary_item_heading_07"),
          content: this.$t("roadmap.glossary_item_content_07")
        },
		{
		  id: "CjdnsWiFi",
          heading: this.$t("roadmap.glossary_item_heading_08"),
          content: this.$t("roadmap.glossary_item_content_08")
        },
		{
		  id: "PKTVPN",
          heading: this.$t("roadmap.glossary_item_heading_09"),
          content: this.$t("roadmap.glossary_item_content_09")
        },
		{
		  id: "CjdnsPriority",
          heading: this.$t("roadmap.glossary_item_heading_10"),
          content: this.$t("roadmap.glossary_item_content_10")
        },
		{
		  id: "BandwidthLease",
          heading: this.$t("roadmap.glossary_item_heading_11"),
          content: this.$t("roadmap.glossary_item_content_11")
        },
		{
		  id: "AddrLease",
          heading: this.$t("roadmap.glossary_item_heading_12"),
          content: this.$t("roadmap.glossary_item_content_12")
        },
		{
		  id: "DesktopApp",
          heading: this.$t("roadmap.glossary_item_heading_13"),
          content: this.$t("roadmap.glossary_item_content_13")
        },
		{
		  id: "LightningPaymaker",
          heading: this.$t("roadmap.glossary_item_heading_14"),
          content: this.$t("roadmap.glossary_item_content_14")
        },
		{
		  id: "MiningWallet",
          heading: this.$t("roadmap.glossary_item_heading_15"),
          content: this.$t("roadmap.glossary_item_content_15")
        },
		{
		  id: "EdgePointDevice",
          heading: this.$t("roadmap.glossary_item_heading_16"),
          content: this.$t("roadmap.glossary_item_content_16")
        },
		{
		  id: "VRouterLease",
          heading: this.$t("roadmap.glossary_item_heading_17"),
          content: this.$t("roadmap.glossary_item_content_17")
        },
		{
		  id: "PaidVPN",
          heading: this.$t("roadmap.glossary_item_heading_18"),
          content: this.$t("roadmap.glossary_item_content_18")
        },
		{
		  id: "PaidAccess",
          heading: this.$t("roadmap.glossary_item_heading_19"),
          content: this.$t("roadmap.glossary_item_content_19")
        },
		{
		  id: "FullPaidNet",
          heading: this.$t("roadmap.glossary_item_heading_20"),
          content: this.$t("roadmap.glossary_item_content_20")
        },
		{
		  id: "PacketCryptRs",
          heading: this.$t("roadmap.glossary_item_heading_21"),
          content: this.$t("roadmap.glossary_item_content_21")
        },
		{
		  id: "RouteServer",
          heading: this.$t("roadmap.glossary_item_heading_22"),
          content: this.$t("roadmap.glossary_item_content_22")
        },
		{
		  id: "AnodiumVPN",
          heading: this.$t("roadmap.glossary_item_heading_23"),
          content: this.$t("roadmap.glossary_item_content_23")
        },
		{
		  id: "WPKTDeFiETH",
          heading: this.$t("roadmap.glossary_item_heading_24"),
          content: this.$t("roadmap.glossary_item_content_24")
        },
		{
		  id: "WPKTDeFiBSC",
          heading: this.$t("roadmap.glossary_item_heading_25"),
          content: this.$t("roadmap.glossary_item_content_25")
        },
		{
		  id: "LINKPKTOracles",
          heading: this.$t("roadmap.glossary_item_heading_26"),
          content: this.$t("roadmap.glossary_item_content_26")
        },
		{
		  id: "PKTNFTs",
          heading: this.$t("roadmap.glossary_item_heading_27"),
          content: this.$t("roadmap.glossary_item_content_27")
        },
		{
		  id: "CustomerBit",
          heading: this.$t("roadmap.glossary_item_heading_28"),
          content: this.$t("roadmap.glossary_item_content_28")
        },
		{
		  id: "PKTDEX",
          heading: this.$t("roadmap.glossary_item_heading_29"),
          content: this.$t("roadmap.glossary_item_content_29")
        },
		{
		  id: "SmartContracts",
          heading: this.$t("roadmap.glossary_item_heading_30"),
          content: this.$t("roadmap.glossary_item_content_30")
        },
		{
		  id: "PKTCDNBridge",
          heading: this.$t("roadmap.glossary_item_heading_31"),
          content: this.$t("roadmap.glossary_item_content_31")
        },
		{
		  id: "DappsAPI",
          heading: this.$t("roadmap.glossary_item_heading_32"),
          content: this.$t("roadmap.glossary_item_content_32")
        },
		{
		  id: "StreamingAPI",
          heading: this.$t("roadmap.glossary_item_heading_33"),
          content: this.$t("roadmap.glossary_item_content_33")
        },
		{
		  id: "BandwidthMarket",
          heading: this.$t("roadmap.glossary_item_heading_34"),
          content: this.$t("roadmap.glossary_item_content_34")
        },
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
.c-advantage__up {
	@extend %h3-title;
	color: #3cadef;
    margin-bottom: -10px;
}
.v-roadmap-section .c-advantage .c-advantage__text {
    @include for-width(-tablet) {
      margin-top: 40vw;
    }
  }
</style>
