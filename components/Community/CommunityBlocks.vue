<template>
	<div class="container">
	<template v-for="item of list">
		<div class="c-community-blocks_single" :style="item.bg_img" :class="item.align_side">
			<div class="c-community-blocks_single_inner">
				<h4 class="c-community-blocks_single_inner__title">{{ item.block_title }}</h4>
				<p class="c-community-blocks_single_inner__descr">{{ item.block_descr }}</p>
			</div>
			<a :href="item.block_url" target="_blank" class="c-community-blocks_single__url c-common-button c-common-button__filled">Learn more</a>
		</div>
	</template>
	</div>
</template>

<script>
export default {
  name: "CommunityBlocks",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">
.c-community-blocks_single {
	@extend %df;
	@extend %jcsb;
	@extend %aic;
	background-color:$black_blue_light;
	border-radius:rem(20);
	background-position:left center;
    background-size:contain;
    background-repeat:no-repeat;
	padding:rem(35) rem(30) rem(30) rem(50);
	@include for-width(-desktop-medium) {
		padding:rem(25) rem(20) rem(25) rem(35);
	}
	@include for-width(-tablet) {
		margin-bottom:rem(20);
	}
	@include for-width(-small-lg) {
		display:block;
		padding:rem(30) rem(35);
		text-align:center;
		background-size:25%;
	}
	&_inner {
		width:rem(300);
		@include for-width(-laptop) {
			max-width:60%;
		}
		@include for-width(-small-lg) {
			width:100%;
			max-width:100%;
		}
		&__title {
			@extend %p-big-common-thick;
		}
		&__descr {
			@extend %p-common-thick;
			@include for-width(-small-lg) {
				color:$white_50;
				margin-top:rem(5);
			}
		}
	}
	&__url {
		width:rem(150);
		@include for-width(-small-lg) {
			margin-top:rem(25);
			width:rem(160);
		}
	}
}
</style>
