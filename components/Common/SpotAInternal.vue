<template>
  <div class="c-spot-a-internal" :style="bg_img">
    <div class="container">
      <div class="c-spot-a-internal__wrap">
        <h1 class="c-spot-a-internal__title">{{ title }}</h1>
        <template v-if="subtitle">
          <h4 class="c-spot-a-internal__subtitle">{{ subtitle }}</h4>
        </template>
        <p class="c-spot-a-internal__text" v-if="text">{{ text }}</p>
        <div class="c-spot-a-internal__links" v-if="button_1">
          <template v-if="ns">
            <span class="c-common-button ns orange_bg"><img src="/img/common/icons/watch.svg" alt="time" />Time until next election: <strong>28 : 16 : 34</strong></span>
          </template>
          <a :href="button_1_link" :target="button_1_target = button_1_target === '_blank' ? null : '_blank'" class="c-common-button c-common-button__filled" v-if="button_1"><span>{{ button_1 }}</span></a>
          <a :href="button_2_link" :target="button_2_target = button_2_target === '_blank' ? null : '_blank'" class="c-common-button c-common-button__bordered" v-if="button_2"><span>{{ button_2 }}</span></a>
          <a :href="button_3_link" :target="button_3_target = button_3_target === '_blank' ? null : '_blank'" class="c-common-button c-common-button__bordered" v-if="button_3"><span>{{ button_3 }}</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpotAInternal",
  props: {
    title: String,
    subtitle: String,
    text: String,
    ns: Boolean,
    button_1: String,
    button_2: String,
    button_3: String,
    button_0_link: String,
    button_1_link: String,
    button_2_link: String,
    button_3_link: String,
    button_0_target: Boolean,
    button_1_target: Boolean,
    button_2_target: Boolean,
    button_3_target: Boolean,
    bg_img: String,
  }
};
</script>

<style lang="scss">
.c-spot-a-internal {
  padding:rem(165) 0 rem(125);
  background-position: center right 50px;
  background-size:contain;
  background-repeat:no-repeat;
  @include for-width(-small-lg) {
    padding:rem(165) 0 rem(160);
  }
  &__wrap {
    max-width:rem(745);
  }
  &__title {
    @extend %h1-common;
    margin-bottom:rem(20);
    @include for-width(-small-lg) {
      margin-bottom:rem(25);
    }
  }
  &__subtitle {
    font-size: rem(20);
    line-height: rem(30);
    @extend %inter_bold;
    color:$orange;
    @include for-width(-small-lg) {
      font-size: rem(18);
      line-height: rem(24);
      margin-bottom:rem(25);
    }
  }
  &__text {
    @extend %p-big-common;
  }
  &__links {
    margin-top:rem(30);
    & .c-common-button {
      width:rem(190);
      margin-right:rem(20);
      @include for-width(-small-lg) {
        margin-right:rem(10);
        width:rem(145);
      }
      &:last-child {
        margin-right:0;
      }
    }
    & .ns {
      width:auto;
      padding-left:rem(15);
      padding-right:rem(34);
      color:$white;
      border-color:transparent;
      @extend %inter_regular;
      @include for-width(-tablet) {
        display:block;
        margin-bottom:rem(20);
      }
      @include for-width(-small-lg) {
        padding-right:rem(15);
      }
      & img {
        vertical-align:middle;
        @extend %dib;
        margin-right:rem(10);
        margin-top:-2px;
        @include for-width(-small-lg) {
          display:none;
        }
      }
      & strong {
        @extend %inter_semibold;
      }
    }
  }
}
</style>