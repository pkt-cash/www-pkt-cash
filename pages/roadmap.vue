<template>
  <div class="v-roadmap">
    <section class="v-roadmap-section">
      <SimpleHeader
        title="PKT Roadmap"
        text="There are four distinct stages of evolution which the PKT project will undergo. These stages may occur out of order at times, but the project will be viable in every state, just as a caterpillar is a viable creature before it becomes a butterfly."
        bg="/img/roadmap-header-bg.jpg"
      />
    </section>
    <section class="v-roadmap-section">
      <RoadmapIs />
    </section>
    <section class="v-roadmap-section">
      <Advantage :list="advantage_list" />
    </section>
    <section class="v-roadmap-section">
      <RoadmapSupport />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import RoadmapIs from "~/components/Roadmap/RoadmapIs";
import Advantage from "~/components/Advantage";
import RoadmapSupport from "~/components/Roadmap/Support";

export default {
  components: {
    SimpleHeader,
    RoadmapIs,
    Advantage,
    RoadmapSupport,
  },
  data() {
    return {
      advantage_list: [
        {
          title: "Stage 1",
          subTitle: "VPN Marketplace",
          text:
            "Price will be decided by auction with a minimum bid of zero. In order to stay decentralized and achieve low enough cost of transactions to enable true micropayments, VPNs will be purchased using PKT Cash, a cryptocurrency which is mined by performing encryption operations and expending Internet bandwidth. Anyone who wants to use a VPN, create their own, or mine PKT will easily be able to do so.",
          img: "/img/advantage/stage-1.png",
          colorBlue: true,
        },
        {
          title: "Stage 2",
          subTitle: "Support Internet Sharing",
          text:
            "Once there are approximately one million installations of the VPN client application, PKT will support third party operators to offer internet sharing technology and hardware for home or business users. This technology and hardware will allow people to earn PKT with their unused internet bandwidth and like the VPN market, it will have a minimum bid of zero. Since it will be the VPN client application that connects to the Internet sharing hardware, there will be no privacy risk nor legal risk because all data will be sent to the VPN.",
          img: "/img/advantage/stage-2.png",
          aligh: true,
          colorBlue: true,
        },
        {
          title: "Stage 3",
          subTitle: "Tokenized Bandwidth Leases",
          text:
            "By tokenizing bandwidth leases Internet sharing hardware will be able to connect to each other and network operators will be able to observe the network, buy, sell and trade, relevant leases, and plan paths through it. This will make local mesh networking easy by moving the network engineering component to the network operator service.",
          img: "/img/advantage/stage-3.png",
          colorBlue: true,
        },
        {
          title: "Stage 4",
          subTitle: "Support Next Gen Networking Hardware",
          text:
            "PKT will begin to support next generation networking hardware. The stateless switch design central in the cjdns protocol will not only set new records for router performance/cost ratio, but will also allow for hundreds or even thousands of network operators to send data through a single device, each according to their own routing policy. Since PKT Cash is mined by performing encryption operations, hardware devices capable of efficiently mining PKT will also be capable of efficiently encrypting network data. The ASICs which will emerge to mine PKT will be what finally enables the whole Internet to be encrypted.",
          btnText: "PTK Origin Story",
          img: "/img/advantage/stage-4.png",
          aligh: true,
          colorBlue: true,
        },
      ],
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
</style>
