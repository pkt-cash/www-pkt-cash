<template>
  <div class="v-media">
    <section class="v-header-section">
      <SpotAInternal 
      title="Starting a Media Distribution Revolution"
      text="PKT Network was born from 20 years of founder Jesse Berger’s experience producing major motion pictures in Hollywood under Radical Studios and and generating over $1 billion in revenue for many of the biggest studios and streamers, such as Disney, Universal, Paramount, MGM and Netflix.  PKT Network is built to leverage blockchain technology to revolutionize the broken profit participation system and positively impact the experiences of audiences, content creators and financiers."
       />
    </section>
    <section class="v-chess-section">
      <BlocksChessCommon :list="chess_list" />
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import BlocksChessCommon from "~/components/Common/BlocksChessCommon";
export default {
  components: {
    SpotAInternal,
    BlocksChessCommon
  },
  data() {
    return {
      chess_list: [
        {
          text_direction: "text_left",
          single_title: "A Hollywood History",
          single_descr: "Founding PKT Community member Jesse Berger is the co-founder and CEO of Radical Studios. Radical was originally launched as a comic book company called Radical Publishing in 2008. The company business model is to own its intellectual property and produce tentpole films, TV and games based on the catalog.",
          single_url: "https://www.imdb.com/title/tt1483013/",
          single_link: "Visit Radical",
          external: true,
          single_img: "/img/media-radical.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_right",
          single_title: "Oblivion - 2013",
          single_descr: "Radical Publishing created an illustrated novel and artwork based on a story by director Joseph Kosinski (Top Gun 2). Radical Studios set up the movie with Disney, which was later sold to Universal as a $160 million film starring Tom Cruise and Morgan Freeman. Jesse served as Executive Producer. The film released in 2013 and has generated over $650 million in global revenue.",
          single_url: "https://tv.apple.com/us/movie/oblivion/umc.cmc.5mswtnh20ls7n7ou4ysyzv4gi",
          external: true,
          single_link: "Watch Movie",
          single_img: "/img/media-oblivion.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_left",
          single_title: "Hercules - 2014",
          single_descr: "Hercules is based on a graphic novel series published by Radical Publishing. Radical Studios set the movie up at MGM, which partnered with Paramount to make a $130 million film starring Dwayne “The Rock” Johnson, directed by Brett Ratner (X-Men 2). Jesse served as Executive Producer. The film released in 2014 and has generated over $450 million in global revenue.",
          single_url: "https://tv.apple.com/us/movie/hercules/umc.cmc.28upgtcbjpbt490gjdhheigpz",
          external: true,
          single_link: "Watch Movie",
          single_img: "/img/media-hercules.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_right",
          single_title: "The Last Days of American Crime - 2020",
          single_descr: "The Last Days of American Crime is based on a comic book series created by Rick Remender (Fear Agent). Radical Studios partnered with Mandalay Films (Air) who got the film financed and distributed by Netflix starring Edgar Ramírez (Jungle Cruise). The film released in 2020 and generated over 40 million views in the first week of release.",
          single_url: "https://www.netflix.com/title/80198975",
          external: true,
          single_link: "Watch Movie",
          single_img: "/img/media-last_days.webp",
          single_mobile_order: true
        },
        {
          text_direction: "text_left",
          single_title: "It’s Time For Change!",
          single_descr: "The media industry is fundamentally broken. Major studio distributors and streaming platforms use non-negotiable, fine-print contracts to ensure that revenue rarely flows back to investors or content creators. These companies keep all the income and provide zero data or revenue transparency. There has never been a way to change this paradigm, until now using a decentralized network that has blockchain payment. rails built-in. The future is here.",
          single_url: "#",
          external: true,
          single_link: this.$t("common.learn_more"),
          single_img: "/img/media-time-to-change.webp",
          single_mobile_order: true
        }
      ]
    };
  },
  head() {
    return {
      title: "Media | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Starting a Media Distribution Revolution'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Media | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Starting a Media Distribution Revolution'
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
.v-media {
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/media-top-asset.webp);
  background-size:rem(750);
  background-position:top right;
  background-repeat:no-repeat;
  @include for-width(-desktop-lg) {
    background-size:rem(600);
  }
  @include for-width(-small-lg) {
    background-size:rem(300);
    background-position:top 50px right -50px;
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding-bottom:0;
    @include for-width(-small-lg) {
      padding-top:rem(100);
    }
  }
  & .v-chess-section {
    padding:rem(120) 0;
    @include for-width(-tablet-lg) {
      padding-top:rem(125);
    }
    @include for-width(-small-lg) {
      padding:rem(60) 0 rem(80);
    }
    & .c-chess-block {
      &_inner {
        @include for-width(-small-lg) {
			    padding-top:rem(60);
        }
      }
      & .text_left .c-chess-block_inner_single {
        padding-right:0;
        @include for-width(-small-lg) {
          text-wrap: pretty;
        }
      }
      & .text_right .c-chess-block_inner_single {
        padding-left:0;
        @include for-width(-small-lg) {
          text-wrap: pretty;
        }
      }
      &_inner_single_img {
        @include for-width(-tablet) {
					display:none;
				}
        img {
          border-radius:rem(20);
        }
      }
      & .c-common-button {
        min-width:rem(175);
        width:auto;
      }
    }
  }
}
</style>