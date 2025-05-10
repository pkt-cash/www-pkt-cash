<template>
	<div class="container">
	<template v-for="item of list">
		<div class="c-community-blocks_single">
			<a :href="item.block_url" target="_blank" :title="item.block_title" class="c-community-blocks_single_link"></a>
			<div class="c-community-blocks_single_inner">
				<div class="c-community-blocks_single_inner__icon" :style="item.bg_img"></div>
				<h4 class="c-community-blocks_single_inner__title">{{ item.block_title }}</h4>
			</div>
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
	display:block;
	background-color:$black_blue_light;
	border-radius:rem(20);
	padding:rem(12) rem(25);
	position:relative;
	@include for-width(-desktop-medium) {
		// padding:rem(25) rem(20) rem(25) rem(35);
	}
	@include for-width(-tablet) {
		margin-bottom:rem(20);
	}
	@include for-width(-small-lg) {
		padding:rem(15) rem(5);
		margin-bottom:0;
	}
	&_inner {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0 rem(15);
		@include for-width(-tablet) {
			display:block;
			text-align:center;
		}
		@include for-width(-small-lg) {
			width:100%;
			max-width:100%;
		}
		&__icon {
			background-size:contain;
			background-position:center center;
			background-repeat:no-repeat;
			height:rem(100);
			@include for-width(-small-lg) {
				height:rem(44);
			}
		}
		&__title {
			@extend %p-big-common-thick;
			padding-top:rem(13);
			text-align:left;
			@include for-width(-tablet) {
				text-align:center;
			}
			@include for-width(-small-lg) {
				font-size:12px;
			}
		}
	}
	&_link {
		position:absolute;
		width:100%;
		height:100%;
		display:block;
		z-index:1;
		top:0;
		left:0;
	}
}
</style>
