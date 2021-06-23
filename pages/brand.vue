<template>
  <div class="v-trademark">
    <section class="v-trademark-section-top">
      <SimpleHeader mobile_img="" title="Brand Assets" subtitle="" bg="" />
    </section>
    <section class="v-brand-section">
		<div class="container">
			<p class="v-brand-section__text">Download the logo and other brand assets samples <a href="PKT-brand-assets.zip">here</a>.</p>
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
      title: "Trademark - PKT",
      meta: [{ hid: "description", name: "description", content: "The world’s first bandwidth-hard blockchain protocol, built to incentivize the growth of infrastructure." }],
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
.v-trademark-section-top {
	& .c-simple-header {
		padding: rem(150) 0 rem(50);
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
