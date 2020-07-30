<template>
  <div class="v-community">
    <section class="v-community-section">
      <BigHeader
        title="Community"
        text="Thank you for your interest in the PKT Network. In building out this network infrastructure we are only as strong as the sum of all parts. ."
        bg="/img/community-header-bg.jpg"
      />
    </section>
    <section class="v-community-section">
      <CommunityList
        title="Resources"
        text="Participate in the PKT Trading Group to find buy and sell sides for PKT liquidity. This community resource is open to the public to initiate block trades of PKT"
        :list="resources_list"
      />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import CommunityList from "~/components/Community/List";

export default {
  components: {
    BigHeader,
    CommunityList,
  },
  data() {
    return {
      resources_list: [
        {
          title: "PKT Trading Group",
          text:
            "Participate in live discussions, ask questions, and get to know the PKT community.",
          img: "/img/communicate/telegram.svg",
        },
        {
          title: "PKT Trading Group",
          text:
            "Participate in live discussions, ask questions, and get to know the PKT community.",
          img: "/img/communicate/telegram.svg",
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
