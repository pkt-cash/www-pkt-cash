<template>
<div class="c-glossary">
    <div class="container">
		<h1 class="c-glossary__title">Glossary of Terms</h1>
		<p class="c-glossary__text">The PKT roadmap is a non-linear roadmap based on gating items which unlock capabilities.
			The objective is to reach the Full Paid Net stage where all necessary resources to build a virtual network, including bandwidth, virtual routers, 
			and IP addresses for VPN exit, are able to be leased in the decentralized bandwidth marketplace.</p>
		<p class="c-glossary__text">Projects below are listed in order of their dependencies, with the items having the fewest dependencies first, but this is almost certainly not the order in which the roadmap will be executed because it is more beneficial to do projects in an order which brings valuable capabilities to the PKT community as quickly as possible.</p>
		<p class="c-glossary__text">There are also other items which do not rank here or have their dependencies omitted because their functionality is currently being developed.</p>
		
		<vsa-list :init-active="false" :auto-collapse="true">
		  <vsa-item v-for="item of accordion_list" :key="item.id" :id="item.id" class="c-glossary__item">
			<vsa-heading>
			  <span>{{ item.heading }}</span>
			</vsa-heading>
			<vsa-content>
			  {{ item.content }}
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
  }
  &__list {
	
  }
  &__item {
    margin-bottom: rem(15);
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
    --vsa-border-width: 0;
	--vsa-content-padding: 0 0 1rem;
    --vsa-default-icon-size: .3;
  }
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after, 
  .vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before {
    background-color: #3cadef;
  }
  .vsa-item__trigger__content {
	font-size: 1rem;
  }
}
</style>