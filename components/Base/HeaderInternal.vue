<template>
  <div class="c-internal-header">
    <Stars />
    <div class="container">
      <h1 class="c-internal-header__title">{{ title }}</h1>
      <h2 class="c-internal-header__sub-title" v-if="subtitle">{{ subtitle }}</h2>
      <nuxt-link :to="button_1_link" class="btn_blue_new button_new mobile_view" v-if="button_1"><span>{{ button_1 }}</span></nuxt-link>
      <p class="c-internal-header__text" v-if="text">{{ text }}</p>
      <p class="c-internal-header__text c-internal-header__text_2" v-if="text_2">{{ text_2 }}</p>
      <h3 class="c-internal-header__add-title" v-if="add_title">{{ add_title }}</h3>
      <template v-if="is_network">
        <div class="c-internal-header__indexes">
          <p class="c-internal-header__indexes_index">Network Steward Wallet Balance<span class="c-internal-header__indexes_value">51,226,189.33 PKT</span></p>
          <p class="c-internal-header__indexes_index">Burned Coins<span class="c-internal-header__indexes_value">414,220,661.54 PKT</span></p>
        </div>
      </template>
      <div class="c-internal-header__links desktop_view">
        <a :href="button_1_link" :target="button_1_target" class="btn_blue_new button_new" v-if="button_1"><span>{{ button_1 }}</span></a>
        <a :href="button_2_link" :target="button_2_target" class="btn_blue_new button_new" v-if="button_2"><span>{{ button_2 }}</span></a>
      </div>
      <template v-if="is_resources">
        <div class="c-internal-header__links">
          <a :href="button_3_link" target="_blank" class="btn_blue_new button_new" v-if="button_3"><span>{{ button_3 }}</span></a>
          <a :href="button_4_link" target="_blank" class="btn_blue_new button_new" v-if="button_4"><span>{{ button_4 }}</span></a>
        </div>
        <div class="c-internal-header__links">
          <nuxt-link :to="button_5_link" class="btn_blue_new button_new" v-if="button_5"><span>{{ button_5 }}</span></nuxt-link>
          <nuxt-link :to="button_6_link" class="btn_blue_new button_new" v-if="button_6"><span>{{ button_6 }}</span></nuxt-link>
        </div>
      </template>
    </div>
    <template v-if="is_arrow_down">
      <a :href="arrow_down_link" class="arrow_down">
        <img src="/img/chevron-double-down.svg" alt="down" />
      </a>
    </template>
  </div>
</template>

<script>
import Stars from "~/components/Base/Stars";
export default {
  name: "HeaderInternal",
  props: {
    title: String,
    subtitle: String,
    text: String,
    text_2: String,
    add_title: String,
    button_1: String,
    button_2: String,
    button_1_link: String,
    button_2_link: String,
    button_3: String,
    button_4: String,
    button_5: String,
    button_6: String,
    button_3_link: String,
    button_4_link: String,
    button_5_link: String,
    button_6_link: String,
    button_1_target: String,
    button_2_target: String,
    is_arrow_down: Boolean,
    arrow_down_link: String,
    is_resources: Boolean,
    is_network: Boolean
  }
};
</script>

<style lang="scss">
.c-internal-header {
  background-color:$dark_blue_new;
  height:100vh;
  @extend %df;
	@extend %jcc;
  @extend %aic;
  @extend %t-center;
  position:relative;
  @include for-width(-tablet) {
    height:auto;
    padding:rem(175) 0 rem(75);
  }
  @include for-width(-small-lg) {
    padding:rem(100) 0 rem(50);
  }
  & .container {
    @extend %container_new;
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
    @extend %heading-xlarge;
    @extend %heading-gradient-light;
    @include for-width(+desktop-xl) {
      margin-bottom:rem(10);
    }
    @include for-width(-small-lg) {
      font-size: rem(44);
      line-height: rem(60);
      margin-bottom:rem(15);
    }
  }
  &__sub-title {
		@extend %subheading;
    text-transform:initial;
		margin:0 0 rem(20);
		color: $white;
    @extend %semibold;
    @include for-width(+desktop-xl) {
      margin-bottom:rem(30);
    }
	}
  &__text {
    @extend %pn;
    color:$white;
    max-width:50%;
    margin: 0 auto;
    @extend %regular;
    @include for-width(-small-lg) {
      max-width:100%;
    }
  }
  &__text_2 {
    margin-top:rem(25);
  }
  &__add-title {
    @extend %heading-gradient-light;
    font-size:rem(26);
    line-height:rem(40);
    @extend %semibold;
    margin-top:rem(25);
    @include for-width(+desktop-xl) {
      font-size:rem(28);
      line-height:rem(42);
    }
    @include for-width(-small-lg) {
      font-size:rem(18);
      line-height:rem(28);
    }
  }
  &__indexes {
    margin:rem(55) auto;
    max-width:55%;
    @extend %df;
    @extend %jcsb;
    @extend %aic;
    @extend %t-left;
    @extend %semibold;
    @include for-width(+desktop-xl) {
      margin:rem(65) auto;
    }
    @include for-width(-desktop-lg) {
      margin:rem(35) auto rem(20);
    }
    @include for-width(-laptop) {
      max-width:70%;
    }
    @include for-width(-tablet) {
      max-width:80%;
      margin:rem(50) auto;
    }
    @include for-width(-small-lg) {
      margin:rem(35) auto;
      display:block;
      text-align:center;
    }
    &_index {
      font-size: rem(18);
      line-height: rem(22);
      color:$light_blue_new;
      @include for-width(+desktop-xl) {
        font-size: rem(20);
        line-height: rem(30);
      }
      @include for-width(-laptop) {
        font-size: rem(16);
        line-height: rem(20);
      }
      &:nth-child(even) {
        @extend %t-right;
        @include for-width(-small-lg) {
          text-align:center;
          margin-top:rem(25);
        }
      }
    }
    &_value {
      display:block;
      font-size: rem(34);
      line-height: rem(54);
      color:$white;
      @include for-width(+desktop-xl) {
        font-size: rem(40);
        line-height: rem(60);
      }
      @include for-width(-laptop) {
        font-size: rem(28);
        line-height: rem(40);
      }
      &:nth-child(even) {
        @extend %t-right;
        @include for-width(-small-lg) {
          text-align:center;
        }
      }
    }
  }
  &__links {
      margin-top:rem(50);
      z-index:5;
      position:relative;
      @include for-width(-desktop-lg) {
        margin-top:rem(25);
      }
      @include for-width(-tablet) {
        text-align:center;
        margin-bottom:rem(25);
      }
      @include for-width(-small-lg) {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
      display: flex;
      justify-content: space-between;
      -ms-align-items: center;
        align-items: center;
      }
      .button_new {
        @extend %btn-new;
        @extend %btn_blue_new;
        display: inline-block;
        margin:0 rem(10);
        @include for-width(-tablet) {
          margin:0 rem(10);
          }
        @include for-width(-small-lg) {
          padding:rem(10) rem(35);
          margin:0 rem(5);
          display:block;
        }
      }
  }
  #stars {
    position: absolute;
    width: 100%;
    @include for-width(-small-lg) {
      top:0;
      height: 60%;
    }
  }
  .arrow_down {
    position: absolute;
    bottom: rem(60);
    animation: pulse_arrow 1s infinite;
    -webkit-animation: pulse_arrow 1s infinite;
    z-index:5;
    @include for-width(+desktop-hg) {
      bottom: rem(50);
    }
    @include for-width(-tablet) {
      bottom: rem(25);
    }
    @include for-width(-small-lg) {
      bottom: rem(10);
    }
    img {
      @include for-width(-desktop-xl) {
        max-width: rem(30);
      }
      @include for-width(-tablet) {
        max-width: rem(25);
      }
      @include for-width(-small-lg) {
        max-width: rem(20);
      }
    }
  }
  & .mobile_view {
    display:none;
    @extend %btn-new;
    @extend %btn_blue_new;
    padding:rem(10) rem(35);
    width:auto;
    margin:0 0 rem(35);
  }
}
@keyframes pulse_arrow {
	0% {
		transform: scale(0.98);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.98);
	}
}
</style>