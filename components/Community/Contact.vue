<template>
  <div class="c-community-contact">
    <div class="container">
      <h1 class="c-community-contact__title">Contact us</h1>
      <form class="c-community-contact__form">
        <input type="text" placeholder="Name:" class="c-community-contact__input" />
        <input type="email" placeholder="Email:" class="c-community-contact__input" />
        <input type="text" placeholder="Subject:" class="c-community-contact__input" />
        <textarea placeholder="Message:" class="c-community-contact__textarea"></textarea>
        <figure class="c-community-contact__captcha">
          <img src="/img/captcha.jpg" alt />
        </figure>
        <button type="submit" class="c-community-contact__button blue-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityContact",
  props: {
    title: String,
    text: String,
    list: Array,
  },
};
</script>

<style lang="scss">
.c-community-contact {
  padding: rem(100) rem(15);

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    margin-bottom: rem(80);
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__textarea,
  &__input {
    @extend %regular;
    @include font_sizes(17, 27);
    width: 100%;
    padding: rem(16) rem(25);
    margin-bottom: rem(30);
    background-color: $light_blue;
    border-radius: rem(20);
    border: none;
    filter: drop-shadow(4px 4px 10px rgba(25, 25, 68, 0.1));

    &::placeholder {
      color: $dark_blue;
    }
  }

  &__textarea {
    height: rem(250);
    resize: none;
  }

  &__captcha {
    margin-bottom: rem(50);
  }
}
</style>