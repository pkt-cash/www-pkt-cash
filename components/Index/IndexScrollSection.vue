<template>
  <div class="c-scroll-section">
    <div class="container">
      <div class="c-scroll-sect">
        <div class="c-scroll-sect__wrap c-scroll-sect__wrap_top">
          <h2 class="c-scroll-sect__title">
            The Network
          </h2>
          <div class="c-scroll-sect__text">
            The world’s first bandwidth-hard blockchain protocol, built to incentivize
            the growth of infrastructure
          </div>
        </div>
        <div class="c-scroll-sect__wrap c-scroll-sect__wrap_content">
<!--          <figure >-->
<!--           v-if="image_index === index" :class="{ visible: image_index === index }"-->
            <div class="c-scroll-sect__scroll-images">
              <div class="scroll-image">
                <div class="scroll-image-wrapper">
                  <transition-group name="fade" mode="in-out" tag="figure">
                    <img v-for="(img, index) of images" v-if="image_index === index" :key="img" :src="img" :alt="img">
                  </transition-group>
                </div>
              </div>
            </div>

<!--          </figure>-->
          <div class="c-scroll-sect__wrapper">
            <div v-for="(block, index) of blocks" :ref="`scroll-sect-${index}`" :key="index" class="c-scroll-sect__block">
              <figure class="c-scroll-sect__b-wrap-right">
                <img :src="images[index]" :alt="block.title">
              </figure>
              <div class="c-scroll-sect__b-wrap-left">
                <h3 class="c-scroll-sect__b-title" v-html="block.title"></h3>
                <p class="c-scroll-sect__b-text" v-html="block.text"></p>
                <nuxt-link to="/" class="c-scroll-sect__b-btn">
                  <span>More Details</span>
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
          '/img/scroll-section/scroll-sect-1.png',
          '/img/scroll-section/scroll-sect-2.png',
          '/img/scroll-section/scroll-sect-3.png',
          '/img/scroll-section/scroll-sect-4.png',
          '/img/scroll-section/scroll-sect-5.png',
        ],
        blocks: [
          {
            title: 'PKT Network',
            text: 'PKT is a new blockchain that rewards users  for contributing bandwidth to the network. \n' +
              'Nodes broadcast what are called announcements (“anns”) across the network. \n'
          },
          {
            title: 'PacketCrypt Protocol',
            text: 'PKT is a new blockchain that rewards users  for contributing bandwidth to the network.  Nodes broadcast what are called announcements (“anns”) across the network.'
          },
          {
            title: 'Announcement Mining',
            text: 'PKT is a new blockchain that rewards users  for contributing bandwidth to the network. \n' +
              'Nodes broadcast what are called announcements (“anns”) across the network. \n'
          },
          {
            title: 'Block Mining',
            text: 'PKT is a new blockchain that rewards users  for contributing bandwidth to the network. \n' +
              'Nodes broadcast what are called announcements (“anns”) across the network, and Blockminers gather those anns and put them into the blockchain. \n'
          },
          {
            title: 'PKT Cash\n',
            text: 'PKT is a new blockchain that rewards users  for contributing bandwidth to the network. \n' +
              'Nodes broadcast what are called announcements (“anns”) across the network, and Blockminers gather those anns and put them into the blockchain. \n'
          },
        ],
        image_index: 0
      }
    },
    methods: {
      getCoords(name) {
        const box = this.$refs[name][0].getBoundingClientRect()
        //
        return box.top + pageYOffset;
      }
    },
    created() {
      if(process.client) {
        document.addEventListener('scroll', () => {
          const section_0 = this.getCoords('scroll-sect-0') - 500;
          const section_1 = this.getCoords('scroll-sect-1') - 500;
          const section_2 = this.getCoords('scroll-sect-2') - 500;
          const section_3 = this.getCoords('scroll-sect-3') - 500;
          const section_4 = this.getCoords('scroll-sect-4') - 500;
          const scroll_y = window.scrollY;
          if(scroll_y >= section_0) {
            this.image_index = 0
          }
          if(scroll_y >= section_1) {
            this.image_index = 1
          }
          if(scroll_y >= section_2) {
            this.image_index = 2
          }
          if(scroll_y >= section_3) {
            this.image_index = 3
          }
          if(scroll_y >= section_4) {
            this.image_index = 4
          }
        })
      }
    },
  }
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.c-scroll-section {
  position: relative;
  @extend %bg-reset;
  background-position: center rem(-330);
  background-image: url('/img/scroll-section/scroll-sect-bg.png');
  .container {
    max-width: rem(1112);
    margin: 0 auto;
    @include for-width(-laptop) {
      max-width: rem(962);
    }
    @include for-width(-tablet) {
      max-width: rem(300);
    }
  }
}
.c-scroll-sect {
  position: relative;
  padding-bottom: rem(150);
  &__wrap {
    &_top {
      padding-top: rem(91);
      margin-bottom: rem(126);
      @include for-width(-tablet) {
        margin-bottom: rem(60);
      }
    }
    &_content {
      position: relative;
      display: flex;
      padding-left: rem(40);
      @include for-width(-laptop) {
        padding-left: 0;
      }
    }
  }
  &__wrapper {
    position: sticky;
    top: 0;
    max-width: rem(558);
  }
  &__title {
    @extend %h1-title;
    color: $dark_blue;
    text-align: center;
    margin-bottom: rem(58);
  }
  &__text {
    @extend %medium;
    font-size: rem(25);
    line-height: rem(28);
    max-width: rem(917);
    margin: 0 auto;
    text-align: center;
    @include for-width(-tablet) {
      font-size: rem(17);
      line-height: rem(27);
    }
  }
  &__scroll-images {
    position: absolute;
    top: 0;
    width: rem(490);
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
      transition: opacity .3s ease;
      height: rem(483);
      /*&.visible {*/
      /*  position: sticky;*/
      /*  opacity: 1;*/
      /*}*/
    }
  }
  &__block {
    position: static;
    margin-bottom: rem(300);
    &:last-child {
      margin-bottom: rem(0);
    }
    padding-top: rem(56);
    @include for-width(-tablet) {
      margin-bottom: rem(65);
    }
  }
  &__b {
    &-wrap {
      &-left {

      }
      &-right {
        display: none;
        @include for-width(-tablet) {
          display: block;
        }
      }
    }
    &-title {
      @extend %bold;
      font-size: rem(50);
      line-height: rem(75);
      @include for-width(-tablet) {
        text-align: center;
        font-size: rem(33);
        line-height: rem(43);
      }
    }
    &-text {
      @extend %regular;
      font-size: rem(25);
      line-height: rem(40);
      margin-top: rem(26);
      margin-bottom: rem(37);
      @include for-width(-tablet) {
        text-align: center;
        font-size: rem(17);
        line-height: rem(27);
      }
    }
    &-btn {
      @extend %blue-button;
      @include for-width(-tablet) {
        display: block;
        width: 173px;
        margin: 0 auto;
      }
    }
  }
}
</style>
