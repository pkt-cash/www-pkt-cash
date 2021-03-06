<template>
  <div id="roadmap-page" class="v-roadmap">
    <section class="v-roadmap-section">
      <SimpleHeader
		cta_title="Glossary of Terms"
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
      title: "Roadmap - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
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
		  upTitle: "Phase 1",
          title: "Launch",
          subTitle: "Bandwidth Mining",
          text:
            "PacketCrypt was created and the mainnet PKT blockchain was launched in August 2019. Phase 1 focused on community growth, building out network infrastructure and unifying around PacketCrypt and bandwidth-hard mining. Major developments include multiple PKT wallets, community engagement via PKT Chat, the project task tracker, Network Steward and informational websites.",
          img: "/img/advantage/stage-2.jpg",
          mobile_img: "/img/advantage/stage-2-mobile.jpg",
          aligh: true,
          colorBlue: true,
          textSVG: false,
		  aId: "phase_1",
        },
        {
		  upTitle: "Phase 2",
          title: "Utilize",
          subTitle: "Tokenized Bandwidth Leases",
          text:
            "Anyone who wants to use a VPN, create their own, or mine PKT will easily be able to do so via Anodium VPN. Technology development includes Token Strike, to issue tokens in the PKT ecosystem for near zero cost and without gas fees, a DeFi bridge between PKT, Ethereum and Binance Smart Chain, bandwidth lease function and infrastructure via cjdns, and an Edge Point Device to easily mine PacketCrypt and get on the internet via your neighbor.",
		  img: "/img/advantage/stage-1.png",
          mobile_img: "/img/advantage/stage-1-mobile.png",
          aligh: false,
          colorBlue: true,
          textSVG: false,
		  aId: "phase_2",
        },
        {
		  upTitle: "Phase 3",
          title: "Scale",
          subTitle: "Support Internet Sharing",
          text:
            "The alpha implementation the virtual Cloud ISP provides the ability to trade, aggregate, of and access tokenized bandwidth leases via cjdns. People can get on the internet via their neighbor with no privacy risk because all data is sent to a VPN. The Atomic Swap Market can transact in and out of PKT with high speed, low cost transactions between Lightning Network enabled coins such as PKT, Bitcoin, Litecoin and Ethereum. Desktop and mobile apps provide easy functionality across devices worldwide.",
          img: "/img/advantage/stage-4.png",
          mobile_img: "/img/advantage/stage-4-mobile.png",
          aligh: true,
          colorBlue: true,
          textSVG: false,
		  aId: "phase_3",
        },
        {
		  upTitle: "Phase 4",
          title: "Innovate",
          subTitle: "Virtual ISPs",
          text:
            "The commercial expansion of Cloud ISPs signifies a healthy and active bandwidth market. People can lease bandwidth allotment guarantees and access the internet without using a traditional ISP. PKT Priority provides internet access with a minimum price free if there is available bandwidth. This will simplify local mesh of networking by moving the network engineering component to the Cloud ISP. The stateless switch design central in the cjdns protocol will not only set new records for router performance/cost ratio, but will also allow for hundreds or even thousands of Cloud ISPs to send data through a single device, each according to their own routing policy.",
          btnText: "PTK Origin Story",
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
