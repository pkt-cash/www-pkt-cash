<template>
  <div class="v-wallet-section_options">
    <template v-for="item of list">
		<div class="c-options_single" :id="item.id">
			<img :src="item.img" :alt="item.title" class="c-options_single_img" />
			<h3 class="c-options_single_title">{{ item.title }}</h3>
			<p class="c-options_single_content">{{ item.content }}</p>
			<a :href="item.button_link" target="_blank" class="btn_blue_new button_new" :class="{ 'c-options_single_disabled': item.is_disabled }"><span>{{ item.button_label }}</span></a>
		</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Wallets",
  props: {
    list: Array,
	is_disabled: Boolean
  }
};
</script>

<style lang="scss">
.v-wallet-section_options {
	@extend %df;
	@extend %jcsb;
	@extend %fw;
	@include for-width(-small-lg) {
		display: block;
	}
	& .c-options_single {
		@extend %df;
		@extend %jcsb;
		@extend %aic;
		@extend %fdc;
		width:32.333%;
		background: $light_bg;
		padding:rem(40) rem(30) rem(45);
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
		@include for-width(-tablet-lg) {
			padding:rem(30) rem(15) rem(45);
		}
		@include for-width(-small-lg) {
			width:100%;
			margin-bottom:rem(35);
			padding:rem(25) rem(30) rem(50);
		}
		&_img {
			height:rem(175);
			width:auto;
			max-width:rem(165);
			margin-bottom:rem(35);
			@include for-width(-tablet) {
				height:rem(125);
				margin-bottom:rem(10);
			}
			@include for-width(-small-lg) {
				height:rem(150);
				margin-bottom:rem(25);
			}
		}
		&_title {
			@extend %heading-super-small;
			margin-bottom:rem(10);
			@include for-width(-small-lg) {
				font-size: rem(24);
        		line-height: rem(36);
				font-family: "Poppins-SemiBold", sans-serif;
			}
		}
		&_content {
			@extend %pn;
			max-width:75%;
			margin:0 auto rem(30);
			@include for-width(-tablet) {
				max-width:100%;
				margin:0 auto rem(15);
			}
			@include for-width(-small-lg) {
				margin-bottom:rem(35);
			}
		}
		& .button_new {
			@extend %btn-new;
    		@extend %btn_blue_new;
			display:inline-block;
			@include for-width(-desktop-lg) {
				width:80%;
			}
			@include for-width(-tablet-lg) {
				width:90%;
			}
			@include for-width(-tablet) {
				width:100%;
			}
			@include for-width(-small-lg) {
				width:auto;
				padding:rem(10) rem(35);
			}
		}
		&_disabled.button_new {
			background-color: #D0CEDA;
			cursor: not-allowed;
			&:hover {
				background-color: #D0CEDA;
			}
		}
	}
}
</style>
