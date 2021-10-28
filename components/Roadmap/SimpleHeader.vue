<template>
  <div class="c-simple-header_road">
    <div class="container">
	  <div class="desktop"><RoadmapDesktop/></div>
		<div class="mobile"><RoadmapMobile/></div>
	  <div class="c-advantage__btn-wrapper"><a v-scroll-to="'#glossary'" class="c-advantage__link-more blue-btn-arrow"><span>{{ cta_title }}</span></a></div>
    </div>
  </div>
</template>

<script>
import RoadmapDesktop from "~/components/RoadmapDesktop";
import RoadmapMobile from "~/components/RoadmapMobile";
export default {
  name: "SimpleHeader",
  props: {
	cta_title: String
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 1024 : false;
    },
    bg_image() {
      return !!this.mobile_img && this.is_mobile ? this.mobile_img : this.bg;
    }
  },
};
</script>

<style lang="scss">
.c-simple-header_road {
  padding: 3rem 0;
  min-height: 30vw;
  color: $light_blue;
  background-color: #0f1541;

  & .container {
    width: 100%;
    max-width: rem(1118);
    margin: 0 auto;
    padding:0;
    @include for-width(-desktop-med) {
      padding: 0 rem(25);
    }
  }
  & .c-advantage__btn-wrapper {
	text-align: center;
  }
  & .c-advantage__link-more {
	background-color: #3CADEF !important;
    padding-right: 2.125rem;
    border-color: #3CADEF;
    background-image: none;
  }
  & svg text.st2 {
	cursor:pointer;
  }
  & .mobile {
	display:none;
  }
  @include for-width(-tablet) {
		.c-advantage__text {
			margin: 0;
		}
		& .mobile {
			display:block;
		}
		& .desktop {
			display:none;
		}
		& .mobile svg {
			max-width: 100%;
			height: auto;
		}
  }
}
</style>
