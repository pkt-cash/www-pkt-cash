<template>
	<div class="c-projects">
		<template v-for="item of list">
			<div class="c-projects-single">
				<div class="c-projects-single__img" :style="item.img_style"><a :href="item.project_link" target="_blank"><img :src="item.img_url" :alt="item.title" :style="item.img_style" /></a></div>
				<div class="c-projects-single__content">
					<p class="c-projects-single__content_title"><a :href="item.project_link" target="_blank">{{ item.title }}</a></p>
					<p class="c-projects-single__content_descr"><a :href="item.project_link" target="_blank">{{ item.descr }}</a></p>
				</div>
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
.c-projects {
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 0 rem(20);
	grid-template-rows: max-content 1fr;
	padding:rem(50);
	border-radius:rem(20);
    background-color:rgba(255,255,255,0.15);
	@include for-width(-laptop) {
		-ms-grid-columns: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: rem(20) rem(20);
		padding:rem(35);
	}
	@include for-width(-small-lg) {
		border-radius:0;
		padding:rem(20);
		-ms-grid-columns: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
	}
	&-single {
		border-radius:rem(20);
		background-color:rgba(255,255,255,0.15);
		&__img {
			height:rem(120);
			border-top-left-radius:rem(20);
			border-top-right-radius:rem(20);
			@extend %df;
			@extend %jcc;
			@extend %aic;
			img {
				width:rem(90);
				height:rem(84);
				object-fit:contain;
            	object-position:center;
			}
		}
		&__content {
			padding:rem(12) rem(20) rem(25) rem(20);
			border-bottom-left-radius:rem(20);
			border-bottom-right-radius:rem(20);
			@include for-width(-desktop-med) {
				padding:rem(10) rem(15) rem(20);
			}
			@include for-width(-laptop) {
				padding:rem(12) rem(65) rem(25) rem(20);
			}
			@include for-width(-tablet) {
				padding-right:rem(20);
			}
			@include for-width(-small-lg) {
				padding:rem(12) rem(20) rem(28);
			}
			&_title {
				@extend %p-common-bold;
				padding-bottom:rem(5);
				& a {
					color:#fff;
				}
			}
			&_descr {
				@extend %p-common;
				line-height: rem(24);
				& a {
					color:$white_50;
				}
			}
		}
	}
}
</style>
