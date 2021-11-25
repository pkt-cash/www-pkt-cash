<template>
<div class="c-glossary">
    <div class="container">
		<h1 class="c-glossary__title">{{ $t("roadmap.glossary_heading") }}</h1>
		<p class="c-glossary__text">{{ $t("roadmap.glossary_text_01") }}</p>
		<p class="c-glossary__text">{{ $t("roadmap.glossary_text_02") }}</p>
		<p class="c-glossary__text">{{ $t("roadmap.glossary_text_03") }}</p>
		
		<vsa-list :init-active="false" :auto-collapse="true">
		  <vsa-item v-for="item of accordion_list" :key="item.id" :id="item.id" class="c-glossary__item">
			<vsa-heading>
			  <span>{{ item.heading }}</span>
			</vsa-heading>
			<vsa-content>
			  <p v-html="item.content"></p>
			</vsa-content>
		  </vsa-item>
		</vsa-list>
	</div>
</div>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} 
from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  name: "Glossary",
  props: {
    accordion_list: Array,
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  }
};
</script>
<style lang="scss">
.c-glossary {
  padding: rem(100) rem(25) rem(82);
  @include for-width(-small-lg) {
    padding: rem(25) rem(25) rem(21);
  }

  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %h1-title;
    color: $dark_blue;
    margin-bottom: rem(39);
    @include for-width(+ small-lg) {
      text-align: center;
      margin-bottom: rem(50);
    }
  }

  &__text {
    margin-bottom: rem(20);
	@extend %text-main;
  }
  &__list {
	
  }
  &__item {
    margin-bottom: rem(15);
    border: 1px solid #C5C7D3;
    border-radius: 6px;
    & span {
      color: $hard_blue;
	  display: block;
    }
  }
  .d {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: rem(96);
    @include for-width(-tablet) {
      margin-top: rem(30);
    }
  }
  &__btn {
    display: block;
    width: rem(231);
  }
  & .vsa-list {
	--vsa-max-width: 100%;
    --vsa-min-width: 1px;
    --vsa-heading-padding: 0;
    --vsa-text-color: #191944;
    --vsa-highlight-color: #fff;
    --vsa-bg-color: #fff;
    --vsa-border-color: transparent;
    --vsa-border-width: 1;
	--vsa-content-padding: 0;
    --vsa-default-icon-size: .3;
  }
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before {
    background-color: #3cadef;
  }
  .vsa-item__trigger__content {
	@extend %text-main;
  }
  .vsa-item__content {
    @extend %text-main;
  }
  .vsa-item__content p {
	padding: 13px 20px;
  }
  .vsa-item__trigger {
	padding: 13px 20px;
  }
  .vsa-item--is-active .vsa-item__heading, .vsa-item:not(:last-of-type) {
	border-bottom: 1px solid #C5C7D3;
  }
  .vsa-item__trigger:focus, .vsa-item__trigger:hover {
	border-radius: 6px;
  }
  .vsa-item__trigger[aria-expanded=true] .vsa-item__trigger__icon--is-default:before {
    transform: rotate(225deg) translate3d(8px,-5px,0);
  }
  .vsa-item__trigger[aria-expanded=true] .vsa-item__trigger__icon--is-default:after {
    transform: rotate(-225deg) translate3d(-8px,-5px,0);
  }
  .vsa-item__trigger__icon--is-default:after, .vsa-item__trigger__icon--is-default:before {
	transition: none;
  }
}
</style>