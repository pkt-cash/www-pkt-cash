<template>
  <div class="v-faq">
    <section class="v-header-section">
      <SpotAInternal title="FAQ" />
    </section>
    <section class="v-faq-inner">
      <div class="container">
        <div class="v-faq-inner_box">
          <VueFaqAccordion :items="faqItems" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpotAInternal from "~/components/Common/SpotAInternal";
import VueFaqAccordion from 'vue-faq-accordion';
export default {
  components: {
    SpotAInternal,
    VueFaqAccordion
  },
  data() {
    return {
      faqItems: [
				{
					title: "What is PKT?",
					value: "PKT is a DePIN cryptocurrency project on the Base blockchain. The native cryptocurrency is called PKT Cash, which is uses a stake-to-earn protocol. To earn daily yields, anyone can stake PKT Cash and pair it with an infrastructure node. This infrastructure is used to build and support a global media network powered by the people."
				},
				{
					title: "What is PKT Cash?",
					value: "text"
				},
        {
					title: "What is staking?",
					value: "text"
				},
        {
					title: "What is a liquidity pool?",
					value: "text"
				},
        {
					title: "What is Infrastructure Day?",
					value: "text"
				},
        {
					title: "How do I claim my airdrop?",
					value: "text"
				},
        {
					title: "What wallet should I use for PKT Cash?",
					value: "text"
				},
        {
					title: "How do I access the PKT Network?",
					value: "text"
				},
        {
					title: "What is a VPN?",
					value: "text"
				},
        {
					title: "How can I use PKT VPN?",
					value: "text"
				},
        {
					title: "What is wifi sharing?",
					value: "text"
				},
        {
					title: "What is cjdns?",
					value: "text"
				},
        {
					title: "What is BIA?",
					value: "text"
				},
        {
					title: "What is the Network Steward?",
					value: "text"
				},
        {
					title: "Is PKT still a mined coin?",
					value: "text"
				},
        {
					title: "Where can I go to ask questions?",
					value: "text"
				},
			]
    };
  },
  head() {
    return {
      title: "FAQ - PKT",
      meta: [{ hid: "description", name: "description", content: "Explore the PKT Network" }],
      link: [
        {
          rel: 'canonical',
          href: 'https://pkt.cash' + this.$route.path
        }
      ]
    };
  },
};
</script>
<style lang="scss">
.v-faq {
  background-color:$black_blue;
  position:relative;
  &:before {
    content:'';
    background-image:url(/img/faq-before.webp);
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:rem(1500);
    background-position:left top;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:1;
    @include for-width(-small-lg) {
      height:rem(1300);
      background-size:cover;
      top:auto;
      bottom:0;
      background-position:left bottom -150px;
    }
  }
  & > section {
    z-index:3;
    position:relative;
  }
  & .c-spot-a-internal {
    padding:rem(165) 0 0;
    @include for-width(-small-lg) {
      padding:rem(90) 0 rem(15);
    }
  }
  & .v-faq-inner {
    padding-bottom:rem(90);
    @include for-width(-small-lg) {
      padding-bottom:rem(80);
    }
    & .container {
      @extend %t-right;
      @include for-width(-tablet-lg) {
        text-align:left;
      }
    }
    & .faq {
      padding:0;
    }
    &_box {
      width:100%;
      max-width:rem(840);
      display:inline-block;
      @include for-width(-tablet-lg) {
        max-width:100%;
      }
      & .accordion {
        border:0;
        margin:0;
        &__item {
          border-bottom:rem(1) solid rgba(217,217,217,.2);
        }
        &__title {
          padding-left:0;
          padding-right:0;
          @include for-width(-small-lg) {
            padding:rem(20) 0;
          }
          &-text {
            @extend %h3-common;
            @extend %t-left;
            font-size: rem(36);
            line-height: rem(46);
            @include for-width(-desktop-medium) {
              font-size: rem(34);
              line-height: rem(44);
            }
            @include for-width(-small-lg) {
              font-size: rem(18);
              line-height: rem(36);
            }
          }
        }
        &__toggle-button {
          background-image:url(/img/common/icons/arrow-right-circle.svg);
          background-position:center center;
          background-size:contain;
          background-repeat:no-repeat;
          width:rem(32);
          height:rem(32);
          @include for-width(-desktop-medium) {
            width:rem(26);
            height:rem(26);
          }
          &:before {
            display:none;
          }
          &:after {
            display:none;
          }
          &_active {
            transform: rotate(90deg);
          }
        }
        &__value {
          padding-left:0;
          padding-bottom:rem(65);
          @include for-width(-tablet) {
            padding-bottom:rem(45);
          }
          @include for-width(-small-lg) {
            padding-bottom:rem(35);
          }
          & div {
            @extend %p-big-common;
            max-width:rem(660);
            @extend %t-left;
            @include for-width(-small-lg) {
              max-width:100%;
            }
          }
        }
      }
    }
  }
}
</style>