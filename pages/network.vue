<template>
  <div class="v-setup">
    <section class="v-setup-section">
      <SimpleHeader
        title="Network Steward"
        text="By consensus rule, 20% of every newly mined block goes to an elected address, which is the Network Steward. The Network Steward is currently a 5 person group that is dedicated to helping build the PKT ecosystem through competitive grants for open source projects."
        bg="/img/network-header-bg.jpg"
      />
    </section>
    <section class="v-setup-section">
      <NetworkMain />
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";
import NetworkMain from "~/components/NetWork/Main";

export default {
  components: {
    SimpleHeader,
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
