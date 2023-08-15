<template>
<div class="c-glossary">
    <img class="c-glossary_before" src="/img/build-pkt-logo.svg" alt="PKT" />
    <div class="container">
		<h2 class="c-glossary__title">{{ $t("build.glossary_heading") }}</h2>
		<p class="c-glossary__text">{{ $t("build.glossary_text_01") }}</p>
		<p class="c-glossary__text">{{ $t("build.glossary_text_03") }}</p>
		
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
  padding: rem(100) rem(25) rem(100);
  position:relative;
  @include for-width(-small-lg) {
    padding: rem(75) rem(25) rem(75);
  }
  &_before {
    position:absolute;
    top:-60px;
    width:rem(125);
    right:5vw;
    display:block;
    @include for-width(+desktop-hg) {
      width:rem(150);
    }
    @include for-width(-laptop) {
      width:rem(100);
      top:-50px;
    }
    @include for-width(-small-lg) {
      width:rem(75);
      top:-35px;
    }
  }
  .container {
    width: 100%;
    max-width: rem(825);
    margin: 0 auto;
  }

  &__title {
    @extend %heading_internal;
    @extend %heading-gradient-light;
    @extend %t-center;
    padding-bottom:rem(50);
    @include for-width(-small-lg) {
      padding-bottom:rem(35);
    }
  }
  &__text {
     @extend %pn_large;
     color:$white;
     @extend %t-center;
     padding-bottom:rem(35);
     @include for-width(-small-lg) {
      padding-bottom:rem(15);
    }
  }
  &__item {
    margin-bottom: rem(15);
    border:1px solid transparent;
    border-radius: 10px;
    position:relative;
    &:before {
      content:'';
      border:1px solid transparent;
      border-radius: 10px;
      background:linear-gradient(113.63deg, #201B52 23.53%, #3CADEF 93.13%, #3CADEF 93.13%);
      -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      width: 100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:0;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.19);
    }
    .vsa-item__heading {
      z-index:1;
      position:relative;
    }
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
    --vsa-text-color: #fff;
    --vsa-highlight-color: transparent;
    --vsa-bg-color: transparent;
    --vsa-border-color: transparent;
    --vsa-border-width: 1;
    --vsa-border-radius: 10px;
	  --vsa-content-padding: 0;
    --vsa-default-icon-size: .35;
    @include for-width(-small-lg) {
      --vsa-default-icon-size: .25;
    }
  }
  .vsa-item__trigger .vsa-item__trigger__icon--is-default:after,
  .vsa-item__trigger .vsa-item__trigger__icon--is-default:before,
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before {
    background-color: #fff;
  }
  .vsa-item__trigger__content {
    @extend %pn;
    color:$white;
    margin:0;
  }
  .vsa-item__content {
    @extend %pn;
    color:$white;
  }
  .vsa-item__content p {
	  padding: rem(12) rem(20);
    @include for-width(-small-lg) {
       padding: rem(7) rem(15);
    }
  }
  .c-glossary__item span {
    color:$white;
  }
  .vsa-item--is-active .vsa-item__trigger__icon--is-active span {
    color:$light_blue_new;
  }
  .vsa-item__trigger {
	  padding: rem(12) rem(20);
    @include for-width(-small-lg) {
       padding: rem(7) rem(15);
    }
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