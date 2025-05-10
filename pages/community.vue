<template>
  <div class="v-community">
    <section class="v-header-section">
      <SpotAInternal 
      :title="this.$t('community.com_title')" 
      text="PKT is a community-based project. There is no company, no foundation, no equity investors and no DAO.  Join the community to connect with other Pkteers who are believe in geting paid to support the future of the media industry." 
      />
    </section>
    <section class="c-community-blocks">
      <CommunityBlocks :list="community_blocks" />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import CommunityBlocks from "~/components/Community/CommunityBlocks";
export default {
  components: {
    SpotAInternal,
    CommunityBlocks,
  },
  data() {
    return {
      community_blocks: [
        {
          bg_img: "background-image:url(/img/community/community-telegram.svg)",
          block_title: "Telegram",
          block_url: "https://t.me/pktcash",
        },
        {
          bg_img: "background-image:url(/img/community/community-discord.svg)",
          block_title: "Discord Chat",
          block_url: "https://discord.gg/bjJutHm9CN",
        },
        {
          bg_img: "background-image:url(/img/community/community-x.svg)",
          block_title: "X.com",
          block_url: "https://twitter.com/pktcash",
        },
        {
          bg_img: "background-image:url(/img/community/community-pkt-chat.svg)",
          block_title: "PKT Chat",
          block_url: "https://pkt.chat/",
        },
        {
          bg_img: "background-image:url(/img/community/community-dexscreener.svg)",
          block_title: "Dexscreener",
          block_url: "https://dexscreener.com",
        },
        {
          bg_img: "background-image:url(/img/community/community-coinmarketcap.svg)",
          block_title: "CoinMarketCap",
          block_url: "https://coinmarketcap.com/currencies/pkt/",
        },
        {
          bg_img: "background-image:url(/img/community/community-instagram.svg)",
          block_title: "Instagram",
          block_url: "https://www.instagram.com/pktcash/",
        },
        {
          bg_img: "background-image:url(/img/community/community-reddit.svg)",
          block_title: "Reddit",
          block_url: "https://www.reddit.com/r/PKTcash/",
        },
        {
          bg_img: "background-image:url(/img/community/community-docs.svg)",
          block_title: "Docs",
          block_url: "https://docs.pkt.cash/",
        },
      ]
    };
  },
  head() {
    return {
      title: "Community | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'PKT is a community-based project. There is no company, foundation or pre-mine. Join the community to connect with other Pkteers who believe in internet freedom and want to help get the next 1 billion people online.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Community | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'PKT is a community-based project. There is no company, foundation or pre-mine. Join the community to connect with other Pkteers who believe in internet freedom and want to help get the next 1 billion people online.'
        }
      ],
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
    padding:rem(165) 0 rem(120);
    @include for-width(-small-lg) {
      padding:rem(110) 0 rem(65);
    }
    &__title {
      max-width:rem(550);
      @include for-width(-small-lg) {
        // max-width:rem(200);
      }
    }
  }
  .c-community-blocks {
    padding-bottom:rem(155);
    @include for-width(-small-lg) {
      padding-bottom:rem(75);
    }
    & .container {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: rem(40) rem(40);
      @include for-width(-desktop-medium) {
        grid-gap: rem(20) rem(20);
      }
      @include for-width(-small-lg) {
        grid-gap: rem(8) rem(8);
      }
    }
  }
}
</style>