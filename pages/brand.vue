<template>
  <div class="v-brand">
    <section class="v-brand-section-top">
      <SimpleHeader mobile_img="" :title="this.$t('brand.image_alt')" subtitle="" bg="" />
    </section>
    <section class="v-brand-section">
		<div class="container">
			<p class="v-brand-section__text">{{ $t("brand.download_assets") }} <a href="https://pkt.cash/PKT-brand-assets-logos.zip">{{ $t("brand.here") }}</a>.</p>
			<p class="v-brand-section__text">{{ $t("brand.see_trademark") }} <a :href="localePath('trademark')">{{ $t("brand.here") }}.</a></p>
		</div>
    </section>
  </div>
</template>

<script>
import SimpleHeader from "~/components/Base/SimpleHeader";

export default {
  components: {
    SimpleHeader,
  },
  head() {
    return {
      title: this.$t("brand.meta_title"),
      meta: [{ hid: "description", name: "description", content: this.$t("brand.meta_descr") }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>

<style lang="scss">
.v-brand {
	min-height: calc(100vh - 509px);
}
.v-brand-section-top {
	& .c-simple-header {
		padding: rem(200) 0 rem(50);
		min-height: 1px;
		@include for-width(-tablet-lg) {
			padding: rem(75) 0 rem(50);
		}
		@include for-width(-small-lg) {
			padding: rem(60) 0 rem(25);
			height: auto;
		}
		& .container {
			max-width: rem(1217);
			padding: 0;
			@include for-width(-tablet-lg) {
			  padding: 0 rem(30);
			}
		}
		&__title {
			color: #191944;
			text-align: center;
			max-width: rem(865);
			margin: 0 auto;
		}
	}
}
.v-brand-section {
	& .container {
		width: 100%;
		max-width: rem(1217);
		margin: 0 auto rem(100);
		@include for-width(-tablet-lg) {
			padding: 0 rem(30);
		}
	}
	&__text {
		@extend %text-main;
		color: $dark_blue;
		margin-bottom: rem(20);
		text-align:center;
		@include for-width(-tablet) {
		  margin-bottom: rem(10);
		}
	}
}
</style>
