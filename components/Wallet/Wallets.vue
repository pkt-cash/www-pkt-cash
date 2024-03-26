<template>
  <div class="v-wallet-section_options">
    <template>
		<div v-for="(item, index) of list" class="c-options_single" :id="item.id" :key="index">
			<p class="c-options_single__title">{{ item.heading }}</p>
			<div class="c-options_single_inner">
				<div class="c-options_single_inner__img_wrap" :style="item.bg_color"></div>
				<div class="c-options_single_inner__content_wrap">
					<h3 class="c-options_single_inner_title">{{ item.title }}</h3>
					<p class="c-options_single_inner_content">{{ item.content }}</p>
					<template v-if="item.dropdown === true">
					<div class="c-options_single_drop">
						<a class="c-common-button c-common-button__bordered" @click="showWallet = showWallet === index ? null : index" :class="{ active: showWallet }"><span>Install</span></a>
						<transition name="slide">
							<ul class="nested-drop" v-if="showWallet === index">
							<li v-for="(item, index) of item.children" :key="index">
								<div @click="closeWallet">
									<a :href="item.link" target="_blank" class="c-footer__menu-link">{{ item.name }}</a>
								</div>
							</li>
							</ul>
						</transition>
					</div>
					</template>
					<template v-else>
						<a :href="item.button_link" target="_blank" class="c-common-button c-common-button__bordered"><span>Install</span></a>
					</template>
				</div>
			</div>
		</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Wallets",
  props: {
    list: Array,
	dropdown: Boolean,
  },
  data() {
    return {
      showWallet: false,
  	}
  },
  methods: {
	showWalletLinks() {
      this.showWallet = !this.showWallet;
    },
    closeWallet() {
      this.showWallet = !this.showWallet;
	}
  }
};
</script>

<style lang="scss">
.v-wallet-section_options {
	@extend %df;
	@extend %jcsb;
	@extend %fw;
	padding-top:rem(100);
	@include for-width(-laptop) {
		padding-top:rem(75);
	}
	@include for-width(-small-lg) {
		display: block;
		padding:0;
	}
	& .c-options_single {
		width:32%;
		@include for-width(-small-lg) {
			width:100%;
		}
		&__title {
			@extend %p-big-common;
			color:$white_50;
			margin-bottom:rem(40);
			@extend %t-left;
			@extend %db;
			@include for-width(-laptop) {
				margin-bottom:rem(25);
			}
			@include for-width(-small-lg) {
				margin-top:rem(28);
				margin-bottom:rem(22);
			}
		}
		&_inner {
			background: $black_blue_light;
			border-radius: rem(20);
			&__content_wrap {
				padding:rem(30) rem(55) rem(30) rem(30);
				@include for-width(-laptop) {
					padding:rem(25) rem(15) rem(25) rem(25);
				}
				@include for-width(-tablet) {
					padding:rem(15) rem(15) rem(15) rem(15);
				}
				@include for-width(-small-lg) {
					padding:rem(25) rem(30) rem(30) rem(30);
				}
			}
			&_title {
				font-size: rem(20);
				@extend %inter_bold;
  				color:$white;
				margin-bottom:rem(10);
				@include for-width(-laptop) {
					font-size: rem(18);
				}
				@include for-width(-small-lg) {
					margin-bottom:rem(4);
				}
			}
			&_content {
				@extend %p-common-thick;
				color:$white_50;
				margin-bottom:rem(12);
				@include for-width(-small-lg) {
					margin-bottom:rem(20);
				}
			}
			&__img_wrap {
				border-top-left-radius:rem(20);
				border-top-right-radius:rem(20);
				height:rem(150);
				@extend %t-center;
				background-repeat:no-repeat;
				background-size:contain;
				background-position:center;
				@include for-width(-laptop) {
					height:rem(125);
				}
				@include for-width(-small-lg) {
					height:rem(150);
				}
			}
		}
		&_drop {
			position:relative;
			& .nested-drop {
				position: absolute;
				top: 100%;
				box-shadow: 0 10px 10px rgba(0,0,0,.25);
				border-radius: rem(15);
				background-color:$light_bg;
				padding: 0 0 rem(15);
				width:100%;
				margin-top:rem(5);
				& li {
					padding:rem(15) rem(20) 0;
					@extend %t-center;
					@include for-width(-small-lg) {
					  padding:rem(10) rem(10) 0;
					}
					& a {
					@extend %pn;
					padding:0;
					@include for-width(-laptop) {
						font-size: rem(14);
					}
					}
				}
			}
		}
	}
	.slide-enter-active {
		transition: all .25s;
		opacity: 1;
	}
	.slide-enter {
		transform: translate(0, 10%);
		opacity: 0;
	}
	.slide-leave-to {
		transform: none;
		opacity:0;
	}
}
</style>