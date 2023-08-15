<template>
  <div class="v-utility">
    <section class="v-utility__top_section">
      <HeaderInternal 
      :title="this.$t('header.utility')" 
      :subtitle="this.$t('utility.header_subtitle')" 
      :text="this.$t('utility.header_text')"
      :button_1="this.$t('utility.header_button_1')" 
      button_1_link="/network-steward"
      :button_2="this.$t('utility.header_button_2')" 
      button_2_link="/network-steward"
      :button_3="this.$t('utility.header_button_3')" 
      button_3_link="#real_cases"
      is_utility
      is_arrow_down 
      arrow_down_link="#getting_next"  />
    </section>
    <section id="getting_next" class="v-utility__online">
        <div class="container">
          <div class="v-utility__online_internal">
            <h2 class="v-utility__title">{{ $t("utility.spot_2_title") }}</h2>
            <p class="v-utility__subtitle">{{ $t("utility.spot_2_subtitle") }}</p>
            <p class="v-utility__text">{{ $t("utility.spot_2_text") }}</p>
          </div>
        </div>
    </section>
    <section class="v-utility__unique">
        <div class="container">
          <h2 class="v-utility__title">{{ $t("utility.spot_3_title_1") }} <br />{{ $t("utility.spot_3_title_2") }}</h2>
          <p class="v-utility__text">{{ $t("utility.spot_3_text") }}</p>
          <nuxt-link to="/tech" class="v-utility__button"><span>{{ $t("utility.spot_3_button") }}</span></nuxt-link>
          <Cards :list="unique_list" />
        </div>
    </section>
    <section id="real_cases" class="v-utility__cases">
        <div class="container">
          <h2 class="v-utility__title">{{ $t("utility.spot_4_title") }}</h2>
          <p class="v-utility__subtitle">{{ $t("utility.spot_4_subtitle") }}</p>
          <Cards :list="cases_list" />
        </div>
    </section>
    <section class="v-utility__ecosystem">
        <div class="container">
          <h2 class="v-utility__title">{{ $t("utility.ecosystem_title") }}</h2>
          <p class="v-utility__text">{{ $t("utility.ecosystem_text") }}</p>
          <img src="/img/utility-ecosystem.svg" alt="Understand the Ecosystem" />
          <nuxt-link to="/ecosystem" class="v-utility__button"><span>{{ $t("utility.ecosystem_button") }}</span></nuxt-link>
        </div>
    </section>
    <section class="v-utility__compare">
        <div class="container">
          <h2 class="v-utility__title">{{ $t("utility.compare_title") }}</h2>
          <p class="v-utility__text">{{ $t("utility.compare_text") }}</p>
          <img src="/img/utility-compare-table.svg" alt="How Does PKT Compare?" />
        </div>
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import Cards from "~/components/Base/Cards";
export default {
  components: {
    HeaderInternal,
    Cards
  },
  head() {
    return {
      title: "Utility - PKT",
      meta: [{ hid: "description", name: "description", content: "The fundamentals of an edge network" }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
  data() {
    return {
      unique_list: [
        {
          image: '/img/utility-unique-card-1.png',
          title: this.$t("utility.unique_list_1_title"),
          descr: this.$t("utility.unique_list_1_descr"),
        },
        {
          image: '/img/utility-unique-card-2.png',
          title: this.$t("utility.unique_list_2_title"),
          descr: this.$t("utility.unique_list_2_descr"),
        },
        {
          image: '/img/utility-unique-card-3.png',
          title: this.$t("utility.unique_list_3_title"),
          descr: this.$t("utility.unique_list_3_descr"),
        },
      ],
      cases_list: [
        {
          image: '/img/utility-cases-card-1.png',
          title: this.$t("utility.cases_list_1_title"),
          descr: this.$t("utility.cases_list_1_descr"),
        },
        {
          image: '/img/utility-cases-vpn.svg',
          title: this.$t("utility.cases_list_2_title"),
          descr: this.$t("utility.cases_list_2_descr"),
        },
        {
          image: '/img/utility-cases-wifi.svg',
          title: this.$t("utility.cases_list_3_title"),
          descr: this.$t("utility.cases_list_3_descr"),
        },
        {
          image: '/img/utility-cases-card-3.png',
          title: this.$t("utility.cases_list_4_title"),
          descr: this.$t("utility.cases_list_4_descr"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-utility {
    // Common
    & .container {
      @extend %container_new;
      @extend %t-center;
      @include for-width(-tablet) {
        max-width:100%;
        width:100%;
        padding:0 rem(25);
      }
      @include for-width(-small-lg) {
        padding:0 rem(20);
      }
    }
    &__title {
      @extend %heading_internal;
      @extend %heading-gradient-dark;
      margin-bottom:rem(25);
      text-transform:initial;
      @include for-width(-laptop) {
        margin-bottom:rem(15);
      }
      @include for-width(-small-lg) {
        font-size:rem(36);
        line-height:rem(42);
      }
    }
    &__subtitle {
      @extend %subheading;
      @extend %medium;
      max-width:55%;
      margin:0 auto;
      text-transform:initial;
      @include for-width(-tablet) {
        max-width:75%;
      }
    }
    &__text {
      @extend %pn;
      max-width:50%;
      margin:0 auto;
      @include for-width(-tablet) {
        max-width:70%;
      }
    }
    &__button {
      @extend %btn-new;
      @extend %btn_blue_new;
      display:inline-block;
      width:auto;
      padding:rem(12) rem(35);
      @include for-width(-laptop) {
        padding:rem(12) rem(35);
      }
    }
    // Sections
    &__top_section {
      & .c-internal-header {
        padding-top:rem(65);
        @include for-width(+desktop-er) {
          padding-top:rem(100);
        }
        @include for-width(-small-lg) {
          min-height:100vh;
          padding-top:rem(65);
          height:auto;
          padding-bottom:rem(50);
        }
        & .container {
          @include for-width(-desktop-medium) {
            padding-top:rem(50);
          }
          @include for-width(-small-lg) {
            padding-top:rem(5);
          }
        }
        &__title {
          @include for-width(-small-lg) {
            font-size: rem(66);
            line-height: rem(80);
            margin-bottom:0;
          }
        }
        &__sub-title {
          margin:rem(30) 0;
          @include for-width(+desktop-er) {
            margin:rem(10) 0;
          }
          @include for-width(-desktop-medium) {
            margin:rem(20) 0;
          }
          @include for-width(-small-lg) {
            padding:0 rem(15);
            margin:rem(15) 0 rem(20);
          }
        }
        &__text {
          max-width: 55%;
          @include for-width(+desktop-er) {
            max-width: 65%;
          }
          @include for-width(-desktop-lg) {
            max-width: 52%;
          }
          @include for-width(-desktop-medium) {
            max-width: 58%;
          }
          @include for-width(-laptop) {
            max-width: 65%;
          }
          @include for-width(-tablet) {
            max-width: 85%;
          }
          @include for-width(-small-lg) {
            max-width: 90%;
          }
        }
        &__links {
          margin-top:rem(50);
          @include for-width(+desktop-er) {
            margin-top:rem(35);
          }
          @include for-width(-desktop-medium) {
            margin-top:rem(50);
          }
          @include for-width(-small-lg) {
            margin-top:rem(35);
            display:block;
          }
          & .btn_blue_new {
            margin:0 rem(15);
            @include for-width(-small-lg) {
              margin:15px auto;
              width:65%;
              padding:rem(10);
            }
          }
        }
        .arrow_down {
          @include for-width(+desktop-er) {
            bottom: rem(40);
          }
          @include for-width(-desktop-lg) {
            bottom: rem(25);
          }
          @include for-width(-small-lg) {
            bottom:rem(20);
          }
        }
      }
    }
    &__online {
      background-color:$dark_blue_new;
      height:100vh;
      @extend %df;
      @extend %jcs;
      @extend %aic;
      background-image:url(/img/utility-online.svg);
      background-repeat:no-repeat;
      background-size: auto 65%;
      background-position: 90% 55%;
      @include for-width(+desktop-er) {
        background-position: 80% 55%;
      }
      @include for-width(+desktop-xxl) {
        background-position: 75% 55%;
      }
      @include for-width(-laptop) {
        background-size: auto 50%;
        background-position: 95% 55%;
      }
      @include for-width(-tablet) {
        height:auto;
        display:block;
        background-position: center 90%;
        background-size: auto 50%;
        padding:rem(75) 0 rem(550);
      }
      @include for-width(-small-lg) {
        background-size: auto rem(225);
        padding:rem(75) 0 rem(250);
        background-position: center 98%;
      }
      &_internal {
        width:55%;
        text-align:left;
        @include for-width(-desktop-lg) {
          width:57%;
        }
        @include for-width(-laptop) {
          width:65%;
        }
        @include for-width(-tablet) {
          width:100%;
          text-align:center;
        }
      }
      & .v-utility__title {
        @extend %heading-gradient-light;
        margin:0;
        @include for-width(-small-lg) {
          margin:0 auto;
          max-width:80%;
        }
      }
      & .v-utility__subtitle {
        color:$white;
        max-width: 100%;
        margin:rem(35) 0;
        @include for-width(-laptop) {
          margin:rem(20) 0;
        }
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
        }
      }
      & .v-utility__text {
        color:$white;
        max-width: rem(580);
        margin:0;
        @include for-width(-tablet) {
          max-width: 85%;
          margin:0 auto;
        }
      }
    }
    &__unique {
      background-color:$dark_blue_new;
      & .container {
        background-color:$light_bg;
        background-image:url(/img/utility-unique-bg.png);
        background-repeat:no-repeat;
        background-size:auto 100%;
        background-position:top right;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        border-radius:rem(40);
        text-align:left;
        padding:rem(60) rem(75);
        @include for-width(-desktop-medium) {
          padding:rem(50);
        }
        @include for-width(-tablet) {
          padding:rem(75) rem(35) rem(35);
          max-width:90%;
          text-align:center;
          background-size:auto 40%;
        }
        @include for-width(-small-lg) {
          background-size:auto 15%;
          padding:rem(25) rem(25) rem(35);
        }
      }
      & .v-utility__title {
        @include for-width(-small-lg) {
          text-align:left;
        }
        & br {
          @include for-width(-small-lg) {
            display:none;
          }
        }
      }
      & .v-utility__text {
        max-width:55%;
        margin-left:0;
        margin-bottom:rem(35);
        @include for-width(-desktop-medium) {
          margin-bottom:rem(25);
        }
        @include for-width(-tablet) {
          max-width:100%;
        }
        @include for-width(-small-lg) {
          text-align:left;
        }
      }
      & .v-cards {
        margin-top:rem(75);
        @include for-width(-desktop-medium) {
          margin-top:rem(55);
        }
        @include for-width(-tablet) {
          margin-top:rem(35);
        }
        @include for-width(-tablet) {
          display:block;
        }
        &__card {
          width:29%;
          @include for-width(-laptop) {
            width:31%;
          }
          @include for-width(-tablet) {
            width:100%;
            text-align:center;
          }
          &__image {
            width:rem(85);
            height:rem(85);
            @include for-width(-desktop-medium) {
              width:rem(70);
              height:rem(70);
            }
            @include for-width(-small-lg) {
              width:rem(85);
              height:rem(85);
            }
          }
          &__title {
            color:$black_new;
            @extend %heading-small;
            @extend %medium;
            @include for-width(-small-lg) {
              font-family: "Poppins-SemiBold", sans-serif;
              font-size: rem(24);
              line-height: rem(36);
            }
          }
          &__descr {
            color:$black_new;
            @include for-width(-tablet) {
              width:60%;
              margin:rem(15) auto rem(35);            
            }
            @include for-width(-small-lg) {
              width:70%;
              margin:rem(5) auto rem(35);
            }
          }
        }
      }
    }
    &__cases {
      background-color:$dark_blue_new;
      padding:rem(100) 0;
      @include for-width(-desktop-medium) {
        padding:rem(75) 0;
      }
      @include for-width(-tablet) {
        padding-bottom:rem(50);
      }
      @include for-width(-small-lg) {
        padding:rem(65) 0 rem(25);
      }
      & .v-utility__title {
        @extend %heading-gradient-light;
      }
      & .v-utility__subtitle {
        color:$white;
        @include for-width(-small-lg) {
          font-size: rem(16);
          line-height: rem(24);
        }
      }
      & .v-cards {
        margin:rem(75) auto 0;
        max-width:85%;
        @extend %fw;
        align-items: stretch;
        @include for-width(-desktop-medium) {
          margin-top:rem(50);
        }
        @include for-width(-laptop) {
          max-width:100%;
          margin-top:rem(50);
        }
        @include for-width(-tablet) {
          max-width:95%;
        }
        @include for-width(-small-lg) {
          margin-top:rem(35);
          max-width:100%;
        }
        &__card {
          width:48%;
          margin-bottom:rem(35);
          @extend %df;
          @extend %fdc;
          @extend %jcs;
          @extend %aic;
          padding:rem(50) rem(80);
          background: #222450;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          border-radius:rem(40);
          @include for-width(-desktop-medium) {
            padding:rem(40) rem(65);
          }
          @include for-width(-tablet) {
            margin-bottom:rem(25);
            padding:rem(25) rem(30);
          }
          @include for-width(-small-lg) {
            width:100%;
            margin-bottom:rem(30);
          }
          &__image {
            width:rem(75);
            height:rem(75);
            margin-bottom:rem(25);
            @include for-width(-desktop-medium) {
              width:rem(60);
              height:rem(60);
              margin-bottom:rem(15);
            }
            @include for-width(-small-lg) {
              width:rem(80);
              height:rem(80);
            }
          }
          &__title {
            color:$white;
            font-size: rem(30);
            line-height: rem(46);
            @extend %medium;
            @include for-width(+desktop-xl) {
              font-size: rem(34);
              line-height: rem(50);
            }
            @include for-width(-desktop-medium) {
              font-size: rem(26);
              line-height: rem(42);
            }
            @include for-width(-laptop) {
              font-size: rem(22);
              line-height: rem(38);
            }
            @include for-width(-small-lg) {
              font-family: "Poppins-SemiBold", sans-serif;
              line-height: rem(36);
            }
          }
          &__descr {
            color:$white;
          }
        }
      }
    }
    &__ecosystem {
      background-color:$white;
      padding:rem(100) 0 rem(125);
      @include for-width(-desktop-medium) {
        padding:rem(50) 0 rem(75);
      }
      @include for-width(-small-lg) {
        padding:rem(50) 0;
      }
      & .v-utility__text {
        @include for-width(-small-lg) {
          max-width: 85%; 
        }
      }
      & img {
        margin:rem(55) auto rem(65);
        width:60%;
        display:block;
        @include for-width(-small-lg) {
          width: 100%;
          margin:rem(40) auto;
        }
      }
    }
    &__compare {
      background-color:$light_bg;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      padding:rem(100) 0 rem(125);
      @include for-width(-desktop-medium) {
        padding:rem(50) 0 rem(75);
      }
      @include for-width(-tablet) {
        padding:rem(50) 0;
      }
      @include for-width(-small-lg) {
        padding:rem(35) 0 rem(50);
      }
      & .v-utility__text {
        @include for-width(-small-lg) {
          max-width: 90%; 
        }
      }
      & img {
        margin-top:rem(55);
        width:100%;
        @include for-width(-tablet) {
          margin-top:rem(35);
        }
      }
    }
}
</style>