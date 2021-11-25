<template>
  <div class="c-origin-first">
    <div class="container">
      <p class="c-origin-first__text">{{ $t("origin_story.first_section_text_01") }}</p>
      <ul class="c-origin-first__list">
        <li class="c-origin-first__list-item">{{ $t("origin_story.first_section_list_item_01") }}</li>
        <li class="c-origin-first__list-item">{{ $t("origin_story.first_section_list_item_02") }}</li>
      </ul>
      <p class="c-origin-first__text">{{ $t("origin_story.first_section_text_02") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginStoryFirst",
};
</script>

<style lang="scss">
.c-origin-first {
  padding: rem(75) rem(25) rem(55);
  @include for-width(-small-lg) {
    padding: rem(30) rem(25) rem(20);
  }

  .container {
    width: 100%;
    max-width: rem(1040);
    margin: 0 auto;
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
  }

  &__list {
    padding-left: rem(108);
    margin: rem(30) 0 rem(40);
    @include for-width(-tablet) {
      padding-left: rem(21);
      margin: rem(20) 0 rem(30);
    }

    &-item {
      @extend %text-main;
      margin-bottom: rem(30);
      @include for-width(-tablet) {
        margin-bottom: rem(20);
      }
      color: $dark_blue;
      position: relative;

      &::after {
        position: absolute;
        top: rem(13);
        left: rem(-30);
        transform: translateY(-50%);
        display: block;
        content: "";
        width: rem(10);
        height: rem(10);
        background-color: $hard_blue;
        border-radius: 50%;
        @include for-width(-small-lg) {
          top: rem(10);
          left: rem(-20);
          width: rem(8);
          height: rem(8);
        }
      }
    }
  }
}
</style>