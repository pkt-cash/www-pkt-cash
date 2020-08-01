<template>
  <div class="v-cash">
    <section class="v-cash-section">
      <SimpleHeader
        title="PKT"
        subtitle="PKT is paid to PacketCrypt miners"
        bg="/img/cash-header-bg.jpg"
      />
    </section>
    <section class="v-cash-section">
      <CashMain />
    </section>
    <section class="v-cash-section">
      <Advantage :list="advantage_item" />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import CashMain from "~/components/Cash/Main";
import Advantage from "~/components/Advantage";

export default {
  components: {
    SimpleHeader,
    CashMain,
    Advantage,
  },
  data() {
    return {
      advantage_item: [
        {
          title: "Network Steward",
          subTitle: "The Network Steward receives 20% of every coinbase",
          text:
            "The Network Steward is an address which gets 20% of every new block-mine so that developers can finance the building of Internet infrastructure and mesh network technology. Unlike a pre-mine or founder's fee, the recipient of the network steward payout can be changed by a PoS vote. ",
          btnText: "Info on Network Steward",
          img: "/img/mining/mining-4.png",
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
