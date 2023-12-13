<template>
	<div class="c-images">
		<template v-for="item of list">
			<div class="c-images-single">
				<img :src="item.img_url" :alt="item.single_alt" :width="item.img_width" :height="item.img_height" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
  name: "ImgBlock",
  props: {
    list: Array,
  },
  computed: {
    is_mobile() {
      return process.client ? window.innerWidth < 767 : false;
    },
  }
};
</script>

<style lang="scss">
.c-images {
	@extend %df;
	@extend %jcc;
	@extend %aic;
	@include for-width(-small-lg) {
		display:block;
	}
	&-single {
		@include for-width(-small-lg) {
			display:inline-block;
		}
		& img {
			width:100%;
			height:100%;
			object-fit:contain;
			object-position: center;
		}
	}
}
</style>
