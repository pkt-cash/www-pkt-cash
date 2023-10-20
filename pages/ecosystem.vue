<template>
  <div class="v-ecosystem">
    <section class="v-header-section">
      <HeaderInternal 
      :title="this.$t('header.ecosystem')" 
      :subtitle="this.$t('ecosystem.subtitle')" 
      :text="this.$t('ecosystem.text')" 
      :add_title="this.$t('ecosystem.add_title')" 
      :button_1="this.$t('ecosystem.button_1')" 
      :button_2="this.$t('ecosystem.button_2')"
      :button_1_link="localePath('network-steward')"
      :button_2_link="localePath('utility')" 
      is_arrow_down 
      arrow_down_link="#eco" />
    </section>
    <section class="v-ecosystem-section" id="eco">
      <Eco :list="eco_list" />
    </section>
  </div>
</template>

<script>
import HeaderInternal from "~/components/Base/HeaderInternal";
import Eco from "~/components/Ecosystem/Eco";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    HeaderInternal,
    Eco
  },
  head() {
    return {
      title: this.$t("ecosystem.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("ecosystem.meta_descr") }],
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
      eco_list: [
        {
          link: "https://odapp.io/",
          img_link: "./img/ecosystem/odapp.png",
          title: this.$t("ecosystem.title_1"),
          content: this.$t("ecosystem.content_1"),
        },
        {
          link: "https://anode.co/",
          img_link: "./img/ecosystem/anode.png",
          bg: "#D0CEDA",
          title: this.$t("ecosystem.title_2"),
          content: this.$t("ecosystem.content_2"),
        },
        {
          link: "https://pktpal.com/",
          img_link: "./img/ecosystem/pktpal.png",
          bg: "#fff",
          title: this.$t("ecosystem.title_3"),
          content: this.$t("ecosystem.content_3"),
        },
        {
          link: "https://www.pkt.world/",
          img_link: "./img/ecosystem/pkt-world.png",
          title: this.$t("ecosystem.title_4"),
          content: this.$t("ecosystem.content_4"),
        },
        {
          link: "https://pktpool.io/pkt",
          img_link: "./img/ecosystem/pkt-pool.png",
          title: this.$t("ecosystem.title_5"),
          content: this.$t("ecosystem.content_5"),
        },
        {
          link: "https://www.zetahash.com/",
          img_link: "./img/ecosystem/zeta-hash.jpeg",
          title: "Zetahash",
          content: this.$t("ecosystem.content_5"),
        },
        {
          link: "https://amapool.com/",
          img_link: "./img/ecosystem/amapool.png",
          title: this.$t("ecosystem.title_7"),
          content: this.$t("ecosystem.content_7"),
        },
        {
          link: "https://pkteer.com/",
          img_link: "./img/ecosystem/pkteer-pool.png",
          title: this.$t("ecosystem.title_8"),
          content: this.$t("ecosystem.content_5"),
        },
        {
          link: "https://akash.network/",
          img_link: "./img/ecosystem/akash.png",
          title: "Akash Network",
          content: this.$t("ecosystem.content_9"),
        }
      ],
    };
  },
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
};
</script>

<style lang="scss">
.v-ecosystem {
  &-section {
    background:$dark_blue_new;
    border-bottom:1px solid $white;
    padding:0 0 rem(100);
    @include for-width(-desktop-lg) {
      padding-bottom:rem(50);
    }
    @include for-width(-tablet-lg) {
      padding:0 0 rem(75);
    }
    @include for-width(-tablet) {
      padding-bottom:rem(50);
    }
    @include for-width(-small-lg) {
      padding:0 0 rem(50);
    }
  }
  .c-internal-header {
    @include for-width(+desktop-er) {
      padding-top:rem(65);
    }
    @include for-width(-tablet) {
      height:100vh;
    }
    @include for-width(-small-lg) {
      height:auto;
      padding-top:rem(100);
    }
    & #crypto_start {
      @include for-width(+desktop-er) {
        bottom:rem(10);
      }
    }
    & .container {
      @include for-width(-small-lg) {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
      }
    }
    &__title {
      padding-top:rem(35);
    }
    &__text {
      @include for-width(+desktop-er) {
        max-width: 70%;
      }
    }
    &__sub-title {
      @include for-width(+desktop-er) {
        margin-bottom:rem(10);
      }
    }
    &__links {
      @include for-width(-small-lg) {
        order:3;
        margin-top:rem(15);
        margin-bottom:rem(30);
      }
      & .button_new {
        @include for-width(-small-lg) {
          padding:rem(10) 0;
          width:46%;
        }
      }
    }
    &__add-title {
      max-width:45%;
      margin:rem(25) auto 0;
      @include for-width(-tablet-lg) {
        max-width:65%;
      }
      @include for-width(-tablet) {
        max-width:75%;
      }
      @include for-width(-small-lg) {
        max-width:70%;
        order:5;
        font-size: rem(16);
        line-height: rem(24);
      }
    }
    &__text {
      @include for-width(-tablet) {
        max-width: 70%;
      }
      @include for-width(-small-lg) {
        order:4;
        max-width: 80%;
      }
    }
    & .arrow_down {
      @include for-width(-desktop-lg) {
        bottom:rem(35);
      }
      @include for-width(-tablet) {
        bottom:rem(55);
      }
      @include for-width(-small-lg) {
        display:none;
      }
    }
    & #stars {
      @include for-width(-small-lg) {
        height: 50%;
      }
    }
  }
}
</style>
