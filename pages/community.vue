<template>
  <div class="v-community">
    <section class="v-community-section">
      <BigHeader
        title="Community"
        subtitle="Thank you for your interest in the PKT Network. In building out this network infrastructure we are only as strong as the sum of all parts. ."
        sometext="Please check out the various resources available to collaborate and communicate."
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
    <section class="v-community-section">
      <CommunityList
        title="Join us"
        text="Join us and help to create a better internet. Connect and collaborate with PKT community members online"
        :list="join_list"
      />
    </section>
    <section class="v-community-section">
      <CommunityContact />
    </section>
  </div>
</template>

<script>
import BigHeader from "~/components/Base/BigHeader";
import CommunityList from "~/components/Community/List";
import CommunityContact from "~/components/Community/Contact";

export default {
  components: {
    BigHeader,
    CommunityList,
    CommunityContact,
  },
  data() {
    return {
      resources_list: [
        {
          title: "PKT Trading Group",
          text:
            "Participate in live discussions, ask questions, and get to know the PKT community.",
          img: "/img/community/pkt.svg",
        },
      ],
      join_list: [
        {
          title: "PKT Telegram",
          text:
            "Participate in live discussions, ask questions, and get to know the PKT community.",
          img: "/img/community/telegram.svg",
        },
        {
          title: "Facebook",
          text:
            "Visit PKT on Facebook for current events and to meet the community.",
          img: "/img/community/facebook.svg",
        },
        {
          title: "Instagram",
          text:
            "Browse PKT on Instagram for valuable insights about the project.",
          img: "/img/community/instagram.svg",
        },
        {
          title: "Twitter",
          text:
            "Follow PKT on Twitter to stay up to date with news and progress.",
          img: "/img/community/twitter.svg",
        },
        {
          title: "Mastadon",
          text:
            "Follow PKT on Mastadon to stay up to date with news and progress.",
          img: "/img/community/mastadon.svg",
        },
        {
          title: "IRC",
          text: "Follow PKT on IRC to stay up to date with news and progress.",
          img: "/img/community/irc.svg",
        },
        {
          title: "Matrix",
          text:
            "Follow PKT on Matrix to stay up to date with news and progress.",
          img: "/img/community/matrix.svg",
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
