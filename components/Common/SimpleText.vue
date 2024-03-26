<template>
  <div class="c-common-simple">
    <div class="container">
      <template v-for="item of list">
        <h3 class="c-common-simple_title">{{ item.single_title }}</h3>
        <p class="c-common-simple_text">{{ item.single_text }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleText",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">
.c-common-simple {
  @include for-width(-tablet-lg) {
    padding:0 rem(30);
  }
  @include for-width(-small-lg) {
    padding:0 rem(20);
  }
  & .container {
    border-radius:rem(20);
    background-color:$black_blue_light;
    padding: rem(54) rem(165) rem(60);
    @extend %t-center;
    @include for-width(-laptop) {
      padding: rem(35) rem(100) rem(40);
    }
    @include for-width(-tablet) {
      padding: rem(35) rem(50) rem(40);
    }
    @include for-width(-small-lg) {
      padding: rem(35);
    }
  }
  &_title {
    @extend %h3-common;
    color:$white;
    margin-bottom:rem(10);
    @include for-width(-small-lg) {
      font-size: rem(30);
      line-height: rem(36);
      padding-bottom:rem(15);
    }
  }
  &_text {
    @extend %p-big-common;
  }
}
</style>