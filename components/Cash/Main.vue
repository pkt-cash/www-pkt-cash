<template>
  <div class="c-cash-main">
    <div class="container">
      <p class="c-cash-main__text">{{ $t("cash.main_text_1") }}</p>
      <figure class="c-cash-main__grafic">
        <img src="/img/cash-grafic.png" alt class="c-cash-main__grafic-img" />
        <figcaption class="c-cash-main__grafic-caption">{{ $t("cash.main_caption") }}</figcaption>
      </figure>
      <p class="c-cash-main__text">{{ $t("cash.main_text_2") }}</p>
      <p class="c-cash-main__text">{{ $t("cash.main_text_3") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashMain",
  props: {
    title: String,
    text: String,
    bg: String,
  },
};
</script>

<style lang="scss">
.c-cash-main {
  padding: rem(100) rem(15) rem(50);

  & .container {
    width: 100%;
    max-width: rem(1075);
    margin: 0 auto;
  }

  &__text {
    @extend %text-main;
    color: $dark_blue;


    &:not(:last-child) {
      margin-bottom: rem(28);
    }

    & br {
      height: rem(50);
    }
  }

  &__grafic {
    margin-top: rem(75);
    margin-bottom: rem(100);
    width: 100%;

    &-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &-caption {
      width: 100%;
      margin-top: rem(33);
      text-align: center;
      @extend %light;
      @include font_sizes(24, 35);
      @include for-width(-tablet) {
        @include font_sizes(14, 24);
      }
    }
  }
}
</style>
