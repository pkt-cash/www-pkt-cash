<template>
  <div class="c-community-contact">
    <div class="container">
      <h1 class="c-community-contact__title">Contact us</h1>
      <form @submit.prevent="send_data" class="c-community-contact__form">
        <input type="text" placeholder="Name:" v-model="form.name" class="c-community-contact__input" />
        <input type="email" placeholder="Email:" v-model="form.email" class="c-community-contact__input" />
        <input type="text" placeholder="Subject:" v-model="form.subject" class="c-community-contact__input" />
        <textarea placeholder="Message:" v-model="form.message" class="c-community-contact__textarea"></textarea>
        <figure class="c-community-contact__captcha">
          <vue-recaptcha sitekey="6Ldy38MZAAAAANoF7QlOq6WhDf2iVX1xHXh-p_vq" :loadRecaptchaScript="true"></vue-recaptcha>
        </figure>
        <button type="submit" class="c-community-contact__button blue-btn">Send Message</button>
        <div class="c-community-contact__status">
          <template v-if="status === 'sending'">
            Sending in process ...
          </template>
          <template v-if="status === 'ok'">
            Thanks, we'll get back to you soon
          </template>
          <template v-if="status === 'error'">
            Something went wrong, please try again.
          </template>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
export default {
  name: "CommunityContact",
  components: {
    VueRecaptcha
  },
  props: {
    title: String,
    text: String,
    list: Array,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      status: null
    }
  },
  methods: {
    async send_data() {
      this.status = 'sending';
      try {
        const test = await this.$axios.post('https://pkt.cash/contact-api/submit', this.form);
        this.status = 'ok';
      } catch (e) {
        this.status = 'error';
      }

    }
  },
};
</script>

<style lang="scss">
.c-community-contact {
  padding: rem(100) rem(15);

  .container {
    width: 100%;
    max-width: rem(748);
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
    padding: rem(16) rem(33) rem(17);
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

    & img {
      max-width: 100%;
    }
  }

  &__status {
    @extend %text-main;
    color: $black;
    margin-top: rem(15);
  }
}
</style>
