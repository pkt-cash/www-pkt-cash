<template>
  <div class="v-wallet-section_options">
    <template>
		<div v-for="(item, index) of list" class="c-options_single" :id="item.id" :key="index">
			<img :src="item.img" :alt="item.title" class="c-options_single_img" />
			<h3 class="c-options_single_title">{{ item.title }}</h3>
			<p class="c-options_single_content">{{ item.content }}</p>
			<template v-if="item.dropdown === true">
			 <div class="c-options_single_drop">
				<a class="btn_blue_new button_new" @click="showWallet = showWallet === index ? null : index" :class="{ active: showWallet }"><span>{{ item.button_label }}</span></a>
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
				<a :href="item.button_link" target="_blank" class="btn_blue_new button_new"><span>{{ item.button_label }}</span></a>
			</template>
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
		@include for-width(+desktop-medium) {
			padding:rem(20) rem(15) rem(25);
		}
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
			@include for-width(+desktop-medium) {
				height:rem(125);
				margin-bottom:rem(15);
			}
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
			@include for-width(+desktop-medium) {
				font-size: rem(20);
  				line-height:rem(32);
			}
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
			@include for-width(+desktop-medium) {
				margin-bottom:rem(15);
			}
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
			@include for-width(-desktop-medium) {
				padding:rem(12) rem(10);
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