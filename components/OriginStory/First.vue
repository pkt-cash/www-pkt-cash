<template>
  <div class="c-origin-first">
    <div class="container">
      <p
        class="c-origin-first__text"
      >PKT was born out of the cjdns project when it was realized that without the financial infrastructure for the network to pay its own bills, it would always remain a hobby. The cjdns project dates back to 2011 and the two basic ideas it brought to the table were:</p>
      <ul class="c-origin-first__list">
        <li
          class="c-origin-first__list-item"
        >Everything should be encrypted, all of the time, no matter what</li>
        <li
          class="c-origin-first__list-item"
        >A packet of data flying across the Internet should not contain the address of its destination, but rather the directions to get there</li>
      </ul>
      <p
        class="c-origin-first__text"
      >Point 1 has become more of a universal norm. However, point 2 remains uncommon in the network space.</p>
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
  padding: rem(75) rem(15);

  .container {
    width: 100%;
    max-width: rem(1100);
    margin: 0 auto;
  }

  &__text {
    @extend %text-main;
    margin-bottom: rem(20);
  }

  &__list {
    padding-left: rem(85);
    margin: rem(30) 0 rem(40);

    &-item {
      @extend %text-main;
      margin-bottom: rem(20);
      color: $dark_blue;
      position: relative;

      &::after {
        position: absolute;
        top: rem(20);
        left: rem(-40);
        transform: translateY(-50%);
        display: block;
        content: "";
        width: rem(10);
        height: rem(10);
        background-color: $hard_blue;
        border-radius: 50%;
      }
    }
  }
}
</style>