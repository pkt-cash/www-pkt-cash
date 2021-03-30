<template>
  <div class="v-mining">
    <section class="v-mining-section">
      <MiningHeader />
    </section>
    <section class="v-mining-section">
      <Advantage is_mining :list="advantage_list" />
    </section>
  </div>
</template>

<script>
import MiningHeader from "~/components/Mining/Header";
import Advantage from "~/components/Advantage";

export default {
  components: {
    MiningHeader,
    Advantage,
  },
  head() {
    return {
      title: "Mining - PKT",
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
          title: "PacketCrypt Protocol",
          subTitle: "Packet + Crypt = bandwidth + encryption",
          text:
            "PacketCrypt is an algorithm designed to encourage cooperation between miners and investment into Internet infrastructure for high speed data encryption and decryption. Efficient mining is achieved only if miners communicate between one another and requires bandwidth to be expended in lieu of processor effort. The result is a bandwidth-hard PoW that combines 2 distinct stages: announcement mining and block mining, which together, collectively decentralizes the transmission of data across a distributed global network.  ",
          btnText: "Install Packet Crypt",
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-1.png",
          mobile_img: "/img/advantage/mining-1-mobile.png",
          aligh: false,
          textSVG: true,
          lear_link: '/cash'
        },
        {
          title: "Announcement Mining",
          subTitle: "Anybody can mine announcements",
          text:
            "The announcement stage is where a miner creates a small (1KB) message that proves they did some work. Announcements are then collected by block miners to form blocks. Announcement miners seek to maximize the number of successful announcements which can be accepted into a block and need to maximize their bandwidth to achieve the optimal mining results. This in turn assures that the network has high throughput longitudinally. An announcement, by default, is the nodes network state. But an announcement can be any bit of data. ",
          btnText: "Start Mining",
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-2.png",
          mobile_img: "/img/advantage/mining-2-mobile.png",
          aligh: true,
          textSVG: true,
          lear_link: '/cash'
        },
        {
          title: "Block Mining",
          subTitle: "Specialized hardware is required to mine blocks",
          text:
            "Block mining is the second stage and block miners are the traditional “miners” in the blockchain sense, as they validate the chain and get the payouts. Block miners collect announcements from announcement miners. Block miners get a discount on the difficulty of the work they must do based on the amount of fresh announcements they collect, so they are incentivized to have lots of announcements in memory at the time of mining and to pay announcement miners to keep them supplied",
          btnText: "Start Mining",
          btnLink: "https://docs.pkt.cash/en/latest/mining/",
          img: "/img/advantage/mining-3.png",
          mobile_img: "/img/advantage/mining-3-mobile.png",
          aligh: false,
          textSVG: true,
          lear_link: '/cash'
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
