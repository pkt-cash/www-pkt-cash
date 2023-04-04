<template>
  <div class="v-build">
    <section class="v-header-section">
      <HeaderInternal
      :title="this.$t('header.build')" 
      :subtitle="this.$t('build.subtitle')" 
      :text="this.$t('build.text')" 
      :button_1="this.$t('build.button_1')" 
      :button_2="this.$t('build.button_2')"
      button_1_link="/network-steward"
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
        <nuxt-link to="#glossary" class="single_button btn_blue_new button_new"><span>Glossary of Terms</span></nuxt-link>
      </div>
      <div class="v-roadmap-section-bottom_bg"></div>
    </section>
    <BuildArials/>
    <img class="mobile_illustration" src="/img/build-way.png" alt="Way" />
    <section id="phases_overview" class="v-roadmap-section">
      <div class="container">
        <h2 class="v-roadmap-section-title_h2 dark_gradient">The Four Phases</h2>
        <p class="v-roadmap-section-title_supersmall">Phases are listed in order, with the items having the fewest dependencies first. This is not the order the roadmap will be executed, because projects that bring valuable capabilities to the PKT community should be completed first.</p>
        <div class="v-roadmap-section_phases_description">
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase1/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">Phase 1</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">Launch</h4>
            <p class="v-roadmap-section_phases_description_single_descr">Launch the PKT blockchain and begin bandwidth-hard mining using PacketCrypt.</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase2/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">Phase 2</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">Utilize</h4>
            <p class="v-roadmap-section_phases_description_single_descr">Utilize technology use cases including VPN bandwidth leasing, tokenized bandwidth, DeFi, and connecting PKT to cjdns.</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase3/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">Phase 3</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">Scale</h4>
            <p class="v-roadmap-section_phases_description_single_descr">Scale low cost internet sharing, introduce first Cloud ISPs, and enable high speed transactions in and out of PKT using Lightning Network.</p>
          </div>
          <div class="v-roadmap-section_phases_description_single">
            <div class="v-roadmap-section_phases_description_single_img"><Phase4/></div>
            <h4 class="v-roadmap-section_phases_description_single_number">Phase 4</h4>
            <h4 class="v-roadmap-section_phases_description_single_title">Innovate</h4>
            <p class="v-roadmap-section_phases_description_single_descr">Innovate on Cloud ISP commercialization, getting on the internet without a traditional ISP, and selling tokenize bandwidth into a bandwidth trading marketplace.</p>
          </div>
        </div>
        <nuxt-link to="/letter" class="single_button btn_blue_new button_new"><span>Letter From CJD</span></nuxt-link>
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
      title: this.$t("build.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("build.meta_descr") }],
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
        Title: "Launch",
        subTitle:"Bandwidth Mining",
        content: "PacketCrypt was created and the mainnet PKT blockchain was launched in August 2019. Phase 1 focused on community growth, building out network infrastructure and unifying around PacketCrypt and bandwidth-hard mining. Major developments include multiple PKT wallets, community engagement via PKT Chat, the project task tracker, Network Steward and informational websites."
      },
      {
        bg: false,
        utilize: true,
        illustration: "/img/build-utilize.png",
        Title: "Utilize",
        subTitle:"Tokenized Bandwidth Leases",
        content: "Anyone who wants to use a VPN, create their own, or mine PKT will easily be able to do so via Anodium VPN. Technology development includes Token Strike, to issue tokens in the PKT ecosystem for near zero cost and without gas fees, a DeFi bridge between PKT, Ethereum and Binance Smart Chain, bandwidth lease function and infrastructure via cjdns, and an Edge Point Device to easily mine PacketCrypt and get on the internet via your neighbor."
      },
      {
        bg: true,
        utilize: false,
        illustration: "/img/build-scale.png",
        Title: "Scale",
        subTitle:"Support Internet Sharing",
        content: "The alpha implementation the virtual Cloud ISP provides the ability to trade, aggregate, of and access tokenized bandwidth leases via cjdns. People can get on the internet via their neighbor with no privacy risk because all data is sent to a VPN. The Atomic Swap Market can transact in and out of PKT with high speed, low cost transactions between Lightning Network enabled coins such as PKT, Bitcoin, Litecoin and Ethereum. Desktop and mobile apps provide easy functionality across devices worldwide."
      },
      {
        bg: false,
        utilize: false,
        illustration: "/img/build-innovate.png",
        Title: "Innovate",
        subTitle:"Virtual ISPs",
        content: "The commercial expansion of Cloud ISPs signifies a healthy and active bandwidth market. People can lease bandwidth allotment guarantees and access the internet without using a traditional ISP. PKT Priority provides internet access with a minimum price free if there is available bandwidth. This will simplify local mesh of networking by moving the network engineering component to the Cloud ISP. The stateless switch design central in the cjdns protocol will not only set new records for router performance/cost ratio, but will also allow for hundreds or even thousands of Cloud ISPs to send data through a single device, each according to their own routing policy."
      }
    ],
	  glossary_list: [
        {
		      id: "CjdnsTool",
          heading: "CjdnsTool",
          content: "This project will aid in cjdns node operation, the key objective though is to integrate with the vpn-api to simplify setting up a VPN using cjdns. Adding this capability plus CjdnsDocker will open the door to an easy to use VPN solution (PKT VPN)."
        },
		{
		      id: "CjdnsDocker",
          heading: "CjdnsDocker",
          content: "This adds the ability to easily run a cjdns VPN exit and specify a name for the VPN exit."
        },
		{
		      id: "Lighting",
          heading: "PKT Lightning",
          content: "Smooth transition for people with existing PKT wallet instances to import their wallet to PLD. All functionality works as well as with LND so Pkteers are able to pay each other via the Lightning Network."
        },
		{
		      id: "WinCjdns",
          heading: "WinCjdns",
          content: "Complete the ongoing work on wintun and fixes UNIX socket usage to support windows."
        },
		{
		      id: "CjdnsMT",
          heading: "CjdnsMT",
          content: "Provides multi-threaded cjdns, Tokio based UDP+ETH+TUN Interface, Rust InterfaceController, Rust SessionManager, and ability to process multiple packets at the same time from/to the same node."
        },
		{
		      id: "Strike",
          heading: "Token Strike",
          content: "Development of a unique token protocol for PKT. Enables the ability to issue tokens and swap them for other tokens as well as for PKT with near-zero issuances and no gas fees."
        },
		{
		      id: "AtomicSwapMarket",
          heading: "Atomic Swap Market",
          content: "Decentralized gossipped orderbook for atomic swapped assets with similarities to OpenDEX."
        },
		{
		      id: "CjdnsWiFi",
          heading: "Cjdns WiFi",
          content: "Auto-connect cjdns over wifi on Linux, Android, iOS, MacOS and Windows using the wifi encryption (WPA Enterprise) in place of cjdns encryption."
        },
		{
		      id: "PKTVPN",
          heading: "PKT VPN",
          content: "Pkteers will be able to setup a VPN exit using simple docker commands. VPN exits can be private for friends and family, or public using cjdns.<i><br />**Requires:<br />*CjdnsTool<br />*CjdnsDocker</i>"
        },
		{
		      id: "CjdnsPriority",
          heading: "CjdnsPriority",
          content: "Enables available bandwidth measurement, MTU measurement, HTB based priority levels for bandwidth lease and packet priority. Introduce customer bit and backoff on latency increase to drop packets if needed.<i><br />**Requires:<br />*CjdnsMT</i>"
        },
		{
		      id: "BandwidthLease",
          heading: "BandwidthLease",
          content: "Ability to sell bandwidth leases in cjdns and inform route server why packets were dropped. Until VRouter Lease is completed, this will only allow bandwidth leases to be allocated to cjdns peers or to VPN sessions.<i><br />**Requires:<br /> *Token Strike<br /> *AtomicS wap Market<br /> *CjdnsPriority</i>"
        },
		{
		      id: "AddrLease",
          heading: "AddrLease",
          content: "Ability to lease IP addresses in the marketplace. A holder of an IP address lease is able to use that address in a VPN.<i><br />**Requires:<br />*CjdnsMT<br />*Token Strike<br />*Atomic Swap Market</i>"
        },
		{
		      id: "DesktopApp",
          heading: "Desktop App",
          content: "App UI containing the basic ability to transact PKT and setup cjdns VPNs on Windows/Mac/Linux.<i><br />**Requires:<br />*PKT Lightning<br />*PktVpn<br />*WinCjdns</i>"
        },
		{
		      id: "LightningPaymaker",
          heading: "Lightning Paymaker",
          content: "New paymaker for PacketCrypt mining pools written in Rust and included in the packetcrypt_rs repository. Pays via ordinary payouts or via lightning invoices at the request of the miner. Pool fee is defined as a configuration parameter. Update of miner to request payment via Lightning Network.<i><br />**Requires:<br />*PKT Lightning</i>"
        },
		{
		      id: "MiningWallet",
          heading: "Mining Wallet",
          content: "Integration of PacketCrypt announcement miner into the PKT Wallet and PKT Electrum. Ability to create invoices to clear your balance with the Lightning Paymaker. Mining pools serve as Lightning Network hubs from which the network grows.<i><br />**Requires:<br />*Lightning Paymaker<br />*PKT Lightning</i>"
        },
		{
		      id: "EdgePointDevice",
          heading: "Edge Point Device",
          content: "Ability to connect to a wifi device and get on the PKT Network. Enables the ability to use the PKT Network to reach your VPN exit of choice.<i><br />**Requires:<br />*PKT VPN<br />*CjdnsWifi</i>"
        },
		{
		      id: "VRouterLease",
          heading: "VRouter Lease",
          content: "Ability to sell/configure virtual routers in cjdns. This expands bandwidth lease functionality to allow interconnection of different bandwidth leases making a virtual network. VRouter Lease depends on CjdnsMT because it will be a significant reworking of the cjdns internals.<i><br />**Requires:<br />*CjdnsMT<br />*BandwidthLease<br />*Token Strike<br />*Atomic Swap Market</i>"
        },
		{
		      id: "PaidVPN",
          heading: "Paid VPN",
          content: "Ability to use VPN while leasing all relevant assets for that VPN including the bandwidth on the VPN exit as well as the IP addresses. This assumes that you already have an internet connection which allows you to reach the VPN exit.<i><br />**Requires:<br />*Desktop App<br />*AddrLease<br />*BandwidthLease</i>"
        },
		{
		      id: "PaidAccess",
          heading: "Paid Access",
          content: "This means everything you need to get from an *internet-connected* Edge Point to the VPN exit is paid for, but still this does not include paying for each network link within a real mesh network.<i><br />**Requires:<br />*Edge Point Device<br />*Paid VPN</i>"
        },
		{
		      id: "FullPaidNet",
          heading: "Full Paid Net",
          content: "This adds the ability to get on the internet through a virtual network operated by a Cloud ISP which runs on top of a mesh network. No part of that mesh network truly needs to be internet-connected, though it is likely that there will be an internet gateway at some point in that network which then takes the bandwidth to the VPN exit.<i><br />**Requires:<br />*Paid Access<br />*VRouter Lease</i>"
        },
		{
		      id: "PacketCryptRs",
          heading: "PacketCryptRs",
          content: "This adds further improvements to the PacketCrypt PoW which will lower the barrier of entry for people starting new mining pools. Currently a pool needs a significant number of announcement handlers. Adding announcement handlers is difficult, and there is significant tuning necessary to choose between ann handler and block miner threads. This project is not strictly needed in order to move through the roadmap, but it will benefit the overall PKT project nonetheless. This project will unify the announcement handler and block miner so that they smoothly share threads and the announcement handler takes priority, rewrite the the pool master in Rust and make it accept new announcement handlers registering (and unregistering) themselves, and make the announcement handler support proxying announcement requests for another handler in order to support operation over multiple networks."
        },
		{
		      id: "RouteServer",
          heading: "Route Server",
          content: "A cjdns wireguard for encryption in the PKT network. This enables a special broadcasting network and protocol that can be used for building decentralized VPN services."
        },
		{
		      id: "AnodiumVPN",
          heading: "Anodium VPN",
          content: "This will consist of a VPN server, and client Android app designed for VPN operators who want to create a VPN server that routes traffic on the cjdns network. The server will allow inbound connections, will give a virtual IP address, and route traffic for VPN consumers who want to connect to VPNs from their phone. The app will list and suggest VPN servers that support cjdns and will allow users to select and connect to these VPN servers. This will encourage adoption and utility of the PKT Network and cjdns."
        },
		{
		      id: "WPKTDeFiETH",
          heading: "WPKT DeFi ETH",
          content: "Enables 1:1 swap from 1PKT to WPKT or WPKT to 1PKT, including Metamask integration for WPKT. Users will choose whether to swap ETH to wPKT or wPKT to ETH through a DApp after paying gas fees to interact with the smart contract. WPKT will initially have liquidity on Uniswap pool."
        },
		{
		      id: "WPKTDeFiBSC",
          heading: "WPKT DeFi BSC",
          content: "This integration will provide a swap between WPKT and Binance Smart Chain for liquidity on Pancake Swap. "
        },
		{
		      id: "LINKPKTOracles",
          heading: "LINK/PKT Oracles",
          content: "Smart contract integration with Chainlink to verify PKT transactions for swaps to/from WPKT."
        },
		{
		      id: "PKTNFTs",
          heading: "PKT NFTs",
          content: "Token Strike protocol will include a feature to issue NFTs without gas fees. PKT NFTs will be held in a PKT wallet."
        },
		{
		      id: "CustomerBit",
          heading: "Customer Bit",
          content: "This is used to indicate that the bandwidth lease in question connects the network either to a peer or a provider."
        },
		{
		      id: "PKTDEX",
          heading: "PKT DEX",
          content: "Cross-chain decentralized exchange for high speed swaps built on the Lightning Network."
        },
		{
		      id: "SmartContracts",
          heading: "Smart Contracts",
          content: "Allowing users to interact with the smart contracts."
        },
		{
		      id: "PKTCDNBridge",
          heading: "PKT CND Bridge",
          content: "Optimized software defined networking for content delivery of video streaming, delivery and integration with 3rd party CND infrastructure."
        },
		{
		      id: "DappsAPI",
          heading: "Dapps API",
          content: "API for deploying 3rd party Dapps in PKT Network ecosystem."
        },
		{
		      id: "StreamingAPI",
          heading: "Streaming API",
          content: "Utility use case to power 3rd party streaming services using PKT Network high speed data transmission."
        },
		{
		      id: "BandwidthMarket",
          heading: "Bandwidth Market",
          content: "Bandwidth tokens will be able to be bought and sold by different participants and anyone in possession of those tokens. To make this possible, we will need a decentralized bandwidth marketplace with near-zero-cost token issuance and nearly frictionless exchange."
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