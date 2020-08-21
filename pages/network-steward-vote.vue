<template>
  <div class="v-network">
    <section class="v-network-section">
      <BigHeader
        mobile_img="/img/network-steward-vote-header-bg.jpg"
        title="Network Steward Vote"
        text="We believe it is a universal fact that any unaccountable authority, no matter how benevolent, will eventually fall victim to corruption, inefficiency or simple failure to innovate.
        Because of this, we built in to the PKT blockchain solution in case that the network steward is ever not fulfilling its role.
        Every holder of PKT is able to cast a vote to impeach the network steward and allow a new one to take its place. Impeachment is not an insignificant event, it requires at least 50% of the total PKT in existence to explicitly vote for it in order for it to occur. However, if it does occur, what follows is an automatic vote count and the network steward changes."
        btn="Network Steward"
        btnLink="/network-steward"
        bg="/img/network-steward-vote-header-bg.jpg"
      />
    </section>
    <section class="v-network-section">
      <NetworkStewardVoteMain />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import NetworkStewardVoteMain from "~/components/Network/StewardVoteMain";

export default {
  components: {
    BigHeader,
    NetworkStewardVoteMain,
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
