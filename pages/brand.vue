<template>
  <div class="v-brand">
    <section class="v-header-section">
      <SpotAInternal 
      title="Brand Assets"
       />
    </section>
    <section class="v-brand-section">
		<div class="container">
			<p class="v-brand-section__text">{{ $t("brand.download_assets") }} <a href="https://pkt.cash/PKT-brand-assets-logos.zip" target="_blank">{{ $t("brand.here") }}</a>.</p>
			<p class="v-brand-section__text">{{ $t("brand.see_trademark") }} <a href="https://docs.pkt.cash/copyright" target="_blank">{{ $t("brand.here") }}.</a></p>
		</div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
export default {
  components: {
    SpotAInternal,
  },
  head() {
    return {
      title: "Media Kit | PKT Cash",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t("brand.meta_descr")
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Media Kit | PKT Cash'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t("brand.meta_descr")
        }
      ],
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
  background-color:$black_blue;
  position:relative;
  background-image:url(/img/media-top-asset.webp);
  background-size:rem(750);
  background-position:top right;
  background-repeat:no-repeat;
  @include for-width(-desktop-lg) {
    background-size:rem(600);
  }
  @include for-width(-small-lg) {
    background-size:rem(300);
    background-position:top 50px right -50px;
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    @include for-width(-small-lg) {
      padding-top:rem(100);
	  padding-bottom:rem(50);
    }
  }
  & .v-brand-section {
	min-height:35vh;
	@include for-width(-small-lg) {
		min-height:25vh;
	}
	&__text {
		@extend %p-big-common;
		margin-bottom:rem(25);
		color:$white;
		& a {
			color:$green;
			&:hover {
				color:$green;
			}
			&:focus {
				color:$green;
			}
			&:visited {
				color:$green;
			}
		}
	}
  }
}
</style>