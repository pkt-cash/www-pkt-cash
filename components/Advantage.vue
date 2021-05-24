<template>
  <div class="c-advantage">
    <template v-for="item of list">
      <div
        class="c-advantage__item"
        :class="{ 'c-advantage__item-blue': item.colorBlue }"
		:id="item.aId"
        :key="item.title"
        :style="{ 'background-image': `url(${is_mobile ? item.mobile_img : item.img})` }"
      >
        <div class="id-anchor" :id="item.title"></div>
        <div class="container" :class="{ 'container-blue': item.colorBlue }">
          <div class="c-advantage__wrap" :class="{ 'c-advantage__wrap-right': item.aligh }">
            <h1 class="c-advantage__title">
              <svg
                v-if="item.textSVG"
                width="40"
                height="38"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.0232H40V31.0456C40 34.3593 37.3137 37.0456 34 37.0456H14V11.0232Z"
                  fill="#98E0F9"
                />
                <rect x="1" y="10.0223" width="9" height="9.00774" fill="#98E0F9" />
                <rect y="0.0137329" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="15" y="1.01373" width="6" height="6.00516" fill="#98E0F9" />
                <rect x="9" y="2.01544" width="3" height="3.00258" fill="#98E0F9" />
              </svg>
              {{ item.title }}
            </h1>
            <h2 class="c-advantage__sub">{{ item.subTitle }}</h2>
            <p class="c-advantage__text" :id="item.id">{{ item.text }}</p>
			<div :class="item.graphic"><img :src="item.graphicSrc" :alt="item.graphicAlt" /></div>
            <div class="c-advantage__btn-wrapper">
              <template v-if="is_index && !item.linkMore">
                <a
                  href="https://github.com/pkt-cash/ns-projects"
                  target="_blank"
                  class="c-advantage__link blue-btn-arrow"
                  v-if="item.btnText && !item.linkMor"
                >
                  <span>{{ item.btnText }}</span>
                </a>
              </template>
              <template v-else>
                <a
                  :href="item.btnLink"
                  class="c-advantage__link blue-btn-arrow"
                  :class="{ 'mining-center': is_mining && is_mobile }"
                  v-if="item.btnText && !item.linkMore"
                >
                  <span>{{ item.btnText }}</span>
                </a>
              </template>
              <template v-if="item.learnMore">
                <template v-if="!(is_mining && is_mobile)">
                  <nuxt-link
                    :to="{ path: item.lear_link }"
                    class="c-advantage__link-more blue-btn-arrow"
                    v-if="item.learnMore"
                  >
                    <span>Learn More</span>
                  </nuxt-link>
                </template>
              </template>
              <template v-else>
                <template v-if="!(is_mining && is_mobile)">
                  <nuxt-link
                    v-if="item.lear_link"
                    :to="{ path: item.lear_link }"
                    class="c-advantage__link blue-btn-arrow"
                  >
                    <span>Learn More</span>
                  </nuxt-link>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Advantage",
  props: {
    list: Array,
    is_index: Boolean,
    is_mining: Boolean,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 1024 : false;
    },
  },
};
</script>

<style lang="scss">
.c-advantage {
  &__item {
    position: relative;
    padding: rem(127) rem(25) rem(74);
    @include for-width(-small-lg) {
      padding: rem(29) rem(25) rem(40);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: $light_blue;
    @include for-width(-small-lg) {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
    }
    .id-anchor {
      position: absolute;
      top: -100px;
      @include for-width(-tablet) {
        top: -45px;
      }
    }
  }

  &__item-blue {
    color: $light_blue;
    background-color: $dark_blue;
  }

  .container {
    width: 100%;
    max-width: rem(1075);
    margin: 0 auto;
  }

  .container-blue {
    max-width: rem(1248);
  }

  @include for-width(+ tablet) {
    &__wrap {
      padding-right: 50%;
    }
    &__wrap-right {
      padding-left: 50%;
      padding-right: 0;
    }
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(40);
    @include for-width(-tablet) {
      margin-bottom: rem(21);
      @include font_sizes(34, 51);
    }
    word-wrap: normal;
    position: relative;

    & svg {
      position: absolute;
      top: 15%;
      left: rem(-10);
      transform: translateX(-100%);
      @include for-width(-tablet) {
        display: none;
      }
    }
  }

  &__sub {
    @extend %h2-title;
  }

  &__text {
    @extend %regular;
    margin-top: rem(20);
    @include for-width(-tablet) {
      margin-top: 92vw;
    }
    @include font_sizes(20, 32);
    @include for-width(-tablet-lg) {
      @include font_sizes(16, 25);
    }
    @include for-width(-tablet) {
      @include font_sizes(16, 26);
    }
  }

  &__link {
    margin-top: rem(50);
    margin-right: rem(18);
    @include for-width(-small-lg) {
      &.mining-center {
        display: block;
        margin: rem(40) auto 0;
        max-width: rem(223);
      }
    }

    &-more {
      background-color: transparent !important;
      border: 1px solid $light_blue;
      margin-top: rem(18);
    }
  }
  &__btn-wrapper {
    @include for-width(-tablet) {
      display: flex;
      flex-direction: column;
      .blue-btn-arrow {
        width: 100%;
        max-width: rem(223);
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
  #pkt_roadmap {
	background-color: #080e3e;
	.c-advantage__title {
		color:#fff;
	}
	.c-advantage__wrap {
		padding-right: 0;
	}
	.pkt_roadmap_graphic img {
		
	}
	.c-advantage__btn-wrapper {
		text-align: center;
		margin-top: 35px;
	}
	@include for-width(-tablet-lg) {
		
	}
	@include for-width(-tablet) {
		
		.c-advantage__text {
			margin: 0;
		}
	}
  }
  
}
</style>
