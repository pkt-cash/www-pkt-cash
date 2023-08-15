<template>
  <div class="v-origin">
    <section class="v-origin-header_section">
      <HeaderOrigin 
      :title="this.$t('origin_story.heading_title')" 
      :subtitle="this.$t('origin_story.heading_subtitle')" 
       />
    </section>
    <section class="v-origin-section v-origin-section-first">
      <div class="container">
        <div class="v-origin-section-first_left">
          <CjdnstoPkt />
        </div>
        <div class="v-origin-section-first_right">
          <p class="v-origin-section-first_right_text">PKT was born out of the cjdns project when it was realized that without the financial infrastructure for the network to pay its own bills, it would always remain a hobby. The cjdns project dates back to 2011 and the two basic ideas it brought to the table were:</p>
          <p class="v-origin-section-first_right_text_special first_special">Everything should be encrypted, all of the time, no matter what.</p>
          <p class="v-origin-section-first_right_text_special second_special">A packet of data flying across the Internet should not contain the address of its destination, but rather the directions to get there.</p>
          <p class="v-origin-section-first_right_text">Point 1 has become more of a universal norm. However, point 2 remains uncommon in the network space.</p>
        </div>
      </div>
    </section>
    <section class="v-origin-section v-origin-section-last">
      <div class="container">
        <div class="v-origin-section-last_left">
          <h2 class="v-origin-section-last_left_title">An Introduction to Compact Source Routing</h2>
          <p class="v-origin-section-last_left_text">Most of the Internet is routed using a system called prefix matching. With prefix matching, every packet of data flying across the Internet contains the IP address of its destination, and each router which forwards that packet looks up the destination in its routing table. It’s like every street-corner had a sign pointing the way to everywhere in the world (and everybody had to follow it).</p>
          <p class="v-origin-section-last_left_text">Routing tables at the Internet backbone are unsurprisingly big, almost too big to fit in the special high-speed memory used in modern routers. Since every ISP has a different idea of how data should flow through their network, every router has a different routing table. What this all means is that even when an ISP leases bandwidth, they still have to operate their own physical router hardware. Sub-leasing of routers is simply impossible.</p>
          <p class="v-origin-section-last_left_text">The way cjdns works is that packets of data flying through the network do not contain the IP address of the destination, but rather the directions to get there. This system is known as source routing. Normally a source route is big, so big that source routing is traditionally only used for experimentation, but cjdns uses a unique representation known as compact source routing which compresses that route down to roughly the size of an IP address.</p>
          <p class="v-origin-section-last_left_quote">“The reason bandwidth markets have not yet emerged is not because we can’t subdivide bandwidth, it’s because current technology prohibits subdivision of routing hardware.”</p>
          <p class="v-origin-section-last_left_text">By replacing “where do you want to go” with “how do you want to get there”, cjdns replaces the rigidity of a postal service with the flexibility of a road system, a road system where each driver can choose which GPS to use. In this new network, hundreds or even thousands of Virtual ISPs can compete for customers while leasing access to the same “road system” and each searching for the best ways to get their customers’ data where it needs to go.</p>
          <div class="v-origin-section-last_left_links">
            <nuxt-link to="/build#roadmap" class="btn_blue_new button_new"><span>PKT Roadmap</span></nuxt-link>
            <nuxt-link to="/letter" class="btn_blue_new button_new"><span>Letter From CJD</span></nuxt-link>
          </div>
        </div>
        <div class="v-origin-section-last_right">
          <div class="v-origin-section-last_right_inner">
            <img src="/img/origin-board.png" alt="PKT board" class="v-origin-section-last_right_inner_desktop" />
          </div>
        </div>
      </div>
      <img src="/img/origin-board-mobile.png" alt="PKT board" class="v-origin-section-last_mobile" />
    </section>
  </div>
</template>

<script>
import HeaderOrigin from "~/components/OriginStory/HeaderOrigin";
import CjdnstoPkt from "~/components/OriginStory/CjdnstoPkt";
export default {
  components: {
    HeaderOrigin,
  },
  head() {
    return {
      title: this.$t("origin_story.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("about.meta_descr") }],
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
.v-origin {
  &-section {
    & .container {
      @extend %container_new;
      padding:rem(75) 0;
      @extend %df;
      @extend %jcsb;
    }
  }
  &-section-first {
    background:$light_bg;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom:rem(15);
    @include for-width(-small-lg) {
      box-shadow: none;
    }
    & .container {
      @extend %aic;
      max-width:90%;
      @include for-width(-small-lg) {
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
        padding:rem(25) rem(10) rem(50);
      }
    }
    &_left {
      width:45%;
      text-align:center;
      @include for-width(-small-lg) {
        order:2;
        width:100%;
      }
      & svg {
        width:rem(350);
        @include for-width(-small-lg) {
          width:55%;
        }
      }
    }
    &_right {
      width:55%;
      padding-left:rem(75);
      @include for-width(-small-lg) {
        width:100%;
        padding-left:0;
      }
      &_text {
        @extend %pn;
        margin-bottom:rem(25);
        @include for-width(-small-lg) {
          text-align:center;
        }
      }
      &_text_special {
        @extend %pn;
        background: $dark_blue_new;
        border-radius: 15px;
        padding:rem(20) rem(45) rem(20) rem(55);
        color:$white;
        height:auto;
        min-height:rem(100);
        @extend %aic;
        @extend %df;
        position:relative;
        @include for-width(-small-lg) {
          padding:rem(20) rem(25) rem(20) rem(55);
          margin-left:rem(15);
        }
        &:before {
          display: block;
          width: rem(75);
          height:rem(75);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          position:absolute;
          left:-35px;
        }
      }
      & .first_special {
        &:before {
          content:'';
          background-image:url(/img/origin-special-first.png);
        }
      }
      & .second_special {
        &:before {
          content:'';
          background-image:url(/img/origin-special-second.png);
        }
      }
    }
  }
  &-section-last {
    background:$white;
    & .container {
      @extend %fw;
      @include for-width(-small-lg) {
        display:block;
        padding-top:rem(25);
        padding-bottom:0;
      }
    }
    &_left {
      max-width:55%;
      padding-right:rem(50);
      @include for-width(-small-lg) {
        max-width:100%;
        padding-right:0;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        display: none;
      }
      &_title {
        @extend %heading-gradient-dark;
        @extend %heading_internal;
        margin-bottom:rem(35);
        text-transform:initial;
        @include for-width(-small-lg) {
          font-size: rem(36);
          line-height:rem(42);
          margin-bottom:rem(25);
        }
      }
      &_text {
        @extend %pn;
        margin-bottom:rem(25);
        padding-right:rem(50);
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          padding-right:rem(20);
          font-size: rem(16);
          line-height: rem(26);
        }
      }
      &_quote {
        @extend %subheading;
        margin:rem(35) 0;
        text-transform:initial;
        padding-right:rem(50);
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          padding-right:rem(20);
        }
      }
      &_links {
        margin-top:rem(35);
        padding-right:rem(50);
        @extend %df;
        @extend %jcs;
        @extend %aic;
        @include for-width(-tablet-lg) {
          padding-right:0;
        }
        @include for-width(-small-lg) {
          justify-content: space-between;
        }
        & .button_new {
          @extend %btn-new;
          @extend %btn_blue_new;
          display:inline-block;
          padding:rem(15) rem(40) rem(14);
          @include for-width(-small-lg) {
            padding:rem(10) rem(25);
          }
          &:first-child {
            margin-right:rem(50);
            @include for-width(-small-lg) {
              margin-right:0;
            }
          }
        }
      }
    }
    &_right {
      max-width:45%;
      position:relative;
      @include for-width(-small-lg) {
        max-width:100%;
        padding:0;
      }
      &_inner {
        padding:0 0 0 rem(50);
        @include for-width(-small-lg) {
          &_desktop {
            display:none;
          }
        }
      }
    }
    &_mobile {
      display:none;
      @include for-width(-small-lg) {
        display:block;
        width: 100%;
      }
    }
  }
}
</style>
