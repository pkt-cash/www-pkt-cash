<template>
  <div class="v-community">
    <section class="v-header-section">
      <SpotAInternal 
      title="Welcome to the Community"
      text="PKT is a community-based project. There is no company, foundation or pre-mine. Join the community to connect with other Pkteers who believe in internet freedom and want to help get the next 1 billion people online." 
      />
    </section>
    <section class="c-community-blocks">
      <CommunityBlocks :list="community_blocks" />
    </section>
    <section class="c-community-links">
      <CommunityLinks :list="community_links" />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import CommunityBlocks from "~/components/Community/CommunityBlocks";
import CommunityLinks from "~/components/Community/CommunityLinks";
export default {
  components: {
    SpotAInternal,
    CommunityBlocks,
    CommunityLinks,
  },
  data() {
    return {
      community_links: [
        {
          link_icon: "/img/community-links-reddit.svg",
          link_title: "Reddit",
          link_url: "https://docs.pkt.cash/",
        },
        {
          link_icon: "/img/community-telegram.svg",
          link_title: "Telegram",
          link_url: "https://t.me/pkt_cash",
        },
        {
          link_icon: "/img/community-links-docs.svg",
          link_title: "Docs",
          link_url: "https://docs.pkt.cash/",
        },
        {
          link_icon: "/img/community-links-instagram.svg",
          link_title: "Instagram",
          link_url: "https://www.instagram.com/pktcash/",
        },
        {
          link_icon: "/img/community-links-github.svg",
          link_title: "GitHub",
          link_url: "https://github.com/pkt-cash/",
        }
      ],
      community_blocks: [
        {
          bg_img: "background-image:url(/img/community-discord.svg)",
          align_side: "left_side",
          block_title: "Discord Chat",
          block_descr: "Engage with the global PKT community on Discord",
          block_url: "https://discord.gg/bjJutHm9CN",
        },
        {
          bg_img: "background-image:url(/img/community-pkt-chat.svg)",
          align_side: "right_side",
          block_title: "PKT Chat",
          block_descr: "The private and dedicated chat app for PKT. Ask technical questions here.",
          block_url: "https://pkt.chat/",
        },
        {
          bg_img: "background-image:url(/img/community-x.svg)",
          align_side: "left_side",
          block_title: "X.com",
          block_descr: "Follow @pktcash to stay informed about news and updates.",
          block_url: "https://twitter.com/pktcash",
        },
        {
          bg_img: "background-image:url(/img/community-youtube.svg)",
          align_side: "right_side",
          block_title: "YouTube",
          block_descr: "Watch tutorials about PKT technology and get regular video updates.",
          block_url: "https://www.youtube.com/c/PKTCash/",
        },
      ]
    };
  },
  head() {
    return {
      title: "Community - PKT",
      meta: [{ hid: "description", name: "description", content: "PKT is a community-based project. There is no company, foundation or pre-mine. Join the community to connect with other Pkteers who believe in internet freedom and want to help get the next 1 billion people online." }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>
<style lang="scss">
.v-community {
  background-color:$black_blue;
  position:relative;
  &:before {
    content:'';
    background-image:url(/img/community-top.webp);
    background-size:rem(900);
    background-position:top right;
    background-repeat:no-repeat;
    position:absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    z-index:2;
    @include for-width(-desktop-medium) {
      background-size:rem(800);
    }
    @include for-width(-laptop) {
      background-size:rem(600);
    }
    @include for-width(-small-lg) {
      background-image:url(/img/community-top-mobile.webp);
      background-position:top right;
      background-size:52%;
    }
  }
  &:after {
    content:'';
    background-image:url(/img/community-after.webp);
    position:absolute;
    bottom:0;
    right:0;
    width:45%;
    height:100%;
    background-position:right bottom 60%;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-desktop-medium-default) {
      background-position:right bottom;
      width:35%;
    }
    @include for-width(-small-lg) {
      display:none;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding:rem(165) 0 rem(50);
    @include for-width(-small-lg) {
      padding:rem(130) 0 rem(75);
    }
    &__title {
      max-width:rem(550);
      @include for-width(-small-lg) {
        // max-width:rem(200);
      }
    }
  }
  .c-community-blocks {
    & .container {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 50% 50%;
      grid-template-columns: 50% 50%;
      grid-gap: rem(40) rem(40);
      @include for-width(-desktop-medium) {
        grid-gap: rem(20) rem(20);
        -ms-grid-columns: 49% 49%;
        grid-template-columns: 49% 49%;
      }
      @include for-width(-tablet) {
        display: block;
      }
    }
  }
  .c-community-links {
    & .container {
      @extend %df;
      @extend %jcsb;
      @extend %ais;
      padding:rem(95) rem(75) rem(200);
      @include for-width(-desktop-medium) {
        padding:rem(95) rem(100) rem(170);
      }
      @include for-width(-laptop) {
        padding:rem(95) rem(60) rem(150);
      }
      @include for-width(-tablet) {
        padding:rem(95) 0 rem(150);
      }
      @include for-width(-small-lg) {
        padding:rem(100) rem(35);
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 47% 47%;
        grid-template-columns: 47% 47%;
        grid-gap: rem(25) rem(25);
      }
    }
  }
}
</style>