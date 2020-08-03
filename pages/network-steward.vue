<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        title="Network Steward"
        text="By consensus rule, 20% of every newly mined block goes to an elected address, which is the Network Steward. The Network Steward is currently a 5 person group that is dedicated to helping build the PKT ecosystem through competitive grants for open source projects."
        btn="Network Steward Vote"
        btnLink="/network-steward-vote"
        bg="/img/network-header-bg.jpg"
      />
    </section>
    <section class="v-network-section">
      <NetworkMain />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import NetworkMain from "~/components/NetWork/Main";

export default {
  components: {
    BigHeader,
    NetworkMain,
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
