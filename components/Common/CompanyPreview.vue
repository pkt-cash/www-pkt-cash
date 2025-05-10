<template>
  <div class="container v-network_inner">
	<template v-for="item of list">
		<div class="v-network_inner_single" :class="item.unique_class">
			<div class="v-network_inner_single__img">
				<img :src="item.company_img" :alt="item.company_title" />
			</div>
			<div class="v-network_inner_single__content">
				<a :href="item.company_link" target="_blank" class="white"><img :src="item.company_logo_square" :alt="item.company_title" /></a>
				<div class="v-network_inner_single__content_text">
					<h4><a :href="item.company_link" target="_blank" class="white">{{ item.company_title }}</a></h4>
					<p><a :href="item.company_link" target="_blank" class="white">{{ item.company_descr }}</a></p>
				</div>
			</div>
		</div>
	</template>
  </div>
</template>

<script>
export default {
  name: "CompanyPreview",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">
.v-network_inner {
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	grid-gap: rem(40) rem(40);
	@include for-width(-small-lg) {
		display:block;
	}
	&_single {
		border-radius:rem(20);
		background-color:rgba(255,255,255,0.15);
		@include for-width(-small-lg) {
			margin-bottom:rem(60);
		}
		&__img {
			border-top-left-radius:rem(20);
			border-top-right-radius:rem(20);
			height:rem(200);
			@include for-width(-small-lg) {
				height:rem(160);
			}
			& img {
				border-top-left-radius:rem(20);
				border-top-right-radius:rem(20);
				width:100%;
				height:100%;
				object-fit:cover;
				object-position:center;
			}
		}
		&__content {
			padding:rem(30);
			@extend %df;
			@extend %jcs;
			@extend %aic;
			@include for-width(-tablet) {
				padding:rem(20);
			}
			& img {
				width:rem(80);
				margin-right:rem(23);
				@include for-width(-tablet) {
					width:rem(60);
					margin-right:rem(15);
				}
			}
			&_text {
			@include for-width(-tablet) {
				padding-left:rem(20);
			}
			& h4 {
				@extend %p-big-common-bold;
				@include for-width(-small-lg) {
				margin-bottom:rem(5);
				}
			}
			& p {
				@extend %p-common;
				@include for-width(-tablet) {
				line-height: rem(20);
				}
				@include for-width(-small-lg) {
				line-height: rem(24);
				}
			}
			}
		}
	}
}
</style>