<template>
	<div class="c-projects-eco">
		<template v-for="item of list">
			<div class="c-projects-eco-single">
				<a class="c-projects-eco-single__logo" :href="item.projects_link" target="_blank" :style="item.style"><img :src="item.img_url" :alt="item.title" :style="item.img_style" /></a>
				<p class="c-projects-eco-single__title"><a :href="item.projects_link" target="_blank">{{ item.title }}</a></p>
			</div>
		</template>
	</div>
</template>

<script>
export default {
  name: "ProjectBlock",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">
.c-projects-eco {
	@extend %df;
	@extend %jcs;
	@extend %ais;
	@include for-width(-small-lg) {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: rem(35) rem(20);
	}
	&-single {
		@extend %t-center;
		margin-right:rem(60);
		@include for-width(-desktop-med) {
			margin-right:rem(40);
		}
		@include for-width(-laptop) {
			margin-right:rem(25);
		}
		@include for-width(-small-lg) {
			margin:0;
		}
		&:last-child {
			margin-right:0;
		}
		&__logo {
			border-radius:rem(15);
			width:rem(100);
			height:rem(100);
			@extend %df;
			@extend %jcc;
			@extend %aic;
			@include for-width(-laptop) {
				width:rem(80);
				height:rem(80);
			}
			@include for-width(-small-lg) {
				margin:0 auto;
			}
			& img {
				border-radius:rem(15);
				width:rem(60);
				@include for-width(-laptop) {
					width:rem(50);
				}
			}
		}
		&__title {
			@extend %p-common;
			margin:rem(10) 0 0;
			& a {
				color:$white;
			}
		}
	}
}
</style>
