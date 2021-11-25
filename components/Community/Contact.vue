<template>
  <div class="c-community-contact">
    <div class="container">
      <h1 class="c-community-contact__title">{{ $t("contact.contact_title") }}</h1>
      <form @submit.prevent="send_data" class="c-community-contact__form">
        <input type="text" :placeholder="this.$t('contact.form_name')" v-model="form.name" class="c-community-contact__input" />
        <input type="email" :placeholder="this.$t('contact.form_email')" v-model="form.email" class="c-community-contact__input" />
        <input type="text" :placeholder="this.$t('contact.form_subject')" v-model="form.subject" class="c-community-contact__input" />
        <textarea :placeholder="this.$t('contact.form_message')" v-model="form.message" class="c-community-contact__textarea"></textarea>
        <figure class="c-community-contact__captcha">
          <vue-recaptcha @verify="varify_capcha" sitekey="6LdbwccZAAAAAFLFVcSpE6GvrrAcT9u3jWybD7OW" :loadRecaptchaScript="true"></vue-recaptcha>
        </figure>
        <button :disabled="!valid" type="submit" class="c-community-contact__button blue-btn">{{ $t("contact.form_submit") }}</button>
        <div class="c-community-contact__status">
          <template v-if="status === 'sending'">
            {{ $t("contact.form_sending") }}
          </template>
          <template v-if="status === 'ok'">
            {{ $t("contact.form_status_ok") }}
          </template>
          <template v-if="status === 'error'">
            {{ $t("contact.form_status_error") }}
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
      status: null,
      valid: null,
    }
  },
  methods: {
    varify_capcha(res) {
      this.valid = res
    },
    async send_data() {
      this.status = 'sending';
      try {
        const sed_request = await this.$axios.post('https://pkt.cash/contact-api/submit', this.form);
        console.log(sed_request);
        this.status = 'ok';
        this.form.name = null;
        this.form.email = null;
        this.form.subject = null;
        this.form.message = null;
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

  &__button {
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &__status {
    @extend %text-main;
    color: $black;
    margin-top: rem(15);
  }
}
</style>
