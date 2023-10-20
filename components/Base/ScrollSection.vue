<template>
  <div class="c-scroll-section">
    <div class="container">
      <div class="c-scroll-sect">
        <div class="c-scroll-sect__wrap c-scroll-sect__wrap_content">
          <!--          <figure >-->
          <!--           v-if="image_index === index" :class="{ visible: image_index === index }"-->
          <div class="c-scroll-sect__scroll-images">
            <div class="scroll-image">
              <div class="scroll-image-wrapper">
                <transition-group name="fade" mode="in-out" tag="figure">
                  <img
                    v-for="(img, index) of images"
                    v-if="image_index === index"
                    :key="img"
                    :src="img"
                    :alt="img"
                  />
                </transition-group>
              </div>
            </div>
          </div>

          <!--          </figure>-->
          <div class="c-scroll-sect__wrapper">
            <div
              v-for="(block, index) of blocks"
              :ref="`scroll-sect-${index}`"
              :key="index"
              :class="{ show_block: image_index === index, hide: hide_block === index }"
              class="c-scroll-sect__block"
            >
              <figure class="c-scroll-sect__b-wrap-right">
                <img :src="images[index]" :alt="block.title" />
              </figure>
              <div class="c-scroll-sect__b-wrap-left">
                <h3 class="c-scroll-sect__b-title" v-html="block.title"></h3>
                <p class="c-scroll-sect__b-text" v-html="block.text"></p>
                <nuxt-link :to="localePath('pkt')" class="c-scroll-sect__b-btn">
                  <span>{{ $t("home.scroll_section_button_label") }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexScrollSection",
  data() {
    return {
      images: [
        "/img/mine-1.png",
        "/img/mine-2.png",
        "/img/mine-3.png",
        "/img/mine-4.png",
        "/img/mine-5.png",
        "/img/mine-5.png",
      ],
      blocks: [
        {
          title: this.$t("mine.scroll_section_1_title"),
          text: this.$t("mine.scroll_section_1_content"),
          link: { path: "/" },
        },
        {
          title: this.$t("mine.scroll_section_2_title"),
          text: this.$t("mine.scroll_section_2_content"),
          link: { path: "/mining" },
        },
        {
          title: this.$t("mine.scroll_section_3_title"),
          text: this.$t("mine.scroll_section_3_content"),
          link: { path: "/mining" },
        },
        {
          title: this.$t("mine.scroll_section_4_title"),
          text: this.$t("mine.scroll_section_4_content"),
          link: { path: "/cash" },
        },
        {
          title: this.$t("mine.scroll_section_5_title"),
          text: this.$t("mine.scroll_section_5_content"),
          link: { path: "/cash" },
        },
        {
          title: this.$t("mine.scroll_section_5_title"),
          text: this.$t("mine.scroll_section_5_content"),
          link: { path: "/cash" },
        },
      ],
      image_index: 0,
      hide_block: null,
    };
  },
  methods: {
    getCoords(name) {
      const box = this.$refs[name][0].getBoundingClientRect();
      //
      return box.top + pageYOffset;
    },
  },
  created() {
    if (process.client) {
      document.addEventListener("scroll", () => {
        const condition = window.innerWidth > 1100 ? 550 : 150;
        const section_0 = this.getCoords("scroll-sect-0") - condition;
        const section_1 = this.getCoords("scroll-sect-1") - condition;
        const section_2 = this.getCoords("scroll-sect-2") - condition;
        const section_3 = this.getCoords("scroll-sect-3") - condition;
        const section_4 = this.getCoords("scroll-sect-4") - condition;
        let scroll_y =
          window.innerWidth > 1100 ? window.scrollY : window.scrollY + 30;
        if (scroll_y >= section_0) {
          this.image_index = 0;
        }
        if (scroll_y >= section_1) {
          this.image_index = 1;
        }
        if (scroll_y >= section_2) {
          this.image_index = 2;
        }
        if (scroll_y >= section_3) {
          this.image_index = 3;
        }
        if (scroll_y >= section_4) {
          this.image_index = 4;
        }
      });
    }
  },
  mounted() {
    if (window.innerWidth > 1100) {
      this.blocks.pop();
    }
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.c-scroll-section {
  position: relative;
  .container {
    @extend %container_new;
    margin: 0 auto;
    @include for-width(-tablet) {
        max-width:100%;
        width:100%;
        padding:0 rem(25);
        margin-top: rem(35);
      }
    @include for-width(-small-lg) {
        padding:0 rem(20);
      }
  }
}
.c-scroll-sect {
  position: relative;
  padding-bottom: rem(75);
  @include for-width(-tablet) {
    padding-bottom: rem(50);
  }
  &__wrap {
    &_top {
      padding-top: rem(91);
      margin-bottom: rem(126);
      @include for-width(-tablet) {
        margin-bottom: rem(60);
        padding-top: 0;
      }
    }
    &_content {
      position: relative;
      display: flex;
    }
  }
  &__wrapper {
    position: sticky;
    top: 0;
    max-width: 50%;
    @include for-width(-tablet) {
      max-width: 100%;
      position: relative;
      top: auto;
    }
  }
  &__scroll-images {
    position: absolute;
    top: 0;
    width:55%;
    height: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    @include for-width(-laptop) {
      width: rem(343);
    }
    @include for-width(-tablet) {
      display: none;
    }
    .scroll-image {
      position: sticky;
      width: 100%;
      top: 30%;
      height: rem(483);
      &-wrapper {
        position: relative;
      }
      @include for-width(-tablet) {
        display: none;
      }
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      order: 2;
      transition: opacity 0.3s ease;
      height: rem(483);
      @include for-width(-tablet-lg) {
        height: rem(400);
      }
      @include for-width(-tablet) {
        height: rem(350);
      }
    }
  }
  &__block {
    position: static;
    margin-bottom: rem(150);
    &:last-child {
      margin-bottom: rem(0);
    }
    padding-top: rem(25);
    @include for-width(-tablet-lg) {
      margin-bottom: rem(100);
    }
    @include for-width(-tablet) {
      position: sticky;
      top: rem(75);
      margin-bottom: rem(20);
      opacity: 0;
      transition: all 0.3s ease;
      @include for-width(-small-lg) {
        top: rem(65);
      }
      &.show_block {
        opacity: 1;
      }
    }
  }
  &__b {
    &-wrap {
      &-left {
        @include for-width(-tablet) {
          max-width:85%;
          text-align:center;
          margin:0 auto;
        }
        @include for-width(-small-lg) {
          max-width:100%;
        }
      }
      &-right {
        display: none;
        @include for-width(-tablet) {
          display: block;
          text-align:center;
        }
        & img {
          @include for-width(-tablet) {
            height: rem(425);
            margin:0 auto;
          }
          @include for-width(-small-lg) {
            height: rem(275);
          }
        }
      }
    }
    &-title {
      @extend %heading-gradient-dark;
      @extend %heading_internal;
      margin-bottom:rem(25);
      @include for-width(-tablet-lg) {
        font-size: rem(56);
        line-height:rem(68);
      }
      @include for-width(-small-lg) {
        font-size: rem(32);
        line-height:rem(38);
        margin-bottom:rem(10);
      }
    }
    &-text {
      @extend %pn;
    }
    &-btn {
      @extend %btn-new;
      @extend %btn_blue_new;
      margin-top:rem(35);
      display:block;
      @include for-width(-tablet) {
        margin: rem(35) auto 0;
      }
      @include for-width(-small-lg) {
        padding:rem(10) rem(35);
        display:inline-block;
        font-family: "Poppins-SemiBold", sans-serif;
        margin-top:0;
      }
    }
  }
}
</style>